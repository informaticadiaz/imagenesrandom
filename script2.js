function cambiarImagenCadaDia() {
    var divImagen = document.getElementById("div-imagen");
    var fechaInicio = new Date(2023, 4, 6); // 7 de mayo de 2023
    var imagenes = [
        "imagen1.jpg",
        "imagen2.jpg",
        "imagen3.jpg",
        "imagen4.jpg",
        "imagen5.jpg",
        "imagen6.jpg",
        "imagen7.jpg",
        "imagen8.jpg",
        "imagen9.jpg",
        "imagen10.jpg"
    ];
    var indexImagenActual = 0;

    function cambiarImagen() {
        var fechaActual = new Date();
        var diferenciaDias = Math.floor((fechaActual - fechaInicio) / (1000 * 60 * 60 * 24));
        indexImagenActual = diferenciaDias % imagenes.length;
        var imagen = document.createElement("img");
        imagen.src = imagenes[indexImagenActual];
        divImagen.innerHTML = "";
        divImagen.appendChild(imagen);
    }

    cambiarImagen();
    setInterval(cambiarImagen, 24 * 60 * 60 * 1000);
}

cambiarImagenCadaDia();
