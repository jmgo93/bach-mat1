# Informe QA

Fecha: 2026-07-10

## Alcance

QA de la version con auditoria real del corpus, taxonomia inicial cerrada y capitulo piloto
`C09.S03-C09.S04` implementado.

## Metricas

- Corpus auditado: `8` PDF
- Filas de cobertura: `167`
- Fuentes con revision visual necesaria: `3`
- Paginas de `cuaderno_estudiante.pdf`: `9`
- Paginas de `cuaderno_profesor.pdf`: `12`
- Paginas de `respuestas_breves.pdf`: `1`
- Ejemplos resueltos del piloto: `2`
- Ejercicios propuestos del piloto con respuesta breve: `17`
- Ejercicios del piloto con solucion completa docente: `17`
- Items validados en `data/validation_results.json`: `19`
- Items validados correctamente: `19`

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
- La validacion matematica pasa `19/19`.
- Los tests de estado del proyecto pasan `4/4`.

## Revision visual

- Se renderizaron las paginas del piloto y de las salidas de respuestas.
- Revision visual realizada sobre portada, apertura del capitulo, pagina de practica,
  pagina docente con desarrollo y PDF de respuestas breves.
- No se aprecian textos cortados, formulas invadiendo margenes ni soluciones completas filtradas
  a la edicion del alumnado.

## Incidencias abiertas

- No hay corpus de probabilidad.
- El resto del libro sigue pendiente de redaccion; esta QA cubre solo la infraestructura, la
  cobertura y el capitulo piloto.
- Temas 2, 3 y 9 mantienen dependencia de revision visual por ser fuentes escaneadas.

## Comandos usados

- `python scripts/build_phase2_outputs.py`
- `python scripts/validate_math.py`
- `powershell -ExecutionPolicy Bypass -File scripts/tasks.ps1 student`
- `powershell -ExecutionPolicy Bypass -File scripts/tasks.ps1 teacher`
- `powershell -ExecutionPolicy Bypass -File scripts/tasks.ps1 answers`
- `powershell -ExecutionPolicy Bypass -File scripts/tasks.ps1 qa`
