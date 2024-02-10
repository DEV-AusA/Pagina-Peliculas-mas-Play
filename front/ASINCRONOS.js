const axios = require("axios");

// //***✅ OPERACIONES ASINCRONAS ****

//^ Las operaciones asíncronas en JavaScript son aquellas en las que el script no espera a que una tarea se complete antes de pasar a la siguiente, sino que, en lugar de bloquear la ejecución del código, el script continúa ejecutando otras tareas.

//^ Una forma más actual para manejar dichas operaciones es mediante el uso de PROMESAS  que permiten encadenar operaciones asíncronas y manejar errores de una forma más estructurada

//**✅ PROTOCOLO HTTP**

//^^ Mediante los protocolos HTTP se realiza la comunicacion entre el CLIENTE y el SERVIDOR

//! 1 PETICION ---> 1 RESPUESTA

//^^ A la peticion se la denomina REQUEST y a la respuesta RESPONSE

//**✅ PROMESAS**

//^ Una promesa es el resultado de una OPERACION ASINCRONA, la promesa va a reservar un lugar en mi código para una acción o respuesta
//^^ que aún no ocurre o de la cual aún no recibimos un resultado , 
//^ pero que una vez ocurra, mi código sabrá que hacer con esa “respuesta”.

// const promesa = new Promise((resolve, reject) =>{
// });

// console.log(promesa);

// const promesaResuelta = new Promise((resolve, reject) =>{
//     resolve("Valor de la resolucion");
// });
// console.log(promesaResuelta);

// const promesaRechazada = new Promise((resolve, reject) =>{
//     reject("Razon del rechazo");
// });
// console.log(promesaRechazada);

// const promise = axios.get("https://students-api.2.us-1.fl0.io/movies");

// promise
//     .then((resultado) => {
//         console.log(resultado.data);
//     })
//     .catch((resultado) => {
//         console.log(resultado);
//     });

//^^ En este jm cuando instanciamos una promesa y la consologeamos nos arrojara pending,siempre tiene ese estado, ademas tiene 2 estados mas...

    //***********✅ 3 ESTADOS DE LAS PROMESAS ***********
    
    //^^Las promesas cuentas con 3 estados:

    //^^ 01 - Pending.- Todas las promesas mantienen ese estado hasta el momento que se las ejecute la operacion asincronica
    //^^ 02 - Fulfilled.- Cuando la operacion de realiza de manera exitosa cambia a este estado.
    //^^ 03 - Rejected.- Si la operacion falla, o se rechaza por alguna razon su estado cambia a Reject.

//^^ Cuando la promesa obtiene una respuesta podemos conocer el valor de esa respuesta cuando fue resuelta o cuando fue rechazada usando los metodos .then y .catch

    //***********✅ THEN , CATCH y FINALLY***********

    //^^ Son metodos de la clase PROMISE que trabajan con el valor del resultado de la promesa

        //** THEN */

        //^^ A esta function se la llama "Sucess Handler (Manejadora del exito)", si la operacion se realizo de manera exitosa, este metodo contiene una function cb que toma ese valor y lo ejecuta
        
        //** CATCH */

        //^^ A esta function se la llama "Error Handler (Manejadora del error)", si la operacion falla , este metodo contiene una function cb que toma ese valor y lo ejecuta


//**✅ Function de tipo ASYNC y AWAIT**

//^^ Es una function Asincrona de JS

        //* TRY y CATCH

// const fetchMovies = async () => {
//     // const data = await axios.get("https://students-api.2.us-1.fl0.io/movies");  //!--> Promesa Pendiente

//     try {
//         const data = await axios.get("https://students-api.2.us-1.fl0.io/movies");
//         console.log(data.data);
//     } catch (error) {
//         console.log(error.message);
//     }    
// }
// fetchMovies();

//**✅ AXIOS **

//^^ Es una dependencia  para JS utilizada para realizar solicitudes HTTP, es mas simple y ademasautomatiza la conversion de datos JSON a objects de JS

//!el metodo axios.get("LINK-HTTP") --->> RETORNA UNA PROMESA

//^^ Los metodos de Axios SIEMPRE RETORNAN UNA PROMESA
//^^ Cuando AXIOS realiza una solicitud y obtiene un resultado favorable, osea la respuesta es de estatus 200 o 300, RESUELVE la promesa.
//^^ Cuando AXIOS realiza una solicitud y NO obtiene un resultado favorable, osea la respuesta es de estatus 400, RECHAZA la promesa y arroja un ERROR

//! IMPORTANTE PARA LOS METODOS --->> SIEMPRE RETORNAN UNA PROMESA

//^^ axios.post --> envia nueva informacion al servidor, recibe 2 argumentos axios.post( url, datos)
// axios.post("https://students-api.2.us-1.fl0.io/movies", {
//     title: "Lo que el viento se llevo",
//     year: "1990" //* <<-- nuevo dato
// });

//^^ axios.put --> modifica una informacion ya existente en el servidor, recibe 2 argumentos axios.put( url, datos)
// axios.put("https://students-api.2.us-1.fl0.io/movies", {
//     title: "Lo que el viento se llevo",
//     year: "1995" //* <<-- correccion
// });

//^^ axios.delete --> elimina una informacion en el servidor
// axios.delete();

//**✅ OTRAS OPERACIONES ASINCRONAS EN JS **

//^^ Ahora vamos a terminar de comprender qué otras operaciones asincrónicas podemos encontrar en JavasScript. 
//^^ Algunas muy comunes son las de lectura, escritura y creación de archivos, conexión a servicios y a bases de datos.

//^^ En este primer ejemplo estaremos trabajando con operaciones asíncronas con archivos. 
//^^ Introducimos una herramienta que nos servirá para este tipo de tareas: file system.

const fs = require("fs");

fs.readFile("./archivo.txt", "utf-8", (error, data)=>{
    if (error) {
        console.log(error);
    }
    else{
        console.log(data);
    }    
});

//**✅ ERRORES **

//^^ Existen tres formas en las que se pueden presentar un error en nuestro código

//! EXPLÍCITO

//^^ Muchas veces, cuando tenemos un error lo podremos ver reflejado en la terminal. Por ejemplo, con un error de sintaxis.

//! RESULTADO INESPERADO

//^^ Otras veces nuestro código funciona correctamente. El intérprete no detecta errores, ya que el error en realidad está en la lógica. Por ejemplo, una función que debería devolver un número devuelve NaN.


//! SIN RESULTADOS

//^^ Puede ocurrir que nos encontremos en una situación en la que no tengamos un error explícito, y tampoco tengamos un resultado inesperado.
