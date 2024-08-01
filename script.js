// crear una variable constante y con texto(2da linea de texto) y hacer como un "print" (3ra linea) - Uziel
//const text= "hola momeros";
//console.log(text) 

// crea una variable constante y integra el texto y una comparacion (6ta linea de texto )- alexis
//console.log("esta pagina es visitada por mas de 50 mil personas por dia, y por mes: ", 50000 * 30);

// creo una variable constante con el contenido new Date() para obtener la fecha y luego hice la variable msg para que siempre que se llame lo haga con un mensaje
//const fecha= new Date();
//const msg= ('ingreso a la pagina: '+ fecha)
//console.log( msg)
//Nacho
//let play = document.getElementById("play")
    //function playAudio(){
        //let audio= new Audio("random.mp3")
        //audio.play()
    //}
    //play.addEventListener("click", playAudio);

//window.open("./ofertas.html"); // abre una ventana emergente al entrar a la pagina web (algunos navegadores la bloquean automaticamente) - uziel


//play.onclick = function() { // al clickear en "botoncito" este usa una animacion que lo cambia gradualmente a color rojo mediante CSS y JS -uziel
    //this.style.backgroundColor = '#C02514';
//};

// -------------------------------------------------------------------------------

// let talle = getElementsByClassName("talle");
// let boton_compra = getElementsByClassName("boton_comprar");

// Obtener elementos por clase
// Obtener elementos por clase
// script.js
// script.js
// script.js
// script.js
document.addEventListener('DOMContentLoaded', () => {
    let talles = document.querySelectorAll(".lista_talles .tamaño");
    let botonCompra = document.querySelector(".boton_comprar");
    let carritoCantidad = document.querySelector(".carrito-cantidad");
    let carrito = document.getElementById("carrito");
    let modalCarrito = document.getElementById("modalCarrito");
    let spanCerrar = document.getElementsByClassName("cerrar")[0];
    let listaCarrito = document.getElementById("listaCarrito");

    // Array para almacenar las compras
    let compras = [];

    talles.forEach(function(talle) {
        talle.addEventListener("click", function() {
            talles.forEach(function(t) {
                t.classList.remove("active");
            });
            this.classList.add("active");
            let talleSeleccionado = this.textContent;
            console.log("Talle seleccionado: " + talleSeleccionado);
        });
    });

    botonCompra.addEventListener("click", function() {
        let talleSeleccionadoElemento = document.querySelector(".lista_talles .tamaño.active");
        if (talleSeleccionadoElemento) {
            let talleSeleccionado = talleSeleccionadoElemento.textContent;
            let nombreProducto = botonCompra.getAttribute('data-nombre');
            let precioProducto = botonCompra.getAttribute('data-precio');
            let imagenProducto = botonCompra.getAttribute('data-imagen');

            // Agregar la compra al array
            compras.push({
                nombre_producto: nombreProducto,
                talle: talleSeleccionado,
                precio: precioProducto,
                imagen: imagenProducto
            });

            // Actualizar la cantidad en el carrito
            carritoCantidad.textContent = compras.length;

            console.log("Compra registrada:", compras);
        } else {
            alert("Por favor, selecciona un talle antes de comprar.");
        }
    });

    // Mostrar el modal cuando se hace clic en el carrito
    carrito.addEventListener("click", function() {
        modalCarrito.style.display = "block";
        actualizarCarrito();
    });

    // Cerrar el modal cuando se hace clic en la 'x'
    spanCerrar.addEventListener("click", function() {
        modalCarrito.style.display = "none";
    });

    // Cerrar el modal cuando se hace clic fuera del modal
    window.addEventListener("click", function(event) {
        if (event.target == modalCarrito) {
            modalCarrito.style.display = "none";
        }
    });

    function actualizarCarrito() {
        listaCarrito.innerHTML = '';
        compras.forEach(function(compra) {
            let li = document.createElement('li');

            let img = document.createElement('img');
            img.src = compra.imagen;

            let div = document.createElement('div');
            div.className = 'producto-info';

            let h4 = document.createElement('h4');
            h4.textContent = compra.nombre_producto;
            h4.style.color = "white";
            h4.style.fontSize = "3vh";

            let pTalle = document.createElement('p');
            pTalle.textContent = `Talle: ${compra.talle}`;

            let pPrecio = document.createElement('p');
            pPrecio.textContent = `Precio: $${compra.precio}`;

            div.appendChild(h4);
            div.appendChild(pTalle);
            div.appendChild(pPrecio);

            li.appendChild(img);
            li.appendChild(div);

            listaCarrito.appendChild(li);
        });
    }
});
