window.MATHBOOK_ACTIVITY_BANK = [
  {
    id: "ACT-C01-01",
    chapterId: "C01",
    sectionId: "C01.S01",
    type: "custom-number-classifier",
    title: "Clasificador numerico",
    difficulty: "base",
    prompt:
      "Clasifica cada numero en el conjunto mas pequeno posible y comprueba al instante si estas afinando bien la jerarquia \\(\\mathbb{N}\\subset\\mathbb{Z}\\subset\\mathbb{Q}\\subset\\mathbb{R}\\).",
    explanation:
      "Trabaja como en la seccion de clasificacion: primero simplifica, despues decide si el numero es natural, entero, racional o irracional."
  },
  {
    id: "ACT-C01-02",
    chapterId: "C01",
    sectionId: "C01.S02",
    type: "mcq",
    title: "Fraccion generatriz express",
    difficulty: "media",
    prompt: "La fraccion generatriz de \\(0.1\\overline{6}\\) es:",
    options: ["\\(\\dfrac{1}{6}\\)", "\\(\\dfrac{1}{9}\\)", "\\(\\dfrac{1}{12}\\)", "\\(\\dfrac{1}{15}\\)"],
    correctIndex: 0,
    explanation:
      "\\(0.1\\overline{6}=0.1666\\ldots\\). Si llamas \\(x=0.1666\\ldots\\), al operar con \\(10x\\) y \\(100x\\) se obtiene \\(x=\\dfrac{1}{6}\\).",
    includeInQuiz: true
  },
  {
    id: "ACT-C02-01",
    chapterId: "C02",
    sectionId: "C02.S04",
    type: "numeric",
    title: "Resto sin dividir",
    difficulty: "media",
    prompt: "Calcula el resto de dividir \\(P(x)=x^3-2x+1\\) entre \\(x-1\\).",
    placeholder: "Escribe el resto",
    answers: ["0"],
    tolerance: 0,
    explanation:
      "Por el teorema del resto basta evaluar \\(P(1)\\). Como \\(1^3-2\\cdot 1+1=0\\), el resto es \\(0\\).",
    hint: "Evalua el polinomio en el numero que anula el divisor."
  },
  {
    id: "ACT-C02-02",
    chapterId: "C02",
    sectionId: "C02.S06",
    type: "mcq",
    title: "Dominio antes de simplificar",
    difficulty: "media",
    prompt: "El dominio de \\(\\dfrac{x^2-9}{x-3}\\) es:",
    options: ["Todos los reales", "\\(\\mathbb{R}\\setminus\\{3\\}\\)", "\\(\\mathbb{R}\\setminus\\{-3\\}\\)", "\\((3,\\infty)\\)"],
    correctIndex: 1,
    explanation:
      "Aunque se simplifique a \\(x+3\\), el denominador original se anulaba en \\(x=3\\), que sigue estando prohibido.",
    includeInQuiz: true
  },
  {
    id: "ACT-C03-01",
    chapterId: "C03",
    sectionId: "C03.S02",
    type: "numeric",
    title: "Filtra la solucion extrana",
    difficulty: "media",
    prompt: "Resuelve \\(\\sqrt{x+5}=x-1\\) y escribe solo la solucion valida.",
    placeholder: "Solucion valida",
    answers: ["4"],
    tolerance: 0,
    explanation:
      "Tras elevar al cuadrado aparecen dos candidatas, \\(-1\\) y \\(4\\), pero solo \\(4\\) cumple la ecuacion inicial.",
    hint: "Despues de resolver, sustituye en la ecuacion original."
  },
  {
    id: "ACT-C03-02",
    chapterId: "C03",
    sectionId: "C03.S07",
    type: "mcq",
    title: "Sistema 2x2 directo",
    difficulty: "base",
    prompt: "El sistema \\(x+y=7\\), \\(x-y=1\\) tiene solucion:",
    options: ["\\((3,4)\\)", "\\((4,3)\\)", "\\((5,2)\\)", "\\((2,5)\\)"],
    correctIndex: 1,
    explanation:
      "Al sumar ambas ecuaciones se obtiene \\(2x=8\\), luego \\(x=4\\) y \\(y=3\\).",
    includeInQuiz: true
  },
  {
    id: "ACT-C04-01",
    chapterId: "C04",
    sectionId: "C04.S02",
    type: "mcq",
    title: "Signo entre raices",
    difficulty: "media",
    prompt: "La solucion de \\(x^2-5x+6<0\\) es:",
    options: ["\\((2,3)\\)", "\\((-\infty,2)\\cup(3,\infty)\\)", "\\([2,3]\\)", "\\((-\infty,\\infty)\\)"],
    correctIndex: 0,
    explanation:
      "Se factoriza como \\((x-2)(x-3)<0\\). Un producto de factores lineales es negativo entre sus raices.",
    includeInQuiz: true
  },
  {
    id: "ACT-C04-02",
    chapterId: "C04",
    sectionId: "C04.S06",
    type: "mcq",
    title: "Semiplano de prueba",
    difficulty: "base",
    prompt: "El punto \\((0,0)\\) pertenece al semiplano definido por \\(2x+y\\le 4\\):",
    options: ["Nunca", "Solo si \\(x>0\\)", "Si", "Solo si \\(y<0\\)"],
    correctIndex: 2,
    explanation:
      "Sustituir el punto de prueba es suficiente: \\(2\\cdot 0+0\\le 4\\) es verdadero.",
    includeInQuiz: true
  },
  {
    id: "ACT-C05-01",
    chapterId: "C05",
    sectionId: "C05.S03",
    type: "custom-trig-circle",
    title: "Reto del circulo trigonometrico",
    difficulty: "media",
    prompt:
      "Mueve el deslizador hasta llegar a \\(135^\\circ\\). Tu objetivo es reconocer un angulo del segundo cuadrante con \\(\\sin\\theta>0\\), \\(\\cos\\theta<0\\) y \\(\\tan\\theta<0\\).",
    explanation:
      "Cuando llegues a \\(135^\\circ\\), observa a la vez los signos y las coordenadas del punto para fijar el cuadrante."
  },
  {
    id: "ACT-C05-02",
    chapterId: "C05",
    sectionId: "C05.S04",
    type: "mcq",
    title: "Signos por cuadrantes",
    difficulty: "media",
    prompt: "Si \\(\\sin x=\\dfrac{3}{5}\\) y \\(x\\) esta en el segundo cuadrante, entonces \\(\\cos x\\) vale:",
    options: ["\\(\\dfrac{4}{5}\\)", "\\(-\\dfrac{4}{5}\\)", "\\(-\\dfrac{3}{5}\\)", "\\(\\dfrac{5}{4}\\)"],
    correctIndex: 1,
    explanation:
      "Por la identidad fundamental, \\(\\cos x=\\pm\\dfrac{4}{5}\\). En el segundo cuadrante el coseno es negativo.",
    includeInQuiz: true
  },
  {
    id: "ACT-C06-01",
    chapterId: "C06",
    sectionId: "C06.S04",
    type: "custom-vector-lab",
    title: "Hazlos perpendiculares",
    difficulty: "media",
    prompt:
      "Ajusta las coordenadas de \\(u\\) y \\(v\\) hasta que el producto escalar sea \\(0\\). El laboratorio te dira en tiempo real si ya has conseguido perpendicularidad.",
    explanation:
      "Dos vectores no nulos son perpendiculares cuando su producto escalar vale cero."
  },
  {
    id: "ACT-C06-02",
    chapterId: "C06",
    sectionId: "C06.S01",
    type: "mcq",
    title: "Base o dependencia",
    difficulty: "base",
    prompt: "Los vectores \\((1,3)\\) y \\((2,6)\\) forman base de \\(\\mathbb{R}^2\\):",
    options: [
      "Si, porque tienen dos componentes",
      "No, porque son proporcionales",
      "Si, porque su producto escalar es positivo",
      "No, porque ambos tienen coordenadas enteras"
    ],
    correctIndex: 1,
    explanation:
      "El segundo vector es el doble del primero. Son dependientes y no forman base.",
    includeInQuiz: true
  },
  {
    id: "ACT-C07-01",
    chapterId: "C07",
    sectionId: "C07.S01",
    type: "mcq",
    title: "Recta por punto y pendiente",
    difficulty: "base",
    prompt: "La recta que pasa por \\((1,2)\\) y tiene pendiente \\(-3\\) es:",
    options: ["\\(y=-3x+5\\)", "\\(y=3x-1\\)", "\\(y=-3x-1\\)", "\\(y=x+1\\)"],
    correctIndex: 0,
    explanation:
      "Usa la forma punto-pendiente: \\(y-2=-3(x-1)\\). Al despejar, \\(y=-3x+5\\).",
    includeInQuiz: true
  },
  {
    id: "ACT-C07-02",
    chapterId: "C07",
    sectionId: "C07.S06",
    type: "numeric",
    title: "Distancia entre dos puntos",
    difficulty: "base",
    prompt: "Calcula la distancia entre \\(A(1,2)\\) y \\(B(4,6)\\).",
    placeholder: "Distancia",
    answers: ["5"],
    tolerance: 0,
    explanation:
      "\\(d=\\sqrt{(4-1)^2+(6-2)^2}=\\sqrt{9+16}=5\\).",
    hint: "Aplica la formula de distancia en el plano."
  },
  {
    id: "ACT-C08-01",
    chapterId: "C08",
    sectionId: "C08.S05",
    type: "numeric",
    title: "Limite tras factorizar",
    difficulty: "media",
    prompt: "Calcula \\(\\lim_{x\\to 2}\\dfrac{x^2-4}{x-2}\\).",
    placeholder: "Valor del limite",
    answers: ["4"],
    tolerance: 0,
    explanation:
      "Se factoriza \\(x^2-4=(x-2)(x+2)\\). Para \\(x\\neq 2\\), la expresion equivale a \\(x+2\\), asi que el limite es \\(4\\).",
    hint: "Intenta simplificar antes de sustituir."
  },
  {
    id: "ACT-C08-02",
    chapterId: "C08",
    sectionId: "C08.S01",
    type: "mcq",
    title: "Dominio de un logaritmo",
    difficulty: "base",
    prompt: "El dominio de \\(f(x)=\\ln(x-2)\\) es:",
    options: ["\\((2,\\infty)\\)", "\\([2,\\infty)\\)", "\\(\\mathbb{R}\\setminus\\{2\\}\\)", "\\((-\infty,2)\\)"],
    correctIndex: 0,
    explanation:
      "El argumento del logaritmo debe ser positivo: \\(x-2>0\\), luego \\(x>2\\).",
    includeInQuiz: true
  },
  {
    id: "ACT-C09-01",
    chapterId: "C09",
    sectionId: "C09.S02",
    type: "custom-function-lab",
    title: "Busca la tangente horizontal",
    difficulty: "media",
    prompt:
      "En el explorador, selecciona la parabola \\(f(x)=x^2-2x-3\\) y mueve el punto hasta el vertice, donde la pendiente vale \\(0\\).",
    explanation:
      "El vertice de la parabola aparece en \\(x=1\\). Alli la tangente es horizontal y la derivada se anula."
  },
  {
    id: "ACT-C09-02",
    chapterId: "C09",
    sectionId: "C09.S01",
    type: "numeric",
    title: "Derivada en un punto",
    difficulty: "base",
    prompt: "Si \\(f(x)=x^3-3x\\), calcula \\(f'(2)\\).",
    placeholder: "Valor de la derivada",
    answers: ["9"],
    tolerance: 0,
    explanation:
      "\\(f'(x)=3x^2-3\\). Por tanto, \\(f'(2)=3\\cdot 4-3=9\\).",
    hint: "Deriva primero y sustituye despues."
  },
  {
    id: "ACT-R10-01",
    chapterId: "R10",
    sectionId: "R10.S02",
    type: "mcq",
    title: "Estrategia con dominio",
    difficulty: "estrategia",
    prompt:
      "Si simplificas una fraccion algebraica y desaparece un factor del denominador, debes:",
    options: [
      "Olvidar la restriccion original",
      "Conservar la restriccion del dominio inicial",
      "Cambiar todas las soluciones por inequaciones",
      "Rehacer el problema con valores numericos"
    ],
    correctIndex: 1,
    explanation:
      "Simplificar no borra los puntos donde la expresion original no estaba definida.",
    includeInQuiz: true
  },
  {
    id: "ACT-R10-02",
    chapterId: "R10",
    sectionId: "R10.S05",
    type: "mcq",
    title: "Optimizacion final",
    difficulty: "estrategia",
    prompt: "Entre los rectangulos de perimetro \\(20\\), el area maxima la tiene:",
    options: [
      "El rectangulo \\(6\\times 4\\)",
      "El cuadrado de lado \\(5\\)",
      "El rectangulo \\(8\\times 2\\)",
      "Cualquier rectangulo con diagonales iguales"
    ],
    correctIndex: 1,
    explanation:
      "Si \\(x+y=10\\), entonces \\(A(x)=x(10-x)\\) es una parabola con maximo en \\(x=5\\).",
    includeInQuiz: true
  }
];
