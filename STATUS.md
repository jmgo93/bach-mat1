# STATUS

Fecha de actualizacion: 2026-07-10

## Resumen ejecutivo

- Ultima puerta de calidad superada: Fase 3.
- Fase en curso: Fase 4A.
- Estado global: activo para `C01-C09`; `C01` y el piloto de `C09` ya estan implementados y
  validados; bloqueado solo en probabilidad por falta de corpus.
- Siguiente accion recomendada: continuar con `C02-C04` para cerrar el bloque de algebra.

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

- Se ha marcado como `chapter_validated` la cobertura asociada a `C01.S01-C01.S07`.
- Se ha marcado como `pilot_validated` la cobertura asociada a `C09.S03` y `C09.S04`.
- Los capitulos de probabilidad no se planifican en esta version por ausencia de fuentes.

Puerta de calidad:

- Cobertura trazable para el corpus disponible: si.
- Ninguna tipologia valida del corpus actual queda sin seccion destino: si.

## Fase 3. Motor LaTeX y capitulo piloto

Estado: completada

Resultado:

- Capitulo piloto implementado: `C09.S03-C09.S04`
- Validaciones matematicas superadas: `19/19`
- Salidas compiladas:
  - `build/cuaderno_estudiante.pdf` (`9` paginas)
  - `build/cuaderno_profesor.pdf` (`12` paginas)
  - `build/respuestas_breves.pdf` (`1` pagina)

Cambios relevantes:

- Se ha corregido el entorno `fullsolution` para que las soluciones completas no se filtren a la
  edicion del alumnado.
- Se ha anadido un capitulo piloto con teoria minima, metodo, ejemplos resueltos, errores
  frecuentes, ejercicios guiados, practica, reto, respuestas y soluciones.
- Se ha incorporado `scripts/validate_math.py` y el flujo `all` ahora reconstruye tambien la
  cobertura y la validacion.

Pruebas ejecutadas:

- `python scripts/validate_math.py`: correcto (`19/19`).
- `powershell -ExecutionPolicy Bypass -File scripts/tasks.ps1 student`: correcto.
- `powershell -ExecutionPolicy Bypass -File scripts/tasks.ps1 teacher`: correcto.
- `powershell -ExecutionPolicy Bypass -File scripts/tasks.ps1 answers`: correcto.
- `powershell -ExecutionPolicy Bypass -File scripts/tasks.ps1 qa`: correcto.
- Revision de logs: sin `Overfull`, `Underfull` ni referencias indefinidas.
- Revision visual del piloto: correcta en portada, inicio de capitulo, pagina de practica,
  pagina docente y documento de respuestas breves.

Puerta de calidad:

- Plantilla operativa en ambas ediciones: si.
- Capitulo piloto aprobado: si.
- Separacion alumnado/profesorado comprobada: si.

## Fase 4A. Algebra

Estado: en curso

Resultado parcial:

- Capitulo implementado en este bloque: `C01.S01-C01.S07`
- Validaciones matematicas globales superadas: `82/82`
- Cobertura marcada como `chapter_validated` en `35` filas de `C01`
- Salidas compiladas:
  - `build/cuaderno_estudiante.pdf` (`23` paginas)
  - `build/cuaderno_profesor.pdf` (`31` paginas)
  - `build/respuestas_breves.pdf` (`4` paginas)

Cambios relevantes:

- Se ha anadido el capitulo completo `C01` con teoria minima, metodo, ejemplo resuelto, error
  frecuente, guiados, practica, autoevaluacion y extension.
- Se ha creado su documento de respuestas breves y se ha integrado en las tres salidas LaTeX.
- Se ha ampliado `scripts/validate_math.py` para cubrir `C01` ademas del piloto de `C09`.
- Se ha corregido la compatibilidad entre `TikZ` y `babel` con `\usetikzlibrary{babel}`.
- Se ha actualizado la cobertura regenerable para reflejar que `C01` ya no esta solo planificado.

Pruebas ejecutadas:

- `python scripts/build_phase2_outputs.py`: correcto.
- `python scripts/validate_math.py`: correcto (`82/82`).
- `powershell -ExecutionPolicy Bypass -File scripts/tasks.ps1 student`: correcto.
- `powershell -ExecutionPolicy Bypass -File scripts/tasks.ps1 teacher`: correcto.
- `powershell -ExecutionPolicy Bypass -File scripts/tasks.ps1 answers`: correcto.
- `powershell -ExecutionPolicy Bypass -File scripts/tasks.ps1 qa`: correcto.
- Revision de logs: sin `Overfull`, `Underfull`, referencias indefinidas ni avisos de recompilacion.
- Revision visual muestral del material nuevo: correcta en apertura de `C01`, paginas intermedias
  de alumnado, pagina docente con soluciones y documento de respuestas.

Puerta de calidad del bloque:

- `C01` implementado, compilado y validado: si.
- Bloque `C01-C04` completamente cerrado: no, pendiente `C02-C04`.

## Riesgos abiertos

- Falta redactar `C02-C08` y el resto de `C09`.
- No hay corpus de probabilidad.
- La clasificacion de temas 2, 3 y 9 depende de revision visual y conviene conservar esa
  cautela en fases posteriores.
