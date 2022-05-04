async function getUserData(pagina) {

    const response = await axios.get(`https://reqres.in/api/users?page=${pagina}`);

    console.log(response);
    
    return response;
}

//asociar al boton un evento
const btn = document.getElementById('btnGetData');

//asocio el envento click
btn.addEventListener('click',async () => {
    
    const paginaInput = document.getElementById('pagina');
    if(!paginaInput.value) {
        alert('Ingrese pagina a buscar');
        return;
    }
    const response = await getUserData(+paginaInput.value);
    
    //AXIOS retorna obj.data > json que viene del servidor
    const jsonData = response.data //ojo no es el data 
    
    // SOLO VOY A TOMAR DEL OBJETO
    const jsonDataMapped = jsonData.data.map((x) => {
        return {
            id: x.id,
            email: x.email
        }
    });

    //puedo actualizar el div con jsonData
    const jsonDataAsText = JSON.stringify(jsonDataMapped);
    
    //actualizo el valor del div
    //capturo el div por su id
    const divEnHtml = document.getElementById('content');
    divEnHtml.innerHTML = jsonDataAsText;
});