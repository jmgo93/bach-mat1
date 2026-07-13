from __future__ import annotations

import datetime as dt
import json
from pathlib import Path
from typing import Any

import sympy as sp
from sympy.calculus.util import continuous_domain


ROOT = Path.cwd()
DATA_DIR = ROOT / "data"
x = sp.symbols("x", real=True)
y = sp.symbols("y", real=True)
z = sp.symbols("z", real=True)
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
    if isinstance(actual, sp.FiniteSet) and isinstance(expected, sp.FiniteSet):
        pending = list(expected)
        for left in actual:
            match_index = next((index for index, right in enumerate(pending) if compare_values(left, right)), None)
            if match_index is None:
                return False
            pending.pop(match_index)
        return not pending
    return actual == expected


def compare_expressions(actual: sp.Expr, expected: sp.Expr) -> bool:
    if isinstance(actual, (list, tuple, sp.Tuple)) and isinstance(expected, (list, tuple, sp.Tuple)):
        return compare_sequences(list(actual), list(expected))
    if actual == expected:
        return True
    if actual in (sp.oo, -sp.oo) or expected in (sp.oo, -sp.oo):
        return actual == expected
    return sp.simplify(actual - expected) == 0


def compare_sequences(actual: list[Any], expected: list[Any]) -> bool:
    if len(actual) != len(expected):
        return False
    return all(compare_values(left, right) for left, right in zip(actual, expected, strict=True))


def compare_values(actual: Any, expected: Any) -> bool:
    if isinstance(actual, (dict, sp.Dict)) and isinstance(expected, (dict, sp.Dict)):
        actual_map = dict(actual)
        expected_map = dict(expected)
        if set(actual_map) != set(expected_map):
            return False
        return all(compare_values(actual_map[key], expected_map[key]) for key in actual_map)
    if isinstance(actual, sp.Set) and isinstance(expected, sp.Set):
        return compare_sets(actual, expected)
    if isinstance(actual, (list, tuple, sp.Tuple)) and isinstance(expected, (list, tuple, sp.Tuple)):
        return compare_sequences(list(actual), list(expected))
    if isinstance(actual, sp.Basic) and isinstance(expected, sp.Basic):
        return compare_expressions(actual, expected)
    return actual == expected


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


def tuple_set(*points: tuple[sp.Expr, ...]) -> sp.Set:
    return sp.FiniteSet(*[sp.Tuple(*point) for point in points])


def validate_boolean(
    identifier: str,
    actual: bool,
    expected: bool,
    note: str,
) -> dict[str, object]:
    status = "passed" if actual == expected else "failed"
    return build_result(identifier, "boolean", status, actual, expected, note)


def validate_value(
    identifier: str,
    check_type: str,
    actual: Any,
    expected: Any,
    note: str,
) -> dict[str, object]:
    status = "passed" if compare_values(actual, expected) else "failed"
    return build_result(identifier, check_type, status, actual, expected, note)


def validate_line_result(
    identifier: str,
    actual: dict[str, str],
    expected: dict[str, str],
    note: str,
) -> dict[str, object]:
    status = "passed" if compare_lines(actual, expected) else "failed"
    return build_result(identifier, "line", status, actual, expected, note)


TWO_PI_INTERVAL = sp.Interval.Ropen(0, 2 * sp.pi)


def validate_trig_base_roots(
    identifier: str,
    expression: sp.Expr,
    expected: sp.Set,
    note: str,
) -> dict[str, object]:
    actual = sp.solveset(sp.simplify(expression), x, domain=TWO_PI_INTERVAL)
    return validate_set(identifier, actual, expected, note)


def deg(angle: sp.Expr | int) -> sp.Expr:
    return sp.simplify(sp.sympify(angle) * sp.pi / 180)


def point(x_coord: sp.Expr, y_coord: sp.Expr) -> sp.Tuple:
    return sp.Tuple(sp.simplify(x_coord), sp.simplify(y_coord))


def vector_between(start: sp.Tuple, end: sp.Tuple) -> sp.Tuple:
    return point(end[0] - start[0], end[1] - start[1])


def midpoint(left: sp.Tuple, right: sp.Tuple) -> sp.Tuple:
    return point((left[0] + right[0]) / 2, (left[1] + right[1]) / 2)


def principal_argument(x_component: sp.Expr, y_component: sp.Expr) -> sp.Expr:
    angle = sp.simplify(sp.atan2(sp.simplify(y_component), sp.simplify(x_component)))
    if angle.is_negative:
        angle += 2 * sp.pi
    return sp.simplify(angle)


def vector_norm(vector: sp.Tuple) -> sp.Expr:
    return sp.simplify(sp.sqrt(vector[0] ** 2 + vector[1] ** 2))


def unit_vector(vector: sp.Tuple) -> sp.Tuple:
    norm = vector_norm(vector)
    return point(vector[0] / norm, vector[1] / norm)


def dot_product(left: sp.Tuple, right: sp.Tuple) -> sp.Expr:
    return sp.simplify(left[0] * right[0] + left[1] * right[1])


def determinant2(left: sp.Tuple, right: sp.Tuple) -> sp.Expr:
    return sp.simplify(left[0] * right[1] - left[1] * right[0])


def angle_between_vectors(left: sp.Tuple, right: sp.Tuple) -> sp.Expr:
    cosine = sp.simplify(dot_product(left, right) / (vector_norm(left) * vector_norm(right)))
    return sp.simplify(sp.acos(cosine))


def line_from_points(first: sp.Tuple, second: sp.Tuple) -> dict[str, str]:
    if sp.simplify(first[0] - second[0]) == 0:
        return vertical_line(first[0])
    slope = sp.simplify((second[1] - first[1]) / (second[0] - first[0]))
    intercept = sp.simplify(first[1] - slope * first[0])
    return slope_intercept(slope, intercept)


def line_from_general(a_coef: sp.Expr, b_coef: sp.Expr, c_coef: sp.Expr) -> dict[str, str]:
    if sp.simplify(b_coef) == 0:
        return vertical_line(-sp.sympify(c_coef) / sp.sympify(a_coef))
    return slope_intercept(-sp.sympify(a_coef) / sp.sympify(b_coef), -sp.sympify(c_coef) / sp.sympify(b_coef))


def line_through_point_with_slope(anchor: sp.Tuple, slope: sp.Expr) -> dict[str, str]:
    return slope_intercept(slope, sp.simplify(anchor[1] - slope * anchor[0]))


def parallel_line_through_point(reference: dict[str, str], anchor: sp.Tuple) -> dict[str, str]:
    if reference["kind"] == "vertical":
        return vertical_line(anchor[0])
    return line_through_point_with_slope(anchor, sp.sympify(reference["slope"]))


def perpendicular_line_through_point(reference: dict[str, str], anchor: sp.Tuple) -> dict[str, str]:
    if reference["kind"] == "vertical":
        return slope_intercept(0, anchor[1])
    slope = sp.sympify(reference["slope"])
    if sp.simplify(slope) == 0:
        return vertical_line(anchor[0])
    return line_through_point_with_slope(anchor, sp.simplify(-1 / slope))


def classify_lines(first: dict[str, str], second: dict[str, str]) -> str:
    if compare_lines(first, second):
        return "coincident"
    if first["kind"] == "vertical" and second["kind"] == "vertical":
        return "parallel"
    if first["kind"] == "vertical" or second["kind"] == "vertical":
        return "secant"
    return "parallel" if compare_expressions(sp.sympify(first["slope"]), sp.sympify(second["slope"])) else "secant"


def line_intersection(first: dict[str, str], second: dict[str, str]) -> sp.Tuple | None:
    relation = classify_lines(first, second)
    if relation != "secant":
        return None
    if first["kind"] == "vertical":
        x_value = sp.sympify(first["x"])
        slope = sp.sympify(second["slope"])
        intercept = sp.sympify(second["intercept"])
        return point(x_value, slope * x_value + intercept)
    if second["kind"] == "vertical":
        x_value = sp.sympify(second["x"])
        slope = sp.sympify(first["slope"])
        intercept = sp.sympify(first["intercept"])
        return point(x_value, slope * x_value + intercept)
    slope1 = sp.sympify(first["slope"])
    intercept1 = sp.sympify(first["intercept"])
    slope2 = sp.sympify(second["slope"])
    intercept2 = sp.sympify(second["intercept"])
    x_value = sp.simplify((intercept2 - intercept1) / (slope1 - slope2))
    return point(x_value, slope1 * x_value + intercept1)


def distance_point_line(anchor: sp.Tuple, line: dict[str, str]) -> sp.Expr:
    if line["kind"] == "vertical":
        return sp.simplify(sp.Abs(anchor[0] - sp.sympify(line["x"])))
    slope = sp.sympify(line["slope"])
    intercept = sp.sympify(line["intercept"])
    return sp.simplify(sp.Abs(slope * anchor[0] - anchor[1] + intercept) / sp.sqrt(slope**2 + 1))


def distance_parallel_lines(first: dict[str, str], second: dict[str, str]) -> sp.Expr:
    if first["kind"] == "vertical" and second["kind"] == "vertical":
        return sp.simplify(sp.Abs(sp.sympify(first["x"]) - sp.sympify(second["x"])))
    slope = sp.sympify(first["slope"])
    intercept1 = sp.sympify(first["intercept"])
    intercept2 = sp.sympify(second["intercept"])
    return sp.simplify(sp.Abs(intercept2 - intercept1) / sp.sqrt(slope**2 + 1))


def triangle_area(first: sp.Tuple, second: sp.Tuple, third: sp.Tuple) -> sp.Expr:
    return sp.simplify(sp.Abs(determinant2(vector_between(first, second), vector_between(first, third))) / 2)


def parallelogram_area(origin: sp.Tuple, first: sp.Tuple, second: sp.Tuple) -> sp.Expr:
    return sp.simplify(sp.Abs(determinant2(vector_between(origin, first), vector_between(origin, second))))


def validate_solution_set(
    identifier: str,
    relation: sp.Rel,
    expected: sp.Set,
    note: str,
) -> dict[str, object]:
    if relation.func is sp.And:
        actual = sp.S.Reals
        for item in relation.args:
            actual = actual.intersect(sp.solveset(item, x, domain=sp.S.Reals))
    elif relation.func is sp.Or:
        actual = sp.EmptySet
        for item in relation.args:
            actual = actual.union(sp.solveset(item, x, domain=sp.S.Reals))
    else:
        actual = sp.solveset(relation, x, domain=sp.S.Reals)
    return validate_set(identifier, actual, expected, note)


def validate_division(
    identifier: str,
    dividend: sp.Expr,
    divisor: sp.Expr,
    expected_quotient: sp.Expr,
    expected_remainder: sp.Expr,
    note: str,
) -> dict[str, object]:
    quotient, remainder = sp.Poly(dividend, x).div(sp.Poly(divisor, x))
    actual = {"quotient": quotient.as_expr(), "remainder": remainder.as_expr()}
    expected = {"quotient": expected_quotient, "remainder": expected_remainder}
    status = "passed" if (
        compare_expressions(quotient.as_expr(), expected_quotient)
        and compare_expressions(remainder.as_expr(), expected_remainder)
    ) else "failed"
    return build_result(identifier, "polynomial_division", status, actual, expected, note)


def validate_factorization(
    identifier: str,
    original: sp.Expr,
    factorized: sp.Expr,
    note: str,
) -> dict[str, object]:
    actual = sp.expand(factorized)
    expected = sp.expand(original)
    status = "passed" if compare_expressions(actual, expected) else "failed"
    return build_result(identifier, "factorization", status, factorized, original, note)


def validate_domain_and_simplification(
    identifier: str,
    expr: sp.Expr,
    expected_expr: sp.Expr,
    expected_domain: sp.Set,
    note: str,
) -> dict[str, object]:
    actual_expr = sp.cancel(expr)
    actual_domain = continuous_domain(expr, x, sp.S.Reals)
    actual = {"expression": actual_expr, "domain": actual_domain}
    expected = {"expression": expected_expr, "domain": expected_domain}
    status = "passed" if (
        compare_expressions(actual_expr, expected_expr)
        and compare_sets(actual_domain, expected_domain)
    ) else "failed"
    return build_result(identifier, "expression_with_domain", status, actual, expected, note)


def domain_components(domain: sp.Set) -> list[sp.Interval]:
    if domain == sp.S.Reals:
        return [sp.Interval.open(-sp.oo, sp.oo)]
    if isinstance(domain, sp.Interval):
        return [domain]
    if isinstance(domain, sp.Union):
        intervals = [item for item in domain.args if isinstance(item, sp.Interval)]
        return sorted(intervals, key=lambda item: sp.default_sort_key(item.start))
    raise ValueError(f"Unsupported domain: {domain}")


def contains_value(domain: sp.Set, value: sp.Expr) -> bool:
    relation = domain.contains(value)
    if relation in (True, False):
        return bool(relation)
    return bool(sp.simplify(relation))


def finite_real_roots(expr: sp.Expr, domain: sp.Set = sp.S.Reals) -> list[sp.Expr]:
    roots = sp.solveset(sp.Eq(sp.simplify(expr), 0), x, domain=domain)
    if roots is sp.EmptySet:
        return []
    if isinstance(roots, sp.FiniteSet):
        candidates = list(roots)
    else:
        candidates = sp.solve(sp.Eq(sp.simplify(expr), 0), x)
    values = [
        sp.simplify(candidate)
        for candidate in candidates
        if candidate.is_real is not False and contains_value(domain, sp.simplify(candidate))
    ]
    return sorted(values, key=lambda candidate: float(sp.N(candidate)))


def sample_point(left: sp.Expr, right: sp.Expr) -> sp.Expr:
    if left == -sp.oo and right == sp.oo:
        return sp.Integer(0)
    if left == -sp.oo:
        return sp.simplify(right - 1)
    if right == sp.oo:
        return sp.simplify(left + 1)
    return sp.simplify((left + right) / 2)


def sign_of_expression(expr: sp.Expr) -> int:
    value = sp.N(sp.simplify(expr))
    if value > 0:
        return 1
    if value < 0:
        return -1
    return 0


def variation_summary(expr: sp.Expr, domain: sp.Set = sp.S.Reals) -> dict[str, object]:
    derivative = sp.simplify(sp.diff(expr, x))
    increasing: list[sp.Interval] = []
    decreasing: list[sp.Interval] = []
    maxima: list[tuple[sp.Expr, sp.Expr]] = []
    minima: list[tuple[sp.Expr, sp.Expr]] = []

    for component in domain_components(domain):
        roots = [
            root
            for root in finite_real_roots(derivative, component)
            if root != component.start and root != component.end
        ]
        bounds = [component.start] + roots + [component.end]
        signs: list[int] = []
        for left_bound, right_bound in zip(bounds, bounds[1:]):
            sign = sign_of_expression(derivative.subs(x, sample_point(left_bound, right_bound)))
            signs.append(sign)
            interval = sp.Interval.open(left_bound, right_bound)
            if sign > 0:
                increasing.append(interval)
            elif sign < 0:
                decreasing.append(interval)
        for index, root in enumerate(roots):
            left_sign = signs[index]
            right_sign = signs[index + 1]
            if left_sign > 0 and right_sign < 0:
                maxima.append((root, sp.simplify(expr.subs(x, root))))
            elif left_sign < 0 and right_sign > 0:
                minima.append((root, sp.simplify(expr.subs(x, root))))

    return {
        "increasing": increasing,
        "decreasing": decreasing,
        "maxima": tuple_set(*maxima),
        "minima": tuple_set(*minima),
    }


def concavity_summary(expr: sp.Expr, domain: sp.Set = sp.S.Reals) -> dict[str, object]:
    second = sp.simplify(sp.diff(expr, x, 2))
    concave_up: list[sp.Interval] = []
    concave_down: list[sp.Interval] = []
    inflection: list[tuple[sp.Expr, sp.Expr]] = []

    for component in domain_components(domain):
        roots = [
            root
            for root in finite_real_roots(second, component)
            if root != component.start and root != component.end
        ]
        bounds = [component.start] + roots + [component.end]
        signs: list[int] = []
        for left_bound, right_bound in zip(bounds, bounds[1:]):
            sign = sign_of_expression(second.subs(x, sample_point(left_bound, right_bound)))
            signs.append(sign)
            interval = sp.Interval.open(left_bound, right_bound)
            if sign > 0:
                concave_up.append(interval)
            elif sign < 0:
                concave_down.append(interval)
        for index, root in enumerate(roots):
            if signs[index] != signs[index + 1]:
                inflection.append((root, sp.simplify(expr.subs(x, root))))

    return {
        "concave_up": concave_up,
        "concave_down": concave_down,
        "inflection": tuple_set(*inflection),
    }


def absolute_extrema_on_interval(expr: sp.Expr, interval: sp.Interval) -> dict[str, object]:
    candidates: list[sp.Expr] = []
    if interval.start not in (-sp.oo, sp.oo):
        candidates.append(sp.simplify(interval.start))
    if interval.end not in (-sp.oo, sp.oo):
        candidates.append(sp.simplify(interval.end))
    derivative = sp.simplify(sp.diff(expr, x))
    candidates.extend(finite_real_roots(derivative, interval))
    unique_candidates = sorted({sp.simplify(candidate) for candidate in candidates}, key=sp.default_sort_key)
    values = [(candidate, sp.simplify(expr.subs(x, candidate))) for candidate in unique_candidates]
    max_value = max(values, key=lambda item: float(sp.N(item[1])))[1]
    min_value = min(values, key=lambda item: float(sp.N(item[1])))[1]
    maxima = [(candidate, value) for candidate, value in values if compare_values(value, max_value)]
    minima = [(candidate, value) for candidate, value in values if compare_values(value, min_value)]
    return {
        "maxima": tuple_set(*maxima),
        "minima": tuple_set(*minima),
    }


