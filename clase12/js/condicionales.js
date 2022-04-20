let estudio = true;

//if
if(!estudio) {
    alert('vamos bien')
    //logica si true
}else {
    //logica si false
    alert('vamos mal')
}

let edad = 1;

if(edad ===1){
    alert('soy bebe');
}else if(edad === 2) {
    alert('soy bebe de 2');
}else {
    alert('niño');
}

edad = 5;
/*switch */
switch(edad) {
    case 1:
        alert('soy bebe');
        break;
    case 2: 
        alert('soy bebe 2' );
        break;
    default :
        alert('niño');
}