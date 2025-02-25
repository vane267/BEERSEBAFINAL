

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


/* Funcion para cambiar de lugar el desplegable2 del conetender nav-bar al pegar_1 */
function dropdown_2(){
    const winwidth = window.innerWidth;                                           /* Ejecuta la funcion */
    const navmove = document.getElementById("nav-adicional")                      /* Id de la etiqueta que se movera*/
    const space1 = document.getElementById("pegar_1")                             /* Id contenedor izquierda del logo*/
    const space2 = document.getElementById("nav-bar")                             /* Id contenedor derecha de logo*/
    if(600 > winwidth){
        console.log("es menor que 600")                                         /*log para probar el evento*//*log*/
        space1.appendChild(navmove)                                             /*mueve al espacio 2*/
        document.getElementById("nav-adicional").style.display ="grid";         /*alineados uno debajo de otro*/
    }
    else if(600 <= winwidth){
        console.log("es mayor que 600")                                         /*log para probar el evento*/
        space2.appendChild(navmove)                                             /*mueve al espacio 2*/
        document.getElementById("nav-adicional").style.display ="flex";         /*alineados uno al lado del otro*/
    }
}   


/* Funcion que verifica Si estas logueado para decidir si mostrar la parte1 o parte2 */
function check_dropdown(){

    if (sessionStorage.getItem("logueado")==null){                              /* Verifica si existe la variable del navegador*/
        console.log("no esta logueado")                                         /*log para probar el evento*/
        document.getElementById("parte2").style.display ="none";                /*Oculta y no mantiene el espacio del contenedor parte2*/
        document.getElementById("parte1").style.display ="inline";              /*Muestra y ocupa un nuevo espacio del contenedor parte1*/
    }
    else{
        document.getElementById("parte1").style.display ="none";                /*Oculta y no mantiene el espacio del contenedor parte1*/
        document.getElementById("parte2").style.display ="inline";              /*Muestra y ocupa un nuevo espacio del contenedor parte2*/

    }
}


/* Borra la variable del navegador que verifica la funcion check_dropdown */
function salirSesion(){
    sessionStorage.removeItem("logueado");                                      /* Borra variable del navegador*/
    window.location.href = "homepage (1).html";                                 /* Te lleva a la homepage (1) */
}

/*DROPDOWN PERFIL*/





/*Eventos cargardos al iniciar el html */
function cargar_eventos(){    
    check_dropdown()                                                            /* Ejecuta la funcion */
    dropdown_2()                                                                /* Ejecuta la funcion */
    window.addEventListener("resize",dropdown_2);                               /* Evento que sondea el width de la ventana */
    document.getElementById("salir").addEventListener("click",salirSesion)      /* Evento que se ejecuta al hacer click*/

}




