const cipher = {
  
  encode: function (texto1, desplazamiento) {
    
    let resultado = "";
    const despla = parseInt(desplazamiento);


    for(let i=0; i<texto1.length; i++){
      const letra = texto1[i];
      const asciNum = letra.charCodeAt();
      const nuevaLetra = asciNum + despla;
      
      if(nuevaLetra>=65 && nuevaLetra <=90){
        resultado += String.fromCharCode(nuevaLetra);

    
        } else if (nuevaLetra>90 && nuevaLetra< 122){
          const nuevaLetra2 = (nuevaLetra - 26);
          resultado += String.fromCharCode(nuevaLetra2);


        } else{
          resultado += texto1[i];
        }
        
        
        
      } 
      
      return resultado;
      },
      
       
  
 
  decode: function (texto2, desplazamiento){
    let resultado = "";
    const despla = parseInt(desplazamiento);


    for(let i=0; i<texto2.length; i++){
      const letra = texto2[i];
      const asciNum = letra.charCodeAt();
      const nuevaLetra = asciNum - despla;
      
      if(nuevaLetra>=65 && nuevaLetra <=90){
        resultado += String.fromCharCode(nuevaLetra);

    
        } else if (nuevaLetra>90 && nuevaLetra< 122){
          const nuevaLetra2 = (26- nuevaLetra);
          resultado += String.fromCharCode(nuevaLetra2);


        } else{
          resultado += texto2[i];
        }
        
        
        
      } 
      
      return resultado;
   
  


   }
  }
export default cipher;
