const textarea=document.getElementById("textarea");
const textareaSal=document.getElementById("textarea-salida");
const botonEncriptar=document.getElementById("encriptar");
const botonDesencriptar=document.getElementById("desencriptar");
const contenedorSinTxt=document.getElementsByClassName("sin-txt");
const contenedorConTxt=document.getElementsByClassName("con-txt");
const botoncopiar=document.getElementById("copiar");
const botonSwitch=document.getElementById("switch");
function encriptar(){
    var texto=textarea.value.toLowerCase();
    var txtCifrado = texto.replace(/e/igm,"enter").replace(/o/igm,"ober").replace(/i/igm,"imes").replace(/a/igm,"ai").replace(/u/igm,"ufat");
    return txtCifrado;
}
function desencriptar(){
    var texto=textarea.value.toLowerCase();
    var txtCifrado = texto.replace(/enter/igm,"e").replace(/ober/igm,"o").replace(/imes/igm,"i").replace(/ai/igm,"a").replace(/ufat/igm,"u");
    return txtCifrado;
}
function textareaTiempoReal(valor){
    if(valor.length==0){
        contenedorSinTxt[0].style.display="flex";
        contenedorConTxt[0].style.display="none";
    }
}
function copiarAlPortapapeles(clase) {

    // Crea un campo de texto "oculto"
    var aux = document.createElement("input");
  
    // Asigna el contenido del elemento especificado al valor del campo
    aux.setAttribute("value", document.getElementById(clase).innerHTML);
  
    // Añade el campo a la página
    document.body.appendChild(aux);
  
    // Selecciona el contenido del campo
    aux.select();
  
    // Copia el texto seleccionado
    document.execCommand("copy");
  
    // Elimina el campo de la página
    document.body.removeChild(aux);
  
  }
botonEncriptar.addEventListener("click",() =>{
    if(textarea.value.length != 0){
        contenedorSinTxt[0].style.display="none";
        contenedorConTxt[0].style.display="flex";
        textareaSal.textContent=encriptar();
    }
});

botonDesencriptar.addEventListener("click",()=>{
    if(textarea.value.length != 0){
    contenedorSinTxt[0].style.display="none";
    contenedorConTxt[0].style.display="flex";
    textareaSal.textContent=desencriptar();
    }
});
botoncopiar.addEventListener("click",()=>{
    copiarAlPortapapeles("textarea-salida");
});
botonSwitch.addEventListener("click",()=>{
    document.body.classList.toggle("dark");
    botonSwitch.classList.toggle("active");
    if(document.body.classList.contains('dark')){
        localStorage.setItem('modo-dark','true'); 
    }else{
        localStorage.setItem('modo-dark','false');
    }
});

if(localStorage.getItem('modo-dark')=== 'true'){
    document.body.classList.add("dark");
    botonSwitch.classList.add("active");
}else{
    document.body.classList.remove("dark");
    botonSwitch.classList.remove("active");
}

