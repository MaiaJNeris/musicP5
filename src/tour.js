// solicita nombre y valido
function solicitarNombre() {
    let usuarioName = prompt("¡Bienvenido/a! Por favor, ingresa tu nombre (mínimo 3 letras):");

    // valido que el nombre tenga al menos 3 letras
    while (!usuarioName || usuarioName.length < 3) {
        alert("El nombre debe tener al menos 3 letras. Intenta de nuevo.");
        usuarioName = prompt("¡Bienvenido/a! Por favor, ingresa tu nombre (mínimo 3 letras):");
    }

    // Nombre a mayúsculas y lo retorno
    return usuarioName.toUpperCase();
}

// Pedir el nombre usuario
let usuarioName = solicitarNombre();

// Añadir el nombre y el ícono de tickets al span con id "welcome"
document.getElementById('welcome').innerHTML = `¡Hola ${usuarioName}! <i class="fas fa-ticket-alt"></i> Bienvenido a nuestras fechas de tour.`;
