const displayValorAnterior = document.getElementById('valor-anterior');
const displayValorActual = document.getElementById('valor-actual');
const botonesNumeros = document.querySelectorAll('.btn-number');
const botonesOperadores = document.querySelectorAll('.btn-operator');

const display = new Display(displayValorAnterior, displayValorActual);

botonesNumeros.forEach(boton => {
    boton.addEventListener('click', () => display.agregarNumero(boton.innerHTML));
});

botonesOperadores.forEach(boton => {
    boton.addEventListener('click', () => display.computar(boton.value))
});




