var nome = 'JavaScript';
let tema = 'Habilitado';

window.onload = initscript;

var element = document.getElementById("theme");

function active_theme() {
    if (element.classList.contains("dark")) {
        element.classList.remove("dark");
        console.log(tema)
  
        localStorage.removeItem(tema);
    } else {
        element.classList.add("dark");
        active = true;
        console.log(tema)
  
        localStorage.setItem(tema, true);
    }
}

function initscript(){    
    let myTema = localStorage.getItem(tema);

    console.log(myTema)

    if (!myTema) {
        console.log('não ativa o tema')
    } else {
        console.log('ativa o tema')
        element.classList.add("dark");
    }
}