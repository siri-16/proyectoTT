const url= 'http://localhost:8088/Tokenizer/Clientes//CODN100000MDF/Servicios'

const urlU= ''

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

    function obtenerUsuario(){}