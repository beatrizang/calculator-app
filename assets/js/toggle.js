var toggle = document.getElementById('container');
var body = document.querySelector('body');
var displayCalculator = document.querySelector('.calculator__display');
var buttonsCalculator = document.querySelector('.calculator__buttons');
var btnNumber = document.querySelector('.btn-number');
var btnOperator = document.querySelector('.btn-operator');
var btnFunc = document.querySelector('.btn-func');
var btnReset = document.querySelector('.btn-reset');
var btnEqual = document.querySelector('.btn-equal');
var toggleNumber = document.querySelector('.top__toggle');
var toggleTitle = document.querySelector('.calculator__title');

var count = 0;

toggle.onclick = function(){
    switch (count) {
        case 0:
          themeMedio();
          count++;
          break;
        case 1:
          themeLast();
          count++;
          break;
        case 2:
          themeFirst();
          count = 0;
          break;
      }
}

function themeFirst(){
    removeMedium();
    removeLast();
}

function removeMedium(){
    toggle.classList.remove('medium');
    body.classList.remove('medium');
    displayCalculator.classList.remove('medium');
    buttonsCalculator.classList.remove('medium');
    btnOperator.classList.remove('last');
    btnNumber.classList.remove('last');
    btnFunc.classList.remove('medium');
    btnReset.classList.remove('medium');
    btnEqual.classList.remove('medium');
    toggleNumber.classList.remove('medium');
    toggleTitle.classList.remove('medium');
}

function removeLast(){
    toggle.classList.remove('last');
    body.classList.remove('last');
    displayCalculator.classList.remove('last');
    buttonsCalculator.classList.remove('last');
    btnOperator.classList.remove('last');
    btnNumber.classList.remove('last');
    btnFunc.classList.remove('last');
    btnReset.classList.remove('last');
    btnEqual.classList.remove('last');
    toggleNumber.classList.remove('last');
    toggleTitle.classList.remove('last');
}

function themeMedio(){
    toggle.classList.toggle('medium');
    body.classList.toggle('medium');
    displayCalculator.classList.toggle('medium');
    buttonsCalculator.classList.toggle('medium');
    btnNumber.classList.remove('last');
    btnOperator.classList.remove('last');
    btnFunc.classList.toggle('medium');
    btnReset.classList.toggle('medium');
    btnEqual.classList.toggle('medium');
    toggleNumber.classList.toggle('medium');
    toggleTitle.classList.toggle('medium');
}

function themeLast(){
    toggle.classList.toggle('last');
    body.classList.toggle('last');
    displayCalculator.classList.toggle('last');
    buttonsCalculator.classList.toggle('last');
    btnFunc.classList.toggle('last');
    btnReset.classList.toggle('last');
    btnEqual.classList.toggle('last');
    btnNumber.classList.toggle('last');
    btnOperator.classList.toggle('last');
    toggleNumber.classList.toggle('last');
    toggleTitle.classList.toggle('last');
}