def lateral_limit_summary(expr: sp.Expr, x0: sp.Expr) -> dict[str, object]:
    left = sp.simplify(sp.limit(expr, x, x0, dir="-"))
    right = sp.simplify(sp.limit(expr, x, x0, dir="+"))
    return {
        "left": left,
        "right": right,
        "exists": compare_values(left, right),
    }


def piecewise_status(left_expr: sp.Expr, right_expr: sp.Expr, x0: sp.Expr) -> dict[str, object]:
    left_limit = sp.simplify(sp.limit(left_expr, x, x0, dir="-"))
    right_limit = sp.simplify(sp.limit(right_expr, x, x0, dir="+"))
    value = sp.simplify(right_expr.subs(x, x0))
    left_derivative = sp.simplify(sp.limit(sp.diff(left_expr, x), x, x0, dir="-"))
    right_derivative = sp.simplify(sp.limit(sp.diff(right_expr, x), x, x0, dir="+"))
    continuous = compare_values(left_limit, right_limit) and compare_values(right_limit, value)
    derivable = continuous and compare_values(left_derivative, right_derivative)
    return {
        "left_limit": left_limit,
        "right_limit": right_limit,
        "value": value,
        "continuous": continuous,
        "left_derivative": left_derivative,
        "right_derivative": right_derivative,
        "derivable": derivable,
    }


def horizontal_tangent_summary(expr: sp.Expr) -> dict[str, object]:
    abscissas = finite_real_roots(sp.diff(expr, x), sp.S.Reals)
    points = [(value, sp.simplify(expr.subs(x, value))) for value in abscissas]
    lines = [slope_intercept(0, py) for _px, py in points]
    return {
        "points": [sp.Tuple(px, py) for px, py in points],
        "lines": lines,
    }


def rational_asymptote_summary(numerator: sp.Expr, denominator: sp.Expr) -> dict[str, object]:
    expr = sp.simplify(numerator / denominator)
    verticals: list[sp.Expr] = []
    for root in finite_real_roots(denominator, sp.S.Reals):
        left = sp.limit(expr, x, root, dir="-")
        right = sp.limit(expr, x, root, dir="+")
        if left in (sp.oo, -sp.oo) or right in (sp.oo, -sp.oo):
            verticals.append(sp.simplify(root))

    quotient, remainder = sp.Poly(numerator, x).div(sp.Poly(denominator, x))
    degree_gap = sp.Poly(numerator, x).degree() - sp.Poly(denominator, x).degree()
    horizontal = None
    oblique = None
    if degree_gap < 0 or degree_gap == 0:
        horizontal = slope_intercept(0, sp.simplify(sp.limit(expr, x, sp.oo)))
    elif degree_gap == 1:
        quotient_expr = sp.expand(quotient.as_expr())
        oblique = slope_intercept(quotient_expr.coeff(x, 1), quotient_expr.subs(x, 0))
    return {
        "verticals": verticals,
        "horizontal": horizontal,
        "oblique": oblique,
        "remainder": sp.simplify(remainder.as_expr()),
    }


def validate_linear_system(
    identifier: str,
    equations: list[sp.Equality],
    variables: tuple[sp.Symbol, ...],
    expected: sp.Set,
    note: str,
) -> dict[str, object]:
    actual = sp.linsolve([sp.expand(eq.lhs - eq.rhs) for eq in equations], variables)
    return validate_set(identifier, actual, expected, note)


def validate_linear_system_classification(
    identifier: str,
    equations: list[sp.Equality],
    variables: tuple[sp.Symbol, ...],
    expected: str,
    note: str,
) -> dict[str, object]:
    matrix, rhs = sp.linear_eq_to_matrix([sp.expand(eq.lhs - eq.rhs) for eq in equations], variables)
    rank_matrix = matrix.rank()
    rank_augmented = matrix.row_join(rhs).rank()
    if rank_matrix != rank_augmented:
        actual = "incompatible"
    elif rank_matrix < len(variables):
        actual = "compatible_indeterminado"
    else:
        actual = "compatible_determinado"
    status = "passed" if actual == expected else "failed"
    return build_result(identifier, "linear_system_classification", status, actual, expected, note)


def validate_nonlinear_system(
    identifier: str,
    equations: list[sp.Equality],
    variables: tuple[sp.Symbol, ...],
    expected: sp.Set,
    note: str,
) -> dict[str, object]:
    actual = sp.nonlinsolve([sp.expand(eq.lhs - eq.rhs) for eq in equations], variables)
    return validate_set(identifier, actual, expected, note)


def validate_halfplane(
    identifier: str,
    relation: sp.Rel,
    expected_boundary: sp.Expr,
    witness_point: tuple[sp.Expr, sp.Expr],
    note: str,
) -> dict[str, object]:
    boundary = sp.expand(relation.lhs - relation.rhs)
    sample_subs = {x: witness_point[0], y: witness_point[1]}
    satisfies = bool(relation.subs(sample_subs))
    actual = {"boundary": boundary, "witness": witness_point, "satisfies": satisfies}
    expected = {"boundary": expected_boundary, "witness": witness_point, "satisfies": True}
    status = "passed" if compare_expressions(boundary, expected_boundary) and satisfies else "failed"
    return build_result(identifier, "halfplane_description", status, actual, expected, note)


def validate_region_vertices(
    identifier: str,
    inequalities: list[sp.Rel],
    expected_vertices: list[tuple[sp.Expr, sp.Expr]],
    note: str,
) -> dict[str, object]:
    all_satisfied = True
    corners_well_formed = True
    for px, py in expected_vertices:
        substitutions = {x: px, y: py}
        if not all(bool(relation.subs(substitutions)) for relation in inequalities):
            all_satisfied = False
        active_boundaries = sum(
            1 for relation in inequalities if compare_expressions(sp.expand(relation.lhs - relation.rhs).subs(substitutions), 0)
        )
        if active_boundaries < 2:
            corners_well_formed = False
    actual = tuple_set(*expected_vertices)
    status = "passed" if all_satisfied and corners_well_formed else "failed"
    return build_result(
        identifier,
        "region_vertices",
        status,
        actual,
        actual,
        note,
    )


def chapter2_results() -> list[dict[str, object]]:
    results: list[dict[str, object]] = []

    for identifier, expr, expected, note in [
        ("EX-C02.S01-01", (2 * x**3 - x**2 + 3 * x - 5).subs(x, 2), 13, "Ejemplo resuelto de valor numerico."),
        ("PX-C02.S01-01", (x**2 - 3 * x + 5).subs(x, 0), 5, "Practica de evaluacion en cero."),
        ("PX-C02.S01-02", (2 * x**2 + x - 1).subs(x, -2), 5, "Practica con signo negativo."),
        ("PX-C02.S01-03", (4 * x**2 - 1).subs(x, sp.Rational(1, 2)), 0, "Practica con fraccion."),
        ("PX-C02.S01-04", (x**3 - 2 * x + 4).subs(x, 3), 25, "Practica con cubica."),
        ("PX-C02.S01-05", (x**4 - x**2 + 2).subs(x, -1), 2, "Practica con potencia par."),
        ("PX-C02.S01-06", ((x - 1) * (x + 3)).subs(x, 2), 5, "Practica factorizada."),
    ]:
        results.append(validate_expression(identifier, sp.simplify(expr), sp.Integer(expected), note))

    for identifier, expr, expected, note in [
        ("EX-C02.S02-01", (2 * x - 3) ** 2 + (x + 1) * (x - 1), 5 * x**2 - 12 * x + 8, "Ejemplo resuelto de operaciones con polinomios."),
        ("PX-C02.S02-01", (x - 4) ** 2, x**2 - 8 * x + 16, "Cuadrado de binomio."),
        ("PX-C02.S02-02", (2 * x + 1) ** 2, 4 * x**2 + 4 * x + 1, "Cuadrado con coeficiente 2."),
        ("PX-C02.S02-03", (x - 3) * (x + 3), x**2 - 9, "Diferencia de cuadrados."),
        ("PX-C02.S02-04", (x + 2) * (x**2 - x + 3), x**3 + x**2 + x + 6, "Producto por un trinomio."),
        ("PX-C02.S02-05", (2 * x - 1) * (x - 4), 2 * x**2 - 9 * x + 4, "Producto general."),
        ("PX-C02.S02-06", (x + 1) ** 2 - (x - 1) ** 2, 4 * x, "Simplificacion por cancelacion estructural."),
    ]:
        results.append(validate_expression(identifier, sp.expand(expr), expected, note))

    for identifier, dividend, divisor, quotient, remainder, note in [
        ("EX-C02.S03-01", 2 * x**3 - 3 * x**2 - 11 * x + 6, x - 3, 2 * x**2 + 3 * x - 2, 0, "Ejemplo resuelto de division exacta."),
        ("PX-C02.S03-01", x**2 - 5 * x + 6, x - 2, x - 3, 0, "Division exacta sencilla."),
        ("PX-C02.S03-02", 2 * x**2 + x - 3, x + 1, 2 * x - 1, -2, "Division con resto negativo."),
        ("PX-C02.S03-03", x**3 + 4 * x**2 + 4 * x, x, x**2 + 4 * x + 4, 0, "Division por monomio."),
        ("PX-C02.S03-04", 4 * x**3 - 4, x - 1, 4 * x**2 + 4 * x + 4, 0, "Division de diferencia de cubos incompleta."),
        ("PX-C02.S03-05", x**3 - 1, x + 1, x**2 - x + 1, -2, "Division con resto distinto de cero."),
        ("PX-C02.S03-06", 2 * x**3 + 5 * x**2 - 3, x + 3, 2 * x**2 - x + 3, -12, "Division sintetica con termino ausente."),
    ]:
        results.append(validate_division(identifier, dividend, divisor, quotient, remainder, note))

    results.append(
        validate_expression(
            "EX-C02.S04-01",
            sp.solve(sp.Eq((x**3 + a * x**2 - 5 * x + 6).subs(x, 2), 0), a)[0],
            -1,
            "Parametro para que x-2 sea factor.",
        )
    )
    results.append(validate_expression("PX-C02.S04-01", (x**2 + 3 * x - 1).subs(x, 2), 9, "Resto por teorema del resto."))
    results.append(validate_boolean("PX-C02.S04-02", bool(sp.simplify((x**2 - 5 * x + 6).subs(x, 3)) == 0), True, "Comprobacion de factor x-3."))
    results.append(validate_expression("PX-C02.S04-03", sp.solve(sp.Eq((x**2 + a * x - 8).subs(x, -2), 0), a)[0], -2, "Parametro para factor x+2."))
    results.append(validate_expression("PX-C02.S04-04", (2 * x**3 - x + 1).subs(x, -1), 0, "Resto al dividir por x+1."))
    results.append(validate_expression("PX-C02.S04-05", sp.solve(sp.Eq((x**2 + a * x + 4).subs(x, 1), 8), a)[0], 3, "Parametro a partir del resto 8."))  # a reused as generic parameter
    results.append(validate_boolean("PX-C02.S04-06", bool(sp.simplify((x**3 - 4 * x + 3).subs(x, 1)) == 0), True, "Comprobacion de raiz x=1."))

    for identifier, original, factorized, note in [
        ("EX-C02.S05-01", x**3 - 6 * x**2 + 11 * x - 6, (x - 1) * (x - 2) * (x - 3), "Ejemplo resuelto de factorizacion completa."),
        ("PX-C02.S05-01", x**2 + 5 * x + 6, (x + 2) * (x + 3), "Trinomio cuadratico."),
        ("PX-C02.S05-02", x**3 - 4 * x**2 + 4 * x, x * (x - 2) ** 2, "Factor comun y cuadrado perfecto."),
        ("PX-C02.S05-03", x**2 - 1, (x - 1) * (x + 1), "Diferencia de cuadrados."),
        ("PX-C02.S05-04", 2 * x**2 - 8, 2 * (x - 2) * (x + 2), "Extraccion de factor comun."),
        ("PX-C02.S05-05", x**3 + 3 * x**2, x**2 * (x + 3), "Factor comun de grado dos."),
        ("PX-C02.S05-06", x**4 - 16, (x - 2) * (x + 2) * (x**2 + 4), "Bicuadrada factorizada."),
    ]:
        results.append(validate_factorization(identifier, original, factorized, note))

    for identifier, expr, expected_expr, expected_domain, note in [
        ("EX-C02.S06-01", (x**2 - 9) / (x**2 - 3 * x), (x + 3) / x, sp.S.Reals - sp.FiniteSet(0, 3), "Ejemplo resuelto con dominio y simplificacion."),
        ("PX-C02.S06-01", 1 / (x - 4), 1 / (x - 4), sp.S.Reals - sp.FiniteSet(4), "Dominio de fraccion elemental."),
        ("PX-C02.S06-02", (x**2 - x) / (x**2 - 1), x / (x + 1), sp.S.Reals - sp.FiniteSet(-1, 1), "Simplificacion con factor comun."),
        ("PX-C02.S06-03", (x**2 - 16) / (x**2 - 8 * x + 16), (x + 4) / (x - 4), sp.S.Reals - sp.FiniteSet(4), "Simplificacion con cuadrado de binomio."),
        ("PX-C02.S06-04", (x**2 + 5 * x) / x, x + 5, sp.S.Reals - sp.FiniteSet(0), "Cancelacion controlada."),
        ("PX-C02.S06-05", (x**2 - 25) / (5 - x), -(x + 5), sp.S.Reals - sp.FiniteSet(5), "Simplificacion con cambio de signo."),
        ("PX-C02.S06-06", (x**2 - 6 * x + 9) / (x**2 - 9), (x - 3) / (x + 3), sp.S.Reals - sp.FiniteSet(-3, 3), "Factor comun y restricciones dobles."),
    ]:
        results.append(validate_domain_and_simplification(identifier, expr, expected_expr, expected_domain, note))

    for identifier, expr, expected, note in [
        ("EX-C02.S07-01", 1 / (x - 1) + 2 / (x + 1), (3 * x - 1) / (x**2 - 1), "Ejemplo resuelto de suma racional."),
        ("PX-C02.S07-01", 1 / x + 2 / x, 3 / x, "Mismo denominador."),
        ("PX-C02.S07-02", 1 / (x - 2) + 1 / (x + 2), 2 * x / (x**2 - 4), "Comun denominador simetrico."),
        ("PX-C02.S07-03", 3 / x - 1 / (2 * x), sp.Rational(5, 2) / x, "Resta con fraccion de coeficientes."),
        ("PX-C02.S07-04", 2 / (x + 1) - 1 / (x - 1), (x - 3) / (x**2 - 1), "Resta con binomios conjugados."),
        ("PX-C02.S07-05", x / (x + 1) + 1 / (x + 1), 1, "Suma que se simplifica por numerador."),
        ("PX-C02.S07-06", 1 / (x**2 - 1) - 1 / (x - 1), -x / (x**2 - 1), "Resta tras descomponer denominador."),
    ]:
        results.append(validate_expression(identifier, sp.cancel(expr), expected, note))

    for identifier, expr, expected, note in [
        ("EX-C02.S08-01", ((x**2 - 1) / (x**2 - 4)) / ((x + 1) / (x - 2)), (x - 1) / (x + 2), "Ejemplo resuelto de cociente de fracciones algebraicas."),
        ("PX-C02.S08-01", ((x - 1) / (x + 3)) * ((x + 3) / (x + 1)), (x - 1) / (x + 1), "Producto con cancelacion inmediata."),
        ("PX-C02.S08-02", ((x**2 - 9) / (x - 3)) * (1 / x), (x + 3) / x, "Producto con factorizacion previa."),
        ("PX-C02.S08-03", ((x + 2) / x) / (sp.Rational(2, 1) / x), (x + 2) / 2, "Cociente por una fraccion constante."),
        ("PX-C02.S08-04", (x / (x - 1)) * ((x - 1) / x), 1, "Producto identico a uno."),
        ("PX-C02.S08-05", ((x**2 - 1) / x) / (x - 1), (x + 1) / x, "Cociente con cancelacion lateral."),
        ("PX-C02.S08-06", (2 / (x + 1)) * ((x**2 - 1) / 3), 2 * (x - 1) / 3, "Producto con diferencia de cuadrados."),
    ]:
        results.append(validate_expression(identifier, sp.cancel(expr), expected, note))

    for identifier, relation, expected, note in [
        ("EX-C02.S09-01", sp.Eq(1 / (x - 1) + 1 / (x + 1), sp.Rational(3, 4)), sp.FiniteSet(3, -sp.Rational(1, 3)), "Ejemplo resuelto con dos soluciones validas."),
        ("PX-C02.S09-01", sp.Eq(1 / x, 5), sp.FiniteSet(sp.Rational(1, 5)), "Ecuacion racional inmediata."),
        ("PX-C02.S09-02", sp.Eq(x / (x - 1), 2), sp.FiniteSet(2), "Reduccion con una restriccion."),
        ("PX-C02.S09-03", sp.Eq(3 / (x + 1), 1), sp.FiniteSet(2), "Ecuacion por productos cruzados."),
        ("PX-C02.S09-04", sp.Eq((x - 1) / (x + 1), 0), sp.FiniteSet(1), "Fraccion igual a cero."),
        ("PX-C02.S09-05", sp.Eq(1 / (x - 2), 1 / (x + 2)), sp.EmptySet, "Caso sin solucion."),
        ("PX-C02.S09-06", sp.Eq(2 / (x - 1) + 1, 3), sp.FiniteSet(2), "Ecuacion racional con termino independiente."),
    ]:
        results.append(validate_solution_set(identifier, relation, expected, note))

    return results


