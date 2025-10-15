# java-script
Repositorio creado para presentar las entregas de la comisión: #80845-javascript

### Descripción de la página:

La página es un componente de gestión de usuarios. Se aplican funciones javascript para abarcar distintas acciones, cambio de theme (para usar un modo light o dark), se implementaron la vista de la temperatura y la hora para el consumo de api's (fetch), se observa el componente HTML con la vista de la lista de usuarios, los mismos estan cargados en memoria, se obtienen de la "database" del proyecto como para tener unos usuarios en la carga inicial del aplicativo y se observan los datos de los mismos, nombre, apellido, usuario, email, rol y el estado (si estan activos o inactivos) se invocan funciones foreach y demás para el armado de los th y tr, se reemplaza un true/false por un circulo verde o rojo, se usa el ícono en la página en el tab del browser y una imagen .png en el pie de página para el manejo de imagenes (todo en javascript), el botón crear usuario te redirige a un nuevo html con un formulario para crear un nuevo usuario (es decir poblar la tabla de vista anterior), boton cancelar vuelve a la vista anterior sin hacer nada, botón limpiar te limpia todos los campos del formulario, crear usuario ejecuta la creación del usuario con los datos ingresados, debajo del formulario las aclaraciones para rellenar el mismo. Todo se maneja con la localStorage, tableHeaders, tableData, theme-preference, se ejecutan muchas validaciones sobre el usuario que se quiere crear, se crea dinamicamente el ID sobre el máximo ID ya existente (esto lo haría la DB en SQL como NEXTVAL pero bueno aca se simplifica en una func), el nombre y el apellido es obligatorio y puede repetirse sin problema, hay muchos "Pablo's" y muchos "Alvarez's" el mail es obligatoiro y el usuario no es obligatorio pero ambos dos se validan si ya existen en algun usuario, rol es una lista "vendedor", "administrador", "visualizador" incluso en la funcion de validación de creación de usuario se valida que sea uno de esos valores (se supone que la funcion imitaría una api, si se manda por postman un valor "fruta" en rol, debería rechazar.).


#### TERCERA ENTREGA (FINAL)

Realmente los conceptos básicos del curso estan implementados en la segunda entrega, lo que agrego aca es fetch (agregué 2 apis externas que son "worldtimeapi.org/api" y "www.meteosource.com/api"), la primera es para consultar la hora y la segunda es para consultar el clima; la primera es libre y la segunda necesitas una api_key (tiene 400 consumos gratuitos, dice "Free requests today: 11/400", asi que intuyo que son diarios por el "today"). Estuvo bastante interesante leer la documentación de las apis e ir armando a necesidad la url para consumir la api completando las variables que se necesitaban. despues formatear la respuesta y extraer la info que necesitaba estuvo muy bien tambien. Todo mostrado en el header. Actualizo el clima cada 30 minutos con un "setInterval" y la hora cada 1 minuto. (PACIENCIA QUE LAS APIS SON BASTANTE MALAS!! Más que nada por la api de la hora porque da ERR_CONNECTION_RESET a veces, no supe solucionarlo y es random! de todas formas esta controlado si falla.. mientras falle muestra un mensaje "Cargando Clima..." o "Cargando Hora...").
En adhesión al nuevo contenido para ésta entrega, reemplace los modals que desarrolle para que aparezcan como aviso para el usuario, como "mail ya existente" "usuario ya existente" "formulario correcto" "usuario creado exitosamente". Esta todo como la entrega anterior, solo que reemplace las funciones del componente por "sweet alert" especificamente use el sweetalert2 los cdn estan implementados en los head en cada HTML que se use.
Estoy contento con el framework que diseñe, modularizando bien las páginas, funciones, base de datos, componentes y assets, eso esta todo igual que la entrega anterior, asi que mucho mas no tengo para agregar.
Lamento que tenga que hacer un .css para cumplir con algun estándar, tengo mi proyecto de HTML con varios .css aca: https://github.com/89pabloalvarez/repo-coder dentro de "styles" incluso hay un nivel mas ahi dentro con SASS que eso ya es "nivel dios" para .css, pero como entendí que este curso era JAVA SCRIPT no se tomaría en cuenta, realmente estoy acostumbrado en el trabajo a usar los estilos asi, exportandolos y usandolos a demanda, justamente para su reutilización y no repetir, que es exactamente lo mismo, solo que en vez de implementar el script stylesheet en el html, se implementa en el componente, pero bueno, me estoy yendo por las ramas. Creo que aprendi varias cosas en el curso y estoy agradecido, espero al menos aprobar, creo haber cumplido con todo.
Estaré desarrollando post-entrega (tal vez esté cuando se agarre la corrección de este proyecto o tal vez no, hay que mirarlo como una feature-a-futuro), una parte de "edición" agregando una columna dinamicamente que sea "Editar" y pondré un ícono de un lápiz como hipervinculo a una url y cada url de edición será compuesta por el path /{id_usuario} y dirigirá a un formulario similar al de creación pero para edición, con los datos pre-cargados y demás, se podrá modificar todos los datos. Todavia estoy pensando la funcionalidad, pero por ahí anda.


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


#### PRIMERA ENTREGA

De momento la página "index.html" únicamente ejecuta "main.js" sobre una serie de instrucciones hacia el usuario para dar de alta un nuevo usuario. Se le solicitará datos como un nombre de usuario, un correo electrónico, un rol y una contraseña (que será validada reingresando la misma).
Se agregó una carpeta "DB" que dentro tiene 2 javaScript que exportan un array de valores uno es "roles", que son los roles permitidos y otro que es "usuarios" que consta de array de objetos, en éste caso, son una serie de usuarios pre-existentes.
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
