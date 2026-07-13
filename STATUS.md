# STATUS

Fecha de actualizacion: 2026-07-11

## Resumen ejecutivo

- Ultima puerta de calidad superada: `Fase 8`.
- Estado global: `C01-C09` estan implementados, compilados y validados para todo el corpus
  matematico disponible. Ademas, el libro incorpora ya un capitulo original de repaso
  acumulativo con simulacros y reto final.
- Suplementos editoriales nuevos: quedan compilables dos proyectos independientes para un futuro
  cuaderno de problemas contextualizados dificiles y un futuro cuaderno de examenes dificiles
  por secciones y bloques.
- Expansion actual en marcha: ya existen tambien dos cuadernos complementarios reales en
  desarrollo, con el bloque `C05-C06` redactado y resuelto como primera entrega.
- Bloque fuera de alcance: probabilidad, por falta de fuentes en la carpeta actual.
- Siguiente accion recomendada: ninguna dentro del corpus actual; solo reabrir el proyecto si se
  incorporan fuentes nuevas, especialmente de probabilidad. Como linea editorial adicional,
  puede continuarse la expansion de los dos suplementos nuevos hasta convertirlos en cuadernos
  completos.

## Suplementos editoriales complementarios

Estado: primera entrega compilada

Resultado:

- Nuevo proyecto `build/proyecto_problemas_contextualizados.pdf`
  - incluye mapa por `77` secciones, propuesta de recursos visuales, banco semilla resuelto y
    secuencia de produccion;
- Nuevo proyecto `build/proyecto_examenes_dificiles.pdf`
  - incluye inventario de mini-examenes por seccion, mapa por bloques, modelos resueltos y hoja
    de ruta de produccion.
- Nuevo cuaderno `build/cuaderno_problemas_contextualizados.pdf`
  - `21` paginas que desarrollan problemas contextualizados resueltos de trigonometria y
    vectores y conservan el inventario completo como apendice de produccion para el resto de
    temas.
- Nuevo cuaderno `build/cuaderno_examenes_dificiles.pdf`
  - `20` paginas que desarrollan examenes resueltos por secciones y un examen de bloque de
    trigonometria y vectores, con roadmap completo para los capitulos restantes.

Cambios relevantes:

- Se anadio `scripts/generate_supplement_blueprints.py` para regenerar inventarios a partir de
  los capitulos reales del libro.
- Se ampliaron `tex/config/preamble.tex` y `tex/config/environments.tex` con cabecera
  configurable y entornos editoriales para planificacion, datos, examenes y baremos.
- Se anadieron los nuevos `main` y frontmatter:
  - `tex/main_contextual_plan.tex`
  - `tex/main_exams_plan.tex`
  - `tex/frontmatter/titlepage_contextual_plan.tex`
  - `tex/frontmatter/titlepage_exams_plan.tex`
- Se incorporaron los cuerpos:
  - `tex/supplements/contextual_plan.tex`
  - `tex/supplements/exams_plan.tex`
- Se incorporaron los nuevos `main` y portadas de cuadernos reales:
  - `tex/main_contextual_book.tex`
  - `tex/main_exams_book.tex`
  - `tex/frontmatter/titlepage_contextual_book.tex`
  - `tex/frontmatter/titlepage_exams_book.tex`
- Se incorporaron los capitulos desarrollados iniciales:
  - `tex/contextual_chapters/05_trigonometria_contextual.tex`
  - `tex/contextual_chapters/06_vectores_contextual.tex`
  - `tex/exams_chapters/05_trigonometria_exams.tex`
  - `tex/exams_chapters/06_vectores_exams.tex`
  - `tex/exams_chapters/30_b3_trig_vectores.tex`

Puerta de calidad:

- Ambos proyectos compilan de forma reproducible: si.
- Ambos cuadernos reales complementarios compilan de forma reproducible: si.
- Los inventarios se generan automaticamente desde la estructura viva del libro: si.
- Logs limpios de `Overfull`, `Underfull`, `Undefined` y avisos criticos tras el ajuste final:
  si.

## Fase 1. Auditoria del corpus

Estado: completada

Resultado:

- PDF localizados: `8`
- Grupos de duplicados exactos: `0`
- Grupos de casi duplicados textuales: `0`
- Fuentes con revision visual necesaria: `3`
- Artefactos actualizados:
  - `data/source_manifest.yml`
  - `data/duplicate_report.md`
  - `docs/00_auditoria_fuentes.md`

Incidencias registradas:

- `Relacion tema 2.pdf`, `Relacion tema 3.pdf` y `Relacion ejercicios tema 9...pdf` son
  fuentes escaneadas y requieren trazabilidad con revision visual.
- No hay corpus de probabilidad en la carpeta actual.

Puerta de calidad:

- Inventario completo: si.
- Manifiesto reproducible: si.
- Duplicados documentados: si.
- Paginas de revision humana identificadas: si.

## Fase 2. Taxonomia y matriz de cobertura