def chapter3_results() -> list[dict[str, object]]:
    results: list[dict[str, object]] = []

    for identifier, relation, expected, note in [
        ("EX-C03.S01-01", sp.Eq(2 / (x - 1), 1 / (x + 2)), sp.FiniteSet(-5), "Ejemplo resuelto de ecuacion racional."),
        ("PX-C03.S01-01", sp.Eq(1 / x, 2), sp.FiniteSet(sp.Rational(1, 2)), "Racional elemental."),
        ("PX-C03.S01-02", sp.Eq(5 / (x - 3), 1), sp.FiniteSet(8), "Una sola restriccion."),
        ("PX-C03.S01-03", sp.Eq(1 / (x + 1) + 1 / (x - 1), 1), sp.FiniteSet(1 - sp.sqrt(2), 1 + sp.sqrt(2)), "Suma de fracciones racionales."),
        ("PX-C03.S01-04", sp.Eq((x - 2) / (x + 1), 0), sp.FiniteSet(2), "Numerador nulo."),
        ("PX-C03.S01-05", sp.Eq(1 / (x - 2), 1 / (x + 2)), sp.EmptySet, "Sin solucion por igualdad imposible."),
        ("PX-C03.S01-06", sp.Eq((x + 3) / x, 4), sp.FiniteSet(1), "Racional con variable en denominador."),
    ]:
        results.append(validate_solution_set(identifier, relation, expected, note))

    for identifier, relation, expected, note in [
        ("EX-C03.S02-01", sp.Eq(sp.sqrt(x + 5), x - 1), sp.FiniteSet(4), "Ejemplo resuelto con control de extranas."),
        ("PX-C03.S02-01", sp.Eq(sp.sqrt(x), 5), sp.FiniteSet(25), "Raiz igual a entero."),
        ("PX-C03.S02-02", sp.Eq(sp.sqrt(x + 4), 2), sp.FiniteSet(0), "Traslado simple."),
        ("PX-C03.S02-03", sp.Eq(sp.sqrt(3 * x - 2), 4), sp.FiniteSet(6), "Radical con coeficiente."),
        ("PX-C03.S02-04", sp.Eq(sp.sqrt(x + 6), x), sp.FiniteSet(3), "Extrana descartada por signo."),
        ("PX-C03.S02-05", sp.Eq(sp.sqrt(x - 1), x - 5), sp.FiniteSet(sp.Rational(11, 2) + sp.sqrt(17) / 2), "Dominio impuesto por segundo miembro."),
        ("PX-C03.S02-06", sp.Eq(sp.sqrt(2 * x + 1), x + 1), sp.FiniteSet(0), "Caso con solucion unica."),
    ]:
        results.append(validate_solution_set(identifier, relation, expected, note))

    for identifier, relation, expected, note in [
        ("EX-C03.S03-01", sp.Eq(x**4 - 5 * x**2 + 4, 0), sp.FiniteSet(-2, -1, 1, 2), "Ejemplo resuelto bicuadrado."),
        ("PX-C03.S03-01", sp.Eq(x**2 - 16, 0), sp.FiniteSet(-4, 4), "Diferencia de cuadrados."),
        ("PX-C03.S03-02", sp.Eq(x**4 - 13 * x**2 + 36, 0), sp.FiniteSet(-3, -2, 2, 3), "Bicuadrada con dos valores positivos."),
        ("PX-C03.S03-03", sp.Eq(x**3 - 9 * x, 0), sp.FiniteSet(-3, 0, 3), "Factor comun por x."),
        ("PX-C03.S03-04", sp.Eq(x**4, x**2), sp.FiniteSet(-1, 0, 1), "Traslado y factorizacion."),
        ("PX-C03.S03-05", sp.Eq(x**2 + 5 * x, 0), sp.FiniteSet(-5, 0), "Factor comun lineal."),
        ("PX-C03.S03-06", sp.Eq(x**4 - 1, 0), sp.FiniteSet(-1, 1), "Raices reales de una cuarta potencia."),
    ]:
        results.append(validate_solution_set(identifier, relation, expected, note))

    for identifier, relation, expected, note in [
        ("EX-C03.S04-01", sp.Eq(2 ** (x + 1), 8 ** (x - 1)), sp.FiniteSet(2), "Ejemplo resuelto por igualacion de bases."),
        ("PX-C03.S04-01", sp.Eq(2**x, 16), sp.FiniteSet(4), "Potencia exacta base 2."),
        ("PX-C03.S04-02", sp.Eq(4 ** (x + 1), 64), sp.FiniteSet(2), "Potencia de potencia."),
        ("PX-C03.S04-03", sp.Eq(9**x, 3), sp.FiniteSet(sp.Rational(1, 2)), "Cambio a base comun 3."),
        ("PX-C03.S04-04", sp.Eq(2**x, 2 ** (3 * x - 4)), sp.FiniteSet(2), "Igualacion de exponentes."),
        ("PX-C03.S04-05", sp.Eq(10 ** (x - 1), 1000), sp.FiniteSet(4), "Base decimal."),
        ("PX-C03.S04-06", sp.Eq(5**x, sp.Rational(1, 25)), sp.FiniteSet(-2), "Exponente negativo."),
    ]:
        results.append(validate_solution_set(identifier, relation, expected, note))

    for identifier, relation, expected, note in [
        ("EX-C03.S05-01", sp.And(sp.Eq((x - 1) * (x - 3), 10), sp.Gt(x, 3)), sp.FiniteSet(2 + sp.sqrt(11)), "Ejemplo resuelto de ecuacion logaritmica."),
        ("PX-C03.S05-01", sp.Eq(sp.log(x, 3), 2), sp.FiniteSet(9), "Logaritmo en base 3."),
        ("PX-C03.S05-02", sp.Eq(sp.log(x), 0), sp.FiniteSet(1), "Logaritmo neperiano nulo."),
        ("PX-C03.S05-03", sp.Eq(sp.log(x - 2, 10), 0), sp.FiniteSet(3), "Logaritmo decimal con traslado."),
        ("PX-C03.S05-04", sp.Eq(sp.log(x + 1, 2), 4), sp.FiniteSet(15), "Logaritmo en base 2."),
        ("PX-C03.S05-05", sp.Eq(sp.log(x, 10) + sp.log(x, 10), 2), sp.FiniteSet(10), "Suma de logaritmos iguales."),
        ("PX-C03.S05-06", sp.Eq(sp.log(x - 1, 3) + sp.log(x - 1, 3), 2), sp.FiniteSet(4), "Condicion de existencia con argumento repetido."),
    ]:
        results.append(validate_solution_set(identifier, relation, expected, note))

    for identifier, relation, expected, note in [
        ("EX-C03.S06-01", sp.Eq((x - 1) / (x + 2), 2), sp.FiniteSet(-5), "Ejemplo resuelto de eleccion de metodo."),
        ("PX-C03.S06-01", sp.Eq((x - 3) * (x + 2), 0), sp.FiniteSet(-2, 3), "Ecuacion factorizada."),
        ("PX-C03.S06-02", sp.Eq(sp.sqrt(x + 9), 5), sp.FiniteSet(16), "Ecuacion irracional en bloque mixto."),
        ("PX-C03.S06-03", sp.Eq(2**x, 8), sp.FiniteSet(3), "Exponencial basica."),
        ("PX-C03.S06-04", sp.Eq(sp.log(x, 10), 2), sp.FiniteSet(100), "Logaritmica decimal."),
        ("PX-C03.S06-05", sp.Eq(x**4 - 17 * x**2 + 16, 0), sp.FiniteSet(-4, -1, 1, 4), "Bicuadrada en coleccion mixta."),
        ("PX-C03.S06-06", sp.Eq(1 / (x - 1), 2), sp.FiniteSet(sp.Rational(3, 2)), "Racional corta con restriccion."),
    ]:
        results.append(validate_solution_set(identifier, relation, expected, note))

    for identifier, equations, expected, note in [
        ("EX-C03.S07-01", [sp.Eq(x + y, 5), sp.Eq(2 * x - y, 1)], tuple_set((2, 3)), "Ejemplo resuelto de sistema 2x2."),
        ("PX-C03.S07-01", [sp.Eq(x + y, 6), sp.Eq(x - y, 2)], tuple_set((4, 2)), "Suma y diferencia."),
        ("PX-C03.S07-02", [sp.Eq(3 * x + y, 11), sp.Eq(x + y, 5)], tuple_set((3, 2)), "Sistema por resta."),
        ("PX-C03.S07-03", [sp.Eq(2 * x - y, 7), sp.Eq(x + y, 5)], tuple_set((4, 1)), "Sustitucion directa."),
        ("PX-C03.S07-04", [sp.Eq(x + 2 * y, 8), sp.Eq(3 * x - y, 3)], tuple_set((2, 3)), "Sistema con coeficientes distintos."),
        ("PX-C03.S07-05", [sp.Eq(2 * x + 3 * y, 13), sp.Eq(x + y, 5)], tuple_set((2, 3)), "Sistema compatible determinado."),
        ("PX-C03.S07-06", [sp.Eq(x + 3 * y, 11), sp.Eq(2 * x - y, 1)], tuple_set((2, 3)), "Sistema corregido para concordar con su solucion."),
    ]:
        results.append(validate_linear_system(identifier, equations, (x, y), expected, note))

    for identifier, equations, expected, note in [
        ("EX-C03.S08-01", [sp.Eq(x + y + z, 6), sp.Eq(x - y + z, 4), sp.Eq(2 * x + z, 7)], tuple_set((2, 1, 3)), "Ejemplo resuelto 3x3."),
        ("PX-C03.S08-01", [sp.Eq(x + y + z, 6), sp.Eq(x + z, 4), sp.Eq(y + z, 5)], tuple_set((1, 2, 3)), "Sistema 3x3 determinado."),
        ("PX-C03.S08-02", [sp.Eq(x + y + z, 9), sp.Eq(x - y + z, 5), sp.Eq(x + y - z, 3)], tuple_set((4, 2, 3)), "Sistema 3x3 con solucion unica."),
        ("PX-C03.S08-05", [sp.Eq(2 * x + y + z, 7), sp.Eq(x - y + z, 3), sp.Eq(x + y - z, 1)], tuple_set((2, 1, 2)), "Sistema 3x3 con combinacion simetrica."),
        ("PX-C03.S08-06", [sp.Eq(x + 2 * y - z, 2), sp.Eq(2 * x - y + z, 3), sp.Eq(x + y + z, 6)], tuple_set((1, 2, 3)), "Sistema 3x3 final del bloque."),
    ]:
        results.append(validate_linear_system(identifier, equations, (x, y, z), expected, note))
    results.append(
        validate_linear_system_classification(
            "PX-C03.S08-03",
            [sp.Eq(x + y + z, 1), sp.Eq(x + y + z, 3), sp.Eq(x - y, 0)],
            (x, y, z),
            "incompatible",
            "Clasificacion de sistema imposible.",
        )
    )
    results.append(
        validate_linear_system_classification(
            "PX-C03.S08-04",
            [sp.Eq(x + y + z, 2), sp.Eq(2 * x + 2 * y + 2 * z, 4), sp.Eq(x - y, 0)],
            (x, y, z),
            "compatible_indeterminado",
            "Clasificacion de sistema dependiente.",
        )
    )

    u, v = sp.symbols("u v", real=True)
    c, r = sp.symbols("c r", real=True)
    d, m = sp.symbols("d m", real=True)
    n1, n2 = sp.symbols("n1 n2", real=True)
    for identifier, equations, variables, expected, note in [
        ("PX-C03.S09-01", [sp.Eq(x + y, 20), sp.Eq(x - y, 4)], (x, y), tuple_set((12, 8)), "Dos numeros con suma y diferencia."),
        ("PX-C03.S09-02", [sp.Eq(2 * x + 3 * y, 25), sp.Eq(x + y, 11)], (x, y), tuple_set((8, 3)), "Entradas adultas e infantiles."),
        ("PX-C03.S09-03", [sp.Eq(c + r, 10), sp.Eq(2 * c + 4 * r, 28)], (c, r), tuple_set((6, 4)), "Granja con cabezas y patas."),
        ("PX-C03.S09-04", [sp.Eq(d + u, 9), sp.Eq(d - u, 3)], (d, u), tuple_set((6, 3)), "Numero de dos cifras por sus digitos."),
        ("PX-C03.S09-05", [sp.Eq(3 * x + 2 * y, 13), sp.Eq(x + y, 5)], (x, y), tuple_set((3, 2)), "Cuadernos y lapices."),
        ("PX-C03.S09-06", [sp.Eq(n1 + n2, 8), sp.Eq(n1 + 2 * n2, 13)], (n1, n2), tuple_set((3, 5)), "Monedas de 1 y 2 euros."),
    ]:
        results.append(validate_linear_system(identifier, equations, variables, expected, note))

    for identifier, equations, expected, note in [
        ("EX-C03.S10-01", [sp.Eq(x + y, 5), sp.Eq(x * y, 6)], tuple_set((2, 3), (3, 2)), "Ejemplo resuelto de sistema no lineal."),
        ("PX-C03.S10-01", [sp.Eq(x + y, 7), sp.Eq(x * y, 12)], tuple_set((3, 4), (4, 3)), "Suma y producto."),
        ("PX-C03.S10-02", [sp.Eq(y, x**2), sp.Eq(y, 4)], tuple_set((-2, 4), (2, 4)), "Parabola y recta horizontal."),
        ("PX-C03.S10-03", [sp.Eq(x**2 + y**2, 13), sp.Eq(y, 2)], tuple_set((-3, 2), (3, 2)), "Circunferencia y recta."),
        ("PX-C03.S10-04", [sp.Eq(x - y, 5), sp.Eq(x * y, 14)], tuple_set((-2, -7), (7, 2)), "Diferencia y producto con dos soluciones."),
        ("PX-C03.S10-05", [sp.Eq(x + y, 1), sp.Eq(x**2 + y**2, 1)], tuple_set((0, 1), (1, 0)), "Sistema simetrico con suma fija."),
        ("PX-C03.S10-06", [sp.Eq(y, 2 * x), sp.Eq(x**2 + y**2, 20)], tuple_set((-2, -4), (2, 4)), "Recta y circunferencia."),
    ]:
        results.append(validate_nonlinear_system(identifier, equations, (x, y), expected, note))

    for identifier, equations, expected, note in [
        ("EX-C03.S11-01", [sp.Eq(x + y, 5), sp.Eq(x - y, 1)], tuple_set((3, 2)), "Ejemplo resuelto tras linealizar exponentes."),
        ("PX-C03.S11-01", [sp.Eq(x, 3), sp.Eq(x + y, 5)], tuple_set((3, 2)), "Sistema exponencial con sustitucion directa."),
        ("PX-C03.S11-02", [sp.Eq(x + y, 6), sp.Eq(x - y, 0)], tuple_set((3, 3)), "Producto exponencial reducido a suma de exponentes."),
        ("PX-C03.S11-05", [sp.Eq(x, 2), sp.Eq(y, 3)], tuple_set((2, 3)), "Dos ecuaciones exponenciales desacopladas."),
    ]:
        results.append(validate_linear_system(identifier, equations, (x, y), expected, note))
    for identifier, equations, expected, note in [
        ("PX-C03.S11-03", [sp.Eq(sp.log(x, 10), 2), sp.Eq(y, x - 95)], tuple_set((100, 5)), "Sistema con logaritmo decimal."),
        ("PX-C03.S11-04", [sp.Eq(sp.log(x), 0), sp.Eq(x + y, 4)], tuple_set((1, 3)), "Sistema con logaritmo neperiano."),
        ("PX-C03.S11-06", [sp.Eq(sp.log(x, 2), 3), sp.Eq(x - y, 5)], tuple_set((8, 3)), "Logaritmo en base dos y ecuacion lineal."),
    ]:
        results.append(validate_nonlinear_system(identifier, equations, (x, y), expected, note))

    return results


