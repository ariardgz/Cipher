const cipher = {


  encode: function (desplazamiento, texto1) {

    let resultado = "";
    let despla = parseInt(desplazamiento);
    const letras = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    despla = (despla % 26 - 26) % 26;
   

    despla = (26 + despla) % 26 +26;

    if (texto1) {
      for (let i = 0; i < texto1.length; i++) {
        if (letras.indexOf(texto1[i]) !== -1) {
          const posicion = ((letras.indexOf(texto1[i]) + despla)%26);
          resultado += letras[posicion];
        }
        else {
          resultado += texto1[i];
        }
      }



    }
    return resultado;




  },



  decode: function (desplazamiento, texto2) {
   
    
    let resultado = "";
    let despla = parseInt(desplazamiento);
    const letras = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    despla = (despla % 26 - 26) % 26;

    

    if (texto2) {
      for (let i = 0; i < texto2.length; i++) {
        if (letras.indexOf(texto2[i]) !== -1) {
          const posicion = ((letras.indexOf(texto2[i]) - despla) % 26);
          resultado += letras[posicion];
        }
        else {
          resultado += texto2[i];
        }
      }



    }
    return resultado;






  }
}
export default cipher;
