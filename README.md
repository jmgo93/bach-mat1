# Cuaderno de repaso de Matemáticas de 1.º de Bachillerato

Este repositorio prepara un proyecto reproducible para generar una edición de alumnado y otra de profesorado del cuaderno. En el estado actual no existe todavía el corpus de PDF exigido por el prompt maestro, así que el proyecto queda arrancado, compilable y auditado, pero no puede avanzar a la taxonomía real ni a la redacción del libro sin esas fuentes.

## Estado actual

- Fase 0 superada: estructura creada, Git inicializado y compilación LaTeX de prueba verificada.
- Fase 1 iniciada: auditoría ejecutada, con resultado de `0` PDF localizados.
- Bloqueo actual: faltan los PDF originales que deben auditarse.

## Estructura

- `sources/`: ubicación recomendada para el corpus PDF original.
- `data/`: manifiestos, taxonomía, matriz de cobertura y validaciones.
- `docs/`: auditoría, plan editorial, decisiones e informe QA.
- `tex/`: motor LaTeX compartido por las ediciones.
- `scripts/`: automatización de auditoría, compilación y QA.
- `tests/`: comprobaciones ligeras del estado del proyecto.
- `build/`: salidas PDF y archivos auxiliares de compilación.

## Requisitos detectados

- `git`
- `python`
- `lualatex`
- `pdflatex`
- `pdftotext`

`latexmk` está instalado, pero en este entorno falla con una advertencia de seguridad de MiKTeX. Además, `lualatex` no puede generar su formato al ejecutarse con privilegios elevados. Por eso el flujo por defecto usa `pdflatex` como fallback operativo documentado para esta máquina.

## Comandos

En PowerShell:

```powershell
pwsh -File scripts/tasks.ps1 audit
pwsh -File scripts/tasks.ps1 student
pwsh -File scripts/tasks.ps1 teacher
pwsh -File scripts/tasks.ps1 answers
pwsh -File scripts/tasks.ps1 qa
pwsh -File scripts/tasks.ps1 all
pwsh -File scripts/tasks.ps1 clean
```

Si `pwsh` no está disponible, también funciona:

```powershell
powershell -ExecutionPolicy Bypass -File scripts/tasks.ps1 all
```

## Flujo recomendado cuando se añadan las fuentes

1. Copiar los PDF originales a la raíz del proyecto o a `sources/`.
2. Ejecutar `scripts/tasks.ps1 audit`.
3. Revisar `data/source_manifest.yml`, `data/duplicate_report.md` y [docs/00_auditoria_fuentes.md](/H:/Libro%20Alejandra/docs/00_auditoria_fuentes.md).
4. Reanudar desde la Fase 2 con la taxonomía y la matriz de cobertura reales.
