from __future__ import annotations

import re
from pathlib import Path


ROOT = Path(__file__).resolve().parent.parent
CHAPTERS_DIR = ROOT / "tex" / "chapters"
GENERATED_DIR = ROOT / "tex" / "generated"


SECTION_PATTERN = re.compile(r"^\\section\{\[(?P<id>[^\]]+)\]\s+(?P<title>.+)\}")
CHAPTER_PATTERN = re.compile(r"^\\chapter\{(?P<title>.+)\}")


BLOCK_MAP = {
    "C01": "B1 Numeros reales y algebra inicial",
    "C02": "B1 Numeros reales y algebra inicial",
    "C03": "B2 Ecuaciones y sistemas",
    "C04": "B2 Ecuaciones y sistemas",
    "C05": "B3 Trigonometria y vectores",
    "C06": "B3 Trigonometria y vectores",
    "C07": "B4 Geometria analitica",
    "C08": "B5 Limites y continuidad",
    "C09": "B6 Derivadas y aplicaciones",
    "C10": "B7 Estadistica, probabilidad e inferencia",
}


def latex_escape(text: str) -> str:
    replacements = {
        "\\": r"\textbackslash{}",
        "&": r"\&",
        "%": r"\%",
        "$": r"\$",
        "#": r"\#",
        "_": r"\_",
        "{": r"\{",
        "}": r"\}",
    }
    return "".join(replacements.get(ch, ch) for ch in text)


def normalize(text: str) -> str:
    table = str.maketrans(
        "áéíóúÁÉÍÓÚñÑüÜ",
        "aeiouAEIOUnNuU",
    )
    return text.translate(table).lower()


def clean_title(text: str) -> str:
    text = text.replace(r"\texorpdfstring{\(\R^2\)}{R2}", "R2")
    text = text.replace(r"\texorpdfstring{\(\R^2\)}{R2", "R2")
    text = text.replace(r"\(\R^2\)", "R2")
    text = text.replace(r"\R", "R")
    text = text.replace(r"\(", "")
    text = text.replace(r"\)", "")
    text = text.replace("{", "")
    text = text.replace("}", "")
    return text.strip()


def detect_visual(chapter_id: str, title: str) -> str:
    t = normalize(title)
    if chapter_id in {"C05", "C06", "C07"}:
        if "triangulos" in t or "trigonom" in t:
            return "Croquis trigonometrico y tabla de datos"
        if "recta" in t or "distancias" in t or "poligonos" in t or "lugar" in t:
            return "Plano cartesiano con TikZ"
        return "Dibujo vectorial o plano cartesiano"
    if chapter_id in {"C08", "C09"}:
        if "graficas" in t or "representacion" in t or "asintotas" in t:
            return "Grafica con PGFPlots"
        return "Tabla de valores y grafica de apoyo"
    if chapter_id == "C10":
        if "datos bidimensionales" in t:
            return "Tabla de contingencia"
        if "nubes" in t or "regresion" in t:
            return "Nube de puntos, ajuste y grafico de residuos"
        if "muestreo" in t:
            return "Tabla de muestra por estratos"
        if "sucesos" in t:
            return "Diagrama de Venn"
        if "recuento" in t:
            return "Arbol de recuento"
        return "Diagrama de arbol de probabilidades"
    if chapter_id == "C04":
        if "dos variables" in t or "plano" in t:
            return "Semiplanos y region factible"
        return "Tabla de signos y recta numerica"
    if chapter_id == "C03":
        if "sistemas" in t:
            return "Tabla de datos o esquema de relaciones"
        return "Esquema de restricciones y pasos"
    if chapter_id == "C02":
        if "division" in t or "teorema del resto" in t or "factorizacion" in t:
            return "Tabla de evaluacion y caja algebraica"
        return "Tabla de datos parametrica"
    if chapter_id == "C01":
        if "intervalos" in t or "valor absoluto" in t:
            return "Recta numerica o banda de tolerancias"
        return "Tabla de magnitudes y unidades"
    return "Tabla de datos"


