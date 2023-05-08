function cambiarImagenCadaDosMinutos() {
    var imagen = document.getElementById("imagen");
    var hora = new Date().getHours();
    var imagenManana = "imagen_manana.jpg";
    var imagenTarde = "imagen_tarde.jpg";
    var imagenNoche = "imagen_noche.jpg";
    var imagenes = [imagenManana, imagenTarde, imagenNoche];
    var indexImagenActual = 0;

    function cambiarImagen() {
        imagen.src = imagenes[indexImagenActual];
        indexImagenActual = (indexImagenActual + 1) % imagenes.length;
    }

    cambiarImagen();
    setInterval(cambiarImagen, 2 * 60 * 1000);
}

cambiarImagenCadaDosMinutos();
