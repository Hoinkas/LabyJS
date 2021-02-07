let type;
let tekst;
let kolor;
let kolorTla;
let amount;

function onSubmit(event) {
  let formularz = document.formularzs["formularz"];

  let formularzData = new FromFata(formularz);

  type = formularzData.get("elementType");
  tekst = formularzData.get("tekst");
  kolor = formularzData.get("kolor");
  kolorTla = formularzData.get("kolorTla");
  amount = formularzData.get("amount");

  console.log(type);
  console.log(tekst);
  console.log(kolor);
  console.log(kolorTla);
  console.log(amount);
  
  createElement();
}

function createElement() {
  let createObject = document.querySelector("#createObject");
  for (i = 1; i <= amount; i++) {
      const element = document.createElement(`div`);
      element.innerHTML = `<${type} style = "kolor:${kolor};background-kolor: ${kolorTla};">${tekst}</${type}>`;
      console.log(i);
    createObject.appendChild(element);
  }
}
