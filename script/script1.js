function construccionCodigosUnicode(){

    //1) Array de los códigos decimal de tabla Unicode de los caracteres
    //del español minusculas, incluido el espacio -> " ".
    //No se aceptan ingreso de tildes ni mayúsculas
    //97 - 122, 32, 241

    //Construcción del array
    const codigosUnicodePermitidos=[];

    for(let i=97;i<=122;i++){
        codigosUnicodePermitidos.push(i);
    }

    codigosUnicodePermitidos.push(32);
    codigosUnicodePermitidos.push(241);

    return codigosUnicodePermitidos;
}


function validarMensaje(){ //Envía un mensaje del Resultado de la Validacion
    //Captura del mensaje
    let mensajeInput=document.getElementById("mensaje-entrada");
    mensajeTexto=mensajeInput.value;
    let resultadoValidacion="";
    
    
    //Validar si se ha escrito un texto
    if(mensajeTexto==""){
        resultadoValidacion="No ha escrito ningún mensaje";
    }
    //Validar cada caracter si su código decimal Unicode está dentro de los permitidos
    else { 
         const arreglo=construccionCodigosUnicode();
         for (let i=0;i<mensajeTexto.length;i++){
             if(arreglo.includes(mensajeTexto.charCodeAt(i))==false){
                 resultadoValidacion="Ha ingresado un caracter no permitido";
                 break;
             }
         }
     }

    return resultadoValidacion;

}

function encriptar(mensaje){
    let mensajeEncriptado="";
    
    mensajeEncriptado=mensaje.replaceAll('e','enter');
    mensajeEncriptado=mensajeEncriptado.replaceAll('i','imes');
    mensajeEncriptado=mensajeEncriptado.replaceAll('a','ai');
    mensajeEncriptado=mensajeEncriptado.replaceAll('o','ober');
    mensajeEncriptado=mensajeEncriptado.replaceAll('u','ufat');

    return mensajeEncriptado;
}


function copiarResultado(){
    let copyText=document.getElementById("mensaje-salida").innerText;

    navigator.clipboard.writeText(copyText)

}


function encriptarMensaje(){
    
    resultado=validarMensaje();
    if(resultado===""){
        
        //Ocultar tarjeta-sin-mensaje <div>
        document.getElementById("tarjeta-sin-mensaje").style.display="none";
        //Mostrar tarjeta-con-mensaje <div>
        document.getElementById("tarjeta-con-mensaje").style.display="initial";
        //Obtener el mensaje escrito id="mensaje-entrada" <textarea>
        mensaje=document.getElementById("mensaje-entrada").value;
        //reemplazar caracteres
        mensajeEncrip=encriptar(mensaje);
        //Imprimir el mensaje cambiado en id="mensaje-salida" <p>
        document.getElementById("mensaje-salida").innerHTML=mensajeEncrip;

    }
    else{
        alert(resultado);
    }

}

function desencriptar(mensaje){
    let mensajeDesencriptado="";

    mensajeDesencriptado=mensaje.replaceAll('ai','a');
    mensajeDesencriptado=mensajeDesencriptado.replaceAll('imes','i');
    mensajeDesencriptado=mensajeDesencriptado.replaceAll('enter','e');
    mensajeDesencriptado=mensajeDesencriptado.replaceAll('ober','o');
    mensajeDesencriptado=mensajeDesencriptado.replaceAll('ufat','u');

    return mensajeDesencriptado;
}


function desencriptarMensaje(){

    resultado=validarMensaje();
    if(resultado===""){
        
        //Ocultar tarjeta-sin-mensaje <div>
        document.getElementById("tarjeta-sin-mensaje").style.display="none";
        //Mostrar tarjeta-con-mensaje <div>
        document.getElementById("tarjeta-con-mensaje").style.display="initial";
        //Obtener el mensaje escrito id="mensaje-entrada" <textarea>
        mensaje=document.getElementById("mensaje-entrada").value;
        //reemplazar caracteres
        mensajeDesencrip=desencriptar(mensaje);
        //Imprimir el mensaje cambiado en id="mensaje-salida" <p>
        document.getElementById("mensaje-salida").innerHTML=mensajeDesencrip;

    }
    else{
        alert(resultado);
    }
}