//Zad 1

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


//Zad 2

function show() {
    const btnEx2 = document.getElementById("ex2")
    btnEx2.addEventListener('click', enterText => {
        let dataText = enterText.target.dataset.text;
        let belowElement = enterText.target.nextElementSibling;
        belowElement.innerText = dataText;
    })
}

show()

//Zad 3

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

//Zad 4

const inputError = document.getElementById('ex3-err');
const input = document.getElementById('input-test');

input.addEventListener('keyup', (e) => {
    const reg = /[0-9]/gm;
    const cehckNum = e.target.value.match(reg);
    if (cehckNum !== null) {
        inputError.innerText = 'You cannot enter here';
    }else {
        inputError.innerText = '';
    }
});


//Zad 5

const btnEx5 = document.getElementById('ex5-btn');
const counter = document.getElementById('ex5');
let cn = 0;

btnEx5.addEventListener('click', function counting() {
    cn++;
    if(cn == 10) {
        btnEx5.removeEventListener('click', counting)
    }
    else {
        counter.innerHTML = cn;
    }
})


//Zad 6

function reset() {
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
reset();

//Zad 7

var input = document.querySelector('div#calculator > input');
var buttons = document.querySelectorAll('div#calculator button');
var num = 0;
var num2 = 0;

function downCalc() {
    
    for(let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', function() {
            if(this.innerText === '+'){
                input.value = num + num2;
                num = 0;
                num2 = 0;                
                input.value = num + num2;
                num = 0;
                num2 = 0;
            }
            else if(this.innerText === '-'){
                input.value = num - num2;
                num = 0;
                num2 = 0;

            }
            else if(this.innerText === '*'){
                input.value = num * num2;
                num = 0;
                num2 = 0;
            }
            else if(this.innerText === '/') {
                if (num2 === 0){
                    input.value = "incorrect operation";
                } else 
                input.value = num / num2;
                num = 0;
                num2 = 0;
            }else {
                console.log(num);
                console.log(num2);
                if(num === 0){
                    input.value = '';
                    num = num(this.innerText)
                } else {
                    num2 = num(this.innerText);
                }
            }
        })
    }
}

downCalc();