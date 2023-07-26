import cipher from './cipher.js';


//Codificar
const botonCodificar = document.querySelector("#cifrar");
const texto1 = document.querySelector("#message");
const desplazamiento = document.querySelector("#desplazamiento");

texto1.addEventListener("keyup", function () { this.value = this.value.toUpperCase() })
botonCodificar.addEventListener('click', capturaTexto)

function capturaTexto() {

  cipher.encode(texto1.value, desplazamiento.value);
  const Codificado = cipher.encode(texto1.value, desplazamiento.value);
  document.querySelector("#message2").value = Codificado;

}


//DEcodificar
const botonDecodificar = document.querySelector("#decifrar");
const texto2 = document.querySelector("#message2");

texto2.addEventListener("keyup", function () { this.value = this.value.toUpperCase() })
botonDecodificar.addEventListener('click', capturarTexto2)

function capturarTexto2() {

  cipher.decode(texto2.value, desplazamiento.value);
  const Decodificado = cipher.decode(texto2.value, desplazamiento.value);
  document.querySelector("#message").value = Decodificado;
}


