# Informe QA

Fecha: 2026-07-10

## Alcance

QA de la version con auditoria real del corpus, taxonomia inicial cerrada, `C01` implementado
como primer capitulo completo de la Fase 4A y capitulo piloto `C09.S03-C09.S04` mantenido.

## Metricas

- Corpus auditado: `8` PDF
- Filas de cobertura: `167`
- Fuentes con revision visual necesaria: `3`
- Paginas de `cuaderno_estudiante.pdf`: `23`
- Paginas de `cuaderno_profesor.pdf`: `31`
- Paginas de `respuestas_breves.pdf`: `4`
- Ejemplos resueltos disponibles: `9`
- Ejercicios propuestos con respuesta breve: `73`
- Ejercicios con solucion completa docente: `73`
- Items validados en `data/validation_results.json`: `82`
- Items validados correctamente: `82`

## Cobertura por capitulo

- `C01`: `35`
- `C02`: `30`
- `C03`: `11`
- `C04`: `8`
- `C05`: `16`
- `C06`: `10`
- `C07`: `28`
- `C08`: `12`
- `C09`: `17`

## Revision tecnica

- Compilacion completada sin errores LaTeX en las tres salidas.
- No se detectan referencias indefinidas.
- No se detectan avisos `Overfull` ni `Underfull` en los logs generados.
- La validacion matematica pasa `82/82`.
- Los tests de estado del proyecto pasan `4/4`.

## Revision visual

- Se renderizaron paginas representativas de alumnado, profesorado y respuestas.
- Revision visual realizada sobre la apertura de `C01`, paginas intermedias del alumnado,
  una pagina docente con soluciones completas y el paso entre `C01` y `C09` en respuestas.
- No se aprecian textos cortados, formulas invadiendo margenes ni soluciones completas filtradas
  a la edicion del alumnado.

## Incidencias abiertas

- No hay corpus de probabilidad.
- El bloque `C02-C04` sigue pendiente de redaccion; esta QA no cierra todavia la puerta de la
  Fase 4A.
- La revision visual completa pagina a pagina queda reservada para la QA final, aunque la muestra
  del material implementado en esta iteracion es satisfactoria.
- Temas 2, 3 y 9 mantienen dependencia de revision visual por ser fuentes escaneadas.

## Comandos usados

- `python scripts/build_phase2_outputs.py`
- `python scripts/validate_math.py`
- `powershell -ExecutionPolicy Bypass -File scripts/tasks.ps1 student`
- `powershell -ExecutionPolicy Bypass -File scripts/tasks.ps1 teacher`
- `powershell -ExecutionPolicy Bypass -File scripts/tasks.ps1 answers`
- `powershell -ExecutionPolicy Bypass -File scripts/tasks.ps1 qa`
