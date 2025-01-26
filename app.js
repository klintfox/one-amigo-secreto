// Array para almacenar los nombres de los amigos
let amigos = [];

// Función para agregar un nombre a la lista de amigos
function agregarAmigo() {
    // Obtener el valor ingresado en el campo de texto
    let amigoInput = document.getElementById('amigo');
    let nombre = amigoInput.value.trim();

    // Validar que el campo no esté vacío
    if (nombre === "") {
        alert("Por favor, ingresa un nombre válido.");
        return;
    }

    // Agregar el nombre al array de amigos
    amigos.push(nombre);

    // Limpiar el campo de texto después de agregar el nombre
    amigoInput.value = "";

    // Mostrar la lista de amigos actualizada
    mostrarLista();
}

// Función para mostrar la lista de amigos en la página
function mostrarLista() {
    // Obtener el contenedor de la lista de amigos
    let listaAmigos = document.getElementById('listaAmigos');

    // Limpiar la lista antes de agregar nuevos elementos
    listaAmigos.innerHTML = "";

    // Recorrer el array de amigos y añadir cada nombre a la lista en la página
    amigos.forEach(function(amigo) {
        let li = document.createElement('li');
        li.textContent = amigo;
        listaAmigos.appendChild(li);
    });
}

// Función para realizar el sorteo y mostrar el resultado
function sortearAmigo() {
    // Verificar si hay amigos en la lista
    if (amigos.length === 0) {
        alert("No hay amigos en la lista para sortear.");
        return;
    }

    // Obtener un índice aleatorio de la lista de amigos
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);

    // Obtener el nombre del amigo secreto
    let amigoSecreto = amigos[indiceAleatorio];

    // Mostrar el resultado en el área de resultados
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `<li>¡El amigo secreto es: <strong>${amigoSecreto}</strong>!</li>`;
}
