/*
==================
  * Variables *
==================
*/
// alert("Los Resultados de los ejercicios estan en consola")

let nombre = "Felix";
let apellido = "Verdugo";
const platzi_user = "felix2020"; // const supuniendo que no se puede cambiar el nombre de usuario
let edad = 13;
const email = "nomehakenprofa@gmail.com";
let ahorros = 20000;

let deudas = [
  {
    deuda: "Iphone 12 Pro",
    tipoDeMoneda: "Dolares",
    monto: 2000,
  },
  {
    deuda: "Tv Samsung",
    tipoDeMoneda: "Pesos Mexicanos",
    monto: 6000,
  },
  {
    deuda: "Suscripcion Expert+ en Platzi",
    tipoDeMoneda: "Peso Mexicano",
    monto: 6690,
  },
];

console.log(nombre + " " + apellido);
let sumaDeudas = deudas.reduce((acc, el) => {
  return acc + el.monto;
}, 0);

console.log(
  `Tus ahorros son de ${ahorros}, quitando deudas seran ${ahorros - sumaDeudas}`
);

/*
==================
  * Funciones *
==================
*/
const saludar = (nombre, apellido, apodo) => {
  const name = nombre;
  const lastname = apellido;
  const nickname = apodo;

  return console.log(
    `Mi nombre es ${name} ${lastname}, pero prefiero que me digas ${nickname}`
  );
};

saludar("Juan", "Castro Gallego", "juandc");

/*
=====================
  * Condicionales *
=====================
*/
// Switch
let tipoDeSuscripcion = "Basic";

switch (tipoDeSuscripcion) {
  case "Free":
    console.log("Solo puedes tomar los cursos gratis");
    break;
  case "Basic":
    console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
    break;
  case "Expert":
    console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
    break;
  case "ExpertPlus":
    console.log(
      "Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año"
    );
    break;
}
// If Else

if (tipoDeSuscripcion == "Free") {
  console.log("Solo puedes tomar los cursos gratis");
} else if (tipoDeSuscripcion == "Basic") {
  console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
} else if (tipoDeSuscripcion == "Expert") {
  console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
} else if (tipoDeSuscripcion == "ExpertPlus") {
  console.log(
    "Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año"
  );
} else {
  console.log("Registrate para tener acceso a platzi. Es Gratis 😉!!!!!");
}

// Un Solo If

const Suscripcion = [
  {
    tipo: "Basic",
    ventajas: "Puedes tomar CASI TODOS los cursos durante 1 mes",
  },
  {
    tipo: "Expert",
    ventajas: "Puedes tomar TODOS los cursos",
  },
  {
    tipo: "Expert+",
    ventajas: "Puedes tomar TODOS los cursos tu y un compañero que escojas",
  },
  {
    tipo: "Gratis",
    ventajas: "Puedes tomar SOLO los cursos gratis",
  },
  {
    tipo: "Sin Registrar",
    ventajas:
      "No puedes tomar los cursos :( . Resgitrate para para comenzar a aprender, ES GRATIS !!!!!",
  },
];

const tiposDeSuscripcion = Suscripcion.forEach((tiposuscrip) => {
  if (tiposuscrip.plan == tipoDeSuscripcion) {
    console.log(tiposuscrip.ventajas);
    return 0;
  }
});
console.log(tipoDeSuscripcion);

/*
==================
  * Ciclos *
==================
*/

// Bucle For

for (let i = 0; i < 5; i++) {
  console.log("El valor de i es: " + i);
}
for (let i = 10; i >= 2; i--) {
  console.log("El valor de i es: " + i);
}

// Bucle While

let i = 0;
while (i < 5) {
  console.log("El valor de i es: " + i);
  i++;
}
let a = 10;
while (a >= 2) {
  console.log("El valor de a es: " + a);
  a--;
}

// 3. Escribe un código en JavaScript que le pregunte a los usuarios cuánto es 2 + 2. Si responden bien, mostramos un mensaje de felicitaciones, pero si responden mal, volvemos a empezar.

// let pregunta = parseInt(prompt("Cuanto es 2 + 2"))
// console.log(pregunta);

// while (pregunta != "" || pregunta != " " || pregunta == undefined) {
//   if (pregunta == 4) {
//     alert("Felicidades respondiste bien")
//     break;
//   } else {
//     alert("Lo siento respondiste mal")
//     pregunta = parseInt(prompt("Cuanto es 2 + 2"))
//   }
// }

/*
===========================
  * Listas En Javascript *
===========================
*/

// Arrays
const firstElemntPrinter = (array) => {
  console.log(array[0]);
};
firstElemntPrinter([3, 1, 2]);

const ElementPrinter = (array) => {
  for (const i of array) {
    console.log(i);
  }
};
ElementPrinter([3, 1, 2]);

// Objetos
const objPrintter = (obj) => {
  for (const i in obj) {
    console.log(i);
  }
};

objPrintter({
  elemento: "Contenido Guapento 1",
  elemento2: "Contenido Guapento 2",
  element3: "Contenido Guapento 3",
});
