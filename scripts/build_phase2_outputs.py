from __future__ import annotations

import csv
import datetime as dt
import unicodedata
from collections import defaultdict
from pathlib import Path
from typing import Any


ROOT = Path.cwd()
SOURCES_DIR = ROOT / "sources"
DATA_DIR = ROOT / "data"
DOCS_DIR = ROOT / "docs"


def simplify_name(text: str) -> str:
    normalized = unicodedata.normalize("NFKD", text)
    without_marks = "".join(ch for ch in normalized if not unicodedata.combining(ch))
    return without_marks.lower()


SOURCE_PATTERNS = {
    "T1": "tema 1",
    "T2": "tema 2",
    "T3": "tema 3",
    "T4": "tema 4",
    "T5": "tema 5",
    "T67": "temas 6 y 7",
    "T8": "tema 8",
    "T9": "tema 9",
}


def resolve_sources() -> dict[str, Path]:
    pdfs = list(SOURCES_DIR.glob("*.pdf"))
    resolved: dict[str, Path] = {}
    for alias, pattern in SOURCE_PATTERNS.items():
        matches = [pdf for pdf in pdfs if pattern in simplify_name(pdf.name)]
        if len(matches) != 1:
            raise RuntimeError(f"No se pudo resolver de forma unica la fuente {alias!r}: {matches}")
        resolved[alias] = matches[0]
    return resolved


