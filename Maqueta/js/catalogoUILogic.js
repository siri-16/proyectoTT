var opAlgoritmo = document.getElementById("opAlgoritmo").value,
    opCifrado = document.getElementById("opCifrado").value,
    opPeriodo = document.getElementById("opPeriodo").value,
    opRFC= document.getElementById("txtRfcConfirmada").value,
    opCosto= document.getElementById("tcosto").value

$(document).ready(function(){
    $(".buttonShowInfo").click(function(){
        var talg = document.createElement('talgoritmo')
        talg.innerHTML= opAlgoritmo
        document.getElementById("talgoritmo").appendChild(talg);

        var tcif = document.createElement('tcifrado')
        tcif.innerHTML= opCifrado
        document.getElementById("tcifrado").appendChild(tcif);

        var tper = document.createElement('tperiodo')
        tper.innerHTML= opPeriodo
        document.getElementById("tperiodo").appendChild(tper);

        $(".tablaElecciones").slideToggle("slow");
        //$(".tablaElecciones").toggle("slow");
        return false;
    });
});

document.querySelector('#buttonContratar').addEventListener('click', guardarServicio)

function guardarServicio(){
    var opDescripcion= 'Servicio de tokenizacion con algoritmo '+opAlgoritmo+', y por periodo de '+opPeriodo;
    agregarServicioAUsuario(
        opAlgoritmo,
        opCifrado,
        opCosto,
        opDescripcion,
        opRFC,
        opPeriodo
    );
}