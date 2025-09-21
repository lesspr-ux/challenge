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
 // Actualizar el array de amigos
  amigos.push(nombre);

  // Limpiar el campo de entrada
  input.value = "";

  // Actualizar la lista en pantalla
  actualizarLista();
}

// 3. Función para actualizar la lista de amigos
function actualizarLista() {
  // Obtener el elemento de la lista
  const lista = document.getElementById("listaAmigos");

  // Limpiar la lista existente
  lista.innerHTML = "";

  // Iterar sobre el arreglo y agregar elementos <li>
  for (let i = 0; i < amigos.length; i++) {
    let li = document.createElement("li");
    li.textContent = amigos[i];
    lista.appendChild(li);
  }
}

// 4. Función para sortear los amigos
function sortearAmigo() {
  // Validar que haya amigos disponibles
  if (amigos.length === 0) {
    alert("No hay amigos disponibles para sortear.");
    return;
  }

  // Generar un índice aleatorio
  let indiceAleatorio = Math.floor(Math.random() * amigos.length);

  // Obtener el nombre sorteado
  let amigoSorteado = amigos[indiceAleatorio];

  // Mostrar el resultado en pantalla (como <li> dentro de la lista "resultado")
  const resultado = document.getElementById("resultado");
  resultado.innerHTML = ""; // limpiar resultado previo
  let li = document.createElement("li");
  li.textContent = "El amigo secreto es: " + amigoSorteado;
  resultado.appendChild(li);
}
