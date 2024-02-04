
/*KATAS PRÁCTICAS NIVEL 8*/

/*¿Quién recuerda su época en el patio de la escuela, cuando las niñas tomaban una flor y arrancaban sus pétalos, diciendo cada una de las siguientes frases cada vez que arrancaban un pétalo:

"Te amo"
"un poco"
"mucho"
"apasionadamente"
"locamente"
"de nada"
Si hay más de 6 pétalos, se empieza de nuevo con "Te amo" para 7 pétalos, "un poquito" para 8 pétalos y así sucesivamente.

Cuando se rasgó el último pétalo hubo gritos de excitación, sueños, pensamientos y emociones surgiendo.

Tu objetivo en este kata es determinar qué frase dirían las chicas en el último pétalo de una flor de un número determinado de pétalos. El número de pétalos siempre es mayor que 0.*/


let phrases = [
    'I love you',
    'a little',
    'a lot',
    'passionately',
    'madly',
    'not at all',
]

function howMuchILoveYou(n) {
     return phrases[(n - 1) % phrases.length] 
}

/*Cree una función que tome un número entero como argumento y devuelva "Par" para números pares o "Impar" para números impares.*/


function evenOrOdd(number) {
    if (number % 2 === 0) {
      return "Even";
    }
    else {
      return "Odd"
    }
  }



/*Find the mistake

function multiply(a, b){
     a * b
  }*/

  function multiply(a, b){
    return a * b;
  }

 /*En esta sencilla tarea se te asigna un número y debes convertirlo en negativo. ¿Pero tal vez el número ya sea negativo?

Ejemplos
hacerNegativo(1); // devuelve -1
hacerNegativo(-5); // devuelve -5
hacerNegativo(0); // devuelve 0
hacerNegativo(0,12); // devuelve -0.12

Notas:
El número ya puede ser negativo, en cuyo caso no se requiere ningún cambio.
El cero (0) no se verifica para ningún signo específico. Los ceros negativos no tienen sentido matemático.*/

function makeNegative(num) {
    if ( num > 0 ) {
          return -num;
      }
      else {
          return num;
      }
  }


  function makeNegative(num) {
    return Math.abs(num) * -1;
  }


/*Escribe una función para dividir una cadena y convertirla en una matriz de palabras.

Ejemplos (Entrada ==> Salida):
"Robin Singh" ==> ["Robin", "Singh"]

"Me encantan los arrays, son mis favoritos" ==> ["yo", "me encanta", "arrays", "ellos", "son", "mi", "favorito"]*/


function stringToArray(string){
    return string.split(' ');
  }


  function stringToArray(string){

    let newStr = "";
   let result = [];
   for (let i= 0; i < string.length; i++) {
      if (string[i]!==" "){
          newStr = newStr + string[i]
      }  
      else{
          result.push(newStr);
          newStr = "";
      }                                                                                                                                                  
   }
   result.push(newStr);
   return result;
}

/*Completa la solución para que invierta la cadena que se le pasó.

'mundo' => 'dlrow'
'palabra' => 'drow'*/

function solution(str){
    return str.split('').reverse().join('');  
  }



function solution(str) {
    let splitString = str.split(''); 
    let reverseArray = splitString.reverse();
    let joinArray = reverseArray.join('');
    return joinArray; 
  }

  console.log(solution('world'));



  /*sumar dos numeros y que me devuelva un resultado*/

  function sumar(num1,num2) {
    return num1+num2;
  }

  let suma= sumar(6,8);
  console.log("El resultado es"+suma);
  

/*Dada una matriz de números enteros, devuelve una nueva matriz con cada valor duplicado.*/

  function maps(x){
    return x.map(n => n * 2);
  }

/*Función que muestre por pantalla un prompt en el que te pregunten nombre, apellido y edad y luego te diga la edad que vas a tener dentro de 5 años*/

function saludar(nombre, apellido,edad) {
  console.log(`Hola ${nombre}${apellido}. Tu edad es de ${edad}` );

  console.log(`Èn 5 años vas a tener ${edad+5}`);
}

let nom= prompt("¿Cuál es tu nombre?");
let ape= prompt ("¿Cuál es tu apellido?");
let edad= prompt ("¿Cuál es tu edad?");

saludar(nom,ape,edad);

/*Otra forma de hacer una función. Pasándole un parámetro y no. No es muy recomendable.Esto se usa más para hacer funciones con arrows*/

const decirHola = function() {
console.log("Hola!");
}

decirHola ();

//En consola aparecerá "Hola!"

const decirHolita = function(param) {
  console.log("Hola"+""+ param);
}

decirHolita("Julio");

//En consola aparecerá "Hola Julio"

function positiveSum(arr) {
  var total = 0;    
  for (i = 0; i < arr.length; i++) {    // setup loop to go through array of given length
    if (arr[i] > 0) {                   // if arr[i] is greater than zero
      total += arr[i];                  // add arr[i] to total
    }
  }
  return total;                         // return total
}

