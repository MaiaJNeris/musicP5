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