// 1. Crear un array para almacenar los nombres
let amigos = [];
// 2. Función para agregar amigos
function agregarAmigo() {
  // Capturar el valor del campo de entrada
  const input = document.getElementById("amigo");
  let nombre = input.value.trim();
  // Validar la entrada
  if (nombre === "") {
    alert("Por favor, inserte un nombre.");
    return;
  }
