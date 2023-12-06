// Elementos del DOM
let resultado = document.getElementById("resultado");
let cero = document.getElementById("cero");
let uno = document.getElementById("uno");
let dos = document.getElementById("dos");
let tres = document.getElementById("tres");
let cuatro = document.getElementById("cuatro");
let cinco = document.getElementById("cinco");
let seis = document.getElementById("seis");
let siete = document.getElementById("siete");
let ocho = document.getElementById("ocho");
let nueve = document.getElementById("nueve");
let reset = document.getElementById("reset");
let suma = document.getElementById("suma");
let resta = document.getElementById("resta");
let multiplicar = document.getElementById("multiplicar");
let dividir = document.getElementById("dividir");
let porcentaje = document.getElementById("porcentaje");

// Variables de operación
let operacion = 0;
let bandera = true;
let bandera2 = false;
let total = 0;
let total2 = 0;
let operador;

// Evento de teclado
document.addEventListener('keydown', function (event) {
    handleKeyPress(event.key);
});

// Función para manejar las teclas
function handleKeyPress(key) {
    switch (key) {
        case '0':
        case '1':
        case '2':
        case '3':
        case '4':
        case '5':
        case '6':
        case '7':
        case '8':
        case '9':
            handleNumber(key);
            break;
        case '+':
        case '-':
        case '*':
        case '/':
            handleOperator(key);
            break;
        case '=':
            handleOperator('=');
            break;
        case '%':
            handlePercentage();
            break;
        case '.':
            handleDecimal();
            break;
        case 'Backspace':
            handleBackspace();
            break;
        // Puedes agregar más casos según sea necesario
        default:
            break;
    }
}

// Funciones para manejar números y operadores
function handleNumber(digit) {
    if (bandera) {
        if (resultado.textContent.length < 8) {
            resultado.textContent = (resultado.textContent === "0") ? digit : resultado.textContent + digit;
        }
    } else {
        resultado.textContent = digit;
        bandera = true;
    }
}

function handleOperator(operator) {
    if (bandera2) {
        total2 = eval(`${operacion} ${operador} ${resultado.textContent}`);
        resultado.textContent = total2;
    }
    operacion = parseFloat(resultado.textContent);
    operador = (operator === '=') ? '' : operator;
    bandera = false;
    bandera2 = true;
}

// Funciones para operaciones específicas
function handlePercentage() {
    if (bandera) {
        let valorActual = parseFloat(resultado.textContent);
        let porcentajeCalculado = valorActual / 100;
        resultado.textContent = porcentajeCalculado.toString();
    }
    bandera = true;
    bandera2 = false;
}

function handleDecimal() {
    if (resultado.textContent.indexOf('.') < 0) {
        if (bandera) {
            if (resultado.textContent.length < 8) {
                resultado.textContent =
                    resultado.textContent === '0' ? '0.' : resultado.textContent + '.';
            }
        } else {
            resultado.textContent = '0.';
            bandera = true;
        }
    }
}

function handleBackspace() {
    let contenidoActual = resultado.textContent;
    resultado.textContent = contenidoActual.slice(0, -1);
    if (resultado.textContent === "") {
        resultado.textContent = "0";
    }
    bandera = true;
    bandera2 = false;
}

// Asignación de eventos de clic para números
cero.onclick = () => handleNumber('0');
uno.onclick = () => handleNumber('1');
dos.onclick = () => handleNumber('2');
tres.onclick = () => handleNumber('3');
cuatro.onclick = () => handleNumber('4');
cinco.onclick = () => handleNumber('5');
seis.onclick = () => handleNumber('6');
siete.onclick = () => handleNumber('7');
ocho.onclick = () => handleNumber('8');
nueve.onclick = () => handleNumber('9');

// Asignación de eventos de clic para operadores
suma.onclick = () => handleOperator('+');
resta.onclick = () => handleOperator('-');
multiplicar.onclick = () => handleOperator('*');
dividir.onclick = () => handleOperator('/');

// Evento de clic para el botón igual
igual.onclick = () => handleOperator('=');

// Evento de clic para el botón reset
reset.addEventListener('click', limpiar);

// Función para limpiar la calculadora
function limpiar() {
    resultado.textContent = "0";
    operacion = 0;
    bandera = true;
    bandera2 = false;
    total = 0;
}

// Asignación de evento de clic para el botón porcentaje
porcentaje.onclick = () => handlePercentage();

// Asignación de evento de clic para el botón punto
punto.onclick = () => handleDecimal();

// Asignación de evento de clic para el botón borrar
borrar.onclick = () => handleBackspace();
