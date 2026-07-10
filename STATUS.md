# STATUS

Fecha de actualización: 2026-07-10

## Resumen ejecutivo

- Última puerta de calidad superada: Fase 0.
- Fase en curso: Fase 1.
- Estado global: bloqueado por ausencia del corpus PDF.
- Próxima acción necesaria: incorporar las fuentes originales para poder auditar tipologías reales y construir la cobertura trazable.

## Fase 0. Arranque y seguridad

Estado: completada

Cambios:

- Se ha inicializado Git.
- Se ha creado la estructura técnica del proyecto.
- Se ha implementado un motor LaTeX con edición de alumnado, profesorado y respuestas breves.
- Se ha documentado un fallback de compilación con `pdflatex` por incompatibilidad práctica de `latexmk` y `lualatex` en este entorno.

Archivos creados o modificados:

- `.gitignore`
- `README.md`
- `STATUS.md`
- `data/`
- `docs/`
- `scripts/`
- `tests/`
- `tex/`

Pruebas ejecutadas:

- Detección de herramientas: correcta para `git`, `python`, `lualatex`, `pdflatex` y `pdftotext`.
- `powershell -ExecutionPolicy Bypass -File scripts/tasks.ps1 student`: correcto.
- `powershell -ExecutionPolicy Bypass -File scripts/tasks.ps1 teacher`: correcto.
- `powershell -ExecutionPolicy Bypass -File scripts/tasks.ps1 answers`: correcto.
- `powershell -ExecutionPolicy Bypass -File scripts/tasks.ps1 all`: correcto.
- `python -m unittest discover -s tests -p "test_*.py"`: correcto.

Incidencias:

- `latexmk` falla en este entorno con advertencia de seguridad de MiKTeX.
- `lualatex` no puede crear `lualatex.fmt` bajo privilegios elevados.

Puerta de calidad:

- Estructura creada: sí.
- Herramientas detectadas: sí.
- Git inicializado: sí.
- Compilación de prueba: sí.

## Fase 1. Auditoría del corpus

Estado: iniciada, no superada

Resultado provisional:

- PDF localizados: `0`
- `data/source_manifest.yml` generado.
- `data/duplicate_report.md` generado.
- [docs/00_auditoria_fuentes.md](/H:/Libro%20Alejandra/docs/00_auditoria_fuentes.md) actualizado.

Incidencias pendientes:

- No existe corpus para auditar.
- No se puede construir una taxonomía fiable ni una matriz de cobertura trazable.
- No procede avanzar a Fase 2 hasta disponer de las fuentes.

## Artefactos disponibles

- [cuaderno_estudiante.pdf](/H:/Libro%20Alejandra/build/cuaderno_estudiante.pdf)
- [cuaderno_profesor.pdf](/H:/Libro%20Alejandra/build/cuaderno_profesor.pdf)
- [respuestas_breves.pdf](/H:/Libro%20Alejandra/build/respuestas_breves.pdf)
