const horas = document.getElementById('horas')
const minutos = document.getElementById('minutos')
const segundos = document.getElementById('segundos')
const relogio = setInterval(function time() {
    let dateToday = new Date();
    let hr = dateToday.getHours();
    let min = dateToday.getMinutes();
    let s = dateToday.getSeconds();

    if (hr < 10) hr = '0' +hr;
    if (min < 10) min = '0' +min;
    if (s < 10) s = '0' +s;

    horas.textContent = hr;
    minutos.textContent = min;
    segundos.textContent = s;
})

function carregar(){
var msg = document.getElementById('msg')
var img = document.getElementById('imagem')
var data = new Date()
var hora1 = data.getHours()
var minutos1 = data.getMinutes()
msg.innerHTML = `Agora são`
if(hora1 >=0 && hora1 <12){
    img.src = 'imgs/manha.png'
    document.body.style.background = '#fba279'
} else if (hora1 >= 12 && hora1 < 18){
    img.src = 'imgs/tarde.png'
    document.body.style.background ='#d5a76c'
} else {
    img.src = 'imgs/noite.png'
    document.body.style.background ='#3e2e3e'
}
}