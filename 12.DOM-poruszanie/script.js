//Zad 1

const buz = document.querySelector("#buz");
const baz = document.querySelector("#baz");
const foo = document.querySelector("#foo");

//1.1
console.log(buz.parentElement);
//1.2
console.log(baz.previousElementSibling);
//1.3
console.log(foo.children);
//1.4
console.log(foo.parentNode);
//1.5
console.log(foo.firstElementChild);
//1.6
console.log(foo.children[Math.floor(foo.children.length / 2)]);

//Zad 2

function getElement(element) {
    var elements = document.getElementById(element);
    elements.addEventListener('click', function(){
        var txt = this.children[0].innerText;
        console.log(txt);
    })
}

getElement("ex2");

//Zad 3

function getElement() {
    const root = document.getElementById('ex3');
    const buttons = root.querySelector('button')
}

getElement();

//Zad 4

function foo(){
    const root = document.getElementById('ex3');
    const buttons = root.querySelectorAll('button');

    buttons.forEach(key => {
        console.log(key)

        key.addEventListener('click', e => {
            if(key.nextElementSibling.style.display === 'none'){
                key.nextElementSibling.style.display='block';
            }else {
                key.nextElementSibling.style.display='none';
            }
        })
    })
}

foo()

//Zad 4

const ex3Divs = document.querySelectorAll('#ex3 button');

ex3Divs.forEach((div) => {
    div.addEventListener('click', (event) => {
        const parentElement = event.target.parentElement;
        let randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);
        parentElement.style.backgroundColor = randomColor;
    })
})

//Zad 5

var elements = document.querySelectorAll("div#ex5 div");

var listElements = document.querySelectorAll("div#ex5 li");

for(var i = 0; i < elements.length; i++){
    elements[i].addEventListener('mouseover', function(){
        var color = this.style.backgroundColor;

        listElements[0].style.backgroundColor = color;
        listElements[listElements.length - 1].style.backgroundColor = color;
        for(var j = 0; j < listElements.length; j++) {
            if(j % 2 !== 0) {
                listElements[j].style.backgroundColor = color;
            }
        }
        for(var j = 0; j < listElements.length; j++) {
            listElements[j].style.backgroundColor = color;
        }

        ulElement.style.backgroundColor = color;
    })
}

//Zad 6

let ex61 = document.querySelector("#ex6").firstElementChild.firstElementChild.firstElementChild;
console.log(ex61);

let ex62 = document.querySelector('#ex6').firstElementChild.parentNode.firstElementChild.firstElementChild.nextElementSibling.parentNode;
console.log(ex62);

let ex63 = document.querySelector('#ex6').parentNode.firstElementChild.parentNode.children[1].firstElementChild.firstElementChild.firstElementChild;
console.log(ex63);