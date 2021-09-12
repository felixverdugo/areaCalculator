const selectFigure = document.getElementById("selectFigure");
const inputLado = document.getElementById("inputLado");
const buttonA = document.getElementById("buttonA");
const buttonP = document.getElementById("buttonP");

//  Formula Cuadrado
console.groupCollapsed(
  "%cCuadrado",
  "color:#b8fffe; font-family:Arial; padding:10px; font-size:14px;"
);
const areaCuadrado = (l) => l * l;
const perimetroCuadrado = (l) => l * 4;
console.log(
  `%cEl area del cuadrado es de ${areaCuadrado(3)}`,
  "color: hotpink; padding:7px; font-family:Arial; font-size:12px;"
);
console.log(
  `%cEl Perimetro de tu cuadrado  es de ${perimetroCuadrado(3)}`,
  "color: #c6bdff; padding:7px; font-family:Arial; font-size:12px;"
);

console.groupEnd();

// Formula Triangulo

const areaTriangulo = (triangulo_a, triangulo_b) =>
  (triangulo_b * triangulo_a) / 2;

const perimetroTriangulo = (l) => l * 3;
console.groupCollapsed(
  "%cTriangulo",
  "color:#ffe06e; font-family:Arial; padding:10px; font-size:14px;"
);
console.log(
  `%cEl área de tu triangulo es de ${areaTriangulo(12, 3)}`,
  "color: hotpink; font-family:Arial; padding:7px; font-size:12px;"
);
console.log(
  `%cEl área de tu triangulo es de ${areaTriangulo(12, 3)}`,
  "color: #c6bdff; font-family:Arial; padding:7px; font-size:12px;"
);

console.groupEnd();

// Formula Rectangulo
const areaRectangulo = (b, a) => b * a;
const perimetroRectangulo = (l1, l2) => {
  return l1 + l1 + (l2 + l2);
};
console.groupCollapsed(
  "%cRectangulo",
  "color:#3b65ff; font-family:Arial; padding:10px; font-size:14px;"
);
console.log(
  `%cEl área de tu rectangulo es de ${areaRectangulo(20, 10)}`,
  "color: hotpink; padding:7px; font-family:Arial; font-size:12px;"
);
console.log(
  `%cEl perimetro de tu rectangulo es de ${perimetroRectangulo(20, 10)}`,
  "color: #c6bdff; padding:7px; font-family:Arial; font-size:12px;"
);
console.groupEnd();

// Formula Círculo

const areaCirculo = (r) => {

  let result = Math.PI * Math.pow(r, 2);
  return result.toFixed(2)
};
const perimetroCirculo = (d) => {
  return Math.PI * d;
};

console.groupCollapsed(
  "%cCirculo",
  "color:#3b65ff; font-family:Arial; padding:10px; font-size:14px;"
);
console.log(
  `%cEl área de tu circulo es de ${areaCirculo(20)}`,
  "color: hotpink; padding:7px; font-family:Arial; font-size:12px;"
);
console.log(
  `%cEl perimetro de tu rectangulo es de ${perimetroRectangulo(20, 10)}`,
  "color: #c6bdff; padding:7px; font-family:Arial; font-size:12px;"
);
console.groupEnd();
