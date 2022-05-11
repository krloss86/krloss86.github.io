//capturamos el evento click de boton
const btnSuma = document.getElementById('sumar');
const btnResta = document.getElementById('restar');
const btnMultiplicacion = document.getElementById('multiplicar');
const btnDivision = document.getElementById('dividir');

const a =  document.getElementById('a');
const b =  document.getElementById('b');

//asocio al boton el evento click
btnSuma.addEventListener('click',() => {
    calcular('+');
});
//resta
btnResta.addEventListener('click',() => {
    calcular('-');
 });
 //multiplicacion
 btnMultiplicacion.addEventListener('click',() => {
     calcular('*');
 });
 //division
 btnDivision.addEventListener('click',() => {
     calcular('/');
 });
function calcular(operacionMatematica){
    //tomo el valor del input a
    const valorA = a.value; //string > number
    //tomo el valor del input b
    const valorB = b.value; //string > number

    let resultado;
    if(esValido(valorA) && esValido(valorB)) {
        //invoco a la funcion sumar, pasando a y b como parametros
        switch(operacionMatematica) {
            case '+': 
                resultado = sumar(valorA,valorB);
                break;
            case '-': 
                resultado = restar(valorA,valorB);
                break;
            case '*': 
                resultado = multiplicar(valorA,valorB);
                break;
            case '/':
                if(Number(valorB) !==0) {
                    resultado = division(valorA,valorB);
                }else {
                    resultado = 'no se puede divir por 0';    
                }
                break;
            default :
                resultado = 'operación inválida';
        } 
    }else {
        resultado = 'debe completar a y b';
    }

    actualizarResultado(resultado);    
}

/*
btn.addEventListener('click',() => {
    //tomo el valor del input a
    const valorA = a.value; //string > number
    //tomo el valor del input b
    const valorB = b.value; //string > number

    if(esValido(valorA) && esValido(valorB)) {
        //invoco a la funcion sumar, pasando a y b como parametros
        const suma = division(valorA,valorB);        
        actualizarResultado(suma);
    }else {
        actualizarResultado('debe completar a y b');
    }
});
*/
function actualizarResultado(suma) {
    //capturo el div por su id
    const div = document.getElementById('resultado');
    div.className = 'resultado';
    //actualizo el contenido del div con la variable suma
    div.innerHTML = suma;
}

function sumar(a,b) {
    return parseInt(a) + Number(b);
}
function restar(a,b) {
    return parseInt(a) - Number(b);
}
function multiplicar(a,b) {
    return parseInt(a) * Number(b);
}
function division(a,b) {
    return parseInt(a) / Number(b);
}

/*las funciones deben tener un solo return*/
function esValido(valor) {
    return valor !== '';
}
