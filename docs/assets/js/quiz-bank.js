window.MATHBOOK_QUIZ_BANK = [
  {
    id: "Q-C01-01",
    chapterId: "C01",
    difficulty: "base",
    prompt: "El conjunto mas pequeno al que pertenece \\(\\sqrt{81}-10\\) es:",
    options: ["\\(\\mathbb{N}\\)", "\\(\\mathbb{Z}\\)", "\\(\\mathbb{Q}\\setminus\\mathbb{Z}\\)", "\\(\\mathbb{R}\\setminus\\mathbb{Q}\\)"],
    correctIndex: 1,
    explanation: "\\(\\sqrt{81}-10=9-10=-1\\), asi que el numero es entero y pertenece a \\(\\mathbb{Z}\\)."
  },
  {
    id: "Q-C01-02",
    chapterId: "C01",
    difficulty: "media",
    prompt: "La fraccion generatriz de \\(0.\\overline{27}\\) es:",
    options: ["\\(\\dfrac{27}{90}\\)", "\\(\\dfrac{3}{11}\\)", "\\(\\dfrac{27}{100}\\)", "\\(\\dfrac{9}{22}\\)"],
    correctIndex: 1,
    explanation: "Como el periodo tiene dos cifras, \\(0.\\overline{27}=\\dfrac{27}{99}=\\dfrac{3}{11}\\)."
  },
  {
    id: "Q-C02-01",
    chapterId: "C02",
    difficulty: "base",
    prompt: "El resto de dividir \\(P(x)=x^3-2x+1\\) entre \\(x-1\\) es:",
    options: ["\\(-2\\)", "\\(0\\)", "\\(1\\)", "\\(2\\)"],
    correctIndex: 1,
    explanation: "Por el teorema del resto, el resto es \\(P(1)=1-2+1=0\\)."
  },
  {
    id: "Q-C02-02",
    chapterId: "C02",
    difficulty: "media",
    prompt: "El dominio de \\(\\dfrac{x^2-9}{x-3}\\) es:",
    options: ["Todos los reales", "\\(\\mathbb{R}\\setminus\\{3\\}\\)", "\\(\\mathbb{R}\\setminus\\{-3\\}\\)", "\\((3,\\infty)\\)"],
    correctIndex: 1,
    explanation: "Aunque la expresion se simplifique, el denominador original se anula en \\(x=3\\), que sigue prohibido."
  },
  {
    id: "Q-C03-01",
    chapterId: "C03",
    difficulty: "media",
    prompt: "La ecuacion \\(\\sqrt{x+5}=x-1\\) tiene por solucion:",
    options: ["\\(x=-1\\)", "\\(x=1\\)", "\\(x=4\\)", "\\(x=6\\)"],
    correctIndex: 2,
    explanation: "Tras elevar al cuadrado aparece \\(x^2-3x-4=0\\), con candidatas \\(-1\\) y \\(4\\). Solo \\(4\\) cumple \\(x\\ge 1\\)."
  },
  {
    id: "Q-C03-02",
    chapterId: "C03",
    difficulty: "base",
    prompt: "El sistema \\(x+y=7\\), \\(x-y=1\\) tiene solucion:",
    options: ["\\((3,4)\\)", "\\((4,3)\\)", "\\((5,2)\\)", "\\((2,5)\\)"],
    correctIndex: 1,
    explanation: "Al sumar ambas ecuaciones se obtiene \\(2x=8\\), luego \\(x=4\\) y \\(y=3\\)."
  },
  {
    id: "Q-C04-01",
    chapterId: "C04",
    difficulty: "media",
    prompt: "La solucion de \\(x^2-5x+6<0\\) es:",
    options: ["\\((2,3)\\)", "\\((-\infty,2)\\cup(3,\infty)\\)", "\\([2,3]\\)", "\\((-\infty,\\infty)\\)"],
    correctIndex: 0,
    explanation: "Se factoriza como \\((x-2)(x-3)<0\\). Un producto de dos factores lineales es negativo entre sus raices."
  },
  {
    id: "Q-C04-02",
    chapterId: "C04",
    difficulty: "base",
    prompt: "El punto \\((0,0)\\) pertenece al semiplano definido por \\(2x+y\\le 4\\):",
    options: ["Siempre no", "Solo si \\(x>0\\)", "Si", "Solo si \\(y<0\\)"],
    correctIndex: 2,
    explanation: "Al sustituir \\((0,0)\\) queda \\(0\\le 4\\), que es verdadero."
  },
  {
    id: "Q-C05-01",
    chapterId: "C05",
    difficulty: "base",
    prompt: "La conversion de \\(210^\\circ\\) a radianes es:",
    options: ["\\(\\dfrac{5\\pi}{6}\\)", "\\(\\dfrac{7\\pi}{6}\\)", "\\(\\dfrac{3\\pi}{2}\\)", "\\(\\dfrac{4\\pi}{3}\\)"],
    correctIndex: 1,
    explanation: "\\(210^\\circ\\cdot\\dfrac{\\pi}{180}=\\dfrac{7\\pi}{6}\\)."
  },
  {
    id: "Q-C05-02",
    chapterId: "C05",
    difficulty: "media",
    prompt: "Si \\(\\sin x=\\dfrac{3}{5}\\) y \\(x\\) esta en el segundo cuadrante, entonces \\(\\cos x\\) vale:",
    options: ["\\(\\dfrac{4}{5}\\)", "\\(-\\dfrac{4}{5}\\)", "\\(-\\dfrac{3}{5}\\)", "\\(\\dfrac{5}{4}\\)"],
    correctIndex: 1,
    explanation: "Por la identidad fundamental, \\(\\cos x=\\pm\\dfrac{4}{5}\\). En el segundo cuadrante el coseno es negativo."
  },
  {
    id: "Q-C06-01",
    chapterId: "C06",
    difficulty: "base",
    prompt: "El producto escalar de \\((3,2)\\) y \\((-1,4)\\) es:",
    options: ["\\(2\\)", "\\(5\\)", "\\(7\\)", "\\(11\\)"],
    correctIndex: 1,
    explanation: "\\((3,2)\\cdot(-1,4)=3(-1)+2\\cdot 4=-3+8=5\\)."
  },
  {
    id: "Q-C06-02",
    chapterId: "C06",
    difficulty: "media",
    prompt: "Los vectores \\((1,3)\\) y \\((2,6)\\) forman base de \\(\\mathbb{R}^2\\):",
    options: ["Si, porque tienen dos componentes", "No, porque son proporcionales", "Si, porque su producto escalar es positivo", "No, porque ambos tienen coordenadas enteras"],
    correctIndex: 1,
    explanation: "El segundo vector es el doble del primero. Son dependientes y no forman base."
  },
  {
    id: "Q-C07-01",
    chapterId: "C07",
    difficulty: "base",
    prompt: "La recta que pasa por \\((1,2)\\) y tiene pendiente \\(-3\\) es:",
    options: ["\\(y=-3x+5\\)", "\\(y=3x-1\\)", "\\(y=-3x-1\\)", "\\(y=x+1\\)"],
    correctIndex: 0,
    explanation: "Usando la forma punto-pendiente, \\(y-2=-3(x-1)\\), luego \\(y=-3x+5\\)."
  },
  {
    id: "Q-C07-02",
    chapterId: "C07",
    difficulty: "base",
    prompt: "La distancia entre \\(A(1,2)\\) y \\(B(4,6)\\) es:",
    options: ["\\(4\\)", "\\(5\\)", "\\(\\sqrt{13}\\)", "\\(7\\)"],
    correctIndex: 1,
    explanation: "\\(d=\\sqrt{(4-1)^2+(6-2)^2}=\\sqrt{9+16}=5\\)."
  },
  {
    id: "Q-C08-01",
    chapterId: "C08",
    difficulty: "base",
    prompt: "El dominio de \\(f(x)=\\ln(x-2)\\) es:",
    options: ["\\((2,\\infty)\\)", "\\([2,\\infty)\\)", "\\(\\mathbb{R}\\setminus\\{2\\}\\)", "\\((-\infty,2)\\)"],
    correctIndex: 0,
    explanation: "El argumento del logaritmo debe ser positivo: \\(x-2>0\\), luego \\(x>2\\)."
  },
  {
    id: "Q-C08-02",
    chapterId: "C08",
    difficulty: "media",
    prompt: "El limite \\(\\lim_{x\\to 2}\\dfrac{x^2-4}{x-2}\\) vale:",
    options: ["\\(0\\)", "\\(2\\)", "\\(4\\)", "No existe"],
    correctIndex: 2,
    explanation: "Se factoriza \\(x^2-4=(x-2)(x+2)\\). Para \\(x\\ne 2\\), la expresion es \\(x+2\\), y el limite es \\(4\\)."
  },
  {
    id: "Q-C09-01",
    chapterId: "C09",
    difficulty: "base",
    prompt: "La derivada de \\(f(x)=x^3-3x\\) es:",
    options: ["\\(3x^2-3\\)", "\\(x^2-3\\)", "\\(3x^2\\)", "\\(x^3-3\\)"],
    correctIndex: 0,
    explanation: "Se deriva termino a termino: \\((x^3)'=3x^2\\) y \\((-3x)'=-3\\)."
  },
  {
    id: "Q-C09-02",
    chapterId: "C09",
    difficulty: "media",
    prompt: "La tangente a \\(y=x^2\\) en \\(x=2\\) es:",
    options: ["\\(y=2x\\)", "\\(y=4x-4\\)", "\\(y=4x+4\\)", "\\(y=2x-4\\)"],
    correctIndex: 1,
    explanation: "La derivada es \\(2x\\), asi que la pendiente en \\(x=2\\) es \\(4\\). Como pasa por \\((2,4)\\), resulta \\(y-4=4(x-2)\\)."
  },
  {
    id: "Q-R10-01",
    chapterId: "R10",
    difficulty: "estrategia",
    prompt: "Si simplificas una fraccion algebraica y desaparece un factor del denominador, debes:",
    options: ["Olvidar la restriccion original", "Conservar la restriccion del dominio inicial", "Cambiar todas las soluciones por inequaciones", "Rehacer el problema con valores numericos"],
    correctIndex: 1,
    explanation: "Simplificar no cambia el hecho de que la expresion original no estaba definida en ciertos puntos."
  },
  {
    id: "Q-R10-02",
    chapterId: "R10",
    difficulty: "estrategia",
    prompt: "Entre los rectangulos de perimetro \\(20\\), el area maxima la tiene:",
    options: ["El rectangulo \\(6\\times 4\\)", "El cuadrado de lado \\(5\\)", "El rectangulo \\(8\\times 2\\)", "Cualquier rectangulo con diagonales iguales"],
    correctIndex: 1,
    explanation: "Si \\(x+y=10\\), el area es \\(A(x)=x(10-x)\\), una parabola con maximo en \\(x=5\\)."
  }
];