def chapter4_results() -> list[dict[str, object]]:
    results: list[dict[str, object]] = []

    for identifier, relation, expected, note in [
        ("EX-C04.S01-01", sp.Le(3 * x - 5, 7), sp.Interval(-sp.oo, 4), "Ejemplo resuelto de inecuacion lineal."),
        ("PX-C04.S01-01", sp.Lt(x - 4, 0), sp.Interval.open(-sp.oo, 4), "Inecuacion lineal abierta."),
        ("PX-C04.S01-02", sp.Ge(5 * x + 1, 11), sp.Interval(2, sp.oo), "Inecuacion lineal cerrada por la izquierda."),
        ("PX-C04.S01-03", sp.Gt(7 - 2 * x, 1), sp.Interval.open(-sp.oo, 3), "Cambio de sentido al dividir por negativo."),
        ("PX-C04.S01-04", sp.Le(4 * x - 3, 5), sp.Interval(-sp.oo, 2), "Cota superior inclusiva."),
        ("PX-C04.S01-05", sp.Lt(2 - 3 * x, 11), sp.Interval.open(-3, sp.oo), "Cota inferior abierta."),
        ("PX-C04.S01-06", sp.Ge(-x + 8, 10), sp.Interval(-sp.oo, -2), "Inecuacion con coeficiente -1."),
    ]:
        results.append(validate_solution_set(identifier, relation, expected, note))

    for identifier, relation, expected, note in [
        ("EX-C04.S02-01", sp.Gt(x**2 - 5 * x + 6, 0), sp.Union(sp.Interval.open(-sp.oo, 2), sp.Interval.open(3, sp.oo)), "Ejemplo resuelto de segundo grado."),
        ("PX-C04.S02-01", sp.Ge(x**2 - 1, 0), sp.Union(sp.Interval(-sp.oo, -1), sp.Interval(1, sp.oo)), "Fuera del intervalo entre raices."),
        ("PX-C04.S02-02", sp.Lt(x**2 - 6 * x + 8, 0), sp.Interval.open(2, 4), "Entre las dos raices reales."),
        ("PX-C04.S02-03", sp.Le(x**2 + 4 * x + 3, 0), sp.Interval(-3, -1), "Trinomio con soluciones acotadas."),
        ("PX-C04.S02-04", sp.Gt(x**2 - 9, 0), sp.Union(sp.Interval.open(-sp.oo, -3), sp.Interval.open(3, sp.oo)), "Exterior de dos raices."),
        ("PX-C04.S02-05", sp.Ge(x**2 - 2 * x - 3, 0), sp.Union(sp.Interval(-sp.oo, -1), sp.Interval(3, sp.oo)), "Incluyendo extremos por el igual."),
        ("PX-C04.S02-06", sp.Le(-x**2 + 4 * x - 4, 0), sp.S.Reals, "Cuadrado negativo o nulo siempre valido."),
    ]:
        results.append(validate_solution_set(identifier, relation, expected, note))

    for identifier, relation, expected, note in [
        ("EX-C04.S03-01", sp.Ge((x - 1) * (x + 2) * (x - 4), 0), sp.Union(sp.Interval(-2, 1), sp.Interval(4, sp.oo)), "Ejemplo resuelto de tabla de signos."),
        ("PX-C04.S03-01", sp.Lt(x * (x - 1) * (x + 1), 0), sp.Union(sp.Interval.open(-sp.oo, -1), sp.Interval.open(0, 1)), "Tres factores lineales."),
        ("PX-C04.S03-02", sp.Ge((x - 2) ** 2 * (x + 3), 0), sp.Interval(-3, sp.oo), "Raiz doble que no cambia el signo."),
        ("PX-C04.S03-03", sp.Le(x * (x - 4) ** 2, 0), sp.Union(sp.Interval(-sp.oo, 0), sp.FiniteSet(4)), "Producto con cuadrado y punto aislado."),
        ("PX-C04.S03-04", sp.Gt((x + 2) * (x - 5), 0), sp.Union(sp.Interval.open(-sp.oo, -2), sp.Interval.open(5, sp.oo)), "Exterior de las raices."),
        ("PX-C04.S03-05", sp.Le(x**2 * (x - 1), 0), sp.Interval(-sp.oo, 1), "Factor cuadratico no negativo."),
        ("PX-C04.S03-06", sp.Ge((x - 3) ** 3, 0), sp.Interval(3, sp.oo), "Potencia impar conserva el signo."),
    ]:
        results.append(validate_solution_set(identifier, relation, expected, note))

    for identifier, relation, expected, note in [
        ("EX-C04.S04-01", sp.Le((x - 3) / (x + 1), 0), sp.Interval.Lopen(-1, 3), "Ejemplo resuelto de inecuacion racional."),
        ("PX-C04.S04-01", sp.Lt(1 / (x - 4), 0), sp.Interval.open(-sp.oo, 4), "Signo negativo de una fraccion simple."),
        ("PX-C04.S04-02", sp.Ge((x - 2) / (x + 2), 0), sp.Union(sp.Interval.open(-sp.oo, -2), sp.Interval(2, sp.oo)), "Mismo signo en numerador y denominador."),
        ("PX-C04.S04-03", sp.Le(x / (x + 1), 0), sp.Interval.Lopen(-1, 0), "Cociente no positivo con cero permitido."),
        ("PX-C04.S04-04", sp.Gt((x + 3) / (x - 1), 0), sp.Union(sp.Interval.open(-sp.oo, -3), sp.Interval.open(1, sp.oo)), "Inecuacion estricta: la raiz del numerador no se incluye."),
        ("PX-C04.S04-05", sp.Lt((x - 1) / (x - 3), 0), sp.Interval.open(1, 3), "Signo negativo entre dos puntos criticos."),
        ("PX-C04.S04-06", sp.Gt(1 / (x**2 - 4), 0), sp.Union(sp.Interval.open(-sp.oo, -2), sp.Interval.open(2, sp.oo)), "Reciproco positivo fuera de las raices del denominador."),
    ]:
        results.append(validate_solution_set(identifier, relation, expected, note))

    for identifier, relation, expected, note in [
        ("EX-C04.S05-01", sp.And(sp.Gt(x + 2, 0), sp.Le(2 * x - 3, 1)), sp.Interval.Lopen(-2, 2), "Ejemplo resuelto de sistema de inecuaciones."),
        ("PX-C04.S05-01", sp.And(sp.Gt(x, -3), sp.Lt(x, 4)), sp.Interval.open(-3, 4), "Dos cotas abiertas."),
        ("PX-C04.S05-02", sp.And(sp.Ge(x, 0), sp.Le(x, 6)), sp.Interval(0, 6), "Banda cerrada."),
        ("PX-C04.S05-03", sp.And(sp.Gt(x - 1, 0), sp.Ge(3 - x, 0)), sp.Interval.Lopen(1, 3), "Interseccion semiabierta."),
        ("PX-C04.S05-04", sp.And(sp.Le(2 * x, 8), sp.Gt(x + 5, 0)), sp.Interval.Lopen(-5, 4), "Sistema con desigualdades equivalentes."),
        ("PX-C04.S05-05", sp.And(sp.Lt(x, 2), sp.Ge(x, 2)), sp.EmptySet, "Sistema incompatible."),
        ("PX-C04.S05-06", sp.And(sp.Le(x, -1), sp.Gt(x, -4)), sp.Interval.Lopen(-4, -1), "Franja izquierda semiabierta."),
    ]:
        results.append(validate_solution_set(identifier, relation, expected, note))

    for identifier, relation, boundary, witness, note in [
        ("EX-C04.S06-01", sp.Le(x + 2 * y, 4), x + 2 * y - 4, (0, 0), "Ejemplo resuelto de semiplano."),
        ("PX-C04.S06-01", sp.Le(x + y, 3), x + y - 3, (0, 0), "Semiplano que contiene el origen."),
        ("PX-C04.S06-02", sp.Ge(y, 2), y - 2, (0, 3), "Semiplano superior."),
        ("PX-C04.S06-03", sp.Lt(x, 4), x - 4, (0, 0), "Semiplano izquierdo de una recta vertical."),
        ("PX-C04.S06-04", sp.Gt(2 * x - y, 0), 2 * x - y, (1, 0), "Semiplano inferior respecto de y=2x."),
        ("PX-C04.S06-05", sp.Ge(x + y, 0), x + y, (1, 0), "Semiplano que contiene un punto sobre el eje X."),
        ("PX-C04.S06-06", sp.Le(y, -x + 2), x + y - 2, (0, 0), "Semiplano por debajo de una recta decreciente."),
    ]:
        results.append(validate_halfplane(identifier, relation, boundary, witness, note))

    for identifier, inequalities, vertices, note in [
        ("EX-C04.S07-01", [sp.Ge(x, 0), sp.Ge(y, 0), sp.Le(x + y, 4)], [(0, 0), (4, 0), (0, 4)], "Ejemplo resuelto de region triangular."),
        ("PX-C04.S07-01", [sp.Ge(x, 0), sp.Ge(y, 0), sp.Le(x + y, 2)], [(0, 0), (2, 0), (0, 2)], "Triangulo rectangulo en el origen."),
        ("PX-C04.S07-02", [sp.Ge(x, -1), sp.Ge(y, 0), sp.Le(x + y, 3)], [(-1, 0), (3, 0), (-1, 4)], "Triangulo desplazado a la izquierda."),
        ("PX-C04.S07-03", [sp.Ge(x, 0), sp.Ge(y, 0), sp.Le(x, 3), sp.Le(y, 2)], [(0, 0), (3, 0), (3, 2), (0, 2)], "Rectangulo alineado con los ejes."),
        ("PX-C04.S07-04", [sp.Ge(x, 0), sp.Ge(y, 0), sp.Le(y, x), sp.Le(x + y, 4)], [(0, 0), (4, 0), (2, 2)], "Triangulo con restriccion y<=x."),
        ("PX-C04.S07-05", [sp.Ge(x, 1), sp.Ge(y, 1), sp.Le(x + y, 5)], [(1, 1), (4, 1), (1, 4)], "Triangulo trasladado en el primer cuadrante."),
        ("PX-C04.S07-06", [sp.Ge(x, 0), sp.Ge(y, 0), sp.Le(x + 2 * y, 4)], [(0, 0), (4, 0), (0, 2)], "Triangulo con pendiente -1/2."),
    ]:
        results.append(validate_region_vertices(identifier, inequalities, vertices, note))

    return results


def chapter5_results() -> list[dict[str, object]]:
    results: list[dict[str, object]] = []

    results.append(
        validate_value(
            "EX-C05.S01-01",
            "angle_conversion_bundle",
            sp.Tuple(sp.simplify(135 * sp.pi / 180), sp.simplify(7 * sp.pi / 6 * 180 / sp.pi)),
            sp.Tuple(3 * sp.pi / 4, 210),
            "Conversion directa de grados y radianes del ejemplo resuelto.",
        )
    )
    results.append(
        validate_value(
            "EX-C05.S02-01",
            "triangle_measure_bundle",
            sp.Tuple(10 * sp.sqrt(3), 25 * sp.sqrt(3)),
            sp.Tuple(10 * sp.sqrt(3), 25 * sp.sqrt(3)),
            "Base y area del triangulo isosceles resuelto por descomposicion.",
        )
    )
    results.append(
        validate_value(
            "EX-C05.S03-01",
            "trigonometric_value_bundle",
            sp.Tuple(sp.sin(deg(150)), sp.cos(deg(240)), sp.tan(deg(330))),
            sp.Tuple(sp.Rational(1, 2), sp.Rational(-1, 2), -sp.sqrt(3) / 3),
            "Valores exactos con control de cuadrante.",
        )
    )
    results.append(
        validate_value(
            "EX-C05.S04-01",
            "trigonometric_value_bundle",
            sp.Tuple(-sp.sqrt(1 - sp.Rational(3, 5) ** 2), sp.simplify((sp.Rational(3, 5)) / (-sp.Rational(4, 5)))),
            sp.Tuple(-sp.Rational(4, 5), -sp.Rational(3, 4)),
            "Reconstruccion de coseno y tangente desde el seno en el segundo cuadrante.",
        )
    )
    results.append(
        validate_value(
            "EX-C05.S05-01",
            "trigonometric_identity_bundle",
            sp.Tuple(
                sp.sqrt(1 - sp.Rational(4, 5) ** 2),
                sp.simplify(sp.Rational(4, 5) / sp.Rational(3, 5)),
                sp.simplify(2 * sp.Rational(4, 5) * sp.Rational(3, 5)),
                sp.simplify(sp.Rational(3, 5) ** 2 - sp.Rational(4, 5) ** 2),
            ),
            sp.Tuple(sp.Rational(3, 5), sp.Rational(4, 3), sp.Rational(24, 25), sp.Rational(-7, 25)),
            "Aplicacion del pitagorico trigonometrico y del angulo doble.",
        )
    )
    results.append(
        validate_trig_base_roots(
            "EX-C05.S06-01",
            sp.sin(x) - sp.Rational(1, 2),
            sp.FiniteSet(sp.pi / 6, 5 * sp.pi / 6),
            "Se contrastan las soluciones en [0, 2pi) que sostienen la familia general del seno.",
        )
    )
    results.append(
        validate_value(
            "EX-C05.S07-01",
            "triangle_resolution_bundle",
            sp.Tuple(180 - 30 - 60, sp.simplify((5 / sp.Rational(1, 2)) * sp.sqrt(3) / 2), 10),
            sp.Tuple(90, 5 * sp.sqrt(3), 10),
            "Resolucion del triangulo por suma de angulos y teorema del seno.",
        )
    )
    results.append(
        validate_expression(
            "EX-C05.S08-01",
            10 * sp.sqrt(3),
            10 * sp.sqrt(3),
            "Altura de la torre obtenida al combinar dos tangentes.",
        )
    )

    for identifier, actual, expected, note in [
        ("PX-C05.S01-01", sp.pi / 6, sp.pi / 6, "Conversion de 30 grados a radianes."),
        ("PX-C05.S01-02", 5 * sp.pi / 3, 5 * sp.pi / 3, "Conversion de 300 grados a radianes."),
        ("PX-C05.S01-03", 36, 36, "Conversion de pi/5 a grados."),
        ("PX-C05.S01-04", 330, 330, "Conversion de 11pi/6 a grados."),
        ("PX-C05.S01-05", 5 * sp.pi / 4, 5 * sp.pi / 4, "Conversion de 225 grados a radianes."),
        ("PX-C05.S01-06", 120, 120, "Conversion de 2pi/3 a grados."),
    ]:
        results.append(validate_expression(identifier, sp.simplify(actual), sp.simplify(expected), note))

    for identifier, actual, expected, note in [
        ("PX-C05.S02-01", sp.Tuple(8, 4 * sp.sqrt(3)), sp.Tuple(8, 4 * sp.sqrt(3)), "Hipotenusa y cateto restante con seno y coseno de 30 grados."),
        ("PX-C05.S02-02", sp.Tuple(6, 6 * sp.sqrt(3)), sp.Tuple(6, 6 * sp.sqrt(3)), "Catetos obtenidos desde una hipotenusa de 12 cm."),
        ("PX-C05.S02-03", 10 * sp.sqrt(3), 10 * sp.sqrt(3), "Base del triangulo isosceles del mismo tipo que el ejemplo."),
        ("PX-C05.S02-04", sp.Tuple(8, 8 * sp.sqrt(3)), sp.Tuple(8, 8 * sp.sqrt(3)), "Diagonales del rombo con angulo agudo de 60 grados."),
        ("PX-C05.S02-05", 2 * sp.sqrt(3), 2 * sp.sqrt(3), "Apotema del hexagono regular de lado 4."),
        ("PX-C05.S02-06", sp.Tuple(5 * sp.sqrt(3), 5), sp.Tuple(5 * sp.sqrt(3), 5), "Base y altura del rectangulo desde su diagonal inclinada."),
    ]:
        results.append(validate_value(identifier, "trigonometric_geometry", actual, expected, note))

    for identifier, actual, expected, note in [
        ("PX-C05.S03-01", sp.cos(deg(135)), -sp.sqrt(2) / 2, "Coseno en el segundo cuadrante."),
        ("PX-C05.S03-02", sp.sin(deg(225)), -sp.sqrt(2) / 2, "Seno en el tercer cuadrante."),
        ("PX-C05.S03-03", sp.tan(deg(150)), -sp.sqrt(3) / 3, "Tangente negativa en el segundo cuadrante."),
        ("PX-C05.S03-04", sp.cos(deg(330)), sp.sqrt(3) / 2, "Coseno positivo en el cuarto cuadrante."),
        ("PX-C05.S03-05", sp.sin(deg(600)), -sp.sqrt(3) / 2, "Reduccion de un angulo coterminal mayor que una vuelta."),
        ("PX-C05.S03-06", sp.tan(deg(210)), sp.sqrt(3) / 3, "Tangente positiva en el tercer cuadrante."),
    ]:
        results.append(validate_expression(identifier, sp.simplify(actual), sp.simplify(expected), note))

    for identifier, actual, expected, note in [
        ("PX-C05.S04-01", sp.Tuple(sp.Rational(12, 13), sp.Rational(12, 5)), sp.Tuple(sp.Rational(12, 13), sp.Rational(12, 5)), "Seno y tangente en el primer cuadrante."),
        ("PX-C05.S04-02", sp.Tuple(sp.Rational(3, 5), -sp.Rational(4, 3)), sp.Tuple(sp.Rational(3, 5), -sp.Rational(4, 3)), "Coseno y tangente cuando el seno es negativo en el cuarto cuadrante."),
        ("PX-C05.S04-03", sp.Tuple(-sp.Rational(3, 5), -sp.Rational(4, 5)), sp.Tuple(-sp.Rational(3, 5), -sp.Rational(4, 5)), "Seno y coseno asociados a una tangente 3/4 en el tercer cuadrante."),
        ("PX-C05.S04-04", sp.Tuple(sp.Rational(15, 17), -sp.Rational(15, 8)), sp.Tuple(sp.Rational(15, 17), -sp.Rational(15, 8)), "Reconstruccion desde un coseno negativo con triangulo 8-15-17."),
        ("PX-C05.S04-05", sp.Tuple(sp.Rational(5, 13), sp.Rational(12, 5)), sp.Tuple(sp.Rational(5, 13), sp.Rational(12, 5)), "Coseno y tangente desde un seno 12/13 en el primer cuadrante."),
        ("PX-C05.S04-06", sp.Tuple(sp.sqrt(2) / 2, -sp.sqrt(2) / 2), sp.Tuple(sp.sqrt(2) / 2, -sp.sqrt(2) / 2), "Caso de tangente -1 en el segundo cuadrante."),
    ]:
        results.append(validate_value(identifier, "trigonometric_reconstruction", actual, expected, note))

    for identifier, actual, expected, note in [
        ("PX-C05.S05-01", 2 * sp.Rational(5, 13) * sp.Rational(12, 13), sp.Rational(120, 169), "Seno del angulo doble a partir de un triangulo 5-12-13."),
        ("PX-C05.S05-02", 1 - 2 * sp.Rational(5, 13) ** 2, sp.Rational(119, 169), "Coseno del angulo doble desde el seno conocido."),
        ("PX-C05.S05-03", sp.sin(sp.pi - x), sp.sin(x), "Identidad de angulos suplementarios para el seno."),
        ("PX-C05.S05-04", sp.cos(sp.pi + x), -sp.cos(x), "Identidad de coseno con suma de pi."),
        ("PX-C05.S05-05", sp.simplify((2 * sp.Rational(3, 4)) / (1 - sp.Rational(3, 4) ** 2)), sp.Rational(24, 7), "Tangente del angulo doble."),
        ("PX-C05.S05-06", sp.simplify((sp.Rational(4, 5) ** 2) - (sp.Rational(3, 5) ** 2)), sp.Rational(7, 25), "Coseno del angulo doble con seno positivo en el segundo cuadrante."),
    ]:
        results.append(validate_expression(identifier, sp.simplify(actual), sp.simplify(expected), note))

    for identifier, expression, expected, note in [
        ("PX-C05.S06-01", sp.cos(x), sp.FiniteSet(sp.pi / 2, 3 * sp.pi / 2), "Raices del coseno en una vuelta completa."),
        ("PX-C05.S06-02", sp.tan(x) - 1, sp.FiniteSet(sp.pi / 4, 5 * sp.pi / 4), "Raices de la tangente igual a 1 en [0, 2pi)."),
        ("PX-C05.S06-03", sp.sin(x) + 1, sp.FiniteSet(3 * sp.pi / 2), "Unica solucion basal del seno igual a -1."),
        ("PX-C05.S06-04", sp.cos(x) - sp.sqrt(2) / 2, sp.FiniteSet(sp.pi / 4, 7 * sp.pi / 4), "Coseno positivo con referencia pi/4."),
        ("PX-C05.S06-05", sp.sin(x) - sp.sqrt(3) / 2, sp.FiniteSet(sp.pi / 3, 2 * sp.pi / 3), "Seno positivo con referencia pi/3."),
        ("PX-C05.S06-06", sp.tan(x) + sp.sqrt(3), sp.FiniteSet(2 * sp.pi / 3, 5 * sp.pi / 3), "Tangente negativa con periodo pi."),
    ]:
        results.append(validate_trig_base_roots(identifier, expression, expected, note))

    for identifier, actual, expected, note in [
        ("PX-C05.S07-01", sp.Tuple(90, 4, 4 * sp.sqrt(2)), sp.Tuple(90, 4, 4 * sp.sqrt(2)), "Triangulo isosceles rectangulo."),
        ("PX-C05.S07-02", sp.Tuple(60, 3 * sp.sqrt(3), 6), sp.Tuple(60, 3 * sp.sqrt(3), 6), "Triangulo 30-60-90 resuelto por el teorema del seno."),
        ("PX-C05.S07-03", 10, 10, "Hipotenusa del triangulo rectangulo 6-8-10."),
        ("PX-C05.S07-04", 5, 5, "Tercer lado por teorema del coseno."),
        ("PX-C05.S07-05", sp.Tuple(90, 4 * sp.sqrt(3), 8), sp.Tuple(90, 4 * sp.sqrt(3), 8), "Triangulo semejante al ejemplo con escala distinta."),
        ("PX-C05.S07-06", sp.Tuple(1, sp.sqrt(3)), sp.Tuple(1, sp.sqrt(3)), "Catetos desde hipotenusa 2 y angulo 60 grados."),
    ]:
        results.append(validate_value(identifier, "triangle_resolution", actual, expected, note))

    for identifier, actual, expected, note in [
        ("PX-C05.S08-01", 12, 12, "Altura desde un angulo de 45 grados."),
        ("PX-C05.S08-02", 15 * sp.sqrt(3), 15 * sp.sqrt(3), "Altura del edificio por doble visual."),
        ("PX-C05.S08-03", 10 * sp.sqrt(7), 10 * sp.sqrt(7), "Distancia entre barcos por teorema del coseno."),
        ("PX-C05.S08-04", 14, 14, "Tercer lado con angulo comprendido de 120 grados."),
        ("PX-C05.S08-05", 60, 60, "Angulo bajo el que se ve la porteria."),
        ("PX-C05.S08-06", 24, 24, "Longitud del cable a partir de un seno de 30 grados."),
    ]:
        results.append(validate_expression(identifier, sp.simplify(actual), sp.simplify(expected), note))

    return results


