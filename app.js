const selectFigure = document.getElementById("selectFigure");
const inputLado = document.getElementById("inputLado");
const buttonA = document.getElementById("buttonA");
const buttonP = document.getElementById("buttonP");

buttonA.addEventListener("click", () => {
  for (const i of figuras) {
    if (i.figura == selectFigure.value && inputLado.value != 0) {
      console.log(i.operacion(inputLado.value) + " " + selectFigure.value);
      break;
    } else {
      alert("Nos has seleccionado figura O Numero");
      break;
    }
  }
});

// const areaCuadrado = (ladoMedida) => {
//   let result = ladoMedida * ladoMedida;
//   return console.log(result)
// };
// const areaCirculo = (r) => {
//   let result = Math.PI * (Math.pow(r, 2));
//   return console.log(result)
// };
