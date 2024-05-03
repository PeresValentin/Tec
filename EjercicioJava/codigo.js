//var mensaje = "Hola mundo, que facil es incluir comillas ' ' y comillas \"2\" ";
//alert(mensaje);
//alert("Yo el segundo");
// Simplemente llama a las alertas

// Crear el array con los nombres de los meses
var meses = [
  "Enero",
  "Febrero",
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "Agosto",
  "Septiembre",
  "Octubre",
  "Noviembre",
  "Diciembre",
];

// Mostrar los nombres de los meses utilizando la función alert()
//  for (var i = 0; i < meses.length; i++) {
//   alert(meses[i]);
//  }
//
//A partir del siguiente array que se proporciona: var valores = [true, 5, false, "hola", "adios", 2];
var valores = [true, 5, false, "hola", "adios", 2];
var auxiliar = 0;

for (var i = 0; i < valores.length; i++) {
  if (auxiliar < valores[i].length) {
    var encontrado = valores[i];
    auxiliar = valores[i].length;
  }
}

alert(encontrado);

var numero = parseInt(
  prompt("Ingrese un número entero para calcular su factorial:")
);
alert(numero);
for (var i = 0; i == numero; i++) {
  numero = numero * (numero - i);
}

alert(numero);