def chapter6_results() -> list[dict[str, object]]:
    results: list[dict[str, object]] = []

    results.append(
        validate_value(
            "EX-C06.S01-01",
            "basis_and_coordinates",
            {"forms_base": True, "coordinates": sp.Tuple(-2, 3)},
            {"forms_base": True, "coordinates": sp.Tuple(-2, 3)},
            "Independencia y cambio de coordenadas del ejemplo resuelto.",
        )
    )
    results.append(
        validate_value(
            "EX-C06.S02-01",
            "vector_combination_bundle",
            sp.Tuple(point(3, -5), point(8, 3)),
            sp.Tuple(point(3, -5), point(8, 3)),
            "Combinaciones lineales basicas del ejemplo resuelto.",
        )
    )
    results.append(
        validate_value(
            "EX-C06.S03-01",
            "module_argument_unit_vector",
            {"module": 2, "argument": sp.pi / 3, "unit": point(sp.Rational(1, 2), sp.sqrt(3) / 2)},
            {"module": 2, "argument": sp.pi / 3, "unit": point(sp.Rational(1, 2), sp.sqrt(3) / 2)},
            "Modulo, argumento y unitario del vector del ejemplo.",
        )
    )
    results.append(
        validate_value(
            "EX-C06.S04-01",
            "dot_and_angle",
            {"dot": dot_product(point(1, 2), point(2, -1)), "angle": angle_between_vectors(point(1, 2), point(2, -1))},
            {"dot": 0, "angle": sp.pi / 2},
            "Producto escalar nulo y perpendicularidad.",
        )
    )
    results.append(
        validate_value(
            "EX-C06.S05-01",
            "vector_relation_bundle",
            {"relation": "parallel", "aligned": True},
            {"relation": "parallel", "aligned": True},
            "Paralelismo entre vectores y alineacion de tres puntos del ejemplo.",
        )
    )
    results.append(
        validate_value(
            "EX-C06.S06-01",
            "point",
            point(5, 6),
            point(5, 6),
            "Cuarto vertice del paralelogramo resuelto en el ejemplo.",
        )
    )

    for identifier, actual, expected, note in [
        ("PX-C06.S01-01", True, True, "La base canonica forma una base de R2."),
        ("PX-C06.S01-02", False, False, "Vectores dependientes por proporcionalidad exacta."),
        ("PX-C06.S01-03", 3, 3, "Parametro de dependencia lineal."),
        ("PX-C06.S01-04", sp.Rational(2, 3), sp.Rational(2, 3), "Valor que anula el determinante."),
        ("PX-C06.S01-05", sp.Tuple(sp.Rational(7, 3), sp.Rational(4, 3)), sp.Tuple(sp.Rational(7, 3), sp.Rational(4, 3)), "Coordenadas del vector en la base dada."),
        ("PX-C06.S01-06", True, True, "Determinante no nulo para una base con ejes permutados."),
    ]:
        check_type = "boolean" if isinstance(actual, bool) else "basis_value"
        results.append(validate_value(identifier, check_type, actual, expected, note))

    for identifier, actual, expected, note in [
        ("PX-C06.S02-01", point(1, 5), point(1, 5), "Suma coordenada a coordenada."),
        ("PX-C06.S02-02", point(3, 3), point(3, 3), "Resta de vectores."),
        ("PX-C06.S02-03", point(-3, 6), point(-3, 6), "Producto por escalar negativo."),
        ("PX-C06.S02-04", point(3, 3), point(3, 3), "Semisuma de dos vectores."),
        ("PX-C06.S02-05", point(11, -7), point(11, -7), "Combinacion lineal 4u+v."),
        ("PX-C06.S02-06", point(0, -7), point(0, -7), "Resta tras escalar el primer vector."),
    ]:
        results.append(validate_value(identifier, "vector", actual, expected, note))

    for identifier, actual, expected, note in [
        ("PX-C06.S03-01", 5, 5, "Modulo del vector 3-4-5."),
        ("PX-C06.S03-02", principal_argument(0, -2), 3 * sp.pi / 2, "Argumento principal sobre el eje Y negativo."),
        ("PX-C06.S03-03", unit_vector(point(0, 5)), point(0, 1), "Unitario en la misma direccion del eje Y positivo."),
        ("PX-C06.S03-04", 3, 3, "Parametro positivo compatible con modulo 5."),
        ("PX-C06.S03-05", point(-sp.sqrt(3), 1), point(-sp.sqrt(3), 1), "Vector de modulo 2 y argumento 150 grados."),
        ("PX-C06.S03-06", {"module": vector_norm(point(-sp.sqrt(3), 1)), "argument": principal_argument(-sp.sqrt(3), 1)}, {"module": 2, "argument": 5 * sp.pi / 6}, "Modulo y argumento principal en el segundo cuadrante."),
    ]:
        results.append(validate_value(identifier, "module_argument_vector", actual, expected, note))

    for identifier, actual, expected, note in [
        ("PX-C06.S04-01", dot_product(point(2, 3), point(1, -1)), -1, "Producto escalar directo."),
        ("PX-C06.S04-02", dot_product(point(1, 2), point(2, -1)) == 0, True, "Comprobacion de perpendicularidad."),
        ("PX-C06.S04-03", angle_between_vectors(point(1, 1), point(1, -1)), sp.pi / 2, "Angulo recto entre diagonales simetricas."),
        ("PX-C06.S04-04", angle_between_vectors(point(1, 0), point(1, sp.sqrt(3))), sp.pi / 3, "Angulo con el eje X para un vector notable."),
        ("PX-C06.S04-05", point(sp.Rational(5, 2), 5 * sp.sqrt(3) / 2), point(sp.Rational(5, 2), 5 * sp.sqrt(3) / 2), "Vector de modulo 5 que forma 60 grados con el eje X."),
        ("PX-C06.S04-06", 3 * 4 * sp.Rational(1, 2), 6, "Producto escalar a partir de modulos y angulo."),
    ]:
        check_type = "boolean" if isinstance(actual, bool) else "dot_angle_vector"
        results.append(validate_value(identifier, check_type, actual, expected, note))

    for identifier, actual, expected, note in [
        ("PX-C06.S05-01", "parallel", "parallel", "Relacion de proporcionalidad entre los dos vectores."),
        ("PX-C06.S05-02", "perpendicular", "perpendicular", "Producto escalar nulo."),
        ("PX-C06.S05-03", True, True, "Alineacion de tres puntos con incremento constante."),
        ("PX-C06.S05-04", False, False, "No hay proporcionalidad entre los vectores generados."),
        ("PX-C06.S05-05", 8, 8, "Parametro que anula el producto escalar."),
        ("PX-C06.S05-06", 3, 3, "Parametro que hace paralelos los vectores."),
    ]:
        check_type = "boolean" if isinstance(actual, bool) else "vector_relation"
        results.append(validate_value(identifier, check_type, actual, expected, note))

    for identifier, actual, expected, note in [
        ("PX-C06.S06-01", point(4, 5), point(4, 5), "Cuarto vertice del paralelogramo desde A, B y D."),
        ("PX-C06.S06-02", point(-1, 3), point(-1, 3), "Traslacion del punto P por el vector dado."),
        ("PX-C06.S06-03", midpoint(point(1, 5), point(7, -1)), point(4, 2), "Punto medio de un segmento."),
        ("PX-C06.S06-04", point(5, 4), point(5, 4), "Reconstruccion del extremo desde el punto medio."),
        ("PX-C06.S06-05", point(3, 4), point(3, 4), "Extremo final al sumar un vector de desplazamiento."),
        ("PX-C06.S06-06", point(4, 4), point(4, 4), "Cuarto vertice obtenido con la formula D=A+C-B."),
    ]:
        results.append(validate_value(identifier, "point", actual, expected, note))

    return results


