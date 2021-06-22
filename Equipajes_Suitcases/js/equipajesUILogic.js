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
        sRFC= 'MLSC160185150'

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
        sColor= 'ROSA',
        sCosto= 7500,
        sDetalles= 'Un TAM. MÁX. XL 32',
        sMaterial= 'POLIPROPILENO',
        sNoPiezas= '4 PIEZAS',
        sNombre= 'EQUIPAJE',
        sIdProducto= '056876314879451',
        sTipo= 'EQUIPAJE',
        ssFechaCompra= '2021-06-21T00:14:16.735Z',
        ssIdTransaccion= '000000000000000'

    addTransaccionToSystem(
        sIdPedido, 
        sNoArticulos,
        sColor,
        sCosto,
        sDetalles,
        sMaterial,
        sNoPiezas,
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