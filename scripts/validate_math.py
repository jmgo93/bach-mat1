from __future__ import annotations

import datetime as dt
import json
from pathlib import Path

import sympy as sp


ROOT = Path.cwd()
DATA_DIR = ROOT / "data"
x = sp.symbols("x", real=True)
a = sp.symbols("a", real=True)


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


def compare_lines(actual: dict[str, str], expected: dict[str, str]) -> bool:
    if actual["kind"] != expected["kind"]:
        return False
    if actual["kind"] == "vertical":
        return sp.simplify(sp.sympify(actual["x"]) - sp.sympify(expected["x"])) == 0
    return (
        sp.simplify(sp.sympify(actual["slope"]) - sp.sympify(expected["slope"])) == 0
        and sp.simplify(sp.sympify(actual["intercept"]) - sp.sympify(expected["intercept"])) == 0
    )


def compare_points(actual: list[tuple[sp.Expr, sp.Expr]], expected: list[tuple[sp.Expr, sp.Expr]]) -> bool:
    normalized_actual = sorted((sp.simplify(px), sp.simplify(py)) for px, py in actual)
    normalized_expected = sorted((sp.simplify(px), sp.simplify(py)) for px, py in expected)
    if len(normalized_actual) != len(normalized_expected):
        return False
    for (ax, ay), (ex, ey) in zip(normalized_actual, normalized_expected, strict=True):
        if sp.simplify(ax - ex) != 0 or sp.simplify(ay - ey) != 0:
            return False
    return True


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
    same_points = compare_points(actual_points, expected_points)
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


def build_results() -> list[dict[str, object]]:
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
    (DATA_DIR / "validation_results.json").write_text(json.dumps(payload, indent=2, ensure_ascii=False) + "\n", encoding="utf-8")
    print(f"Validation complete: {passed}/{len(results)} checks passed.")
    return 0 if passed == len(results) else 1


if __name__ == "__main__":
    raise SystemExit(main())
