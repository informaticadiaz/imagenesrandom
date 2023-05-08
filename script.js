function mostrarImagen() {
    var hora = new Date().getHours();
    var imagen = document.getElementById("imagen");
    if (hora >= 6 && hora < 12) {
        imagen.src = "imagen_manana.jpg";
    } else if (hora >= 12 && hora < 19) {
        imagen.src = "imagen_tarde.jpg";
    } else {
        imagen.src = "imagen_noche.jpg";
    }
}

mostrarImagen();