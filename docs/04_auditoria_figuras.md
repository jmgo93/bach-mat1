# Auditoria de figuras y visualizacion

Fecha: 2026-07-15

## Criterio

Las figuras del libro solo se mantienen cuando aportan una lectura matematica real: orientan una
resolucion, verifican un rasgo analitico o fijan una configuracion geometrica que seria mas
costosa de describir solo con texto.

## Inventario activo por bloque

- `C01`: recta numerica para intervalos y valor absoluto.
- `C05`: figuras trigonometricas de triangulos y configuraciones angulares.
- `C06`: esquema vectorial y paralelogramo.
- `C07`: figura geometrica de apoyo para rectas y triangulos.
- `C08`: grafica funcional para lectura de rasgos y comportamiento limite.
- `C09`: graficas de tangencia y estudio de funciones, mas un esquema de optimizacion.
- `C10`: tabla de contingencia y arbol de probabilidad para el ejemplo de Bayes.
- Repaso acumulativo: grafica final de \(f(x)=x+\frac{4}{x}\) con asintotas y extremos.

## Resultado de la revision

- Los capitulos incluidos en `tex/main_student.tex` contienen `13` marcadores activos de figura
  (`tikzpicture` o `axis`).
- Los logs de compilacion quedan limpios de avisos `Overfull` y `Underfull`, por lo que no se
  detectan figuras que invadan margenes o rompan cajas.
- La figura nueva del reto final no es decorativa: resume dominio, asintotas y extremos del
  estudio analitico asociado.
- El arbol de Bayes se incorpora como recurso original y se mantiene separado de la trazabilidad
  del corpus fuente, que sigue sin contener una relacion de probabilidad.

## Conclusiones

- El conjunto visual activo es suficiente para el libro matematico actualmente ensamblado.
- La necesidad de nuevas figuras solo reaparecera si se incorpora corpus adicional o si se desea
  una capa editorial mas rica para simulacros y anexos.