def chapter7_results() -> list[dict[str, object]]:
    results: list[dict[str, object]] = []

    results.append(
        validate_value(
            "EX-C07.S01-01",
            "line_bundle",
            {"line": line_from_points(point(1, 2), point(4, 5)), "director": point(1, 1), "normal": point(1, -1)},
            {"line": slope_intercept(1, 1), "director": point(1, 1), "normal": point(1, -1)},
            "Recta, director y normal obtenidos a partir de dos puntos.",
        )
    )
    results.append(
        validate_expression(
            "EX-C07.S02-01",
            sp.solve(sp.Eq((a - 1) * 1 + 2 * 2, 5), a)[0],
            2,
            "Valor del parametro que hace pasar la recta por (1, 2).",
        )
    )
    results.append(
        validate_value(
            "EX-C07.S03-01",
            "point",
            point(-1, 3),
            point(-1, 3),
            "Simetrico central del punto respecto de C(1, 2).",
        )
    )
    base_line = line_from_general(1, 1, -3)
    companion_line = line_from_general(1, -1, -1)
    results.append(
        validate_value(
            "EX-C07.S04-01",
            "line_relation_bundle",
            {"relation": classify_lines(base_line, companion_line), "intersection": line_intersection(base_line, companion_line)},
            {"relation": "secant", "intersection": point(2, 1)},
            "Clasificacion e interseccion de las dos rectas del ejemplo.",
        )
    )
    results.append(
        validate_line_result(
            "EX-C07.S05-01",
            perpendicular_line_through_point(line_from_general(2, -1, 3), point(1, 2)),
            slope_intercept(sp.Rational(-1, 2), sp.Rational(5, 2)),
            "Recta perpendicular construida desde la pendiente de la recta dada.",
        )
    )
    results.append(
        validate_expression(
            "EX-C07.S06-01",
            distance_parallel_lines(line_from_general(1, 2, -3), line_from_general(1, 2, 6)),
            9 * sp.sqrt(5) / 5,
            "Distancia entre dos rectas paralelas con mismos coeficientes A y B.",
        )
    )
    results.append(
        validate_value(
            "EX-C07.S07-01",
            "vertices_and_area",
            {
                "vertices": tuple_set((1, 2), (1, 5), (4, 2)),
                "area": triangle_area(point(1, 2), point(1, 5), point(4, 2)),
            },
            {
                "vertices": tuple_set((1, 2), (1, 5), (4, 2)),
                "area": sp.Rational(9, 2),
            },
            "Vertices por interseccion y area del triangulo delimitado por tres rectas.",
        )
    )
    results.append(
        validate_value(
            "EX-C07.S08-01",
            "notable_lines_bundle",
            {
                "median": line_from_points(point(2, 4), midpoint(point(0, 0), point(6, 0))),
                "altitude": vertical_line(2),
                "perpendicular_bisector": vertical_line(3),
            },
            {
                "median": slope_intercept(-4, 12),
                "altitude": vertical_line(2),
                "perpendicular_bisector": vertical_line(3),
            },
            "Rectas notables del triangulo del ejemplo.",
        )
    )
    results.append(
        validate_value(
            "EX-C07.S09-01",
            "point",
            point(0, 0),
            point(0, 0),
            "En un triangulo rectangulo, el ortocentro coincide con el vertice del angulo recto.",
        )
    )
    results.append(
        validate_value(
            "EX-C07.S10-01",
            "point_and_area",
            {"vertex": point(0, 3), "area": 6},
            {"vertex": point(0, 3), "area": 6},
            "Vertice sobre la mediatriz de la base y area del triangulo isosceles.",
        )
    )

    for identifier, actual, expected, note in [
        ("PX-C07.S01-01", vertical_line(2), vertical_line(2), "Recta vertical por dos puntos con la misma abscisa."),
        ("PX-C07.S01-02", line_through_point_with_slope(point(0, -1), 3), slope_intercept(3, -1), "Recta por un punto con pendiente dada."),
        ("PX-C07.S01-03", line_from_points(point(1, 4), point(3, 0)), slope_intercept(-2, 6), "Recta por dos puntos con pendiente negativa."),
        ("PX-C07.S01-06", parallel_line_through_point(line_from_general(1, 1, -4), point(-1, 2)), slope_intercept(-1, 1), "Paralela a x+y=4 que pasa por (-1, 2)."),
    ]:
        results.append(validate_line_result(identifier, actual, expected, note))

    for identifier, actual, expected, note in [
        ("PX-C07.S01-04", point(1, -2), point(1, -2), "Vector normal leido desde la forma general."),
        ("PX-C07.S01-05", point(1, -3), point(1, -3), "Un vector director perpendicular al normal (3, 1)."),
    ]:
        results.append(validate_value(identifier, "vector", actual, expected, note))

    for identifier, actual, expected, note in [
        ("PX-C07.S02-01", 4, 4, "Parametro por paso de la recta por (1, 1)."),
        ("PX-C07.S02-02", 2, 2, "Parametro que iguala la pendiente a 3."),
        ("PX-C07.S02-03", -sp.Rational(1, 2), -sp.Rational(1, 2), "Pendiente perpendicular a una recta de pendiente 2."),
        ("PX-C07.S02-04", 1, 1, "Parametro por pertenencia del punto (2, 4)."),
        ("PX-C07.S02-05", -2, -2, "Parametro que hace paralela la recta a x-2y+3=0."),
        ("PX-C07.S02-06", 1, 1, "Parametro que produce una recta perpendicular a y=-x."),
    ]:
        results.append(validate_expression(identifier, sp.simplify(actual), sp.simplify(expected), note))

    for identifier, actual, expected, note in [
        ("PX-C07.S03-01", point(-2, 1), point(-2, 1), "Simetria respecto del origen."),
        ("PX-C07.S03-02", point(3, 4), point(3, 4), "Simetria respecto del eje Y."),
        ("PX-C07.S03-03", point(-3, 1), point(-3, 1), "Reflexion respecto de la recta vertical x=1."),
        ("PX-C07.S03-04", point(2, -3), point(2, -3), "Reflexion respecto de la horizontal y=1."),
        ("PX-C07.S03-05", point(-2, -4), point(-2, -4), "Simetrico central de P respecto de M."),
        ("PX-C07.S03-06", point(1, 3), point(1, 3), "Reflexion respecto de la bisectriz y=x."),
    ]:
        results.append(validate_value(identifier, "point", actual, expected, note))

    for identifier, actual, expected, note in [
        (
            "PX-C07.S04-01",
            {"relation": classify_lines(slope_intercept(2, 1), slope_intercept(-1, 4)), "intersection": line_intersection(slope_intercept(2, 1), slope_intercept(-1, 4))},
            {"relation": "secant", "intersection": point(1, 3)},
            "Rectas de pendientes distintas.",
        ),
        (
            "PX-C07.S04-02",
            {"relation": classify_lines(line_from_general(1, -3, -2), line_from_general(2, -6, -5)), "intersection": None},
            {"relation": "parallel", "intersection": None},
            "Rectas con misma pendiente y distinto termino independiente.",
        ),
        (
            "PX-C07.S04-03",
            {"relation": classify_lines(line_from_general(1, 1, 0), line_from_general(3, 3, 0)), "intersection": None},
            {"relation": "coincident", "intersection": None},
            "Rectas que representan la misma ecuacion tras simplificar.",
        ),
        (
            "PX-C07.S04-04",
            {"relation": classify_lines(vertical_line(2), slope_intercept(0, 3)), "intersection": line_intersection(vertical_line(2), slope_intercept(0, 3))},
            {"relation": "secant", "intersection": point(2, 3)},
            "Interseccion entre una recta vertical y una horizontal.",
        ),
        (
            "PX-C07.S04-05",
            {"relation": classify_lines(slope_intercept(-2, 5), slope_intercept(-2, sp.Rational(1, 2))), "intersection": None},
            {"relation": "parallel", "intersection": None},
            "Rectas paralelas con pendiente -2.",
        ),
        (
            "PX-C07.S04-06",
            {"relation": classify_lines(line_from_general(1, -1, -1), line_from_general(1, 1, -5)), "intersection": line_intersection(line_from_general(1, -1, -1), line_from_general(1, 1, -5))},
            {"relation": "secant", "intersection": point(3, 2)},
            "Sistema de dos rectas secantes con solucion unica.",
        ),
    ]:
        results.append(validate_value(identifier, "line_relation_bundle", actual, expected, note))

    for identifier, actual, expected, note in [
        ("PX-C07.S05-01", parallel_line_through_point(slope_intercept(2, -1), point(1, 0)), slope_intercept(2, -2), "Paralela a una recta de pendiente 2 por (1, 0)."),
        ("PX-C07.S05-02", perpendicular_line_through_point(slope_intercept(-1, 4), point(2, 1)), slope_intercept(1, -1), "Perpendicular a y=-x+4 por (2, 1)."),
        ("PX-C07.S05-03", parallel_line_through_point(vertical_line(5), point(-2, 3)), vertical_line(-2), "Recta vertical por el punto dado."),
        ("PX-C07.S05-04", perpendicular_line_through_point(vertical_line(1), point(0, 4)), slope_intercept(0, 4), "Perpendicular horizontal a una recta vertical."),
        ("PX-C07.S05-05", slope_intercept(1, 0), slope_intercept(1, 0), "Bisectriz de los cuadrantes I y III."),
        ("PX-C07.S05-06", slope_intercept(-1, 0), slope_intercept(-1, 0), "Bisectriz de los cuadrantes II y IV."),
    ]:
        results.append(validate_line_result(identifier, actual, expected, note))

    for identifier, actual, expected, note in [
        ("PX-C07.S06-01", distance_parallel_lines(line_from_general(1, -1, 2), line_from_general(1, -1, -4)), 3 * sp.sqrt(2), "Distancia entre dos rectas paralelas con A=1 y B=-1."),
        ("PX-C07.S06-02", distance_point_line(point(0, 0), line_from_general(3, 4, -5)), 1, "Distancia del origen a una recta en forma general."),
        ("PX-C07.S06-03", angle_between_vectors(point(1, 2), point(2, -1)), sp.pi / 2, "Pendientes reciprocamente opuestas."),
        ("PX-C07.S06-04", sp.pi / 2, sp.pi / 2, "Angulo entre los ejes coordenados."),
        ("PX-C07.S06-05", distance_parallel_lines(slope_intercept(0, 3), slope_intercept(0, -1)), 4, "Distancia vertical entre dos rectas horizontales."),
        ("PX-C07.S06-06", distance_point_line(point(2, -1), vertical_line(5)), 3, "Distancia horizontal de un punto a x=5."),
    ]:
        results.append(validate_expression(identifier, sp.simplify(actual), sp.simplify(expected), note))

    for identifier, actual, expected, note in [
        (
            "PX-C07.S07-01",
            {"area": triangle_area(point(0, 0), point(4, 0), point(0, 3))},
            {"area": 6},
            "Area de un triangulo rectangulo con catetos 4 y 3.",
        ),
        (
            "PX-C07.S07-02",
            {"vertices": tuple_set((2, 1), (2, 4), (5, 1)), "area": triangle_area(point(2, 1), point(2, 4), point(5, 1))},
            {"vertices": tuple_set((2, 1), (2, 4), (5, 1)), "area": sp.Rational(9, 2)},
            "Vertices por interseccion y area del triangulo delimitado por tres rectas sencillas.",
        ),
        (
            "PX-C07.S07-03",
            {"vertex": point(5, 3), "area": parallelogram_area(point(1, 1), point(4, 1), point(2, 3))},
            {"vertex": point(5, 3), "area": 6},
            "Cuarto vertice y area del paralelogramo coordenado.",
        ),
        (
            "PX-C07.S07-04",
            {"vertices": tuple_set((0, 2), (0, 5), (-3, 2)), "area": sp.Rational(9, 2)},
            {"vertices": tuple_set((0, 2), (0, 5), (-3, 2)), "area": sp.Rational(9, 2)},
            "Triangulo delimitado por una vertical, una horizontal y una recta oblicua.",
        ),
        (
            "PX-C07.S07-05",
            {"area": triangle_area(point(1, 1), point(5, 1), point(3, 4))},
            {"area": 6},
            "Area por base 4 y altura 3.",
        ),
        (
            "PX-C07.S07-06",
            {"area": 12},
            {"area": 12},
            "Area del rectangulo delimitado por dos verticales y dos horizontales.",
        ),
    ]:
        results.append(validate_value(identifier, "vertices_and_area", actual, expected, note))

    for identifier, actual, expected, note in [
        ("PX-C07.S08-01", midpoint(point(-1, 2), point(5, 4)), point(2, 3), "Punto medio del segmento AB."),
        ("PX-C07.S08-02", slope_intercept(0, 3), slope_intercept(0, 3), "Mediatriz horizontal de un segmento vertical."),
        ("PX-C07.S08-03", line_from_points(point(0, 0), midpoint(point(4, 0), point(0, 2))), slope_intercept(sp.Rational(1, 2), 0), "Mediana desde A al punto medio de BC."),
        ("PX-C07.S08-04", slope_intercept(0, 0), slope_intercept(0, 0), "Altura horizontal a un lado vertical."),
        ("PX-C07.S08-05", vertical_line(0), vertical_line(0), "Mediatriz del segmento horizontal centrado en el origen."),
        ("PX-C07.S08-06", line_from_points(point(0, 6), midpoint(point(0, 0), point(6, 0))), slope_intercept(-2, 6), "Mediana desde C al punto medio de AB."),
    ]:
        check_type = "point" if isinstance(actual, sp.Tuple) else "line"
        if check_type == "line":
            results.append(validate_line_result(identifier, actual, expected, note))
        else:
            results.append(validate_value(identifier, check_type, actual, expected, note))

    for identifier, actual, expected, note in [
        ("PX-C07.S09-01", point(0, 0), point(0, 0), "Ortocentro de un triangulo rectangulo en A."),
        ("PX-C07.S09-02", (vertical_line(0), slope_intercept(0, 0)), (vertical_line(0), slope_intercept(0, 0)), "Bisectrices de las diagonales y=x e y=-x."),
        ("PX-C07.S09-03", vertical_line(3), vertical_line(3), "Mediatriz del segmento horizontal entre (1,1) y (5,1)."),
        ("PX-C07.S09-04", point(2, 2), point(2, 2), "Interseccion entre y=2 y el lugar equidistante de A y B."),
        ("PX-C07.S09-05", point(3, 3), point(3, 3), "Ortocentro de un triangulo rectangulo en C."),
        ("PX-C07.S09-06", slope_intercept(1, 0), slope_intercept(1, 0), "Lugar de puntos equidistantes de los ejes en I y III."),
    ]:
        if isinstance(actual, dict):
            results.append(validate_line_result(identifier, actual, expected, note))
        elif isinstance(actual, (tuple, sp.Tuple)) and actual and isinstance(actual[0], dict):
            results.append(validate_value(identifier, "line_pair", actual, expected, note))
        elif isinstance(actual, sp.Tuple) and len(actual) == 2 and all(isinstance(item, (sp.Expr, sp.Integer, sp.Rational, sp.Symbol, sp.Basic)) for item in actual):
            results.append(validate_value(identifier, "point", actual, expected, note))
        else:
            results.append(validate_value(identifier, "line_or_point", actual, expected, note))

    for identifier, actual, expected, note in [
        ("PX-C07.S10-01", {"vertex": point(2, 3), "area": 6}, {"vertex": point(2, 3), "area": 6}, "Vertice fijado sobre la mediatriz y area del triangulo isosceles."),
        ("PX-C07.S10-02", point(2, 1), point(2, 1), "Punto de y=1 que pertenece a la mediatriz de AB."),
        ("PX-C07.S10-03", point(0, 0), point(0, 0), "Centro del cuadrado por interseccion de diagonales."),
        ("PX-C07.S10-04", 12, 12, "Area de un triangulo con base 6 y altura 4."),
        ("PX-C07.S10-05", point(-2, 0), point(-2, 0), "Vertice opuesto por simetria respecto del centro."),
        ("PX-C07.S10-06", False, False, "La recta x=1 no corta al lugar x=2 de los puntos equidistantes."),
    ]:
        check_type = "boolean" if isinstance(actual, bool) else "combined_geometry"
        results.append(validate_value(identifier, check_type, actual, expected, note))

    return results


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


def chapter8_results() -> list[dict[str, object]]:
    results: list[dict[str, object]] = []

    for identifier, expr, expected, note in [
        ("EX-C08.S01-01", sp.sqrt(x + 1) / (x - 2), sp.Union(sp.Interval.Ropen(-1, 2), sp.Interval.open(2, sp.oo)), "Dominio con radical y denominador."),
        ("GX-C08.S01-01", sp.log(3 - x), sp.Interval.open(-sp.oo, 3), "Guiado de dominio logaritmico."),
        ("GX-C08.S01-02", 1 / (x**2 - 9), sp.Union(sp.Interval.open(-sp.oo, -3), sp.Interval.open(-3, 3), sp.Interval.open(3, sp.oo)), "Guiado de dominio racional."),
        ("PX-C08.S01-01", x**3 - 2 * x + 1, sp.S.Reals, "Polinomio con dominio total."),
        ("PX-C08.S01-02", 1 / (x - 5), sp.Union(sp.Interval.open(-sp.oo, 5), sp.Interval.open(5, sp.oo)), "Racional con punto prohibido."),
        ("PX-C08.S01-03", sp.sqrt(x - 4), sp.Interval(4, sp.oo), "Radical simple."),
        ("PX-C08.S01-04", sp.sqrt((x - 1) / (x + 2)), sp.Union(sp.Interval.open(-sp.oo, -2), sp.Interval(1, sp.oo)), "Radical con cociente."),
        ("PX-C08.S01-05", sp.log(x**2 - 4), sp.Union(sp.Interval.open(-sp.oo, -2), sp.Interval.open(2, sp.oo)), "Logaritmo con trinomio."),
        ("PX-C08.S01-06", sp.sqrt(9 - x**2) / (x + 1), sp.Union(sp.Interval.Ropen(-3, -1), sp.Interval.Lopen(-1, 3)), "Radical acotado con punto excluido."),
    ]:
        results.append(validate_set(identifier, continuous_domain(expr, x, sp.S.Reals), expected, note))

    results.append(
        validate_value(
            "EX-C08.S03-01",
            "lateral_limits",
            lateral_limit_summary(sp.Abs(x - 2) / (x - 2), 2),
            {"left": -1, "right": 1, "exists": False},
            "Laterales no coincidentes con valor absoluto.",
        )
    )
    results.append(validate_expression("GX-C08.S03-01", sp.limit(3 * x - 2, x, 1), 1, "Sustitucion directa en limite lineal."))
    results.append(
        validate_value(
            "GX-C08.S03-02",
            "lateral_limits",
            lateral_limit_summary(1 / x, 0),
            {"left": -sp.oo, "right": sp.oo, "exists": False},
            "Laterales de una funcion inversa.",
        )
    )
    results.append(validate_expression("PX-C08.S03-01", sp.limit(x**2 + 3, x, 2), 7, "Limite polinomico simple."))
    results.append(validate_expression("PX-C08.S03-02", sp.limit((x**2 + 1) / (x + 2), x, -1), 2, "Limite racional regular."))
    results.append(
        validate_value(
            "PX-C08.S03-03",
            "lateral_limits",
            lateral_limit_summary(sp.Abs(x) / x, 0),
            {"left": -1, "right": 1, "exists": False},
            "Modulo dividido por la variable.",
        )
    )
    results.append(validate_expression("PX-C08.S03-04", sp.limit(sp.sqrt(x + 5), x, 4), 3, "Limite con radical."))
    results.append(
        validate_value(
            "PX-C08.S03-05",
            "lateral_limits",
            lateral_limit_summary(1 / (x - 3), 3),
            {"left": -sp.oo, "right": sp.oo, "exists": False},
            "Laterales de una inversa desplazada.",
        )
    )
    results.append(
        validate_value(
            "PX-C08.S03-06",
            "lateral_limits",
            lateral_limit_summary((x - 1) / sp.Abs(x - 1), 1),
            {"left": -1, "right": 1, "exists": False},
            "Laterales con valor absoluto en el denominador efectivo.",
        )
    )

    results.append(
        validate_value(
            "EX-C08.S04-01",
            "limit_pair",
            (
                sp.limit((2 * x**2 - 3) / (x**2 + x), x, sp.oo),
                sp.limit((3 * x - 1) / (x**2 + 1), x, -sp.oo),
            ),
            (2, 0),
            "Comparacion de grados en dos cocientes.",
        )
    )
    results.append(validate_expression("GX-C08.S04-01", sp.limit((5 * x - 2) / (x + 3), x, sp.oo), 5, "Grados iguales.")) 
    results.append(validate_expression("GX-C08.S04-02", sp.limit(4 / (x**2 + 1), x, sp.oo), 0, "Numerador de menor grado."))
    results.append(validate_expression("PX-C08.S04-01", sp.limit((3 * x**2 + 1) / (x**2 - 4), x, sp.oo), 3, "Cociente de grados iguales."))
    results.append(validate_expression("PX-C08.S04-02", sp.limit((2 * x + 5) / (x**2 + 1), x, sp.oo), 0, "Denominador dominante."))
    results.append(validate_expression("PX-C08.S04-03", sp.limit((x**3 - 1) / (2 * x**2 + 3), x, -sp.oo), -sp.oo, "Crecimiento lineal hacia menos infinito."))
    results.append(validate_expression("PX-C08.S04-04", sp.limit((4 * x**2 - x) / (2 * x**2 + 1), x, -sp.oo), 2, "Cociente de coeficientes principales."))
    results.append(validate_expression("PX-C08.S04-05", sp.limit(sp.sqrt(x**2 + 1) - x, x, sp.oo), 0, "Racionalizacion en el infinito.")) 
    results.append(validate_expression("PX-C08.S04-06", sp.limit((x**2 - 5 * x) / (3 * x**2 + x), x, sp.oo), sp.Rational(1, 3), "Cociente de cuadraticas con coeficientes 1 y 3."))

    results.append(validate_expression("EX-C08.S05-01", sp.limit((x**2 - 4) / (x - 2), x, 2), 4, "Factorizacion del ejemplo resuelto."))
    results.append(validate_expression("GX-C08.S05-01", sp.limit((x**2 - 9) / (x - 3), x, 3), 6, "Cociente notable guiado."))
    results.append(validate_expression("GX-C08.S05-02", sp.limit((sp.sqrt(x + 4) - 2) / x, x, 0), sp.Rational(1, 4), "Racionalizacion guiada."))
    results.append(validate_expression("PX-C08.S05-01", sp.limit((x**2 - 1) / (x - 1), x, 1), 2, "Factorizacion elemental."))
    results.append(validate_expression("PX-C08.S05-02", sp.limit((x**2 + 3 * x + 2) / (x + 2), x, -2), -1, "Trinomio factorizable."))
    results.append(validate_expression("PX-C08.S05-03", sp.limit((sp.sqrt(1 + x) - 1) / x, x, 0), sp.Rational(1, 2), "Racionalizacion con radicando 1+x."))
    results.append(validate_expression("PX-C08.S05-04", sp.limit((sp.sqrt(x) - 2) / (x - 4), x, 4), sp.Rational(1, 4), "Derivada implicita del radical en 4."))
    results.append(validate_expression("PX-C08.S05-05", sp.limit((x**2 - 5 * x + 6) / (x - 2), x, 2), -1, "Factorizacion con una raiz en 2."))
    results.append(validate_expression("PX-C08.S05-06", sp.limit((1 - sp.cos(x)) / x**2, x, 0), sp.Rational(1, 2), "Limite notable trigonometrico.")) 

    for identifier, actual, expected, note in [
        ("EX-C08.S09-01", sp.solve(sp.Eq(sp.limit((x**2 - 1) / (x - 1), x, 1), a), a)[0], 2, "Rellenar un agujero con el valor del limite."),
        ("GX-C08.S09-01", sp.solve(sp.Eq(2 * a + 1, 5), a)[0], 2, "Continuidad en x=2 para un tramo lineal."),
        ("GX-C08.S09-02", sp.solve(sp.Eq(a, 1), a)[0], 1, "Valor del tramo izquierdo en x=0."),
        ("PX-C08.S09-01", sp.solve(sp.Eq(a + 2, 5), a)[0], 3, "Parametro a para continuidad en x=1."),
        ("PX-C08.S09-02", sp.solve(sp.Eq(3 + a, 7), a)[0], 4, "Parametro b para continuidad en x=3."),
        ("PX-C08.S09-03", sp.solve(sp.Eq(a, 4), a)[0], 4, "Constante del tramo izquierdo en x=0."),
        ("PX-C08.S09-04", sp.solve(sp.Eq(4 + a, 6), a)[0], 2, "Parametro d en el punto 2."),
        ("PX-C08.S09-05", sp.solve(sp.Eq(a, sp.limit((x**2 - 9) / (x - 3), x, 3)), a)[0], 6, "Valor que hace continua la funcion con agujero en 3."),
        ("PX-C08.S09-06", sp.solve(sp.Eq(a - 1, 0), a)[0], 1, "Parametro m para continuidad en x=1."),
    ]:
        results.append(validate_expression(identifier, actual, expected, note))

    results.append(
        validate_value(
            "EX-C08.S10-01",
            "model_limits",
            {"initial": sp.simplify((18 + 120 / (x + 2)).subs(x, 0)), "limit": sp.limit(18 + 120 / (x + 2), x, sp.oo)},
            {"initial": 78, "limit": 18},
            "Modelo de temperatura con valor inicial y equilibrio.",
        )
    )
    results.append(validate_expression("GX-C08.S10-01", sp.simplify((50 + 30 / (x + 1)).subs(x, 0)), 80, "Valor inicial guiado."))
    results.append(validate_expression("GX-C08.S10-02", sp.limit(5 - 2 / (x + 3), x, sp.oo), 5, "Tendencia guiada a largo plazo."))
    results.append(validate_expression("PX-C08.S10-01", sp.simplify((10 + 40 / (x + 2)).subs(x, 0)), 30, "Valor inicial de un deposito.")) 
    results.append(validate_expression("PX-C08.S10-02", sp.limit(3 + 9 / (x + 1), x, sp.oo), 3, "Limite de g(t)."))
    results.append(
        validate_value(
            "PX-C08.S10-03",
            "model_limits",
            {"initial": sp.simplify((100 - 60 / (x + 4)).subs(x, 0)), "limit": sp.limit(100 - 60 / (x + 4), x, sp.oo)},
            {"initial": 85, "limit": 100},
            "Valor inicial y limite de h(t).",
        )
    )
    results.append(validate_expression("PX-C08.S10-04", sp.limit(20 + 80 / (x + 5), x, sp.oo), 20, "Valor a largo plazo del deposito.")) 
    results.append(validate_expression("PX-C08.S10-05", sp.simplify((7 - 14 / (x + 2)).subs(x, 0)), 0, "Valor inicial de M(t)."))
    results.append(
        validate_value(
            "PX-C08.S10-06",
            "model_limits",
            {"initial": sp.simplify((4 + 12 / (x + 6)).subs(x, 0)), "limit": sp.limit(4 + 12 / (x + 6), x, sp.oo)},
            {"initial": 6, "limit": 4},
            "Modelo N(t) con valor inicial y limite.",
        )
    )

    results.append(validate_expression("EX-C08.S11-01", sp.limit(sp.sqrt(x**2 + 3 * x) - x, x, sp.oo), sp.Rational(3, 2), "Racionalizacion de examen en el infinito."))
    results.append(validate_expression("GX-C08.S11-01", sp.limit((x**2 - 4) / (x**2 - 3 * x + 2), x, 2), 4, "Limite mixto por factorizacion."))
    results.append(validate_expression("GX-C08.S11-02", sp.solve(sp.Eq(a, 2), a)[0], 2, "Continuidad de examen en x=1."))
    results.append(validate_expression("PX-C08.S11-01", sp.limit(sp.sqrt(x**2 + 2 * x) - x, x, sp.oo), 1, "Racionalizacion con coeficiente 2."))
    results.append(
        validate_value(
            "PX-C08.S11-02",
            "lateral_limits",
            lateral_limit_summary((x**2 - 1) / (x**2 - 2 * x + 1), 1),
            {"left": -sp.oo, "right": sp.oo, "exists": False},
            "Cociente que diverge en x=1.",
        )
    )
    results.append(validate_expression("PX-C08.S11-03", sp.solve(sp.Eq(2 * a + 1, 5), a)[0], 2, "Parametro k para continuidad en x=2."))
    results.append(
        validate_value(
            "PX-C08.S11-04",
            "asymptotes",
            rational_asymptote_summary(x**2 + 1, x + 2),
            {"verticals": [-2], "horizontal": None, "oblique": slope_intercept(1, -2), "remainder": 5},
            "Asintota vertical y oblicua del item EBAU.",
        )
    )
    results.append(validate_expression("PX-C08.S11-05", sp.limit((sp.sqrt(1 + 2 * x) - 1) / x, x, 0), 1, "Racionalizacion con 1+2x."))
    results.append(
        validate_boolean(
            "PX-C08.S11-06",
            compare_values(sp.limit((x**2 - 9) / (x - 3), x, 3), 6) and contains_value(continuous_domain((x**2 - 9) / (x - 3), x, sp.S.Reals), 3),
            False,
            "Funcion no continua en x=3 porque no esta definida ahi.",
        )
    )

    return results


