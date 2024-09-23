// no se si entendi MathMLElement, https://pledu.plataforma5.la/javascript-full-stack-para-principiantes/07---javascript-/primer-ejercicio-4387a908.
// Dejo comentado para que no genere molestía al navegar en sidebar
// usuarioName= prompt("¡Bienvenido!. ¿Cual es tu nombre?")
// edadUsuario=prompt("¿Que edad tienes?")
// alert(`Hola ${usuarioName} de ${edadUsuario} años, te interesaría adquirir tickects ? 🎟️`)

//puse esta alerta mientas
const deleteButtons = document.querySelectorAll(".delete-album-btn");

deleteButtons.forEach(button => {
    button.addEventListener('click', function() {
        alert("Pronto podr{a eliminar albums de su lista :D !");
    });
});

//puse esta alerta mientras
document.getElementById("addAlbumIcon").addEventListener("click", function () {
    alert("¡ Próximamente usted podrá personalizar sus álbumes, estamos trabajando :D !");
});