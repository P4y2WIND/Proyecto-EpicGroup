var botonEstado = document.getElementById("boton1");
botonEstado.addEventListener("click", ClickAlert);
var bodyTheme = document.getElementById("content");
var iconTHeme = document.getElementById("theme-mode")
function ClickAlert(){
    if (botonEstado.classList.contains("off")){
      botonEstado.classList.remove("off");
      botonEstado.classList.add("on");
      bodyTheme.classList.remove("container-1");
      bodyTheme.classList.add("container-2");
      iconTHeme.innerText = "dark_mode";
    }
    else if(botonEstado.classList.contains("on")){
        botonEstado.classList.remove("on");
        botonEstado.classList.add("off");
        bodyTheme.classList.remove("container-2");
        bodyTheme.classList.add("container-1");
        iconTHeme.innerText = "light_mode";
    }
}