CHAPTERS = [
    {
        "id": "C01",
        "title": "Numeros reales y herramientas numericas",
        "sections": [
            ("C01.S01", "Clasificacion de numeros y conjuntos numericos", ["reconocer naturales, enteros, racionales, irracionales y reales"], "nuclear", 8),
            ("C01.S02", "Decimales y fraccion generatriz", ["identificar decimales exactos, periodicos y mixtos", "operar usando fracciones generatrices"], "nuclear", 10),
            ("C01.S03", "Intervalos, union e interseccion", ["traducir entre desigualdades, intervalos y representacion"], "nuclear", 8),
            ("C01.S04", "Valor absoluto como distancia", ["resolver igualdades e inecuaciones con valor absoluto"], "nuclear", 8),
            ("C01.S05", "Potencias y radicales", ["simplificar radicales", "usar exponentes fraccionarios"], "nuclear", 12),
            ("C01.S06", "Racionalizacion", ["racionalizar monomios y binomios con conjugados"], "nuclear", 8),
            ("C01.S07", "Logaritmos y propiedades operativas", ["traducir entre forma exponencial y logaritmica", "operar con logaritmos"], "nuclear", 8),
        ],
    },
    {
        "id": "C02",
        "title": "Polinomios y fracciones algebraicas",
        "sections": [
            ("C02.S01", "Valor numerico y lectura de polinomios", ["sustituir y evaluar polinomios"], "nuclear", 6),
            ("C02.S02", "Productos notables y operaciones con polinomios", ["desarrollar y simplificar expresiones polinomicas"], "nuclear", 10),
            ("C02.S03", "Division de polinomios", ["dividir y comprobar cociente y resto"], "nuclear", 10),
            ("C02.S04", "Teorema del resto, del factor y parametros", ["usar divisibilidad y restos para hallar parametros"], "nuclear", 8),
            ("C02.S05", "Raices y factorizacion", ["buscar raices enteras o racionales", "factorizar completamente"], "nuclear", 12),
            ("C02.S06", "Fracciones algebraicas: dominio y simplificacion", ["detectar restricciones", "simplificar sin perder dominio"], "nuclear", 10),
            ("C02.S07", "Suma y resta de fracciones algebraicas", ["reducir a comun denominador y simplificar"], "nuclear", 10),
            ("C02.S08", "Producto, cociente y operaciones combinadas", ["operar expresiones racionales complejas"], "nuclear", 12),
            ("C02.S09", "Ecuaciones con fracciones algebraicas", ["resolver ecuaciones racionales y comprobar restricciones"], "nuclear", 10),
        ],
    },
    {
        "id": "C03",
        "title": "Ecuaciones y sistemas",
        "sections": [
            ("C03.S01", "Ecuaciones racionales", ["eliminar denominadores con restricciones"], "nuclear", 10),
            ("C03.S02", "Ecuaciones irracionales", ["aislar radicales y controlar soluciones extranas"], "nuclear", 10),
            ("C03.S03", "Ecuaciones polinomicas reducibles", ["factorizar, hacer sustituciones y clasificar"], "nuclear", 12),
            ("C03.S04", "Ecuaciones exponenciales", ["igualar bases, sustituir o factorizar"], "nuclear", 10),
            ("C03.S05", "Ecuaciones logaritmicas", ["imponer condiciones de existencia"], "nuclear", 10),
            ("C03.S06", "Eleccion de metodo en ecuaciones mixtas", ["reconocer el tipo y elegir tecnica"], "nuclear", 12),
            ("C03.S07", "Sistemas lineales 2x2", ["resolver por sustitucion, igualacion o reduccion"], "nuclear", 10),
            ("C03.S08", "Sistemas lineales 3x3 y clasificacion", ["resolver con Gauss y analizar compatibilidad"], "nuclear", 10),
            ("C03.S09", "Problemas de planteamiento con sistemas", ["traducir enunciado a ecuaciones"], "nuclear", 10),
            ("C03.S10", "Sistemas no lineales", ["combinar ecuaciones polinomicas, racionales o geometricas"], "nuclear", 10),
            ("C03.S11", "Sistemas exponenciales y logaritmicos", ["transformar y resolver sistemas no algebraicos"], "nuclear", 8),
        ],
    },
    {
        "id": "C04",
        "title": "Inecuaciones",
        "sections": [
            ("C04.S01", "Inecuaciones lineales", ["aislar la incognita y representar soluciones"], "nuclear", 8),
            ("C04.S02", "Inecuaciones de segundo grado", ["usar factorizacion y estudio de signo"], "nuclear", 8),
            ("C04.S03", "Inecuaciones polinomicas", ["tabla de signos con varios factores"], "nuclear", 8),
            ("C04.S04", "Inecuaciones racionales", ["incluir puntos prohibidos y signos"], "nuclear", 8),
            ("C04.S05", "Sistemas de inecuaciones en una variable", ["intersectar intervalos"], "nuclear", 8),
            ("C04.S06", "Inecuaciones de dos variables y semiplanos", ["representar recta frontera y semiplano"], "nuclear", 6),
            ("C04.S07", "Sistemas de inecuaciones en el plano", ["determinar la region solucion"], "nuclear", 6),
        ],
    },
    {
        "id": "C05",
        "title": "Trigonometria",
        "sections": [
            ("C05.S01", "Grados y radianes", ["convertir unidades angulares"], "nuclear", 6),
            ("C05.S02", "Razones trigonometricas en triangulos y poligonos", ["resolver triángulos rectángulos en figuras"], "nuclear", 10),
            ("C05.S03", "Angulos notables y reduccion al primer cuadrante", ["usar signos por cuadrantes"], "nuclear", 10),
            ("C05.S04", "Calculo de razones a partir de una razon conocida", ["recuperar sen, cos y tg con cuadrantes"], "nuclear", 10),
            ("C05.S05", "Identidades y transformaciones trigonométricas", ["doble angulo y angulos relacionados"], "nuclear", 8),
            ("C05.S06", "Ecuaciones trigonometricas", ["expresar solucion general"], "nuclear", 10),
            ("C05.S07", "Resolucion de triangulos", ["aplicar teorema del seno y coseno"], "nuclear", 10),
            ("C05.S08", "Problemas contextualizados de trigonometria", ["alturas, distancias y navegacion"], "nuclear", 8),
        ],
    },
    {
        "id": "C06",
        "title": "Vectores",
        "sections": [
            ("C06.S01", "Bases y dependencia en R2", ["comprobar si dos vectores forman base"], "nuclear", 6),
            ("C06.S02", "Operaciones con vectores", ["sumar, restar y combinar linealmente"], "nuclear", 8),
            ("C06.S03", "Modulo, argumento y vectores unitarios", ["calcular modulo, argumento y condiciones de norma"], "nuclear", 8),
            ("C06.S04", "Producto escalar y angulo entre vectores", ["usar el producto escalar para angulos y perpendicularidad"], "nuclear", 10),
            ("C06.S05", "Paralelismo, perpendicularidad y alineacion", ["usar proporcionalidad y determinantes"], "nuclear", 8),
            ("C06.S06", "Construcciones con vectores y paralelogramos", ["hallar puntos a partir de relaciones vectoriales"], "nuclear", 8),
        ],
    },
    {
        "id": "C07",
        "title": "Geometria analitica y lugares geometricos",
        "sections": [
            ("C07.S01", "Ecuaciones de la recta y vectores asociados", ["pasar entre formas de la recta"], "nuclear", 10),
            ("C07.S02", "Problemas con parametros en rectas", ["usar datos de paso por punto o direccion"], "nuclear", 8),
            ("C07.S03", "Simetrias respecto de punto y recta", ["hallar puntos simetricos"], "nuclear", 6),
            ("C07.S04", "Posicion relativa de rectas", ["determinar si son secantes, paralelas o coincidentes"], "nuclear", 8),
            ("C07.S05", "Rectas especiales por un punto", ["paralelas, perpendiculares y bisectrices"], "nuclear", 8),
            ("C07.S06", "Distancias y angulos entre rectas", ["distancia punto-recta, recta-recta y angulo"], "nuclear", 10),
            ("C07.S07", "Poligonos y areas con coordenadas", ["intersecciones, vertices y areas"], "nuclear", 10),
            ("C07.S08", "Medianas, alturas y mediatrices", ["construir rectas notables del triangulo"], "nuclear", 8),
            ("C07.S09", "Bisectrices, ortocentro y lugares geometricos", ["equidistancia y centros"], "nuclear", 8),
            ("C07.S10", "Condiciones geometricas combinadas", ["compatibilidad en triángulos isosceles y polígonos"], "nuclear", 8),
        ],
    },
    {
        "id": "C08",
        "title": "Limites, continuidad y asintotas",
        "sections": [
            ("C08.S01", "Dominio de funciones", ["imponer restricciones en racionales, radicales y logaritmos"], "nuclear", 10),
            ("C08.S02", "Lectura de graficas", ["extraer informacion cualitativa de una grafica"], "nuclear", 6),
            ("C08.S03", "Limites basicos y laterales", ["sustitucion directa, laterales y casos sencillos"], "nuclear", 10),
            ("C08.S04", "Limites en el infinito", ["comparacion de grados y crecimiento"], "nuclear", 8),
            ("C08.S05", "Indeterminaciones por factorizacion y racionalizacion", ["resolver limites no directos"], "nuclear", 10),
            ("C08.S06", "Asintotas", ["verticales, horizontales y oblicuas"], "nuclear", 8),
            ("C08.S07", "Continuidad y discontinuidades", ["clasificar discontinuidades"], "nuclear", 10),
            ("C08.S08", "Funciones a trozos y representacion", ["estudiar continuidad y dibujar"], "nuclear", 8),
            ("C08.S09", "Continuidad con parametros", ["hallar parametros para continuidad"], "nuclear", 8),
            ("C08.S10", "Modelos de evolucion a largo plazo", ["interpretar asintotas y valores iniciales"], "nuclear", 6),
            ("C08.S11", "Ampliacion y estilo EBAU en limites y continuidad", ["aplicar tecnicas en items de examen"], "ampliacion_ebau", 6),
        ],
    },
    {
        "id": "C09",
        "title": "Derivadas y aplicaciones",
        "sections": [
            ("C09.S01", "Reglas de derivacion", ["potencias, producto, cociente y cadena"], "nuclear", 12),
            ("C09.S02", "Monotonia, extremos, curvatura e inflexion", ["usar primera y segunda derivada"], "nuclear", 10),
            ("C09.S03", "Recta tangente y recta normal en un punto", ["hallar pendiente y ecuaciones"], "nuclear", 10),
            ("C09.S04", "Tangente con pendiente dada o paralela a una recta", ["imponer condicion sobre la derivada"], "nuclear", 8),
            ("C09.S05", "Problemas con parametros en derivadas", ["forzar extremos, inflexiones o tangencias"], "nuclear", 8),
            ("C09.S06", "Derivabilidad de funciones a trozos", ["compatibilizar continuidad y derivabilidad"], "nuclear", 8),
            ("C09.S07", "Optimizacion", ["modelizar y optimizar en contexto"], "nuclear", 8),
            ("C09.S08", "Ampliacion y selectividad en derivadas", ["estudios globales y items EBAU"], "ampliacion_ebau", 8),
        ],
    },
]


