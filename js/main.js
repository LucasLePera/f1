//pedido de nombre + saludo /// ${variable} entre backticks (``)
let usuario = prompt("Ingresa tu usuario");
alert(`Bienvenido, ${usuario}. Este es el mejor sitio para fans de F1.`);

// consulta sobre notificaciones
let notificacion = prompt("¿Deseas recibir mails con noticias?");

//condicional if si(if)/no(else if)/otro(else) /// ".toUpercase ()" --> convertir en mayúscula
if (notificacion.toUpperCase() === "SI") {
    alert("Genial, recibirás las noticias por mail.");
} else if (notificacion.toUpperCase() === "NO") {
    alert("Notificaciones desactivadas.");
} else {
    alert("Respuesta no válida");

    while (notificacion.toUpperCase() != "SI" && "NO") {

        let notificacion = prompt("¿Deseas recibir mails con noticias?");
        if (notificacion.toUpperCase() === "SI") {
            alert("Genial, recibirás las noticias por mail.")
            break;
        } else if (notificacion.toUpperCase() === "NO") {
            alert("Notificaciones desactivadas.")
            break;
        }
    }
}

let consultaCalcularNumero = prompt("¿Deseas saber cuál sería tu dorsal?");

if (consultaCalcularNumero.toUpperCase() === "NO") {
    alert(`${usuario}, ¿Qué te pasó viejo? Antes eras chevere.`)
} else if (consultaCalcularNumero.toUpperCase() === "SI") {
    alert("Genial, vamos a averiguarlo.")
    let nacimiento = prompt("¿Qué día naciste?");
    let dorsal = (nacimiento * 3) - 2;
    if (nacimiento > 31) {
        alert("Solo el día debes decirme")
    }
    if (nacimiento <= 31) {
        alert(`${usuario}, tu dorsal es ${dorsal}`)
    }
    let datoCurioso = "Dato curioso, compartis dorsal con"
    if (dorsal === 1) {
        alert(`${datoCurioso} Max Verstappen`)
    }
    else if (dorsal === 2) {
        alert(`${datoCurioso} Logan Sargeant`)
    }
    else if (dorsal === 4) {
        alert(`${datoCurioso} Lando Norris`)
    }
    else if (dorsal === 10) {
        alert(`${datoCurioso} Pierre Gasly`)
    }
    else if (dorsal === 11) {
        alert(`${datoCurioso} Sergio Pérez`)
    }
    else if (dorsal === 14) {
        alert(`${datoCurioso} Fernando Alonso`)
    }
    else if (dorsal === 16) {
        alert(`${datoCurioso} Charles Leclerc`)
    }
    else if (dorsal === 18) {
        alert(`${datoCurioso} Lance Stroll`)
    }
    else if (dorsal = 20) {
        alert(`${datoCurioso} Kevin Magnussen`)
    }
    else if (dorsal === 21) {
        alert(`${datoCurioso} Nyck de Vries`)
    }
    else if (dorsal === 22) {
        alert(`${datoCurioso} Yuki Tsunoda`)
    }
    else if (dorsal === 23) {
        alert(`${datoCurioso} Alex Albon`)
    }
    else if (dorsal === 24) {
        alert(`${datoCurioso} Guanyu Zhou`)
    }
    else if (dorsal === 27) {
        alert(`${datoCurioso} Nico Hulkenberg`)
    }
    else if (dorsal === 31) {
        alert(`${datoCurioso} Esteban Ocon`)
    }
    else if (dorsal === 44) {
        alert(`${datoCurioso} Lewis Hamilton`)
    }
    else if (dorsal === 55) {
        alert(`${datoCurioso} Carlos Sainz`)
    }
    else if (dorsal === 63) {
        alert(`${datoCurioso} George Russell`)
    }
    else if (dorsal === 77) {
        alert(`${datoCurioso} Valtteri Bottas`)
    }
    else if (dorsal === 81) {
        alert(`${datoCurioso} Oscar Piastri`)
    }
}
