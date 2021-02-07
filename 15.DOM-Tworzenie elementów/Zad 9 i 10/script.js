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

document.getElementById("table").style.display == 'none';

data = [];
let count = 0;

function onSubmit(event) {
  let form = document.forms["myForm"];

  console.log(arguments);
  let formData = new FormData(form);
  document.myForm.reset();

  count++;
  let amount = count;
  firstName = formData.get("firstName");
  surname = formData.get("surname");
  age = formData.get("age");
  children = formData.get("children");


  upperFirstLetter(firstName, surname)

  const person = new Person(amount, firstNameUpper, surnameUpper, age, children);
  data.push(person);

  createElement();
}

function createElement() {
  let createArea = document.querySelector("#addObjects");
  for (i = 1; i <= amount; i++) {
      const element = document.createElement(`div`);
      element.innerHTML = `<td>${person.firstName}</td><td>${person.surname}</td><td>${person.age}</td><td>${person.children}</td>`;
    createArea.appendChild(element);
  }
}

// Zad 10

let firstNameUpper
let surnameUpper

function upperFirstLetter(firstName, surname) {
  firstNameUpper = firstName.charAt(0).toUpperCase() + firstName.slice(1);
  surnameUpper = surname.charAt(0).toUpperCase() + surname.slice(1);
}