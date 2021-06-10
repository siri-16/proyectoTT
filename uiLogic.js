//uiLogic.js
//manejo de la logica que se va a comunicar con la interfaz de usuario

document.querySelector('#btnSaveCliente').addEventListener('click', saveCliente);
drawClientesTable();

function saveCliente(){
	var sUsername = document.querySelector('#txtUsername').value,
	    sRfc = document.querySelector('#txtRfc').value,
	    sEmail = document.querySelector('#txtEmail').value,
	    sPass1 = document.querySelector('#txtPass1').value,
	    sPass2 = document.querySelector('#txtPass2').value,
	    sState = document.querySelector('#txtState').value,
	    sDelomun = document.querySelector('#txtDelomun').value,
	    sCalle = document.querySelector('#txtCalle').value,
	    sNum = document.querySelector('#txtNum').value,
	    sNamecom = document.querySelector('#txtNamecom').value,
	    sReg = document.querySelector('#txtReg').value,
	    sRazsoc = document.querySelector('#txtRazsoc').value,
	    sSuc = document.querySelector('#txtSuc').value,
	    sName1 = document.querySelector('#txtName1').value,
	    sName2 = document.querySelector('#txtName2').value,
	    sAppat = document.querySelector('#txtAppat').value,
	    sApmat = document.querySelector('#txtApmat').value,


	addClienteToSystem(sUsername,sRfc,sEmail,sPass1,sPass2,sState,sDelomun, sCalle,sNum,sNamecom,sReg,sRazsoc,sSuc,sName1,sName2,sAppat,sApmat);
	drawClientesTable();
}

function drawClientesTable(){
	var list = getClienteList(),
		tbody = document.querySelector('#ClietesTable tbody');
		
	tbody.innerHTML = '';
	
	for(var i = 0; i < list.length; i++){
		var row = tbody.insertRow(i),
			usernameCell = row.insertCell(0),
			rfcCell = row.insertCell(1),
			emailCell = row.insertCell(2),
			pass1Cell = row.insertCell(3),
			pass2Cell = row.insertCell(4),
			stateCell = row.insertCell(5),
			delomunCell = row.insertCell(6),
			calleCell = row.insertCell(7),
			numCell = row.insertCell(8),
			namecomCell = row.insertCell(9),
			regCell = row.insertCell(10),
			razsocCell = row.insertCell(11),
			name1Cell = row.insertCell(12),
			name2Cell = row.insertCell(13),
			appatCell = row.insertCell(14),
			apmatCell = row.insertCell(15),
			selectCell = row.insertCell(16);
						
			
			usernameCell.innerHTML = list[i].username;
			rfcCell.innerHTML = list[i].rfc; 
			emailCell.innerHTML = list[i].email; 
			pass1Cell.innerHTML = list[i].pass1; 
			pass2Cell.innerHTML = list[i].pass2; 
			stateCell.innerHTML = list[i].state; 
			delomunCell.innerHTML = list[i].delomun; 
			numCell.innerHTML = list[i].num; 
			namecomCell.innerHTML = list[i].namecom; 
			regCell.innerHTML = list[i].reg;
			razsocCell.innerHTML = list[i].razsoc; 
			name1Cell.innerHTML = list[i].name1; 
			name2Cell.innerHTML = list[i].name2; 
			appatCell.innerHTML = list[i].appat; 
			apmatCell.innerHTML = list[i].apmat; 
			
			
			var inputSelect = documento.createELement('input');
			inputSelect.type = 'radio';
			inputSelect.value = list[i].username;
			selectCell.appendChild(inputSelect);
		
		
			tbody.appendChild(row);
	}

}





//Cambios en index.html
//id="
btnSaveCliente
//"
<script src="js/businessLogic.js"></script>
<script src="js/uiLogic.js"></script>
