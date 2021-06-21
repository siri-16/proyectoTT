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
  
    fetch(url, {
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