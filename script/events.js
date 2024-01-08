import * as el from './elements.js'

export function clear(){
    el.display.innerText = ''
    el.memory.innerText = ''
}

export function del(){
    const value = el.display.innerText
    el.display.innerText = value.slice(0, value.length - 1)
}

export function operate(){
    const values = el.memory.innerText.replace(/÷/g, '/').replace(/×/g,'*').replace(/–/g,'-').replace(/,/g,'.').replace('=','')
    el.display.innerText = ''
    el.memory.innerText = ''
    return eval(values)
}
