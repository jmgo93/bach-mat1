from __future__ import annotations

import datetime as dt
import json
from pathlib import Path
from typing import Any

import sympy as sp


ROOT = Path.cwd()
DATA_DIR = ROOT / "data"
x = sp.symbols("x", real=True)
a = sp.symbols("a", real=True)


def to_text(value: Any) -> str:
    if isinstance(value, (list, tuple)):
        return "[" + ", ".join(to_text(item) for item in value) + "]"
    if isinstance(value, dict):
        return "{" + ", ".join(f"{key}: {to_text(item)}" for key, item in value.items()) + "}"
    if isinstance(value, sp.Set):
        return sp.sstr(value)
    if isinstance(value, sp.Basic):
        return sp.sstr(sp.simplify(value))
    return str(value)


def build_result(
    identifier: str,
    check_type: str,
    status: str,
    actual: Any,
    expected: Any,
    note: str,
) -> dict[str, object]:
    return {
        "id": identifier,
        "type": check_type,
        "status": status,
        "actual": to_text(actual),
        "expected": to_text(expected),
        "note": note,
    }


def compare_sets(actual: sp.Set, expected: sp.Set) -> bool:
    return actual == expected


def compare_expressions(actual: sp.Expr, expected: sp.Expr) -> bool:
    if isinstance(actual, (list, tuple, sp.Tuple)) and isinstance(expected, (list, tuple, sp.Tuple)):
        return compare_sequences(list(actual), list(expected))
    return sp.simplify(actual - expected) == 0


def compare_sequences(actual: list[Any], expected: list[Any]) -> bool:
    if len(actual) != len(expected):
        return False
    for left, right in zip(actual, expected, strict=True):
        if isinstance(left, (list, tuple, sp.Tuple)) and isinstance(right, (list, tuple, sp.Tuple)):
            if not compare_sequences(list(left), list(right)):
                return False
        if isinstance(left, sp.Basic) and isinstance(right, sp.Basic):
            if not compare_expressions(left, right):
                return False
        else:
            if left != right:
                return False
    return True


def compare_lines(actual: dict[str, str], expected: dict[str, str]) -> bool:
    if actual["kind"] != expected["kind"]:
        return False
    if actual["kind"] == "vertical":
        return compare_expressions(sp.sympify(actual["x"]), sp.sympify(expected["x"]))
    return (
        compare_expressions(sp.sympify(actual["slope"]), sp.sympify(expected["slope"]))
        and compare_expressions(sp.sympify(actual["intercept"]), sp.sympify(expected["intercept"]))
    )


def slope_intercept(slope: sp.Expr, intercept: sp.Expr) -> dict[str, str]:
    return {
        "kind": "slope_intercept",
        "slope": sp.sstr(sp.simplify(slope)),
        "intercept": sp.sstr(sp.simplify(intercept)),
    }


def vertical_line(x_value: sp.Expr) -> dict[str, str]:
    return {
        "kind": "vertical",
        "x": sp.sstr(sp.simplify(x_value)),
    }


def tangent_line(expr: sp.Expr, x0: sp.Expr) -> dict[str, str]:
    y0 = sp.simplify(expr.subs(x, x0))
    slope = sp.simplify(sp.diff(expr, x).subs(x, x0))
    intercept = sp.simplify(y0 - slope * x0)
    return slope_intercept(slope, intercept)


def normal_line(expr: sp.Expr, x0: sp.Expr) -> dict[str, str]:
    y0 = sp.simplify(expr.subs(x, x0))
    slope = sp.simplify(sp.diff(expr, x).subs(x, x0))
    if sp.simplify(slope) == 0:
        return vertical_line(x0)
    normal_slope = sp.simplify(-1 / slope)
    intercept = sp.simplify(y0 - normal_slope * x0)
    return slope_intercept(normal_slope, intercept)


def smallest_numeric_set(value: sp.Expr) -> str:
    simplified = sp.simplify(value)
    if simplified.is_integer:
        if int(simplified) > 0:
            return "N"
        return "Z"
    if simplified.is_rational:
        return "Q"
    if simplified.is_real:
        return "I"
    return "R"


