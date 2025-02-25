
from flask import request, session,redirect,render_template
from datetime import datetime
from model import *
from werkzeug.utils import secure_filename
import os
from uuid import uuid4
from appConfig import config


def home_pagina(param): 
    ''' Info:
      Carga la pagina home.
      Recibe 'param' el diccionario de parametros
      Retorna la pagina 'home' renderizada.
    '''
    return render_template('homepage.html', param=param)
























































def registro_pagina(param):
    '''info:
        Carga la pagina 'register'
    '''
    return render_template('registrarse.html',param=param)

def ValidarFormularioRegistro(di):
    res=True
    res= res and di.get('nombre')!=""
    res= res and di.get('apellido')!=""
    res= res and di.get('email')!=""
    res= res and di.get('password')!=""
    return res
def registrarUsuario(param,request):
    '''info:
      Realiza el registro de un usuario en el sistema, es decir crea un nuevo usuario
      y lo registra en la base de datos.
      recibe 'param' el diccionario de parámetros.
      recibe request es la solicitud (post o get) proveniente del cliente
      retorna la pagina del login, para forzar a que el usuario realice el login con
      el usuario creado.
    '''
    mirequest={}
    getRequet(mirequest)
    
    if ValidarFormularioRegistro(mirequest):
        # CONSULTA A LA BASE DE DATOS: Realiza el insert en la tabla usuario
        if crearUsuario(mirequest):
            param['succes_msg_login']="Se ha creado el usuario con exito"
            cerrarSesion()           # Cierra sesion existente(si la hubiere)
            res=login_pagina(param)  # Envia al login para que vuelva a loguearse el usuario
        else:
            param['error_msg_register']="Error: No se ha podido crear el usuario"
            res=registro_pagina(param)
    else:
        param['error_msg_register']="Error: Problema en la validacion de los campos"
        res=registro_pagina(param)

    return res 





































##########################################################################
# + + I N I C I O + + MANEJO DE  SESSION + + + + + + + + + + + + + + + + +
##########################################################################

def cargarSesion(dicUsuario):
    '''info:
        Realiza la carga de datos del usuario
        en la variable global dict 'session'.
        recibe 'dicUsuario' que es un diccionario con datos
               de un usuario.
        Comentario: Usted puede agregar en 'session' las claves que necesite
    '''

    session['id_usuario'] = dicUsuario['id']
    session['nombre']     = dicUsuario['nombre']
    session['apellido']   = dicUsuario['apellido']
    session['username']   = dicUsuario['username'] # es el mail
    session['imagen']     = ""
    session['rol']        = ""
    session["time"]       = datetime.now()  

def crearSesion(request):
    '''info:
        Crea una sesion. Consulta si los datos recibidos son validos.
        Si son validos carga una sesion con los datos del usuario
        recibe 'request' una solicitud htpp con los datos 'email' y 'pass' de 
        un usuario.
        retorna True si se logra un session, False caso contrario
    '''
    sesionValida=False
    mirequest={}
    try: 
        #Carga los datos recibidos del form cliente en el dict 'mirequest'.          
        getRequet(mirequest)
        # CONSULTA A LA BASE DE DATOS. Si usuario es valido => crea session
        dicUsuario={}
        if obtenerUsuarioXEmailPass(dicUsuario,mirequest.get("username"),mirequest.get("password")):
            # Carga sesion (Usuario validado)
            cargarSesion(dicUsuario)
            sesionValida = True
    except ValueError:                              
        pass
    return sesionValida

def haySesion():  
    '''info:
        Determina si hay una sesion activa observando si en el dict
        session se encuentra la clave 'username'
        retorna True si hay sesión y False si no la hay.
    '''
    return session.get("username")!=None

def cerrarSesion():
    '''info:
        Borra el contenido del dict 'session'
    '''
    try:    
        session.clear()
    except:
        pass

##########################################################################
# - - F I N - - MANEJO DE  SESSION - - - - - - - - - - - - - - - - - - - -
##########################################################################




















##########################################################################
# + + I N I C I O + + MANEJO DE  REQUEST + + + + + + + + + + + + + + + + +
##########################################################################

def getRequet(diResult):
    if request.method=='POST':
        for name in request.form.to_dict().keys():
            li=request.form.getlist(name)
            if len(li)>1:
                diResult[name]=request.form.getlist(name)
            elif len(li)==1:
                diResult[name]=li[0]
            else:
                diResult[name]=""
    elif request.method=='GET':  
        for name in request.args.to_dict().keys():
            li=request.args.getlist(name)
            if len(li)>1:
                diResult[name]=request.args.getlist(name)
            elif len(li)==1:
                diResult[name]=li[0]
            else:
                diResult[name]=""     