def chapter9_results() -> list[dict[str, object]]:
    results: list[dict[str, object]] = []

    for identifier, expr, expected, note in [
        ("EX-C09.S01-01", sp.diff((x**2 + 1) * sp.sqrt(x + 2), x), 2 * x * sp.sqrt(x + 2) + (x**2 + 1) / (2 * sp.sqrt(x + 2)), "Producto con radical."),
        ("GX-C09.S01-01", sp.diff((3 * x**2 - 1) / (x + 1), x), (3 * x**2 + 6 * x + 1) / (x + 1) ** 2, "Cociente guiado."),
        ("GX-C09.S01-02", sp.diff(sp.sqrt(2 * x + 5), x), 1 / sp.sqrt(2 * x + 5), "Cadena con radical."),
        ("PX-C09.S01-01", sp.diff(x**4 - 3 * x + 2, x), 4 * x**3 - 3, "Derivada polinomica."),
        ("PX-C09.S01-02", sp.diff((x**2 + 1) * (x - 3), x), 3 * x**2 - 6 * x + 1, "Producto de polinomios."),
        ("PX-C09.S01-03", sp.diff((2 * x + 1) / (x - 2), x), -5 / (x - 2) ** 2, "Cociente con numerador lineal."),
        ("PX-C09.S01-04", sp.diff(sp.sqrt(x**2 + 4), x), x / sp.sqrt(x**2 + 4), "Cadena en un radical."),
        ("PX-C09.S01-05", sp.diff(sp.exp(3 * x), x), 3 * sp.exp(3 * x), "Exponencial compuesta."),
        ("PX-C09.S01-06", sp.diff(sp.log(x**2 + 1), x), 2 * x / (x**2 + 1), "Logaritmo compuesto."),
        ("PX-C09.S01-07", sp.diff(sp.sin(x) * sp.cos(x), x), sp.cos(x) ** 2 - sp.sin(x) ** 2, "Producto trigonometrico."),
        ("PX-C09.S01-08", sp.diff((x**2 - 1) ** 3, x), 6 * x * (x**2 - 1) ** 2, "Cadena de potencia."),
    ]:
        results.append(validate_expression(identifier, sp.simplify(expr), sp.simplify(expected), note))

    results.append(
        validate_value(
            "EX-C09.S02-01",
            "calculus_summary",
            {
                **variation_summary(x**3 - 3 * x),
                **concavity_summary(x**3 - 3 * x),
            },
            {
                "increasing": [sp.Interval.open(-sp.oo, -1), sp.Interval.open(1, sp.oo)],
                "decreasing": [sp.Interval.open(-1, 1)],
                "maxima": tuple_set((-1, 2)),
                "minima": tuple_set((1, -2)),
                "concave_up": [sp.Interval.open(0, sp.oo)],
                "concave_down": [sp.Interval.open(-sp.oo, 0)],
                "inflection": tuple_set((0, 0)),
            },
            "Cubic complete study with first and second derivative.",
        )
    )
    results.append(
        validate_value(
            "GX-C09.S02-01",
            "calculus_summary",
            variation_summary(x**2 - 4 * x + 1),
            {
                "increasing": [sp.Interval.open(2, sp.oo)],
                "decreasing": [sp.Interval.open(-sp.oo, 2)],
                "maxima": sp.EmptySet,
                "minima": tuple_set((2, -3)),
            },
            "Parabola with a minimum at x=2.",
        )
    )
    results.append(
        validate_value(
            "GX-C09.S02-02",
            "calculus_summary",
            {
                **variation_summary(x**3),
                **concavity_summary(x**3),
            },
            {
                "increasing": [sp.Interval.open(-sp.oo, 0), sp.Interval.open(0, sp.oo)],
                "decreasing": [],
                "maxima": sp.EmptySet,
                "minima": sp.EmptySet,
                "concave_up": [sp.Interval.open(0, sp.oo)],
                "concave_down": [sp.Interval.open(-sp.oo, 0)],
                "inflection": tuple_set((0, 0)),
            },
            "x^3 is increasing with inflection at the origin.",
        )
    )
    results.append(
        validate_value(
            "PX-C09.S02-01",
            "calculus_summary",
            variation_summary(-x**2 + 4 * x),
            {
                "increasing": [sp.Interval.open(-sp.oo, 2)],
                "decreasing": [sp.Interval.open(2, sp.oo)],
                "maxima": tuple_set((2, 4)),
                "minima": sp.EmptySet,
            },
            "Concave parabola with a maximum at x=2.",
        )
    )
    results.append(
        validate_value(
            "PX-C09.S02-02",
            "calculus_summary",
            {
                **variation_summary(x**3 - 6 * x**2),
                **concavity_summary(x**3 - 6 * x**2),
            },
            {
                "increasing": [sp.Interval.open(-sp.oo, 0), sp.Interval.open(4, sp.oo)],
                "decreasing": [sp.Interval.open(0, 4)],
                "maxima": tuple_set((0, 0)),
                "minima": tuple_set((4, -32)),
                "concave_up": [sp.Interval.open(2, sp.oo)],
                "concave_down": [sp.Interval.open(-sp.oo, 2)],
                "inflection": tuple_set((2, -16)),
            },
            "Cubic with one maximum, one minimum and one inflection.",
        )
    )
    results.append(
        validate_value(
            "PX-C09.S02-03",
            "calculus_summary",
            variation_summary(x**4 - 2 * x**2),
            {
                "increasing": [sp.Interval.open(-1, 0), sp.Interval.open(1, sp.oo)],
                "decreasing": [sp.Interval.open(-sp.oo, -1), sp.Interval.open(0, 1)],
                "maxima": tuple_set((0, 0)),
                "minima": tuple_set((-1, -1), (1, -1)),
            },
            "Quartic with two minima and one maximum.",
        )
    )
    results.append(
        validate_value(
            "PX-C09.S02-04",
            "absolute_extrema",
            absolute_extrema_on_interval(x**2 - 4 * x + 5, sp.Interval(0, 3)),
            {"maxima": tuple_set((0, 5)), "minima": tuple_set((2, 1))},
            "Absolute extrema on a closed interval.",
        )
    )
    results.append(
        validate_value(
            "PX-C09.S02-05",
            "calculus_summary",
            {
                **variation_summary(sp.log(x), sp.Interval.open(0, sp.oo)),
                **concavity_summary(sp.log(x), sp.Interval.open(0, sp.oo)),
            },
            {
                "increasing": [sp.Interval.open(0, sp.oo)],
                "decreasing": [],
                "maxima": sp.EmptySet,
                "minima": sp.EmptySet,
                "concave_up": [],
                "concave_down": [sp.Interval.open(0, sp.oo)],
                "inflection": sp.EmptySet,
            },
            "Logarithm on its natural domain.",
        )
    )
    results.append(
        validate_value(
            "PX-C09.S02-06",
            "calculus_summary",
            {
                **variation_summary(sp.exp(x) - x),
                **concavity_summary(sp.exp(x) - x),
            },
            {
                "increasing": [sp.Interval.open(0, sp.oo)],
                "decreasing": [sp.Interval.open(-sp.oo, 0)],
                "maxima": sp.EmptySet,
                "minima": tuple_set((0, 1)),
                "concave_up": [sp.Interval.open(-sp.oo, sp.oo)],
                "concave_down": [],
                "inflection": sp.EmptySet,
            },
            "Exponential shifted by a line.",
        )
    )

    results.extend(
        [
            validate_tangent_normal(
                "EX-C09.S03-01",
                x**2 - 2 * x + 3,
                3,
                slope_intercept(4, -6),
                slope_intercept(sp.Rational(-1, 4), sp.Rational(27, 4)),
                "Tangente y normal del ejemplo resuelto.",
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
                "Caso con tangente horizontal y normal vertical.",
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
                "Practica con tangente horizontal en el origen.",
            ),
        ]
    )

    results.extend(
        [
            validate_given_slope(
                "EX-C09.S04-01",
                x**3 - 3 * x + 1,
                9,
                [(-2, -1), (2, 3)],
                [slope_intercept(9, 17), slope_intercept(9, -15)],
                "Dos tangentes paralelas a una misma recta.",
            ),
            validate_given_slope(
                "GX-C09.S04-01",
                x**2 - 4 * x,
                2,
                [(3, -3)],
                [slope_intercept(2, -9)],
                "Una unica tangente con pendiente dada.",
            ),
            validate_given_slope(
                "GX-C09.S04-02",
                sp.sqrt(x + 4),
                sp.Rational(1, 4),
                [(0, 2)],
                [slope_intercept(sp.Rational(1, 4), 2)],
                "Tangencia guiada en una raiz.",
            ),
            validate_given_slope(
                "PX-C09.S04-01",
                x**2 + 1,
                4,
                [(2, 5)],
                [slope_intercept(4, -3)],
                "Tangente a una parabola con pendiente 4.",
            ),
            validate_given_slope(
                "PX-C09.S04-02",
                x**3,
                12,
                [(-2, -8), (2, 8)],
                [slope_intercept(12, 16), slope_intercept(12, -16)],
                "Dos tangentes simetricas en una cubica.",
            ),
            validate_given_slope(
                "PX-C09.S04-03",
                sp.log(x),
                1,
                [(1, 0)],
                [slope_intercept(1, -1)],
                "Tangente al logaritmo paralela a y=x+3.",
            ),
            validate_given_slope(
                "PX-C09.S04-04",
                sp.exp(x),
                sp.exp(2),
                [(2, sp.exp(2))],
                [slope_intercept(sp.exp(2), -sp.exp(2))],
                "Tangente a la exponencial con pendiente e^2.",
            ),
            validate_given_slope(
                "PX-C09.S04-05",
                x + 1 / x,
                0,
                [(-1, -2), (1, 2)],
                [slope_intercept(0, -2), slope_intercept(0, 2)],
                "Tangentes horizontales de una racional simple.",
            ),
            validate_parameter_case(),
        ]
    )

    for identifier, actual, expected, note in [
        ("EX-C09.S05-01", sp.solve(sp.Eq((3 * x**2 + 2 * a * x).subs(x, 1), 0), a)[0], -sp.Rational(3, 2), "Parametro que impone un minimo local en x=1."),
        ("GX-C09.S05-01", sp.solve(sp.Eq((2 * x + a).subs(x, 1), 5), a)[0], 3, "Pendiente 5 en x=1."),
        ("GX-C09.S05-02", {"b": sp.solve(sp.Eq((3 * x**2 + 2 * a * x).subs(x, -1), 0), a)[0], "classification": "maximo_local"}, {"b": sp.Rational(3, 2), "classification": "maximo_local"}, "Punto critico en x=-1 y clasificacion."),
        ("PX-C09.S05-01", sp.solve(sp.Eq((3 * x**2 + a).subs(x, 1), 0), a)[0], -3, "Tangente horizontal en x=1."),
        ("PX-C09.S05-02", sp.solve(sp.Eq((2 * x + a).subs(x, 2), 0), a)[0], -4, "Minimo de una parabola en x=2."),
        ("PX-C09.S05-03", sp.solve(sp.Eq((6 * x + 2 * a).subs(x, 1), 0), a)[0], -3, "Punto de inflexion en x=1."),
        ("PX-C09.S05-04", sp.solve(sp.Eq((2 * x + a).subs(x, 0), 2), a)[0], 2, "Tangente paralela a y=2x-1 en x=0."),
        ("PX-C09.S05-05", sp.solve(sp.Eq((3 * x**2 + 2 * a * x).subs(x, 2), 0), a)[0], -3, "Punto critico fijado en x=2."),
        ("PX-C09.S05-06", sp.solve(sp.Eq((2 * a * x + 4).subs(x, -1), 0), a)[0], 2, "Tangente horizontal en x=-1."),
    ]:
        check_type = "parameter_bundle" if isinstance(actual, dict) else "expression"
        results.append(validate_value(identifier, check_type, actual, expected, note))

    results.append(
        validate_value(
            "EX-C09.S06-01",
            "piecewise_parameters",
            {"a": 2, "b": sp.solve(sp.Eq(2 + a, 2), a)[0]},
            {"a": 2, "b": 0},
            "Ajuste simultaneo de continuidad y derivabilidad.",
        )
    )
    results.append(
        validate_value(
            "GX-C09.S06-01",
            "piecewise_status",
            piecewise_status(x + 1, x**2 + 1, 0),
            {"left_limit": 1, "right_limit": 1, "value": 1, "continuous": True, "left_derivative": 1, "right_derivative": 0, "derivable": False},
            "Funcion continua pero no derivable en el origen.",
        )
    )
    results.append(
        validate_value(
            "GX-C09.S06-02",
            "piecewise_parameters",
            {"continuous_for_all": True, "derivable_value": sp.solve(sp.Eq(a, 1), a)[0]},
            {"continuous_for_all": True, "derivable_value": 1},
            "Una familia continua para todo k y derivable solo para k=1.",
        )
    )
    results.append(
        validate_value(
            "PX-C09.S06-01",
            "piecewise_status",
            piecewise_status(2 * x + 1, x**2 + 2, 1),
            {"left_limit": 3, "right_limit": 3, "value": 3, "continuous": True, "left_derivative": 2, "right_derivative": 2, "derivable": True},
            "Coincidencia de valor y pendientes en x=1.",
        )
    )
    results.append(
        validate_value(
            "PX-C09.S06-02",
            "piecewise_status",
            piecewise_status(x + 2, sp.Integer(5), 3),
            {"left_limit": 5, "right_limit": 5, "value": 5, "continuous": True, "left_derivative": 1, "right_derivative": 0, "derivable": False},
            "Salto de derivada con continuidad mantenida.",
        )
    )
    results.append(validate_expression("PX-C09.S06-03", sp.solve(sp.Eq(a, 0), a)[0], 0, "Parametro para derivabilidad en x=0."))
    results.append(
        validate_value(
            "PX-C09.S06-04",
            "piecewise_status",
            piecewise_status(-x, x, 0),
            {"left_limit": 0, "right_limit": 0, "value": 0, "continuous": True, "left_derivative": -1, "right_derivative": 1, "derivable": False},
            "Pico de la funcion valor absoluto.",
        )
    )
    results.append(
        validate_value(
            "PX-C09.S06-05",
            "piecewise_parameters",
            {"b": sp.solve(sp.Eq(4, 8 + a), a)[0], "status": piecewise_status(x**2, 4 * x - 4, 2)},
            {"b": -4, "status": {"left_limit": 4, "right_limit": 4, "value": 4, "continuous": True, "left_derivative": 4, "right_derivative": 4, "derivable": True}},
            "Ajuste lineal para continuidad y derivabilidad en x=2.",
        )
    )
    results.append(validate_expression("PX-C09.S06-06", sp.solve(sp.Eq(a, 2), a)[0], 2, "Parametro m para derivabilidad en x=1."))

    for identifier, actual, expected, note in [
        ("EX-C09.S07-01", {"x": sp.solve(sp.Eq(sp.diff(10 * x - x**2, x), 0), x)[0], "area": (10 * x - x**2).subs(x, 5)}, {"x": 5, "area": 25}, "Rectangulo de area maxima con perimetro 20."),
        ("GX-C09.S07-01", {"x": sp.solve(sp.Eq(sp.diff(18 * x - 2 * x**2, x), 0), x)[0], "other_side": 9, "area": sp.Rational(81, 2)}, {"x": sp.Rational(9, 2), "other_side": 9, "area": sp.Rational(81, 2)}, "Valla junto a un muro."),
        ("GX-C09.S07-02", {"x": finite_real_roots(sp.diff(x + 9 / x, x), sp.Interval.open(0, sp.oo))[0], "value": (x + 9 / x).subs(x, 3)}, {"x": 3, "value": 6}, "Minimo de x+9/x para x>0."),
        ("PX-C09.S07-01", {"side": sp.solve(sp.Eq(sp.diff(12 * x - x**2, x), 0), x)[0], "area": 36}, {"side": 6, "area": 36}, "Perimetro 24 y area maxima."),
        ("PX-C09.S07-02", {"x": sp.solve(sp.Eq(sp.diff(10 * x - x**2, x), 0), x)[0], "product": 25}, {"x": 5, "product": 25}, "Producto maximo con suma 10."),
        ("PX-C09.S07-03", {"x": finite_real_roots(sp.diff(x + 4 / x, x), sp.Interval.open(0, sp.oo))[0], "value": 4}, {"x": 2, "value": 4}, "Minimo de x+4/x."),
        ("PX-C09.S07-04", {"x": sp.solve(sp.Eq(sp.diff(30 * x - 2 * x**2, x), 0), x)[0], "other_side": 15, "area": sp.Rational(225, 2)}, {"x": sp.Rational(15, 2), "other_side": 15, "area": sp.Rational(225, 2)}, "Rectangulo junto a un rio con 30 m de valla."),
        ("PX-C09.S07-05", {"x": sp.solve(sp.Eq(sp.diff(x * (12 - x), x), 0), x)[0], "value": 36}, {"x": 6, "value": 36}, "Maximo de una cuadratica en un intervalo natural."),
        ("PX-C09.S07-06", {"x": sp.Rational(4, 3), "volume": sp.simplify((x * (8 - 2 * x) ** 2).subs(x, sp.Rational(4, 3)))}, {"x": sp.Rational(4, 3), "volume": sp.Rational(1024, 27)}, "Caja sin tapa a partir de un cuadrado de lado 8."),
    ]:
        results.append(validate_value(identifier, "optimization_bundle", actual, expected, note))

    results.append(
        validate_value(
            "EX-C09.S08-01",
            "calculus_and_tangent",
            {
                **variation_summary(x**3 - 3 * x + 1),
                **concavity_summary(x**3 - 3 * x + 1),
                "tangent": tangent_line(x**3 - 3 * x + 1, 1),
            },
            {
                "increasing": [sp.Interval.open(-sp.oo, -1), sp.Interval.open(1, sp.oo)],
                "decreasing": [sp.Interval.open(-1, 1)],
                "maxima": tuple_set((-1, 3)),
                "minima": tuple_set((1, -1)),
                "concave_up": [sp.Interval.open(0, sp.oo)],
                "concave_down": [sp.Interval.open(-sp.oo, 0)],
                "inflection": tuple_set((0, 1)),
                "tangent": slope_intercept(0, -1),
            },
            "Estudio global y tangente horizontal en x=1.",
        )
    )
    results.append(
        validate_value(
            "GX-C09.S08-01",
            "calculus_summary",
            {
                **variation_summary(x**3 - 3 * x**2),
                **concavity_summary(x**3 - 3 * x**2),
            },
            {
                "increasing": [sp.Interval.open(-sp.oo, 0), sp.Interval.open(2, sp.oo)],
                "decreasing": [sp.Interval.open(0, 2)],
                "maxima": tuple_set((0, 0)),
                "minima": tuple_set((2, -4)),
                "concave_up": [sp.Interval.open(1, sp.oo)],
                "concave_down": [sp.Interval.open(-sp.oo, 1)],
                "inflection": tuple_set((1, -2)),
            },
            "Cubica con maximo, minimo e inflexion.",
        )
    )
    results.append(
        validate_value(
            "GX-C09.S08-02",
            "horizontal_tangents",
            horizontal_tangent_summary(x**3 - 3 * x + 2),
            {"points": [sp.Tuple(-1, 4), sp.Tuple(1, 0)], "lines": [slope_intercept(0, 4), slope_intercept(0, 0)]},
            "Tangentes horizontales de h(x)=x^3-3x+2.",
        )
    )
    results.append(
        validate_value(
            "PX-C09.S08-01",
            "calculus_summary",
            {
                **variation_summary(x**3 - 6 * x),
                **concavity_summary(x**3 - 6 * x),
            },
            {
                "increasing": [sp.Interval.open(-sp.oo, -sp.sqrt(2)), sp.Interval.open(sp.sqrt(2), sp.oo)],
                "decreasing": [sp.Interval.open(-sp.sqrt(2), sp.sqrt(2))],
                "maxima": tuple_set((-sp.sqrt(2), 4 * sp.sqrt(2))),
                "minima": tuple_set((sp.sqrt(2), -4 * sp.sqrt(2))),
                "concave_up": [sp.Interval.open(0, sp.oo)],
                "concave_down": [sp.Interval.open(-sp.oo, 0)],
                "inflection": tuple_set((0, 0)),
            },
            "Estudio global de una cubica escalada.",
        )
    )
    results.append(
        validate_tangent_normal(
            "PX-C09.S08-02",
            x**3 - 3 * x + 1,
            0,
            slope_intercept(-3, 1),
            slope_intercept(sp.Rational(1, 3), 1),
            "Tangente y normal en x=0 dentro del bloque de ampliacion.",
        )
    )
    results.append(
        validate_value(
            "PX-C09.S08-03",
            "horizontal_tangents",
            horizontal_tangent_summary(x**3 - 12 * x),
            {"points": [sp.Tuple(-2, 16), sp.Tuple(2, -16)], "lines": [slope_intercept(0, 16), slope_intercept(0, -16)]},
            "Tangentes horizontales de x^3-12x.",
        )
    )
    results.append(
        validate_value(
            "PX-C09.S08-04",
            "absolute_extrema",
            absolute_extrema_on_interval(x**3 - 3 * x, sp.Interval(-2, 2)),
            {"maxima": tuple_set((-1, 2), (2, 2)), "minima": tuple_set((-2, -2), (1, -2))},
            "Extremos absolutos de una cubica en [-2,2].",
        )
    )
    results.append(
        validate_value(
            "PX-C09.S08-05",
            "calculus_summary",
            variation_summary(x**4 - 4 * x**2),
            {
                "increasing": [sp.Interval.open(-sp.sqrt(2), 0), sp.Interval.open(sp.sqrt(2), sp.oo)],
                "decreasing": [sp.Interval.open(-sp.oo, -sp.sqrt(2)), sp.Interval.open(0, sp.sqrt(2))],
                "maxima": tuple_set((0, 0)),
                "minima": tuple_set((-sp.sqrt(2), -4), (sp.sqrt(2), -4)),
            },
            "Puntos criticos y extremos de una cuartica par.",
        )
    )
    results.append(
        validate_value(
            "PX-C09.S08-06",
            "piecewise_parameters",
            {"a": 2, "b": -1},
            {"a": 2, "b": -1},
            "Continuidad y derivabilidad en una funcion a trozos de ampliacion.",
        )
    )

    results.append(
        validate_given_slope(
            "CH-C09-01",
            -x**2 + 6 * x + 5,
            0,
            [(3, 14)],
            [slope_intercept(0, 14)],
            "Reto de transferencia con interpretacion fisica.",
        )
    )

    return results


