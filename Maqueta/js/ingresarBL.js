const url= 'http://localhost:8088/Tokenizer/Clientes/%20/Usuarios/'

function consultarUsuario(pNombreUsuario, pContrasenia){
    var newUsuario = {
        "usuarioList": [
            {
                "contrasenia": pContrasenia,
                "email": null,
                "usuarioPK": {
                    "nombreUsuario": pNombreUsuario,
                    "rfc": prfc
                }
            }
        ]
    }

}
