// Zadanie 1

let btn = document.querySelector('#test-event');
btn.addEventListener('click', function(event){
    console.log(event.type);
});

btn.addEventListener('mouseover', function(event){
    console.log(event.type);
});

btn.addEventListener('mousemove', function(event){
    console.log(event.type);
});

btn.addEventListener('keypress', function(event){
    console.log(event.type);
});

document.addEventListener('scroll', function(event){
    console.log(event.type);
});

document.querySelector('#input-test').addEventListener("change", function (event){
    console.log(event.type);
});


// Zadanie 2

function show() {
    const btnEx2 = document.getElementById("ex2")
    btnEx2.addEventListener('click', enterText => {
        let dataText = enterText.target.dataset.text;
        let belowElement = enterText.target.nextElementSibling;
        belowElement.innerText = dataText;
    })
}

show()

// Zadanie 3

function changeColor() {
    const btnEx3 = document.getElementById("ex3")

    btnEx3.addEventListener('mouseover', (e) => {
        e.target.style.backgroundColor = 'blue';
    });

    btnEx3.addEventListener('mouseout', (e) => {
        e.target.style.backgroundColor = 'red';
    })   
}

changeColor();

// Zadanie 4

const inputError = document.getElementById('ex3-err');
const input = document.getElementById('input-test');

input.addEventListener('keyup', (e) => {
    const reg = /[0-9]/gm;
    const checkIfNumber = e.target.value.match(reg);
    if (checkIfNumber !== null) {
        inputError.innerText = 'You cannot enter numbers here';
    }else {
        inputError.innerText = '';
    }
});


// Zadanie 5

const btnEx5 = document.getElementById('ex5-btn');
const counter = document.getElementById('ex5');
let clickNumber = 0;

btnEx5.addEventListener('click', function counting() {
    clickNumber++;
    if(clickNumber == 10) {
        btnEx5.removeEventListener('click', counting)
    }
    else {
        counter.innerHTML = clickNumber;
    }
})


// Zadanie 6

function changeBack() {
    document.addEventListener('scroll', (event)=> {
        let scrollState = window.scrollY;
        let body = document.querySelector('body');

        if (scrollState > 200) {
            body.style.backgroundColor = 'red';
        }else{
            body.style.backgroundColor = 'white';
        }
    })
}
changeBack();

//Zadanie 7

var input = document.querySelector('div#calculator > input');
var buttons = document.querySelectorAll('div#calculator button');
var number = 0;
var number2 = 0;

function numPress() {
    
    for(let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', function() {
            if(this.innerText === '+'){
                input.value = number + number2;
                number = 0;
                number2 = 0;                
                input.value = number + number2;
                number = 0;
                number2 = 0;
            }
            else if(this.innerText === '-'){
                input.value = number - number2;
                number = 0;
                number2 = 0;

            }
            else if(this.innerText === '*'){
                input.value = number * number2;
                number = 0;
                number2 = 0;
            }
            else if(this.innerText === '/'){
                if (number2 === 0){
                    input.value =("cholero nie dziel przez 0!");
                }else 
                input.value = number / number2;
                number = 0;
                number2 = 0;
            }else {
                console.log(number);
                console.log(number2);
                if(number === 0){
                    input.value = '';
                    number = Number(this.innerText)
                } else {
                    number2 = Number(this.innerText);
                }
            }
        })
    }
}

numPress();