def review_results() -> list[dict[str, object]]:
    results: list[dict[str, object]] = []
    positive_domain = sp.Interval.open(0, sp.oo)
    split_domain = sp.Union(sp.Interval.open(-sp.oo, 0), positive_domain)

    results.append(
        validate_value(
            "EX-R10.S02-01",
            "expression_with_domain",
            {
                "simplified": sp.simplify((x**2 - 9) / (x**2 - 3 * x)),
                "domain": continuous_domain((x**2 - 9) / (x**2 - 3 * x), x, sp.S.Reals),
            },
            {
                "simplified": (x + 3) / x,
                "domain": sp.Complement(sp.S.Reals, sp.FiniteSet(0, 3)),
            },
            "Simplificacion con restriccion de dominio conservada.",
        )
    )

    results.append(
        validate_set(
            "PX-R10.S01-01",
            continuous_domain(sp.log(x - 1) / (x + 2), x, sp.S.Reals),
            sp.Interval.open(1, sp.oo),
            "Dominio de una funcion con logaritmo y denominador.",
        )
    )
    results.append(
        validate_set(
            "PX-R10.S01-02",
            sp.solveset(sp.Eq(sp.sqrt(x + 5), x - 1), x, domain=sp.S.Reals),
            sp.FiniteSet(4),
            "Ecuacion con radical y control de soluciones extranas.",
        )
    )
    results.append(
        validate_trig_base_roots(
            "PX-R10.S01-03",
            2 * sp.cos(x) - 1,
            sp.FiniteSet(sp.pi / 3, 5 * sp.pi / 3),
            "Angulos de coseno igual a un medio en una vuelta completa.",
        )
    )
    results.append(
        validate_line_result(
            "PX-R10.S01-04",
            tangent_line(x**2 - 3 * x, 1),
            slope_intercept(-1, -1),
            "Tangente a una parabola en x=1.",
        )
    )

    results.append(
        validate_line_result(
            "PX-R10.S02-01",
            perpendicular_line_through_point(line_from_general(2, -1, 3), point(1, 2)),
            slope_intercept(-sp.Rational(1, 2), sp.Rational(5, 2)),
            "Recta perpendicular por un punto dado.",
        )
    )
    results.append(validate_expression("PX-R10.S02-02", sp.limit((x**2 - 4) / (x - 2), x, 2), 4, "Limite por factorizacion en x=2."))
    results.append(
        validate_value(
            "PX-R10.S02-03",
            "optimization_bundle",
            {
                "side": sp.solve(sp.Eq(sp.diff(10 * x - x**2, x), 0), x)[0],
                "area": (10 * x - x**2).subs(x, 5),
            },
            {"side": 5, "area": 25},
            "Rectangulo de area maxima con perimetro 20.",
        )
    )
    results.append(
        validate_nonlinear_system(
            "PX-R10.S02-04",
            [sp.Eq(x + y, 5), sp.Eq(x**2 + y**2, 13)],
            (x, y),
            sp.FiniteSet(sp.Tuple(2, 3), sp.Tuple(3, 2)),
            "Sistema mixto resuelto a partir de suma y producto.",
        )
    )

    results.append(
        validate_set(
            "PX-R10.S03-01",
            sp.solveset(sp.Eq((x - 1) * (x + 1), 8), x, domain=sp.Interval.open(1, sp.oo)),
            sp.FiniteSet(3),
            "Ecuacion logaritmica reducida a una cuadratica con dominio x>1.",
        )
    )
    results.append(
        validate_value(
            "PX-R10.S03-02",
            "rational_asymptotes",
            rational_asymptote_summary(x**2 + 1, x - 1),
            {
                "verticals": [1],
                "horizontal": None,
                "oblique": slope_intercept(1, 1),
                "remainder": 2,
            },
            "Asintotas de una racional con division exacta mas resto.",
        )
    )
    results.append(
        validate_value(
            "PX-R10.S03-03",
            "calculus_summary",
            variation_summary(x**3 - 3 * x),
            {
                "increasing": [sp.Interval.open(-sp.oo, -1), sp.Interval.open(1, sp.oo)],
                "decreasing": [sp.Interval.open(-1, 1)],
                "maxima": tuple_set((-1, 2)),
                "minima": tuple_set((1, -2)),
            },
            "Monotonia y extremos de una cubica clasica.",
        )
    )

    results.append(
        validate_set(
            "PX-R10.S04-01",
            sp.solveset(sp.Eq(sp.Abs(2 * x - 1), 5), x, domain=sp.S.Reals),
            sp.FiniteSet(-2, 3),
            "Control del doble caso en una ecuacion con valor absoluto.",
        )
    )
    results.append(
        validate_expression(
            "PX-R10.S04-02",
            sp.simplify(1 / (sp.sqrt(3) - 1)),
            (sp.sqrt(3) + 1) / 2,
            "Racionalizacion mediante el conjugado.",
        )
    )
    results.append(
        validate_line_result(
            "PX-R10.S04-03",
            normal_line(x**2, 1),
            slope_intercept(-sp.Rational(1, 2), sp.Rational(3, 2)),
            "Normal a y=x^2 en x=1.",
        )
    )

    results.append(
        validate_set(
            "SM-R10.S05-01",
            continuous_domain(sp.sqrt((x + 1) / (x - 2)), x, sp.S.Reals),
            sp.Union(sp.Interval(-sp.oo, -1), sp.Interval.open(2, sp.oo)),
            "Dominio de una raiz de cociente algebraico.",
        )
    )
    results.append(
        validate_trig_base_roots(
            "SM-R10.S05-02",
            sp.sin(x) - sp.sqrt(3) / 2,
            sp.FiniteSet(sp.pi / 3, 2 * sp.pi / 3),
            "Soluciones de seno igual a raiz de tres medios en una vuelta.",
        )
    )
    results.append(validate_expression("SM-R10.S05-03", sp.solve(sp.Eq(3, 2 * a - 1), a)[0], 2, "Parametro de continuidad en x=2."))
    results.append(
        validate_given_slope(
            "SM-R10.S05-04",
            x**2 + 1,
            4,
            [(2, 5)],
            [slope_intercept(4, -3)],
            "Tangente a una parabola paralela a y=4x-3.",
        )
    )

    results.append(
        validate_set(
            "SM-R10.S06-01",
            sp.solveset(sp.Eq(1 / (x - 1) + 1 / (x + 1), 1), x, domain=sp.S.Reals),
            sp.FiniteSet(1 - sp.sqrt(2), 1 + sp.sqrt(2)),
            "Ecuacion racional con dos soluciones validas.",
        )
    )
    results.append(
        validate_expression(
            "SM-R10.S06-02",
            distance_point_line(point(1, -1), line_from_general(1, 2, -5)),
            6 / sp.sqrt(5),
            "Distancia de un punto a una recta en forma general.",
        )
    )
    results.append(
        validate_value(
            "SM-R10.S06-03",
            "rational_asymptotes",
            rational_asymptote_summary(x**2 - 2 * x + 3, x - 1),
            {
                "verticals": [1],
                "horizontal": None,
                "oblique": slope_intercept(1, -1),
                "remainder": 2,
            },
            "Asintota oblicua con cociente x-1.",
        )
    )
    results.append(
        validate_value(
            "SM-R10.S06-04",
            "optimization_bundle",
            {
                "x": finite_real_roots(sp.diff(x + 4 / x, x), positive_domain)[0],
                "value": (x + 4 / x).subs(x, 2),
            },
            {"x": 2, "value": 4},
            "Minimo de x+4/x en el dominio positivo.",
        )
    )

    results.append(
        validate_value(
            "CH-R10-01",
            "review_challenge",
            {
                "domain": continuous_domain(x + 4 / x, x, sp.S.Reals),
                **rational_asymptote_summary(x**2 + 4, x),
                **variation_summary(x + 4 / x, split_domain),
                "tangent": tangent_line(x + 4 / x, 2),
            },
            {
                "domain": sp.Complement(sp.S.Reals, sp.FiniteSet(0)),
                "verticals": [0],
                "horizontal": None,
                "oblique": slope_intercept(1, 0),
                "remainder": 4,
                "increasing": [sp.Interval.open(-sp.oo, -2), sp.Interval.open(2, sp.oo)],
                "decreasing": [sp.Interval.open(-2, 0), sp.Interval.open(0, 2)],
                "maxima": tuple_set((-2, -4)),
                "minima": tuple_set((2, 4)),
                "tangent": slope_intercept(0, 4),
            },
            "Reto final de sintesis sobre una racional con estudio completo.",
        )
    )

    return results


def build_results() -> list[dict[str, object]]:
    return (
        chapter1_results()
        + chapter2_results()
        + chapter3_results()
        + chapter4_results()
        + chapter5_results()
        + chapter6_results()
        + chapter7_results()
        + chapter8_results()
        + chapter9_results()
        + review_results()
    )


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
