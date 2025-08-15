// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let listaDeAmigos = [];

console.log(listaDeAmigos);

function nombreRepetido() {
    let aux = 0;
    //trim() -> Elimina los espacios en blanco al inicio y al final de un string.
    //toLowerCase() -> Convierte todas las letras de un string a minúsculas, para evitar problemas entre Mayusculas y minusculas.
    let nuevoAmigo = document.getElementById('amigo').value.trim().toLowerCase();
    
    while(aux < listaDeAmigos.length) {
        //Verifica si el nombre esta en la lista de amigos
        if (nuevoAmigo === listaDeAmigos[aux].toLowerCase()) {
            alert('Nombre repetido');
            //Está repetido
            return true;
        }
        aux++;
    }
    //No esta repetido
    return false;
}

function agregarAmigo() {
    //Asigna el nombre a una variable
    let nuevoAmigo = document.getElementById('amigo').value.trim();

    //Verifica que el nombre sea valido y no repetido
    if(nuevoAmigo === '' || nombreRepetido()) {
        alert("Por favor, ingrese un nombre valido");
    } else {            
        //Agrega el nombre a la lista de amigos
        listaDeAmigos.push(nuevoAmigo);
        limpiarCaja();
        //console.log(listaDeAmigos);
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