Estado: completada

Resultado:

- Filas de cobertura: `167`
- Capitulos cubiertos por el corpus actual: `C01-C09`
- Tipologias huerfanas detectadas: `0` dentro del corpus disponible
- Artefactos actualizados:
  - `data/exercise_taxonomy.yml`
  - `data/coverage_matrix.csv`
  - `docs/01_plan_editorial.md`

Notas:

- La cobertura queda marcada como `chapter_validated` en las `167` filas del corpus actual.
- Los capitulos de probabilidad no se planifican en esta version por ausencia de fuentes.

Puerta de calidad:

- Cobertura trazable para el corpus disponible: si.
- Ninguna tipologia valida del corpus actual queda sin seccion destino: si.

## Fase 3. Motor LaTeX y capitulo piloto

Estado: completada

Resultado:

- Capitulo piloto implementado: `C09.S03-C09.S04`
- Validaciones matematicas superadas en el piloto: `19/19`
- Salidas compiladas en la aprobacion del piloto:
  - `build/cuaderno_estudiante.pdf`
  - `build/cuaderno_profesor.pdf`
  - `build/respuestas_breves.pdf`

Cambios relevantes:

- Se corrigio el entorno `fullsolution` para que las soluciones completas no se filtren a la
  edicion del alumnado.
- Se anadio un capitulo piloto con teoria minima, metodo, ejemplos resueltos, errores
  frecuentes, ejercicios guiados, practica, reto, respuestas y soluciones.
- Se incorporo `scripts/validate_math.py` y el flujo `all` reconstruye tambien cobertura y
  validacion.

Puerta de calidad:

- Plantilla operativa en ambas ediciones: si.
- Capitulo piloto aprobado: si.
- Separacion alumnado/profesorado comprobada: si.

## Fase 4A. Algebra

Estado: completada

Resultado:

- Capitulos implementados y validados: `C01`, `C02`, `C03` y `C04`
- Validaciones matematicas globales superadas al cierre del bloque: `270/270`
- Cobertura marcada como `chapter_validated`:
  - `C01`: `35` filas
  - `C02`: `30` filas
  - `C03`: `11` filas
  - `C04`: `8` filas
- Salidas compiladas en el cierre de bloque:
  - `build/cuaderno_estudiante.pdf` (`79` paginas)
  - `build/cuaderno_profesor.pdf` (`99` paginas)
  - `build/respuestas_breves.pdf` (`14` paginas)

Puerta de calidad del bloque:

- `C01-C04` implementados, compilados y validados: si.
- Cobertura del bloque algebraico regenerada y marcada: si.
- Separacion alumnado/profesorado mantenida: si.

## Fase 4B. Trigonometria y geometria

Estado: completada

Resultado:

- Capitulos implementados y validados: `C05`, `C06` y `C07`
- Validaciones matematicas globales superadas: `438/438`
- Cobertura marcada como `chapter_validated`:
  - `C05`: `16` filas
  - `C06`: `10` filas
  - `C07`: `28` filas
- Salidas compiladas:
  - `build/cuaderno_estudiante.pdf` (`128` paginas)
  - `build/cuaderno_profesor.pdf` (`159` paginas)
  - `build/respuestas_breves.pdf` (`23` paginas)

Puerta de calidad del bloque:

- `C05-C07` implementados, compilados y validados: si.
- Cobertura del bloque regenerada y marcada: si.
- Separacion alumnado/profesorado mantenida: si.

## Fase 4C. Analisis

Estado: completada

Resultado:

- Capitulos implementados y validados: `C08` y `C09`
- Validaciones matematicas globales superadas: `557/557`
- Cobertura marcada como `chapter_validated`:
  - `C08`: `12` filas
  - `C09`: `17` filas
- Salidas compiladas:
  - `build/cuaderno_estudiante.pdf` (`165` paginas)
  - `build/cuaderno_profesor.pdf` (`210` paginas)
  - `build/respuestas_breves.pdf` (`30` paginas)

Puerta de calidad del bloque:

- `C08-C09` implementados, compilados y validados: si.
- Cobertura del bloque regenerada y marcada: si.
- Separacion alumnado/profesorado mantenida: si.

## Fase 4D. Probabilidad

Estado: bloqueada por ausencia de corpus

Resultado:

- No se genera contenido de probabilidad en esta version.
- La decision se documenta para no inventar cobertura ni redaccion sin fuentes reales.

Puerta de calidad:

- No aplicable mientras no existan PDF de probabilidad en `sources/`.

## Fase 4E. Repaso acumulativo

Estado: completada

Resultado:

- Nuevo capitulo integrado: `Capitulo 10. Repaso acumulativo, simulacros y reto final`
- Estructuras anadidas: diagnostico, hoja mixta, eleccion de metodo, analisis de errores,
  simulacro I, simulacro II y reto final
