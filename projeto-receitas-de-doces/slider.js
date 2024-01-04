var radio = document.querySelector('.manual-btn')
var cont = 1

document.getElementById('radio1').checked = true

setInterval(() => {
    proximaimg()
}, 6000)

function proximaimg() {
    cont++

    if(cont > 3){
        cont = 1
    }

    document.getElementById('radio'+cont).checked = true
}

var button = document.getElementById('burguer')
var utran = document.getElementById('utran')

function clickmenu() {
   if (itens.style.display == 'block') {
    itens.style.display = 'none'
   } else {
    itens.style.display = 'block'
   }
}

