
//SIMILAR A FormularioUILogic.js
document.querySelector('#procesar-compra').addEventListener('click', procesarToken)

function procesarToken(){
    var sPan = document.querySelector('#txtPan').value,
        scvv = document.querySelector('#txtCvv').value,
        svigencia = document.querySelector('#txtVigencia').value,
		sIdTransaccion= '000000000000000',
		sFechaCompra= '2021-06-21T00:14:16.735Z',
        sFechaActualizacion= sFechaCompra,
        sFechaCreacion= sFechaCompra,
        sRFC= 'JTF836412700'

    var token= solicitarToken(
                sPan,
                sRFC,
                sFechaActualizacion, //fecha_actualizacion
                sFechaCreacion, //fecha_creacion
                sIdTransaccion,
                null,
                null
    );

    guardarTransaccion(token);
    
}
 
function guardarTransaccion(toke){
    //var sToken= '789654123010101',
    var sToken= toke,
        sClienteComprador = document.querySelector('#txtClienteComprador').value,
        sCorreoClienteComprador = document.querySelector('#txtCorreoClienteComprador').value,
        sIdPedido= '000000000000000',
        sTotal= compra.calcularTotal(),
        sNoArticulos= compra.obtenerProductosLocalStorage().length,
        sColor= 'amarillo',
        sCosto= 5000,
        sDetalles= 'Un producto',
        sNombre= 'Un producto',
        sIdProducto= '0123',
        sTipo= 'Un producto',
        ssFechaCompra= '2021-06-21T00:14:16.735Z',
        ssIdTransaccion= '000000000000000'

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
        ssFechaCompra,
        sToken,
        ssIdTransaccion
    );

    alert("¡Compra exitosa!");        
    window.location="index.html";
 
}