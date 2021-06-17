/*
//Funções após a leitura do documento
$(document).ready(function() {
    //Select para mostrar e esconder divs
    $('#SelectOptions').on('change',function(){
        var SelectValue='.'+$(this).val();
        $('.DivPai div').hide();
        $(SelectValue).toggle();
    });
});
*/


//Funções após a leitura do documento
$(document).ready(function() {
    //Select para mostrar e esconder divs
    $('#select').on('change',function(){
        var SelectValue='.'+$(this).val();
        $('.tc div').hide();
        $(SelectValue).toggle();
        const button = document.getElementById('uno');
        //button.show();
        $('.1').children('selectValor').show();
    });
});