SECTION_LOOKUP = {
    section_id: {
        "chapter_id": chapter["id"],
        "chapter_title": chapter["title"],
        "title": title,
        "prerequisites": prerequisites,
        "level_band": level_band,
        "planned_proposed_count": planned_count,
        "planned_example_id": f"EX-{section_id}-01",
        "planned_proposed_ids": f"PX-{section_id}-01..{planned_count:02d}",
    }
    for chapter in CHAPTERS
    for section_id, title, prerequisites, level_band, planned_count in chapter["sections"]
}


SCANNED_ALIASES = {"T2", "T3", "T9"}
SECTION_STATUS_OVERRIDES = {
    "C09.S03": ("pilot_validated", "Capitulo piloto implementado y validado"),
    "C09.S04": ("pilot_validated", "Capitulo piloto implementado y validado"),
}


def spec(
    alias: str,
    start: int,
    end: int,
    page: int,
    detected_type: str,
    section_id: str,
    level: str = "nuclear",
    notes: str = "",
) -> dict[str, Any]:
    return {
        "alias": alias,
        "start": start,
        "end": end,
        "page": page,
        "detected_type": detected_type,
        "section_id": section_id,
        "level": level,
        "notes": notes,
    }


COVERAGE_SPECS = [
    spec("T1", 1, 1, 1, "Clasificacion de numeros en conjuntos numericos", "C01.S01"),
    spec("T1", 2, 5, 1, "Decimales y fraccion generatriz", "C01.S02"),
    spec("T1", 6, 7, 1, "Aplicaciones geometricas de radicales e irracionales", "C01.S05"),
    spec("T1", 8, 13, 1, "Intervalos, union e interseccion", "C01.S03"),
    spec("T1", 14, 15, 2, "Valor absoluto como distancia y restriccion", "C01.S04"),
    spec("T1", 16, 16, 2, "Equivalencia de fracciones y razonamiento algebraico", "C01.S02"),
    spec("T1", 17, 21, 3, "Potencias, exponentes fraccionarios y radicales", "C01.S05"),
    spec("T1", 22, 24, 3, "Racionalizacion de expresiones", "C01.S06"),
    spec("T1", 25, 30, 4, "Operaciones y simplificacion con potencias y radicales", "C01.S05"),
    spec("T1", 31, 35, 6, "Logaritmos y propiedades operativas", "C01.S07"),
    spec("T2", 1, 1, 1, "Valor numerico de un polinomio", "C02.S01", notes="Fuente escaneada; pagina revisada visualmente"),
    spec("T2", 2, 2, 1, "Productos notables y desarrollo de polinomios", "C02.S02", notes="Fuente escaneada; pagina revisada visualmente"),
    spec("T2", 3, 4, 1, "Division de polinomios y comprobacion", "C02.S03", notes="Fuente escaneada; pagina revisada visualmente"),
    spec("T2", 5, 8, 1, "Teorema del resto, divisibilidad y parametros", "C02.S04", notes="Fuente escaneada; pagina revisada visualmente"),
    spec("T2", 9, 10, 2, "Raices enteras y factorizacion", "C02.S05", notes="Fuente escaneada; pagina revisada visualmente"),
    spec("T2", 11, 11, 2, "Equivalencia de fracciones algebraicas", "C02.S06", notes="Fuente escaneada; pagina revisada visualmente"),
    spec("T2", 12, 12, 3, "Suma y resta de fracciones algebraicas", "C02.S07", notes="Fuente escaneada; pagina revisada visualmente"),
    spec("T2", 13, 15, 3, "Simplificacion de fracciones algebraicas por factorizacion", "C02.S06", notes="Fuente escaneada; pagina revisada visualmente"),
    spec("T2", 16, 16, 3, "Operaciones combinadas con fracciones algebraicas", "C02.S08", notes="Fuente escaneada; pagina revisada visualmente"),
    spec("T2", 17, 17, 4, "Ecuaciones con fracciones algebraicas", "C02.S09", notes="Fuente escaneada; pagina revisada visualmente"),
    spec("T2", 18, 18, 4, "Producto y simplificacion de expresiones racionales", "C02.S08", notes="Fuente escaneada; pagina revisada visualmente"),
    spec("T2", 19, 19, 4, "Ecuaciones racionales por reduccion a comun denominador", "C02.S09", notes="Fuente escaneada; pagina revisada visualmente"),
    spec("T2", 20, 20, 4, "Suma y resta de fracciones algebraicas", "C02.S07", notes="Fuente escaneada; pagina revisada visualmente"),
    spec("T2", 21, 30, 4, "Operaciones combinadas y simplificacion avanzada de expresiones racionales", "C02.S08", notes="Fuente escaneada; pagina revisada visualmente"),
    spec("T3", 1, 1, 1, "Ecuaciones racionales", "C03.S01", notes="Fuente escaneada; pagina revisada visualmente"),
    spec("T3", 2, 2, 1, "Ecuaciones irracionales", "C03.S02", notes="Fuente escaneada; pagina revisada visualmente"),
    spec("T3", 3, 3, 1, "Reconocimiento de tipo de ecuacion y eleccion de metodo", "C03.S06", notes="Fuente escaneada; pagina revisada visualmente"),
    spec("T3", 4, 4, 2, "Ecuaciones exponenciales", "C03.S04", notes="Fuente escaneada; pagina revisada visualmente"),
    spec("T3", 5, 5, 2, "Ecuaciones logaritmicas", "C03.S05", notes="Fuente escaneada; pagina revisada visualmente"),
    spec("T3", 6, 6, 3, "Coleccion mixta de ecuaciones: racionales, polinomicas, irracionales, exponenciales y logaritmicas", "C03.S06", notes="Fuente escaneada; pagina revisada visualmente"),
    spec("T3", 7, 7, 3, "Sistemas lineales 2x2", "C03.S07", notes="Fuente escaneada; pagina revisada visualmente"),
    spec("T3", 8, 8, 4, "Sistemas lineales 3x3 y clasificacion", "C03.S08", notes="Fuente escaneada; pagina revisada visualmente"),
    spec("T3", 9, 9, 4, "Problemas de planteamiento mediante sistemas", "C03.S09", notes="Fuente escaneada; pagina revisada visualmente"),
    spec("T3", 10, 10, 5, "Sistemas no lineales", "C03.S10", notes="Fuente escaneada; pagina revisada visualmente"),
    spec("T3", 11, 11, 6, "Sistemas exponenciales y logaritmicos", "C03.S11", notes="Fuente escaneada; pagina revisada visualmente"),
    spec("T4", 1, 1, 1, "Inecuaciones lineales", "C04.S01"),
    spec("T4", 2, 2, 1, "Inecuaciones de segundo grado", "C04.S02"),
    spec("T4", 3, 3, 1, "Inecuaciones polinomicas por tabla de signos", "C04.S03"),
    spec("T4", 4, 4, 1, "Inecuaciones racionales con puntos prohibidos", "C04.S04"),
    spec("T4", 5, 5, 1, "Sistemas de inecuaciones lineales en una variable", "C04.S05"),
    spec("T4", 6, 6, 1, "Sistemas de inecuaciones en una variable", "C04.S05"),
    spec("T4", 7, 7, 2, "Inecuaciones de dos variables y semiplanos", "C04.S06"),
    spec("T4", 8, 8, 2, "Sistemas de inecuaciones en el plano", "C04.S07"),
    spec("T5", 1, 1, 1, "Conversion entre grados y radianes", "C05.S01"),
    spec("T5", 2, 4, 1, "Resolucion de figuras planas con razones trigonometricas", "C05.S02"),
    spec("T5", 5, 5, 1, "Problemas de alturas y distancias", "C05.S08"),
    spec("T5", 6, 6, 2, "Angulos notables y reduccion al primer cuadrante", "C05.S03"),
    spec("T5", 7, 8, 2, "Calculo de razones a partir de una razon conocida y cuadrantes", "C05.S04"),
    spec("T5", 9, 10, 2, "Identidades y formulas de angulos relacionados", "C05.S05"),
    spec("T5", 11, 11, 3, "Ecuaciones trigonometricas", "C05.S06"),
    spec("T5", 12, 12, 3, "Resolucion de triangulos", "C05.S07"),
    spec("T5", 13, 16, 4, "Aplicaciones con teorema del seno y del coseno", "C05.S08"),
    spec("T67", 1, 1, 1, "Bases y dependencia en R2", "C06.S01"),
    spec("T67", 2, 2, 1, "Operaciones con vectores", "C06.S02"),
    spec("T67", 3, 3, 1, "Modulo y argumento de un vector", "C06.S03"),
    spec("T67", 4, 4, 1, "Producto escalar, perpendicularidad y angulos entre vectores", "C06.S04"),
    spec("T67", 5, 5, 1, "Alineacion de puntos", "C06.S05"),
    spec("T67", 6, 6, 1, "Vectores unitarios y condiciones de modulo", "C06.S03"),
    spec("T67", 7, 7, 1, "Construcciones con paralelogramos", "C06.S06"),
    spec("T67", 8, 10, 1, "Producto escalar y angulo entre vectores", "C06.S04"),
    spec("T67", 11, 13, 1, "Ecuaciones de la recta y vectores director y normal", "C07.S01"),
    spec("T67", 14, 15, 2, "Problemas con parametros en rectas", "C07.S02"),
    spec("T67", 16, 16, 2, "Rectas paralelas y perpendiculares por un punto", "C07.S05"),
    spec("T67", 17, 18, 2, "Simetrias respecto de punto y recta", "C07.S03"),
    spec("T67", 19, 19, 2, "Construccion de paralelogramos a partir de rectas", "C07.S07"),
    spec("T67", 20, 21, 2, "Posicion relativa de rectas e intersecciones", "C07.S04"),
    spec("T67", 22, 22, 2, "Rectas especiales por un punto", "C07.S05"),
    spec("T67", 23, 23, 2, "Vertices y area de triangulos definidos por rectas", "C07.S07"),
    spec("T67", 24, 29, 2, "Distancias y angulos entre rectas", "C07.S06"),
    spec("T67", 30, 33, 3, "Medianas, alturas y mediatrices", "C07.S08"),
    spec("T67", 34, 36, 3, "Bisectrices, ortocentro y lugares geometricos", "C07.S09"),
    spec("T67", 37, 38, 3, "Condiciones geometricas combinadas", "C07.S10"),
    spec("T8", 1, 1, 1, "Dominio de funciones", "C08.S01"),
    spec("T8", 2, 2, 2, "Lectura e interpretacion de graficas", "C08.S02"),
    spec("T8", 3, 3, 2, "Limites basicos, laterales y en el infinito", "C08.S03"),
    spec("T8", 4, 4, 3, "Asintotas de funciones", "C08.S06"),
    spec("T8", 5, 5, 3, "Continuidad y clasificacion de discontinuidades", "C08.S07"),
    spec("T8", 6, 6, 3, "Funciones a trozos: continuidad y representacion", "C08.S08"),
    spec("T8", 7, 7, 3, "Continuidad y discontinuidades con representacion", "C08.S07"),
    spec("T8", 8, 8, 4, "Continuidad con parametros", "C08.S09"),
    spec("T8", 9, 9, 4, "Modelo de evolucion a largo plazo", "C08.S10"),
    spec("T8", 10, 12, 4, "Selectividad en limites y continuidad", "C08.S11", level="ampliacion_ebau"),
    spec("T9", 1, 1, 1, "Calculo de derivadas por reglas operativas", "C09.S01", notes="Fuente escaneada; pagina revisada visualmente"),
    spec("T9", 2, 2, 1, "Monotonia, extremos, curvatura e inflexion", "C09.S02", notes="Fuente escaneada; pagina revisada visualmente"),
    spec("T9", 3, 3, 1, "Recta tangente en un punto", "C09.S03", notes="Fuente escaneada; pagina revisada visualmente"),
    spec("T9", 4, 5, 1, "Tangente con pendiente dada o paralela a una recta", "C09.S04", notes="Fuente escaneada; pagina revisada visualmente"),
    spec("T9", 6, 7, 1, "Selectividad: estudio global, tangente y normal", "C09.S08", level="ampliacion_ebau", notes="Fuente escaneada; pagina revisada visualmente"),
    spec("T9", 8, 10, 2, "Problemas con parametros en derivadas", "C09.S05", notes="Fuente escaneada; pagina revisada visualmente"),
    spec("T9", 11, 13, 2, "Derivabilidad de funciones a trozos", "C09.S06", notes="Fuente escaneada; pagina revisada visualmente"),
    spec("T9", 14, 15, 3, "Optimizacion", "C09.S07", notes="Fuente escaneada; pagina revisada visualmente"),
    spec("T9", 16, 17, 3, "Selectividad en derivadas y aplicaciones", "C09.S08", level="ampliacion_ebau", notes="Fuente escaneada; pagina revisada visualmente"),
]


