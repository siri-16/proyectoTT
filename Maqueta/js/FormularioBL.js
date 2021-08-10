// URL PARA CORRER DE MANERA LOCAL
//const url= 'http://localhost:8088/Tokenizer/Clientes/formulario'

//URL PARA CORRER DESDE LA INSTANCIA DE AWS
const url= 'http://ec2-52-15-131-99.us-east-2.compute.amazonaws.com:8088/Tokenizer/Clientes/formulario'

    function addClienteToSystem(
        pnombreUsuario,
        prfc,
        pemail,
        pcontrasenia,
        pestado,
        pdelegacionMunicipio,
        pcodigoPostal,
        pcalle,
        pnumero,
        pprimerNombre,
        psegundoNombre,
        papellidoPaterno,
        papellidoMaterno,
        pnombreComercio,
        pregimen,
        prazonSocial,
        psucursal
        ){
        var newCliente = {
            "rfc": prfc,
            "descripcion": pnombreUsuario,
            "fechaCreacion": null,
            "habilitado": true,
            "fechaActualizacion": null,
            "tokenPANList": [],
            "usuarioList": [
                {
                    "contrasenia": pcontrasenia,
                    "email": pemail,
                    "usuarioPK": {
                        "nombreUsuario": pnombreUsuario,
                        "rfc": prfc
                    }
                }
            ],
            "persona": {
                "apellidoMaterno": papellidoMaterno,
                "apellidoPaterno": papellidoPaterno,
                "primerNombre": pprimerNombre,
                "rfc": prfc,
                "segundoNombre": psegundoNombre,
                "cliente": null
            },
            "servicioList": [],
            "direccionList": [
                {
                    "calle": pcalle,
                    "codigoPostal": pcodigoPostal,
                    "delegacionMunicipio": pdelegacionMunicipio,
                    "direccionPK": {
                        "idDireccion": "789654123147852",
                        "rfc": prfc
                    },
                    "estado": pestado,
                    "numero": pnumero
                }
            ],
            "comercio": {
                "rfc": prfc,
                "regimen": pregimen,
                "razonSocial": prazonSocial,
                "nombreComercio": pnombreComercio,
                "sucursal": psucursal,
                "cliente": null
            }
        }

        fetch(url, {
            method: 'POST',
            body: JSON.stringify(newCliente),
            headers: {
                "Content-type": "application/json"
            }
        })
            .then(res => res.json())
            .then(data => console.log(data))

    }