def detect_context(chapter_id: str, title: str) -> str:
    t = normalize(title)
    if "clasificacion" in t:
        return "Auditoria de registros numericos de un laboratorio escolar"
    if "fraccion generatriz" in t:
        return "Consumos periodicos y reparto exacto de costes"
    if "intervalos" in t:
        return "Ventanas de seguridad y franjas de operacion"
    if "valor absoluto" in t:
        return "Control de tolerancias respecto a un valor objetivo"
    if "potencias y radicales" in t:
        return "Escalado de superficies, volumenes o intensidades"
    if "racionalizacion" in t:
        return "Simplificacion de formulas instrumentales con radicales"
    if "logaritmos" in t:
        return "Lectura de escalas de sonido, pH o intensidad"
    if "valor numerico" in t:
        return "Modelo de costes dependiente de un parametro operativo"
    if "productos notables" in t:
        return "Ampliacion modular de superficies y margenes de error"
    if "division de polinomios" in t:
        return "Reparto por lotes con interpretacion de cociente y resto"
    if "teorema del resto" in t:
        return "Calibracion de parametros mediante condiciones de divisibilidad"
    if "raices y factorizacion" in t:
        return "Busqueda de umbrales de equilibrio en un modelo algebraico"
    if "fracciones algebraicas" in t and "dominio" in t:
        return "Indice tecnico con restricciones de funcionamiento"
    if "suma y resta" in t:
        return "Combinacion de tasas con distintos denominadores operativos"
    if "producto, cociente" in t:
        return "Encadenado de rendimientos y tiempos relativos"
    if "ecuaciones con fracciones" in t:
        return "Ajuste de tiempos medios con restricciones fisicas"
    if "ecuaciones racionales" in t:
        return "Comparacion de rendimientos con tiempos de espera"
    if "ecuaciones irracionales" in t:
        return "Diseno de rampas o diagonales con medida exigida"
    if "polinomicas reducibles" in t:
        return "Modelo de produccion con variables encadenadas"
    if "exponenciales" in t and chapter_id == "C03":
        return "Crecimiento de usuarios o capital con metas cerradas"
    if "logaritmicas" in t and chapter_id == "C03":
        return "Recuperacion de una variable a partir de una escala logaritmica"
    if "eleccion de metodo" in t:
        return "Diagnostico de estrategia en una incidencia tecnica"
    if "sistemas lineales 2x2" in t:
        return "Venta de entradas o mezclas con dos restricciones"
    if "sistemas lineales 3x3" in t:
        return "Plan de produccion con tres recursos limitados"
    if "planteamiento con sistemas" in t:
        return "Problema de precios, edades o mezclas con traduccion completa"
    if "sistemas no lineales" in t:
        return "Interseccion de restricciones geometricas o economicas"
    if "sistemas exponenciales" in t:
        return "Cruce de dos crecimientos con distinta base"
    if "inecuaciones lineales" in t:
        return "Condicion minima de rentabilidad o seguridad"
    if "segundo grado" in t:
        return "Intervalo viable en un modelo cuadratico"
    if "inecuaciones polinomicas" in t:
        return "Estudio de signos de un indice de estabilidad"
    if "inecuaciones racionales" in t:
        return "Rango de uso de un cociente tecnico con puntos prohibidos"
    if "sistemas de inecuaciones en una variable" in t:
        return "Compatibilidad simultanea de varias normas operativas"
    if "dos variables" in t:
        return "Semiplanos de produccion con restricciones de recursos"
    if "sistemas de inecuaciones en el plano" in t:
        return "Region factible para un plan de fabricacion"
    if "grados y radianes" in t:
        return "Giros de camaras y brujulas en doble sistema de medida"
    if "razones trigonometricas" in t:
        return "Medicion indirecta de alturas y diagonales"
    if "angulos notables" in t:
        return "Orientacion de paneles con cuadrantes y angulos de referencia"
    if "razon conocida" in t:
        return "Reconstruccion de pendientes y longitudes desde una sola razon"
    if "identidades y transformaciones" in t:
        return "Simplificacion de señales periodicas equivalentes"
    if "ecuaciones trigonometricas" in t:
        return "Sincronizacion de ciclos y ventanas de fase"
    if "resolucion de triangulos" in t:
        return "Topografia de parcelas y trazados"
    if "contextualizados de trigonometria" in t:
        return "Alturas, sombras y navegacion con datos reales"
    if "bases y dependencia" in t:
        return "Composicion de desplazamientos sobre dos direcciones base"
    if "operaciones con vectores" in t:
        return "Ruta compuesta de un dron o robot movil"
    if "modulo, argumento" in t:
        return "Vector de viento dominante y correccion angular"
    if "producto escalar" in t:
        return "Trabajo mecanico o compatibilidad de trayectorias"
    if "paralelismo, perpendicularidad" in t:
        return "Alineacion de sensores y piezas"
    if "paralelogramos" in t:
        return "Diseno de una estructura con diagonales y lados opuestos"
    if "ecuaciones de la recta" in t:
        return "Trazado de una calle o conduccion sobre plano"
    if "parametros en rectas" in t:
        return "Calibracion geometrica para cumplir una condicion"
    if "simetrias" in t:
        return "Reflejo de trayectorias respecto a ejes urbanos"
    if "posicion relativa" in t:
        return "Cruce, paralelismo o coincidencia de recorridos"
    if "rectas especiales" in t:
        return "Recta de servicio perpendicular o paralela desde un punto"
    if "distancias y angulos" in t:
        return "Separacion minima entre infraestructuras"
    if "poligonos y areas" in t:
        return "Area de un recinto medido por coordenadas"
    if "medianas, alturas" in t:
        return "Centros y rectas notables de una parcela triangular"
    if "bisectrices, ortocentro" in t:
        return "Punto de control equidistante y geometria de triangulos"
    if "condiciones geometricas combinadas" in t:
        return "Diseno de una pieza con varias restricciones simultaneas"
    if "dominio de funciones" in t:
        return "Modelo fisico con restricciones de existencia"
    if "lectura de graficas" in t:
        return "Analisis visual de un proceso registrado"
    if "limites basicos" in t:
        return "Comportamiento cercano a un umbral de medida"
    if "limites en el infinito" in t:
        return "Estudio de evolucion a largo plazo"
    if "indeterminaciones" in t:
        return "Regularizacion algebraica de un cociente problematico"
    if "asintotas" in t:
        return "Modelo con barreras y tendencia lineal"
    if "continuidad y discontinuidades" in t:
        return "Transicion de un sistema entre distintos regimenes"
    if "funciones a trozos" in t:
        return "Tarifa escalonada o politica de precios por tramos"
    if "continuidad con parametros" in t:
        return "Calibracion de una funcion para evitar saltos"
    if "evolucion a largo plazo" in t:
        return "Modelo de saturacion o enfriamiento"
    if "ebau" in t and chapter_id == "C08":
        return "Item de analisis global con lectura estructural"
    if "reglas de derivacion" in t:
        return "Ritmo instantaneo de una magnitud compuesta"
    if "monotonia, extremos" in t:
        return "Estudio cualitativo de una funcion de rendimiento"
    if "recta tangente y recta normal" in t:
        return "Aproximacion lineal local de una trayectoria"
    if "pendiente dada" in t:
        return "Busqueda de tangencias con condicion de direccion"
    if "parametros en derivadas" in t:
        return "Ajuste de parametros para imponer extremos o tangencias"
    if "a trozos" in t and chapter_id == "C09":
        return "Modelo por fases con exigencia de suavidad"
    if "optimizacion" in t:
        return "Diseno optimo de coste, area o beneficio"
    if "selectividad" in t or "ebau" in t:
        return "Estudio global tipo examen externo"
    if chapter_id == "C10":
        if "datos bidimensionales" in t:
            return "Control de habitos de estudio mediante una tabla de contingencia"
        if "nubes" in t:
            return "Auditoria de una relacion cientifica aparente"
        if "regresion" in t:
            return "Calibracion y prediccion responsable de un sensor"
        if "muestreo" in t:
            return "Encuesta ambiental con riesgo de sesgo"
        if "sucesos" in t:
            return "Fiabilidad conjunta de dos componentes"
        if "recuento" in t:
            return "Seleccion de equipos de laboratorio"
        return "Sistema de alerta con falsos positivos"
    return f"Aplicacion compleja de {title.lower()}"


