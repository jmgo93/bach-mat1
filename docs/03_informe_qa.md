# Informe QA

Fecha: 2026-07-10

## Estado del informe

Informe preliminar de arranque. La infraestructura se ha validado, pero no existe aún corpus PDF para una QA curricular completa.

## Métricas actuales

- Corpus auditado: `0` PDF
- Páginas de `cuaderno_estudiante.pdf`: `4`
- Páginas de `cuaderno_profesor.pdf`: `4`
- Páginas de `respuestas_breves.pdf`: `1`
- Ejemplos resueltos provisionales en la plantilla: `1`
- Ejercicios guiados provisionales en la plantilla: `1`
- Respuestas breves provisionales en la plantilla: `1`
- Soluciones docentes provisionales en la plantilla: `1`
- Ejemplos resueltos trazables al corpus: `0`
- Ejercicios propuestos trazables al corpus: `0`
- Soluciones docentes trazables al corpus: `0`

## Incidencias abiertas

- Falta el corpus original.
- No puede ejecutarse la revisión visual de páginas fuente.
- No puede construirse aún una matriz de cobertura no vacía.
- `latexmk` no es utilizable en este entorno.
- `lualatex` no puede crear su formato bajo privilegios elevados; se usa `pdflatex` como fallback operativo.

## Revisión de logs

- Compilación completada sin errores LaTeX.
- No se han detectado referencias indefinidas.
- No se han detectado avisos `Overfull` ni `Underfull` en la última reconstrucción completa.
- Persisten mensajes de seguridad de MiKTeX al invocar `pdflatex` desde un entorno elevado; no afectan al PDF generado.

## Cobertura por capítulo

- Capítulo provisional `Estado actual del proyecto`: cobertura estructural interna `100 %`.
- Cobertura curricular trazable al corpus: `0 %`, bloqueada por ausencia de fuentes.

## Comandos previstos

- `powershell -ExecutionPolicy Bypass -File scripts/tasks.ps1 all`
- `python -m unittest discover -s tests -p "test_*.py"`
- `powershell -ExecutionPolicy Bypass -File scripts/tasks.ps1 audit`
- `powershell -ExecutionPolicy Bypass -File scripts/tasks.ps1 student`
- `powershell -ExecutionPolicy Bypass -File scripts/tasks.ps1 teacher`
- `powershell -ExecutionPolicy Bypass -File scripts/tasks.ps1 answers`
- `powershell -ExecutionPolicy Bypass -File scripts/tasks.ps1 qa`
