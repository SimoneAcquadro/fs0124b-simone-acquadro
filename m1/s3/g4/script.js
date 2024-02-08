const button = document.getElementById('button');
button = document.addEventListener('click', estrazione);

function estrazione(){
    const numeroRandom = Math.floor(Math.random() * 76) + 1;
    document.getElementById('numeroCasuale').innerHTML = 'Il numero estratto è: ' + numeroRandom;
}

let cellaPescata = document.querySelector('.tabella:nth-child(' + numeroRandom + ')')
cellaPescata.classList.add('evidenzia');
