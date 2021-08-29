# Prueba de Javascript - Respuesta de la prueba Javascirpt del [curso practico de javascript](https://platzi.com/clases/2327-javascript-practico/38655-prueba-de-javascript/)
## Variable Y Operaciones
1. Responde las siguientes preguntas en la sección de comentarios:
   * ¿Qué es una variable y para qué sirve?
     * **Es un espacio en memoria que sirve para almacenar datos**
   * ¿Cuál es la diferencia entre declarar e inicializar una variable?
     * **Que al declara un variable estas haciendo tomando un espacio en memoria, y al inicializar un variable les tamos asignando un contenido a ese espacio en memoria**
   * ¿Cuál es la diferencia entre sumar números y concatenar strings?
     * **Al sumar *2 numeros o más* estamos obteniendo eso, el resultado de una suma.  Al sumar *2 strings o más* estamos concatenado ese string**
   * ¿Cuál operador me permite sumar o concatenar?
     * **El signo de +**
1. Determina el nombre y tipo de dato para almacenar en variables la siguiente información:
   * Nombre
     * String
   * Apellido
     * String
   * Nombre de usuario en Platzi
     * String
   * Edad
     * Int
   * Correo electrónico
     * string
   * Mayor de edad
     * Booleano
   * Dinero ahorrado
     * Int
   * Deudas
     * Object.

3️. Traduce a código JavaScript las variables del ejemplo anterior y deja tu código en los comentarios.
~~~
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
~~~

4️. Calcula e imprime las siguientes variables a partir de las variables del ejemplo anterior:

* Nombre completo (nombre y apellido)
* Dinero real (dinero ahorrado menos deudas)
~~~
console.log(nombre + " " + apellido);

let sumaDeudas = deudas.reduce((acc, el) => {
  return acc + el.monto;
}, 0);

console.log(`Tus ahorros son de ${ahorros}, quitando deudas seran ${ahorros - sumaDeudas}`);
~~~
## Funciones
1️. Responde las siguientes preguntas en la sección de comentarios:

* ¿Qué es una función?
  * Es una pieza de código que ejecuta intrucciones, esta puede retornar todo tipo de datos
* ¿Cuándo me sirve usar una función en mi código?
  * Para no repetir la misma pieza código muchas veces
* ¿Cuál es la diferencia entre parámetros y argumentos de una función?
2. Convierte el siguiente código en una función
~~~
    const saludar = ()=> {
        const name = "Juan David";
        const lastname = "Castro Gallego";
        const completeName = name + lastname;
        const nickname = "juandc";

        console.log("Mi nombre es " + completeName + ", pero prefiero que me digas " + nickname + ".");
    }
~~~
## Condicionales
1️. Responde las siguientes preguntas en la sección de comentarios:

* ¿Qué es una condicional?
  * Es una sentencia de código que evalua un condicion, si el valor es ***true*** ejecuta algo, si es ***false*** ejecuta otra cosa
* ¿Qué tipos de condicionales existen en JavaScript y cuáles son sus diferencias?
  * Existen
    * If, else
    * switch
    * operador ternario codicional
* ¿Puedo combinar funciones y condicionales?
  * Sí

2️. Replica el comportamiento del siguiente código que usa la sentencia switch utilizando if, else y else if:
### Codigo con **switch**
~~~
const tipoDeSuscripcion = "Basic";

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
       console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
       break;
}
~~~
### Codigo Con **If y Else**
~~~
const tipoDeSuscripcion = "Basic";

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
~~~

3️. Replica el comportamiento de tu condicional anterior con if, else y else if, pero ahora solo con if (sin else ni else if).
~~~
const tiposDeSuscripcion = Suscripcion.forEach((tiposuscrip) => {
  if (tiposuscrip.plan == tipoDeSuscripcion) {
    console.log(tiposuscrip.ventajas);
    return 0;
  }
});
console.log(tipoDeSuscripcion);
~~~

* Bonus: si ya eres una experta o experto en el lenguaje, te desafío a comentar cómo replicar este comportamiento con arrays y un solo condicional. 😏\*
## Ciclos
1️. Responde las siguientes preguntas en la sección de comentarios:

  * ¿Qué es un ciclo?
      * Es una pieza código que se ejecuta cada vez que la condicion se verdadera
  * ¿Qué tipos de ciclos existen en JavaScript?
      * Existe 5 tipos de ciclos:
          * Bucle For 
          * Bucle For Of
          * Bucle For In
          * Bucle While
          * Bucle Do While
  * ¿Qué es un ciclo infinito y por qué es un problema?
      * Un ciclo infinito es un codigo que se ejecuta siempre, es un problema porque javascript es un lenguaje dinámico, eso quiere decir que no va a seguir el flujo normal del programa hasta que es bluce termine 
  * ¿Puedo mezclar ciclos y condicionales?
      * Sí
2️. Replica el comportamiento de los siguientes ciclos for utilizando ciclos while:
### Blue Con For
~~~
for (let i = 0; i < 5; i++) {
    console.log("El valor de i es: " + i);
}
for (let i = 10; i >= 2; i--) {
    console.log("El valor de i es: " + i);
}
~~~
### Blue Con While
~~~
let i=0;
while (i < 5) {
  console.log("El valor de i es: " + i);
  i++;
}
letia = 10
while (i >= 2){
  console.log("El valor de a es: " + a);
  a--;
}
~~~

3️. Escribe un código en JavaScript que le pregunte a los usuarios cuánto es 2 + 2. Si responden bien, mostramos un mensaje de felicitaciones, pero si responden mal, volvemos a empezar.

Pista: puedes usar la función prompt de JavaScript.
## Listas
1️. Responde las siguientes preguntas en la sección de comentarios:

  * ¿Qué es un array?
    * Un array es una forma de almazenar multiples datos en una variable
  * ¿Qué es un objeto?
    * Un objeto es un tipo de variable de tipo objeto
  * ¿Cuándo es mejor usar objetos o arrays?
    * Se pueden usar arrays cuando necesitas guardas multiples datos de un mismo tipo
  * ¿Puedo mezclar arrays con objetos o incluso objetos con arrays?
    * Sí
2️. Crea una función que pueda recibir cualquier array como parámetro e imprima su primer elemento.
~~~
const arrayFunc = (array) => console.log(array[0]);
arrayFunc([3, 1, 2]);
~~~

3️. Crea una función que pueda recibir cualquier array como parámetro e imprima todos sus elementos uno por uno (no se vale imprimir el array completo).
~~~
const ElementPrinter = (array) =>{
  for (const i of array) {
    console.log(i);
  }
};
ElementPrinter([3, 1, 2]);
~~~

4️. Crea una función que pueda recibir cualquier objeto como parámetro e imprima todos sus elementos uno por uno (no se vale imprimir el objeto completo).
~~~
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
~~~
