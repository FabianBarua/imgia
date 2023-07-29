document.addEventListener("DOMContentLoaded", function () {
    // Obtenemos referencias a los elementos del DOM
    const inputTexto = document.getElementById("inputTexto");
    const btnCambiarImagen = document.getElementById("btnCambiarImagen");
    const imagenCambiante = document.getElementById("imagenCambiante");
    const gifCarga = document.getElementById("gifCarga");

    // Agregamos un evento click al botón
    btnCambiarImagen.addEventListener("click", function () {
        // Mostramos el GIF de carga
        gifCarga.style.display = "block";
        imagenCambiante.style.display="none"
        // Obtenemos el texto ingresado en el input
        const texto = inputTexto.value;

        // Creamos un objeto de imagen temporal para cargar la URL
        const imgTemp = new Image();
        imgTemp.onload = function () {
            // La imagen se ha cargado completamente
            // Cambiamos el src de la imagen real
            imagenCambiante.src = "https://image.pollinations.ai/prompt/" + texto;

            // Ocultamos el GIF de carga
            gifCarga.style.display = "none";
            imagenCambiante.style.display="block"

        };

        // Intentamos cargar la imagen
        imgTemp.src = "https://image.pollinations.ai/prompt/" + texto;
    });
});
