
/* https://regexr.com/3a2i5 */
const pattern_mail = /([\w\.]+)@([\w\.]+)\.(\w+)/

/* Validación de campo (1º Nombre).
Permite incluir:
-Un nombre normal o compuesto.
-Caracteres alfabeticos ("Ñ, ñ y ü").
-Uso de prep, contrac. y art.
-Uso de Iniciales. */
const pattern_nombre = /^[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ]+(?:\s+[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ]+){1,5}(?:\s+[-\sa-zA-ZáéíóúÁÉÍÓÚüÜñÑ]+)?$/


/* Validación de campo (1º Apellido).
Permite incluir:
-Un apellido normal o compuesto.
-Caracteres alfabeticos ("Ñ, ñ y ü").
-Uso de prep. "de ó De ó Del" delante, contrac. y art.
-Uso de Iniciales.
-Ver ejemplos. */
const pattern_apellido = /^[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ]+(?:\s+[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ]+){1,5}(?:\s+[-\sa-zA-ZáéíóúÁÉÍÓÚüÜñÑ]+)?$/

/* 8 digitos*/
const pattern_dni = /\d{8}/

/* 10 digitos*/
const pattern_celular = /\d{10}/

/*La contraseña debe tener:
Al entre 8 y 16 caracteres, 
Al menos un dígito, al menos una minúscula, 
Al menos una mayúscula y 
Al menos un caracter no alfanumérico*/
const pattern_clave = /^(?=.*\d)(?=.*[\u0021-\u002b\u003c-\u0040])(?=.*[A-Z])(?=.*[a-z])\S{8,16}$/


function alerta_error(id,alerta,rege){
    /*Pinta el campo para validar */
    var idele = document.getElementById(id)
    idele.setAttribute("style", "background-color: white")

    /*Devuelve en consola para validar */
    var idele = document.getElementById(id).value
    var testreg = rege.test(idele)
    var alertsh = document.getElementById(alerta)

    if(testreg || idele.length==0){
        console.log("mail correcto")
        alertsh.setAttribute("class","anular")
    } else{
        console.log("mail incorrecto")
        alertsh.setAttribute("class","aparecer")
    }

    /*Pinta el campo para validar */

}

function evento_1(){
    alerta_error("id_mail","alerta_mail",pattern_mail)
}

function evento_2(){
    alerta_error("id_nombre","alerta_nombre",pattern_nombre)
}

function evento_3(){
    alerta_error("id_apellido","alerta_apellido",pattern_apellido)
}

function evento_4(){
    alerta_error("id_dni","alerta_dni",pattern_dni)
}

function evento_5(){
    alerta_error("id_celular","alerta_celular",pattern_celular)
}

function evento_6(){
    alerta_error("id_clave","alerta_clave",pattern_clave)
}


function validar_todo(){

    /* valida el checkbox y el select */
    var idselect = document.getElementById("id_seleccionar")
    if (idselect.value=="0"){
        var aleselect = document.getElementById("alerta_seleccionar")
        aleselect.setAttribute("class","aparecer")
    }

    var idselect = document.getElementById("id_box4")
    if (idselect.checked==false){
        var aleselect = document.getElementById("alerta_box")
        aleselect.setAttribute("class","aparecer")
    }

    /* valida que no haya campos vacios */
    var idselect = document.getElementById("id_mail").value
    var aleselect = document.getElementById("alerta_mail")
    if(idselect==""){
        aleselect.setAttribute("class","aparecer")
    }

    var idselect = document.getElementById("id_nombre").value
    var aleselect = document.getElementById("alerta_nombre")
    if(idselect==""){
        aleselect.setAttribute("class","aparecer")
    }

    var idselect = document.getElementById("id_apellido").value
    var aleselect = document.getElementById("alerta_apellido")
    if(idselect==""){
        aleselect.setAttribute("class","aparecer")
    }

    var idselect = document.getElementById("id_dni").value
    var aleselect = document.getElementById("alerta_dni")
    if(idselect==""){
        aleselect.setAttribute("class","aparecer")
    }

    var idselect = document.getElementById("id_celular").value
    var aleselect = document.getElementById("alerta_celular")
    if(idselect==""){
        aleselect.setAttribute("class","aparecer")
    }

    var idselect = document.getElementById("id_clave").value
    var aleselect = document.getElementById("alerta_clave")
    if(idselect==""){
        aleselect.setAttribute("class","aparecer")
    }

    /* si existe algun clase "aparecer", envia una alerta */
    idselect = document.getElementsByClassName("aparecer")
    if (idselect.length==0){
        alert("Registro completado")
        window.location.href = "homepage2.html";
    } else{
        alert("Revisar las indicaciones resaltadas")
    }
    
}

function evento_7(){
    b=document.getElementById("alerta_box")
    b.setAttribute("class","anular")
}

function evento_8(){
    b = document.getElementById("alerta_seleccionar")
    b.setAttribute("class","anular")
}


function cargar_eventos(){

    /* alertas de mail, nombre, apellido, dni, celular y clave con regex
    event blur = An element loses focus */
    document.getElementById("id_mail").addEventListener("blur", evento_1);
    document.getElementById("id_nombre").addEventListener("blur", evento_2);
    document.getElementById("id_apellido").addEventListener("blur", evento_3);
    document.getElementById("id_dni").addEventListener("blur", evento_4);
    document.getElementById("id_celular").addEventListener("blur", evento_5);
    document.getElementById("id_clave").addEventListener("blur", evento_6);

    /* boton registrarme*/
    document.getElementById("id_button").addEventListener("click", validar_todo);

    /* borra la alerta el checkbox y el select */
    document.getElementById("id_box4").addEventListener("click", evento_7);    
    document.getElementById("id_seleccionar").addEventListener("input", evento_8);
}

/*Evento cargado desde el HTML*/
function openNav() {    
    document.getElementById("nav1").style.width = "250px";                      /*Modifica el contenedor del desplegable1*/
    document.getElementById("nav1").style.height = "100%";                      /*Modifica el contenedor del desplegable1*/
    document.getElementById("mySidebar").style.display ="grid";                 /*Muestra y ocupa un nuevo espacio del desplegable1*/
    document.getElementById("barra-desplegable").style.visibility = "hidden";   /*Oculta y mantiene el espacio cuando se despliega boton ☰*/
}

/*Evento cargado desde el HTML*/
function closeNav() {
    document.getElementById("nav1").style.width = "0";                          /*Modifica el contenedor del desplegable1*/
    document.getElementById("nav1").style.height = "0";                         /*Modifica el contenedor del desplegable1*/
    document.getElementById("mySidebar").style.display = "none";                /*Oculta y no mantiene el espacio el desplegable1*/
    document.getElementById("barra-desplegable").style.visibility = "visible";  /*Muestra y no ocupa un nuevo espacio cuando se despliega boton ☰*/
}