// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. 
// Aquí deberás desarrollar la lógica para resolver el problema.
const amigos = [];
const lista = document.getElementById("listaAmigos");
const sorteado = document.getElementById("resultado");

function agregarAmigo() {
    //obtengo el nombre desde el input uso .trim() para eliminar espaciona al principio y final del nombre
    let nombre = document.getElementById("amigo").value.trim();
    let nombreComparacion = nombre.toLowerCase();
    //para borrar si hay alguno sorteado previamente
    sorteado.innerHTML = "";
    //evaluo a ver si esta vacío el input
    if (nombre === "") {
        alert("La estrada está VACIA!!!");

    //evaluo a ver si existe ya ese nombre en la lista
    }else if(amigos.includes(nombreComparacion)){
        alert("El nombre EXISTE en la lista!!!");
    }else{
        amigos.push(nombreComparacion);
        // Crear el <li> y agregarlo al HTML
        agregarItem(lista,nombre);
    }
    // se vacía el input 
    document.getElementById("amigo").value = "";
   
}

function sortearAmigo() {
    //evaluo que la lista de amigos no esté vacía
    const items = lista.querySelectorAll("li");
    if (items.length === 0) {
        alert("No hay nombres en la lista");
        
    }else{
    //elijo al azar un indice aleatorio del array amigos para así 
    //obtener un nombre de la lista
    const indice = Math.floor(Math.random() * items.length);
    const elegido = "El amigo secreto sorteado es: " + items[indice].textContent;
   //se muetra en pantalla el sorteado 
    agregarItem(sorteado,elegido);
    //se reinician las listas
    lista.innerHTML = "";
    amigos.length = 0;
    }
}

function agregarItem(lista, nombre) {
    const li = document.createElement("li");
    li.textContent = nombre;
    lista.append(li);
}