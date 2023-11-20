window.addEventListener('load', () => { //escuchamos cuando carga el documento
    
    //Creamos dos constantes y nos guadamos los elementos que nesesitamos
    const display = document.querySelector('.calculadora-display')
    const keypadButtons = document.getElementsByClassName('keypad-button')
    
    //Creamos otra constante para convertir el HTMLCollection a array
    const keypadButtonsArray = Array.from(keypadButtons)

    //iteramos nuestro nuevo array de botones
    keypadButtonsArray.forEach(( button ) =>{
        //a cada boton le agregamos un listener
        button.addEventListener('click', () =>{
            //cuando apretamos el boton imprime el listener de cada elemento del inerHTML(boton en este caso)
            calculadora(button, display)
        })
    })
})

function calculadora(button, display) {
    switch (button.innerHTML) {
        case 'C':
            borrar(display)
            break;

        case '=':
            calcular(display)
            break;

        default:
            actualizar(display, button)
            break;
    }
}

function calcular(display) {
  display.innerHTML = eval(display.innerHTML) //toma el string de la operacion lo calcula y lo guardarlo en el innetHTML del display  (eval)
}

function actualizar(display, button) {
    if (display.innerHTML == 0) {
        display.innerHTML = '';
    }
    display.innerHTML += button.innerHTML
}

function borrar(display) {
    display.innerHTML = 0
}