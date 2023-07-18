import cipher from './cipher.js';
window.addEventListener("load", inicio, true);

//const alfabeto = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
//var inputDecodificado = document.getElementById("message").value;
//var inputCodificado = document.getElementById("message2");

function inicio(){
    document.getElementById("message").addEventListener("keyup", function(){
        this.value = this.value.toUpperCase();
    
}, true);
}
function Encode(inputCodificado){
    
    
    var solved ="";
    for( var i= 0; i<inputCodificado.length; i++){
        var asciNum = inputCodificado.charCodeAt();
        if (asciNum >=65 && asciNum <= 77){
            solved += String.fromCharCode(asciNum + 3);

        }else{
        solved +=inputCodificado[i];
        
    } 

    }
    return solved;
    
    
}

function Decode(Decode){
    var solved ="";
    for (var i= 0; i<inputDecodificado.length; i++){
        var asciNum = inputDecodificado.charCodeAt();
        if (asciNum >= 78 && asciNum <=90){
            solved += String.fromCharCode(asciNum-3);
        }else{
            solved += Decode[i];
        }
    }

}
