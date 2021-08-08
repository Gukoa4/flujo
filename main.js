const sendButton = document.getElementById("snd-nota");
let resultado, mensaje;
let nota1 = 8;
let nota2 = 5;


sendButton.addEventListener("click", () => {
    try {
        preresultado = parseInt(document.getElementById("nota").value);

        if (isNaN(preresultado)) {
            throw "invalido";
        }

        mensaje = definiMensaje(preresultado);
        resultado = verificarAprobacion(preresultado, nota1, nota2);

    } catch (error) {
        resultado = "error al ingresar valor";
        mensaje = "se ha producido un error exitosamente";
    }
    abrirModal(resultado, mensaje);
})

const definiMensaje = (preresultado) => {
    let mensaje;
    switch (preresultado) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
            mensaje = "Desaprobo el examen";
            break;
        case 7:
        case 8:
        case 9:
        case 10:
            mensaje = "Aprobo el examen";
            break;
        default:
            mensaje = null;

    }
    return mensaje;
}

const verificarAprobacion = (preresultado, nota1, nota2) => {
    promedio = ((preresultado + nota1 + nota2) / 3).toFixed(2);
    
    if (promedio < 7) {
        return resultado = `<span class ="red">No alcanza el promedio es ${promedio}</span>`;
    }
    else {
        return resultado = `<span class ="green">Felicidades el promedio es ${promedio}</span>`;
    }
}

const abrirModal = (resultado, mensaje) => {
    if (mensaje) {

        document.querySelector(".resultado").innerHTML = resultado;
        document.querySelector(".mensaje").innerHTML = mensaje;
        let modal = document.querySelector(".modal-background");
        modal.style.display = "flex";
        modal.style.animation = "aparecer 1s forwards";
    }
    else {
        alert("numero no valido")
    }
}