def build_coverage_rows(source_paths: dict[str, Path]) -> list[dict[str, str]]:
    rows: list[dict[str, str]] = []
    for entry in COVERAGE_SPECS:
        meta = SECTION_LOOKUP[entry["section_id"]]
        source_path = source_paths[entry["alias"]]
        validation_status, section_note = SECTION_STATUS_OVERRIDES.get(entry["section_id"], ("planned", ""))
        for exercise_number in range(entry["start"], entry["end"] + 1):
            notes = entry["notes"]
            if entry["alias"] in SCANNED_ALIASES and "revision visual" not in notes.lower():
                notes = (notes + "; " if notes else "") + "Fuente escaneada revisada visualmente"
            if section_note:
                notes = (notes + "; " if notes else "") + section_note
            rows.append(
                {
                    "source_file": str(source_path.relative_to(ROOT)),
                    "source_page": str(entry["page"]),
                    "source_exercise": str(exercise_number),
                    "detected_type": entry["detected_type"],
                    "level": entry["level"],
                    "target_chapter": meta["chapter_id"],
                    "target_section": entry["section_id"],
                    "solved_example_id": meta["planned_example_id"],
                    "proposed_exercise_ids": meta["planned_proposed_ids"],
                    "validation_status": validation_status,
                    "notes": notes,
                }
            )
    return rows


