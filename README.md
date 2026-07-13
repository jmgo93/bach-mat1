# Cuaderno de repaso de Matematicas de 1.\ de Bachillerato

Este repositorio genera una edicion de alumnado, una edicion de profesorado y un documento de
respuestas breves a partir del corpus PDF disponible en `sources/`. Ademas, incluye una web
estatica interactiva preparada para GitHub Pages y para instalarse como PWA en movil o escritorio.

## Estado actual

- Fases `0-8` completadas para el corpus actual.
- Corpus auditado: `8` PDF.
- Cobertura trazable actual: `167` ejercicios fuente mapeados y marcados como
  `chapter_validated`.
- Capitulos implementados, compilados y validados: `C01-C09`, mas un capitulo original de
  repaso acumulativo, simulacros y reto final.
- Validaciones matematicas actuales: `581/581`.
- Salidas actuales:
  - `build/cuaderno_estudiante.pdf`: `176` paginas
  - `build/cuaderno_profesor.pdf`: `226` paginas
  - `build/respuestas_breves.pdf`: `33` paginas
  - `build/proyecto_problemas_contextualizados.pdf`: proyecto editorial compilable del futuro
    suplemento de problemas contextualizados
  - `build/proyecto_examenes_dificiles.pdf`: proyecto editorial compilable del futuro
    suplemento de examenes por secciones y bloques
  - `build/cuaderno_problemas_contextualizados.pdf`: `21` paginas de cuaderno complementario
    resuelto, con bloque inicial `C05-C06` ya redactado y hoja de ruta para el resto
  - `build/cuaderno_examenes_dificiles.pdf`: `20` paginas de cuaderno complementario de
    examenes resueltos, con bloque inicial `C05-C06` ya redactado y hoja de ruta para el resto
  - `docs/`: web publicada con teoria, ejemplos resueltos, test interactivos, laboratorios,
    modo claro/oscuro, PWA y soporte multidioma con Google Translate
- Contenido didactico activo:
  - `78` ejemplos resueltos
  - `642` ejercicios guiados, propuestos o de reto con respuesta breve y solucion docente
- Bloque pendiente por falta de corpus: probabilidad.
- Siguiente trabajo recomendado: una revision visual editorial pagina a pagina solo si se desea
  un cierre todavia mas estricto; no quedan incidencias tecnicas criticas abiertas.

## Estructura

- `sources/`: PDF originales.
- `data/`: manifiesto de fuentes, taxonomia, cobertura y validaciones.
- `docs/`: auditoria, plan editorial, QA, revision visual y web lista para publicar.
- `tex/`: motor LaTeX, frontmatter y contenido del libro.
- `scripts/`: auditoria, cobertura, validacion y compilacion.
- `tests/`: comprobaciones ligeras del estado del proyecto.
- `build/`: PDF generados, logs y artefactos de inspeccion visual.

## Requisitos detectados

- `git`
- `python`
- `sympy`
- `pdflatex`
- `pdftotext`
- `PyMuPDF`
- `Pillow`

`latexmk` esta instalado, pero no es operativo en este entorno por restricciones de MiKTeX.
`lualatex` tampoco puede regenerar su formato al ejecutarse con privilegios elevados. Por eso el
flujo estable usa `pdflatex` como fallback documentado.

## Comandos

En PowerShell:

```powershell
powershell -ExecutionPolicy Bypass -File scripts/tasks.ps1 audit
powershell -ExecutionPolicy Bypass -File scripts/tasks.ps1 student
powershell -ExecutionPolicy Bypass -File scripts/tasks.ps1 teacher
powershell -ExecutionPolicy Bypass -File scripts/tasks.ps1 answers
powershell -ExecutionPolicy Bypass -File scripts/tasks.ps1 contextplan
powershell -ExecutionPolicy Bypass -File scripts/tasks.ps1 examplan
powershell -ExecutionPolicy Bypass -File scripts/tasks.ps1 supplements
powershell -ExecutionPolicy Bypass -File scripts/tasks.ps1 contextbook
powershell -ExecutionPolicy Bypass -File scripts/tasks.ps1 exambook
powershell -ExecutionPolicy Bypass -File scripts/tasks.ps1 supplementbooks
powershell -ExecutionPolicy Bypass -File scripts/tasks.ps1 webcontent
powershell -ExecutionPolicy Bypass -File scripts/tasks.ps1 visualqa
powershell -ExecutionPolicy Bypass -File scripts/tasks.ps1 qa
powershell -ExecutionPolicy Bypass -File scripts/tasks.ps1 all
powershell -ExecutionPolicy Bypass -File scripts/tasks.ps1 clean
```

