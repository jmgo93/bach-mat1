# Decisiones didácticas y técnicas

## Decisiones vigentes

1. No se redactará contenido curricular definitivo sin corpus auditado.
2. Las ediciones de alumnado y profesorado compartirán una única fuente LaTeX con una bandera de visibilidad para soluciones.
3. El flujo de compilación por defecto usará `pdflatex` porque `latexmk` falla en este entorno y `lualatex` no puede crear su formato bajo privilegios elevados.
4. La taxonomía incluida en `data/exercise_taxonomy.yml` es solo una plantilla de trabajo basada en el prompt maestro.
5. La auditoría excluirá directorios generados como `build/` y `.git/` para no confundir fuentes originales con salidas del proyecto.

## Riesgos abiertos

- Ausencia total de PDF fuente.
- Imposibilidad de validar cobertura real.
- Métricas de QA finales aún no representativas del producto final.
