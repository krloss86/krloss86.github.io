function outer() {
    const a = 23;
    function inner() {
        console(a);
    }
    inner();
}

//¿invocar > inner ? outer?

//outer > fuera por ende es a quien debo llamar primer
//inner > esta dentro de outer, por ende es invocada por esta.

document.getElementById('btn').addEventListener('click',() => {
    outer();
})

//F12 EN EL NAVEGADOR

//EN LA PESTAÑA SOURCE, tiene html, css, js

//ctrl+p busco archivo que quiero "debugar"

//selecciono la linea y hago click para agregar un "break point"

//con F10 AVANZO PASO A PASO LINEA A LINEA
// con F11 "entro" en la funcion


/*FUNCION QUE SUME DOS VALORES */
function adder(first) {//5
    function add (secound) {
        console.log(first+secound);
    }    
    return add;
}

document.getElementById('btnSumar').addEventListener('click',() => {
    const primerLlamado = adder(10); // add(secound);
    primerLlamado(5);//invoco a la funcion que me retorno la llamada anterior
});


/*closure */
function outer() {
    const endpoint = 'https://reqres.in/api/users';
    async function inner(page) {
        if(!page) {
            page = 1;
        }
        return await axios.get(`${endpoint}?page=${page}`);
    }
    return inner;
}


document.getElementById('btnAxiosRequest').addEventListener('click',async () => {
    //invocar
    const fnInner = outer(); // > retornar la referencia a inner(page)
    const jsonObject = await fnInner(2);
    alert(JSON.stringify(jsonObject));
});