//bussinesLogic.js
//informacion de los objetos y funcionalidades propias del registro

//var persona = [];
//var comercio = [];
//var servicioList = [];
//var tokenPANList = [];
//var tokenPANPK = [];
//var usuarioList = [];
//var direccionList = [];

function addClienteToSystem(pnombreComercio, pdescripcion, pcontrasenia, pemail, pnombreUsuario, prfc, papellidoMaterno, papellidoPaterno, pprimerNombre, prfc, psegundoNombre, palgoritmo, pcifrado, pcontrato, pcostoServicioAnual, pdescripcion, pnumeroContrato, prfc, ptipoServicio,  pcalle, pcodigoPostal, pdelegacionMunicipio, pidDireccion, prfc, pestado, pnumero){

	var newCliente = {
		newComercio = {
			nombreComercio : pnombreComercio,
			descripcion : pdescripcion,
			fechaCreacion : null,
			habilitado : true,
			fechaAcualizacion : null
		},
		
		TokenPANList: [
			{
				fechaActualizacion: null,
				fechaCreacion: null,
				token0: null,
				tokenPANPK: {
					pan: null,
					rfc: null
				},
				vigencia : null
			}
		],

			
		newUsuario = [
			{
				contrasenia : pcontrasenia,
				email : pemail,

				newUsuarioPK = {
					nombreUsuario : pnombreUsuario,
					rfc : prfc
				}
			}			
		],
			
		newPersona = {
			apellidoMaterno : papellidoMaterno,
			apellidoPaterno : papellidoPaterno,
			primerNombre : pprimerNombre,
			rfc : prfc,
			segundoNombre : psegundoNombre
		},
			
		direccionList = [
			{
				calle : pcalle,
				codigoPostal : pcodigoPostal,
				delegacionMunicipio : pdelegacionMunicipio,
				direccionPK = {
					idDireccion : pidDireccion,
					rfc : prfc
				},
				estado : pestado,
				numero : pnumero,
				comercio : null	
			}
		]	
	}

	console.log(newCliente);
	clienteList.push(newCliente);
}

function getClientesList(){
	return clientesList;
}