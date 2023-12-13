

let formulario = document.querySelector(".fale-conosco")
let mascara = document.querySelector(".mascara-form ")



function cliqueiNoBotao() {
    formulario.style.transform = "translateX(-50%)";
    formulario.style.left = "700px"
    mascara.style.visibility = "visible"
}

function sumirFormulario() {
    formulario.style.left = "-320"
    mascara.style.visibility = "hidden"
}
