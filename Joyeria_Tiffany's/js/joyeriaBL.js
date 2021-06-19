//const url= 'http://Servicio
//const url= 'http://Tienda

    function solicitarToken(
        pPan,
        pRfc,
        pFechaActualizacion,
        pFechaCreacion,
        pIdTransaccion,
        pToken,
        pVigencia
        ){
            var newTokenPAN = {
                "pan": pPan,
                "rfc": pRfc,
                "fechaActualizacion": pFechaActualizacion,
                "fechaCreacion": pFechaCreacion,
                "idTransaccion": pIdTransaccion,
                "token": pToken,
                "vigencia": pVigencia
            }
            fetch(urlServicio, {
                method: 'POST',
                body: JSON.stringify(newTokenPAN),
                headers: {
                    "Content-type": "application/json"
                }
            })
                .then(res => res.json())
                .then(data => console.log(data))
        }

     
    function addTransaccionToSystem(
        pIdtransaccion, 
        pIdPedido, 
        pFechaCompra,
        pClienteComprador,
        pCorreoClienteComprador,
        pToken
        ){
            var nuevaTransaccion = {
                "idtransaccion": pIdTransaccion,
                "idPedido": pIdPedido,
                "fechaCompra": pFechaCompra,
                "clienteComprador": pClienteComprador,
                "correoClienteComprador": pCorreoClienteComprador,
                "token": pToken
            }
            fetch(urlTienda, {
                method: 'POST',
                body: JSON.stringify(nuevaTransaccion),
                headers: {
                    "Content-type": "application/json"
                }
            })
                .then(res => res.json())
                .then(data => console.log(data))
        }