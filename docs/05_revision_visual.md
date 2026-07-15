# Revision visual completa

Fecha: 2026-07-15

La auditoria visual reproducible del proyecto se genera con:

```powershell
python scripts/render_visual_audit.py
```

El script:

- renderiza todas las paginas de `build/cuaderno_estudiante.pdf`,
  `build/cuaderno_profesor.pdf` y `build/respuestas_breves.pdf`;
- genera miniaturas por pagina en `build/visual_audit/pages/`;
- compone hojas de contacto en `build/visual_audit/contact_sheets/`;
- marca paginas potencialmente sospechosas en `build/visual_audit/flagged_pages/`;
- escribe `build/visual_audit/summary.json` y `build/visual_audit/report.md`.

Uso editorial recomendado:

- revisar las hojas de contacto para comprobar continuidad, portadas, saltos, figuras y cajas;
- abrir despues las paginas marcadas para una inspeccion ampliada;
- registrar en `docs/03_informe_qa.md` si aparece alguna incidencia real.

Esta revision no sustituye al juicio editorial, pero deja trazabilidad reproducible de que todas
las paginas han sido renderizadas y recorridas en el cierre de QA.

Resultado de la ejecucion final del 2026-07-15:

- `460` paginas renderizadas entre las tres salidas.
- `24` hojas de contacto generadas.
- `0` paginas marcadas automaticamente para inspeccion ampliada.
- Se abrio ademas la pagina del nuevo arbol de Bayes a resolucion completa: el diagrama, las
  probabilidades y las cajas conservan contraste, margenes y legibilidad de impresion.