def detect_exam_focus(chapter_id: str, title: str) -> str:
    t = normalize(title)
    if "parametros" in t:
        return "Mini-examen con decision algebraica y condicion adicional"
    if "sistemas" in t:
        return "Mini-examen de traduccion, resolucion y comprobacion"
    if "inecuaciones" in t or "intervalos" in t:
        return "Mini-examen con representacion y lectura de solucion"
    if chapter_id in {"C05", "C06", "C07"}:
        return "Mini-examen con croquis obligatorio y justificacion geometrica"
    if chapter_id in {"C08", "C09"}:
        return "Mini-examen de lectura analitica, grafica y conclusion"
    if chapter_id == "C10":
        return "Mini-examen con datos, interpretacion y decision bajo incertidumbre"
    if chapter_id in {"C01", "C02"}:
        return "Mini-examen de modelizacion algebraica y cierre exacto"
    return "Mini-examen de tecnica y transferencia"


def detect_difficulty(chapter_id: str, title: str) -> str:
    t = normalize(title)
    if "parametros" in t or "ebau" in t or "selectividad" in t:
        return "Muy alta"
    if "optimizacion" in t or "condiciones geometricas combinadas" in t or "sistemas exponenciales" in t:
        return "Muy alta"
    if chapter_id in {"C08", "C09", "C07"}:
        return "Alta+"
    return "Alta"


