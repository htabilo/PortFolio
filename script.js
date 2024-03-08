let menuVisible = false;
//función que oculta o muestra el menu
function mostrarOcultarMenu() {
  if (menuVisible) {
    document.getElementById("nav").classList = ""; //classList manipula clases
    menuVisible = false;
  } else {
    document.getElementById("nav").classList = "responsive";
    menuVisible = true;
  }
}

function seleccionar() {
  //oculto el menú una vez que selecciono una opción
  document.getElementById("nav").classList = "";
  menuVisible = false;
}

//funcion que applica a las animaciones de las habilidades
function efectoHabilidades() {
  var skills = document.getElementById("skills");
  var distancia_skills =
    window.innerHeight - skills.getBoundingClientRect().top;
  if (distancia_skills >= 300) {
    let habilidades = document.getElementsByClassName("progreso");
    habilidades[0].classList.add("TestingQA");
    habilidades[1].classList.add("BasedeDatos");
    habilidades[2].classList.add("Mallas Control M");
    habilidades[3].classList.add("SOAPUI");
    habilidades[4].classList.add("EjecuciónDatastage");
  }
}
//detecto el scrolling para aplicar la animacion de la barra de las habilidades

window.onscroll = function () {
  efectoHabilidades();
};
