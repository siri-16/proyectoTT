document.querySelector('#buttonIngreso').addEventListener('click', verificarUC)

function verificarUC(){
    var sNombreUsuario = document.querySelector('#exampleInputUser').value,
        sContrasenia = document.querySelector('#exampleInputPassword').value
        consultarUsuario(sNombreUsuario, sContrasenia);
}