def parse_sections() -> list[dict[str, str]]:
    sections = []
    for path in sorted(CHAPTERS_DIR.glob("[0-9][0-9]_*.tex")):
        if (
            "_answers" in path.name
            or path.name.startswith("00_")
            or path.name == "10_repaso_acumulativo.tex"
            or path.name.startswith("09_recta_tangente")
        ):
            continue
        chapter_id = f"C{path.name[:2]}"
        chapter_title = ""
        for line in path.read_text(encoding="utf-8").splitlines():
            line = line.strip()
            chapter_match = CHAPTER_PATTERN.match(line)
            if chapter_match and not chapter_title:
                chapter_title = chapter_match.group("title")
            section_match = SECTION_PATTERN.match(line)
            if section_match:
                sections.append(
                    {
                        "chapter_id": chapter_id,
                        "chapter_title": clean_title(chapter_title),
                        "section_id": section_match.group("id"),
                        "section_title": clean_title(section_match.group("title")),
                    }
                )
    return sections


def build_context_inventory(sections: list[dict[str, str]]) -> str:
    cols = (
        r"@{}>{\raggedright\arraybackslash}p{0.10\textwidth}"
        r">{\raggedright\arraybackslash}p{0.21\textwidth}"
        r">{\raggedright\arraybackslash}p{0.28\textwidth}"
        r">{\raggedright\arraybackslash}p{0.19\textwidth}"
        r">{\raggedright\arraybackslash}p{0.08\textwidth}@{}"
    )
    lines = [
        r"\setlength{\LTpre}{0pt}",
        r"\setlength{\LTpost}{0pt}",
        r"\small",
        rf"\begin{{longtable}}{{{cols}}}",
        r"\toprule",
        r"\textbf{ID} & \textbf{Seccion} & \textbf{Problema contextualizado propuesto} & \textbf{Recurso visual} & \textbf{Nivel}\\",
        r"\midrule",
        r"\endfirsthead",
        r"\toprule",
        r"\textbf{ID} & \textbf{Seccion} & \textbf{Problema contextualizado propuesto} & \textbf{Recurso visual} & \textbf{Nivel}\\",
        r"\midrule",
        r"\endhead",
    ]
    current_chapter = None
    for sec in sections:
        if sec["chapter_id"] != current_chapter:
            current_chapter = sec["chapter_id"]
            lines.append(
                rf"\multicolumn{{5}}{{l}}{{\textbf{{{latex_escape(sec['chapter_id'])} --- {latex_escape(sec['chapter_title'])}}}}}\\"
            )
        lines.append(
            " & ".join(
                [
                    latex_escape(sec["section_id"]),
                    latex_escape(sec["section_title"]),
                    latex_escape(detect_context(sec["chapter_id"], sec["section_title"])),
                    latex_escape(detect_visual(sec["chapter_id"], sec["section_title"])),
                    latex_escape(detect_difficulty(sec["chapter_id"], sec["section_title"])),
                ]
            )
            + r"\\"
        )
    lines.extend([r"\bottomrule", r"\end{longtable}", ""])
    return "\n".join(lines)


