import os
from flask import Flask, render_template, request, redirect, session, flash, url_for  
from controller import *
from werkzeug.utils import secure_filename

def route(app):    
    @app.route("/")
    @app.route("/home")
    def home():
        ''' Info:
          Carga la pagina del home
        '''
        param={} 
        return home_pagina(param)   
    
    





















































    @app.route("/Registrarse")
    def register():
        ''' Info:
          Carga la pagina para el registro del usuario
        '''
        param={}
        return registro_pagina(param)  
    

    

        