Significado de los comandos:

- `audit`: regenera `source_manifest.yml`, `duplicate_report.md` y `00_auditoria_fuentes.md`.
- `student`: compila `build/cuaderno_estudiante.pdf`.
- `teacher`: compila `build/cuaderno_profesor.pdf`.
- `answers`: compila `build/respuestas_breves.pdf`.
- `contextplan`: genera inventarios y compila `build/proyecto_problemas_contextualizados.pdf`.
- `examplan`: genera inventarios y compila `build/proyecto_examenes_dificiles.pdf`.
- `supplements`: regenera inventarios y compila ambos proyectos editoriales complementarios.
- `contextbook`: regenera inventarios y compila `build/cuaderno_problemas_contextualizados.pdf`.
- `exambook`: regenera inventarios y compila `build/cuaderno_examenes_dificiles.pdf`.
- `supplementbooks`: regenera inventarios y compila ambos cuadernos complementarios reales.
- `webcontent`: regenera `docs/assets/js/generated-content.js` a partir de `tex/chapters/`.
- `visualqa`: renderiza todas las paginas, genera hojas de contacto y marca paginas
  sospechosas para revision ampliada.
- `qa`: ejecuta validacion matematica y tests.
- `all`: auditoria, cobertura, compilacion, auditoria visual reproducible y QA.

## Web interactiva

- Punto de entrada: `docs/index.html`
- Estilos centralizados: `docs/assets/css/styles.css`
- Logica de la app: `docs/assets/js/app.js`
- Banco de preguntas: `docs/assets/js/quiz-bank.js`
- Contenido generado desde LaTeX: `docs/assets/js/generated-content.js`
- PWA: `docs/manifest.webmanifest` y `docs/sw.js`

Flujo recomendado para actualizar la web:

```powershell
powershell -ExecutionPolicy Bypass -File scripts/tasks.ps1 webcontent
python -m http.server 9342 --directory docs
```

Despues abre `http://localhost:9342/index.html#/inicio`.

## GitHub Pages

1. Sube el repositorio a GitHub.
2. En `Settings > Pages`, selecciona `Deploy from a branch`.
3. Elige tu rama principal y la carpeta `/docs`.
4. Guarda la configuracion y espera a que GitHub publique el sitio.

La web usa rutas con hash (`#/capitulo/C01`), asi que funciona bien en GitHub Pages sin servidor
adicional. Tambien puede instalarse como aplicacion gracias al `manifest` y al `service worker`.

## Artefactos clave

- `data/source_manifest.yml`
- `data/exercise_taxonomy.yml`
- `data/coverage_matrix.csv`
- `data/validation_results.json`
- `docs/00_auditoria_fuentes.md`
- `docs/01_plan_editorial.md`
- `docs/02_decisiones_didacticas.md`
- `docs/03_informe_qa.md`
- `docs/04_auditoria_figuras.md`
- `docs/05_revision_visual.md`
- `build/cuaderno_estudiante.pdf`
- `build/cuaderno_profesor.pdf`
- `build/respuestas_breves.pdf`
- `build/proyecto_problemas_contextualizados.pdf`
- `build/proyecto_examenes_dificiles.pdf`
- `build/cuaderno_problemas_contextualizados.pdf`
- `build/cuaderno_examenes_dificiles.pdf`

## Limitaciones actuales

- No hay fuentes de probabilidad en la carpeta actual, asi que los capitulos de ese bloque
  quedan fuera de esta iteracion.
- Los temas 2, 3 y 9 son fuentes escaneadas sin extraccion textual fiable; su trazabilidad se ha
  construido con revision visual.
- La QA final queda cerrada para el corpus actual, aunque cualquier edicion futura con nuevas
  fuentes debera regenerar la auditoria visual.
