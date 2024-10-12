// Pedir el nombre usuario
let usuarioName = solicitarNombre();

//Venta ticket y location
let tickets = [
    {
        location: "Ciudad de México",
        availableTickets: 100
    },
    {
        location: "Guadalajara",
        availableTickets: 80
    },
    {
        location: "Monterrey",
        availableTickets: 50
    },
    {
        location: "Bogotá",
        availableTickets: 120
    },
    {
        location: "Lima",
        availableTickets: 1
    }
];

document.getElementById('welcome').innerHTML = `¡Hola ${usuarioName}! <i class="fas fa-ticket-alt"></i> Bienvenido a nuestras fechas de tour.`;

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

// FUNCTION para TOUR.HTML
const getTickets = (location) => {
    // Busco la ciudad en el array de tickets
    const city = tickets.find(ticket => ticket.location === location);

    city
        ? (city.availableTickets > 0
            ?
            (city.availableTickets--,
                swal("Sold!", `You have tickets to the ${location} concert. Tickets left: ${city.availableTickets}`, "success"))
            :
            swal("Oh no!", `You are outta luck! There are no more tickets for the ${location} concert.`, "info"))
        :
        swal("Error", `No se encontró el concierto en ${location}.`, "error");
};


