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

    function dorsal(){
        const numeroDorsal = (nacimiento*3)-2;
        alert(`tu dorsal es ${numeroDorsal}`)
    }

    dorsal()
    if (nacimiento > 31) {
        alert("Solo el día debes decirme")
    }
    else if (nacimiento <= 31) {
        alert(`${usuario}, tu dorsal es ${numeroDorsal}`)
    }
    if (numeroDorsal === 1) {
        alert(`${datoCurioso} Max Verstappen`)
    }
    else if (numeroDorsal === 2) {
        alert(`${datoCurioso} Logan Sargeant`)
    }
    else if (numeroDorsal === 4) {
        alert(`${datoCurioso} Lando Norris`)
    }
    else if (numeroDorsal === 10) {
        alert(`${datoCurioso} Pierre Gasly`)
    }
    else if (numeroDorsal === 11) {
        alert(`${datoCurioso} Sergio Pérez`)
    }
    else if (numeroDorsal === 14) {
        alert(`${datoCurioso} Fernando Alonso`)
    }
    else if (numeroDorsal === 16) {
        alert(`${datoCurioso} Charles Leclerc`)
    }
    else if (numeroDorsal === 18) {
        alert(`${datoCurioso} Lance Stroll`)
    }
    else if (numeroDorsal === 20) {
        alert(`${datoCurioso} Kevin Magnussen`)
    }
    else if (dorsal === 21) {
        alert(`${datoCurioso} Nyck de Vries`)
    }
    else if (numeroDorsal === 22) {
        alert(`${datoCurioso} Yuki Tsunoda`)
    }
    else if (numeroDorsal === 23) {
        alert(`${datoCurioso} Alex Albon`)
    }
    else if (numeroDorsal === 24) {
        alert(`${datoCurioso} Guanyu Zhou`)
    }
    else if (numeroDorsal === 27) {
        alert(`${datoCurioso} Nico Hulkenberg`)
    }
    else if (numeroDorsal === 31) {
        alert(`${datoCurioso} Esteban Ocon`)
    }
    else if (numeroDorsal === 44) {
        alert(`${datoCurioso} Lewis Hamilton`)
    }
    else if (numeroDorsal === 55) {
        alert(`${datoCurioso} Carlos Sainz`)
    }
    else if (numeroDorsal === 63) {
        alert(`${datoCurioso} George Russell`)
    }
    else if (numeroDorsal === 77) {
        alert(`${datoCurioso} Valtteri Bottas`)
    }
    else if (numeroDorsal === 81) {
        alert(`${datoCurioso} Oscar Piastri`)
    }else{
        alert(`Intenta nuevamente`)
    }
}

let voluntadCompra = prompt("¿Deseas comprar?");
if (voluntadCompra.toUpperCase() === "SI") {

let Merch = [
    { id: 1, nombre: "Redbull", categoria: "Buzo", precio: 85 },
    { id: 2, nombre: "Alpha Tauri", categoria: "Buzo", precio: 70 },
    { id: 3, nombre: "Ferrari", categoria: "Buzo", precio: 80 },
  ];
  let filtrados;
  
  let filtro = prompt("¿Por qué deseas fitrar?");
  
  if (filtro === "precio") {
    let precio = parseInt(prompt("Ingresa precio máximo (usd)"));
  
    filtrados = Merch.filter((item) => item.precio > precio);
  } else if (filtro === "categoria") {
    let categoria = prompt("¿Qué quieres comprar?");
  
    filtrados = Merch.filter((item) => item.categoria === categoria);
  }

  if (filtrados.length > 0) {
    filtrados.forEach((item) => {
      let mensaje = `
       Id: ${item.id}
       Nombre: ${item.nombre}
       `;
      alert(mensaje);
    });
  } else {
    alert("De momento solo tenemos buzos");
  }
}
if (voluntadCompra.toUpperCase() === "NO") {
    alert("Bien, disfruta de las noticias");
}
