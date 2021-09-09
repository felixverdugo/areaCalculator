const selectFigure = document.getElementById("selectFigure");
const inputLado = document.getElementById("inputLado");
const buttonA = document.getElementById("buttonA");
const buttonP = document.getElementById("buttonP");

//  Formula Cuadrado
console.group(
  "%cCuadrado",
  "color:#b8fffe; font-family:Arial; padding:10px; font-size:14px;"
);
const cuadrado_l1 = 1;
const cuadrado_l2 = 1;
console.log(
  `%cEl resultado de  ${cuadrado_l1} x ${cuadrado_l1} = ${
    cuadrado_l1 + cuadrado_l2
  }`,
  "color: hotpink; padding:7px; font-family:Arial; font-size:12px;"
);
console.log(
  `%cLado 1 de tu cuadrado es de ${cuadrado_l1}`,
  "color: purple; font-family: Arial; padding:5px;"
);
console.log(
  `%cLado 2 de tu cuadrado es de ${cuadrado_l2}`,
  "color: purple; font-family: Arial; padding:5px;"
);
console.groupEnd();

// Formula Triangulo

const triangulo_b = 20;
const triangulo_a = 10;

console.group(
  "%cTriangulo",
  "color:#ffe06e; font-family:Arial; padding:10px; font-size:14px;"
);
console.log(
  `%cEl resultado de  ${triangulo_a} x ${triangulo_b} / 2 = ${
    (triangulo_a * triangulo_b) / 2
  }`,
  "color: hotpink; font-family:Arial; padding:7px; font-size:12px;"
);
console.log(
  `%cLado 1 de tu cuadrado es de ${cuadrado_l1}`,
  "font-family: Arial; color: pink; padding:5px;"
);
console.log(
  `%cLado 2 de tu cuadrado es de ${cuadrado_l2}`,
  "font-family: Arial; color: pink; padding:5px;"
);
console.groupEnd();

// Formula Rectangulo
const rectangulo_b = 10;
const rectangulo_a = 5;

console.group(
  "%cRectangulo",
  "color:#3b65ff; font-family:Arial; padding:10px; font-size:14px;"
);
console.log(
  `%cEl resultado de  ${rectangulo_a} x ${rectangulo_b} = ${
    rectangulo_b * rectangulo_a
  }`,
  "color: hotpink; padding:7px; font-family:Arial; font-size:12px;"
);
console.log(
  `%cLado 1 de tu cuadrado es de ${rectangulo_a}`,
  "font-family: Arial; color: orange; padding:5px;"
);
console.log(
  `%cLado 2 de tu cuadrado es de ${rectangulo_b}`,
  "font-family: Arial; color: orange; padding:5px;"
);
console.groupEnd();