def decimal_type(value: sp.Rational) -> str:
    denominator = sp.denom(sp.together(value))
    reduced = sp.factorint(denominator)
    if all(prime in (2, 5) for prime in reduced):
        return "exacto"
    if sp.gcd(int(denominator), 10) == 1:
        return "periodico_puro"
    return "periodico_mixto"


def validate_expression(
    identifier: str,
    actual: sp.Expr,
    expected: sp.Expr,
    note: str,
) -> dict[str, object]:
    status = "passed" if compare_expressions(actual, expected) else "failed"
    return build_result(identifier, "expression", status, actual, expected, note)


def validate_set(
    identifier: str,
    actual: sp.Set,
    expected: sp.Set,
    note: str,
) -> dict[str, object]:
    status = "passed" if compare_sets(actual, expected) else "failed"
    return build_result(identifier, "set", status, actual, expected, note)


def validate_classification(
    identifier: str,
    value: sp.Expr,
    expected: str,
    note: str,
) -> dict[str, object]:
    actual = smallest_numeric_set(value)
    status = "passed" if actual == expected else "failed"
    return build_result(identifier, "classification", status, actual, expected, note)


def validate_classification_list(
    identifier: str,
    values: list[sp.Expr],
    expected: list[str],
    note: str,
) -> dict[str, object]:
    actual = [smallest_numeric_set(value) for value in values]
    status = "passed" if actual == expected else "failed"
    return build_result(identifier, "classification_list", status, actual, expected, note)


def validate_decimal_type(
    identifier: str,
    value: sp.Rational,
    expected: str,
    note: str,
) -> dict[str, object]:
    actual = decimal_type(value)
    status = "passed" if actual == expected else "failed"
    return build_result(identifier, "decimal_type", status, actual, expected, note)


def validate_interval_bundle(
    identifier: str,
    actual: dict[str, sp.Set],
    expected: dict[str, sp.Set],
    note: str,
) -> dict[str, object]:
    status = "passed" if all(compare_sets(actual[key], expected[key]) for key in expected) else "failed"
    return build_result(identifier, "interval_bundle", status, actual, expected, note)


def validate_tangent_normal(
    identifier: str,
    expr: sp.Expr,
    x0: sp.Expr,
    expected_tangent: dict[str, str],
    expected_normal: dict[str, str],
    note: str,
) -> dict[str, object]:
    actual_tangent = tangent_line(expr, x0)
    actual_normal = normal_line(expr, x0)
    status = "passed" if compare_lines(actual_tangent, expected_tangent) and compare_lines(actual_normal, expected_normal) else "failed"
    return {
        "id": identifier,
        "type": "tangent_normal_at_point",
        "status": status,
        "x0": sp.sstr(sp.simplify(x0)),
        "tangent": actual_tangent,
        "normal": actual_normal,
        "note": note,
    }


def validate_given_slope(
    identifier: str,
    expr: sp.Expr,
    target_slope: sp.Expr,
    expected_points: list[tuple[sp.Expr, sp.Expr]],
    expected_lines: list[dict[str, str]],
    note: str,
) -> dict[str, object]:
    slope_equation = sp.Eq(sp.diff(expr, x), sp.simplify(target_slope))
    abscissas = sorted(sp.solve(slope_equation, x), key=sp.default_sort_key)
    actual_points = [(sp.simplify(px), sp.simplify(expr.subs(x, px))) for px in abscissas]
    actual_lines = [tangent_line(expr, px) for px in abscissas]
    same_points = compare_sequences(
        [sp.Tuple(px, py) for px, py in actual_points],
        [sp.Tuple(px, py) for px, py in expected_points],
    )
    same_lines = len(actual_lines) == len(expected_lines) and all(
        compare_lines(actual, expected) for actual, expected in zip(actual_lines, expected_lines, strict=True)
    )
    status = "passed" if same_points and same_lines else "failed"
    return {
        "id": identifier,
        "type": "tangent_with_given_slope",
        "status": status,
        "target_slope": sp.sstr(sp.simplify(target_slope)),
        "points": [{"x": sp.sstr(px), "y": sp.sstr(py)} for px, py in actual_points],
        "lines": actual_lines,
        "note": note,
    }


