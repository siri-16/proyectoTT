const urlServicio= 'http://localhost:8088/Tokenizer/Tokens/JTF836412700'
const urlTienda= 'http://localhost:8077/Joyeria/Pedidos/'

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
            //regresar el token a donde fue llamada la funcion return data.token;
        }

     
    function addTransaccionToSystem(
        pIdPedido,
        pNoArticulos,
        pColor,
        pCosto,
        pDetalles,
        pNombre,
        pIdPedido,
        pIdProducto,
        pTipo,
        pTotal,
        pClienteComprador,
        pCorreoClienteComprador,
        pFechaCompra,
        pToken,
        pIdPedido,
        pIdTransaccion
        ){
            var nuevaCompra = {
                "idPedido": pIdPedido,
                "noArticulos": pNoArticulos,
                "productoList": [
                  {
                    "color": pColor,
                    "costo": pCosto,
                    "detalles": pDetalles,
                    "nombre": pNombre,
                    "productoPK": {
                      "idPedido": pIdPedido,
                      "idProducto": pIdProducto
                    },
                    "tipo": pTipo
                  }
                ],
                "total": pTotal,
                "transaccionList": [
                  {
                    "clienteComprador": pClienteComprador,
                    "correoClienteComprador": pCorreoClienteComprador,
                    "fechaDeCompra": pFechaCompra,
                    "token": pToken,
                    "transaccionPK": {
                      "idPedido": pIdPedido,
                      "idtransaccion": pIdTransaccion
                    }
                  }
                ]
              }
            fetch(urlTienda, {
                method: 'POST',
                body: JSON.stringify(nuevaCompra),
                headers: {
                    "Content-type": "application/json"
                }
            })
                .then(res => res.json())
                .then(data => console.log(data))
        }