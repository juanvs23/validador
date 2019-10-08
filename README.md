Este programa es un sencillo validador con react. Al colocar cualquier cadena o numero el componente <Validador/> Leera la informacion existente en el input solamente al presionar el Boton de "enviar". acto seguido el componente capta el evento onSubmit a travez de preventdefault previene el reload de la pagina y toma el valor del input  realizando una concional:

si el valor del input es numero (se realiza la prueba mediante  .test()) muestralo en pantalla, de lo contrario notifica al usuario que "el dato no es un numero" y limpia la pantalla
En todos los casos siempre se resetea el input al terminar la operacion
