/*
    CARGAR PERSONAS EN UN ARRAY

    La carga de datos finaliza con edad = 0
    VALIDAR QUE LOS DATOS SEAN CORRECTOS:
    - nombre: no vacio && longitud < 50
    - apellido: no vacio && longitud < 60
    - edad: numerico && > 0 && < 119

    Listar las personas con errores de formato
*/

/*ejemplo vamos indicar cuantos personas queremos cargar */
let personas = [];

let edad;
let apellido;
let nombre;

edad = prompt('Edad:'); //retrna un string > entero

//NaN, undefined, null, 0  > false

//necesito leer la edad antes de evaluarla
//parseInt convierte texto a numero si y solo si texto represente un numero
// number > string ''+10; String(10)
while( parseInt(edad) > 0 && parseInt(edad) < 119) {
    nombre = prompt('Nombre');
    apellido = prompt('Apellido');
    personas.push(
        {
            edad: edad,
            nombre: nombre,
            apellido: apellido
        }
    );

    edad = prompt('Edad:');
}

const errores = [];

//aplicar la validaciones
for(const persona of personas) {
    //aplica validaciones
    if(!persona.apellido || persona.apellido.length > 60 ) {
        errores.push(persona);
    }
    if(!persona.nombre || persona.nombre.length > 50) {
        errores.push(persona);
    }
}

//listar las per
//otro forEach es un metodo de los arrays
for(const aux of errores) {
    console.log(aux);
    //aca pueden poner la logica para fix del errores
    //...
}

//personas.forEach(aux => console.log(aux));