import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '../dist/public/css/main.css';

const exprecion = document.getElementById("exprecion");
const texto = document.getElementById("texto");

const btn_comprueba = document.getElementById("btn_comprobar");
const resultado = document.getElementById("resultado"); 

btn_comprueba.addEventListener('click', () => {

    const compara = exprecion.value.trim();
    const evaluar = texto.value;

    if (compara === "") {
        resultado.textContent = "Ingresa una expresión regular.";
        resultado.style.color = "red";
        return;
    }

    try {
        const limpia = compara.replace(/^\/|\/[a-z]*$/gi, "");

        const exprecio2 = new RegExp(limpia, "");

        console.log("Usando regex:", exprecio2);

        const esValido = exprecio2.test(evaluar);

        if (esValido) {
            resultado.textContent = "Válida";
            resultado.style.color = "green";
        } else {
            resultado.textContent = "Inválida";
            resultado.style.color = "red";
        }

    } catch (error) {
        resultado.textContent = "⚠ Error: Expresión regular inválida.";
        resultado.style.color = "orange";
    }
});
