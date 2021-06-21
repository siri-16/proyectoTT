const url= 'http://localhost:8088/Tokenizer/Tokens/JTF836412700'

function solicitarToken(pPan, pRfc, pFechaActualizacion, pFechaCreacion, pIdTransaccion, pToken, pVigencia){
    var newTokenPAN = {
      "fechaActualizacion": pFechaActualizacion,
      "fechaCreacion": pFechaCreacion,
      "idTransaccion": pIdTransaccion,
      "token": pToken,
      "tokenPANPK": {
        "pan": pPan,
        "rfc": pRfc
      },
      "vigencia": pVigencia
    }
    var t;
    fetch(url, {
      method: 'POST',
      body: JSON.stringify(newTokenPAN),
      headers: {
        "Content-type": "application/json"
      }
    })
      //.then(res => res.json())
      .then(res => {
                    const datosRecibidosPorServidor = JSON.parse(res.data);
                    return t = datosRecibidosPorServidor.token;
      });            //regresar el token a donde fue llamada la funcion return data.token;
}