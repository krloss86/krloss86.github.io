/*variables*/
let edad = 10; //tipo number
console.log(edad, typeof edad); //no es un alert()

//puedo cambiar el valor de edad
edad = 20;
console.log(edad); //no es un alert()

//quiero definir una variable numerica, pero que no se pueda modifiar su valor
const altura = 174.5;
console.log(altura,  typeof altura); //no es un alert()
//altura = 200;
//console.log(altura); //no es un alert()

var nombre = 'carlos';//define una varible de manera global

//tipo string
let apellido = 'lopez';

console.log(nombre, typeof nombre, apellido, typeof apellido);
//operador typeof

const flag = true;
const iguales = false;
console.log(flag, typeof flag);

//arrays de string
const nombres = [];//es un array de string vacios

const materias = ['lengua','ingles','etc'];//es un array de string vacios          
                    //0      1        2 
//nombreVariable[pos] = valor
let materia = materias[0];
console.error(materia);

//reasignar en la varibale materia el valor de materias[1]

console.info(materias[1]);

//crear un objeto
// quiero crear un objeto persona
let persona = {
    edad: 36,//nombreAtributo: valor
    argentina: true,
    nombre: 'carlos',
    apellido: 'lopez',
    idiomas: ['español','ingles']
};

console.log(persona,typeof persona);

//undefined
let perro = undefined;
//perro.apodo = 100;
perro = {
    apodo : 'firulais'
}
console.log(perro, typeof perro);
perro = {
    apodo : 'perrito',
    edad : 100,
}
console.log(perro, typeof perro);

let gato = null;
gato = {edad :100};
console.log(gato, typeof gato);

/*LOS TIPOS DE DATOS TIENE FUNCIONE O METODOS*/
let nacionalidad = '    argentina    ';
console.log(nacionalidad);
console.log(nacionalidad.length);
//al ser un string puedo ejecutar cierto metodos o funciones
nacionalidad = nacionalidad.trim();
console.log(nacionalidad);

nacionalidad = nacionalidad.toUpperCase();
console.log(nacionalidad);

nacionalidad = nacionalidad.toLocaleLowerCase();
console.log(nacionalidad);

//cantidad de caracteres que tiene un string
console.log(nacionalidad.length);

//ejemplo de number y sus metodos
let valorNumericoGuardadoEnString = '100';

//sumarle 1
//valorNumericoGuardadoEnString = parseInt(valorNumericoGuardadoEnString) + 1;
//valorNumericoGuardadoEnString =  +valorNumericoGuardadoEnString + 1;
valorNumericoGuardadoEnString =  Number(valorNumericoGuardadoEnString) + 1;
console.log(valorNumericoGuardadoEnString)

//NaN: se da cuando quiero convertir a numero un texto no numérico
let valorFlotanteEnString = '175.5';
console.log(parseInt(valorFlotanteEnString))
console.log(parseFloat(valorFlotanteEnString))
console.log(Number(valorFlotanteEnString))