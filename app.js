const selectFigure = document.getElementById("selectFigure");
const inputLado = document.getElementById("inputLado");
const buttonA = document.getElementById("buttonA");
const buttonP = document.getElementById("buttonP");

//  Formula Cuadrado
console.groupCollapsed(
  "%cCuadrado",
  "color:#b8fffe; font-family:Arial; padding:10px; font-size:14px;"
);
const cuadrado_l = 1;
console.log(
  `%cEl area del cuadrado es de ${cuadrado_l * cuadrado_l}`,
  "color: hotpink; padding:7px; font-family:Arial; font-size:12px;"
);
console.log(
  `%cEl Perimetro de tu cuadrado  es de ${cuadrado_l * 4}`,
  "color: hotpink; padding:7px; font-family:Arial; font-size:12px;"
);
console.log(
  `%cLado de tu cuadrado es de ${cuadrado_l}`,
  "color: purple; font-family: Arial; padding:5px;"
);
console.groupEnd();

// Formula Triangulo

const triangulo_b = 20;
const triangulo_a = 10;

console.groupCollapsed(
  "%cTriangulo",
  "color:#ffe06e; font-family:Arial; padding:10px; font-size:14px;"
);
console.log(
  `%cEl área de tu triangulo es de ${(triangulo_a * triangulo_b) / 2}`,
  "color: hotpink; font-family:Arial; padding:7px; font-size:12px;"
);
console.log(
  `%cLa base de tu triangulo es de ${triangulo_b}`,
  "font-family: Arial; color: pink; padding:5px;"
);
console.log(
  `%cLa altura de tu triangulo es de ${triangulo_a}`,
  "font-family: Arial; color: pink; padding:5px;"
);

console.groupEnd();

// Formula Rectangulo
const rectangulo_b = 10;
const rectangulo_a = 5;

console.groupCollapsed(
  "%cRectangulo",
  "color:#3b65ff; font-family:Arial; padding:10px; font-size:14px;"
);
console.log(
  `%cEl área de tu rectangulo es de ${rectangulo_b * rectangulo_a}`,
  "color: hotpink; padding:7px; font-family:Arial; font-size:12px;"
);
console.log(
  `%cLa base de tu rectangulo es de ${rectangulo_b}`,
  "font-family: Arial; color: orange; padding:5px;"
);
console.log(
  `%cLa altura de tu rectangulo es de ${rectangulo_a}`,
  "font-family: Arial; color: orange; padding:5px;"
);
console.groupEnd();
