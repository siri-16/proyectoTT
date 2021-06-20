const compra = new Carrito();
const listaCompra = document.querySelector("#lista-compra tbody");
const carrito = document.getElementById('carrito');
const procesarCompraBtn = document.getElementById('procesar-compra');
const sClienteComprador = document.getElementById('txtClienteComprador');
const sCcorreoClienteComprador = document.getElementById('txtCorreoClienteComprador');
const sPan = document.getElementById('txtPAN');
const cvv = document.getElementById('txtCVV');
const vigencia = document.getElementById('txtVigencia');

cargarEventos();

function cargarEventos() {
    document.addEventListener('DOMContentLoaded', compra.leerLocalStorageCompra());

    //Eliminar productos del carrito
    carrito.addEventListener('click', (e) => { compra.eliminarProducto(e) });

    compra.calcularTotal();

    //cuando se selecciona procesar Compra
    procesarCompraBtn.addEventListener('click', procesarCompra);

    carrito.addEventListener('change', (e) => { compra.obtenerEvento(e) });
    carrito.addEventListener('keyup', (e) => { compra.obtenerEvento(e) });


}

function procesarCompra() {
    // e.preventDefault();
    if (compra.obtenerProductosLocalStorage().length === 0) {
        Swal.fire({
            type: 'error',
            title: 'Oops...',
            text: 'No hay productos, selecciona alguno',
            showConfirmButton: false,
            timer: 2000
        }).then(function () {
            window.location = "index.html";
        })
    }
    else if (clienteComprador.value === '' || correoClienteComprador.value === '') {
        Swal.fire({
            type: 'error',
            title: 'Oops...',
            text: 'Ingrese todos los campos requeridos',
            showConfirmButton: false,
            timer: 2000
        })
    }
    else {
        
        //aqui se coloca el user id generado en el emailJS
        (function () {
            emailjs.init("user_CEozz2F39lJJOLF5mJiDA");
        })();

        var myform = $("form#procesar-pago");

        myform.submit( (event) => {
            event.preventDefault();

            // Change to your service ID, or keep using the default service
            var service_id = "default_service";
            var template_id = "template_3SA9LsqQ";

            const cargandoGif = document.querySelector('#cargando');
            cargandoGif.style.display = 'block';

            const enviado = document.createElement('img');
            enviado.src = 'img/mail.gif';
            enviado.style.display = 'block';
            enviado.width = '150';

            emailjs.sendForm(service_id, template_id, myform[0])
                .then(() => {
                    cargandoGif.style.display = 'none';
                    document.querySelector('#loaders').appendChild(enviado);

                    setTimeout(() => {
                        compra.vaciarLocalStorage();
                        enviado.remove();
                        window.location = "index.html";
                    }, 2000);


                }, (err) => {
                    alert("Error al enviar el email\r\n Response:\n " + JSON.stringify(err));
                    // myform.find("button").text("Send");
                });

            return false;

        });

    }
}

//SIMILAR A FormularioUILogic.js
document.querySelector('#procesar-compra').addEventListener('click', procesarToken)

function procesarToken(){
//fecha de compra con funcion en javascript que genere aleatoriamente
		var sIdtransaccion= Math.random(); //generarlo con funcion aleatoria
		var sIdPedido= sIdtransaccion; //generarlo con funcion aleatoria
		var sFechaCompra= new Date(); //generarlo con funcion aleatoria
        var sFechaActualizacion= sFechaCompra;
        var sFechaCreacion= sFechaCompra;
        var sTotal= compra.calcularTotal();
        var sNoArticulos= compra.obtenerProductosLocalStorage().length;
 
    solicitarToken(
        sPan,
        null, //rfc
        sFechaActualizacion, //fecha_actualizacion
        sFechaCreacion, //fecha_creacion
        sIdTransaccion,
        null,
        null
    )
 
    addTransaccionToSystem(
        sIdPedido, //
        sNoArticulos, //
        sColor,
        sCosto,
        sDetalles,
        sNombre,
        sIdPedido, //
        sIdProducto,
        sTipo,
        sTotal, //
        sClienteComprador, //
        sCorreoClienteComprador, //
        sFechaCompra, //
        sToken, 
        sIdPedido, //
        sIdTransaccion //
    );
    alert("¡Compra exitosa!");        
    window.location="index.html";
 
}