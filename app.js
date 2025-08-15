// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let listaDeAmigos = [];

console.log(listaDeAmigos);

function agregarAmigo() {
    if(document.getElementById('amigo').value == '') {
        alert("Por favor, ingrese un nombre valido");
    }else{
        let nuevoAmigo = document.getElementById('amigo').value;
        listaDeAmigos.push(nuevoAmigo);
        limpiarCaja();
        console.log(listaDeAmigos);
        actualizarListaDeAmigos();
    }    
}

function actualizarListaDeAmigos() {    
    
    //Obtener el elemento de la lista
    let lista = document.getElementById("listaAmigos");

    //Limpiar la lista existente
    lista.innerHTML = "";

    //Iterar sobre el arreglo
    for(aux = 0; aux < listaDeAmigos.length; aux++) {
        //Crea el elememnto HTML
        let li = document.createElement("li");
        //Asigna el nombre a la etiqueta li
        li.textContent = listaDeAmigos[aux];
        //Agrega a la lista ul
        lista.appendChild(li);
    }
}

function sortearAmigo() {
    
    //Verifica que la lista no este vacia
    if(!listaDeAmigos || listaDeAmigos.length === 0 ){
        console.log('La lista de amigos está vacia');
        return;
    }
    //Genera número aleatorio
    let indiceAleatorio = Math.floor(Math.random()*listaDeAmigos.length);
        //Obtener el elemento
    let resultado = document.getElementById("resultado");
    //Mostrar el resultado
    resultado.innerHTML = `<li>${listaDeAmigos[indiceAleatorio]}</li>`;
}

function limpiarCaja() {
    document.querySelector("#amigo").value = '';
}

actualizarListaDeAmigos();
