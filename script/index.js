import * as el from './elements.js'
import * as operator from './events.js'

let formula

function showDisplay ({key}){
    if (!isNaN(key) || key == ','){
        const value = el.display.innerText
        if (value.length < 9){
            el.display.innerText += key
        }
    }

    if (key == 'Delete'){
        operator.clear()
    }

    if (key == 'Backspace'){
        operator.del()
    }

    el.buttons.forEach(btn=>{
        if (btn.classList.contains('operator')){
            if (key == btn.value){
                el.memory.innerText += el.display.innerText
                el.memory.innerText += btn.innerText
                el.display.innerText = ''
            }
        }
    })

    if (key == 'Enter'){
        el.memory.innerText += el.display.innerText
        el.display.innerText = operator.operate()
    }
}

document.addEventListener('keydown', showDisplay)