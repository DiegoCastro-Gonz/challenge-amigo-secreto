// Función para agregar un amigo a la lista
function agregarAmigo() {
    let inputAmigo = document.getElementById('amigo'); // Captura el input
    let nombreAmigo = inputAmigo.value.trim(); // Obtiene el valor sin espacios extras

    if (nombreAmigo === "") {
        alert("Por favor, ingrese un nombre válido");
        return; // Evita agregar elementos vacíos
    }

    let listaAmigos = document.getElementById('listaAmigos'); // Captura la lista
    let nuevoElemento = document.createElement('li'); // Crea un nuevo elemento li
    nuevoElemento.textContent = nombreAmigo; // Asigna el texto capturado

    listaAmigos.appendChild(nuevoElemento); // Agrega el li a la lista
    inputAmigo.value = ''; // Limpia el input después de agregar el amigo
}

// Función para sortear un amigo secreto
function sortearAmigo() {
    let listaAmigos = document.getElementById('listaAmigos');
    let items = listaAmigos.getElementsByTagName('li');

    if (items.length === 0) {
        alert("Por favor, ingrese nombres de amigos para poder sortear");
        return;
    }

    let indiceAleatorio = Math.floor(Math.random() * items.length); // Obtiene índice aleatorio
    let ganador = items[indiceAleatorio].textContent;

    let listaResultado = document.getElementById('resultado'); // Captura la lista de resultados
    let nuevoElemento = document.createElement('li'); // Crea un nuevo elemento li
    nuevoElemento.textContent = `El amigo secreto sorteado es: ${ganador}`;

    listaResultado.appendChild(nuevoElemento); // Agrega el li a la lista de resultados
    listaAmigos.innerHTML = ''; // Limpia la lista de amigos después del sorteo
}
