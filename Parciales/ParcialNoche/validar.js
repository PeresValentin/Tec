function validar() {
  var nombre = document.getElementById("nombre").value;
  var apellido = document.getElementById("apellido").value;
  var materia = document.getElementById("materia").value;
  var nota1 = document.getElementById("nota1").value;
  var nota2 = document.getElementById("nota2").value;
  var nota3 = document.getElementById("nota3").value;

  // Verificar que los campos no estén vacíos
  if (
    nombre === "" ||
    apellido === "" ||
    materia === "" ||
    nota1 === "" ||
    nota2 === "" ||
    nota3 === ""
  ) {
    alert("Por favor, complete todos los campos del formulario.");
    return false;
  }

  // Verificar que las notas no sean iguales a 0
  if (parseInt(nota1) === 0 || parseInt(nota2) === 0 || parseInt(nota3) === 0) {
    alert("Las notas no pueden ser iguales a 0.");
    return false;
  }

  // Si todos los campos son válidos, enviar el formulario
  return true;
}
