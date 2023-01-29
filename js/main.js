let usuario = prompt("Ingresa tu usuario");
alert("Bienvenido, " + usuario + ". Este es el mejor sitio para fans de F1.");

let notificacion = prompt("¿Deseas recibir mails con noticias?");

if( notificacion === "Si"){
    alert("Genial, recibirás las noticias por mail.");
}else if( notificacion === "No"){
    alert("Notificaciones desactivadas.");
}else{ 
    alert("Respuesta no válida");
    }