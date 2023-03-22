//pedido de nombre + saludo /// ${variable} entre backticks (``)

const voluntadCompra = prompt("¿Deseas comprar?");
if (voluntadCompra.toUpperCase() === "SI") {

    let Merch = [
        { id: 1, nombre: "Redbull", categoria: "Buzo", precio: 85 },
        { id: 2, nombre: "Alpha Tauri", categoria: "Buzo", precio: 70 },
        { id: 3, nombre: "Ferrari", categoria: "Buzo", precio: 80 },
    ];

    const precioFiltrado = parseInt(prompt("Ingresa precio máximo (usd)"));

    if(precioFiltrado <70) {

        alert('No hay productos con esas características, intenta modificar el filtro.')

    } else {
        filtrados = Merch.filter((item) => item.precio > precioFiltrado);
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
        alert("Tu filtrado no ha encontrado productos, intenta con un monto más alto");
    }

} else if (voluntadCompra.toUpperCase() === "NO") {
    alert("Bien, disfruta de las noticias");
}

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

    function dorsal() {
        const numeroDorsal = (nacimiento * 3) - 2;
        alert(`tu dorsal es ${numeroDorsal}`)
    }

    dorsal()
    if (nacimiento > 31) {
        alert("Solo el día debes decirme")
    }
    else if (nacimiento <= 31) {
        alert(`${usuario}, tu dorsal es ${numeroDorsal}`)
    }

}

const NewMerch = (categoria, precio) => {
    let productos = JSON.parse(localStorage.getItem("productos"));

    let producto = {
        id: productos.length + 1,
        categoria,
        precio,
    };

    productos.push(producto);
    localStorage.setItem("productos", JSON.stringify(productos));
};

let categoria = prompt("Ingrese el producto a agregar");
let precio = parseInt(prompt("Ingrese el precio"));

NewMerch(categoria, precio);