/*Escribe una función que verifique si dos caracteres dados son el mismo caso.

Si alguno de los caracteres no es una letra, devuelve -1
Si ambos caracteres son el mismo caso, devuelve 1
Si ambos caracteres son letras, pero no el mismo caso, devuelve 0*/

function sameCase(a, b){
  if(a.toUpperCase() === a.toLowerCase() || b.toLowerCase() === b.toUpperCase()){
     return -1
   }else if(a === a.toLowerCase() && b === b.toLowerCase() || a === a.toUpperCase() && b === b.toUpperCase()){
       return 1
   }else{
     return 0
   }
 }

/*Dados 2 ascensores (llamados "izquierda" y "derecha") en un edificio de 3 pisos (numerados del 0 al 2), escriba una función ascensor aceptando 3 argumentos (en orden):

--izquierda: el piso actual del ascensor izquierdo.
--derecha: el piso actual del ascensor derecho.
--llamar - El piso que llamó a un ascensor.

Debería devolver el nombre del ascensor más cercano al piso llamado ("izquierda"/"derecha").
En el caso de que ambos ascensores estén a la misma distancia del piso llamado, elija el ascensor de la derecha.

Puede asumir que las entradas siempre serán números enteros válidos entre 0 y 2.*/

function elevator(left, right, call) {
  return Math.abs(call - left) < Math.abs(call - right) ? 'left' : 'right';
}

/*Nuestro equipo de fútbol ha terminado el campeonato.
Los resultados de los partidos de nuestro equipo se registran en una colección de cadenas. Cada partido está representado por una cadena en el formato "x:y", donde x es la puntuación de nuestro equipo e y es la puntuación de nuestro oponente.

Por ejemplo: ["3:1", "2:2", "0:1", ...]

Los puntos se otorgan por cada partido de la siguiente manera:

si x > y: 3 puntos (ganar)
si x < y: 0 puntos (pérdida)
si x = y: 1 punto (empate)
Necesitamos escribir una función que tome esta colección y devuelva la cantidad de puntos que nuestro equipo (x) obtuvo en el campeonato según las reglas dadas anteriormente.

Notas:

nuestro equipo siempre juega 10 partidos en el campeonato
0 <= x <= 4
0 <= y <= 4 */

function points(games) {
  let sum = 0;
  for(let i = 0; i < games.length; i++) {
    let a = games[i].split(':');
    if(a[0] > a[1]) {
      sum += 3;
    } else if(a[0] == a[1]) {
      sum += 1;
    } else { sum = sum } 
  }
  return sum;
 }

 /*Muy sencillo, dado un número (entero/decimal/ambos según el idioma), encontrar su opuesto (inverso aditivo).*/

 function opposite (number){
  return -number ;
 }


 /*¡Codifica lo más rápido que puedas! Necesitas duplicar el número entero y devolverlo.*/

 function doubleInteger(i) {
  if(i=i*2) {
  }
  return i;
}


/*Crea una función que brinde un saludo personalizado. Esta función toma dos parámetros: nombre y propietario.
Utilice condicionales para devolver el mensaje adecuado:
devolución del caso
nombre es igual al propietario 'Hola jefe'
de lo contrario 'Hola invitado'*/

function greet (name, owner) {
  if (name === owner) {
    return 'Hello boss';
  }
  return 'Hello guest';
}

/*Necesitamos una función que pueda transformar un número (entero) en una cadena.

¿Qué formas de conseguirlo conoces?

Ejemplos (entrada --> salida):
123 --> "123"
999 --> "999"
-100 --> "-100"*/

function numberToString(num) {
  return num.toString() ;
}

/*Poner una palabra en minúscula*/

let palabra="HOLA";
console.log(palabra.toLowerCase()); //"hola"

/*Poner una palabra en minúscula*/

let nuevaPalabra = "hola";
console.log(nuevaPalabra.toUpperCase()); //"HOLA"

/*Poner solo la primera letra en mayúsculas*/

let newPalabra = "hola";
let primeraletra= [0].toUpperCase();
console.log(newPalabra);  //se da por hecho que la posición 0 es la primera letra de la palabra, así que por consola aparecería "Hola"

/*Quitar o cortar el primer caracter con el método slice.Una forma de hacerlo es mediante el método slice(). Esto crea una nueva cadena comenzando desde el índice especificado hasta el final de la palabra.
Desea comenzar desde la segunda letra hasta el final del valor.
En este caso, el argumento que debe pasar a slice() es un índice de 1 ya que es el índice de la segunda letra.
De esta forma, el primer carácter se excluye por completo. Se devuelve una nueva cadena sin ella, pero que contiene el resto de los caracteres, menos la primera letra.*/

let metodoCortar= newPalabra.slice(1);
console.log(metodoCortar);