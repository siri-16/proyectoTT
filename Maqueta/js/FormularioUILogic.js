
document.querySelector('#buttonRegistro').addEventListener('click', saveCliente)

function saveCliente(){
	var sNombreUsuario = document.querySelector('#txtNombreUsuario').value,
        sRfc = document.querySelector('#txtRfc').value,
        sEmail = document.querySelector('#txtEmail').value,
        sContrasenia = document.querySelector('#txtContrasenia').value,
	    sEstado = document.querySelector('#txtEstado').value,
		sDelegacionMunicipio = document.querySelector('#txtDelegacionMunicipio').value,
        sCodigoPostal = document.querySelector('#txtCodigoPostal').value,
        sCalle = document.querySelector('#txtCalle').value,
        sNumero = document.querySelector('#txtNumero').value,
        
        sNombreComercio =  document.querySelector('#txtNombreComercio').value,
        sRegimen = document.querySelector('#txtRegimen').value,
        sRazonSocial = document.querySelector('#txtRazonSocial').value,
        sSucursal = document.querySelector('#txtSucursal').value,

        sPrimerNombre = document.querySelector('#txtPrimerNombre').value,
        sSegundoNombre = document.querySelector('#txtSegundoNombre').value,
        sApellidoPaterno = document.querySelector('#txtApellidoPaterno').value,
        sApellidoMaterno = document.querySelector('#txtApellidoMaterno').value

        if(sNombreComercio == null){
            addClienteToSystem(
                sNombreUsuario, 
                sRfc, 
                sEmail, 
                sContrasenia, 
                sEstado, 
                sDelegacionMunicipio, 
                sCodigoPostal, 
                sCalle,
                sNumero,
                sPrimerNombre, 
                sSegundoNombre,
                sApellidoPaterno,
                sApellidoMaterno,
                null,
                null,
                null,
                null
            );
        }else{
            addClienteToSystem(
                sNombreUsuario, 
                sRfc, 
                sEmail, 
                sContrasenia, 
                sEstado, 
                sDelegacionMunicipio,
                sCodigoPostal, 
                sCalle,
                sNumero,
                null,
                null,
                null,
                null,
                sNombreComercio,
                sRegimen,
                sRazonSocial,
                sSucursal
            );
        }
        alert("usuario registrado");        
        window.location="indexUsuario.html";
}