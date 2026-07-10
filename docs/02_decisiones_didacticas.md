# Decisiones didacticas y tecnicas

## Decisiones vigentes

1. El capitulo piloto aprobado sera `C09.S03-C09.S04` porque representa dos tipologias
   centrales, bien delimitadas y presentes con claridad en la fuente de derivadas.
2. Las ediciones de alumnado y profesorado comparten una unica fuente LaTeX; la visibilidad de
   soluciones completas se controla mediante el entorno `fullsolution`.
3. La edicion del alumnado mantiene respuestas breves y, ademas, se genera un PDF independiente
   de respuestas para consulta rapida.
4. El flujo de compilacion estable usa `pdflatex` como fallback operativo en esta maquina.
5. La cobertura del corpus se construye de forma reproducible con `scripts/build_phase2_outputs.py`.
6. Los temas 2, 3 y 9 se consideran fuentes escaneadas y su taxonomia se sustenta en revision
   visual documentada, no en OCR ciego.
7. El bloque de probabilidad queda fuera de esta iteracion por ausencia total de fuentes.
8. La siguiente expansion editorial debe seguir el orden `C01-C04`, `C05-C07`, `C08-C09`.

## Riesgos abiertos

- El libro completo aun no esta redactado mas alla del capitulo piloto.
- Si aparecen nuevos PDF en `sources/`, habra que regenerar auditoria y cobertura antes de
  extender la redaccion.
- Las fuentes escaneadas pueden esconder matices de redaccion o pequenos detalles simbolicos; hay
  que mantener la marca de revision humana en fases posteriores.
