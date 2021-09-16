const buttonA = document.getElementById("buttonA");
const buttonP = document.getElementById("buttonP");

/*
============================
  * Formulas
============================
*/

// Formula Cudrado

const areaCuadrado = (l) => l * l;
const perimetroCuadrado = (l) => l * 4;

// Formula Rectangulo

const areaRectangulo = (b, a) => b * a;
const perimetroRectangulo = (l1, l2) => {
  return l1 + l1 + (l2 + l2);
};

// Formula Triangulo

const perimetroTriangulo = (l) => l * 3;
const areaTriangulo = (triangulo_a, triangulo_b) => {
  return (triangulo_b * triangulo_a) / 2;
};

// Formula Circulo

const areaCirculo = (r) => {
  return Math.PI * Math.pow(r, 2);
};
const perimetroCirculo = (r) => {
  return 2 * Math.PI * r;
};
/*
============================
  * Add Event Listeners
============================
*/

buttonA.addEventListener("click", () => {
  const figura = prompt("Escribe la figura qu deseas");
  if (figura == "circulo") {
    let r = Number(prompt("¿Cual es el radio de tu circulo?"));
    console.groupCollapsed(
      "%cCirculo",
      "color:#b8fffe; font-family:Arial; padding:10px; font-size:14px;"
    );
    console.log(
      `%cEl area del circulo es de ${areaCirculo(r)}`,
      "color: hotpink; padding:7px; font-family:Arial; font-size:12px;"
    );
    console.groupEnd();
  } else if (figura == "cuadrado") {
    let l = Number(prompt("Cual es el lado de tu cuadrado"));
    console.groupCollapsed(
      "%cCuadrado",
      "color:#b8fffe; font-family:Arial; padding:10px; font-size:14px;"
    );
    console.log(
      `%cEl area del cuadrado es de ${areaCuadrado(l)}`,
      "color: hotpink; padding:7px; font-family:Arial; font-size:12px;"
    );
    console.groupEnd();
  } else if (figura == "triangulo") {
    let a = Number(prompt("¿Cual es la altura de tu triangulo?"));
    let b = Number(prompt("¿Cual es la base de tu triangulo?"));
    console.groupCollapsed(
      "%cTriangulo",
      "color:#ffe06e; font-family:Arial; padding:10px; font-size:14px;"
    );
    console.log(
      `%cEl área de tu triangulo es de ${areaTriangulo(a, b)}`,
      "color: hotpink; font-family:Arial; padding:7px; font-size:12px;"
    );
  } else if (figura == "rectangulo") {
    let b = prompt("Cual es la base de rectangulo")
    let a = prompt("Cual es la altura de rectangulo") 
    console.groupCollapsed(
      "%cRectangulo",
      "color:#3b65ff; font-family:Arial; padding:10px; font-size:14px;"
    );
    console.log(
      `%cEl área de tu rectangulo es de ${areaRectangulo(b, a)}`,
      "color: hotpink; padding:7px; font-family:Arial; font-size:12px;"
    );
  }
});
buttonP.addEventListener("click", () => {
  const figura = prompt("Dime la figura que deseas");
  if (figura == "circulo") {
    console.groupCollapsed(
      "%cCirculo",
      "color:#3b65ff; font-family:Arial; padding:10px; font-size:14px;"
    );
    console.log(
      `%cEl área de tu circulo es de ${perimetroCirculo(3)}`,
      "color: hotpink; padding:7px; font-family:Arial; font-size:12px;"
    );
  } else if (figura == "cuadrado") {
    console.groupCollapsed(
      "%cCuadrado",
      "color:#b8fffe; font-family:Arial; padding:10px; font-size:14px;"
    );
    console.log(
      `%cEl Perimetro de tu cuadrado  es de ${perimetroCuadrado(3)}`,
      "color: #c6bdff; padding:7px; font-family:Arial; font-size:12px;"
    );
    console.groupEnd();
  } else if (figura == "triangulo") {
    let l = prompt("Cual es el lado de tu triangulo")
    console.groupCollapsed(
      "%cTriangulo",
      "color:#b8fffe; font-family:Arial; padding:10px; font-size:14px;"
    );
    console.log(
      `%cEl Perimetro de tu triangulo  es de ${perimetroTriangulo(l)}`,
      "color: #c6bdff; padding:7px; font-family:Arial; font-size:12px;"
    );
  } else if (figura == "rectangulo") {
    let l1 = prompt("Cual es lado 1 de tu rectangulo")
    let l2 = prompt("Cual es lado 2 de tu rectangulo")
    console.groupCollapsed(
      "%cRectangulo",
      "color:#3b65ff; font-family:Arial; padding:10px; font-size:14px;"
    );
    console.log(
      `%cEl área de tu rectangulo es de ${perimetroRectangulo(l1, l2)}`,
      "color: hotpink; padding:7px; font-family:Arial; font-size:12px;"
    );
  }
});
