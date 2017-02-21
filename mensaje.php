<?php



$destino = "ricardoandres749@gmail.com";
$nombre = $_POST ["nombre"];
$correo = $_POST ["correo"];
$comentario = $_POST ["comentario"];
$contenido = "Nombre: " . $nombre . "\nCorreo: " . $correo . "\nComentario: " . $comentario;
mail($destino,"Contacto", $contenido , $headers);
echo ('ok!');
?>