def quote_scalar(value: Any) -> str:
    if value is None:
        return "null"
    if isinstance(value, bool):
        return "true" if value else "false"
    if isinstance(value, (int, float)):
        return str(value)
    text = str(value).replace("\\", "\\\\").replace('"', '\\"')
    return f'"{text}"'


def to_yaml(value: Any, indent: int = 0) -> str:
    prefix = " " * indent
    if isinstance(value, dict):
        lines: list[str] = []
        for key, item in value.items():
            if isinstance(item, (dict, list)):
                lines.append(f"{prefix}{key}:")
                lines.append(to_yaml(item, indent + 2))
            else:
                lines.append(f"{prefix}{key}: {quote_scalar(item)}")
        return "\n".join(lines)
    if isinstance(value, list):
        if not value:
            return f"{prefix}[]"
        lines = []
        for item in value:
            if isinstance(item, (dict, list)):
                nested = to_yaml(item, indent + 2)
                nested_lines = nested.splitlines()
                lines.append(f"{prefix}- {nested_lines[0].lstrip()}")
                lines.extend(nested_lines[1:])
            else:
                lines.append(f"{prefix}- {quote_scalar(item)}")
        return "\n".join(lines)
    return f"{prefix}{quote_scalar(value)}"


def build_taxonomy(rows: list[dict[str, str]]) -> dict[str, Any]:
    source_refs_by_section: dict[str, list[str]] = defaultdict(list)
    for row in rows:
        section_id = row["target_section"]
        source_refs_by_section[section_id].append(
            f"{Path(row['source_file']).name}:e{row['source_exercise']} (p.{row['source_page']})"
        )

    chapters_payload = []
    for chapter in CHAPTERS:
        sections_payload = []
        for section_id, title, prerequisites, level_band, planned_count in chapter["sections"]:
            meta = SECTION_LOOKUP[section_id]
            rows_for_section = [row for row in rows if row["target_section"] == section_id]
            detected_types = sorted({row["detected_type"] for row in rows_for_section})
            source_files = sorted({Path(row["source_file"]).name for row in rows_for_section})
            sections_payload.append(
                {
                    "id": section_id,
                    "title": title,
                    "level_band": level_band,
                    "prerequisites": prerequisites,
                    "detected_types": detected_types,
                    "source_files": source_files,
                    "source_refs": source_refs_by_section.get(section_id, []),
                    "planned_example_id": meta["planned_example_id"],
                    "planned_proposed_count": planned_count,
                    "planned_proposed_ids": meta["planned_proposed_ids"],
                }
            )
        chapters_payload.append(
            {
                "id": chapter["id"],
                "title": chapter["title"],
                "section_count": len(chapter["sections"]),
                "sections": sections_payload,
            }
        )

    return {
        "status": "phase2_ready",
        "generated_on": dt.date.today().isoformat(),
        "sources": {
            "pdf_count": len({row["source_file"] for row in rows}),
            "review_required_files": sorted({Path(row["source_file"]).name for row in rows if "escaneada" in row["notes"].lower()}),
        },
        "chapters": chapters_payload,
    }


