# java-script
Repositorio creado para presentar las entregas de la comisión: #80845-javascript

### Descripción de la página:

#### PRIMERA ENTREGA

De momento la página "index.html" únicamente ejecuta "main.js" sobre una serie de instrucciones hacia el usuario para dar de alta un nuevo usuario. Se le solicitará datos como un nombre de usuario, un correo electrónico, un rol y una contraseña (que será validada reingresando la misma).
Se agregó una carpeta "DB" que dentro tiene 2 javaScript que exportan un array de valores uno es "roles", que son los roles permitidos y otro que es "usuarios" que consta de array de objetos, en éste caso, son una serie de usuarios pre-existentes.
Se agruparon las funciones dentro de la carpeta "funciones" en un archivo denominado "functions.js" para emprolijar minimamente el framework. Dentro se encuentran funciones locales y funciones que se exportan. Las mismas son utilizadas en "main.js".
El proyecto cuenta con funciones de validación de datos, booleanas, incluso para el ID del nuevo usuario se devuelve un valor de tipo "number".
Hay reutilización por lo que se cumple con la condición DRY.
También hay log de consola y se muestran los datos en pantalla mientras se va cargando el formulario y al finalizar el mismo.

#### SEGUNDA ENTREGA

El proyecto me agotó me llevo muchos días, muchas horas fines de semana, despues del laburo incluso durante el almuerzo. Mucha investigación!!!
Bien! solo quería decirlo, a continuación el detalle del proyecto: Se puede ver el progreso temporal con los commits, donde explico cada cambio que hago y por que. Por ejemplo en un momento use un .json y me di cuenta que GitHub Page no me bancaba la lectura asi que tuve que cambiar a .js

No use ningun .CSS, todos los estilos estan parametrizados en /components/styles/styles.js
Estandaricé los componentes "footer" "main" y "header" para modularizar bien la página y reutilizar, para eso tuve que investigar la inyección de componentes dentro de otros componentes y pude lograrlo!
Mantuve la DB como en la entrega anterior simulando una DataBase, pero me di cuenta que cuando estaba ejecutando y quería pushear un objeto dentro del array y no me dejo asi que tuve que usar Java Script con una variable y aun así me tope con el mismo problema, aunque lo declare "let" y NO "const" no podía meterle datos, asi que opte por aplicar la localStorage que no me gusta, pero a falta de base de datos real donde pueda meter y sacar info a mi gusto cuando arranco y renderizo el INDEX que es por donde arranca todo busco en la localStorage las keys tableUsersHeaders y tableUsersData, si no estan, las creo y les asigno los valores de la "tbl_usuarios" mas que nada para poblar la app y se vea como se supone que se debe ver.
En el index.html se ve la primer funcion donde hago cambios en la interfaz directamente visible para el usuario que es para cambiar la paleta de colores, el famoso "theme" variando entre "light" y "dark", este valor lo guardo en la localStorage para que permanezca viva la preferencia del usuario, asi que ya tenemos 3 cosas en la localStorage los headers de la tabla, la data de la tabla y el theme que prefiere el usuario. Doy por cumplido el punto de usar la Storage justo sobre la tabla de informacion de usuarios hay un botón de Crear Usuario el cual nos dirige al formulario que es donde ejecuto el grueso de todo lo que es las funcionalidades que se encuentran en functions/functions.js el formulario lo creo con objetos dinamicamente partiendo de la base que tengo la clase tbl_form_createuser.js dentro de /DB/ está el array de los componentes y de los roles (ya que roles es una lista) el mismo array de objetos tiene un indicador de que hay que validar en cada campo.
En éste formulario vemos los campos Nombre, Apellido, Email, Usuario y Rol (el objeto maneja tambien los campos "id" que es un identificador único y "active" con valores booleanos) y debajo disponemos de 3 botones (Cancelar, Limpiar y Crear Usuario), y debajo unas aclaraciones para el usuario.
Hago distintas validaciones, para los campos Nombre y Apellido tienen que ser obligatorios, aplique un listener para que cada vez que escriba valide que esta ingresando letras (mayusculas y/o minúsculas y espacios, nada mas sino no te deja escribir el caracter que quieras ingresar), luego en mail tiene que tener el formato correcto... algo @ algo.com, luego tiene que ingresar un usuario, éste es el único campo NO obligatorio, el mismo tiene que tener entre 8 y 15 caracteres y al final una lista desplegable que indica el rol, Administrador, Vendedor o Supervisor por defecto un "Seleccione..." Todas estas validaciones son de HTML.
El botón Cancelar simplemente vuelve a la vista anterior, en este caso al index, pero esta claro que tendrá un route mas robusto en el momento que crezca la página.
El botón Limpiar borra todos los campos, tantos los de tipo input como el campo select.
Por último el botón Crear Usuario dispara validateForm hace una serie de validaciones sobre el objeto user validando nuevamente cada campo (ahora por js, antes era por HTML) dentro de las mismas validaciones podemos encontrar que se valida que de la lista de usuarios los campos mail y/o usuario no existan, en el caso de existir hay una funcion de mostrar un modal por un tiempo color amarillo con un warning indicando que ya existe el usuario o el mail, solo cuando todos los campos esten aptos permitirá crear el usuario, los nombres y apellidos pueden repetirse, al crear el usuario se busca el mayor índice de los usuarios ya creados y se suma 1, asimismo el valor activo va a ser true (pues se acaba de crear el usuario), mas adelante se hará alguna funcion de inhabilitar al usuario que modificará éste valor.
Creo que se dijo todo, espero ser apto de una aprobación, no hay console.log, no hay prompt ni nada que interactue con el usuario mas que el DOM propio de la página.

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
