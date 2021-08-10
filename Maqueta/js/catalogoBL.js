var opRFC= document.getElementById("txtRfcConfirmada").value

// URL PARA CORRER DE MANERA LOCAL
//const url= 'http://localhost:8088/Tokenizer/Clientes/'+opRFC+'/Servicios'

//URL PARA CORRER DESDE LA INSTANCIA DE AWS
const url= 'http://ec2-52-15-131-99.us-east-2.compute.amazonaws.com:8088/Tokenizer/Clientes/'+opRFC+'/Servicios'

    function agregarServicioAUsuario(
        palgoritmo,
        pcifrado,
        pcosto,
        pdescripcion,
        prfc,
        pperiodo
        ){
            var nuevoServicio={
                "algoritmo": palgoritmo,
                "cifrado": pcifrado,
                "contrato": null,
                "costoServicioAnual": pcosto,
                "descripcion": pdescripcion,
                "fechaActualizacion": null,
                "fechaCreacion": null,
                "habilitado": true,
                "servicioPK": {
                  "numeroContrato": null,
                  "rfc": prfc
                },
                "tipoServicio": pperiodo
            }
              
              
        fetch(url, {
            method: 'POST',
            body: JSON.stringify(nuevoServicio),
            headers: {
                "Content-type": "application/json"
            }
        })
            .then(res => res.json())
            .then(data => console.log(data))

    }