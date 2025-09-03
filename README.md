# java-script
Repositorio creado para presentar las entregas de la comisión: #80845-javascript

### Descripción de la página:

De momento la página "index.html" únicamente ejecuta "main.js" sobre una serie de instrucciones hacia el usuario para dar de alta un nuevo usuario. Se le solicitará datos como un nombre de usuario, un correo electrónico, un rol y una contraseña (que será validada reingresando la misma).
Se agregó una carpeta "DB" que dentro tiene 2 javaScript que exportan un array de valores (que son los roles) y un array de objetos (que son una serie de usuarios pre-existentes).
Se agruparon las funciones dentro de la carpeta "funciones" en un archivo denominado "functions.js" para emprolijar minimamente el framework. Dentro se encuentran funciones locales y funciones que se exportan. Las mismas son utilizadas en "main.js".
El proyecto cuenta con funciones de validación de datos, booleanas, incluso para el ID del nuevo usuario se devuelve un valor de tipo "number".
Hay reutilización por lo que se cumple con la condición DRY.
También hay log de consola y se muestran los datos en pantalla mientras se va cargando el formulario y al finalizar el mismo.

## Links:

[[Repo]](https://github.com/89pabloalvarez/java-script.git)

[[GitHub Page]](https://89pabloalvarez.github.io/java-script/)

## Roadmap

- 1 HTML que invoca main.js.

- Se utilizó una estructura de carpetas como framework; 'DB' para simular una DataBase, 'funciones' para agrupar las funciones definidas en ésta entrega (locales y exportadas).

- Se realizan distintos tipos de validaciones en las funciones, bucles hasta que el usuario ingrese bien el dato, mensajes acordes al error, validación de datos como por ejemplo usuario y mail que no existan dentro de un usuario existente.

- Se entiende que para fines prácticos de ésta entrega hay cosas como por ejemplo "mostrar la contraseña" al usuario que no se tomara en cuenta ya que no sería correcto a fines practicos mostrar ésa información sensible, simplemente se le diría "Las contraseña y la contraseña reingresada no cohinciden" sin mostrar nada más, es simplemente para demostrar que la función validó correctamente que se muestra (se quitará en una entrega final).

## Author

- [@paulrammone](https://www.linkedin.com/in/pablo-alvarez-bernardez/)