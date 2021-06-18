document.querySelector('#buttonShowInfo').addEventListener('click', mostrarInfo)
document.querySelector('#buttonContratar').addEventListener('click', guardarServicio)

function mostrarInfo(){
    var opAlgoritmo = document.getElementById("opAlgoritmo").value,
        opCifrado = document.getElementById("opCifrado").value,
        opPeriodo = document.getElementById("opPeriodo").value
        
    //const tablaA = document.createElement('tAlgoritmo')
    //console.log(tablaA)
    //tablaA.textContent= opAlgoritmo

    const tcif = document.createElement('tCifrado')
    tcif.innerHTML= opCifrado
    document.getElementById("tcifrado").appendChild(tcif);
}

function obtenerRFC(){
 //ObtenerUsuario

 //GET

}

function obtenerCosto(){}

function guardarServicio(){
	var opAlgoritmo = document.getElementById("opAlgoritmo").value,
        opCifrado = document.getElementById("opCifrado").value,
        opPeriodo = document.getElementById("opPeriodo").value
            agregarServicioAUsuario(
                opAlgoritmo,
                opCifrado,
                pcosto, //De función obtener costo
                pdescripcion,
                prfc, //De función obtener rfc
                opPeriodo
            );
}
