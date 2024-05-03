function analizarCadena(cadena) {
  // Verificar si la cadena está formada solo por mayúsculas
  if (cadena === cadena.toUpperCase()) {
    return "La cadena está formada solo por mayúsculas.";
  }
  // Verificar si la cadena está formada solo por minúsculas
  else if (cadena === cadena.toLowerCase()) {
    return "La cadena está formada solo por minúsculas.";
  }
  // Si no es ni solo mayúsculas ni solo minúsculas, entonces es una mezcla de ambas
  else {
    return "La cadena está formada por una mezcla de mayúsculas y minúsculas.";
  }
}

// Ejemplo de uso
var texto1 = "SOLOMAYUSCULAS";
var texto2 = "solominusculas";
var texto3 = "MeZcLaDa";

alert(analizarCadena(texto1)); // Output: La cadena está formada solo por mayúsculas.
alert(analizarCadena(texto2)); // Output: La cadena está formada solo por minúsculas.
alert(analizarCadena(texto3)); // Output: La cadena está formada por una mezcla de mayúsculas y minúsculas.
