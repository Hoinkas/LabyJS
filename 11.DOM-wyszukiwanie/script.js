//Zad 1

let search = document.getElementsByClassName('list');

console.log(search);

//Zad 2

function tagElements(tag) {
    const elements = document.getElementsByTagName(tag);
    for (let i=0; i<this.elements.length; i++) {
        console.log(this.elements[i])
    }
}

tagElements('ul');

//Zad 3

let listELement = document.getElementById('list');

console.log(listELement);

//Zad 4

function elements(element) {
    console.log(element);
}

elements(document.querySelectorAll("li"));
elements(document.querySelectorAll("ul"));
elements(document.querySelectorAll("span"));
elements(document.querySelectorAll("div.list span"));
elements(document.querySelectorAll("div#spans span"));