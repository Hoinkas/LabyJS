//Zad 9

let firstName = "";
let surname = "";
let age = "";
let children = "";

class Person {
  constructor(amount, firstName, surname, age, children) {
    this.amount = amount;
    this.firstName = firstName;
    this.surname = surname;
    this.age = age;
    this.children = children;
  }
}

data = [];
let count = 0;

Update = () => {
  let form = document.forms["myForm"];
  let info = new FormData(form);

  console.log(arguments);

  count++;
  let amount = count;
  firstName = info.get("firstName");
  surname = info.get("surname");
  age = info.get("age");
  children = info.get("children");

  upperFirstLetter(firstName, surname)

  const person = new Person(amount, firstNameUpper, surnameUpper, age, children);
  data.push(person);

  addTab();
}

function addTab() {

  let table = document.querySelector("#table").style.display = "table"

  for(person of data){
    let table = document.querySelector("#table");
    const tr = document.createElement("tr");
    tr.innerHTML = `<td>${person.firstName}</td><td>${person.lastName}</td><td>${person.age}</td><td>${person.children}</td>`;
    table.appendChild(tr);
  }
}

// Zad 10

let firstNameUpper
let surnameUpper

function upperFirstLetter(firstName, surname) {
  firstNameUpper = firstName.charAt(0).toUpperCase() + firstName.slice(1);
  surnameUpper = surname.charAt(0).toUpperCase() + surname.slice(1);
}