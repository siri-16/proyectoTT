/*const formularioR = document.querySelector('.Container')

const url= 'http://localhost:8088/Tokenizer/Clientes/formulario'
fetch(url)
.then(res => res.json())
.then(data=> {
    data.forEach(Cliente=>{
        console.log(Cliente.rfc)
        const p = document.createElement('p')
        p.innerHTML= Cliente.rfc
        formularioR.appendChild(p)
    });
    console.log(data)
})
.catch(err => console.log(err))

fetch(url)
.then((response) =>{
    debugger
})*/

const button = document.getElementById('button')
const url= 'http://localhost:8088/Tokenizer/Clientes/formulario'
button.addEventListener('click', () => {
    const newCliente = {
        "rfc": "111145678932147",
        "descripcion": "Cliente de Joyería",
        "fechaCreacion": "2021-05-26T23:04:11.274+0000",
        "habilitado": true,
        "fechaActualizacion": "2021-05-27T23:05:01.998+0000",
        "tokenPANList": [],
        "usuarioList": [
            {
                "contrasenia": "contrasegura",
                "email": "joyeria@gmail.com",
                "usuarioPK": {
                    "nombreUsuario": "usuariodeJoyeria",
                    "rfc": "111145678932147"
                }
            }
        ],
        "persona": null,
        "servicioList": [],
        "direccionList": [
            {
                "calle": "Paseo de la Reforma",
                "codigoPostal": "00001",
                "delegacionMunicipio": "Cuauhtemoc",
                "direccionPK": {
                    "idDireccion": "000001223",
                    "rfc": "111145678932147"
                },
                "estado": "Ciudad de Mexico",
                "numero": "589"
            }
        ],
        "comercio": {
            "rfc": "111145678932147",
            "regimen": "General",
            "razonSocial": "Joyas Tiffanys, C.A.",
            "nombreComercio": "Joyeria Tiffanys",
            "sucursal": "Succ 01",
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
})