(function () {
  const content = window.MATHBOOK_CONTENT || { chapters: [], meta: {} };
  const supplements = window.MATHBOOK_SUPPLEMENTS || {
    meta: {},
    problems: { inventory: [], models: [] },
    exams: { inventory: [], miniModels: [], blockModels: [] }
  };
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
    problemChapter: "mate1-problem-chapter",
    examChapter: "mate1-exam-chapter",
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
    FAILED: "Falladas anteriormente",
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
    C10: { short: "Estadistica y probabilidad", block: "Sentido estocastico", accent: "cool" },
    R10: { short: "Repaso final", block: "Repaso y simulacros", accent: "cool" }
  };

  const UI_ICONS = {
    home: '<path d="M3 11.5 12 4l9 7.5"></path><path d="M5.5 10v10h13V10"></path><path d="M9.5 20v-6h5v6"></path>',
    target: '<circle cx="12" cy="12" r="8.5"></circle><circle cx="12" cy="12" r="4.5"></circle><circle cx="12" cy="12" r="1"></circle><path d="m15.5 8.5 4-4m0 0v3m0-3h-3"></path>',
    cards: '<rect x="4" y="5" width="13" height="16" rx="2"></rect><path d="m8 5 .7-1.2a2 2 0 0 1 2.7-.7l7.5 4.3a2 2 0 0 1 .7 2.7L17 14.6"></path><path d="M8 10h5m-5 4h5"></path>',
    flask: '<path d="M9 3h6m-5 0v5l-5.8 9.3A2.4 2.4 0 0 0 6.2 21h11.6a2.4 2.4 0 0 0 2-3.7L14 8V3"></path><path d="M7.5 15h9"></path>',
    puzzle: '<path d="M8.5 3H4a1 1 0 0 0-1 1v4.5a2.5 2.5 0 1 1 0 5V20a1 1 0 0 0 1 1h4.5a2.5 2.5 0 1 1 5 0H20a1 1 0 0 0 1-1v-6.5a2.5 2.5 0 1 0 0-5V4a1 1 0 0 0-1-1h-6.5a2.5 2.5 0 1 0-5 0Z"></path>',
    clipboard: '<rect x="5" y="4" width="14" height="17" rx="2"></rect><path d="M9 4.5V3h6v1.5M8.5 10h7m-7 4h7m-7 4H13"></path>',
    book: '<path d="M3.5 5.5A3.5 3.5 0 0 1 7 3h4v17H7a3.5 3.5 0 0 0-3.5 1V5.5Z"></path><path d="M20.5 5.5A3.5 3.5 0 0 0 17 3h-4v17h4a3.5 3.5 0 0 1 3.5 1V5.5Z"></path>',
    sparkles: '<path d="m12 3 1.2 3.8L17 8l-3.8 1.2L12 13l-1.2-3.8L7 8l3.8-1.2L12 3Z"></path><path d="m5 14 .8 2.2L8 17l-2.2.8L5 20l-.8-2.2L2 17l2.2-.8L5 14Zm14-2 .7 1.8 1.8.7-1.8.7L19 17l-.7-1.8-1.8-.7 1.8-.7L19 12Z"></path>',
    route: '<circle cx="6" cy="18" r="2"></circle><circle cx="18" cy="6" r="2"></circle><path d="M8 18h3a3 3 0 0 0 3-3v-6a3 3 0 0 1 3-3h-1"></path><path d="m16 3 3 3-3 3"></path>',
    chart: '<path d="M4 20V10m5 10V5m5 15v-7m5 7V8"></path><path d="M2.5 20.5h19"></path>',
    brain: '<path d="M9.5 5A3 3 0 0 0 4 6.5a3 3 0 0 0-1 5.7A3.5 3.5 0 0 0 7 18a3 3 0 0 0 5 1V5.5A3 3 0 0 0 9.5 5Z"></path><path d="M14.5 5A3 3 0 0 1 20 6.5a3 3 0 0 1 1 5.7 3.5 3.5 0 0 1-4 5.8 3 3 0 0 1-5 1V5.5A3 3 0 0 1 14.5 5Z"></path><path d="M7 9h2m8 0h-2M7.5 14H10m6.5 0H14"></path>',
    grid: '<rect x="3" y="3" width="7" height="7" rx="1"></rect><rect x="14" y="3" width="7" height="7" rx="1"></rect><rect x="3" y="14" width="7" height="7" rx="1"></rect><rect x="14" y="14" width="7" height="7" rx="1"></rect>',
    trophy: '<path d="M8 4h8v4a4 4 0 0 1-8 0V4Z"></path><path d="M8 6H4v1a4 4 0 0 0 5 4m7-5h4v1a4 4 0 0 1-5 4m-3 1v5m-4 3h8m-6-3h4"></path>',
    clock: '<circle cx="12" cy="12" r="9"></circle><path d="M12 7v5l3 2"></path>',
    alert: '<path d="M10.3 4.2 2.7 18a2 2 0 0 0 1.8 3h15a2 2 0 0 0 1.8-3L13.7 4.2a2 2 0 0 0-3.4 0Z"></path><path d="M12 9v4m0 4h.01"></path>',
    check: '<circle cx="12" cy="12" r="9"></circle><path d="m8 12 2.5 2.5L16.5 8"></path>',
    search: '<circle cx="10.5" cy="10.5" r="6.5"></circle><path d="m15.5 15.5 5 5"></path>',
    close: '<path d="m6 6 12 12M18 6 6 18"></path>',
    moon: '<path d="M20.5 14.5A8 8 0 0 1 9.5 3.5 8.5 8.5 0 1 0 20.5 14.5Z"></path>',
    sun: '<circle cx="12" cy="12" r="4"></circle><path d="M12 2v2m0 16v2M4.9 4.9l1.4 1.4m11.4 11.4 1.4 1.4M2 12h2m16 0h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"></path>',
    download: '<path d="M12 3v12m-4-4 4 4 4-4"></path><path d="M4 18v3h16v-3"></path>',
    upload: '<path d="M12 16V4m-4 4 4-4 4 4"></path><path d="M4 18v3h16v-3"></path>',
    refresh: '<path d="M20 7v5h-5"></path><path d="M19 12a7 7 0 1 0-2 5"></path>',
    left: '<path d="m14.5 5-7 7 7 7"></path>',
    right: '<path d="m9.5 5 7 7-7 7"></path>',
    shuffle: '<path d="M4 7h3c5 0 5 10 10 10h3"></path><path d="m17 14 3 3-3 3M4 17h3c1.4 0 2.4-.8 3.3-2m3.4-6C14.6 7.8 15.6 7 17 7h3m-3-3 3 3-3 3"></path>',
    rotate: '<path d="M20 7v5h-5"></path><path d="M19 12a7 7 0 1 0-2.1 5"></path><path d="m11 9 3 3-3 3"></path>',
    lightbulb: '<path d="M9 18h6m-5 3h4"></path><path d="M8.2 15.5A7 7 0 1 1 15.8 15.5 4 4 0 0 0 15 18H9a4 4 0 0 0-.8-2.5Z"></path>',
    calculator: '<rect x="5" y="2.5" width="14" height="19" rx="2"></rect><path d="M8 6h8v3H8zm0 7h.01m4 0h.01m4 0h.01M8 17h.01m4 0h.01m4 0h.01"></path>',
    sigma: '<path d="M18 4H6l6 8-6 8h12"></path>',
    polynomial: '<path d="M3 18c3-10 5-10 8 0s5 10 10-6"></path><circle cx="3" cy="18" r="1"></circle><circle cx="11" cy="18" r="1"></circle><circle cx="21" cy="12" r="1"></circle>',
    equation: '<path d="M4 8h16M4 16h16"></path><circle cx="8" cy="4" r="1"></circle><circle cx="16" cy="20" r="1"></circle>',
    inequality: '<path d="m9 6-6 6 6 6m6-12 6 6-6 6"></path>',
    triangle: '<path d="m12 3 9 17H3L12 3Z"></path><path d="M12 8v5m0 3h.01"></path>',
    vector: '<path d="M4 19 19 4m-6 0h6v6"></path><path d="M4 5v14h14"></path>',
    compass: '<circle cx="12" cy="12" r="9"></circle><path d="m15.5 8.5-2 5-5 2 2-5 5-2Z"></path>',
    infinity: '<path d="M8.5 9C5 5.5 2.5 8 2.5 12s2.5 6.5 6 3l7-6c3.5-3.5 6 0 6 3s-2.5 6.5-6 3l-7-6Z"></path>',
    derivative: '<path d="M3 19h18M5 21V3"></path><path d="M6 17c3-1 4-8 8-9 2.5-.7 4.5 1 5 3"></path><path d="m9 14 9-7"></path>',
    statistics: '<path d="M12 3v9h9A9 9 0 1 1 12 3Z"></path><path d="M15 3.5A8.5 8.5 0 0 1 20.5 9H15V3.5Z"></path>',
    filter: '<path d="M3 5h18l-7 8v6l-4 2v-8L3 5Z"></path>',
    eye: '<path d="M2.5 12s3.5-6 9.5-6 9.5 6 9.5 6-3.5 6-9.5 6-9.5-6-9.5-6Z"></path><circle cx="12" cy="12" r="2.5"></circle>',
    play: '<circle cx="12" cy="12" r="9"></circle><path d="m10 8 6 4-6 4V8Z"></path>',
    flag: '<path d="M5 21V4m0 1h11l-2 3 2 3H5"></path>',
    layers: '<path d="m12 3 9 5-9 5-9-5 9-5Z"></path><path d="m3 12 9 5 9-5m-18 4 9 5 9-5"></path>'
  };

  const CHAPTER_ICONS = {
    C01: "sigma",
    C02: "polynomial",
    C03: "equation",
    C04: "inequality",
    C05: "triangle",
    C06: "vector",
    C07: "compass",
    C08: "infinity",
    C09: "derivative",
    C10: "statistics",
    R10: "trophy"
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
    problemChapter: window.localStorage.getItem(STORAGE_KEYS.problemChapter) || "ALL",
    examChapter: window.localStorage.getItem(STORAGE_KEYS.examChapter) || "ALL",
    examCount: Number(window.localStorage.getItem(STORAGE_KEYS.examCount) || "10"),
    examIds: [],
    examAnswers: {},
    examSubmitted: false,
    installPromptEvent: null,
    numberChallengeIndex: 0,
    practiceIndex: 0,
    flashcardIndex: 0,
    flashcardFlipped: false,
    flashcardSession: createFlashcardSession(),
    searchQuery: "",
    globalSearchQuery: "",
    questionOptionOrders: {},
    sequencePools: {},
    activityDrafts: {},
    revealedQuestions: new Set(),
    revealedActivities: new Set(),
    translationTimer: null,
    lastScrollTarget: "",
    customLabs: {
      trigAngle: 45,
      vector: { ux: 3, uy: 2, vx: -1, vy: 4 },
      functionId: "poly",
      functionPoint: 1,
      regressionOutlier: 13,
      probability: { trials: 0, heads: 0 }
    },
    hasRendered: false
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
    dom.globalSearchButton = document.getElementById("globalSearchButton");
    dom.globalSearchDialog = document.getElementById("globalSearchDialog");
    dom.globalSearchCloseButton = document.getElementById("globalSearchCloseButton");
    dom.globalSearchInput = document.getElementById("globalSearchInput");
    dom.globalSearchResults = document.getElementById("globalSearchResults");
    dom.themeToggle = document.getElementById("themeToggle");
    dom.installButton = document.getElementById("installButton");
    dom.languageSelect = document.getElementById("languageSelect");
    dom.mobileMenuButton = document.getElementById("mobileMenuButton");
    dom.sidebarBackdrop = document.getElementById("sidebarBackdrop");
    dom.routeAnnouncer = document.getElementById("routeAnnouncer");
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
    dom.globalSearchButton.addEventListener("click", openGlobalSearch);
    dom.globalSearchCloseButton.addEventListener("click", closeGlobalSearch);
    dom.globalSearchInput.addEventListener("input", (event) => {
      state.globalSearchQuery = event.target.value.trim();
      renderGlobalSearchResults(state.globalSearchQuery);
    });
    dom.globalSearchInput.addEventListener("keydown", (event) => {
      if (!["Enter", "ArrowDown"].includes(event.key)) {
        return;
      }
      const firstResult = dom.globalSearchResults.querySelector(".global-search-result");
      if (!firstResult) {
        return;
      }
      event.preventDefault();
      if (event.key === "Enter") {
        firstResult.click();
      } else {
        firstResult.focus();
      }
    });
    dom.globalSearchResults.addEventListener("click", (event) => {
      const suggestion = event.target.closest("[data-search-suggestion]");
      if (suggestion) {
        const query = suggestion.dataset.searchSuggestion;
        state.globalSearchQuery = query;
        dom.globalSearchInput.value = query;
        renderGlobalSearchResults(query);
        dom.globalSearchInput.focus();
        return;
      }
      if (event.target.closest("a")) {
        closeGlobalSearch();
      }
    });
    dom.globalSearchDialog.addEventListener("click", (event) => {
      if (event.target === dom.globalSearchDialog) {
        closeGlobalSearch();
      }
    });
    dom.mobileMenuButton.addEventListener("click", () => setMobileMenuOpen(!dom.sidebar.classList.contains("is-open")));
    dom.sidebarBackdrop.addEventListener("click", () => setMobileMenuOpen(false));
    document.addEventListener("keydown", (event) => {
      if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        openGlobalSearch();
        return;
      }
      if (event.key === "Escape" && dom.sidebar.classList.contains("is-open")) {
        setMobileMenuOpen(false, true);
      }
    });
    dom.languageSelect.addEventListener("change", handleLanguageChange);
    dom.installButton.addEventListener("click", installPwa);
  }

  function openGlobalSearch() {
    if (!dom.globalSearchDialog.open) {
      dom.globalSearchDialog.showModal();
    }
    if (!state.globalSearchQuery && dom.searchInput.value.trim()) {
      state.globalSearchQuery = dom.searchInput.value.trim();
    }
    dom.globalSearchInput.value = state.globalSearchQuery;
    renderGlobalSearchResults(state.globalSearchQuery);
    window.requestAnimationFrame(() => {
      dom.globalSearchInput.focus();
      dom.globalSearchInput.select();
    });
  }

  function closeGlobalSearch() {
    if (dom.globalSearchDialog.open) {
      dom.globalSearchDialog.close();
    }
  }

  function renderGlobalSearchResults(query) {
    const normalizedQuery = normalizeSearchText(query).trim();
    if (!normalizedQuery) {
      const suggestions = ["logaritmos", "regla de Ruffini", "teorema de Bayes", "recta tangente", "vectores"];
      dom.globalSearchResults.innerHTML = `
        <section class="global-search-welcome">
          <span class="global-search-welcome__visual" aria-hidden="true">${icon("sparkles")}</span>
          <div>
            <h3>¿Por dónde empezamos?</h3>
            <p>Escribe una idea matemática o prueba una de estas búsquedas.</p>
          </div>
        </section>
        <div class="global-search-suggestions" aria-label="Búsquedas sugeridas">
          ${suggestions
            .map(
              (suggestion) =>
                `<button class="chip-button" type="button" data-search-suggestion="${suggestion}">${icon(inferIconFromLabel(suggestion))}${suggestion}</button>`
            )
            .join("")}
        </div>
      `;
      scheduleTranslationRefresh(getPreferredLanguage(), false);
      return;
    }

    const results = buildSearchResults(normalizedQuery);
    dom.globalSearchResults.innerHTML = results.length
      ? `
          <div class="global-search-results__head">
            <p><strong>${results.length}</strong> resultado${results.length === 1 ? "" : "s"} conectado${results.length === 1 ? "" : "s"} con tu búsqueda</p>
            <span class="badge-soft">${results.length}</span>
          </div>
          <div class="global-search-result-list">
            ${results
              .map(
                (result) => `
                  <a class="global-search-result" href="${result.href}">
                    <span class="global-search-result__icon" aria-hidden="true">${icon(inferIconFromLabel(`${result.kind} ${result.title}`))}</span>
                    <span class="global-search-result__copy">
                      <span><strong>${result.title}</strong><small>${result.code}</small></span>
                      <small>${result.kind} · ${result.description}</small>
                    </span>
                    <span class="global-search-result__arrow" aria-hidden="true">${icon("right")}</span>
                  </a>
                `
              )
              .join("")}
          </div>
        `
      : `
          <section class="global-search-empty" role="status">
            <span aria-hidden="true">${icon("search")}</span>
            <h3>No encontramos esa expresión</h3>
            <p>Prueba con una palabra más general, el nombre de un tema o un código como C05.</p>
          </section>
        `;
    scheduleTranslationRefresh(getPreferredLanguage(), false);
  }

  function renderRoute() {
    const route = parseRoute();
    syncRouteState(route);
    updateNav(route);
    renderSidebar(route);

    if (route.name === "chapter") {
      renderChapter(route.chapterId, route.sectionId);
    } else if (route.name === "practice") {
      renderPractice();
    } else if (route.name === "flashcards") {
      renderFlashcards();
    } else if (route.name === "labs") {
      renderLabs();
    } else if (route.name === "problems") {
      renderProblems();
    } else if (route.name === "exams") {
      renderExams();
    } else {
      renderHome();
    }

    updateProgressUi();
    setMobileMenuOpen(false);
    postRender(route);
    announceRouteChange();
  }

  function setMobileMenuOpen(open, restoreFocus = false) {
    dom.sidebar.classList.toggle("is-open", open);
    dom.mobileMenuButton.setAttribute("aria-expanded", String(open));
    dom.mobileMenuButton.setAttribute("aria-label", open ? "Cerrar navegación" : "Abrir navegación");
    dom.sidebarBackdrop.hidden = !open;
    document.body.classList.toggle("has-open-menu", open);
    if (restoreFocus) {
      dom.mobileMenuButton.focus();
    }
  }

  function announceRouteChange() {
    const heading = dom.app.querySelector("h1");
    if (!heading) {
      return;
    }
    document.title = `${heading.textContent.trim()} | Matemáticas I Interactivas`;
    dom.routeAnnouncer.textContent = `Página cargada: ${heading.textContent.trim()}`;
    if (state.hasRendered) {
      dom.app.focus({ preventScroll: true });
    }
    state.hasRendered = true;
  }

  function parseRoute() {
    const raw = window.location.hash.replace(/^#\/?/, "");
    if (!raw) {
      return { name: "home" };
    }

    const parts = raw.split("/").filter(Boolean);
    const root = parts[0];

    if (root === "capitulo") {
      return { name: "chapter", chapterId: parts[1] || "C01", sectionId: parts[2] || null };
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
    if (root === "problemas") {
      return { name: "problems", chapterId: parts[1] || null };
    }
    if (root === "examenes") {
      return { name: "exams", chapterId: parts[1] || null };
    }
    return { name: "home" };
  }

  function syncRouteState(route) {
    if (route.name === "practice" && route.chapterId) {
      state.practiceChapter = route.chapterId;
      window.localStorage.setItem(STORAGE_KEYS.practiceChapter, state.practiceChapter);
    }
    if (route.name === "flashcards" && route.chapterId) {
      if (state.flashcardChapter !== route.chapterId) {
        state.flashcardIndex = 0;
        state.flashcardFlipped = false;
        state.flashcardSession.lastResult = null;
      }
      state.flashcardChapter = route.chapterId;
      window.localStorage.setItem(STORAGE_KEYS.flashcardChapter, state.flashcardChapter);
    }
    if (route.name === "labs" && route.chapterId) {
      state.labsChapter = route.chapterId;
      window.localStorage.setItem(STORAGE_KEYS.labsChapter, state.labsChapter);
    }
    if (route.name === "problems" && route.chapterId) {
      state.problemChapter = route.chapterId;
      window.localStorage.setItem(STORAGE_KEYS.problemChapter, state.problemChapter);
    }
    if (route.name === "exams" && route.chapterId) {
      state.examChapter = route.chapterId;
      window.localStorage.setItem(STORAGE_KEYS.examChapter, state.examChapter);
    }
  }

  function updateNav(route) {
    document.querySelectorAll("[data-route-link]").forEach((link) => {
      link.classList.remove("is-active");
      link.removeAttribute("aria-current");
    });
    const routeName =
      route.name === "home"
        ? "inicio"
        : route.name === "practice"
          ? "practica"
          : route.name === "flashcards"
            ? "flashcards"
            : route.name === "labs"
              ? "laboratorios"
              : route.name === "problems"
                ? "problemas"
                : route.name === "exams"
                  ? "examenes"
              : "";
    if (!routeName) {
      return;
    }
    document.querySelectorAll(`[data-route-link="${routeName}"]`).forEach((link) => {
      link.classList.add("is-active");
      link.setAttribute("aria-current", "page");
    });
  }

  function icon(name, className = "") {
    const paths = UI_ICONS[name] || UI_ICONS.sparkles;
    return `<svg class="ui-icon notranslate ${className}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false" translate="no">${paths}</svg>`;
  }

  function iconTone(name) {
    if (["target", "check", "trophy", "chart"].includes(name)) {
      return "success";
    }
    if (["alert", "lightbulb", "triangle", "flag"].includes(name)) {
      return "warm";
    }
    if (["cards", "brain", "statistics", "infinity", "derivative"].includes(name)) {
      return "cool";
    }
    if (["puzzle", "flask", "polynomial", "vector", "compass"].includes(name)) {
      return "coral";
    }
    return "accent";
  }

  function inferIconFromLabel(value) {
    const label = normalizeSearchText(stripHtml(String(value || "")));
    const rules = [
      [/estadistic|probabilidad|datos bidimensionales/, "statistics"],
      [/derivad|pendiente|tangente/, "derivative"],
      [/limite|continuidad|asintota/, "infinity"],
      [/geometria analitica|lugar geometrico/, "compass"],
      [/vector/, "vector"],
      [/trigonom|triangulo/, "triangle"],
      [/inecuacion|desigualdad/, "inequality"],
      [/ecuacion|sistema/, "equation"],
      [/polinom|fraccion algebraica/, "polynomial"],
      [/numero real|numerico/, "sigma"],
      [/flashcard|tarjeta|mazo/, "cards"],
      [/laboratorio|actividad interactiva/, "flask"],
      [/problema|situacion/, "puzzle"],
      [/examen|evaluacion|simulacro/, "clipboard"],
      [/teoria|temario|panorama/, "book"],
      [/metodo|procedimiento|ruta|orden/, "route"],
      [/objetivo|practica|test|pregunta/, "target"],
      [/ejemplo|solucion|pista/, "lightbulb"],
      [/error|por aprender|repasar|fragil/, "alert"],
      [/dominad|respondid|correct/, "check"],
      [/progreso|seguimiento|consolidacion|nivel|cobertura/, "chart"],
      [/nueva|plataforma|inicio/, "sparkles"],
      [/filtro/, "filter"],
      [/reto|sintesis|desafio/, "trophy"],
      [/recurso|bloque|capitulo/, "grid"],
      [/prerrequisito|fundamento/, "layers"],
      [/formula|calculo|nucleo matematico/, "calculator"],
      [/ritmo|estado|pendiente/, "clock"]
    ];
    const match = rules.find(([pattern]) => pattern.test(label));
    return match ? match[1] : "sparkles";
  }

  function inferActionIcon(element) {
    if (element.dataset.icon) {
      return element.dataset.icon;
    }
    const href = element.getAttribute("href") || "";
    const routeIcons = [
      ["#/inicio", "home"],
      ["#/capitulo", "book"],
      ["#/practica", "target"],
      ["#/flashcards", "cards"],
      ["#/laboratorios", "flask"],
      ["#/problemas", "puzzle"],
      ["#/examenes", "clipboard"]
    ];
    const routeMatch = routeIcons.find(([prefix]) => href.startsWith(prefix));
    if (routeMatch) {
      return routeMatch[1];
    }
    const idIcons = {
      generateExamButton: "shuffle",
      submitExamButton: "check",
      exportProgressButton: "download",
      importProgressButton: "upload",
      resetProgressButton: "refresh",
      practicePrevButton: "left",
      practiceRandomButton: "shuffle",
      practiceNextButton: "right",
      flashcardPrevButton: "left",
      flashcardFlipButton: "rotate",
      flashcardNextButton: "right",
      flashcardShuffleButton: "shuffle",
      flashcardMasteredButton: "check",
      flashcardReviewButton: "clock",
      probabilityResetButton: "refresh",
      nextNumberChallenge: "shuffle"
    };
    if (idIcons[element.id]) {
      return idIcons[element.id];
    }
    const label = normalizeSearchText(element.textContent);
    if (/anterior|volver/.test(label)) return "left";
    if (/siguiente/.test(label)) return "right";
    if (/aleatori|otro reto|generar/.test(label)) return "shuffle";
    if (/voltear|anverso/.test(label)) return "rotate";
    if (/reiniciar/.test(label)) return "refresh";
    if (/exportar/.test(label)) return "download";
    if (/importar/.test(label)) return "upload";
    if (/comprobar|corregir|descubrir|recordaba/.test(label)) return "check";
    if (/ver respuesta|ver solucion|ver correccion|mostrar/.test(label)) return "eye";
    if (/lanzar|simular/.test(label)) return "play";
    return inferIconFromLabel(label);
  }

  function addElementIcon(element, name) {
    if (!element || !name) {
      return;
    }
    const directIcon = Array.from(element.children).find((child) => child.classList.contains("ui-icon"));
    if (directIcon) {
      return;
    }
    element.insertAdjacentHTML("afterbegin", icon(name));
    element.classList.add("has-ui-icon");
  }

  function replaceElementIcon(element, name) {
    if (!element) {
      return;
    }
    Array.from(element.children)
      .filter((child) => child.classList.contains("ui-icon"))
      .forEach((child) => child.remove());
    addElementIcon(element, name);
  }

  function decorateVisualLanguage(root = document, route = parseRoute()) {
    root
      .querySelectorAll(
        [
          "[data-icon]",
          ".hero__actions > a",
          ".hero__actions > button",
          ".section-pagination a",
          ".study-session__navigation button"
        ].join(", ")
      )
      .forEach((element) => addElementIcon(element, inferActionIcon(element)));

    root.querySelectorAll(".card-kicker").forEach((label) => {
      if (!label.closest(".summary-card")) {
        addElementIcon(label, inferIconFromLabel(label.textContent));
      }
    });
    root.querySelectorAll(".status-pill").forEach((pill) => addElementIcon(pill, inferIconFromLabel(pill.textContent)));
    root.querySelectorAll(".activity-card__head h3").forEach((heading) => addElementIcon(heading, "flask"));
    root.querySelectorAll(".section-card__head h3").forEach((heading) => addElementIcon(heading, inferIconFromLabel(heading.textContent)));
    root.querySelectorAll(".flashcard-stage__meta h2").forEach((heading) => addElementIcon(heading, "cards"));

    root
      .querySelectorAll(".summary-grid > .summary-card, .hero__grid > .summary-card")
      .forEach((card) => {
        if (card.querySelector(".feature-icon")) {
          return;
        }
        const headingText = card.querySelector("h3, h2")?.textContent || "";
        const chapterMatch = headingText.match(/\b(C\d{2}|R10)\b/);
        const name = card.dataset.visualIcon || (chapterMatch ? CHAPTER_ICONS[chapterMatch[1]] : "") || inferIconFromLabel(card.querySelector(".card-kicker")?.textContent || headingText);
        card.insertAdjacentHTML(
          "afterbegin",
          `<span class="feature-icon feature-icon--${iconTone(name)}" aria-hidden="true">${icon(name)}</span>`
        );
      });

    const hero = root.querySelector(".app-shell .hero") || (root.classList?.contains("hero") ? root : null);
    if (hero && !hero.querySelector(".hero-watermark")) {
      const routeIcons = {
        home: "sparkles",
        practice: "target",
        flashcards: "cards",
        labs: "flask",
        problems: "puzzle",
        exams: "clipboard"
      };
      const name = route.name === "chapter" ? CHAPTER_ICONS[route.chapterId] || "book" : routeIcons[route.name] || "sparkles";
      hero.insertAdjacentHTML("afterbegin", `<span class="hero-watermark" aria-hidden="true">${icon(name)}</span>`);
    }
  }

  function renderSidebar(route) {
    if (state.searchQuery) {
      const results = buildSearchResults(state.searchQuery);
      dom.chapterCountBadge.textContent = String(results.length);
      dom.chapterLinks.innerHTML = results.length
        ? results
            .map(
              (result) => `
                <a class="chapter-link search-result" href="${result.href}">
                  <span class="chapter-link__index">${icon(inferIconFromLabel(result.kind))}<small>${result.code}</small></span>
                  <span class="chapter-link__copy">
                    <strong>${result.title}</strong>
                    <small>${result.kind} - ${result.description}</small>
                  </span>
                </a>
              `
            )
            .join("")
        : `
            <div class="sidebar-search-empty" role="status">
              <strong>Sin resultados</strong>
              <small>Prueba con una idea matematica, un tema o un codigo de apartado.</small>
            </div>
          `;
      return;
    }

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
                  : route.name === "problems"
                    ? state.problemChapter === chapter.id
                    : route.name === "exams"
                      ? state.examChapter === chapter.id
                  : false;
        return `
          <a class="chapter-link ${isActive ? "is-active" : ""}" href="#/capitulo/${chapter.id}" ${isActive ? 'aria-current="page"' : ""}>
            <span class="chapter-link__index">${icon(CHAPTER_ICONS[chapter.id] || "book")}<small>${String(index + 1).padStart(2, "0")}</small></span>
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
    return content.chapters;
  }

  function buildSearchResults(query) {
    const needle = normalizeSearchText(query);
    const results = [];
    const seen = new Set();

    const addResult = (result, searchableValue) => {
      if (!normalizeSearchText(searchableValue).includes(needle)) {
        return;
      }
      const key = `${result.href}|${result.title}`;
      if (!seen.has(key)) {
        seen.add(key);
        results.push(result);
      }
    };

    content.chapters.forEach((chapter) => {
      addResult(
        {
          href: `#/capitulo/${chapter.id}`,
          code: chapter.id,
          title: chapter.title,
          kind: "Tema",
          description: `${chapter.sectionCount} apartados`
        },
        `${chapter.id} ${chapter.title}`
      );

      chapter.sections.forEach((section) => {
        addResult(
          {
            href: `#/capitulo/${chapter.id}/${section.id}`,
            code: section.id.replace(`${chapter.id}.`, ""),
            title: section.title,
            kind: "Teoria",
            description: `${chapter.id} - ${chapter.title}`
          },
          `${section.id} ${section.title} ${searchRecordText(section)}`
        );
      });
    });

    questionBank.forEach((question) => {
      addResult(
        {
          href: `#/practica/${question.chapterId}`,
          code: "TEST",
          title: excerptFromHtml(question.prompt, 120),
          kind: "Pregunta tipo test",
          description: `${question.sectionId || question.chapterId} - ${(getChapter(question.chapterId) || {}).title || question.chapterId}`
        },
        searchRecordText(question)
      );
    });

    flashcardBank.forEach((card) => {
      addResult(
        {
          href: `#/flashcards/${card.chapterId}`,
          code: "CARD",
          title: excerptFromHtml(card.front, 120),
          kind: "Flashcard",
          description: `${card.sectionId} - ${card.sectionTitle}`
        },
        searchRecordText(card)
      );
    });

    activityBank.forEach((activity) => {
      addResult(
        {
          href: `#/capitulo/${activity.chapterId}/${activity.sectionId}`,
          code: "LAB",
          title: activity.title,
          kind: "Actividad",
          description: `${activity.sectionId} - ${getSectionTitle(activity.sectionId)}`
        },
        searchRecordText(activity)
      );
    });

    supplements.problems.inventory.forEach((item) => {
      addResult(
        {
          href: `#/problemas/${item.chapterId}`,
          code: "IDEA",
          title: item.prompt,
          kind: "Idea de ampliacion",
          description: item.sectionTitle || item.chapterTitle
        },
        searchRecordText(item)
      );
    });

    supplements.problems.models.forEach((item) => {
      addResult(
        {
          href: `#/problemas/${item.chapterId}`,
          code: "MOD",
          title: item.title,
          kind: "Problema resuelto",
          description: (getChapter(item.chapterId) || {}).title || item.chapterId
        },
        searchRecordText(item)
      );
    });

    [...supplements.exams.inventory, ...supplements.exams.miniModels].forEach((item) => {
      addResult(
        {
          href: `#/examenes/${item.chapterId}`,
          code: "EX",
          title: item.title || item.prompt || `Examen ${item.chapterId}`,
          kind: "Examen",
          description: (getChapter(item.chapterId) || {}).title || item.chapterId
        },
        searchRecordText(item)
      );
    });

    return results.slice(0, 30);
  }

  function searchRecordText(value) {
    try {
      return stripHtml(JSON.stringify(value));
    } catch (error) {
      return String(value || "");
    }
  }

  function normalizeSearchText(value) {
    return String(value || "")
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase();
  }

  function renderHome() {
    const dominatedQuestions = questionBank.filter((question) => getQuestionStatus(question.id) === "mastered").length;
    const contextualProblemCount = supplements.meta.contextualInventoryCount || supplements.problems.inventory.length;
    const contextualModelCount = supplements.meta.contextualModelCount || supplements.problems.models.length;
    const examProposalCount = supplements.meta.examInventoryCount || supplements.exams.inventory.length;
    const examModelCount =
      (supplements.meta.examMiniModelCount || supplements.exams.miniModels.length) +
      (supplements.meta.examBlockModelCount || supplements.exams.blockModels.length);
    const cards = content.chapters
      .map((chapter) => {
        const meta = CHAPTER_META[chapter.id] || { block: "Bloque general", accent: "cool" };
        return `
          <article class="summary-card summary-card--${meta.accent}" data-visual-icon="${CHAPTER_ICONS[chapter.id] || "book"}">
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
              <a class="ghost-button" href="#/problemas">Ver problemas contextualizados</a>
              <a class="ghost-button" href="#/examenes">Abrir banco de examenes</a>
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
        <article class="summary-card">
          <p class="card-kicker">Problemas</p>
          <h2>${contextualModelCount} resueltos y ${contextualProblemCount} ideas</h2>
          <p>Los modelos estan verificados; las ideas se identifican como propuestas aun no cerradas.</p>
        </article>
        <article class="summary-card">
          <p class="card-kicker">Examenes</p>
          <h2>${examProposalCount} propuestas y ${examModelCount} modelos</h2>
          <p>Mini-examenes por seccion y examenes por bloques, todos resueltos y relacionados.</p>
        </article>
      </section>

      <section class="summary-grid">
        ${cards}
      </section>
    `;
  }

  function renderChapter(chapterId, sectionId = null) {
    const chapter = getChapter(chapterId);
    if (!chapter) {
      renderHome();
      return;
    }

    const chapterQuestions = questionBank.filter((question) => question.chapterId === chapter.id);
    const chapterActivities = activityBank.filter((activity) => activity.chapterId === chapter.id);
    const chapterFlashcards = flashcardBank.filter((card) => card.chapterId === chapter.id);
    const chapterProblems = getProblemInventoryForChapter(chapter.id);
    const chapterProblemModels = getProblemModelsForChapter(chapter.id);
    const chapterExamSeeds = getExamInventoryForChapter(chapter.id);
    const chapterExamModels = getExamMiniModelsForChapter(chapter.id);
    const chapterBlockExams = getExamBlockModelsForChapter(chapter.id);
    const dominatedQuestions = chapterQuestions.filter((question) => getQuestionStatus(question.id) === "mastered").length;
    const reviewQuestions = chapterQuestions.filter((question) => getQuestionStatus(question.id) === "review").length;
    const activeSectionIndex = Math.max(
      0,
      chapter.sections.findIndex((section) => section.id === sectionId)
    );
    const activeSection = chapter.sections[activeSectionIndex];
    const previousSection = chapter.sections[activeSectionIndex - 1] || null;
    const nextSection = chapter.sections[activeSectionIndex + 1] || null;

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
          <a class="ghost-button" href="#/problemas/${chapter.id}">Problemas del bloque</a>
          <a class="ghost-button" href="#/examenes/${chapter.id}">Examenes del bloque</a>
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
          <h2>${chapterActivities.length} actividades, ${chapterProblemModels.length} problemas resueltos y ${chapterExamSeeds.length} examenes</h2>
          <p>${chapterFlashcards.length} flashcards, ${chapterProblems.length} ideas de ampliacion y ${chapterExamModels.length + chapterBlockExams.length} modelos de evaluacion conectados con el tema.</p>
        </article>
      </section>

      <nav class="chapter-section-nav" aria-label="Apartados del capitulo">
        <span class="chapter-section-nav__icon" aria-hidden="true">${icon(CHAPTER_ICONS[chapter.id] || "book")}</span>
        <label class="chapter-section-nav__select" for="chapterSectionSelect">
          <span>Apartado actual</span>
          <select id="chapterSectionSelect" data-chapter-id="${chapter.id}">
            ${chapter.sections
              .map(
                (section, index) =>
                  `<option value="${section.id}" ${section.id === activeSection.id ? "selected" : ""}>${index + 1}. ${section.title}</option>`
              )
              .join("")}
          </select>
        </label>
        <span class="chapter-section-nav__counter" aria-label="Apartado ${activeSectionIndex + 1} de ${chapter.sections.length}">${activeSectionIndex + 1}/${chapter.sections.length}</span>
      </nav>

      <section class="search-grid section-focus">
        ${renderSectionCard(chapter, activeSection)}
      </section>

      <nav class="section-pagination" aria-label="Navegación entre apartados">
        ${
          previousSection
            ? `<a class="ghost-button" href="#/capitulo/${chapter.id}/${previousSection.id}">Anterior: ${previousSection.title}</a>`
            : `<a class="ghost-button" href="#/inicio">Volver al inicio</a>`
        }
        <span class="status-pill status-pill--progress">${activeSectionIndex + 1} de ${chapter.sections.length}</span>
        ${
          nextSection
            ? `<a class="primary-button" href="#/capitulo/${chapter.id}/${nextSection.id}">Siguiente: ${nextSection.title}</a>`
            : `<a class="primary-button" href="#/practica/${chapter.id}">Practicar el bloque</a>`
        }
      </nav>
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
        ${renderCallout("Teoria minima", getPrimaryBlock(section, "theory"), "cool", section.id)}
        ${renderCallout("Metodo", getPrimaryBlock(section, "method"), "warm", section.id)}
        ${renderCallout("Ejemplo resuelto", getPrimaryBlock(section, "solvedExample"), "cool", section.id)}
        ${renderCallout("Error frecuente", getPrimaryBlock(section, "commonError"), "warm", section.id)}
        ${guided}
        ${practice}
        ${renderChallengeCard(section.challenge)}
        ${sectionActivities.length ? renderSectionActivities(sectionActivities) : ""}
      </article>
    `;
  }

  function renderCallout(title, block, tone, sectionId = "") {
    if (!block || !block.html) {
      return "";
    }
    const html = replaceFigureFallback(block.html, sectionId);
    return `
      <section class="callout-card callout-card--${tone}">
        <p class="card-kicker">${title}</p>
        <div class="rich-text">${html}</div>
      </section>
    `;
  }

  function replaceFigureFallback(html, sectionId) {
    if (!html.includes("figure-fallback")) {
      return html;
    }
    const visual = buildSemanticFigure(sectionId);
    if (!visual) {
      return html.replace(
        /<div class="figure-fallback">[\s\S]*?<\/div>/g,
        '<div class="figure-fallback">Consulta el esquema relacionado y describe sus elementos antes de continuar.</div>'
      );
    }
    return html.replace(/<div class="figure-fallback">[\s\S]*?<\/div>/g, visual);
  }

  function buildSemanticFigure(sectionId) {
    const figures = {
      "C05.S02": `
        <figure class="semantic-figure">
          <svg viewBox="0 0 520 260" role="img" aria-labelledby="triangleTitle triangleDesc">
            <title id="triangleTitle">Triangulo rectangulo y razones trigonometricas</title>
            <desc id="triangleDesc">Triangulo con cateto contiguo horizontal, cateto opuesto vertical, hipotenusa y angulo alfa.</desc>
            <path class="diagram-shape" d="M70 210 L440 210 L440 50 Z"></path>
            <path class="diagram-guide" d="M410 210 L410 180 L440 180"></path>
            <path class="diagram-accent" d="M112 210 A42 42 0 0 0 102 184"></path>
            <text x="250" y="242">cateto contiguo</text><text x="452" y="135">cateto opuesto</text>
            <text x="235" y="116">hipotenusa</text><text x="112" y="196">α</text>
          </svg>
          <figcaption>Elige seno, coseno o tangente segun los lados conocidos y el lado buscado.</figcaption>
        </figure>`,
      "C05.S03": `
        <figure class="semantic-figure">
          <svg viewBox="0 0 420 320" role="img" aria-labelledby="circleTitle circleDesc">
            <title id="circleTitle">Circulo trigonometrico por cuadrantes</title>
            <desc id="circleDesc">Circunferencia unidad dividida en cuatro cuadrantes con los signos de seno y coseno.</desc>
            <line class="diagram-axis" x1="30" y1="160" x2="390" y2="160"></line>
            <line class="diagram-axis" x1="210" y1="295" x2="210" y2="25"></line>
            <circle class="diagram-shape" cx="210" cy="160" r="110"></circle>
            <text x="280" y="90">I: +,+</text><text x="105" y="90">II: −,+</text>
            <text x="100" y="240">III: −,−</text><text x="275" y="240">IV: +,−</text>
          </svg>
          <figcaption>Cada pareja indica los signos de coseno y seno, es decir, de las coordenadas \\((x,y)\\).</figcaption>
        </figure>`,
      "C06.S06": `
        <figure class="semantic-figure">
          <svg viewBox="0 0 520 300" role="img" aria-labelledby="parallelogramTitle parallelogramDesc">
            <title id="parallelogramTitle">Construccion vectorial de un paralelogramo</title>
            <desc id="parallelogramDesc">Paralelogramo ABCD con lados opuestos paralelos y relacion C igual a B mas D menos A.</desc>
            <path class="diagram-shape" d="M80 235 L330 205 L445 65 L195 95 Z"></path>
            <circle class="diagram-point" cx="80" cy="235" r="5"></circle><text x="55" y="260">A</text>
            <circle class="diagram-point" cx="330" cy="205" r="5"></circle><text x="338" y="228">B</text>
            <circle class="diagram-point" cx="445" cy="65" r="5"></circle><text x="455" y="60">C</text>
            <circle class="diagram-point" cx="195" cy="95" r="5"></circle><text x="168" y="90">D</text>
            <text x="185" y="285">C = B + D − A</text>
          </svg>
          <figcaption>Los lados opuestos representan el mismo vector: \\(\\overrightarrow{AB}=\\overrightarrow{DC}\\).</figcaption>
        </figure>`,
      "C07.S07": `
        <figure class="semantic-figure">
          <svg viewBox="0 0 480 360" role="img" aria-labelledby="areaTitle areaDesc">
            <title id="areaTitle">Triangulo en el plano cartesiano</title>
            <desc id="areaDesc">Triangulo rectangulo con vertices A uno dos, B uno cinco y C cuatro dos.</desc>
            <line class="diagram-axis" x1="45" y1="315" x2="445" y2="315"></line><line class="diagram-axis" x1="65" y1="335" x2="65" y2="25"></line>
            <path class="diagram-shape diagram-fill" d="M135 245 L135 65 L345 245 Z"></path>
            <circle class="diagram-point" cx="135" cy="245" r="5"></circle><text x="105" y="270">A(1,2)</text>
            <circle class="diagram-point" cx="135" cy="65" r="5"></circle><text x="78" y="55">B(1,5)</text>
            <circle class="diagram-point" cx="345" cy="245" r="5"></circle><text x="350" y="270">C(4,2)</text>
          </svg>
          <figcaption>Base y altura miden 3 unidades, por lo que el area es \\(\\frac{3\\cdot3}{2}=\\frac92\\).</figcaption>
        </figure>`,
      "C10.S07": `
        <figure class="semantic-figure">
          <svg viewBox="0 0 560 330" role="img" aria-labelledby="bayesTitle bayesDesc">
            <title id="bayesTitle">Arbol de probabilidades del sistema de alerta</title>
            <desc id="bayesDesc">Una pieza puede ser defectuosa o correcta y, despues, generar o no una alerta.</desc>
            <line class="diagram-shape" x1="55" y1="165" x2="205" y2="85"></line>
            <line class="diagram-shape" x1="55" y1="165" x2="205" y2="245"></line>
            <line class="diagram-shape" x1="205" y1="85" x2="405" y2="45"></line>
            <line class="diagram-shape" x1="205" y1="85" x2="405" y2="125"></line>
            <line class="diagram-shape" x1="205" y1="245" x2="405" y2="205"></line>
            <line class="diagram-shape" x1="205" y1="245" x2="405" y2="285"></line>
            <circle class="diagram-point" cx="55" cy="165" r="6"></circle>
            <circle class="diagram-point" cx="205" cy="85" r="6"></circle>
            <circle class="diagram-point" cx="205" cy="245" r="6"></circle>
            <text x="25" y="190">Pieza</text>
            <text x="180" y="70">D</text><text x="168" y="270">no D</text>
            <text x="420" y="50">Alerta</text><text x="420" y="130">Sin alerta</text>
            <text x="420" y="210">Alerta</text><text x="420" y="290">Sin alerta</text>
            <text x="112" y="105">0.04</text><text x="112" y="235">0.96</text>
            <text x="292" y="52">0.95</text><text x="292" y="122">0.05</text>
            <text x="292" y="212">0.03</text><text x="292" y="282">0.97</text>
          </svg>
          <figcaption>Multiplica probabilidades a lo largo de cada rama y suma los caminos que terminan en alerta.</figcaption>
        </figure>`,
      "C08.S02": `
        <figure class="semantic-figure">
          <svg viewBox="0 0 560 360" role="img" aria-labelledby="graphTitle graphDesc">
            <title id="graphTitle">Grafica de una parabola en un intervalo</title>
            <desc id="graphDesc">Parabola concava hacia abajo, definida entre menos uno y tres, con maximo en uno cuatro.</desc>
            <g class="diagram-grid"><path d="M70 45V315M150 45V315M230 45V315M310 45V315M390 45V315M470 45V315M70 75H500M70 135H500M70 195H500M70 255H500M70 315H500"></path></g>
            <line class="diagram-axis" x1="50" y1="315" x2="515" y2="315"></line><line class="diagram-axis" x1="150" y1="335" x2="150" y2="30"></line>
            <path class="diagram-accent diagram-curve" d="M70 255 C155 75 230 75 310 75 C390 75 455 170 470 255"></path>
            <circle class="diagram-point" cx="230" cy="75" r="6"></circle><text x="242" y="65">maximo (1,4)</text>
            <text x="61" y="340">−1</text><text x="224" y="340">1</text><text x="463" y="340">3</text>
          </svg>
          <figcaption>La funcion crece hasta \\(x=1\\), alcanza el valor maximo \\(4\\) y despues decrece.</figcaption>
        </figure>`
    };
    return figures[sectionId] || "";
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
            <button class="ghost-button" id="exportProgressButton" type="button">Exportar progreso</button>
            <button class="ghost-button" id="importProgressButton" type="button">Importar progreso</button>
            <button class="ghost-button" id="resetProgressButton" type="button">Reiniciar progreso</button>
            <input id="progressImportInput" type="file" accept=".json,application/json" hidden>
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

      ${renderPracticeSession(filteredQuestions)}
    `;

    wirePracticeEvents();
  }

  function renderPracticeSession(questions) {
    if (!questions.length) {
      return `
        <section class="empty-state" role="status">
          <p class="card-kicker">Sesion completada</p>
          <h2>No hay preguntas con este filtro</h2>
          <p>Cambia el estado o el tema para continuar practicando.</p>
        </section>
      `;
    }

    state.practiceIndex = clamp(state.practiceIndex, 0, questions.length - 1);
    const question = questions[state.practiceIndex];
    const percent = Math.round(((state.practiceIndex + 1) / questions.length) * 100);
    return `
      <section class="study-session" aria-labelledby="practiceSessionTitle">
        <div class="study-session__header">
          <div>
            <p class="card-kicker">Sesion guiada</p>
            <h2 id="practiceSessionTitle">Pregunta ${state.practiceIndex + 1} de ${questions.length}</h2>
          </div>
          <span class="badge-soft">${percent}%</span>
        </div>
        <div class="study-session__progress" aria-hidden="true"><span style="width: ${percent}%"></span></div>
        ${renderQuizCard(question)}
        <div class="study-session__navigation" aria-label="Navegacion entre preguntas">
          <button class="ghost-button" id="practicePrevButton" type="button" ${state.practiceIndex === 0 ? "disabled" : ""}>Anterior</button>
          <button class="ghost-button" id="practiceRandomButton" type="button">Pregunta aleatoria</button>
          <button class="primary-button" id="practiceNextButton" type="button" ${state.practiceIndex === questions.length - 1 ? "disabled" : ""}>Siguiente</button>
        </div>
      </section>
    `;
  }

  function renderQuizCard(question) {
    const record = getQuestionRecord(question.id);
    const status = getQuestionStatus(question.id);
    const isRevealed = state.revealedQuestions.has(question.id);
    const chapterTitle = (getChapter(question.chapterId) || { title: question.chapterId }).title;
    const feedback = record && isRevealed
      ? `
          <div class="quiz-feedback" data-state="${record.lastCorrect ? "correct" : "wrong"}" role="status" aria-live="polite">
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
          ${getQuestionOptionOrder(question)
            .map((index) => {
              const option = question.options[index];
              const isSelected = isRevealed && record && record.selectedIndex === index;
              const isCorrect = isRevealed && record && question.correctIndex === index;
              const className = isRevealed && record
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
                    ${getQuestionOptionOrder(question)
                      .map((index) => {
                        const option = question.options[index];
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
    const scopedCards = getFlashcardScopeCards();
    const filteredCards = getFilteredFlashcards();
    const stats = getFlashcardStats(scopedCards);
    const sessionStats = getFlashcardSessionStats();
    const feedbackCard = state.flashcardSession.lastResult
      ? flashcardBank.find((card) => card.id === state.flashcardSession.lastResult.cardId)
      : null;
    const currentCard =
      feedbackCard ||
      (filteredCards.length > 0 ? filteredCards[clamp(state.flashcardIndex, 0, filteredCards.length - 1)] : null);

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
          <p>Recordadas con exito en dos dias distintos; volveran a aparecer cuando toque revisar.</p>
        </article>
        <article class="summary-card">
          <p class="card-kicker">Falladas alguna vez</p>
          <h2>${stats.everFailed}</h2>
          <p>Se conservan en el historial para poder crear un mazo específico de recuperación.</p>
        </article>
      </section>

      <section class="flashcard-session" aria-labelledby="flashcardSessionTitle">
        <div class="flashcard-session__head">
          <div>
            <p class="card-kicker">Sesión actual</p>
            <h2 id="flashcardSessionTitle">Tu marcador de memoria</h2>
            <p>Cada tarjeta cuenta una sola vez. Si la reintentas, se actualiza su resultado.</p>
          </div>
          <div class="flashcard-session__actions">
            <button class="secondary-button" id="flashcardFailedModeButton" type="button" data-icon="refresh" ${stats.everFailed ? "" : "disabled"}>
              Practicar ${stats.everFailed} fallada${stats.everFailed === 1 ? "" : "s"}
            </button>
            <button class="ghost-button" id="flashcardResetSessionButton" type="button" data-icon="refresh" ${sessionStats.total ? "" : "disabled"}>
              Reiniciar marcador
            </button>
          </div>
        </div>
        <div class="flashcard-session__metrics">
          <article class="flashcard-session__metric flashcard-session__metric--known">
            <span aria-hidden="true">${icon("check")}</span>
            <div><strong>${sessionStats.known}</strong><small>Las sé</small></div>
          </article>
          <article class="flashcard-session__metric flashcard-session__metric--review">
            <span aria-hidden="true">${icon("alert")}</span>
            <div><strong>${sessionStats.review}</strong><small>Por reforzar</small></div>
          </article>
          <article class="flashcard-session__metric">
            <span aria-hidden="true">${icon("target")}</span>
            <div><strong>${sessionStats.accuracy}%</strong><small>Precisión</small></div>
          </article>
          <article class="flashcard-session__metric">
            <span aria-hidden="true">${icon("trophy")}</span>
            <div><strong>${state.flashcardSession.bestStreak}</strong><small>Mejor racha · actual ${state.flashcardSession.currentStreak}</small></div>
          </article>
        </div>
        <div class="flashcard-session__progress">
          <div class="progress-bar" role="progressbar" aria-label="Precisión de la sesión" aria-valuemin="0" aria-valuemax="100" aria-valuenow="${sessionStats.accuracy}">
            <span style="width: ${sessionStats.accuracy}%"></span>
          </div>
          <p>${sessionStats.total ? `${sessionStats.total} tarjeta${sessionStats.total === 1 ? "" : "s"} evaluada${sessionStats.total === 1 ? "" : "s"} en esta sesión.` : "Voltea una tarjeta y evalúa tu recuerdo para iniciar el marcador."} Historial del filtro: ${stats.recallRate}% de recuerdos positivos.</p>
        </div>
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
              <li>Una tarjeta se consolida tras recordarla en dos dias distintos.</li>
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

    wireFlashcardEvents(filteredCards, currentCard);
  }

  function renderFlashcardStage(card, totalCards) {
    const status = getFlashcardStatus(card.id);
    const activeResult = state.flashcardSession.lastResult?.cardId === card.id ? state.flashcardSession.lastResult : null;
    const retrying = Boolean(activeResult?.retrying);
    const feedback = activeResult && !retrying ? activeResult : null;
    const position = activeResult?.position || (totalCards ? clamp(state.flashcardIndex, 0, totalCards - 1) + 1 : 1);
    const deckSize = activeResult?.deckSize || Math.max(totalCards, 1);
    return `
      <section class="flashcard-stage">
        <div class="flashcard-stage__meta">
          <div>
            <p class="card-kicker">${card.chapterId} - ${getChapter(card.chapterId).title}</p>
            <h2>${card.sectionId} - ${card.sectionTitle}</h2>
          </div>
          <span class="status-pill status-pill--${statusClass(status)}">${statusLabel(status)}</span>
        </div>

        <div class="flashcard ${state.flashcardFlipped ? "is-flipped" : ""}" id="flashcardDeck" tabindex="-1">
          <article class="flashcard__face flashcard__face--front" aria-hidden="${state.flashcardFlipped}" ${state.flashcardFlipped ? "inert" : ""}>
            <p class="card-kicker">${FLASHCARD_TYPE_LABELS[card.type] || card.type}</p>
            <h3>${card.front}</h3>
            <p>Piensa la respuesta y gira la tarjeta cuando tengas una explicacion propia.</p>
          </article>
          <article class="flashcard__face flashcard__face--back" aria-hidden="${!state.flashcardFlipped}" ${state.flashcardFlipped ? "" : "inert"}>
            <p class="card-kicker">${FLASHCARD_TYPE_LABELS[card.type] || card.type}</p>
            <div class="rich-text">${card.backHtml}</div>
          </article>
        </div>

        ${
          feedback
            ? renderFlashcardFeedback(card, feedback)
            : `
                <div class="hero__actions flashcard-navigation">
                  ${retrying ? "" : '<button class="ghost-button" id="flashcardPrevButton" type="button">Tarjeta anterior</button>'}
                  <button class="secondary-button" id="flashcardFlipButton" type="button">${state.flashcardFlipped ? "Ver anverso" : "Voltear tarjeta"}</button>
                  ${retrying ? "" : '<button class="ghost-button" id="flashcardNextButton" type="button">Tarjeta siguiente</button>'}
                  ${retrying ? "" : '<button class="ghost-button" id="flashcardShuffleButton" type="button">Tarjeta aleatoria</button>'}
                </div>

                <div class="hero__actions flashcard-assessment" aria-label="Autoevaluación de la tarjeta">
                  <button class="primary-button" id="flashcardMasteredButton" type="button" ${state.flashcardFlipped ? "" : "disabled"}>La sabía</button>
                  <button class="ghost-button" id="flashcardReviewButton" type="button" ${state.flashcardFlipped ? "" : "disabled"}>Necesito reforzarla</button>
                </div>
              `
        }

        <p class="progress-card__hint">Tarjeta ${position} de ${deckSize}. Primero intenta responder y después voltea la tarjeta para autoevaluarte.</p>
      </section>
    `;
  }

  function renderFlashcardFeedback(card, feedback) {
    const remembered = feedback.decision === "mastered";
    const expectation = getFlashcardLearningExpectation(card.type);
    return `
      <section class="flashcard-feedback flashcard-feedback--${remembered ? "known" : "review"}" role="status" aria-live="polite" tabindex="-1">
        <span class="flashcard-feedback__visual" aria-hidden="true">${icon(remembered ? "trophy" : "alert")}</span>
        <div class="flashcard-feedback__copy">
          <p class="card-kicker">${remembered ? "Recuerdo conseguido" : "Objetivo detectado"}</p>
          <h3>${remembered ? "¡Bien recuperada!" : "Buena decisión: esta tarjeta necesita otra vuelta"}</h3>
          <p>${remembered ? "Tu autoevaluación suma esta tarjeta a «Las sé»." : "La tarjeta queda guardada en tu historial de falladas y vuelve a la cola de repaso."}</p>
          <div class="flashcard-feedback__expectation">
            <strong>Lo que esperamos que puedas explicar</strong>
            <p>${expectation}</p>
          </div>
          <p class="flashcard-feedback__tip"><strong>${remembered ? "Para consolidarla:" : "Plan de 30 segundos:"}</strong> ${remembered ? "recupérala de nuevo otro día sin mirar; dos días distintos consolidan el aprendizaje." : "vuelve al anverso, dilo con tus palabras y contrasta solo después con la respuesta."}</p>
        </div>
        <div class="flashcard-feedback__actions">
          ${remembered ? "" : '<button class="secondary-button" id="flashcardRetryButton" type="button" data-icon="refresh">Intentar de nuevo</button>'}
          <button class="primary-button" id="flashcardFeedbackNextButton" type="button" data-icon="right">Siguiente tarjeta</button>
        </div>
      </section>
    `;
  }

  function getFlashcardLearningExpectation(type) {
    if (type === "procedimiento") {
      return "Identificar el orden de los pasos, justificar la operación clave y comprobar que el resultado responde a la pregunta.";
    }
    if (type === "estrategia") {
      return "Reconocer cuándo conviene usar la estrategia, por qué funciona y qué error frecuente ayuda a evitar.";
    }
    return "Dar la definición con tus palabras, señalar la idea matemática esencial y aportar un ejemplo o un contraejemplo sencillo.";
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

  function renderProblems() {
    const selectedChapter = state.problemChapter;
    const visibleChapters =
      selectedChapter === "ALL" || !getChapter(selectedChapter)
        ? content.chapters
        : content.chapters.filter((chapter) => chapter.id === selectedChapter);
    const visibleChapterIds = new Set(visibleChapters.map((chapter) => chapter.id));
    const visibleModels = supplements.problems.models.filter((item) => visibleChapterIds.has(item.chapterId));
    const visibleInventory = supplements.problems.inventory.filter((item) => visibleChapterIds.has(item.chapterId));

    dom.app.innerHTML = `
      <section class="hero">
        <div class="hero__grid">
          <div>
            <p class="card-kicker">Problemas contextualizados y relacionados</p>
            <h1>Problemas completos y verificados, conectados con la teoria que hace falta activar en cada caso.</h1>
            <p>
              Los modelos incluyen datos coherentes, respuesta breve y solucion paso a paso. El mapa por
              apartados se presenta aparte como ideas de ampliacion, nunca como problemas ya cerrados.
            </p>
          </div>
          <aside class="summary-card summary-card--accent">
            <p class="card-kicker">Cobertura actual</p>
            <h2>${visibleModels.length} problemas resueltos</h2>
            <p>${visibleInventory.length} ideas adicionales quedan identificadas como propuestas editoriales y enlazan con la teoria.</p>
          </aside>
        </div>
      </section>

      <section class="summary-grid">
        <article class="summary-card">
          <p class="card-kicker">Problemas completos</p>
          <h2>${visibleModels.length}</h2>
          <p>Enunciados desarrollados con datos, respuesta breve, comprobacion y solucion paso a paso.</p>
        </article>
        <article class="summary-card">
          <p class="card-kicker">Mapa de ampliacion</p>
          <h2>${visibleInventory.length}</h2>
          <p>Ideas de contexto por apartado. No se presentan como enunciados resueltos ni incorporan datos ficticios.</p>
        </article>
        <article class="summary-card">
          <p class="card-kicker">Nivel</p>
          <h2>Verificado</h2>
          <p>Todos los modelos completos han sido recalculados y contrastados de forma independiente.</p>
        </article>
      </section>

      <section class="practice-layout">
        <article class="practice-panel">
          <div class="practice-panel__head">
            <div>
              <p class="card-kicker">Filtro</p>
              <h2>Selecciona capitulo</h2>
            </div>
            <span class="badge-soft">${selectedChapter === "ALL" ? "Completo" : selectedChapter}</span>
          </div>
          <label>
            <span class="sidebar__eyebrow">Capitulo</span>
            <select id="problemsChapterSelect">
              <option value="ALL" ${state.problemChapter === "ALL" ? "selected" : ""}>Todos los capitulos</option>
              ${content.chapters
                .map(
                  (chapter) =>
                    `<option value="${chapter.id}" ${state.problemChapter === chapter.id ? "selected" : ""}>${chapter.id} - ${chapter.title}</option>`
                )
                .join("")}
            </select>
          </label>
        </article>

        <article class="practice-panel">
          <div class="practice-panel__head">
            <div>
              <p class="card-kicker">Uso recomendado</p>
              <h2>Como trabajar este banco</h2>
            </div>
          </div>
          <div class="reading-panel">
            <ol>
              <li>Abre primero el modelo completo del capitulo para ver el tipo de razonamiento esperado.</li>
              <li>Usa los enlaces de teoria para volver justo al apartado que sostiene el problema.</li>
              <li>Consulta el mapa de ampliacion solo para explorar posibles contextos; no contiene enunciados cerrados.</li>
            </ol>
          </div>
        </article>
      </section>

      ${
        visibleModels.length
          ? `
              <section class="search-grid">
                ${visibleModels.map(renderProblemModelCard).join("")}
              </section>
            `
          : ""
      }

      ${visibleChapters.map((chapter) => renderProblemInventorySection(chapter)).join("")}
    `;

    wireProblemEvents();
  }

  function renderProblemModelCard(model) {
    const chapter = getChapter(model.chapterId) || { title: model.chapterId };
    return `
      <article class="section-card">
        <div class="section-card__head">
          <div>
            <p class="card-kicker">${model.chapterId} - ${chapter.title}</p>
            <h2>${model.title}</h2>
          </div>
          <span class="badge-soft">Modelo contextualizado</span>
        </div>
        ${renderTheoryLinksPanel(model.relatedTheorySections)}
        ${renderCallout(model.promptTitle || "Situacion", { html: model.promptHtml }, "cool")}
        ${model.resourceHtml ? renderCallout(model.resourceTitle || "Datos y apoyos", { html: model.resourceHtml }, "warm") : ""}
        <details class="inline-details inventory-item">
          <summary>Ver respuesta breve</summary>
          <div class="rich-text">${model.answerHtml}</div>
        </details>
        <details class="inline-details inventory-item">
          <summary>Ver solucion completa</summary>
          <div class="rich-text">${model.solutionHtml}</div>
        </details>
      </article>
    `;
  }

  function renderProblemInventorySection(chapter) {
    const items = getProblemInventoryForChapter(chapter.id);
    if (!items.length) {
      return "";
    }

    return `
      <section class="section-card">
        <div class="section-card__head">
          <div>
            <p class="card-kicker">${(CHAPTER_META[chapter.id] || {}).block || "Bloque"}</p>
            <h2>${chapter.id} - ${chapter.title}</h2>
          </div>
          <span class="badge-soft">${items.length} ideas</span>
        </div>
        <p>Mapa editorial de posibles contextos. Estas entradas no son problemas cerrados y no incluyen datos ni soluciones inventadas.</p>
        <div class="inventory-list">
          ${items.map(renderProblemSeedCard).join("")}
        </div>
      </section>
    `;
  }

  function renderProblemSeedCard(item) {
    return `
      <details class="inline-details inventory-item">
        <summary>
          <span class="inventory-item__heading">
            <strong>${item.sectionId} - ${item.sectionTitle}</strong>
            <small>${item.prompt}</small>
          </span>
          <span class="status-pill status-pill--cool">${item.level}</span>
        </summary>
        <div class="inventory-item__body">
          <div class="reading-panel">
            <p class="card-kicker">Idea editorial, no enunciado cerrado</p>
            <p><strong>Objetivo matematico:</strong> ${item.sectionTitle}.</p>
            <p><strong>Contexto que puede desarrollarse:</strong> ${item.prompt}.</p>
            <p>Para practicar ahora con datos y correccion fiables, entra en la teoria enlazada y utiliza sus ejercicios resueltos.</p>
          </div>
          ${renderTheoryLinksPanel(item.relatedTheorySections)}
        </div>
      </details>
    `;
  }

  function renderExams() {
    const selectedChapter = state.examChapter;
    const visibleChapters =
      selectedChapter === "ALL" || !getChapter(selectedChapter)
        ? content.chapters
        : content.chapters.filter((chapter) => chapter.id === selectedChapter);
    const visibleChapterIds = new Set(visibleChapters.map((chapter) => chapter.id));
    const visibleMiniModels = supplements.exams.miniModels.filter((item) => visibleChapterIds.has(item.chapterId));
    const visibleExamSeeds = supplements.exams.inventory.filter((item) => visibleChapterIds.has(item.chapterId));
    const visibleBlockModels =
      selectedChapter === "ALL"
        ? supplements.exams.blockModels
        : supplements.exams.blockModels.filter((item) => item.chapterIds.includes(selectedChapter));

    dom.app.innerHTML = `
      <section class="hero">
        <div class="hero__grid">
          <div>
            <p class="card-kicker">Examenes por secciones y por bloques</p>
            <h1>Modelos de evaluacion dificiles, resueltos y conectados con los apartados que necesitas reactivar.</h1>
            <p>
              La seccion combina mini-examenes por apartado, examenes por bloques y pruebas autocontenidas
              para preparar evaluaciones con criterio y volver a la teoria precisa en cada momento.
            </p>
          </div>
          <aside class="summary-card summary-card--accent">
            <p class="card-kicker">Cobertura actual</p>
            <h2>${visibleMiniModels.length} mini-modelos y ${visibleBlockModels.length} bloques</h2>
            <p>Todos incorporan referencia directa a la teoria necesaria para planificar repaso o correccion.</p>
          </aside>
        </div>
      </section>

      <section class="summary-grid">
        <article class="summary-card">
          <p class="card-kicker">Mini-examenes modelo</p>
          <h2>${visibleMiniModels.length}</h2>
          <p>Ensayos cortos por seccion, con solucion detallada y duracion orientativa.</p>
        </article>
        <article class="summary-card">
          <p class="card-kicker">Examenes por bloques</p>
          <h2>${visibleBlockModels.length}</h2>
          <p>Versiones mas largas para mezclar contenidos de un mismo bloque curricular.</p>
        </article>
        <article class="summary-card">
          <p class="card-kicker">Pruebas por seccion</p>
          <h2>${visibleExamSeeds.length}</h2>
          <p>Pruebas breves con ejercicios concretos, teoria asociada y correccion desplegable.</p>
        </article>
      </section>

      <section class="practice-layout">
        <article class="practice-panel">
          <div class="practice-panel__head">
            <div>
              <p class="card-kicker">Filtro</p>
              <h2>Selecciona capitulo</h2>
            </div>
            <span class="badge-soft">${selectedChapter === "ALL" ? "Completo" : selectedChapter}</span>
          </div>
          <label>
            <span class="sidebar__eyebrow">Capitulo</span>
            <select id="examsChapterSelect">
              <option value="ALL" ${state.examChapter === "ALL" ? "selected" : ""}>Todos los capitulos</option>
              ${content.chapters
                .map(
                  (chapter) =>
                    `<option value="${chapter.id}" ${state.examChapter === chapter.id ? "selected" : ""}>${chapter.id} - ${chapter.title}</option>`
                )
                .join("")}
            </select>
          </label>
        </article>

        <article class="practice-panel">
          <div class="practice-panel__head">
            <div>
              <p class="card-kicker">Uso recomendado</p>
              <h2>Como preparar un examen con esta zona</h2>
            </div>
          </div>
          <div class="reading-panel">
            <ol>
              <li>Empieza por el mini-examen del apartado para medir si la tecnica ya esta disponible.</li>
              <li>Si fallas, usa los enlaces de teoria necesaria antes de repetir el intento.</li>
              <li>Cuando el bloque este listo, pasa al examen global para mezclar contenidos y tiempos.</li>
            </ol>
          </div>
        </article>
      </section>

      ${
        visibleMiniModels.length
          ? `
              <section class="search-grid">
                ${visibleMiniModels.map(renderExamMiniModelCard).join("")}
              </section>
            `
          : ""
      }

      ${
        visibleBlockModels.length
          ? `
              <section class="section-card">
                <div class="section-card__head">
                  <div>
                    <p class="card-kicker">Examenes por bloques</p>
                    <h2>Modelos largos relacionados</h2>
                  </div>
                  <span class="badge-soft">${visibleBlockModels.length}</span>
                </div>
                <div class="search-grid">
                  ${visibleBlockModels.map(renderExamBlockCard).join("")}
                </div>
              </section>
            `
          : ""
      }

      ${visibleChapters.map((chapter) => renderExamInventorySection(chapter)).join("")}
    `;

    wireExamEvents();
  }

  function renderExamMiniModelCard(model) {
    const chapter = getChapter(model.chapterId) || { title: model.chapterId };
    return `
      <article class="section-card">
        <div class="section-card__head">
          <div>
            <p class="card-kicker">${model.chapterId} - ${chapter.title}</p>
            <h2>${model.sectionId} - ${model.title}</h2>
          </div>
          <span class="badge-soft">${model.duration || "Mini-examen"}</span>
        </div>
        <div class="quick-links">
          ${model.blockLabel ? `<span class="status-pill status-pill--cool">${model.blockLabel}</span>` : ""}
        </div>
        ${renderTheoryLinksPanel(model.relatedTheorySections)}
        ${renderCallout(model.briefTitle || "Enunciado", { html: model.briefHtml }, "cool")}
        ${model.rubricHtml ? renderCallout(model.rubricTitle || "Rubrica", { html: model.rubricHtml }, "warm") : ""}
        <details class="inline-details inventory-item">
          <summary>Ver respuesta breve</summary>
          <div class="rich-text">${model.answerHtml}</div>
        </details>
        <details class="inline-details inventory-item">
          <summary>Ver solucion completa</summary>
          <div class="rich-text">${model.solutionHtml}</div>
        </details>
      </article>
    `;
  }

  function renderExamBlockCard(model) {
    return `
      <article class="section-card section-card--nested">
        <div class="section-card__head">
          <div>
            <p class="card-kicker">${model.blockId}</p>
            <h3>${model.title}</h3>
          </div>
          <span class="badge-soft">Bloque</span>
        </div>
        ${renderTheoryLinksPanel([], model.relatedTheoryChapters)}
        ${renderCallout(model.briefTitle || "Enunciado", { html: model.briefHtml }, "cool")}
        <details class="inline-details inventory-item">
          <summary>Ver respuesta breve</summary>
          <div class="rich-text">${model.answerHtml}</div>
        </details>
        <details class="inline-details inventory-item">
          <summary>Ver solucion completa</summary>
          <div class="rich-text">${model.solutionHtml}</div>
        </details>
      </article>
    `;
  }

  function renderExamInventorySection(chapter) {
    const items = getExamInventoryForChapter(chapter.id);
    if (!items.length) {
      return "";
    }

    return `
      <section class="section-card">
        <div class="section-card__head">
          <div>
            <p class="card-kicker">${(CHAPTER_META[chapter.id] || {}).block || "Bloque"}</p>
            <h2>${chapter.id} - ${chapter.title}</h2>
          </div>
          <span class="badge-soft">${items.length} pruebas</span>
        </div>
        <p>Banco de pruebas breves por secciones con preguntas reales, tiempo orientativo y solucion.</p>
        <div class="inventory-list">
          ${items.map(renderExamSeedCard).join("")}
        </div>
      </section>
    `;
  }

  function renderExamSeedCard(item) {
    const section = getSection(item.sectionId);
    const practiceItems = section?.practice?.items || [];
    const guidedItems = section?.guidedExercises || [];
    const questions = practiceItems.length
      ? practiceItems.slice(0, 3).map((exercise) => exercise.prompt)
      : guidedItems.slice(0, 3).map((exercise) => `${exercise.title}: ${stripHtml(exercise.promptHtml)}`);
    const answerHtml = section?.practice?.answersHtml || guidedItems.map((exercise) => exercise.answerHtml).filter(Boolean).join("");
    const solutionHtml = section?.practice?.solutionsHtml || guidedItems.map((exercise) => exercise.solutionHtml).filter(Boolean).join("");
    return `
      <details class="inline-details inventory-item">
        <summary>
          <span class="inventory-item__heading">
            <strong>${item.sectionId} - ${item.sectionTitle}</strong>
            <small>${item.title}</small>
          </span>
          <span class="status-pill status-pill--cool">${item.duration}</span>
        </summary>
        <div class="inventory-item__body">
          <p><strong>Consigna:</strong> ${item.title}. Responde sin consultar la solucion y justifica cada transformacion relevante.</p>
          <ol class="exam-question-list">
            ${questions.length ? questions.map((question) => `<li>${question}</li>`).join("") : `<li>Explica y aplica el procedimiento central de ${item.sectionTitle} en un ejemplo propio.</li>`}
          </ol>
          <div class="rubric-strip">
            <span>Planteamiento: 30%</span><span>Procedimiento: 45%</span><span>Comprobacion y comunicacion: 25%</span>
          </div>
          ${renderTheoryLinksPanel(item.relatedTheorySections)}
          ${answerHtml ? `<details class="inline-details"><summary>Ver respuestas</summary><div class="rich-text">${answerHtml}</div></details>` : ""}
          ${solutionHtml ? `<details class="inline-details"><summary>Ver correccion completa</summary><div class="rich-text">${solutionHtml}</div></details>` : ""}
        </div>
      </details>
    `;
  }

  function renderActivityCard(activity, compact) {
    const record = getActivityRecord(activity.id);
    const status = getActivityStatus(activity.id);
    const isRevealed = state.revealedActivities.has(activity.id);
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
      const feedback = record && isRevealed
        ? `
            <div class="quiz-feedback" data-state="${record.lastCorrect ? "correct" : "wrong"}" role="status" aria-live="polite">
              <strong>${record.lastCorrect ? "Acertada" : "Ajustemos la idea"}</strong>
              <p>${activity.explanation}</p>
            </div>
          `
        : `
            <div class="quiz-feedback quiz-feedback--neutral">
              <strong>Piensa antes de elegir</strong>
              <p>Selecciona una opcion. Despues recibiras una explicacion vinculada al procedimiento.</p>
            </div>
          `;

      return `
        <article class="activity-card activity-card--micro ${compact ? "activity-card--compact" : ""}">
          ${commonHeader}
          <div class="quiz-options">
            ${activity.options
              .map((option, index) => {
                const isSelected = isRevealed && record && record.selectedIndex === index;
                const isCorrect = isRevealed && record && activity.correctIndex === index;
                const className = isRevealed && record
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
      const feedback = record && isRevealed
        ? `
            <div class="quiz-feedback" data-state="${record.lastCorrect ? "correct" : "wrong"}" role="status" aria-live="polite">
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

    if (activity.type === "custom-sequence") {
      const selected = getSequenceDraft(activity);
      const available = getSequencePool(activity).filter((index) => !selected.includes(index));
      const feedback = isRevealed && record
        ? `
            <div class="quiz-feedback" data-state="${record.lastCorrect ? "correct" : "wrong"}" role="status" aria-live="polite">
              <strong>${record.lastCorrect ? "Procedimiento bien ordenado" : "Revisa el orden"}</strong>
              <p>${activity.explanation}</p>
            </div>
          `
        : `
            <div class="quiz-feedback quiz-feedback--neutral">
              <strong>Construye el procedimiento</strong>
              <p>Pulsa los pasos en el orden en que los aplicarias. Puedes deshacer antes de comprobar.</p>
            </div>
          `;
      return `
        <article class="activity-card ${compact ? "activity-card--compact" : ""}">
          ${commonHeader}
          <div class="sequence-builder">
            <div>
              <p class="card-kicker">Tu orden</p>
              <ol class="sequence-selected">
                ${selected.length ? selected.map((index) => `<li>${activity.steps[index]}</li>`).join("") : "<li>Empieza seleccionando un paso.</li>"}
              </ol>
            </div>
            <div>
              <p class="card-kicker">Pasos disponibles</p>
              <div class="activity-tabs">
                ${available.map((index) => `<button class="chip-button" type="button" data-sequence-add="${activity.id}" data-sequence-index="${index}">${activity.steps[index]}</button>`).join("")}
              </div>
            </div>
          </div>
          <div class="hero__actions">
            <button class="ghost-button" type="button" data-sequence-undo="${activity.id}" ${selected.length ? "" : "disabled"}>Deshacer</button>
            <button class="ghost-button" type="button" data-sequence-reset="${activity.id}" ${selected.length ? "" : "disabled"}>Reiniciar</button>
            <button class="primary-button" type="button" data-sequence-check="${activity.id}" ${selected.length === activity.steps.length ? "" : "disabled"}>Comprobar orden</button>
          </div>
          ${feedback}
        </article>
      `;
    }

    if (activity.type === "custom-regression-lab") {
      return `
        <article class="activity-card ${compact ? "activity-card--compact" : ""}">
          ${commonHeader}
          <label class="range-control">
            <span><strong>Altura del ultimo punto:</strong> <output id="regressionOutlierValue">${state.customLabs.regressionOutlier}</output></span>
            <input class="range-input" id="regressionOutlierSlider" type="range" min="5" max="40" step="1" value="${state.customLabs.regressionOutlier}">
          </label>
          <div class="diagram-panel" id="regressionDiagram"></div>
          <div class="activity-output" id="regressionFeedback" role="status" aria-live="polite"></div>
        </article>
      `;
    }

    if (activity.type === "custom-probability-simulator") {
      return `
        <article class="activity-card ${compact ? "activity-card--compact" : ""}">
          ${commonHeader}
          <div class="hero__actions">
            <button class="secondary-button" type="button" data-simulate-count="10">Lanzar 10</button>
            <button class="secondary-button" type="button" data-simulate-count="100">Lanzar 100</button>
            <button class="primary-button" type="button" data-simulate-count="1000">Lanzar 1000</button>
            <button class="ghost-button" id="probabilityResetButton" type="button">Reiniciar</button>
          </div>
          <div class="simulation-bars" id="probabilityDiagram"></div>
          <div class="activity-output" id="probabilityFeedback" role="status" aria-live="polite"></div>
        </article>
      `;
    }

    return "";
  }

  function wirePracticeEvents() {
    document.getElementById("practiceChapterSelect")?.addEventListener("change", (event) => {
      state.practiceChapter = event.target.value;
      state.practiceIndex = 0;
      window.localStorage.setItem(STORAGE_KEYS.practiceChapter, state.practiceChapter);
      window.location.hash = state.practiceChapter === "ALL" ? "#/practica" : `#/practica/${state.practiceChapter}`;
    });

    document.getElementById("practiceStatusSelect")?.addEventListener("change", (event) => {
      state.practiceStatus = event.target.value;
      state.practiceIndex = 0;
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
      state.examIds.forEach((questionId) => {
        delete state.questionOptionOrders[questionId];
      });
      state.examAnswers = {};
      state.examSubmitted = false;
      renderPractice();
      postRender();
    });

    document.getElementById("resetProgressButton")?.addEventListener("click", () => {
      const confirmed = window.confirm(
        "Se borraran los test, actividades, flashcards y XP guardados en este dispositivo. Esta accion no se puede deshacer."
      );
      if (!confirmed) {
        return;
      }
      state.progress = createEmptyProgress();
      state.flashcardSession = createFlashcardSession();
      state.examAnswers = {};
      state.examIds = [];
      state.examSubmitted = false;
      state.revealedQuestions.clear();
      state.revealedActivities.clear();
      saveProgress();
      renderPractice();
      postRender();
    });

    document.getElementById("exportProgressButton")?.addEventListener("click", exportProgress);
    document.getElementById("importProgressButton")?.addEventListener("click", () => {
      document.getElementById("progressImportInput")?.click();
    });
    document.getElementById("progressImportInput")?.addEventListener("change", importProgress);

    document.getElementById("practicePrevButton")?.addEventListener("click", () => {
      state.practiceIndex = Math.max(0, state.practiceIndex - 1);
      renderPractice();
      postRender();
    });

    document.getElementById("practiceNextButton")?.addEventListener("click", () => {
      const total = getFilteredQuestions().length;
      state.practiceIndex = Math.min(Math.max(0, total - 1), state.practiceIndex + 1);
      renderPractice();
      postRender();
    });

    document.getElementById("practiceRandomButton")?.addEventListener("click", () => {
      const total = getFilteredQuestions().length;
      if (total > 1) {
        let nextIndex = state.practiceIndex;
        while (nextIndex === state.practiceIndex) {
          nextIndex = Math.floor(Math.random() * total);
        }
        state.practiceIndex = nextIndex;
      }
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

  function wireFlashcardEvents(filteredCards, currentCard) {
    document.getElementById("flashcardChapterSelect")?.addEventListener("change", (event) => {
      state.flashcardChapter = event.target.value;
      state.flashcardIndex = 0;
      state.flashcardFlipped = false;
      state.flashcardSession.lastResult = null;
      window.localStorage.setItem(STORAGE_KEYS.flashcardChapter, state.flashcardChapter);
      window.location.hash = state.flashcardChapter === "ALL" ? "#/flashcards" : `#/flashcards/${state.flashcardChapter}`;
    });

    document.getElementById("flashcardTypeSelect")?.addEventListener("change", (event) => {
      state.flashcardType = event.target.value;
      state.flashcardIndex = 0;
      state.flashcardFlipped = false;
      state.flashcardSession.lastResult = null;
      window.localStorage.setItem(STORAGE_KEYS.flashcardType, state.flashcardType);
      renderFlashcards();
      postRender();
    });

    document.getElementById("flashcardStatusSelect")?.addEventListener("change", (event) => {
      state.flashcardStatus = event.target.value;
      state.flashcardIndex = 0;
      state.flashcardFlipped = false;
      state.flashcardSession.lastResult = null;
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
      state.flashcardSession.lastResult = null;
      renderFlashcards();
      postRender();
    });

    document.getElementById("flashcardNextButton")?.addEventListener("click", () => {
      if (!filteredCards.length) {
        return;
      }
      state.flashcardIndex = (state.flashcardIndex + 1) % filteredCards.length;
      state.flashcardFlipped = false;
      state.flashcardSession.lastResult = null;
      renderFlashcards();
      postRender();
    });

    document.getElementById("flashcardShuffleButton")?.addEventListener("click", () => {
      if (!filteredCards.length) {
        return;
      }
      state.flashcardIndex = Math.floor(Math.random() * filteredCards.length);
      state.flashcardFlipped = false;
      state.flashcardSession.lastResult = null;
      renderFlashcards();
      postRender();
    });

    document.getElementById("flashcardMasteredButton")?.addEventListener("click", () => {
      if (!currentCard || !state.flashcardFlipped) {
        return;
      }
      recordFlashcardDecision(currentCard.id, "mastered");
      recordFlashcardSessionDecision(currentCard.id, "mastered", filteredCards.length);
      renderFlashcards();
      updateProgressUi();
      postRender();
      focusFlashcardFeedback();
    });

    document.getElementById("flashcardReviewButton")?.addEventListener("click", () => {
      if (!currentCard || !state.flashcardFlipped) {
        return;
      }
      recordFlashcardDecision(currentCard.id, "review");
      recordFlashcardSessionDecision(currentCard.id, "review", filteredCards.length);
      renderFlashcards();
      updateProgressUi();
      postRender();
      focusFlashcardFeedback();
    });

    document.getElementById("flashcardFeedbackNextButton")?.addEventListener("click", moveToNextFlashcard);

    document.getElementById("flashcardRetryButton")?.addEventListener("click", () => {
      state.flashcardSession.lastResult.retrying = true;
      state.flashcardFlipped = false;
      renderFlashcards();
      postRender();
      window.requestAnimationFrame(() => document.getElementById("flashcardDeck")?.focus({ preventScroll: true }));
    });

    document.getElementById("flashcardFailedModeButton")?.addEventListener("click", () => {
      state.flashcardStatus = "FAILED";
      state.flashcardIndex = 0;
      state.flashcardFlipped = false;
      state.flashcardSession.lastResult = null;
      window.localStorage.setItem(STORAGE_KEYS.flashcardStatus, state.flashcardStatus);
      renderFlashcards();
      postRender();
    });

    document.getElementById("flashcardResetSessionButton")?.addEventListener("click", () => {
      state.flashcardSession = createFlashcardSession();
      state.flashcardFlipped = false;
      renderFlashcards();
      postRender();
    });
  }

  function wireProblemEvents() {
    document.getElementById("problemsChapterSelect")?.addEventListener("change", (event) => {
      state.problemChapter = event.target.value;
      window.localStorage.setItem(STORAGE_KEYS.problemChapter, state.problemChapter);
      window.location.hash = state.problemChapter === "ALL" ? "#/problemas" : `#/problemas/${state.problemChapter}`;
    });
  }

  function wireExamEvents() {
    document.getElementById("examsChapterSelect")?.addEventListener("change", (event) => {
      state.examChapter = event.target.value;
      window.localStorage.setItem(STORAGE_KEYS.examChapter, state.examChapter);
      window.location.hash = state.examChapter === "ALL" ? "#/examenes" : `#/examenes/${state.examChapter}`;
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

    dom.app.querySelectorAll("[data-sequence-add]").forEach((button) => {
      button.addEventListener("click", () => {
        const activity = getActivity(button.dataset.sequenceAdd);
        if (!activity) {
          return;
        }
        getSequenceDraft(activity).push(Number(button.dataset.sequenceIndex));
        rerenderPreservingScroll();
      });
    });

    dom.app.querySelectorAll("[data-sequence-undo]").forEach((button) => {
      button.addEventListener("click", () => {
        const activity = getActivity(button.dataset.sequenceUndo);
        if (activity) {
          getSequenceDraft(activity).pop();
          rerenderPreservingScroll();
        }
      });
    });

    dom.app.querySelectorAll("[data-sequence-reset]").forEach((button) => {
      button.addEventListener("click", () => {
        state.activityDrafts[`sequence-${button.dataset.sequenceReset}`] = [];
        state.revealedActivities.delete(button.dataset.sequenceReset);
        rerenderPreservingScroll();
      });
    });

    dom.app.querySelectorAll("[data-sequence-check]").forEach((button) => {
      button.addEventListener("click", () => {
        const activity = getActivity(button.dataset.sequenceCheck);
        if (!activity) {
          return;
        }
        const selected = getSequenceDraft(activity);
        const correct = selected.length === activity.steps.length && selected.every((value, index) => value === index);
        updateActivityProgress(activity.id, correct, { order: [...selected] });
        rerenderPreservingScroll();
      });
    });

    document.getElementById("regressionOutlierSlider")?.addEventListener("input", (event) => {
      state.customLabs.regressionOutlier = Number(event.target.value);
      updateRegressionLab();
    });
    if (document.getElementById("regressionDiagram")) {
      updateRegressionLab();
    }

    dom.app.querySelectorAll("[data-simulate-count]").forEach((button) => {
      button.addEventListener("click", () => {
        runProbabilitySimulation(Number(button.dataset.simulateCount));
      });
    });
    document.getElementById("probabilityResetButton")?.addEventListener("click", () => {
      state.customLabs.probability = { trials: 0, heads: 0 };
      updateProbabilityLab();
    });
    if (document.getElementById("probabilityDiagram")) {
      updateProbabilityLab();
    }
  }

  function getSequenceDraft(activity) {
    const key = `sequence-${activity.id}`;
    if (!Array.isArray(state.activityDrafts[key])) {
      state.activityDrafts[key] = [];
    }
    return state.activityDrafts[key];
  }

  function getSequencePool(activity) {
    if (!Array.isArray(state.sequencePools[activity.id])) {
      state.sequencePools[activity.id] = shuffle(activity.steps.map((step, index) => index));
    }
    return state.sequencePools[activity.id];
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
    const now = new Date();
    const today = now.toISOString().slice(0, 10);
    const correct = question.correctIndex === selectedIndex;
    const successfulDays = Array.isArray(previous.successfulDays) ? [...previous.successfulDays] : [];
    if (correct && !successfulDays.includes(today)) {
      successfulDays.push(today);
    }
    const next = {
      attempts: previous.attempts + 1,
      correctAttempts: previous.correctAttempts + (correct ? 1 : 0),
      incorrectAttempts: previous.incorrectAttempts + (correct ? 0 : 1),
      correctStreak: correct ? previous.correctStreak + 1 : 0,
      selectedIndex,
      lastCorrect: correct,
      successfulDays,
      lastSeenAt: now.toISOString(),
      nextReviewAt: correct
        ? addDaysIso(now, successfulDays.length >= 2 ? 7 : 1)
        : now.toISOString()
    };
    next.mastered = correct && successfulDays.length >= 2;
    next.everMastered = Boolean(previous.everMastered || next.mastered);

    state.progress.questions[questionId] = next;
    state.revealedQuestions.add(questionId);
    if (grantXp && correct && previous.attempts === 0) {
      state.progress.xp += 2;
    }
    if (grantXp && next.mastered && !previous.everMastered) {
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
    state.revealedActivities.add(activityId);
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
    const previous = getFlashcardRecord(cardId) || { seen: 0, masteredCount: 0, reviewCount: 0, successfulDays: [] };
    const now = new Date();
    const today = now.toISOString().slice(0, 10);
    const successfulDays = Array.isArray(previous.successfulDays) ? [...new Set(previous.successfulDays)] : [];
    if (decision === "mastered" && !successfulDays.includes(today)) {
      successfulDays.push(today);
    }
    const mastered = decision === "mastered" && successfulDays.length >= 2;
    const next = {
      seen: previous.seen + 1,
      masteredCount: previous.masteredCount + (decision === "mastered" ? 1 : 0),
      reviewCount: previous.reviewCount + (decision === "review" ? 1 : 0),
      lastDecision: decision,
      successfulDays,
      mastered,
      everMastered: Boolean(previous.everMastered || mastered),
      nextReviewAt: decision === "review" ? now.toISOString() : addDaysIso(now, mastered ? 7 : 1),
      lastSeenAt: now.toISOString()
    };
    state.progress.flashcards[cardId] = next;
    if (mastered && !previous.everMastered) {
      state.progress.xp += 3;
    }
    saveProgress();
  }

  function createFlashcardSession() {
    return {
      outcomes: {},
      currentStreak: 0,
      bestStreak: 0,
      lastResult: null
    };
  }

  function getFlashcardSessionStats() {
    const outcomes = Object.values(state.flashcardSession.outcomes);
    const known = outcomes.filter((decision) => decision === "mastered").length;
    const review = outcomes.filter((decision) => decision === "review").length;
    const total = known + review;
    return {
      known,
      review,
      total,
      accuracy: total ? Math.round((known / total) * 100) : 0
    };
  }

  function recordFlashcardSessionDecision(cardId, decision, deckSize) {
    state.flashcardSession.outcomes[cardId] = decision;
    if (decision === "mastered") {
      state.flashcardSession.currentStreak += 1;
      state.flashcardSession.bestStreak = Math.max(
        state.flashcardSession.bestStreak,
        state.flashcardSession.currentStreak
      );
    } else {
      state.flashcardSession.currentStreak = 0;
    }
    state.flashcardSession.lastResult = {
      cardId,
      decision,
      position: state.flashcardIndex + 1,
      deckSize: Math.max(deckSize, 1),
      retrying: false
    };
  }

  function focusFlashcardFeedback() {
    window.requestAnimationFrame(() => {
      document.querySelector(".flashcard-feedback")?.focus({ preventScroll: true });
    });
  }

  function moveToNextFlashcard() {
    const completedCardId = state.flashcardSession.lastResult?.cardId;
    const remainingCards = getFilteredFlashcards();
    const completedIndex = remainingCards.findIndex((card) => card.id === completedCardId);
    state.flashcardFlipped = false;
    state.flashcardIndex = remainingCards.length
      ? completedIndex >= 0
        ? (completedIndex + 1) % remainingCards.length
        : clamp(state.flashcardIndex, 0, remainingCards.length - 1)
      : 0;
    state.flashcardSession.lastResult = null;
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

  function getFlashcardScopeCards() {
    return flashcardBank.filter((card) => {
      if (state.flashcardChapter !== "ALL" && card.chapterId !== state.flashcardChapter) {
        return false;
      }
      if (state.flashcardType !== "ALL" && card.type !== state.flashcardType) {
        return false;
      }
      return true;
    });
  }

  function getFilteredFlashcards() {
    return getFlashcardScopeCards().filter((card) => matchesFlashcardStatus(card.id, state.flashcardStatus));
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
    if (filter === "FAILED") {
      return (getFlashcardRecord(cardId)?.reviewCount || 0) > 0;
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
    const records = cards.map((card) => getFlashcardRecord(card.id)).filter(Boolean);
    const masteredDecisions = records.reduce((total, record) => total + (record.masteredCount || 0), 0);
    const reviewDecisions = records.reduce((total, record) => total + (record.reviewCount || 0), 0);
    const decisions = masteredDecisions + reviewDecisions;
    return {
      newCount: cards.filter((card) => getFlashcardStatus(card.id) === "new").length,
      review: cards.filter((card) => getFlashcardStatus(card.id) === "review").length,
      mastered: cards.filter((card) => getFlashcardStatus(card.id) === "mastered").length,
      everFailed: cards.filter((card) => (getFlashcardRecord(card.id)?.reviewCount || 0) > 0).length,
      recallRate: decisions ? Math.round((masteredDecisions / decisions) * 100) : 0
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
    if (record.mastered && !isReviewDue(record.nextReviewAt)) {
      return "mastered";
    }
    if (!record.lastCorrect || isReviewDue(record.nextReviewAt)) {
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
    if (record.mastered && !isReviewDue(record.nextReviewAt)) {
      return "mastered";
    }
    if (record.lastDecision === "review" || isReviewDue(record.nextReviewAt)) {
      return "review";
    }
    return "learning";
  }

  function renderQuestionMeta(record) {
    if (!record) {
      return "Sin intentos aun";
    }
    const successfulDays = Array.isArray(record.successfulDays) ? record.successfulDays.length : 0;
    const reviewText = record.nextReviewAt ? ` - repaso ${formatReviewDate(record.nextReviewAt)}` : "";
    return `${record.attempts} intento(s) - ${successfulDays}/2 dias consolidados${reviewText}`;
  }

  function updateProgressUi() {
    const masteredQuestions = questionBank.filter((question) => getQuestionStatus(question.id) === "mastered").length;
    const reviewQuestions = questionBank.filter((question) => getQuestionStatus(question.id) === "review").length;
    const reviewCards = flashcardBank.filter((card) => getFlashcardStatus(card.id) === "review").length;
    const masteredActivities = activityBank.filter((activity) => getActivityStatus(activity.id) === "mastered").length;
    const progressPercent = questionBank.length ? Math.round((masteredQuestions / questionBank.length) * 100) : 0;

    dom.xpValue.textContent = String(state.progress.xp);
    dom.quizValue.textContent = `${masteredQuestions}/${questionBank.length}`;
    dom.progressFill.style.width = `${progressPercent}%`;
    dom.progressHint.textContent = `${reviewQuestions} preguntas y ${reviewCards} tarjetas por repasar. ${masteredActivities}/${activityBank.length} actividades completadas.`;
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
            successfulDays: [],
            mastered: false,
            everMastered: false,
            lastSeenAt: new Date().toISOString()
          };
        });
      }

      return normalizeProgressData({
        ...parsed,
        questions: parsed.questions || empty.questions
      });
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

  function normalizeQuestionRecords(value) {
    const records = sanitizeRecordMap(value);
    return Object.fromEntries(
      Object.entries(records).map(([questionId, record]) => {
        const successfulDays = Array.isArray(record.successfulDays) ? [...new Set(record.successfulDays)] : [];
        return [
          questionId,
          {
            ...record,
            successfulDays,
            mastered: Boolean(record.mastered && successfulDays.length >= 2),
            everMastered: Boolean(record.everMastered || (record.mastered && successfulDays.length >= 2))
          }
        ];
      })
    );
  }

  function normalizeFlashcardRecords(value) {
    const records = sanitizeRecordMap(value);
    return Object.fromEntries(
      Object.entries(records).map(([cardId, record]) => {
        const successfulDays = Array.isArray(record.successfulDays) ? [...new Set(record.successfulDays)] : [];
        const mastered = Boolean(record.mastered && successfulDays.length >= 2);
        return [
          cardId,
          {
            ...record,
            successfulDays,
            mastered,
            everMastered: Boolean(record.everMastered || mastered)
          }
        ];
      })
    );
  }

  function normalizeProgressData(value) {
    const parsed = value && typeof value === "object" ? value : {};
    return {
      xp: typeof parsed.xp === "number" && Number.isFinite(parsed.xp) ? Math.max(0, parsed.xp) : 0,
      questions: normalizeQuestionRecords(parsed.questions),
      activities: sanitizeRecordMap(parsed.activities),
      flashcards: normalizeFlashcardRecords(parsed.flashcards)
    };
  }

  function exportProgress() {
    const payload = {
      schema: "bach-mat1-progress",
      version: 2,
      exportedAt: new Date().toISOString(),
      progress: state.progress
    };
    const blob = new Blob([JSON.stringify(payload, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const anchor = document.createElement("a");
    anchor.href = url;
    anchor.download = `bach-mat1-progreso-${new Date().toISOString().slice(0, 10)}.json`;
    anchor.click();
    URL.revokeObjectURL(url);
    announceStudyMessage("Copia de progreso exportada.");
  }

  async function importProgress(event) {
    const input = event.currentTarget;
    const file = input.files && input.files[0];
    if (!file) {
      return;
    }
    try {
      const parsed = JSON.parse(await file.text());
      const imported = parsed && parsed.progress ? parsed.progress : parsed;
      if (!imported || typeof imported !== "object") {
        throw new Error("Formato no valido");
      }
      state.progress = normalizeProgressData(imported);
      state.flashcardSession = createFlashcardSession();
      state.revealedQuestions.clear();
      state.revealedActivities.clear();
      saveProgress();
      state.practiceIndex = 0;
      renderPractice();
      postRender();
      announceStudyMessage("Progreso importado correctamente.");
    } catch (error) {
      announceStudyMessage("No se pudo importar el archivo. Comprueba que sea una copia valida de Bach Mat 1.");
    } finally {
      input.value = "";
    }
  }

  function announceStudyMessage(message) {
    if (dom.routeAnnouncer) {
      dom.routeAnnouncer.textContent = message;
    }
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
    syncThemeControl(theme);
  }

  function toggleTheme() {
    const nextTheme = document.body.dataset.theme === "dark" ? "light" : "dark";
    document.body.dataset.theme = nextTheme;
    syncThemeControl(nextTheme);
    window.localStorage.setItem(STORAGE_KEYS.theme, nextTheme);
  }

  function syncThemeControl(theme) {
    const isDark = theme === "dark";
    let label = dom.themeToggle.querySelector(".topbar-button__label");
    if (!label) {
      label = document.createElement("span");
      label.className = "topbar-button__label";
      dom.themeToggle.appendChild(label);
    }
    label.textContent = isDark ? "Modo claro" : "Modo oscuro";
    dom.themeToggle.dataset.icon = isDark ? "sun" : "moon";
    dom.themeToggle.setAttribute("aria-pressed", String(isDark));
    dom.themeToggle.setAttribute("aria-label", isDark ? "Cambiar a modo claro" : "Cambiar a modo oscuro");
    replaceElementIcon(dom.themeToggle, dom.themeToggle.dataset.icon);
  }

  function registerServiceWorker() {
    if (!("serviceWorker" in navigator) || window.location.protocol === "file:") {
      return;
    }
    navigator.serviceWorker
      .register("./sw.js")
      .then((registration) => registration.update())
      .catch(() => undefined);
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
      window.setTimeout(() => window.location.reload(), 450);
      return;
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
        showTranslationFeedback("No se ha podido conectar con el servicio de traduccion. Comprueba la conexion e intentalo de nuevo.");
        window.setTimeout(hideTranslationFeedback, 4500);
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
    document.documentElement.lang = nextLanguage;
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

  function postRender(route) {
    wireActivityEvents();
    wireChapterSectionNavigation();
    decorateVisualLanguage(document, route || parseRoute());
    typesetMath(dom.app).then(() => {
      scrollToRouteTarget(route);
    });
    scheduleTranslationRefresh(getPreferredLanguage(), false);
  }

  function wireChapterSectionNavigation() {
    const select = document.getElementById("chapterSectionSelect");
    if (!select) {
      return;
    }
    select.addEventListener("change", (event) => {
      const chapterId = event.currentTarget.dataset.chapterId;
      const sectionId = event.currentTarget.value;
      if (chapterId && sectionId) {
        window.location.hash = `#/capitulo/${chapterId}/${sectionId}`;
      }
    });
  }

  function typesetMath(target) {
    if (!target || !window.MathJax || !window.MathJax.typesetPromise) {
      return Promise.resolve();
    }
    return window.MathJax.typesetPromise([target])
      .then(() => {
        target.querySelectorAll("mjx-container").forEach((container) => {
          container.classList.add("notranslate");
          container.setAttribute("translate", "no");
        });
      })
      .catch(() => undefined);
  }

  function scrollToRouteTarget(route) {
    const targetKey = route && route.name === "chapter" && route.sectionId ? `${route.chapterId}/${route.sectionId}` : "";
    if (!targetKey) {
      state.lastScrollTarget = "";
      return;
    }
    if (state.lastScrollTarget === targetKey) {
      return;
    }

    state.lastScrollTarget = targetKey;
    const targetId = route.sectionId.replace(/\./g, "-");
    const element = dom.app.querySelector(".chapter-section-nav") || document.getElementById(targetId);
    if (!element) {
      return;
    }
    window.requestAnimationFrame(() => {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    });
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
    const lateralStep = 0.05;
    const left = selected.fn(point - lateralStep);
    const right = selected.fn(point + lateralStep);
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
      <p><strong>Valores proximos:</strong> \\(f(x_0-0.05)\\) = ${Number.isFinite(left) ? `\\(${formatDecimal(left)}\\)` : "no definida"} - \\(f(x_0+0.05)\\) = ${Number.isFinite(right) ? `\\(${formatDecimal(right)}\\)` : "no definida"}</p>
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

  function updateRegressionLab() {
    const slider = document.getElementById("regressionOutlierSlider");
    if (!slider) {
      return;
    }
    const outlier = Number(slider.value);
    state.customLabs.regressionOutlier = outlier;
    const points = [3, 5, 7, 9, 11, outlier].map((y, index) => ({ x: index + 1, y }));
    const stats = calculateLinearStats(points);
    const success = Math.abs(stats.r) < 0.85;
    document.getElementById("regressionOutlierValue").textContent = String(outlier);
    document.getElementById("regressionDiagram").innerHTML = buildRegressionSvg(points, stats);
    document.getElementById("regressionFeedback").innerHTML = `
      <p><strong>Recta ajustada:</strong> \\(\\hat y=${formatSigned(stats.slope)}x${formatIntercept(stats.intercept)}\\)</p>
      <p><strong>Correlacion:</strong> \\(r=${formatDecimal(stats.r)}\\) - <strong>determinacion:</strong> \\(R^2=${formatDecimal(stats.r * stats.r)}\\)</p>
      <div class="quiz-feedback" data-state="${success ? "correct" : "wrong"}">
        <strong>${success ? "Has roto la aparente relacion lineal" : "La tendencia sigue siendo muy lineal"}</strong>
        <p>${
          success
            ? "Un solo punto influyente ha cambiado mucho el ajuste. Antes de interpretar r, siempre hay que mirar la nube."
            : "Aleja el ultimo punto de la tendencia y observa como cambian la recta, r y R cuadrado."
        }</p>
      </div>
    `;
    if (success) {
      unlockCustomActivity("ACT-C10-01");
    }
    typesetMath(document.getElementById("regressionFeedback"));
  }

  function calculateLinearStats(points) {
    const meanX = points.reduce((sum, point) => sum + point.x, 0) / points.length;
    const meanY = points.reduce((sum, point) => sum + point.y, 0) / points.length;
    const covariance = points.reduce((sum, point) => sum + (point.x - meanX) * (point.y - meanY), 0);
    const squareX = points.reduce((sum, point) => sum + (point.x - meanX) ** 2, 0);
    const squareY = points.reduce((sum, point) => sum + (point.y - meanY) ** 2, 0);
    const slope = covariance / squareX;
    return {
      slope,
      intercept: meanY - slope * meanX,
      r: squareY ? covariance / Math.sqrt(squareX * squareY) : 0
    };
  }

  function buildRegressionSvg(points, stats) {
    const xMap = (value) => 55 + ((value - 1) / 5) * 410;
    const yMap = (value) => 270 - (value / 40) * 230;
    const lineStart = stats.intercept + stats.slope;
    const lineEnd = stats.intercept + stats.slope * 6;
    return `
      <svg viewBox="0 0 520 310" role="img" aria-label="Nube de puntos y recta de regresion">
        <line class="lab-grid" x1="55" y1="270" x2="480" y2="270"></line>
        <line class="lab-grid" x1="55" y1="285" x2="55" y2="30"></line>
        <line class="regression-line" x1="${xMap(1)}" y1="${yMap(lineStart)}" x2="${xMap(6)}" y2="${yMap(lineEnd)}"></line>
        ${points.map((point, index) => `<circle class="${index === points.length - 1 ? "lab-point lab-point--alert" : "lab-point"}" cx="${xMap(point.x)}" cy="${yMap(point.y)}" r="7"></circle>`).join("")}
        <text x="470" y="295">x</text><text x="35" y="35">y</text>
      </svg>
    `;
  }

  function runProbabilitySimulation(count) {
    for (let index = 0; index < count; index += 1) {
      if (Math.random() < 0.5) {
        state.customLabs.probability.heads += 1;
      }
    }
    state.customLabs.probability.trials += count;
    updateProbabilityLab();
  }

  function updateProbabilityLab() {
    const diagram = document.getElementById("probabilityDiagram");
    const feedback = document.getElementById("probabilityFeedback");
    if (!diagram || !feedback) {
      return;
    }
    const { trials, heads } = state.customLabs.probability;
    const tails = trials - heads;
    const relative = trials ? heads / trials : 0;
    const headsPercent = trials ? relative * 100 : 0;
    const tailsPercent = trials ? 100 - headsPercent : 0;
    diagram.innerHTML = `
      <div><span>Caras</span><div><i style="width:${headsPercent}%"></i></div><strong>${heads}</strong></div>
      <div><span>Cruces</span><div><i style="width:${tailsPercent}%"></i></div><strong>${tails}</strong></div>
    `;
    feedback.innerHTML = trials
      ? `
          <p><strong>Ensayos:</strong> ${trials} - <strong>frecuencia relativa de cara:</strong> ${formatDecimal(relative)}</p>
          <div class="quiz-feedback" data-state="${trials >= 1000 ? "correct" : "wrong"}">
            <strong>${trials >= 1000 ? "Ya puedes analizar la estabilizacion" : "Amplia la simulacion"}</strong>
            <p>${trials >= 1000 ? "Al crecer el numero de ensayos, la frecuencia relativa tiende a acercarse a 0.5, aunque no tiene por que coincidir exactamente." : "Compara tandas pequenas y grandes para distinguir variabilidad de probabilidad teorica."}</p>
          </div>
        `
      : `
          <div class="quiz-feedback quiz-feedback--neutral">
            <strong>Simulacion preparada</strong>
            <p>Empieza con 10 lanzamientos y aumenta el numero para observar la ley de los grandes numeros.</p>
          </div>
        `;
    if (trials >= 1000) {
      unlockCustomActivity("ACT-C10-02");
    }
  }

  function getSelectedFunction() {
    const id = document.getElementById("functionSelect").value;
    return FUNCTION_LIBRARY.find((entry) => entry.id === id) || FUNCTION_LIBRARY[0];
  }

  function getPrimaryBlock(section, key) {
    return section[key] && section[key].html ? section[key] : null;
  }

  function getSection(sectionId) {
    for (const chapter of content.chapters) {
      const section = chapter.sections.find((item) => item.id === sectionId);
      if (section) {
        return section;
      }
    }
    return null;
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

  function getProblemInventoryForChapter(chapterId) {
    return supplements.problems.inventory.filter((item) => item.chapterId === chapterId);
  }

  function getProblemModelsForChapter(chapterId) {
    return supplements.problems.models.filter((item) => item.chapterId === chapterId);
  }

  function getExamInventoryForChapter(chapterId) {
    return supplements.exams.inventory.filter((item) => item.chapterId === chapterId);
  }

  function getExamMiniModelsForChapter(chapterId) {
    return supplements.exams.miniModels.filter((item) => item.chapterId === chapterId);
  }

  function getExamBlockModelsForChapter(chapterId) {
    return supplements.exams.blockModels.filter((item) => item.chapterIds.includes(chapterId));
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

  function renderTheoryLinksPanel(sectionIds = [], chapterIds = []) {
    const theoryLinks = [
      ...uniqueValues(sectionIds).map((sectionId) => {
        const chapterId = sectionId.split(".")[0];
        return `<a class="chip-link" href="#/capitulo/${chapterId}/${sectionId}">${sectionId} - ${getSectionTitle(sectionId)}</a>`;
      }),
      ...uniqueValues(chapterIds).map((chapterId) => {
        const chapter = getChapter(chapterId);
        return chapter ? `<a class="chip-link" href="#/capitulo/${chapterId}">${chapterId} - ${chapter.title}</a>` : "";
      })
    ]
      .filter(Boolean)
      .join("");

    if (!theoryLinks) {
      return "";
    }

    return `
      <section class="theory-links-panel">
        <p class="card-kicker">Teoria necesaria</p>
        <div class="quick-links">
          ${theoryLinks}
        </div>
      </section>
    `;
  }

  function uniqueValues(items) {
    return [...new Set((items || []).filter(Boolean))];
  }

  function buildQuestionBank(baseQuestions, activities) {
    const seenPrompts = new Set(baseQuestions.map((question) => normalizeQuestionPrompt(question.prompt)));
    const extras = activities
      .filter((activity) => activity.includeInQuiz && activity.type === "mcq")
      .filter((activity) => {
        const key = normalizeQuestionPrompt(activity.prompt);
        if (seenPrompts.has(key)) {
          return false;
        }
        seenPrompts.add(key);
        return true;
      })
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

  function getQuestionOptionOrder(question) {
    const current = state.questionOptionOrders[question.id];
    if (Array.isArray(current) && current.length === question.options.length) {
      return current;
    }
    const order = shuffle(question.options.map((option, index) => index));
    state.questionOptionOrders[question.id] = order;
    return order;
  }

  function normalizeQuestionPrompt(value) {
    return String(value || "")
      .toLowerCase()
      .replace(/\\[()\[\]]/g, "")
      .replace(/[.,;:!?¿¡]/g, "")
      .replace(/\s+/g, "");
  }

  function addDaysIso(date, days) {
    const next = new Date(date.getTime());
    next.setUTCDate(next.getUTCDate() + days);
    return next.toISOString();
  }

  function isReviewDue(value) {
    return Boolean(value && Date.parse(value) <= Date.now());
  }

  function formatReviewDate(value) {
    const parsed = new Date(value);
    if (Number.isNaN(parsed.getTime())) {
      return "pendiente";
    }
    return parsed.toLocaleDateString("es-ES", { day: "2-digit", month: "2-digit" });
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
            front: `Define con tus palabras y relaciona las ideas clave de: ${section.title}.`,
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
            front: `Sin mirar, enumera y justifica los pasos para resolver: ${section.title}.`,
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
            front: `Detecta el error clave que debes evitar y explica como prevenirlo en: ${section.title}.`,
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
