const url= 'http://localhost:8088/Tokenizer/Clientes/%20/Usuarios/list'

function consultarUsuario(pNombreUsuario, pContrasenia){
    var newUsuario = {
                "contrasenia": pContrasenia,
                "email": null,
                "usuarioPK": {
                    "nombreUsuario": pNombreUsuario,
                    "rfc": null
                }
    }

    fetch(url)
        .then(res => res.ok ? Promise.resolve(res) : Promise.reject(res))
        .then(res => res.json())
        //.then(data => console.log(data))
        .then(res => {
            for (const userInfo of res) {
                var user= userInfo.usuarioPK.nombreUsuario;
                var pass= userInfo.contrasenia;
                if(user != pNombreUsuario && pass != pContrasenia){
                    console.log("USUARIO NO REGISTRADO");
                }else{
                    console.log("USUARIO REGISTRADO");
                    window.location="index.html";
                }
                
            }
        })
}