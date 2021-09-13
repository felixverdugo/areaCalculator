// Botones
const buttonA = document.getElementById("buttonA");
const buttonP = document.getElementById("buttonP");

const number = {
  num: 1,
  addNum:  + 1
}

console.log(number);
/*
=======================
  Formula de Figuras
=======================
*/

const figure = [
  {
    figura: "circulo",
    formulaA: (r) => {
      let result = Math.PI * Math.pow(r, 2);
      return result.toFixed(2);
    },
    formulaP: (d) => {
      return Math.PI * d;
    },
    result : () => {
      // Impresion del resultado
      console.groupCollapsed(
        "%cCirculo",
        "color:#fc0377; font-family:Arial; padding:10px; font-size:14px;"
      );
      console.log(
        `%cEl área de tu circulo es de ${this.formulaA(20)}`,
        "color: hotpink; padding:7px; font-family:Arial; font-size:12px;"
      );
      console.log(
        `%cEl perimetro de tu circulo es de ${perimetroCirculo(20)}`,
        "color: #c6bdff; padding:7px; font-family:Arial; font-size:12px;"
      );
      console.groupEnd();
    }
  },
  {
    figura: "cuadrado",
    formulaA: (l) => l * l,
    formulaP: (l) => l * 4,
    result:() => {
      // Impresion del resultado
      let lado = Number(prompt("Dime el lado de tu cuadrado."));
      console.groupCollapsed(
        "%cCuadrado",
        "color:#b8fffe; font-family:Arial; padding:10px; font-size:14px;"
      );
      console.log(
        `%cEl area del cuadrado es de ${areaCuadrado(lado)}`,
        "color: hotpink; padding:7px; font-family:Arial; font-size:12px;"
      );
      console.log(
        `%cEl Perimetro de tu cuadrado  es de ${perimetroCuadrado(lado)}`,
        "color: #c6bdff; padding:7px; font-family:Arial; font-size:12px;"
      );
    
      console.groupEnd();
    }
  },
  {
    figura: "rectangulo",
    formulaA: (b, a) => b * a,
    formulaP: (l1, l2) => l1 + l1 + (l2 + l2),
    result :  () => {
      // Impresion del resultado
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
    }
  },
  {
    figura: "triangulo",
    formulaA: (triangulo_a, triangulo_b) => (triangulo_b * triangulo_a) / 2,
    formulaP: (l) => l * 3,
    result : () => {
      // Impresion del resultado
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
    }
  },
];

/* 
===================================
  * AddEventlistener a los botones
===================================
*/
buttonA.addEventListener("click", () => {
  let userFigure = prompt(
    `¿Qué figuras deseas?\nTus Opciones son:\nCirculo\nCuadrado\nRectangulo\nTriagulo`
  );
  for (const i of figure) {
    console.log(i);
    if (userFigure == i) {
      break;
    } else {
      console.log(
        "Lo siento no temos la formula de tu figura, estamos trabajando para agregar mas figuras :)"
      );
      break;
    }
  }
});
