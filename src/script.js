// Script para funcionalidad futura del modal Remove
const deleteButtons = document.querySelectorAll(".delete-album-btn");

deleteButtons.forEach(button => {
    button.addEventListener('click', function() {
        alert("Pronto podr{a eliminar albums de su lista :D !");
    });
});

document.getElementById("addAlbumIcon").addEventListener("click", function () {
    alert("¡ Próximamente usted podrá personalizar sus álbumes, estamos trabajando :D !");
});