def write_coverage_matrix(rows: list[dict[str, str]]) -> None:
    DATA_DIR.mkdir(parents=True, exist_ok=True)
    with (DATA_DIR / "coverage_matrix.csv").open("w", encoding="utf-8", newline="") as handle:
        writer = csv.DictWriter(
            handle,
            fieldnames=[
                "source_file",
                "source_page",
                "source_exercise",
                "detected_type",
                "level",
                "target_chapter",
                "target_section",
                "solved_example_id",
                "proposed_exercise_ids",
                "validation_status",
                "notes",
            ],
        )
        writer.writeheader()
        writer.writerows(rows)


def write_taxonomy(taxonomy: dict[str, Any]) -> None:
    DATA_DIR.mkdir(parents=True, exist_ok=True)
    (DATA_DIR / "exercise_taxonomy.yml").write_text(to_yaml(taxonomy) + "\n", encoding="utf-8")


def write_plan_editorial(rows: list[dict[str, str]]) -> None:
    counts_by_chapter: dict[str, int] = defaultdict(int)
    source_files_by_chapter: dict[str, set[str]] = defaultdict(set)
    for row in rows:
        counts_by_chapter[row["target_chapter"]] += 1
        source_files_by_chapter[row["target_chapter"]].add(Path(row["source_file"]).name)

    lines = [
        "# Plan editorial",
        "",
        "## Estado",
        "",
        "Plan editorial definido a partir de la auditoria real del corpus disponible.",
        "",
        "## Corpus utilizado",
        "",
        f"- PDF auditados: `{len({row['source_file'] for row in rows})}`",
        f"- Ejercicios de fuente mapeados en cobertura: `{len(rows)}`",
        f"- Fuentes con revision visual necesaria: `{len({row['source_file'] for row in rows if 'escaneada' in row['notes'].lower()})}`",
        "",
        "## Indice editorial resultante",
        "",
    ]

    for chapter in CHAPTERS:
        lines.append(f"### {chapter['id']} {chapter['title']}")
        lines.append("")
        lines.append(f"- Ejercicios fuente mapeados: `{counts_by_chapter[chapter['id']]}`")
        lines.append(f"- Fuentes implicadas: `{', '.join(sorted(source_files_by_chapter[chapter['id']]))}`")
        lines.append("- Secciones:")
        for section_id, title, _prerequisites, level_band, _planned_count in chapter["sections"]:
            marker = " [Ampliacion]" if level_band == "ampliacion_ebau" else ""
            lines.append(f"  - `{section_id}` {title}{marker}")
        lines.append("")

    lines.extend(
        [
            "## Prioridad de desarrollo",
            "",
            "1. Capitulo piloto ya implementado: C09.S03-C09.S04 (recta tangente y normal).",
            "2. Siguiente bloque recomendado: algebra (C01-C04) para aprovechar la continuidad de temas 1-4.",
            "3. Despues: trigonometria y geometria (C05-C07).",
            "4. Cierre del bloque de analisis (C08-C09) con limites, continuidad y el resto de derivadas.",
            "",
            "## Advertencias curriculares",
            "",
            "- No hay corpus de probabilidad en la carpeta actual, asi que no se planifican capitulos de probabilidad en esta version.",
            "- Hay ejercicios de estilo selectividad en los temas 8 y 9; quedan marcados como ampliacion/EBAU.",
            "- Los temas 2, 3 y 9 exigen trazabilidad con revision visual, porque las fuentes son escaneadas sin extraccion textual fiable.",
        ]
    )

    DOCS_DIR.mkdir(parents=True, exist_ok=True)
    (DOCS_DIR / "01_plan_editorial.md").write_text("\n".join(lines) + "\n", encoding="utf-8")


def main() -> int:
    source_paths = resolve_sources()
    rows = build_coverage_rows(source_paths)
    taxonomy = build_taxonomy(rows)
    write_coverage_matrix(rows)
    write_taxonomy(taxonomy)
    write_plan_editorial(rows)
    print(f"Phase 2 outputs generated: {len(rows)} coverage row(s).")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
