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

    fetch('http://localhost:8088/Tokenizer/Tokens/JTF836412700', {
      method: 'POST',
      body: JSON.stringify(newTokenPAN),
      headers: {
        "Content-type": "application/json"
      }
    })
    .then(res => res.ok ? Promise.resolve(res) : Promise.reject(res))
    .then(res => res.json())
    .then(res => {
        console.log('EEEEEEEEEEEEEEEEEEL TOOOOOOOOOOKEN'+res.token)
        return res.token;
    })
        //regresar el token a donde fue llamada la funcion return data.token;
}