//Zad 1
const moreDivs = document.querySelectorAll('.more-divs');

function myFunc(paramArray) {
    let newArray = [];

    for (let i = 0; i < paramArray.length; i++) {
        newArray.push(paramArray[i].tagName);
    }
    return newArray;
}

console.log(myFunc(moreDivs));

//Zad 2
var sList = document.querySelector('ul.short-list');

function zadanie2(element) {
    console.log(element.innerHTML);
    console.log(element.outerHTML);
    console.log(element.className);
    console.log(element.classList);
    console.log([...element.classList]);
    console.log(element.dataset);
}

zadanie2(sList);

//Zad 3
var sumAndSub = (element) => {

    var num1 = parseInt(element.dataset.numerone);
    var num2 = parseInt(element.dataset.numbertwo);
    var num3 = parseInt(element.dataset.numberThree);
    var sum = num1 + num2 + num3;
    var sub = num1 - num2 - num3;

    return [sum,sub];
};

console.log(sumAndSub(document.querySelector('#datasetCheck')));

//Zad 4
const span = document.getElementNuId('spanText');
console.log(span.innerText = 'zmieniony tekst');

//Zad 5
document.querySelector('#spanText').className = 'test';
document.querySelector('#spanText').classList.add = 'testex';
document.querySelector('#spanText').classList.remove = 'test';

//Zad 6
var table = document.getElementById("classes");

function takeClass(classList) {

    console.log(classList)

    for(var i=0; i<table.lenght; i++) {
        newArray.push(classList[i]);
    }

    console.log(newArray.join(' + '));

    table.className = '';

    console.log('Usunięto wszstkie klasy');
}

takeClass(table.classList)

//Zad 7
function addClass(param) {
    param = parseInt(param);
    const numbers = document.querySelector("#numbers");
    if(param %2==0) {
        numbers.className = "even";
    }
    else { 
        numbers.className = "odd";
    }
}

var randomNum = Math.floor(Math.random() * 11);
addClass(randomNum)

// zmiana