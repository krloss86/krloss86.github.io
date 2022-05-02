//accedemos al dom y obtenemos el body
const bodyElement = document.getElementsByTagName("body");

console.log(bodyElement);

//cantidad de hijos/childs
console.log(bodyElement.length);

//obtner el primer hijo de body >main
const bodyTag = bodyElement[0].firstChild;

console.log(bodyTag);//#text

const mainTag = bodyElement[0].getElementsByTagName("main")

console.log('mainTag',mainTag);

//accedo via id
const h1Tag =  document.getElementById('titulo');

console.log('h1Tag',h1Tag)

//accedo al elemento padre
const parentOfH1Tag = h1Tag.parentNode;

console.log(parentOfH1Tag);

//determino si un Element tiene Childs
const hasChild = h1Tag.hasChildNodes(); //true|false

console.log('h1Tag', hasChild ? 'tiene hijos' : 'no tiene hijos');

//accedo al primer y al último hijo (child)
//firstChild, lastChild

const main = mainTag[0];
//voy a filtrar o elminar los #text
for(const childOfMain of main.childNodes) {
    if(childOfMain.nodeName == '#text') {
        //elimino del documento esos textos que no quiero
        //removeChild
        main.removeChild(childOfMain);
    }
}
for(const childOfMain of main.childNodes) {
    if(childOfMain.nodeName == '#comment') {
        //elimino del documento esos textos que no quiero
        //removeChild
        main.removeChild(childOfMain);
    }
}
const firstChild = main.firstChild;
const lastChild = main.lastChild;

console.log('first child of main tag',firstChild)
console.log('last child of main tag',lastChild)

//accedo al formulario por medio del DOM
//1
/*
let form = document.forms[0];

//2
form = document.forms;//array
for(const f of form) {
    if(f.id === 'myForm') {
        
    }
}*/
//3
form = document.getElementById('myForm');
const inputInform = form.getElementsByTagName('input');
for(const input of inputInform) {
    if(input.type == 'text') {
        //a cada Element le agrego una clase ,.rojo
        input.className = 'rojo';
    }
}