- Validaciones matematicas globales tras el bloque: `581/581`
- Salidas compiladas:
  - `build/cuaderno_estudiante.pdf` (`176` paginas)
  - `build/cuaderno_profesor.pdf` (`226` paginas)
  - `build/respuestas_breves.pdf` (`33` paginas)

Cambios relevantes:

- Se anadio `tex/chapters/10_repaso_acumulativo.tex` con teoria de uso, diagnostico y repaso
  transversal.
- Se anadio `tex/chapters/10_repaso_acumulativo_answers.tex` y el bloque aparece en
  `respuestas_breves.pdf`.
- `scripts/validate_math.py` se amplio para cubrir el nuevo capitulo y el cierre global del
  libro.

Puerta de calidad del bloque:

- El repaso no es una concatenacion trivial de ejercicios ya vistos: si.
- Todos los items del bloque tienen respuesta breve y solucion docente: si.
- El cierre del bloque queda validado y compilado: si.

## Fase 5. Figuras y visualizacion

Estado: completada

Resultado:

- Auditoria visual documentada en `docs/04_auditoria_figuras.md`
- Marcadores activos de figura en capitulos incluidos: `12`
- Figura nueva incorporada al reto final del capitulo `10`

Cambios relevantes:

- Se reviso el inventario de figuras utiles del libro y se mantuvieron solo recursos exactos,
  legibles y no decorativos.
- La nueva grafica del reto final sintetiza dominio, asintotas y extremos de
  \(f(x)=x+\dfrac{4}{x}\).

Puerta de calidad:

- Figuras exactas y coherentes con el texto: si.
- Logs limpios de avisos de maquetacion asociados a figuras: si.
- Escala de grises y legibilidad razonables: si.

## Fase 6. Solucionario y verificacion global

Estado: completada

Resultado:

- Ejemplos resueltos activos: `78`
- Ejercicios con respuesta breve y solucion docente: `642`
- Validacion matematica global: `581/581`
- Artefacto actualizado:
  - `data/validation_results.json`

Cambios relevantes:

- Se extendio el solucionario al nuevo capitulo de repaso.
- Se verificaron dominios, limites, derivadas, optimizaciones, rectas y correcciones de errores
  representativos del cierre acumulativo.

Puerta de calidad:

- Todos los ejercicios activos tienen respuesta breve: si.
- Todas las soluciones docentes activas quedan integradas: si.
- Validacion simbolica y numerica reproducible: si.

## Fase 7. Ensamblaje, simulacros e indices

Estado: completada

Resultado:

- Frontmatter integrado: portada, presentacion, guia de uso e indice rapido por tecnicas
- Tabla de seguimiento del alumnado integrada en las ediciones principales
- TOC anadido tambien a `respuestas_breves.pdf`
- Simulacros y repaso acumulativo ensamblados en el libro activo

Cambios relevantes:

- Se actualizaron `tex/frontmatter/titlepage.tex`, `presentation.tex`, `guide.tex`,
  `quick_index.tex` y `tracking_table.tex`.
- Las tres salidas finales quedan navegables y coherentes con el estado real del proyecto.

Puerta de calidad:

- Libro navegable y coherente: si.
- Simulacros y repaso integrados sin romper la progresion: si.
- README y STATUS alineados con el estado real: si.

## Fase 8. QA final y entrega

Estado: completada

Resultado:

- Construccion limpia regenerada tras `clean`
- Tests de estado: `4/4`
- Logs de compilacion sin `Warning`, `Overfull`, `Underfull` ni referencias indefinidas
- Renderizado completo de las `435` paginas y generacion de `23` hojas de contacto para
  revision global
- Paginas marcadas automaticamente para inspeccion ampliada: `3`, todas revisadas y
  consideradas falsas alarmas por densidad normal de cajas y solucionario
- Informe final actualizado:
  - `docs/03_informe_qa.md`
  - `docs/05_revision_visual.md`

Comandos relevantes:

- `python scripts/build_phase2_outputs.py`
- `python scripts/validate_math.py`
- `powershell -ExecutionPolicy Bypass -File scripts/tasks.ps1 clean`
- `powershell -ExecutionPolicy Bypass -File scripts/tasks.ps1 student`
- `powershell -ExecutionPolicy Bypass -File scripts/tasks.ps1 teacher`
- `powershell -ExecutionPolicy Bypass -File scripts/tasks.ps1 answers`
- `powershell -ExecutionPolicy Bypass -File scripts/tasks.ps1 visualqa`
- `powershell -ExecutionPolicy Bypass -File scripts/tasks.ps1 qa`
- `powershell -ExecutionPolicy Bypass -File scripts/tasks.ps1 all`

Puerta de calidad:

- Construccion reproducible: si.
- Validacion y tests superados: si.
- Revision visual reproducible completada: si.
- No hay incidencias tecnicas criticas abiertas: si.

## Riesgos abiertos

- No hay corpus de probabilidad.
- Los temas `2`, `3` y `9` siguen dependiendo de trazabilidad con revision visual por ser
  fuentes escaneadas.
