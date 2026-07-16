# STATUS

Fecha de actualizacion: 2026-07-15

## Resumen ejecutivo

- El corpus fuente contiene `8` PDF y `167` filas de cobertura para `C01-C09`.
- El libro incorpora ademas un capitulo original `C10` de estadistica, probabilidad e inferencia
  y un capitulo `11` de repaso acumulativo, simulacros y reto final.
- La validacion matematica y de modelos pasa `629/629`; las pruebas automatizadas pasan `22/22`.
- La web contiene `11` bloques (`C01-C10` y `R10`) y `91` secciones, con teoria, ejercicios,
  test, flashcards, laboratorios, problemas y examenes.
- Los suplementos cubren `84` secciones de `C01-C10`, con `10` problemas modelo, `10`
  mini-examenes y `7` examenes de bloque.

## Salidas verificadas

- `build/cuaderno_estudiante.pdf`: `187` paginas.
- `build/cuaderno_profesor.pdf`: `238` paginas.
- `build/respuestas_breves.pdf`: `35` paginas.
- `build/proyecto_problemas_contextualizados.pdf`: `20` paginas.
- `build/proyecto_examenes_dificiles.pdf`: `20` paginas.
- `build/cuaderno_problemas_contextualizados.pdf`: `21` paginas, con desarrollo actual de
  `C05-C06`.
- `build/cuaderno_examenes_dificiles.pdf`: `20` paginas, con desarrollo actual de `C05-C06` y
  bloque `B3`.

## Auditoria de contenido

- Se corrigio la altura del modelo de torre: `54.8 m`, no `53.4 m`.
- Se corrigio el angulo del mini-examen vectorial: `54.2 grados`, no `54.1 grados`.
- El examen `B6` clasifica ahora el maximo y el minimo local solicitados.
- El examen `B7` contiene datos concretos, resultados y solucion completa.
- Se preciso el alcance de `R^2`, la independencia y el efecto del tamano muestral.
- El solucionario breve incluye ya todas las respuestas de `C10`.
- Se corrigieron los delimitadores y comandos MathJax generados desde JavaScript.
- Se eliminaron las tablas de apoyo con datos aleatorios de la web. Las `84` entradas del mapa
  se identifican como ideas editoriales, mientras que solo los `10` modelos verificados se
  presentan como problemas resueltos.
- Los `10` problemas modelo incorporan ahora entre `3` y `5` pasos, interpretacion y
  comprobacion final.

## Trazabilidad y riesgos

- `C01-C09` estan vinculados al corpus mediante la matriz de cobertura.
- No existe una relacion fuente de probabilidad en `sources/`; `C10` se identifica como contenido
  editorial original y no como cobertura derivada de PDF.
- Los temas `2`, `3` y `9` conservan dependencia de revision visual porque sus fuentes son
  escaneadas.
- Los cuadernos complementarios completos siguen en desarrollo mas alla del bloque `C05-C06`,
  aunque sus proyectos e inventarios cubren ya `C01-C10`.