def validate_parameter_case() -> dict[str, object]:
    expr = x**2 + a * x
    solutions = sp.solve(sp.Eq(sp.diff(expr, x).subs(x, 1), 5), a)
    parameter_value = sp.simplify(solutions[0])
    specialized_expr = sp.simplify(expr.subs(a, parameter_value))
    tangent = tangent_line(specialized_expr, 1)
    status = "passed" if parameter_value == 3 and compare_lines(tangent, slope_intercept(5, -1)) else "failed"
    return {
        "id": "PX-C09.S04-06",
        "type": "parameter_and_tangent",
        "status": status,
        "parameter": {"a": sp.sstr(parameter_value)},
        "tangent": tangent,
        "note": "Caso con parametro para imponer paralelismo en x=1.",
    }


def chapter1_results() -> list[dict[str, object]]:
    results: list[dict[str, object]] = []

    results.append(
        validate_classification_list(
            "EX-C01.S01-01",
            [sp.Integer(-7), sp.Rational(1, 8), sp.sqrt(2), sp.sqrt(49)],
            ["Z", "Q", "I", "N"],
            "Clasificacion del ejemplo resuelto del bloque.",
        )
    )
    results.append(validate_classification("GX-C01.S01-01", -sp.sqrt(16) / 2, "Z", "Guiado de entero oculto."))
    results.append(validate_classification("GX-C01.S01-02", sp.Rational(1, 3), "Q", "Guiado con decimal periodico."))
    results.append(validate_classification("PX-C01.S01-01", sp.sqrt(7), "I", "Practica de irracional."))
    results.append(validate_classification("PX-C01.S01-02", sp.Rational(5, 4), "Q", "Practica de racional."))
    results.append(validate_classification("PX-C01.S01-03", -sp.sqrt(81), "Z", "Practica de entero."))
    results.append(validate_classification("PX-C01.S01-04", sp.Integer(0), "Z", "Practica con cero."))
    results.append(validate_classification("PX-C01.S01-05", 2 - sp.sqrt(4), "Z", "Practica con simplificacion previa."))
    results.append(validate_classification("PX-C01.S01-06", sp.Rational(31415, 10000), "Q", "Practica con decimal exacto."))

    results.append(validate_expression("EX-C01.S02-01", sp.Rational(37, 30), sp.Rational(37, 30), "Fraccion generatriz del ejemplo."))
    results.append(validate_expression("GX-C01.S02-01", sp.Rational(2, 11), sp.Rational(2, 11), "Periodico puro guiado."))
    results.append(validate_expression("GX-C01.S02-02", sp.Rational(49, 20), sp.Rational(49, 20), "Decimal exacto guiado."))
    results.append(validate_expression("PX-C01.S02-01", sp.Rational(13, 18), sp.Rational(13, 18), "Practica con decimal mixto."))
    results.append(validate_expression("PX-C01.S02-02", sp.Rational(32, 9), sp.Rational(32, 9), "Practica con periodico puro."))
    results.append(validate_expression("PX-C01.S02-03", sp.Rational(1, 8), sp.Rational(1, 8), "Practica con decimal exacto."))
    results.append(validate_expression("PX-C01.S02-04", sp.Rational(31, 15), sp.Rational(31, 15), "Practica con decimal mixto."))
    results.append(validate_decimal_type("PX-C01.S02-05", sp.Rational(7, 40), "exacto", "Tipo decimal para 7/40."))
    results.append(validate_decimal_type("PX-C01.S02-06", sp.Rational(5, 12), "periodico_mixto", "Tipo decimal para 5/12."))

    interval_a = sp.Interval.Lopen(-3, 2)
    interval_b = sp.Interval(1, sp.oo)
    results.append(
        validate_interval_bundle(
            "EX-C01.S03-01",
            {
                "A": interval_a,
                "B": interval_b,
                "intersection": interval_a.intersect(interval_b),
                "union": interval_a.union(interval_b),
            },
            {
                "A": sp.Interval.Lopen(-3, 2),
                "B": sp.Interval(1, sp.oo),
                "intersection": sp.Interval(1, 2),
                "union": sp.Interval.Lopen(-3, sp.oo),
            },
            "Ejemplo de escritura y combinacion de intervalos.",
        )
    )
    results.append(validate_set("GX-C01.S03-01", sp.Union(sp.Interval.open(-sp.oo, -1), sp.Interval(4, sp.oo)), sp.Union(sp.Interval.open(-sp.oo, -1), sp.Interval(4, sp.oo)), "Guiado de union."))
    results.append(validate_set("GX-C01.S03-02", sp.Interval.open(1, 5), sp.Interval.open(1, 5), "Guiado de interseccion."))
    results.append(validate_set("PX-C01.S03-01", sp.Interval.Lopen(-2, 3), sp.Interval.Lopen(-2, 3), "Practica de intervalo acotado."))
    results.append(validate_set("PX-C01.S03-02", sp.FiniteSet(1), sp.FiniteSet(1), "Practica con punto aislado."))
    results.append(validate_set("PX-C01.S03-03", sp.Interval.Ropen(0, 8), sp.Interval.Ropen(0, 8), "Practica de union contigua."))
    results.append(validate_set("PX-C01.S03-04", sp.Interval.open(2, sp.oo), sp.Interval.open(2, sp.oo), "Practica de semirrecta abierta."))
    results.append(validate_set("PX-C01.S03-05", sp.EmptySet, sp.EmptySet, "Practica con interseccion vacia."))
    results.append(validate_set("PX-C01.S03-06", sp.Interval.open(-sp.oo, 3), sp.Interval.open(-sp.oo, 3), "Practica con union total."))

    results.append(validate_set("EX-C01.S04-01", sp.FiniteSet(-1, 4), sp.FiniteSet(-1, 4), "Ejemplo resuelto de valor absoluto."))
    results.append(validate_set("GX-C01.S04-01", sp.FiniteSet(-4, 2), sp.FiniteSet(-4, 2), "Guiado con dos soluciones."))
    results.append(validate_set("GX-C01.S04-02", sp.Interval.open(-2, 6), sp.Interval.open(-2, 6), "Guiado con inecuacion."))
    results.append(validate_set("PX-C01.S04-01", sp.FiniteSet(-7, 7), sp.FiniteSet(-7, 7), "Practica con modulo simple."))
    results.append(validate_set("PX-C01.S04-02", sp.FiniteSet(sp.Rational(-1, 3), 1), sp.FiniteSet(sp.Rational(-1, 3), 1), "Practica lineal."))
    results.append(validate_set("PX-C01.S04-03", sp.Interval(-5, -3), sp.Interval(-5, -3), "Practica con <=."))
    results.append(validate_set("PX-C01.S04-04", sp.FiniteSet(3, 7), sp.FiniteSet(3, 7), "Distancia a un punto."))
    results.append(validate_set("PX-C01.S04-05", sp.Union(sp.Interval.open(-sp.oo, -2), sp.Interval.open(-1, sp.oo)), sp.Union(sp.Interval.open(-sp.oo, -2), sp.Interval.open(-1, sp.oo)), "Practica con >."))
    results.append(validate_set("PX-C01.S04-06", sp.FiniteSet(1), sp.FiniteSet(1), "Practica con modulo nulo."))

    results.append(validate_expression("EX-C01.S05-01", sp.sqrt(50) - 2 * sp.sqrt(8) + 3 * sp.sqrt(18), 10 * sp.sqrt(2), "Ejemplo resuelto de radicales semejantes."))
    results.append(validate_expression("GX-C01.S05-01", 2**3 * 2**-5, sp.Rational(1, 4), "Guiado con exponente negativo."))
    results.append(validate_expression("GX-C01.S05-02", sp.sqrt(12) + sp.sqrt(27), 5 * sp.sqrt(3), "Guiado de simplificacion."))
    results.append(validate_expression("PX-C01.S05-01", 3**-2, sp.Rational(1, 9), "Practica con potencia negativa."))
    results.append(validate_expression("PX-C01.S05-02", sp.sqrt(75) - sp.sqrt(12), 3 * sp.sqrt(3), "Practica con radicales."))
    results.append(validate_expression("PX-C01.S05-03", sp.Integer(16) ** sp.Rational(3, 4), 8, "Practica con exponente fraccionario."))
    results.append(validate_expression("PX-C01.S05-04", sp.real_root(54, 3) / sp.real_root(2, 3), 3, "Practica con raiz cubica."))
    results.append(validate_expression("PX-C01.S05-05", sp.sqrt(45) + sp.sqrt(5), 4 * sp.sqrt(5), "Practica con radicales semejantes."))
    results.append(validate_expression("PX-C01.S05-06", sp.sqrt(2**4 * 5**2), 20, "Practica con producto dentro de raiz."))

    results.append(validate_expression("EX-C01.S06-01", 3 / (sp.sqrt(5) - 2), 3 * sp.sqrt(5) + 6, "Ejemplo resuelto de racionalizacion."))
    results.append(validate_expression("GX-C01.S06-01", 5 / sp.sqrt(2), 5 * sp.sqrt(2) / 2, "Guiado con monomio radical."))
    results.append(validate_expression("GX-C01.S06-02", 1 / (sp.sqrt(3) + sp.sqrt(2)), sp.sqrt(3) - sp.sqrt(2), "Guiado con conjugado."))
    results.append(validate_expression("PX-C01.S06-01", 2 / sp.sqrt(7), 2 * sp.sqrt(7) / 7, "Practica con radical simple."))
    results.append(validate_expression("PX-C01.S06-02", 4 / (3 - sp.sqrt(5)), 3 + sp.sqrt(5), "Practica con conjugado."))
    results.append(validate_expression("PX-C01.S06-03", 1 / (2 + sp.sqrt(3)), 2 - sp.sqrt(3), "Practica con binomio."))
    results.append(validate_expression("PX-C01.S06-04", sp.sqrt(6) / sp.sqrt(2), sp.sqrt(3), "Practica por cociente de radicales."))
    results.append(validate_expression("PX-C01.S06-05", 7 / (sp.sqrt(7) - 1), (7 * sp.sqrt(7) + 7) / 6, "Practica con denominador de dos terminos."))
    results.append(validate_expression("PX-C01.S06-06", 3 / (1 - sp.sqrt(2)), -3 - 3 * sp.sqrt(2), "Practica con signo negativo final."))

    results.append(validate_expression("EX-C01.S07-01", sp.log(81, 3) + 2 * sp.log(sp.Rational(1, 3), 3), 2, "Ejemplo resuelto de logaritmos."))
    results.append(validate_expression("GX-C01.S07-01", sp.log(32, 2) - sp.log(4, 2), 3, "Guiado con diferencia de logaritmos."))
    results.append(validate_expression("GX-C01.S07-02", 5**3, 125, "Guiado pasando a forma exponencial."))
    results.append(validate_expression("PX-C01.S07-01", sp.log(sp.Rational(1, 100), 10), -2, "Practica base diez."))
    results.append(validate_expression("PX-C01.S07-02", sp.log(64, 4), 3, "Practica con base cuatro."))
    results.append(validate_expression("PX-C01.S07-03", sp.log(sp.E**5), 5, "Practica con logaritmo neperiano."))
    results.append(validate_expression("PX-C01.S07-04", sp.log(8, 2) + sp.log(4, 2), 5, "Practica sumando logaritmos."))
    results.append(validate_expression("PX-C01.S07-05", sp.log(27, 3) - sp.log(9, 3), 1, "Practica restando logaritmos."))
    results.append(validate_expression("PX-C01.S07-06", 7**2, 49, "Practica inversa de logaritmo."))

    return results


