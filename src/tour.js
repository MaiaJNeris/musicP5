function solicitarNombre() {
    let usuarioName = prompt("¡Bienvenido! ¿Cuál es tu nombre?");
    
    // Validar si el nombre no fue ingresado
    if (!usuarioName) {
        alert("No completaste tu nombre, ¡por favor ingrésalo!");
        return solicitarNombre();  // Volvemos a pedir el nombre
    }
    
    // Validar si el nombre tiene menos de 2 letras
    if (usuarioName.length < 2) {
        alert("El nombre debe tener al menos 2 letras.");
        return solicitarNombre();  // Volvemos a pedir el nombre
    }
    
    // Convertimos el nombre a mayúsculas y lo retornamos
    return usuarioName.toUpperCase();
}

// Pedir el nombre del usuario
let usuarioName = solicitarNombre();

// Mostrar el nombre en el span con id "welcome"
document.getElementById('welcome').textContent = `¡Hola ${usuarioName}! Bienvenido a nuestras fechas de tour.`;