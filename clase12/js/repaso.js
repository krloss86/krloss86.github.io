//variables

//estrcutura de iteracion
let alumnos = ['alan','alejandro','daiana','daniel'];

//hay 4 elementos
//alan > 0
//alejandro > 1
//daiana > 2
//daniel > 3
//-------------
//hay 4

let tamanio = alumnos.length;
//alert(tamanio);
console.log(tamanio);

//recorrer el array de nombres y mostar cada uno
/*let valor = 0;
valor = valor +1;
valor++;
*/
for(let i= 0;i < tamanio;i++ ) {
    console.log(i, alumnos[i], typeof alumnos[i]);
}

//foreach
for(let nombre of alumnos) {
    console.log(nombre);
}

//while
console.log('while 1');   
let i = 0;
while(alumnos[i] !=='daiana') {
    console.log(i, alumnos[i]);
    i++;//debemos incrementar el indice que usamos para recorrer el vector
}

console.log('while 2');   
i=0;//reseet de indice
while( i < tamanio) {
    
    if(alumnos[i] === 'daiana'){
        console.log(i,'daiana');   
        break; //sale del ciclo while    
    }
    i++;
}

let a = 10;
let b = '10';

if(a === b) {
    alert('iguales');
}

///ahora con objetos
let alumnosObj = [
    {
        edad: 25,
        nombre: 'jose'
    },
    {
        edad: 24,
        nombre: 'martin'
    },
    {
        edad: 35,
        nombre: 'maria'
    }
];

//for/while do-while
//¿cómo detecto el menor de los alumnos?

let primero = true;
let alumnoMasChico;//acá va a quedar el alumno mas chico
for(const alumnoObj of alumnosObj) {
    if(primero) {
        alumnoMasChico = alumnoObj;
        primero = false;
    }
    //si alumnoMasChico es menor alumnoObj, entonces pasa a ser  el nuevo menor
    if(alumnoObj.edad < alumnoMasChico.edad) {
        alumnoMasChico = alumnoObj;
    }
}

//al finalizar el ciclo for obtengo al menor
console.log('alumno mas chico', alumnoMasChico);


const vector = [1,2, 1,   3,   4,  1,   2,   1,   3,   4,  1,   2,   1,   3,   4 , 1 ,  2 ,  1 ,  3,   4];

let contador = 0;
let pos =[];

for(let i = 0;i < vector.length; i++) {
    if(vector[i] === 3) {
        contador++;
        pos.push(i);
    }
}

console.log('cantidad de 3:',contador);
console.log('posiciones:',pos);

//filtrar los numero > a 2
let mayoresA2 = [];
for(let i of  vector) {
    if( i > 2) {
        mayoresA2.push(i);
    }
}
console.log(mayoresA2);

//filter
let mayoresA2ConFilter = vector.filter( num => num > 2);//que quiero
console.log(mayoresA2ConFilter);

//valores que js los evalua como false 
let aux = 0;
if(aux) {
    console.log('false');
}

let aux2 = undefined;
if(aux2) {
    console.log('false');
}

let aux3 = null;

if(aux3) {
    console.log('false');
}

