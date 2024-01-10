const teclasNum = [...document.querySelectorAll('.num')]
const teclasOp = [...document.querySelectorAll('.op')]
const teclaRes = document.querySelector('.res')
const display = document.querySelector('#display')
const tBackspace = document.querySelector('#t-back')
const tLimpar = document.querySelector('#t-limpar')
const tIgual = document.querySelector("#t-igual")

let sinal = false
let decimal = false

teclasNum.forEach(el => {
    el.addEventListener('click', (e) =>{
        sinal = false

        if (e.target.innerHTML == ','){
            if (!decimal){
                decimal = true

                if (display.innerHTML == '0'){
                    display.innerHTML = '0,'
                } else{
                    display.innerHTML += e.target.innerHTML
                }                
            }
        }else{

            if (display.innerHTML == '0'){
                display.innerHTML = ""
            }
            display.innerHTML += e.target.innerHTML
        }   
    })
})

teclasOp.forEach(el => {
    el.addEventListener('click', (e) =>{
        
        if(!sinal){
            sinal = true

            if (display.innerHTML == '0'){
                display.innerHTML = ""
            }
            
            if (e.target.innerHTML == 'x'){
                display.innerHTML += '*'
            } else{
                display.innerHTML += e.target.innerHTML
            }
        }
    })
})

tLimpar.addEventListener('click', () =>{
    sinal = false
    decimal = false
    display.innerHTML = '0'
})

tBackspace.addEventListener('click', () =>{
    display.innerHTML = display.innerHTML.slice(0, display.innerHTML.length - 1)
    if (display.innerHTML == ''){
        display.innerHTML = '0'
    }
})

tIgual.addEventListener('click', ()=>{
    sinal = false
    decimal = false
    const res = eval(display.innerHTML)
    display.innerHTML = res
})

