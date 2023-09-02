var toggle = document.getElementById('container');
var body = document.querySelector('body');
var displayCalculator = document.querySelector('.calculator__display');
var buttonsCalculator = document.querySelector('.calculator__buttons');
var btnFunc = document.querySelector('.btn-func');
var btnReset = document.querySelector('.btn-reset');
var btnEqual = document.querySelector('.btn-equal');
var toggleNumber = document.querySelector('.top__toggle');
var toggleTitle = document.querySelector('.calculator__title');

toggle.onclick = function(){
    toggle.classList.toggle('medium');
    body.classList.toggle('medium');
    displayCalculator.classList.toggle('medium');
    buttonsCalculator.classList.toggle('medium');
    btnFunc.classList.toggle('medium');
    btnReset.classList.toggle('medium');
    btnEqual.classList.toggle('medium');
    toggleNumber.classList.toggle('medium');
    toggleTitle.classList.toggle('medium');
}
