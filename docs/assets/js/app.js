(function () {
  const content = window.MATHBOOK_CONTENT || { chapters: [], meta: {} };
  const activityBank = window.MATHBOOK_ACTIVITY_BANK || [];
  const questionBank = buildQuestionBank(window.MATHBOOK_QUIZ_BANK || [], activityBank);
  const flashcardBank = buildFlashcardBank(content);

  const STORAGE_KEYS = {
    theme: "mate1-theme",
    progress: "mate1-progress",
    language: "mate1-language",
    practiceChapter: "mate1-practice-chapter",
    practiceStatus: "mate1-practice-status",
    flashcardChapter: "mate1-flashcard-chapter",
    flashcardType: "mate1-flashcard-type",
    flashcardStatus: "mate1-flashcard-status",
    labsChapter: "mate1-labs-chapter",
    examCount: "mate1-exam-count"
  };

  const LANGUAGE_LABELS = {
    es: "Espanol",
    en: "English",
    fr: "Francais",
    de: "Deutsch",
    it: "Italiano",
    pt: "Portugues",
    ca: "Catala"
  };

  const QUESTION_STATUS_LABELS = {
    ALL: "Todas",
    NEW: "Nuevas",
    SEEN: "Respondidas",
    REVIEW: "Por aprender",
    MASTERED: "Dominadas"
  };

  const FLASHCARD_STATUS_LABELS = {
    ALL: "Todas",
    NEW: "Nuevas",
    REVIEW: "Repasar",
    MASTERED: "Dominadas"
  };

  const FLASHCARD_TYPE_LABELS = {
    ALL: "Todo",
    concepto: "Conceptos",
    procedimiento: "Procedimientos",
    estrategia: "Estrategias"
  };

  const CHAPTER_META = {
    C01: { short: "Numeros reales", block: "Fundamentos numericos y algebra", accent: "warm" },
    C02: { short: "Polinomios", block: "Fundamentos numericos y algebra", accent: "cool" },
    C03: { short: "Ecuaciones", block: "Fundamentos numericos y algebra", accent: "warm" },
    C04: { short: "Inecuaciones", block: "Fundamentos numericos y algebra", accent: "cool" },
    C05: { short: "Trigonometria", block: "Trigonometria y geometria", accent: "warm" },
    C06: { short: "Vectores", block: "Trigonometria y geometria", accent: "cool" },
    C07: { short: "Geometria analitica", block: "Trigonometria y geometria", accent: "warm" },
    C08: { short: "Limites y continuidad", block: "Analisis", accent: "cool" },
    C09: { short: "Derivadas", block: "Analisis", accent: "warm" },
    R10: { short: "Repaso final", block: "Repaso y simulacros", accent: "cool" }
  };

  const NUMBER_CHALLENGES = [
    {
      expression: "\\(\\sqrt{64}-9\\)",
      correct: "Z",
      explanation: "\\(\\sqrt{64}-9=8-9=-1\\). Es un entero."
    },
    {
      expression: "\\(0.1\\overline{6}\\)",
      correct: "Q",
      explanation: "Es un decimal periodico mixto, asi que es racional."
    },
    {
      expression: "\\(\\sqrt{5}\\)",
      correct: "I",
      explanation: "\\(\\sqrt{5}\\) no es raiz exacta ni fraccion de enteros; es irracional."
    },
    {
      expression: "\\(\\dfrac{14}{7}\\)",
      correct: "N",
      explanation: "\\(\\dfrac{14}{7}=2\\), y el conjunto mas pequeno es \\(\\mathbb{N}\\)."
    }
  ];

  const FUNCTION_LIBRARY = [
    {
      id: "poly",
      label: "Parabola: f(x)=x^2-2x-3",
      domain: [-6, 6],
      min: -5,
      max: 5,
      step: 0.25,
      fn: (x) => x * x - 2 * x - 3
    },
    {
      id: "cubic",
      label: "Cubica: f(x)=x^3-3x",
      domain: [-4, 4],
      min: -3,
      max: 3,
      step: 0.25,
      fn: (x) => x * x * x - 3 * x
    },
    {
      id: "limit",
      label: "Limite removible: f(x)=(x^2-1)/(x-1)",
      domain: [-4, 4],
      min: -2.5,
      max: 2.5,
      step: 0.25,
      fn: (x) => {
        if (Math.abs(x - 1) < 1e-9) {
          return Number.NaN;
        }
        return (x * x - 1) / (x - 1);
      }
    },
    {
      id: "log",
      label: "Logaritmica: f(x)=ln(x+4)",
      domain: [-3.9, 6],
      min: -3,
      max: 5,
      step: 0.1,
      fn: (x) => {
        if (x <= -4) {
          return Number.NaN;
        }
        return Math.log(x + 4);
      }
    }
  ];

  const state = {
    progress: loadProgress(),
    practiceChapter: window.localStorage.getItem(STORAGE_KEYS.practiceChapter) || "ALL",
    practiceStatus: window.localStorage.getItem(STORAGE_KEYS.practiceStatus) || "ALL",
    flashcardChapter: window.localStorage.getItem(STORAGE_KEYS.flashcardChapter) || "ALL",
    flashcardType: window.localStorage.getItem(STORAGE_KEYS.flashcardType) || "ALL",
    flashcardStatus: window.localStorage.getItem(STORAGE_KEYS.flashcardStatus) || "ALL",
    labsChapter: window.localStorage.getItem(STORAGE_KEYS.labsChapter) || "ALL",
    examCount: Number(window.localStorage.getItem(STORAGE_KEYS.examCount) || "10"),
    examIds: [],
    examAnswers: {},
    examSubmitted: false,
    installPromptEvent: null,
    numberChallengeIndex: 0,
    flashcardIndex: 0,
    flashcardFlipped: false,
    searchQuery: "",
    activityDrafts: {},
    translationTimer: null,
    customLabs: {
      trigAngle: 45,
      vector: { ux: 3, uy: 2, vx: -1, vy: 4 },
      functionId: "poly",
      functionPoint: 1
    }
  };

  const dom = {};

  document.addEventListener("DOMContentLoaded", init);

  function init() {
    cacheDom();
    initTheme();
    bindGlobalEvents();
    renderRoute();
    registerServiceWorker();
    setupInstallPrompt();
    setupTranslationChromeObserver();
    syncLanguageSelect();
  }

  function cacheDom() {
    dom.app = document.getElementById("app");
    dom.sidebar = document.getElementById("sidebar");
    dom.chapterLinks = document.getElementById("chapterLinks");
    dom.chapterCountBadge = document.getElementById("chapterCountBadge");
    dom.searchInput = document.getElementById("searchInput");
    dom.themeToggle = document.getElementById("themeToggle");
    dom.installButton = document.getElementById("installButton");
    dom.languageSelect = document.getElementById("languageSelect");
    dom.mobileMenuButton = document.getElementById("mobileMenuButton");
    dom.translateFeedback = document.getElementById("translateFeedback");
    dom.translateFeedbackText = document.getElementById("translateFeedbackText");
    dom.xpValue = document.getElementById("xpValue");
    dom.quizValue = document.getElementById("quizValue");
    dom.progressFill = document.getElementById("progressFill");
    dom.progressHint = document.getElementById("progressHint");
  }

  function bindGlobalEvents() {
    window.addEventListener("hashchange", renderRoute);
    dom.themeToggle.addEventListener("click", toggleTheme);
    dom.searchInput.addEventListener("input", (event) => {
      state.searchQuery = event.target.value.trim().toLowerCase();
      renderSidebar(parseRoute());
    });
    dom.mobileMenuButton.addEventListener("click", () => {
      dom.sidebar.classList.toggle("is-open");
    });
    dom.languageSelect.addEventListener("change", handleLanguageChange);
    dom.installButton.addEventListener("click", installPwa);
  }

  function renderRoute() {
    const route = parseRoute();
    syncRouteState(route);
    updateNav(route);
    renderSidebar(route);

    if (route.name === "chapter") {
      renderChapter(route.chapterId);
    } else if (route.name === "practice") {
      renderPractice();
    } else if (route.name === "flashcards") {
      renderFlashcards();
    } else if (route.name === "labs") {
      renderLabs();
    } else {
      renderHome();
    }

    updateProgressUi();
    dom.sidebar.classList.remove("is-open");
    postRender();
  }

  function parseRoute() {
    const raw = window.location.hash.replace(/^#\/?/, "");
    if (!raw) {
      return { name: "home" };
    }

    const parts = raw.split("/").filter(Boolean);
    const root = parts[0];

    if (root === "capitulo") {
      return { name: "chapter", chapterId: parts[1] || "C01" };
    }
    if (root === "practica") {
      return { name: "practice", chapterId: parts[1] || null };
    }
    if (root === "flashcards") {
      return { name: "flashcards", chapterId: parts[1] || null };
    }
    if (root === "laboratorios") {
      return { name: "labs", chapterId: parts[1] || null };
    }
    return { name: "home" };
  }

  function syncRouteState(route) {
    if (route.name === "practice" && route.chapterId) {
      state.practiceChapter = route.chapterId;
      window.localStorage.setItem(STORAGE_KEYS.practiceChapter, state.practiceChapter);
    }
    if (route.name === "flashcards" && route.chapterId) {
      state.flashcardChapter = route.chapterId;
      window.localStorage.setItem(STORAGE_KEYS.flashcardChapter, state.flashcardChapter);
    }
    if (route.name === "labs" && route.chapterId) {
      state.labsChapter = route.chapterId;
      window.localStorage.setItem(STORAGE_KEYS.labsChapter, state.labsChapter);
    }
  }

  function updateNav(route) {
    document.querySelectorAll("[data-route-link]").forEach((link) => link.classList.remove("is-active"));
    const routeName =
      route.name === "home"
        ? "inicio"
        : route.name === "practice"
          ? "practica"
          : route.name === "flashcards"
            ? "flashcards"
            : route.name === "labs"
              ? "laboratorios"
              : "";
    if (!routeName) {
      return;
    }
    document.querySelector(`[data-route-link="${routeName}"]`)?.classList.add("is-active");
  }

  function renderSidebar(route) {
    const chapters = filterChaptersBySearch();
    dom.chapterCountBadge.textContent = String(chapters.length);
    dom.chapterLinks.innerHTML = chapters
      .map((chapter, index) => {
        const chapterQuestions = questionBank.filter((question) => question.chapterId === chapter.id);
        const dominated = chapterQuestions.filter((question) => getQuestionStatus(question.id) === "mastered").length;
        const isActive =
          route.name === "chapter"
            ? route.chapterId === chapter.id
            : route.name === "practice"
              ? state.practiceChapter === chapter.id
              : route.name === "flashcards"
                ? state.flashcardChapter === chapter.id
                : route.name === "labs"
                  ? state.labsChapter === chapter.id
                  : false;
        return `
          <a class="chapter-link ${isActive ? "is-active" : ""}" href="#/capitulo/${chapter.id}">
            <span class="chapter-link__index">${String(index + 1).padStart(2, "0")}</span>
            <span class="chapter-link__copy">
              <strong>${chapter.id} - ${chapter.title}</strong>
              <small>${chapter.sectionCount} secciones - ${dominated}/${chapterQuestions.length} preguntas dominadas</small>
            </span>
          </a>
        `;
      })
      .join("");
  }

  function filterChaptersBySearch() {
    if (!state.searchQuery) {
      return content.chapters;
    }

    return content.chapters.filter((chapter) => {
      const haystack = [
        chapter.title,
        chapter.id,
        ...chapter.sections.map((section) => section.id),
        ...chapter.sections.map((section) => section.title),
        ...activityBank.filter((activity) => activity.chapterId === chapter.id).map((activity) => activity.title)
      ]
        .join(" ")
        .toLowerCase();
      return haystack.includes(state.searchQuery);
    });
  }

  function renderHome() {
    const dominatedQuestions = questionBank.filter((question) => getQuestionStatus(question.id) === "mastered").length;
    const cards = content.chapters
      .map((chapter) => {
        const meta = CHAPTER_META[chapter.id] || { block: "Bloque general", accent: "cool" };
        return `
          <article class="summary-card summary-card--${meta.accent}">
            <p class="card-kicker">${meta.block}</p>
            <h3>${chapter.id} - ${chapter.title}</h3>
            <p>${excerptFromHtml(chapter.summaryHtml, 210)}</p>
            <div class="hero__actions">
              <a class="secondary-button" href="#/capitulo/${chapter.id}">Abrir tema</a>
              <a class="ghost-button" href="#/practica/${chapter.id}">Practicar</a>
            </div>
          </article>
        `;
      })
      .join("");

    dom.app.innerHTML = `
      <section class="hero">
        <div class="hero__grid">
          <div>
            <p class="card-kicker">Plataforma interactiva para 1.&ordm; de Bachillerato</p>
            <h1>Aprender Matematicas I con teoria clara, feedback inmediato y actividades conectadas con cada tema.</h1>
            <p>
              La web combina el cuaderno completo, actividades por seccion, test autocorregibles,
              flashcards y laboratorios interactivos pensados para escritorio y movil.
            </p>
            <div class="hero__actions">
              <a class="primary-button" href="#/capitulo/C01">Empezar por el temario</a>
              <a class="ghost-button" href="#/practica">Abrir banco de test</a>
              <a class="secondary-button" href="#/flashcards">Entrenar con flashcards</a>
            </div>
          </div>
          <aside class="summary-card summary-card--accent">
            <p class="card-kicker">Ruta recomendada</p>
            <h2>Teoria, practica y consolidacion</h2>
            <div class="reading-panel">
              <ol>
                <li>Lee la idea minima y el metodo de una seccion.</li>
                <li>Haz el ejemplo guiado y pasa a la actividad interactiva asociada.</li>
                <li>Refuerza con test del bloque y revisa las preguntas por aprender.</li>
                <li>Cierra la sesion con flashcards para formulas, estrategias y errores frecuentes.</li>
              </ol>
            </div>
          </aside>
        </div>
      </section>

      <section class="summary-grid">
        <article class="summary-card">
          <p class="card-kicker">Temario</p>
          <h2>${content.meta.chapterCount || content.chapters.length} capitulos activos</h2>
          <p>${content.meta.sectionCount || 0} secciones conectadas con el cuaderno original.</p>
        </article>
        <article class="summary-card">
          <p class="card-kicker">Test</p>
          <h2>${questionBank.length} preguntas disponibles</h2>
          <p>${dominatedQuestions} ya dominadas en este dispositivo.</p>
        </article>
        <article class="summary-card">
          <p class="card-kicker">Flashcards</p>
          <h2>${flashcardBank.length} tarjetas de estudio</h2>
          <p>Conceptos, procedimientos y estrategias de todos los bloques.</p>
        </article>
        <article class="summary-card">
          <p class="card-kicker">Laboratorios</p>
          <h2>${activityBank.length} actividades por tema</h2>
          <p>Dos o mas por bloque, integradas dentro del tema y tambien reunidas aparte.</p>
        </article>
      </section>

      <section class="summary-grid">
        ${cards}
      </section>
    `;
  }

  function renderChapter(chapterId) {
    const chapter = getChapter(chapterId);
    if (!chapter) {
      renderHome();
      return;
    }

    const chapterQuestions = questionBank.filter((question) => question.chapterId === chapter.id);
    const chapterActivities = activityBank.filter((activity) => activity.chapterId === chapter.id);
    const chapterFlashcards = flashcardBank.filter((card) => card.chapterId === chapter.id);
    const dominatedQuestions = chapterQuestions.filter((question) => getQuestionStatus(question.id) === "mastered").length;
    const reviewQuestions = chapterQuestions.filter((question) => getQuestionStatus(question.id) === "review").length;

    dom.app.innerHTML = `
      <section class="hero hero--chapter">
        <div class="hero__meta">
          <div>
            <p class="card-kicker">${(CHAPTER_META[chapter.id] || {}).block || "Bloque"}</p>
            <h1>${chapter.id} - ${chapter.title}</h1>
          </div>
          <span class="badge-soft">${chapter.sectionCount} secciones</span>
        </div>
        <p>${excerptFromHtml(chapter.summaryHtml, 280)}</p>
        <div class="hero__actions">
          <a class="primary-button" href="#/practica/${chapter.id}">Test del bloque</a>
          <a class="secondary-button" href="#/flashcards/${chapter.id}">Flashcards del bloque</a>
          <a class="ghost-button" href="#/laboratorios/${chapter.id}">Actividades del bloque</a>
        </div>
      </section>

      <section class="summary-grid">
        <article class="summary-card">
          <p class="card-kicker">Panorama del tema</p>
          <div class="rich-text">${chapter.summaryHtml}</div>
        </article>
        <article class="summary-card">
          <p class="card-kicker">Ruta de estudio</p>
          <div class="rich-text">${chapter.studyRouteHtml || "<p>Empieza por la teoria, sigue con los guiados y cierra con las actividades del bloque.</p>"}</div>
        </article>
        <article class="summary-card">
          <p class="card-kicker">Consolidacion</p>
          <h2>${dominatedQuestions}/${chapterQuestions.length} preguntas dominadas</h2>
          <p>${reviewQuestions} preguntas del bloque siguen en la zona de repaso activo.</p>
        </article>
        <article class="summary-card">
          <p class="card-kicker">Recursos activos</p>
          <h2>${chapterActivities.length} actividades y ${chapterFlashcards.length} flashcards</h2>
          <p>Todo enlazado con las secciones del tema para que la practica no quede separada de la explicacion.</p>
        </article>
      </section>

      <section class="toc-strip">
        ${chapter.sections
          .map(
            (section) => `
              <button class="chip-link" type="button" data-scroll-target="${section.id.replace(/\./g, "-")}">${section.id}</button>
            `
          )
          .join("")}
      </section>

      <section class="search-grid">
        ${chapter.sections.map((section) => renderSectionCard(chapter, section)).join("")}
      </section>
    `;
  }

  function renderSectionCard(chapter, section) {
    const sectionActivities = getActivitiesForSection(chapter.id, section.id);
    const objectives = (section.objectives || [])
      .map(
        (item) => `
          <article class="callout-card callout-card--cool">
            <p class="card-kicker">${item.label}</p>
            <div class="rich-text">${item.html}</div>
          </article>
        `
      )
      .join("");

    const prerequisites = (section.prerequisites || [])
      .map(
        (item) => `
          <article class="callout-card callout-card--warm">
            <p class="card-kicker">${item.label}</p>
            <div class="rich-text">${item.html}</div>
          </article>
        `
      )
      .join("");

    const guided = (section.guidedExercises || []).length
      ? `
          <section class="section-card section-card--nested">
            <div class="section-card__head">
              <h3>Ejercicios guiados</h3>
              <span class="badge-soft">${section.guidedExercises.length}</span>
            </div>
            ${section.guidedExercises
              .map(
                (exercise, index) => `
                  <details class="inline-details">
                    <summary>${index + 1}. ${exercise.title}</summary>
                    <div class="rich-text">${exercise.promptHtml}</div>
                    ${
                      exercise.answerHtml
                        ? `
                          <details class="inline-details">
                            <summary>Ver respuesta breve</summary>
                            <div class="rich-text">${exercise.answerHtml}</div>
                          </details>
                        `
                        : ""
                    }
                    ${
                      exercise.solutionHtml
                        ? `
                          <details class="inline-details">
                            <summary>Ver solucion completa</summary>
                            <div class="rich-text">${exercise.solutionHtml}</div>
                          </details>
                        `
                        : ""
                    }
                  </details>
                `
              )
              .join("")}
          </section>
        `
      : "";

    const practiceItems = section.practice && section.practice.items ? section.practice.items : [];
    const practice = practiceItems.length
      ? `
          <section class="section-card section-card--nested">
            <div class="section-card__head">
              <h3>${section.practice.label || "Practica autonoma"}</h3>
              <span class="badge-soft">${practiceItems.length}</span>
            </div>
            <ol class="practice-list">
              ${practiceItems.map((item) => `<li><strong>${item.tagId}</strong> - ${item.prompt}</li>`).join("")}
            </ol>
            ${
              section.practice.answersHtml
                ? `
                  <details class="inline-details">
                    <summary>Ver clave de respuestas</summary>
                    <div class="rich-text">${section.practice.answersHtml}</div>
                  </details>
                `
                : ""
            }
            ${
              section.practice.solutionsHtml
                ? `
                  <details class="inline-details">
                    <summary>Ver solucionario completo</summary>
                    <div class="rich-text">${section.practice.solutionsHtml}</div>
                  </details>
                `
                : ""
            }
          </section>
        `
      : "";

    return `
      <article class="section-card" id="${section.id.replace(/\./g, "-")}">
        <header class="section-card__header">
          <div>
            <span class="section-card__id">${section.id}</span>
            <h2>${section.title}</h2>
          </div>
        </header>

        ${(objectives || prerequisites) ? `<div class="support-grid">${objectives}${prerequisites}</div>` : ""}
        ${renderCallout("Teoria minima", getPrimaryBlock(section, "theory"), "cool")}
        ${renderCallout("Metodo", getPrimaryBlock(section, "method"), "warm")}
        ${renderCallout("Ejemplo resuelto", getPrimaryBlock(section, "solvedExample"), "cool")}
        ${renderCallout("Error frecuente", getPrimaryBlock(section, "commonError"), "warm")}
        ${guided}
        ${practice}
        ${renderChallengeCard(section.challenge)}
        ${sectionActivities.length ? renderSectionActivities(sectionActivities) : ""}
      </article>
    `;
  }

  function renderCallout(title, block, tone) {
    if (!block || !block.html) {
      return "";
    }
    return `
      <section class="callout-card callout-card--${tone}">
        <p class="card-kicker">${title}</p>
        <div class="rich-text">${block.html}</div>
      </section>
    `;
  }

  function renderSectionActivities(activities) {
    return `
      <section class="section-card section-card--nested">
        <div class="section-card__head">
          <h3>Actividades interactivas de esta seccion</h3>
          <span class="badge-soft">${activities.length}</span>
        </div>
        <div class="activity-stack">
          ${activities.map((activity) => renderActivityCard(activity, true)).join("")}
        </div>
      </section>
    `;
  }

  function renderChallengeCard(challenge) {
    if (!challenge || !challenge.html) {
      return "";
    }

    return `
      <section class="section-card section-card--nested">
        <div class="section-card__head">
          <h3>${challenge.titleText || "Reto"}</h3>
          <span class="badge-soft">Sintesis</span>
        </div>
        <div class="rich-text">${challenge.html}</div>
        ${
          challenge.answerHtml
            ? `
              <details class="inline-details">
                <summary>Ver respuesta breve</summary>
                <div class="rich-text">${challenge.answerHtml}</div>
              </details>
            `
            : ""
        }
        ${
          challenge.solutionHtml
            ? `
              <details class="inline-details">
                <summary>Ver solucion completa</summary>
                <div class="rich-text">${challenge.solutionHtml}</div>
              </details>
            `
            : ""
        }
      </section>
    `;
  }

  function renderPractice() {
    const filteredQuestions = getFilteredQuestions();
    const stats = getQuestionStats(filteredQuestions);
    const examPanel = state.examIds.length ? renderExamPanel() : "";

    dom.app.innerHTML = `
      <section class="hero">
        <div class="hero__grid">
          <div>
            <p class="card-kicker">Practica con feedback inmediato</p>
            <h1>Banco real de preguntas, estados de aprendizaje y simulacros autocorregibles.</h1>
            <p>
              Filtra por bloque y estado para revisar exactamente lo que ya has dominado,
              lo que has respondido y lo que aun esta por aprender.
            </p>
          </div>
          <aside class="summary-card summary-card--accent">
            <p class="card-kicker">Seguimiento local</p>
            <h2>${stats.mastered} dominadas / ${filteredQuestions.length}</h2>
            <p>Las respuestas quedan guardadas en tu dispositivo para continuar despues sin perder historial.</p>
          </aside>
        </div>
      </section>

      <section class="summary-grid">
        <article class="summary-card">
          <p class="card-kicker">Nuevas</p>
          <h2>${stats.newCount}</h2>
          <p>Preguntas aun no respondidas.</p>
        </article>
        <article class="summary-card">
          <p class="card-kicker">Respondidas</p>
          <h2>${stats.seen}</h2>
          <p>Ya han pasado al menos una vez por tu historial.</p>
        </article>
        <article class="summary-card">
          <p class="card-kicker">Por aprender</p>
          <h2>${stats.review}</h2>
          <p>Necesitan repasarse porque han fallado o no estan consolidadas.</p>
        </article>
        <article class="summary-card">
          <p class="card-kicker">Dominadas</p>
          <h2>${stats.mastered}</h2>
          <p>Has encadenado aciertos suficientes para marcarlas como estables.</p>
        </article>
      </section>

      <section class="practice-layout">
        <article class="practice-panel">
          <div class="practice-panel__head">
            <div>
              <p class="card-kicker">Filtro activo</p>
              <h2>Banco de preguntas</h2>
            </div>
            <span class="badge-soft">${filteredQuestions.length}</span>
          </div>
          <div class="filter-grid">
            <label>
              <span class="sidebar__eyebrow">Capitulo</span>
              <select id="practiceChapterSelect">
                <option value="ALL" ${state.practiceChapter === "ALL" ? "selected" : ""}>Todos los capitulos</option>
                ${content.chapters
                  .map(
                    (chapter) =>
                      `<option value="${chapter.id}" ${state.practiceChapter === chapter.id ? "selected" : ""}>${chapter.id} - ${chapter.title}</option>`
                  )
                  .join("")}
              </select>
            </label>
            <label>
              <span class="sidebar__eyebrow">Estado</span>
              <select id="practiceStatusSelect">
                ${Object.entries(QUESTION_STATUS_LABELS)
                  .map(
                    ([value, label]) =>
                      `<option value="${value}" ${state.practiceStatus === value ? "selected" : ""}>${label}</option>`
                  )
                  .join("")}
              </select>
            </label>
            <label>
              <span class="sidebar__eyebrow">Simulacro</span>
              <select id="examCountSelect">
                ${[5, 10, 15].map((value) => `<option value="${value}" ${state.examCount === value ? "selected" : ""}>${value} preguntas</option>`).join("")}
              </select>
            </label>
          </div>
          <div class="hero__actions">
            <button class="primary-button" id="generateExamButton" type="button">Generar simulacro</button>
            <button class="ghost-button" id="resetProgressButton" type="button">Reiniciar progreso</button>
          </div>
        </article>

        <article class="practice-panel">
          <div class="practice-panel__head">
            <div>
              <p class="card-kicker">Uso recomendado</p>
              <h2>Como exprimir esta zona</h2>
            </div>
          </div>
          <div class="reading-panel">
            <ol>
              <li>Empieza por las nuevas para abrir campo.</li>
              <li>Pasa despues a por aprender para atacar errores recurrentes.</li>
              <li>Usa el simulacro cuando quieras mezclar temas con correccion al final.</li>
              <li>Vuelve al tema o a las flashcards si una pregunta sigue bloqueada.</li>
            </ol>
          </div>
        </article>
      </section>

      ${examPanel}

      <section class="practice-layout">
        ${filteredQuestions.map(renderQuizCard).join("")}
      </section>
    `;

    wirePracticeEvents();
  }

  function renderQuizCard(question) {
    const record = getQuestionRecord(question.id);
    const status = getQuestionStatus(question.id);
    const chapterTitle = (getChapter(question.chapterId) || { title: question.chapterId }).title;
    const feedback = record
      ? `
          <div class="quiz-feedback" data-state="${record.lastCorrect ? "correct" : "wrong"}">
            <div class="quiz-feedback__head">
              <strong>${record.lastCorrect ? "Respuesta correcta" : "Conviene revisarla"}</strong>
              <span>${statusLabel(status)}</span>
            </div>
            <p>${question.explanation}</p>
          </div>
        `
      : "";

    return `
      <article class="quiz-card">
        <div class="quiz-card__meta">
          <span>${question.chapterId} - ${chapterTitle}</span>
          <span>${question.difficulty}</span>
        </div>
        <div class="inline-actions">
          <span class="status-pill status-pill--${statusClass(status)}">${statusLabel(status)}</span>
          <small>${renderQuestionMeta(record)}</small>
        </div>
        <h3>${question.prompt}</h3>
        <div class="quiz-options">
          ${question.options
            .map((option, index) => {
              const isSelected = record && record.selectedIndex === index;
              const isCorrect = record && question.correctIndex === index;
              const className = record
                ? isCorrect
                  ? "option-button is-correct"
                  : isSelected
                    ? "option-button is-wrong"
                    : "option-button"
                : "option-button";
              return `
                <button
                  class="${className}"
                  type="button"
                  data-question-id="${question.id}"
                  data-option-index="${index}"
                >
                  ${option}
                </button>
              `;
            })
            .join("")}
        </div>
        ${feedback}
      </article>
    `;
  }

  function renderExamPanel() {
    const questions = state.examIds.map((id) => getQuestion(id)).filter(Boolean);
    const score = state.examSubmitted
      ? questions.filter((question) => state.examAnswers[question.id] === question.correctIndex).length
      : 0;

    return `
      <section class="practice-panel">
        <div class="practice-panel__head">
          <div>
            <p class="card-kicker">Modo simulacro</p>
            <h2>Examen mixto de ${questions.length} preguntas</h2>
          </div>
          <span class="badge-soft">${state.examSubmitted ? `${score}/${questions.length}` : "Pendiente de correccion"}</span>
        </div>
        <div class="reading-panel">
          <p>Responde de una vez y corrige al final. El simulacro respeta el filtro actual de capitulo y estado.</p>
        </div>
        <div class="practice-layout">
          ${questions
            .map(
              (question) => `
                <article class="quiz-card">
                  <div class="quiz-card__meta">
                    <span>${question.chapterId}</span>
                    <span>${question.difficulty}</span>
                  </div>
                  <h3>${question.prompt}</h3>
                  <div class="quiz-options">
                    ${question.options
                      .map((option, index) => {
                        const checked = state.examAnswers[question.id] === index ? "checked" : "";
                        const isCorrect = state.examSubmitted && question.correctIndex === index;
                        const isWrong =
                          state.examSubmitted &&
                          state.examAnswers[question.id] === index &&
                          question.correctIndex !== index;
                        return `
                          <label class="option-button ${isCorrect ? "is-correct" : isWrong ? "is-wrong" : ""}">
                            <input
                              type="radio"
                              name="exam-${question.id}"
                              value="${index}"
                              data-exam-question-id="${question.id}"
                              ${checked}
                            >
                            <span>${option}</span>
                          </label>
                        `;
                      })
                      .join("")}
                  </div>
                  ${
                    state.examSubmitted
                      ? `
                          <div class="quiz-feedback" data-state="${
                            state.examAnswers[question.id] === question.correctIndex ? "correct" : "wrong"
                          }">
                            <strong>${
                              state.examAnswers[question.id] === question.correctIndex
                                ? "Respuesta correcta"
                                : "Respuesta corregida"
                            }</strong>
                            <p>${question.explanation}</p>
                          </div>
                        `
                      : ""
                  }
                </article>
              `
            )
            .join("")}
        </div>
        <div class="hero__actions">
          ${
            state.examSubmitted
              ? `<button class="primary-button" id="generateExamButton" type="button">Generar otro simulacro</button>`
              : `<button class="primary-button" id="submitExamButton" type="button">Corregir simulacro</button>`
          }
        </div>
      </section>
    `;
  }

  function renderFlashcards() {
    const filteredCards = getFilteredFlashcards();
    const stats = getFlashcardStats(filteredCards);
    const currentCard =
      filteredCards.length > 0 ? filteredCards[clamp(state.flashcardIndex, 0, filteredCards.length - 1)] : null;

    dom.app.innerHTML = `
      <section class="hero">
        <div class="hero__grid">
          <div>
            <p class="card-kicker">Flashcards de estudio</p>
            <h1>Conceptos, formulas, procedimientos y estrategias para memorizar con sentido.</h1>
            <p>
              Usa las tarjetas para repasar lo esencial del tema, marcar lo que ya dominas y
              separar lo que conviene volver a mirar antes del proximo simulacro.
            </p>
          </div>
          <aside class="summary-card summary-card--accent">
            <p class="card-kicker">Tamano del mazo</p>
            <h2>${filteredCards.length} tarjetas filtradas</h2>
            <p>El filtrado se guarda localmente para que puedas retomar el mismo plan de estudio.</p>
          </aside>
        </div>
      </section>

      <section class="summary-grid">
        <article class="summary-card">
          <p class="card-kicker">Nuevas</p>
          <h2>${stats.newCount}</h2>
          <p>Aun no han pasado por tu mesa de repaso.</p>
        </article>
        <article class="summary-card">
          <p class="card-kicker">Repasar</p>
          <h2>${stats.review}</h2>
          <p>Conviene volver a ellas porque han quedado marcadas como frágiles.</p>
        </article>
        <article class="summary-card">
          <p class="card-kicker">Dominadas</p>
          <h2>${stats.mastered}</h2>
          <p>Ya las has identificado como estables en este dispositivo.</p>
        </article>
        <article class="summary-card">
          <p class="card-kicker">Mazo total</p>
          <h2>${flashcardBank.length}</h2>
          <p>Tarjetas generadas automaticamente a partir de teoria, metodos y alertas.</p>
        </article>
      </section>

      <section class="practice-layout">
        <article class="practice-panel">
          <div class="practice-panel__head">
            <div>
              <p class="card-kicker">Filtros</p>
              <h2>Construye tu mazo</h2>
            </div>
            <span class="badge-soft">${filteredCards.length}</span>
          </div>
          <div class="filter-grid">
            <label>
              <span class="sidebar__eyebrow">Capitulo</span>
              <select id="flashcardChapterSelect">
                <option value="ALL" ${state.flashcardChapter === "ALL" ? "selected" : ""}>Todos los capitulos</option>
                ${content.chapters
                  .map(
                    (chapter) =>
                      `<option value="${chapter.id}" ${state.flashcardChapter === chapter.id ? "selected" : ""}>${chapter.id} - ${chapter.title}</option>`
                  )
                  .join("")}
              </select>
            </label>
            <label>
              <span class="sidebar__eyebrow">Tipo</span>
              <select id="flashcardTypeSelect">
                ${Object.entries(FLASHCARD_TYPE_LABELS)
                  .map(
                    ([value, label]) =>
                      `<option value="${value}" ${state.flashcardType === value ? "selected" : ""}>${label}</option>`
                  )
                  .join("")}
              </select>
            </label>
            <label>
              <span class="sidebar__eyebrow">Estado</span>
              <select id="flashcardStatusSelect">
                ${Object.entries(FLASHCARD_STATUS_LABELS)
                  .map(
                    ([value, label]) =>
                      `<option value="${value}" ${state.flashcardStatus === value ? "selected" : ""}>${label}</option>`
                  )
                  .join("")}
              </select>
            </label>
          </div>
        </article>

        <article class="practice-panel">
          <div class="practice-panel__head">
            <div>
              <p class="card-kicker">Ritmo sugerido</p>
              <h2>Como usar las tarjetas</h2>
            </div>
          </div>
          <div class="reading-panel">
            <ol>
              <li>Intenta recordar la idea antes de girar la carta.</li>
              <li>Marca como repasar si dudas en algun paso clave.</li>
              <li>Reserva el estado dominada para lo que ya salga con soltura.</li>
              <li>Combina este mazo con los test del mismo capitulo.</li>
            </ol>
          </div>
        </article>
      </section>

      ${
        currentCard
          ? renderFlashcardStage(currentCard, filteredCards.length)
          : `
              <section class="summary-card">
                <p class="card-kicker">Sin resultados</p>
                <h2>No hay tarjetas con este filtro</h2>
                <p>Prueba a cambiar el capitulo o el estado para reconstruir el mazo.</p>
              </section>
            `
      }
    `;

    wireFlashcardEvents(filteredCards);
  }

  function renderFlashcardStage(card, totalCards) {
    const status = getFlashcardStatus(card.id);
    return `
      <section class="flashcard-stage">
        <div class="flashcard-stage__meta">
          <div>
            <p class="card-kicker">${card.chapterId} - ${getChapter(card.chapterId).title}</p>
            <h2>${card.sectionId} - ${card.sectionTitle}</h2>
          </div>
          <span class="status-pill status-pill--${statusClass(status)}">${statusLabel(status)}</span>
        </div>

        <div class="flashcard ${state.flashcardFlipped ? "is-flipped" : ""}" id="flashcardDeck">
          <article class="flashcard__face flashcard__face--front">
            <p class="card-kicker">${FLASHCARD_TYPE_LABELS[card.type] || card.type}</p>
            <h3>${card.front}</h3>
            <p>Piensa la respuesta y gira la tarjeta cuando tengas una explicacion propia.</p>
          </article>
          <article class="flashcard__face flashcard__face--back">
            <p class="card-kicker">${FLASHCARD_TYPE_LABELS[card.type] || card.type}</p>
            <div class="rich-text">${card.backHtml}</div>
          </article>
        </div>

        <div class="hero__actions">
          <button class="ghost-button" id="flashcardPrevButton" type="button">Tarjeta anterior</button>
          <button class="secondary-button" id="flashcardFlipButton" type="button">${state.flashcardFlipped ? "Ver anverso" : "Voltear tarjeta"}</button>
          <button class="ghost-button" id="flashcardNextButton" type="button">Tarjeta siguiente</button>
          <button class="ghost-button" id="flashcardShuffleButton" type="button">Tarjeta aleatoria</button>
        </div>

        <div class="hero__actions">
          <button class="primary-button" id="flashcardMasteredButton" type="button">Marcar como dominada</button>
          <button class="ghost-button" id="flashcardReviewButton" type="button">Marcar para repasar</button>
        </div>

        <p class="progress-card__hint">Tarjeta ${state.flashcardIndex + 1} de ${totalCards} en el filtro actual.</p>
      </section>
    `;
  }

  function renderLabs() {
    const selectedChapter = state.labsChapter;
    const chapters = selectedChapter === "ALL" ? content.chapters : content.chapters.filter((chapter) => chapter.id === selectedChapter);

    dom.app.innerHTML = `
      <section class="hero">
        <div class="hero__grid">
          <div>
            <p class="card-kicker">Laboratorios y actividades interactivas</p>
            <h1>Dos o mas actividades por tema, integradas con la explicacion y reunidas en un solo espacio.</h1>
            <p>
              Aqui puedes trabajar por capitulo o recorrer todo el banco interactivo. Las mismas
              actividades aparecen tambien dentro de las secciones a las que pertenecen.
            </p>
          </div>
          <aside class="summary-card summary-card--accent">
            <p class="card-kicker">Banco activo</p>
            <h2>${chapters.reduce((total, chapter) => total + getActivitiesForChapter(chapter.id).length, 0)} actividades visibles</h2>
            <p>La idea es que lo mas dificil del tema pueda visualizarse y probarse con feedback inmediato.</p>
          </aside>
        </div>
      </section>

      <section class="practice-layout">
        <article class="practice-panel">
          <div class="practice-panel__head">
            <div>
              <p class="card-kicker">Filtro</p>
              <h2>Selecciona bloque</h2>
            </div>
            <span class="badge-soft">${selectedChapter === "ALL" ? "Completo" : selectedChapter}</span>
          </div>
          <label>
            <span class="sidebar__eyebrow">Capitulo</span>
            <select id="labsChapterSelect">
              <option value="ALL" ${state.labsChapter === "ALL" ? "selected" : ""}>Todos los capitulos</option>
              ${content.chapters
                .map(
                  (chapter) =>
                    `<option value="${chapter.id}" ${state.labsChapter === chapter.id ? "selected" : ""}>${chapter.id} - ${chapter.title}</option>`
                )
                .join("")}
            </select>
          </label>
        </article>

        <article class="practice-panel">
          <div class="practice-panel__head">
            <div>
              <p class="card-kicker">Uso recomendado</p>
              <h2>Aprende mientras experimentas</h2>
            </div>
          </div>
          <div class="reading-panel">
            <ol>
              <li>Abre primero la seccion del tema donde nace la actividad.</li>
              <li>Pasa despues al laboratorio para ver como cambia la situacion al manipular datos.</li>
              <li>Vuelve al test del bloque si quieres comprobar si la intuicion ya se ha fijado.</li>
            </ol>
          </div>
        </article>
      </section>

      ${chapters
        .map(
          (chapter) => `
            <section class="section-card">
              <div class="section-card__head">
                <div>
                  <p class="card-kicker">${(CHAPTER_META[chapter.id] || {}).block || "Bloque"}</p>
                  <h2>${chapter.id} - ${chapter.title}</h2>
                </div>
                <span class="badge-soft">${getActivitiesForChapter(chapter.id).length} actividades</span>
              </div>
              <div class="activity-stack">
                ${getActivitiesForChapter(chapter.id).map((activity) => renderActivityCard(activity, false)).join("")}
              </div>
            </section>
          `
        )
        .join("")}
    `;

    wireLabPageEvents();
  }

  function renderActivityCard(activity, compact) {
    const record = getActivityRecord(activity.id);
    const status = getActivityStatus(activity.id);
    const meta = getSectionTitle(activity.sectionId);
    const commonHeader = `
      <div class="activity-card__head">
        <div>
          <p class="card-kicker">${activity.chapterId} - ${meta}</p>
          <h3>${activity.title}</h3>
        </div>
        <span class="status-pill status-pill--${statusClass(status)}">${statusLabel(status)}</span>
      </div>
      <p>${activity.prompt}</p>
    `;

    if (activity.type === "mcq") {
      const feedback = record
        ? `
            <div class="quiz-feedback" data-state="${record.lastCorrect ? "correct" : "wrong"}">
              <strong>${record.lastCorrect ? "Acertada" : "Ajustemos la idea"}</strong>
              <p>${activity.explanation}</p>
            </div>
          `
        : `
            <div class="quiz-feedback">
              <strong>Prueba rapida</strong>
              <p>${activity.explanation}</p>
            </div>
          `;

      return `
        <article class="activity-card activity-card--micro ${compact ? "activity-card--compact" : ""}">
          ${commonHeader}
          <div class="quiz-options">
            ${activity.options
              .map((option, index) => {
                const isSelected = record && record.selectedIndex === index;
                const isCorrect = record && activity.correctIndex === index;
                const className = record
                  ? isCorrect
                    ? "option-button is-correct"
                    : isSelected
                      ? "option-button is-wrong"
                      : "option-button"
                  : "option-button";
                return `
                  <button
                    class="${className}"
                    type="button"
                    data-activity-id="${activity.id}"
                    data-activity-option="${index}"
                  >
                    ${option}
                  </button>
                `;
              })
              .join("")}
          </div>
          ${feedback}
        </article>
      `;
    }

    if (activity.type === "numeric") {
      const feedback = record
        ? `
            <div class="quiz-feedback" data-state="${record.lastCorrect ? "correct" : "wrong"}">
              <strong>${record.lastCorrect ? "Resultado correcto" : "Todavia no"}</strong>
              <p>${activity.explanation}</p>
            </div>
          `
        : `
            <div class="quiz-feedback">
              <strong>Pista</strong>
              <p>${activity.hint || activity.explanation}</p>
            </div>
          `;

      return `
        <article class="activity-card activity-card--micro ${compact ? "activity-card--compact" : ""}">
          ${commonHeader}
          <div class="activity-card__controls activity-card__controls--wide">
            <input
              class="number-input"
              type="text"
              id="draft-${activity.id}"
              value="${escapeAttribute(state.activityDrafts[activity.id] || "")}"
              placeholder="${activity.placeholder || "Escribe tu respuesta"}"
            >
            <button class="primary-button" type="button" data-activity-check="${activity.id}">Comprobar</button>
          </div>
          ${feedback}
        </article>
      `;
    }

    if (activity.type === "custom-number-classifier") {
      const currentChallenge = NUMBER_CHALLENGES[state.numberChallengeIndex];
      return `
        <article class="activity-card ${compact ? "activity-card--compact" : ""}">
          ${commonHeader}
          <div class="activity-output">
            <div class="activity-card__head activity-card__head--inline">
              <p class="card-kicker">Numero actual</p>
              <button class="secondary-button" id="nextNumberChallenge" type="button">Otro reto</button>
            </div>
            <h2 id="numberChallengeExpression">${currentChallenge.expression}</h2>
            <div class="activity-tabs">
              <button class="chip-button" type="button" data-number-answer="N">Natural</button>
              <button class="chip-button" type="button" data-number-answer="Z">Entero</button>
              <button class="chip-button" type="button" data-number-answer="Q">Racional</button>
              <button class="chip-button" type="button" data-number-answer="I">Irracional</button>
            </div>
            <div id="numberChallengeFeedback" class="quiz-feedback">
              <strong>Pregunta lista</strong>
              <p>Elige el conjunto mas pequeno al que pertenece el numero.</p>
            </div>
          </div>
        </article>
      `;
    }

    if (activity.type === "custom-trig-circle") {
      return `
        <article class="activity-card ${compact ? "activity-card--compact" : ""}">
          ${commonHeader}
          <div class="activity-card__head activity-card__head--inline">
            <p class="card-kicker">Objetivo</p>
            <span class="badge-soft" id="trigAngleLabel">${state.customLabs.trigAngle}&deg;</span>
          </div>
          <div class="range-label">
            <span>0&deg;</span>
            <span id="trigRadianLabel">${formatRadian(state.customLabs.trigAngle)}</span>
            <span>360&deg;</span>
          </div>
          <input class="range-input" id="trigSlider" type="range" min="0" max="360" step="5" value="${state.customLabs.trigAngle}">
          <div class="diagram-panel" id="trigDiagram"></div>
          <div class="activity-output" id="trigFeedback"></div>
        </article>
      `;
    }

    if (activity.type === "custom-vector-lab") {
      return `
        <article class="activity-card ${compact ? "activity-card--compact" : ""}">
          ${commonHeader}
          <div class="activity-card__controls activity-card__controls--wide">
            <label>u<sub>x</sub><input class="number-input" id="ux" type="number" value="${state.customLabs.vector.ux}" step="1"></label>
            <label>u<sub>y</sub><input class="number-input" id="uy" type="number" value="${state.customLabs.vector.uy}" step="1"></label>
            <label>v<sub>x</sub><input class="number-input" id="vx" type="number" value="${state.customLabs.vector.vx}" step="1"></label>
            <label>v<sub>y</sub><input class="number-input" id="vy" type="number" value="${state.customLabs.vector.vy}" step="1"></label>
          </div>
          <div class="diagram-panel" id="vectorDiagram"></div>
          <div class="vector-output" id="vectorFeedback"></div>
        </article>
      `;
    }

    if (activity.type === "custom-function-lab") {
      return `
        <article class="activity-card ${compact ? "activity-card--compact" : ""}">
          ${commonHeader}
          <div class="activity-card__controls">
            <label>
              Funcion
              <select id="functionSelect">
                ${FUNCTION_LIBRARY.map((entry) => `<option value="${entry.id}" ${state.customLabs.functionId === entry.id ? "selected" : ""}>${entry.label}</option>`).join("")}
              </select>
            </label>
            <label>
              Punto de estudio
              <input class="number-input" id="functionPoint" type="number" value="${state.customLabs.functionPoint}" step="0.25">
            </label>
          </div>
          <div class="diagram-panel" id="functionDiagram"></div>
          <div class="function-output" id="functionFeedback"></div>
        </article>
      `;
    }

    return "";
  }

  function wirePracticeEvents() {
    document.getElementById("practiceChapterSelect")?.addEventListener("change", (event) => {
      state.practiceChapter = event.target.value;
      window.localStorage.setItem(STORAGE_KEYS.practiceChapter, state.practiceChapter);
      window.location.hash = state.practiceChapter === "ALL" ? "#/practica" : `#/practica/${state.practiceChapter}`;
    });

    document.getElementById("practiceStatusSelect")?.addEventListener("change", (event) => {
      state.practiceStatus = event.target.value;
      window.localStorage.setItem(STORAGE_KEYS.practiceStatus, state.practiceStatus);
      renderPractice();
      postRender();
    });

    document.getElementById("examCountSelect")?.addEventListener("change", (event) => {
      state.examCount = Number(event.target.value);
      window.localStorage.setItem(STORAGE_KEYS.examCount, String(state.examCount));
    });

    document.getElementById("generateExamButton")?.addEventListener("click", () => {
      const source = getFilteredQuestions();
      state.examIds = shuffle(source.map((question) => question.id)).slice(0, Math.min(state.examCount, source.length));
      state.examAnswers = {};
      state.examSubmitted = false;
      renderPractice();
      postRender();
    });

    document.getElementById("resetProgressButton")?.addEventListener("click", () => {
      state.progress = createEmptyProgress();
      state.examAnswers = {};
      state.examIds = [];
      state.examSubmitted = false;
      saveProgress();
      renderPractice();
      postRender();
    });

    dom.app.querySelectorAll("[data-question-id][data-option-index]").forEach((button) => {
      button.addEventListener("click", () => {
        applyAnswer(button.dataset.questionId, Number(button.dataset.optionIndex));
        rerenderPreservingScroll();
      });
    });

    dom.app.querySelectorAll("input[data-exam-question-id]").forEach((input) => {
      input.addEventListener("change", () => {
        state.examAnswers[input.dataset.examQuestionId] = Number(input.value);
      });
    });

    document.getElementById("submitExamButton")?.addEventListener("click", () => {
      state.examSubmitted = true;
      state.examIds.forEach((questionId) => {
        if (Number.isInteger(state.examAnswers[questionId])) {
          applyAnswer(questionId, state.examAnswers[questionId], false);
        }
      });
      renderPractice();
      postRender();
    });
  }

  function wireFlashcardEvents(filteredCards) {
    document.getElementById("flashcardChapterSelect")?.addEventListener("change", (event) => {
      state.flashcardChapter = event.target.value;
      state.flashcardIndex = 0;
      state.flashcardFlipped = false;
      window.localStorage.setItem(STORAGE_KEYS.flashcardChapter, state.flashcardChapter);
      window.location.hash = state.flashcardChapter === "ALL" ? "#/flashcards" : `#/flashcards/${state.flashcardChapter}`;
    });

    document.getElementById("flashcardTypeSelect")?.addEventListener("change", (event) => {
      state.flashcardType = event.target.value;
      state.flashcardIndex = 0;
      state.flashcardFlipped = false;
      window.localStorage.setItem(STORAGE_KEYS.flashcardType, state.flashcardType);
      renderFlashcards();
      postRender();
    });

    document.getElementById("flashcardStatusSelect")?.addEventListener("change", (event) => {
      state.flashcardStatus = event.target.value;
      state.flashcardIndex = 0;
      state.flashcardFlipped = false;
      window.localStorage.setItem(STORAGE_KEYS.flashcardStatus, state.flashcardStatus);
      renderFlashcards();
      postRender();
    });

    document.getElementById("flashcardFlipButton")?.addEventListener("click", () => {
      state.flashcardFlipped = !state.flashcardFlipped;
      renderFlashcards();
      postRender();
    });

    document.getElementById("flashcardPrevButton")?.addEventListener("click", () => {
      if (!filteredCards.length) {
        return;
      }
      state.flashcardIndex = (state.flashcardIndex - 1 + filteredCards.length) % filteredCards.length;
      state.flashcardFlipped = false;
      renderFlashcards();
      postRender();
    });

    document.getElementById("flashcardNextButton")?.addEventListener("click", () => {
      if (!filteredCards.length) {
        return;
      }
      state.flashcardIndex = (state.flashcardIndex + 1) % filteredCards.length;
      state.flashcardFlipped = false;
      renderFlashcards();
      postRender();
    });

    document.getElementById("flashcardShuffleButton")?.addEventListener("click", () => {
      if (!filteredCards.length) {
        return;
      }
      state.flashcardIndex = Math.floor(Math.random() * filteredCards.length);
      state.flashcardFlipped = false;
      renderFlashcards();
      postRender();
    });

    document.getElementById("flashcardMasteredButton")?.addEventListener("click", () => {
      if (!filteredCards.length) {
        return;
      }
      recordFlashcardDecision(filteredCards[state.flashcardIndex].id, "mastered");
      moveToNextFlashcard(filteredCards.length);
    });

    document.getElementById("flashcardReviewButton")?.addEventListener("click", () => {
      if (!filteredCards.length) {
        return;
      }
      recordFlashcardDecision(filteredCards[state.flashcardIndex].id, "review");
      moveToNextFlashcard(filteredCards.length);
    });
  }

  function wireLabPageEvents() {
    document.getElementById("labsChapterSelect")?.addEventListener("change", (event) => {
      state.labsChapter = event.target.value;
      window.localStorage.setItem(STORAGE_KEYS.labsChapter, state.labsChapter);
      window.location.hash = state.labsChapter === "ALL" ? "#/laboratorios" : `#/laboratorios/${state.labsChapter}`;
    });
  }

  function wireActivityEvents() {
    dom.app.querySelectorAll("[data-scroll-target]").forEach((button) => {
      button.addEventListener("click", () => {
        document.getElementById(button.dataset.scrollTarget)?.scrollIntoView({ behavior: "smooth", block: "start" });
      });
    });

    dom.app.querySelectorAll("[data-activity-id][data-activity-option]").forEach((button) => {
      button.addEventListener("click", () => {
        const activity = getActivity(button.dataset.activityId);
        if (!activity) {
          return;
        }
        updateActivityProgress(activity.id, Number(button.dataset.activityOption) === activity.correctIndex, {
          selectedIndex: Number(button.dataset.activityOption)
        });
        rerenderPreservingScroll();
      });
    });

    dom.app.querySelectorAll("[data-activity-check]").forEach((button) => {
      button.addEventListener("click", () => {
        const activity = getActivity(button.dataset.activityCheck);
        if (!activity) {
          return;
        }
        const input = document.getElementById(`draft-${activity.id}`);
        const value = input ? input.value.trim() : "";
        state.activityDrafts[activity.id] = value;
        const correct = checkNumericActivity(activity, value);
        updateActivityProgress(activity.id, correct, { value });
        rerenderPreservingScroll();
      });
    });

    if (document.getElementById("nextNumberChallenge")) {
      document.getElementById("nextNumberChallenge").addEventListener("click", () => {
        state.numberChallengeIndex = (state.numberChallengeIndex + 1) % NUMBER_CHALLENGES.length;
        document.getElementById("numberChallengeExpression").innerHTML = NUMBER_CHALLENGES[state.numberChallengeIndex].expression;
        updateNumberChallengeFeedback();
        typesetMath(dom.app);
      });
    }

    dom.app.querySelectorAll("[data-number-answer]").forEach((button) => {
      button.addEventListener("click", () => {
        const challenge = NUMBER_CHALLENGES[state.numberChallengeIndex];
        const correct = button.dataset.numberAnswer === challenge.correct;
        updateActivityProgress("ACT-C01-01", correct, { selectedIndex: button.dataset.numberAnswer });
        const feedback = document.getElementById("numberChallengeFeedback");
        feedback.dataset.state = correct ? "correct" : "wrong";
        feedback.innerHTML = `
          <strong>${correct ? "Bien visto" : "Todavia no"}</strong>
          <p>${challenge.explanation}</p>
        `;
        typesetMath(feedback);
      });
    });

    if (document.getElementById("trigSlider")) {
      document.getElementById("trigSlider").addEventListener("input", (event) => {
        state.customLabs.trigAngle = Number(event.target.value);
        updateTrigLab();
      });
      updateTrigLab();
    }

    ["ux", "uy", "vx", "vy"].forEach((id) => {
      document.getElementById(id)?.addEventListener("input", () => {
        state.customLabs.vector = {
          ux: Number(document.getElementById("ux").value),
          uy: Number(document.getElementById("uy").value),
          vx: Number(document.getElementById("vx").value),
          vy: Number(document.getElementById("vy").value)
        };
        updateVectorLab();
      });
    });
    if (document.getElementById("vectorDiagram")) {
      updateVectorLab();
    }

    document.getElementById("functionSelect")?.addEventListener("change", (event) => {
      state.customLabs.functionId = event.target.value;
      syncFunctionControls();
    });
    document.getElementById("functionPoint")?.addEventListener("input", (event) => {
      state.customLabs.functionPoint = Number(event.target.value);
      updateFunctionLab();
    });
    if (document.getElementById("functionDiagram")) {
      syncFunctionControls();
    }
  }

  function applyAnswer(questionId, selectedIndex, grantXp = true) {
    const question = getQuestion(questionId);
    if (!question) {
      return;
    }

    const previous = getQuestionRecord(questionId) || {
      attempts: 0,
      correctAttempts: 0,
      incorrectAttempts: 0,
      correctStreak: 0
    };
    const correct = question.correctIndex === selectedIndex;
    const next = {
      attempts: previous.attempts + 1,
      correctAttempts: previous.correctAttempts + (correct ? 1 : 0),
      incorrectAttempts: previous.incorrectAttempts + (correct ? 0 : 1),
      correctStreak: correct ? previous.correctStreak + 1 : 0,
      selectedIndex,
      lastCorrect: correct,
      lastSeenAt: new Date().toISOString()
    };
    next.mastered = next.correctStreak >= 2;

    state.progress.questions[questionId] = next;
    if (grantXp && correct && !previous.mastered) {
      state.progress.xp += question.difficulty === "estrategia" ? 10 : question.difficulty === "media" ? 8 : 6;
    }
    saveProgress();
  }

  function updateActivityProgress(activityId, correct, extra = {}) {
    const previous = getActivityRecord(activityId) || {
      attempts: 0,
      correctAttempts: 0,
      incorrectAttempts: 0,
      correctStreak: 0
    };
    const next = {
      attempts: previous.attempts + 1,
      correctAttempts: previous.correctAttempts + (correct ? 1 : 0),
      incorrectAttempts: previous.incorrectAttempts + (correct ? 0 : 1),
      correctStreak: correct ? previous.correctStreak + 1 : 0,
      lastCorrect: correct,
      lastSeenAt: new Date().toISOString(),
      ...extra
    };
    next.mastered = next.correctStreak >= 1 && correct;
    state.progress.activities[activityId] = next;
    if (correct && !previous.mastered) {
      state.progress.xp += 4;
    }
    saveProgress();
  }

  function unlockCustomActivity(activityId) {
    const previous = getActivityRecord(activityId);
    if (previous && previous.mastered) {
      return;
    }
    state.progress.activities[activityId] = {
      attempts: (previous?.attempts || 0) + 1,
      correctAttempts: (previous?.correctAttempts || 0) + 1,
      incorrectAttempts: previous?.incorrectAttempts || 0,
      correctStreak: (previous?.correctStreak || 0) + 1,
      lastCorrect: true,
      mastered: true,
      lastSeenAt: new Date().toISOString()
    };
    state.progress.xp += 5;
    saveProgress();
  }

  function recordFlashcardDecision(cardId, decision) {
    const previous = getFlashcardRecord(cardId) || { seen: 0, masteredCount: 0, reviewCount: 0 };
    const next = {
      seen: previous.seen + 1,
      masteredCount: previous.masteredCount + (decision === "mastered" ? 1 : 0),
      reviewCount: previous.reviewCount + (decision === "review" ? 1 : 0),
      lastDecision: decision,
      lastSeenAt: new Date().toISOString()
    };
    next.mastered = decision === "mastered" && next.masteredCount >= 2;
    state.progress.flashcards[cardId] = next;
    if (decision === "mastered" && !previous.mastered) {
      state.progress.xp += 3;
    }
    saveProgress();
  }

  function moveToNextFlashcard(totalCards) {
    state.flashcardFlipped = false;
    state.flashcardIndex = totalCards ? (state.flashcardIndex + 1) % totalCards : 0;
    renderFlashcards();
    postRender();
  }

  function getFilteredQuestions() {
    return questionBank.filter((question) => {
      if (state.practiceChapter !== "ALL" && question.chapterId !== state.practiceChapter) {
        return false;
      }
      return matchesQuestionStatus(question.id, state.practiceStatus);
    });
  }

  function getFilteredFlashcards() {
    return flashcardBank.filter((card) => {
      if (state.flashcardChapter !== "ALL" && card.chapterId !== state.flashcardChapter) {
        return false;
      }
      if (state.flashcardType !== "ALL" && card.type !== state.flashcardType) {
        return false;
      }
      return matchesFlashcardStatus(card.id, state.flashcardStatus);
    });
  }

  function matchesQuestionStatus(questionId, filter) {
    if (filter === "ALL") {
      return true;
    }
    const status = getQuestionStatus(questionId);
    if (filter === "NEW") {
      return status === "new";
    }
    if (filter === "SEEN") {
      return status !== "new";
    }
    if (filter === "REVIEW") {
      return status === "review";
    }
    if (filter === "MASTERED") {
      return status === "mastered";
    }
    return true;
  }

  function matchesFlashcardStatus(cardId, filter) {
    if (filter === "ALL") {
      return true;
    }
    const status = getFlashcardStatus(cardId);
    if (filter === "NEW") {
      return status === "new";
    }
    if (filter === "REVIEW") {
      return status === "review";
    }
    if (filter === "MASTERED") {
      return status === "mastered";
    }
    return true;
  }

  function getQuestionStats(questions) {
    return {
      newCount: questions.filter((question) => getQuestionStatus(question.id) === "new").length,
      seen: questions.filter((question) => getQuestionStatus(question.id) !== "new").length,
      review: questions.filter((question) => getQuestionStatus(question.id) === "review").length,
      mastered: questions.filter((question) => getQuestionStatus(question.id) === "mastered").length
    };
  }

  function getFlashcardStats(cards) {
    return {
      newCount: cards.filter((card) => getFlashcardStatus(card.id) === "new").length,
      review: cards.filter((card) => getFlashcardStatus(card.id) === "review").length,
      mastered: cards.filter((card) => getFlashcardStatus(card.id) === "mastered").length
    };
  }

  function getQuestionRecord(questionId) {
    return state.progress.questions[questionId] || null;
  }

  function getActivityRecord(activityId) {
    return state.progress.activities[activityId] || null;
  }

  function getFlashcardRecord(cardId) {
    return state.progress.flashcards[cardId] || null;
  }

  function getQuestionStatus(questionId) {
    const record = getQuestionRecord(questionId);
    if (!record || !record.attempts) {
      return "new";
    }
    if (record.mastered) {
      return "mastered";
    }
    if (!record.lastCorrect || record.incorrectAttempts > 0) {
      return "review";
    }
    return "learning";
  }

  function getActivityStatus(activityId) {
    const record = getActivityRecord(activityId);
    if (!record || !record.attempts) {
      return "new";
    }
    if (record.mastered) {
      return "mastered";
    }
    if (!record.lastCorrect) {
      return "review";
    }
    return "learning";
  }

  function getFlashcardStatus(cardId) {
    const record = getFlashcardRecord(cardId);
    if (!record || !record.seen) {
      return "new";
    }
    if (record.mastered) {
      return "mastered";
    }
    if (record.lastDecision === "review") {
      return "review";
    }
    return "learning";
  }

  function renderQuestionMeta(record) {
    if (!record) {
      return "Sin intentos aun";
    }
    return `${record.attempts} intento(s) - ${record.correctAttempts} acierto(s)`;
  }

  function updateProgressUi() {
    const masteredQuestions = questionBank.filter((question) => getQuestionStatus(question.id) === "mastered").length;
    const reviewQuestions = questionBank.filter((question) => getQuestionStatus(question.id) === "review").length;
    const progressPercent = questionBank.length ? Math.round((masteredQuestions / questionBank.length) * 100) : 0;

    dom.xpValue.textContent = String(state.progress.xp);
    dom.quizValue.textContent = `${masteredQuestions}/${questionBank.length}`;
    dom.progressFill.style.width = `${progressPercent}%`;
    dom.progressHint.textContent =
      reviewQuestions > 0
        ? `Tienes ${reviewQuestions} pregunta(s) en la zona de por aprender.`
        : "Avanza bloque a bloque: teoria, actividad, test y flashcards.";
  }

  function loadProgress() {
    const raw = window.localStorage.getItem(STORAGE_KEYS.progress);
    if (!raw) {
      return createEmptyProgress();
    }

    try {
      const parsed = JSON.parse(raw);
      const empty = createEmptyProgress();
      if (parsed.answers && !parsed.questions) {
        Object.entries(parsed.answers).forEach(([questionId, answer]) => {
          empty.questions[questionId] = {
            attempts: 1,
            correctAttempts: answer.correct ? 1 : 0,
            incorrectAttempts: answer.correct ? 0 : 1,
            correctStreak: answer.correct ? 1 : 0,
            selectedIndex: answer.selectedIndex,
            lastCorrect: Boolean(answer.correct),
            mastered: Boolean(answer.correct),
            lastSeenAt: new Date().toISOString()
          };
        });
      }

      return {
        xp: typeof parsed.xp === "number" ? parsed.xp : 0,
        questions: sanitizeRecordMap(parsed.questions || empty.questions),
        activities: sanitizeRecordMap(parsed.activities),
        flashcards: sanitizeRecordMap(parsed.flashcards)
      };
    } catch (error) {
      return createEmptyProgress();
    }
  }

  function createEmptyProgress() {
    return {
      xp: 0,
      questions: {},
      activities: {},
      flashcards: {}
    };
  }

  function sanitizeRecordMap(value) {
    return value && typeof value === "object" ? value : {};
  }

  function saveProgress() {
    window.localStorage.setItem(STORAGE_KEYS.progress, JSON.stringify(state.progress));
    updateProgressUi();
  }

  function initTheme() {
    const stored = window.localStorage.getItem(STORAGE_KEYS.theme);
    const preferredDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const theme = stored || (preferredDark ? "dark" : "light");
    document.body.dataset.theme = theme;
    dom.themeToggle.textContent = theme === "dark" ? "Modo claro" : "Modo oscuro";
  }

  function toggleTheme() {
    const nextTheme = document.body.dataset.theme === "dark" ? "light" : "dark";
    document.body.dataset.theme = nextTheme;
    dom.themeToggle.textContent = nextTheme === "dark" ? "Modo claro" : "Modo oscuro";
    window.localStorage.setItem(STORAGE_KEYS.theme, nextTheme);
  }

  function registerServiceWorker() {
    if (!("serviceWorker" in navigator) || window.location.protocol === "file:") {
      return;
    }
    navigator.serviceWorker.register("./sw.js").catch(() => undefined);
  }

  function setupInstallPrompt() {
    window.addEventListener("beforeinstallprompt", (event) => {
      event.preventDefault();
      state.installPromptEvent = event;
      dom.installButton.hidden = false;
    });
  }

  async function installPwa() {
    if (!state.installPromptEvent) {
      return;
    }
    state.installPromptEvent.prompt();
    await state.installPromptEvent.userChoice;
    state.installPromptEvent = null;
    dom.installButton.hidden = true;
  }

  function syncLanguageSelect() {
    syncLanguagePreference(getPreferredLanguage());
  }

  function handleLanguageChange(event) {
    const language = event.target.value;
    const label = LANGUAGE_LABELS[language] || language.toUpperCase();
    syncLanguagePreference(language);

    if (language === "es") {
      showTranslationFeedback("Cargando la version original...");
      clearGoogleTranslateCookies();
      window.setTimeout(() => window.location.reload(), 350);
      return;
    }

    showTranslationFeedback(`Aplicando traduccion a ${label}...`);
    if (window.location.protocol !== "file:") {
      setGoogleTranslateCookie(language);
    }
    scheduleTranslationRefresh(language, true);
  }

  window.googleTranslateElementInit = function googleTranslateElementInit() {
    if (!window.google || !window.google.translate || !window.google.translate.TranslateElement) {
      return;
    }

    new window.google.translate.TranslateElement(
      {
        pageLanguage: "es",
        autoDisplay: false,
        includedLanguages: Object.keys(LANGUAGE_LABELS)
          .filter((lang) => lang !== "es")
          .join(",")
      },
      "google_translate_element"
    );

    syncLanguagePreference(getPreferredLanguage());
    scheduleTranslationRefresh(getPreferredLanguage(), false);
  };

  function scheduleTranslationRefresh(language, announce) {
    const targetLanguage = normalizeLanguage(language || getPreferredLanguage());
    if (state.translationTimer) {
      window.clearTimeout(state.translationTimer);
    }
    if (targetLanguage === "es") {
      syncLanguagePreference("es");
      hideTranslationFeedback();
      return;
    }
    if (announce) {
      showTranslationFeedback(`Aplicando traduccion a ${LANGUAGE_LABELS[targetLanguage] || targetLanguage}...`);
    }

    let attempts = 0;
    const tick = () => {
      attempts += 1;
      const combo = document.querySelector(".goog-te-combo");
      if (combo) {
        combo.value = targetLanguage;
        combo.dispatchEvent(new Event("change"));
        syncLanguagePreference(targetLanguage);
        if (attempts < 4) {
          state.translationTimer = window.setTimeout(tick, 900);
        } else {
          hideTranslationFeedback();
          state.translationTimer = null;
        }
        return;
      }

      if (attempts < 20) {
        state.translationTimer = window.setTimeout(tick, 300);
      } else {
        hideTranslationFeedback();
        state.translationTimer = null;
      }
    };

    state.translationTimer = window.setTimeout(tick, 250);
  }

  function showTranslationFeedback(message) {
    dom.translateFeedback.hidden = false;
    dom.translateFeedbackText.textContent = message;
  }

  function normalizeLanguage(language) {
    return Object.prototype.hasOwnProperty.call(LANGUAGE_LABELS, language) ? language : "es";
  }

  function syncLanguagePreference(language) {
    const nextLanguage = normalizeLanguage(language);
    window.localStorage.setItem(STORAGE_KEYS.language, nextLanguage);
    if (dom.languageSelect) {
      dom.languageSelect.value = nextLanguage;
    }
    return nextLanguage;
  }

  function getPreferredLanguage() {
    const comboLanguage = document.querySelector(".goog-te-combo")?.value;
    if (comboLanguage) {
      return normalizeLanguage(comboLanguage);
    }

    const cookieLanguage = readGoogleTranslateCookieLanguage();
    if (cookieLanguage) {
      return normalizeLanguage(cookieLanguage);
    }

    return normalizeLanguage(window.localStorage.getItem(STORAGE_KEYS.language) || "es");
  }

  function readGoogleTranslateCookieLanguage() {
    const cookie = document.cookie
      .split(";")
      .map((chunk) => chunk.trim())
      .find((chunk) => chunk.startsWith("googtrans="));

    if (!cookie) {
      return "";
    }

    const value = decodeURIComponent(cookie.slice("googtrans=".length));
    const parts = value.split("/").filter(Boolean);
    return parts.length ? parts[parts.length - 1] : "";
  }

  function hideTranslationFeedback() {
    dom.translateFeedback.hidden = true;
  }

  function setGoogleTranslateCookie(language) {
    const value = `/es/${language}`;
    document.cookie = `googtrans=${value};path=/`;
    document.cookie = `googtrans=${value};path=/;domain=${window.location.hostname}`;
    document.cookie = `googtrans=${value};path=/;domain=.${window.location.hostname}`;
  }

  function clearGoogleTranslateCookies() {
    const expired = "Thu, 01 Jan 1970 00:00:00 GMT";
    document.cookie = `googtrans=;expires=${expired};path=/`;
    document.cookie = `googtrans=;expires=${expired};path=/;domain=${window.location.hostname}`;
    document.cookie = `googtrans=;expires=${expired};path=/;domain=.${window.location.hostname}`;
  }

  function setupTranslationChromeObserver() {
    const observer = new MutationObserver(() => {
      document.body.style.top = "0px";
      document
        .querySelectorAll(
          [
            "iframe.goog-te-banner-frame",
            ".goog-te-balloon-frame",
            "#goog-gt-tt",
            "#goog-gt-vt",
            ".VIpgJd-yAWNEb-hvhgNd",
            ".VIpgJd-ZVi9od-ORHb-OEVmcd",
            ".VIpgJd-ZVi9od-xl07Ob-OEVmcd"
          ].join(", ")
        )
        .forEach((node) => {
          node.style.display = "none";
          node.style.visibility = "hidden";
          node.setAttribute("aria-hidden", "true");
        });
    });
    observer.observe(document.body, { childList: true, subtree: true });
  }

  function postRender() {
    wireActivityEvents();
    typesetMath(dom.app);
    scheduleTranslationRefresh(getPreferredLanguage(), false);
  }

  function typesetMath(target) {
    if (!target || !window.MathJax || !window.MathJax.typesetPromise) {
      return;
    }
    window.MathJax.typesetPromise([target]).catch(() => undefined);
  }

  function updateNumberChallengeFeedback() {
    const feedback = document.getElementById("numberChallengeFeedback");
    if (!feedback) {
      return;
    }
    feedback.removeAttribute("data-state");
    feedback.innerHTML = `
      <strong>Pregunta lista</strong>
      <p>Elige el conjunto mas pequeno al que pertenece el numero.</p>
    `;
  }

  function updateTrigLab() {
    const slider = document.getElementById("trigSlider");
    if (!slider) {
      return;
    }
    const angle = Number(slider.value);
    state.customLabs.trigAngle = angle;
    const radians = (angle * Math.PI) / 180;
    const x = Math.cos(radians);
    const y = Math.sin(radians);
    const tangent = Math.abs(Math.cos(radians)) < 1e-6 ? "indefinida" : formatDecimal(Math.tan(radians));
    const success = angle === 135;

    document.getElementById("trigAngleLabel").textContent = `${angle}\u00b0`;
    document.getElementById("trigRadianLabel").innerHTML = formatRadian(angle);
    document.getElementById("trigFeedback").innerHTML = `
      <p><strong>Coordenadas:</strong> \\((${formatDecimal(x)}, ${formatDecimal(y)})\\)</p>
      <p><strong>\\(\\sin\\theta\\):</strong> ${formatDecimal(y)} - <strong>\\(\\cos\\theta\\):</strong> ${formatDecimal(x)}</p>
      <p><strong>\\(\\tan\\theta\\):</strong> ${tangent}</p>
      <div class="quiz-feedback" data-state="${success ? "correct" : "wrong"}">
        <strong>${success ? "Objetivo conseguido" : "Sigue ajustando el angulo"}</strong>
        <p>${
          success
            ? "Has llegado a \\(135^\\circ\\): seno positivo, coseno negativo y tangente negativa en el segundo cuadrante."
            : "Busca un angulo del segundo cuadrante que deje una referencia exacta y utilice la diagonal del cuadrado."
        }</p>
      </div>
    `;
    document.getElementById("trigDiagram").innerHTML = buildTrigSvg(x, y, angle);
    if (success) {
      unlockCustomActivity("ACT-C05-01");
    }
    typesetMath(document.getElementById("trigFeedback"));
    typesetMath(document.getElementById("trigRadianLabel"));
  }

  function updateVectorLab() {
    const u = {
      x: Number(document.getElementById("ux").value),
      y: Number(document.getElementById("uy").value)
    };
    const v = {
      x: Number(document.getElementById("vx").value),
      y: Number(document.getElementById("vy").value)
    };
    state.customLabs.vector = { ux: u.x, uy: u.y, vx: v.x, vy: v.y };

    const sum = { x: u.x + v.x, y: u.y + v.y };
    const dot = u.x * v.x + u.y * v.y;
    const normU = Math.hypot(u.x, u.y);
    const normV = Math.hypot(v.x, v.y);
    const cosine = normU && normV ? clamp(dot / (normU * normV), -1, 1) : Number.NaN;
    const angle = Number.isFinite(cosine) ? formatDecimal((Math.acos(cosine) * 180) / Math.PI) : "no definido";
    const success = dot === 0 && normU > 0 && normV > 0;

    document.getElementById("vectorDiagram").innerHTML = buildVectorSvg(u, v, sum);
    document.getElementById("vectorFeedback").innerHTML = `
      <p><strong>Suma:</strong> \\((${sum.x}, ${sum.y})\\)</p>
      <p><strong>Producto escalar:</strong> \\(${dot}\\)</p>
      <p><strong>Modulos:</strong> \\(\\|u\\|=${formatDecimal(normU)}\\), \\(\\|v\\|=${formatDecimal(normV)}\\)</p>
      <p><strong>Angulo entre vectores:</strong> ${angle === "no definido" ? angle : `\\(${angle}^\\circ\\)`}</p>
      <div class="quiz-feedback" data-state="${success ? "correct" : "wrong"}">
        <strong>${success ? "Perpendicularidad conseguida" : "Todavia no son perpendiculares"}</strong>
        <p>${
          success
            ? "Como el producto escalar vale cero, has construido dos vectores perpendiculares."
            : "Modifica las coordenadas hasta que el producto escalar se anule."
        }</p>
      </div>
    `;
    if (success) {
      unlockCustomActivity("ACT-C06-01");
    }
    typesetMath(document.getElementById("vectorFeedback"));
  }

  function syncFunctionControls() {
    const selected = getSelectedFunction();
    const input = document.getElementById("functionPoint");
    if (!input) {
      return;
    }
    input.min = String(selected.min);
    input.max = String(selected.max);
    input.step = String(selected.step);
    if (Number(input.value) < selected.min || Number(input.value) > selected.max) {
      input.value = String(selected.min);
      state.customLabs.functionPoint = selected.min;
    }
    updateFunctionLab();
  }

  function updateFunctionLab() {
    const selected = getSelectedFunction();
    const point = Number(document.getElementById("functionPoint").value);
    state.customLabs.functionId = selected.id;
    state.customLabs.functionPoint = point;

    const h = 0.0005;
    const f0 = selected.fn(point);
    const left = selected.fn(point - 0.25);
    const right = selected.fn(point + 0.25);
    const derivative =
      Number.isFinite(selected.fn(point + h)) && Number.isFinite(selected.fn(point - h))
        ? (selected.fn(point + h) - selected.fn(point - h)) / (2 * h)
        : Number.NaN;
    const tangent =
      Number.isFinite(f0) && Number.isFinite(derivative)
        ? { slope: derivative, intercept: f0 - derivative * point }
        : null;
    const success = selected.id === "poly" && Math.abs(point - 1) < 0.001 && Math.abs(derivative) < 0.05;

    document.getElementById("functionDiagram").innerHTML = buildFunctionSvg(selected, tangent, point);
    document.getElementById("functionFeedback").innerHTML = `
      <p><strong>\\(f(${formatDecimal(point)})\\):</strong> ${Number.isFinite(f0) ? `\\(${formatDecimal(f0)}\\)` : "no definida"}</p>
      <p><strong>Aproximacion lateral:</strong> izquierda ${Number.isFinite(left) ? `\\(${formatDecimal(left)}\\)` : "no definida"} - derecha ${Number.isFinite(right) ? `\\(${formatDecimal(right)}\\)` : "no definida"}</p>
      <p><strong>Pendiente aproximada:</strong> ${Number.isFinite(derivative) ? `\\(${formatDecimal(derivative)}\\)` : "no disponible"}</p>
      <p><strong>Tangente local:</strong> ${
        tangent
          ? `\\(y=${formatSigned(tangent.slope)}x${formatIntercept(tangent.intercept)}\\)`
          : "No se puede construir en este punto."
      }</p>
      <div class="quiz-feedback" data-state="${success ? "correct" : "wrong"}">
        <strong>${success ? "Has encontrado la tangente horizontal" : "Sigue buscando el vertice"}</strong>
        <p>${
          success
            ? "En la parabola, el vertice aparece en \\(x=1\\) y la derivada vale \\(0\\)."
            : "Selecciona la parabola y mueve el punto hasta donde la pendiente se anula."
        }</p>
      </div>
    `;
    if (success) {
      unlockCustomActivity("ACT-C09-01");
    }
    typesetMath(document.getElementById("functionFeedback"));
  }

  function getSelectedFunction() {
    const id = document.getElementById("functionSelect").value;
    return FUNCTION_LIBRARY.find((entry) => entry.id === id) || FUNCTION_LIBRARY[0];
  }

  function getPrimaryBlock(section, key) {
    return section[key] && section[key].html ? section[key] : null;
  }

  function getChapter(chapterId) {
    return content.chapters.find((chapter) => chapter.id === chapterId);
  }

  function getQuestion(questionId) {
    return questionBank.find((question) => question.id === questionId);
  }

  function getActivity(activityId) {
    return activityBank.find((activity) => activity.id === activityId);
  }

  function getActivitiesForChapter(chapterId) {
    return activityBank.filter((activity) => activity.chapterId === chapterId);
  }

  function getActivitiesForSection(chapterId, sectionId) {
    return activityBank.filter((activity) => activity.chapterId === chapterId && activity.sectionId === sectionId);
  }

  function getSectionTitle(sectionId) {
    for (const chapter of content.chapters) {
      const match = chapter.sections.find((section) => section.id === sectionId);
      if (match) {
        return match.title;
      }
    }
    return sectionId;
  }

  function buildQuestionBank(baseQuestions, activities) {
    const extras = activities
      .filter((activity) => activity.includeInQuiz && activity.type === "mcq")
      .map((activity) => ({
        id: `AQ-${activity.id}`,
        chapterId: activity.chapterId,
        difficulty: activity.difficulty || "media",
        prompt: activity.prompt,
        options: activity.options,
        correctIndex: activity.correctIndex,
        explanation: activity.explanation
      }));

    return [...baseQuestions, ...extras];
  }

  function buildFlashcardBank(bookContent) {
    const cards = [];
    bookContent.chapters.forEach((chapter) => {
      chapter.sections.forEach((section) => {
        if (section.theory && section.theory.html) {
          cards.push({
            id: `FC-${section.id}-concepto`,
            chapterId: chapter.id,
            sectionId: section.id,
            sectionTitle: section.title,
            type: "concepto",
            front: `Cual es la idea clave de ${section.title}?`,
            backHtml: section.theory.html
          });
        }
        if (section.method && section.method.html) {
          cards.push({
            id: `FC-${section.id}-procedimiento`,
            chapterId: chapter.id,
            sectionId: section.id,
            sectionTitle: section.title,
            type: "procedimiento",
            front: `Que pasos deberias seguir en ${section.title}?`,
            backHtml: section.method.html
          });
        }
        if (section.commonError && section.commonError.html) {
          cards.push({
            id: `FC-${section.id}-estrategia`,
            chapterId: chapter.id,
            sectionId: section.id,
            sectionTitle: section.title,
            type: "estrategia",
            front: `Que error frecuente debes evitar en ${section.title}?`,
            backHtml: section.commonError.html
          });
        }
      });
    });
    return cards;
  }

  function checkNumericActivity(activity, value) {
    const normalized = value.trim().replace(",", ".");
    if (!normalized) {
      return false;
    }
    if (typeof activity.tolerance === "number" && activity.answers.length === 1 && isFinite(Number(activity.answers[0]))) {
      return Math.abs(Number(normalized) - Number(activity.answers[0])) <= activity.tolerance;
    }
    return activity.answers.some((answer) => normalizeTextAnswer(answer) === normalizeTextAnswer(normalized));
  }

  function normalizeTextAnswer(value) {
    return String(value)
      .toLowerCase()
      .replace(/\s+/g, "")
      .replace(/,/g, ".");
  }

  function rerenderPreservingScroll() {
    const scrollY = window.scrollY;
    renderRoute();
    window.scrollTo({ top: scrollY });
  }

  function excerptFromHtml(html, maxLength) {
    const text = stripHtml(html);
    if (text.length <= maxLength) {
      return text;
    }
    return `${text.slice(0, maxLength).trim()}...`;
  }

  function stripHtml(html) {
    return String(html || "")
      .replace(/<[^>]+>/g, " ")
      .replace(/\s+/g, " ")
      .trim();
  }

  function statusLabel(status) {
    if (status === "new") {
      return "Nueva";
    }
    if (status === "review") {
      return "Por aprender";
    }
    if (status === "mastered") {
      return "Dominada";
    }
    return "En progreso";
  }

  function statusClass(status) {
    if (status === "mastered") {
      return "success";
    }
    if (status === "review") {
      return "warning";
    }
    if (status === "new") {
      return "cool";
    }
    return "progress";
  }

  function shuffle(items) {
    const cloned = [...items];
    for (let index = cloned.length - 1; index > 0; index -= 1) {
      const swapIndex = Math.floor(Math.random() * (index + 1));
      [cloned[index], cloned[swapIndex]] = [cloned[swapIndex], cloned[index]];
    }
    return cloned;
  }

  function clamp(value, min, max) {
    return Math.min(Math.max(value, min), max);
  }

  function formatDecimal(value) {
    return Number(value).toFixed(2).replace(/\.00$/, "").replace(/(\.\d)0$/, "$1");
  }

  function formatSigned(value) {
    if (Math.abs(value) < 1e-9) {
      return "0";
    }
    if (Math.abs(value - 1) < 1e-9) {
      return "";
    }
    if (Math.abs(value + 1) < 1e-9) {
      return "-";
    }
    return formatDecimal(value);
  }

  function formatIntercept(value) {
    if (Math.abs(value) < 1e-9) {
      return "";
    }
    const rounded = formatDecimal(value);
    return value > 0 ? `+${rounded}` : rounded;
  }

  function formatRadian(angle) {
    if (angle === 0) {
      return "\\(0\\)";
    }
    if (angle === 180) {
      return "\\(\\pi\\)";
    }
    if (angle === 360) {
      return "\\(2\\pi\\)";
    }
    const numerator = angle;
    const denominator = 180;
    const gcd = greatestCommonDivisor(numerator, denominator);
    const n = numerator / gcd;
    const d = denominator / gcd;
    if (d === 1) {
      return `\\(${n}\\pi\\)`;
    }
    if (n === 1) {
      return `\\(\\frac{\\pi}{${d}}\\)`;
    }
    return `\\(\\frac{${n}\\pi}{${d}}\\)`;
  }

  function greatestCommonDivisor(a, b) {
    let x = Math.abs(a);
    let y = Math.abs(b);
    while (y) {
      [x, y] = [y, x % y];
    }
    return x || 1;
  }

  function buildTrigSvg(x, y, angle) {
    const size = 240;
    const center = size / 2;
    const radius = 82;
    const px = center + radius * x;
    const py = center - radius * y;

    return `
      <svg viewBox="0 0 ${size} ${size}" aria-label="Circulo trigonometrico">
        <circle cx="${center}" cy="${center}" r="${radius}" fill="none" stroke="currentColor" opacity="0.28" stroke-width="3"/>
        <line x1="${center}" y1="26" x2="${center}" y2="${size - 26}" stroke="currentColor" opacity="0.15"/>
        <line x1="26" y1="${center}" x2="${size - 26}" y2="${center}" stroke="currentColor" opacity="0.15"/>
        <line x1="${center}" y1="${center}" x2="${px}" y2="${py}" stroke="var(--accent)" stroke-width="4" stroke-linecap="round"/>
        <line x1="${px}" y1="${py}" x2="${px}" y2="${center}" stroke="var(--accent-alt)" stroke-dasharray="6 4"/>
        <circle cx="${px}" cy="${py}" r="6" fill="var(--accent-alt)"/>
        <text x="${center + 10}" y="${center - 12}" fill="currentColor" opacity="0.7">${angle}\u00b0</text>
      </svg>
    `;
  }

  function buildVectorSvg(u, v, sum) {
    const size = 260;
    const center = size / 2;
    const scale = 18;
    const toX = (value) => center + value * scale;
    const toY = (value) => center - value * scale;

    const arrow = (vector, color) => `
      <line x1="${center}" y1="${center}" x2="${toX(vector.x)}" y2="${toY(vector.y)}" stroke="${color}" stroke-width="4" stroke-linecap="round"/>
      <circle cx="${toX(vector.x)}" cy="${toY(vector.y)}" r="5" fill="${color}"/>
    `;

    return `
      <svg viewBox="0 0 ${size} ${size}" aria-label="Plano vectorial">
        <line x1="20" y1="${center}" x2="${size - 20}" y2="${center}" stroke="currentColor" opacity="0.18"/>
        <line x1="${center}" y1="20" x2="${center}" y2="${size - 20}" stroke="currentColor" opacity="0.18"/>
        ${arrow(u, "var(--accent)")}
        ${arrow(v, "var(--accent-alt)")}
        ${arrow(sum, "currentColor")}
      </svg>
    `;
  }

  function buildFunctionSvg(config, tangent, point) {
    const width = 420;
    const height = 260;
    const padding = 26;
    const [xmin, xmax] = config.domain;
    const samples = [];
    let ymin = Infinity;
    let ymax = -Infinity;

    for (let x = xmin; x <= xmax; x += (xmax - xmin) / 120) {
      const y = config.fn(x);
      if (!Number.isFinite(y) || Math.abs(y) > 60) {
        continue;
      }
      ymin = Math.min(ymin, y);
      ymax = Math.max(ymax, y);
      samples.push({ x, y });
    }

    if (!samples.length) {
      return "";
    }

    const margin = Math.max(1, (ymax - ymin) * 0.12);
    ymin -= margin;
    ymax += margin;

    const scaleX = (x) => padding + ((x - xmin) / (xmax - xmin)) * (width - padding * 2);
    const scaleY = (y) => height - padding - ((y - ymin) / (ymax - ymin)) * (height - padding * 2);

    const path = samples.map((sample, index) => `${index === 0 ? "M" : "L"}${scaleX(sample.x)} ${scaleY(sample.y)}`).join(" ");
    const tangentPath =
      tangent
        ? (() => {
            const x1 = xmin;
            const x2 = xmax;
            const y1 = tangent.slope * x1 + tangent.intercept;
            const y2 = tangent.slope * x2 + tangent.intercept;
            return `M${scaleX(x1)} ${scaleY(y1)} L${scaleX(x2)} ${scaleY(y2)}`;
          })()
        : "";
    const pointY = config.fn(point);

    return `
      <svg viewBox="0 0 ${width} ${height}" aria-label="Grafica de funcion">
        <rect x="0" y="0" width="${width}" height="${height}" fill="transparent"/>
        <line x1="${scaleX(0)}" y1="${padding}" x2="${scaleX(0)}" y2="${height - padding}" stroke="currentColor" opacity="0.14"/>
        <line x1="${padding}" y1="${scaleY(0)}" x2="${width - padding}" y2="${scaleY(0)}" stroke="currentColor" opacity="0.14"/>
        <path d="${path}" fill="none" stroke="var(--accent)" stroke-width="4" stroke-linecap="round"/>
        ${tangentPath ? `<path d="${tangentPath}" fill="none" stroke="var(--accent-alt)" stroke-width="3" stroke-dasharray="8 5"/>` : ""}
        ${
          Number.isFinite(pointY)
            ? `<circle cx="${scaleX(point)}" cy="${scaleY(pointY)}" r="5" fill="var(--accent-alt)"/>`
            : ""
        }
      </svg>
    `;
  }

  function escapeAttribute(value) {
    return String(value).replace(/"/g, "&quot;");
  }
})();
