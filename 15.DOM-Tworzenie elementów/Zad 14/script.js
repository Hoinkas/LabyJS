let person = {
  name: "",
  surname: "",
  age: "",
};

change("Olek", "Witoledzki", 15);
console.log(person);

function change(name, surname, age) {
  person.name = name;
  person.surname = surname;
  person.age = age;

  let lenghtName = person.name.length;
  let lenghtSurname = person.surname.length;

  if (lenghtName > 5 || lenghtSurname > 5) {
    createButton();
  }
}

function createButton() {
  var button = document.createElement("button");
  button.innerHTML = "clear";

  var body = document.getElementsByTagName("body")[0];
  body.appendChild(button);

  button.addEventListener("click", () => {
    clear();
  });
}

function clear() {
  person.name = "";
  person.surname = "";
  person.age = "";

  delete person.lenghtName
  delete lenghtSurname

  console.log(person);
}


