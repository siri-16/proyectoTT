//uiLogic.js
//manejo de la logica que se va a comunicar con la interfaz de usuario

document.querySelector('#btnSaveCliente').addEventListener('click', saveCliente);
drawClientesTable();

function saveCliente(){
	var sNombreComercio = document.querySelector('#txtNombreComercio').value,
		sDescripcion = document.querySelector('#txtDescripcion').value,
		sNull = document.querySelector('#txtNull').value,
		sTrue = document.querySelector('#txtTrue').value,
		sNull = document.querySelector('#txtNull').value,
		sNull = document.querySelector('#txtNull').value,
		sContrasenia = document.querySelector('#txtContrasenia').value,
	    sEmail = document.querySelector('#txtEmail').value,
		sNombreUsuario = document.querySelector('#txtNombreUsuario').value,
		sRfc = document.querySelector('#txtRfc').value,
		sApellidoMaterno = document.querySelector('#txtApellidoMaterno').value,
		sApellidoPaterno = document.querySelector('#txtApellidoPaterno').value,
		sPrimerNombre = document.querySelector('#txtPrimerNombre').value,
		sSegundoNombre = document.querySelector('#txtSegundoNombre').value,
		sCalle = document.querySelector('#txtCalle').value,
		sCodigoPostal = document.querySelector('#txtCodigoPostal').value,
		sDelegacionMunicipio = document.querySelector('#txtDelegacionMunicipio').value,
		sDireccion = document.querySelector('#txtDireccion').value,
		sRfc = document.querySelector('#txtRfc').value,
	    sEstado = document.querySelector('#txtEstado').value,
	    sNumero = document.querySelector('#txtNumero').value,
		sNull = document.querySelector('#txtNull').value
	
	addClienteToSystem(snombreComercio, sdescripcion, null, true,  null, null, scontrasenia, semail, snombreUsuario, srfc, sapellidoMaterno, sapellidoPaterno, sprimerNombre, srfc, ssegundoNombre, scalle, scodigoPostal, sdelegacionMunicipio, sidDireccion, srfc, sestado, snumero, null);
	drawClientesTable();
}

function drawClientesTable(){
	var list = getClienteList(),
		tbody = document.querySelector('#ClietesTable tbody');
		
	tbody.innerHTML = '';
	
	for(var i = 0; i < list.length; i++){
		var row = tbody.insertRow(i),
			nombreComercioCell = row.insertCell(0),
			descripcionCell = row.insertCell(1),
			contraseniaCell = row.insertCell(2),
			emailCell = row.insertCell(3),
			nombreUsuarioCell = row.insertCell(4),
			rfcCell = row.insertCell(5),
			apellidoMaterno = row.insertCell(6),
			apellidoPaterno = row.insertCell(7),
			primerNombre = row.insertCell(8),
			rfcCell = row.insertCell(9),
			segundoNombre = row.insertCell(10),
			calle = row.insertCell(11),
			codigoPostal = row.insertCell(12),
			delegacionMunicipio = row.insertCell(13),
			idDireccion = row.insertCell(14),
			rfcCell = row.insertCell(14),
			estado = row.insertCell(15),
			numero = row.insertCell(16),
			
			nombreComercioCell.innerHTML = list[i].username;
			descripcionCell.innerHTML = list[i].descripcion;
			contraseniaCell.innerHTML = list[i].contrasenia;
			emailCell.innerHTML = list[i].email;
			nombreUsuarioCell.innerHTML = list[i].username;
			rfcCell.innerHTML = list[i].rfc;
			apellidoMaternoCell.innerHTML = list[i].apellidoMaterno;
			apellidoPaternoCell.innerHTML = list[i].apellidoPaterno;
			primerNombreCell.innerHTML = list[i].primerNombre;
			rfcCell.innerHTML = list[i].rfc;
			segundoNombreCell.innerHTML = list[i].segundoNombre;
			calleCell.innerHTML = list[i].calle;
			codigoPostalCell.innerHTML = list[i].codigoPostal;
			delegacionMunicipioCell.innerHTML = list[i].delegacionMunicipio;
			idDireccionCell.innerHTML = list[i].idDireccion;
			rfcCell.innerHTML = list[i].rfc;
			estadoCell.innerHTML = list[i].estado;
			numeroCell.innerHTML = list[i].numero;
								
			var inputSelect = documento.createElement('input');
			inputSelect.type = 'radio';
			inputSelect.value = list[i].nombreUsuario;
			selectCell.appendChild(inputSelect);
		
			tbody.appendChild(row);
	}
}


//Cambios en index.html
//id="
//btnSaveCliente
//"
//<script src="js/businessLogic.js"></script>
//<script src="js/uiLogic.js"></script>