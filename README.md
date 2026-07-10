# Cuaderno de repaso de Matematicas de 1.\ de Bachillerato

Este repositorio genera una edicion de alumnado, una edicion de profesorado y un documento de
respuestas breves a partir del corpus PDF disponible en `sources/`.

## Estado actual

- Fases 0, 1, 2 y 3 superadas para el corpus actual.
- Corpus auditado: `8` PDF.
- Cobertura inicial construida: `167` ejercicios fuente mapeados en `data/coverage_matrix.csv`.
- Capitulo piloto implementado y validado: `C09.S03-C09.S04` sobre recta tangente y recta normal.
- Bloque pendiente por falta de corpus: probabilidad.
- Siguiente desarrollo recomendado: bloque de algebra `C01-C04`.

## Estructura

- `sources/`: PDF originales.
- `data/`: manifiesto de fuentes, taxonomia, cobertura y validaciones.
- `docs/`: auditoria, plan editorial, decisiones y QA.
- `tex/`: motor LaTeX y contenido del libro.
- `scripts/`: auditoria, cobertura, validacion y compilacion.
- `tests/`: comprobaciones ligeras del estado del proyecto.
- `build/`: PDF generados y artefactos de compilacion.

## Requisitos detectados

- `git`
- `python`
- `sympy`
- `pdflatex`
- `pdftotext`
- `PyMuPDF`

`latexmk` esta instalado, pero no es operativo en este entorno por restricciones de MiKTeX.
`lualatex` tampoco puede regenerar su formato al ejecutarse con privilegios elevados. Por eso el
flujo estable usa `pdflatex` como fallback documentado.

## Comandos

En PowerShell:

```powershell
powershell -ExecutionPolicy Bypass -File scripts/tasks.ps1 audit
powershell -ExecutionPolicy Bypass -File scripts/tasks.ps1 student
powershell -ExecutionPolicy Bypass -File scripts/tasks.ps1 teacher
powershell -ExecutionPolicy Bypass -File scripts/tasks.ps1 answers
powershell -ExecutionPolicy Bypass -File scripts/tasks.ps1 qa
powershell -ExecutionPolicy Bypass -File scripts/tasks.ps1 all
powershell -ExecutionPolicy Bypass -File scripts/tasks.ps1 clean
```

Significado de los comandos:

- `audit`: regenera `source_manifest.yml`, `duplicate_report.md` y `00_auditoria_fuentes.md`.
- `student`: compila `build/cuaderno_estudiante.pdf`.
- `teacher`: compila `build/cuaderno_profesor.pdf`.
- `answers`: compila `build/respuestas_breves.pdf`.
- `qa`: ejecuta validacion matematica y tests.
- `all`: auditoria, cobertura, compilacion de las tres salidas y QA.

## Artefactos clave

- `data/source_manifest.yml`
- `data/exercise_taxonomy.yml`
- `data/coverage_matrix.csv`
- `data/validation_results.json`
- `docs/00_auditoria_fuentes.md`
- `docs/01_plan_editorial.md`
- `docs/02_decisiones_didacticas.md`
- `docs/03_informe_qa.md`
- `build/cuaderno_estudiante.pdf`
- `build/cuaderno_profesor.pdf`
- `build/respuestas_breves.pdf`

## Limitaciones actuales

- No hay fuentes de probabilidad en la carpeta actual, asi que los capitulos `C10-C12` quedan
  fuera de esta iteracion.
- Los temas 2, 3 y 9 son fuentes escaneadas sin extraccion textual fiable; su trazabilidad se ha
  construido con revision visual.
- El libro completo no esta redactado todavia: la version actual deja aprobada la arquitectura y
  el capitulo piloto para seguir con la Fase 4.
