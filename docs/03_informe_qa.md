# Informe QA

Fecha: 2026-07-15

## Alcance

Auditoria del contenido matematico del libro, la web interactiva y los modelos publicados de
problemas y examenes. El corpus fuente cubre `C01-C09`; `C10` es una extension editorial original
de estadistica, probabilidad e inferencia y se declara separadamente de la cobertura documental.

## Metricas verificadas

- Corpus auditado: `8` PDF.
- Filas de cobertura fuente: `167`.
- Capitulos web: `11` (`C01-C10` y `R10`).
- Secciones web: `91`.
- Ejemplos resueltos: `85`.
- Ejercicios guiados, propuestos o de reto con respuesta y solucion: `671`.
- Comprobaciones matematicas: `629/629`.
- Pruebas automatizadas: `20/20`.
- Inventario de suplementos: `84` secciones, `10` problemas modelo, `10` mini-examenes y `7`
  examenes de bloque.

## Compilacion

- `cuaderno_estudiante.pdf`: `187` paginas.
- `cuaderno_profesor.pdf`: `238` paginas.
- `respuestas_breves.pdf`: `35` paginas.
- `proyecto_problemas_contextualizados.pdf`: `19` paginas.
- `proyecto_examenes_dificiles.pdf`: `20` paginas.
- Los cinco logs estan libres de `Overfull`, `Underfull`, referencias indefinidas y avisos de
  LaTeX relevantes.
- La auditoria visual renderiza `460` paginas, genera `24` hojas de contacto y no marca paginas
  sospechosas; el nuevo arbol de Bayes se reviso tambien a tamano completo.

## Correcciones de esta auditoria

- Corregidos dos resultados numericos en suplementos: torre (`54.8 m`) y angulo vectorial
  (`54.2 grados`).
- Completada la clasificacion de extremos del examen `B6`.
- Convertido `B7` en un examen estocastico concreto y completamente resuelto.
- Incorporadas las respuestas breves de `C10` al PDF independiente.
- Precisadas las interpretaciones de `R^2`, independencia y variabilidad muestral.
- Anadido un arbol de Bayes imprimible.
- Corregido el escapado de MathJax en figuras semanticas y laboratorio de regresion.

## Riesgos residuales

- `C10` no dispone de PDF fuente y, por ello, no tiene trazabilidad de origen; si se incorpora una
  relacion de probabilidad, debera contrastarse y mapearse.
- Los temas `2`, `3` y `9` proceden de fuentes escaneadas y conservan la marca de revision visual.
