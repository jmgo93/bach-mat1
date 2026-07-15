window.MATHBOOK_CONTENT = {
  "meta": {
    "title": "Matematicas I Interactivas",
    "subtitle": "1º de Bachillerato - teoria, ejemplos resueltos, tests y laboratorios interactivos",
    "generatedOn": "2026-07-15 17:57",
    "chapterCount": 11,
    "sectionCount": 91
  },
  "chapters": [
    {
      "id": "C01",
      "slug": "01_numeros_reales",
      "title": "Numeros reales y herramientas numericas",
      "summaryHtml": "<p>Este capitulo desarrolla las secciones <code>C01.S01-C01.S07</code> de la matriz de cobertura a partir de <code>sources/Relacion tema 1.pdf</code>. El objetivo es convertir las tipologias del tema 1 en procedimientos reconocibles, con ejemplo resuelto, ejercicios guiados y practica graduada.</p>",
      "studyRouteHtml": "",
      "sectionCount": 7,
      "sections": [
        {
          "id": "C01.S01",
          "title": "Clasificacion de numeros y conjuntos numericos",
          "rawTitle": "[C01.S01] Clasificacion de numeros y conjuntos numericos",
          "objectives": [
            {
              "label": "Objetivos de aprendizaje",
              "html": "<ul><li><p>Identificar el conjunto mas pequeno al que pertenece un numero.</p></li><li><p>Distinguir naturales, enteros, racionales, irracionales y reales.</p></li></ul>"
            }
          ],
          "prerequisites": [
            {
              "label": "Prerrequisitos",
              "html": "<ul><li><p>Leer fracciones, decimales y radicales sencillos.</p></li></ul>"
            }
          ],
          "theory": {
            "title": "Idea minima",
            "titleText": "Idea minima",
            "tagId": "",
            "html": "<div class=\"math-display\">\\[\n\\mathbb{N}\\subset \\mathbb{Z}\\subset \\mathbb{Q}\\subset \\mathbb{R}.\n\\]</div><p>Los irracionales son los reales que no son racionales. Un decimal exacto o periodico es racional. Una raiz como \\(\\sqrt{49}\\) puede simplificarse y cambiar de conjunto.</p>"
          },
          "method": {
            "title": "Como reconocer y resolver",
            "titleText": "Como reconocer y resolver",
            "tagId": "",
            "html": "<ol><li><p>Simplifica el numero si aparece una raiz o una operacion.</p></li><li><p>Decide si el resultado es natural, entero, racional o irracional.</p></li><li><p>Da, si se pide, el conjunto mas pequeno al que pertenece.</p></li></ol>"
          },
          "solvedExample": {
            "title": "[EX-C01.S01-01] Clasificar con el conjunto mas pequeno",
            "titleText": "Clasificar con el conjunto mas pequeno",
            "tagId": "EX-C01.S01-01",
            "html": "<p>Clasifica los numeros \\(-7\\), \\(0.125\\), \\(\\sqrt{2}\\) y \\(\\sqrt{49}\\).</p><p><strong>Desarrollo.</strong></p><ul><li><p>\\(-7\\) es entero, asi que el conjunto mas pequeno es \\(\\mathbb{Z}\\).</p></li><li><p>\\(0.125\\) es un decimal exacto, luego es racional: \\(\\mathbb{Q}\\).</p></li><li><p>\\(\\sqrt{2}\\) no puede escribirse como fraccion exacta, luego es irracional.</p></li><li><p>\\(\\sqrt{49}=7\\), asi que pertenece a \\(\\mathbb{N}\\).</p></li></ul><p><strong>Respuesta final.</strong></p><div class=\"math-display\">\\[\n-7\\in\\mathbb{Z},\\qquad 0.125\\in\\mathbb{Q},\\qquad \\sqrt{2}\\in\\mathbb{R}\\setminus\\mathbb{Q},\n\\qquad \\sqrt{49}\\in\\mathbb{N}.\n\\]</div>"
          },
          "commonError": {
            "title": "No simplificar antes de clasificar",
            "titleText": "No simplificar antes de clasificar",
            "tagId": "",
            "html": "<p>Ver \\(\\sqrt{49}\\) y marcarlo como irracional es un error frecuente. Antes de clasificar hay que simplificar: \\(\\sqrt{49}=7\\), que es natural.</p>"
          },
          "guidedExercises": [
            {
              "tagId": "GX-C01.S01-01",
              "title": "Clasificacion de un entero oculto",
              "promptHtml": "<p>Clasifica \\(-\\dfrac{\\sqrt{16}}{2}\\).</p><p><strong>Pista 1.</strong> Empieza por simplificar la raiz.</p><p><strong>Pista 2.</strong> El resultado final es un entero.</p>",
              "answerHtml": "<p>\\(-\\dfrac{\\sqrt{16}}{2}=-2\\), luego pertenece a \\(\\mathbb{Z}\\).</p>",
              "solutionHtml": "<div class=\"math-display\">\\[\n-\\frac{\\sqrt{16}}{2}=-\\frac{4}{2}=-2.\n\\]</div><p>El conjunto mas pequeno al que pertenece es \\(\\mathbb{Z}\\).</p>"
            },
            {
              "tagId": "GX-C01.S01-02",
              "title": "Clasificacion de un decimal periodico",
              "promptHtml": "<p>Clasifica \\(0.\\overline{3}\\).</p><p><strong>Pista 1.</strong> Todo decimal periodico es racional.</p>",
              "answerHtml": "<p>\\(0.\\overline{3}\\in\\mathbb{Q}\\).</p>",
              "solutionHtml": "<p>El numero \\(0.\\overline{3}\\) es un decimal periodico, asi que puede escribirse como fraccion:</p><div class=\"math-display\">\\[\n0.\\overline{3}=\\frac{1}{3}.\n\\]</div><p>Por tanto, pertenece a \\(\\mathbb{Q}\\).</p>"
            }
          ],
          "practice": {
            "label": "Practica autonoma graduada",
            "items": [
              {
                "tagId": "PX-C01.S01-01",
                "prompt": "Clasifica \\(\\sqrt{7}\\)."
              },
              {
                "tagId": "PX-C01.S01-02",
                "prompt": "Clasifica \\(\\dfrac{5}{4}\\)."
              },
              {
                "tagId": "PX-C01.S01-03",
                "prompt": "Clasifica \\(-\\sqrt{81}\\)."
              },
              {
                "tagId": "PX-C01.S01-04",
                "prompt": "Clasifica \\(0\\)."
              },
              {
                "tagId": "PX-C01.S01-05",
                "prompt": "Clasifica \\(2-\\sqrt{4}\\)."
              },
              {
                "tagId": "PX-C01.S01-06",
                "prompt": "Clasifica \\(3.1415\\)."
              }
            ],
            "answersHtml": "<ol><li><p>\\(\\mathbb{R}\\setminus\\mathbb{Q}\\)</p></li><li><p>\\(\\mathbb{Q}\\)</p></li><li><p>\\(\\mathbb{Z}\\)</p></li><li><p>\\(\\mathbb{Z}\\)</p></li><li><p>\\(\\mathbb{Z}\\)</p></li><li><p>\\(\\mathbb{Q}\\)</p></li></ol>",
            "solutionsHtml": "<ol><li><p>\\(\\sqrt{7}\\) no es raiz exacta, luego es irracional.</p></li><li><p>\\(\\frac{5}{4}\\) es una fraccion de enteros con denominador no nulo, luego es racional.</p></li><li><p>\\(-\\sqrt{81}=-9\\), luego es entero.</p></li><li><p>\\(0\\) pertenece a \\(\\mathbb{Z}\\).</p></li><li><p>\\(2-\\sqrt{4}=2-2=0\\), luego pertenece a \\(\\mathbb{Z}\\).</p></li><li><p>\\(3.1415\\) es decimal exacto, luego es racional.</p></li></ol>"
          },
          "challenge": {}
        },
        {
          "id": "C01.S02",
          "title": "Decimales y fraccion generatriz",
          "rawTitle": "[C01.S02] Decimales y fraccion generatriz",
          "objectives": [
            {
              "label": "Objetivos de aprendizaje",
              "html": "<ul><li><p>Distinguir decimales exactos, periodicos puros y periodicos mixtos.</p></li><li><p>Hallar la fraccion generatriz de un decimal.</p></li></ul>"
            }
          ],
          "prerequisites": [
            {
              "label": "Prerrequisitos",
              "html": "<ul><li><p>Operar con ecuaciones lineales sencillas.</p></li></ul>"
            }
          ],
          "theory": {
            "title": "Idea minima",
            "titleText": "Idea minima",
            "tagId": "",
            "html": "<p>Un decimal exacto siempre es racional. Tambien lo es un decimal periodico. Para hallar su fraccion generatriz se usa una ecuacion: se multiplica por potencias de \\(10\\) hasta alinear la parte periodica y luego se resta.</p>"
          },
          "method": {
            "title": "Como reconocer y resolver",
            "titleText": "Como reconocer y resolver",
            "tagId": "",
            "html": "<ol><li><p>Decide si el decimal es exacto, periodico puro o mixto.</p></li><li><p>Si es exacto, escribe el numero sin coma sobre una potencia de \\(10\\).</p></li><li><p>Si es periodico, llama \\(x\\) al numero y alinea el periodo con potencias de \\(10\\).</p></li><li><p>Resta las ecuaciones y despeja \\(x\\).</p></li></ol>"
          },
          "solvedExample": {
            "title": "[EX-C01.S02-01] Fraccion generatriz de un decimal mixto",
            "titleText": "Fraccion generatriz de un decimal mixto",
            "tagId": "EX-C01.S02-01",
            "html": "<p>Halla la fraccion generatriz de \\(1.2\\overline{3}\\).</p><p><strong>Desarrollo.</strong> Sea \\(x=1.2\\overline{3}\\).</p><div class=\"math-display\">\\[\n10x=12.\\overline{3},\n\\qquad\n100x=123.\\overline{3}.\n\\]</div><p>Restamos:</p><div class=\"math-display\">\\[\n100x-10x=123.\\overline{3}-12.\\overline{3}=111.\n\\]</div><p>Entonces</p><div class=\"math-display\">\\[\n90x=111\n\\qquad\\Longrightarrow\\qquad\nx=\\frac{111}{90}=\\frac{37}{30}.\n\\]</div><p><strong>Respuesta final.</strong></p><div class=\"math-display\">\\[\n1.2\\overline{3}=\\frac{37}{30}.\n\\]</div>"
          },
          "commonError": {
            "title": "Mover la coma sin alinear el periodo",
            "titleText": "Mover la coma sin alinear el periodo",
            "tagId": "",
            "html": "<p>En un decimal mixto no basta con multiplicar una sola vez por \\(10\\). Hay que conseguir que la parte periodica quede igual en las dos expresiones antes de restar.</p>"
          },
          "guidedExercises": [
            {
              "tagId": "GX-C01.S02-01",
              "title": "Periodico puro",
              "promptHtml": "<p>Halla la fraccion generatriz de \\(0.\\overline{18}\\).</p><p><strong>Pista 1.</strong> El periodo tiene dos cifras.</p>",
              "answerHtml": "<div class=\"math-display\">\\[\n0.\\overline{18}=\\frac{2}{11}.\n\\]</div>",
              "solutionHtml": "<p>Sea \\(x=0.\\overline{18}\\). Entonces</p><div class=\"math-display\">\\[\n100x=18.\\overline{18}.\n\\]</div><p>Restamos:</p><div class=\"math-display\">\\[\n100x-x=18\n\\qquad\\Longrightarrow\\qquad\n99x=18\n\\qquad\\Longrightarrow\\qquad\nx=\\frac{18}{99}=\\frac{2}{11}.\n\\]</div>"
            },
            {
              "tagId": "GX-C01.S02-02",
              "title": "Decimal exacto",
              "promptHtml": "<p>Escribe \\(2.45\\) como fraccion irreducible.</p><p><strong>Pista 1.</strong> Un decimal exacto se escribe sobre una potencia de \\(10\\).</p>",
              "answerHtml": "<div class=\"math-display\">\\[\n2.45=\\frac{49}{20}.\n\\]</div>",
              "solutionHtml": "<div class=\"math-display\">\\[\n2.45=\\frac{245}{100}=\\frac{49}{20}.\n\\]</div>"
            }
          ],
          "practice": {
            "label": "Practica autonoma graduada",
            "items": [
              {
                "tagId": "PX-C01.S02-01",
                "prompt": "Halla la fraccion generatriz de \\(0.7\\overline{2}\\)."
              },
              {
                "tagId": "PX-C01.S02-02",
                "prompt": "Halla la fraccion generatriz de \\(3.\\overline{5}\\)."
              },
              {
                "tagId": "PX-C01.S02-03",
                "prompt": "Escribe \\(0.125\\) como fraccion irreducible."
              },
              {
                "tagId": "PX-C01.S02-04",
                "prompt": "Halla la fraccion generatriz de \\(2.0\\overline{6}\\)."
              },
              {
                "tagId": "PX-C01.S02-05",
                "prompt": "Indica si \\(7/40\\) produce un decimal exacto o periodico."
              },
              {
                "tagId": "PX-C01.S02-06",
                "prompt": "Indica si \\(5/12\\) produce un decimal exacto o periodico."
              }
            ],
            "answersHtml": "<ol><li><p>\\(\\dfrac{13}{18}\\)</p></li><li><p>\\(\\dfrac{32}{9}\\)</p></li><li><p>\\(\\dfrac{1}{8}\\)</p></li><li><p>\\(\\dfrac{31}{15}\\)</p></li><li><p>Decimal exacto</p></li><li><p>Decimal periodico mixto</p></li></ol>",
            "solutionsHtml": "<ol><li><p>Sea \\(x=0.7\\overline{2}\\). Entonces \\(10x=7.\\overline{2}\\) y \\(100x=72.\\overline{2}\\). Restando:</p><div class=\"math-display\">\\[\n  90x=65\\Longrightarrow x=\\frac{65}{90}=\\frac{13}{18}.\n  \\]</div></li><li><p>Sea \\(x=3.\\overline{5}\\). Entonces \\(10x=35.\\overline{5}\\). Restando:</p><div class=\"math-display\">\\[\n  10x-x=32\\Longrightarrow 9x=32\\Longrightarrow x=\\frac{32}{9}.\n  \\]</div></li><li><div class=\"math-display\">\\[\n  0.125=\\frac{125}{1000}=\\frac{1}{8}.\n  \\]</div></li><li><p>Sea \\(x=2.0\\overline{6}\\). Entonces \\(10x=20.\\overline{6}\\) y \\(100x=206.\\overline{6}\\). Restando:</p><div class=\"math-display\">\\[\n  90x=186\\Longrightarrow x=\\frac{186}{90}=\\frac{31}{15}.\n  \\]</div></li><li><div class=\"math-display\">\\[\n  \\frac{7}{40}=\\frac{7}{2^3\\cdot 5}.\n  \\]</div><p>El denominador solo tiene factores \\(2\\) y \\(5\\), asi que el decimal es exacto.</p></li><li><div class=\"math-display\">\\[\n  \\frac{5}{12}=\\frac{5}{2^2\\cdot 3}.\n  \\]</div><p>Como aparece un factor \\(3\\), el decimal no es exacto y resulta periodico mixto.</p></li></ol>"
          },
          "challenge": {}
        },
        {
          "id": "C01.S03",
          "title": "Intervalos, union e interseccion",
          "rawTitle": "[C01.S03] Intervalos, union e interseccion",
          "objectives": [
            {
              "label": "Objetivos de aprendizaje",
              "html": "<ul><li><p>Traducir desigualdades a notacion de intervalos.</p></li><li><p>Calcular uniones e intersecciones.</p></li></ul>"
            }
          ],
          "prerequisites": [
            {
              "label": "Prerrequisitos",
              "html": "<ul><li><p>Comparar numeros en la recta real.</p></li></ul>"
            }
          ],
          "theory": {
            "title": "Idea minima",
            "titleText": "Idea minima",
            "tagId": "",
            "html": "<p>Los corchetes \\([\\,]\\) incluyen el extremo y los parentesis \\((\\,)\\) no lo incluyen. La union \\(\\cup\\) junta conjuntos; la interseccion \\(\\cap\\) deja solo la parte comun.</p>"
          },
          "method": {
            "title": "Como reconocer y resolver",
            "titleText": "Como reconocer y resolver",
            "tagId": "",
            "html": "<ol><li><p>Lee con cuidado si el extremo esta incluido o no.</p></li><li><p>Escribe cada conjunto como intervalo.</p></li><li><p>Para la interseccion, busca la zona comun.</p></li><li><p>Para la union, une los tramos si se tocan o se solapan.</p></li></ol>"
          },
          "solvedExample": {
            "title": "[EX-C01.S03-01] Escribir y combinar intervalos",
            "titleText": "Escribir y combinar intervalos",
            "tagId": "EX-C01.S03-01",
            "html": "<p>Sean</p><div class=\"math-display\">\\[\nA=\\{x\\in\\mathbb{R}\\mid -3<x\\le 2\\},\n\\qquad\nB=\\{x\\in\\mathbb{R}\\mid x\\ge 1\\}.\n\\]</div><p>Escribe ambos conjuntos como intervalos y calcula \\(A\\cap B\\) y \\(A\\cup B\\).</p><p><strong>Desarrollo.</strong></p><div class=\"math-display\">\\[\nA=(-3,2],\\qquad B=[1,+\\infty).\n\\]</div><p>La parte comun va desde \\(1\\) hasta \\(2\\), ambos incluidos:</p><div class=\"math-display\">\\[\nA\\cap B=[1,2].\n\\]</div><p>La union cubre desde \\(-3\\) sin incluir hasta \\(+\\infty\\):</p><div class=\"math-display\">\\[\nA\\cup B=(-3,+\\infty).\n\\]</div>"
          },
          "commonError": {
            "title": "Confundir tocarse con estar separados",
            "titleText": "Confundir tocarse con estar separados",
            "tagId": "",
            "html": "<p>Si un intervalo termina en \\(5\\) incluido y el siguiente empieza en \\(5\\) excluido, la union sigue siendo un unico tramo. Hay contacto en el mismo punto.</p>"
          },
          "guidedExercises": [
            {
              "tagId": "GX-C01.S03-01",
              "title": "De desigualdad a intervalo",
              "promptHtml": "<p>Escribe en notacion de intervalos:</p><div class=\"math-display\">\\[\nx<-1 \\quad \\text{o} \\quad x\\ge 4.\n\\]</div>",
              "answerHtml": "<div class=\"math-display\">\\[\n(-\\infty,-1)\\cup [4,+\\infty).\n\\]</div>",
              "solutionHtml": "<p>La desigualdad \\(x<-1\\) se escribe como \\((-\\infty,-1)\\). La desigualdad \\(x\\ge 4\\) se escribe como \\([4,+\\infty)\\). Como aparece ``o'', la respuesta final es la union:</p><div class=\"math-display\">\\[\n(-\\infty,-1)\\cup [4,+\\infty).\n\\]</div>"
            },
            {
              "tagId": "GX-C01.S03-02",
              "title": "Interseccion de intervalos",
              "promptHtml": "<p>Calcula</p><div class=\"math-display\">\\[\n[-2,5)\\cap (1,7].\n\\]</div>",
              "answerHtml": "<div class=\"math-display\">\\[\n(1,5).\n\\]</div>",
              "solutionHtml": "<p>Los valores comunes son los que estan a la vez entre \\(-2\\) y \\(5\\), y entre \\(1\\) y \\(7\\). Por tanto:</p><div class=\"math-display\">\\[\n[-2,5)\\cap (1,7]=(1,5).\n\\]</div>"
            }
          ],
          "practice": {
            "label": "Practica autonoma graduada",
            "items": [
              {
                "tagId": "PX-C01.S03-01",
                "prompt": "Escribe en intervalos: \\(x\\le 3\\) y \\(x>-2\\)."
              },
              {
                "tagId": "PX-C01.S03-02",
                "prompt": "Calcula \\((-\\infty,1]\\cap [1,4)\\)."
              },
              {
                "tagId": "PX-C01.S03-03",
                "prompt": "Calcula \\([0,5]\\cup (5,8)\\)."
              },
              {
                "tagId": "PX-C01.S03-04",
                "prompt": "Escribe en intervalos: \\(x>2\\)."
              },
              {
                "tagId": "PX-C01.S03-05",
                "prompt": "Calcula \\((-3,-1)\\cap [-1,2]\\)."
              },
              {
                "tagId": "PX-C01.S03-06",
                "prompt": "Calcula \\((-\\infty,-2]\\cup (-2,3)\\)."
              }
            ],
            "answersHtml": "<ol><li><p>\\((-2,3]\\)</p></li><li><p>\\(\\{1\\}\\)</p></li><li><p>\\([0,8)\\)</p></li><li><p>\\((2,+\\infty)\\)</p></li><li><p>\\(\\varnothing\\)</p></li><li><p>\\((-\\infty,3)\\)</p></li></ol>",
            "solutionsHtml": "<ol><li><p>``y'' significa interseccion, asi que deben cumplirse ambas condiciones:</p><div class=\"math-display\">\\[\n  (-2,3].\n  \\]</div></li><li><p>El unico punto comun es \\(1\\), luego:</p><div class=\"math-display\">\\[\n  (-\\infty,1]\\cap [1,4)=\\{1\\}.\n  \\]</div></li><li><p>Como \\(5\\) ya esta incluido en el primer intervalo, la union es:</p><div class=\"math-display\">\\[\n  [0,8).\n  \\]</div></li><li><div class=\"math-display\">\\[\n  x>2 \\Longleftrightarrow (2,+\\infty).\n  \\]</div></li><li><p>El primer intervalo no incluye \\(-1\\) y el segundo empieza en \\(-1\\), asi que no hay punto comun:</p><div class=\"math-display\">\\[\n  \\varnothing.\n  \\]</div></li><li><p>Ambos tramos se tocan en \\(-2\\) y la union cubre todo hasta \\(3\\) sin incluirlo:</p><div class=\"math-display\">\\[\n  (-\\infty,3).\n  \\]</div></li></ol>"
          },
          "challenge": {}
        },
        {
          "id": "C01.S04",
          "title": "Valor absoluto como distancia",
          "rawTitle": "[C01.S04] Valor absoluto como distancia",
          "objectives": [
            {
              "label": "Objetivos de aprendizaje",
              "html": "<ul><li><p>Interpretar \\(|x-a|\\) como distancia entre \\(x\\) y \\(a\\).</p></li><li><p>Resolver ecuaciones e inecuaciones sencillas con valor absoluto.</p></li></ul>"
            }
          ],
          "prerequisites": [
            {
              "label": "Prerrequisitos",
              "html": "<ul><li><p>Resolver ecuaciones e inecuaciones lineales.</p></li></ul>"
            }
          ],
          "theory": {
            "title": "Idea minima",
            "titleText": "Idea minima",
            "tagId": "",
            "html": "<div class=\"math-display\">\\[\n|x-a|=d\n\\]</div><p>significa que \\(x\\) esta a distancia \\(d\\) del punto \\(a\\). Si \\(d>0\\), suele haber dos soluciones:</p><div class=\"math-display\">\\[\nx-a=d \\quad \\text{o} \\quad x-a=-d.\n\\]</div>"
          },
          "method": {
            "title": "Como reconocer y resolver",
            "titleText": "Como reconocer y resolver",
            "tagId": "",
            "html": "<ol><li><p>Lee el valor absoluto como una distancia.</p></li><li><p>Si es una ecuacion \\(|u|=k\\), plantea \\(u=k\\) y \\(u=-k\\).</p></li><li><p>Si es una inecuacion \\(|u|<k\\), traduce a \\(-k<u<k\\).</p></li></ol>"
          },
          "solvedExample": {
            "title": "[EX-C01.S04-01] Ecuacion con dos soluciones",
            "titleText": "Ecuacion con dos soluciones",
            "tagId": "EX-C01.S04-01",
            "html": "<p>Resuelve</p><div class=\"math-display\">\\[\n|2x-3|=5.\n\\]</div><p><strong>Desarrollo.</strong> Planteamos los dos casos:</p><div class=\"math-display\">\\[\n2x-3=5\n\\qquad \\text{o} \\qquad\n2x-3=-5.\n\\]</div><p>Del primero:</p><div class=\"math-display\">\\[\n2x=8 \\Longrightarrow x=4.\n\\]</div><p>Del segundo:</p><div class=\"math-display\">\\[\n2x=-2 \\Longrightarrow x=-1.\n\\]</div><p><strong>Respuesta final.</strong></p><div class=\"math-display\">\\[\nx=4 \\quad \\text{o} \\quad x=-1.\n\\]</div>"
          },
          "commonError": {
            "title": "Olvidar la rama negativa",
            "titleText": "Olvidar la rama negativa",
            "tagId": "",
            "html": "<p>Al resolver \\(|u|=k\\) con \\(k>0\\), no basta con imponer \\(u=k\\). Tambien hay que resolver \\(u=-k\\).</p>"
          },
          "guidedExercises": [
            {
              "tagId": "GX-C01.S04-01",
              "title": "Dos puntos a la misma distancia",
              "promptHtml": "<p>Resuelve</p><div class=\"math-display\">\\[\n|x+1|=3.\n\\]</div>",
              "answerHtml": "<div class=\"math-display\">\\[\nx=2 \\quad \\text{o} \\quad x=-4.\n\\]</div>",
              "solutionHtml": "<div class=\"math-display\">\\[\nx+1=3 \\quad \\text{o} \\quad x+1=-3.\n\\]</div><p>Por tanto:</p><div class=\"math-display\">\\[\nx=2 \\quad \\text{o} \\quad x=-4.\n\\]</div>"
            },
            {
              "tagId": "GX-C01.S04-02",
              "title": "Distancia menor que un numero",
              "promptHtml": "<p>Resuelve</p><div class=\"math-display\">\\[\n|x-2|<4.\n\\]</div>",
              "answerHtml": "<div class=\"math-display\">\\[\n-2<x<6.\n\\]</div>",
              "solutionHtml": "<div class=\"math-display\">\\[\n|x-2|<4 \\Longleftrightarrow -4<x-2<4.\n\\]</div><p>Sumando \\(2\\) en los tres miembros:</p><div class=\"math-display\">\\[\n-2<x<6.\n\\]</div>"
            }
          ],
          "practice": {
            "label": "Practica autonoma graduada",
            "items": [
              {
                "tagId": "PX-C01.S04-01",
                "prompt": "Resuelve \\(|x|=7\\)."
              },
              {
                "tagId": "PX-C01.S04-02",
                "prompt": "Resuelve \\(|3x-1|=2\\)."
              },
              {
                "tagId": "PX-C01.S04-03",
                "prompt": "Resuelve \\(|x+4|\\le 1\\)."
              },
              {
                "tagId": "PX-C01.S04-04",
                "prompt": "Halla los puntos cuya distancia a \\(5\\) es \\(2\\)."
              },
              {
                "tagId": "PX-C01.S04-05",
                "prompt": "Resuelve \\(|2x+3|>1\\)."
              },
              {
                "tagId": "PX-C01.S04-06",
                "prompt": "Resuelve \\(|x-1|=0\\)."
              }
            ],
            "answersHtml": "<ol><li><p>\\(x=\\pm 7\\)</p></li><li><p>\\(x=1\\) o \\(x=-\\dfrac{1}{3}\\)</p></li><li><p>\\([-5,-3]\\)</p></li><li><p>\\(x=3\\) o \\(x=7\\)</p></li><li><p>\\(x<-2\\) o \\(x>-1\\)</p></li><li><p>\\(x=1\\)</p></li></ol>",
            "solutionsHtml": "<ol><li><p>\\(|x|=7\\) equivale a \\(x=7\\) o \\(x=-7\\).</p></li><li><div class=\"math-display\">\\[\n  3x-1=2 \\quad \\text{o} \\quad 3x-1=-2.\n  \\]</div><p>De ahi se obtiene \\(x=1\\) o \\(x=-1/3\\).</p></li><li><div class=\"math-display\">\\[\n  |x+4|\\le 1 \\Longleftrightarrow -1\\le x+4\\le 1.\n  \\]</div><p>Restando \\(4\\):</p><div class=\"math-display\">\\[\n  -5\\le x\\le -3.\n  \\]</div></li><li><p>Distancia \\(2\\) a \\(5\\) significa:</p><div class=\"math-display\">\\[\n  |x-5|=2.\n  \\]</div><p>Entonces \\(x=7\\) o \\(x=3\\).</p></li><li><div class=\"math-display\">\\[\n  |2x+3|>1 \\Longleftrightarrow 2x+3>1 \\quad \\text{o} \\quad 2x+3<-1.\n  \\]</div><p>Por tanto:</p><div class=\"math-display\">\\[\n  x>-1 \\quad \\text{o} \\quad x<-2.\n  \\]</div></li><li><p>La unica distancia cero es el propio punto:</p><div class=\"math-display\">\\[\n  x-1=0 \\Longrightarrow x=1.\n  \\]</div></li></ol>"
          },
          "challenge": {}
        },
        {
          "id": "C01.S05",
          "title": "Potencias y radicales",
          "rawTitle": "[C01.S05] Potencias y radicales",
          "objectives": [
            {
              "label": "Objetivos de aprendizaje",
              "html": "<ul><li><p>Simplificar radicales y expresiones con potencias.</p></li><li><p>Reconocer exponentes negativos y fraccionarios.</p></li></ul>"
            }
          ],
          "prerequisites": [
            {
              "label": "Prerrequisitos",
              "html": "<ul><li><p>Reglas basicas de productos y cocientes.</p></li></ul>"
            }
          ],
          "theory": {
            "title": "Idea minima",
            "titleText": "Idea minima",
            "tagId": "",
            "html": "<div class=\"math-display\">\\[\na^{-n}=\\frac{1}{a^n},\n\\qquad\na^{m/n}=\\sqrt[n]{a^m}.\n\\]</div><p>Para sumar radicales, primero hay que simplificarlos hasta que tengan el mismo radical.</p>"
          },
          "method": {
            "title": "Como reconocer y resolver",
            "titleText": "Como reconocer y resolver",
            "tagId": "",
            "html": "<ol><li><p>Aplica la propiedad correspondiente de potencias.</p></li><li><p>Simplifica cada radical por separado.</p></li><li><p>Suma o resta solo radicales semejantes.</p></li></ol>"
          },
          "solvedExample": {
            "title": "[EX-C01.S05-01] Radicales semejantes",
            "titleText": "Radicales semejantes",
            "tagId": "EX-C01.S05-01",
            "html": "<p>Simplifica</p><div class=\"math-display\">\\[\n\\sqrt{50}-2\\sqrt{8}+3\\sqrt{18}.\n\\]</div><p><strong>Desarrollo.</strong></p><div class=\"math-display\">\\[\n\\sqrt{50}=5\\sqrt{2},\\qquad \\sqrt{8}=2\\sqrt{2},\\qquad \\sqrt{18}=3\\sqrt{2}.\n\\]</div><p>Entonces:</p><div class=\"math-display\">\\[\n\\sqrt{50}-2\\sqrt{8}+3\\sqrt{18}=5\\sqrt{2}-2(2\\sqrt{2})+3(3\\sqrt{2}).\n\\]</div><div class=\"math-display\">\\[\n=5\\sqrt{2}-4\\sqrt{2}+9\\sqrt{2}=10\\sqrt{2}.\n\\]</div><p><strong>Respuesta final.</strong></p><div class=\"math-display\">\\[\n\\boxed{10\\sqrt{2}}.\n\\]</div>"
          },
          "commonError": {
            "title": "Sumar radicales no semejantes",
            "titleText": "Sumar radicales no semejantes",
            "tagId": "",
            "html": "<p>No se puede pasar de \\(\\sqrt{8}+\\sqrt{18}\\) a \\(\\sqrt{26}\\). Primero hay que simplificar cada radical y despues operar solo si son semejantes.</p>"
          },
          "guidedExercises": [
            {
              "tagId": "GX-C01.S05-01",
              "title": "Exponente negativo",
              "promptHtml": "<p>Calcula</p><div class=\"math-display\">\\[\n2^3\\cdot 2^{-5}.\n\\]</div>",
              "answerHtml": "<div class=\"math-display\">\\[\n\\frac{1}{4}.\n\\]</div>",
              "solutionHtml": "<div class=\"math-display\">\\[\n2^3\\cdot 2^{-5}=2^{3-5}=2^{-2}=\\frac{1}{2^2}=\\frac{1}{4}.\n\\]</div>"
            },
            {
              "tagId": "GX-C01.S05-02",
              "title": "Simplificar y sumar",
              "promptHtml": "<p>Calcula</p><div class=\"math-display\">\\[\n\\sqrt{12}+\\sqrt{27}.\n\\]</div>",
              "answerHtml": "<div class=\"math-display\">\\[\n5\\sqrt{3}.\n\\]</div>",
              "solutionHtml": "<div class=\"math-display\">\\[\n\\sqrt{12}=2\\sqrt{3},\\qquad \\sqrt{27}=3\\sqrt{3}.\n\\]</div><p>Por tanto:</p><div class=\"math-display\">\\[\n\\sqrt{12}+\\sqrt{27}=5\\sqrt{3}.\n\\]</div>"
            }
          ],
          "practice": {
            "label": "Practica autonoma graduada",
            "items": [
              {
                "tagId": "PX-C01.S05-01",
                "prompt": "Calcula \\(3^{-2}\\)."
              },
              {
                "tagId": "PX-C01.S05-02",
                "prompt": "Simplifica \\(\\sqrt{75}-\\sqrt{12}\\)."
              },
              {
                "tagId": "PX-C01.S05-03",
                "prompt": "Calcula \\(16^{3/4}\\)."
              },
              {
                "tagId": "PX-C01.S05-04",
                "prompt": "Simplifica \\(\\dfrac{\\sqrt[3]{54}}{\\sqrt[3]{2}}\\)."
              },
              {
                "tagId": "PX-C01.S05-05",
                "prompt": "Simplifica \\(\\sqrt{45}+\\sqrt{5}\\)."
              },
              {
                "tagId": "PX-C01.S05-06",
                "prompt": "Calcula \\(\\sqrt{2^4\\cdot 5^2}\\)."
              }
            ],
            "answersHtml": "<ol><li><p>\\(\\dfrac{1}{9}\\)</p></li><li><p>\\(3\\sqrt{3}\\)</p></li><li><p>\\(8\\)</p></li><li><p>\\(3\\)</p></li><li><p>\\(4\\sqrt{5}\\)</p></li><li><p>\\(20\\)</p></li></ol>",
            "solutionsHtml": "<ol><li><div class=\"math-display\">\\[\n  3^{-2}=\\frac{1}{3^2}=\\frac{1}{9}.\n  \\]</div></li><li><div class=\"math-display\">\\[\n  \\sqrt{75}=5\\sqrt{3},\\qquad \\sqrt{12}=2\\sqrt{3},\n  \\]</div><p>luego:</p><div class=\"math-display\">\\[\n  \\sqrt{75}-\\sqrt{12}=3\\sqrt{3}.\n  \\]</div></li><li><div class=\"math-display\">\\[\n  16^{3/4}=\\left(\\sqrt[4]{16}\\right)^3=2^3=8.\n  \\]</div></li><li><div class=\"math-display\">\\[\n  \\frac{\\sqrt[3]{54}}{\\sqrt[3]{2}}=\\sqrt[3]{\\frac{54}{2}}=\\sqrt[3]{27}=3.\n  \\]</div></li><li><div class=\"math-display\">\\[\n  \\sqrt{45}=3\\sqrt{5},\n  \\]</div><p>asi que:</p><div class=\"math-display\">\\[\n  \\sqrt{45}+\\sqrt{5}=4\\sqrt{5}.\n  \\]</div></li><li><div class=\"math-display\">\\[\n  \\sqrt{2^4\\cdot 5^2}=\\sqrt{16\\cdot 25}=\\sqrt{400}=20.\n  \\]</div></li></ol>"
          },
          "challenge": {}
        },
        {
          "id": "C01.S06",
          "title": "Racionalizacion",
          "rawTitle": "[C01.S06] Racionalizacion",
          "objectives": [
            {
              "label": "Objetivos de aprendizaje",
              "html": "<ul><li><p>Eliminar radicales del denominador.</p></li><li><p>Usar conjugados cuando el denominador tiene dos terminos.</p></li></ul>"
            }
          ],
          "prerequisites": [
            {
              "label": "Prerrequisitos",
              "html": "<ul><li><p>Productos notables sencillos.</p></li></ul>"
            }
          ],
          "theory": {
            "title": "Idea minima",
            "titleText": "Idea minima",
            "tagId": "",
            "html": "<p>Si el denominador es un monomio radical, se multiplica arriba y abajo por el radical adecuado. Si es un binomio con radical, suele usarse el conjugado:</p><div class=\"math-display\">\\[\n(a-b)(a+b)=a^2-b^2.\n\\]</div>"
          },
          "method": {
            "title": "Como reconocer y resolver",
            "titleText": "Como reconocer y resolver",
            "tagId": "",
            "html": "<ol><li><p>Mira si el denominador tiene un solo radical o un binomio.</p></li><li><p>Elige el factor que convierte el denominador en un numero sin radicales.</p></li><li><p>Multiplica numerador y denominador por el mismo factor.</p></li><li><p>Simplifica el resultado.</p></li></ol>"
          },
          "solvedExample": {
            "title": "[EX-C01.S06-01] Racionalizar con conjugado",
            "titleText": "Racionalizar con conjugado",
            "tagId": "EX-C01.S06-01",
            "html": "<p>Racionaliza</p><div class=\"math-display\">\\[\n\\frac{3}{\\sqrt{5}-2}.\n\\]</div><p><strong>Desarrollo.</strong> Multiplicamos por el conjugado:</p><div class=\"math-display\">\\[\n\\frac{3}{\\sqrt{5}-2}\\cdot\\frac{\\sqrt{5}+2}{\\sqrt{5}+2}\n=\\frac{3(\\sqrt{5}+2)}{(\\sqrt{5})^2-2^2}\n=\\frac{3(\\sqrt{5}+2)}{5-4}.\n\\]</div><p>Por tanto:</p><div class=\"math-display\">\\[\n\\frac{3}{\\sqrt{5}-2}=3\\sqrt{5}+6.\n\\]</div>"
          },
          "commonError": {
            "title": "Cambiar el denominador sin tocar el numerador",
            "titleText": "Cambiar el denominador sin tocar el numerador",
            "tagId": "",
            "html": "<p>Racionalizar no es ``modificar'' solo el denominador. Hay que multiplicar numerador y denominador por el mismo factor para conservar la equivalencia.</p>"
          },
          "guidedExercises": [
            {
              "tagId": "GX-C01.S06-01",
              "title": "Monomio radical",
              "promptHtml": "<p>Racionaliza</p><div class=\"math-display\">\\[\n\\frac{5}{\\sqrt{2}}.\n\\]</div>",
              "answerHtml": "<div class=\"math-display\">\\[\n\\frac{5\\sqrt{2}}{2}.\n\\]</div>",
              "solutionHtml": "<div class=\"math-display\">\\[\n\\frac{5}{\\sqrt{2}}\\cdot\\frac{\\sqrt{2}}{\\sqrt{2}}=\\frac{5\\sqrt{2}}{2}.\n\\]</div>"
            },
            {
              "tagId": "GX-C01.S06-02",
              "title": "Conjugado con numerador uno",
              "promptHtml": "<p>Racionaliza</p><div class=\"math-display\">\\[\n\\frac{1}{\\sqrt{3}+\\sqrt{2}}.\n\\]</div>",
              "answerHtml": "<div class=\"math-display\">\\[\n\\sqrt{3}-\\sqrt{2}.\n\\]</div>",
              "solutionHtml": "<div class=\"math-display\">\\[\n\\frac{1}{\\sqrt{3}+\\sqrt{2}}\\cdot\\frac{\\sqrt{3}-\\sqrt{2}}{\\sqrt{3}-\\sqrt{2}}\n=\\frac{\\sqrt{3}-\\sqrt{2}}{3-2}\n=\\sqrt{3}-\\sqrt{2}.\n\\]</div>"
            }
          ],
          "practice": {
            "label": "Practica autonoma graduada",
            "items": [
              {
                "tagId": "PX-C01.S06-01",
                "prompt": "Racionaliza \\(\\dfrac{2}{\\sqrt{7}}\\)."
              },
              {
                "tagId": "PX-C01.S06-02",
                "prompt": "Racionaliza \\(\\dfrac{4}{3-\\sqrt{5}}\\)."
              },
              {
                "tagId": "PX-C01.S06-03",
                "prompt": "Racionaliza \\(\\dfrac{1}{2+\\sqrt{3}}\\)."
              },
              {
                "tagId": "PX-C01.S06-04",
                "prompt": "Simplifica \\(\\dfrac{\\sqrt{6}}{\\sqrt{2}}\\)."
              },
              {
                "tagId": "PX-C01.S06-05",
                "prompt": "Racionaliza \\(\\dfrac{7}{\\sqrt{7}-1}\\)."
              },
              {
                "tagId": "PX-C01.S06-06",
                "prompt": "Racionaliza \\(\\dfrac{3}{1-\\sqrt{2}}\\)."
              }
            ],
            "answersHtml": "<ol><li><p>\\(\\dfrac{2\\sqrt{7}}{7}\\)</p></li><li><p>\\(3+\\sqrt{5}\\)</p></li><li><p>\\(2-\\sqrt{3}\\)</p></li><li><p>\\(\\sqrt{3}\\)</p></li><li><p>\\(\\dfrac{7\\sqrt{7}+7}{6}\\)</p></li><li><p>\\(-3-3\\sqrt{2}\\)</p></li></ol>",
            "solutionsHtml": "<ol><li><div class=\"math-display\">\\[\n  \\frac{2}{\\sqrt{7}}\\cdot\\frac{\\sqrt{7}}{\\sqrt{7}}=\\frac{2\\sqrt{7}}{7}.\n  \\]</div></li><li><div class=\"math-display\">\\[\n  \\frac{4}{3-\\sqrt{5}}\\cdot\\frac{3+\\sqrt{5}}{3+\\sqrt{5}}\n  =\\frac{4(3+\\sqrt{5})}{9-5}=3+\\sqrt{5}.\n  \\]</div></li><li><div class=\"math-display\">\\[\n  \\frac{1}{2+\\sqrt{3}}\\cdot\\frac{2-\\sqrt{3}}{2-\\sqrt{3}}\n  =\\frac{2-\\sqrt{3}}{4-3}=2-\\sqrt{3}.\n  \\]</div></li><li><div class=\"math-display\">\\[\n  \\frac{\\sqrt{6}}{\\sqrt{2}}=\\sqrt{\\frac{6}{2}}=\\sqrt{3}.\n  \\]</div></li><li><div class=\"math-display\">\\[\n  \\frac{7}{\\sqrt{7}-1}\\cdot\\frac{\\sqrt{7}+1}{\\sqrt{7}+1}\n  =\\frac{7(\\sqrt{7}+1)}{7-1}\n  =\\frac{7\\sqrt{7}+7}{6}.\n  \\]</div></li><li><div class=\"math-display\">\\[\n  \\frac{3}{1-\\sqrt{2}}\\cdot\\frac{1+\\sqrt{2}}{1+\\sqrt{2}}\n  =\\frac{3(1+\\sqrt{2})}{1-2}\n  =-3-3\\sqrt{2}.\n  \\]</div></li></ol>"
          },
          "challenge": {}
        },
        {
          "id": "C01.S07",
          "title": "Logaritmos y propiedades operativas",
          "rawTitle": "[C01.S07] Logaritmos y propiedades operativas",
          "objectives": [
            {
              "label": "Objetivos de aprendizaje",
              "html": "<ul><li><p>Traducir entre expresion exponencial y logaritmica.</p></li><li><p>Aplicar propiedades basicas de los logaritmos.</p></li></ul>"
            }
          ],
          "prerequisites": [
            {
              "label": "Prerrequisitos",
              "html": "<ul><li><p>Potencias y exponentes.</p></li></ul>"
            }
          ],
          "theory": {
            "title": "Idea minima",
            "titleText": "Idea minima",
            "tagId": "",
            "html": "<div class=\"math-display\">\\[\n\\log_a b=c \\Longleftrightarrow a^c=b.\n\\]</div><p>Ademas, para \\(a>0\\), \\(a\\neq 1\\), \\(x>0\\), \\(y>0\\):</p><div class=\"math-display\">\\[\n\\log_a(xy)=\\log_a x+\\log_a y,\n\\qquad\n\\log_a\\left(\\frac{x}{y}\\right)=\\log_a x-\\log_a y.\n\\]</div>"
          },
          "method": {
            "title": "Como reconocer y resolver",
            "titleText": "Como reconocer y resolver",
            "tagId": "",
            "html": "<ol><li><p>Si puedes, reescribe el logaritmo como una potencia conocida.</p></li><li><p>Aplica propiedades solo cuando los argumentos sean positivos.</p></li><li><p>Simplifica al final.</p></li></ol>"
          },
          "solvedExample": {
            "title": "[EX-C01.S07-01] Operar con logaritmos",
            "titleText": "Operar con logaritmos",
            "tagId": "EX-C01.S07-01",
            "html": "<p>Calcula</p><div class=\"math-display\">\\[\n\\log_3 81 + 2\\log_3\\left(\\frac{1}{3}\\right).\n\\]</div><p><strong>Desarrollo.</strong></p><div class=\"math-display\">\\[\n\\log_3 81=4,\n\\qquad\n\\log_3\\left(\\frac{1}{3}\\right)=-1.\n\\]</div><p>Entonces:</p><div class=\"math-display\">\\[\n\\log_3 81 + 2\\log_3\\left(\\frac{1}{3}\\right)=4+2(-1)=2.\n\\]</div><p><strong>Respuesta final.</strong></p><div class=\"math-display\">\\[\n\\boxed{2}.\n\\]</div>"
          },
          "commonError": {
            "title": "Olvidar que \\(\\log_a(1/a)=-1\\)",
            "titleText": "Olvidar que \\(\\log_a(1/a)=-1\\)",
            "tagId": "",
            "html": "<p>El logaritmo pregunta ``a que exponente hay que elevar la base''. Como</p><div class=\"math-display\">\\[\na^{-1}=\\frac{1}{a},\n\\]</div><p>se tiene \\(\\log_a(1/a)=-1\\).</p>"
          },
          "guidedExercises": [
            {
              "tagId": "GX-C01.S07-01",
              "title": "Diferencia de logaritmos",
              "promptHtml": "<p>Calcula</p><div class=\"math-display\">\\[\n\\log_2 32-\\log_2 4.\n\\]</div>",
              "answerHtml": "<div class=\"math-display\">\\[\n3.\n\\]</div>",
              "solutionHtml": "<div class=\"math-display\">\\[\n\\log_2 32=5,\\qquad \\log_2 4=2.\n\\]</div><p>Por tanto:</p><div class=\"math-display\">\\[\n\\log_2 32-\\log_2 4=5-2=3.\n\\]</div>"
            },
            {
              "tagId": "GX-C01.S07-02",
              "title": "Pasar a forma exponencial",
              "promptHtml": "<p>Resuelve</p><div class=\"math-display\">\\[\n\\log_5 x=3.\n\\]</div>",
              "answerHtml": "<div class=\"math-display\">\\[\nx=125.\n\\]</div>",
              "solutionHtml": "<div class=\"math-display\">\\[\n\\log_5 x=3 \\Longleftrightarrow 5^3=x.\n\\]</div><p>Luego:</p><div class=\"math-display\">\\[\nx=125.\n\\]</div>"
            }
          ],
          "practice": {
            "label": "Practica autonoma graduada",
            "items": [
              {
                "tagId": "PX-C01.S07-01",
                "prompt": "Calcula \\(\\log_{10}0.01\\)."
              },
              {
                "tagId": "PX-C01.S07-02",
                "prompt": "Calcula \\(\\log_4 64\\)."
              },
              {
                "tagId": "PX-C01.S07-03",
                "prompt": "Calcula \\(\\ln(e^5)\\)."
              },
              {
                "tagId": "PX-C01.S07-04",
                "prompt": "Calcula \\(\\log_2 8+\\log_2 4\\)."
              },
              {
                "tagId": "PX-C01.S07-05",
                "prompt": "Calcula \\(\\log_3 27-\\log_3 9\\)."
              },
              {
                "tagId": "PX-C01.S07-06",
                "prompt": "Resuelve \\(\\log_7 x=2\\)."
              }
            ],
            "answersHtml": "<ol><li><p>\\(-2\\)</p></li><li><p>\\(3\\)</p></li><li><p>\\(5\\)</p></li><li><p>\\(5\\)</p></li><li><p>\\(1\\)</p></li><li><p>\\(49\\)</p></li></ol>",
            "solutionsHtml": "<ol><li><div class=\"math-display\">\\[\n  10^{-2}=0.01,\n  \\]</div><p>luego \\(\\log_{10}0.01=-2\\).</p></li><li><div class=\"math-display\">\\[\n  4^3=64,\n  \\]</div><p>asi que \\(\\log_4 64=3\\).</p></li><li><div class=\"math-display\">\\[\n  \\ln(e^5)=5.\n  \\]</div></li><li><div class=\"math-display\">\\[\n  \\log_2 8+\\log_2 4=3+2=5.\n  \\]</div></li><li><div class=\"math-display\">\\[\n  \\log_3 27-\\log_3 9=3-2=1.\n  \\]</div></li><li><div class=\"math-display\">\\[\n  \\log_7 x=2 \\Longleftrightarrow x=7^2=49.\n  \\]</div></li></ol>"
          },
          "challenge": {}
        }
      ]
    },
    {
      "id": "C02",
      "slug": "02_polinomios_fracciones",
      "title": "Polinomios y fracciones algebraicas",
      "summaryHtml": "<p>Este capitulo desarrolla las secciones <code>C02.S01-C02.S09</code> de la matriz de cobertura a partir de <code>sources/Relacion tema 2.pdf</code>. El hilo conductor es aprender a operar, factorizar y controlar dominios antes de resolver ecuaciones racionales.</p>",
      "studyRouteHtml": "",
      "sectionCount": 9,
      "sections": [
        {
          "id": "C02.S01",
          "title": "Valor numerico y lectura de polinomios",
          "rawTitle": "[C02.S01] Valor numerico y lectura de polinomios",
          "objectives": [
            {
              "label": "Objetivos de aprendizaje",
              "html": "<ul><li><p>Sustituir un valor en un polinomio sin perder signos ni parentesis.</p></li><li><p>Interpretar el valor numerico como resultado de evaluar una expresion.</p></li></ul>"
            }
          ],
          "prerequisites": [
            {
              "label": "Prerrequisitos",
              "html": "<ul><li><p>Operaciones con enteros y fracciones.</p></li></ul>"
            }
          ],
          "theory": {
            "title": "Idea minima",
            "titleText": "Idea minima",
            "tagId": "",
            "html": "<p>Calcular el valor numerico de un polinomio consiste en sustituir la variable por un numero y operar respetando la jerarquia. Si aparece un signo negativo delante de una potencia o de un parentesis, conviene escribirlo con cuidado.</p>"
          },
          "method": {
            "title": "Como reconocer y resolver",
            "titleText": "Como reconocer y resolver",
            "tagId": "",
            "html": "<ol><li><p>Sustituye la variable por el numero indicado usando parentesis.</p></li><li><p>Calcula potencias y productos antes de sumar o restar.</p></li><li><p>Simplifica paso a paso para evitar errores de signo.</p></li></ol>"
          },
          "solvedExample": {
            "title": "[EX-C02.S01-01] Evaluar un polinomio",
            "titleText": "Evaluar un polinomio",
            "tagId": "EX-C02.S01-01",
            "html": "<p>Calcula el valor numerico de</p><div class=\"math-display\">\\[\nP(x)=2x^3-x^2+3x-5\n\\]</div><p>para \\(x=2\\).</p><p><strong>Desarrollo.</strong></p><div class=\"math-display\">\\[\nP(2)=2\\cdot 2^3-2^2+3\\cdot 2-5=2\\cdot 8-4+6-5=13.\n\\]</div><p><strong>Respuesta final.</strong></p><div class=\"math-display\">\\[\nP(2)=13.\n\\]</div>"
          },
          "commonError": {
            "title": "Sustituir sin parentesis",
            "titleText": "Sustituir sin parentesis",
            "tagId": "",
            "html": "<p>Si el valor es negativo, hay que escribir \\(P(-2)\\) con parentesis. De lo contrario, una potencia como \\((-2)^2\\) puede confundirse con \\(-2^2\\).</p>"
          },
          "guidedExercises": [
            {
              "tagId": "GX-C02.S01-01",
              "title": "Evaluacion directa",
              "promptHtml": "<p>Calcula \\(Q(3)\\) si</p><div class=\"math-display\">\\[\nQ(x)=x^2-4x+1.\n\\]</div><p><strong>Pista 1.</strong> Sustituye primero y reduce despues.</p>",
              "answerHtml": "<div class=\"math-display\">\\[\nQ(3)=-2.\n\\]</div>",
              "solutionHtml": "<div class=\"math-display\">\\[\nQ(3)=3^2-4\\cdot 3+1=9-12+1=-2.\n\\]</div>"
            },
            {
              "tagId": "GX-C02.S01-02",
              "title": "Cuidado con el signo",
              "promptHtml": "<p>Calcula \\(R(-1)\\) si</p><div class=\"math-display\">\\[\nR(x)=-2x^3+x-1.\n\\]</div><p><strong>Pista 1.</strong> Empieza por \\((-1)^3\\).</p>",
              "answerHtml": "<div class=\"math-display\">\\[\nR(-1)=0.\n\\]</div>",
              "solutionHtml": "<div class=\"math-display\">\\[\nR(-1)=-2(-1)^3+(-1)-1=-2(-1)-1-1=2-2=0.\n\\]</div>"
            }
          ],
          "practice": {
            "label": "Practica autonoma graduada",
            "items": [
              {
                "tagId": "PX-C02.S01-01",
                "prompt": "Calcula \\(A(0)\\) si \\(A(x)=x^2-3x+5\\)."
              },
              {
                "tagId": "PX-C02.S01-02",
                "prompt": "Calcula \\(B(-2)\\) si \\(B(x)=2x^2+x-1\\)."
              },
              {
                "tagId": "PX-C02.S01-03",
                "prompt": "Calcula \\(C\\left(\\tfrac{1}{2}\\right)\\) si \\(C(x)=4x^2-1\\)."
              },
              {
                "tagId": "PX-C02.S01-04",
                "prompt": "Calcula \\(D(3)\\) si \\(D(x)=x^3-2x+4\\)."
              },
              {
                "tagId": "PX-C02.S01-05",
                "prompt": "Calcula \\(E(-1)\\) si \\(E(x)=x^4-x^2+2\\)."
              },
              {
                "tagId": "PX-C02.S01-06",
                "prompt": "Calcula \\(F(2)\\) si \\(F(x)=(x-1)(x+3)\\)."
              }
            ],
            "answersHtml": "<ol><li><p>\\(5\\)</p></li><li><p>\\(5\\)</p></li><li><p>\\(0\\)</p></li><li><p>\\(25\\)</p></li><li><p>\\(2\\)</p></li><li><p>\\(5\\)</p></li></ol>",
            "solutionsHtml": "<ol><li><p>\\(A(0)=0-0+5=5\\).</p></li><li><p>\\(B(-2)=2\\cdot 4-2-1=5\\).</p></li><li><p>\\(C\\left(\\tfrac{1}{2}\\right)=4\\cdot \\tfrac{1}{4}-1=0\\).</p></li><li><p>\\(D(3)=27-6+4=25\\).</p></li><li><p>\\(E(-1)=1-1+2=2\\).</p></li><li><p>\\(F(2)=(2-1)(2+3)=5\\).</p></li></ol>"
          },
          "challenge": {}
        },
        {
          "id": "C02.S02",
          "title": "Productos notables y operaciones con polinomios",
          "rawTitle": "[C02.S02] Productos notables y operaciones con polinomios",
          "objectives": [
            {
              "label": "Objetivos de aprendizaje",
              "html": "<ul><li><p>Desarrollar productos notables y productos de polinomios.</p></li><li><p>Simplificar expresiones polinomicas combinadas.</p></li></ul>"
            }
          ],
          "prerequisites": [
            {
              "label": "Prerrequisitos",
              "html": "<ul><li><p>Propiedad distributiva y operaciones con monomios.</p></li></ul>"
            }
          ],
          "theory": {
            "title": "Idea minima",
            "titleText": "Idea minima",
            "tagId": "",
            "html": "<p>Los productos notables ahorran tiempo:</p><div class=\"math-display\">\\[\n(a+b)^2=a^2+2ab+b^2,\\qquad (a-b)^2=a^2-2ab+b^2,\\qquad (a-b)(a+b)=a^2-b^2.\n\\]</div><p>Aunque se recuerden de memoria, conviene saber justificarlos con la distributiva.</p>"
          },
          "method": {
            "title": "Como reconocer y resolver",
            "titleText": "Como reconocer y resolver",
            "tagId": "",
            "html": "<ol><li><p>Detecta si aparece un cuadrado de binomio o una diferencia de cuadrados.</p></li><li><p>Desarrolla termino a termino.</p></li><li><p>Reduce monomios semejantes al final.</p></li></ol>"
          },
          "solvedExample": {
            "title": "[EX-C02.S02-01] Desarrollo y reduccion",
            "titleText": "Desarrollo y reduccion",
            "tagId": "EX-C02.S02-01",
            "html": "<p>Desarrolla y simplifica</p><div class=\"math-display\">\\[\n(2x-3)^2+(x+1)(x-1).\n\\]</div><p><strong>Desarrollo.</strong></p><div class=\"math-display\">\\[\n(2x-3)^2=4x^2-12x+9,\n\\qquad\n(x+1)(x-1)=x^2-1.\n\\]</div><p>Sumando:</p><div class=\"math-display\">\\[\n4x^2-12x+9+x^2-1=5x^2-12x+8.\n\\]</div><p><strong>Respuesta final.</strong></p><div class=\"math-display\">\\[\n(2x-3)^2+(x+1)(x-1)=5x^2-12x+8.\n\\]</div>"
          },
          "commonError": {
            "title": "Olvidar el termino doble",
            "titleText": "Olvidar el termino doble",
            "tagId": "",
            "html": "<p>En \\((a-b)^2\\) el termino central es \\(-2ab\\), no \\(-ab\\). Ese error cambia por completo el resultado final.</p>"
          },
          "guidedExercises": [
            {
              "tagId": "GX-C02.S02-01",
              "title": "Cuadrado de un binomio",
              "promptHtml": "<p>Desarrolla \\((x+5)^2\\).</p><p><strong>Pista 1.</strong> Usa \\(a=x\\) y \\(b=5\\).</p>",
              "answerHtml": "<div class=\"math-display\">\\[\n(x+5)^2=x^2+10x+25.\n\\]</div>",
              "solutionHtml": "<div class=\"math-display\">\\[\n(x+5)^2=x^2+2\\cdot x\\cdot 5+25=x^2+10x+25.\n\\]</div>"
            },
            {
              "tagId": "GX-C02.S02-02",
              "title": "Diferencia de cuadrados",
              "promptHtml": "<p>Desarrolla \\((3x-2)(3x+2)\\).</p><p><strong>Pista 1.</strong> Es del tipo \\((a-b)(a+b)\\).</p>",
              "answerHtml": "<div class=\"math-display\">\\[\n(3x-2)(3x+2)=9x^2-4.\n\\]</div>",
              "solutionHtml": "<p>Aplicamos la diferencia de cuadrados:</p><div class=\"math-display\">\\[\n(3x-2)(3x+2)=(3x)^2-2^2=9x^2-4.\n\\]</div>"
            }
          ],
          "practice": {
            "label": "Practica autonoma graduada",
            "items": [
              {
                "tagId": "PX-C02.S02-01",
                "prompt": "Desarrolla \\((x-4)^2\\)."
              },
              {
                "tagId": "PX-C02.S02-02",
                "prompt": "Desarrolla \\((2x+1)^2\\)."
              },
              {
                "tagId": "PX-C02.S02-03",
                "prompt": "Desarrolla \\((x-3)(x+3)\\)."
              },
              {
                "tagId": "PX-C02.S02-04",
                "prompt": "Desarrolla \\((x+2)(x^2-x+3)\\)."
              },
              {
                "tagId": "PX-C02.S02-05",
                "prompt": "Desarrolla \\((2x-1)(x-4)\\)."
              },
              {
                "tagId": "PX-C02.S02-06",
                "prompt": "Simplifica \\((x+1)^2-(x-1)^2\\)."
              }
            ],
            "answersHtml": "<ol><li><p>\\(x^2-8x+16\\)</p></li><li><p>\\(4x^2+4x+1\\)</p></li><li><p>\\(x^2-9\\)</p></li><li><p>\\(x^3+x^2+x+6\\)</p></li><li><p>\\(2x^2-9x+4\\)</p></li><li><p>\\(4x\\)</p></li></ol>",
            "solutionsHtml": "<ol><li><p>\\((x-4)^2=x^2-8x+16\\).</p></li><li><p>\\((2x+1)^2=4x^2+4x+1\\).</p></li><li><p>\\((x-3)(x+3)=x^2-9\\).</p></li><li><p>\\(x(x^2-x+3)+2(x^2-x+3)=x^3+x^2+x+6\\).</p></li><li><p>\\((2x-1)(x-4)=2x^2-8x-x+4=2x^2-9x+4\\).</p></li><li><p>\\((x^2+2x+1)-(x^2-2x+1)=4x\\).</p></li></ol>"
          },
          "challenge": {}
        },
        {
          "id": "C02.S03",
          "title": "Division de polinomios",
          "rawTitle": "[C02.S03] Division de polinomios",
          "objectives": [
            {
              "label": "Objetivos de aprendizaje",
              "html": "<ul><li><p>Dividir un polinomio entre otro de menor grado.</p></li><li><p>Comprobar el cociente y el resto obtenidos.</p></li></ul>"
            }
          ],
          "prerequisites": [
            {
              "label": "Prerrequisitos",
              "html": "<ul><li><p>Suma y resta ordenada de polinomios.</p></li></ul>"
            }
          ],
          "theory": {
            "title": "Idea minima",
            "titleText": "Idea minima",
            "tagId": "",
            "html": "<p>En una division polinomica se cumple</p><div class=\"math-display\">\\[\n\\text{dividendo}=\\text{divisor}\\cdot \\text{cociente}+\\text{resto},\n\\]</div><p>donde el grado del resto es menor que el del divisor.</p>"
          },
          "method": {
            "title": "Como reconocer y resolver",
            "titleText": "Como reconocer y resolver",
            "tagId": "",
            "html": "<ol><li><p>Ordena los polinomios por grados descendentes.</p></li><li><p>Divide el primer termino del dividendo entre el primero del divisor.</p></li><li><p>Multiplica, resta y baja el siguiente termino.</p></li><li><p>Comprueba al final multiplicando y sumando el resto.</p></li></ol>"
          },
          "solvedExample": {
            "title": "[EX-C02.S03-01] Division exacta",
            "titleText": "Division exacta",
            "tagId": "EX-C02.S03-01",
            "html": "<p>Divide</p><div class=\"math-display\">\\[\n2x^3-3x^2-11x+6\n\\]</div><p>entre \\(x-3\\).</p><p><strong>Desarrollo.</strong> La division da cociente \\(2x^2+3x-2\\). Comprobamos:</p><div class=\"math-display\">\\[\n(x-3)(2x^2+3x-2)=2x^3-3x^2-11x+6.\n\\]</div><p>Por tanto, el resto es \\(0\\).</p><p><strong>Respuesta final.</strong></p><div class=\"math-display\">\\[\n2x^3-3x^2-11x+6=(x-3)(2x^2+3x-2).\n\\]</div>"
          },
          "commonError": {
            "title": "No dejar huecos de grados",
            "titleText": "No dejar huecos de grados",
            "tagId": "",
            "html": "<p>Si falta un termino intermedio, por ejemplo \\(0x^2\\), hay que tenerlo presente para que la resta quede bien alineada.</p>"
          },
          "guidedExercises": [
            {
              "tagId": "GX-C02.S03-01",
              "title": "Division por una raiz conocida",
              "promptHtml": "<p>Divide \\(x^3-6x^2+11x-6\\) entre \\(x-1\\).</p><p><strong>Pista 1.</strong> La division es exacta.</p>",
              "answerHtml": "<p>Cociente: \\(x^2-5x+6\\). Resto: \\(0\\).</p>",
              "solutionHtml": "<p>Al dividir \\(x^3-6x^2+11x-6\\) entre \\(x-1\\) se obtiene</p><div class=\"math-display\">\\[\nx^2-5x+6\n\\]</div><p>como cociente y resto \\(0\\). En efecto,</p><div class=\"math-display\">\\[\n(x-1)(x^2-5x+6)=x^3-6x^2+11x-6.\n\\]</div>"
            },
            {
              "tagId": "GX-C02.S03-02",
              "title": "Division con resto",
              "promptHtml": "<p>Divide \\(3x^3+x^2-10x+8\\) entre \\(x+2\\).</p><p><strong>Pista 1.</strong> Puedes usar Ruffini con \\(-2\\).</p>",
              "answerHtml": "<p>Cociente: \\(3x^2-5x\\). Resto: \\(8\\).</p>",
              "solutionHtml": "<p>Con Ruffini para \\(-2\\):</p><div class=\"math-display\">\\[\n\\begin{array}{r|rrrr}\n-2 & 3 & 1 & -10 & 8 \\\\\n   &   & -6 & 10 & 0 \\\\\n\\hline\n   & 3 & -5 & 0 & 8\n\\end{array}\n\\]</div><p>Luego</p><div class=\"math-display\">\\[\n3x^3+x^2-10x+8=(x+2)(3x^2-5x)+8.\n\\]</div>"
            }
          ],
          "practice": {
            "label": "Practica autonoma graduada",
            "items": [
              {
                "tagId": "PX-C02.S03-01",
                "prompt": "Divide \\(x^2-5x+6\\) entre \\(x-2\\)."
              },
              {
                "tagId": "PX-C02.S03-02",
                "prompt": "Divide \\(2x^2+x-3\\) entre \\(x+1\\)."
              },
              {
                "tagId": "PX-C02.S03-03",
                "prompt": "Divide \\(x^3+4x^2+4x\\) entre \\(x\\)."
              },
              {
                "tagId": "PX-C02.S03-04",
                "prompt": "Divide \\(4x^3-4\\) entre \\(x-1\\)."
              },
              {
                "tagId": "PX-C02.S03-05",
                "prompt": "Divide \\(x^3-1\\) entre \\(x+1\\)."
              },
              {
                "tagId": "PX-C02.S03-06",
                "prompt": "Divide \\(2x^3+5x^2-3\\) entre \\(x+3\\)."
              }
            ],
            "answersHtml": "<ol><li><p>Cociente: \\(x-3\\). Resto: \\(0\\).</p></li><li><p>Cociente: \\(2x-1\\). Resto: \\(-2\\).</p></li><li><p>Cociente: \\(x^2+4x+4\\). Resto: \\(0\\).</p></li><li><p>Cociente: \\(4x^2+4x+4\\). Resto: \\(0\\).</p></li><li><p>Cociente: \\(x^2-x+1\\). Resto: \\(-2\\).</p></li><li><p>Cociente: \\(2x^2-x+3\\). Resto: \\(-12\\).</p></li></ol>",
            "solutionsHtml": "<ol><li><p>\\(x^2-5x+6=(x-2)(x-3)\\).</p></li><li><p>\\(2x^2+x-3=(x+1)(2x-1)-2\\).</p></li><li><p>\\(x^3+4x^2+4x=x(x^2+4x+4)\\).</p></li><li><p>\\(4x^3-4=(x-1)(4x^2+4x+4)\\).</p></li><li><p>\\(x^3-1=(x+1)(x^2-x+1)-2\\).</p></li><li><p>\\(2x^3+5x^2-3=(x+3)(2x^2-x+3)-12\\).</p></li></ol>"
          },
          "challenge": {}
        },
        {
          "id": "C02.S04",
          "title": "Teorema del resto, del factor y parametros",
          "rawTitle": "[C02.S04] Teorema del resto, del factor y parametros",
          "objectives": [
            {
              "label": "Objetivos de aprendizaje",
              "html": "<ul><li><p>Calcular restos sin hacer la division completa.</p></li><li><p>Usar condiciones de divisibilidad para hallar parametros.</p></li></ul>"
            }
          ],
          "prerequisites": [
            {
              "label": "Prerrequisitos",
              "html": "<ul><li><p>Valor numerico y division de polinomios.</p></li></ul>"
            }
          ],
          "theory": {
            "title": "Idea minima",
            "titleText": "Idea minima",
            "tagId": "",
            "html": "<p>El resto de dividir \\(P(x)\\) entre \\(x-a\\) es \\(P(a)\\). Ademas, \\(x-a\\) es factor de \\(P(x)\\) si y solo si \\(P(a)=0\\).</p>"
          },
          "method": {
            "title": "Como reconocer y resolver",
            "titleText": "Como reconocer y resolver",
            "tagId": "",
            "html": "<ol><li><p>Si piden un resto, evalua el polinomio en el numero adecuado.</p></li><li><p>Si piden que un binomio sea factor, iguala la evaluacion a \\(0\\).</p></li><li><p>Si hay un parametro, resuelve la ecuacion resultante.</p></li></ol>"
          },
          "solvedExample": {
            "title": "[EX-C02.S04-01] Hallar un parametro por divisibilidad",
            "titleText": "Hallar un parametro por divisibilidad",
            "tagId": "EX-C02.S04-01",
            "html": "<p>Determina \\(a\\) para que \\(x-2\\) sea factor de</p><div class=\"math-display\">\\[\nP(x)=x^3+ax^2-5x+6.\n\\]</div><p><strong>Desarrollo.</strong> Debe cumplirse \\(P(2)=0\\):</p><div class=\"math-display\">\\[\n2^3+a\\cdot 2^2-5\\cdot 2+6=0\n\\]</div><div class=\"math-display\">\\[\n8+4a-10+6=0 \\Longrightarrow 4a+4=0 \\Longrightarrow a=-1.\n\\]</div><p><strong>Respuesta final.</strong></p><div class=\"math-display\">\\[\na=-1.\n\\]</div>"
          },
          "commonError": {
            "title": "Confundir el signo del factor",
            "titleText": "Confundir el signo del factor",
            "tagId": "",
            "html": "<p>Si el divisor es \\(x+2\\), el numero que hay que sustituir es \\(-2\\), no \\(2\\).</p>"
          },
          "guidedExercises": [
            {
              "tagId": "GX-C02.S04-01",
              "title": "Resto por evaluacion",
              "promptHtml": "<p>Halla el resto de dividir \\(x^3-2x+5\\) entre \\(x-1\\).</p><p><strong>Pista 1.</strong> Usa \\(P(1)\\).</p>",
              "answerHtml": "<p>Resto: \\(4\\).</p>",
              "solutionHtml": "<div class=\"math-display\">\\[\nP(1)=1-2+5=4.\n\\]</div><p>Ese es el resto de la division entre \\(x-1\\).</p>"
            },
            {
              "tagId": "GX-C02.S04-02",
              "title": "Hacer que un binomio sea factor",
              "promptHtml": "<p>Determina \\(b\\) para que \\(x+1\\) sea factor de \\(x^2+bx-6\\).</p><p><strong>Pista 1.</strong> Sustituye \\(x=-1\\).</p>",
              "answerHtml": "<div class=\"math-display\">\\[\nb=-5.\n\\]</div>",
              "solutionHtml": "<p>Si \\(x+1\\) es factor, entonces</p><div class=\"math-display\">\\[\n(-1)^2+b(-1)-6=0.\n\\]</div><p>Por tanto,</p><div class=\"math-display\">\\[\n1-b-6=0 \\Longrightarrow -b-5=0 \\Longrightarrow b=-5.\n\\]</div>"
            }
          ],
          "practice": {
            "label": "Practica autonoma graduada",
            "items": [
              {
                "tagId": "PX-C02.S04-01",
                "prompt": "Halla el resto de dividir \\(x^2+3x-1\\) entre \\(x-2\\)."
              },
              {
                "tagId": "PX-C02.S04-02",
                "prompt": "Decide si \\(x-3\\) es factor de \\(x^2-5x+6\\)."
              },
              {
                "tagId": "PX-C02.S04-03",
                "prompt": "Determina \\(a\\) para que \\(x+2\\) sea factor de \\(x^2+ax-8\\)."
              },
              {
                "tagId": "PX-C02.S04-04",
                "prompt": "Halla el resto de dividir \\(2x^3-x+1\\) entre \\(x+1\\)."
              },
              {
                "tagId": "PX-C02.S04-05",
                "prompt": "Determina \\(c\\) para que el resto de dividir \\(x^2+cx+4\\) entre \\(x-1\\) sea \\(8\\)."
              },
              {
                "tagId": "PX-C02.S04-06",
                "prompt": "Decide si \\(x=1\\) es raiz de \\(x^3-4x+3\\)."
              }
            ],
            "answersHtml": "<ol><li><p>\\(9\\)</p></li><li><p>Si</p></li><li><p>\\(a=-2\\)</p></li><li><p>\\(0\\)</p></li><li><p>\\(c=3\\)</p></li><li><p>Si</p></li></ol>",
            "solutionsHtml": "<ol><li><p>\\(2^2+3\\cdot 2-1=9\\).</p></li><li><p>\\(3^2-5\\cdot 3+6=0\\), luego \\(x-3\\) es factor.</p></li><li><p>\\(P(-2)=4-2a-8=0\\), de donde \\(a=-2\\).</p></li><li><p>\\(P(-1)=2(-1)^3-(-1)+1=-2+1+1=0\\).</p></li><li><p>\\(1+c+4=8\\), luego \\(c=3\\).</p></li><li><p>\\(1-4+3=0\\), asi que \\(x=1\\) es raiz.</p></li></ol>"
          },
          "challenge": {}
        },
        {
          "id": "C02.S05",
          "title": "Raices y factorizacion",
          "rawTitle": "[C02.S05] Raices y factorizacion",
          "objectives": [
            {
              "label": "Objetivos de aprendizaje",
              "html": "<ul><li><p>Hallar raices enteras o evidentes.</p></li><li><p>Escribir una factorizacion util del polinomio.</p></li></ul>"
            }
          ],
          "prerequisites": [
            {
              "label": "Prerrequisitos",
              "html": "<ul><li><p>Productos notables, division y teorema del factor.</p></li></ul>"
            }
          ],
          "theory": {
            "title": "Idea minima",
            "titleText": "Idea minima",
            "tagId": "",
            "html": "<p>Factorizar es escribir un polinomio como producto de otros mas sencillos. Buscar una raiz permite extraer un factor lineal. A veces tambien se puede sacar factor comun o reconocer una diferencia de cuadrados.</p>"
          },
          "method": {
            "title": "Como reconocer y resolver",
            "titleText": "Como reconocer y resolver",
            "tagId": "",
            "html": "<ol><li><p>Busca factor comun si existe.</p></li><li><p>Prueba raices sencillas usando el teorema del factor.</p></li><li><p>Divide para reducir el grado y sigue factorizando.</p></li></ol>"
          },
          "solvedExample": {
            "title": "[EX-C02.S05-01] Factorizacion completa",
            "titleText": "Factorizacion completa",
            "tagId": "EX-C02.S05-01",
            "html": "<p>Factoriza</p><div class=\"math-display\">\\[\nx^3-6x^2+11x-6.\n\\]</div><p><strong>Desarrollo.</strong> Probamos \\(x=1\\):</p><div class=\"math-display\">\\[\n1-6+11-6=0.\n\\]</div><p>Luego \\(x-1\\) es factor. Al dividir, queda \\(x^2-5x+6\\), que factoriza como</p><div class=\"math-display\">\\[\nx^2-5x+6=(x-2)(x-3).\n\\]</div><p><strong>Respuesta final.</strong></p><div class=\"math-display\">\\[\nx^3-6x^2+11x-6=(x-1)(x-2)(x-3).\n\\]</div>"
          },
          "commonError": {
            "title": "Parar demasiado pronto",
            "titleText": "Parar demasiado pronto",
            "tagId": "",
            "html": "<p>Encontrar un factor no basta si el resto del polinomio aun se puede descomponer. Hay que seguir hasta dejar factores irreducibles en el nivel trabajado.</p>"
          },
          "guidedExercises": [
            {
              "tagId": "GX-C02.S05-01",
              "title": "Diferencia de cuadrados",
              "promptHtml": "<p>Factoriza \\(x^2-9\\).</p><p><strong>Pista 1.</strong> Es una diferencia de cuadrados.</p>",
              "answerHtml": "<div class=\"math-display\">\\[\nx^2-9=(x-3)(x+3).\n\\]</div>",
              "solutionHtml": "<div class=\"math-display\">\\[\nx^2-9=x^2-3^2=(x-3)(x+3).\n\\]</div>"
            },
            {
              "tagId": "GX-C02.S05-02",
              "title": "Sustitucion en bicuadradas",
              "promptHtml": "<p>Factoriza \\(x^4-5x^2+4\\).</p><p><strong>Pista 1.</strong> Haz \\(y=x^2\\).</p>",
              "answerHtml": "<div class=\"math-display\">\\[\nx^4-5x^2+4=(x-1)(x+1)(x-2)(x+2).\n\\]</div>",
              "solutionHtml": "<p>Tomamos \\(y=x^2\\). Entonces</p><div class=\"math-display\">\\[\ny^2-5y+4=(y-1)(y-4).\n\\]</div><p>Volviendo a \\(x\\):</p><div class=\"math-display\">\\[\n(x^2-1)(x^2-4)=(x-1)(x+1)(x-2)(x+2).\n\\]</div>"
            }
          ],
          "practice": {
            "label": "Practica autonoma graduada",
            "items": [
              {
                "tagId": "PX-C02.S05-01",
                "prompt": "Factoriza \\(x^2+5x+6\\)."
              },
              {
                "tagId": "PX-C02.S05-02",
                "prompt": "Factoriza \\(x^3-4x^2+4x\\)."
              },
              {
                "tagId": "PX-C02.S05-03",
                "prompt": "Factoriza \\(x^2-1\\)."
              },
              {
                "tagId": "PX-C02.S05-04",
                "prompt": "Factoriza \\(2x^2-8\\)."
              },
              {
                "tagId": "PX-C02.S05-05",
                "prompt": "Factoriza \\(x^3+3x^2\\)."
              },
              {
                "tagId": "PX-C02.S05-06",
                "prompt": "Factoriza \\(x^4-16\\)."
              }
            ],
            "answersHtml": "<ol><li><p>\\((x+2)(x+3)\\)</p></li><li><p>\\(x(x-2)^2\\)</p></li><li><p>\\((x-1)(x+1)\\)</p></li><li><p>\\(2(x-2)(x+2)\\)</p></li><li><p>\\(x^2(x+3)\\)</p></li><li><p>\\((x-2)(x+2)(x^2+4)\\)</p></li></ol>",
            "solutionsHtml": "<ol><li><p>Dos numeros que suman \\(5\\) y multiplican \\(6\\): \\(2\\) y \\(3\\).</p></li><li><p>Saco factor comun \\(x\\): \\(x(x^2-4x+4)=x(x-2)^2\\).</p></li><li><p>Diferencia de cuadrados.</p></li><li><p>\\(2x^2-8=2(x^2-4)=2(x-2)(x+2)\\).</p></li><li><p>Factor comun \\(x^2\\): \\(x^2(x+3)\\).</p></li><li><p>\\(x^4-16=(x^2-4)(x^2+4)=(x-2)(x+2)(x^2+4)\\).</p></li></ol>"
          },
          "challenge": {}
        },
        {
          "id": "C02.S06",
          "title": "Fracciones algebraicas: dominio y simplificacion",
          "rawTitle": "[C02.S06] Fracciones algebraicas: dominio y simplificacion",
          "objectives": [
            {
              "label": "Objetivos de aprendizaje",
              "html": "<ul><li><p>Determinar el dominio de una fraccion algebraica.</p></li><li><p>Simplificar sin perder las restricciones originales.</p></li></ul>"
            }
          ],
          "prerequisites": [
            {
              "label": "Prerrequisitos",
              "html": "<ul><li><p>Factorizacion basica.</p></li></ul>"
            }
          ],
          "theory": {
            "title": "Idea minima",
            "titleText": "Idea minima",
            "tagId": "",
            "html": "<p>Una fraccion algebraica no esta definida cuando su denominador vale \\(0\\). Aunque un factor se pueda simplificar, la restriccion original sigue formando parte del dominio.</p>"
          },
          "method": {
            "title": "Como reconocer y resolver",
            "titleText": "Como reconocer y resolver",
            "tagId": "",
            "html": "<ol><li><p>Factoriza numerador y denominador.</p></li><li><p>Impone que el denominador original sea distinto de \\(0\\).</p></li><li><p>Simplifica factores comunes y conserva las restricciones.</p></li></ol>"
          },
          "solvedExample": {
            "title": "[EX-C02.S06-01] Simplificar con dominio",
            "titleText": "Simplificar con dominio",
            "tagId": "EX-C02.S06-01",
            "html": "<p>Simplifica</p><div class=\"math-display\">\\[\n\\frac{x^2-9}{x^2-3x}.\n\\]</div><p><strong>Desarrollo.</strong></p><div class=\"math-display\">\\[\n\\frac{x^2-9}{x^2-3x}=\\frac{(x-3)(x+3)}{x(x-3)}.\n\\]</div><p>El denominador original se anula en \\(x=0\\) y en \\(x=3\\), asi que</p><div class=\"math-display\">\\[\nx\\neq 0,\\qquad x\\neq 3.\n\\]</div><p>Simplificando el factor comun:</p><div class=\"math-display\">\\[\n\\frac{x^2-9}{x^2-3x}=\\frac{x+3}{x},\\qquad x\\neq 0,3.\n\\]</div><p><strong>Respuesta final.</strong></p><div class=\"math-display\">\\[\n\\frac{x^2-9}{x^2-3x}=\\frac{x+3}{x},\\qquad D=\\mathbb{R}\\setminus\\{0,3\\}.\n\\]</div>"
          },
          "commonError": {
            "title": "Borrar una restriccion al simplificar",
            "titleText": "Borrar una restriccion al simplificar",
            "tagId": "",
            "html": "<p>El factor \\(x-3\\) se simplifica, pero eso no significa que \\(x=3\\) pase a estar permitido. El dominio siempre se decide antes de simplificar.</p>"
          },
          "guidedExercises": [
            {
              "tagId": "GX-C02.S06-01",
              "title": "Simplificacion con dos restricciones",
              "promptHtml": "<p>Simplifica</p><div class=\"math-display\">\\[\n\\frac{x^2-4}{x^2-2x}.\n\\]</div><p><strong>Pista 1.</strong> Factoriza numerador y denominador.</p>",
              "answerHtml": "<div class=\"math-display\">\\[\n\\frac{x^2-4}{x^2-2x}=\\frac{x+2}{x},\\qquad x\\neq 0,2.\n\\]</div>",
              "solutionHtml": "<div class=\"math-display\">\\[\n\\frac{x^2-4}{x^2-2x}=\\frac{(x-2)(x+2)}{x(x-2)}.\n\\]</div><p>Las restricciones del denominador original son \\(x\\neq 0\\) y \\(x\\neq 2\\). Tras simplificar:</p><div class=\"math-display\">\\[\n\\frac{x+2}{x},\\qquad x\\neq 0,2.\n\\]</div>"
            },
            {
              "tagId": "GX-C02.S06-02",
              "title": "Binomio al cuadrado",
              "promptHtml": "<p>Simplifica</p><div class=\"math-display\">\\[\n\\frac{x^2-1}{x^2+2x+1}.\n\\]</div><p><strong>Pista 1.</strong> El denominador es un cuadrado perfecto.</p>",
              "answerHtml": "<div class=\"math-display\">\\[\n\\frac{x^2-1}{x^2+2x+1}=\\frac{x-1}{x+1},\\qquad x\\neq -1.\n\\]</div>",
              "solutionHtml": "<div class=\"math-display\">\\[\n\\frac{x^2-1}{x^2+2x+1}=\\frac{(x-1)(x+1)}{(x+1)^2}.\n\\]</div><p>Como \\(x+1\\neq 0\\), se tiene \\(x\\neq -1\\). Simplificando:</p><div class=\"math-display\">\\[\n\\frac{x-1}{x+1},\\qquad x\\neq -1.\n\\]</div>"
            }
          ],
          "practice": {
            "label": "Practica autonoma graduada",
            "items": [
              {
                "tagId": "PX-C02.S06-01",
                "prompt": "Indica el dominio de \\(\\dfrac{1}{x-4}\\)."
              },
              {
                "tagId": "PX-C02.S06-02",
                "prompt": "Simplifica \\(\\dfrac{x^2-x}{x^2-1}\\)."
              },
              {
                "tagId": "PX-C02.S06-03",
                "prompt": "Simplifica \\(\\dfrac{x^2-16}{x^2-8x+16}\\)."
              },
              {
                "tagId": "PX-C02.S06-04",
                "prompt": "Simplifica \\(\\dfrac{x^2+5x}{x}\\)."
              },
              {
                "tagId": "PX-C02.S06-05",
                "prompt": "Simplifica \\(\\dfrac{x^2-25}{5-x}\\)."
              },
              {
                "tagId": "PX-C02.S06-06",
                "prompt": "Simplifica \\(\\dfrac{x^2-6x+9}{x^2-9}\\)."
              }
            ],
            "answersHtml": "<ol><li><p>\\(D=\\mathbb{R}\\setminus\\{4\\}\\)</p></li><li><p>\\(\\dfrac{x}{x+1}\\), con \\(x\\neq -1,1\\)</p></li><li><p>\\(\\dfrac{x+4}{x-4}\\), con \\(x\\neq 4\\)</p></li><li><p>\\(x+5\\), con \\(x\\neq 0\\)</p></li><li><p>\\(-(x+5)\\), con \\(x\\neq 5\\)</p></li><li><p>\\(\\dfrac{x-3}{x+3}\\), con \\(x\\neq -3,3\\)</p></li></ol>",
            "solutionsHtml": "<ol><li><p>El denominador se anula en \\(x=4\\).</p></li><li><p>\\(\\dfrac{x(x-1)}{(x-1)(x+1)}=\\dfrac{x}{x+1}\\), con \\(x\\neq -1,1\\).</p></li><li><p>\\(\\dfrac{(x-4)(x+4)}{(x-4)^2}=\\dfrac{x+4}{x-4}\\), con \\(x\\neq 4\\).</p></li><li><p>\\(\\dfrac{x(x+5)}{x}=x+5\\), con \\(x\\neq 0\\).</p></li><li><p>\\(5-x=-(x-5)\\), luego \\(\\dfrac{(x-5)(x+5)}{5-x}=-(x+5)\\), con \\(x\\neq 5\\).</p></li><li><p>\\(\\dfrac{(x-3)^2}{(x-3)(x+3)}=\\dfrac{x-3}{x+3}\\), con \\(x\\neq -3,3\\).</p></li></ol>"
          },
          "challenge": {}
        },
        {
          "id": "C02.S07",
          "title": "Suma y resta de fracciones algebraicas",
          "rawTitle": "[C02.S07] Suma y resta de fracciones algebraicas",
          "objectives": [
            {
              "label": "Objetivos de aprendizaje",
              "html": "<ul><li><p>Hallar el comun denominador adecuado.</p></li><li><p>Reducir y simplificar el resultado final.</p></li></ul>"
            }
          ],
          "prerequisites": [
            {
              "label": "Prerrequisitos",
              "html": "<ul><li><p>Fracciones algebraicas y factorizacion basica.</p></li></ul>"
            }
          ],
          "theory": {
            "title": "Idea minima",
            "titleText": "Idea minima",
            "tagId": "",
            "html": "<p>Para sumar o restar fracciones algebraicas hay que expresarlas con el mismo denominador. Igual que con las fracciones numericas, conviene simplificar al final.</p>"
          },
          "method": {
            "title": "Como reconocer y resolver",
            "titleText": "Como reconocer y resolver",
            "tagId": "",
            "html": "<ol><li><p>Factoriza denominadores si hace falta.</p></li><li><p>Busca el minimo comun denominador.</p></li><li><p>Reescribe, suma o resta numeradores y simplifica.</p></li></ol>"
          },
          "solvedExample": {
            "title": "[EX-C02.S07-01] Suma con denominadores distintos",
            "titleText": "Suma con denominadores distintos",
            "tagId": "EX-C02.S07-01",
            "html": "<p>Calcula</p><div class=\"math-display\">\\[\n\\frac{1}{x-1}+\\frac{2}{x+1}.\n\\]</div><p><strong>Desarrollo.</strong> El comun denominador es \\((x-1)(x+1)=x^2-1\\):</p><div class=\"math-display\">\\[\n\\frac{x+1}{x^2-1}+\\frac{2(x-1)}{x^2-1}=\n\\frac{x+1+2x-2}{x^2-1}=\n\\frac{3x-1}{x^2-1}.\n\\]</div><p><strong>Respuesta final.</strong></p><div class=\"math-display\">\\[\n\\frac{1}{x-1}+\\frac{2}{x+1}=\\frac{3x-1}{x^2-1}.\n\\]</div>"
          },
          "commonError": {
            "title": "Sumar denominadores",
            "titleText": "Sumar denominadores",
            "tagId": "",
            "html": "<p>No se puede escribir</p><div class=\"math-display\">\\[\n\\frac{1}{x-1}+\\frac{2}{x+1}=\\frac{3}{2x}.\n\\]</div><p>Hay que igualar denominadores, no sumarlos.</p>"
          },
          "guidedExercises": [
            {
              "tagId": "GX-C02.S07-01",
              "title": "Denominador ya relacionado",
              "promptHtml": "<p>Calcula</p><div class=\"math-display\">\\[\n\\frac{1}{x}+\\frac{1}{2x}.\n\\]</div><p><strong>Pista 1.</strong> El comun denominador es \\(2x\\).</p>",
              "answerHtml": "<div class=\"math-display\">\\[\n\\frac{1}{x}+\\frac{1}{2x}=\\frac{3}{2x}.\n\\]</div>",
              "solutionHtml": "<div class=\"math-display\">\\[\n\\frac{1}{x}=\\frac{2}{2x}.\n\\]</div><p>Entonces</p><div class=\"math-display\">\\[\n\\frac{2}{2x}+\\frac{1}{2x}=\\frac{3}{2x}.\n\\]</div>"
            },
            {
              "tagId": "GX-C02.S07-02",
              "title": "Misma base, resta sencilla",
              "promptHtml": "<p>Calcula</p><div class=\"math-display\">\\[\n\\frac{3}{x+2}-\\frac{1}{x+2}.\n\\]</div>",
              "answerHtml": "<div class=\"math-display\">\\[\n\\frac{2}{x+2}.\n\\]</div>",
              "solutionHtml": "<p>Como el denominador ya coincide:</p><div class=\"math-display\">\\[\n\\frac{3}{x+2}-\\frac{1}{x+2}=\\frac{2}{x+2}.\n\\]</div>"
            }
          ],
          "practice": {
            "label": "Practica autonoma graduada",
            "items": [
              {
                "tagId": "PX-C02.S07-01",
                "prompt": "Calcula \\(\\dfrac{1}{x}+\\dfrac{2}{x}\\)."
              },
              {
                "tagId": "PX-C02.S07-02",
                "prompt": "Calcula \\(\\dfrac{1}{x-2}+\\dfrac{1}{x+2}\\)."
              },
              {
                "tagId": "PX-C02.S07-03",
                "prompt": "Calcula \\(\\dfrac{3}{x}-\\dfrac{1}{2x}\\)."
              },
              {
                "tagId": "PX-C02.S07-04",
                "prompt": "Calcula \\(\\dfrac{2}{x+1}-\\dfrac{1}{x-1}\\)."
              },
              {
                "tagId": "PX-C02.S07-05",
                "prompt": "Calcula \\(\\dfrac{x}{x+1}+\\dfrac{1}{x+1}\\)."
              },
              {
                "tagId": "PX-C02.S07-06",
                "prompt": "Calcula \\(\\dfrac{1}{x^2-1}-\\dfrac{1}{x-1}\\)."
              }
            ],
            "answersHtml": "<ol><li><p>\\(\\dfrac{3}{x}\\)</p></li><li><p>\\(\\dfrac{2x}{x^2-4}\\)</p></li><li><p>\\(\\dfrac{5}{2x}\\)</p></li><li><p>\\(\\dfrac{x-3}{x^2-1}\\)</p></li><li><p>\\(1\\)</p></li><li><p>\\(-\\dfrac{x}{x^2-1}\\)</p></li></ol>",
            "solutionsHtml": "<ol><li><p>\\(\\dfrac{1}{x}+\\dfrac{2}{x}=\\dfrac{3}{x}\\).</p></li><li><p>\\(\\dfrac{x+2+x-2}{(x-2)(x+2)}=\\dfrac{2x}{x^2-4}\\).</p></li><li><p>\\(\\dfrac{6}{2x}-\\dfrac{1}{2x}=\\dfrac{5}{2x}\\).</p></li><li><p>\\(\\dfrac{2(x-1)-(x+1)}{(x+1)(x-1)}=\\dfrac{x-3}{x^2-1}\\).</p></li><li><p>\\(\\dfrac{x+1}{x+1}=1\\).</p></li><li><p>\\(\\dfrac{1-(x+1)}{x^2-1}=-\\dfrac{x}{x^2-1}\\).</p></li></ol>"
          },
          "challenge": {}
        },
        {
          "id": "C02.S08",
          "title": "Producto, cociente y operaciones combinadas",
          "rawTitle": "[C02.S08] Producto, cociente y operaciones combinadas",
          "objectives": [
            {
              "label": "Objetivos de aprendizaje",
              "html": "<ul><li><p>Multiplicar y dividir fracciones algebraicas.</p></li><li><p>Simplificar operaciones combinadas con criterio.</p></li></ul>"
            }
          ],
          "prerequisites": [
            {
              "label": "Prerrequisitos",
              "html": "<ul><li><p>Fracciones algebraicas y factorizacion.</p></li></ul>"
            }
          ],
          "theory": {
            "title": "Idea minima",
            "titleText": "Idea minima",
            "tagId": "",
            "html": "<p>Para multiplicar se multiplican numeradores y denominadores. Para dividir, se multiplica por la fraccion inversa. Conviene factorizar antes de simplificar.</p>"
          },
          "method": {
            "title": "Como reconocer y resolver",
            "titleText": "Como reconocer y resolver",
            "tagId": "",
            "html": "<ol><li><p>Factoriza numeradores y denominadores.</p></li><li><p>Si hay cociente, cambia la division por producto de la inversa.</p></li><li><p>Simplifica factores comunes antes de expandir.</p></li></ol>"
          },
          "solvedExample": {
            "title": "[EX-C02.S08-01] Cociente de expresiones racionales",
            "titleText": "Cociente de expresiones racionales",
            "tagId": "EX-C02.S08-01",
            "html": "<p>Simplifica</p><div class=\"math-display\">\\[\n\\frac{x^2-1}{x^2-4}:\\frac{x+1}{x-2}.\n\\]</div><p><strong>Desarrollo.</strong></p><div class=\"math-display\">\\[\n\\frac{(x-1)(x+1)}{(x-2)(x+2)}\\cdot \\frac{x-2}{x+1}.\n\\]</div><p>Se simplifican \\(x-2\\) y \\(x+1\\):</p><div class=\"math-display\">\\[\n\\frac{x-1}{x+2}.\n\\]</div><p><strong>Respuesta final.</strong></p><div class=\"math-display\">\\[\n\\frac{x^2-1}{x^2-4}:\\frac{x+1}{x-2}=\\frac{x-1}{x+2}.\n\\]</div>"
          },
          "commonError": {
            "title": "Dividir sin invertir",
            "titleText": "Dividir sin invertir",
            "tagId": "",
            "html": "<p>En una division de fracciones no se divide termino a termino: hay que multiplicar por la inversa de la segunda fraccion.</p>"
          },
          "guidedExercises": [
            {
              "tagId": "GX-C02.S08-01",
              "title": "Producto con cancelacion",
              "promptHtml": "<p>Simplifica</p><div class=\"math-display\">\\[\n\\frac{x}{x+1}\\cdot \\frac{x+1}{2}.\n\\]</div>",
              "answerHtml": "<div class=\"math-display\">\\[\n\\frac{x}{2}.\n\\]</div>",
              "solutionHtml": "<div class=\"math-display\">\\[\n\\frac{x}{x+1}\\cdot \\frac{x+1}{2}=\\frac{x}{2}.\n\\]</div>"
            },
            {
              "tagId": "GX-C02.S08-02",
              "title": "Cociente con simplificacion",
              "promptHtml": "<p>Simplifica</p><div class=\"math-display\">\\[\n\\frac{x^2-4}{x+2}:x.\n\\]</div><p><strong>Pista 1.</strong> Escribe la division entre \\(x\\) como division por \\(\\frac{x}{1}\\).</p>",
              "answerHtml": "<div class=\"math-display\">\\[\n\\frac{x-2}{x}.\n\\]</div>",
              "solutionHtml": "<div class=\"math-display\">\\[\n\\frac{x^2-4}{x+2}:x=\\frac{(x-2)(x+2)}{x+2}\\cdot \\frac{1}{x}=\\frac{x-2}{x}.\n\\]</div>"
            }
          ],
          "practice": {
            "label": "Practica autonoma graduada",
            "items": [
              {
                "tagId": "PX-C02.S08-01",
                "prompt": "Simplifica \\(\\dfrac{x-1}{x+3}\\cdot \\dfrac{x+3}{x+1}\\)."
              },
              {
                "tagId": "PX-C02.S08-02",
                "prompt": "Simplifica \\(\\dfrac{x^2-9}{x-3}\\cdot \\dfrac{1}{x}\\)."
              },
              {
                "tagId": "PX-C02.S08-03",
                "prompt": "Simplifica \\(\\dfrac{x+2}{x}:\\dfrac{2}{x}\\)."
              },
              {
                "tagId": "PX-C02.S08-04",
                "prompt": "Simplifica \\(\\dfrac{x}{x-1}\\cdot \\dfrac{x-1}{x}\\)."
              },
              {
                "tagId": "PX-C02.S08-05",
                "prompt": "Simplifica \\(\\dfrac{x^2-1}{x}:(x-1)\\)."
              },
              {
                "tagId": "PX-C02.S08-06",
                "prompt": "Simplifica \\(\\dfrac{2}{x+1}\\cdot \\dfrac{x^2-1}{3}\\)."
              }
            ],
            "answersHtml": "<ol><li><p>\\(\\dfrac{x-1}{x+1}\\)</p></li><li><p>\\(\\dfrac{x+3}{x}\\)</p></li><li><p>\\(\\dfrac{x+2}{2}\\)</p></li><li><p>\\(1\\)</p></li><li><p>\\(\\dfrac{x+1}{x}\\)</p></li><li><p>\\(\\dfrac{2(x-1)}{3}\\)</p></li></ol>",
            "solutionsHtml": "<ol><li><p>Se simplifica \\(x+3\\).</p></li><li><p>\\(\\dfrac{(x-3)(x+3)}{x-3}\\cdot \\dfrac{1}{x}=\\dfrac{x+3}{x}\\).</p></li><li><p>\\(\\dfrac{x+2}{x}\\cdot \\dfrac{x}{2}=\\dfrac{x+2}{2}\\).</p></li><li><p>Todos los factores se cancelan y queda \\(1\\).</p></li><li><p>\\(\\dfrac{(x-1)(x+1)}{x}\\cdot \\dfrac{1}{x-1}=\\dfrac{x+1}{x}\\).</p></li><li><p>\\(\\dfrac{2}{x+1}\\cdot \\dfrac{(x-1)(x+1)}{3}=\\dfrac{2(x-1)}{3}\\).</p></li></ol>"
          },
          "challenge": {}
        },
        {
          "id": "C02.S09",
          "title": "Ecuaciones con fracciones algebraicas",
          "rawTitle": "[C02.S09] Ecuaciones con fracciones algebraicas",
          "objectives": [
            {
              "label": "Objetivos de aprendizaje",
              "html": "<ul><li><p>Resolver ecuaciones racionales controlando restricciones.</p></li><li><p>Detectar cuando una ecuacion no tiene solucion admisible.</p></li></ul>"
            }
          ],
          "prerequisites": [
            {
              "label": "Prerrequisitos",
              "html": "<ul><li><p>Operaciones con fracciones algebraicas.</p></li></ul>"
            }
          ],
          "theory": {
            "title": "Idea minima",
            "titleText": "Idea minima",
            "tagId": "",
            "html": "<p>En una ecuacion racional hay que imponer primero las restricciones del denominador. Despues se eliminan denominadores multiplicando por el comun denominador y al final se comprueba que las soluciones halladas son admisibles.</p>"
          },
          "method": {
            "title": "Como reconocer y resolver",
            "titleText": "Como reconocer y resolver",
            "tagId": "",
            "html": "<ol><li><p>Escribe las restricciones del denominador.</p></li><li><p>Multiplica toda la ecuacion por el comun denominador.</p></li><li><p>Resuelve la ecuacion obtenida.</p></li><li><p>Rechaza las soluciones prohibidas.</p></li></ol>"
          },
          "solvedExample": {
            "title": "[EX-C02.S09-01] Ecuacion racional con dos soluciones",
            "titleText": "Ecuacion racional con dos soluciones",
            "tagId": "EX-C02.S09-01",
            "html": "<p>Resuelve</p><div class=\"math-display\">\\[\n\\frac{1}{x-1}+\\frac{1}{x+1}=\\frac{3}{4}.\n\\]</div><p><strong>Desarrollo.</strong> Restricciones: \\(x\\neq 1\\) y \\(x\\neq -1\\). Sumando la izquierda:</p><div class=\"math-display\">\\[\n\\frac{2x}{x^2-1}=\\frac{3}{4}.\n\\]</div><p>Multiplicamos en cruz:</p><div class=\"math-display\">\\[\n8x=3x^2-3.\n\\]</div><p>Entonces</p><div class=\"math-display\">\\[\n3x^2-8x-3=0.\n\\]</div><p>Resolviendo:</p><div class=\"math-display\">\\[\nx=\\frac{8\\pm \\sqrt{64+36}}{6}=\\frac{8\\pm 10}{6}.\n\\]</div><p>Por tanto</p><div class=\"math-display\">\\[\nx=3 \\quad \\text{o} \\quad x=-\\frac{1}{3}.\n\\]</div><p>Ambas soluciones son admisibles.</p><p><strong>Respuesta final.</strong></p><div class=\"math-display\">\\[\nx=3,\\qquad x=-\\frac{1}{3}.\n\\]</div>"
          },
          "commonError": {
            "title": "Olvidar las restricciones",
            "titleText": "Olvidar las restricciones",
            "tagId": "",
            "html": "<p>Si una solucion anula un denominador, no vale aunque aparezca al resolver la ecuacion reducida.</p>"
          },
          "guidedExercises": [
            {
              "tagId": "GX-C02.S09-01",
              "title": "Ecuacion inmediata",
              "promptHtml": "<p>Resuelve</p><div class=\"math-display\">\\[\n\\frac{2}{x}=1.\n\\]</div><p><strong>Pista 1.</strong> Recuerda que \\(x\\neq 0\\).</p>",
              "answerHtml": "<div class=\"math-display\">\\[\nx=2.\n\\]</div>",
              "solutionHtml": "<p>Como \\(x\\neq 0\\), multiplicamos por \\(x\\):</p><div class=\"math-display\">\\[\n2=x.\n\\]</div><p>Luego</p><div class=\"math-display\">\\[\nx=2.\n\\]</div>"
            },
            {
              "tagId": "GX-C02.S09-02",
              "title": "Fraccion igualada a un numero",
              "promptHtml": "<p>Resuelve</p><div class=\"math-display\">\\[\n\\frac{x+1}{x-2}=3.\n\\]</div><p><strong>Pista 1.</strong> La restriccion es \\(x\\neq 2\\).</p>",
              "answerHtml": "<div class=\"math-display\">\\[\nx=\\frac{7}{2}.\n\\]</div>",
              "solutionHtml": "<div class=\"math-display\">\\[\nx+1=3(x-2)=3x-6.\n\\]</div><p>Entonces</p><div class=\"math-display\">\\[\n7=2x \\Longrightarrow x=\\frac{7}{2}.\n\\]</div><p>No contradice la restriccion \\(x\\neq 2\\).</p>"
            }
          ],
          "practice": {
            "label": "Practica autonoma graduada",
            "items": [
              {
                "tagId": "PX-C02.S09-01",
                "prompt": "Resuelve \\(\\dfrac{1}{x}=5\\)."
              },
              {
                "tagId": "PX-C02.S09-02",
                "prompt": "Resuelve \\(\\dfrac{x}{x-1}=2\\)."
              },
              {
                "tagId": "PX-C02.S09-03",
                "prompt": "Resuelve \\(\\dfrac{3}{x+1}=1\\)."
              },
              {
                "tagId": "PX-C02.S09-04",
                "prompt": "Resuelve \\(\\dfrac{x-1}{x+1}=0\\)."
              },
              {
                "tagId": "PX-C02.S09-05",
                "prompt": "Resuelve \\(\\dfrac{1}{x-2}=\\dfrac{1}{x+2}\\)."
              },
              {
                "tagId": "PX-C02.S09-06",
                "prompt": "Resuelve \\(\\dfrac{2}{x-1}+1=3\\)."
              }
            ],
            "answersHtml": "<ol><li><p>\\(x=\\dfrac{1}{5}\\)</p></li><li><p>\\(x=2\\)</p></li><li><p>\\(x=2\\)</p></li><li><p>\\(x=1\\)</p></li><li><p>Sin solucion</p></li><li><p>\\(x=2\\)</p></li></ol>",
            "solutionsHtml": "<ol><li><p>\\(1=5x\\), luego \\(x=\\frac{1}{5}\\).</p></li><li><p>\\(x=2x-2\\), luego \\(x=2\\), que es admisible.</p></li><li><p>\\(3=x+1\\), luego \\(x=2\\).</p></li><li><p>Una fraccion vale \\(0\\) cuando el numerador vale \\(0\\) y el denominador no: \\(x=1\\).</p></li><li><p>Igualando en cruz sale \\(x+2=x-2\\), contradiccion. No hay solucion.</p></li><li><p>\\(\\dfrac{2}{x-1}=2\\), luego \\(1=x-1\\) y por tanto \\(x=2\\).</p></li></ol>"
          },
          "challenge": {}
        }
      ]
    },
    {
      "id": "C03",
      "slug": "03_ecuaciones_sistemas",
      "title": "Ecuaciones y sistemas",
      "summaryHtml": "<p>Este capitulo desarrolla las secciones <code>C03.S01-C03.S11</code> de la matriz de cobertura a partir de <code>sources/Relacion tema 3.pdf</code>. La prioridad didactica es reconocer el tipo de ecuacion o sistema y escoger un metodo coherente antes de operar.</p>",
      "studyRouteHtml": "",
      "sectionCount": 11,
      "sections": [
        {
          "id": "C03.S01",
          "title": "Ecuaciones racionales",
          "rawTitle": "[C03.S01] Ecuaciones racionales",
          "objectives": [
            {
              "label": "Objetivos de aprendizaje",
              "html": "<ul><li><p>Resolver ecuaciones con fracciones algebraicas.</p></li><li><p>Controlar las restricciones del denominador.</p></li></ul>"
            }
          ],
          "prerequisites": [
            {
              "label": "Prerrequisitos",
              "html": "<ul><li><p>Operaciones con fracciones algebraicas.</p></li></ul>"
            }
          ],
          "theory": {
            "title": "Idea minima",
            "titleText": "Idea minima",
            "tagId": "",
            "html": "<p>Una ecuacion racional contiene la incognita en un denominador. Antes de eliminar denominadores hay que anotar que valores estan prohibidos.</p>"
          },
          "method": {
            "title": "Como reconocer y resolver",
            "titleText": "Como reconocer y resolver",
            "tagId": "",
            "html": "<ol><li><p>Escribe las restricciones.</p></li><li><p>Multiplica por el comun denominador.</p></li><li><p>Resuelve la ecuacion resultante.</p></li><li><p>Comprueba que las soluciones no anulan denominadores.</p></li></ol>"
          },
          "solvedExample": {
            "title": "[EX-C03.S01-01] Ecuacion racional sencilla",
            "titleText": "Ecuacion racional sencilla",
            "tagId": "EX-C03.S01-01",
            "html": "<p>Resuelve</p><div class=\"math-display\">\\[\n\\frac{2}{x-1}=\\frac{1}{x+2}.\n\\]</div><p><strong>Desarrollo.</strong> Restricciones: \\(x\\neq 1\\), \\(x\\neq -2\\). Igualamos en cruz:</p><div class=\"math-display\">\\[\n2(x+2)=x-1.\n\\]</div><p>Entonces</p><div class=\"math-display\">\\[\n2x+4=x-1 \\Longrightarrow x=-5.\n\\]</div><p>La solucion es admisible.</p><p><strong>Respuesta final.</strong></p><div class=\"math-display\">\\[\nx=-5.\n\\]</div>"
          },
          "commonError": {
            "title": "Multiplicar solo a una parte",
            "titleText": "Multiplicar solo a una parte",
            "tagId": "",
            "html": "<p>El comun denominador tiene que multiplicar toda la ecuacion, no solo uno de los terminos.</p>"
          },
          "guidedExercises": [
            {
              "tagId": "GX-C03.S01-01",
              "title": "Una sola fraccion",
              "promptHtml": "<p>Resuelve</p><div class=\"math-display\">\\[\n\\frac{3}{x+1}=1.\n\\]</div>",
              "answerHtml": "<div class=\"math-display\">\\[\nx=2.\n\\]</div>",
              "solutionHtml": "<p>La restriccion es \\(x\\neq -1\\). Multiplicando por \\(x+1\\):</p><div class=\"math-display\">\\[\n3=x+1 \\Longrightarrow x=2.\n\\]</div>"
            },
            {
              "tagId": "GX-C03.S01-02",
              "title": "Fraccion igualada a un numero",
              "promptHtml": "<p>Resuelve</p><div class=\"math-display\">\\[\n\\frac{x+2}{x-1}=4.\n\\]</div>",
              "answerHtml": "<div class=\"math-display\">\\[\nx=2.\n\\]</div>",
              "solutionHtml": "<p>Con \\(x\\neq 1\\), tenemos</p><div class=\"math-display\">\\[\nx+2=4(x-1)=4x-4.\n\\]</div><p>Luego</p><div class=\"math-display\">\\[\n6=3x \\Longrightarrow x=2.\n\\]</div>"
            }
          ],
          "practice": {
            "label": "Practica autonoma graduada",
            "items": [
              {
                "tagId": "PX-C03.S01-01",
                "prompt": "Resuelve \\(\\dfrac{1}{x}=2\\)."
              },
              {
                "tagId": "PX-C03.S01-02",
                "prompt": "Resuelve \\(\\dfrac{5}{x-3}=1\\)."
              },
              {
                "tagId": "PX-C03.S01-03",
                "prompt": "Resuelve \\(\\dfrac{1}{x+1}+\\dfrac{1}{x-1}=1\\)."
              },
              {
                "tagId": "PX-C03.S01-04",
                "prompt": "Resuelve \\(\\dfrac{x-2}{x+1}=0\\)."
              },
              {
                "tagId": "PX-C03.S01-05",
                "prompt": "Resuelve \\(\\dfrac{1}{x-2}=\\dfrac{1}{x+2}\\)."
              },
              {
                "tagId": "PX-C03.S01-06",
                "prompt": "Resuelve \\(\\dfrac{x+3}{x}=4\\)."
              }
            ],
            "answersHtml": "<ol><li><p>\\(x=\\dfrac{1}{2}\\)</p></li><li><p>\\(x=8\\)</p></li><li><p>\\(x=1\\pm \\sqrt{2}\\)</p></li><li><p>\\(x=2\\)</p></li><li><p>Sin solucion</p></li><li><p>\\(x=1\\)</p></li></ol>",
            "solutionsHtml": "<ol><li><p>\\(1=2x\\), luego \\(x=\\tfrac{1}{2}\\).</p></li><li><p>\\(5=x-3\\), luego \\(x=8\\).</p></li><li><p>\\(\\dfrac{2x}{x^2-1}=1 \\Longrightarrow x^2-2x-1=0\\), de donde \\(x=1\\pm \\sqrt{2}\\).</p></li><li><p>El numerador debe valer \\(0\\): \\(x-2=0\\).</p></li><li><p>Igualando en cruz: \\(x+2=x-2\\), contradiccion.</p></li><li><p>\\(x+3=4x\\), luego \\(x=1\\).</p></li></ol>"
          },
          "challenge": {}
        },
        {
          "id": "C03.S02",
          "title": "Ecuaciones irracionales",
          "rawTitle": "[C03.S02] Ecuaciones irracionales",
          "objectives": [
            {
              "label": "Objetivos de aprendizaje",
              "html": "<ul><li><p>Aislar radicales y resolver ecuaciones con raices.</p></li><li><p>Detectar soluciones extranas tras elevar al cuadrado.</p></li></ul>"
            }
          ],
          "prerequisites": [
            {
              "label": "Prerrequisitos",
              "html": "<ul><li><p>Operaciones con radicales y ecuaciones cuadraticas.</p></li></ul>"
            }
          ],
          "theory": {
            "title": "Idea minima",
            "titleText": "Idea minima",
            "tagId": "",
            "html": "<p>Una ecuacion irracional contiene la incognita dentro de una raiz. Para eliminarla suele aislarse el radical y despues se elevan ambos miembros a una potencia adecuada.</p>"
          },
          "method": {
            "title": "Como reconocer y resolver",
            "titleText": "Como reconocer y resolver",
            "tagId": "",
            "html": "<ol><li><p>Aisla el radical.</p></li><li><p>Eleva ambos miembros al cuadrado.</p></li><li><p>Resuelve la ecuacion obtenida.</p></li><li><p>Comprueba en la ecuacion inicial.</p></li></ol>"
          },
          "solvedExample": {
            "title": "[EX-C03.S02-01] Una solucion valida",
            "titleText": "Una solucion valida",
            "tagId": "EX-C03.S02-01",
            "html": "<p>Resuelve</p><div class=\"math-display\">\\[\n\\sqrt{x+5}=x-1.\n\\]</div><p><strong>Desarrollo.</strong> Como el segundo miembro debe ser no negativo, \\(x\\geq 1\\). Elevamos al cuadrado:</p><div class=\"math-display\">\\[\nx+5=(x-1)^2=x^2-2x+1.\n\\]</div><p>Entonces</p><div class=\"math-display\">\\[\nx^2-3x-4=0 \\Longrightarrow (x-4)(x+1)=0.\n\\]</div><p>Aparecen \\(x=4\\) y \\(x=-1\\), pero solo \\(x=4\\) cumple la ecuacion inicial.</p><p><strong>Respuesta final.</strong></p><div class=\"math-display\">\\[\nx=4.\n\\]</div>"
          },
          "commonError": {
            "title": "No comprobar despues de cuadrar",
            "titleText": "No comprobar despues de cuadrar",
            "tagId": "",
            "html": "<p>Al elevar al cuadrado pueden aparecer soluciones que no valen en la ecuacion inicial. Siempre hay que volver a comprobar.</p>"
          },
          "guidedExercises": [
            {
              "tagId": "GX-C03.S02-01",
              "title": "Radical igual a numero",
              "promptHtml": "<p>Resuelve</p><div class=\"math-display\">\\[\n\\sqrt{x+1}=3.\n\\]</div>",
              "answerHtml": "<div class=\"math-display\">\\[\nx=8.\n\\]</div>",
              "solutionHtml": "<div class=\"math-display\">\\[\nx+1=9 \\Longrightarrow x=8.\n\\]</div>"
            },
            {
              "tagId": "GX-C03.S02-02",
              "title": "Radical igual a la incognita",
              "promptHtml": "<p>Resuelve</p><div class=\"math-display\">\\[\n\\sqrt{2x+3}=x.\n\\]</div>",
              "answerHtml": "<div class=\"math-display\">\\[\nx=3.\n\\]</div>",
              "solutionHtml": "<p>Como \\(x\\geq 0\\), elevamos al cuadrado:</p><div class=\"math-display\">\\[\n2x+3=x^2.\n\\]</div><p>Entonces</p><div class=\"math-display\">\\[\nx^2-2x-3=0 \\Longrightarrow (x-3)(x+1)=0.\n\\]</div><p>Solo \\(x=3\\) es admisible.</p>"
            }
          ],
          "practice": {
            "label": "Practica autonoma graduada",
            "items": [
              {
                "tagId": "PX-C03.S02-01",
                "prompt": "Resuelve \\(\\sqrt{x}=5\\)."
              },
              {
                "tagId": "PX-C03.S02-02",
                "prompt": "Resuelve \\(\\sqrt{x+4}=2\\)."
              },
              {
                "tagId": "PX-C03.S02-03",
                "prompt": "Resuelve \\(\\sqrt{3x-2}=4\\)."
              },
              {
                "tagId": "PX-C03.S02-04",
                "prompt": "Resuelve \\(\\sqrt{x+6}=x\\)."
              },
              {
                "tagId": "PX-C03.S02-05",
                "prompt": "Resuelve \\(\\sqrt{x-1}=x-5\\)."
              },
              {
                "tagId": "PX-C03.S02-06",
                "prompt": "Resuelve \\(\\sqrt{2x+1}=x+1\\)."
              }
            ],
            "answersHtml": "<ol><li><p>\\(x=25\\)</p></li><li><p>\\(x=0\\)</p></li><li><p>\\(x=6\\)</p></li><li><p>\\(x=3\\)</p></li><li><p>\\(x=\\dfrac{11+\\sqrt{17}}{2}\\)</p></li><li><p>\\(x=0\\)</p></li></ol>",
            "solutionsHtml": "<ol><li><p>\\(x=25\\).</p></li><li><p>\\(x+4=4\\), luego \\(x=0\\).</p></li><li><p>\\(3x-2=16\\), luego \\(x=6\\).</p></li><li><p>\\(x+6=x^2\\), de donde \\(x^2-x-6=0\\). Solo vale \\(x=3\\).</p></li><li><p>\\(x-1=(x-5)^2\\), luego \\(x^2-11x+26=0\\). Las raices son \\(\\dfrac{11\\pm\\sqrt{17}}{2}\\), pero solo cumple \\(x\\geq 5\\) la mayor.</p></li><li><p>\\(2x+1=(x+1)^2\\), luego \\(x^2=0\\) y por tanto \\(x=0\\).</p></li></ol>"
          },
          "challenge": {}
        },
        {
          "id": "C03.S03",
          "title": "Ecuaciones polinomicas reducibles",
          "rawTitle": "[C03.S03] Ecuaciones polinomicas reducibles",
          "objectives": [
            {
              "label": "Objetivos de aprendizaje",
              "html": "<ul><li><p>Reconocer ecuaciones bicuadradas o factorizables.</p></li><li><p>Traducir la solucion auxiliar a la variable original.</p></li></ul>"
            }
          ],
          "prerequisites": [
            {
              "label": "Prerrequisitos",
              "html": "<ul><li><p>Factorizacion y ecuaciones de segundo grado.</p></li></ul>"
            }
          ],
          "theory": {
            "title": "Idea minima",
            "titleText": "Idea minima",
            "tagId": "",
            "html": "<p>Muchas ecuaciones polinomicas no lineales se resuelven por factorizacion o por sustitucion. En una bicuadrada se suele hacer \\(y=x^2\\).</p>"
          },
          "method": {
            "title": "Como reconocer y resolver",
            "titleText": "Como reconocer y resolver",
            "tagId": "",
            "html": "<ol><li><p>Busca factor comun o una factorizacion evidente.</p></li><li><p>Si solo aparecen potencias pares, intenta \\(y=x^2\\).</p></li><li><p>Recupera despues los valores de \\(x\\).</p></li></ol>"
          },
          "solvedExample": {
            "title": "[EX-C03.S03-01] Bicuadrada clasica",
            "titleText": "Bicuadrada clasica",
            "tagId": "EX-C03.S03-01",
            "html": "<p>Resuelve</p><div class=\"math-display\">\\[\nx^4-5x^2+4=0.\n\\]</div><p><strong>Desarrollo.</strong> Tomamos \\(y=x^2\\):</p><div class=\"math-display\">\\[\ny^2-5y+4=0=(y-1)(y-4).\n\\]</div><p>Luego</p><div class=\"math-display\">\\[\ny=1 \\quad \\text{o} \\quad y=4.\n\\]</div><p>Volviendo a \\(x\\):</p><div class=\"math-display\">\\[\nx^2=1 \\Longrightarrow x=\\pm 1,\n\\qquad\nx^2=4 \\Longrightarrow x=\\pm 2.\n\\]</div><p><strong>Respuesta final.</strong></p><div class=\"math-display\">\\[\nx=-2,-1,1,2.\n\\]</div>"
          },
          "commonError": {
            "title": "Olvidar las dos raices cuadradas",
            "titleText": "Olvidar las dos raices cuadradas",
            "tagId": "",
            "html": "<p>De \\(x^2=4\\) no sale solo \\(x=2\\), sino \\(x=2\\) y \\(x=-2\\).</p>"
          },
          "guidedExercises": [
            {
              "tagId": "GX-C03.S03-01",
              "title": "Factor comun",
              "promptHtml": "<p>Resuelve</p><div class=\"math-display\">\\[\nx^4-9x^2=0.\n\\]</div>",
              "answerHtml": "<div class=\"math-display\">\\[\nx=-3,0,3.\n\\]</div>",
              "solutionHtml": "<div class=\"math-display\">\\[\nx^4-9x^2=x^2(x^2-9)=x^2(x-3)(x+3).\n\\]</div><p>Por tanto,</p><div class=\"math-display\">\\[\nx=0,\\quad x=3,\\quad x=-3.\n\\]</div>"
            },
            {
              "tagId": "GX-C03.S03-02",
              "title": "Factorizacion inmediata",
              "promptHtml": "<p>Resuelve</p><div class=\"math-display\">\\[\nx^3-4x=0.\n\\]</div>",
              "answerHtml": "<div class=\"math-display\">\\[\nx=-2,0,2.\n\\]</div>",
              "solutionHtml": "<div class=\"math-display\">\\[\nx^3-4x=x(x^2-4)=x(x-2)(x+2).\n\\]</div><p>Luego</p><div class=\"math-display\">\\[\nx=-2,0,2.\n\\]</div>"
            }
          ],
          "practice": {
            "label": "Practica autonoma graduada",
            "items": [
              {
                "tagId": "PX-C03.S03-01",
                "prompt": "Resuelve \\(x^2-16=0\\)."
              },
              {
                "tagId": "PX-C03.S03-02",
                "prompt": "Resuelve \\(x^4-13x^2+36=0\\)."
              },
              {
                "tagId": "PX-C03.S03-03",
                "prompt": "Resuelve \\(x^3-9x=0\\)."
              },
              {
                "tagId": "PX-C03.S03-04",
                "prompt": "Resuelve \\(x^4=x^2\\)."
              },
              {
                "tagId": "PX-C03.S03-05",
                "prompt": "Resuelve \\(x^2+5x=0\\)."
              },
              {
                "tagId": "PX-C03.S03-06",
                "prompt": "Resuelve \\(x^4-1=0\\)."
              }
            ],
            "answersHtml": "<ol><li><p>\\(x=\\pm 4\\)</p></li><li><p>\\(x=\\pm 2,\\pm 3\\)</p></li><li><p>\\(x=-3,0,3\\)</p></li><li><p>\\(x=-1,0,1\\)</p></li><li><p>\\(x=0,-5\\)</p></li><li><p>\\(x=\\pm 1\\)</p></li></ol>",
            "solutionsHtml": "<ol><li><p>\\(x^2=16\\), luego \\(x=\\pm 4\\).</p></li><li><p>Con \\(y=x^2\\): \\(y^2-13y+36=0=(y-4)(y-9)\\).</p></li><li><p>\\(x(x^2-9)=0\\).</p></li><li><p>\\(x^4-x^2=0 \\Longrightarrow x^2(x^2-1)=0\\).</p></li><li><p>\\(x(x+5)=0\\).</p></li><li><p>\\(x^4-1=(x^2-1)(x^2+1)\\), y sobre \\(\\mathbb{R}\\) solo salen \\(x=\\pm 1\\).</p></li></ol>"
          },
          "challenge": {}
        },
        {
          "id": "C03.S04",
          "title": "Ecuaciones exponenciales",
          "rawTitle": "[C03.S04] Ecuaciones exponenciales",
          "objectives": [
            {
              "label": "Objetivos de aprendizaje",
              "html": "<ul><li><p>Igualar bases cuando sea posible.</p></li><li><p>Resolver ecuaciones exponenciales sencillas por inspeccion o transformacion.</p></li></ul>"
            }
          ],
          "prerequisites": [
            {
              "label": "Prerrequisitos",
              "html": "<ul><li><p>Potencias y propiedades de los exponentes.</p></li></ul>"
            }
          ],
          "theory": {
            "title": "Idea minima",
            "titleText": "Idea minima",
            "tagId": "",
            "html": "<p>Si dos potencias tienen la misma base positiva distinta de \\(1\\), entonces se pueden igualar los exponentes. A veces hay que reescribir una base como potencia de otra.</p>"
          },
          "method": {
            "title": "Como reconocer y resolver",
            "titleText": "Como reconocer y resolver",
            "tagId": "",
            "html": "<ol><li><p>Reescribe todas las expresiones con una base comun si se puede.</p></li><li><p>Iguala exponentes.</p></li><li><p>Comprueba el valor hallado en la ecuacion inicial.</p></li></ol>"
          },
          "solvedExample": {
            "title": "[EX-C03.S04-01] Igualacion de bases",
            "titleText": "Igualacion de bases",
            "tagId": "EX-C03.S04-01",
            "html": "<p>Resuelve</p><div class=\"math-display\">\\[\n2^{x+1}=8^{x-1}.\n\\]</div><p><strong>Desarrollo.</strong> Como \\(8=2^3\\),</p><div class=\"math-display\">\\[\n2^{x+1}=2^{3x-3}.\n\\]</div><p>Entonces</p><div class=\"math-display\">\\[\nx+1=3x-3 \\Longrightarrow 4=2x \\Longrightarrow x=2.\n\\]</div><p><strong>Respuesta final.</strong></p><div class=\"math-display\">\\[\nx=2.\n\\]</div>"
          },
          "commonError": {
            "title": "Forzar bases incompatibles",
            "titleText": "Forzar bases incompatibles",
            "tagId": "",
            "html": "<p>Si no se puede pasar a una base comun de forma razonable, hay que buscar otro enfoque. No todo se resuelve igualando exponentes sin justificarlo.</p>"
          },
          "guidedExercises": [
            {
              "tagId": "GX-C03.S04-01",
              "title": "Potencia exacta",
              "promptHtml": "<p>Resuelve</p><div class=\"math-display\">\\[\n3^x=27.\n\\]</div>",
              "answerHtml": "<div class=\"math-display\">\\[\nx=3.\n\\]</div>",
              "solutionHtml": "<p>Como \\(27=3^3\\), se sigue que \\(x=3\\).</p>"
            },
            {
              "tagId": "GX-C03.S04-02",
              "title": "Potencia con exponente lineal",
              "promptHtml": "<p>Resuelve</p><div class=\"math-display\">\\[\n5^{2x-1}=25.\n\\]</div>",
              "answerHtml": "<div class=\"math-display\">\\[\nx=\\frac{3}{2}.\n\\]</div>",
              "solutionHtml": "<p>Como \\(25=5^2\\),</p><div class=\"math-display\">\\[\n2x-1=2 \\Longrightarrow 2x=3 \\Longrightarrow x=\\frac{3}{2}.\n\\]</div>"
            }
          ],
          "practice": {
            "label": "Practica autonoma graduada",
            "items": [
              {
                "tagId": "PX-C03.S04-01",
                "prompt": "Resuelve \\(2^x=16\\)."
              },
              {
                "tagId": "PX-C03.S04-02",
                "prompt": "Resuelve \\(4^{x+1}=64\\)."
              },
              {
                "tagId": "PX-C03.S04-03",
                "prompt": "Resuelve \\(9^x=3\\)."
              },
              {
                "tagId": "PX-C03.S04-04",
                "prompt": "Resuelve \\(2^x=2^{3x-4}\\)."
              },
              {
                "tagId": "PX-C03.S04-05",
                "prompt": "Resuelve \\(10^{x-1}=1000\\)."
              },
              {
                "tagId": "PX-C03.S04-06",
                "prompt": "Resuelve \\(5^x=\\dfrac{1}{25}\\)."
              }
            ],
            "answersHtml": "<ol><li><p>\\(x=4\\)</p></li><li><p>\\(x=2\\)</p></li><li><p>\\(x=\\dfrac{1}{2}\\)</p></li><li><p>\\(x=2\\)</p></li><li><p>\\(x=4\\)</p></li><li><p>\\(x=-2\\)</p></li></ol>",
            "solutionsHtml": "<ol><li><p>\\(16=2^4\\).</p></li><li><p>\\(64=4^3\\), asi que \\(x+1=3\\).</p></li><li><p>\\(9^x=(3^2)^x=3^{2x}=3^1\\), luego \\(2x=1\\).</p></li><li><p>Igualamos exponentes: \\(x=3x-4\\).</p></li><li><p>\\(1000=10^3\\), por tanto \\(x-1=3\\).</p></li><li><p>\\(\\tfrac{1}{25}=5^{-2}\\), luego \\(x=-2\\).</p></li></ol>"
          },
          "challenge": {}
        },
        {
          "id": "C03.S05",
          "title": "Ecuaciones logaritmicas",
          "rawTitle": "[C03.S05] Ecuaciones logaritmicas",
          "objectives": [
            {
              "label": "Objetivos de aprendizaje",
              "html": "<ul><li><p>Imponer condiciones de existencia en logaritmos.</p></li><li><p>Transformar expresiones logaritmicas en ecuaciones algebraicas.</p></li></ul>"
            }
          ],
          "prerequisites": [
            {
              "label": "Prerrequisitos",
              "html": "<ul><li><p>Definicion de logaritmo y propiedades operativas.</p></li></ul>"
            }
          ],
          "theory": {
            "title": "Idea minima",
            "titleText": "Idea minima",
            "tagId": "",
            "html": "<p>Un logaritmo solo existe si su argumento es positivo. Las propiedades</p><div class=\"math-display\">\\[\n\\log(ab)=\\log a+\\log b,\\qquad \\log\\left(\\frac{a}{b}\\right)=\\log a-\\log b\n\\]</div><p>permiten pasar a ecuaciones algebraicas mas sencillas.</p>"
          },
          "method": {
            "title": "Como reconocer y resolver",
            "titleText": "Como reconocer y resolver",
            "tagId": "",
            "html": "<ol><li><p>Escribe las condiciones de existencia.</p></li><li><p>Usa propiedades logaritmicas si ayudan.</p></li><li><p>Pasa a forma exponencial o algebraica.</p></li><li><p>Comprueba que la solucion respeta el dominio.</p></li></ol>"
          },
          "solvedExample": {
            "title": "[EX-C03.S05-01] Producto dentro del logaritmo",
            "titleText": "Producto dentro del logaritmo",
            "tagId": "EX-C03.S05-01",
            "html": "<p>Resuelve</p><div class=\"math-display\">\\[\n\\log(x-1)+\\log(x-3)=1.\n\\]</div><p><strong>Desarrollo.</strong> Condiciones: \\(x-1>0\\) y \\(x-3>0\\), luego \\(x>3\\). Sumamos logaritmos:</p><div class=\"math-display\">\\[\n\\log\\bigl((x-1)(x-3)\\bigr)=1.\n\\]</div><p>En base \\(10\\), eso significa</p><div class=\"math-display\">\\[\n(x-1)(x-3)=10.\n\\]</div><p>Entonces</p><div class=\"math-display\">\\[\nx^2-4x+3=10 \\Longrightarrow x^2-4x-7=0.\n\\]</div><p>Las soluciones son</p><div class=\"math-display\">\\[\nx=2\\pm \\sqrt{11}.\n\\]</div><p>Solo cumple \\(x>3\\) la solucion \\(x=2+\\sqrt{11}\\).</p><p><strong>Respuesta final.</strong></p><div class=\"math-display\">\\[\nx=2+\\sqrt{11}.\n\\]</div>"
          },
          "commonError": {
            "title": "Resolver sin dominio",
            "titleText": "Resolver sin dominio",
            "tagId": "",
            "html": "<p>Aunque una ecuacion transformada tenga dos soluciones, una puede quedar descartada porque hace negativo el argumento de un logaritmo.</p>"
          },
          "guidedExercises": [
            {
              "tagId": "GX-C03.S05-01",
              "title": "Paso a forma exponencial",
              "promptHtml": "<p>Resuelve</p><div class=\"math-display\">\\[\n\\log_2 x=3.\n\\]</div>",
              "answerHtml": "<div class=\"math-display\">\\[\nx=8.\n\\]</div>",
              "solutionHtml": "<div class=\"math-display\">\\[\n\\log_2 x=3 \\Longleftrightarrow x=2^3=8.\n\\]</div>"
            },
            {
              "tagId": "GX-C03.S05-02",
              "title": "Suma de logaritmos decimales",
              "promptHtml": "<p>Resuelve</p><div class=\"math-display\">\\[\n\\log x+\\log 4=1.\n\\]</div>",
              "answerHtml": "<div class=\"math-display\">\\[\nx=\\frac{5}{2}.\n\\]</div>",
              "solutionHtml": "<div class=\"math-display\">\\[\n\\log(4x)=1 \\Longleftrightarrow 4x=10 \\Longrightarrow x=\\frac{5}{2}.\n\\]</div>"
            }
          ],
          "practice": {
            "label": "Practica autonoma graduada",
            "items": [
              {
                "tagId": "PX-C03.S05-01",
                "prompt": "Resuelve \\(\\log_3 x=2\\)."
              },
              {
                "tagId": "PX-C03.S05-02",
                "prompt": "Resuelve \\(\\ln x=0\\)."
              },
              {
                "tagId": "PX-C03.S05-03",
                "prompt": "Resuelve \\(\\log(x-2)=0\\)."
              },
              {
                "tagId": "PX-C03.S05-04",
                "prompt": "Resuelve \\(\\log_2(x+1)=4\\)."
              },
              {
                "tagId": "PX-C03.S05-05",
                "prompt": "Resuelve \\(\\log x+\\log x=2\\)."
              },
              {
                "tagId": "PX-C03.S05-06",
                "prompt": "Resuelve \\(\\log_3(x-1)+\\log_3(x-1)=2\\)."
              }
            ],
            "answersHtml": "<ol><li><p>\\(x=9\\)</p></li><li><p>\\(x=1\\)</p></li><li><p>\\(x=3\\)</p></li><li><p>\\(x=15\\)</p></li><li><p>\\(x=10\\)</p></li><li><p>\\(x=4\\)</p></li></ol>",
            "solutionsHtml": "<ol><li><p>\\(x=3^2=9\\).</p></li><li><p>\\(\\ln x=0\\) implica \\(x=e^0=1\\).</p></li><li><p>\\(x-2=10^0=1\\), luego \\(x=3\\).</p></li><li><p>\\(x+1=2^4=16\\), luego \\(x=15\\).</p></li><li><p>\\(\\log(x^2)=2\\), asi que \\(x^2=100\\). Por dominio, \\(x=10\\).</p></li><li><p>\\(2\\log_3(x-1)=2\\), luego \\(\\log_3(x-1)=1\\) y \\(x=4\\).</p></li></ol>"
          },
          "challenge": {}
        },
        {
          "id": "C03.S06",
          "title": "Eleccion de metodo en ecuaciones mixtas",
          "rawTitle": "[C03.S06] Eleccion de metodo en ecuaciones mixtas",
          "objectives": [
            {
              "label": "Objetivos de aprendizaje",
              "html": "<ul><li><p>Reconocer la estructura dominante de una ecuacion.</p></li><li><p>Elegir la tecnica adecuada antes de operar.</p></li></ul>"
            }
          ],
          "prerequisites": [
            {
              "label": "Prerrequisitos",
              "html": "<ul><li><p>Ecuaciones racionales, irracionales, polinomicas, exponenciales y logaritmicas.</p></li></ul>"
            }
          ],
          "theory": {
            "title": "Idea minima",
            "titleText": "Idea minima",
            "tagId": "",
            "html": "<p>No todas las ecuaciones se atacan igual. Antes de calcular conviene identificar si lo esencial es factorizar, despejar un radical, igualar bases o trabajar con logaritmos.</p>"
          },
          "method": {
            "title": "Como reconocer y resolver",
            "titleText": "Como reconocer y resolver",
            "tagId": "",
            "html": "<ol><li><p>Mira donde aparece la incognita: denominador, radical, exponente, argumento del logaritmo.</p></li><li><p>Elige la tecnica principal.</p></li><li><p>Resuelve con esa tecnica y comprueba el resultado.</p></li></ol>"
          },
          "solvedExample": {
            "title": "[EX-C03.S06-01] Elegir el metodo por la forma",
            "titleText": "Elegir el metodo por la forma",
            "tagId": "EX-C03.S06-01",
            "html": "<p>Resuelve</p><div class=\"math-display\">\\[\n\\frac{x-1}{x+2}=2.\n\\]</div><p><strong>Lectura del tipo.</strong> La incognita aparece en un denominador, asi que es una ecuacion racional.</p><p><strong>Desarrollo.</strong> Restriccion: \\(x\\neq -2\\).</p><div class=\"math-display\">\\[\nx-1=2(x+2)=2x+4.\n\\]</div><p>Entonces</p><div class=\"math-display\">\\[\n-5=x.\n\\]</div><p>La solucion es valida.</p><p><strong>Respuesta final.</strong></p><div class=\"math-display\">\\[\nx=-5.\n\\]</div>"
          },
          "commonError": {
            "title": "Empezar a operar sin clasificar",
            "titleText": "Empezar a operar sin clasificar",
            "tagId": "",
            "html": "<p>Si no reconoces el tipo, es facil aplicar una tecnica equivocada, por ejemplo factorizar cuando lo importante es imponer restricciones o pasar a forma exponencial.</p>"
          },
          "guidedExercises": [
            {
              "tagId": "GX-C03.S06-01",
              "title": "Metodo logaritmico",
              "promptHtml": "<p>Resuelve</p><div class=\"math-display\">\\[\n\\log_2 x=5.\n\\]</div>",
              "answerHtml": "<div class=\"math-display\">\\[\nx=32.\n\\]</div>",
              "solutionHtml": "<p>La ecuacion es logaritmica, asi que pasamos a forma exponencial:</p><div class=\"math-display\">\\[\nx=2^5=32.\n\\]</div>"
            },
            {
              "tagId": "GX-C03.S06-02",
              "title": "Metodo exponencial",
              "promptHtml": "<p>Resuelve</p><div class=\"math-display\">\\[\n3^x=81.\n\\]</div>",
              "answerHtml": "<div class=\"math-display\">\\[\nx=4.\n\\]</div>",
              "solutionHtml": "<p>Como \\(81=3^4\\), igualamos exponentes y obtenemos \\(x=4\\).</p>"
            }
          ],
          "practice": {
            "label": "Practica autonoma graduada",
            "items": [
              {
                "tagId": "PX-C03.S06-01",
                "prompt": "Resuelve \\((x-3)(x+2)=0\\)."
              },
              {
                "tagId": "PX-C03.S06-02",
                "prompt": "Resuelve \\(\\sqrt{x+9}=5\\)."
              },
              {
                "tagId": "PX-C03.S06-03",
                "prompt": "Resuelve \\(2^x=8\\)."
              },
              {
                "tagId": "PX-C03.S06-04",
                "prompt": "Resuelve \\(\\log x=2\\)."
              },
              {
                "tagId": "PX-C03.S06-05",
                "prompt": "Resuelve \\(x^4-17x^2+16=0\\)."
              },
              {
                "tagId": "PX-C03.S06-06",
                "prompt": "Resuelve \\(\\dfrac{1}{x-1}=2\\)."
              }
            ],
            "answersHtml": "<ol><li><p>\\(x=3,-2\\)</p></li><li><p>\\(x=16\\)</p></li><li><p>\\(x=3\\)</p></li><li><p>\\(x=100\\)</p></li><li><p>\\(x=\\pm 1,\\pm 4\\)</p></li><li><p>\\(x=\\dfrac{3}{2}\\)</p></li></ol>",
            "solutionsHtml": "<ol><li><p>Ecuacion factorizada: cada factor se iguala a \\(0\\).</p></li><li><p>Ecuacion irracional: \\(x+9=25\\).</p></li><li><p>Ecuacion exponencial: \\(8=2^3\\).</p></li><li><p>Ecuacion logaritmica decimal: \\(x=10^2\\).</p></li><li><p>Con \\(y=x^2\\): \\(y^2-17y+16=0=(y-1)(y-16)\\).</p></li><li><p>Ecuacion racional: \\(1=2(x-1)\\), luego \\(x=\\tfrac{3}{2}\\).</p></li></ol>"
          },
          "challenge": {}
        },
        {
          "id": "C03.S07",
          "title": "Sistemas lineales 2x2",
          "rawTitle": "[C03.S07] Sistemas lineales 2x2",
          "objectives": [
            {
              "label": "Objetivos de aprendizaje",
              "html": "<ul><li><p>Resolver sistemas lineales de dos ecuaciones con dos incognitas.</p></li><li><p>Comprobar la solucion en ambas ecuaciones.</p></li></ul>"
            }
          ],
          "prerequisites": [
            {
              "label": "Prerrequisitos",
              "html": "<ul><li><p>Ecuaciones lineales.</p></li></ul>"
            }
          ],
          "theory": {
            "title": "Idea minima",
            "titleText": "Idea minima",
            "tagId": "",
            "html": "<p>En un sistema lineal \\(2\\times 2\\) la solucion es el par \\((x,y)\\) que cumple simultaneamente las dos ecuaciones. Los metodos mas habituales son sustitucion, igualacion y reduccion.</p>"
          },
          "method": {
            "title": "Como reconocer y resolver",
            "titleText": "Como reconocer y resolver",
            "tagId": "",
            "html": "<ol><li><p>Elige una incognita facil de aislar o eliminar.</p></li><li><p>Resuelve la ecuacion resultante.</p></li><li><p>Sustituye para recuperar la otra incognita.</p></li><li><p>Comprueba ambas ecuaciones.</p></li></ol>"
          },
          "solvedExample": {
            "title": "[EX-C03.S07-01] Sistema por reduccion",
            "titleText": "Sistema por reduccion",
            "tagId": "EX-C03.S07-01",
            "html": "<p>Resuelve</p><div class=\"math-display\">\\[\n\\begin{cases}\nx+y=5,\\\\\n2x-y=1.\n\\end{cases}\n\\]</div><p><strong>Desarrollo.</strong> Sumamos ambas ecuaciones:</p><div class=\"math-display\">\\[\n3x=6 \\Longrightarrow x=2.\n\\]</div><p>Sustituyendo en \\(x+y=5\\):</p><div class=\"math-display\">\\[\n2+y=5 \\Longrightarrow y=3.\n\\]</div><p><strong>Respuesta final.</strong></p><div class=\"math-display\">\\[\n(x,y)=(2,3).\n\\]</div>"
          },
          "commonError": {
            "title": "No sustituir en el sistema original",
            "titleText": "No sustituir en el sistema original",
            "tagId": "",
            "html": "<p>Comprobar solo una ecuacion no basta: la solucion debe verificar las dos a la vez.</p>"
          },
          "guidedExercises": [
            {
              "tagId": "GX-C03.S07-01",
              "title": "Suma y diferencia",
              "promptHtml": "<p>Resuelve</p><div class=\"math-display\">\\[\n\\begin{cases}\nx-y=1,\\\\\nx+y=7.\n\\end{cases}\n\\]</div>",
              "answerHtml": "<div class=\"math-display\">\\[\n(x,y)=(4,3).\n\\]</div>",
              "solutionHtml": "<p>Sumando:</p><div class=\"math-display\">\\[\n2x=8 \\Longrightarrow x=4.\n\\]</div><p>Entonces</p><div class=\"math-display\">\\[\n4+y=7 \\Longrightarrow y=3.\n\\]</div>"
            },
            {
              "tagId": "GX-C03.S07-02",
              "title": "Sustitucion corta",
              "promptHtml": "<p>Resuelve</p><div class=\"math-display\">\\[\n\\begin{cases}\n2x+y=8,\\\\\nx-y=1.\n\\end{cases}\n\\]</div>",
              "answerHtml": "<div class=\"math-display\">\\[\n(x,y)=(3,2).\n\\]</div>",
              "solutionHtml": "<p>De \\(x-y=1\\) sale \\(y=x-1\\). Sustituyendo:</p><div class=\"math-display\">\\[\n2x+(x-1)=8 \\Longrightarrow 3x=9 \\Longrightarrow x=3.\n\\]</div><p>Luego \\(y=2\\).</p>"
            }
          ],
          "practice": {
            "label": "Practica autonoma graduada",
            "items": [
              {
                "tagId": "PX-C03.S07-01",
                "prompt": "Resuelve \\(\\begin{cases}x+y=6\\\\ x-y=2\\end{cases}\\)."
              },
              {
                "tagId": "PX-C03.S07-02",
                "prompt": "Resuelve \\(\\begin{cases}3x+y=11\\\\ x+y=5\\end{cases}\\)."
              },
              {
                "tagId": "PX-C03.S07-03",
                "prompt": "Resuelve \\(\\begin{cases}2x-y=7\\\\ x+y=5\\end{cases}\\)."
              },
              {
                "tagId": "PX-C03.S07-04",
                "prompt": "Resuelve \\(\\begin{cases}x+2y=8\\\\ 3x-y=3\\end{cases}\\)."
              },
              {
                "tagId": "PX-C03.S07-05",
                "prompt": "Resuelve \\(\\begin{cases}2x+3y=13\\\\ x+y=5\\end{cases}\\)."
              },
              {
                "tagId": "PX-C03.S07-06",
                "prompt": "Resuelve \\(\\begin{cases}x+3y=11\\\\ 2x-y=1\\end{cases}\\)."
              }
            ],
            "answersHtml": "<ol><li><p>\\((4,2)\\)</p></li><li><p>\\((3,2)\\)</p></li><li><p>\\((4,1)\\)</p></li><li><p>\\((2,3)\\)</p></li><li><p>\\((2,3)\\)</p></li><li><p>\\((2,3)\\)</p></li></ol>",
            "solutionsHtml": "<ol><li><p>Sumando: \\(2x=8\\), luego \\(x=4\\), \\(y=2\\).</p></li><li><p>Restando ecuaciones: \\(2x=6\\), luego \\(x=3\\), \\(y=2\\).</p></li><li><p>De \\(x+y=5\\), \\(y=5-x\\). Sustituyendo sale \\(x=4\\), \\(y=1\\).</p></li><li><p>Sustituyendo \\(x=8-2y\\) se obtiene \\(24-7y=3\\), luego \\(y=3\\) y \\(x=2\\).</p></li><li><p>De \\(x+y=5\\), \\(x=5-y\\). Sale \\(10-2y+3y=13\\), luego \\(y=3\\), \\(x=2\\).</p></li><li><p>De \\(2x-y=3\\), \\(y=2x-3\\). Sale \\(x+6x-9=11\\), luego \\(x=2\\), \\(y=3\\).</p></li></ol>"
          },
          "challenge": {}
        },
        {
          "id": "C03.S08",
          "title": "Sistemas lineales 3x3 y clasificacion",
          "rawTitle": "[C03.S08] Sistemas lineales 3x3 y clasificacion",
          "objectives": [
            {
              "label": "Objetivos de aprendizaje",
              "html": "<ul><li><p>Resolver sistemas lineales \\(3\\times 3\\).</p></li><li><p>Clasificar sistemas como compatibles determinados, incompatibles o indeterminados.</p></li></ul>"
            }
          ],
          "prerequisites": [
            {
              "label": "Prerrequisitos",
              "html": "<ul><li><p>Sistemas lineales \\(2\\times 2\\).</p></li></ul>"
            }
          ],
          "theory": {
            "title": "Idea minima",
            "titleText": "Idea minima",
            "tagId": "",
            "html": "<p>Un sistema \\(3\\times 3\\) puede resolverse por eliminacion sucesiva o Gauss. Segun la informacion disponible, puede tener una unica solucion, ninguna o infinitas.</p>"
          },
          "method": {
            "title": "Como reconocer y resolver",
            "titleText": "Como reconocer y resolver",
            "tagId": "",
            "html": "<ol><li><p>Combina ecuaciones para eliminar una incognita.</p></li><li><p>Reduce el sistema a uno de dos ecuaciones.</p></li><li><p>Resuelve y sustituye hacia atras.</p></li><li><p>Interpreta si hay unica solucion, contradiccion o dependencia.</p></li></ol>"
          },
          "solvedExample": {
            "title": "[EX-C03.S08-01] Compatible determinado",
            "titleText": "Compatible determinado",
            "tagId": "EX-C03.S08-01",
            "html": "<p>Resuelve y clasifica</p><div class=\"math-display\">\\[\n\\begin{cases}\nx+y+z=6,\\\\\nx-y+z=4,\\\\\n2x+z=7.\n\\end{cases}\n\\]</div><p><strong>Desarrollo.</strong> Restando la segunda ecuacion a la primera:</p><div class=\"math-display\">\\[\n2y=2 \\Longrightarrow y=1.\n\\]</div><p>Con ello,</p><div class=\"math-display\">\\[\nx+z=5,\\qquad 2x+z=7.\n\\]</div><p>Restando:</p><div class=\"math-display\">\\[\nx=2,\\qquad z=3.\n\\]</div><p><strong>Respuesta final.</strong></p><div class=\"math-display\">\\[\n(x,y,z)=(2,1,3),\n\\]</div><p>y el sistema es <strong>compatible determinado</strong>.</p>"
          },
          "commonError": {
            "title": "Confundir contradiccion con dependencia",
            "titleText": "Confundir contradiccion con dependencia",
            "tagId": "",
            "html": "<p>Llegar a \\(0=0\\) indica dependencia entre ecuaciones; llegar a una igualdad falsa como \\(0=2\\) indica incompatibilidad.</p>"
          },
          "guidedExercises": [
            {
              "tagId": "GX-C03.S08-01",
              "title": "Tres ecuaciones con unica solucion",
              "promptHtml": "<p>Resuelve</p><div class=\"math-display\">\\[\n\\begin{cases}\nx+y+z=3,\\\\\nx+y-z=1,\\\\\nx-y+z=1.\n\\end{cases}\n\\]</div>",
              "answerHtml": "<div class=\"math-display\">\\[\n(x,y,z)=(1,1,1).\n\\]</div>",
              "solutionHtml": "<p>Sumando las dos primeras:</p><div class=\"math-display\">\\[\n2x+2y=4 \\Longrightarrow x+y=2.\n\\]</div><p>Con la tercera y \\(z=1\\), se llega a \\(x=1\\), \\(y=1\\), \\(z=1\\).</p>"
            },
            {
              "tagId": "GX-C03.S08-02",
              "title": "Detectar incompatibilidad",
              "promptHtml": "<p>Clasifica el sistema</p><div class=\"math-display\">\\[\n\\begin{cases}\nx+y+z=1,\\\\\nx+y+z=2,\\\\\nx-y+z=0.\n\\end{cases}\n\\]</div>",
              "answerHtml": "<p>Sistema incompatible: no tiene solucion.</p>",
              "solutionHtml": "<p>Las dos primeras ecuaciones tienen el mismo primer miembro y distinto segundo miembro:</p><div class=\"math-display\">\\[\nx+y+z=1,\\qquad x+y+z=2.\n\\]</div><p>Eso lleva a una contradiccion, luego el sistema es incompatible.</p>"
            }
          ],
          "practice": {
            "label": "Practica autonoma graduada",
            "items": [
              {
                "tagId": "PX-C03.S08-01",
                "prompt": "Resuelve \\(\\begin{cases}x+y+z=6\\\\ x+z=4\\\\ y+z=5\\end{cases}\\)."
              },
              {
                "tagId": "PX-C03.S08-02",
                "prompt": "Resuelve \\(\\begin{cases}x+y+z=9\\\\ x-y+z=5\\\\ x+y-z=3\\end{cases}\\)."
              },
              {
                "tagId": "PX-C03.S08-03",
                "prompt": "Clasifica \\(\\begin{cases}x+y+z=1\\\\ x+y+z=3\\\\ x-y=0\\end{cases}\\)."
              },
              {
                "tagId": "PX-C03.S08-04",
                "prompt": "Clasifica \\(\\begin{cases}x+y+z=2\\\\ 2x+2y+2z=4\\\\ x-y=0\\end{cases}\\)."
              },
              {
                "tagId": "PX-C03.S08-05",
                "prompt": "Resuelve \\(\\begin{cases}2x+y+z=7\\\\ x-y+z=3\\\\ x+y-z=1\\end{cases}\\)."
              },
              {
                "tagId": "PX-C03.S08-06",
                "prompt": "Resuelve \\(\\begin{cases}x+2y-z=2\\\\ 2x-y+z=3\\\\ x+y+z=6\\end{cases}\\)."
              }
            ],
            "answersHtml": "<ol><li><p>\\((1,2,3)\\)</p></li><li><p>\\((4,2,3)\\)</p></li><li><p>Incompatible</p></li><li><p>Compatible indeterminado</p></li><li><p>\\((2,1,2)\\)</p></li><li><p>\\((1,2,3)\\)</p></li></ol>",
            "solutionsHtml": "<ol><li><p>De \\(x+z=4\\) y \\(y+z=5\\), junto con \\(x+y+z=6\\), sale \\(z=3\\), \\(x=1\\), \\(y=2\\).</p></li><li><p>Restando la segunda y tercera a la primera se obtiene \\(2y=4\\) y \\(2z=6\\), luego \\(y=2\\), \\(z=3\\), \\(x=4\\).</p></li><li><p>Las dos primeras ecuaciones se contradicen, luego no hay solucion.</p></li><li><p>La segunda ecuacion es el doble de la primera; con \\(x-y=0\\) quedan infinitas soluciones.</p></li><li><p>Sustituyendo se obtiene \\(z=2\\), \\(y=1\\), \\(x=2\\).</p></li><li><p>El sistema lo verifica \\((1,2,3)\\) y es la unica solucion.</p></li></ol>"
          },
          "challenge": {}
        },
        {
          "id": "C03.S09",
          "title": "Problemas de planteamiento con sistemas",
          "rawTitle": "[C03.S09] Problemas de planteamiento con sistemas",
          "objectives": [
            {
              "label": "Objetivos de aprendizaje",
              "html": "<ul><li><p>Traducir un enunciado verbal a ecuaciones.</p></li><li><p>Interpretar la solucion en su contexto.</p></li></ul>"
            }
          ],
          "prerequisites": [
            {
              "label": "Prerrequisitos",
              "html": "<ul><li><p>Sistemas lineales \\(2\\times 2\\).</p></li></ul>"
            }
          ],
          "theory": {
            "title": "Idea minima",
            "titleText": "Idea minima",
            "tagId": "",
            "html": "<p>En los problemas de planteamiento lo mas importante es decidir bien las incognitas y escribir con claridad las relaciones que da el enunciado.</p>"
          },
          "method": {
            "title": "Como reconocer y resolver",
            "titleText": "Como reconocer y resolver",
            "tagId": "",
            "html": "<ol><li><p>Elige las incognitas y anota su significado.</p></li><li><p>Traduce cada dato a una ecuacion.</p></li><li><p>Resuelve el sistema.</p></li><li><p>Responde con unidades o contexto.</p></li></ol>"
          },
          "solvedExample": {
            "title": "[EX-C03.S09-01] Precio de entradas",
            "titleText": "Precio de entradas",
            "tagId": "EX-C03.S09-01",
            "html": "<p>En una excursion, \\(3\\) entradas de adulto y \\(2\\) de estudiante cuestan \\(34\\) euros. Dos entradas de adulto y una de estudiante cuestan \\(21\\) euros. Halla el precio de cada tipo.</p><p><strong>Desarrollo.</strong> Sean \\(a\\) el precio de adulto y \\(e\\) el de estudiante:</p><div class=\"math-display\">\\[\n\\begin{cases}\n3a+2e=34,\\\\\n2a+e=21.\n\\end{cases}\n\\]</div><p>De la segunda ecuacion,</p><div class=\"math-display\">\\[\ne=21-2a.\n\\]</div><p>Sustituyendo:</p><div class=\"math-display\">\\[\n3a+2(21-2a)=34 \\Longrightarrow 3a+42-4a=34 \\Longrightarrow a=8.\n\\]</div><p>Entonces</p><div class=\"math-display\">\\[\ne=21-16=5.\n\\]</div><p><strong>Respuesta final.</strong> La entrada de adulto cuesta \\(8\\) euros y la de estudiante \\(5\\) euros.</p>"
          },
          "commonError": {
            "title": "No definir las incognitas",
            "titleText": "No definir las incognitas",
            "tagId": "",
            "html": "<p>Si no se especifica que representa cada letra, es muy facil perder el sentido del sistema y de la respuesta final.</p>"
          },
          "guidedExercises": [
            {
              "tagId": "GX-C03.S09-01",
              "title": "Dos numeros",
              "promptHtml": "<p>La suma de dos numeros es \\(11\\) y su diferencia es \\(3\\). Hallalos.</p>",
              "answerHtml": "<p>Los numeros son \\(7\\) y \\(4\\).</p>",
              "solutionHtml": "<p>Si \\(x\\) es el mayor e \\(y\\) el menor:</p><div class=\"math-display\">\\[\n\\begin{cases}\nx+y=11,\\\\\nx-y=3.\n\\end{cases}\n\\]</div><p>Sumando:</p><div class=\"math-display\">\\[\n2x=14 \\Longrightarrow x=7,\\qquad y=4.\n\\]</div>"
            },
            {
              "tagId": "GX-C03.S09-02",
              "title": "Cuadernos y boligrafos",
              "promptHtml": "<p>Dos cuadernos y un boligrafo cuestan \\(7\\) euros. Un cuaderno y dos boligrafos cuestan \\(8\\) euros. Halla el precio de cada objeto.</p>",
              "answerHtml": "<p>Cuaderno: \\(2\\) euros. Boligrafo: \\(3\\) euros.</p>",
              "solutionHtml": "<p>Sean \\(c\\) y \\(b\\) los precios:</p><div class=\"math-display\">\\[\n\\begin{cases}\n2c+b=7,\\\\\nc+2b=8.\n\\end{cases}\n\\]</div><p>De la primera, \\(b=7-2c\\). Sustituyendo:</p><div class=\"math-display\">\\[\nc+2(7-2c)=8 \\Longrightarrow -3c=-6 \\Longrightarrow c=2.\n\\]</div><p>Entonces \\(b=3\\).</p>"
            }
          ],
          "practice": {
            "label": "Practica autonoma graduada",
            "items": [
              {
                "tagId": "PX-C03.S09-01",
                "prompt": "La suma de dos numeros es \\(20\\) y uno supera al otro en \\(4\\)."
              },
              {
                "tagId": "PX-C03.S09-02",
                "prompt": "Dos entradas adultas y tres infantiles cuestan \\(25\\) euros; una adulta y una infantil cuestan \\(11\\) euros."
              },
              {
                "tagId": "PX-C03.S09-03",
                "prompt": "En una granja hay \\(10\\) cabezas y \\(28\\) patas entre gallinas y conejos."
              },
              {
                "tagId": "PX-C03.S09-04",
                "prompt": "Un numero de dos cifras tiene suma de cifras \\(9\\) y la cifra de las decenas supera en \\(3\\) a la de las unidades."
              },
              {
                "tagId": "PX-C03.S09-05",
                "prompt": "Tres cuadernos y dos lapices cuestan \\(13\\) euros; un cuaderno y un lapiz cuestan \\(5\\) euros."
              },
              {
                "tagId": "PX-C03.S09-06",
                "prompt": "Hay monedas de \\(1\\) y \\(2\\) euros. En total son \\(8\\) monedas y suman \\(13\\) euros."
              }
            ],
            "answersHtml": "<ol><li><p>\\(12\\) y \\(8\\)</p></li><li><p>Adulta: \\(8\\) euros. Infantil: \\(3\\) euros.</p></li><li><p>\\(6\\) gallinas y \\(4\\) conejos</p></li><li><p>\\(63\\)</p></li><li><p>Cuaderno: \\(3\\) euros. Lapiz: \\(2\\) euros.</p></li><li><p>\\(3\\) monedas de \\(1\\) euro y \\(5\\) monedas de \\(2\\) euros</p></li></ol>",
            "solutionsHtml": "<ol><li><p>Sistema \\(x+y=20\\), \\(x-y=4\\). Sale \\(x=12\\), \\(y=8\\).</p></li><li><p>Si \\(a\\) es adulta e \\(i\\) infantil: \\(\\begin{cases}2a+3i=25\\\\ a+i=11\\end{cases}\\), de donde \\(a=8\\), \\(i=3\\).</p></li><li><p>\\(g+c=10\\), \\(2g+4c=28\\). Sale \\(c=4\\), \\(g=6\\).</p></li><li><p>Si la decena es \\(d\\) y la unidad \\(u\\): \\(d+u=9\\), \\(d-u=3\\). Sale \\(d=6\\), \\(u=3\\), numero \\(63\\).</p></li><li><p>\\(3c+2l=13\\), \\(c+l=5\\). Sale \\(c=3\\), \\(l=2\\).</p></li><li><p>\\(x+y=8\\), \\(x+2y=13\\). Sale \\(y=5\\), \\(x=3\\).</p></li></ol>"
          },
          "challenge": {}
        },
        {
          "id": "C03.S10",
          "title": "Sistemas no lineales",
          "rawTitle": "[C03.S10] Sistemas no lineales",
          "objectives": [
            {
              "label": "Objetivos de aprendizaje",
              "html": "<ul><li><p>Resolver sistemas donde al menos una ecuacion no es lineal.</p></li><li><p>Interpretar que un sistema puede tener varias soluciones ordenadas.</p></li></ul>"
            }
          ],
          "prerequisites": [
            {
              "label": "Prerrequisitos",
              "html": "<ul><li><p>Sistemas lineales y ecuaciones cuadraticas.</p></li></ul>"
            }
          ],
          "theory": {
            "title": "Idea minima",
            "titleText": "Idea minima",
            "tagId": "",
            "html": "<p>En un sistema no lineal se combinan ecuaciones de distintos tipos. Suele funcionar bien la sustitucion para transformar el problema en una sola ecuacion.</p>"
          },
          "method": {
            "title": "Como reconocer y resolver",
            "titleText": "Como reconocer y resolver",
            "tagId": "",
            "html": "<ol><li><p>Despeja una variable en la ecuacion mas simple.</p></li><li><p>Sustituye en la otra ecuacion.</p></li><li><p>Resuelve la ecuacion obtenida y recupera los pares ordenados.</p></li></ol>"
          },
          "solvedExample": {
            "title": "[EX-C03.S10-01] Suma y producto",
            "titleText": "Suma y producto",
            "tagId": "EX-C03.S10-01",
            "html": "<p>Resuelve</p><div class=\"math-display\">\\[\n\\begin{cases}\nx+y=5,\\\\\nxy=6.\n\\end{cases}\n\\]</div><p><strong>Desarrollo.</strong> De \\(x+y=5\\), despejamos \\(y=5-x\\). Sustituimos:</p><div class=\"math-display\">\\[\nx(5-x)=6.\n\\]</div><p>Entonces</p><div class=\"math-display\">\\[\n5x-x^2=6 \\Longrightarrow x^2-5x+6=0.\n\\]</div><p>Factorizando:</p><div class=\"math-display\">\\[\n(x-2)(x-3)=0.\n\\]</div><p>Si \\(x=2\\), entonces \\(y=3\\). Si \\(x=3\\), entonces \\(y=2\\).</p><p><strong>Respuesta final.</strong></p><div class=\"math-display\">\\[\n(x,y)=(2,3)\\quad \\text{y}\\quad (3,2).\n\\]</div>"
          },
          "commonError": {
            "title": "Olvidar el orden de los pares",
            "titleText": "Olvidar el orden de los pares",
            "tagId": "",
            "html": "<p>En un sistema, \\((2,3)\\) y \\((3,2)\\) son soluciones distintas salvo que ambas coordenadas coincidan.</p>"
          },
          "guidedExercises": [
            {
              "tagId": "GX-C03.S10-01",
              "title": "Diferencia y producto",
              "promptHtml": "<p>Resuelve</p><div class=\"math-display\">\\[\n\\begin{cases}\nx-y=1,\\\\\nxy=6.\n\\end{cases}\n\\]</div>",
              "answerHtml": "<div class=\"math-display\">\\[\n(x,y)=(3,2)\\quad \\text{y}\\quad (-2,-3).\n\\]</div>",
              "solutionHtml": "<p>De \\(x-y=1\\), \\(y=x-1\\). Sustituyendo:</p><div class=\"math-display\">\\[\nx(x-1)=6 \\Longrightarrow x^2-x-6=0.\n\\]</div><p>Sale \\(x=3\\) o \\(x=-2\\). Luego \\(y=2\\) o \\(y=-3\\).</p>"
            },
            {
              "tagId": "GX-C03.S10-02",
              "title": "Circunferencia y recta horizontal",
              "promptHtml": "<p>Resuelve</p><div class=\"math-display\">\\[\n\\begin{cases}\nx^2+y^2=25,\\\\\ny=4.\n\\end{cases}\n\\]</div>",
              "answerHtml": "<div class=\"math-display\">\\[\n(x,y)=(3,4)\\quad \\text{y}\\quad (-3,4).\n\\]</div>",
              "solutionHtml": "<p>Sustituyendo \\(y=4\\):</p><div class=\"math-display\">\\[\nx^2+16=25 \\Longrightarrow x^2=9 \\Longrightarrow x=\\pm 3.\n\\]</div>"
            }
          ],
          "practice": {
            "label": "Practica autonoma graduada",
            "items": [
              {
                "tagId": "PX-C03.S10-01",
                "prompt": "Resuelve \\(\\begin{cases}x+y=7\\\\ xy=12\\end{cases}\\)."
              },
              {
                "tagId": "PX-C03.S10-02",
                "prompt": "Resuelve \\(\\begin{cases}y=x^2\\\\ y=4\\end{cases}\\)."
              },
              {
                "tagId": "PX-C03.S10-03",
                "prompt": "Resuelve \\(\\begin{cases}x^2+y^2=13\\\\ y=2\\end{cases}\\)."
              },
              {
                "tagId": "PX-C03.S10-04",
                "prompt": "Resuelve \\(\\begin{cases}x-y=5\\\\ xy=14\\end{cases}\\)."
              },
              {
                "tagId": "PX-C03.S10-05",
                "prompt": "Resuelve \\(\\begin{cases}x+y=1\\\\ x^2+y^2=1\\end{cases}\\)."
              },
              {
                "tagId": "PX-C03.S10-06",
                "prompt": "Resuelve \\(\\begin{cases}y=2x\\\\ x^2+y^2=20\\end{cases}\\)."
              }
            ],
            "answersHtml": "<ol><li><p>\\((3,4)\\) y \\((4,3)\\)</p></li><li><p>\\((2,4)\\) y \\((-2,4)\\)</p></li><li><p>\\((3,2)\\) y \\((-3,2)\\)</p></li><li><p>\\((7,2)\\) y \\((-2,-7)\\)</p></li><li><p>\\((0,1)\\) y \\((1,0)\\)</p></li><li><p>\\((2,4)\\) y \\((-2,-4)\\)</p></li></ol>",
            "solutionsHtml": "<ol><li><p>\\(y=7-x\\). Sale \\(x^2-7x+12=0\\), luego \\(x=3\\) o \\(4\\).</p></li><li><p>Si \\(x^2=4\\), entonces \\(x=\\pm 2\\) y \\(y=4\\).</p></li><li><p>\\(x^2+4=13\\), luego \\(x=\\pm 3\\).</p></li><li><p>\\(y=x-5\\). Sale \\(x^2-5x-14=0\\), luego \\(x=7\\) o \\(-2\\).</p></li><li><p>\\((x+y)^2=x^2+y^2+2xy\\) da \\(1=1+2xy\\), luego \\(xy=0\\).</p></li><li><p>Sustituyendo \\(y=2x\\): \\(x^2+4x^2=20\\), de donde \\(x=\\pm 2\\).</p></li></ol>"
          },
          "challenge": {}
        },
        {
          "id": "C03.S11",
          "title": "Sistemas exponenciales y logaritmicos",
          "rawTitle": "[C03.S11] Sistemas exponenciales y logaritmicos",
          "objectives": [
            {
              "label": "Objetivos de aprendizaje",
              "html": "<ul><li><p>Resolver sistemas donde intervienen exponenciales o logaritmos.</p></li><li><p>Traducir parte del sistema a una relacion algebraica mas simple.</p></li></ul>"
            }
          ],
          "prerequisites": [
            {
              "label": "Prerrequisitos",
              "html": "<ul><li><p>Ecuaciones exponenciales, logaritmicas y sistemas lineales.</p></li></ul>"
            }
          ],
          "theory": {
            "title": "Idea minima",
            "titleText": "Idea minima",
            "tagId": "",
            "html": "<p>A menudo una condicion exponencial o logaritmica se convierte en una ecuacion algebraica sencilla, que luego se combina con la otra ecuacion del sistema.</p>"
          },
          "method": {
            "title": "Como reconocer y resolver",
            "titleText": "Como reconocer y resolver",
            "tagId": "",
            "html": "<ol><li><p>Simplifica la parte exponencial o logaritmica.</p></li><li><p>Reescribe la informacion en forma algebraica.</p></li><li><p>Resuelve el sistema resultante.</p></li></ol>"
          },
          "solvedExample": {
            "title": "[EX-C03.S11-01] Suma y diferencia ocultas",
            "titleText": "Suma y diferencia ocultas",
            "tagId": "EX-C03.S11-01",
            "html": "<p>Resuelve</p><div class=\"math-display\">\\[\n\\begin{cases}\n2^x\\cdot 2^y=32,\\\\\nx-y=1.\n\\end{cases}\n\\]</div><p><strong>Desarrollo.</strong> La primera ecuacion equivale a</p><div class=\"math-display\">\\[\n2^{x+y}=32=2^5,\n\\]</div><p>luego</p><div class=\"math-display\">\\[\nx+y=5.\n\\]</div><p>El sistema queda</p><div class=\"math-display\">\\[\n\\begin{cases}\nx+y=5,\\\\\nx-y=1.\n\\end{cases}\n\\]</div><p>Sumando:</p><div class=\"math-display\">\\[\n2x=6 \\Longrightarrow x=3,\\qquad y=2.\n\\]</div><p><strong>Respuesta final.</strong></p><div class=\"math-display\">\\[\n(x,y)=(3,2).\n\\]</div>"
          },
          "commonError": {
            "title": "Quedarse solo en la forma simbolica",
            "titleText": "Quedarse solo en la forma simbolica",
            "tagId": "",
            "html": "<p>Si \\(2^x\\cdot 2^y=2^{x+y}\\), hay que convertir esa igualdad en una relacion concreta entre exponentes para poder resolver el sistema.</p>"
          },
          "guidedExercises": [
            {
              "tagId": "GX-C03.S11-01",
              "title": "Una exponencial y una recta",
              "promptHtml": "<p>Resuelve</p><div class=\"math-display\">\\[\n\\begin{cases}\n2^x=8,\\\\\ny=x-1.\n\\end{cases}\n\\]</div>",
              "answerHtml": "<div class=\"math-display\">\\[\n(x,y)=(3,2).\n\\]</div>",
              "solutionHtml": "<p>De \\(2^x=8=2^3\\) sale \\(x=3\\). Entonces \\(y=2\\).</p>"
            },
            {
              "tagId": "GX-C03.S11-02",
              "title": "Logaritmo directo",
              "promptHtml": "<p>Resuelve</p><div class=\"math-display\">\\[\n\\begin{cases}\n\\log_2 x=y,\\\\\nx=8.\n\\end{cases}\n\\]</div>",
              "answerHtml": "<div class=\"math-display\">\\[\n(x,y)=(8,3).\n\\]</div>",
              "solutionHtml": "<p>Si \\(x=8\\), entonces</p><div class=\"math-display\">\\[\ny=\\log_2 8=3.\n\\]</div>"
            }
          ],
          "practice": {
            "label": "Practica autonoma graduada",
            "items": [
              {
                "tagId": "PX-C03.S11-01",
                "prompt": "Resuelve \\(\\begin{cases}3^x=27\\\\ x+y=5\\end{cases}\\)."
              },
              {
                "tagId": "PX-C03.S11-02",
                "prompt": "Resuelve \\(\\begin{cases}2^x\\cdot 2^y=64\\\\ x-y=0\\end{cases}\\)."
              },
              {
                "tagId": "PX-C03.S11-03",
                "prompt": "Resuelve \\(\\begin{cases}\\log x=2\\\\ y=x-95\\end{cases}\\)."
              },
              {
                "tagId": "PX-C03.S11-04",
                "prompt": "Resuelve \\(\\begin{cases}\\ln x=0\\\\ x+y=4\\end{cases}\\)."
              },
              {
                "tagId": "PX-C03.S11-05",
                "prompt": "Resuelve \\(\\begin{cases}2^x=4\\\\ 3^y=27\\end{cases}\\)."
              },
              {
                "tagId": "PX-C03.S11-06",
                "prompt": "Resuelve \\(\\begin{cases}\\log_2 x=3\\\\ x-y=5\\end{cases}\\)."
              }
            ],
            "answersHtml": "<ol><li><p>\\((3,2)\\)</p></li><li><p>\\((3,3)\\)</p></li><li><p>\\((100,5)\\)</p></li><li><p>\\((1,3)\\)</p></li><li><p>\\((2,3)\\)</p></li><li><p>\\((8,3)\\)</p></li></ol>",
            "solutionsHtml": "<ol><li><p>\\(3^x=27\\) da \\(x=3\\). Entonces \\(y=2\\).</p></li><li><p>\\(2^{x+y}=64=2^6\\), asi que \\(x+y=6\\). Con \\(x-y=0\\), sale \\(x=y=3\\).</p></li><li><p>\\(\\log x=2\\) implica \\(x=100\\). Luego \\(y=5\\).</p></li><li><p>\\(\\ln x=0\\) implica \\(x=1\\). Luego \\(y=3\\).</p></li><li><p>\\(x=2\\) y \\(y=3\\).</p></li><li><p>\\(\\log_2 x=3\\) implica \\(x=8\\). Como \\(x-y=5\\), sale \\(y=3\\).</p></li></ol>"
          },
          "challenge": {}
        }
      ]
    },
    {
      "id": "C04",
      "slug": "04_inecuaciones",
      "title": "Inecuaciones",
      "summaryHtml": "<p>Este capitulo desarrolla las secciones <code>C04.S01-C04.S07</code> de la matriz de cobertura a partir de <code>sources/Relacion Tema 4. Inecuaciones..pdf</code>. El acento didactico esta en traducir correctamente la solucion a intervalos y en justificar los signos.</p>",
      "studyRouteHtml": "",
      "sectionCount": 7,
      "sections": [
        {
          "id": "C04.S01",
          "title": "Inecuaciones lineales",
          "rawTitle": "[C04.S01] Inecuaciones lineales",
          "objectives": [
            {
              "label": "Objetivos de aprendizaje",
              "html": "<ul><li><p>Resolver inecuaciones lineales de una variable.</p></li><li><p>Expresar la solucion con desigualdades e intervalos.</p></li></ul>"
            }
          ],
          "prerequisites": [
            {
              "label": "Prerrequisitos",
              "html": "<ul><li><p>Ecuaciones lineales y orden en \\(\\mathbb{R}\\).</p></li></ul>"
            }
          ],
          "theory": {
            "title": "Idea minima",
            "titleText": "Idea minima",
            "tagId": "",
            "html": "<p>Una inecuacion lineal se resuelve igual que una ecuacion lineal, con una precaucion importante: si multiplicamos o dividimos por un numero negativo, el signo de la desigualdad cambia.</p>"
          },
          "method": {
            "title": "Como reconocer y resolver",
            "titleText": "Como reconocer y resolver",
            "tagId": "",
            "html": "<ol><li><p>Reune los terminos con \\(x\\) en un miembro y los numeros en el otro.</p></li><li><p>Simplifica.</p></li><li><p>Si divides por un numero negativo, invierte el signo.</p></li><li><p>Expresa el resultado en desigualdad o intervalo.</p></li></ol>"
          },
          "solvedExample": {
            "title": "[EX-C04.S01-01] Inecuacion lineal directa",
            "titleText": "Inecuacion lineal directa",
            "tagId": "EX-C04.S01-01",
            "html": "<p>Resuelve</p><div class=\"math-display\">\\[\n3x-5\\leq 7.\n\\]</div><p><strong>Desarrollo.</strong></p><div class=\"math-display\">\\[\n3x\\leq 12 \\Longrightarrow x\\leq 4.\n\\]</div><p><strong>Respuesta final.</strong></p><div class=\"math-display\">\\[\nx\\leq 4 \\qquad \\text{o bien} \\qquad (-\\infty,4].\n\\]</div>"
          },
          "commonError": {
            "title": "Olvidar cambiar el signo",
            "titleText": "Olvidar cambiar el signo",
            "tagId": "",
            "html": "<p>Si al despejar aparece una division por un numero negativo, el sentido de la desigualdad debe invertirse.</p>"
          },
          "guidedExercises": [
            {
              "tagId": "GX-C04.S01-01",
              "title": "Un paso de suma",
              "promptHtml": "<p>Resuelve</p><div class=\"math-display\">\\[\n2x+3>7.\n\\]</div>",
              "answerHtml": "<div class=\"math-display\">\\[\nx>2.\n\\]</div>",
              "solutionHtml": "<div class=\"math-display\">\\[\n2x>4 \\Longrightarrow x>2.\n\\]</div>"
            },
            {
              "tagId": "GX-C04.S01-02",
              "title": "Division por negativo",
              "promptHtml": "<p>Resuelve</p><div class=\"math-display\">\\[\n-3x+6\\geq 0.\n\\]</div>",
              "answerHtml": "<div class=\"math-display\">\\[\nx\\leq 2.\n\\]</div>",
              "solutionHtml": "<div class=\"math-display\">\\[\n-3x\\geq -6.\n\\]</div><p>Al dividir por \\(-3\\), el signo cambia:</p><div class=\"math-display\">\\[\nx\\leq 2.\n\\]</div>"
            }
          ],
          "practice": {
            "label": "Practica autonoma graduada",
            "items": [
              {
                "tagId": "PX-C04.S01-01",
                "prompt": "Resuelve \\(x-4<0\\)."
              },
              {
                "tagId": "PX-C04.S01-02",
                "prompt": "Resuelve \\(5x+1\\geq 11\\)."
              },
              {
                "tagId": "PX-C04.S01-03",
                "prompt": "Resuelve \\(7-2x>1\\)."
              },
              {
                "tagId": "PX-C04.S01-04",
                "prompt": "Resuelve \\(4x-3\\leq 5\\)."
              },
              {
                "tagId": "PX-C04.S01-05",
                "prompt": "Resuelve \\(2-3x<11\\)."
              },
              {
                "tagId": "PX-C04.S01-06",
                "prompt": "Resuelve \\(-x+8\\geq 10\\)."
              }
            ],
            "answersHtml": "<ol><li><p>\\(x<4\\)</p></li><li><p>\\(x\\geq 2\\)</p></li><li><p>\\(x<3\\)</p></li><li><p>\\(x\\leq 2\\)</p></li><li><p>\\(x>-3\\)</p></li><li><p>\\(x\\leq -2\\)</p></li></ol>",
            "solutionsHtml": "<ol><li><p>\\(x<4\\).</p></li><li><p>\\(5x\\geq 10\\), luego \\(x\\geq 2\\).</p></li><li><p>\\(-2x>-6\\), al dividir por \\(-2\\), \\(x<3\\).</p></li><li><p>\\(4x\\leq 8\\), luego \\(x\\leq 2\\).</p></li><li><p>\\(-3x<9\\), al dividir por \\(-3\\), \\(x>-3\\).</p></li><li><p>\\(-x\\geq 2\\), luego \\(x\\leq -2\\).</p></li></ol>"
          },
          "challenge": {}
        },
        {
          "id": "C04.S02",
          "title": "Inecuaciones de segundo grado",
          "rawTitle": "[C04.S02] Inecuaciones de segundo grado",
          "objectives": [
            {
              "label": "Objetivos de aprendizaje",
              "html": "<ul><li><p>Resolver inecuaciones cuadraticas.</p></li><li><p>Usar las raices para estudiar el signo del polinomio.</p></li></ul>"
            }
          ],
          "prerequisites": [
            {
              "label": "Prerrequisitos",
              "html": "<ul><li><p>Factorizacion de polinomios de segundo grado.</p></li></ul>"
            }
          ],
          "theory": {
            "title": "Idea minima",
            "titleText": "Idea minima",
            "tagId": "",
            "html": "<p>Una parabola cambia de signo en sus raices. Si el coeficiente principal es positivo, el polinomio es positivo fuera de las raices y negativo entre ellas; si es negativo, ocurre al reves.</p>"
          },
          "method": {
            "title": "Como reconocer y resolver",
            "titleText": "Como reconocer y resolver",
            "tagId": "",
            "html": "<ol><li><p>Factoriza o halla las raices.</p></li><li><p>Situa las raices en la recta real.</p></li><li><p>Decide en que intervalos el polinomio cumple la desigualdad.</p></li></ol>"
          },
          "solvedExample": {
            "title": "[EX-C04.S02-01] Cuadratica factorizada",
            "titleText": "Cuadratica factorizada",
            "tagId": "EX-C04.S02-01",
            "html": "<p>Resuelve</p><div class=\"math-display\">\\[\nx^2-5x+6>0.\n\\]</div><p><strong>Desarrollo.</strong> Factorizamos:</p><div class=\"math-display\">\\[\nx^2-5x+6=(x-2)(x-3).\n\\]</div><p>Las raices son \\(2\\) y \\(3\\). Como el coeficiente de \\(x^2\\) es positivo, el producto es positivo fuera del intervalo entre raices.</p><p><strong>Respuesta final.</strong></p><div class=\"math-display\">\\[\nx\\in (-\\infty,2)\\cup (3,+\\infty).\n\\]</div>"
          },
          "commonError": {
            "title": "Confundir \\(>\\) con \\(\\geq\\)",
            "titleText": "Confundir \\(>\\) con \\(\\geq\\)",
            "tagId": "",
            "html": "<p>Si la desigualdad es estricta, las raices no se incluyen en la solucion.</p>"
          },
          "guidedExercises": [
            {
              "tagId": "GX-C04.S02-01",
              "title": "Entre dos raices",
              "promptHtml": "<p>Resuelve</p><div class=\"math-display\">\\[\nx^2-9\\leq 0.\n\\]</div>",
              "answerHtml": "<div class=\"math-display\">\\[\n[-3,3].\n\\]</div>",
              "solutionHtml": "<div class=\"math-display\">\\[\nx^2-9=(x-3)(x+3).\n\\]</div><p>El producto es no positivo entre las raices:</p><div class=\"math-display\">\\[\nx\\in [-3,3].\n\\]</div>"
            },
            {
              "tagId": "GX-C04.S02-02",
              "title": "Factor comun en el signo",
              "promptHtml": "<p>Resuelve</p><div class=\"math-display\">\\[\nx^2-4x<0.\n\\]</div>",
              "answerHtml": "<div class=\"math-display\">\\[\n(0,4).\n\\]</div>",
              "solutionHtml": "<div class=\"math-display\">\\[\nx^2-4x=x(x-4).\n\\]</div><p>El producto es negativo entre \\(0\\) y \\(4\\):</p><div class=\"math-display\">\\[\nx\\in (0,4).\n\\]</div>"
            }
          ],
          "practice": {
            "label": "Practica autonoma graduada",
            "items": [
              {
                "tagId": "PX-C04.S02-01",
                "prompt": "Resuelve \\(x^2-1\\geq 0\\)."
              },
              {
                "tagId": "PX-C04.S02-02",
                "prompt": "Resuelve \\(x^2-6x+8<0\\)."
              },
              {
                "tagId": "PX-C04.S02-03",
                "prompt": "Resuelve \\(x^2+4x+3\\leq 0\\)."
              },
              {
                "tagId": "PX-C04.S02-04",
                "prompt": "Resuelve \\(x^2-9>0\\)."
              },
              {
                "tagId": "PX-C04.S02-05",
                "prompt": "Resuelve \\(x^2-2x-3\\geq 0\\)."
              },
              {
                "tagId": "PX-C04.S02-06",
                "prompt": "Resuelve \\(-x^2+4x-4\\leq 0\\)."
              }
            ],
            "answersHtml": "<ol><li><p>\\((-\\infty,-1]\\cup [1,+\\infty)\\)</p></li><li><p>\\((2,4)\\)</p></li><li><p>\\([-3,-1]\\)</p></li><li><p>\\((-\\infty,-3)\\cup (3,+\\infty)\\)</p></li><li><p>\\((-\\infty,-1]\\cup [3,+\\infty)\\)</p></li><li><p>\\(\\mathbb{R}\\)</p></li></ol>",
            "solutionsHtml": "<ol><li><p>\\((x-1)(x+1)\\geq 0\\) fuera de las raices.</p></li><li><p>\\((x-2)(x-4)<0\\) entre \\(2\\) y \\(4\\).</p></li><li><p>\\((x+1)(x+3)\\leq 0\\) entre las raices e incluyendolas.</p></li><li><p>\\(x^2-9>0\\) fuera de \\(\\pm 3\\).</p></li><li><p>\\((x-3)(x+1)\\geq 0\\) fuera del intervalo interior.</p></li><li><p>\\(-x^2+4x-4=-(x-2)^2\\leq 0\\) para todo real.</p></li></ol>"
          },
          "challenge": {}
        },
        {
          "id": "C04.S03",
          "title": "Inecuaciones polinomicas",
          "rawTitle": "[C04.S03] Inecuaciones polinomicas",
          "objectives": [
            {
              "label": "Objetivos de aprendizaje",
              "html": "<ul><li><p>Resolver inecuaciones polinomicas de grado mayor que dos.</p></li><li><p>Usar tablas de signos apoyadas en los factores.</p></li></ul>"
            }
          ],
          "prerequisites": [
            {
              "label": "Prerrequisitos",
              "html": "<ul><li><p>Factorizacion y estudio de signo en productos.</p></li></ul>"
            }
          ],
          "theory": {
            "title": "Idea minima",
            "titleText": "Idea minima",
            "tagId": "",
            "html": "<p>En una inecuacion polinomica factorizada, los puntos clave son las raices de cada factor. Entre dos puntos consecutivos, el signo del producto es constante.</p>"
          },
          "method": {
            "title": "Como reconocer y resolver",
            "titleText": "Como reconocer y resolver",
            "tagId": "",
            "html": "<ol><li><p>Factoriza el polinomio.</p></li><li><p>Ordena las raices reales.</p></li><li><p>Estudia el signo en cada intervalo.</p></li><li><p>Incluye o excluye las raices segun el signo de desigualdad.</p></li></ol>"
          },
          "solvedExample": {
            "title": "[EX-C04.S03-01] Tres factores lineales",
            "titleText": "Tres factores lineales",
            "tagId": "EX-C04.S03-01",
            "html": "<p>Resuelve</p><div class=\"math-display\">\\[\n(x-1)(x+2)(x-4)\\geq 0.\n\\]</div><p><strong>Desarrollo.</strong> Las raices son \\(-2\\), \\(1\\) y \\(4\\). El estudio de signos da:</p><div class=\"math-display\">\\[\n(-\\infty,-2): -, \\qquad (-2,1): +, \\qquad (1,4): -, \\qquad (4,+\\infty): +.\n\\]</div><p>Como queremos \\(\\geq 0\\), tomamos los intervalos positivos y las raices.</p><p><strong>Respuesta final.</strong></p><div class=\"math-display\">\\[\n[-2,1]\\cup [4,+\\infty).\n\\]</div>"
          },
          "commonError": {
            "title": "No tener en cuenta la multiplicidad",
            "titleText": "No tener en cuenta la multiplicidad",
            "tagId": "",
            "html": "<p>Si una raiz tiene multiplicidad par, el signo no cambia al pasar por ella. Ese detalle altera la tabla de signos.</p>"
          },
          "guidedExercises": [
            {
              "tagId": "GX-C04.S03-01",
              "title": "Dos factores",
              "promptHtml": "<p>Resuelve</p><div class=\"math-display\">\\[\nx(x-3)\\leq 0.\n\\]</div>",
              "answerHtml": "<div class=\"math-display\">\\[\n[0,3].\n\\]</div>",
              "solutionHtml": "<p>Las raices son \\(0\\) y \\(3\\). El producto es no positivo entre ellas:</p><div class=\"math-display\">\\[\n[0,3].\n\\]</div>"
            },
            {
              "tagId": "GX-C04.S03-02",
              "title": "Raiz doble",
              "promptHtml": "<p>Resuelve</p><div class=\"math-display\">\\[\n(x+1)^2(x-2)>0.\n\\]</div>",
              "answerHtml": "<div class=\"math-display\">\\[\n(2,+\\infty).\n\\]</div>",
              "solutionHtml": "<p>El factor \\((x+1)^2\\) es siempre no negativo y solo vale \\(0\\) en \\(x=-1\\). El signo del producto lo decide \\(x-2\\), por lo que solo es positivo si \\(x>2\\).</p>"
            }
          ],
          "practice": {
            "label": "Practica autonoma graduada",
            "items": [
              {
                "tagId": "PX-C04.S03-01",
                "prompt": "Resuelve \\(x(x-1)(x+1)<0\\)."
              },
              {
                "tagId": "PX-C04.S03-02",
                "prompt": "Resuelve \\((x-2)^2(x+3)\\geq 0\\)."
              },
              {
                "tagId": "PX-C04.S03-03",
                "prompt": "Resuelve \\(x(x-4)^2\\leq 0\\)."
              },
              {
                "tagId": "PX-C04.S03-04",
                "prompt": "Resuelve \\((x+2)(x-5)>0\\)."
              },
              {
                "tagId": "PX-C04.S03-05",
                "prompt": "Resuelve \\(x^2(x-1)\\leq 0\\)."
              },
              {
                "tagId": "PX-C04.S03-06",
                "prompt": "Resuelve \\((x-3)^3\\geq 0\\)."
              }
            ],
            "answersHtml": "<ol><li><p>\\((-\\infty,-1)\\cup (0,1)\\)</p></li><li><p>\\([-3,+\\infty)\\)</p></li><li><p>\\((-\\infty,0]\\cup \\{4\\}\\)</p></li><li><p>\\((-\\infty,-2)\\cup (5,+\\infty)\\)</p></li><li><p>\\((-\\infty,1]\\)</p></li><li><p>\\([3,+\\infty)\\)</p></li></ol>",
            "solutionsHtml": "<ol><li><p>El signo alterna en \\(-1\\), \\(0\\) y \\(1\\), quedando negativo en \\((-\\infty,-1)\\) y \\((0,1)\\).</p></li><li><p>\\((x-2)^2\\geq 0\\), asi que el signo lo decide \\(x+3\\); se incluye \\(-3\\).</p></li><li><p>El signo lo decide \\(x\\), pero en \\(x=4\\) el producto vale \\(0\\).</p></li><li><p>Producto positivo fuera de las raices.</p></li><li><p>Como \\(x^2\\geq 0\\), el signo depende de \\(x-1\\) y el producto es no positivo si \\(x\\leq 1\\).</p></li><li><p>Una potencia impar conserva el signo de \\(x-3\\).</p></li></ol>"
          },
          "challenge": {}
        },
        {
          "id": "C04.S04",
          "title": "Inecuaciones racionales",
          "rawTitle": "[C04.S04] Inecuaciones racionales",
          "objectives": [
            {
              "label": "Objetivos de aprendizaje",
              "html": "<ul><li><p>Resolver inecuaciones con cocientes de polinomios.</p></li><li><p>Separar raices del numerador y puntos prohibidos del denominador.</p></li></ul>"
            }
          ],
          "prerequisites": [
            {
              "label": "Prerrequisitos",
              "html": "<ul><li><p>Inecuaciones polinomicas y fracciones algebraicas.</p></li></ul>"
            }
          ],
          "theory": {
            "title": "Idea minima",
            "titleText": "Idea minima",
            "tagId": "",
            "html": "<p>En una inecuacion racional, los puntos importantes son las raices del numerador y los valores que anulan el denominador. Estos ultimos nunca pueden pertenecer a la solucion.</p>"
          },
          "method": {
            "title": "Como reconocer y resolver",
            "titleText": "Como reconocer y resolver",
            "tagId": "",
            "html": "<ol><li><p>Factoriza numerador y denominador.</p></li><li><p>Marca las raices y los puntos prohibidos.</p></li><li><p>Estudia el signo en cada intervalo.</p></li><li><p>Incluye solo los ceros del numerador cuando la desigualdad lo permita.</p></li></ol>"
          },
          "solvedExample": {
            "title": "[EX-C04.S04-01] Cociente con un punto prohibido",
            "titleText": "Cociente con un punto prohibido",
            "tagId": "EX-C04.S04-01",
            "html": "<p>Resuelve</p><div class=\"math-display\">\\[\n\\frac{x-3}{x+1}\\leq 0.\n\\]</div><p><strong>Desarrollo.</strong> El numerador se anula en \\(x=3\\) y el denominador en \\(x=-1\\), que es punto prohibido. El estudio de signos da:</p><div class=\"math-display\">\\[\n(-\\infty,-1): +,\\qquad (-1,3): -,\\qquad (3,+\\infty): +.\n\\]</div><p>Como queremos \\(\\leq 0\\), tomamos el intervalo negativo y el cero del numerador.</p><p><strong>Respuesta final.</strong></p><div class=\"math-display\">\\[\n(-1,3].\n\\]</div>"
          },
          "commonError": {
            "title": "Incluir el punto prohibido",
            "titleText": "Incluir el punto prohibido",
            "tagId": "",
            "html": "<p>El valor que anula el denominador nunca se incluye, aunque la desigualdad sea \\(\\leq\\) o \\(\\geq\\).</p>"
          },
          "guidedExercises": [
            {
              "tagId": "GX-C04.S04-01",
              "title": "Signo positivo",
              "promptHtml": "<p>Resuelve</p><div class=\"math-display\">\\[\n\\frac{x}{x-2}>0.\n\\]</div>",
              "answerHtml": "<div class=\"math-display\">\\[\n(-\\infty,0)\\cup (2,+\\infty).\n\\]</div>",
              "solutionHtml": "<p>El cociente es positivo cuando numerador y denominador tienen el mismo signo:</p><div class=\"math-display\">\\[\n(-\\infty,0)\\cup (2,+\\infty).\n\\]</div>"
            },
            {
              "tagId": "GX-C04.S04-02",
              "title": "Signo no negativo",
              "promptHtml": "<p>Resuelve</p><div class=\"math-display\">\\[\n\\frac{x+1}{x}\\geq 0.\n\\]</div>",
              "answerHtml": "<div class=\"math-display\">\\[\n(-\\infty,-1]\\cup (0,+\\infty).\n\\]</div>",
              "solutionHtml": "<p>Los puntos clave son \\(-1\\) y \\(0\\). El cociente es no negativo en</p><div class=\"math-display\">\\[\n(-\\infty,-1]\\cup (0,+\\infty).\n\\]</div>"
            }
          ],
          "practice": {
            "label": "Practica autonoma graduada",
            "items": [
              {
                "tagId": "PX-C04.S04-01",
                "prompt": "Resuelve \\(\\dfrac{1}{x-4}<0\\)."
              },
              {
                "tagId": "PX-C04.S04-02",
                "prompt": "Resuelve \\(\\dfrac{x-2}{x+2}\\geq 0\\)."
              },
              {
                "tagId": "PX-C04.S04-03",
                "prompt": "Resuelve \\(\\dfrac{x}{x+1}\\leq 0\\)."
              },
              {
                "tagId": "PX-C04.S04-04",
                "prompt": "Resuelve \\(\\dfrac{x+3}{x-1}>0\\)."
              },
              {
                "tagId": "PX-C04.S04-05",
                "prompt": "Resuelve \\(\\dfrac{x-1}{x-3}<0\\)."
              },
              {
                "tagId": "PX-C04.S04-06",
                "prompt": "Resuelve \\(\\dfrac{1}{x^2-4}>0\\)."
              }
            ],
            "answersHtml": "<ol><li><p>\\((-\\infty,4)\\)</p></li><li><p>\\((-\\infty,-2)\\cup [2,+\\infty)\\)</p></li><li><p>\\((-1,0]\\)</p></li><li><p>\\((-\\infty,-3)\\cup (1,+\\infty)\\)</p></li><li><p>\\((1,3)\\)</p></li><li><p>\\((-\\infty,-2)\\cup (2,+\\infty)\\)</p></li></ol>",
            "solutionsHtml": "<ol><li><p>El signo lo decide \\(x-4\\); la fraccion es negativa si \\(x<4\\).</p></li><li><p>Mismo signo en numerador y denominador, incluyendo \\(x=2\\).</p></li><li><p>Entre \\(-1\\) y \\(0\\) el cociente es no positivo, e incluye \\(x=0\\).</p></li><li><p>Positiva si ambos factores tienen el mismo signo, sin incluir \\(x=-3\\) porque hace cero el numerador.</p></li><li><p>Negativa entre las raices y sin incluirlas.</p></li><li><p>\\(x^2-4=(x-2)(x+2)\\); el producto es positivo fuera de \\([-2,2]\\), sin incluir los extremos.</p></li></ol>"
          },
          "challenge": {}
        },
        {
          "id": "C04.S05",
          "title": "Sistemas de inecuaciones en una variable",
          "rawTitle": "[C04.S05] Sistemas de inecuaciones en una variable",
          "objectives": [
            {
              "label": "Objetivos de aprendizaje",
              "html": "<ul><li><p>Resolver varias inecuaciones a la vez.</p></li><li><p>Hallar la interseccion final de sus soluciones.</p></li></ul>"
            }
          ],
          "prerequisites": [
            {
              "label": "Prerrequisitos",
              "html": "<ul><li><p>Inecuaciones lineales y expresion en intervalos.</p></li></ul>"
            }
          ],
          "theory": {
            "title": "Idea minima",
            "titleText": "Idea minima",
            "tagId": "",
            "html": "<p>Un sistema de inecuaciones se resuelve encontrando la solucion de cada una por separado y tomando la interseccion de todas ellas.</p>"
          },
          "method": {
            "title": "Como reconocer y resolver",
            "titleText": "Como reconocer y resolver",
            "tagId": "",
            "html": "<ol><li><p>Resuelve cada inecuacion por separado.</p></li><li><p>Escribe cada solucion como intervalo.</p></li><li><p>Intersecta los intervalos.</p></li></ol>"
          },
          "solvedExample": {
            "title": "[EX-C04.S05-01] Interseccion de dos condiciones",
            "titleText": "Interseccion de dos condiciones",
            "tagId": "EX-C04.S05-01",
            "html": "<p>Resuelve</p><div class=\"math-display\">\\[\n\\begin{cases}\nx+2>0,\\\\\n2x-3\\leq 1.\n\\end{cases}\n\\]</div><p><strong>Desarrollo.</strong></p><div class=\"math-display\">\\[\nx>-2,\n\\qquad\n2x\\leq 4 \\Longrightarrow x\\leq 2.\n\\]</div><p>La interseccion es</p><div class=\"math-display\">\\[\n(-2,2].\n\\]</div><p><strong>Respuesta final.</strong></p><div class=\"math-display\">\\[\nx\\in (-2,2].\n\\]</div>"
          },
          "commonError": {
            "title": "Unir en lugar de intersectar",
            "titleText": "Unir en lugar de intersectar",
            "tagId": "",
            "html": "<p>En un sistema deben cumplirse todas las condiciones, asi que se intersectan soluciones; no se unen.</p>"
          },
          "guidedExercises": [
            {
              "tagId": "GX-C04.S05-01",
              "title": "Dos cotas",
              "promptHtml": "<p>Resuelve</p><div class=\"math-display\">\\[\n\\begin{cases}\nx<5,\\\\\nx\\geq 1.\n\\end{cases}\n\\]</div>",
              "answerHtml": "<div class=\"math-display\">\\[\n[1,5).\n\\]</div>",
              "solutionHtml": "<p>La primera condicion da \\((-\\infty,5)\\) y la segunda \\([1,+\\infty)\\). Su interseccion es</p><div class=\"math-display\">\\[\n[1,5).\n\\]</div>"
            },
            {
              "tagId": "GX-C04.S05-02",
              "title": "Dos lineales",
              "promptHtml": "<p>Resuelve</p><div class=\"math-display\">\\[\n\\begin{cases}\n2x+1>3,\\\\\n\\dfrac{x}{2}\\leq 4.\n\\end{cases}\n\\]</div>",
              "answerHtml": "<div class=\"math-display\">\\[\n(1,8].\n\\]</div>",
              "solutionHtml": "<div class=\"math-display\">\\[\n2x>2 \\Longrightarrow x>1,\n\\qquad\nx\\leq 8.\n\\]</div><p>Por tanto,</p><div class=\"math-display\">\\[\n(1,8].\n\\]</div>"
            }
          ],
          "practice": {
            "label": "Practica autonoma graduada",
            "items": [
              {
                "tagId": "PX-C04.S05-01",
                "prompt": "Resuelve \\(\\begin{cases}x>-3\\\\ x<4\\end{cases}\\)."
              },
              {
                "tagId": "PX-C04.S05-02",
                "prompt": "Resuelve \\(\\begin{cases}x\\geq 0\\\\ x\\leq 6\\end{cases}\\)."
              },
              {
                "tagId": "PX-C04.S05-03",
                "prompt": "Resuelve \\(\\begin{cases}x-1>0\\\\ 3-x\\geq 0\\end{cases}\\)."
              },
              {
                "tagId": "PX-C04.S05-04",
                "prompt": "Resuelve \\(\\begin{cases}2x\\leq 8\\\\ x+5>0\\end{cases}\\)."
              },
              {
                "tagId": "PX-C04.S05-05",
                "prompt": "Resuelve \\(\\begin{cases}x<2\\\\ x\\geq 2\\end{cases}\\)."
              },
              {
                "tagId": "PX-C04.S05-06",
                "prompt": "Resuelve \\(\\begin{cases}x\\leq -1\\\\ x>-4\\end{cases}\\)."
              }
            ],
            "answersHtml": "<ol><li><p>\\((-3,4)\\)</p></li><li><p>\\([0,6]\\)</p></li><li><p>\\((1,3]\\)</p></li><li><p>\\((-5,4]\\)</p></li><li><p>\\(\\varnothing\\)</p></li><li><p>\\((-4,-1]\\)</p></li></ol>",
            "solutionsHtml": "<ol><li><p>Interseccion de \\(( -3,+\\infty)\\) y \\((-\\infty,4)\\).</p></li><li><p>Interseccion de \\([0,+\\infty)\\) y \\((-\\infty,6]\\).</p></li><li><p>\\(x>1\\) y \\(x\\leq 3\\).</p></li><li><p>\\(x\\leq 4\\) y \\(x>-5\\).</p></li><li><p>No existe ningun \\(x\\) que cumpla ambas condiciones.</p></li><li><p>\\(x\\in(-4,-1]\\).</p></li></ol>"
          },
          "challenge": {}
        },
        {
          "id": "C04.S06",
          "title": "Inecuaciones de dos variables y semiplanos",
          "rawTitle": "[C04.S06] Inecuaciones de dos variables y semiplanos",
          "objectives": [
            {
              "label": "Objetivos de aprendizaje",
              "html": "<ul><li><p>Identificar la recta frontera de una inecuacion lineal en dos variables.</p></li><li><p>Decidir que semiplano satisface la condicion.</p></li></ul>"
            }
          ],
          "prerequisites": [
            {
              "label": "Prerrequisitos",
              "html": "<ul><li><p>Ecuacion de la recta y representacion en el plano.</p></li></ul>"
            }
          ],
          "theory": {
            "title": "Idea minima",
            "titleText": "Idea minima",
            "tagId": "",
            "html": "<p>La inecuacion \\(ax+by\\leq c\\) se apoya en la recta frontera \\(ax+by=c\\). Un punto de prueba como \\((0,0)\\) suele ayudar a decidir que lado de la recta pertenece a la solucion.</p>"
          },
          "method": {
            "title": "Como reconocer y resolver",
            "titleText": "Como reconocer y resolver",
            "tagId": "",
            "html": "<ol><li><p>Sustituye el signo por igualdad para obtener la recta frontera.</p></li><li><p>Elige un punto sencillo que no este en la recta.</p></li><li><p>Comprueba si ese punto satisface la inecuacion.</p></li><li><p>Decide el semiplano correspondiente.</p></li></ol>"
          },
          "solvedExample": {
            "title": "[EX-C04.S06-01] Semiplano por punto de prueba",
            "titleText": "Semiplano por punto de prueba",
            "tagId": "EX-C04.S06-01",
            "html": "<p>Describe geometricamente la solucion de</p><div class=\"math-display\">\\[\nx+2y\\leq 4.\n\\]</div><p><strong>Desarrollo.</strong> La recta frontera es</p><div class=\"math-display\">\\[\nx+2y=4.\n\\]</div><p>Probamos el punto \\((0,0)\\):</p><div class=\"math-display\">\\[\n0+2\\cdot 0\\leq 4,\n\\]</div><p>que es verdadero. Por tanto, la solucion es el semiplano que contiene al origen, con la recta incluida.</p><p><strong>Respuesta final.</strong> Recta frontera \\(x+2y=4\\) y semiplano que contiene \\((0,0)\\).</p>"
          },
          "commonError": {
            "title": "Cambiar el lado equivocado",
            "titleText": "Cambiar el lado equivocado",
            "tagId": "",
            "html": "<p>No basta con dibujar la recta: hay que comprobar con un punto de prueba que lado cumple la inecuacion.</p>"
          },
          "guidedExercises": [
            {
              "tagId": "GX-C04.S06-01",
              "title": "Semiplano superior",
              "promptHtml": "<p>Describe la solucion de</p><div class=\"math-display\">\\[\ny>x.\n\\]</div>",
              "answerHtml": "<p>Recta frontera \\(y=x\\); semiplano superior, que contiene por ejemplo \\((0,1)\\).</p>",
              "solutionHtml": "<p>La frontera es \\(y=x\\). El punto \\((0,1)\\) cumple \\(1>0\\), asi que la solucion es el semiplano por encima de la recta.</p>"
            },
            {
              "tagId": "GX-C04.S06-02",
              "title": "Frontera vertical",
              "promptHtml": "<p>Describe la solucion de</p><div class=\"math-display\">\\[\nx\\geq -1.\n\\]</div>",
              "answerHtml": "<p>Recta frontera \\(x=-1\\); semiplano a la derecha, que incluye por ejemplo \\((0,0)\\).</p>",
              "solutionHtml": "<p>La recta frontera es vertical:</p><div class=\"math-display\">\\[\nx=-1.\n\\]</div><p>Como el punto \\((0,0)\\) verifica \\(0\\geq -1\\), la solucion es el semiplano derecho, incluyendo la recta.</p>"
            }
          ],
          "practice": {
            "label": "Practica autonoma graduada",
            "items": [
              {
                "tagId": "PX-C04.S06-01",
                "prompt": "Describe la solucion de \\(x+y\\leq 3\\)."
              },
              {
                "tagId": "PX-C04.S06-02",
                "prompt": "Describe la solucion de \\(y\\geq 2\\)."
              },
              {
                "tagId": "PX-C04.S06-03",
                "prompt": "Describe la solucion de \\(x<4\\)."
              },
              {
                "tagId": "PX-C04.S06-04",
                "prompt": "Describe la solucion de \\(2x-y>0\\)."
              },
              {
                "tagId": "PX-C04.S06-05",
                "prompt": "Describe la solucion de \\(x+y\\geq 0\\)."
              },
              {
                "tagId": "PX-C04.S06-06",
                "prompt": "Describe la solucion de \\(y\\leq -x+2\\)."
              }
            ],
            "answersHtml": "<ol><li><p>Recta \\(x+y=3\\); semiplano que contiene \\((0,0)\\)</p></li><li><p>Recta \\(y=2\\); semiplano superior, que contiene \\((0,3)\\)</p></li><li><p>Recta \\(x=4\\); semiplano izquierdo, que contiene \\((0,0)\\)</p></li><li><p>Recta \\(y=2x\\); semiplano inferior, que contiene \\((1,0)\\)</p></li><li><p>Recta \\(x+y=0\\); semiplano que contiene \\((1,0)\\)</p></li><li><p>Recta \\(y=-x+2\\); semiplano inferior, que contiene \\((0,0)\\)</p></li></ol>",
            "solutionsHtml": "<ol><li><p>La frontera es \\(x+y=3\\). El origen satisface \\(0\\leq 3\\).</p></li><li><p>La frontera es horizontal: \\(y=2\\). Se toman los puntos con ordenada mayor o igual que \\(2\\).</p></li><li><p>La frontera es \\(x=4\\). Como \\(0<4\\), se toma el lado izquierdo.</p></li><li><p>\\(2x-y>0\\) equivale a \\(y<2x\\); la frontera es \\(y=2x\\).</p></li><li><p>La frontera es \\(x+y=0\\). El punto \\((1,0)\\) cumple \\(1\\geq 0\\).</p></li><li><p>Ya esta despejada: \\(y\\leq -x+2\\), es el semiplano por debajo de la recta.</p></li></ol>"
          },
          "challenge": {}
        },
        {
          "id": "C04.S07",
          "title": "Sistemas de inecuaciones en el plano",
          "rawTitle": "[C04.S07] Sistemas de inecuaciones en el plano",
          "objectives": [
            {
              "label": "Objetivos de aprendizaje",
              "html": "<ul><li><p>Combinar varias inecuaciones lineales en el plano.</p></li><li><p>Describir la region solucion mediante sus vertices o su forma.</p></li></ul>"
            }
          ],
          "prerequisites": [
            {
              "label": "Prerrequisitos",
              "html": "<ul><li><p>Semiplanos y ecuacion de la recta.</p></li></ul>"
            }
          ],
          "theory": {
            "title": "Idea minima",
            "titleText": "Idea minima",
            "tagId": "",
            "html": "<p>La region solucion de un sistema de inecuaciones en el plano es la interseccion de varios semiplanos. Cuando la region es poligonal, sus vertices ayudan a describirla con precision.</p>"
          },
          "method": {
            "title": "Como reconocer y resolver",
            "titleText": "Como reconocer y resolver",
            "tagId": "",
            "html": "<ol><li><p>Representa o identifica cada semiplano.</p></li><li><p>Busca la zona comun.</p></li><li><p>Si la region es acotada, localiza sus vertices.</p></li></ol>"
          },
          "solvedExample": {
            "title": "[EX-C04.S07-01] Triangulo en el primer cuadrante",
            "titleText": "Triangulo en el primer cuadrante",
            "tagId": "EX-C04.S07-01",
            "html": "<p>Describe la region solucion de</p><div class=\"math-display\">\\[\n\\begin{cases}\nx\\geq 0,\\\\\ny\\geq 0,\\\\\nx+y\\leq 4.\n\\end{cases}\n\\]</div><p><strong>Desarrollo.</strong> Las dos primeras condiciones nos dejan en el primer cuadrante. La tercera anade el semiplano por debajo de la recta \\(x+y=4\\). La region comun es un triangulo.</p><p><strong>Respuesta final.</strong> Triangulo con vertices</p><div class=\"math-display\">\\[\n(0,0),\\qquad (4,0),\\qquad (0,4).\n\\]</div>"
          },
          "commonError": {
            "title": "Olvidar una condicion",
            "titleText": "Olvidar una condicion",
            "tagId": "",
            "html": "<p>Si se dibuja solo una parte del sistema, la region obtenida puede ser mucho mas grande que la solucion real.</p>"
          },
          "guidedExercises": [
            {
              "tagId": "GX-C04.S07-01",
              "title": "Triangulo desplazado",
              "promptHtml": "<p>Describe la region solucion de</p><div class=\"math-display\">\\[\n\\begin{cases}\nx\\geq 1,\\\\\ny\\geq 0,\\\\\nx+y\\leq 5.\n\\end{cases}\n\\]</div>",
              "answerHtml": "<p>Triangulo con vertices \\((1,0)\\), \\((5,0)\\) y \\((1,4)\\).</p>",
              "solutionHtml": "<p>La recta vertical \\(x=1\\), el eje \\(x\\) y la recta \\(x+y=5\\) delimitan un triangulo con esos vertices.</p>"
            },
            {
              "tagId": "GX-C04.S07-02",
              "title": "Triangulo apoyado sobre \\(y=1\\)",
              "promptHtml": "<p>Describe la region solucion de</p><div class=\"math-display\">\\[\n\\begin{cases}\nx\\geq 0,\\\\\ny\\geq 1,\\\\\nx+y\\leq 3.\n\\end{cases}\n\\]</div>",
              "answerHtml": "<p>Triangulo con vertices \\((0,1)\\), \\((2,1)\\) y \\((0,3)\\).</p>",
              "solutionHtml": "<p>La region comun queda entre la recta \\(y=1\\), el eje \\(y\\) y la recta \\(x+y=3\\). Los cortes dan los vertices indicados.</p>"
            }
          ],
          "practice": {
            "label": "Practica autonoma graduada",
            "items": [
              {
                "tagId": "PX-C04.S07-01",
                "prompt": "Describe la region de \\(\\begin{cases}x\\geq 0\\\\ y\\geq 0\\\\ x+y\\leq 2\\end{cases}\\)."
              },
              {
                "tagId": "PX-C04.S07-02",
                "prompt": "Describe la region de \\(\\begin{cases}x\\geq -1\\\\ y\\geq 0\\\\ x+y\\leq 3\\end{cases}\\)."
              },
              {
                "tagId": "PX-C04.S07-03",
                "prompt": "Describe la region de \\(\\begin{cases}x\\geq 0\\\\ y\\geq 0\\\\ x\\leq 3\\\\ y\\leq 2\\end{cases}\\)."
              },
              {
                "tagId": "PX-C04.S07-04",
                "prompt": "Describe la region de \\(\\begin{cases}x\\geq 0\\\\ y\\geq 0\\\\ y\\leq x\\\\ x+y\\leq 4\\end{cases}\\)."
              },
              {
                "tagId": "PX-C04.S07-05",
                "prompt": "Describe la region de \\(\\begin{cases}x\\geq 1\\\\ y\\geq 1\\\\ x+y\\leq 5\\end{cases}\\)."
              },
              {
                "tagId": "PX-C04.S07-06",
                "prompt": "Describe la region de \\(\\begin{cases}x\\geq 0\\\\ y\\geq 0\\\\ x+2y\\leq 4\\end{cases}\\)."
              }
            ],
            "answersHtml": "<ol><li><p>Triangulo con vertices \\((0,0)\\), \\((2,0)\\), \\((0,2)\\)</p></li><li><p>Triangulo con vertices \\((-1,0)\\), \\((3,0)\\), \\((-1,4)\\)</p></li><li><p>Rectangulo con vertices \\((0,0)\\), \\((3,0)\\), \\((3,2)\\), \\((0,2)\\)</p></li><li><p>Triangulo con vertices \\((0,0)\\), \\((4,0)\\), \\((2,2)\\)</p></li><li><p>Triangulo con vertices \\((1,1)\\), \\((4,1)\\), \\((1,4)\\)</p></li><li><p>Triangulo con vertices \\((0,0)\\), \\((4,0)\\), \\((0,2)\\)</p></li></ol>",
            "solutionsHtml": "<ol><li><p>Primer cuadrante por debajo de \\(x+y=2\\).</p></li><li><p>La recta \\(x=-1\\), el eje \\(x\\) y \\(x+y=3\\) recortan ese triangulo.</p></li><li><p>Interseccion de cuatro semiplanos: banda horizontal y banda vertical.</p></li><li><p>La recta \\(y=x\\) corta a \\(x+y=4\\) en \\((2,2)\\), y el eje \\(x\\) aporta \\((0,0)\\) y \\((4,0)\\).</p></li><li><p>Desplazando el primer cuadrante al punto \\((1,1)\\) y cortando con \\(x+y=5\\).</p></li><li><p>Interseccion con los ejes y la recta \\(x+2y=4\\).</p></li></ol>"
          },
          "challenge": {}
        }
      ]
    },
    {
      "id": "C05",
      "slug": "05_trigonometria",
      "title": "Trigonometria",
      "summaryHtml": "<p>Este capitulo desarrolla las secciones <code>C05.S01-C05.S08</code> de la matriz de cobertura a partir de <code>sources/Relacion tema 5.pdf</code>. El foco didactico es controlar unidades, cuadrantes y elecciones de metodo antes de pasar a ecuaciones, triangulos y problemas de contexto.</p>",
      "studyRouteHtml": "",
      "sectionCount": 8,
      "sections": [
        {
          "id": "C05.S01",
          "title": "Grados y radianes",
          "rawTitle": "[C05.S01] Grados y radianes",
          "objectives": [
            {
              "label": "Objetivos de aprendizaje",
              "html": "<ul><li><p>Convertir angulos de grados a radianes y viceversa.</p></li><li><p>Reconocer equivalencias basicas entre vuelta, semivuelta y cuarto de vuelta.</p></li></ul>"
            }
          ],
          "prerequisites": [
            {
              "label": "Prerrequisitos",
              "html": "<ul><li><p>Fracciones y proporcionalidad.</p></li></ul>"
            }
          ],
          "theory": {
            "title": "Idea minima",
            "titleText": "Idea minima",
            "tagId": "",
            "html": "<p>Una vuelta completa mide \\(360^\\circ\\) y tambien \\(2\\pi\\) radianes. Por eso</p><div class=\"math-display\">\\[\n180^\\circ=\\pi \\text{ rad},\\qquad 1^\\circ=\\frac{\\pi}{180}\\text{ rad},\\qquad\n1\\text{ rad}=\\frac{180^\\circ}{\\pi}.\n\\]</div>"
          },
          "method": {
            "title": "Como reconocer y resolver",
            "titleText": "Como reconocer y resolver",
            "tagId": "",
            "html": "<ol><li><p>Si partes de grados, multiplica por \\(\\frac{\\pi}{180}\\).</p></li><li><p>Si partes de radianes, multiplica por \\(\\frac{180}{\\pi}\\).</p></li><li><p>Simplifica la fraccion final si es posible.</p></li></ol>"
          },
          "solvedExample": {
            "title": "[EX-C05.S01-01] Convertir en ambos sentidos",
            "titleText": "Convertir en ambos sentidos",
            "tagId": "EX-C05.S01-01",
            "html": "<p>Convierte \\(135^\\circ\\) a radianes y \\(\\frac{7\\pi}{6}\\) radianes a grados.</p><p><strong>Desarrollo.</strong></p><div class=\"math-display\">\\[\n135^\\circ=\\frac{135\\pi}{180}=\\frac{3\\pi}{4}\\text{ rad}.\n\\]</div><p>Para el segundo:</p><div class=\"math-display\">\\[\n\\frac{7\\pi}{6}\\text{ rad}=\\frac{7\\pi}{6}\\cdot \\frac{180^\\circ}{\\pi}=210^\\circ.\n\\]</div><p><strong>Respuesta final.</strong></p><div class=\"math-display\">\\[\n135^\\circ=\\frac{3\\pi}{4}\\text{ rad},\n\\qquad\n\\frac{7\\pi}{6}\\text{ rad}=210^\\circ.\n\\]</div>"
          },
          "commonError": {
            "title": "Cancelar la \\(\\pi\\) cuando no toca",
            "titleText": "Cancelar la \\(\\pi\\) cuando no toca",
            "tagId": "",
            "html": "<p>En una conversion de grados a radianes la \\(\\pi\\) debe aparecer en el resultado. Si desaparece, seguramente se ha usado la razon al reves.</p>"
          },
          "guidedExercises": [
            {
              "tagId": "GX-C05.S01-01",
              "title": "De grados a radianes",
              "promptHtml": "<p>Convierte \\(210^\\circ\\) a radianes.</p><p><strong>Pista 1.</strong> Multiplica por \\(\\frac{\\pi}{180}\\) y simplifica.</p>",
              "answerHtml": "<div class=\"math-display\">\\[\n210^\\circ=\\frac{7\\pi}{6}\\text{ rad}.\n\\]</div>",
              "solutionHtml": "<div class=\"math-display\">\\[\n210^\\circ=\\frac{210\\pi}{180}=\\frac{7\\pi}{6}\\text{ rad}.\n\\]</div>"
            },
            {
              "tagId": "GX-C05.S01-02",
              "title": "De radianes a grados",
              "promptHtml": "<p>Convierte \\(\\frac{3\\pi}{4}\\) radianes a grados.</p><p><strong>Pista 1.</strong> Multiplica por \\(\\frac{180^\\circ}{\\pi}\\).</p>",
              "answerHtml": "<div class=\"math-display\">\\[\n\\frac{3\\pi}{4}\\text{ rad}=135^\\circ.\n\\]</div>",
              "solutionHtml": "<div class=\"math-display\">\\[\n\\frac{3\\pi}{4}\\cdot \\frac{180^\\circ}{\\pi}=135^\\circ.\n\\]</div>"
            }
          ],
          "practice": {
            "label": "Practica autonoma graduada",
            "items": [
              {
                "tagId": "PX-C05.S01-01",
                "prompt": "Convierte \\(30^\\circ\\) a radianes."
              },
              {
                "tagId": "PX-C05.S01-02",
                "prompt": "Convierte \\(300^\\circ\\) a radianes."
              },
              {
                "tagId": "PX-C05.S01-03",
                "prompt": "Convierte \\(\\frac{\\pi}{5}\\) radianes a grados."
              },
              {
                "tagId": "PX-C05.S01-04",
                "prompt": "Convierte \\(\\frac{11\\pi}{6}\\) radianes a grados."
              },
              {
                "tagId": "PX-C05.S01-05",
                "prompt": "Convierte \\(225^\\circ\\) a radianes."
              },
              {
                "tagId": "PX-C05.S01-06",
                "prompt": "Convierte \\(\\frac{2\\pi}{3}\\) radianes a grados."
              }
            ],
            "answersHtml": "<ol><li><p>\\(\\frac{\\pi}{6}\\) rad</p></li><li><p>\\(\\frac{5\\pi}{3}\\) rad</p></li><li><p>\\(36^\\circ\\)</p></li><li><p>\\(330^\\circ\\)</p></li><li><p>\\(\\frac{5\\pi}{4}\\) rad</p></li><li><p>\\(120^\\circ\\)</p></li></ol>",
            "solutionsHtml": "<ol><li><p>\\(30^\\circ=\\frac{30\\pi}{180}=\\frac{\\pi}{6}\\).</p></li><li><p>\\(300^\\circ=\\frac{300\\pi}{180}=\\frac{5\\pi}{3}\\).</p></li><li><p>\\(\\frac{\\pi}{5}\\cdot \\frac{180^\\circ}{\\pi}=36^\\circ\\).</p></li><li><p>\\(\\frac{11\\pi}{6}\\cdot \\frac{180^\\circ}{\\pi}=330^\\circ\\).</p></li><li><p>\\(225^\\circ=\\frac{225\\pi}{180}=\\frac{5\\pi}{4}\\).</p></li><li><p>\\(\\frac{2\\pi}{3}\\cdot \\frac{180^\\circ}{\\pi}=120^\\circ\\).</p></li></ol>"
          },
          "challenge": {}
        },
        {
          "id": "C05.S02",
          "title": "Razones trigonometricas en triangulos y poligonos",
          "rawTitle": "[C05.S02] Razones trigonometricas en triangulos y poligonos",
          "objectives": [
            {
              "label": "Objetivos de aprendizaje",
              "html": "<ul><li><p>Aplicar \\(\\sen\\), \\(\\cos\\) y \\(\\tg\\) en triangulos rectangulos.</p></li><li><p>Descomponer figuras planas en triangulos utiles.</p></li></ul>"
            }
          ],
          "prerequisites": [
            {
              "label": "Prerrequisitos",
              "html": "<ul><li><p>Teorema de Pitagoras y conversion de unidades de longitud.</p></li></ul>"
            }
          ],
          "theory": {
            "title": "Idea minima",
            "titleText": "Idea minima",
            "tagId": "",
            "html": "<p>En un triangulo rectangulo con angulo agudo \\(\\alpha\\),</p><div class=\"math-display\">\\[\n\\sen\\alpha=\\frac{\\text{cateto opuesto}}{\\text{hipotenusa}},\n\\qquad\n\\cos\\alpha=\\frac{\\text{cateto contiguo}}{\\text{hipotenusa}},\n\\qquad\n\\tg\\alpha=\\frac{\\text{cateto opuesto}}{\\text{cateto contiguo}}.\n\\]</div><p>Muchas figuras planas se resuelven al trazar una altura o una diagonal.</p><div class=\"centered-block\"><div class=\"figure-fallback\">Esquema disponible en el cuaderno PDF. Refuerza esta idea con el laboratorio interactivo.</div></div>"
          },
          "method": {
            "title": "Como reconocer y resolver",
            "titleText": "Como reconocer y resolver",
            "tagId": "",
            "html": "<ol><li><p>Busca un triangulo rectangulo dentro de la figura.</p></li><li><p>Elige la razon que relaciona el dato conocido con el buscado.</p></li><li><p>Si la figura no es un triangulo, traza alturas o diagonales para dividirla.</p></li></ol>"
          },
          "solvedExample": {
            "title": "[EX-C05.S02-01] Triangulo isosceles resuelto por descomposicion",
            "titleText": "Triangulo isosceles resuelto por descomposicion",
            "tagId": "EX-C05.S02-01",
            "html": "<p>Un triangulo isosceles tiene lados iguales de \\(\\SI{10}{cm}\\) y angulo del vertice \\(120^\\circ\\). Calcula la base y el area.</p><p><strong>Desarrollo.</strong> La altura desde el vertice parte el triangulo en dos triangulos rectangulos con hipotenusa \\(\\SI{10}{cm}\\) y angulo \\(60^\\circ\\).</p><p>La mitad de la base vale</p><div class=\"math-display\">\\[\n10\\sen 60^\\circ=10\\cdot \\frac{\\sqrt{3}}{2}=5\\sqrt{3}.\n\\]</div><p>Luego la base completa es</p><div class=\"math-display\">\\[\nb=10\\sqrt{3}\\text{ cm}.\n\\]</div><p>La altura vale</p><div class=\"math-display\">\\[\nh=10\\cos 60^\\circ=10\\cdot \\frac{1}{2}=5\\text{ cm}.\n\\]</div><p>Por tanto,</p><div class=\"math-display\">\\[\nA=\\frac{b\\cdot h}{2}=\\frac{10\\sqrt{3}\\cdot 5}{2}=25\\sqrt{3}\\text{ cm}^2.\n\\]</div><p><strong>Respuesta final.</strong></p><div class=\"math-display\">\\[\nb=10\\sqrt{3}\\text{ cm},\n\\qquad\nA=25\\sqrt{3}\\text{ cm}^2.\n\\]</div>"
          },
          "commonError": {
            "title": "Confundir el angulo entero con el semangulo",
            "titleText": "Confundir el angulo entero con el semangulo",
            "tagId": "",
            "html": "<p>Cuando una altura divide un triangulo isosceles, el angulo del vertice tambien se parte en dos. Si se sigue usando \\(120^\\circ\\) dentro del triangulo rectangulo, toda la razon queda mal.</p>"
          },
          "guidedExercises": [
            {
              "tagId": "GX-C05.S02-01",
              "title": "Catetos desde la hipotenusa",
              "promptHtml": "<p>En un triangulo rectangulo la hipotenusa mide \\(\\SI{10}{cm}\\) y uno de los angulos agudos es \\(30^\\circ\\). Halla los dos catetos.</p><p><strong>Pista 1.</strong> Usa \\(\\sen 30^\\circ\\) y \\(\\cos 30^\\circ\\).</p>",
              "answerHtml": "<p>Catetos: \\(\\SI{5}{cm}\\) y \\(5\\sqrt{3}\\,\\si{cm}\\).</p>",
              "solutionHtml": "<div class=\"math-display\">\\[\n\\text{opuesto}=10\\sen 30^\\circ=5,\n\\qquad\n\\text{contiguo}=10\\cos 30^\\circ=5\\sqrt{3}.\n\\]</div>"
            },
            {
              "tagId": "GX-C05.S02-02",
              "title": "Cateto e hipotenusa",
              "promptHtml": "<p>En un triangulo rectangulo, el cateto contiguo a un angulo de \\(45^\\circ\\) mide \\(\\SI{6}{cm}\\). Halla la hipotenusa y el otro cateto.</p><p><strong>Pista 1.</strong> En \\(45^\\circ\\), \\(\\tg 45^\\circ=1\\).</p>",
              "answerHtml": "<p>Hipotenusa: \\(6\\sqrt{2}\\,\\si{cm}\\). Otro cateto: \\(\\SI{6}{cm}\\).</p>",
              "solutionHtml": "<p>Si el angulo es \\(45^\\circ\\), ambos catetos coinciden. Luego el otro cateto tambien mide \\(\\SI{6}{cm}\\). Por Pitagoras,</p><div class=\"math-display\">\\[\nh=\\sqrt{6^2+6^2}=6\\sqrt{2}.\n\\]</div>"
            }
          ],
          "practice": {
            "label": "Practica autonoma graduada",
            "items": [
              {
                "tagId": "PX-C05.S02-01",
                "prompt": "En un triangulo rectangulo, el cateto opuesto a \\(30^\\circ\\) mide \\(\\SI{4}{cm}\\). Halla la hipotenusa y el otro cateto."
              },
              {
                "tagId": "PX-C05.S02-02",
                "prompt": "En un triangulo rectangulo, la hipotenusa mide \\(\\SI{12}{cm}\\) y un angulo agudo es \\(60^\\circ\\). Halla los catetos."
              },
              {
                "tagId": "PX-C05.S02-03",
                "prompt": "Un triangulo isosceles tiene lados iguales de \\(\\SI{10}{cm}\\) y angulo del vertice \\(120^\\circ\\). Halla la base."
              },
              {
                "tagId": "PX-C05.S02-04",
                "prompt": "Un rombo tiene lado \\(\\SI{8}{cm}\\) y angulo agudo \\(60^\\circ\\). Halla sus diagonales."
              },
              {
                "tagId": "PX-C05.S02-05",
                "prompt": "Un hexagono regular tiene lado \\(\\SI{4}{cm}\\). Halla su apotema."
              },
              {
                "tagId": "PX-C05.S02-06",
                "prompt": "Un rectangulo tiene diagonal \\(\\SI{10}{cm}\\) y la diagonal forma \\(30^\\circ\\) con la base. Halla las longitudes de base y altura."
              }
            ],
            "answersHtml": "<ol><li><p>Hipotenusa: \\(\\SI{8}{cm}\\). Otro cateto: \\(4\\sqrt{3}\\,\\si{cm}\\)</p></li><li><p>Catetos: \\(\\SI{6}{cm}\\) y \\(6\\sqrt{3}\\,\\si{cm}\\)</p></li><li><p>\\(10\\sqrt{3}\\,\\si{cm}\\)</p></li><li><p>\\(\\SI{8}{cm}\\) y \\(8\\sqrt{3}\\,\\si{cm}\\)</p></li><li><p>\\(2\\sqrt{3}\\,\\si{cm}\\)</p></li><li><p>Base: \\(5\\sqrt{3}\\,\\si{cm}\\). Altura: \\(\\SI{5}{cm}\\)</p></li></ol>",
            "solutionsHtml": "<ol><li><p>\\(\\sen 30^\\circ=\\frac{4}{h}\\), luego \\(h=8\\). El otro cateto es \\(8\\cos 30^\\circ=4\\sqrt{3}\\).</p></li><li><p>\\(12\\cos 60^\\circ=6\\) y \\(12\\sen 60^\\circ=6\\sqrt{3}\\).</p></li><li><p>Es el mismo calculo del ejemplo: la base vale \\(10\\sqrt{3}\\).</p></li><li><p>Las semidiagonales forman triangulos rectangulos: \\(d_1=8\\) y \\(d_2=8\\sqrt{3}\\).</p></li><li><p>En el triangulo central, la apotema es \\(4\\cos 30^\\circ=2\\sqrt{3}\\).</p></li><li><p>Base \\(=10\\cos 30^\\circ=5\\sqrt{3}\\) y altura \\(=10\\sen 30^\\circ=5\\).</p></li></ol>"
          },
          "challenge": {}
        },
        {
          "id": "C05.S03",
          "title": "Angulos notables y reduccion al primer cuadrante",
          "rawTitle": "[C05.S03] Angulos notables y reduccion al primer cuadrante",
          "objectives": [
            {
              "label": "Objetivos de aprendizaje",
              "html": "<ul><li><p>Hallar razones trigonometricas exactas en angulos relacionados.</p></li><li><p>Controlar el signo correcto segun el cuadrante.</p></li></ul>"
            }
          ],
          "prerequisites": [
            {
              "label": "Prerrequisitos",
              "html": "<ul><li><p>Conversion entre grados y radianes.</p></li></ul>"
            }
          ],
          "theory": {
            "title": "Idea minima",
            "titleText": "Idea minima",
            "tagId": "",
            "html": "<p>Los angulos notables \\(30^\\circ\\), \\(45^\\circ\\) y \\(60^\\circ\\) generan valores exactos. Para un angulo cualquiera, se puede reducir al primer cuadrante y decidir el signo por cuadrantes.</p><div class=\"centered-block\"><div class=\"figure-fallback\">Esquema disponible en el cuaderno PDF. Refuerza esta idea con el laboratorio interactivo.</div></div>"
          },
          "method": {
            "title": "Como reconocer y resolver",
            "titleText": "Como reconocer y resolver",
            "tagId": "",
            "html": "<ol><li><p>Reduce el angulo a otro coterminal si supera una vuelta.</p></li><li><p>Busca el angulo de referencia en el primer cuadrante.</p></li><li><p>Asigna el signo correcto segun el cuadrante.</p></li></ol>"
          },
          "solvedExample": {
            "title": "[EX-C05.S03-01] Valores exactos por cuadrantes",
            "titleText": "Valores exactos por cuadrantes",
            "tagId": "EX-C05.S03-01",
            "html": "<p>Calcula \\(\\sen 150^\\circ\\), \\(\\cos 240^\\circ\\) y \\(\\tg 330^\\circ\\).</p><p><strong>Desarrollo.</strong></p><div class=\"math-display\">\\[\n\\sen 150^\\circ=\\sen(180^\\circ-30^\\circ)=\\sen 30^\\circ=\\frac{1}{2}.\n\\]</div><div class=\"math-display\">\\[\n\\cos 240^\\circ=\\cos(180^\\circ+60^\\circ)=-\\cos 60^\\circ=-\\frac{1}{2}.\n\\]</div><div class=\"math-display\">\\[\n\\tg 330^\\circ=\\tg(360^\\circ-30^\\circ)=-\\tg 30^\\circ=-\\frac{\\sqrt{3}}{3}.\n\\]</div><p><strong>Respuesta final.</strong></p><div class=\"math-display\">\\[\n\\sen 150^\\circ=\\frac{1}{2},\n\\qquad\n\\cos 240^\\circ=-\\frac{1}{2},\n\\qquad\n\\tg 330^\\circ=-\\frac{\\sqrt{3}}{3}.\n\\]</div>"
          },
          "commonError": {
            "title": "Conservar siempre el mismo signo",
            "titleText": "Conservar siempre el mismo signo",
            "tagId": "",
            "html": "<p>El angulo de referencia da el valor absoluto, pero el signo no se conserva siempre. Hay que mirar en que cuadrante cae el angulo original.</p>"
          },
          "guidedExercises": [
            {
              "tagId": "GX-C05.S03-01",
              "title": "Seno en el segundo cuadrante",
              "promptHtml": "<p>Calcula \\(\\sen 120^\\circ\\).</p><p><strong>Pista 1.</strong> Usa \\(120^\\circ=180^\\circ-60^\\circ\\).</p>",
              "answerHtml": "<div class=\"math-display\">\\[\n\\sen 120^\\circ=\\frac{\\sqrt{3}}{2}.\n\\]</div>",
              "solutionHtml": "<div class=\"math-display\">\\[\n\\sen 120^\\circ=\\sen(180^\\circ-60^\\circ)=\\sen 60^\\circ=\\frac{\\sqrt{3}}{2}.\n\\]</div>"
            },
            {
              "tagId": "GX-C05.S03-02",
              "title": "Coseno en el cuarto cuadrante",
              "promptHtml": "<p>Calcula \\(\\cos 300^\\circ\\).</p><p><strong>Pista 1.</strong> Usa \\(300^\\circ=360^\\circ-60^\\circ\\).</p>",
              "answerHtml": "<div class=\"math-display\">\\[\n\\cos 300^\\circ=\\frac{1}{2}.\n\\]</div>",
              "solutionHtml": "<div class=\"math-display\">\\[\n\\cos 300^\\circ=\\cos(360^\\circ-60^\\circ)=\\cos 60^\\circ=\\frac{1}{2}.\n\\]</div>"
            }
          ],
          "practice": {
            "label": "Practica autonoma graduada",
            "items": [
              {
                "tagId": "PX-C05.S03-01",
                "prompt": "Calcula \\(\\cos 135^\\circ\\)."
              },
              {
                "tagId": "PX-C05.S03-02",
                "prompt": "Calcula \\(\\sen 225^\\circ\\)."
              },
              {
                "tagId": "PX-C05.S03-03",
                "prompt": "Calcula \\(\\tg 150^\\circ\\)."
              },
              {
                "tagId": "PX-C05.S03-04",
                "prompt": "Calcula \\(\\cos 330^\\circ\\)."
              },
              {
                "tagId": "PX-C05.S03-05",
                "prompt": "Calcula \\(\\sen 600^\\circ\\)."
              },
              {
                "tagId": "PX-C05.S03-06",
                "prompt": "Calcula \\(\\tg 210^\\circ\\)."
              }
            ],
            "answersHtml": "<ol><li><p>\\(-\\frac{\\sqrt{2}}{2}\\)</p></li><li><p>\\(-\\frac{\\sqrt{2}}{2}\\)</p></li><li><p>\\(-\\frac{\\sqrt{3}}{3}\\)</p></li><li><p>\\(\\frac{\\sqrt{3}}{2}\\)</p></li><li><p>\\(-\\frac{\\sqrt{3}}{2}\\)</p></li><li><p>\\(\\frac{\\sqrt{3}}{3}\\)</p></li></ol>",
            "solutionsHtml": "<ol><li><p>\\(\\cos 135^\\circ=\\cos(180^\\circ-45^\\circ)=-\\cos 45^\\circ\\).</p></li><li><p>\\(\\sen 225^\\circ=\\sen(180^\\circ+45^\\circ)=-\\sen 45^\\circ\\).</p></li><li><p>\\(\\tg 150^\\circ=\\tg(180^\\circ-30^\\circ)=-\\tg 30^\\circ\\).</p></li><li><p>\\(\\cos 330^\\circ=\\cos(360^\\circ-30^\\circ)=\\cos 30^\\circ\\).</p></li><li><p>\\(600^\\circ=240^\\circ\\), luego \\(\\sen 600^\\circ=\\sen 240^\\circ=-\\sen 60^\\circ\\).</p></li><li><p>\\(\\tg 210^\\circ=\\tg(180^\\circ+30^\\circ)=\\tg 30^\\circ\\).</p></li></ol>"
          },
          "challenge": {}
        },
        {
          "id": "C05.S04",
          "title": "Calculo de razones a partir de una razon conocida",
          "rawTitle": "[C05.S04] Calculo de razones a partir de una razon conocida",
          "objectives": [
            {
              "label": "Objetivos de aprendizaje",
              "html": "<ul><li><p>Reconstruir las razones restantes a partir de una sola.</p></li><li><p>Combinar Pitagoras trigonometrico y signos por cuadrantes.</p></li></ul>"
            }
          ],
          "prerequisites": [
            {
              "label": "Prerrequisitos",
              "html": "<ul><li><p>Angulos notables, reduccion y fracciones.</p></li></ul>"
            }
          ],
          "theory": {
            "title": "Idea minima",
            "titleText": "Idea minima",
            "tagId": "",
            "html": "<p>Si conoces una razon trigonometrica y el cuadrante, puedes reconstruir un triangulo auxiliar y hallar las demas. La identidad basica es</p><div class=\"math-display\">\\[\n\\sen^2 x+\\cos^2 x=1.\n\\]</div>"
          },
          "method": {
            "title": "Como reconocer y resolver",
            "titleText": "Como reconocer y resolver",
            "tagId": "",
            "html": "<ol><li><p>Dibuja un triangulo o usa la identidad \\(\\sen^2 x+\\cos^2 x=1\\).</p></li><li><p>Decide el signo de cada razon con el cuadrante.</p></li><li><p>Calcula despues \\(\\tg x=\\frac{\\sen x}{\\cos x}\\).</p></li></ol>"
          },
          "solvedExample": {
            "title": "[EX-C05.S04-01] Una razon y el cuadrante",
            "titleText": "Una razon y el cuadrante",
            "tagId": "EX-C05.S04-01",
            "html": "<p>Sabiendo que \\(\\sen x=\\frac{3}{5}\\) y que \\(x\\) esta en el segundo cuadrante, calcula \\(\\cos x\\) y \\(\\tg x\\).</p><p><strong>Desarrollo.</strong> Si \\(\\sen x=\\frac{3}{5}\\), tomamos cateto opuesto \\(3\\) e hipotenusa \\(5\\). Entonces el cateto contiguo tiene modulo</p><div class=\"math-display\">\\[\n\\sqrt{5^2-3^2}=4.\n\\]</div><p>En el segundo cuadrante el coseno es negativo, asi que</p><div class=\"math-display\">\\[\n\\cos x=-\\frac{4}{5}.\n\\]</div><p>Luego</p><div class=\"math-display\">\\[\n\\tg x=\\frac{\\sen x}{\\cos x}=\\frac{3/5}{-4/5}=-\\frac{3}{4}.\n\\]</div><p><strong>Respuesta final.</strong></p><div class=\"math-display\">\\[\n\\cos x=-\\frac{4}{5},\n\\qquad\n\\tg x=-\\frac{3}{4}.\n\\]</div>"
          },
          "commonError": {
            "title": "Perder el signo del cuadrante",
            "titleText": "Perder el signo del cuadrante",
            "tagId": "",
            "html": "<p>El triangulo auxiliar da modulos positivos. El signo final no sale del triangulo, sino del cuadrante en que esta el angulo.</p>"
          },
          "guidedExercises": [
            {
              "tagId": "GX-C05.S04-01",
              "title": "Coseno conocido en el tercer cuadrante",
              "promptHtml": "<p>Si \\(\\cos x=-\\frac{12}{13}\\) y \\(x\\) esta en el tercer cuadrante, calcula \\(\\sen x\\) y \\(\\tg x\\).</p><p><strong>Pista 1.</strong> La hipotenusa es \\(13\\) y el otro cateto tiene modulo \\(5\\).</p>",
              "answerHtml": "<div class=\"math-display\">\\[\n\\sen x=-\\frac{5}{13},\n\\qquad\n\\tg x=\\frac{5}{12}.\n\\]</div>",
              "solutionHtml": "<p>Por Pitagoras, el cateto restante vale \\(5\\). En el tercer cuadrante, seno y coseno son negativos y la tangente es positiva:</p><div class=\"math-display\">\\[\n\\sen x=-\\frac{5}{13},\n\\qquad\n\\tg x=\\frac{-5/13}{-12/13}=\\frac{5}{12}.\n\\]</div>"
            },
            {
              "tagId": "GX-C05.S04-02",
              "title": "Tangente conocida en el cuarto cuadrante",
              "promptHtml": "<p>Si \\(\\tg x=-2\\) y \\(x\\) esta en el cuarto cuadrante, calcula \\(\\sen x\\) y \\(\\cos x\\).</p><p><strong>Pista 1.</strong> Puedes tomar catetos de modulos \\(2\\) y \\(1\\).</p>",
              "answerHtml": "<div class=\"math-display\">\\[\n\\sen x=-\\frac{2\\sqrt{5}}{5},\n\\qquad\n\\cos x=\\frac{\\sqrt{5}}{5}.\n\\]</div>",
              "solutionHtml": "<p>Si \\(\\tg x=-2\\), podemos tomar cateto opuesto \\(-2\\) y contiguo \\(1\\). La hipotenusa es \\(\\sqrt{5}\\), luego</p><div class=\"math-display\">\\[\n\\sen x=-\\frac{2}{\\sqrt{5}}=-\\frac{2\\sqrt{5}}{5},\n\\qquad\n\\cos x=\\frac{1}{\\sqrt{5}}=\\frac{\\sqrt{5}}{5}.\n\\]</div>"
            }
          ],
          "practice": {
            "label": "Practica autonoma graduada",
            "items": [
              {
                "tagId": "PX-C05.S04-01",
                "prompt": "Si \\(\\cos x=\\frac{5}{13}\\) y \\(x\\) esta en el primer cuadrante, calcula \\(\\sen x\\) y \\(\\tg x\\)."
              },
              {
                "tagId": "PX-C05.S04-02",
                "prompt": "Si \\(\\sen x=-\\frac{4}{5}\\) y \\(x\\) esta en el cuarto cuadrante, calcula \\(\\cos x\\) y \\(\\tg x\\)."
              },
              {
                "tagId": "PX-C05.S04-03",
                "prompt": "Si \\(\\tg x=\\frac{3}{4}\\) y \\(x\\) esta en el tercer cuadrante, calcula \\(\\sen x\\) y \\(\\cos x\\)."
              },
              {
                "tagId": "PX-C05.S04-04",
                "prompt": "Si \\(\\cos x=-\\frac{8}{17}\\) y \\(x\\) esta en el segundo cuadrante, calcula \\(\\sen x\\) y \\(\\tg x\\)."
              },
              {
                "tagId": "PX-C05.S04-05",
                "prompt": "Si \\(\\sen x=\\frac{12}{13}\\) y \\(x\\) esta en el primer cuadrante, calcula \\(\\cos x\\) y \\(\\tg x\\)."
              },
              {
                "tagId": "PX-C05.S04-06",
                "prompt": "Si \\(\\tg x=-1\\) y \\(x\\) esta en el segundo cuadrante, calcula \\(\\sen x\\) y \\(\\cos x\\)."
              }
            ],
            "answersHtml": "<ol><li><p>\\(\\sen x=\\frac{12}{13}\\), \\(\\tg x=\\frac{12}{5}\\)</p></li><li><p>\\(\\cos x=\\frac{3}{5}\\), \\(\\tg x=-\\frac{4}{3}\\)</p></li><li><p>\\(\\sen x=-\\frac{3}{5}\\), \\(\\cos x=-\\frac{4}{5}\\)</p></li><li><p>\\(\\sen x=\\frac{15}{17}\\), \\(\\tg x=-\\frac{15}{8}\\)</p></li><li><p>\\(\\cos x=\\frac{5}{13}\\), \\(\\tg x=\\frac{12}{5}\\)</p></li><li><p>\\(\\sen x=\\frac{\\sqrt{2}}{2}\\), \\(\\cos x=-\\frac{\\sqrt{2}}{2}\\)</p></li></ol>",
            "solutionsHtml": "<ol><li><p>Es un triangulo \\(5\\)-\\(12\\)-\\(13\\), todo positivo en el primer cuadrante.</p></li><li><p>Si el seno es \\(-\\frac{4}{5}\\), el coseno tiene modulo \\(\\frac{3}{5}\\) y es positivo.</p></li><li><p>Para \\(\\tg x=\\frac{3}{4}\\) en el tercer cuadrante, seno y coseno son negativos.</p></li><li><p>Es un triangulo \\(8\\)-\\(15\\)-\\(17\\) y en el segundo cuadrante la tangente es negativa.</p></li><li><p>El cateto restante vale \\(5\\), con todo positivo.</p></li><li><p>Si \\(|\\tg x|=1\\), los catetos tienen igual modulo. En el segundo cuadrante el seno es positivo y el coseno negativo.</p></li></ol>"
          },
          "challenge": {}
        },
        {
          "id": "C05.S05",
          "title": "Identidades y transformaciones trigonometricas",
          "rawTitle": "[C05.S05] Identidades y transformaciones trigonometricas",
          "objectives": [
            {
              "label": "Objetivos de aprendizaje",
              "html": "<ul><li><p>Aplicar identidades fundamentales y de angulos relacionados.</p></li><li><p>Calcular razones de angulo doble sin recurrir a calculadora.</p></li></ul>"
            }
          ],
          "prerequisites": [
            {
              "label": "Prerrequisitos",
              "html": "<ul><li><p>Razones de un angulo conocido y signos por cuadrantes.</p></li></ul>"
            }
          ],
          "theory": {
            "title": "Idea minima",
            "titleText": "Idea minima",
            "tagId": "",
            "html": "<p>Las identidades mas usadas en este nivel son</p><div class=\"math-display\">\\[\n\\sen^2 x+\\cos^2 x=1,\n\\qquad\n\\sen(2x)=2\\sen x\\cos x,\n\\qquad\n\\cos(2x)=\\cos^2 x-\\sen^2 x.\n\\]</div><p>Tambien conviene recordar</p><div class=\"math-display\">\\[\n\\sen(\\pi-x)=\\sen x,\n\\qquad\n\\cos(\\pi+x)=-\\cos x.\n\\]</div>"
          },
          "method": {
            "title": "Como reconocer y resolver",
            "titleText": "Como reconocer y resolver",
            "tagId": "",
            "html": "<ol><li><p>Reescribe primero todo con \\(\\sen x\\), \\(\\cos x\\) y \\(\\tg x\\).</p></li><li><p>Usa el cuadrante para fijar signos.</p></li><li><p>Sustituye al final en la identidad elegida.</p></li></ol>"
          },
          "solvedExample": {
            "title": "[EX-C05.S05-01] Angulo doble a partir de un dato",
            "titleText": "Angulo doble a partir de un dato",
            "tagId": "EX-C05.S05-01",
            "html": "<p>Si \\(\\sen x=\\frac{4}{5}\\) y \\(x\\) esta en el primer cuadrante, calcula \\(\\cos x\\), \\(\\tg x\\), \\(\\sen 2x\\) y \\(\\cos 2x\\).</p><p><strong>Desarrollo.</strong> Por Pitagoras trigonometrico,</p><div class=\"math-display\">\\[\n\\cos x=\\frac{3}{5},\n\\qquad\n\\tg x=\\frac{4/5}{3/5}=\\frac{4}{3}.\n\\]</div><p>Ahora aplicamos las formulas de angulo doble:</p><div class=\"math-display\">\\[\n\\sen 2x=2\\sen x\\cos x=2\\cdot \\frac{4}{5}\\cdot \\frac{3}{5}=\\frac{24}{25},\n\\]</div><div class=\"math-display\">\\[\n\\cos 2x=\\cos^2 x-\\sen^2 x=\\frac{9}{25}-\\frac{16}{25}=-\\frac{7}{25}.\n\\]</div><p><strong>Respuesta final.</strong></p><div class=\"math-display\">\\[\n\\cos x=\\frac{3}{5},\n\\quad\n\\tg x=\\frac{4}{3},\n\\quad\n\\sen 2x=\\frac{24}{25},\n\\quad\n\\cos 2x=-\\frac{7}{25}.\n\\]</div>"
          },
          "commonError": {
            "title": "Cambiar de identidad a mitad del calculo",
            "titleText": "Cambiar de identidad a mitad del calculo",
            "tagId": "",
            "html": "<p>Si ya has hallado \\(\\sen x\\) y \\(\\cos x\\), lo mas seguro es sustituirlos en una formula clara. Intentar mezclar varias identidades sin orden suele introducir errores de signo.</p>"
          },
          "guidedExercises": [
            {
              "tagId": "GX-C05.S05-01",
              "title": "Identidad fundamental",
              "promptHtml": "<p>Simplifica \\(\\sen^2 x+\\cos^2 x\\).</p><p><strong>Pista 1.</strong> Es una identidad basica.</p>",
              "answerHtml": "<div class=\"math-display\">\\[\n\\sen^2 x+\\cos^2 x=1.\n\\]</div>",
              "solutionHtml": "<p>Directamente por la identidad fundamental:</p><div class=\"math-display\">\\[\n\\sen^2 x+\\cos^2 x=1.\n\\]</div>"
            },
            {
              "tagId": "GX-C05.S05-02",
              "title": "Producto seno por coseno",
              "promptHtml": "<p>Si \\(\\tg x=2\\) y \\(x\\) esta en el primer cuadrante, calcula \\(\\sen x\\cos x\\).</p><p><strong>Pista 1.</strong> Toma un triangulo con catetos \\(2\\) y \\(1\\).</p>",
              "answerHtml": "<div class=\"math-display\">\\[\n\\sen x\\cos x=\\frac{2}{5}.\n\\]</div>",
              "solutionHtml": "<p>Con catetos \\(2\\) y \\(1\\), la hipotenusa es \\(\\sqrt{5}\\). Entonces</p><div class=\"math-display\">\\[\n\\sen x=\\frac{2}{\\sqrt{5}},\n\\qquad\n\\cos x=\\frac{1}{\\sqrt{5}},\n\\]</div><p>y por tanto</p><div class=\"math-display\">\\[\n\\sen x\\cos x=\\frac{2}{5}.\n\\]</div>"
            }
          ],
          "practice": {
            "label": "Practica autonoma graduada",
            "items": [
              {
                "tagId": "PX-C05.S05-01",
                "prompt": "Si \\(\\cos x=\\frac{12}{13}\\) y \\(x\\) esta en el primer cuadrante, calcula \\(\\sen 2x\\)."
              },
              {
                "tagId": "PX-C05.S05-02",
                "prompt": "Si \\(\\sen x=\\frac{5}{13}\\) y \\(x\\) esta en el primer cuadrante, calcula \\(\\cos 2x\\)."
              },
              {
                "tagId": "PX-C05.S05-03",
                "prompt": "Simplifica \\(\\sen(\\pi-x)\\)."
              },
              {
                "tagId": "PX-C05.S05-04",
                "prompt": "Simplifica \\(\\cos(\\pi+x)\\)."
              },
              {
                "tagId": "PX-C05.S05-05",
                "prompt": "Si \\(\\tg x=\\frac{3}{4}\\) y \\(x\\) esta en el primer cuadrante, calcula \\(\\tg 2x\\)."
              },
              {
                "tagId": "PX-C05.S05-06",
                "prompt": "Si \\(\\sen x=\\frac{3}{5}\\) y \\(x\\) esta en el segundo cuadrante, calcula \\(\\cos 2x\\)."
              }
            ],
            "answersHtml": "<ol><li><p>\\(\\frac{120}{169}\\)</p></li><li><p>\\(\\frac{119}{169}\\)</p></li><li><p>\\(\\sen x\\)</p></li><li><p>\\(-\\cos x\\)</p></li><li><p>\\(\\frac{24}{7}\\)</p></li><li><p>\\(\\frac{7}{25}\\)</p></li></ol>",
            "solutionsHtml": "<ol><li><p>El seno vale \\(\\frac{5}{13}\\). Luego \\(\\sen 2x=2\\cdot \\frac{5}{13}\\cdot \\frac{12}{13}=\\frac{120}{169}\\).</p></li><li><p>\\(\\cos 2x=1-2\\sen^2 x=1-2\\cdot \\frac{25}{169}=\\frac{119}{169}\\).</p></li><li><p>\\(\\sen(\\pi-x)=\\sen x\\).</p></li><li><p>\\(\\cos(\\pi+x)=-\\cos x\\).</p></li><li><p>\\(\\tg 2x=\\frac{2\\tg x}{1-\\tg^2 x}=\\frac{2\\cdot 3/4}{1-9/16}=\\frac{24}{7}\\).</p></li><li><p>Aunque \\(\\cos x\\) sea negativo en el segundo cuadrante, \\(\\cos 2x\\) depende de los cuadrados: \\(\\cos 2x=\\frac{16}{25}-\\frac{9}{25}=\\frac{7}{25}\\).</p></li></ol>"
          },
          "challenge": {}
        },
        {
          "id": "C05.S06",
          "title": "Ecuaciones trigonometricas",
          "rawTitle": "[C05.S06] Ecuaciones trigonometricas",
          "objectives": [
            {
              "label": "Objetivos de aprendizaje",
              "html": "<ul><li><p>Resolver ecuaciones trigonometricas elementales.</p></li><li><p>Expresar soluciones generales con \\(k\\in\\mathbb{Z}\\).</p></li></ul>"
            }
          ],
          "prerequisites": [
            {
              "label": "Prerrequisitos",
              "html": "<ul><li><p>Angulos notables y periodicidad de seno, coseno y tangente.</p></li></ul>"
            }
          ],
          "theory": {
            "title": "Idea minima",
            "titleText": "Idea minima",
            "tagId": "",
            "html": "<p>Las funciones trigonometricas son periodicas:</p><div class=\"math-display\">\\[\n\\sen(x+2\\pi)=\\sen x,\n\\qquad\n\\cos(x+2\\pi)=\\cos x,\n\\qquad\n\\tg(x+\\pi)=\\tg x.\n\\]</div><p>Por eso una ecuacion trigonometrica suele tener infinitas soluciones y conviene escribir la familia general.</p>"
          },
          "method": {
            "title": "Como reconocer y resolver",
            "titleText": "Como reconocer y resolver",
            "tagId": "",
            "html": "<ol><li><p>Encuentra primero las soluciones en un intervalo base, por ejemplo \\([0,2\\pi)\\).</p></li><li><p>Usa el periodo adecuado para escribir la solucion general.</p></li><li><p>Comprueba si la funcion es seno, coseno o tangente antes de elegir el periodo.</p></li></ol>"
          },
          "solvedExample": {
            "title": "[EX-C05.S06-01] Seno igual a un valor notable",
            "titleText": "Seno igual a un valor notable",
            "tagId": "EX-C05.S06-01",
            "html": "<p>Resuelve \\(\\sen x=\\frac{1}{2}\\).</p><p><strong>Desarrollo.</strong> En \\([0,2\\pi)\\), el seno vale \\(\\frac{1}{2}\\) en</p><div class=\"math-display\">\\[\nx=\\frac{\\pi}{6}\n\\qquad \\text{y} \\qquad\nx=\\frac{5\\pi}{6}.\n\\]</div><p>Como el seno tiene periodo \\(2\\pi\\), las soluciones generales son</p><div class=\"math-display\">\\[\nx=\\frac{\\pi}{6}+2k\\pi\n\\qquad \\text{o} \\qquad\nx=\\frac{5\\pi}{6}+2k\\pi,\n\\qquad k\\in\\mathbb{Z}.\n\\]</div><p><strong>Respuesta final.</strong></p><div class=\"math-display\">\\[\nx=\\frac{\\pi}{6}+2k\\pi\n\\quad \\text{o} \\quad\nx=\\frac{5\\pi}{6}+2k\\pi,\n\\qquad k\\in\\mathbb{Z}.\n\\]</div>"
          },
          "commonError": {
            "title": "Usar siempre el mismo periodo",
            "titleText": "Usar siempre el mismo periodo",
            "tagId": "",
            "html": "<p>El seno y el coseno repiten cada \\(2\\pi\\), pero la tangente repite cada \\(\\pi\\). Si se usa \\(2\\pi\\) para todo, algunas soluciones quedan incompletas.</p>"
          },
          "guidedExercises": [
            {
              "tagId": "GX-C05.S06-01",
              "title": "Coseno negativo",
              "promptHtml": "<p>Resuelve \\(\\cos x=-\\frac{\\sqrt{2}}{2}\\).</p><p><strong>Pista 1.</strong> Busca primero los angulos de referencia de \\(45^\\circ\\).</p>",
              "answerHtml": "<div class=\"math-display\">\\[\nx=\\frac{3\\pi}{4}+2k\\pi\n\\quad \\text{o} \\quad\nx=\\frac{5\\pi}{4}+2k\\pi,\n\\qquad k\\in\\mathbb{Z}.\n\\]</div>",
              "solutionHtml": "<p>En \\([0,2\\pi)\\), el coseno vale \\(-\\frac{\\sqrt{2}}{2}\\) en</p><div class=\"math-display\">\\[\n\\frac{3\\pi}{4}\n\\qquad \\text{y} \\qquad\n\\frac{5\\pi}{4}.\n\\]</div><p>Al tener periodo \\(2\\pi\\), se anade \\(2k\\pi\\).</p>"
            },
            {
              "tagId": "GX-C05.S06-02",
              "title": "Tangente nula",
              "promptHtml": "<p>Resuelve \\(\\tg x=0\\).</p><p><strong>Pista 1.</strong> Piensa en los multiplos de \\(\\pi\\).</p>",
              "answerHtml": "<div class=\"math-display\">\\[\nx=k\\pi,\n\\qquad k\\in\\mathbb{Z}.\n\\]</div>",
              "solutionHtml": "<p>La tangente es \\(0\\) cuando el seno es \\(0\\) y el coseno no lo es. Eso ocurre en</p><div class=\"math-display\">\\[\nx=0,\\pi,2\\pi,\\ldots\n\\]</div><p>y la forma general es \\(x=k\\pi\\).</p>"
            }
          ],
          "practice": {
            "label": "Practica autonoma graduada",
            "items": [
              {
                "tagId": "PX-C05.S06-01",
                "prompt": "Resuelve \\(\\cos x=0\\)."
              },
              {
                "tagId": "PX-C05.S06-02",
                "prompt": "Resuelve \\(\\tg x=1\\)."
              },
              {
                "tagId": "PX-C05.S06-03",
                "prompt": "Resuelve \\(\\sen x=-1\\)."
              },
              {
                "tagId": "PX-C05.S06-04",
                "prompt": "Resuelve \\(\\cos x=\\frac{\\sqrt{2}}{2}\\)."
              },
              {
                "tagId": "PX-C05.S06-05",
                "prompt": "Resuelve \\(\\sen x=\\frac{\\sqrt{3}}{2}\\)."
              },
              {
                "tagId": "PX-C05.S06-06",
                "prompt": "Resuelve \\(\\tg x=-\\sqrt{3}\\)."
              }
            ],
            "answersHtml": "<ol><li><p>\\(x=\\frac{\\pi}{2}+k\\pi\\)</p></li><li><p>\\(x=\\frac{\\pi}{4}+k\\pi\\)</p></li><li><p>\\(x=\\frac{3\\pi}{2}+2k\\pi\\)</p></li><li><p>\\(x=\\frac{\\pi}{4}+2k\\pi\\) o \\(x=\\frac{7\\pi}{4}+2k\\pi\\)</p></li><li><p>\\(x=\\frac{\\pi}{3}+2k\\pi\\) o \\(x=\\frac{2\\pi}{3}+2k\\pi\\)</p></li><li><p>\\(x=-\\frac{\\pi}{3}+k\\pi\\)</p></li></ol>",
            "solutionsHtml": "<ol><li><p>En \\([0,2\\pi)\\), las soluciones son \\(\\frac{\\pi}{2}\\) y \\(\\frac{3\\pi}{2}\\), que se agrupan como \\(\\frac{\\pi}{2}+k\\pi\\).</p></li><li><p>La tangente vale \\(1\\) en \\(\\frac{\\pi}{4}\\) y repite cada \\(\\pi\\).</p></li><li><p>El seno solo vale \\(-1\\) en \\(\\frac{3\\pi}{2}\\) mas vueltas completas.</p></li><li><p>El coseno es \\(\\frac{\\sqrt{2}}{2}\\) en los cuadrantes I y IV.</p></li><li><p>El seno es \\(\\frac{\\sqrt{3}}{2}\\) en los cuadrantes I y II.</p></li><li><p>La tangente vale \\(-\\sqrt{3}\\) con angulo de referencia \\(\\frac{\\pi}{3}\\) y periodo \\(\\pi\\).</p></li></ol>"
          },
          "challenge": {}
        },
        {
          "id": "C05.S07",
          "title": "Resolucion de triangulos",
          "rawTitle": "[C05.S07] Resolucion de triangulos",
          "objectives": [
            {
              "label": "Objetivos de aprendizaje",
              "html": "<ul><li><p>Resolver triangulos oblicuangulos sencillos.</p></li><li><p>Escoger entre teorema del seno y teorema del coseno.</p></li></ul>"
            }
          ],
          "prerequisites": [
            {
              "label": "Prerrequisitos",
              "html": "<ul><li><p>Razones trigonometricas y angulos interiores de un triangulo.</p></li></ul>"
            }
          ],
          "theory": {
            "title": "Idea minima",
            "titleText": "Idea minima",
            "tagId": "",
            "html": "<p>En cualquier triangulo \\(ABC\\), con lados opuestos \\(a\\), \\(b\\) y \\(c\\),</p><div class=\"math-display\">\\[\n\\frac{a}{\\sen A}=\\frac{b}{\\sen B}=\\frac{c}{\\sen C}\n\\]</div><p>y</p><div class=\"math-display\">\\[\na^2=b^2+c^2-2bc\\cos A.\n\\]</div><p>El teorema del seno es muy util en casos ALA o AAL; el del coseno, en casos LAL o LLL.</p>"
          },
          "method": {
            "title": "Como reconocer y resolver",
            "titleText": "Como reconocer y resolver",
            "tagId": "",
            "html": "<ol><li><p>Si conoces dos angulos y un lado, empieza por el teorema del seno.</p></li><li><p>Si conoces dos lados y el angulo comprendido, usa el teorema del coseno.</p></li><li><p>Comprueba al final que la suma de angulos es \\(180^\\circ\\).</p></li></ol>"
          },
          "solvedExample": {
            "title": "[EX-C05.S07-01] Resolver un triangulo con dos angulos",
            "titleText": "Resolver un triangulo con dos angulos",
            "tagId": "EX-C05.S07-01",
            "html": "<p>En un triangulo \\(ABC\\), se sabe que \\(A=30^\\circ\\), \\(B=60^\\circ\\) y \\(a=\\SI{5}{cm}\\). Calcula \\(C\\), \\(b\\) y \\(c\\).</p><p><strong>Desarrollo.</strong> La suma de angulos da</p><div class=\"math-display\">\\[\nC=180^\\circ-30^\\circ-60^\\circ=90^\\circ.\n\\]</div><p>Aplicamos ahora el teorema del seno:</p><div class=\"math-display\">\\[\n\\frac{a}{\\sen A}=\\frac{b}{\\sen B}=\\frac{c}{\\sen C}.\n\\]</div><p>Como</p><div class=\"math-display\">\\[\n\\frac{5}{\\sen 30^\\circ}=\\frac{5}{1/2}=10,\n\\]</div><p>se obtiene</p><div class=\"math-display\">\\[\nb=10\\sen 60^\\circ=10\\cdot \\frac{\\sqrt{3}}{2}=5\\sqrt{3},\n\\qquad\nc=10\\sen 90^\\circ=10.\n\\]</div><p><strong>Respuesta final.</strong></p><div class=\"math-display\">\\[\nC=90^\\circ,\n\\qquad\nb=5\\sqrt{3}\\text{ cm},\n\\qquad\nc=\\SI{10}{cm}.\n\\]</div>"
          },
          "commonError": {
            "title": "Aplicar el seno sin emparejar lado y angulo opuestos",
            "titleText": "Aplicar el seno sin emparejar lado y angulo opuestos",
            "tagId": "",
            "html": "<p>En el teorema del seno cada lado debe ir con su angulo opuesto. Mezclar correspondencias lleva a ecuaciones incorrectas aunque las razones parezcan parecidas.</p>"
          },
          "guidedExercises": [
            {
              "tagId": "GX-C05.S07-01",
              "title": "Angulo recto conocido",
              "promptHtml": "<p>En un triangulo, \\(A=30^\\circ\\), \\(B=90^\\circ\\) y \\(a=\\SI{8}{cm}\\). Halla \\(b\\).</p><p><strong>Pista 1.</strong> Primero calcula \\(\\frac{a}{\\sen A}\\).</p>",
              "answerHtml": "<div class=\"math-display\">\\[\nb=\\SI{16}{cm}.\n\\]</div>",
              "solutionHtml": "<div class=\"math-display\">\\[\n\\frac{a}{\\sen A}=\\frac{8}{1/2}=16.\n\\]</div><p>Como \\(\\sen 90^\\circ=1\\), se sigue que \\(b=16\\).</p>"
            },
            {
              "tagId": "GX-C05.S07-02",
              "title": "Dos lados y angulo comprendido",
              "promptHtml": "<p>Un triangulo tiene dos lados de \\(\\SI{5}{cm}\\) y el angulo comprendido es \\(60^\\circ\\). Halla el tercer lado.</p><p><strong>Pista 1.</strong> Usa el teorema del coseno.</p>",
              "answerHtml": "<div class=\"math-display\">\\[\nc=\\SI{5}{cm}.\n\\]</div>",
              "solutionHtml": "<div class=\"math-display\">\\[\nc^2=5^2+5^2-2\\cdot 5\\cdot 5\\cos 60^\\circ=25+25-25=25.\n\\]</div><p>Luego \\(c=5\\).</p>"
            }
          ],
          "practice": {
            "label": "Practica autonoma graduada",
            "items": [
              {
                "tagId": "PX-C05.S07-01",
                "prompt": "En un triangulo \\(A=45^\\circ\\), \\(B=45^\\circ\\) y \\(a=\\SI{4}{cm}\\). Halla \\(C\\), \\(b\\) y \\(c\\)."
              },
              {
                "tagId": "PX-C05.S07-02",
                "prompt": "En un triangulo \\(A=30^\\circ\\), \\(C=90^\\circ\\) y \\(a=\\SI{3}{cm}\\). Halla \\(B\\), \\(b\\) y \\(c\\)."
              },
              {
                "tagId": "PX-C05.S07-03",
                "prompt": "Un triangulo rectangulo tiene catetos \\(\\SI{6}{cm}\\) y \\(\\SI{8}{cm}\\). Halla la hipotenusa."
              },
              {
                "tagId": "PX-C05.S07-04",
                "prompt": "En un triangulo, \\(a=\\SI{5}{cm}\\), \\(b=\\SI{5}{cm}\\) y \\(C=60^\\circ\\). Halla \\(c\\)."
              },
              {
                "tagId": "PX-C05.S07-05",
                "prompt": "En un triangulo \\(A=30^\\circ\\), \\(B=60^\\circ\\) y \\(a=\\SI{4}{cm}\\). Halla \\(C\\), \\(b\\) y \\(c\\)."
              },
              {
                "tagId": "PX-C05.S07-06",
                "prompt": "En un triangulo rectangulo, la hipotenusa mide \\(\\SI{2}{cm}\\) y uno de los angulos agudos es \\(60^\\circ\\). Halla los catetos."
              }
            ],
            "answersHtml": "<ol><li><p>\\(C=90^\\circ\\), \\(b=\\SI{4}{cm}\\), \\(c=4\\sqrt{2}\\,\\si{cm}\\)</p></li><li><p>\\(B=60^\\circ\\), \\(b=3\\sqrt{3}\\,\\si{cm}\\), \\(c=\\SI{6}{cm}\\)</p></li><li><p>\\(\\SI{10}{cm}\\)</p></li><li><p>\\(\\SI{5}{cm}\\)</p></li><li><p>\\(C=90^\\circ\\), \\(b=4\\sqrt{3}\\,\\si{cm}\\), \\(c=\\SI{8}{cm}\\)</p></li><li><p>Catetos: \\(\\SI{1}{cm}\\) y \\(\\sqrt{3}\\,\\si{cm}\\)</p></li></ol>",
            "solutionsHtml": "<ol><li><p>Es un triangulo isosceles rectangulo: \\(b=a=4\\) y \\(c=4\\sqrt{2}\\).</p></li><li><p>\\(B=60^\\circ\\). Con el teorema del seno, \\(\\frac{3}{\\sen 30^\\circ}=6\\), luego \\(b=6\\sen 60^\\circ=3\\sqrt{3}\\) y \\(c=6\\).</p></li><li><p>Por Pitagoras, \\(\\sqrt{6^2+8^2}=10\\).</p></li><li><p>Teorema del coseno: \\(c^2=25+25-50\\cos 60^\\circ=25\\).</p></li><li><p>Igual que el ejemplo, pero escalado: \\(C=90^\\circ\\), \\(b=4\\sqrt{3}\\), \\(c=8\\).</p></li><li><p>El cateto opuesto a \\(60^\\circ\\) vale \\(2\\sen 60^\\circ=\\sqrt{3}\\) y el contiguo \\(2\\cos 60^\\circ=1\\).</p></li></ol>"
          },
          "challenge": {}
        },
        {
          "id": "C05.S08",
          "title": "Problemas contextualizados de trigonometria",
          "rawTitle": "[C05.S08] Problemas contextualizados de trigonometria",
          "objectives": [
            {
              "label": "Objetivos de aprendizaje",
              "html": "<ul><li><p>Traducir un contexto real a un esquema trigonometrico.</p></li><li><p>Responder con unidades y sentido geometrico.</p></li></ul>"
            }
          ],
          "prerequisites": [
            {
              "label": "Prerrequisitos",
              "html": "<ul><li><p>Razones trigonometricas y teoremas del seno y del coseno.</p></li></ul>"
            }
          ],
          "theory": {
            "title": "Idea minima",
            "titleText": "Idea minima",
            "tagId": "",
            "html": "<p>En problemas de alturas, distancias o navegacion, lo decisivo es construir el esquema correcto: que lado representa cada magnitud, que angulo es de elevacion o de vision y que unidad debe llevar la respuesta final.</p>"
          },
          "method": {
            "title": "Como reconocer y resolver",
            "titleText": "Como reconocer y resolver",
            "tagId": "",
            "html": "<ol><li><p>Dibuja un esquema y marca con claridad los datos.</p></li><li><p>Decide si el problema se reduce a un triangulo rectangulo o a un triangulo oblicuo.</p></li><li><p>Resuelve y expresa la respuesta con unidades.</p></li></ol>"
          },
          "solvedExample": {
            "title": "[EX-C05.S08-01] Altura de una torre",
            "titleText": "Altura de una torre",
            "tagId": "EX-C05.S08-01",
            "html": "<p>Dos puntos del suelo estan alineados con la base de una torre. El punto mas cercano observa la cima con un angulo de elevacion de \\(60^\\circ\\) y el mas lejano con un angulo de \\(30^\\circ\\). Entre ambos puntos hay \\(\\SI{20}{m}\\). Halla la altura de la torre.</p><p><strong>Desarrollo.</strong> Llamamos \\(x\\) a la distancia desde la base al punto cercano y \\(h\\) a la altura.</p><div class=\"math-display\">\\[\n\\tg 60^\\circ=\\frac{h}{x}\n\\qquad \\Longrightarrow \\qquad\nh=x\\sqrt{3}.\n\\]</div><p>Para el punto lejano, la distancia horizontal es \\(x+20\\):</p><div class=\"math-display\">\\[\n\\tg 30^\\circ=\\frac{h}{x+20}=\\frac{1}{\\sqrt{3}}.\n\\]</div><p>Sustituyendo \\(h=x\\sqrt{3}\\),</p><div class=\"math-display\">\\[\n\\frac{x\\sqrt{3}}{x+20}=\\frac{1}{\\sqrt{3}}\n\\qquad \\Longrightarrow \\qquad\n3x=x+20\n\\qquad \\Longrightarrow \\qquad\nx=10.\n\\]</div><p>Entonces</p><div class=\"math-display\">\\[\nh=10\\sqrt{3}\\text{ m}.\n\\]</div><p><strong>Respuesta final.</strong></p><div class=\"math-display\">\\[\nh=10\\sqrt{3}\\text{ m}.\n\\]</div>"
          },
          "commonError": {
            "title": "Usar la misma distancia horizontal dos veces",
            "titleText": "Usar la misma distancia horizontal dos veces",
            "tagId": "",
            "html": "<p>Cada angulo se observa desde un punto distinto. Si se repite la misma distancia para ambos, el planteamiento ya nace contradictorio.</p>"
          },
          "guidedExercises": [
            {
              "tagId": "GX-C05.S08-01",
              "title": "Distancia entre barcos",
              "promptHtml": "<p>Dos barcos salen del mismo puerto. Tras un tramo, uno esta a \\(\\SI{6}{km}\\) del puerto y el otro a \\(\\SI{8}{km}\\), formando entre sus rumbos un angulo de \\(60^\\circ\\). Halla la distancia entre los barcos.</p><p><strong>Pista 1.</strong> Usa el teorema del coseno.</p>",
              "answerHtml": "<div class=\"math-display\">\\[\nd=2\\sqrt{13}\\text{ km}.\n\\]</div>",
              "solutionHtml": "<div class=\"math-display\">\\[\nd^2=6^2+8^2-2\\cdot 6\\cdot 8\\cos 60^\\circ=36+64-48=52.\n\\]</div><p>Luego</p><div class=\"math-display\">\\[\nd=2\\sqrt{13}\\text{ km}.\n\\]</div>"
            },
            {
              "tagId": "GX-C05.S08-02",
              "title": "Altura desde un solo punto",
              "promptHtml": "<p>Desde un punto situado a \\(\\SI{12}{m}\\) de la base de una farola se ve la parte alta con un angulo de elevacion de \\(45^\\circ\\). Halla la altura de la farola.</p><p><strong>Pista 1.</strong> En \\(45^\\circ\\), \\(\\tg 45^\\circ=1\\).</p>",
              "answerHtml": "<div class=\"math-display\">\\[\nh=\\SI{12}{m}.\n\\]</div>",
              "solutionHtml": "<div class=\"math-display\">\\[\n\\tg 45^\\circ=\\frac{h}{12}=1,\n\\]</div><p>de donde \\(h=12\\).</p>"
            }
          ],
          "practice": {
            "label": "Practica autonoma graduada",
            "items": [
              {
                "tagId": "PX-C05.S08-01",
                "prompt": "Desde un punto a \\(\\SI{12}{m}\\) de un poste se observa la parte alta con un angulo de \\(45^\\circ\\). Halla la altura del poste."
              },
              {
                "tagId": "PX-C05.S08-02",
                "prompt": "Dos puntos alineados con la base de un edificio estan separados \\(\\SI{30}{m}\\). Los angulos de elevacion a la azotea son \\(60^\\circ\\) y \\(30^\\circ\\). Halla la altura del edificio."
              },
              {
                "tagId": "PX-C05.S08-03",
                "prompt": "Dos barcos parten del mismo puerto. Tras cierto tiempo estan a \\(\\SI{20}{km}\\) y \\(\\SI{30}{km}\\) del puerto, con un angulo de \\(60^\\circ\\) entre sus rumbos. Halla la distancia entre ellos."
              },
              {
                "tagId": "PX-C05.S08-04",
                "prompt": "En un parque triangular, dos lados miden \\(\\SI{6}{m}\\) y \\(\\SI{10}{m}\\), y el angulo comprendido es \\(120^\\circ\\). Halla el tercer lado."
              },
              {
                "tagId": "PX-C05.S08-05",
                "prompt": "Un jugador esta a \\(\\SI{5}{m}\\) de un poste y a \\(\\SI{8}{m}\\) del otro. Si la distancia entre postes es \\(\\SI{7}{m}\\), halla el angulo con el que ve la porteria."
              },
              {
                "tagId": "PX-C05.S08-06",
                "prompt": "Un cable llega a la parte alta de una pared de \\(\\SI{12}{m}\\) y forma \\(30^\\circ\\) con el suelo. Halla la longitud del cable."
              }
            ],
            "answersHtml": "<ol><li><p>\\(\\SI{12}{m}\\)</p></li><li><p>\\(15\\sqrt{3}\\,\\si{m}\\)</p></li><li><p>\\(10\\sqrt{7}\\,\\si{km}\\)</p></li><li><p>\\(\\SI{14}{m}\\)</p></li><li><p>\\(60^\\circ\\)</p></li><li><p>\\(\\SI{24}{m}\\)</p></li></ol>",
            "solutionsHtml": "<ol><li><p>Igual que en el guiado: \\(\\tg 45^\\circ=\\frac{h}{12}\\), luego \\(h=12\\).</p></li><li><p>Si \\(x\\) es la distancia al punto cercano, \\(\\tg 60^\\circ=\\frac{h}{x}\\) y \\(\\tg 30^\\circ=\\frac{h}{x+30}\\). Sale \\(x=15\\) y por tanto \\(h=15\\sqrt{3}\\).</p></li><li><p>Por el teorema del coseno:</p><div class=\"math-display\">\\[\n  d^2=20^2+30^2-2\\cdot 20\\cdot 30\\cos 60^\\circ=700.\n  \\]</div></li><li><div class=\"math-display\">\\[\n  c^2=6^2+10^2-2\\cdot 6\\cdot 10\\cos 120^\\circ=36+100+60=196.\n  \\]</div></li><li><p>El angulo \\(\\theta\\) verifica</p><div class=\"math-display\">\\[\n  \\cos\\theta=\\frac{5^2+8^2-7^2}{2\\cdot 5\\cdot 8}=\\frac{1}{2}.\n  \\]</div></li><li><p>Si el cable forma \\(30^\\circ\\) con el suelo, entonces</p><div class=\"math-display\">\\[\n  \\sen 30^\\circ=\\frac{12}{L}=\\frac{1}{2},\n  \\]</div><p>y por tanto \\(L=24\\).</p></li></ol>"
          },
          "challenge": {}
        }
      ]
    },
    {
      "id": "C06",
      "slug": "06_vectores",
      "title": "Vectores",
      "summaryHtml": "<p>Este capitulo desarrolla las secciones <code>C06.S01-C06.S06</code> de la matriz de cobertura a partir de <code>sources/Relacion ejercicios temas 6 y 7.pdf</code>. La idea central es usar los vectores como lenguaje comun para describir posiciones, direcciones, angulos y construcciones planas en \\(\\R^2\\).</p>",
      "studyRouteHtml": "",
      "sectionCount": 6,
      "sections": [
        {
          "id": "C06.S01",
          "title": "Bases y dependencia en \\(\\R^2\\)",
          "rawTitle": "[C06.S01] Bases y dependencia en \\(\\R^2\\)",
          "objectives": [
            {
              "label": "Objetivos de aprendizaje",
              "html": "<ul><li><p>Decidir si dos vectores forman una base de \\(\\R^2\\).</p></li><li><p>Expresar un vector en una base no canonica.</p></li></ul>"
            }
          ],
          "prerequisites": [
            {
              "label": "Prerrequisitos",
              "html": "<ul><li><p>Resolucion de sistemas lineales \\(2\\times 2\\).</p></li></ul>"
            }
          ],
          "theory": {
            "title": "Idea minima",
            "titleText": "Idea minima",
            "tagId": "",
            "html": "<p>Dos vectores de \\(\\R^2\\) forman una base si son linealmente independientes. En coordenadas, eso equivale a que el determinante de la matriz formada por sus componentes sea distinto de cero.</p>"
          },
          "method": {
            "title": "Como reconocer y resolver",
            "titleText": "Como reconocer y resolver",
            "tagId": "",
            "html": "<ol><li><p>Coloca los vectores como columnas de una matriz \\(2\\times 2\\).</p></li><li><p>Calcula el determinante.</p></li><li><p>Si el determinante no es cero, forman base y puedes usarla para descomponer otros vectores.</p></li></ol>"
          },
          "solvedExample": {
            "title": "[EX-C06.S01-01] Comprobar base y cambiar coordenadas",
            "titleText": "Comprobar base y cambiar coordenadas",
            "tagId": "EX-C06.S01-01",
            "html": "<p>Sean</p><div class=\"math-display\">\\[\nu=(1,2),\\qquad v=(3,5),\\qquad w=(7,11).\n\\]</div><p>Decide si \\(u\\) y \\(v\\) forman una base de \\(\\R^2\\) y expresa \\(w\\) como combinacion lineal de \\(u\\) y \\(v\\).</p><p><strong>Desarrollo.</strong> El determinante asociado es</p><div class=\"math-display\">\\[\n\\begin{vmatrix}\n1 & 3\\\\\n2 & 5\n\\end{vmatrix}=1\\cdot 5-3\\cdot 2=-1\\neq 0.\n\\]</div><p>Luego \\(u\\) y \\(v\\) forman una base.</p><p>Buscamos \\(a\\) y \\(b\\) tales que</p><div class=\"math-display\">\\[\nau+bv=w.\n\\]</div><p>Eso lleva al sistema</p><div class=\"math-display\">\\[\n\\begin{cases}\na+3b=7,\\\\\n2a+5b=11.\n\\end{cases}\n\\]</div><p>Restando el doble de la primera a la segunda:</p><div class=\"math-display\">\\[\n-b=-3 \\Longrightarrow b=3.\n\\]</div><p>Entonces</p><div class=\"math-display\">\\[\na+9=7 \\Longrightarrow a=-2.\n\\]</div><p><strong>Respuesta final.</strong></p><div class=\"math-display\">\\[\nu \\text{ y } v \\text{ forman una base de } \\R^2,\n\\qquad\nw=-2u+3v.\n\\]</div>"
          },
          "commonError": {
            "title": "Confundir distintos con independientes",
            "titleText": "Confundir distintos con independientes",
            "tagId": "",
            "html": "<p>Que dos vectores no sean iguales no basta para que formen base. Si uno es multiplo del otro, siguen siendo dependientes.</p>"
          },
          "guidedExercises": [
            {
              "tagId": "GX-C06.S01-01",
              "title": "Detectar dependencia",
              "promptHtml": "<p>Decide si \\((2,1)\\) y \\((4,2)\\) forman base de \\(\\R^2\\).</p><p><strong>Pista 1.</strong> Uno es multiplo del otro.</p>",
              "answerHtml": "<p>No. Son dependientes y no forman base.</p>",
              "solutionHtml": "<p>Como</p><div class=\"math-display\">\\[\n(4,2)=2(2,1),\n\\]</div><p>los vectores son dependientes. Por tanto, no forman base.</p>"
            },
            {
              "tagId": "GX-C06.S01-02",
              "title": "Coordenadas en otra base",
              "promptHtml": "<p>Expresa \\((3,1)\\) en la base formada por \\(u=(1,1)\\) y \\(v=(1,-1)\\).</p><p><strong>Pista 1.</strong> Busca \\(a\\) y \\(b\\) con \\(au+bv=(3,1)\\).</p>",
              "answerHtml": "<div class=\"math-display\">\\[\n(3,1)=2u+v.\n\\]</div>",
              "solutionHtml": "<p>El sistema es</p><div class=\"math-display\">\\[\n\\begin{cases}\na+b=3,\\\\\na-b=1.\n\\end{cases}\n\\]</div><p>Sumando, \\(2a=4\\), luego \\(a=2\\). Despues \\(b=1\\).</p>"
            }
          ],
          "practice": {
            "label": "Practica autonoma graduada",
            "items": [
              {
                "tagId": "PX-C06.S01-01",
                "prompt": "Decide si \\((1,0)\\) y \\((0,1)\\) forman base de \\(\\R^2\\)."
              },
              {
                "tagId": "PX-C06.S01-02",
                "prompt": "Decide si \\((1,3)\\) y \\((2,6)\\) forman base de \\(\\R^2\\)."
              },
              {
                "tagId": "PX-C06.S01-03",
                "prompt": "Halla \\(k\\) para que \\((1,2)\\) y \\((k,6)\\) sean dependientes."
              },
              {
                "tagId": "PX-C06.S01-04",
                "prompt": "Halla el valor de \\(a\\) para que \\((a,1)\\) y \\((2,3)\\) no formen base."
              },
              {
                "tagId": "PX-C06.S01-05",
                "prompt": "Expresa \\((5,1)\\) en la base \\(u=(1,1)\\), \\(v=(2,-1)\\)."
              },
              {
                "tagId": "PX-C06.S01-06",
                "prompt": "Decide si \\((0,1)\\) y \\((2,0)\\) forman base de \\(\\R^2\\)."
              }
            ],
            "answersHtml": "<ol><li><p>Si</p></li><li><p>No</p></li><li><p>\\(k=3\\)</p></li><li><p>\\(a=\\frac{2}{3}\\)</p></li><li><p>\\((5,1)=\\frac{7}{3}u+\\frac{4}{3}v\\)</p></li><li><p>Si</p></li></ol>",
            "solutionsHtml": "<ol><li><p>El determinante vale \\(1\\), luego si forman base.</p></li><li><p>\\((2,6)=2(1,3)\\), asi que no forman base.</p></li><li><p>La dependencia exige \\(6=2k\\), luego \\(k=3\\).</p></li><li><p>El determinante es \\(3a-2\\). Para que no formen base debe anularse.</p></li><li><p>Buscando \\(a\\) y \\(b\\),</p><div class=\"math-display\">\\[\n  \\begin{cases}\n  a+2b=5,\\\\\n  a-b=1,\n  \\end{cases}\n  \\]</div><p>de donde \\(b=\\frac{4}{3}\\) y \\(a=\\frac{7}{3}\\).</p></li><li><p>El determinante vale \\(-2\\), distinto de cero.</p></li></ol>"
          },
          "challenge": {}
        },
        {
          "id": "C06.S02",
          "title": "Operaciones con vectores",
          "rawTitle": "[C06.S02] Operaciones con vectores",
          "objectives": [
            {
              "label": "Objetivos de aprendizaje",
              "html": "<ul><li><p>Sumar, restar y multiplicar vectores por escalares.</p></li><li><p>Interpretar combinaciones lineales sencillas.</p></li></ul>"
            }
          ],
          "prerequisites": [
            {
              "label": "Prerrequisitos",
              "html": "<ul><li><p>Operaciones con numeros reales.</p></li></ul>"
            }
          ],
          "theory": {
            "title": "Idea minima",
            "titleText": "Idea minima",
            "tagId": "",
            "html": "<p>Las operaciones se hacen coordenada a coordenada:</p><div class=\"math-display\">\\[\n(a,b)+(c,d)=(a+c,b+d),\n\\qquad\n\\lambda(a,b)=(\\lambda a,\\lambda b).\n\\]</div><p>Una combinacion lineal mezcla ambas ideas a la vez.</p>"
          },
          "method": {
            "title": "Como reconocer y resolver",
            "titleText": "Como reconocer y resolver",
            "tagId": "",
            "html": "<ol><li><p>Multiplica primero por escalares si aparecen.</p></li><li><p>Suma o resta despues cada coordenada.</p></li><li><p>Comprueba el signo de cada componente al final.</p></li></ol>"
          },
          "solvedExample": {
            "title": "[EX-C06.S02-01] Dos combinaciones lineales",
            "titleText": "Dos combinaciones lineales",
            "tagId": "EX-C06.S02-01",
            "html": "<p>Sean</p><div class=\"math-display\">\\[\nu=(2,-1),\\qquad v=(1,3).\n\\]</div><p>Calcula \\(2u-v\\) y \\(3u+2v\\).</p><p><strong>Desarrollo.</strong></p><div class=\"math-display\">\\[\n2u-v=(4,-2)-(1,3)=(3,-5).\n\\]</div><div class=\"math-display\">\\[\n3u+2v=(6,-3)+(2,6)=(8,3).\n\\]</div><p><strong>Respuesta final.</strong></p><div class=\"math-display\">\\[\n2u-v=(3,-5),\n\\qquad\n3u+2v=(8,3).\n\\]</div>"
          },
          "commonError": {
            "title": "Olvidar repartir el signo menos",
            "titleText": "Olvidar repartir el signo menos",
            "tagId": "",
            "html": "<p>Restar un vector significa restar sus dos coordenadas. El error tipico es cambiar solo la primera y dejar la segunda igual.</p>"
          },
          "guidedExercises": [
            {
              "tagId": "GX-C06.S02-01",
              "title": "Suma directa",
              "promptHtml": "<p>Calcula \\((1,2)+(-3,4)\\).</p>",
              "answerHtml": "<div class=\"math-display\">\\[\n(-2,6).\n\\]</div>",
              "solutionHtml": "<div class=\"math-display\">\\[\n(1,2)+(-3,4)=(-2,6).\n\\]</div>"
            },
            {
              "tagId": "GX-C06.S02-02",
              "title": "Escalar y resta",
              "promptHtml": "<p>Calcula \\(2(3,-1)-(1,5)\\).</p>",
              "answerHtml": "<div class=\"math-display\">\\[\n(5,-7).\n\\]</div>",
              "solutionHtml": "<div class=\"math-display\">\\[\n2(3,-1)=(6,-2),\n\\]</div><p>y por tanto</p><div class=\"math-display\">\\[\n(6,-2)-(1,5)=(5,-7).\n\\]</div>"
            }
          ],
          "practice": {
            "label": "Practica autonoma graduada",
            "items": [
              {
                "tagId": "PX-C06.S02-01",
                "prompt": "Si \\(u=(2,1)\\) y \\(v=(-1,4)\\), calcula \\(u+v\\)."
              },
              {
                "tagId": "PX-C06.S02-02",
                "prompt": "Si \\(u=(5,0)\\) y \\(v=(2,-3)\\), calcula \\(u-v\\)."
              },
              {
                "tagId": "PX-C06.S02-03",
                "prompt": "Si \\(u=(1,-2)\\), calcula \\(-3u\\)."
              },
              {
                "tagId": "PX-C06.S02-04",
                "prompt": "Si \\(u=(4,1)\\) y \\(v=(2,5)\\), calcula \\(\\frac{1}{2}(u+v)\\)."
              },
              {
                "tagId": "PX-C06.S02-05",
                "prompt": "Si \\(u=(3,-2)\\) y \\(v=(-1,1)\\), calcula \\(4u+v\\)."
              },
              {
                "tagId": "PX-C06.S02-06",
                "prompt": "Si \\(u=(2,3)\\) y \\(v=(4,-1)\\), calcula \\(v-2u\\)."
              }
            ],
            "answersHtml": "<ol><li><p>\\((1,5)\\)</p></li><li><p>\\((3,3)\\)</p></li><li><p>\\((-3,6)\\)</p></li><li><p>\\((3,3)\\)</p></li><li><p>\\((11,-7)\\)</p></li><li><p>\\((0,-7)\\)</p></li></ol>",
            "solutionsHtml": "<ol><li><p>\\((2,1)+(-1,4)=(1,5)\\).</p></li><li><p>\\((5,0)-(2,-3)=(3,3)\\).</p></li><li><p>\\(-3(1,-2)=(-3,6)\\).</p></li><li><p>\\(\\frac{1}{2}(6,6)=(3,3)\\).</p></li><li><p>\\(4(3,-2)+(-1,1)=(12,-8)+(-1,1)=(11,-7)\\).</p></li><li><p>\\((4,-1)-(4,6)=(0,-7)\\).</p></li></ol>"
          },
          "challenge": {}
        },
        {
          "id": "C06.S03",
          "title": "Modulo, argumento y vectores unitarios",
          "rawTitle": "[C06.S03] Modulo, argumento y vectores unitarios",
          "objectives": [
            {
              "label": "Objetivos de aprendizaje",
              "html": "<ul><li><p>Calcular modulo y argumento de un vector.</p></li><li><p>Construir vectores unitarios y resolver condiciones de norma.</p></li></ul>"
            }
          ],
          "prerequisites": [
            {
              "label": "Prerrequisitos",
              "html": "<ul><li><p>Pitagoras y trigonometria basica.</p></li></ul>"
            }
          ],
          "theory": {
            "title": "Idea minima",
            "titleText": "Idea minima",
            "tagId": "",
            "html": "<p>El modulo de \\(u=(a,b)\\) es</p><div class=\"math-display\">\\[\n|u|=\\sqrt{a^2+b^2}.\n\\]</div><p>Su argumento es el angulo que forma con el eje \\(X\\) positivo. En este capitulo tomaremos el argumento principal en \\([0,2\\pi)\\). Un vector unitario tiene modulo \\(1\\).</p>"
          },
          "method": {
            "title": "Como reconocer y resolver",
            "titleText": "Como reconocer y resolver",
            "tagId": "",
            "html": "<ol><li><p>Usa Pitagoras para hallar el modulo.</p></li><li><p>Localiza el cuadrante para fijar el argumento.</p></li><li><p>Si piden un vector unitario, divide por el modulo.</p></li></ol>"
          },
          "solvedExample": {
            "title": "[EX-C06.S03-01] Modulo, argumento y unitario",
            "titleText": "Modulo, argumento y unitario",
            "tagId": "EX-C06.S03-01",
            "html": "<p>Sea \\(u=(1,\\sqrt{3})\\). Calcula su modulo, su argumento y el vector unitario de la misma direccion y sentido.</p><p><strong>Desarrollo.</strong> El modulo es</p><div class=\"math-display\">\\[\n|u|=\\sqrt{1^2+(\\sqrt{3})^2}=\\sqrt{4}=2.\n\\]</div><p>Como</p><div class=\"math-display\">\\[\n\\cos \\alpha=\\frac{1}{2},\n\\qquad\n\\sen \\alpha=\\frac{\\sqrt{3}}{2},\n\\]</div><p>se tiene \\(\\alpha=\\frac{\\pi}{3}\\).</p><p>El vector unitario es</p><div class=\"math-display\">\\[\n\\frac{u}{|u|}=\\left(\\frac{1}{2},\\frac{\\sqrt{3}}{2}\\right).\n\\]</div><p><strong>Respuesta final.</strong></p><div class=\"math-display\">\\[\n|u|=2,\n\\qquad\n\\arg(u)=\\frac{\\pi}{3},\n\\qquad\n\\widehat{u}=\\left(\\frac{1}{2},\\frac{\\sqrt{3}}{2}\\right).\n\\]</div>"
          },
          "commonError": {
            "title": "Dar el argumento correcto con cuadrante incorrecto",
            "titleText": "Dar el argumento correcto con cuadrante incorrecto",
            "tagId": "",
            "html": "<p>El angulo de referencia no basta. Un vector en el segundo o cuarto cuadrante comparte tangente con otros angulos, asi que hay que mirar los signos de ambas coordenadas.</p>"
          },
          "guidedExercises": [
            {
              "tagId": "GX-C06.S03-01",
              "title": "Segundo cuadrante",
              "promptHtml": "<p>Calcula el modulo y el argumento de \\(v=(-1,1)\\).</p><p><strong>Pista 1.</strong> El modulo es \\(\\sqrt{2}\\) y el angulo de referencia es \\(45^\\circ\\).</p>",
              "answerHtml": "<div class=\"math-display\">\\[\n|v|=\\sqrt{2},\n\\qquad\n\\arg(v)=\\frac{3\\pi}{4}.\n\\]</div>",
              "solutionHtml": "<div class=\"math-display\">\\[\n|v|=\\sqrt{(-1)^2+1^2}=\\sqrt{2}.\n\\]</div><p>El vector esta en el segundo cuadrante y su angulo de referencia es \\(\\frac{\\pi}{4}\\), luego</p><div class=\"math-display\">\\[\n\\arg(v)=\\pi-\\frac{\\pi}{4}=\\frac{3\\pi}{4}.\n\\]</div>"
            },
            {
              "tagId": "GX-C06.S03-02",
              "title": "Condicion de modulo",
              "promptHtml": "<p>Halla \\(a>0\\) si el vector \\((a,4)\\) tiene modulo \\(5\\).</p><p><strong>Pista 1.</strong> Plantea \\(a^2+4^2=5^2\\).</p>",
              "answerHtml": "<div class=\"math-display\">\\[\na=3.\n\\]</div>",
              "solutionHtml": "<div class=\"math-display\">\\[\na^2+16=25 \\Longrightarrow a^2=9.\n\\]</div><p>Como \\(a>0\\), se sigue que \\(a=3\\).</p>"
            }
          ],
          "practice": {
            "label": "Practica autonoma graduada",
            "items": [
              {
                "tagId": "PX-C06.S03-01",
                "prompt": "Halla el modulo de \\((3,4)\\)."
              },
              {
                "tagId": "PX-C06.S03-02",
                "prompt": "Halla el argumento principal de \\((0,-2)\\)."
              },
              {
                "tagId": "PX-C06.S03-03",
                "prompt": "Halla un vector unitario con la misma direccion y sentido que \\((0,5)\\)."
              },
              {
                "tagId": "PX-C06.S03-04",
                "prompt": "Halla \\(k>0\\) si el vector \\((k,4)\\) tiene modulo \\(5\\)."
              },
              {
                "tagId": "PX-C06.S03-05",
                "prompt": "Halla un vector de modulo \\(2\\) y argumento \\(150^\\circ\\)."
              },
              {
                "tagId": "PX-C06.S03-06",
                "prompt": "Halla el modulo y el argumento principal de \\((-\\sqrt{3},1)\\)."
              }
            ],
            "answersHtml": "<ol><li><p>\\(5\\)</p></li><li><p>\\(\\frac{3\\pi}{2}\\)</p></li><li><p>\\((0,1)\\)</p></li><li><p>\\(k=3\\)</p></li><li><p>\\((-\\sqrt{3},1)\\)</p></li><li><p>Modulo \\(2\\), argumento \\(\\frac{5\\pi}{6}\\)</p></li></ol>",
            "solutionsHtml": "<ol><li><p>\\(\\sqrt{3^2+4^2}=5\\).</p></li><li><p>El vector cae sobre el eje \\(Y\\) negativo.</p></li><li><p>\\((0,5)\\) dividido entre su modulo \\(5\\) da \\((0,1)\\).</p></li><li><p>Es el mismo calculo que en el guiado.</p></li><li><div class=\"math-display\">\\[\n  2(\\cos 150^\\circ,\\sen 150^\\circ)=2\\left(-\\frac{\\sqrt{3}}{2},\\frac{1}{2}\\right)=(-\\sqrt{3},1).\n  \\]</div></li><li><div class=\"math-display\">\\[\n  |u|=\\sqrt{3+1}=2,\n  \\]</div><p>y el vector esta en el segundo cuadrante con referencia \\(\\frac{\\pi}{6}\\).</p></li></ol>"
          },
          "challenge": {}
        },
        {
          "id": "C06.S04",
          "title": "Producto escalar y angulo entre vectores",
          "rawTitle": "[C06.S04] Producto escalar y angulo entre vectores",
          "objectives": [
            {
              "label": "Objetivos de aprendizaje",
              "html": "<ul><li><p>Calcular productos escalares.</p></li><li><p>Deducir perpendicularidad, modulos y angulos.</p></li></ul>"
            }
          ],
          "prerequisites": [
            {
              "label": "Prerrequisitos",
              "html": "<ul><li><p>Modulo de un vector y trigonometria basica.</p></li></ul>"
            }
          ],
          "theory": {
            "title": "Idea minima",
            "titleText": "Idea minima",
            "tagId": "",
            "html": "<p>Para \\(u=(a,b)\\) y \\(v=(c,d)\\),</p><div class=\"math-display\">\\[\nu\\cdot v=ac+bd.\n\\]</div><p>Ademas,</p><div class=\"math-display\">\\[\nu\\cdot v=|u|\\,|v|\\,\\cos \\theta,\n\\]</div><p>donde \\(\\theta\\) es el angulo entre ambos vectores. Si \\(u\\cdot v=0\\), los vectores son perpendiculares.</p>"
          },
          "method": {
            "title": "Como reconocer y resolver",
            "titleText": "Como reconocer y resolver",
            "tagId": "",
            "html": "<ol><li><p>Calcula primero \\(u\\cdot v\\).</p></li><li><p>Si piden el angulo, calcula tambien los modulos.</p></li><li><p>Usa la formula con \\(\\cos \\theta\\) o la condicion de perpendicularidad.</p></li></ol>"
          },
          "solvedExample": {
            "title": "[EX-C06.S04-01] Perpendicularidad por producto escalar",
            "titleText": "Perpendicularidad por producto escalar",
            "tagId": "EX-C06.S04-01",
            "html": "<p>Sean \\(u=(1,2)\\) y \\(v=(2,-1)\\). Calcula \\(u\\cdot v\\) y el angulo entre ambos.</p><p><strong>Desarrollo.</strong></p><div class=\"math-display\">\\[\nu\\cdot v=1\\cdot 2+2\\cdot (-1)=0.\n\\]</div><p>Si el producto escalar vale \\(0\\), entonces los vectores son perpendiculares, asi que el angulo entre ellos es</p><div class=\"math-display\">\\[\n\\theta=\\frac{\\pi}{2}.\n\\]</div><p><strong>Respuesta final.</strong></p><div class=\"math-display\">\\[\nu\\cdot v=0,\n\\qquad\n\\theta=\\frac{\\pi}{2}.\n\\]</div>"
          },
          "commonError": {
            "title": "Olvidar multiplicar coordenadas correspondientes",
            "titleText": "Olvidar multiplicar coordenadas correspondientes",
            "tagId": "",
            "html": "<p>El producto escalar no es sumar todas las coordenadas. Hay que multiplicar primera con primera y segunda con segunda antes de sumar.</p>"
          },
          "guidedExercises": [
            {
              "tagId": "GX-C06.S04-01",
              "title": "Angulo con el eje \\(X\\)",
              "promptHtml": "<p>Halla el angulo entre \\((1,0)\\) y \\((1,1)\\).</p><p><strong>Pista 1.</strong> El primer vector es unitario y apunta sobre el eje \\(X\\).</p>",
              "answerHtml": "<div class=\"math-display\">\\[\n\\theta=\\frac{\\pi}{4}.\n\\]</div>",
              "solutionHtml": "<div class=\"math-display\">\\[\n(1,0)\\cdot (1,1)=1,\n\\qquad\n|(1,0)|=1,\n\\qquad\n|(1,1)|=\\sqrt{2}.\n\\]</div><p>Entonces</p><div class=\"math-display\">\\[\n\\cos \\theta=\\frac{1}{\\sqrt{2}}=\\frac{\\sqrt{2}}{2},\n\\]</div><p>y por tanto \\(\\theta=\\frac{\\pi}{4}\\).</p>"
            },
            {
              "tagId": "GX-C06.S04-02",
              "title": "Vector paralelo con modulo fijado",
              "promptHtml": "<p>Halla un vector de modulo \\(4\\) con la misma direccion y sentido que \\((3,4)\\).</p><p><strong>Pista 1.</strong> Primero normaliza \\((3,4)\\).</p>",
              "answerHtml": "<div class=\"math-display\">\\[\n\\left(\\frac{12}{5},\\frac{16}{5}\\right).\n\\]</div>",
              "solutionHtml": "<p>Como \\(|(3,4)|=5\\), el unitario asociado es \\(\\left(\\frac{3}{5},\\frac{4}{5}\\right)\\). Al multiplicar por \\(4\\), se obtiene</p><div class=\"math-display\">\\[\n\\left(\\frac{12}{5},\\frac{16}{5}\\right).\n\\]</div>"
            }
          ],
          "practice": {
            "label": "Practica autonoma graduada",
            "items": [
              {
                "tagId": "PX-C06.S04-01",
                "prompt": "Calcula \\((2,3)\\cdot (1,-1)\\)."
              },
              {
                "tagId": "PX-C06.S04-02",
                "prompt": "Decide si \\((1,2)\\) y \\((2,-1)\\) son perpendiculares."
              },
              {
                "tagId": "PX-C06.S04-03",
                "prompt": "Halla el angulo entre \\((1,1)\\) y \\((1,-1)\\)."
              },
              {
                "tagId": "PX-C06.S04-04",
                "prompt": "Halla el angulo entre \\((1,0)\\) y \\((1,\\sqrt{3})\\)."
              },
              {
                "tagId": "PX-C06.S04-05",
                "prompt": "Halla un vector de modulo \\(5\\), en el primer cuadrante, que forme \\(60^\\circ\\) con el eje \\(X\\)."
              },
              {
                "tagId": "PX-C06.S04-06",
                "prompt": "Si \\(|u|=3\\), \\(|v|=4\\) y el angulo entre ellos es \\(60^\\circ\\), calcula \\(u\\cdot v\\)."
              }
            ],
            "answersHtml": "<ol><li><p>\\(-1\\)</p></li><li><p>Si</p></li><li><p>\\(\\frac{\\pi}{2}\\)</p></li><li><p>\\(\\frac{\\pi}{3}\\)</p></li><li><p>\\(\\left(\\frac{5}{2},\\frac{5\\sqrt{3}}{2}\\right)\\)</p></li><li><p>\\(6\\)</p></li></ol>",
            "solutionsHtml": "<ol><li><p>\\(2\\cdot 1+3\\cdot (-1)=-1\\).</p></li><li><p>El producto escalar es \\(0\\), luego si.</p></li><li><p>El producto escalar vale \\(0\\), asi que el angulo es recto.</p></li><li><div class=\"math-display\">\\[\n  \\cos \\theta=\\frac{1}{|(1,\\sqrt{3})|}=\\frac{1}{2},\n  \\]</div><p>y por tanto \\(\\theta=\\frac{\\pi}{3}\\).</p></li><li><div class=\"math-display\">\\[\n  5(\\cos 60^\\circ,\\sen 60^\\circ)=\\left(\\frac{5}{2},\\frac{5\\sqrt{3}}{2}\\right).\n  \\]</div></li><li><div class=\"math-display\">\\[\n  u\\cdot v=|u|\\,|v|\\,\\cos 60^\\circ=3\\cdot 4\\cdot \\frac{1}{2}=6.\n  \\]</div></li></ol>"
          },
          "challenge": {}
        },
        {
          "id": "C06.S05",
          "title": "Paralelismo, perpendicularidad y alineacion",
          "rawTitle": "[C06.S05] Paralelismo, perpendicularidad y alineacion",
          "objectives": [
            {
              "label": "Objetivos de aprendizaje",
              "html": "<ul><li><p>Decidir si dos vectores son paralelos o perpendiculares.</p></li><li><p>Comprobar si tres puntos estan alineados.</p></li></ul>"
            }
          ],
          "prerequisites": [
            {
              "label": "Prerrequisitos",
              "html": "<ul><li><p>Producto escalar y proporcionalidad entre vectores.</p></li></ul>"
            }
          ],
          "theory": {
            "title": "Idea minima",
            "titleText": "Idea minima",
            "tagId": "",
            "html": "<p>Dos vectores son paralelos si uno es multiplo del otro. Son perpendiculares si su producto escalar vale cero. Tres puntos \\(A\\), \\(B\\) y \\(C\\) estan alineados si \\(\\overrightarrow{AB}\\) y \\(\\overrightarrow{AC}\\) son paralelos.</p>"
          },
          "method": {
            "title": "Como reconocer y resolver",
            "titleText": "Como reconocer y resolver",
            "tagId": "",
            "html": "<ol><li><p>Para paralelismo, compara razones entre coordenadas.</p></li><li><p>Para perpendicularidad, calcula el producto escalar.</p></li><li><p>Para alineacion, construye dos vectores con origen comun.</p></li></ol>"
          },
          "solvedExample": {
            "title": "[EX-C06.S05-01] Relacion entre vectores y puntos",
            "titleText": "Relacion entre vectores y puntos",
            "tagId": "EX-C06.S05-01",
            "html": "<p>Estudia la relacion entre \\(u=(2,1)\\) y \\(v=(6,3)\\). Despues, decide si</p><div class=\"math-display\">\\[\nA(0,0),\\quad B(2,1),\\quad C(4,2)\n\\]</div><p>estan alineados.</p><p><strong>Desarrollo.</strong> Como</p><div class=\"math-display\">\\[\nv=3u,\n\\]</div><p>los vectores son paralelos.</p><p>Por otra parte,</p><div class=\"math-display\">\\[\n\\overrightarrow{AB}=(2,1),\n\\qquad\n\\overrightarrow{AC}=(4,2)=2(2,1).\n\\]</div><p>Como \\(\\overrightarrow{AB}\\) y \\(\\overrightarrow{AC}\\) son paralelos, los tres puntos estan alineados.</p><p><strong>Respuesta final.</strong></p><div class=\"math-display\">\\[\nu \\parallel v,\n\\qquad\nA,\\ B,\\ C \\text{ estan alineados}.\n\\]</div>"
          },
          "commonError": {
            "title": "Comparar solo una coordenada",
            "titleText": "Comparar solo una coordenada",
            "tagId": "",
            "html": "<p>Que la primera coordenada sea proporcional no basta. El paralelismo exige la misma razon en las dos coordenadas.</p>"
          },
          "guidedExercises": [
            {
              "tagId": "GX-C06.S05-01",
              "title": "Perpendicularidad",
              "promptHtml": "<p>Decide si \\((1,-2)\\) y \\((2,1)\\) son perpendiculares.</p><p><strong>Pista 1.</strong> Calcula su producto escalar.</p>",
              "answerHtml": "<p>Si. Son perpendiculares.</p>",
              "solutionHtml": "<div class=\"math-display\">\\[\n(1,-2)\\cdot (2,1)=2-2=0.\n\\]</div><p>Luego son perpendiculares.</p>"
            },
            {
              "tagId": "GX-C06.S05-02",
              "title": "Alineacion",
              "promptHtml": "<p>Decide si \\(A(1,0)\\), \\(B(2,2)\\) y \\(C(3,4)\\) estan alineados.</p><p><strong>Pista 1.</strong> Compara \\(\\overrightarrow{AB}\\) y \\(\\overrightarrow{AC}\\).</p>",
              "answerHtml": "<p>Si. Estan alineados.</p>",
              "solutionHtml": "<div class=\"math-display\">\\[\n\\overrightarrow{AB}=(1,2),\n\\qquad\n\\overrightarrow{AC}=(2,4)=2(1,2).\n\\]</div><p>Por tanto, los tres puntos estan alineados.</p>"
            }
          ],
          "practice": {
            "label": "Practica autonoma graduada",
            "items": [
              {
                "tagId": "PX-C06.S05-01",
                "prompt": "Decide la relacion entre \\((3,2)\\) y \\((6,4)\\)."
              },
              {
                "tagId": "PX-C06.S05-02",
                "prompt": "Decide la relacion entre \\((1,3)\\) y \\((3,-1)\\)."
              },
              {
                "tagId": "PX-C06.S05-03",
                "prompt": "Decide si \\(A(0,1)\\), \\(B(2,3)\\) y \\(C(4,5)\\) estan alineados."
              },
              {
                "tagId": "PX-C06.S05-04",
                "prompt": "Decide si \\(A(1,1)\\), \\(B(2,4)\\) y \\(C(4,5)\\) estan alineados."
              },
              {
                "tagId": "PX-C06.S05-05",
                "prompt": "Halla \\(k\\) para que \\((k,2)\\) sea perpendicular a \\((1,-4)\\)."
              },
              {
                "tagId": "PX-C06.S05-06",
                "prompt": "Halla \\(k\\) para que \\((2,k)\\) sea paralelo a \\((6,9)\\)."
              }
            ],
            "answersHtml": "<ol><li><p>Paralelos</p></li><li><p>Perpendiculares</p></li><li><p>Si</p></li><li><p>No</p></li><li><p>\\(k=8\\)</p></li><li><p>\\(k=3\\)</p></li></ol>",
            "solutionsHtml": "<ol><li><p>\\((6,4)=2(3,2)\\), luego son paralelos.</p></li><li><p>\\(1\\cdot 3+3\\cdot (-1)=0\\), luego son perpendiculares.</p></li><li><p>\\(\\overrightarrow{AB}=(2,2)\\) y \\(\\overrightarrow{AC}=(4,4)\\), luego si.</p></li><li><p>\\(\\overrightarrow{AB}=(1,3)\\) y \\(\\overrightarrow{AC}=(3,4)\\) no son paralelos.</p></li><li><p>\\(k\\cdot 1+2\\cdot (-4)=0\\), de donde \\(k=8\\).</p></li><li><p>La razon de proporcionalidad es \\(3\\), asi que \\(k=3\\).</p></li></ol>"
          },
          "challenge": {}
        },
        {
          "id": "C06.S06",
          "title": "Construcciones con vectores y paralelogramos",
          "rawTitle": "[C06.S06] Construcciones con vectores y paralelogramos",
          "objectives": [
            {
              "label": "Objetivos de aprendizaje",
              "html": "<ul><li><p>Hallar puntos a partir de relaciones vectoriales.</p></li><li><p>Completar paralelogramos y usar puntos medios.</p></li></ul>"
            }
          ],
          "prerequisites": [
            {
              "label": "Prerrequisitos",
              "html": "<ul><li><p>Operaciones con vectores y coordenadas de puntos.</p></li></ul>"
            }
          ],
          "theory": {
            "title": "Idea minima",
            "titleText": "Idea minima",
            "tagId": "",
            "html": "<p>En un paralelogramo \\(ABCD\\),</p><div class=\"math-display\">\\[\n\\overrightarrow{AB}=\\overrightarrow{DC},\n\\qquad\n\\overrightarrow{AD}=\\overrightarrow{BC},\n\\qquad\nC=B+D-A.\n\\]</div><p>Los puntos medios y traslaciones tambien se describen con sumas y restas de vectores.</p><div class=\"centered-block\"><div class=\"figure-fallback\">Esquema disponible en el cuaderno PDF. Refuerza esta idea con el laboratorio interactivo.</div></div>"
          },
          "method": {
            "title": "Como reconocer y resolver",
            "titleText": "Como reconocer y resolver",
            "tagId": "",
            "html": "<ol><li><p>Traduce el dato geometrico a una igualdad de vectores.</p></li><li><p>Escribe las coordenadas de cada vector como resta de puntos.</p></li><li><p>Despeja el punto desconocido al final.</p></li></ol>"
          },
          "solvedExample": {
            "title": "[EX-C06.S06-01] Completar un paralelogramo",
            "titleText": "Completar un paralelogramo",
            "tagId": "EX-C06.S06-01",
            "html": "<p>Sean</p><div class=\"math-display\">\\[\nA(1,1),\\qquad B(4,2),\\qquad D(2,5).\n\\]</div><p>Halla el cuarto vertice \\(C\\) del paralelogramo \\(ABCD\\).</p><p><strong>Desarrollo.</strong> En un paralelogramo se cumple</p><div class=\"math-display\">\\[\n\\overrightarrow{DC}=\\overrightarrow{AB}.\n\\]</div><p>Como</p><div class=\"math-display\">\\[\n\\overrightarrow{AB}=(4-1,2-1)=(3,1),\n\\]</div><p>sumamos ese vector a \\(D\\):</p><div class=\"math-display\">\\[\nC=D+\\overrightarrow{AB}=(2,5)+(3,1)=(5,6).\n\\]</div><p><strong>Respuesta final.</strong></p><div class=\"math-display\">\\[\nC(5,6).\n\\]</div>"
          },
          "commonError": {
            "title": "Restar los puntos en orden incorrecto",
            "titleText": "Restar los puntos en orden incorrecto",
            "tagId": "",
            "html": "<p>No es lo mismo \\(\\overrightarrow{AB}=B-A\\) que \\(A-B\\). Cambiar el orden invierte la direccion y desplaza mal el punto buscado.</p>"
          },
          "guidedExercises": [
            {
              "tagId": "GX-C06.S06-01",
              "title": "Vector entre dos puntos",
              "promptHtml": "<p>Si \\(\\overrightarrow{AB}=(3,-1)\\) y \\(\\overrightarrow{AC}=(5,2)\\), calcula \\(\\overrightarrow{BC}\\).</p><p><strong>Pista 1.</strong> Usa \\(\\overrightarrow{BC}=\\overrightarrow{AC}-\\overrightarrow{AB}\\).</p>",
              "answerHtml": "<div class=\"math-display\">\\[\n\\overrightarrow{BC}=(2,3).\n\\]</div>",
              "solutionHtml": "<div class=\"math-display\">\\[\n\\overrightarrow{BC}=(5,2)-(3,-1)=(2,3).\n\\]</div>"
            },
            {
              "tagId": "GX-C06.S06-02",
              "title": "Punto medio",
              "promptHtml": "<p>Halla el punto medio del segmento con extremos \\(A(-1,2)\\) y \\(B(5,4)\\).</p><p><strong>Pista 1.</strong> Haz la media coordenada a coordenada.</p>",
              "answerHtml": "<div class=\"math-display\">\\[\nM(2,3).\n\\]</div>",
              "solutionHtml": "<div class=\"math-display\">\\[\nM\\left(\\frac{-1+5}{2},\\frac{2+4}{2}\\right)=(2,3).\n\\]</div>"
            }
          ],
          "practice": {
            "label": "Practica autonoma graduada",
            "items": [
              {
                "tagId": "PX-C06.S06-01",
                "prompt": "Halla el cuarto vertice del paralelogramo con \\(A(0,0)\\), \\(B(3,1)\\) y \\(D(1,4)\\)."
              },
              {
                "tagId": "PX-C06.S06-02",
                "prompt": "Traslada el punto \\(P(2,-1)\\) con el vector \\((-3,4)\\)."
              },
              {
                "tagId": "PX-C06.S06-03",
                "prompt": "Halla el punto medio del segmento con extremos \\(A(1,5)\\) y \\(B(7,-1)\\)."
              },
              {
                "tagId": "PX-C06.S06-04",
                "prompt": "Si \\(M(3,2)\\) es el punto medio de \\(A(1,0)\\) y \\(B\\), halla \\(B\\)."
              },
              {
                "tagId": "PX-C06.S06-05",
                "prompt": "Si \\(A(1,-1)\\) y \\(\\overrightarrow{AB}=(2,5)\\), halla \\(B\\)."
              },
              {
                "tagId": "PX-C06.S06-06",
                "prompt": "En el paralelogramo \\(ABCD\\), se conocen \\(A(2,1)\\), \\(B(5,3)\\) y \\(C(7,6)\\). Halla \\(D\\)."
              }
            ],
            "answersHtml": "<ol><li><p>\\(C(4,5)\\)</p></li><li><p>\\(P'(-1,3)\\)</p></li><li><p>\\(M(4,2)\\)</p></li><li><p>\\(B(5,4)\\)</p></li><li><p>\\(B(3,4)\\)</p></li><li><p>\\(D(4,4)\\)</p></li></ol>",
            "solutionsHtml": "<ol><li><p>\\(C=B+D-A=(3,1)+(1,4)=(4,5)\\).</p></li><li><p>\\(P'=P+(-3,4)=(-1,3)\\).</p></li><li><div class=\"math-display\">\\[\n  M\\left(\\frac{1+7}{2},\\frac{5+(-1)}{2}\\right)=(4,2).\n  \\]</div></li><li><p>De la formula del punto medio:</p><div class=\"math-display\">\\[\n  \\frac{1+x_B}{2}=3,\\qquad \\frac{0+y_B}{2}=2.\n  \\]</div></li><li><p>\\(B=A+\\overrightarrow{AB}=(1,-1)+(2,5)=(3,4)\\).</p></li><li><p>En un paralelogramo,</p><div class=\"math-display\">\\[\n  D=A+C-B=(2,1)+(7,6)-(5,3)=(4,4).\n  \\]</div></li></ol>"
          },
          "challenge": {}
        }
      ]
    },
    {
      "id": "C07",
      "slug": "07_geometria_analitica",
      "title": "Geometria analitica y lugares geometricos",
      "summaryHtml": "<p>Este capitulo desarrolla las secciones <code>C07.S01-C07.S10</code> de la matriz de cobertura a partir de <code>sources/Relacion ejercicios temas 6 y 7.pdf</code>. La progresion parte de la recta como objeto algebraico y termina en construcciones geometricas y problemas de compatibilidad.</p>",
      "studyRouteHtml": "",
      "sectionCount": 10,
      "sections": [
        {
          "id": "C07.S01",
          "title": "Ecuaciones de la recta y vectores asociados",
          "rawTitle": "[C07.S01] Ecuaciones de la recta y vectores asociados",
          "objectives": [
            {
              "label": "Objetivos de aprendizaje",
              "html": "<ul><li><p>Hallar ecuaciones de rectas a partir de puntos y direcciones.</p></li><li><p>Reconocer vectores director y normal de una recta.</p></li></ul>"
            }
          ],
          "prerequisites": [
            {
              "label": "Prerrequisitos",
              "html": "<ul><li><p>Pendiente de una recta y operaciones con vectores.</p></li></ul>"
            }
          ],
          "theory": {
            "title": "Idea minima",
            "titleText": "Idea minima",
            "tagId": "",
            "html": "<p>Una recta puede escribirse de varias formas. Si conoces un punto \\(P(x_0,y_0)\\) y un vector director \\(v=(a,b)\\), una forma util es</p><div class=\"math-display\">\\[\n(x,y)=(x_0,y_0)+t(a,b).\n\\]</div><p>Si conoces un vector normal \\(n=(A,B)\\), la forma general es</p><div class=\"math-display\">\\[\nAx+By+C=0.\n\\]</div>"
          },
          "method": {
            "title": "Como reconocer y resolver",
            "titleText": "Como reconocer y resolver",
            "tagId": "",
            "html": "<ol><li><p>Si tienes dos puntos, construye un vector director restando coordenadas.</p></li><li><p>Si tienes una ecuacion general, el vector normal sale de sus coeficientes.</p></li><li><p>Cambia de forma solo cuando te ayude a responder lo que piden.</p></li></ol>"
          },
          "solvedExample": {
            "title": "[EX-C07.S01-01] De dos puntos a la recta",
            "titleText": "De dos puntos a la recta",
            "tagId": "EX-C07.S01-01",
            "html": "<p>Halla la ecuacion de la recta que pasa por \\(A(1,2)\\) y \\(B(4,5)\\). Indica tambien un vector director y un vector normal.</p><p><strong>Desarrollo.</strong> Un vector director es</p><div class=\"math-display\">\\[\n\\overrightarrow{AB}=(4-1,5-2)=(3,3).\n\\]</div><p>Podemos simplificarlo a \\((1,1)\\). La pendiente vale \\(1\\), asi que la recta tiene forma</p><div class=\"math-display\">\\[\ny=x+b.\n\\]</div><p>Usando el punto \\(A(1,2)\\):</p><div class=\"math-display\">\\[\n2=1+b \\Longrightarrow b=1.\n\\]</div><p>Luego</p><div class=\"math-display\">\\[\ny=x+1.\n\\]</div><p>Pasando a forma general:</p><div class=\"math-display\">\\[\nx-y+1=0.\n\\]</div><p>De aqui sale un vector normal, por ejemplo \\((1,-1)\\).</p><p><strong>Respuesta final.</strong></p><div class=\"math-display\">\\[\nr:\\ y=x+1,\n\\qquad\nv_d=(1,1),\n\\qquad\nv_n=(1,-1).\n\\]</div>"
          },
          "commonError": {
            "title": "Tomar como director el vector normal",
            "titleText": "Tomar como director el vector normal",
            "tagId": "",
            "html": "<p>En \\(Ax+By+C=0\\), el vector \\((A,B)\\) es normal, no director. El director debe ser perpendicular a ese vector.</p>"
          },
          "guidedExercises": [
            {
              "tagId": "GX-C07.S01-01",
              "title": "Punto y direccion",
              "promptHtml": "<p>Halla la ecuacion de la recta que pasa por \\((0,2)\\) y tiene vector director \\((1,-1)\\).</p><p><strong>Pista 1.</strong> Su pendiente es \\(-1\\).</p>",
              "answerHtml": "<div class=\"math-display\">\\[\ny=-x+2.\n\\]</div>",
              "solutionHtml": "<p>Con pendiente \\(-1\\), la recta es \\(y=-x+b\\). Como pasa por \\((0,2)\\), se tiene \\(b=2\\).</p>"
            },
            {
              "tagId": "GX-C07.S01-02",
              "title": "Director y normal desde la forma general",
              "promptHtml": "<p>Para la recta \\(2x-3y+6=0\\), indica un vector director y un vector normal.</p><p><strong>Pista 1.</strong> El normal sale directamente de la ecuacion.</p>",
              "answerHtml": "<p>Vector normal: \\((2,-3)\\). Vector director: \\((3,2)\\).</p>",
              "solutionHtml": "<p>El vector normal es \\((2,-3)\\). Un vector perpendicular a el es \\((3,2)\\), que sirve como director.</p>"
            }
          ],
          "practice": {
            "label": "Practica autonoma graduada",
            "items": [
              {
                "tagId": "PX-C07.S01-01",
                "prompt": "Halla la ecuacion de la recta que pasa por \\((2,1)\\) y \\((2,5)\\)."
              },
              {
                "tagId": "PX-C07.S01-02",
                "prompt": "Halla la ecuacion de la recta que pasa por \\((0,-1)\\) y tiene pendiente \\(3\\)."
              },
              {
                "tagId": "PX-C07.S01-03",
                "prompt": "Halla la ecuacion de la recta que pasa por \\((1,4)\\) y \\((3,0)\\)."
              },
              {
                "tagId": "PX-C07.S01-04",
                "prompt": "Indica un vector normal de la recta \\(x-2y+5=0\\)."
              },
              {
                "tagId": "PX-C07.S01-05",
                "prompt": "Indica un vector director de la recta \\(3x+y-7=0\\)."
              },
              {
                "tagId": "PX-C07.S01-06",
                "prompt": "Halla la recta que pasa por \\((-1,2)\\) y es paralela a \\(x+y=4\\)."
              }
            ],
            "answersHtml": "<ol><li><p>\\(x=2\\)</p></li><li><p>\\(y=3x-1\\)</p></li><li><p>\\(y=-2x+6\\)</p></li><li><p>\\((1,-2)\\)</p></li><li><p>\\((1,-3)\\)</p></li><li><p>\\(y=-x+1\\)</p></li></ol>",
            "solutionsHtml": "<ol><li><p>Es una recta vertical, luego \\(x=2\\).</p></li><li><p>Con pendiente \\(3\\) y paso por \\((0,-1)\\), sale \\(y=3x-1\\).</p></li><li><p>La pendiente es \\(\\frac{0-4}{3-1}=-2\\), asi que \\(y=-2x+6\\).</p></li><li><p>De la forma general, el vector normal es \\((1,-2)\\).</p></li><li><p>Un director perpendicular a \\((3,1)\\) es \\((1,-3)\\).</p></li><li><p>La recta \\(x+y=4\\) tiene pendiente \\(-1\\). Pasando por \\((-1,2)\\), queda \\(y=-x+1\\).</p></li></ol>"
          },
          "challenge": {}
        },
        {
          "id": "C07.S02",
          "title": "Problemas con parametros en rectas",
          "rawTitle": "[C07.S02] Problemas con parametros en rectas",
          "objectives": [
            {
              "label": "Objetivos de aprendizaje",
              "html": "<ul><li><p>Determinar parametros para que una recta cumpla una condicion.</p></li><li><p>Relacionar paso por punto, pendiente y paralelismo.</p></li></ul>"
            }
          ],
          "prerequisites": [
            {
              "label": "Prerrequisitos",
              "html": "<ul><li><p>Ecuaciones de la recta y sistemas lineales.</p></li></ul>"
            }
          ],
          "theory": {
            "title": "Idea minima",
            "titleText": "Idea minima",
            "tagId": "",
            "html": "<p>Un parametro en la ecuacion de una recta se fija imponiendo una condicion concreta: que la recta pase por un punto, sea paralela, perpendicular o tenga un cierto corte.</p>"
          },
          "method": {
            "title": "Como reconocer y resolver",
            "titleText": "Como reconocer y resolver",
            "tagId": "",
            "html": "<ol><li><p>Traduce la condicion geometricamente.</p></li><li><p>Sustituye el punto o iguala pendientes segun corresponda.</p></li><li><p>Resuelve la ecuacion del parametro.</p></li></ol>"
          },
          "solvedExample": {
            "title": "[EX-C07.S02-01] Parametro por paso por punto",
            "titleText": "Parametro por paso por punto",
            "tagId": "EX-C07.S02-01",
            "html": "<p>Determina \\(a\\) para que la recta</p><div class=\"math-display\">\\[\n(a-1)x+2y=5\n\\]</div><p>pase por el punto \\((1,2)\\).</p><p><strong>Desarrollo.</strong> Sustituimos las coordenadas del punto:</p><div class=\"math-display\">\\[\n(a-1)\\cdot 1+2\\cdot 2=5.\n\\]</div><p>Entonces</p><div class=\"math-display\">\\[\na-1+4=5 \\Longrightarrow a=2.\n\\]</div><p><strong>Respuesta final.</strong></p><div class=\"math-display\">\\[\na=2.\n\\]</div>"
          },
          "commonError": {
            "title": "Olvidar sustituir las dos coordenadas",
            "titleText": "Olvidar sustituir las dos coordenadas",
            "tagId": "",
            "html": "<p>Para comprobar si un punto pertenece a una recta, hay que sustituir \\(x\\) y \\(y\\). Si se usa solo una coordenada, la condicion queda incompleta.</p>"
          },
          "guidedExercises": [
            {
              "tagId": "GX-C07.S02-01",
              "title": "Paralelismo",
              "promptHtml": "<p>Halla \\(k\\) para que \\(y=(k+1)x-3\\) sea paralela a \\(2x-y+1=0\\).</p><p><strong>Pista 1.</strong> Pasa la segunda recta a forma explicita.</p>",
              "answerHtml": "<div class=\"math-display\">\\[\nk=1.\n\\]</div>",
              "solutionHtml": "<p>La recta \\(2x-y+1=0\\) se escribe \\(y=2x+1\\), asi que su pendiente es \\(2\\). Para que las rectas sean paralelas:</p><div class=\"math-display\">\\[\nk+1=2 \\Longrightarrow k=1.\n\\]</div>"
            },
            {
              "tagId": "GX-C07.S02-02",
              "title": "Perpendicularidad",
              "promptHtml": "<p>Halla \\(k\\) para que \\(x+ky=4\\) sea perpendicular a \\(y=x\\).</p><p><strong>Pista 1.</strong> La pendiente de \\(y=x\\) es \\(1\\).</p>",
              "answerHtml": "<div class=\"math-display\">\\[\nk=1.\n\\]</div>",
              "solutionHtml": "<p>La recta \\(x+ky=4\\) se escribe</p><div class=\"math-display\">\\[\ny=-\\frac{1}{k}x+\\frac{4}{k}.\n\\]</div><p>Para que sea perpendicular a una recta de pendiente \\(1\\), debe tener pendiente \\(-1\\):</p><div class=\"math-display\">\\[\n-\\frac{1}{k}=-1 \\Longrightarrow k=1.\n\\]</div>"
            }
          ],
          "practice": {
            "label": "Practica autonoma graduada",
            "items": [
              {
                "tagId": "PX-C07.S02-01",
                "prompt": "Halla \\(m\\) para que \\(2x+(m-1)y=5\\) pase por \\((1,1)\\)."
              },
              {
                "tagId": "PX-C07.S02-02",
                "prompt": "Halla \\(k\\) para que \\(y=(2k-1)x+4\\) sea paralela a \\(y=3x-2\\)."
              },
              {
                "tagId": "PX-C07.S02-03",
                "prompt": "Halla \\(a\\) para que \\(ax-y+2=0\\) sea perpendicular a \\(y=2x+1\\)."
              },
              {
                "tagId": "PX-C07.S02-04",
                "prompt": "Halla \\(b\\) para que \\(x+by-6=0\\) pase por \\((2,4)\\)."
              },
              {
                "tagId": "PX-C07.S02-05",
                "prompt": "Halla \\(c\\) para que \\((c+1)x+2y=0\\) sea paralela a \\(x-2y+3=0\\)."
              },
              {
                "tagId": "PX-C07.S02-06",
                "prompt": "Halla \\(d\\) para que \\(x-dy+1=0\\) sea perpendicular a \\(y=-x\\)."
              }
            ],
            "answersHtml": "<ol><li><p>\\(m=4\\)</p></li><li><p>\\(k=2\\)</p></li><li><p>\\(a=-\\frac{1}{2}\\)</p></li><li><p>\\(b=1\\)</p></li><li><p>\\(c=-2\\)</p></li><li><p>\\(d=1\\)</p></li></ol>",
            "solutionsHtml": "<ol><li><p>\\(2+(m-1)=5\\), luego \\(m=4\\).</p></li><li><p>Para que sea paralela a pendiente \\(3\\): \\(2k-1=3\\), de donde \\(k=2\\).</p></li><li><p>La recta es \\(y=ax+2\\). Su pendiente debe ser \\(-\\frac{1}{2}\\).</p></li><li><p>\\(2+4b-6=0\\), luego \\(b=1\\).</p></li><li><p>La recta dada tiene pendiente \\(\\frac{1}{2}\\). Como la nuestra tiene pendiente \\(-\\frac{c+1}{2}\\), sale \\(c=-2\\).</p></li><li><p>La recta \\(y=-x\\) tiene pendiente \\(-1\\), asi que la perpendicular debe tener pendiente \\(1\\). En \\(x-dy+1=0\\), la pendiente es \\(\\frac{1}{d}\\), luego \\(d=1\\).</p></li></ol>"
          },
          "challenge": {}
        },
        {
          "id": "C07.S03",
          "title": "Simetrias respecto de punto y recta",
          "rawTitle": "[C07.S03] Simetrias respecto de punto y recta",
          "objectives": [
            {
              "label": "Objetivos de aprendizaje",
              "html": "<ul><li><p>Hallar puntos simetricos respecto de un centro o de una recta sencilla.</p></li><li><p>Interpretar una simetria como una conservacion de distancias.</p></li></ul>"
            }
          ],
          "prerequisites": [
            {
              "label": "Prerrequisitos",
              "html": "<ul><li><p>Coordenadas y punto medio.</p></li></ul>"
            }
          ],
          "theory": {
            "title": "Idea minima",
            "titleText": "Idea minima",
            "tagId": "",
            "html": "<p>Si \\(P'\\) es el simetrico de \\(P\\) respecto de un punto \\(C\\), entonces \\(C\\) es el punto medio del segmento \\(PP'\\). En simetrias respecto de rectas sencillas, se conserva una coordenada y se refleja la otra.</p>"
          },
          "method": {
            "title": "Como reconocer y resolver",
            "titleText": "Como reconocer y resolver",
            "tagId": "",
            "html": "<ol><li><p>Para simetria central, usa la formula del punto medio.</p></li><li><p>Para rectas verticales u horizontales, refleja solo la coordenada perpendicular.</p></li><li><p>Comprueba al final que las distancias a la recta o al centro son iguales.</p></li></ol>"
          },
          "solvedExample": {
            "title": "[EX-C07.S03-01] Simetria central",
            "titleText": "Simetria central",
            "tagId": "EX-C07.S03-01",
            "html": "<p>Halla el simetrico de \\(P(3,1)\\) respecto del punto \\(C(1,2)\\).</p><p><strong>Desarrollo.</strong> Si \\(P'(x,y)\\) es el simetrico, \\(C\\) es el punto medio de \\(PP'\\), luego</p><div class=\"math-display\">\\[\n\\frac{3+x}{2}=1,\n\\qquad\n\\frac{1+y}{2}=2.\n\\]</div><p>De aqui,</p><div class=\"math-display\">\\[\nx=-1,\n\\qquad\ny=3.\n\\]</div><p><strong>Respuesta final.</strong></p><div class=\"math-display\">\\[\nP'(-1,3).\n\\]</div>"
          },
          "commonError": {
            "title": "Intercambiar punto medio y extremo",
            "titleText": "Intercambiar punto medio y extremo",
            "tagId": "",
            "html": "<p>La simetria central no consiste en copiar las coordenadas del centro. El centro queda justo en medio del segmento que une punto original y punto simetrico.</p>"
          },
          "guidedExercises": [
            {
              "tagId": "GX-C07.S03-01",
              "title": "Simetria respecto del eje \\(X\\)",
              "promptHtml": "<p>Halla el simetrico de \\(A(4,-2)\\) respecto del eje \\(X\\).</p>",
              "answerHtml": "<div class=\"math-display\">\\[\nA'(4,2).\n\\]</div>",
              "solutionHtml": "<p>Se conserva la coordenada \\(x\\) y cambia de signo la coordenada \\(y\\):</p><div class=\"math-display\">\\[\nA'(4,2).\n\\]</div>"
            },
            {
              "tagId": "GX-C07.S03-02",
              "title": "Simetria respecto de una recta vertical",
              "promptHtml": "<p>Halla el simetrico de \\(B(1,5)\\) respecto de la recta \\(x=2\\).</p><p><strong>Pista 1.</strong> La recta \\(x=2\\) debe quedar a la misma distancia de \\(B\\) y de su simetrico.</p>",
              "answerHtml": "<div class=\"math-display\">\\[\nB'(3,5).\n\\]</div>",
              "solutionHtml": "<p>El punto \\(B\\) esta a distancia \\(1\\) de la recta \\(x=2\\). El simetrico queda a distancia \\(1\\) al otro lado, con la misma ordenada:</p><div class=\"math-display\">\\[\nB'(3,5).\n\\]</div>"
            }
          ],
          "practice": {
            "label": "Practica autonoma graduada",
            "items": [
              {
                "tagId": "PX-C07.S03-01",
                "prompt": "Halla el simetrico de \\((2,-1)\\) respecto del origen."
              },
              {
                "tagId": "PX-C07.S03-02",
                "prompt": "Halla el simetrico de \\((-3,4)\\) respecto del eje \\(Y\\)."
              },
              {
                "tagId": "PX-C07.S03-03",
                "prompt": "Halla el simetrico de \\((5,1)\\) respecto de la recta \\(x=1\\)."
              },
              {
                "tagId": "PX-C07.S03-04",
                "prompt": "Halla el simetrico de \\((2,5)\\) respecto de la recta \\(y=1\\)."
              },
              {
                "tagId": "PX-C07.S03-05",
                "prompt": "Halla el simetrico de \\(P(4,0)\\) respecto de \\(M(1,-2)\\)."
              },
              {
                "tagId": "PX-C07.S03-06",
                "prompt": "Halla el simetrico de \\((3,1)\\) respecto de la recta \\(y=x\\)."
              }
            ],
            "answersHtml": "<ol><li><p>\\((-2,1)\\)</p></li><li><p>\\((3,4)\\)</p></li><li><p>\\((-3,1)\\)</p></li><li><p>\\((2,-3)\\)</p></li><li><p>\\((-2,-4)\\)</p></li><li><p>\\((1,3)\\)</p></li></ol>",
            "solutionsHtml": "<ol><li><p>Respecto del origen cambian de signo ambas coordenadas.</p></li><li><p>Respecto del eje \\(Y\\), cambia el signo de \\(x\\).</p></li><li><p>La recta \\(x=1\\) queda como punto medio entre \\(x=5\\) y \\(x'=-3\\).</p></li><li><p>Respecto de \\(y=1\\), la distancia vertical es \\(4\\), luego \\(y'=-3\\).</p></li><li><div class=\"math-display\">\\[\n  \\frac{4+x}{2}=1,\\qquad \\frac{0+y}{2}=-2,\n  \\]</div><p>de donde \\(x=-2\\), \\(y=-4\\).</p></li><li><p>En la recta \\(y=x\\) se intercambian las coordenadas.</p></li></ol>"
          },
          "challenge": {}
        },
        {
          "id": "C07.S04",
          "title": "Posicion relativa de rectas",
          "rawTitle": "[C07.S04] Posicion relativa de rectas",
          "objectives": [
            {
              "label": "Objetivos de aprendizaje",
              "html": "<ul><li><p>Clasificar dos rectas como secantes, paralelas o coincidentes.</p></li><li><p>Hallar puntos de interseccion cuando existan.</p></li></ul>"
            }
          ],
          "prerequisites": [
            {
              "label": "Prerrequisitos",
              "html": "<ul><li><p>Ecuaciones de la recta y resolucion de sistemas \\(2\\times 2\\).</p></li></ul>"
            }
          ],
          "theory": {
            "title": "Idea minima",
            "titleText": "Idea minima",
            "tagId": "",
            "html": "<p>Dos rectas:</p><ul><li><p>son secantes si tienen pendientes distintas;</p></li><li><p>son paralelas si tienen la misma pendiente y distinto termino independiente;</p></li><li><p>son coincidentes si representan la misma ecuacion.</p></li></ul>"
          },
          "method": {
            "title": "Como reconocer y resolver",
            "titleText": "Como reconocer y resolver",
            "tagId": "",
            "html": "<ol><li><p>Lleva las rectas a una forma comparable.</p></li><li><p>Compara pendientes o coeficientes.</p></li><li><p>Si son secantes, resuelve el sistema para hallar el punto de corte.</p></li></ol>"
          },
          "solvedExample": {
            "title": "[EX-C07.S04-01] Rectas secantes",
            "titleText": "Rectas secantes",
            "tagId": "EX-C07.S04-01",
            "html": "<p>Estudia la posicion relativa de las rectas</p><div class=\"math-display\">\\[\nr:\\ x+y=3,\n\\qquad\ns:\\ x-y=1.\n\\]</div><p><strong>Desarrollo.</strong> Como las pendientes son \\(-1\\) y \\(1\\), las rectas son secantes. Buscamos su punto de corte resolviendo</p><div class=\"math-display\">\\[\n\\begin{cases}\nx+y=3,\\\\\nx-y=1.\n\\end{cases}\n\\]</div><p>Sumando ambas ecuaciones:</p><div class=\"math-display\">\\[\n2x=4 \\Longrightarrow x=2.\n\\]</div><p>Entonces</p><div class=\"math-display\">\\[\ny=1.\n\\]</div><p><strong>Respuesta final.</strong></p><div class=\"math-display\">\\[\nr \\text{ y } s \\text{ son secantes en } (2,1).\n\\]</div>"
          },
          "commonError": {
            "title": "Confundir paralelas con coincidentes",
            "titleText": "Confundir paralelas con coincidentes",
            "tagId": "",
            "html": "<p>Que dos rectas tengan la misma pendiente no basta para que coincidan. Tambien deben compartir todos sus puntos.</p>"
          },
          "guidedExercises": [
            {
              "tagId": "GX-C07.S04-01",
              "title": "Paralelas",
              "promptHtml": "<p>Estudia la posicion relativa de \\(x+2y=1\\) y \\(x+2y=5\\).</p>",
              "answerHtml": "<p>Son paralelas.</p>",
              "solutionHtml": "<p>Tienen exactamente los mismos coeficientes en \\(x\\) e \\(y\\), pero distinto termino independiente. Por tanto, son paralelas distintas.</p>"
            },
            {
              "tagId": "GX-C07.S04-02",
              "title": "Coincidentes",
              "promptHtml": "<p>Estudia la posicion relativa de \\(2x-y=4\\) y \\(4x-2y=8\\).</p>",
              "answerHtml": "<p>Son coincidentes.</p>",
              "solutionHtml": "<p>La segunda ecuacion es el doble de la primera, asi que describen la misma recta.</p>"
            }
          ],
          "practice": {
            "label": "Practica autonoma graduada",
            "items": [
              {
                "tagId": "PX-C07.S04-01",
                "prompt": "Estudia la posicion relativa de \\(y=2x+1\\) y \\(y=-x+4\\)."
              },
              {
                "tagId": "PX-C07.S04-02",
                "prompt": "Estudia la posicion relativa de \\(x-3y=2\\) y \\(2x-6y=5\\)."
              },
              {
                "tagId": "PX-C07.S04-03",
                "prompt": "Estudia la posicion relativa de \\(x+y=0\\) y \\(3x+3y=0\\)."
              },
              {
                "tagId": "PX-C07.S04-04",
                "prompt": "Estudia la posicion relativa de \\(x=2\\) y \\(y=3\\)."
              },
              {
                "tagId": "PX-C07.S04-05",
                "prompt": "Estudia la posicion relativa de \\(y=-2x+5\\) y \\(2y=-4x+1\\)."
              },
              {
                "tagId": "PX-C07.S04-06",
                "prompt": "Estudia la posicion relativa de \\(x-y=1\\) y \\(x+y=5\\)."
              }
            ],
            "answersHtml": "<ol><li><p>Secantes en \\((1,3)\\)</p></li><li><p>Paralelas</p></li><li><p>Coincidentes</p></li><li><p>Secantes en \\((2,3)\\)</p></li><li><p>Paralelas</p></li><li><p>Secantes en \\((3,2)\\)</p></li></ol>",
            "solutionsHtml": "<ol><li><p>Las pendientes son \\(2\\) y \\(-1\\). Resolviendo sale \\((1,3)\\).</p></li><li><p>Tienen la misma pendiente y distinto termino independiente.</p></li><li><p>La segunda es el triple de la primera.</p></li><li><p>Una es vertical y la otra horizontal, luego se cortan en \\((2,3)\\).</p></li><li><p>La segunda se escribe \\(y=-2x+\\frac{1}{2}\\), paralela a la primera.</p></li><li><p>Sumando ecuaciones: \\(2x=6\\), luego \\(x=3\\) y \\(y=2\\).</p></li></ol>"
          },
          "challenge": {}
        },
        {
          "id": "C07.S05",
          "title": "Rectas especiales por un punto",
          "rawTitle": "[C07.S05] Rectas especiales por un punto",
          "objectives": [
            {
              "label": "Objetivos de aprendizaje",
              "html": "<ul><li><p>Construir rectas paralelas y perpendiculares por un punto dado.</p></li><li><p>Reconocer rectas especiales como verticales, horizontales y bisectrices.</p></li></ul>"
            }
          ],
          "prerequisites": [
            {
              "label": "Prerrequisitos",
              "html": "<ul><li><p>Pendientes y ecuacion punto-pendiente.</p></li></ul>"
            }
          ],
          "theory": {
            "title": "Idea minima",
            "titleText": "Idea minima",
            "tagId": "",
            "html": "<p>Si una recta tiene pendiente \\(m\\), cualquier paralela mantiene esa misma pendiente. Una perpendicular tiene pendiente \\(-\\frac{1}{m}\\), salvo el caso vertical-horizontal. Las bisectrices de los cuadrantes son \\(y=x\\) y \\(y=-x\\).</p>"
          },
          "method": {
            "title": "Como reconocer y resolver",
            "titleText": "Como reconocer y resolver",
            "tagId": "",
            "html": "<ol><li><p>Extrae la pendiente o la direccion de la recta dada.</p></li><li><p>Conserva la pendiente para una paralela o inviertela con signo para una perpendicular.</p></li><li><p>Impone el paso por el punto pedido.</p></li></ol>"
          },
          "solvedExample": {
            "title": "[EX-C07.S05-01] Perpendicular por un punto",
            "titleText": "Perpendicular por un punto",
            "tagId": "EX-C07.S05-01",
            "html": "<p>Halla la recta perpendicular a \\(2x-y+3=0\\) que pasa por \\((1,2)\\).</p><p><strong>Desarrollo.</strong> La recta dada se escribe</p><div class=\"math-display\">\\[\ny=2x+3,\n\\]</div><p>asi que su pendiente es \\(2\\). La pendiente de una perpendicular es</p><div class=\"math-display\">\\[\nm=-\\frac{1}{2}.\n\\]</div><p>Usando la forma punto-pendiente:</p><div class=\"math-display\">\\[\ny-2=-\\frac{1}{2}(x-1).\n\\]</div><p>Simplificando:</p><div class=\"math-display\">\\[\ny=-\\frac{1}{2}x+\\frac{5}{2}.\n\\]</div><p><strong>Respuesta final.</strong></p><div class=\"math-display\">\\[\ny=-\\frac{1}{2}x+\\frac{5}{2}.\n\\]</div>"
          },
          "commonError": {
            "title": "Cambiar el signo sin invertir",
            "titleText": "Cambiar el signo sin invertir",
            "tagId": "",
            "html": "<p>La pendiente de la perpendicular no es \\(-m\\), sino \\(-\\frac{1}{m}\\). Solo coincide en algunos casos concretos.</p>"
          },
          "guidedExercises": [
            {
              "tagId": "GX-C07.S05-01",
              "title": "Paralela por un punto",
              "promptHtml": "<p>Halla la recta paralela a \\(x-y=4\\) que pasa por \\((0,1)\\).</p><p><strong>Pista 1.</strong> La recta \\(x-y=4\\) tiene pendiente \\(1\\).</p>",
              "answerHtml": "<div class=\"math-display\">\\[\ny=x+1.\n\\]</div>",
              "solutionHtml": "<p>Una paralela tiene la misma pendiente \\(1\\). Como pasa por \\((0,1)\\), resulta</p><div class=\"math-display\">\\[\ny=x+1.\n\\]</div>"
            },
            {
              "tagId": "GX-C07.S05-02",
              "title": "Recta vertical",
              "promptHtml": "<p>Halla la recta paralela al eje \\(Y\\) que pasa por \\((3,-2)\\).</p>",
              "answerHtml": "<div class=\"math-display\">\\[\nx=3.\n\\]</div>",
              "solutionHtml": "<p>Las rectas paralelas al eje \\(Y\\) son verticales, luego se escriben \\(x=\\text{constante}\\). Al pasar por \\((3,-2)\\), queda \\(x=3\\).</p>"
            }
          ],
          "practice": {
            "label": "Practica autonoma graduada",
            "items": [
              {
                "tagId": "PX-C07.S05-01",
                "prompt": "Halla la recta paralela a \\(y=2x-1\\) que pasa por \\((1,0)\\)."
              },
              {
                "tagId": "PX-C07.S05-02",
                "prompt": "Halla la recta perpendicular a \\(y=-x+4\\) que pasa por \\((2,1)\\)."
              },
              {
                "tagId": "PX-C07.S05-03",
                "prompt": "Halla la recta paralela a \\(x=5\\) que pasa por \\((-2,3)\\)."
              },
              {
                "tagId": "PX-C07.S05-04",
                "prompt": "Halla la recta perpendicular a \\(x=1\\) que pasa por \\((0,4)\\)."
              },
              {
                "tagId": "PX-C07.S05-05",
                "prompt": "Escribe la bisectriz del primer y tercer cuadrantes."
              },
              {
                "tagId": "PX-C07.S05-06",
                "prompt": "Escribe la bisectriz del segundo y cuarto cuadrantes."
              }
            ],
            "answersHtml": "<ol><li><p>\\(y=2x-2\\)</p></li><li><p>\\(y=x-1\\)</p></li><li><p>\\(x=-2\\)</p></li><li><p>\\(y=4\\)</p></li><li><p>\\(y=x\\)</p></li><li><p>\\(y=-x\\)</p></li></ol>",
            "solutionsHtml": "<ol><li><p>Mantiene la pendiente \\(2\\) y pasa por \\((1,0)\\), luego \\(y=2x-2\\).</p></li><li><p>La perpendicular a pendiente \\(-1\\) tiene pendiente \\(1\\). Al pasar por \\((2,1)\\), queda \\(y=x-1\\).</p></li><li><p>Toda paralela a \\(x=5\\) es vertical.</p></li><li><p>La perpendicular a una vertical es horizontal.</p></li><li><p>Es la recta \\(y=x\\).</p></li><li><p>Es la recta \\(y=-x\\).</p></li></ol>"
          },
          "challenge": {}
        },
        {
          "id": "C07.S06",
          "title": "Distancias y angulos entre rectas",
          "rawTitle": "[C07.S06] Distancias y angulos entre rectas",
          "objectives": [
            {
              "label": "Objetivos de aprendizaje",
              "html": "<ul><li><p>Calcular distancias entre puntos y rectas o entre rectas paralelas.</p></li><li><p>Hallar el angulo entre dos rectas.</p></li></ul>"
            }
          ],
          "prerequisites": [
            {
              "label": "Prerrequisitos",
              "html": "<ul><li><p>Producto escalar, pendiente y valor absoluto.</p></li></ul>"
            }
          ],
          "theory": {
            "title": "Idea minima",
            "titleText": "Idea minima",
            "tagId": "",
            "html": "<p>La distancia del punto \\(P(x_0,y_0)\\) a la recta \\(Ax+By+C=0\\) es</p><div class=\"math-display\">\\[\nd=\\frac{|Ax_0+By_0+C|}{\\sqrt{A^2+B^2}}.\n\\]</div><p>Si dos rectas paralelas tienen ecuaciones \\(Ax+By+C_1=0\\) y \\(Ax+By+C_2=0\\), la distancia entre ellas es</p><div class=\"math-display\">\\[\nd=\\frac{|C_2-C_1|}{\\sqrt{A^2+B^2}}.\n\\]</div>"
          },
          "method": {
            "title": "Como reconocer y resolver",
            "titleText": "Como reconocer y resolver",
            "tagId": "",
            "html": "<ol><li><p>Lleva las rectas a forma general.</p></li><li><p>Si son paralelas, usa la formula directa con los terminos independientes.</p></li><li><p>Si piden un angulo, trabaja con pendientes o vectores directores.</p></li></ol>"
          },
          "solvedExample": {
            "title": "[EX-C07.S06-01] Distancia entre paralelas",
            "titleText": "Distancia entre paralelas",
            "tagId": "EX-C07.S06-01",
            "html": "<p>Calcula la distancia entre las rectas</p><div class=\"math-display\">\\[\nr:\\ x+2y-3=0,\n\\qquad\ns:\\ x+2y+6=0.\n\\]</div><p><strong>Desarrollo.</strong> Tienen los mismos coeficientes en \\(x\\) e \\(y\\), luego son paralelas. La distancia vale</p><div class=\"math-display\">\\[\nd=\\frac{|6-(-3)|}{\\sqrt{1^2+2^2}}=\\frac{9}{\\sqrt{5}}=\\frac{9\\sqrt{5}}{5}.\n\\]</div><p><strong>Respuesta final.</strong></p><div class=\"math-display\">\\[\nd=\\frac{9\\sqrt{5}}{5}.\n\\]</div>"
          },
          "commonError": {
            "title": "Olvidar el valor absoluto",
            "titleText": "Olvidar el valor absoluto",
            "tagId": "",
            "html": "<p>La distancia nunca puede salir negativa. Si aparece un signo menos, hay que revisar la formula o aplicar el valor absoluto que falta.</p>"
          },
          "guidedExercises": [
            {
              "tagId": "GX-C07.S06-01",
              "title": "Angulo con el eje",
              "promptHtml": "<p>Halla el angulo entre \\(y=x\\) y \\(y=0\\).</p>",
              "answerHtml": "<div class=\"math-display\">\\[\n\\frac{\\pi}{4}.\n\\]</div>",
              "solutionHtml": "<p>La recta \\(y=0\\) coincide con el eje \\(X\\) y \\(y=x\\) forma un angulo de \\(45^\\circ\\) con el. Por tanto,</p><div class=\"math-display\">\\[\n\\theta=\\frac{\\pi}{4}.\n\\]</div>"
            },
            {
              "tagId": "GX-C07.S06-02",
              "title": "Distancia punto-recta",
              "promptHtml": "<p>Calcula la distancia del punto \\((1,2)\\) a la recta \\(x+y-1=0\\).</p>",
              "answerHtml": "<div class=\"math-display\">\\[\n\\sqrt{2}.\n\\]</div>",
              "solutionHtml": "<div class=\"math-display\">\\[\nd=\\frac{|1+2-1|}{\\sqrt{1^2+1^2}}=\\frac{2}{\\sqrt{2}}=\\sqrt{2}.\n\\]</div>"
            }
          ],
          "practice": {
            "label": "Practica autonoma graduada",
            "items": [
              {
                "tagId": "PX-C07.S06-01",
                "prompt": "Calcula la distancia entre \\(x-y+2=0\\) y \\(x-y-4=0\\)."
              },
              {
                "tagId": "PX-C07.S06-02",
                "prompt": "Calcula la distancia del origen a la recta \\(3x+4y-5=0\\)."
              },
              {
                "tagId": "PX-C07.S06-03",
                "prompt": "Halla el angulo entre \\(y=2x\\) y \\(y=-\\frac{1}{2}x\\)."
              },
              {
                "tagId": "PX-C07.S06-04",
                "prompt": "Halla el angulo entre \\(x=0\\) y \\(y=0\\)."
              },
              {
                "tagId": "PX-C07.S06-05",
                "prompt": "Calcula la distancia entre \\(y=3\\) y \\(y=-1\\)."
              },
              {
                "tagId": "PX-C07.S06-06",
                "prompt": "Calcula la distancia del punto \\((2,-1)\\) a la recta \\(x=5\\)."
              }
            ],
            "answersHtml": "<ol><li><p>\\(3\\sqrt{2}\\)</p></li><li><p>\\(1\\)</p></li><li><p>\\(\\frac{\\pi}{2}\\)</p></li><li><p>\\(\\frac{\\pi}{2}\\)</p></li><li><p>\\(4\\)</p></li><li><p>\\(3\\)</p></li></ol>",
            "solutionsHtml": "<ol><li><div class=\"math-display\">\\[\n  d=\\frac{|(-4)-2|}{\\sqrt{1^2+(-1)^2}}=\\frac{6}{\\sqrt{2}}=3\\sqrt{2}.\n  \\]</div></li><li><div class=\"math-display\">\\[\n  d=\\frac{|0+0-5|}{\\sqrt{3^2+4^2}}=\\frac{5}{5}=1.\n  \\]</div></li><li><p>Las pendientes cumplen \\(2\\cdot \\left(-\\frac{1}{2}\\right)=-1\\), luego son perpendiculares.</p></li><li><p>Una recta es vertical y la otra horizontal.</p></li><li><p>La distancia vertical entre ambas es \\(4\\).</p></li><li><p>La recta \\(x=5\\) queda a \\(3\\) unidades horizontales del punto dado.</p></li></ol>"
          },
          "challenge": {}
        },
        {
          "id": "C07.S07",
          "title": "Poligonos y areas con coordenadas",
          "rawTitle": "[C07.S07] Poligonos y areas con coordenadas",
          "objectives": [
            {
              "label": "Objetivos de aprendizaje",
              "html": "<ul><li><p>Hallar vertices a partir de intersecciones de rectas.</p></li><li><p>Calcular areas de triangulos y paralelogramos en coordenadas.</p></li></ul>"
            }
          ],
          "prerequisites": [
            {
              "label": "Prerrequisitos",
              "html": "<ul><li><p>Posicion relativa de rectas y formulas de area basicas.</p></li></ul>"
            }
          ],
          "theory": {
            "title": "Idea minima",
            "titleText": "Idea minima",
            "tagId": "",
            "html": "<p>Muchas figuras en el plano se construyen cortando rectas dos a dos. Una vez hallados los vertices, el area puede obtenerse con base y altura o con descomposiciones sencillas.</p>"
          },
          "method": {
            "title": "Como reconocer y resolver",
            "titleText": "Como reconocer y resolver",
            "tagId": "",
            "html": "<ol><li><p>Busca primero los vertices resolviendo intersecciones.</p></li><li><p>Dibuja un esquema para elegir base y altura con comodidad.</p></li><li><p>Comprueba que las rectas elegidas realmente delimitan la figura.</p></li></ol>"
          },
          "solvedExample": {
            "title": "[EX-C07.S07-01] Triangulo definido por rectas",
            "titleText": "Triangulo definido por rectas",
            "tagId": "EX-C07.S07-01",
            "html": "<p>Las rectas</p><div class=\"math-display\">\\[\nx=1,\n\\qquad\ny=2,\n\\qquad\nx+y=6\n\\]</div><p>delimitan un triangulo. Halla sus vertices y su area.</p><p><strong>Desarrollo.</strong> Las intersecciones son:</p><div class=\"math-display\">\\[\nx=1,\\ y=2 \\Longrightarrow A(1,2),\n\\]</div><div class=\"math-display\">\\[\nx=1,\\ x+y=6 \\Longrightarrow B(1,5),\n\\]</div><div class=\"math-display\">\\[\ny=2,\\ x+y=6 \\Longrightarrow C(4,2).\n\\]</div><p>La base \\(AC\\) mide \\(3\\) y la altura hasta \\(B\\) tambien mide \\(3\\), asi que</p><div class=\"math-display\">\\[\n\\text{Area}=\\frac{3\\cdot 3}{2}=\\frac{9}{2}.\n\\]</div><div class=\"centered-block\"><div class=\"figure-fallback\">Esquema disponible en el cuaderno PDF. Refuerza esta idea con el laboratorio interactivo.</div></div><p><strong>Respuesta final.</strong></p><div class=\"math-display\">\\[\nA(1,2),\\quad B(1,5),\\quad C(4,2),\n\\qquad\n\\text{Area}=\\frac{9}{2}.\n\\]</div>"
          },
          "commonError": {
            "title": "Calcular un area antes de tener los vertices",
            "titleText": "Calcular un area antes de tener los vertices",
            "tagId": "",
            "html": "<p>Si los vertices no estan bien localizados, la base o la altura pueden elegirse mal. En estas figuras compuestas conviene resolver primero todas las intersecciones necesarias.</p>"
          },
          "guidedExercises": [
            {
              "tagId": "GX-C07.S07-01",
              "title": "Triangulo con los ejes",
              "promptHtml": "<p>Halla los vertices y el area del triangulo delimitado por \\(x=0\\), \\(y=0\\) y \\(x+y=4\\).</p>",
              "answerHtml": "<p>Vertices \\((0,0)\\), \\((4,0)\\), \\((0,4)\\). Area \\(8\\).</p>",
              "solutionHtml": "<p>Los vertices salen de las intersecciones con los ejes:</p><div class=\"math-display\">\\[\n(0,0),\\quad (4,0),\\quad (0,4).\n\\]</div><p>El area es</p><div class=\"math-display\">\\[\n\\frac{4\\cdot 4}{2}=8.\n\\]</div>"
            },
            {
              "tagId": "GX-C07.S07-02",
              "title": "Paralelogramo por coordenadas",
              "promptHtml": "<p>Sean \\(A(0,0)\\), \\(B(3,0)\\) y \\(D(1,2)\\). Halla \\(C\\) y el area del paralelogramo \\(ABCD\\).</p>",
              "answerHtml": "<div class=\"math-display\">\\[\nC(4,2),\n\\qquad\n\\text{Area}=6.\n\\]</div>",
              "solutionHtml": "<p>En un paralelogramo, \\(C=B+D-A=(4,2)\\). La base \\(AB\\) mide \\(3\\) y la altura es \\(2\\), asi que el area vale \\(6\\).</p>"
            }
          ],
          "practice": {
            "label": "Practica autonoma graduada",
            "items": [
              {
                "tagId": "PX-C07.S07-01",
                "prompt": "Halla el area del triangulo de vertices \\((0,0)\\), \\((4,0)\\) y \\((0,3)\\)."
              },
              {
                "tagId": "PX-C07.S07-02",
                "prompt": "Halla los vertices y el area del triangulo delimitado por \\(x=2\\), \\(y=1\\) y \\(x+y=6\\)."
              },
              {
                "tagId": "PX-C07.S07-03",
                "prompt": "Sean \\(A(1,1)\\), \\(B(4,1)\\) y \\(D(2,3)\\). Halla \\(C\\) y el area del paralelogramo \\(ABCD\\)."
              },
              {
                "tagId": "PX-C07.S07-04",
                "prompt": "Halla los vertices y el area del triangulo delimitado por \\(x=0\\), \\(y=2\\) y \\(y=x+5\\)."
              },
              {
                "tagId": "PX-C07.S07-05",
                "prompt": "Halla el area del triangulo de vertices \\((1,1)\\), \\((5,1)\\) y \\((3,4)\\)."
              },
              {
                "tagId": "PX-C07.S07-06",
                "prompt": "Halla el area del rectangulo delimitado por \\(x=0\\), \\(x=4\\), \\(y=-1\\) y \\(y=2\\)."
              }
            ],
            "answersHtml": "<ol><li><p>\\(6\\)</p></li><li><p>Vertices \\((2,1)\\), \\((2,4)\\), \\((5,1)\\). Area \\(\\frac{9}{2}\\)</p></li><li><p>\\(C(5,3)\\). Area \\(6\\)</p></li><li><p>Vertices \\((0,2)\\), \\((0,5)\\), \\((-3,2)\\). Area \\(\\frac{9}{2}\\)</p></li><li><p>\\(6\\)</p></li><li><p>\\(12\\)</p></li></ol>",
            "solutionsHtml": "<ol><li><p>Base \\(4\\) y altura \\(3\\): area \\(6\\).</p></li><li><p>Las intersecciones son \\((2,1)\\), \\((2,4)\\) y \\((5,1)\\). Base \\(3\\), altura \\(3\\).</p></li><li><p>\\(C=B+D-A=(5,3)\\). Base \\(3\\), altura \\(2\\), area \\(6\\).</p></li><li><p>La recta \\(y=x+5\\) corta a \\(x=0\\) en \\((0,5)\\) y a \\(y=2\\) en \\((-3,2)\\).</p></li><li><p>Base \\(4\\) y altura \\(3\\): area \\(6\\).</p></li><li><p>Lados \\(4\\) y \\(3\\): area \\(12\\).</p></li></ol>"
          },
          "challenge": {}
        },
        {
          "id": "C07.S08",
          "title": "Medianas, alturas y mediatrices",
          "rawTitle": "[C07.S08] Medianas, alturas y mediatrices",
          "objectives": [
            {
              "label": "Objetivos de aprendizaje",
              "html": "<ul><li><p>Construir medianas, alturas y mediatrices en coordenadas.</p></li><li><p>Traducir propiedades geometricas a ecuaciones de rectas.</p></li></ul>"
            }
          ],
          "prerequisites": [
            {
              "label": "Prerrequisitos",
              "html": "<ul><li><p>Puntos medios, pendientes y rectas perpendiculares.</p></li></ul>"
            }
          ],
          "theory": {
            "title": "Idea minima",
            "titleText": "Idea minima",
            "tagId": "",
            "html": "<p>La mediana une un vertice con el punto medio del lado opuesto. La altura pasa por un vertice y es perpendicular al lado opuesto. La mediatriz es perpendicular a un segmento y pasa por su punto medio.</p>"
          },
          "method": {
            "title": "Como reconocer y resolver",
            "titleText": "Como reconocer y resolver",
            "tagId": "",
            "html": "<ol><li><p>Si necesitas una mediana o mediatriz, empieza por hallar un punto medio.</p></li><li><p>Para una altura, calcula antes la pendiente del lado correspondiente.</p></li><li><p>Escribe despues la recta con la forma punto-pendiente.</p></li></ol>"
          },
          "solvedExample": {
            "title": "[EX-C07.S08-01] Tres rectas notables de un triangulo",
            "titleText": "Tres rectas notables de un triangulo",
            "tagId": "EX-C07.S08-01",
            "html": "<p>En el triangulo \\(A(0,0)\\), \\(B(6,0)\\), \\(C(2,4)\\), halla:</p><ul><li><p>la mediana trazada desde \\(C\\);</p></li><li><p>la altura trazada desde \\(C\\);</p></li><li><p>la mediatriz del lado \\(AB\\).</p></li></ul><p><strong>Desarrollo.</strong> El punto medio de \\(AB\\) es</p><div class=\"math-display\">\\[\nM\\left(\\frac{0+6}{2},\\frac{0+0}{2}\\right)=(3,0).\n\\]</div><p>La mediana desde \\(C\\) pasa por \\(C(2,4)\\) y \\(M(3,0)\\). Su pendiente es</p><div class=\"math-display\">\\[\n\\frac{0-4}{3-2}=-4,\n\\]</div><p>asi que</p><div class=\"math-display\">\\[\ny-4=-4(x-2)\n\\quad \\Longrightarrow \\quad\ny=-4x+12.\n\\]</div><p>Como \\(AB\\) es horizontal, la altura desde \\(C\\) es vertical:</p><div class=\"math-display\">\\[\nx=2.\n\\]</div><p>La mediatriz de \\(AB\\) es perpendicular a un segmento horizontal y pasa por \\(M\\), luego</p><div class=\"math-display\">\\[\nx=3.\n\\]</div><p><strong>Respuesta final.</strong></p><div class=\"math-display\">\\[\n\\text{Mediana}: y=-4x+12,\n\\qquad\n\\text{Altura}: x=2,\n\\qquad\n\\text{Mediatriz de } AB: x=3.\n\\]</div>"
          },
          "commonError": {
            "title": "Usar el vertice en vez del punto medio",
            "titleText": "Usar el vertice en vez del punto medio",
            "tagId": "",
            "html": "<p>La mediatriz no pasa por un vertice del segmento, sino por su punto medio. Si no se calcula ese punto primero, la recta sale desplazada.</p>"
          },
          "guidedExercises": [
            {
              "tagId": "GX-C07.S08-01",
              "title": "Mediatriz horizontal",
              "promptHtml": "<p>Halla la mediatriz del segmento con extremos \\(A(0,0)\\) y \\(B(4,0)\\).</p>",
              "answerHtml": "<div class=\"math-display\">\\[\nx=2.\n\\]</div>",
              "solutionHtml": "<p>El punto medio es \\((2,0)\\) y el segmento es horizontal, asi que su mediatriz es vertical:</p><div class=\"math-display\">\\[\nx=2.\n\\]</div>"
            },
            {
              "tagId": "GX-C07.S08-02",
              "title": "Altura a una horizontal",
              "promptHtml": "<p>Halla la altura trazada desde \\(C(1,3)\\) al lado \\(AB\\) de ecuacion \\(y=1\\).</p>",
              "answerHtml": "<div class=\"math-display\">\\[\nx=1.\n\\]</div>",
              "solutionHtml": "<p>Como \\(AB\\) es horizontal, la altura es vertical y pasa por \\(C\\), luego \\(x=1\\).</p>"
            }
          ],
          "practice": {
            "label": "Practica autonoma graduada",
            "items": [
              {
                "tagId": "PX-C07.S08-01",
                "prompt": "Halla el punto medio del segmento con extremos \\(A(-1,2)\\) y \\(B(5,4)\\)."
              },
              {
                "tagId": "PX-C07.S08-02",
                "prompt": "Halla la mediatriz del segmento con extremos \\(A(2,1)\\) y \\(B(2,5)\\)."
              },
              {
                "tagId": "PX-C07.S08-03",
                "prompt": "Halla la mediana trazada desde \\(A(0,0)\\) en el triangulo \\(A(0,0)\\), \\(B(4,0)\\), \\(C(0,2)\\)."
              },
              {
                "tagId": "PX-C07.S08-04",
                "prompt": "Halla la altura trazada desde \\(A(0,0)\\) al lado \\(BC\\) si \\(B(2,0)\\) y \\(C(2,4)\\)."
              },
              {
                "tagId": "PX-C07.S08-05",
                "prompt": "Halla la mediatriz del segmento con extremos \\(A(-2,0)\\) y \\(B(2,0)\\)."
              },
              {
                "tagId": "PX-C07.S08-06",
                "prompt": "Halla la mediana trazada desde \\(C(0,6)\\) en el triangulo \\(A(0,0)\\), \\(B(6,0)\\), \\(C(0,6)\\)."
              }
            ],
            "answersHtml": "<ol><li><p>\\((2,3)\\)</p></li><li><p>\\(y=3\\)</p></li><li><p>\\(y=\\frac{x}{2}\\)</p></li><li><p>\\(y=0\\)</p></li><li><p>\\(x=0\\)</p></li><li><p>\\(y=-2x+6\\)</p></li></ol>",
            "solutionsHtml": "<ol><li><div class=\"math-display\">\\[\n  \\left(\\frac{-1+5}{2},\\frac{2+4}{2}\\right)=(2,3).\n  \\]</div></li><li><p>El segmento es vertical y su punto medio es \\((2,3)\\), luego la mediatriz es horizontal: \\(y=3\\).</p></li><li><p>El punto medio de \\(BC\\) es \\((2,1)\\). La recta por \\((0,0)\\) y \\((2,1)\\) es \\(y=\\frac{x}{2}\\).</p></li><li><p>El lado \\(BC\\) es vertical, asi que la altura es horizontal: \\(y=0\\).</p></li><li><p>El punto medio es el origen y el segmento es horizontal.</p></li><li><p>El punto medio de \\(AB\\) es \\((3,0)\\). La recta por \\((0,6)\\) y \\((3,0)\\) es \\(y=-2x+6\\).</p></li></ol>"
          },
          "challenge": {}
        },
        {
          "id": "C07.S09",
          "title": "Bisectrices, ortocentro y lugares geometricos",
          "rawTitle": "[C07.S09] Bisectrices, ortocentro y lugares geometricos",
          "objectives": [
            {
              "label": "Objetivos de aprendizaje",
              "html": "<ul><li><p>Hallar bisectrices y ortocentros en casos sencillos.</p></li><li><p>Interpretar lugares geometricos como ecuaciones de rectas.</p></li></ul>"
            }
          ],
          "prerequisites": [
            {
              "label": "Prerrequisitos",
              "html": "<ul><li><p>Alturas, mediatrices y ecuaciones de rectas.</p></li></ul>"
            }
          ],
          "theory": {
            "title": "Idea minima",
            "titleText": "Idea minima",
            "tagId": "",
            "html": "<p>Las bisectrices dividen un angulo en dos partes iguales. El ortocentro es el punto de corte de las alturas de un triangulo. Un lugar geometrico se describe mediante una condicion, por ejemplo ``todos los puntos equidistantes de dos puntos fijos''.</p>"
          },
          "method": {
            "title": "Como reconocer y resolver",
            "titleText": "Como reconocer y resolver",
            "tagId": "",
            "html": "<ol><li><p>Si el triangulo es rectangulo, el ortocentro coincide con el vertice del angulo recto.</p></li><li><p>Para puntos equidistantes de dos puntos, piensa en la mediatriz del segmento que los une.</p></li><li><p>En bisectrices de rectas sencillas, usa simetria y angulos de referencia conocidos.</p></li></ol>"
          },
          "solvedExample": {
            "title": "[EX-C07.S09-01] Ortocentro de un triangulo rectangulo",
            "titleText": "Ortocentro de un triangulo rectangulo",
            "tagId": "EX-C07.S09-01",
            "html": "<p>Halla el ortocentro del triangulo \\(A(0,0)\\), \\(B(4,0)\\), \\(C(0,3)\\).</p><p><strong>Desarrollo.</strong> Los lados \\(AB\\) y \\(AC\\) son perpendiculares, asi que el triangulo es rectangulo en \\(A\\). En un triangulo rectangulo, dos alturas coinciden con los propios catetos, por lo que su punto de corte es el vertice del angulo recto.</p><p><strong>Respuesta final.</strong></p><div class=\"math-display\">\\[\nH=(0,0).\n\\]</div>"
          },
          "commonError": {
            "title": "Buscar siempre tres alturas completas",
            "titleText": "Buscar siempre tres alturas completas",
            "tagId": "",
            "html": "<p>En un triangulo rectangulo no hace falta desarrollar todas las alturas: dos de ellas ya estan dibujadas en los propios lados.</p>"
          },
          "guidedExercises": [
            {
              "tagId": "GX-C07.S09-01",
              "title": "Bisectrices de los ejes",
              "promptHtml": "<p>Halla las bisectrices de las rectas \\(x=0\\) e \\(y=0\\).</p>",
              "answerHtml": "<div class=\"math-display\">\\[\ny=x\n\\qquad \\text{y} \\qquad\ny=-x.\n\\]</div>",
              "solutionHtml": "<p>Los ejes forman cuatro angulos rectos. Sus bisectrices son las diagonales del sistema de ejes:</p><div class=\"math-display\">\\[\ny=x\n\\qquad \\text{y} \\qquad\ny=-x.\n\\]</div>"
            },
            {
              "tagId": "GX-C07.S09-02",
              "title": "Lugar geometrico de equidistancia",
              "promptHtml": "<p>Halla el lugar geometrico de los puntos equidistantes de \\(A(-2,0)\\) y \\(B(2,0)\\).</p>",
              "answerHtml": "<div class=\"math-display\">\\[\nx=0.\n\\]</div>",
              "solutionHtml": "<p>El lugar geometrico es la mediatriz de \\(AB\\). Como el segmento es horizontal y su punto medio es el origen, la mediatriz es</p><div class=\"math-display\">\\[\nx=0.\n\\]</div>"
            }
          ],
          "practice": {
            "label": "Practica autonoma graduada",
            "items": [
              {
                "tagId": "PX-C07.S09-01",
                "prompt": "Halla el ortocentro del triangulo \\(A(0,0)\\), \\(B(5,0)\\), \\(C(0,2)\\)."
              },
              {
                "tagId": "PX-C07.S09-02",
                "prompt": "Halla las bisectrices de las rectas \\(y=x\\) e \\(y=-x\\)."
              },
              {
                "tagId": "PX-C07.S09-03",
                "prompt": "Halla el lugar geometrico de los puntos equidistantes de \\(A(1,1)\\) y \\(B(5,1)\\)."
              },
              {
                "tagId": "PX-C07.S09-04",
                "prompt": "Halla el punto de la recta \\(y=2\\) que esta a la misma distancia de \\(A(0,0)\\) y \\(B(4,0)\\)."
              },
              {
                "tagId": "PX-C07.S09-05",
                "prompt": "Halla el ortocentro del triangulo \\(A(1,1)\\), \\(B(5,1)\\), \\(C(3,3)\\)."
              },
              {
                "tagId": "PX-C07.S09-06",
                "prompt": "Halla el lugar geometrico de los puntos equidistantes de los ejes coordenados en los cuadrantes I y III."
              }
            ],
            "answersHtml": "<ol><li><p>\\((0,0)\\)</p></li><li><p>\\(x=0\\) e \\(y=0\\)</p></li><li><p>\\(x=3\\)</p></li><li><p>\\((2,2)\\)</p></li><li><p>\\((3,3)\\)</p></li><li><p>\\(y=x\\)</p></li></ol>",
            "solutionsHtml": "<ol><li><p>Es rectangulo en \\(A\\), luego \\(H=A=(0,0)\\).</p></li><li><p>Las rectas dadas son perpendiculares y simetricas respecto de los ejes, que actuan como bisectrices.</p></li><li><p>El segmento \\(AB\\) es horizontal y su punto medio es \\((3,1)\\), asi que la mediatriz es \\(x=3\\).</p></li><li><p>Los puntos equidistantes de \\(A\\) y \\(B\\) cumplen \\(x=2\\). Con \\(y=2\\), sale \\((2,2)\\).</p></li><li><p>Los lados \\(AC\\) y \\(BC\\) son perpendiculares, luego el triangulo es rectangulo en \\(C\\) y el ortocentro es \\(C=(3,3)\\).</p></li><li><p>La distancia a ambos ejes coincide cuando \\(|x|=|y|\\). En los cuadrantes I y III eso da \\(y=x\\).</p></li></ol>"
          },
          "challenge": {}
        },
        {
          "id": "C07.S10",
          "title": "Condiciones geometricas combinadas",
          "rawTitle": "[C07.S10] Condiciones geometricas combinadas",
          "objectives": [
            {
              "label": "Objetivos de aprendizaje",
              "html": "<ul><li><p>Resolver problemas que mezclan varias condiciones geometricas.</p></li><li><p>Detectar cuando un sistema de condiciones no es compatible.</p></li></ul>"
            }
          ],
          "prerequisites": [
            {
              "label": "Prerrequisitos",
              "html": "<ul><li><p>Mediatrices, areas y lugares geometricos.</p></li></ul>"
            }
          ],
          "theory": {
            "title": "Idea minima",
            "titleText": "Idea minima",
            "tagId": "",
            "html": "<p>Los problemas combinados suelen encadenar lugares geometricos: ``estar a igual distancia'', ``pertenecer a una recta'', ``tener una altura fija'' o ``ser centro de una figura''. La solucion aparece en la interseccion de esas condiciones, si existe.</p>"
          },
          "method": {
            "title": "Como reconocer y resolver",
            "titleText": "Como reconocer y resolver",
            "tagId": "",
            "html": "<ol><li><p>Traduce cada condicion a una recta, una distancia o un area.</p></li><li><p>Busca la interseccion de todas las condiciones.</p></li><li><p>Comprueba al final si esa interseccion existe y tiene sentido geometricamente.</p></li></ol>"
          },
          "solvedExample": {
            "title": "[EX-C07.S10-01] Triangulo isosceles con altura fijada",
            "titleText": "Triangulo isosceles con altura fijada",
            "tagId": "EX-C07.S10-01",
            "html": "<p>La base de un triangulo isosceles es el segmento con extremos \\(A(-2,0)\\) y \\(B(2,0)\\). El vertice \\(C\\) esta sobre la recta \\(y=3\\). Halla \\(C\\) y el area del triangulo.</p><p><strong>Desarrollo.</strong> En un triangulo isosceles con base \\(AB\\), el vertice \\(C\\) debe estar en la mediatriz de \\(AB\\). Como \\(AB\\) es horizontal y su punto medio es el origen, la mediatriz es</p><div class=\"math-display\">\\[\nx=0.\n\\]</div><p>Ademas \\(C\\) esta en \\(y=3\\), asi que</p><div class=\"math-display\">\\[\nC=(0,3).\n\\]</div><p>La base mide \\(4\\) y la altura es \\(3\\), luego</p><div class=\"math-display\">\\[\n\\text{Area}=\\frac{4\\cdot 3}{2}=6.\n\\]</div><p><strong>Respuesta final.</strong></p><div class=\"math-display\">\\[\nC(0,3),\n\\qquad\n\\text{Area}=6.\n\\]</div>"
          },
          "commonError": {
            "title": "Olvidar una de las condiciones",
            "titleText": "Olvidar una de las condiciones",
            "tagId": "",
            "html": "<p>Si solo impones que \\(C\\) este en \\(y=3\\), hay infinitos candidatos. El rasgo isosceles aporta otra condicion imprescindible: pertenecer a la mediatriz de la base.</p>"
          },
          "guidedExercises": [
            {
              "tagId": "GX-C07.S10-01",
              "title": "Centro por simetria",
              "promptHtml": "<p>En un hexagono regular, dos vertices opuestos son \\(A(-4,0)\\) y \\(D(4,0)\\). Halla el centro.</p>",
              "answerHtml": "<div class=\"math-display\">\\[\nO(0,0).\n\\]</div>",
              "solutionHtml": "<p>El centro de un poligono regular es el punto medio de cualquier pareja de vertices opuestos. Luego</p><div class=\"math-display\">\\[\nO\\left(\\frac{-4+4}{2},0\\right)=(0,0).\n\\]</div>"
            },
            {
              "tagId": "GX-C07.S10-02",
              "title": "Equidistancia sobre una recta",
              "promptHtml": "<p>Halla el punto del eje \\(X\\) equidistante de \\(A(-2,2)\\) y \\(B(2,2)\\).</p>",
              "answerHtml": "<div class=\"math-display\">\\[\n(0,0).\n\\]</div>",
              "solutionHtml": "<p>Los puntos equidistantes de \\(A\\) y \\(B\\) estan en la mediatriz del segmento \\(AB\\), que es \\(x=0\\). Al imponer ademas que el punto este en el eje \\(X\\), queda \\((0,0)\\).</p>"
            }
          ],
          "practice": {
            "label": "Practica autonoma graduada",
            "items": [
              {
                "tagId": "PX-C07.S10-01",
                "prompt": "La base de un triangulo isosceles es \\(A(0,0)\\), \\(B(4,0)\\) y su vertice esta en la recta \\(x=2\\) y tiene ordenada \\(3\\). Halla el vertice y el area."
              },
              {
                "tagId": "PX-C07.S10-02",
                "prompt": "Halla el punto de la recta \\(y=1\\) equidistante de \\(A(0,0)\\) y \\(B(4,0)\\)."
              },
              {
                "tagId": "PX-C07.S10-03",
                "prompt": "Halla el centro del cuadrado de vertices \\((-2,-2)\\), \\((2,-2)\\), \\((2,2)\\), \\((-2,2)\\)."
              },
              {
                "tagId": "PX-C07.S10-04",
                "prompt": "La base de un triangulo isosceles es \\(A(-3,0)\\), \\(B(3,0)\\) y su altura es \\(4\\). Halla el area."
              },
              {
                "tagId": "PX-C07.S10-05",
                "prompt": "En un hexagono regular de centro \\(O(0,0)\\), un vertice es \\(A(2,0)\\). Halla el vertice opuesto."
              },
              {
                "tagId": "PX-C07.S10-06",
                "prompt": "Decide si existe un punto de la recta \\(x=1\\) equidistante de \\(A(0,0)\\) y \\(B(4,0)\\)."
              }
            ],
            "answersHtml": "<ol><li><p>\\(C(2,3)\\). Area \\(6\\)</p></li><li><p>\\((2,1)\\)</p></li><li><p>\\((0,0)\\)</p></li><li><p>\\(12\\)</p></li><li><p>\\((-2,0)\\)</p></li><li><p>No existe</p></li></ol>",
            "solutionsHtml": "<ol><li><p>Las condiciones ya fijan \\(C=(2,3)\\). La base mide \\(4\\) y la altura \\(3\\), asi que el area es \\(6\\).</p></li><li><p>El lugar equidistante de \\(A\\) y \\(B\\) es \\(x=2\\). Con \\(y=1\\), sale \\((2,1)\\).</p></li><li><p>El centro es el punto medio de cualquier diagonal del cuadrado.</p></li><li><p>Base \\(6\\) y altura \\(4\\): area \\(12\\).</p></li><li><p>El vertice opuesto al punto \\((2,0)\\) respecto del centro es \\((-2,0)\\).</p></li><li><p>Los puntos equidistantes de \\(A\\) y \\(B\\) cumplen \\(x=2\\). Como eso no corta a la recta \\(x=1\\), no existe solucion.</p></li></ol>"
          },
          "challenge": {}
        }
      ]
    },
    {
      "id": "C08",
      "slug": "08_limites_continuidad",
      "title": "Limites, continuidad y asintotas",
      "summaryHtml": "<p>Este capitulo desarrolla las secciones <code>C08.S01-C08.S11</code> de la matriz de cobertura a partir de <code>sources/Relacion tema 8 (1).pdf</code>. El hilo conductor es pasar de la lectura del comportamiento de una funcion a su control algebraico mediante dominios, limites, continuidad y asintotas.</p>",
      "studyRouteHtml": "",
      "sectionCount": 11,
      "sections": [
        {
          "id": "C08.S01",
          "title": "Dominio de funciones",
          "rawTitle": "[C08.S01] Dominio de funciones",
          "objectives": [
            {
              "label": "Objetivos de aprendizaje",
              "html": "<ul><li><p>Imponer restricciones de existencia en funciones racionales, radicales y logaritmicas.</p></li><li><p>Escribir el dominio con intervalos y puntos excluidos.</p></li></ul>"
            }
          ],
          "prerequisites": [
            {
              "label": "Prerrequisitos",
              "html": "<ul><li><p>Inecuaciones basicas e interpretacion de intervalos.</p></li></ul>"
            }
          ],
          "theory": {
            "title": "Idea minima",
            "titleText": "Idea minima",
            "tagId": "",
            "html": "<p>El dominio es el conjunto de valores de \\(x\\) para los que la expresion tiene sentido. En este bloque conviene recordar tres reglas basicas:</p><div class=\"math-display\">\\[\n\\frac{1}{g(x)} \\text{ exige } g(x)\\neq 0,\n\\qquad\n\\sqrt{h(x)} \\text{ exige } h(x)\\geq 0,\n\\qquad\n\\ln(k(x)) \\text{ exige } k(x)>0.\n\\]</div>"
          },
          "method": {
            "title": "Como reconocer y resolver",
            "titleText": "Como reconocer y resolver",
            "tagId": "",
            "html": "<ol><li><p>Localiza denominadores, radicales de indice par y logaritmos.</p></li><li><p>Escribe una condicion de existencia por cada restriccion.</p></li><li><p>Resuelve el sistema de condiciones y expresa el dominio con intervalos.</p></li></ol>"
          },
          "solvedExample": {
            "title": "[EX-C08.S01-01] Dominio con radical y denominador",
            "titleText": "Dominio con radical y denominador",
            "tagId": "EX-C08.S01-01",
            "html": "<p>Halla el dominio de</p><div class=\"math-display\">\\[\nf(x)=\\frac{\\sqrt{x+1}}{x-2}.\n\\]</div><p><strong>Desarrollo.</strong> La raiz cuadrada exige</p><div class=\"math-display\">\\[\nx+1\\geq 0 \\Longrightarrow x\\geq -1.\n\\]</div><p>Ademas, el denominador no puede anularse:</p><div class=\"math-display\">\\[\nx-2\\neq 0 \\Longrightarrow x\\neq 2.\n\\]</div><p>Por tanto, hay que quedarse con los valores \\(x\\geq -1\\) excluyendo \\(x=2\\).</p><p><strong>Respuesta final.</strong></p><div class=\"math-display\">\\[\nD_f=[-1,\\infty)\\setminus\\{2\\}=[-1,2)\\cup(2,\\infty).\n\\]</div>"
          },
          "commonError": {
            "title": "Olvidar que una condicion no sustituye a la otra",
            "titleText": "Olvidar que una condicion no sustituye a la otra",
            "tagId": "",
            "html": "<p>Que una raiz exija \\(x\\geq -1\\) no elimina la necesidad de revisar el denominador. En funciones mixtas siempre hay que superponer todas las restricciones.</p>"
          },
          "guidedExercises": [
            {
              "tagId": "GX-C08.S01-01",
              "title": "Logaritmo",
              "promptHtml": "<p>Halla el dominio de \\(g(x)=\\ln(3-x)\\).</p><p><strong>Pista 1.</strong> El argumento del logaritmo debe ser positivo.</p>",
              "answerHtml": "<div class=\"math-display\">\\[\nD_g=(-\\infty,3).\n\\]</div>",
              "solutionHtml": "<div class=\"math-display\">\\[\n3-x>0 \\Longrightarrow x<3.\n\\]</div><p>Luego</p><div class=\"math-display\">\\[\nD_g=(-\\infty,3).\n\\]</div>"
            },
            {
              "tagId": "GX-C08.S01-02",
              "title": "Funcion racional",
              "promptHtml": "<p>Halla el dominio de \\(h(x)=\\dfrac{1}{x^2-9}\\).</p><p><strong>Pista 1.</strong> Empieza anulando el denominador.</p>",
              "answerHtml": "<div class=\"math-display\">\\[\nD_h=\\R\\setminus\\{-3,3\\}.\n\\]</div>",
              "solutionHtml": "<div class=\"math-display\">\\[\nx^2-9\\neq 0 \\Longrightarrow (x-3)(x+3)\\neq 0.\n\\]</div><p>Por tanto, se excluyen \\(x=-3\\) y \\(x=3\\):</p><div class=\"math-display\">\\[\nD_h=\\R\\setminus\\{-3,3\\}.\n\\]</div>"
            }
          ],
          "practice": {
            "label": "Practica autonoma graduada",
            "items": [
              {
                "tagId": "PX-C08.S01-01",
                "prompt": "Halla el dominio de \\(f(x)=x^3-2x+1\\)."
              },
              {
                "tagId": "PX-C08.S01-02",
                "prompt": "Halla el dominio de \\(f(x)=\\dfrac{1}{x-5}\\)."
              },
              {
                "tagId": "PX-C08.S01-03",
                "prompt": "Halla el dominio de \\(f(x)=\\sqrt{x-4}\\)."
              },
              {
                "tagId": "PX-C08.S01-04",
                "prompt": "Halla el dominio de \\(f(x)=\\sqrt{\\dfrac{x-1}{x+2}}\\)."
              },
              {
                "tagId": "PX-C08.S01-05",
                "prompt": "Halla el dominio de \\(f(x)=\\ln(x^2-4)\\)."
              },
              {
                "tagId": "PX-C08.S01-06",
                "prompt": "Halla el dominio de \\(f(x)=\\dfrac{\\sqrt{9-x^2}}{x+1}\\)."
              }
            ],
            "answersHtml": "<ol><li><p>\\(\\R\\)</p></li><li><p>\\(\\R\\setminus\\{5\\}\\)</p></li><li><p>\\([4,\\infty)\\)</p></li><li><p>\\((-\\infty,-2)\\cup[1,\\infty)\\)</p></li><li><p>\\((-\\infty,-2)\\cup(2,\\infty)\\)</p></li><li><p>\\([-3,-1)\\cup(-1,3]\\)</p></li></ol>",
            "solutionsHtml": "<ol><li><p>Los polinomios estan definidos en todo \\(\\R\\).</p></li><li><p>Solo se excluye el cero del denominador: \\(x\\neq 5\\).</p></li><li><p>La raiz exige \\(x-4\\geq 0\\), luego \\(x\\geq 4\\).</p></li><li><p>Debe cumplirse</p><div class=\"math-display\">\\[\n  \\frac{x-1}{x+2}\\geq 0,\\qquad x\\neq -2.\n  \\]</div><p>El estudio de signo da \\((-\\infty,-2)\\cup[1,\\infty)\\).</p></li><li><p>El argumento del logaritmo debe ser positivo:</p><div class=\"math-display\">\\[\n  x^2-4>0 \\Longrightarrow |x|>2.\n  \\]</div></li><li><p>La raiz exige \\(9-x^2\\geq 0\\), es decir, \\(-3\\leq x\\leq 3\\), y ademas \\(x\\neq -1\\).</p></li></ol>"
          },
          "challenge": {}
        },
        {
          "id": "C08.S02",
          "title": "Lectura de graficas",
          "rawTitle": "[C08.S02] Lectura de graficas",
          "objectives": [
            {
              "label": "Objetivos de aprendizaje",
              "html": "<ul><li><p>Extraer de una grafica dominio, imagen, cortes, monotonia y extremos.</p></li><li><p>Distinguir entre valor de la funcion, tendencia y comportamiento global.</p></li></ul>"
            }
          ],
          "prerequisites": [
            {
              "label": "Prerrequisitos",
              "html": "<ul><li><p>Ejes cartesianos e interpretacion de pares \\((x,y)\\).</p></li></ul>"
            }
          ],
          "theory": {
            "title": "Idea minima",
            "titleText": "Idea minima",
            "tagId": "",
            "html": "<p>Leer una grafica no consiste en adivinar una formula, sino en localizar rasgos visibles: intervalos de definicion, puntos de corte, zonas crecientes o decrecientes, maximos, minimos y comportamientos destacados.</p>"
          },
          "method": {
            "title": "Como reconocer y resolver",
            "titleText": "Como reconocer y resolver",
            "tagId": "",
            "html": "<ol><li><p>Recorre la grafica de izquierda a derecha.</p></li><li><p>Anota en que valores de \\(x\\) esta definida.</p></li><li><p>Localiza cortes con los ejes y puntos destacados.</p></li><li><p>Describe donde sube, baja o se mantiene.</p></li></ol>"
          },
          "solvedExample": {
            "title": "[EX-C08.S02-01] Leer una parabola en un intervalo",
            "titleText": "Leer una parabola en un intervalo",
            "tagId": "EX-C08.S02-01",
            "html": "<p>La siguiente grafica representa una funcion \\(f\\) en el intervalo \\([-1,3]\\).</p><div class=\"centered-block\"><div class=\"figure-fallback\">Esquema disponible en el cuaderno PDF. Refuerza esta idea con el laboratorio interactivo.</div></div><p>Indica dominio, imagen, ceros, punto de corte con el eje \\(Y\\) y donde la funcion es creciente o decreciente.</p><p><strong>Desarrollo.</strong> La grafica aparece dibujada desde \\(x=-1\\) hasta \\(x=3\\), asi que</p><div class=\"math-display\">\\[\nD_f=[-1,3].\n\\]</div><p>El punto mas alto es \\((1,4)\\) y los extremos visibles tocan el eje \\(X\\) en \\((-1,0)\\) y \\((3,0)\\), luego</p><div class=\"math-display\">\\[\n\\mathrm{Im}(f)=[0,4].\n\\]</div><p>Los ceros son \\(x=-1\\) y \\(x=3\\). Para \\(x=0\\), la grafica corta al eje \\(Y\\) en \\(y=3\\), luego \\(f(0)=3\\). La funcion sube hasta \\(x=1\\) y despues baja, de modo que es creciente en \\([-1,1]\\) y decreciente en \\([1,3]\\).</p><p><strong>Respuesta final.</strong></p><div class=\"math-display\">\\[\nD_f=[-1,3],\\qquad \\mathrm{Im}(f)=[0,4],\n\\]</div><div class=\"math-display\">\\[\n\\text{ceros: }x=-1,\\ x=3,\\qquad f(0)=3,\n\\]</div><div class=\"math-display\">\\[\n\\text{creciente en }[-1,1],\\qquad \\text{decreciente en }[1,3].\n\\]</div>"
          },
          "commonError": {
            "title": "Confundir el valor mas alto con el ultimo punto",
            "titleText": "Confundir el valor mas alto con el ultimo punto",
            "tagId": "",
            "html": "<p>El extremo absoluto no tiene por que estar en el extremo derecho de la grafica. Hay que buscar el punto con mayor o menor altura, no el ultimo que aparece dibujado.</p>"
          },
          "guidedExercises": [
            {
              "tagId": "GX-C08.S02-01",
              "title": "Raices y maximo",
              "promptHtml": "<p>En una grafica se observa que la funcion corta al eje \\(X\\) en \\(-2\\) y \\(1\\), y alcanza un maximo absoluto en \\((0,5)\\). Indica sus raices y su valor maximo.</p>",
              "answerHtml": "<p>Raices: \\(-2\\) y \\(1\\). Valor maximo: \\(5\\).</p>",
              "solutionHtml": "<p>Las raices son las abscisas de los cortes con el eje \\(X\\), es decir, \\(-2\\) y \\(1\\). El valor maximo es la ordenada del punto mas alto: \\(5\\).</p>"
            },
            {
              "tagId": "GX-C08.S02-02",
              "title": "Valor y tendencia",
              "promptHtml": "<p>Una grafica presenta un agujero en \\((2,3)\\) y un punto relleno en \\((2,1)\\). Indica \\(f(2)\\) y el valor al que tiende la funcion cuando \\(x\\) se acerca a \\(2\\).</p>",
              "answerHtml": "<div class=\"math-display\">\\[\nf(2)=1,\\qquad \\lim_{x\\to 2}f(x)=3.\n\\]</div>",
              "solutionHtml": "<p>El punto relleno da el valor de la funcion, asi que \\(f(2)=1\\). El agujero marca el valor al que se aproxima la grafica por ambos lados, luego</p><div class=\"math-display\">\\[\n\\lim_{x\\to 2}f(x)=3.\n\\]</div>"
            }
          ],
          "practice": {
            "label": "Practica autonoma graduada",
            "items": [
              {
                "tagId": "PX-C08.S02-01",
                "prompt": "Una grafica corta al eje \\(Y\\) en \\(3\\) y al eje \\(X\\) en \\(-2\\) y \\(1\\). Indica \\(f(0)\\) y las raices."
              },
              {
                "tagId": "PX-C08.S02-02",
                "prompt": "En una grafica el punto mas alto es \\((1,4)\\) y el mas bajo es \\((-2,-1)\\). Indica maximo y minimo absolutos."
              },
              {
                "tagId": "PX-C08.S02-03",
                "prompt": "Una grafica es creciente en \\((-3,0)\\) y decreciente en \\((0,2)\\). En que abscisa aparece un maximo local?"
              },
              {
                "tagId": "PX-C08.S02-04",
                "prompt": "En \\(x=1\\), la grafica se acerca a \\(2\\) por la izquierda y a \\(5\\) por la derecha. Existe \\(\\lim_{x\\to 1}f(x)\\)?"
              },
              {
                "tagId": "PX-C08.S02-05",
                "prompt": "Una grafica tiene un agujero en \\((3,-1)\\) y un punto relleno en \\((3,2)\\). Indica \\(f(3)\\) y \\(\\lim_{x\\to 3}f(x)\\)."
              },
              {
                "tagId": "PX-C08.S02-06",
                "prompt": "Al avanzar hacia la derecha, una grafica se aproxima a la recta \\(y=4\\). Que comportamiento global se observa?"
              }
            ],
            "answersHtml": "<ol><li><p>\\(f(0)=3\\). Raices: \\(-2\\) y \\(1\\)</p></li><li><p>Maximo absoluto \\(4\\). Minimo absoluto \\(-1\\)</p></li><li><p>En \\(x=0\\)</p></li><li><p>No existe</p></li><li><p>\\(f(3)=2\\) y \\(\\lim_{x\\to 3}f(x)=-1\\)</p></li><li><p>La funcion tiende a una asintota horizontal \\(y=4\\)</p></li></ol>",
            "solutionsHtml": "<ol><li><p>El corte con el eje \\(Y\\) da \\(f(0)=3\\); las raices salen de los cortes con el eje \\(X\\).</p></li><li><p>Los valores extremos absolutos son las ordenadas del punto mas alto y del mas bajo.</p></li><li><p>Si primero crece y despues decrece, el cambio se produce en un maximo local en \\(x=0\\).</p></li><li><p>Como los limites laterales son distintos, el limite global no existe.</p></li><li><p>El punto relleno fija el valor de la funcion y el agujero indica la tendencia.</p></li><li><p>Aproximarse a la recta \\(y=4\\) para \\(x\\) grande significa tener una asintota horizontal de ecuacion \\(y=4\\).</p></li></ol>"
          },
          "challenge": {}
        },
        {
          "id": "C08.S03",
          "title": "Limites basicos y laterales",
          "rawTitle": "[C08.S03] Limites basicos y laterales",
          "objectives": [
            {
              "label": "Objetivos de aprendizaje",
              "html": "<ul><li><p>Calcular limites por sustitucion directa cuando no hay indeterminacion.</p></li><li><p>Estudiar limites laterales cuando el comportamiento cambia a cada lado.</p></li></ul>"
            }
          ],
          "prerequisites": [
            {
              "label": "Prerrequisitos",
              "html": "<ul><li><p>Operaciones algebraicas elementales y valor absoluto.</p></li></ul>"
            }
          ],
          "theory": {
            "title": "Idea minima",
            "titleText": "Idea minima",
            "tagId": "",
            "html": "<p>Si una expresion es continua en el punto al que tiende \\(x\\), el limite se obtiene sustituyendo. Cuando una expresion cambia de signo o de forma segun el lado por el que se llega, conviene estudiar los limites laterales.</p>"
          },
          "method": {
            "title": "Como reconocer y resolver",
            "titleText": "Como reconocer y resolver",
            "tagId": "",
            "html": "<ol><li><p>Sustituye el valor de \\(x\\) y comprueba si aparece una expresion bien definida.</p></li><li><p>Si el comportamiento puede cambiar por la izquierda y por la derecha, separa ambos calculos.</p></li><li><p>El limite global solo existe si los dos laterales coinciden.</p></li></ol>"
          },
          "solvedExample": {
            "title": "[EX-C08.S03-01] Laterales que no coinciden",
            "titleText": "Laterales que no coinciden",
            "tagId": "EX-C08.S03-01",
            "html": "<p>Estudia</p><div class=\"math-display\">\\[\n\\lim_{x\\to 2}\\frac{|x-2|}{x-2}.\n\\]</div><p><strong>Desarrollo.</strong> Si \\(x<2\\), entonces \\(|x-2|=-(x-2)\\), y por tanto</p><div class=\"math-display\">\\[\n\\frac{|x-2|}{x-2}=-1.\n\\]</div><p>Luego</p><div class=\"math-display\">\\[\n\\lim_{x\\to 2^-}\\frac{|x-2|}{x-2}=-1.\n\\]</div><p>Si \\(x>2\\), se tiene \\(|x-2|=x-2\\), asi que</p><div class=\"math-display\">\\[\n\\frac{|x-2|}{x-2}=1.\n\\]</div><p>Entonces</p><div class=\"math-display\">\\[\n\\lim_{x\\to 2^+}\\frac{|x-2|}{x-2}=1.\n\\]</div><p>Como los laterales no coinciden, el limite global no existe.</p><p><strong>Respuesta final.</strong></p><div class=\"math-display\">\\[\n\\lim_{x\\to 2^-}\\frac{|x-2|}{x-2}=-1,\\qquad\n\\lim_{x\\to 2^+}\\frac{|x-2|}{x-2}=1,\n\\]</div><p>y por tanto</p><div class=\"math-display\">\\[\n\\lim_{x\\to 2}\\frac{|x-2|}{x-2}\\text{ no existe}.\n\\]</div>"
          },
          "commonError": {
            "title": "Creer que siempre basta con sustituir",
            "titleText": "Creer que siempre basta con sustituir",
            "tagId": "",
            "html": "<p>En expresiones con valor absoluto, funciones a trozos o denominadores que cambian de signo puede haber comportamientos distintos a izquierda y derecha. Si no se revisan, el limite puede quedar mal decidido.</p>"
          },
          "guidedExercises": [
            {
              "tagId": "GX-C08.S03-01",
              "title": "Sustitucion directa",
              "promptHtml": "<p>Calcula</p><div class=\"math-display\">\\[\n\\lim_{x\\to 1}(3x-2).\n\\]</div>",
              "answerHtml": "<div class=\"math-display\">\\[\n1.\n\\]</div>",
              "solutionHtml": "<p>La funcion es polinomica, asi que basta sustituir:</p><div class=\"math-display\">\\[\n3\\cdot 1-2=1.\n\\]</div>"
            },
            {
              "tagId": "GX-C08.S03-02",
              "title": "Laterales de una funcion inversa",
              "promptHtml": "<p>Calcula los limites laterales de \\(\\dfrac{1}{x}\\) cuando \\(x\\to 0\\).</p>",
              "answerHtml": "<div class=\"math-display\">\\[\n\\lim_{x\\to 0^-}\\frac{1}{x}=-\\infty,\\qquad\n\\lim_{x\\to 0^+}\\frac{1}{x}=+\\infty.\n\\]</div>",
              "solutionHtml": "<p>Si \\(x\\) se acerca a \\(0\\) por valores negativos, \\(1/x\\) toma valores negativos de modulo cada vez mayor. Si se acerca por valores positivos, toma valores positivos cada vez mayores:</p><div class=\"math-display\">\\[\n\\lim_{x\\to 0^-}\\frac{1}{x}=-\\infty,\\qquad\n\\lim_{x\\to 0^+}\\frac{1}{x}=+\\infty.\n\\]</div>"
            }
          ],
          "practice": {
            "label": "Practica autonoma graduada",
            "items": [
              {
                "tagId": "PX-C08.S03-01",
                "prompt": "Calcula \\(\\lim_{x\\to 2}(x^2+3)\\)."
              },
              {
                "tagId": "PX-C08.S03-02",
                "prompt": "Calcula \\(\\lim_{x\\to -1}\\dfrac{x^2+1}{x+2}\\)."
              },
              {
                "tagId": "PX-C08.S03-03",
                "prompt": "Estudia \\(\\lim_{x\\to 0}\\dfrac{|x|}{x}\\)."
              },
              {
                "tagId": "PX-C08.S03-04",
                "prompt": "Calcula \\(\\lim_{x\\to 4}\\sqrt{x+5}\\)."
              },
              {
                "tagId": "PX-C08.S03-05",
                "prompt": "Estudia los limites laterales de \\(\\dfrac{1}{x-3}\\) cuando \\(x\\to 3\\)."
              },
              {
                "tagId": "PX-C08.S03-06",
                "prompt": "Existe \\(\\lim_{x\\to 1}\\dfrac{x-1}{|x-1|}\\)?"
              }
            ],
            "answersHtml": "<ol><li><p>\\(7\\)</p></li><li><p>\\(2\\)</p></li><li><p>No existe</p></li><li><p>\\(3\\)</p></li><li><p>\\(-\\infty\\) por la izquierda y \\(+\\infty\\) por la derecha</p></li><li><p>No</p></li></ol>",
            "solutionsHtml": "<ol><li><p>Sustitucion directa: \\(2^2+3=7\\).</p></li><li><p>El denominador no se anula en \\(-1\\), asi que</p><div class=\"math-display\">\\[\n  \\frac{(-1)^2+1}{-1+2}=2.\n  \\]</div></li><li><p>Por la izquierda vale \\(-1\\) y por la derecha vale \\(1\\), luego el limite global no existe.</p></li><li><p>\\(\\sqrt{4+5}=3\\).</p></li><li><p>Si \\(x\\to 3^-\\), el denominador es negativo y muy pequeno: sale \\(-\\infty\\). Si \\(x\\to 3^+\\), sale \\(+\\infty\\).</p></li><li><p>Es la misma estructura que el ejemplo, con laterales \\(-1\\) y \\(1\\), asi que no existe.</p></li></ol>"
          },
          "challenge": {}
        },
        {
          "id": "C08.S04",
          "title": "Limites en el infinito",
          "rawTitle": "[C08.S04] Limites en el infinito",
          "objectives": [
            {
              "label": "Objetivos de aprendizaje",
              "html": "<ul><li><p>Comparar crecimientos de polinomios y cocientes racionales.</p></li><li><p>Reconocer cuando un limite en el infinito tiende a un numero, a \\(0\\) o a \\(\\pm\\infty\\).</p></li></ul>"
            }
          ],
          "prerequisites": [
            {
              "label": "Prerrequisitos",
              "html": "<ul><li><p>Factor comun y comparacion de grados.</p></li></ul>"
            }
          ],
          "theory": {
            "title": "Idea minima",
            "titleText": "Idea minima",
            "tagId": "",
            "html": "<p>En un cociente de polinomios:</p><ul><li><p>si los grados coinciden, manda el cociente de coeficientes principales;</p></li><li><p>si el grado del numerador es menor, el limite vale \\(0\\);</p></li><li><p>si el grado del numerador es mayor, el limite crece en modulo sin acotacion.</p></li></ul>"
          },
          "method": {
            "title": "Como reconocer y resolver",
            "titleText": "Como reconocer y resolver",
            "tagId": "",
            "html": "<ol><li><p>Identifica los terminos de mayor grado.</p></li><li><p>Divide numerador y denominador por la potencia mas alta conveniente.</p></li><li><p>Simplifica y deja que los terminos de grado menor se hagan despreciables.</p></li></ol>"
          },
          "solvedExample": {
            "title": "[EX-C08.S04-01] Comparar grados",
            "titleText": "Comparar grados",
            "tagId": "EX-C08.S04-01",
            "html": "<p>Calcula</p><div class=\"math-display\">\\[\n\\lim_{x\\to\\infty}\\frac{2x^2-3}{x^2+x}\n\\qquad\\text{y}\\qquad\n\\lim_{x\\to-\\infty}\\frac{3x-1}{x^2+1}.\n\\]</div><p><strong>Desarrollo.</strong> En el primer cociente los grados coinciden, asi que dividimos por \\(x^2\\):</p><div class=\"math-display\">\\[\n\\frac{2x^2-3}{x^2+x}=\\frac{2-\\frac{3}{x^2}}{1+\\frac{1}{x}}.\n\\]</div><p>Al hacer \\(x\\to\\infty\\), los terminos con \\(1/x\\) desaparecen:</p><div class=\"math-display\">\\[\n\\lim_{x\\to\\infty}\\frac{2x^2-3}{x^2+x}=2.\n\\]</div><p>En el segundo, el grado del numerador es menor que el del denominador. Dividiendo por \\(x^2\\):</p><div class=\"math-display\">\\[\n\\frac{3x-1}{x^2+1}=\\frac{\\frac{3}{x}-\\frac{1}{x^2}}{1+\\frac{1}{x^2}}.\n\\]</div><p>Por tanto,</p><div class=\"math-display\">\\[\n\\lim_{x\\to-\\infty}\\frac{3x-1}{x^2+1}=0.\n\\]</div><p><strong>Respuesta final.</strong></p><div class=\"math-display\">\\[\n\\lim_{x\\to\\infty}\\frac{2x^2-3}{x^2+x}=2,\\qquad\n\\lim_{x\\to-\\infty}\\frac{3x-1}{x^2+1}=0.\n\\]</div>"
          },
          "commonError": {
            "title": "Quedarse con el termino dominante sin cuidar el signo",
            "titleText": "Quedarse con el termino dominante sin cuidar el signo",
            "tagId": "",
            "html": "<p>Cuando el infinito es negativo, las potencias impares y pares se comportan de forma distinta. No basta con mirar el grado: tambien hay que controlar el signo del termino principal.</p>"
          },
          "guidedExercises": [
            {
              "tagId": "GX-C08.S04-01",
              "title": "Grados iguales",
              "promptHtml": "<p>Calcula</p><div class=\"math-display\">\\[\n\\lim_{x\\to\\infty}\\frac{5x-2}{x+3}.\n\\]</div>",
              "answerHtml": "<div class=\"math-display\">\\[\n5.\n\\]</div>",
              "solutionHtml": "<p>Los grados coinciden, asi que manda el cociente de coeficientes principales:</p><div class=\"math-display\">\\[\n\\lim_{x\\to\\infty}\\frac{5x-2}{x+3}=5.\n\\]</div>"
            },
            {
              "tagId": "GX-C08.S04-02",
              "title": "Numerador de menor grado",
              "promptHtml": "<p>Calcula</p><div class=\"math-display\">\\[\n\\lim_{x\\to\\infty}\\frac{4}{x^2+1}.\n\\]</div>",
              "answerHtml": "<div class=\"math-display\">\\[\n0.\n\\]</div>",
              "solutionHtml": "<p>El denominador crece mucho mas que el numerador constante, asi que</p><div class=\"math-display\">\\[\n\\lim_{x\\to\\infty}\\frac{4}{x^2+1}=0.\n\\]</div>"
            }
          ],
          "practice": {
            "label": "Practica autonoma graduada",
            "items": [
              {
                "tagId": "PX-C08.S04-01",
                "prompt": "Calcula \\(\\lim_{x\\to\\infty}\\dfrac{3x^2+1}{x^2-4}\\)."
              },
              {
                "tagId": "PX-C08.S04-02",
                "prompt": "Calcula \\(\\lim_{x\\to\\infty}\\dfrac{2x+5}{x^2+1}\\)."
              },
              {
                "tagId": "PX-C08.S04-03",
                "prompt": "Calcula \\(\\lim_{x\\to-\\infty}\\dfrac{x^3-1}{2x^2+3}\\)."
              },
              {
                "tagId": "PX-C08.S04-04",
                "prompt": "Calcula \\(\\lim_{x\\to-\\infty}\\dfrac{4x^2-x}{2x^2+1}\\)."
              },
              {
                "tagId": "PX-C08.S04-05",
                "prompt": "Calcula \\(\\lim_{x\\to\\infty}(\\sqrt{x^2+1}-x)\\)."
              },
              {
                "tagId": "PX-C08.S04-06",
                "prompt": "Calcula \\(\\lim_{x\\to\\infty}\\dfrac{x^2-5x}{3x^2+x}\\)."
              }
            ],
            "answersHtml": "<ol><li><p>\\(3\\)</p></li><li><p>\\(0\\)</p></li><li><p>\\(-\\infty\\)</p></li><li><p>\\(2\\)</p></li><li><p>\\(0\\)</p></li><li><p>\\(\\frac{1}{3}\\)</p></li></ol>",
            "solutionsHtml": "<ol><li><p>Grados iguales: manda \\(3/1\\).</p></li><li><p>El denominador tiene mayor grado, asi que el limite es \\(0\\).</p></li><li><p>El numerador tiene grado \\(3\\) y signo negativo para \\(x\\to-\\infty\\), mientras el denominador es positivo de grado \\(2\\), luego el cociente tiende a \\(-\\infty\\).</p></li><li><p>Grados iguales: \\(\\frac{4}{2}=2\\).</p></li><li><p>Racionalizando:</p><div class=\"math-display\">\\[\n  \\sqrt{x^2+1}-x=\\frac{1}{\\sqrt{x^2+1}+x}\\to 0.\n  \\]</div></li><li><p>Grados iguales: manda \\(1/3\\).</p></li></ol>"
          },
          "challenge": {}
        },
        {
          "id": "C08.S05",
          "title": "Indeterminaciones por factorizacion y racionalizacion",
          "rawTitle": "[C08.S05] Indeterminaciones por factorizacion y racionalizacion",
          "objectives": [
            {
              "label": "Objetivos de aprendizaje",
              "html": "<ul><li><p>Resolver limites del tipo \\(0/0\\) mediante factorizacion.</p></li><li><p>Resolver limites con radicales mediante racionalizacion.</p></li></ul>"
            }
          ],
          "prerequisites": [
            {
              "label": "Prerrequisitos",
              "html": "<ul><li><p>Productos notables y conjugados.</p></li></ul>"
            }
          ],
          "theory": {
            "title": "Idea minima",
            "titleText": "Idea minima",
            "tagId": "",
            "html": "<p>Cuando al sustituir aparece \\(0/0\\), no significa que el limite sea \\(0\\): significa que hace falta transformar la expresion. Dos recursos tipicos son factorizar y racionalizar.</p>"
          },
          "method": {
            "title": "Como reconocer y resolver",
            "titleText": "Como reconocer y resolver",
            "tagId": "",
            "html": "<ol><li><p>Sustituye y detecta si hay una indeterminacion.</p></li><li><p>Si hay polinomios, prueba a factorizar y simplificar.</p></li><li><p>Si hay radicales, multiplica por el conjugado.</p></li><li><p>Sustituye solo al final, cuando la expresion ya no sea indeterminada.</p></li></ol>"
          },
          "solvedExample": {
            "title": "[EX-C08.S05-01] Factorizar antes de sustituir",
            "titleText": "Factorizar antes de sustituir",
            "tagId": "EX-C08.S05-01",
            "html": "<p>Calcula</p><div class=\"math-display\">\\[\n\\lim_{x\\to 2}\\frac{x^2-4}{x-2}.\n\\]</div><p><strong>Desarrollo.</strong> Si se sustituye directamente, aparece \\(0/0\\). Factorizamos:</p><div class=\"math-display\">\\[\nx^2-4=(x-2)(x+2).\n\\]</div><p>Entonces</p><div class=\"math-display\">\\[\n\\frac{x^2-4}{x-2}=\\frac{(x-2)(x+2)}{x-2}=x+2\\qquad (x\\neq 2).\n\\]</div><p>Ahora ya se puede sustituir:</p><div class=\"math-display\">\\[\n\\lim_{x\\to 2}(x+2)=4.\n\\]</div><p><strong>Respuesta final.</strong></p><div class=\"math-display\">\\[\n\\lim_{x\\to 2}\\frac{x^2-4}{x-2}=4.\n\\]</div>"
          },
          "commonError": {
            "title": "Sustituir dos veces y no transformar nada",
            "titleText": "Sustituir dos veces y no transformar nada",
            "tagId": "",
            "html": "<p>Si la sustitucion inicial da \\(0/0\\), repetir la misma cuenta no arregla la indeterminacion. Primero hay que reescribir la expresion.</p>"
          },
          "guidedExercises": [
            {
              "tagId": "GX-C08.S05-01",
              "title": "Cociente notable",
              "promptHtml": "<p>Calcula</p><div class=\"math-display\">\\[\n\\lim_{x\\to 3}\\frac{x^2-9}{x-3}.\n\\]</div>",
              "answerHtml": "<div class=\"math-display\">\\[\n6.\n\\]</div>",
              "solutionHtml": "<div class=\"math-display\">\\[\nx^2-9=(x-3)(x+3).\n\\]</div><p>Se simplifica y queda \\(x+3\\), cuyo limite en \\(x=3\\) es \\(6\\).</p>"
            },
            {
              "tagId": "GX-C08.S05-02",
              "title": "Racionalizacion",
              "promptHtml": "<p>Calcula</p><div class=\"math-display\">\\[\n\\lim_{x\\to 0}\\frac{\\sqrt{x+4}-2}{x}.\n\\]</div>",
              "answerHtml": "<div class=\"math-display\">\\[\n\\frac{1}{4}.\n\\]</div>",
              "solutionHtml": "<p>Multiplicamos por el conjugado:</p><div class=\"math-display\">\\[\n\\frac{\\sqrt{x+4}-2}{x}\\cdot \\frac{\\sqrt{x+4}+2}{\\sqrt{x+4}+2}\n=\\frac{x}{x(\\sqrt{x+4}+2)}=\\frac{1}{\\sqrt{x+4}+2}.\n\\]</div><p>Ahora</p><div class=\"math-display\">\\[\n\\lim_{x\\to 0}\\frac{1}{\\sqrt{x+4}+2}=\\frac{1}{4}.\n\\]</div>"
            }
          ],
          "practice": {
            "label": "Practica autonoma graduada",
            "items": [
              {
                "tagId": "PX-C08.S05-01",
                "prompt": "Calcula \\(\\lim_{x\\to 1}\\dfrac{x^2-1}{x-1}\\)."
              },
              {
                "tagId": "PX-C08.S05-02",
                "prompt": "Calcula \\(\\lim_{x\\to -2}\\dfrac{x^2+3x+2}{x+2}\\)."
              },
              {
                "tagId": "PX-C08.S05-03",
                "prompt": "Calcula \\(\\lim_{x\\to 0}\\dfrac{\\sqrt{1+x}-1}{x}\\)."
              },
              {
                "tagId": "PX-C08.S05-04",
                "prompt": "Calcula \\(\\lim_{x\\to 4}\\dfrac{\\sqrt{x}-2}{x-4}\\)."
              },
              {
                "tagId": "PX-C08.S05-05",
                "prompt": "Calcula \\(\\lim_{x\\to 2}\\dfrac{x^2-5x+6}{x-2}\\)."
              },
              {
                "tagId": "PX-C08.S05-06",
                "prompt": "Calcula \\(\\lim_{x\\to 0}\\dfrac{1-\\cos x}{x^2}\\)."
              }
            ],
            "answersHtml": "<ol><li><p>\\(2\\)</p></li><li><p>\\(-1\\)</p></li><li><p>\\(\\frac{1}{2}\\)</p></li><li><p>\\(\\frac{1}{4}\\)</p></li><li><p>\\(-1\\)</p></li><li><p>\\(\\frac{1}{2}\\)</p></li></ol>",
            "solutionsHtml": "<ol><li><p>Se factoriza \\(x^2-1=(x-1)(x+1)\\) y queda \\(x+1\\), cuyo limite es \\(2\\).</p></li><li><p>\\(x^2+3x+2=(x+1)(x+2)\\), luego queda \\(x+1\\) y el limite vale \\(-1\\).</p></li><li><p>Racionalizando se obtiene</p><div class=\"math-display\">\\[\n  \\frac{1}{\\sqrt{1+x}+1}\\to \\frac{1}{2}.\n  \\]</div></li><li><p>Racionalizando:</p><div class=\"math-display\">\\[\n  \\frac{\\sqrt{x}-2}{x-4}=\\frac{1}{\\sqrt{x}+2}\\to \\frac{1}{4}.\n  \\]</div></li><li><p>\\(x^2-5x+6=(x-2)(x-3)\\), luego el limite es \\(2-3=-1\\).</p></li><li><p>Usando \\(1-\\cos x=2\\sen^2(x/2)\\), se obtiene el limite conocido \\(1/2\\).</p></li></ol>"
          },
          "challenge": {}
        },
        {
          "id": "C08.S06",
          "title": "Asintotas",
          "rawTitle": "[C08.S06] Asintotas",
          "objectives": [
            {
              "label": "Objetivos de aprendizaje",
              "html": "<ul><li><p>Hallar asintotas verticales, horizontales y oblicuas.</p></li><li><p>Relacionar limites con el comportamiento global de la grafica.</p></li></ul>"
            }
          ],
          "prerequisites": [
            {
              "label": "Prerrequisitos",
              "html": "<ul><li><p>Limites en puntos finitos y en el infinito.</p></li></ul>"
            }
          ],
          "theory": {
            "title": "Idea minima",
            "titleText": "Idea minima",
            "tagId": "",
            "html": "<p>Una recta \\(x=a\\) es asintota vertical si la funcion crece en modulo sin cota al acercarse a \\(a\\). Una recta \\(y=L\\) es asintota horizontal si \\(\\lim_{x\\to\\pm\\infty}f(x)=L\\). Si \\(f(x)-(mx+n)\\to 0\\), la recta \\(y=mx+n\\) es una asintota oblicua.</p>"
          },
          "method": {
            "title": "Como reconocer y resolver",
            "titleText": "Como reconocer y resolver",
            "tagId": "",
            "html": "<ol><li><p>Busca primero posibles ceros del denominador para asintotas verticales.</p></li><li><p>Calcula limites en \\(\\pm\\infty\\) para decidir si hay horizontal.</p></li><li><p>Si el grado del numerador supera en una unidad al del denominador, prueba con division de polinomios para una oblicua.</p></li></ol>"
          },
          "solvedExample": {
            "title": "[EX-C08.S06-01] Vertical y oblicua",
            "titleText": "Vertical y oblicua",
            "tagId": "EX-C08.S06-01",
            "html": "<p>Estudia las asintotas de</p><div class=\"math-display\">\\[\nf(x)=\\frac{x^2+1}{x-1}.\n\\]</div><p><strong>Desarrollo.</strong> La funcion no esta definida en \\(x=1\\), y</p><div class=\"math-display\">\\[\n\\lim_{x\\to 1^-}\\frac{x^2+1}{x-1}=-\\infty,\\qquad\n\\lim_{x\\to 1^+}\\frac{x^2+1}{x-1}=+\\infty.\n\\]</div><p>Por tanto, \\(x=1\\) es una asintota vertical.</p><p>Para estudiar el infinito, dividimos:</p><div class=\"math-display\">\\[\n\\frac{x^2+1}{x-1}=x+1+\\frac{2}{x-1}.\n\\]</div><p>Como</p><div class=\"math-display\">\\[\n\\lim_{x\\to\\pm\\infty}\\frac{2}{x-1}=0,\n\\]</div><p>la recta</p><div class=\"math-display\">\\[\ny=x+1\n\\]</div><p>es una asintota oblicua. No hay horizontal, porque la funcion no tiende a un numero.</p><p><strong>Respuesta final.</strong></p><div class=\"math-display\">\\[\n\\text{Asintota vertical: }x=1,\n\\qquad\n\\text{asintota oblicua: }y=x+1.\n\\]</div>"
          },
          "commonError": {
            "title": "Creer que todo cero del denominador produce una asintota",
            "titleText": "Creer que todo cero del denominador produce una asintota",
            "tagId": "",
            "html": "<p>Si un factor del denominador se simplifica con el numerador, puede aparecer un agujero en vez de una asintota vertical. Antes de concluir, conviene simplificar o mirar el limite.</p>"
          },
          "guidedExercises": [
            {
              "tagId": "GX-C08.S06-01",
              "title": "Horizontal",
              "promptHtml": "<p>Estudia las asintotas de</p><div class=\"math-display\">\\[\nf(x)=\\frac{2x+1}{x-3}.\n\\]</div>",
              "answerHtml": "<p>Vertical: \\(x=3\\). Horizontal: \\(y=2\\).</p>",
              "solutionHtml": "<p>En \\(x=3\\) el denominador se anula y el numerador no, asi que hay asintota vertical \\(x=3\\). Como los grados coinciden,</p><div class=\"math-display\">\\[\n\\lim_{x\\to\\pm\\infty}\\frac{2x+1}{x-3}=2,\n\\]</div><p>de modo que la asintota horizontal es \\(y=2\\).</p>"
            },
            {
              "tagId": "GX-C08.S06-02",
              "title": "Solo vertical",
              "promptHtml": "<p>Estudia las asintotas de</p><div class=\"math-display\">\\[\nf(x)=\\frac{1}{x+2}.\n\\]</div>",
              "answerHtml": "<p>Vertical: \\(x=-2\\). Horizontal: \\(y=0\\).</p>",
              "solutionHtml": "<p>La funcion explota en \\(x=-2\\), asi que ahi tiene asintota vertical. Como</p><div class=\"math-display\">\\[\n\\lim_{x\\to\\pm\\infty}\\frac{1}{x+2}=0,\n\\]</div><p>la horizontal es \\(y=0\\).</p>"
            }
          ],
          "practice": {
            "label": "Practica autonoma graduada",
            "items": [
              {
                "tagId": "PX-C08.S06-01",
                "prompt": "Estudia las asintotas de \\(f(x)=\\dfrac{3x-1}{x+4}\\)."
              },
              {
                "tagId": "PX-C08.S06-02",
                "prompt": "Estudia las asintotas de \\(f(x)=\\dfrac{x+2}{x^2+1}\\)."
              },
              {
                "tagId": "PX-C08.S06-03",
                "prompt": "Estudia las asintotas de \\(f(x)=\\dfrac{x^2-4}{x-2}\\)."
              },
              {
                "tagId": "PX-C08.S06-04",
                "prompt": "Estudia las asintotas de \\(f(x)=\\dfrac{x^2+3x}{x}\\)."
              },
              {
                "tagId": "PX-C08.S06-05",
                "prompt": "Estudia las asintotas de \\(f(x)=\\dfrac{x^2+2}{x+1}\\)."
              },
              {
                "tagId": "PX-C08.S06-06",
                "prompt": "Estudia las asintotas de \\(f(x)=\\dfrac{5}{x^2-9}\\)."
              }
            ],
            "answersHtml": "<ol><li><p>Vertical \\(x=-4\\). Horizontal \\(y=3\\)</p></li><li><p>Horizontal \\(y=0\\)</p></li><li><p>No tiene asintota vertical; la grafica coincide con \\(y=x+2\\) salvo en \\(x=2\\)</p></li><li><p>No tiene asintota vertical; la grafica coincide con \\(y=x+3\\) salvo en \\(x=0\\)</p></li><li><p>Vertical \\(x=-1\\). Oblicua \\(y=x-1\\)</p></li><li><p>Verticales \\(x=-3\\) y \\(x=3\\). Horizontal \\(y=0\\)</p></li></ol>",
            "solutionsHtml": "<ol><li><p>Cero del denominador en \\(-4\\) y grados iguales: horizontal \\(y=3\\).</p></li><li><p>El denominador domina al numerador, luego \\(y=0\\) es horizontal y no hay verticales.</p></li><li><div class=\"math-display\">\\[\n  \\frac{x^2-4}{x-2}=x+2 \\quad (x\\neq 2).\n  \\]</div><p>Hay un agujero en \\(x=2\\), no una vertical.</p></li><li><div class=\"math-display\">\\[\n  \\frac{x^2+3x}{x}=x+3\\quad (x\\neq 0).\n  \\]</div><p>De nuevo aparece un agujero en \\(x=0\\).</p></li><li><p>Division:</p><div class=\"math-display\">\\[\n  \\frac{x^2+2}{x+1}=x-1+\\frac{3}{x+1}.\n  \\]</div><p>La vertical es \\(x=-1\\) y la oblicua queda \\(y=x-1\\). Pero al simplificar bien:</p><div class=\"math-display\">\\[\n  x^2+2=(x+1)(x-1)+3,\n  \\]</div><p>asi que la oblicua es \\(y=x-1\\).</p></li><li><p>El denominador se anula en \\(\\pm 3\\) y para \\(|x|\\to\\infty\\) la funcion tiende a \\(0\\).</p></li></ol>"
          },
          "challenge": {}
        },
        {
          "id": "C08.S07",
          "title": "Continuidad y discontinuidades",
          "rawTitle": "[C08.S07] Continuidad y discontinuidades",
          "objectives": [
            {
              "label": "Objetivos de aprendizaje",
              "html": "<ul><li><p>Decidir si una funcion es continua en un punto.</p></li><li><p>Clasificar discontinuidades removibles, de salto e infinitas.</p></li></ul>"
            }
          ],
          "prerequisites": [
            {
              "label": "Prerrequisitos",
              "html": "<ul><li><p>Limites laterales y valor de la funcion.</p></li></ul>"
            }
          ],
          "theory": {
            "title": "Idea minima",
            "titleText": "Idea minima",
            "tagId": "",
            "html": "<p>Una funcion es continua en \\(x=a\\) si se cumplen a la vez:</p><ol><li><p>\\(f(a)\\) existe;</p></li><li><p>\\(\\lim_{x\\to a}f(x)\\) existe;</p></li><li><p>ambos valores coinciden.</p></li></ol><p>Si falla alguna condicion, aparece una discontinuidad, que puede ser removible, de salto o infinita.</p>"
          },
          "method": {
            "title": "Como reconocer y resolver",
            "titleText": "Como reconocer y resolver",
            "tagId": "",
            "html": "<ol><li><p>Calcula el valor de la funcion en el punto, si existe.</p></li><li><p>Estudia el limite o los limites laterales.</p></li><li><p>Compara y clasifica el tipo de fallo.</p></li></ol>"
          },
          "solvedExample": {
            "title": "[EX-C08.S07-01] Discontinuidad removible",
            "titleText": "Discontinuidad removible",
            "tagId": "EX-C08.S07-01",
            "html": "<p>Estudia la continuidad en \\(x=1\\) de</p><div class=\"math-display\">\\[\nf(x)=\\frac{x^2-1}{x-1}.\n\\]</div><p><strong>Desarrollo.</strong> En \\(x=1\\) la expresion no esta definida, asi que \\(f(1)\\) no existe. Sin embargo,</p><div class=\"math-display\">\\[\n\\frac{x^2-1}{x-1}=x+1\\qquad (x\\neq 1),\n\\]</div><p>y por tanto</p><div class=\"math-display\">\\[\n\\lim_{x\\to 1}f(x)=\\lim_{x\\to 1}(x+1)=2.\n\\]</div><p>El limite existe, pero la funcion no tiene valor en \\(x=1\\). Se trata de una discontinuidad removible.</p><p><strong>Respuesta final.</strong></p><div class=\"math-display\">\\[\nf \\text{ no es continua en }x=1,\\qquad \\text{discontinuidad removible}.\n\\]</div>"
          },
          "commonError": {
            "title": "Confundir no estar definida con tener asintota",
            "titleText": "Confundir no estar definida con tener asintota",
            "tagId": "",
            "html": "<p>No toda falta de definicion implica una discontinuidad infinita. Si el limite es finito, normalmente se trata de un agujero que podria rellenarse.</p>"
          },
          "guidedExercises": [
            {
              "tagId": "GX-C08.S07-01",
              "title": "Salto",
              "promptHtml": "<p>Estudia en \\(x=0\\) la continuidad de</p><div class=\"math-display\">\\[\nf(x)=\n\\begin{cases}\n1,& x<0,\\\\\n3,& x\\geq 0.\n\\end{cases}\n\\]</div>",
              "answerHtml": "<p>No es continua en \\(x=0\\). Tiene una discontinuidad de salto.</p>",
              "solutionHtml": "<div class=\"math-display\">\\[\n\\lim_{x\\to 0^-}f(x)=1,\\qquad \\lim_{x\\to 0^+}f(x)=3.\n\\]</div><p>Como los laterales no coinciden, el limite global no existe y la discontinuidad es de salto.</p>"
            },
            {
              "tagId": "GX-C08.S07-02",
              "title": "Infinita",
              "promptHtml": "<p>Clasifica la discontinuidad de \\(f(x)=\\dfrac{1}{x-2}\\) en \\(x=2\\).</p>",
              "answerHtml": "<p>Discontinuidad infinita.</p>",
              "solutionHtml": "<p>En \\(x=2\\), la funcion diverge a \\(\\pm\\infty\\) segun el lado por el que se llegue, asi que la discontinuidad es infinita.</p>"
            }
          ],
          "practice": {
            "label": "Practica autonoma graduada",
            "items": [
              {
                "tagId": "PX-C08.S07-01",
                "prompt": "Estudia la continuidad en \\(x=2\\) de \\(f(x)=x^2-1\\)."
              },
              {
                "tagId": "PX-C08.S07-02",
                "prompt": "Clasifica la discontinuidad de \\(f(x)=\\dfrac{x^2-4}{x-2}\\) en \\(x=2\\)."
              },
              {
                "tagId": "PX-C08.S07-03",
                "prompt": "Clasifica la discontinuidad de \\(f(x)=\\dfrac{1}{x+1}\\) en \\(x=-1\\)."
              },
              {
                "tagId": "PX-C08.S07-04",
                "prompt": "Estudia en \\(x=1\\) la funcion \\(f(x)=\\begin{cases}2,&x<1\\\\5,&x\\geq1\\end{cases}\\)."
              },
              {
                "tagId": "PX-C08.S07-05",
                "prompt": "Estudia en \\(x=0\\) la continuidad de \\(f(x)=|x|\\)."
              },
              {
                "tagId": "PX-C08.S07-06",
                "prompt": "La funcion tiene un agujero en \\((3,2)\\) y un punto relleno en \\((3,2)\\). Es continua en \\(x=3\\)?"
              }
            ],
            "answersHtml": "<ol><li><p>Si, es continua</p></li><li><p>Removible</p></li><li><p>Infinita</p></li><li><p>De salto</p></li><li><p>Si, es continua</p></li><li><p>Si</p></li></ol>",
            "solutionsHtml": "<ol><li><p>Los polinomios son continuos en todo \\(\\R\\).</p></li><li><p>Se simplifica a \\(x+2\\) para \\(x\\neq 2\\), con limite \\(4\\) finito y falta de valor en el punto: discontinuidad removible.</p></li><li><p>La funcion diverge en \\(x=-1\\), luego la discontinuidad es infinita.</p></li><li><p>Los laterales son \\(2\\) y \\(5\\), distintos entre si.</p></li><li><p>El valor absoluto es continuo en todo \\(\\R\\), incluido \\(x=0\\).</p></li><li><p>Si el valor de la funcion coincide con el del agujero-limite, la continuidad queda restablecida.</p></li></ol>"
          },
          "challenge": {}
        },
        {
          "id": "C08.S08",
          "title": "Funciones a trozos y representacion",
          "rawTitle": "[C08.S08] Funciones a trozos y representacion",
          "objectives": [
            {
              "label": "Objetivos de aprendizaje",
              "html": "<ul><li><p>Analizar funciones definidas con formulas distintas por intervalos.</p></li><li><p>Representar cualitativamente su grafica y su continuidad.</p></li></ul>"
            }
          ],
          "prerequisites": [
            {
              "label": "Prerrequisitos",
              "html": "<ul><li><p>Evaluacion de funciones y limites laterales.</p></li></ul>"
            }
          ],
          "theory": {
            "title": "Idea minima",
            "titleText": "Idea minima",
            "tagId": "",
            "html": "<p>En una funcion a trozos, cada intervalo tiene su propia expresion. Para representarla bien hay que estudiar cada tramo por separado y revisar que pasa en los puntos de union.</p>"
          },
          "method": {
            "title": "Como reconocer y resolver",
            "titleText": "Como reconocer y resolver",
            "tagId": "",
            "html": "<ol><li><p>Evalua cada formula solo en su intervalo.</p></li><li><p>Revisa el punto de cambio con limites laterales y valor de la funcion.</p></li><li><p>Dibuja cada tramo y marca si el punto extremo es abierto o cerrado.</p></li></ol>"
          },
          "solvedExample": {
            "title": "[EX-C08.S08-01] Continuidad y esquema de una funcion a trozos",
            "titleText": "Continuidad y esquema de una funcion a trozos",
            "tagId": "EX-C08.S08-01",
            "html": "<p>Estudia la continuidad y describe la representacion de</p><div class=\"math-display\">\\[\nf(x)=\n\\begin{cases}\nx+1,& x<0,\\\\\nx^2+1,& x\\geq 0.\n\\end{cases}\n\\]</div><p><strong>Desarrollo.</strong> Cada tramo es continuo en su propio intervalo. El punto delicado es \\(x=0\\):</p><div class=\"math-display\">\\[\n\\lim_{x\\to 0^-}f(x)=1,\\qquad \\lim_{x\\to 0^+}f(x)=1,\\qquad f(0)=1.\n\\]</div><p>Luego la funcion es continua en \\(x=0\\).</p><p>Graficamente, a la izquierda aparece la recta \\(y=x+1\\), terminando en el punto \\((0,1)\\), y a la derecha la parabola \\(y=x^2+1\\), que arranca en ese mismo punto. Ambos tramos enlazan sin salto.</p><p><strong>Respuesta final.</strong></p><div class=\"math-display\">\\[\nf \\text{ es continua en todo }\\R.\n\\]</div><p>Su grafica une la recta \\(y=x+1\\) para \\(x<0\\) con la parabola \\(y=x^2+1\\) para \\(x\\geq 0\\), sin romperse en \\((0,1)\\).</p>"
          },
          "commonError": {
            "title": "Dibujar el punto de union sin mirar la desigualdad",
            "titleText": "Dibujar el punto de union sin mirar la desigualdad",
            "tagId": "",
            "html": "<p>Si un tramo usa \\(x<0\\) y el otro \\(x\\geq 0\\), no ambos incluyen el mismo extremo. Eso decide si el punto se dibuja abierto o cerrado.</p>"
          },
          "guidedExercises": [
            {
              "tagId": "GX-C08.S08-01",
              "title": "Salto en el punto de cambio",
              "promptHtml": "<p>Estudia la continuidad en \\(x=1\\) de</p><div class=\"math-display\">\\[\nf(x)=\n\\begin{cases}\nx,& x<1,\\\\\n3-x,& x\\geq 1.\n\\end{cases}\n\\]</div>",
              "answerHtml": "<p>No es continua en \\(x=1\\). Hay un salto.</p>",
              "solutionHtml": "<div class=\"math-display\">\\[\n\\lim_{x\\to 1^-}f(x)=1,\\qquad \\lim_{x\\to 1^+}f(x)=2,\\qquad f(1)=2.\n\\]</div><p>Como los laterales no coinciden, hay una discontinuidad de salto.</p>"
            },
            {
              "tagId": "GX-C08.S08-02",
              "title": "Valores de una funcion a trozos",
              "promptHtml": "<p>Sea</p><div class=\"math-display\">\\[\ng(x)=\n\\begin{cases}\n2-x,& x\\leq 2,\\\\\nx-2,& x>2.\n\\end{cases}\n\\]</div><p>Calcula \\(g(2)\\) y describe su continuidad en ese punto.</p>",
              "answerHtml": "<div class=\"math-display\">\\[\ng(2)=0\n\\]</div><p>y es continua en \\(x=2\\).</p>",
              "solutionHtml": "<p>Como el primer tramo incluye \\(x=2\\),</p><div class=\"math-display\">\\[\ng(2)=2-2=0.\n\\]</div><p>Los laterales tambien valen \\(0\\), porque</p><div class=\"math-display\">\\[\n\\lim_{x\\to 2^-}(2-x)=0,\\qquad \\lim_{x\\to 2^+}(x-2)=0.\n\\]</div><p>Por tanto, la funcion es continua en \\(x=2\\).</p>"
            }
          ],
          "practice": {
            "label": "Practica autonoma graduada",
            "items": [
              {
                "tagId": "PX-C08.S08-01",
                "prompt": "Estudia la continuidad en \\(x=0\\) de \\(f(x)=\\begin{cases}x+2,&x<0\\\\x^2+2,&x\\geq0\\end{cases}\\)."
              },
              {
                "tagId": "PX-C08.S08-02",
                "prompt": "Estudia la continuidad en \\(x=1\\) de \\(f(x)=\\begin{cases}2x,&x<1\\\\x+1,&x\\geq1\\end{cases}\\)."
              },
              {
                "tagId": "PX-C08.S08-03",
                "prompt": "Calcula \\(f(2)\\) si \\(f(x)=\\begin{cases}x^2,&x<2\\\\3x-2,&x\\geq2\\end{cases}\\)."
              },
              {
                "tagId": "PX-C08.S08-04",
                "prompt": "Indica si la grafica de \\(f(x)=\\begin{cases}-x,&x<0\\\\x,&x\\geq0\\end{cases}\\) tiene pico o salto en \\(x=0\\)."
              },
              {
                "tagId": "PX-C08.S08-05",
                "prompt": "Estudia la continuidad en \\(x=-1\\) de \\(f(x)=\\begin{cases}x+3,&x<-1\\\\2,&x\\geq-1\\end{cases}\\)."
              },
              {
                "tagId": "PX-C08.S08-06",
                "prompt": "Describe brevemente la grafica de \\(f(x)=\\begin{cases}1,&x<0\\\\x+1,&x\\geq0\\end{cases}\\)."
              }
            ],
            "answersHtml": "<ol><li><p>Si, es continua</p></li><li><p>Si, es continua</p></li><li><p>\\(4\\)</p></li><li><p>Tiene un pico, no un salto</p></li><li><p>Si, es continua</p></li><li><p>Semirrecta horizontal \\(y=1\\) a la izquierda y recta \\(y=x+1\\) a la derecha, unidas en \\((0,1)\\)</p></li></ol>",
            "solutionsHtml": "<ol><li><p>Los laterales y el valor en \\(0\\) valen \\(2\\), luego es continua.</p></li><li><p>En \\(x=1\\), ambos tramos dan \\(2\\), asi que enlazan sin salto.</p></li><li><p>El segundo tramo incluye \\(x=2\\), luego</p><div class=\"math-display\">\\[\n  f(2)=3\\cdot 2-2=4.\n  \\]</div></li><li><p>Los laterales coinciden en \\(0\\), pero cambia la pendiente; la grafica forma un pico.</p></li><li><p>El primer tramo tiende a \\(2\\) al acercarse a \\(-1\\), y el segundo vale \\(2\\) en ese punto.</p></li><li><p>La descripcion sale directamente de cada formula y de la continuidad en \\((0,1)\\).</p></li></ol>"
          },
          "challenge": {}
        },
        {
          "id": "C08.S09",
          "title": "Continuidad con parametros",
          "rawTitle": "[C08.S09] Continuidad con parametros",
          "objectives": [
            {
              "label": "Objetivos de aprendizaje",
              "html": "<ul><li><p>Hallar parametros para que una funcion sea continua.</p></li><li><p>Traducir una condicion de continuidad a una igualdad de limites y valores.</p></li></ul>"
            }
          ],
          "prerequisites": [
            {
              "label": "Prerrequisitos",
              "html": "<ul><li><p>Limites laterales y resolucion de ecuaciones sencillas.</p></li></ul>"
            }
          ],
          "theory": {
            "title": "Idea minima",
            "titleText": "Idea minima",
            "tagId": "",
            "html": "<p>Cuando una funcion depende de un parametro y se quiere continuidad en un punto, hay que hacer coincidir limite y valor. En una funcion a trozos, eso suele dar una ecuacion para el parametro.</p>"
          },
          "method": {
            "title": "Como reconocer y resolver",
            "titleText": "Como reconocer y resolver",
            "tagId": "",
            "html": "<ol><li><p>Localiza el punto donde la continuidad esta en duda.</p></li><li><p>Calcula el limite por la izquierda y por la derecha, o simplifica la expresion.</p></li><li><p>Iguala el valor limite con la definicion puntual y resuelve el parametro.</p></li></ol>"
          },
          "solvedExample": {
            "title": "[EX-C08.S09-01] Elegir el valor que rellena el agujero",
            "titleText": "Elegir el valor que rellena el agujero",
            "tagId": "EX-C08.S09-01",
            "html": "<p>Determina \\(a\\) para que</p><div class=\"math-display\">\\[\nf(x)=\n\\begin{cases}\n\\dfrac{x^2-1}{x-1},& x\\neq 1,\\\\\na,& x=1\n\\end{cases}\n\\]</div><p>sea continua en \\(x=1\\).</p><p><strong>Desarrollo.</strong> Para \\(x\\neq 1\\),</p><div class=\"math-display\">\\[\n\\frac{x^2-1}{x-1}=x+1.\n\\]</div><p>Luego</p><div class=\"math-display\">\\[\n\\lim_{x\\to 1}f(x)=\\lim_{x\\to 1}(x+1)=2.\n\\]</div><p>Para que la continuidad se cumpla, el valor de la funcion en \\(x=1\\) debe coincidir con ese limite:</p><div class=\"math-display\">\\[\na=2.\n\\]</div><p><strong>Respuesta final.</strong></p><div class=\"math-display\">\\[\na=2.\n\\]</div>"
          },
          "commonError": {
            "title": "Igualar solo un lateral",
            "titleText": "Igualar solo un lateral",
            "tagId": "",
            "html": "<p>Si la funcion es a trozos, no basta con mirar una sola formula. La continuidad exige un unico valor comun desde ambos lados y en el propio punto.</p>"
          },
          "guidedExercises": [
            {
              "tagId": "GX-C08.S09-01",
              "title": "Parametro en un salto potencial",
              "promptHtml": "<p>Halla \\(k\\) para que</p><div class=\"math-display\">\\[\nf(x)=\n\\begin{cases}\nkx+1,& x<2,\\\\\n5,& x\\geq 2\n\\end{cases}\n\\]</div><p>sea continua en \\(x=2\\).</p>",
              "answerHtml": "<div class=\"math-display\">\\[\nk=2.\n\\]</div>",
              "solutionHtml": "<p>La continuidad en \\(x=2\\) exige</p><div class=\"math-display\">\\[\n2k+1=5.\n\\]</div><p>De ahi</p><div class=\"math-display\">\\[\n2k=4 \\Longrightarrow k=2.\n\\]</div>"
            },
            {
              "tagId": "GX-C08.S09-02",
              "title": "Otro punto de union",
              "promptHtml": "<p>Halla \\(m\\) para que</p><div class=\"math-display\">\\[\nf(x)=\n\\begin{cases}\nx+m,& x<0,\\\\\nx^2+1,& x\\geq 0\n\\end{cases}\n\\]</div><p>sea continua en \\(x=0\\).</p>",
              "answerHtml": "<div class=\"math-display\">\\[\nm=1.\n\\]</div>",
              "solutionHtml": "<div class=\"math-display\">\\[\n\\lim_{x\\to 0^-}(x+m)=m,\\qquad f(0)=0^2+1=1.\n\\]</div><p>Para continuidad debe cumplirse \\(m=1\\).</p>"
            }
          ],
          "practice": {
            "label": "Practica autonoma graduada",
            "items": [
              {
                "tagId": "PX-C08.S09-01",
                "prompt": "Halla \\(a\\) para que \\(f(x)=\\begin{cases}ax+2,&x<1\\\\5,&x\\geq1\\end{cases}\\) sea continua en \\(x=1\\)."
              },
              {
                "tagId": "PX-C08.S09-02",
                "prompt": "Halla \\(b\\) para que \\(f(x)=\\begin{cases}x+b,&x<3\\\\7,&x\\geq3\\end{cases}\\) sea continua en \\(x=3\\)."
              },
              {
                "tagId": "PX-C08.S09-03",
                "prompt": "Halla \\(c\\) para que \\(f(x)=\\begin{cases}c,&x<0\\\\x^2+4,&x\\geq0\\end{cases}\\) sea continua en \\(x=0\\)."
              },
              {
                "tagId": "PX-C08.S09-04",
                "prompt": "Halla \\(d\\) para que \\(f(x)=\\begin{cases}2x+d,&x<2\\\\x+4,&x\\geq2\\end{cases}\\) sea continua en \\(x=2\\)."
              },
              {
                "tagId": "PX-C08.S09-05",
                "prompt": "Halla \\(k\\) para que \\(f(x)=\\begin{cases}\\dfrac{x^2-9}{x-3},&x\\neq3\\\\k,&x=3\\end{cases}\\) sea continua en \\(x=3\\)."
              },
              {
                "tagId": "PX-C08.S09-06",
                "prompt": "Halla \\(m\\) para que \\(f(x)=\\begin{cases}mx-1,&x<1\\\\2x-2,&x\\geq1\\end{cases}\\) sea continua en \\(x=1\\)."
              }
            ],
            "answersHtml": "<ol><li><p>\\(a=3\\)</p></li><li><p>\\(b=4\\)</p></li><li><p>\\(c=4\\)</p></li><li><p>\\(d=2\\)</p></li><li><p>\\(k=6\\)</p></li><li><p>\\(m=1\\)</p></li></ol>",
            "solutionsHtml": "<ol><li><p>En \\(x=1\\): \\(a+2=5\\), luego \\(a=3\\).</p></li><li><p>En \\(x=3\\): \\(3+b=7\\), luego \\(b=4\\).</p></li><li><p>En \\(x=0\\): el valor del tramo derecho es \\(4\\), asi que \\(c=4\\).</p></li><li><p>En \\(x=2\\): \\(4+d=6\\), luego \\(d=2\\).</p></li><li><p>Se simplifica a \\(x+3\\) para \\(x\\neq 3\\), asi que el limite vale \\(6\\).</p></li><li><p>En \\(x=1\\): \\(m-1=0\\), luego \\(m=1\\).</p></li></ol>"
          },
          "challenge": {}
        },
        {
          "id": "C08.S10",
          "title": "Modelos de evolucion a largo plazo",
          "rawTitle": "[C08.S10] Modelos de evolucion a largo plazo",
          "objectives": [
            {
              "label": "Objetivos de aprendizaje",
              "html": "<ul><li><p>Interpretar limites y asintotas en un contexto.</p></li><li><p>Traducir el valor inicial y la evolucion a largo plazo de un modelo.</p></li></ul>"
            }
          ],
          "prerequisites": [
            {
              "label": "Prerrequisitos",
              "html": "<ul><li><p>Limites en el infinito y lectura de funciones racionales sencillas.</p></li></ul>"
            }
          ],
          "theory": {
            "title": "Idea minima",
            "titleText": "Idea minima",
            "tagId": "",
            "html": "<p>En un modelo real, el valor de \\(f(0)\\) suele representar la situacion inicial y \\(\\lim_{x\\to\\infty}f(x)\\) describe el comportamiento a largo plazo. Una asintota horizontal no es un techo instantaneo, sino una tendencia.</p>"
          },
          "method": {
            "title": "Como reconocer y resolver",
            "titleText": "Como reconocer y resolver",
            "tagId": "",
            "html": "<ol><li><p>Identifica que representa la variable \\(x\\).</p></li><li><p>Calcula el valor inicial si el contexto lo pide.</p></li><li><p>Estudia el limite a largo plazo e interpretalo con palabras, no solo con una formula.</p></li></ol>"
          },
          "solvedExample": {
            "title": "[EX-C08.S10-01] Temperatura de un deposito",
            "titleText": "Temperatura de un deposito",
            "tagId": "EX-C08.S10-01",
            "html": "<p>La temperatura de un deposito, en grados, viene dada por</p><div class=\"math-display\">\\[\nT(t)=18+\\frac{120}{t+2},\n\\]</div><p>donde \\(t\\) se mide en horas. Calcula la temperatura inicial y el valor al que tiende la temperatura cuando pasa mucho tiempo.</p><p><strong>Desarrollo.</strong> La temperatura inicial es</p><div class=\"math-display\">\\[\nT(0)=18+\\frac{120}{2}=78.\n\\]</div><p>Para tiempos muy grandes,</p><div class=\"math-display\">\\[\n\\lim_{t\\to\\infty}T(t)=18+\\lim_{t\\to\\infty}\\frac{120}{t+2}=18.\n\\]</div><p><strong>Interpretacion.</strong> El deposito parte de \\(78^\\circ\\) y despues se aproxima a \\(18^\\circ\\), que actua como temperatura de equilibrio.</p><p><strong>Respuesta final.</strong></p><div class=\"math-display\">\\[\nT(0)=78,\\qquad \\lim_{t\\to\\infty}T(t)=18.\n\\]</div>"
          },
          "commonError": {
            "title": "Leer el limite como si se alcanzara de inmediato",
            "titleText": "Leer el limite como si se alcanzara de inmediato",
            "tagId": "",
            "html": "<p>Que una funcion tienda a \\(18\\) no significa que valga exactamente \\(18\\) en los primeros instantes. El limite habla del comportamiento cuando el tiempo crece mucho.</p>"
          },
          "guidedExercises": [
            {
              "tagId": "GX-C08.S10-01",
              "title": "Valor inicial",
              "promptHtml": "<p>Sea \\(P(t)=50+\\dfrac{30}{t+1}\\). Halla \\(P(0)\\).</p>",
              "answerHtml": "<div class=\"math-display\">\\[\n80.\n\\]</div>",
              "solutionHtml": "<div class=\"math-display\">\\[\nP(0)=50+\\frac{30}{1}=80.\n\\]</div>"
            },
            {
              "tagId": "GX-C08.S10-02",
              "title": "Tendencia",
              "promptHtml": "<p>Para \\(Q(t)=5-\\dfrac{2}{t+3}\\), halla \\(\\lim_{t\\to\\infty}Q(t)\\).</p>",
              "answerHtml": "<div class=\"math-display\">\\[\n5.\n\\]</div>",
              "solutionHtml": "<p>El termino fraccionario tiende a \\(0\\), asi que</p><div class=\"math-display\">\\[\n\\lim_{t\\to\\infty}Q(t)=5.\n\\]</div>"
            }
          ],
          "practice": {
            "label": "Practica autonoma graduada",
            "items": [
              {
                "tagId": "PX-C08.S10-01",
                "prompt": "Sea \\(f(t)=10+\\dfrac{40}{t+2}\\). Halla \\(f(0)\\)."
              },
              {
                "tagId": "PX-C08.S10-02",
                "prompt": "Sea \\(g(t)=3+\\dfrac{9}{t+1}\\). Halla \\(\\lim_{t\\to\\infty}g(t)\\)."
              },
              {
                "tagId": "PX-C08.S10-03",
                "prompt": "Sea \\(h(t)=100-\\dfrac{60}{t+4}\\). Halla el valor inicial y el valor limite."
              },
              {
                "tagId": "PX-C08.S10-04",
                "prompt": "Un deposito se modeliza con \\(V(t)=20+\\dfrac{80}{t+5}\\). Que valor marca a largo plazo?"
              },
              {
                "tagId": "PX-C08.S10-05",
                "prompt": "Sea \\(M(t)=7-\\dfrac{14}{t+2}\\). Halla \\(M(0)\\)."
              },
              {
                "tagId": "PX-C08.S10-06",
                "prompt": "Sea \\(N(t)=4+\\dfrac{12}{t+6}\\). Halla \\(N(0)\\) y \\(\\lim_{t\\to\\infty}N(t)\\)."
              }
            ],
            "answersHtml": "<ol><li><p>\\(30\\)</p></li><li><p>\\(3\\)</p></li><li><p>Inicial \\(85\\). Limite \\(100\\)</p></li><li><p>\\(20\\)</p></li><li><p>\\(0\\)</p></li><li><p>\\(6\\) y \\(4\\)</p></li></ol>",
            "solutionsHtml": "<ol><li><div class=\"math-display\">\\[\n  f(0)=10+\\frac{40}{2}=30.\n  \\]</div></li><li><p>El termino fraccionario tiende a \\(0\\), luego el limite es \\(3\\).</p></li><li><div class=\"math-display\">\\[\n  h(0)=100-\\frac{60}{4}=85,\\qquad \\lim_{t\\to\\infty}h(t)=100.\n  \\]</div></li><li><p>La asintota horizontal es \\(y=20\\), asi que el modelo se aproxima a \\(20\\).</p></li><li><div class=\"math-display\">\\[\n  M(0)=7-\\frac{14}{2}=0.\n  \\]</div></li><li><div class=\"math-display\">\\[\n  N(0)=4+\\frac{12}{6}=6,\\qquad \\lim_{t\\to\\infty}N(t)=4.\n  \\]</div></li></ol>"
          },
          "challenge": {}
        },
        {
          "id": "C08.S11",
          "title": "Ampliacion y estilo EBAU en limites y continuidad",
          "rawTitle": "[C08.S11] Ampliacion y estilo EBAU en limites y continuidad",
          "objectives": [
            {
              "label": "Objetivos de aprendizaje",
              "html": "<ul><li><p>Encadenar varias tecnicas de limites en items de examen.</p></li><li><p>Separar claramente contenido nuclear y ampliacion.</p></li></ul>"
            }
          ],
          "prerequisites": [
            {
              "label": "Prerrequisitos",
              "html": "<ul><li><p>Factorizacion, racionalizacion, continuidad y asintotas.</p></li></ul>"
            }
          ],
          "theory": {
            "title": "Bloque de ampliacion",
            "titleText": "Bloque de ampliacion",
            "tagId": "",
            "html": "<p>En items de estilo EBAU suele aparecer una combinacion de lectura estructural: detectar la indeterminacion, elegir tecnica, justificar continuidad o describir una asintota con precision.</p>"
          },
          "method": {
            "title": "Como reconocer y resolver",
            "titleText": "Como reconocer y resolver",
            "tagId": "",
            "html": "<ol><li><p>Antes de operar, clasifica el tipo de limite.</p></li><li><p>Elige una tecnica dominante: comparacion de grados, factorizacion o racionalizacion.</p></li><li><p>Redacta al final una conclusion completa, no solo un numero.</p></li></ol>"
          },
          "solvedExample": {
            "title": "[EX-C08.S11-01] Racionalizacion con parametro de examen",
            "titleText": "Racionalizacion con parametro de examen",
            "tagId": "EX-C08.S11-01",
            "html": "<p>Calcula</p><div class=\"math-display\">\\[\n\\lim_{x\\to\\infty}\\left(\\sqrt{x^2+3x}-x\\right).\n\\]</div><p><strong>Desarrollo.</strong> No conviene sustituir ni aproximar a ojo. Racionalizamos:</p><div class=\"math-display\">\\[\n\\sqrt{x^2+3x}-x=\n\\frac{(\\sqrt{x^2+3x}-x)(\\sqrt{x^2+3x}+x)}{\\sqrt{x^2+3x}+x}\n=\\frac{3x}{\\sqrt{x^2+3x}+x}.\n\\]</div><p>Factorizamos \\(x\\) en el denominador:</p><div class=\"math-display\">\\[\n\\frac{3x}{x\\sqrt{1+\\frac{3}{x}}+x}\n=\\frac{3}{\\sqrt{1+\\frac{3}{x}}+1}.\n\\]</div><p>Ahora si,</p><div class=\"math-display\">\\[\n\\lim_{x\\to\\infty}\\left(\\sqrt{x^2+3x}-x\\right)=\\frac{3}{2}.\n\\]</div><p><strong>Respuesta final.</strong></p><div class=\"math-display\">\\[\n\\lim_{x\\to\\infty}\\left(\\sqrt{x^2+3x}-x\\right)=\\frac{3}{2}.\n\\]</div>"
          },
          "commonError": {
            "title": "Restar dos cantidades muy grandes a ojo",
            "titleText": "Restar dos cantidades muy grandes a ojo",
            "tagId": "",
            "html": "<p>En expresiones del tipo \\(\\sqrt{x^2+\\cdots}-x\\), sustituir informalmente por ``algo parecido a \\(x\\)'' hace perder el termino fino que determina el limite. La racionalizacion evita ese error.</p>"
          },
          "guidedExercises": [
            {
              "tagId": "GX-C08.S11-01",
              "title": "Limite mixto",
              "promptHtml": "<p>Calcula</p><div class=\"math-display\">\\[\n\\lim_{x\\to 2}\\frac{x^2-4}{x^2-3x+2}.\n\\]</div>",
              "answerHtml": "<div class=\"math-display\">\\[\n4.\n\\]</div>",
              "solutionHtml": "<div class=\"math-display\">\\[\n\\frac{x^2-4}{x^2-3x+2}=\n\\frac{(x-2)(x+2)}{(x-2)(x-1)}=\\frac{x+2}{x-1}.\n\\]</div><p>Al sustituir \\(x=2\\), queda \\(4\\).</p>"
            },
            {
              "tagId": "GX-C08.S11-02",
              "title": "Continuidad de examen",
              "promptHtml": "<p>Halla \\(a\\) para que</p><div class=\"math-display\">\\[\nf(x)=\n\\begin{cases}\n\\dfrac{x^2-1}{x-1},& x<1,\\\\\na,& x=1,\\\\\nx+1,& x>1\n\\end{cases}\n\\]</div><p>sea continua en \\(x=1\\).</p>",
              "answerHtml": "<div class=\"math-display\">\\[\na=2.\n\\]</div>",
              "solutionHtml": "<p>Por la izquierda, el cociente simplifica a \\(x+1\\), de modo que el limite lateral vale \\(2\\). Por la derecha, \\(x+1\\) tambien tiende a \\(2\\). Para continuidad debe cumplirse \\(a=2\\).</p>"
            }
          ],
          "practice": {
            "label": "Practica autonoma graduada",
            "items": [
              {
                "tagId": "PX-C08.S11-01",
                "prompt": "Calcula \\(\\lim_{x\\to\\infty}\\left(\\sqrt{x^2+2x}-x\\right)\\)."
              },
              {
                "tagId": "PX-C08.S11-02",
                "prompt": "Calcula \\(\\lim_{x\\to 1}\\dfrac{x^2-1}{x^2-2x+1}\\)."
              },
              {
                "tagId": "PX-C08.S11-03",
                "prompt": "Halla \\(k\\) para que \\(f(x)=\\begin{cases}kx+1,&x<2\\\\x+3,&x\\geq2\\end{cases}\\) sea continua en \\(x=2\\)."
              },
              {
                "tagId": "PX-C08.S11-04",
                "prompt": "Estudia las asintotas de \\(f(x)=\\dfrac{x^2+1}{x+2}\\)."
              },
              {
                "tagId": "PX-C08.S11-05",
                "prompt": "Calcula \\(\\lim_{x\\to 0}\\dfrac{\\sqrt{1+2x}-1}{x}\\)."
              },
              {
                "tagId": "PX-C08.S11-06",
                "prompt": "Decide si \\(f(x)=\\dfrac{x^2-9}{x-3}\\) es continua en \\(x=3\\)."
              }
            ],
            "answersHtml": "<ol><li><p>\\(1\\)</p></li><li><p>No existe como numero finito; diverge</p></li><li><p>\\(k=2\\)</p></li><li><p>Vertical \\(x=-2\\). Oblicua \\(y=x-2\\)</p></li><li><p>\\(1\\)</p></li><li><p>No</p></li></ol>",
            "solutionsHtml": "<ol><li><p>Racionalizando queda</p><div class=\"math-display\">\\[\n  \\frac{2x}{\\sqrt{x^2+2x}+x}=\\frac{2}{\\sqrt{1+\\frac{2}{x}}+1}\\to 1.\n  \\]</div></li><li><div class=\"math-display\">\\[\n  \\frac{x^2-1}{x^2-2x+1}=\\frac{(x-1)(x+1)}{(x-1)^2}=\\frac{x+1}{x-1},\n  \\]</div><p>que diverge al acercarse a \\(1\\).</p></li><li><p>En \\(x=2\\), \\(2k+1=5\\), luego \\(k=2\\).</p></li><li><p>Division:</p><div class=\"math-display\">\\[\n  \\frac{x^2+1}{x+2}=x-2+\\frac{5}{x+2}.\n  \\]</div></li><li><p>Racionalizando:</p><div class=\"math-display\">\\[\n  \\frac{\\sqrt{1+2x}-1}{x}=\\frac{2}{\\sqrt{1+2x}+1}\\to 1.\n  \\]</div></li><li><p>El limite en \\(x=3\\) existe y vale \\(6\\), pero la funcion original no esta definida en ese punto, asi que no es continua.</p></li></ol>"
          },
          "challenge": {}
        }
      ]
    },
    {
      "id": "C09",
      "slug": "09_derivadas_aplicaciones",
      "title": "Derivadas y aplicaciones",
      "summaryHtml": "<p>Este capitulo desarrolla las secciones <code>C09.S01-C09.S08</code> de la matriz de cobertura a partir de <code>sources/Relacion ejercicios tema 9. Derivadas y sus aplicaciones.pdf</code>. Se separan con claridad los apartados nucleares de reglas, estudio local y global, rectas tangentes, parametros, derivabilidad y optimizacion, dejando el bloque de ampliacion marcado como <code>C09.S08</code>.</p>",
      "studyRouteHtml": "",
      "sectionCount": 8,
      "sections": [
        {
          "id": "C09.S01",
          "title": "Reglas de derivacion",
          "rawTitle": "[C09.S01] Reglas de derivacion",
          "objectives": [
            {
              "label": "Objetivos de aprendizaje",
              "html": "<ul><li><p>Aplicar con seguridad las reglas basicas de derivacion.</p></li><li><p>Distinguir cuando conviene usar suma, producto, cociente o cadena.</p></li><li><p>Simplificar el resultado sin perder la estructura de la derivada.</p></li></ul>"
            }
          ],
          "prerequisites": [
            {
              "label": "Prerrequisitos",
              "html": "<ul><li><p>Operaciones con polinomios, radicales, logaritmos y exponenciales.</p></li><li><p>Reconocer una composicion de funciones sencilla.</p></li></ul>"
            }
          ],
          "theory": {
            "title": "Reglas minimas de trabajo",
            "titleText": "Reglas minimas de trabajo",
            "tagId": "",
            "html": "<p>Si \\(f\\) y \\(g\\) son derivables, entonces:</p><div class=\"math-display\">\\[\n(f+g)'=f'+g',\\qquad (kf)'=kf',\\qquad (fg)'=f'g+fg',\n\\]</div><div class=\"math-display\">\\[\n\\left(\\frac{f}{g}\\right)'=\\frac{f'g-fg'}{g^2}\\quad (g\\neq 0),\n\\qquad (f\\circ g)'=(f'\\circ g)\\cdot g'.\n\\]</div><p>Ademas,</p><div class=\"math-display\">\\[\n(x^n)'=nx^{n-1},\\qquad (\\sen x)'=\\cos x,\\qquad (\\cos x)'=-\\sen x,\n\\]</div><div class=\"math-display\">\\[\n(e^x)'=e^x,\\qquad (\\ln x)'=\\frac{1}{x}.\n\\]</div>"
          },
          "method": {
            "title": "Como reconocer la regla adecuada",
            "titleText": "Como reconocer la regla adecuada",
            "tagId": "",
            "html": "<ol><li><p>Separa primero las sumas o restas exteriores.</p></li><li><p>Si ves dos factores multiplicandose, prueba la regla del producto.</p></li><li><p>Si aparece una fraccion, piensa en el cociente.</p></li><li><p>Si una funcion esta ``metida dentro'' de otra, activa la regla de la cadena.</p></li><li><p>Solo al final simplifica; antes conviene conservar la estructura para no perder signos.</p></li></ol>"
          },
          "solvedExample": {
            "title": "[EX-C09.S01-01] Producto con radical",
            "titleText": "Producto con radical",
            "tagId": "EX-C09.S01-01",
            "html": "<p>Deriva</p><div class=\"math-display\">\\[\nf(x)=(x^2+1)\\sqrt{x+2}.\n\\]</div><p><strong>Lectura del enunciado.</strong> Hay un producto entre un polinomio y una raiz, asi que la estructura dominante es la regla del producto. Dentro de la raiz aparece ademas una funcion lineal, por lo que se usa tambien la cadena.</p><p><strong>Desarrollo.</strong> Si</p><div class=\"math-display\">\\[\nu(x)=x^2+1,\\qquad v(x)=\\sqrt{x+2}=(x+2)^{1/2},\n\\]</div><p>entonces</p><div class=\"math-display\">\\[\nu'(x)=2x,\\qquad v'(x)=\\frac{1}{2}(x+2)^{-1/2}\\cdot 1=\\frac{1}{2\\sqrt{x+2}}.\n\\]</div><p>Por tanto,</p><div class=\"math-display\">\\[\nf'(x)=u'v+uv'=2x\\sqrt{x+2}+\\frac{x^2+1}{2\\sqrt{x+2}}.\n\\]</div><p><strong>Comprobacion.</strong> El primer sumando viene de derivar el polinomio y el segundo de derivar la raiz. No falta ningun factor de cadena.</p><p><strong>Respuesta final.</strong></p><div class=\"math-display\">\\[\nf'(x)=2x\\sqrt{x+2}+\\frac{x^2+1}{2\\sqrt{x+2}}.\n\\]</div>"
          },
          "commonError": {
            "title": "Derivar la raiz como si fuera \\(\\sqrt{x}\\)",
            "titleText": "Derivar la raiz como si fuera \\(\\sqrt{x}\\)",
            "tagId": "",
            "html": "<p>En \\(\\sqrt{x+2}\\) no basta escribir \\(\\frac{1}{2\\sqrt{x+2}}\\) por intuicion y olvidarse del interior. En este ejemplo el interior deriva a \\(1\\), pero en \\(\\sqrt{2x+5}\\) apareceria un factor adicional \\(2\\). Conviene escribir la cadena de forma explicita antes de simplificar.</p>"
          },
          "guidedExercises": [
            {
              "tagId": "GX-C09.S01-01",
              "title": "Cociente",
              "promptHtml": "<p>Deriva</p><div class=\"math-display\">\\[\ng(x)=\\frac{3x^2-1}{x+1}.\n\\]</div>",
              "answerHtml": "<div class=\"math-display\">\\[\ng'(x)=\\frac{3x^2+6x+1}{(x+1)^2}.\n\\]</div>",
              "solutionHtml": "<p>Aplicamos el cociente:</p><div class=\"math-display\">\\[\ng'(x)=\\frac{(6x)(x+1)-(3x^2-1)\\cdot 1}{(x+1)^2}\n=\\frac{6x^2+6x-3x^2+1}{(x+1)^2}\n=\\frac{3x^2+6x+1}{(x+1)^2}.\n\\]</div>"
            },
            {
              "tagId": "GX-C09.S01-02",
              "title": "Cadena con radical",
              "promptHtml": "<p>Deriva</p><div class=\"math-display\">\\[\nh(x)=\\sqrt{2x+5}.\n\\]</div>",
              "answerHtml": "<div class=\"math-display\">\\[\nh'(x)=\\frac{1}{\\sqrt{2x+5}}.\n\\]</div>",
              "solutionHtml": "<p>Escribimos \\(h(x)=(2x+5)^{1/2}\\). Entonces</p><div class=\"math-display\">\\[\nh'(x)=\\frac{1}{2}(2x+5)^{-1/2}\\cdot 2=\\frac{1}{\\sqrt{2x+5}}.\n\\]</div>"
            }
          ],
          "practice": {
            "label": "Practica autonoma graduada",
            "items": [
              {
                "tagId": "PX-C09.S01-01",
                "prompt": "Deriva \\(f(x)=x^4-3x+2\\)."
              },
              {
                "tagId": "PX-C09.S01-02",
                "prompt": "Deriva \\(f(x)=(x^2+1)(x-3)\\)."
              },
              {
                "tagId": "PX-C09.S01-03",
                "prompt": "Deriva \\(f(x)=\\dfrac{2x+1}{x-2}\\)."
              },
              {
                "tagId": "PX-C09.S01-04",
                "prompt": "Deriva \\(f(x)=\\sqrt{x^2+4}\\)."
              },
              {
                "tagId": "PX-C09.S01-05",
                "prompt": "Deriva \\(f(x)=e^{3x}\\)."
              },
              {
                "tagId": "PX-C09.S01-06",
                "prompt": "Deriva \\(f(x)=\\ln(x^2+1)\\)."
              },
              {
                "tagId": "PX-C09.S01-07",
                "prompt": "Deriva \\(f(x)=\\sen x\\cos x\\)."
              },
              {
                "tagId": "PX-C09.S01-08",
                "prompt": "Deriva \\(f(x)=(x^2-1)^3\\)."
              }
            ],
            "answersHtml": "<ol><li><p>\\(4x^3-3\\)</p></li><li><p>\\(3x^2-6x+1\\)</p></li><li><p>\\(-\\dfrac{5}{(x-2)^2}\\)</p></li><li><p>\\(\\dfrac{x}{\\sqrt{x^2+4}}\\)</p></li><li><p>\\(3e^{3x}\\)</p></li><li><p>\\(\\dfrac{2x}{x^2+1}\\)</p></li><li><p>\\(\\cos^2 x-\\sen^2 x\\)</p></li><li><p>\\(6x(x^2-1)^2\\)</p></li></ol>",
            "solutionsHtml": "<ol><li><p>\\((x^4-3x+2)'=4x^3-3\\).</p></li><li><div class=\"math-display\">\\[\n  f'(x)=2x(x-3)+(x^2+1)=3x^2-6x+1.\n  \\]</div></li><li><div class=\"math-display\">\\[\n  f'(x)=\\frac{2(x-2)-(2x+1)}{(x-2)^2}=-\\frac{5}{(x-2)^2}.\n  \\]</div></li><li><div class=\"math-display\">\\[\n  f'(x)=\\frac{1}{2}(x^2+4)^{-1/2}\\cdot 2x=\\frac{x}{\\sqrt{x^2+4}}.\n  \\]</div></li><li><p>\\((e^{3x})'=3e^{3x}\\).</p></li><li><div class=\"math-display\">\\[\n  (\\ln(x^2+1))'=\\frac{2x}{x^2+1}.\n  \\]</div></li><li><div class=\"math-display\">\\[\n  (\\sen x\\cos x)'=\\cos x\\cos x+\\sen x(-\\sen x)=\\cos^2 x-\\sen^2 x.\n  \\]</div></li><li><div class=\"math-display\">\\[\n  \\bigl((x^2-1)^3\\bigr)'=3(x^2-1)^2\\cdot 2x=6x(x^2-1)^2.\n  \\]</div></li></ol>"
          },
          "challenge": {}
        },
        {
          "id": "C09.S02",
          "title": "Monotonia, extremos, curvatura e inflexion",
          "rawTitle": "[C09.S02] Monotonia, extremos, curvatura e inflexion",
          "objectives": [
            {
              "label": "Objetivos de aprendizaje",
              "html": "<ul><li><p>Usar la primera derivada para localizar crecimiento y decrecimiento.</p></li><li><p>Clasificar maximos y minimos locales con el cambio de signo de \\(f'\\).</p></li><li><p>Leer la concavidad y los puntos de inflexion con la segunda derivada.</p></li></ul>"
            }
          ],
          "prerequisites": [
            {
              "label": "Prerrequisitos",
              "html": "<ul><li><p>Calculo correcto de derivadas.</p></li><li><p>Tablas de signos e interpretacion de intervalos.</p></li></ul>"
            }
          ],
          "theory": {
            "title": "Que nos dicen las derivadas",
            "titleText": "Que nos dicen las derivadas",
            "tagId": "",
            "html": "<p>Si \\(f'(x)>0\\), la funcion crece; si \\(f'(x)<0\\), decrece. Los puntos donde \\(f'(x)=0\\) o no existe son candidatos a extremo. Para la curvatura:</p><div class=\"math-display\">\\[\nf''(x)>0 \\Longrightarrow \\text{concavidad hacia arriba},\\qquad\nf''(x)<0 \\Longrightarrow \\text{concavidad hacia abajo}.\n\\]</div><p>Un punto de inflexion aparece cuando cambia el signo de \\(f''\\).</p>"
          },
          "method": {
            "title": "Esquema de estudio",
            "titleText": "Esquema de estudio",
            "tagId": "",
            "html": "<ol><li><p>Deriva una vez y resuelve \\(f'(x)=0\\).</p></li><li><p>Ordena los puntos criticos y estudia el signo de \\(f'\\) entre ellos.</p></li><li><p>Deriva una segunda vez si se pide curvatura o inflexion.</p></li><li><p>Resume siempre con intervalos y con coordenadas de los puntos destacados.</p></li></ol>"
          },
          "solvedExample": {
            "title": "[EX-C09.S02-01] Cubica con maximo, minimo e inflexion",
            "titleText": "Cubica con maximo, minimo e inflexion",
            "tagId": "EX-C09.S02-01",
            "html": "<p>Estudia monotonia, extremos y curvatura de</p><div class=\"math-display\">\\[\nf(x)=x^3-3x.\n\\]</div><p><strong>Desarrollo.</strong> Derivamos:</p><div class=\"math-display\">\\[\nf'(x)=3x^2-3=3(x-1)(x+1).\n\\]</div><p>Los puntos criticos son \\(x=-1\\) y \\(x=1\\). El signo de \\(f'\\) queda:</p><div class=\"math-display\">\\[\n\\begin{array}{c|ccc}\nx & (-\\infty,-1) & (-1,1) & (1,\\infty)\\\\ \\hline\nf'(x) & + & - & +\n\\end{array}\n\\]</div><p>Por tanto, la funcion crece en \\((-\\infty,-1)\\cup(1,\\infty)\\) y decrece en \\((-1,1)\\).</p><p>Calculamos los valores:</p><div class=\"math-display\">\\[\nf(-1)=2,\\qquad f(1)=-2.\n\\]</div><p>Luego hay un maximo local en \\((-1,2)\\) y un minimo local en \\((1,-2)\\).</p><p>Ahora la segunda derivada:</p><div class=\"math-display\">\\[\nf''(x)=6x.\n\\]</div><p>Es negativa si \\(x<0\\) y positiva si \\(x>0\\), asi que la curvatura cambia en \\(x=0\\). Como</p><div class=\"math-display\">\\[\nf(0)=0,\n\\]</div><p>el punto de inflexion es \\((0,0)\\).</p><p><strong>Respuesta final.</strong></p><ul><li><p>Crece en \\((-\\infty,-1)\\cup(1,\\infty)\\).</p></li><li><p>Decrece en \\((-1,1)\\).</p></li><li><p>Maximo local en \\((-1,2)\\) y minimo local en \\((1,-2)\\).</p></li><li><p>Concava hacia abajo en \\((-\\infty,0)\\) y hacia arriba en \\((0,\\infty)\\).</p></li><li><p>Punto de inflexion en \\((0,0)\\).</p></li></ul>"
          },
          "commonError": {
            "title": "Pensar que \\(f'(a)=0\\) implica automaticamente extremo",
            "titleText": "Pensar que \\(f'(a)=0\\) implica automaticamente extremo",
            "tagId": "",
            "html": "<p>Un punto con derivada nula solo es candidato. En \\(f(x)=x^3\\), por ejemplo, \\(f'(0)=0\\) y sin embargo no hay maximo ni minimo. Siempre hay que mirar el signo de \\(f'\\) a ambos lados.</p>"
          },
          "guidedExercises": [
            {
              "tagId": "GX-C09.S02-01",
              "title": "Parabola",
              "promptHtml": "<p>Estudia la monotonia y el extremo de</p><div class=\"math-display\">\\[\ng(x)=x^2-4x+1.\n\\]</div>",
              "answerHtml": "<p>Decrece en \\((-\\infty,2)\\), crece en \\((2,\\infty)\\) y tiene minimo en \\((2,-3)\\).</p>",
              "solutionHtml": "<div class=\"math-display\">\\[\ng'(x)=2x-4=2(x-2).\n\\]</div><p>La derivada es negativa si \\(x<2\\) y positiva si \\(x>2\\). Por eso \\(g\\) decrece primero y crece despues. Ademas,</p><div class=\"math-display\">\\[\ng(2)=4-8+1=-3,\n\\]</div><p>de modo que el minimo local es \\((2,-3)\\).</p>"
            },
            {
              "tagId": "GX-C09.S02-02",
              "title": "Inflexion sin extremo",
              "promptHtml": "<p>Estudia monotonia y curvatura de</p><div class=\"math-display\">\\[\nh(x)=x^3.\n\\]</div>",
              "answerHtml": "<p>Crece en todo \\(\\mathbb{R}\\), es concava hacia abajo en \\((-\\infty,0)\\), hacia arriba en \\((0,\\infty)\\) y tiene punto de inflexion en \\((0,0)\\).</p>",
              "solutionHtml": "<div class=\"math-display\">\\[\nh'(x)=3x^2\\geq 0\n\\]</div><p>para todo \\(x\\), asi que la funcion es creciente en todo \\(\\mathbb{R}\\). Ademas,</p><div class=\"math-display\">\\[\nh''(x)=6x,\n\\]</div><p>negativa si \\(x<0\\) y positiva si \\(x>0\\). Luego la concavidad cambia en \\(x=0\\) y el punto de inflexion es \\((0,0)\\).</p>"
            }
          ],
          "practice": {
            "label": "Practica autonoma graduada",
            "items": [
              {
                "tagId": "PX-C09.S02-01",
                "prompt": "Estudia monotonia y extremos de \\(f(x)=-x^2+4x\\)."
              },
              {
                "tagId": "PX-C09.S02-02",
                "prompt": "Estudia monotonia, extremos e inflexion de \\(f(x)=x^3-6x^2\\)."
              },
              {
                "tagId": "PX-C09.S02-03",
                "prompt": "Estudia monotonia y extremos de \\(f(x)=x^4-2x^2\\)."
              },
              {
                "tagId": "PX-C09.S02-04",
                "prompt": "Halla los extremos absolutos de \\(f(x)=x^2-4x+5\\) en \\([0,3]\\)."
              },
              {
                "tagId": "PX-C09.S02-05",
                "prompt": "Estudia monotonia y curvatura de \\(f(x)=\\ln x\\)."
              },
              {
                "tagId": "PX-C09.S02-06",
                "prompt": "Estudia monotonia y extremos de \\(f(x)=e^x-x\\)."
              }
            ],
            "answersHtml": "<ol><li><p>Crece en \\((-\\infty,2)\\), decrece en \\((2,\\infty)\\) y tiene maximo en \\((2,4)\\)</p></li><li><p>Crece en \\((-\\infty,0)\\cup(4,\\infty)\\), decrece en \\((0,4)\\), maximo en \\((0,0)\\), minimo en \\((4,-32)\\) e inflexion en \\((2,-16)\\)</p></li><li><p>Decrece en \\((-\\infty,-1)\\cup(0,1)\\), crece en \\((-1,0)\\cup(1,\\infty)\\), maximo en \\((0,0)\\) y minimos en \\((-1,-1)\\) y \\((1,-1)\\)</p></li><li><p>Maximo absoluto \\(5\\) en \\(x=0\\); minimo absoluto \\(1\\) en \\(x=2\\)</p></li><li><p>Crece en \\((0,\\infty)\\), es concava hacia abajo en \\((0,\\infty)\\) y no tiene inflexion</p></li><li><p>Decrece en \\((-\\infty,0)\\), crece en \\((0,\\infty)\\) y tiene minimo en \\((0,1)\\)</p></li></ol>",
            "solutionsHtml": "<ol><li><div class=\"math-display\">\\[\n  f'(x)=-2x+4=-2(x-2).\n  \\]</div><p>Es positiva si \\(x<2\\) y negativa si \\(x>2\\). Luego hay maximo en</p><div class=\"math-display\">\\[\n  f(2)=4.\n  \\]</div></li><li><div class=\"math-display\">\\[\n  f'(x)=3x^2-12x=3x(x-4),\\qquad f''(x)=6x-12.\n  \\]</div><p>De aqui salen los intervalos de crecimiento y decrecimiento, el maximo en \\(x=0\\), el minimo en \\(x=4\\) y el cambio de concavidad en \\(x=2\\). Los valores son</p><div class=\"math-display\">\\[\n  f(0)=0,\\qquad f(4)=-32,\\qquad f(2)=-16.\n  \\]</div></li><li><div class=\"math-display\">\\[\n  f'(x)=4x^3-4x=4x(x-1)(x+1).\n  \\]</div><p>La tabla de signos produce los cuatro intervalos indicados. Los valores criticos son</p><div class=\"math-display\">\\[\n  f(-1)=-1,\\qquad f(0)=0,\\qquad f(1)=-1.\n  \\]</div></li><li><p>En \\([0,3]\\) comparamos extremos y punto critico interior:</p><div class=\"math-display\">\\[\n  f(0)=5,\\qquad f(2)=1,\\qquad f(3)=2.\n  \\]</div></li><li><div class=\"math-display\">\\[\n  f'(x)=\\frac{1}{x}>0,\\qquad f''(x)=-\\frac{1}{x^2}<0\n  \\]</div><p>para todo \\(x>0\\).</p></li><li><div class=\"math-display\">\\[\n  f'(x)=e^x-1.\n  \\]</div><p>Se anula en \\(x=0\\), es negativa si \\(x<0\\) y positiva si \\(x>0\\). Ademas,</p><div class=\"math-display\">\\[\n  f(0)=1.\n  \\]</div></li></ol>"
          },
          "challenge": {}
        },
        {
          "id": "C09.S03",
          "title": "Recta tangente y recta normal en un punto",
          "rawTitle": "[C09.S03] Recta tangente y recta normal en un punto",
          "objectives": [
            {
              "label": "Objetivos de aprendizaje",
              "html": "<ul><li><p>Interpretar la derivada en un punto como pendiente de la tangente.</p></li><li><p>Escribir la ecuacion de la tangente y de la normal usando un punto de la curva.</p></li><li><p>Reconocer el caso especial de tangente horizontal y normal vertical.</p></li></ul>"
            }
          ],
          "prerequisites": [
            {
              "label": "Prerrequisitos",
              "html": "<ul><li><p>Reglas basicas de derivacion.</p></li><li><p>Ecuacion de la recta en forma punto-pendiente.</p></li></ul>"
            }
          ],
          "theory": {
            "title": "Idea clave",
            "titleText": "Idea clave",
            "tagId": "",
            "html": "<p>Si \\(f\\) es derivable en \\(x=a\\), la recta tangente en \\(P(a,f(a))\\) tiene pendiente \\(f'(a)\\):</p><div class=\"math-display\">\\[\ny-f(a)=f'(a)(x-a).\n\\]</div><p>Si \\(f'(a)\\neq 0\\), la recta normal tiene pendiente \\(-1/f'(a)\\). Si \\(f'(a)=0\\), la normal es la recta vertical \\(x=a\\).</p>"
          },
          "method": {
            "title": "Pasos fijos",
            "titleText": "Pasos fijos",
            "tagId": "",
            "html": "<ol><li><p>Calcula el punto \\(P(a,f(a))\\).</p></li><li><p>Deriva y halla la pendiente \\(m_t=f'(a)\\).</p></li><li><p>Escribe la tangente con la forma punto-pendiente.</p></li><li><p>Para la normal, usa la opuesta reciproca o escribe \\(x=a\\) si la tangente es horizontal.</p></li></ol>"
          },
          "solvedExample": {
            "title": "[EX-C09.S03-01] Tangente y normal a una parabola",
            "titleText": "Tangente y normal a una parabola",
            "tagId": "EX-C09.S03-01",
            "html": "<p>Calcula las ecuaciones de la tangente y la normal a</p><div class=\"math-display\">\\[\nf(x)=x^2-2x+3\n\\]</div><p>en \\(x=3\\).</p><p><strong>Desarrollo.</strong> El punto de la curva es</p><div class=\"math-display\">\\[\nf(3)=9-6+3=6,\n\\]</div><p>luego \\(P(3,6)\\).</p><p>Derivamos:</p><div class=\"math-display\">\\[\nf'(x)=2x-2,\\qquad f'(3)=4.\n\\]</div><p>La tangente es</p><div class=\"math-display\">\\[\ny-6=4(x-3)\\Longrightarrow y=4x-6.\n\\]</div><p>La normal tiene pendiente \\(-1/4\\), asi que</p><div class=\"math-display\">\\[\ny-6=-\\frac{1}{4}(x-3)\\Longrightarrow y=-\\frac{1}{4}x+\\frac{27}{4}.\n\\]</div><p><strong>Respuesta final.</strong></p><div class=\"math-display\">\\[\n\\text{Tangente: } y=4x-6,\\qquad\n\\text{Normal: } y=-\\frac{1}{4}x+\\frac{27}{4}.\n\\]</div>"
          },
          "commonError": {
            "title": "Confundir normal con cambiar el signo",
            "titleText": "Confundir normal con cambiar el signo",
            "tagId": "",
            "html": "<p>La pendiente de la normal no es \\(-m_t\\), sino \\(-1/m_t\\). Solo cambiar el signo produce una recta simetrica, no necesariamente perpendicular.</p>"
          },
          "guidedExercises": [
            {
              "tagId": "GX-C09.S03-01",
              "title": "Punto con pendiente negativa",
              "promptHtml": "<p>Calcula la tangente y la normal a</p><div class=\"math-display\">\\[\nf(x)=x^2+1\n\\]</div><p>en \\(x=-1\\).</p>",
              "answerHtml": "<p>Tangente: \\(y=-2x\\). Normal: \\(y=\\dfrac{x}{2}+\\dfrac{5}{2}\\).</p>",
              "solutionHtml": "<div class=\"math-display\">\\[\nf(-1)=2,\\qquad f'(x)=2x,\\qquad f'(-1)=-2.\n\\]</div><p>La tangente es</p><div class=\"math-display\">\\[\ny-2=-2(x+1)\\Longrightarrow y=-2x.\n\\]</div><p>La normal tiene pendiente \\(1/2\\):</p><div class=\"math-display\">\\[\ny-2=\\frac{1}{2}(x+1)\\Longrightarrow y=\\frac{x}{2}+\\frac{5}{2}.\n\\]</div>"
            },
            {
              "tagId": "GX-C09.S03-02",
              "title": "Tangente horizontal",
              "promptHtml": "<p>Calcula la tangente y la normal a</p><div class=\"math-display\">\\[\nf(x)=x^3-3x\n\\]</div><p>en \\(x=1\\).</p>",
              "answerHtml": "<p>Tangente: \\(y=-2\\). Normal: \\(x=1\\).</p>",
              "solutionHtml": "<div class=\"math-display\">\\[\nf(1)=1-3=-2,\\qquad f'(x)=3x^2-3,\\qquad f'(1)=0.\n\\]</div><p>Por tanto la tangente es horizontal:</p><div class=\"math-display\">\\[\ny=-2.\n\\]</div><p>La normal es vertical, luego</p><div class=\"math-display\">\\[\nx=1.\n\\]</div>"
            }
          ],
          "practice": {
            "label": "Practica autonoma graduada",
            "items": [
              {
                "tagId": "PX-C09.S03-01",
                "prompt": "Calcula la tangente y la normal a \\(f(x)=x^2+2x\\) en \\(x=2\\)."
              },
              {
                "tagId": "PX-C09.S03-02",
                "prompt": "Calcula la tangente y la normal a \\(f(x)=\\dfrac{x+1}{x-1}\\) en \\(x=3\\)."
              },
              {
                "tagId": "PX-C09.S03-03",
                "prompt": "Calcula la tangente y la normal a \\(f(x)=\\sqrt{x+1}\\) en \\(x=3\\)."
              },
              {
                "tagId": "PX-C09.S03-04",
                "prompt": "Calcula la tangente y la normal a \\(f(x)=e^x\\) en \\(x=0\\)."
              },
              {
                "tagId": "PX-C09.S03-05",
                "prompt": "Calcula la tangente y la normal a \\(f(x)=\\ln x\\) en \\(x=1\\)."
              },
              {
                "tagId": "PX-C09.S03-06",
                "prompt": "Calcula la tangente y la normal a \\(f(x)=x^3\\) en \\(x=0\\)."
              }
            ],
            "answersHtml": "<ol><li><p>Tangente: \\(y=6x-4\\). Normal: \\(y=-\\dfrac{x}{6}+\\dfrac{25}{3}\\)</p></li><li><p>Tangente: \\(y=-\\dfrac{x}{2}+\\dfrac{7}{2}\\). Normal: \\(y=2x-4\\)</p></li><li><p>Tangente: \\(y=\\dfrac{x}{4}+\\dfrac{5}{4}\\). Normal: \\(y=-4x+14\\)</p></li><li><p>Tangente: \\(y=x+1\\). Normal: \\(y=-x+1\\)</p></li><li><p>Tangente: \\(y=x-1\\). Normal: \\(y=-x+1\\)</p></li><li><p>Tangente: \\(y=0\\). Normal: \\(x=0\\)</p></li></ol>",
            "solutionsHtml": "<ol><li><div class=\"math-display\">\\[\n  f(2)=8,\\qquad f'(x)=2x+2,\\qquad f'(2)=6.\n  \\]</div><p>Tangente:</p><div class=\"math-display\">\\[\n  y-8=6(x-2)\\Longrightarrow y=6x-4.\n  \\]</div><p>Normal:</p><div class=\"math-display\">\\[\n  y-8=-\\frac{1}{6}(x-2)\\Longrightarrow y=-\\frac{x}{6}+\\frac{25}{3}.\n  \\]</div></li><li><div class=\"math-display\">\\[\n  f(3)=2,\\qquad f'(x)=\\frac{(x-1)-(x+1)}{(x-1)^2}=-\\frac{2}{(x-1)^2},\n  \\]</div><p>luego \\(f'(3)=-1/2\\). La tangente es</p><div class=\"math-display\">\\[\n  y-2=-\\frac{1}{2}(x-3)\\Longrightarrow y=-\\frac{x}{2}+\\frac{7}{2}.\n  \\]</div><p>La normal tiene pendiente \\(2\\):</p><div class=\"math-display\">\\[\n  y-2=2(x-3)\\Longrightarrow y=2x-4.\n  \\]</div></li><li><div class=\"math-display\">\\[\n  f(3)=2,\\qquad f'(x)=\\frac{1}{2\\sqrt{x+1}},\\qquad f'(3)=\\frac{1}{4}.\n  \\]</div><div class=\"math-display\">\\[\n  y-2=\\frac{1}{4}(x-3)\\Longrightarrow y=\\frac{x}{4}+\\frac{5}{4}.\n  \\]</div><p>La normal tiene pendiente \\(-4\\):</p><div class=\"math-display\">\\[\n  y-2=-4(x-3)\\Longrightarrow y=-4x+14.\n  \\]</div></li><li><p>Como \\(f(0)=1\\) y \\(f'(0)=1\\),</p><div class=\"math-display\">\\[\n  y-1=x\\Longrightarrow y=x+1.\n  \\]</div><p>La normal es</p><div class=\"math-display\">\\[\n  y-1=-x\\Longrightarrow y=-x+1.\n  \\]</div></li><li><p>Como \\(f(1)=0\\) y \\(f'(1)=1\\),</p><div class=\"math-display\">\\[\n  y=x-1,\\qquad y=-x+1.\n  \\]</div></li><li><div class=\"math-display\">\\[\n  f(0)=0,\\qquad f'(0)=0.\n  \\]</div><p>La tangente es \\(y=0\\) y la normal \\(x=0\\).</p></li></ol>"
          },
          "challenge": {}
        },
        {
          "id": "C09.S04",
          "title": "Tangente con pendiente dada o paralela a una recta",
          "rawTitle": "[C09.S04] Tangente con pendiente dada o paralela a una recta",
          "objectives": [
            {
              "label": "Objetivos de aprendizaje",
              "html": "<ul><li><p>Traducir ``pendiente dada'' a una ecuacion con la derivada.</p></li><li><p>Detectar si hay una, varias o ninguna tangente que cumpla la condicion.</p></li><li><p>Escribir la recta final una vez localizada la abscisa de tangencia.</p></li></ul>"
            }
          ],
          "prerequisites": [
            {
              "label": "Prerrequisitos",
              "html": "<ul><li><p>Derivacion y ecuacion de la recta tangente.</p></li><li><p>Interpretacion geometrica de paralelismo entre rectas.</p></li></ul>"
            }
          ],
          "theory": {
            "title": "Traduccion directa",
            "titleText": "Traduccion directa",
            "tagId": "",
            "html": "<p>Si se pide una tangente con pendiente \\(m\\), hay que resolver</p><div class=\"math-display\">\\[\nf'(x)=m.\n\\]</div><p>Cada solucion \\(x=a\\) genera un punto \\(P(a,f(a))\\) y, por tanto, una tangente:</p><div class=\"math-display\">\\[\ny-f(a)=m(x-a).\n\\]</div>"
          },
          "method": {
            "title": "Ruta de resolucion",
            "titleText": "Ruta de resolucion",
            "tagId": "",
            "html": "<ol><li><p>Deriva la funcion.</p></li><li><p>Igualala a la pendiente pedida o a la pendiente de la recta dada.</p></li><li><p>Resuelve la ecuacion para \\(x\\).</p></li><li><p>Sustituye cada abscisa en la funcion y escribe las tangentes.</p></li></ol>"
          },
          "solvedExample": {
            "title": "[EX-C09.S04-01] Dos tangentes paralelas a la misma recta",
            "titleText": "Dos tangentes paralelas a la misma recta",
            "tagId": "EX-C09.S04-01",
            "html": "<p>Halla las tangentes a</p><div class=\"math-display\">\\[\nf(x)=x^3-3x+1\n\\]</div><p>paralelas a la recta \\(y=9x-2\\).</p><p><strong>Desarrollo.</strong> La pendiente buscada es \\(9\\). Derivamos:</p><div class=\"math-display\">\\[\nf'(x)=3x^2-3.\n\\]</div><p>Imponemos</p><div class=\"math-display\">\\[\n3x^2-3=9 \\Longrightarrow 3x^2=12 \\Longrightarrow x^2=4.\n\\]</div><p>Por tanto,</p><div class=\"math-display\">\\[\nx=-2 \\quad \\text{o} \\quad x=2.\n\\]</div><p>Los puntos de tangencia son</p><div class=\"math-display\">\\[\nf(-2)=-1,\\qquad f(2)=3.\n\\]</div><p>Las tangentes quedan:</p><div class=\"math-display\">\\[\ny+1=9(x+2)\\Longrightarrow y=9x+17,\n\\]</div><div class=\"math-display\">\\[\ny-3=9(x-2)\\Longrightarrow y=9x-15.\n\\]</div>"
          },
          "commonError": {
            "title": "Pararse en \\(f'(x)=m\\)",
            "titleText": "Pararse en \\(f'(x)=m\\)",
            "tagId": "",
            "html": "<p>Resolver la ecuacion de la derivada solo localiza donde toca la tangente. Falta todavia calcular el punto de la curva y escribir la ecuacion completa de la recta.</p>"
          },
          "guidedExercises": [
            {
              "tagId": "GX-C09.S04-01",
              "title": "Pendiente dada",
              "promptHtml": "<p>Halla la tangente a</p><div class=\"math-display\">\\[\nf(x)=x^2-4x\n\\]</div><p>cuya pendiente sea \\(2\\).</p>",
              "answerHtml": "<div class=\"math-display\">\\[\ny=2x-9.\n\\]</div>",
              "solutionHtml": "<div class=\"math-display\">\\[\nf'(x)=2x-4.\n\\]</div><p>Imponemos</p><div class=\"math-display\">\\[\n2x-4=2 \\Longrightarrow x=3.\n\\]</div><p>Entonces</p><div class=\"math-display\">\\[\nf(3)=9-12=-3.\n\\]</div><p>La tangente es</p><div class=\"math-display\">\\[\ny+3=2(x-3)\\Longrightarrow y=2x-9.\n\\]</div>"
            },
            {
              "tagId": "GX-C09.S04-02",
              "title": "Funcion radical",
              "promptHtml": "<p>Halla la tangente a</p><div class=\"math-display\">\\[\nf(x)=\\sqrt{x+4}\n\\]</div><p>paralela a la recta \\(y=\\dfrac{x}{4}-3\\).</p>",
              "answerHtml": "<div class=\"math-display\">\\[\ny=\\frac{x}{4}+2.\n\\]</div>",
              "solutionHtml": "<p>La pendiente buscada es \\(1/4\\). Como</p><div class=\"math-display\">\\[\nf'(x)=\\frac{1}{2\\sqrt{x+4}},\n\\]</div><p>igualamos:</p><div class=\"math-display\">\\[\n\\frac{1}{2\\sqrt{x+4}}=\\frac{1}{4}\\Longrightarrow \\sqrt{x+4}=2 \\Longrightarrow x=0.\n\\]</div><p>Entonces \\(f(0)=2\\), asi que</p><div class=\"math-display\">\\[\ny-2=\\frac{1}{4}(x-0)\\Longrightarrow y=\\frac{x}{4}+2.\n\\]</div>"
            }
          ],
          "practice": {
            "label": "Practica autonoma graduada",
            "items": [
              {
                "tagId": "PX-C09.S04-01",
                "prompt": "Halla la tangente a \\(f(x)=x^2+1\\) con pendiente \\(4\\)."
              },
              {
                "tagId": "PX-C09.S04-02",
                "prompt": "Halla las tangentes a \\(f(x)=x^3\\) paralelas a la recta \\(y=12x+1\\)."
              },
              {
                "tagId": "PX-C09.S04-03",
                "prompt": "Halla la tangente a \\(f(x)=\\ln x\\) paralela a la recta \\(y=x+3\\)."
              },
              {
                "tagId": "PX-C09.S04-04",
                "prompt": "Halla la tangente a \\(f(x)=e^x\\) cuya pendiente sea \\(e^2\\)."
              },
              {
                "tagId": "PX-C09.S04-05",
                "prompt": "Halla las tangentes horizontales de \\(f(x)=x+\\dfrac{1}{x}\\)."
              },
              {
                "tagId": "PX-C09.S04-06",
                "prompt": "Sea \\(f(x)=x^2+ax\\). Determina \\(a\\) para que la tangente en \\(x=1\\) sea paralela a la recta \\(y=5x-2\\), y escribe despues esa tangente."
              }
            ],
            "answersHtml": "<ol><li><p>\\(y=4x-3\\)</p></li><li><p>\\(y=12x+16\\) y \\(y=12x-16\\)</p></li><li><p>\\(y=x-1\\)</p></li><li><p>\\(y=e^2x-e^2\\)</p></li><li><p>\\(y=2\\) y \\(y=-2\\)</p></li><li><p>\\(a=3\\) y la tangente es \\(y=5x-1\\)</p></li></ol>",
            "solutionsHtml": "<ol><li><p>\\(f'(x)=2x\\). Igualando a \\(4\\), sale \\(x=2\\). Como \\(f(2)=5\\),</p><div class=\"math-display\">\\[\n  y-5=4(x-2)\\Longrightarrow y=4x-3.\n  \\]</div></li><li><p>\\(f'(x)=3x^2\\). Igualando a \\(12\\), sale \\(x=\\pm 2\\). Los puntos son \\((-2,-8)\\) y \\((2,8)\\), asi que</p><div class=\"math-display\">\\[\n  y+8=12(x+2)\\Longrightarrow y=12x+16,\n  \\]</div><div class=\"math-display\">\\[\n  y-8=12(x-2)\\Longrightarrow y=12x-16.\n  \\]</div></li><li><p>\\((\\ln x)'=1/x\\). Igualando a \\(1\\), sale \\(x=1\\). Como \\(f(1)=0\\),</p><div class=\"math-display\">\\[\n  y=x-1.\n  \\]</div></li><li><p>Si \\(f'(x)=e^x=e^2\\), entonces \\(x=2\\). Como \\(f(2)=e^2\\),</p><div class=\"math-display\">\\[\n  y-e^2=e^2(x-2)\\Longrightarrow y=e^2x-e^2.\n  \\]</div></li><li><div class=\"math-display\">\\[\n  f'(x)=1-\\frac{1}{x^2}=0 \\Longrightarrow x=\\pm 1.\n  \\]</div><p>Los valores son \\(f(1)=2\\) y \\(f(-1)=-2\\), luego las tangentes son \\(y=2\\) e \\(y=-2\\).</p></li><li><div class=\"math-display\">\\[\n  f'(x)=2x+a,\\qquad f'(1)=2+a.\n  \\]</div><p>Debe valer \\(5\\), asi que \\(a=3\\). Entonces \\(f(1)=4\\) y</p><div class=\"math-display\">\\[\n  y-4=5(x-1)\\Longrightarrow y=5x-1.\n  \\]</div></li></ol>"
          },
          "challenge": {}
        },
        {
          "id": "C09.S05",
          "title": "Problemas con parametros en derivadas",
          "rawTitle": "[C09.S05] Problemas con parametros en derivadas",
          "objectives": [
            {
              "label": "Objetivos de aprendizaje",
              "html": "<ul><li><p>Traducir condiciones geometricas a ecuaciones con parametros.</p></li><li><p>Imponer tangencias, extremos o inflexiones usando derivadas.</p></li><li><p>Comprobar despues si la condicion obtenida realmente se cumple.</p></li></ul>"
            }
          ],
          "prerequisites": [
            {
              "label": "Prerrequisitos",
              "html": "<ul><li><p>Reglas de derivacion.</p></li><li><p>Recta tangente, extremos e inflexion.</p></li></ul>"
            }
          ],
          "theory": {
            "title": "Donde entra el parametro",
            "titleText": "Donde entra el parametro",
            "tagId": "",
            "html": "<p>Cuando el enunciado pide ``que haya un maximo en \\(x=a\\)'', ``que la tangente sea horizontal'' o ``que la tangente sea paralela a una recta'', la condicion se traduce a una ecuacion sobre la derivada:</p><div class=\"math-display\">\\[\nf'(a)=0,\\qquad f'(a)=m,\\qquad f''(a)=0.\n\\]</div><p>Segun el caso puede hacer falta una comprobacion extra con el signo de \\(f'\\) o con \\(f''\\).</p>"
          },
          "method": {
            "title": "Idea de trabajo",
            "titleText": "Idea de trabajo",
            "tagId": "",
            "html": "<ol><li><p>Escribe la condicion diferencial exacta.</p></li><li><p>Sustituye el punto pedido.</p></li><li><p>Resuelve la ecuacion para el parametro.</p></li><li><p>Vuelve a comprobar el significado geometrico final.</p></li></ol>"
          },
          "solvedExample": {
            "title": "[EX-C09.S05-01] Imponer un minimo local",
            "titleText": "Imponer un minimo local",
            "tagId": "EX-C09.S05-01",
            "html": "<p>Determina \\(a\\) para que</p><div class=\"math-display\">\\[\nf(x)=x^3+ax^2\n\\]</div><p>tenga un minimo local en \\(x=1\\).</p><p><strong>Desarrollo.</strong> Para que haya un extremo en \\(x=1\\), debe cumplirse</p><div class=\"math-display\">\\[\nf'(1)=0.\n\\]</div><p>Derivamos:</p><div class=\"math-display\">\\[\nf'(x)=3x^2+2ax.\n\\]</div><p>Sustituyendo \\(x=1\\),</p><div class=\"math-display\">\\[\n3+2a=0 \\Longrightarrow a=-\\frac{3}{2}.\n\\]</div><p>Comprobamos con la segunda derivada:</p><div class=\"math-display\">\\[\nf''(x)=6x+2a,\\qquad f''(1)=6-3=3>0.\n\\]</div><p>Por tanto, el extremo es efectivamente un minimo.</p><p><strong>Respuesta final.</strong></p><div class=\"math-display\">\\[\na=-\\frac{3}{2}.\n\\]</div>"
          },
          "commonError": {
            "title": "Imponer \\(f(a)=0\\) en lugar de \\(f'(a)=0\\)",
            "titleText": "Imponer \\(f(a)=0\\) en lugar de \\(f'(a)=0\\)",
            "tagId": "",
            "html": "<p>Si el enunciado habla de tangente horizontal o de extremo, la condicion actua sobre la pendiente, no sobre la altura del punto. Confundir \\(f(a)\\) con \\(f'(a)\\) cambia por completo el problema.</p>"
          },
          "guidedExercises": [
            {
              "tagId": "GX-C09.S05-01",
              "title": "Pendiente impuesta",
              "promptHtml": "<p>Determina \\(a\\) para que la tangente a</p><div class=\"math-display\">\\[\nf(x)=x^2+ax\n\\]</div><p>en \\(x=1\\) sea paralela a la recta \\(y=5x-2\\).</p>",
              "answerHtml": "<div class=\"math-display\">\\[\na=3.\n\\]</div>",
              "solutionHtml": "<p>La pendiente buscada es \\(5\\). Como</p><div class=\"math-display\">\\[\nf'(x)=2x+a,\n\\]</div><p>debe cumplirse</p><div class=\"math-display\">\\[\nf'(1)=2+a=5.\n\\]</div><p>De aqui se obtiene</p><div class=\"math-display\">\\[\na=3.\n\\]</div>"
            },
            {
              "tagId": "GX-C09.S05-02",
              "title": "Punto critico fijado",
              "promptHtml": "<p>Determina \\(b\\) para que</p><div class=\"math-display\">\\[\nf(x)=x^3+bx^2\n\\]</div><p>tenga un punto critico en \\(x=-1\\). Clasificalo.</p>",
              "answerHtml": "<div class=\"math-display\">\\[\nb=\\frac{3}{2},\n\\]</div><p>y en \\(x=-1\\) aparece un maximo local.</p>",
              "solutionHtml": "<div class=\"math-display\">\\[\nf'(x)=3x^2+2bx.\n\\]</div><p>Imponemos</p><div class=\"math-display\">\\[\nf'(-1)=3-2b=0 \\Longrightarrow b=\\frac{3}{2}.\n\\]</div><p>Para clasificar, derivamos otra vez:</p><div class=\"math-display\">\\[\nf''(x)=6x+2b,\\qquad f''(-1)=-6+3=-3<0.\n\\]</div><p>Luego el punto critico es un maximo local.</p>"
            }
          ],
          "practice": {
            "label": "Practica autonoma graduada",
            "items": [
              {
                "tagId": "PX-C09.S05-01",
                "prompt": "Halla \\(a\\) para que \\(f(x)=x^3+ax\\) tenga tangente horizontal en \\(x=1\\)."
              },
              {
                "tagId": "PX-C09.S05-02",
                "prompt": "Halla \\(b\\) para que \\(f(x)=x^2+bx+1\\) tenga un minimo en \\(x=2\\)."
              },
              {
                "tagId": "PX-C09.S05-03",
                "prompt": "Halla \\(c\\) para que \\(f(x)=x^3+cx^2\\) tenga punto de inflexion en \\(x=1\\)."
              },
              {
                "tagId": "PX-C09.S05-04",
                "prompt": "Halla \\(k\\) para que \\(f(x)=x^2+kx\\) tenga en \\(x=0\\) una tangente paralela a \\(y=2x-1\\)."
              },
              {
                "tagId": "PX-C09.S05-05",
                "prompt": "Halla \\(m\\) para que \\(f(x)=x^3+mx^2\\) tenga un punto critico en \\(x=2\\)."
              },
              {
                "tagId": "PX-C09.S05-06",
                "prompt": "Halla \\(p\\) para que \\(f(x)=px^2+4x\\) tenga tangente horizontal en \\(x=-1\\)."
              }
            ],
            "answersHtml": "<ol><li><p>\\(a=-3\\)</p></li><li><p>\\(b=-4\\)</p></li><li><p>\\(c=-3\\)</p></li><li><p>\\(k=2\\)</p></li><li><p>\\(m=-3\\)</p></li><li><p>\\(p=2\\)</p></li></ol>",
            "solutionsHtml": "<ol><li><div class=\"math-display\">\\[\n  f'(x)=3x^2+a,\\qquad f'(1)=3+a=0.\n  \\]</div><p>Luego \\(a=-3\\).</p></li><li><div class=\"math-display\">\\[\n  f'(x)=2x+b,\\qquad f'(2)=4+b=0.\n  \\]</div><p>Sale \\(b=-4\\). Como la segunda derivada vale \\(2>0\\), el extremo es minimo.</p></li><li><div class=\"math-display\">\\[\n  f''(x)=6x+2c,\\qquad f''(1)=6+2c=0.\n  \\]</div><p>Luego \\(c=-3\\).</p></li><li><p>La pendiente pedida es \\(2\\). Como</p><div class=\"math-display\">\\[\n  f'(x)=2x+k,\n  \\]</div><p>en \\(x=0\\) debe cumplirse \\(k=2\\).</p></li><li><div class=\"math-display\">\\[\n  f'(x)=3x^2+2mx,\\qquad f'(2)=12+4m=0.\n  \\]</div><p>Luego \\(m=-3\\).</p></li><li><div class=\"math-display\">\\[\n  f'(x)=2px+4,\\qquad f'(-1)=-2p+4=0.\n  \\]</div><p>Por tanto, \\(p=2\\).</p></li></ol>"
          },
          "challenge": {}
        },
        {
          "id": "C09.S06",
          "title": "Derivabilidad de funciones a trozos",
          "rawTitle": "[C09.S06] Derivabilidad de funciones a trozos",
          "objectives": [
            {
              "label": "Objetivos de aprendizaje",
              "html": "<ul><li><p>Distinguir continuidad y derivabilidad en un punto de union.</p></li><li><p>Igualar limites laterales y derivadas laterales cuando corresponda.</p></li><li><p>Ajustar parametros para que una funcion a trozos sea derivable.</p></li></ul>"
            }
          ],
          "prerequisites": [
            {
              "label": "Prerrequisitos",
              "html": "<ul><li><p>Continuidad en funciones a trozos.</p></li><li><p>Derivadas laterales de funciones elementales.</p></li></ul>"
            }
          ],
          "theory": {
            "title": "Dos filtros consecutivos",
            "titleText": "Dos filtros consecutivos",
            "tagId": "",
            "html": "<p>Para que una funcion sea derivable en el punto de cambio \\(x=a\\), antes debe ser continua. Por tanto:</p><div class=\"math-display\">\\[\n\\lim_{x\\to a^-}f(x)=\\lim_{x\\to a^+}f(x)=f(a),\n\\]</div><p>y ademas</p><div class=\"math-display\">\\[\nf'_-(a)=f'_+(a).\n\\]</div><p>Si falla la continuidad, la derivabilidad ya no puede cumplirse.</p>"
          },
          "method": {
            "title": "Orden correcto",
            "titleText": "Orden correcto",
            "tagId": "",
            "html": "<ol><li><p>Comprueba continuidad en el punto de union.</p></li><li><p>Si la continuidad se cumple, deriva cada tramo.</p></li><li><p>Igualas las derivadas laterales y decides si hay derivabilidad.</p></li><li><p>Si hay parametros, resuelves primero la continuidad y despues la derivabilidad.</p></li></ol>"
          },
          "solvedExample": {
            "title": "[EX-C09.S06-01] Ajustar continuidad y derivabilidad",
            "titleText": "Ajustar continuidad y derivabilidad",
            "tagId": "EX-C09.S06-01",
            "html": "<p>Determina \\(a\\) y \\(b\\) para que</p><div class=\"math-display\">\\[\nf(x)=\n\\begin{cases}\nax+b,& x<1,\\\\\nx^2+1,& x\\geq 1\n\\end{cases}\n\\]</div><p>sea continua y derivable en \\(x=1\\).</p><p><strong>Desarrollo.</strong> La continuidad exige</p><div class=\"math-display\">\\[\na+b=f(1)=2.\n\\]</div><p>La derivabilidad exige igualdad de pendientes laterales. A la izquierda, la derivada vale \\(a\\). A la derecha,</p><div class=\"math-display\">\\[\n(x^2+1)'=2x,\\qquad f'_+(1)=2.\n\\]</div><p>Por tanto,</p><div class=\"math-display\">\\[\na=2.\n\\]</div><p>Sustituyendo en la continuidad:</p><div class=\"math-display\">\\[\n2+b=2 \\Longrightarrow b=0.\n\\]</div><p><strong>Respuesta final.</strong></p><div class=\"math-display\">\\[\na=2,\\qquad b=0.\n\\]</div>"
          },
          "commonError": {
            "title": "Quedarse solo en la continuidad",
            "titleText": "Quedarse solo en la continuidad",
            "tagId": "",
            "html": "<p>Que los dos trozos se ``toquen'' en el punto de union no basta. Para que la grafica no tenga esquina, las pendientes laterales tambien deben coincidir.</p>"
          },
          "guidedExercises": [
            {
              "tagId": "GX-C09.S06-01",
              "title": "Continua pero con esquina",
              "promptHtml": "<p>Estudia en \\(x=0\\) la continuidad y la derivabilidad de</p><div class=\"math-display\">\\[\nf(x)=\n\\begin{cases}\nx+1,& x<0,\\\\\nx^2+1,& x\\geq 0.\n\\end{cases}\n\\]</div>",
              "answerHtml": "<p>Es continua en \\(x=0\\), pero no es derivable.</p>",
              "solutionHtml": "<p>Por la izquierda y por la derecha se obtiene el mismo valor:</p><div class=\"math-display\">\\[\n\\lim_{x\\to 0^-}(x+1)=1,\\qquad \\lim_{x\\to 0^+}(x^2+1)=1,\\qquad f(0)=1.\n\\]</div><p>Luego es continua. Sin embargo, las derivadas laterales son</p><div class=\"math-display\">\\[\nf'_-(0)=1,\\qquad f'_+(0)=2\\cdot 0=0.\n\\]</div><p>Como no coinciden, la funcion no es derivable en \\(x=0\\).</p>"
            },
            {
              "tagId": "GX-C09.S06-02",
              "title": "Un parametro en el punto de union",
              "promptHtml": "<p>Determina para que valores de \\(k\\)</p><div class=\"math-display\">\\[\nf(x)=\n\\begin{cases}\nkx+1,& x<1,\\\\\nx+k,& x\\geq 1\n\\end{cases}\n\\]</div><p>es continua y para cuales es derivable en \\(x=1\\).</p>",
              "answerHtml": "<p>Es continua para todo \\(k\\) y es derivable solo si \\(k=1\\).</p>",
              "solutionHtml": "<p>La continuidad se cumple siempre, porque</p><div class=\"math-display\">\\[\n\\lim_{x\\to 1^-}(kx+1)=k+1,\\qquad f(1)=1+k.\n\\]</div><p>Son el mismo valor para cualquier \\(k\\). Para la derivabilidad:</p><div class=\"math-display\">\\[\nf'_-(1)=k,\\qquad f'_+(1)=1.\n\\]</div><p>Luego la derivabilidad exige \\(k=1\\).</p>"
            }
          ],
          "practice": {
            "label": "Practica autonoma graduada",
            "items": [
              {
                "tagId": "PX-C09.S06-01",
                "prompt": "Estudia en \\(x=1\\) la continuidad y derivabilidad de \\( f(x)= \\begin{cases} 2x+1,& x<1,\\\\ x^2+2,& x\\geq 1. \\end{cases} \\)"
              },
              {
                "tagId": "PX-C09.S06-02",
                "prompt": "Estudia en \\(x=3\\) la continuidad y derivabilidad de \\( f(x)= \\begin{cases} x+2,& x<3,\\\\ 5,& x\\geq 3. \\end{cases} \\)"
              },
              {
                "tagId": "PX-C09.S06-03",
                "prompt": "Halla \\(a\\) para que \\( f(x)= \\begin{cases} ax+2,& x<0,\\\\ x^2+2,& x\\geq 0 \\end{cases} \\) sea derivable en \\(x=0\\)."
              },
              {
                "tagId": "PX-C09.S06-04",
                "prompt": "Estudia en \\(x=0\\) la continuidad y derivabilidad de \\( f(x)= \\begin{cases} -x,& x<0,\\\\ x,& x\\geq 0. \\end{cases} \\)"
              },
              {
                "tagId": "PX-C09.S06-05",
                "prompt": "Halla \\(b\\) para que \\( f(x)= \\begin{cases} x^2,& x<2,\\\\ 4x+b,& x\\geq 2 \\end{cases} \\) sea continua y derivable en \\(x=2\\)."
              },
              {
                "tagId": "PX-C09.S06-06",
                "prompt": "Halla \\(m\\) para que \\( f(x)= \\begin{cases} mx+1,& x<1,\\\\ x^2+m,& x\\geq 1 \\end{cases} \\) sea derivable en \\(x=1\\)."
              }
            ],
            "answersHtml": "<ol><li><p>Es continua y derivable</p></li><li><p>Es continua, pero no derivable</p></li><li><p>\\(a=0\\)</p></li><li><p>Es continua, pero no derivable</p></li><li><p>\\(b=-4\\), y con ese valor es continua y derivable</p></li><li><p>\\(m=2\\)</p></li></ol>",
            "solutionsHtml": "<ol><li><p>En \\(x=1\\),</p><div class=\"math-display\">\\[\n  2\\cdot 1+1=3,\\qquad 1^2+2=3.\n  \\]</div><p>Hay continuidad. Las derivadas laterales valen</p><div class=\"math-display\">\\[\n  2 \\quad \\text{y} \\quad 2x|_{x=1}=2,\n  \\]</div><p>luego tambien es derivable.</p></li><li><p>En \\(x=3\\),</p><div class=\"math-display\">\\[\n  \\lim_{x\\to 3^-}(x+2)=5,\\qquad f(3)=5.\n  \\]</div><p>Es continua. Pero las pendientes laterales son \\(1\\) y \\(0\\), asi que no es derivable.</p></li><li><p>La continuidad ya se cumple:</p><div class=\"math-display\">\\[\n  \\lim_{x\\to 0^-}(ax+2)=2,\\qquad f(0)=2.\n  \\]</div><p>Para derivabilidad se necesita</p><div class=\"math-display\">\\[\n  a=2x|_{x=0}=0.\n  \\]</div></li><li><p>Ambas ramas dan \\(0\\) en el origen, asi que hay continuidad. Las derivadas laterales son \\(-1\\) y \\(1\\), luego no hay derivabilidad.</p></li><li><p>La continuidad exige</p><div class=\"math-display\">\\[\n  2^2=4\\cdot 2+b \\Longrightarrow 4=8+b \\Longrightarrow b=-4.\n  \\]</div><p>Con ese valor, las derivadas laterales son \\(2x|_{x=2}=4\\) y \\(4\\), por lo que tambien hay derivabilidad.</p></li><li><p>La continuidad se cumple siempre:</p><div class=\"math-display\">\\[\n  m+1=1+m.\n  \\]</div><p>Para derivabilidad:</p><div class=\"math-display\">\\[\n  m=2x|_{x=1}=2.\n  \\]</div></li></ol>"
          },
          "challenge": {}
        },
        {
          "id": "C09.S07",
          "title": "Optimizacion",
          "rawTitle": "[C09.S07] Optimizacion",
          "objectives": [
            {
              "label": "Objetivos de aprendizaje",
              "html": "<ul><li><p>Modelizar una magnitud a optimizar con una sola variable.</p></li><li><p>Obtener y estudiar la funcion objetivo en su dominio.</p></li><li><p>Interpretar el resultado final dentro del contexto del problema.</p></li></ul>"
            }
          ],
          "prerequisites": [
            {
              "label": "Prerrequisitos",
              "html": "<ul><li><p>Derivadas, monotonia y extremos.</p></li><li><p>Traduccion algebraica de restricciones geometricas sencillas.</p></li></ul>"
            }
          ],
          "theory": {
            "title": "Idea general",
            "titleText": "Idea general",
            "tagId": "",
            "html": "<p>Optimizar significa convertir el problema en una funcion objetivo y buscar sus maximos o minimos en el dominio permitido. La derivada ayuda a localizar candidatos, pero la decision final debe respetar siempre el contexto.</p>"
          },
          "method": {
            "title": "Secuencia de trabajo",
            "titleText": "Secuencia de trabajo",
            "tagId": "",
            "html": "<ol><li><p>Elige una variable y expresa las demas cantidades con ella.</p></li><li><p>Escribe la funcion objetivo y su dominio.</p></li><li><p>Deriva e iguala a cero para hallar candidatos.</p></li><li><p>Decide si el resultado es maximo o minimo.</p></li><li><p>Redacta la conclusion con unidades o interpretacion contextual.</p></li></ol>"
          },
          "solvedExample": {
            "title": "[EX-C09.S07-01] Area maxima con perimetro fijo",
            "titleText": "Area maxima con perimetro fijo",
            "tagId": "EX-C09.S07-01",
            "html": "<p>Entre todos los rectangulos de perimetro \\(20\\), determina el de area maxima.</p><p><strong>Desarrollo.</strong> Si un lado mide \\(x\\), el otro debe medir \\(10-x\\), porque</p><div class=\"math-display\">\\[\n2x+2y=20 \\Longrightarrow x+y=10.\n\\]</div><p>El area es</p><div class=\"math-display\">\\[\nA(x)=x(10-x)=10x-x^2,\\qquad 0<x<10.\n\\]</div><p>Derivamos:</p><div class=\"math-display\">\\[\nA'(x)=10-2x.\n\\]</div><p>Igualando a cero:</p><div class=\"math-display\">\\[\n10-2x=0 \\Longrightarrow x=5.\n\\]</div><p>Como \\(A'(x)\\) pasa de positiva a negativa, se trata de un maximo. El otro lado vale tambien \\(10-5=5\\).</p><p><strong>Respuesta final.</strong> El rectangulo de area maxima es el cuadrado de lado \\(5\\), y su area maxima es</p><div class=\"math-display\">\\[\nA(5)=25.\n\\]</div>"
          },
          "commonError": {
            "title": "Optimizar sin escribir el dominio",
            "titleText": "Optimizar sin escribir el dominio",
            "tagId": "",
            "html": "<p>En problemas geometricos no cualquier valor de \\(x\\) tiene sentido. Si no se fija el dominio desde el principio, pueden aparecer soluciones negativas o imposibles de interpretar.</p>"
          },
          "guidedExercises": [
            {
              "tagId": "GX-C09.S07-01",
              "title": "Valla junto a un muro",
              "promptHtml": "<p>Se dispone de \\(18\\) metros de valla para cerrar tres lados de un rectangulo apoyado en un muro. Halla las dimensiones que maximizan el area.</p>",
              "answerHtml": "<p>Dos lados de \\(4{,}5\\) m y el lado paralelo al muro de \\(9\\) m. Area maxima: \\(40{,}5\\ \\text{m}^2\\).</p>",
              "solutionHtml": "<p>Si \\(x\\) es la longitud de cada lado perpendicular al muro, el lado restante vale \\(18-2x\\). Entonces</p><div class=\"math-display\">\\[\nA(x)=x(18-2x)=18x-2x^2,\\qquad 0<x<9.\n\\]</div><p>Derivamos:</p><div class=\"math-display\">\\[\nA'(x)=18-4x.\n\\]</div><p>Igualando a cero:</p><div class=\"math-display\">\\[\n18-4x=0 \\Longrightarrow x=\\frac{9}{2}=4{,}5.\n\\]</div><p>El lado paralelo al muro vale \\(18-9=9\\). El area maxima es</p><div class=\"math-display\">\\[\nA\\left(\\frac{9}{2}\\right)=\\frac{81}{2}=40{,}5.\n\\]</div>"
            },
            {
              "tagId": "GX-C09.S07-02",
              "title": "Minimo algebraico",
              "promptHtml": "<p>Halla el minimo de</p><div class=\"math-display\">\\[\nf(x)=x+\\frac{9}{x},\\qquad x>0.\n\\]</div>",
              "answerHtml": "<p>El minimo se alcanza en \\(x=3\\) y vale \\(6\\).</p>",
              "solutionHtml": "<div class=\"math-display\">\\[\nf'(x)=1-\\frac{9}{x^2}.\n\\]</div><p>Igualamos a cero:</p><div class=\"math-display\">\\[\n1-\\frac{9}{x^2}=0 \\Longrightarrow x^2=9.\n\\]</div><p>Como \\(x>0\\), queda \\(x=3\\). Entonces</p><div class=\"math-display\">\\[\nf(3)=3+\\frac{9}{3}=6.\n\\]</div>"
            }
          ],
          "practice": {
            "label": "Practica autonoma graduada",
            "items": [
              {
                "tagId": "PX-C09.S07-01",
                "prompt": "Entre los rectangulos de perimetro \\(24\\), halla el de area maxima."
              },
              {
                "tagId": "PX-C09.S07-02",
                "prompt": "Dos numeros positivos suman \\(10\\). Halla el producto maximo."
              },
              {
                "tagId": "PX-C09.S07-03",
                "prompt": "Halla el minimo de \\(f(x)=x+\\dfrac{4}{x}\\) para \\(x>0\\)."
              },
              {
                "tagId": "PX-C09.S07-04",
                "prompt": "Con \\(30\\) metros de valla, se cierran tres lados de un rectangulo apoyado en un rio. Halla las dimensiones de area maxima."
              },
              {
                "tagId": "PX-C09.S07-05",
                "prompt": "Halla el maximo de \\(A(x)=x(12-x)\\) en \\([0,12]\\)."
              },
              {
                "tagId": "PX-C09.S07-06",
                "prompt": "Se corta un cuadrado de lado \\(8\\) cm en las esquinas para formar una caja sin tapa. Si el lado del recorte es \\(x\\), halla el valor de \\(x\\) que maximiza el volumen."
              }
            ],
            "answersHtml": "<ol><li><p>El cuadrado de lado \\(6\\). Area maxima: \\(36\\)</p></li><li><p>Se alcanza con \\(5\\) y \\(5\\). Producto maximo: \\(25\\)</p></li><li><p>El minimo es \\(4\\) y se alcanza en \\(x=2\\)</p></li><li><p>Lados perpendiculares de \\(7{,}5\\) m y lado paralelo de \\(15\\) m. Area maxima: \\(\\dfrac{225}{2}\\ \\text{m}^2\\)</p></li><li><p>Maximo \\(36\\) en \\(x=6\\)</p></li><li><p>\\(x=\\dfrac{4}{3}\\) cm</p></li></ol>",
            "solutionsHtml": "<ol><li><p>Si \\(x+y=12\\), el area es</p><div class=\"math-display\">\\[\n  A(x)=x(12-x).\n  \\]</div><p>Su derivada es \\(12-2x\\), que se anula en \\(x=6\\). Luego el rectangulo optimo es el cuadrado de lado \\(6\\), con area \\(36\\).</p></li><li><p>Si un numero es \\(x\\), el otro es \\(10-x\\). El producto es</p><div class=\"math-display\">\\[\n  P(x)=x(10-x).\n  \\]</div><p>Como \\(P'(x)=10-2x\\), el maximo aparece en \\(x=5\\).</p></li><li><div class=\"math-display\">\\[\n  f'(x)=1-\\frac{4}{x^2}.\n  \\]</div><p>Igualando a cero:</p><div class=\"math-display\">\\[\n  x^2=4 \\Longrightarrow x=2\n  \\]</div><p>por ser \\(x>0\\). El valor minimo es</p><div class=\"math-display\">\\[\n  f(2)=2+\\frac{4}{2}=4.\n  \\]</div></li><li><p>Si \\(x\\) es la anchura perpendicular al rio, el lado paralelo vale \\(30-2x\\). El area:</p><div class=\"math-display\">\\[\n  A(x)=x(30-2x),\\qquad 0<x<15.\n  \\]</div><div class=\"math-display\">\\[\n  A'(x)=30-4x=0 \\Longrightarrow x=\\frac{15}{2}=7{,}5.\n  \\]</div><p>El otro lado vale \\(15\\), y el area maxima</p><div class=\"math-display\">\\[\n  A\\left(\\frac{15}{2}\\right)=\\frac{225}{2}.\n  \\]</div></li><li><div class=\"math-display\">\\[\n  A'(x)=12-2x=0 \\Longrightarrow x=6.\n  \\]</div><p>Entonces \\(A(6)=36\\).</p></li><li><p>El volumen es</p><div class=\"math-display\">\\[\n  V(x)=x(8-2x)^2,\\qquad 0<x<4.\n  \\]</div><p>Derivando y factorizando:</p><div class=\"math-display\">\\[\n  V'(x)=4(8-2x)(2- \\tfrac{3}{2}x)=0.\n  \\]</div><p>Los candidatos son \\(x=4\\) y \\(x=4/3\\), pero \\(x=4\\) anula la caja. El maximo util se alcanza en</p><div class=\"math-display\">\\[\n  x=\\frac{4}{3}\\text{ cm}.\n  \\]</div></li></ol>"
          },
          "challenge": {}
        },
        {
          "id": "C09.S08",
          "title": "Ampliacion y selectividad en derivadas",
          "rawTitle": "[C09.S08] Ampliacion y selectividad en derivadas",
          "objectives": [
            {
              "label": "Objetivos de aprendizaje",
              "html": "<ul><li><p>Encadenar varias tecnicas de derivadas en ejercicios de estilo examen.</p></li><li><p>Resumir un estudio global de funcion con lenguaje preciso.</p></li><li><p>Separar con claridad el bloque nuclear del bloque de ampliacion.</p></li></ul>"
            }
          ],
          "prerequisites": [
            {
              "label": "Prerrequisitos",
              "html": "<ul><li><p>Monotonia, extremos, tangentes y derivabilidad.</p></li></ul>"
            }
          ],
          "theory": {
            "title": "Bloque de ampliacion",
            "titleText": "Bloque de ampliacion",
            "tagId": "",
            "html": "<p>En ejercicios de estilo EBAU se suele pedir un estudio compacto: crecimiento, extremos, curvatura, tangente o una condicion adicional sobre un intervalo. Conviene ordenar la informacion y redactar una conclusion corta pero completa.</p>"
          },
          "method": {
            "title": "Como no perderse",
            "titleText": "Como no perderse",
            "tagId": "",
            "html": "<ol><li><p>Empieza siempre por la derivada y los puntos criticos.</p></li><li><p>Si el enunciado pide estudio global, anade segunda derivada.</p></li><li><p>Si pide tangente, vuelve al punto concreto y usa la pendiente ya calculada.</p></li><li><p>Resume el resultado final en una lista corta y exacta.</p></li></ol>"
          },
          "solvedExample": {
            "title": "[EX-C09.S08-01] Estudio global y tangente",
            "titleText": "Estudio global y tangente",
            "tagId": "EX-C09.S08-01",
            "html": "<p>Estudia monotonia, extremos e inflexion de</p><div class=\"math-display\">\\[\nf(x)=x^3-3x+1\n\\]</div><p>y escribe la tangente en \\(x=1\\).</p><p><strong>Desarrollo.</strong> Derivamos:</p><div class=\"math-display\">\\[\nf'(x)=3x^2-3=3(x-1)(x+1).\n\\]</div><p>El signo de \\(f'\\) muestra que la funcion crece en \\((-\\infty,-1)\\cup(1,\\infty)\\) y decrece en \\((-1,1)\\). Los valores notables son</p><div class=\"math-display\">\\[\nf(-1)=3,\\qquad f(1)=-1.\n\\]</div><p>Por eso hay un maximo local en \\((-1,3)\\) y un minimo local en \\((1,-1)\\).</p><p>La segunda derivada es</p><div class=\"math-display\">\\[\nf''(x)=6x,\n\\]</div><p>que cambia de signo en \\(x=0\\). Como</p><div class=\"math-display\">\\[\nf(0)=1,\n\\]</div><p>el punto de inflexion es \\((0,1)\\).</p><p>Para la tangente en \\(x=1\\), usamos que</p><div class=\"math-display\">\\[\nf'(1)=0,\\qquad f(1)=-1.\n\\]</div><p>La tangente es horizontal:</p><div class=\"math-display\">\\[\ny=-1.\n\\]</div>"
          },
          "commonError": {
            "title": "Dar solo calculos y no el resumen final",
            "titleText": "Dar solo calculos y no el resumen final",
            "tagId": "",
            "html": "<p>En ampliacion no basta con resolver ecuaciones sueltas. Hay que cerrar el ejercicio con una lectura global: donde crece, donde decrece, que extremos tiene y que recta tangente aparece.</p>"
          },
          "guidedExercises": [
            {
              "tagId": "GX-C09.S08-01",
              "title": "Otra cubica",
              "promptHtml": "<p>Estudia monotonia, extremos e inflexion de</p><div class=\"math-display\">\\[\ng(x)=x^3-3x^2.\n\\]</div>",
              "answerHtml": "<p>Crece en \\((-\\infty,0)\\cup(2,\\infty)\\), decrece en \\((0,2)\\), tiene maximo en \\((0,0)\\), minimo en \\((2,-4)\\) e inflexion en \\((1,-2)\\).</p>",
              "solutionHtml": "<div class=\"math-display\">\\[\ng'(x)=3x^2-6x=3x(x-2),\\qquad g''(x)=6x-6.\n\\]</div><p>La derivada primera es positiva en \\((-\\infty,0)\\) y \\((2,\\infty)\\), y negativa en \\((0,2)\\). Luego:</p><div class=\"math-display\">\\[\ng(0)=0,\\qquad g(2)=8-12=-4.\n\\]</div><p>La segunda derivada cambia de signo en \\(x=1\\), y</p><div class=\"math-display\">\\[\ng(1)=1-3=-2.\n\\]</div>"
            },
            {
              "tagId": "GX-C09.S08-02",
              "title": "Tangentes horizontales",
              "promptHtml": "<p>Halla las tangentes horizontales de</p><div class=\"math-display\">\\[\nh(x)=x^3-3x+2.\n\\]</div>",
              "answerHtml": "<p>Se obtienen en \\(x=-1\\) y \\(x=1\\). Las tangentes son \\(y=4\\) y \\(y=0\\).</p>",
              "solutionHtml": "<div class=\"math-display\">\\[\nh'(x)=3x^2-3.\n\\]</div><p>Igualando a cero:</p><div class=\"math-display\">\\[\n3x^2-3=0 \\Longrightarrow x=\\pm 1.\n\\]</div><p>Los puntos correspondientes son</p><div class=\"math-display\">\\[\nh(-1)=4,\\qquad h(1)=0.\n\\]</div><p>Como la pendiente es \\(0\\), las tangentes son las rectas horizontales</p><div class=\"math-display\">\\[\ny=4,\\qquad y=0.\n\\]</div>"
            }
          ],
          "practice": {
            "label": "Practica autonoma graduada",
            "items": [
              {
                "tagId": "PX-C09.S08-01",
                "prompt": "Estudia monotonia, extremos e inflexion de \\(f(x)=x^3-6x\\)."
              },
              {
                "tagId": "PX-C09.S08-02",
                "prompt": "Calcula la tangente y la normal a \\(f(x)=x^3-3x+1\\) en \\(x=0\\)."
              },
              {
                "tagId": "PX-C09.S08-03",
                "prompt": "Halla las tangentes horizontales de \\(f(x)=x^3-12x\\)."
              },
              {
                "tagId": "PX-C09.S08-04",
                "prompt": "Halla los extremos absolutos de \\(f(x)=x^3-3x\\) en \\([-2,2]\\)."
              },
              {
                "tagId": "PX-C09.S08-05",
                "prompt": "Estudia los puntos criticos y extremos de \\(f(x)=x^4-4x^2\\)."
              },
              {
                "tagId": "PX-C09.S08-06",
                "prompt": "Halla \\(a\\) y \\(b\\) para que \\( f(x)= \\begin{cases} x^2,& x<1,\\\\ ax+b,& x\\geq 1 \\end{cases} \\) sea continua y derivable en \\(x=1\\)."
              }
            ],
            "answersHtml": "<ol><li><p>Crece en \\((-\\infty,-\\sqrt{2})\\cup(\\sqrt{2},\\infty)\\) y decrece en \\((-\\sqrt{2},\\sqrt{2})\\). Tiene maximo en \\((-\\sqrt{2},4\\sqrt{2})\\), minimo en \\((\\sqrt{2},-4\\sqrt{2})\\) e inflexion en \\((0,0)\\)</p></li><li><p>Tangente: \\(y=-3x+1\\). Normal: \\(y=\\dfrac{x}{3}+1\\)</p></li><li><p>En \\(x=-2\\) y \\(x=2\\). Las tangentes son \\(y=16\\) y \\(y=-16\\)</p></li><li><p>Maximo absoluto \\(2\\) en \\(x=-1\\) y \\(x=2\\); minimo absoluto \\(-2\\) en \\(x=-2\\) y \\(x=1\\)</p></li><li><p>Puntos criticos en \\(x=-\\sqrt{2},0,\\sqrt{2}\\). Maximo local en \\((0,0)\\) y minimos locales en \\((-\\sqrt{2},-4)\\) y \\((\\sqrt{2},-4)\\)</p></li><li><p>\\(a=2,\\ b=-1\\)</p></li></ol>",
            "solutionsHtml": "<ol><li><div class=\"math-display\">\\[\n  f'(x)=3x^2-6=3(x^2-2),\\qquad f''(x)=6x.\n  \\]</div><p>Los puntos criticos son \\(x=\\pm \\sqrt{2}\\). La derivada es positiva fuera del intervalo \\((-\\sqrt{2},\\sqrt{2})\\) y negativa dentro. Ademas,</p><div class=\"math-display\">\\[\n  f(-\\sqrt{2})=4\\sqrt{2},\\qquad f(\\sqrt{2})=-4\\sqrt{2}.\n  \\]</div><p>La segunda derivada cambia de signo en \\(x=0\\), donde \\(f(0)=0\\).</p></li><li><div class=\"math-display\">\\[\n  f(0)=1,\\qquad f'(x)=3x^2-3,\\qquad f'(0)=-3.\n  \\]</div><p>Tangente:</p><div class=\"math-display\">\\[\n  y-1=-3x\\Longrightarrow y=-3x+1.\n  \\]</div><p>Normal:</p><div class=\"math-display\">\\[\n  y-1=\\frac{1}{3}x\\Longrightarrow y=\\frac{x}{3}+1.\n  \\]</div></li><li><div class=\"math-display\">\\[\n  f'(x)=3x^2-12=3(x-2)(x+2).\n  \\]</div><p>Las tangentes horizontales aparecen en \\(x=\\pm 2\\). Como</p><div class=\"math-display\">\\[\n  f(-2)=16,\\qquad f(2)=-16,\n  \\]</div><p>las rectas son \\(y=16\\) e \\(y=-16\\).</p></li><li><p>Comparamos extremos del intervalo y puntos criticos interiores:</p><div class=\"math-display\">\\[\n  f(-2)=-2,\\qquad f(-1)=2,\\qquad f(1)=-2,\\qquad f(2)=2.\n  \\]</div></li><li><div class=\"math-display\">\\[\n  f'(x)=4x^3-8x=4x(x^2-2).\n  \\]</div><p>Los puntos criticos son \\(-\\sqrt{2},0,\\sqrt{2}\\). La derivada cambia de \\(+\\) a \\(-\\) en \\(0\\), por lo que hay maximo local en \\((0,0)\\). Cambia de \\(-\\) a \\(+\\) en \\(\\pm \\sqrt{2}\\), y</p><div class=\"math-display\">\\[\n  f(\\pm \\sqrt{2})=4-8=-4.\n  \\]</div></li><li><p>La continuidad exige</p><div class=\"math-display\">\\[\n  1=a+b.\n  \\]</div><p>La derivabilidad exige</p><div class=\"math-display\">\\[\n  2=a.\n  \\]</div><p>Por tanto,</p><div class=\"math-display\">\\[\n  a=2,\\qquad b=-1.\n  \\]</div></li></ol>"
          },
          "challenge": {
            "title": "[CH-C09-01] Transferencia en contexto",
            "titleText": "Transferencia en contexto",
            "tagId": "CH-C09-01",
            "html": "<p>La altura de una pelota, en metros, viene dada por</p><div class=\"math-display\">\\[\nh(t)=-t^2+6t+5,\n\\]</div><p>donde \\(t\\) se mide en segundos.</p><ol><li><p>Determina el instante en el que la tangente a la grafica es horizontal.</p></li><li><p>Escribe la ecuacion de esa tangente.</p></li><li><p>Interpreta el resultado en el contexto del problema.</p></li></ol>",
            "answerHtml": "<p>La tangente es horizontal en \\(t=3\\). Su ecuacion es \\(y=14\\). En ese instante la pelota alcanza una altura maxima instantanea y la velocidad vertical es cero.</p>",
            "solutionHtml": "<p>La tangente es horizontal cuando \\(h'(t)=0\\). Como</p><div class=\"math-display\">\\[\nh'(t)=-2t+6,\n\\]</div><p>se cumple</p><div class=\"math-display\">\\[\n-2t+6=0 \\Longrightarrow t=3.\n\\]</div><p>La altura entonces es</p><div class=\"math-display\">\\[\nh(3)=-9+18+5=14.\n\\]</div><p>La tangente en ese instante es la recta horizontal</p><div class=\"math-display\">\\[\ny=14.\n\\]</div><p>En contexto, la pelota esta en un punto alto de su trayectoria y, en ese instante concreto, su velocidad vertical es nula.</p>"
          }
        }
      ]
    },
    {
      "id": "C10",
      "slug": "10_estadistica_probabilidad",
      "title": "Estadistica, probabilidad e inferencia",
      "summaryHtml": "<p>Este capitulo desarrolla el sentido estocastico de Matematicas I: organizacion y analisis de datos bidimensionales, regresion lineal y cuadratica, correlacion, experimentos aleatorios, algebra de sucesos, tecnicas de recuento, probabilidad condicionada, probabilidad total, Bayes e inferencia con herramientas tecnologicas.</p>",
      "studyRouteHtml": "<ol><li><p>Empieza por organizar datos y distinguir poblacion, muestra y variable.</p></li><li><p>Aprende a leer la nube de puntos antes de calcular una recta de regresion.</p></li><li><p>Interpreta correlacion y coeficiente de determinacion sin confundirlos con causalidad.</p></li><li><p>Modeliza el azar mediante espacios muestrales, sucesos y frecuencias relativas.</p></li><li><p>Cierra con recuento, probabilidad condicionada, arboles, probabilidad total y Bayes.</p></li></ol>",
      "sectionCount": 7,
      "sections": [
        {
          "id": "C10.S01",
          "title": "Datos bidimensionales y tablas de contingencia",
          "rawTitle": "[C10.S01] Datos bidimensionales y tablas de contingencia",
          "objectives": [
            {
              "label": "Objetivos de aprendizaje",
              "html": "<ul><li><p>Organizar pares de datos y distribuciones conjuntas.</p></li><li><p>Obtener distribuciones marginales y condicionadas.</p></li><li><p>Detectar dependencia estadistica sin confundirla con causalidad.</p></li></ul>"
            }
          ],
          "prerequisites": [
            {
              "label": "Prerrequisitos",
              "html": "<ul><li><p>Porcentajes, frecuencias absolutas y relativas.</p></li></ul>"
            }
          ],
          "theory": {
            "title": "Idea minima",
            "titleText": "Idea minima",
            "tagId": "",
            "html": "<p>Una variable bidimensional asigna a cada individuo un par \\((x_i,y_i)\\). Si las variables son categoricas, una tabla de contingencia recoge las frecuencias conjuntas. Los totales de filas y columnas son las distribuciones marginales. Una distribucion condicionada se calcula dentro de un grupo concreto; por ejemplo,</p><div class=\"math-display\">\\[\nP(B\\mid A)=\\frac{n(A\\cap B)}{n(A)}.\n\\]</div>"
          },
          "method": {
            "title": "Como leer una tabla sin mezclar denominadores",
            "titleText": "Como leer una tabla sin mezclar denominadores",
            "tagId": "",
            "html": "<ol><li><p>Identifica si te piden una frecuencia conjunta, marginal o condicionada.</p></li><li><p>Marca primero el conjunto que actua como condicion.</p></li><li><p>Divide por el total de ese conjunto, no por el total general.</p></li><li><p>Compara porcentajes condicionados para estudiar dependencia.</p></li></ol>"
          },
          "solvedExample": {
            "title": "[EX-C10.S01-01] Uso de una plataforma de estudio",
            "titleText": "Uso de una plataforma de estudio",
            "tagId": "EX-C10.S01-01",
            "html": "<p>En una clase se registra si el alumnado usa una plataforma de practica y si supera una prueba:</p><div class=\"centered-block\"><div class=\"table-scroll\"><table class=\"math-table\"><thead><tr><th scope=\"col\"><p>Grupo</p></th><th scope=\"col\"><p>Supera</p></th><th scope=\"col\"><p>No supera</p></th><th scope=\"col\"><p>Total</p></th></tr></thead><tbody><tr><td><p>Usa plataforma</p></td><td><p>18</p></td><td><p>6</p></td><td><p>24</p></td></tr><tr><td><p>No la usa</p></td><td><p>8</p></td><td><p>8</p></td><td><p>16</p></td></tr><tr><td><p>Total</p></td><td><p>26</p></td><td><p>14</p></td><td><p>40</p></td></tr></tbody></table></div></div><p>La proporcion que supera la prueba entre quienes usan la plataforma es</p><div class=\"math-display\">\\[\nP(S\\mid U)=\\frac{18}{24}=0.75.\n\\]</div><p>Entre quienes no la usan es</p><div class=\"math-display\">\\[\nP(S\\mid \\overline U)=\\frac{8}{16}=0.50.\n\\]</div><p>Los porcentajes son distintos, por lo que los datos muestran asociacion. No permiten afirmar por si solos que la plataforma sea la causa de la mejora.</p>"
          },
          "commonError": {
            "title": "Dividir siempre por el total general",
            "titleText": "Dividir siempre por el total general",
            "tagId": "",
            "html": "<p>En una probabilidad condicionada el denominador es el total del grupo condicionado. Para \\(P(S\\mid U)\\), el denominador es \\(24\\), no \\(40\\).</p>"
          },
          "guidedExercises": [
            {
              "tagId": "GX-C10.S01-01",
              "title": "Lectura condicionada",
              "promptHtml": "<p>Con la tabla anterior, calcula \\(P(U\\mid S)\\). <strong>Pista 1.</strong> Restringe el recuento a quienes superan la prueba.</p>",
              "answerHtml": "<p>\\(P(U\\mid S)=\\dfrac{18}{26}=\\dfrac9{13}\\).</p>",
              "solutionHtml": "<p>Entre las \\(26\\) personas que superan la prueba, \\(18\\) usan la plataforma. Por tanto, \\(P(U\\mid S)=18/26=9/13\\).</p>"
            }
          ],
          "practice": {
            "label": "Practica autonoma graduada",
            "items": [
              {
                "tagId": "PX-C10.S01-01",
                "prompt": "Calcula la frecuencia relativa conjunta de usar la plataforma y superar la prueba."
              },
              {
                "tagId": "PX-C10.S01-02",
                "prompt": "Calcula la distribucion marginal de superar y no superar."
              },
              {
                "tagId": "PX-C10.S01-03",
                "prompt": "Explica por que la tabla no demuestra causalidad."
              }
            ],
            "answersHtml": "<ol><li><p>\\(18/40=0.45\\).</p></li><li><p>Supera: \\(26/40=0.65\\); no supera: \\(14/40=0.35\\).</p></li><li><p>Es un estudio observacional y pueden existir variables de confusion.</p></li></ol>",
            "solutionsHtml": "<p>La frecuencia conjunta usa la celda \\(18\\) y el total \\(40\\). Las marginales usan los totales de columna. La diferencia entre porcentajes describe asociacion, pero no controla motivacion, tiempo de estudio u otras variables que tambien pueden explicar el resultado.</p>"
          },
          "challenge": {}
        },
        {
          "id": "C10.S02",
          "title": "Nubes de puntos, correlacion y causalidad",
          "rawTitle": "[C10.S02] Nubes de puntos, correlacion y causalidad",
          "objectives": [
            {
              "label": "Objetivos de aprendizaje",
              "html": "<ul><li><p>Interpretar forma, direccion e intensidad de una nube de puntos.</p></li><li><p>Usar el coeficiente de correlacion lineal \\(r\\).</p></li><li><p>Distinguir correlacion, causalidad y correlacion espuria.</p></li></ul>"
            }
          ],
          "prerequisites": [
            {
              "label": "Prerrequisitos",
              "html": "<ul><li><p>Coordenadas cartesianas, media y desviacion tipica.</p></li></ul>"
            }
          ],
          "theory": {
            "title": "Idea minima",
            "titleText": "Idea minima",
            "tagId": "",
            "html": "<p>El diagrama de dispersion representa cada observacion como un punto \\((x_i,y_i)\\). El coeficiente de correlacion lineal cumple \\(-1\\le r\\le 1\\). Su signo indica la direccion y \\(|r|\\) mide la intensidad de la relacion lineal. Un valor cercano a cero no descarta una relacion no lineal.</p>"
          },
          "method": {
            "title": "Lectura en cuatro preguntas",
            "titleText": "Lectura en cuatro preguntas",
            "tagId": "",
            "html": "<ol><li><p>¿La nube sube, baja o no muestra direccion clara?</p></li><li><p>¿Los puntos siguen aproximadamente una recta o una curva?</p></li><li><p>¿Hay valores atipicos que cambien mucho el resultado?</p></li><li><p>¿El contexto permite hablar de causa o solo de asociacion?</p></li></ol>"
          },
          "solvedExample": {
            "title": "[EX-C10.S02-01] Temperatura y consumo electrico",
            "titleText": "Temperatura y consumo electrico",
            "tagId": "EX-C10.S02-01",
            "html": "<p>Una nube de puntos relaciona temperatura exterior y consumo de aire acondicionado. Se obtiene \\(r=0.91\\). Existe una asociacion lineal positiva fuerte: en los datos, las temperaturas altas tienden a coincidir con consumos altos. El valor \\(0.91\\) no significa que el \\(91\\%\\) del consumo este causado por la temperatura ni que todos los puntos esten sobre una recta.</p>"
          },
          "commonError": {
            "title": "Interpretar \\(r\\) como porcentaje explicado",
            "titleText": "Interpretar \\(r\\) como porcentaje explicado",
            "tagId": "",
            "html": "<p>El porcentaje de variabilidad explicado por un modelo lineal se relaciona con \\(R^2\\), no con \\(r\\). Ademas, ni \\(r\\) ni \\(R^2\\) demuestran causalidad.</p>"
          },
          "guidedExercises": [
            {
              "tagId": "GX-C10.S02-01",
              "title": "Relacion no lineal",
              "promptHtml": "<p>Los puntos siguen aproximadamente una U y se obtiene \\(r=0.03\\). ¿Puede existir relacion?</p>",
              "answerHtml": "<p>Si; \\(r\\) solo mide relacion lineal.</p>",
              "solutionHtml": "<p>Las ramas descendente y ascendente pueden compensarse en el calculo de \\(r\\). La nube muestra una relacion cuadratica aunque la correlacion lineal sea casi nula.</p>"
            }
          ],
          "practice": {
            "label": "Practica autonoma graduada",
            "items": [
              {
                "tagId": "PX-C10.S02-01",
                "prompt": "Interpreta \\(r=-0.82\\) en un contexto de velocidad y tiempo de viaje."
              },
              {
                "tagId": "PX-C10.S02-02",
                "prompt": "Decide si \\(r=1\\) implica causalidad."
              },
              {
                "tagId": "PX-C10.S02-03",
                "prompt": "Explica el efecto posible de un valor atipico sobre \\(r\\)."
              }
            ],
            "answersHtml": "<ol><li><p>Asociacion lineal negativa fuerte.</p></li><li><p>No.</p></li><li><p>Puede aumentar, reducir o incluso cambiar el signo de la correlacion.</p></li></ol>",
            "solutionsHtml": "<p>Una asociacion negativa indica que, al aumentar una variable, la otra tiende a disminuir. La causalidad exige un diseno y una argumentacion adicionales. Los valores atipicos deben estudiarse en contexto, no borrarse de forma automatica.</p>"
          },
          "challenge": {}
        },
        {
          "id": "C10.S03",
          "title": "Regresion lineal y cuadratica",
          "rawTitle": "[C10.S03] Regresion lineal y cuadratica",
          "objectives": [
            {
              "label": "Objetivos de aprendizaje",
              "html": "<ul><li><p>Ajustar e interpretar modelos lineales y cuadraticos.</p></li><li><p>Usar \\(R^2\\) y los residuos para valorar un ajuste.</p></li><li><p>Diferenciar interpolacion y extrapolacion.</p></li></ul>"
            }
          ],
          "prerequisites": [
            {
              "label": "Prerrequisitos",
              "html": "<ul><li><p>Ecuacion de la recta y funciones cuadraticas.</p></li></ul>"
            }
          ],
          "theory": {
            "title": "Idea minima",
            "titleText": "Idea minima",
            "tagId": "",
            "html": "<p>Una recta de regresion tiene forma \\(\\hat y=a+bx\\). El residuo de un dato es \\(e_i=y_i-\\hat y_i\\). En un ajuste por minimos cuadrados con termino independiente, el coeficiente \\(R^2\\) mide que proporcion de la variabilidad observada de \\(y\\) recoge el modelo. Esta medida describe el ajuste en los datos analizados, pero no demuestra causalidad. Un buen modelo combina ajuste numerico, residuos sin patron y sentido en el contexto.</p>"
          },
          "method": {
            "title": "Elegir y validar el modelo",
            "titleText": "Elegir y validar el modelo",
            "tagId": "",
            "html": "<ol><li><p>Representa los datos y decide si la tendencia parece lineal o curvada.</p></li><li><p>Obtiene el ajuste con calculadora, hoja de calculo o software.</p></li><li><p>Interpreta los parametros con unidades.</p></li><li><p>Revisa \\(R^2\\), los residuos y el intervalo observado antes de predecir.</p></li></ol>"
          },
          "solvedExample": {
            "title": "[EX-C10.S03-01] Calibracion de un sensor",
            "titleText": "Calibracion de un sensor",
            "tagId": "EX-C10.S03-01",
            "html": "<p>Para entradas \\(x=1,2,3,4\\), un sensor produce \\(y=2.1,4.0,5.9,8.0\\). Un ajuste da</p><div class=\"math-display\">\\[\n\\hat y=0.10+1.96x,\\qquad R^2=0.999.\n\\]</div><p>Para \\(x=2.5\\), la prediccion es \\(\\hat y=0.10+1.96\\cdot2.5=5.00\\). Es una interpolacion y resulta fiable dentro de las condiciones medidas. Para \\(x=20\\) seria una extrapolacion lejana: el alto \\(R^2\\) no garantiza que el sensor siga siendo lineal alli.</p>"
          },
          "commonError": {
            "title": "Elegir solo por el mayor \\(R^2\\)",
            "titleText": "Elegir solo por el mayor \\(R^2\\)",
            "tagId": "",
            "html": "<p>Un polinomio complejo puede aumentar \\(R^2\\) y empeorar la interpretacion o las predicciones. Hay que valorar la forma de la nube, los residuos, el contexto y la sencillez del modelo.</p>"
          },
          "guidedExercises": [
            {
              "tagId": "GX-C10.S03-01",
              "title": "Interpretar la pendiente",
              "promptHtml": "<p>En \\(\\hat y=12+0.8x\\), donde \\(x\\) son horas y \\(y\\) gramos, interpreta \\(0.8\\).</p>",
              "answerHtml": "<p>El modelo aumenta \\(0.8\\) gramos por cada hora adicional.</p>",
              "solutionHtml": "<p>La pendiente es la variacion prevista de \\(y\\) al aumentar \\(x\\) una unidad. Sus unidades son gramos por hora.</p>"
            }
          ],
          "practice": {
            "label": "Practica autonoma graduada",
            "items": [
              {
                "tagId": "PX-C10.S03-01",
                "prompt": "Predice \\(y\\) para \\(x=10\\) con \\(\\hat y=3+1.5x\\)."
              },
              {
                "tagId": "PX-C10.S03-02",
                "prompt": "Calcula el residuo si para \\(x=4\\) se observa \\(y=10\\) y el modelo predice \\(9.2\\)."
              },
              {
                "tagId": "PX-C10.S03-03",
                "prompt": "Explica por que no conviene extrapolar muy lejos."
              }
            ],
            "answersHtml": "<ol><li><p>\\(18\\).</p></li><li><p>\\(0.8\\).</p></li><li><p>La relacion puede cambiar fuera del intervalo observado.</p></li></ol>",
            "solutionsHtml": "<p>Se sustituye \\(x=10\\): \\(3+1.5\\cdot10=18\\). El residuo es observado menos predicho: \\(10-9.2=0.8\\). Una extrapolacion supone, sin evidencia, que el patron continua.</p>"
          },
          "challenge": {}
        },
        {
          "id": "C10.S04",
          "title": "Muestreo, inferencia y tecnologia",
          "rawTitle": "[C10.S04] Muestreo, inferencia y tecnologia",
          "objectives": [
            {
              "label": "Objetivos de aprendizaje",
              "html": "<ul><li><p>Distinguir poblacion, muestra, parametro y estadistico.</p></li><li><p>Reconocer sesgos de seleccion y de respuesta.</p></li><li><p>Usar una muestra para emitir juicios prudentes.</p></li></ul>"
            }
          ],
          "prerequisites": [
            {
              "label": "Prerrequisitos",
              "html": "<ul><li><p>Proporciones, medias y lectura critica de graficos.</p></li></ul>"
            }
          ],
          "theory": {
            "title": "Idea minima",
            "titleText": "Idea minima",
            "tagId": "",
            "html": "<p>La poblacion es el conjunto sobre el que se desea concluir; la muestra es el subconjunto observado. Un estadistico muestral estima un parametro poblacional. Si se mantiene un muestreo aleatorio comparable, aumentar el tamaño suele reducir la variabilidad muestral, pero no corrige un procedimiento de seleccion sesgado.</p>"
          },
          "method": {
            "title": "Auditoria de una conclusion estadistica",
            "titleText": "Auditoria de una conclusion estadistica",
            "tagId": "",
            "html": "<ol><li><p>Identifica poblacion, muestra, variable y forma de seleccion.</p></li><li><p>Comprueba si algunos grupos han quedado fuera o responden menos.</p></li><li><p>Revisa unidades, valores ausentes y atipicos con una herramienta digital.</p></li><li><p>Redacta la conclusion indicando alcance y limitaciones.</p></li></ol>"
          },
          "solvedExample": {
            "title": "[EX-C10.S04-01] Encuesta sobre transporte",
            "titleText": "Encuesta sobre transporte",
            "tagId": "EX-C10.S04-01",
            "html": "<p>Un centro publica una encuesta en la aplicacion que solo usa el alumnado que va en autobus y concluye que el \\(84\\%\\) de todo el alumnado prefiere ampliar ese servicio. Aunque respondan muchas personas, la muestra esta autoseleccionada y sobrerrepresenta a quienes usan autobus. La conclusion no puede generalizarse sin una muestra que incluya de forma adecuada al resto.</p>"
          },
          "commonError": {
            "title": "Creer que una muestra grande siempre es representativa",
            "titleText": "Creer que una muestra grande siempre es representativa",
            "tagId": "",
            "html": "<p>Diez mil respuestas obtenidas con un mecanismo sesgado pueden ser menos utiles que una muestra aleatoria mas pequeña y bien diseñada.</p>"
          },
          "guidedExercises": [
            {
              "tagId": "GX-C10.S04-01",
              "title": "Mejorar el diseño",
              "promptHtml": "<p>Propone una forma de seleccionar una muestra que represente cursos y grupos del centro.</p>",
              "answerHtml": "<p>Muestreo aleatorio estratificado por curso y grupo.</p>",
              "solutionHtml": "<p>Se divide la poblacion por curso y grupo y se selecciona al azar un numero proporcional de personas en cada estrato. Asi se evita que un unico nivel domine la muestra.</p>"
            }
          ],
          "practice": {
            "label": "Practica autonoma graduada",
            "items": [
              {
                "tagId": "PX-C10.S04-01",
                "prompt": "Identifica poblacion y muestra en una encuesta a 120 de los 900 estudiantes del centro."
              },
              {
                "tagId": "PX-C10.S04-02",
                "prompt": "Explica el sesgo de entrevistar solo a quienes estan en la biblioteca."
              },
              {
                "tagId": "PX-C10.S04-03",
                "prompt": "Redacta una conclusion prudente si 72 de 120 respuestas apoyan una medida."
              }
            ],
            "answersHtml": "<ol><li><p>Poblacion: 900; muestra: 120.</p></li><li><p>Excluye a quienes no frecuentan la biblioteca.</p></li><li><p>En la muestra, el \\(60\\%\\) apoya la medida; la generalizacion depende del muestreo.</p></li></ol>",
            "solutionsHtml": "<p>La proporcion muestral es \\(72/120=0.60\\). Debe comunicarse como resultado de la muestra y acompañarse de informacion sobre seleccion, no como una verdad exacta sobre toda la poblacion.</p>"
          },
          "challenge": {}
        },
        {
          "id": "C10.S05",
          "title": "Experimentos aleatorios y algebra de sucesos",
          "rawTitle": "[C10.S05] Experimentos aleatorios y algebra de sucesos",
          "objectives": [
            {
              "label": "Objetivos de aprendizaje",
              "html": "<ul><li><p>Construir espacios muestrales y operar con sucesos.</p></li><li><p>Aplicar complementario, union, interseccion y leyes de Morgan.</p></li><li><p>Estimar probabilidades mediante frecuencia relativa.</p></li></ul>"
            }
          ],
          "prerequisites": [
            {
              "label": "Prerrequisitos",
              "html": "<ul><li><p>Conjuntos, diagramas de Venn y fracciones.</p></li></ul>"
            }
          ],
          "theory": {
            "title": "Idea minima",
            "titleText": "Idea minima",
            "tagId": "",
            "html": "<p>El espacio muestral \\(\\Omega\\) contiene los resultados posibles. Los sucesos son subconjuntos de \\(\\Omega\\). Se cumplen</p><div class=\"math-display\">\\[\nP(\\overline A)=1-P(A),\\qquad\nP(A\\cup B)=P(A)+P(B)-P(A\\cap B),\n\\]</div><p>y las leyes de Morgan</p><div class=\"math-display\">\\[\n\\overline{A\\cup B}=\\overline A\\cap\\overline B,\n\\qquad\n\\overline{A\\cap B}=\\overline A\\cup\\overline B.\n\\]</div>"
          },
          "method": {
            "title": "Traducir antes de calcular",
            "titleText": "Traducir antes de calcular",
            "tagId": "",
            "html": "<ol><li><p>Escribe el experimento y su espacio muestral.</p></li><li><p>Traduce palabras: ``al menos uno'' suele resolverse con el complementario.</p></li><li><p>Dibuja un diagrama de Venn si aparecen union e interseccion.</p></li><li><p>Comprueba que la probabilidad final esta entre \\(0\\) y \\(1\\).</p></li></ol>"
          },
          "solvedExample": {
            "title": "[EX-C10.S05-01] Control de dos sensores",
            "titleText": "Control de dos sensores",
            "tagId": "EX-C10.S05-01",
            "html": "<p>Sean \\(A\\): ``falla el sensor A'' y \\(B\\): ``falla el sensor B'', con \\(P(A)=0.08\\), \\(P(B)=0.05\\) y \\(P(A\\cap B)=0.02\\). Entonces</p><div class=\"math-display\">\\[\nP(A\\cup B)=0.08+0.05-0.02=0.11.\n\\]</div><p>La probabilidad de que no falle ninguno es el complementario:</p><div class=\"math-display\">\\[\nP(\\overline A\\cap\\overline B)=1-P(A\\cup B)=0.89.\n\\]</div>"
          },
          "commonError": {
            "title": "Sumar sin restar la interseccion",
            "titleText": "Sumar sin restar la interseccion",
            "tagId": "",
            "html": "<p>Al sumar \\(P(A)+P(B)\\), los resultados de \\(A\\cap B\\) se cuentan dos veces. Solo puede omitirse la interseccion cuando los sucesos son incompatibles.</p>"
          },
          "guidedExercises": [
            {
              "tagId": "GX-C10.S05-01",
              "title": "Frecuencia relativa",
              "promptHtml": "<p>En \\(500\\) simulaciones un suceso ocurre \\(137\\) veces. Estima su probabilidad.</p>",
              "answerHtml": "<p>\\(137/500=0.274\\).</p>",
              "solutionHtml": "<p>La frecuencia relativa es \\(f_r=137/500=0.274\\). Es una estimacion experimental, no una igualdad exacta que deba repetirse en otra tanda.</p>"
            }
          ],
          "practice": {
            "label": "Practica autonoma graduada",
            "items": [
              {
                "tagId": "PX-C10.S05-01",
                "prompt": "Si \\(P(A)=0.37\\), calcula \\(P(\\overline A)\\)."
              },
              {
                "tagId": "PX-C10.S05-02",
                "prompt": "Si \\(P(A)=0.5\\), \\(P(B)=0.4\\) y \\(P(A\\cap B)=0.2\\), calcula \\(P(A\\cup B)\\)."
              },
              {
                "tagId": "PX-C10.S05-03",
                "prompt": "Escribe con sucesos ``no ocurre ni A ni B''."
              }
            ],
            "answersHtml": "<ol><li><p>\\(0.63\\).</p></li><li><p>\\(0.7\\).</p></li><li><p>\\(\\overline A\\cap\\overline B=\\overline{A\\cup B}\\).</p></li></ol>",
            "solutionsHtml": "<p>Se usa el complementario para el primer caso y la formula de la union para el segundo: \\(0.5+0.4-0.2=0.7\\). La expresion ``ni A ni B'' excluye la union de ambos sucesos.</p>"
          },
          "challenge": {}
        },
        {
          "id": "C10.S06",
          "title": "Regla de Laplace y tecnicas de recuento",
          "rawTitle": "[C10.S06] Regla de Laplace y tecnicas de recuento",
          "objectives": [
            {
              "label": "Objetivos de aprendizaje",
              "html": "<ul><li><p>Aplicar Laplace solo cuando los resultados elementales son equiprobables.</p></li><li><p>Usar producto, permutaciones y combinaciones para contar.</p></li><li><p>Evitar enumeraciones incompletas o con duplicados.</p></li></ul>"
            }
          ],
          "prerequisites": [
            {
              "label": "Prerrequisitos",
              "html": "<ul><li><p>Factoriales y operaciones con fracciones.</p></li></ul>"
            }
          ],
          "theory": {
            "title": "Idea minima",
            "titleText": "Idea minima",
            "tagId": "",
            "html": "<p>Si los resultados elementales son equiprobables,</p><div class=\"math-display\">\\[\nP(A)=\\frac{\\text{casos favorables}}{\\text{casos posibles}}.\n\\]</div><p>El principio multiplicativo cuenta procesos por etapas. Si el orden importa aparecen permutaciones o variaciones; si no importa, combinaciones:</p><div class=\"math-display\">\\[\n\\binom nk=\\frac{n!}{k!(n-k)!}.\n\\]</div>"
          },
          "method": {
            "title": "Decidir como contar",
            "titleText": "Decidir como contar",
            "tagId": "",
            "html": "<ol><li><p>Describe un resultado elemental y comprueba la equiprobabilidad.</p></li><li><p>Separa el experimento en etapas y multiplica sus opciones.</p></li><li><p>Pregunta si intercambiar el orden produce un resultado distinto.</p></li><li><p>Cuenta favorables y posibles con el mismo criterio.</p></li></ol>"
          },
          "solvedExample": {
            "title": "[EX-C10.S06-01] Equipo de laboratorio",
            "titleText": "Equipo de laboratorio",
            "tagId": "EX-C10.S06-01",
            "html": "<p>De \\(8\\) estudiantes se eligen \\(3\\) para formar un equipo, sin cargos. Hay</p><div class=\"math-display\">\\[\n\\binom83=56\n\\]</div><p>equipos. Si dos estudiantes concretos, Ana y Bilal, deben estar juntos, se fija esa pareja y se elige una persona entre las otras \\(6\\): hay \\(6\\) casos favorables. Por tanto,</p><div class=\"math-display\">\\[\nP(\\text{Ana y Bilal juntos})=\\frac6{56}=\\frac3{28}.\n\\]</div>"
          },
          "commonError": {
            "title": "Usar combinaciones cuando el orden si importa",
            "titleText": "Usar combinaciones cuando el orden si importa",
            "tagId": "",
            "html": "<p>Elegir un equipo de tres personas no es lo mismo que asignar presidencia, secretaria y portavocia. En el segundo caso los cargos distinguen el orden.</p>"
          },
          "guidedExercises": [
            {
              "tagId": "GX-C10.S06-01",
              "title": "Codigos sin repeticion",
              "promptHtml": "<p>¿Cuantos codigos de tres cifras distintas pueden formarse con \\(1,2,3,4,5\\)?</p>",
              "answerHtml": "<p>\\(5\\cdot4\\cdot3=60\\).</p>",
              "solutionHtml": "<p>Hay \\(5\\) opciones para la primera posicion, \\(4\\) para la segunda y \\(3\\) para la tercera. El orden importa porque \\(123\\) y \\(321\\) son codigos distintos.</p>"
            }
          ],
          "practice": {
            "label": "Practica autonoma graduada",
            "items": [
              {
                "tagId": "PX-C10.S06-01",
                "prompt": "Calcula \\(\\binom{10}{2}\\)."
              },
              {
                "tagId": "PX-C10.S06-02",
                "prompt": "Cuenta las ordenaciones de cuatro libros distintos."
              },
              {
                "tagId": "PX-C10.S06-03",
                "prompt": "Al lanzar dos dados, calcula la probabilidad de suma \\(7\\)."
              }
            ],
            "answersHtml": "<ol><li><p>\\(45\\).</p></li><li><p>\\(4!=24\\).</p></li><li><p>\\(6/36=1/6\\).</p></li></ol>",
            "solutionsHtml": "<p>Las parejas no ordenadas se cuentan con \\(\\binom{10}{2}=45\\). Los libros admiten \\(4!\\) ordenaciones. Entre los \\(36\\) pares equiprobables de dos dados, seis suman \\(7\\).</p>"
          },
          "challenge": {}
        },
        {
          "id": "C10.S07",
          "title": "Probabilidad condicionada, total y Bayes",
          "rawTitle": "[C10.S07] Probabilidad condicionada, total y Bayes",
          "objectives": [
            {
              "label": "Objetivos de aprendizaje",
              "html": "<ul><li><p>Interpretar probabilidad condicionada e independencia.</p></li><li><p>Resolver experimentos compuestos con tablas y diagramas de arbol.</p></li><li><p>Aplicar probabilidad total y Bayes en contexto.</p></li></ul>"
            }
          ],
          "prerequisites": [
            {
              "label": "Prerrequisitos",
              "html": "<ul><li><p>Algebra de sucesos, fracciones y porcentajes.</p></li></ul>"
            }
          ],
          "theory": {
            "title": "Idea minima",
            "titleText": "Idea minima",
            "tagId": "",
            "html": "<p>Si \\(P(A)>0\\),</p><div class=\"math-display\">\\[\nP(B\\mid A)=\\frac{P(A\\cap B)}{P(A)}.\n\\]</div><p>Los sucesos son independientes si \\(P(A\\cap B)=P(A)P(B)\\). Para una particion \\(A_i\\),</p><div class=\"math-display\">\\[\nP(B)=\\sum_i P(A_i)P(B\\mid A_i),\n\\qquad\nP(A_j\\mid B)=\\frac{P(A_j)P(B\\mid A_j)}{P(B)}.\n\\]</div>"
          },
          "method": {
            "title": "Arbol de probabilidades",
            "titleText": "Arbol de probabilidades",
            "tagId": "",
            "html": "<ol><li><p>Separa las alternativas iniciales en ramas que sumen \\(1\\).</p></li><li><p>Escribe en la segunda etapa probabilidades condicionadas.</p></li><li><p>Multiplica a lo largo de cada camino.</p></li><li><p>Suma caminos para la probabilidad total y divide para invertir la condicion con Bayes.</p></li></ol>"
          },
          "solvedExample": {
            "title": "[EX-C10.S07-01] Alerta de un sistema",
            "titleText": "Alerta de un sistema",
            "tagId": "EX-C10.S07-01",
            "html": "<p>El \\(4\\%\\) de las piezas presenta un defecto. Un sistema alerta en el \\(95\\%\\) de las defectuosas y tambien alerta por error en el \\(3\\%\\) de las correctas. La probabilidad total de alerta es</p><div class=\"centered-block\"><div class=\"figure-fallback\">Esquema disponible en el cuaderno PDF. Refuerza esta idea con el laboratorio interactivo.</div></div><div class=\"math-display\">\\[\nP(A)=0.04\\cdot0.95+0.96\\cdot0.03=0.0668.\n\\]</div><p>Si hay alerta, la probabilidad de defecto es</p><div class=\"math-display\">\\[\nP(D\\mid A)=\\frac{0.04\\cdot0.95}{0.0668}\\approx0.5689.\n\\]</div><p>Una alerta no implica certeza: la baja frecuencia inicial del defecto importa.</p>"
          },
          "commonError": {
            "title": "Intercambiar la condicion",
            "titleText": "Intercambiar la condicion",
            "tagId": "",
            "html": "<p>\\(P(A\\mid D)\\) y \\(P(D\\mid A)\\) responden preguntas distintas. Bayes permite relacionarlas, pero no pueden intercambiarse sin calcular.</p>"
          },
          "guidedExercises": [
            {
              "tagId": "GX-C10.S07-01",
              "title": "Independencia",
              "promptHtml": "<p>Si \\(P(A)=0.4\\), \\(P(B)=0.5\\) y \\(P(A\\cap B)=0.2\\), decide si son independientes.</p>",
              "answerHtml": "<p>Si, porque \\(0.4\\cdot0.5=0.2\\).</p>",
              "solutionHtml": "<p>Se compara la interseccion observada con el producto de probabilidades. Como \\(P(A\\cap B)=P(A)P(B)=0.2\\), los sucesos son independientes. La positividad solo seria necesaria si se quisiera expresar la independencia mediante probabilidades condicionadas.</p>"
            }
          ],
          "practice": {
            "label": "Practica autonoma graduada",
            "items": [
              {
                "tagId": "PX-C10.S07-01",
                "prompt": "Si \\(P(A\\cap B)=0.18\\) y \\(P(A)=0.6\\), calcula \\(P(B\\mid A)\\)."
              },
              {
                "tagId": "PX-C10.S07-02",
                "prompt": "Una maquina produce el \\(70\\%\\) de las piezas y otra el \\(30\\%\\); sus tasas de defecto son \\(2\\%\\) y \\(5\\%\\). Calcula la tasa total."
              },
              {
                "tagId": "PX-C10.S07-03",
                "prompt": "Explica por que un positivo no garantiza tener la condicion estudiada."
              }
            ],
            "answersHtml": "<ol><li><p>\\(0.3\\).</p></li><li><p>\\(0.7\\cdot0.02+0.3\\cdot0.05=0.029\\).</p></li><li><p>Depende de falsos positivos y de la frecuencia inicial de la condicion.</p></li></ol>",
            "solutionsHtml": "<p>La condicion restringe el denominador: \\(0.18/0.6=0.3\\). La probabilidad total suma los dos caminos de defecto y vale \\(0.029\\), es decir, \\(2.9\\%\\). Para interpretar un resultado positivo debe aplicarse Bayes e incorporar la prevalencia.</p>"
          },
          "challenge": {
            "title": "[CH-C10.S07-01] Auditoria completa de una prediccion",
            "titleText": "Auditoria completa de una prediccion",
            "tagId": "CH-C10.S07-01",
            "html": "<p>Diseña una pequeña investigacion con dos variables cuantitativas de tu entorno. Define poblacion y muestra, recoge al menos \\(12\\) pares, representa la nube, compara un ajuste lineal y uno cuadratico, analiza residuos, justifica una prediccion y explica por que no puedes afirmar causalidad solo con esos datos.</p>",
            "answerHtml": "<p>La entrega debe incluir datos, grafico, modelos, \\(R^2\\), residuos, prediccion y limitaciones.</p>",
            "solutionHtml": "<p>No existe una unica solucion numerica. Se valora que la muestra sea defendible, que los datos y unidades sean trazables, que el modelo elegido concuerde con la forma de la nube y los residuos, que la prediccion no extrapole sin justificacion y que la conclusion distinga asociacion de causa.</p>"
          }
        }
      ]
    },
    {
      "id": "R10",
      "slug": "10_repaso_acumulativo",
      "title": "Repaso acumulativo, simulacros y reto final",
      "summaryHtml": "<p>Este capitulo no nace de una fila concreta de la matriz de cobertura, sino como cierre original del libro para recombinar tecnicas de <code>C01-C09</code>. Su objetivo es entrenar diagnostico, eleccion de metodo, control de errores y trabajo con tiempo limitado.</p>",
      "studyRouteHtml": "<ol><li><p>Haz primero el diagnostico sin mirar apuntes.</p></li><li><p>Vuelve al capitulo origen cuando detectes un fallo de base.</p></li><li><p>Usa la hoja mixta para practicar cambios de tecnica.</p></li><li><p>Reserva los simulacros para una sesion cerrada con tiempo real.</p></li><li><p>Cierra con el reto final y anota en la tabla de seguimiento que bloque necesita mas consolidacion.</p></li></ol>",
      "sectionCount": 7,
      "sections": [
        {
          "id": "R10.S01",
          "title": "Diagnostico inicial",
          "rawTitle": "[R10.S01] Diagnostico inicial",
          "objectives": [
            {
              "label": "Objetivo",
              "html": "<p>Comprobar en poco tiempo si siguen activos los automatismos basicos de dominio, ecuaciones, trigonometria y tangentes.</p>"
            }
          ],
          "prerequisites": [],
          "theory": {},
          "method": {},
          "solvedExample": {},
          "commonError": {},
          "guidedExercises": [],
          "practice": {
            "label": "Practica diagnostica",
            "items": [
              {
                "tagId": "PX-R10.S01-01",
                "prompt": "Halla el dominio de \\(f(x)=\\dfrac{\\ln(x-1)}{x+2}\\)."
              },
              {
                "tagId": "PX-R10.S01-02",
                "prompt": "Resuelve \\(\\sqrt{x+5}=x-1\\)."
              },
              {
                "tagId": "PX-R10.S01-03",
                "prompt": "Resuelve \\(2\\cos x=1\\) en \\([0,2\\pi)\\)."
              },
              {
                "tagId": "PX-R10.S01-04",
                "prompt": "Halla la recta tangente a \\(f(x)=x^2-3x\\) en \\(x=1\\)."
              }
            ],
            "answersHtml": "<ol><li><p>\\((1,\\infty)\\)</p></li><li><p>\\(x=4\\)</p></li><li><p>\\(x=\\dfrac{\\pi}{3}\\) o \\(x=\\dfrac{5\\pi}{3}\\)</p></li><li><p>\\(y=-x-1\\)</p></li></ol>",
            "solutionsHtml": "<ol><li><p>El logaritmo exige \\(x-1>0\\), luego \\(x>1\\). Ademas \\(x+2\\neq 0\\), pero esa restriccion ya queda absorbida por \\(x>1\\). Por tanto,</p><div class=\"math-display\">\\[\n  D_f=(1,\\infty).\n  \\]</div></li><li><p>Debe cumplirse \\(x-1\\geq 0\\), es decir, \\(x\\geq 1\\). Elevando al cuadrado:</p><div class=\"math-display\">\\[\n  x+5=(x-1)^2=x^2-2x+1\n  \\Longrightarrow x^2-3x-4=0.\n  \\]</div><p>Factorizando,</p><div class=\"math-display\">\\[\n  (x-4)(x+1)=0.\n  \\]</div><p>Las candidatas son \\(x=4\\) y \\(x=-1\\), pero solo \\(x=4\\) respeta \\(x\\geq 1\\). La solucion es \\(x=4\\).</p></li><li><div class=\"math-display\">\\[\n  2\\cos x=1 \\Longrightarrow \\cos x=\\frac{1}{2}.\n  \\]</div><p>En \\([0,2\\pi)\\) ocurre en</p><div class=\"math-display\">\\[\n  x=\\frac{\\pi}{3},\\qquad x=\\frac{5\\pi}{3}.\n  \\]</div></li><li><div class=\"math-display\">\\[\n  f'(x)=2x-3,\\qquad f'(1)=-1,\\qquad f(1)=1-3=-2.\n  \\]</div><p>La tangente por \\((1,-2)\\) con pendiente \\(-1\\) es</p><div class=\"math-display\">\\[\n  y+2=-(x-1),\n  \\]</div><p>luego</p><div class=\"math-display\">\\[\n  y=-x-1.\n  \\]</div></li></ol>"
          },
          "challenge": {}
        },
        {
          "id": "R10.S02",
          "title": "Hoja mixta",
          "rawTitle": "[R10.S02] Hoja mixta",
          "objectives": [],
          "prerequisites": [],
          "theory": {},
          "method": {},
          "solvedExample": {
            "title": "[EX-R10.S02-01] Simplificar sin perder el dominio",
            "titleText": "Simplificar sin perder el dominio",
            "tagId": "EX-R10.S02-01",
            "html": "<p>Simplifica</p><div class=\"math-display\">\\[\n\\frac{x^2-9}{x^2-3x}\n\\]</div><p>e indica las restricciones iniciales.</p><p><strong>Lectura del problema.</strong> Antes de simplificar, el denominador obliga a imponer</p><div class=\"math-display\">\\[\nx^2-3x\\neq 0 \\Longrightarrow x(x-3)\\neq 0,\n\\]</div><p>por lo que \\(x\\neq 0\\) y \\(x\\neq 3\\).</p><p><strong>Desarrollo.</strong> Factorizamos:</p><div class=\"math-display\">\\[\n\\frac{x^2-9}{x^2-3x}=\\frac{(x-3)(x+3)}{x(x-3)}.\n\\]</div><p>Se puede simplificar el factor \\(x-3\\), pero la restriccion \\(x\\neq 3\\) no desaparece:</p><div class=\"math-display\">\\[\n\\frac{x^2-9}{x^2-3x}=\\frac{x+3}{x},\\qquad x\\neq 0,\\ 3.\n\\]</div><p><strong>Idea clave.</strong> Simplificar una expresion no equivale a cambiar su dominio original.</p>"
          },
          "commonError": {
            "title": "Borrar una restriccion por simplificar factores",
            "titleText": "Borrar una restriccion por simplificar factores",
            "tagId": "",
            "html": "<p>Si una expresion original no esta definida en un punto, ese punto sigue prohibido aunque el factor que lo provocaba desaparezca al simplificar.</p>"
          },
          "guidedExercises": [],
          "practice": {
            "label": "Practica autonoma graduada",
            "items": [
              {
                "tagId": "PX-R10.S02-01",
                "prompt": "Halla la recta que pasa por \\(A(1,2)\\) y es perpendicular a \\(2x-y+3=0\\)."
              },
              {
                "tagId": "PX-R10.S02-02",
                "prompt": "Calcula \\(\\lim_{x\\to 2}\\dfrac{x^2-4}{x-2}\\)."
              },
              {
                "tagId": "PX-R10.S02-03",
                "prompt": "Entre todos los rectangulos de perimetro \\(20\\), halla el de area maxima."
              },
              {
                "tagId": "PX-R10.S02-04",
                "prompt": "Resuelve el sistema \\[ \\begin{cases} x+y=5,\\\\ x^2+y^2=13. \\end{cases} \\]"
              }
            ],
            "answersHtml": "<ol><li><p>\\(y=-\\dfrac{1}{2}x+\\dfrac{5}{2}\\)</p></li><li><p>\\(4\\)</p></li><li><p>El cuadrado de lado \\(5\\), con area \\(25\\)</p></li><li><p>\\((2,3)\\) y \\((3,2)\\)</p></li></ol>",
            "solutionsHtml": "<ol><li><p>La recta dada es</p><div class=\"math-display\">\\[\n  y=2x+3,\n  \\]</div><p>asi que su pendiente es \\(2\\). La recta perpendicular tiene pendiente \\(-\\dfrac{1}{2}\\). Por el punto \\(A(1,2)\\):</p><div class=\"math-display\">\\[\n  y-2=-\\frac{1}{2}(x-1).\n  \\]</div><p>Despejando,</p><div class=\"math-display\">\\[\n  y=-\\frac{1}{2}x+\\frac{5}{2}.\n  \\]</div></li><li><p>Factorizamos:</p><div class=\"math-display\">\\[\n  \\frac{x^2-4}{x-2}=\\frac{(x-2)(x+2)}{x-2}=x+2 \\quad (x\\neq 2).\n  \\]</div><p>Luego</p><div class=\"math-display\">\\[\n  \\lim_{x\\to 2}\\frac{x^2-4}{x-2}=\\lim_{x\\to 2}(x+2)=4.\n  \\]</div></li><li><p>Si los lados son \\(x\\) e \\(y\\), entonces</p><div class=\"math-display\">\\[\n  2x+2y=20 \\Longrightarrow y=10-x.\n  \\]</div><p>El area vale</p><div class=\"math-display\">\\[\n  A(x)=x(10-x)=10x-x^2.\n  \\]</div><p>Es una parabola concava; su maximo se alcanza en</p><div class=\"math-display\">\\[\n  x=\\frac{10}{2}=5.\n  \\]</div><p>Entonces \\(y=5\\) y el area maxima es \\(25\\).</p></li><li><p>De \\(x+y=5\\) se obtiene</p><div class=\"math-display\">\\[\n  (x+y)^2=25=x^2+y^2+2xy=13+2xy,\n  \\]</div><p>luego \\(2xy=12\\) y por tanto \\(xy=6\\). Los numeros \\(x\\) e \\(y\\) suman \\(5\\) y multiplican \\(6\\), asi que son las raices de</p><div class=\"math-display\">\\[\n  t^2-5t+6=0=(t-2)(t-3).\n  \\]</div><p>Por tanto,</p><div class=\"math-display\">\\[\n  (x,y)=(2,3)\\quad \\text{o}\\quad (3,2).\n  \\]</div></li></ol>"
          },
          "challenge": {}
        },
        {
          "id": "R10.S03",
          "title": "Eleccion de metodo",
          "rawTitle": "[R10.S03] Eleccion de metodo",
          "objectives": [],
          "prerequisites": [],
          "theory": {
            "title": "Primero reconoce, despues operas",
            "titleText": "Primero reconoce, despues operas",
            "tagId": "",
            "html": "<p>En un bloque mixto la dificultad no siempre esta en la cuenta. Muchas veces el paso decisivo es detectar si conviene factorizar, usar propiedades logaritmicas, dividir polinomios o estudiar el signo de una derivada.</p>"
          },
          "method": {},
          "solvedExample": {},
          "commonError": {},
          "guidedExercises": [],
          "practice": {
            "label": "Practica autonoma graduada",
            "items": [
              {
                "tagId": "PX-R10.S03-01",
                "prompt": "Resuelve \\(\\ln(x-1)+\\ln(x+1)=\\ln 8\\)."
              },
              {
                "tagId": "PX-R10.S03-02",
                "prompt": "Halla las asintotas de \\[ f(x)=\\frac{x^2+1}{x-1}. \\]"
              },
              {
                "tagId": "PX-R10.S03-03",
                "prompt": "Estudia la monotonia y los extremos de \\[ f(x)=x^3-3x. \\]"
              }
            ],
            "answersHtml": "<ol><li><p>\\(x=3\\)</p></li><li><p>Asintota vertical \\(x=1\\); asintota oblicua \\(y=x+1\\)</p></li><li><p>Crece en \\((-\\infty,-1)\\cup(1,\\infty)\\), decrece en \\((-1,1)\\), maximo local \\((-1,2)\\), minimo local \\((1,-2)\\)</p></li></ol>",
            "solutionsHtml": "<ol><li><p>El dominio exige \\(x-1>0\\) y \\(x+1>0\\), luego \\(x>1\\). Usamos la propiedad</p><div class=\"math-display\">\\[\n  \\ln a+\\ln b=\\ln(ab):\n  \\]</div><div class=\"math-display\">\\[\n  \\ln\\bigl((x-1)(x+1)\\bigr)=\\ln 8.\n  \\]</div><p>Como el logaritmo es inyectivo en su dominio,</p><div class=\"math-display\">\\[\n  x^2-1=8 \\Longrightarrow x^2=9 \\Longrightarrow x=\\pm 3.\n  \\]</div><p>Por la restriccion \\(x>1\\), la unica solucion valida es \\(x=3\\).</p></li><li><p>La asintota vertical aparece donde el denominador se anula y el cociente diverge:</p><div class=\"math-display\">\\[\n  x-1=0 \\Longrightarrow x=1.\n  \\]</div><p>Dividimos polinomios:</p><div class=\"math-display\">\\[\n  \\frac{x^2+1}{x-1}=x+1+\\frac{2}{x-1}.\n  \\]</div><p>Como \\(\\dfrac{2}{x-1}\\to 0\\) cuando \\(x\\to \\pm \\infty\\), la asintota oblicua es</p><div class=\"math-display\">\\[\n  y=x+1.\n  \\]</div></li><li><div class=\"math-display\">\\[\n  f'(x)=3x^2-3=3(x-1)(x+1).\n  \\]</div><p>Los puntos criticos son \\(x=-1\\) y \\(x=1\\). El signo de \\(f'\\) es positivo fuera del intervalo \\([-1,1]\\) y negativo dentro, de modo que:</p><div class=\"math-display\">\\[\n  \\text{crece en }(-\\infty,-1)\\cup(1,\\infty),\\qquad\n  \\text{decrece en }(-1,1).\n  \\]</div><p>Ademas,</p><div class=\"math-display\">\\[\n  f(-1)=2,\\qquad f(1)=-2.\n  \\]</div><p>Luego hay maximo local en \\((-1,2)\\) y minimo local en \\((1,-2)\\).</p></li></ol>"
          },
          "challenge": {}
        },
        {
          "id": "R10.S04",
          "title": "Analisis de errores",
          "rawTitle": "[R10.S04] Analisis de errores",
          "objectives": [],
          "prerequisites": [],
          "theory": {},
          "method": {},
          "solvedExample": {},
          "commonError": {},
          "guidedExercises": [],
          "practice": {
            "label": "Practica autonoma graduada",
            "items": [
              {
                "tagId": "PX-R10.S04-01",
                "prompt": "Un alumno resuelve \\(|2x-1|=5\\) asi: \\[ 2x-1=5 \\Longrightarrow x=3. \\] Explica el error y da la solucion correcta."
              },
              {
                "tagId": "PX-R10.S04-02",
                "prompt": "Una alumna afirma que \\[ \\frac{1}{\\sqrt{3}-1}=\\sqrt{3}-1. \\] Indica por que es falso y racionaliza correctamente."
              },
              {
                "tagId": "PX-R10.S04-03",
                "prompt": "En \\(f(x)=x^2\\), un alumno dice que la normal en \\(x=1\\) tiene pendiente \\(\\dfrac{1}{2}\\) porque la tangente tiene pendiente \\(2\\). Corrige la idea y escribe la recta normal."
              }
            ],
            "answersHtml": "<ol><li><p>Falta el caso \\(2x-1=-5\\); la solucion correcta es \\(x=3\\) o \\(x=-2\\)</p></li><li><p>Hay que multiplicar por el conjugado; el resultado correcto es \\(\\dfrac{\\sqrt{3}+1}{2}\\)</p></li><li><p>La pendiente normal es la opuesta inversa, \\(-\\dfrac{1}{2}\\); la normal es \\(y=-\\dfrac{1}{2}x+\\dfrac{3}{2}\\)</p></li></ol>",
            "solutionsHtml": "<ol><li><p>En una ecuacion con valor absoluto hay dos ramas:</p><div class=\"math-display\">\\[\n  |2x-1|=5 \\Longrightarrow 2x-1=5 \\quad \\text{o}\\quad 2x-1=-5.\n  \\]</div><p>De la primera sale \\(x=3\\); de la segunda,</p><div class=\"math-display\">\\[\n  2x=-4 \\Longrightarrow x=-2.\n  \\]</div></li><li><p>Basta comprobar que</p><div class=\"math-display\">\\[\n  (\\sqrt{3}-1)(\\sqrt{3}-1)=4-2\\sqrt{3}\\neq 1.\n  \\]</div><p>La racionalizacion correcta es</p><div class=\"math-display\">\\[\n  \\frac{1}{\\sqrt{3}-1}\\cdot \\frac{\\sqrt{3}+1}{\\sqrt{3}+1}\n  =\\frac{\\sqrt{3}+1}{3-1}\n  =\\frac{\\sqrt{3}+1}{2}.\n  \\]</div></li><li><p>La normal no tiene pendiente \\(\\dfrac{1}{2}\\), sino la opuesta inversa de la tangente. Como</p><div class=\"math-display\">\\[\n  f'(x)=2x,\\qquad f'(1)=2,\\qquad f(1)=1,\n  \\]</div><p>la pendiente tangente es \\(2\\) y la pendiente normal es</p><div class=\"math-display\">\\[\n  m_n=-\\frac{1}{2}.\n  \\]</div><p>Por el punto \\((1,1)\\):</p><div class=\"math-display\">\\[\n  y-1=-\\frac{1}{2}(x-1)\n  \\Longrightarrow y=-\\frac{1}{2}x+\\frac{3}{2}.\n  \\]</div></li></ol>"
          },
          "challenge": {}
        },
        {
          "id": "R10.S05",
          "title": "Simulacro I",
          "rawTitle": "[R10.S05] Simulacro I",
          "objectives": [],
          "prerequisites": [],
          "theory": {},
          "method": {},
          "solvedExample": {},
          "commonError": {},
          "guidedExercises": [],
          "practice": {
            "label": "Practica autonoma graduada",
            "items": [
              {
                "tagId": "SM-R10.S05-01",
                "prompt": "[2 puntos] Halla el dominio de \\[ f(x)=\\sqrt{\\frac{x+1}{x-2}}. \\]"
              },
              {
                "tagId": "SM-R10.S05-02",
                "prompt": "[2 puntos] Resuelve \\(\\sen x=\\dfrac{\\sqrt{3}}{2}\\) en \\([0,2\\pi)\\)."
              },
              {
                "tagId": "SM-R10.S05-03",
                "prompt": "[3 puntos] Estudia la continuidad en \\(x=2\\) de \\[ f(x)= \\begin{cases} x+1, & x<2,\\\\ ax-1, & x\\geq 2. \\end{cases} \\] Halla el valor de \\(a\\) para que sea continua."
              },
              {
                "tagId": "SM-R10.S05-04",
                "prompt": "[3 puntos] Halla la recta tangente a \\(f(x)=x^2+1\\) que sea paralela a \\(y=4x-3\\)."
              }
            ],
            "answersHtml": "<ol><li><p>\\((-\\infty,-1]\\cup(2,\\infty)\\)</p></li><li><p>\\(x=\\dfrac{\\pi}{3}\\) o \\(x=\\dfrac{2\\pi}{3}\\)</p></li><li><p>\\(a=2\\)</p></li><li><p>\\(y=4x-3\\)</p></li></ol>",
            "solutionsHtml": "<ol><li><p>Debe cumplirse</p><div class=\"math-display\">\\[\n  \\frac{x+1}{x-2}\\geq 0,\\qquad x\\neq 2.\n  \\]</div><p>Los puntos criticos son \\(-1\\) y \\(2\\). El estudio de signo da</p><div class=\"math-display\">\\[\n  D_f=(-\\infty,-1]\\cup(2,\\infty).\n  \\]</div><p><strong>Baremo orientativo:</strong> 1 punto por plantear la condicion y 1 punto por el intervalo final correcto.</p></li><li><div class=\"math-display\">\\[\n  \\sen x=\\frac{\\sqrt{3}}{2}\n  \\]</div><p>ocurre en el primer y segundo cuadrante:</p><div class=\"math-display\">\\[\n  x=\\frac{\\pi}{3},\\qquad x=\\frac{2\\pi}{3}.\n  \\]</div><p><strong>Baremo orientativo:</strong> 1 punto por localizar el angulo notable y 1 punto por cuadrantes.</p></li><li><p>La continuidad en \\(x=2\\) exige igualdad entre limite lateral izquierdo y valor por la rama derecha:</p><div class=\"math-display\">\\[\n  \\lim_{x\\to 2^-}(x+1)=3,\n  \\qquad\n  f(2)=2a-1.\n  \\]</div><p>Por tanto,</p><div class=\"math-display\">\\[\n  3=2a-1 \\Longrightarrow a=2.\n  \\]</div><p><strong>Baremo orientativo:</strong> 1 punto por plantear la condicion, 1 punto por sustituir bien y 1 punto por despejar \\(a\\).</p></li><li><p>Si la tangente es paralela a \\(y=4x-3\\), debe tener pendiente \\(4\\). Como</p><div class=\"math-display\">\\[\n  f'(x)=2x,\n  \\]</div><p>imponemos</p><div class=\"math-display\">\\[\n  2x=4 \\Longrightarrow x=2.\n  \\]</div><p>El punto de tangencia es</p><div class=\"math-display\">\\[\n  (2,f(2))=(2,5).\n  \\]</div><p>La tangente pedida es</p><div class=\"math-display\">\\[\n  y-5=4(x-2),\n  \\]</div><p>es decir,</p><div class=\"math-display\">\\[\n  y=4x-3.\n  \\]</div><p><strong>Baremo orientativo:</strong> 1 punto por imponer la pendiente, 1 punto por el punto de tangencia y 1 punto por la recta final.</p></li></ol>"
          },
          "challenge": {}
        },
        {
          "id": "R10.S06",
          "title": "Simulacro II",
          "rawTitle": "[R10.S06] Simulacro II",
          "objectives": [],
          "prerequisites": [],
          "theory": {},
          "method": {},
          "solvedExample": {},
          "commonError": {},
          "guidedExercises": [],
          "practice": {
            "label": "Practica autonoma graduada",
            "items": [
              {
                "tagId": "SM-R10.S06-01",
                "prompt": "[2 puntos] Resuelve \\[ \\frac{1}{x-1}+\\frac{1}{x+1}=1. \\]"
              },
              {
                "tagId": "SM-R10.S06-02",
                "prompt": "[2 puntos] Calcula la distancia del punto \\((1,-1)\\) a la recta \\(x+2y-5=0\\)."
              },
              {
                "tagId": "SM-R10.S06-03",
                "prompt": "[3 puntos] Halla la asintota oblicua de \\[ f(x)=\\frac{x^2-2x+3}{x-1}. \\]"
              },
              {
                "tagId": "SM-R10.S06-04",
                "prompt": "[3 puntos] Halla el minimo de \\(f(x)=x+\\dfrac{4}{x}\\) para \\(x>0\\)."
              }
            ],
            "answersHtml": "<ol><li><p>\\(x=1+\\sqrt{2}\\) o \\(x=1-\\sqrt{2}\\)</p></li><li><p>\\(\\dfrac{6}{\\sqrt{5}}=\\dfrac{6\\sqrt{5}}{5}\\)</p></li><li><p>\\(y=x-1\\)</p></li><li><p>Minimo \\(4\\), alcanzado en \\(x=2\\)</p></li></ol>",
            "solutionsHtml": "<ol><li><p>El dominio exige \\(x\\neq 1\\) y \\(x\\neq -1\\). Sumamos fracciones:</p><div class=\"math-display\">\\[\n  \\frac{(x+1)+(x-1)}{x^2-1}=1\n  \\Longrightarrow \\frac{2x}{x^2-1}=1.\n  \\]</div><p>Multiplicando,</p><div class=\"math-display\">\\[\n  2x=x^2-1 \\Longrightarrow x^2-2x-1=0.\n  \\]</div><p>Entonces</p><div class=\"math-display\">\\[\n  x=\\frac{2\\pm \\sqrt{4+4}}{2}=1\\pm \\sqrt{2}.\n  \\]</div><p>Ambas soluciones respetan el dominio.</p></li><li><p>La formula de distancia es</p><div class=\"math-display\">\\[\n  d=\\frac{|Ax_0+By_0+C|}{\\sqrt{A^2+B^2}}.\n  \\]</div><p>Aqui \\(A=1\\), \\(B=2\\), \\(C=-5\\) y \\((x_0,y_0)=(1,-1)\\). Luego</p><div class=\"math-display\">\\[\n  d=\\frac{|1+2(-1)-5|}{\\sqrt{1^2+2^2}}=\\frac{6}{\\sqrt{5}}=\\frac{6\\sqrt{5}}{5}.\n  \\]</div></li><li><p>Dividimos polinomios:</p><div class=\"math-display\">\\[\n  \\frac{x^2-2x+3}{x-1}=x-1+\\frac{2}{x-1}.\n  \\]</div><p>Como el resto partido por \\(x-1\\) tiende a \\(0\\) en el infinito, la asintota oblicua es</p><div class=\"math-display\">\\[\n  y=x-1.\n  \\]</div></li><li><div class=\"math-display\">\\[\n  f'(x)=1-\\frac{4}{x^2}.\n  \\]</div><p>El punto critico en \\(x>0\\) cumple</p><div class=\"math-display\">\\[\n  1-\\frac{4}{x^2}=0 \\Longrightarrow x^2=4 \\Longrightarrow x=2.\n  \\]</div><p>Ademas \\(f'\\) pasa de negativo a positivo, asi que hay minimo en \\(x=2\\). El valor minimo es</p><div class=\"math-display\">\\[\n  f(2)=2+\\frac{4}{2}=4.\n  \\]</div></li></ol>"
          },
          "challenge": {}
        },
        {
          "id": "R10.S07",
          "title": "Reto final",
          "rawTitle": "[R10.S07] Reto final",
          "objectives": [],
          "prerequisites": [],
          "theory": {},
          "method": {},
          "solvedExample": {},
          "commonError": {},
          "guidedExercises": [],
          "practice": {
            "label": "",
            "items": [],
            "answersHtml": "",
            "solutionsHtml": ""
          },
          "challenge": {
            "title": "[CH-R10-01] Estudio de sintesis",
            "titleText": "Estudio de sintesis",
            "tagId": "CH-R10-01",
            "html": "<p>Estudia la funcion</p><div class=\"math-display\">\\[\nf(x)=x+\\frac{4}{x},\\qquad x\\neq 0.\n\\]</div><ol><li><p>Halla su dominio y sus asintotas.</p></li><li><p>Estudia su monotonia y localiza sus extremos.</p></li><li><p>Escribe la recta tangente en \\(x=2\\).</p></li></ol>",
            "answerHtml": "<p>Dominio \\(\\R\\setminus\\{0\\}\\), asintotas \\(x=0\\) e \\(y=x\\), crecimiento en \\((-\\infty,-2)\\cup(2,\\infty)\\), decrecimiento en \\((-2,0)\\cup(0,2)\\), maximo local \\((-2,-4)\\), minimo local \\((2,4)\\), tangente en \\(x=2\\): \\(y=4\\).</p>",
            "solutionHtml": "<p>El dominio es</p><div class=\"math-display\">\\[\nD_f=\\R\\setminus\\{0\\}.\n\\]</div><p>La funcion presenta asintota vertical en \\(x=0\\) porque el termino \\(\\dfrac{4}{x}\\) diverge al aproximarse al origen. Ademas,</p><div class=\"math-display\">\\[\nf(x)-x=\\frac{4}{x}\\longrightarrow 0 \\quad \\text{cuando } x\\to \\pm \\infty,\n\\]</div><p>asi que la asintota oblicua es</p><div class=\"math-display\">\\[\ny=x.\n\\]</div><p>Para la monotonia derivamos:</p><div class=\"math-display\">\\[\nf'(x)=1-\\frac{4}{x^2}=\\frac{x^2-4}{x^2}.\n\\]</div><p>Como \\(x^2>0\\) para \\(x\\neq 0\\), el signo depende de \\(x^2-4=(x-2)(x+2)\\). Por tanto,</p><div class=\"math-display\">\\[\nf'(x)>0 \\text{ en }(-\\infty,-2)\\cup(2,\\infty),\n\\]</div><div class=\"math-display\">\\[\nf'(x)<0 \\text{ en }(-2,0)\\cup(0,2).\n\\]</div><p>Se obtiene un maximo local en \\(x=-2\\) y un minimo local en \\(x=2\\). Sus valores son</p><div class=\"math-display\">\\[\nf(-2)=-2+\\frac{4}{-2}=-4,\\qquad f(2)=2+\\frac{4}{2}=4.\n\\]</div><p>La tangente en \\(x=2\\) tiene pendiente</p><div class=\"math-display\">\\[\nf'(2)=1-\\frac{4}{4}=0,\n\\]</div><p>de modo que es horizontal y pasa por \\((2,4)\\). Su ecuacion es</p><div class=\"math-display\">\\[\ny=4.\n\\]</div>"
          }
        }
      ]
    }
  ]
};
