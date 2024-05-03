const bar = document.querySelector('.open-Menu');
const close = document.querySelector('.close-icon');
const nav = document.querySelector('.nav-list');


if (bar) {
    bar.addEventListener("click", () =>{
        nav.classList.add("active");
    })
}
if (close) {
    close.addEventListener("click", () =>{
        nav.classList.remove("active");
    })
}


// MANIPULAR TEXTO

const manTexto = document.querySelector('.main-title');
const funcAct = ['Gestor de Recusos Humanos', 'Programador Web', 'formado em Microsoft Office', 'Professor Inglesa'];

let charaIndex = 0;
let funcIndex = 0;
updateText();

function updateText() {
    charaIndex++
    manTexto.innerHTML = `
        <h1 >Sou ${funcAct[funcIndex].slice(0,charaIndex)}</h1>
    `;
    if (charaIndex === funcAct[funcIndex].length) {
        funcIndex++
        charaIndex = 0
    }
    if (funcIndex === funcAct.length) {
        funcIndex = 0;
    }
    setTimeout(updateText, 400);
}