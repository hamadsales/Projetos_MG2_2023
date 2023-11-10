function Potencia(){
    const base = Number(document.querySelector('#num1').value);
    const expoente = Number(document.querySelector('#num2').value);
    const resposta = document.querySelector('.resp');
    const form = document.getElementById('form');

    resposta.textContent = `${base} <sup> ${expoente} </sup> = ${base ** expoente}`;
    form.reset();
}
function numeroAleatorio(){
    const inicial= Number(document.querySelector('#num1').value);
    const final = Number(document.querySelector('#num2').value);
    const resposta = document.querySelector('.resp');
    const form = document.getElementById('form');


    resposta.textContent = `${Math.floor(Math.random() * (final - inicial + 1) + inicial)}`;
    form.reset();
}