def chapter9_results() -> list[dict[str, object]]:
    return [
        validate_tangent_normal(
            "EX-C09.S03-01",
            x**2 - 2 * x + 3,
            3,
            slope_intercept(4, -6),
            slope_intercept(sp.Rational(-1, 4), sp.Rational(27, 4)),
            "Ejemplo resuelto principal del piloto.",
        ),
        validate_tangent_normal(
            "GX-C09.S03-01",
            x**2 + 1,
            -1,
            slope_intercept(-2, 0),
            slope_intercept(sp.Rational(1, 2), sp.Rational(5, 2)),
            "Guiado con pendiente negativa.",
        ),
        validate_tangent_normal(
            "GX-C09.S03-02",
            x**3 - 3 * x,
            1,
            slope_intercept(0, -2),
            vertical_line(1),
            "Guiado con tangente horizontal y normal vertical.",
        ),
        validate_tangent_normal(
            "PX-C09.S03-01",
            x**2 + 2 * x,
            2,
            slope_intercept(6, -4),
            slope_intercept(sp.Rational(-1, 6), sp.Rational(25, 3)),
            "Practica con parabola.",
        ),
        validate_tangent_normal(
            "PX-C09.S03-02",
            (x + 1) / (x - 1),
            3,
            slope_intercept(sp.Rational(-1, 2), sp.Rational(7, 2)),
            slope_intercept(2, -4),
            "Practica con funcion racional.",
        ),
        validate_tangent_normal(
            "PX-C09.S03-03",
            sp.sqrt(x + 1),
            3,
            slope_intercept(sp.Rational(1, 4), sp.Rational(5, 4)),
            slope_intercept(-4, 14),
            "Practica con funcion radical.",
        ),
        validate_tangent_normal(
            "PX-C09.S03-04",
            sp.exp(x),
            0,
            slope_intercept(1, 1),
            slope_intercept(-1, 1),
            "Practica con exponencial.",
        ),
        validate_tangent_normal(
            "PX-C09.S03-05",
            sp.log(x),
            1,
            slope_intercept(1, -1),
            slope_intercept(-1, 1),
            "Practica con logaritmo.",
        ),
        validate_tangent_normal(
            "PX-C09.S03-06",
            x**3,
            0,
            slope_intercept(0, 0),
            vertical_line(0),
            "Practica con origen e inflexion.",
        ),
        validate_given_slope(
            "EX-C09.S04-01",
            x**3 - 3 * x + 1,
            9,
            [(-2, -1), (2, 3)],
            [slope_intercept(9, 17), slope_intercept(9, -15)],
            "Ejemplo resuelto con dos tangentes paralelas a la misma recta.",
        ),
        validate_given_slope(
            "GX-C09.S04-01",
            x**2 - 4 * x,
            2,
            [(3, -3)],
            [slope_intercept(2, -9)],
            "Guiado con una unica solucion.",
        ),
        validate_given_slope(
            "GX-C09.S04-02",
            sp.sqrt(x + 4),
            sp.Rational(1, 4),
            [(0, 2)],
            [slope_intercept(sp.Rational(1, 4), 2)],
            "Guiado con funcion radical.",
        ),
        validate_given_slope(
            "PX-C09.S04-01",
            x**2 + 1,
            4,
            [(2, 5)],
            [slope_intercept(4, -3)],
            "Practica con tangente dada por pendiente.",
        ),
        validate_given_slope(
            "PX-C09.S04-02",
            x**3,
            12,
            [(-2, -8), (2, 8)],
            [slope_intercept(12, 16), slope_intercept(12, -16)],
            "Practica con dos tangentes simetricas.",
        ),
        validate_given_slope(
            "PX-C09.S04-03",
            sp.log(x),
            1,
            [(1, 0)],
            [slope_intercept(1, -1)],
            "Practica con logaritmo.",
        ),
        validate_given_slope(
            "PX-C09.S04-04",
            sp.exp(x),
            sp.exp(2),
            [(2, sp.exp(2))],
            [slope_intercept(sp.exp(2), -sp.exp(2))],
            "Practica con exponencial.",
        ),
        validate_given_slope(
            "PX-C09.S04-05",
            x + 1 / x,
            0,
            [(-1, -2), (1, 2)],
            [slope_intercept(0, -2), slope_intercept(0, 2)],
            "Practica con tangentes horizontales.",
        ),
        validate_parameter_case(),
        validate_given_slope(
            "CH-C09-01",
            -x**2 + 6 * x + 5,
            0,
            [(3, 14)],
            [slope_intercept(0, 14)],
            "Reto de transferencia con interpretacion fisica.",
        ),
    ]


def build_results() -> list[dict[str, object]]:
    return chapter1_results() + chapter9_results()


def main() -> int:
    DATA_DIR.mkdir(parents=True, exist_ok=True)
    results = build_results()
    passed = sum(1 for item in results if item["status"] == "passed")
    payload = {
        "status": "passed" if passed == len(results) else "failed",
        "generated_on": dt.datetime.now().isoformat(timespec="seconds"),
        "exercise_count": len(results),
        "passed_count": passed,
        "results": results,
    }
    (DATA_DIR / "validation_results.json").write_text(
        json.dumps(payload, indent=2, ensure_ascii=False) + "\n",
        encoding="utf-8",
    )
    print(f"Validation complete: {passed}/{len(results)} checks passed.")
    return 0 if passed == len(results) else 1


if __name__ == "__main__":
    raise SystemExit(main())
