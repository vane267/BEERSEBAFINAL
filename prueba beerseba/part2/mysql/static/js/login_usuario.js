/*
Variables defined with const cannot be Redeclared
Variables defined with const cannot be Reassigned
Variables defined with const have Block Scope
*/

const email = document.getElementById("email")
const pass = document.getElementById("password")
const form = document.getElementById("mylogin")
const pEmail = document.getElementById("warning-mail")
const pPass = document.getElementById("warning-password")

const ExpRegEmail = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i                         /*expresion regular para el email*/        
const expRegPass = /^(?=.*\d)(?=.*[\u0021-\u002b\u003c-\u0040])(?=.*[A-Z])(?=.*[a-z])\S{8,16}$/         /*Expresion regular para que la contraseña contenga la primera letra mayuscula y al menos un numero*/

form.addEventListener("submit", prueba1)        /* Evento que espera el submit para ejecutar funcion */
function prueba1(event){                        /*Parametro necesario para asociarlo al metodo */

    event.preventDefault()                      /* Metodo que previene de enviar el form */

        let warningA = ""
        let warningB = ""
        
        let entrar = false                      /*inicializa la variable en falso */
                                                /*metodo test, true si es correcto, false si es incorrecto */
        if(!ExpRegEmail.test(email.value)){                 /*Niega la el resultado del regex */
            warningA += 'El Email no es valido <br>';       /*Concatena el string */ 
            entrar = true                                   /*Cambia el valor de la variable */
        }
    
        if (!expRegPass.test(pass.value)){                  /*Niega la el resultado del regex */
            warningB += 'La contraseña no es válida <br> Primera letra mayuscula y debe contener al menos un número'
            entrar = true                                   /*Cambia el valor de la variable */
        }
    
        if (entrar){
            pEmail.innerHTML = warningA                     /*Agrega el string a la etiqueta con el id declarado*/
            pPass.innerHTML = warningB                      /*Agrega el string a la etiqueta con el id declarado*/
            
        } else {
            sessionStorage.setItem("logueado", "Successfull"); /*Metodo para reclarar una key y un value*/
            window.location.href = "homepage (1).html";        /*Dirige a la URL declarada*/
        }
    
    
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

