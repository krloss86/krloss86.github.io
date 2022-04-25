//ingresamos datos por teclado para cargar el nombre
const edificio = [
    {
        nombre: 'jose',
        apellido: 'lopez'
    },
    {
        nombre: 'juan',
        apellido: 'perez'
    },
    {
        nombre: 'maria',
        apellido: 'benitez'
    },
    {
        nombre: 'marta',
        apellido: 'rodriguez'
    }
];


//for(const piso of edificio) {
for(let piso = 0; piso < edificio.length; piso++) {
    const personaDentroDelPiso = edificio[piso];// persona
    if(personaDentroDelPiso.nombre === 'jose' ) {
        console.log('jose esta en el piso:', piso);
        console.log(personaDentroDelPiso, piso);
    }
}



/*ejemplo vamos indicar cuantos personas queremos cargar */
let vector = [];//vacio
let personas = [];

//quiero que el usuario idique el valor
const cantidadPersona = prompt('Ingrese la cantidad de personas');
//alt 96
//alert(`se van a cargar ${cantidadPersona} personas`);

for(let i=0; i<cantidadPersona;i++) {
    const nombre = prompt(`Nombre: ${i}`);//ingrese el nombre
    const apellido = prompt(`Apellido ${i}`);

    //¿como creo un objeto?
    //1-forma es creando una funcion
    const persona = construirPersona(nombre, apellido);
    personas.push(persona);//agrego un objeto
}

//que variables no existen cuando termina el for
//nombre,apellido, persona, i

//ahora que tengo el vector de personas con datos
//recorro solo para mostrar por consola quienes estan

//CUANDO USANDO UN FOR OF: cuando solo quiero recorrer los datos
//dentro de un array sin que me importe la posicion (0,1,3...)
for(const persona of personas ) {
    console.log(persona);
}


/**/
function construirPersona(nombreParam, apellidoParam) {
    //si mando un parametro y no lo uso 
    const persona = {
        nombre: nombreParam,
        apellido: apellidoParam
    };
    //debe salir de esta funcion una persona
    return persona;
}