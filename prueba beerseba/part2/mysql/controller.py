
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
    return render_template('homepage.html',param=param)