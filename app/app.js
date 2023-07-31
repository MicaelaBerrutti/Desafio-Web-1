let body = document.body;

let opcionesMenu = ["Home", "Equipo", "Servicios", "Contacto"];
var contenedorMenu = document.createElement("div");

opcionesMenu.forEach(opcion => {          //por cada elemento del array opcionesMenu, se crea y se agrega un link en el contenedorMenu
    var texto = document.createElement("a");
    texto.href = "";
    contenedorMenu.appendChild(texto); 
    texto.textContent = opcion; 
});

contenedorMenu.classList.add("menu"); 

let activado = false; //activado = se muestra el menú

function desplegarMenu(){
    if(!activado){
        body.appendChild(contenedorMenu);
        activado = true;
    }else{
        body.removeChild(contenedorMenu);
        activado=false;
    }
}