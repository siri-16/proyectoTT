
//SIMILAR A FormularioUILogic.js

document.querySelector('#procesar-compra').addEventListener('click', procesarToken)

function procesarToken(){
    var sPan = document.querySelector('#txtPan').value,
        scvv = document.querySelector('#txtCvv').value,
        svigencia = document.querySelector('#txtVigencia').value,
        sClienteComprador = document.querySelector('#txtClienteComprador').value,
        sCorreoClienteComprador = document.querySelector('#txtCorreoClienteComprador').value,

		sIdTransaccion= "000000000000000",
		sIdPedido= sIdTransaccion,
		sFechaCompra= '2021-06-21T00:14:16.735Z',
        sFechaActualizacion= sFechaCompra,
        sFechaCreacion= sFechaCompra,
        sTotal= compra.calcularTotal(),
        sNoArticulos= compra.obtenerProductosLocalStorage().length,
        sColor= 'amarillo',
        sCosto= 5000,
        sDetalles= 'Un producto',
        sNombre= 'Un producto',
        sIdProducto= '0123',
        sTipo= 'Un producto',
        sToken= 'Unproducto',
        sRFC= 'JTF836412700'

    solicitarToken(
        sPan,
        sRFC,
        sFechaActualizacion, //fecha_actualizacion
        sFechaCreacion, //fecha_creacion
        sIdTransaccion,
        null,
        null
    );
 
    addTransaccionToSystem(
        sIdPedido, 
        sNoArticulos,
        sColor,
        sCosto,
        sDetalles,
        sNombre,
        sIdProducto,
        sTipo,
        sTotal,
        sClienteComprador,
        sCorreoClienteComprador,
        sFechaCompra,
        sToken,
        sIdTransaccion
    );

    alert("¡Compra exitosa!");        
    window.location="index.html";
 
}