def build_exam_inventory(sections: list[dict[str, str]]) -> str:
    cols = (
        r"@{}>{\raggedright\arraybackslash}p{0.10\textwidth}"
        r">{\raggedright\arraybackslash}p{0.22\textwidth}"
        r">{\raggedright\arraybackslash}p{0.25\textwidth}"
        r">{\raggedright\arraybackslash}p{0.18\textwidth}"
        r">{\raggedright\arraybackslash}p{0.09\textwidth}@{}"
    )
    lines = [
        r"\setlength{\LTpre}{0pt}",
        r"\setlength{\LTpost}{0pt}",
        r"\small",
        rf"\begin{{longtable}}{{{cols}}}",
        r"\toprule",
        r"\textbf{ID} & \textbf{Seccion} & \textbf{Mini-examen propuesto} & \textbf{Bloque} & \textbf{Tiempo}\\",
        r"\midrule",
        r"\endfirsthead",
        r"\toprule",
        r"\textbf{ID} & \textbf{Seccion} & \textbf{Mini-examen propuesto} & \textbf{Bloque} & \textbf{Tiempo}\\",
        r"\midrule",
        r"\endhead",
    ]
    current_chapter = None
    for sec in sections:
        if sec["chapter_id"] != current_chapter:
            current_chapter = sec["chapter_id"]
            lines.append(
                rf"\multicolumn{{5}}{{l}}{{\textbf{{{latex_escape(sec['chapter_id'])} --- {latex_escape(sec['chapter_title'])}}}}}\\"
            )
        lines.append(
            " & ".join(
                [
                    latex_escape(sec["section_id"]),
                    latex_escape(sec["section_title"]),
                    latex_escape(detect_exam_focus(sec["chapter_id"], sec["section_title"])),
                    latex_escape(BLOCK_MAP[sec["chapter_id"]]),
                    "25--35 min",
                ]
            )
            + r"\\"
        )
    lines.extend([r"\bottomrule", r"\end{longtable}", ""])
    return "\n".join(lines)


def build_stats(sections: list[dict[str, str]]) -> str:
    chapter_count = len({sec["chapter_id"] for sec in sections})
    return "\n".join(
        [
            rf"\newcommand{{\SupplementChapterCount}}{{{chapter_count}}}",
            rf"\newcommand{{\SupplementSectionCount}}{{{len(sections)}}}",
            r"\newcommand{\SupplementBlockCount}{7}",
            "",
        ]
    )


def main() -> None:
    GENERATED_DIR.mkdir(parents=True, exist_ok=True)
    sections = parse_sections()
    (GENERATED_DIR / "supplement_stats.tex").write_text(build_stats(sections), encoding="utf-8")
    (GENERATED_DIR / "contextual_inventory.tex").write_text(
        build_context_inventory(sections), encoding="utf-8"
    )
    (GENERATED_DIR / "exams_inventory.tex").write_text(build_exam_inventory(sections), encoding="utf-8")
    print(f"Generados inventarios de suplementos para {len(sections)} secciones.")


if __name__ == "__main__":
    main()
