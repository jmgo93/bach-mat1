# Informe QA

Fecha: 2026-07-11

## Alcance

QA de la version que deja ensamblado el libro matematico activo para el corpus disponible:
`C01-C09` quedan implementados e integrados, y se anade un capitulo original de repaso
acumulativo con diagnostico, hoja mixta, seleccion de metodo, analisis de errores, dos
simulacros y reto final.

## Metricas

- Corpus auditado: `8` PDF
- Filas de cobertura: `167`
- Fuentes con revision visual necesaria: `3`
- Paginas de `cuaderno_estudiante.pdf`: `176`
- Paginas de `cuaderno_profesor.pdf`: `226`
- Paginas de `respuestas_breves.pdf`: `33`
- Ejemplos resueltos activos: `78`
- Ejercicios con respuesta breve y solucion docente: `642`
- Marcadores de figuras activas en capitulos incluidos (`tikzpicture` o `axis`): `12`
- Items validados en `data/validation_results.json`: `581`
- Items validados correctamente: `581`

## Cobertura por capitulo fuente

- `C01`: `35` filas `chapter_validated`
- `C02`: `30` filas `chapter_validated`
- `C03`: `11` filas `chapter_validated`
- `C04`: `8` filas `chapter_validated`
- `C05`: `16` filas `chapter_validated`
- `C06`: `10` filas `chapter_validated`
- `C07`: `28` filas `chapter_validated`
- `C08`: `12` filas `chapter_validated`
- `C09`: `17` filas `chapter_validated`

Nota: el capitulo de repaso acumulativo no suma filas a la cobertura porque es un bloque
original de entrenamiento transversal, no una redaccion asociada a una ficha fuente concreta.

## Revision tecnica

- Compilacion completada sin errores LaTeX en las tres salidas.
- No se detectan referencias indefinidas.
- No se detectan avisos relevantes `Warning`, `Overfull` ni `Underfull` en los logs generados.
- La validacion matematica pasa `581/581`.
- Los tests de estado del proyecto pasan `4/4`.
- El flujo reproducible usado al cierre ha regenerado auditoria, cobertura, PDFs y validacion.

## Revision visual completa

- Se ejecuta `python scripts/render_visual_audit.py` como paso reproducible de cierre.
- El script renderiza todas las paginas de las tres salidas, genera miniaturas por pagina y
  compone hojas de contacto en `build/visual_audit/contact_sheets/`.
- Resultado de la ejecucion final: `435` paginas renderizadas, `23` hojas de contacto y `3`
  paginas marcadas para inspeccion ampliada.
- Las `3` paginas marcadas corresponden a bloques visualmente densos de practica/solucionario;
  tras abrirlas a tamano completo no se detectan cortes, desbordes ni maquetacion incorrecta.
- La revision global por hojas de contacto no muestra paginas en blanco inesperadas, saltos
  anomalos, figuras truncadas ni cierres defectuosos al final de los documentos.
- El detalle tecnico de la metodologia queda documentado en `docs/05_revision_visual.md`.
- Ademas de la pasada global por hojas de contacto, se mantienen como comprobacion puntual las
  capturas de `build/visual_checks/` sobre portada, frontmatter, arranque del capitulo `10`,
  profesorado del repaso y cola de `respuestas_breves.pdf`.

## Incidencias abiertas

- No hay corpus de probabilidad, asi que ese bloque sigue fuera del alcance de esta version.
- Los temas `2`, `3` y `9` mantienen dependencia de revision visual por ser fuentes escaneadas.

## Comandos usados

- `python scripts/build_phase2_outputs.py`
- `python scripts/validate_math.py`
- `powershell -ExecutionPolicy Bypass -File scripts/tasks.ps1 clean`
- `powershell -ExecutionPolicy Bypass -File scripts/tasks.ps1 student`
- `powershell -ExecutionPolicy Bypass -File scripts/tasks.ps1 teacher`
- `powershell -ExecutionPolicy Bypass -File scripts/tasks.ps1 answers`
- `powershell -ExecutionPolicy Bypass -File scripts/tasks.ps1 visualqa`
- `powershell -ExecutionPolicy Bypass -File scripts/tasks.ps1 qa`
- `powershell -ExecutionPolicy Bypass -File scripts/tasks.ps1 all`
