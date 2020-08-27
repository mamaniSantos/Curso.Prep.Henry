// No cambies los nombres de las funciones.

function devolverPrimerElemento(array) {
  // Devuelve el primer elemento de un array
  // Tu código:
  return array[0];
}

function devolverUltimoElemento(array) {
  // Devuelve el último elemento de un array
  // Tu código:
  var ultimoElemento = array.pop();
  return ultimoElemento;
}

function obtenerLargoDelArray(array) {
  // Devuelve el largo de un array
  // Tu código:
  return array.length;
}

function incrementarPorUno(array) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Aumenta cada entero por 1
  // y devuelve el array
  // Tu código:
  var array2 = [];
  for (var i = 0; i <= array.length - 1; i++) {
    array2.push(array[i]+1);
  }
  return array2;
}

function agregarItemAlFinalDelArray(array, elemento) {
  // Añade el "elemento" al final del array
  // y devuelve el array
  // Tu código:
  array.push(elemento);
  return array;
}

function agregarItemAlComienzoDelArray(array, elemento) {
  // Añade el "elemento" al comienzo del array
  // y devuelve el array
  // Pista: usa el método `.unshift`
  // Tu código:
  array.unshift(elemento);
  return array;
}

function dePalabrasAFrase(palabras) {
  // "palabras" es un array de strings/cadenas
  // Devuelve un string donde todas las palabras estén concatenadas
  // con espacios entre cada palabra
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
  // Tu código:
  var palabras2 = '';
  for (var i = 0 ; i <= palabras.length - 1; i++) {
     if (palabras[i]===palabras[0]){
     palabras2 = palabras2+palabras[i];
     }else{
      palabras2 = palabras2+' '+palabras[i];
     }
  }
  return palabras2;
}

function arrayContiene(array, elemento) {
  // Comprueba si el elemento existe dentro de "array"
  // Devuelve "true" si está, o "false" si no está
  // Tu código:
  var existe = false;
  for (var i = 0 ; i <= array.length - 1; i++) {
    if(array[i]===elemento){
      existe = true;
    }
  }
  return existe;
}
function agregarNumeros(numeros) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Suma todos los enteros y devuelve el valor
  // Tu código:
  var sumaTotal = 0;
  for (var i = 0 ; i <= numeros.length - 1; i++) {
    sumaTotal = sumaTotal + numeros[i];
     }
     return sumaTotal;
}

function promedioResultadosTest(resultadosTest) {
  // "resultadosTest" debe ser una matriz de enteros (int/integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  // Tu código:
  return agregarNumeros(resultadosTest)/resultadosTest.length;
}

function numeroMasGrande(numeros) {
  // "numeros" debe ser una matriz de enteros (int/integers)
  // Devuelve el número más grande
  // Tu código:
  var numeroMasGrande = numeros[0];
  for (var i = 0 ; i <= numeros.length - 1; i++) {
    if (numeros[i] > numeroMasGrande) {
      numeroMasGrande = numeros[i];
    }
  }
  return numeroMasGrande;
}
function multiplicarNumeros(numeros){
 var multiplicacionTotal = 1;
  for (var i = 0 ; i <= numeros.length - 1; i++) {
    multiplicacionTotal = multiplicacionTotal * numeros[i];
     }
     return multiplicacionTotal;
}

function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
  // Si no se pasan argumentos devuelve 0
  // Si se pasa un argumento, simplemente devuélvelo
  // Tu código:
  var variosArgumentos= [];
  if (arguments.length === 0) {
    return 0;
  }else{
    if (arguments.length === 1) {
      return arguments[0];
    }else{
      if (arguments.length > 1) {
        for (var i = 0 ; i <= arguments.length - 1; i++) {
          variosArgumentos.push(arguments[i]);
        }
        return multiplicarNumeros(variosArgumentos);

      }
    }
  }
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  devolverPrimerElemento,
  devolverUltimoElemento,
  obtenerLargoDelArray,
  incrementarPorUno,
  agregarItemAlFinalDelArray,
  agregarItemAlComienzoDelArray,
  dePalabrasAFrase,
  arrayContiene,
  agregarNumeros,
  promedioResultadosTest,
  numeroMasGrande,
  multiplicarArgumentos,
};
