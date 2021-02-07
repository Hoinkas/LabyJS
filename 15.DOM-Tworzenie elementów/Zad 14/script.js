let obj = {
  name: "",
  surname: "",
  age: "",
};

let name1 = "Ala";
let name2 = "Krzysztof";
let surname1 = "Kot";
let surname2 = "Makota";
let age1 = "13";
let age2 = "34";

// attach(name1, surname1, age1);
attach(name2, surname2, age1);

function attach(name1) {
  obj.name = name1;
  obj.surname = surname1;
  obj.age = age1;

  let lenName = 0;
  for (let i = 0; i <= obj.name.length - 1; i++) {
    lenName++;
  }
  let lenSurname = 0;
  for (let j = 0; j <= obj.name.length - 1; j++) {
    lenSurname++;
  }
  obj.lenN = lenName;
  obj.lenS = lenSurname;

  if (lenName > 5 || lenSurname > 5) {
    generateButton();
  }
}

function generateButton() {
  var button = document.createElement("button");
  button.innerHTML = "Reset";

  var body = document.getElementsByTagName("body")[0];
  body.appendChild(button);

  button.addEventListener("click", function () {
    reset();
  });
}

function reset() {
    obj.name = "";
    obj.surname = "";
    obj.age = "";

    delete obj.lenN;
    delete obj.lenS;

    console.log(obj);
}
console.log(obj);

