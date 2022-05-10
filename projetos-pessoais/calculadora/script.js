let res = document.getElementById('res');

var otoresultado

function limpar (){
    res.innerHTML = '0'
}

function apagar (){
        let inputText = res.value
        res.value = inputText.substring(0,inputText.length-1)
        res.innerText = res.value
}

function sezero() {
    if (res.value == '0') {
        res.innerHTML = ''
    }
}

function n1 (){
    res.innerHTML += '1'
    sezero()
}

function n2 (){
    res.innerHTML += '2'
}

function n3 (){
    res.innerHTML += '3'
}

function n4 (){
    res.innerHTML += '4'
}


function n5 (){
    res.innerHTML += '5'
}

function n6 (){
    res.innerHTML += '6'
}

function n7 (){
    res.innerHTML += '7'
}

function n8 (){
    res.innerHTML += '8'
}

function n9 (){
    res.innerHTML += '9'
}


function n0 (){
    res.innerHTML += '0'
}

function somar() {
    otoresultado = res + otoresultado
    res.innerHTML = ''
}

function somar() {
    res.innerHTML = otoresultado
}