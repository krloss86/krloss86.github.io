/*
    Aritméticos
    Lógicos
    Relacionales
    Asignacion
*/

// Aritméticos +,-,*,/,%, ++, --
let a = 10;
let b = 20;
console.log(a,b);

let c = a + b;//30
console.log(c,'+')

let d = a - b ;//10 - 20 = -10
console.log(d,'-')

let div = a / b;
console.log(div,'/')

let multi = a * b;
console.log(multi,'*')

/* % es el resto de una división
D |_d__
R    c
*/
let anio = 2022;

//quiero saber si 2022 es par o impar
let resto = anio % 2
console.log(resto);

//incremento ++
let valor = 0;
valor = valor + 1;
console.log(valor,'valor');
valor++;
console.log(valor,'valor');

//quiero restar 1 a valor
valor = valor -1 ;
valor--;
console.log(valor,'valor');

/*OPERADORES LOGICOS*/
//AND &&, OR || , NOT !
let username = 'juan';
let password = '1234';

let usuarioValidoAnd = (username === 'root' && password === '1234')
let usuarioValidoOr = (username === 'root' || password === '1234')

let usuarioValidoNot = username !== 'root';

/*RELACIONALES */
// darnos un valor booleano true|false}
let x = 10;
let y = 20;
let xMayorY = (10 > 20);
console.log(x,'>',y,xMayorY);
console.log(x,'<',y,x < y);
console.log(x,'===',y,x === y);
console.log(x,'>=',y,x >= y);
console.log(x,'<=',y,x <= y);
