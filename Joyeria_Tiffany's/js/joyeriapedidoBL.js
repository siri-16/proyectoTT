function addTransaccionToSystem(
  pIdPedido, 
  pNoArticulos, 
  pColor, 
  pCosto, 
  pDetalles, 
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
  ec2-13-58-32-61.us-east-2.compute.amazonaws.com
  fetch('http://ec2-13-58-32-61.us-east-2.compute.amazonaws.com:8077/Joyeria/Pedidos/', {
    method: 'POST',
    body: JSON.stringify(nuevaCompra),
    headers: {
      "Content-type": "application/json"
    }
  })
    .then(res => res.json())
    .then(data => console.log(data))
}