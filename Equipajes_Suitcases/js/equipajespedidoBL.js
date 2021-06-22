function addTransaccionToSystem(
    pIdPedido, 
    pNoArticulos, 
    pColor, 
    pCosto, 
    pDetalles,
    pMaterial,
    pNoPiezas,
    pNombre, 
    pIdProducto, 
    pTipo, 
    pTotal, 
    pClienteComprador, 
    pCorreoClienteComprador, 
    pFechaCompra, 
    pToken,  
    pIdTransaccion
    ){
    var nuevaCompra = {
      "idPedido": pIdPedido,
      "noArticulos": pNoArticulos,
      "productoList": [
        {
          "color": pColor,
          "costo": pCosto,
          "detallesTamanio": pDetalles,
          "material": pMaterial,
          "noPiezas": pNoPiezas,
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
  
    fetch('http://localhost:8099/Maletas/Pedidos/', {
      method: 'POST',
      body: JSON.stringify(nuevaCompra),
      headers: {
        "Content-type": "application/json"
      }
    })
      .then(res => res.json())
      .then(data => console.log(data))
  }