let type;
let tekst;
let color;
let backgroundColor;
let amount;

function onSubmit(event) {
  let forms = document.forms["myForms"];

  let formsData = new FormData(forms);

  type = formsData.get("type");
  tekst = formsData.get("tekst");
  color = formsData.get("color");
  backgroundColor = formsData.get("backgroundColor");
  amount = formsData.get("amount");


  console.log(type);
  console.log(tekst);
  console.log(color);
  console.log(backgroundColor);
  console.log(amount);
  
  createElement();
}

function createElement() {
  let createArea = document.querySelector("#addObjects");
  for (i = 1; i <= amount; i++) {
      const element = document.createElement(`div`);
      element.innerHTML = `<${type} style = "color:${color};background-color: ${backgroundColor};">${tekst}</${type}>`;
      console.log(i);
    createArea.appendChild(element);
  }
}
