//elementos html
let body = document.body;
let opcionesMenu = ["Home", "Equipo", "Servicios", "Contacto"];
var contenedorMenu = document.createElement("div");
opcionesMenu.forEach(opcion => {
var texto = document.createElement("a");
texto.href = "";
contenedorMenu.appendChild(texto); 
texto.textContent = opcion; 
    
});
contenedorMenu.classList.add("menu"); 

let activado = false;

function desplegarMenu(){
    if(!activado){
        body.appendChild(contenedorMenu);
        //contenedorMenu.appendChild(icono);
        
    activado = true;
    }else{
        body.removeChild(contenedorMenu);
        activado=false;
    }
}