const resultados = document.getElementById('resultados')
const botonOpcion1 = document.getElementById('boton-opcion1')
const sectionComentarios = document.getElementById('comentarios')
const botonComentarios = document.getElementById('boton-comentarios')

let num1 = 3.333;
let num2 = 3;
let count = 0;

botonOpcion1.addEventListener('click', calcular)
botonComentarios.addEventListener('click', mostrarComentarios)
sectionComentarios.style.display = 'none'

function calcular(){

while (num1 == 3.333) {
num1 = num1-num2;
count++;

crearMensaje("Las veces que se puede realizar la operación son: " + count + " veces.");
crearMensaje("El resto es "+num1.toLocaleString("es-ES") +".");
sectionComentarios.style.display = 'flex';

}
}

function crearMensaje(mensaje) {

    let nuevaLinea = document.createElement('p')
    nuevaLinea.innerHTML = mensaje
    resultados.appendChild(nuevaLinea)
}

function mostrarComentarios() {

    let nuevaLinea = document.createElement('p')
    nuevaLinea.innerHTML = "Entiendo que la prueba consistía en reconocer que el número 3.330 no era igual al número 3.333 y por tanto la operación de resta no podría repetirse según las instrucciones dadas. Sin embargo, en el contexto en el que se realiza la instruccion, la coma empleada debe entenderse como un marcador decimal."
    let nuevaLinea2 = document.createElement('p')
    nuevaLinea2.innerHTML = "He querido aprovechar esta tarea para desempolvar los conocimientos adquiridos en los cursos de programación básica y github de esta ruta de aprendizaje."
    resultados.appendChild(nuevaLinea)
    resultados.appendChild(nuevaLinea2)
    sectionComentarios.style.display = 'none';
}

