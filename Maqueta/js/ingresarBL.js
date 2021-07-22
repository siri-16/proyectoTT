// URL PARA CORRER DE MANERA LOCAL
// const url= 'http://localhost:8088/Tokenizer/Clientes/%20/Usuarios/list'

//URL PARA CORRER DESDE LA INSTANCIA DE AWS
const url= 'http://ec2-3-138-181-230.us-east-2.compute.amazonaws.com:8088/Tokenizer/Clientes/%20/Usuarios/list'

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
            var valor= 0;
            for (const userInfo of res) {
                var user= userInfo.usuarioPK.nombreUsuario;
                var pass= userInfo.contrasenia;
                if(user === pNombreUsuario && pass === pContrasenia){
                //    console.log("USUARIO NO REGISTRADO");
                //}else{
                    console.log("USUARIO REGISTRADO");
                    window.location="index.html";
                    return valor= 1;
                }else{
                    valor= 0;
                }
                
            }
            if(valor==0){
                alert("USUARIO O CONTRASEÑA NO VALIDOS");
            }
        })
        .catch((error) => {
            console.log(error)
        })
}