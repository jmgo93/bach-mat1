# Decisiones didacticas y tecnicas

## Decisiones vigentes

1. El piloto original `C09.S03-C09.S04` sirvio para aprobar la plantilla, pero la salida activa
   del proyecto usa ya el capitulo completo `C09.S01-C09.S08`.
2. Las ediciones de alumnado y profesorado comparten una unica fuente LaTeX; la visibilidad de
   soluciones completas se controla mediante el entorno `fullsolution`.
3. La edicion del alumnado mantiene respuestas breves y, ademas, se genera un PDF independiente
   de respuestas para consulta rapida con tabla de contenidos propia.
4. El flujo de compilacion estable usa `pdflatex` como fallback operativo en esta maquina.
5. La cobertura del corpus se construye de forma reproducible con
   `scripts/build_phase2_outputs.py`.
6. Los temas 2, 3 y 9 se consideran fuentes escaneadas y su taxonomia se sustenta en revision
   visual documentada, no en OCR ciego.
7. El corpus no contiene una fuente de probabilidad. Para completar el sentido estocastico se
   incorpora `C10` como contenido editorial original, sin atribuirle cobertura documental.
8. La expansion editorial del corpus se ha ejecutado por bloques `C01-C04`, `C05-C07` y
   `C08-C09`, manteniendo el mismo patron de teoria minima, metodo explicito, ejemplo resuelto,
   guiados, practica graduada, autoevaluacion y extension.
9. El libro activo anade un capitulo original de repaso acumulativo y simulacros que no amplia
   la cobertura fuente, sino que recombina tecnicas ya cubiertas para entrenar transferencia.
10. El ensamblaje final incorpora portada actualizada, presentacion, guia de uso, indice rapido
    por tecnicas y tabla de seguimiento del alumnado dentro de las salidas principales.
11. La validacion matematica ya no se limita a los capitulos fuente: cubre `C01-C10`, el repaso
    acumulativo y los modelos de problemas y examenes con `629` comprobaciones machine-readable en
    `data/validation_results.json`.
12. La auditoria visual de figuras se concentra en recursos exactos y funcionales; se descartan
    diagramas decorativos y se documenta la necesidad real en `docs/04_auditoria_figuras.md`.
13. La plantilla incorpora `\usetikzlibrary{babel}` para evitar conflictos entre `TikZ` y la
    configuracion de `babel` en castellano al dibujar flechas y esquemas.

## Riesgos abiertos

- Si aparecen nuevos PDF en `sources/`, habra que regenerar auditoria y cobertura antes de
  extender la redaccion.
- Las fuentes escaneadas pueden esconder matices de redaccion o pequenos detalles simbolicos;
  hay que mantener la marca de revision humana en fases posteriores.
- Una revision visual editorial exhaustiva pagina a pagina sigue siendo recomendable si se quiere
  un cierre todavia mas estricto, aunque la QA tecnica actual no deja incidencias criticas.
