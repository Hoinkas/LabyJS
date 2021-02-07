let nameN = "";
let surname = "";
let age = "";
let children = "";

let nameNCapitalized
let surnameCapitalized

class Person {
  constructor(number, fname, lname, age, children) {
    this.number = number;
    this.firstName = fname;
    this.lastName = lname;
    this.age = age;
    this.children = children;
  }
}

document.getElementById("table").style.display == 'none';

let counter = 0;

data = [];

function onSubmit(event) {
  let form = document.forms["myForm"];

  console.log(arguments);
  let formData = new FormData(form);
  // document.myForm.reset();
  // aby wyczyścić zawartosc labali formularza
  // czemu się przeładowuje? TODO

  counter++;
  let number = counter;
  nameN = formData.get("name");
  surname = formData.get("surname");
  age = formData.get("age");
  children = formData.get("children");



  capitalizeFirstLetter(nameN, surname)

  const person = new Person(number, nameNCapitalized, surnameCapitalized, age, children);
  data.push(person);

}

function createTable() {

  let table = document.querySelector("#table").style.display = "table"

  for(let person of data){
    let table = document.querySelector("#table");
    const tr = document.createElement("tr");
    tr.innerHTML = `<td>${person.firstName}</td><td>${person.lastName}</td><td>${person.age}</td><td>${person.children}</td>`;
    table.appendChild(tr);
  }
}

// Zadanie 10

function capitalizeFirstLetter(nameN, surname) {
  nameNCapitalized = nameN.charAt(0).toUpperCase() + nameN.slice(1);
  surnameCapitalized = surname.charAt(0).toUpperCase() + surname.slice(1);
}
