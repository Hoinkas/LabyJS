//Zad 5

function ceateRandomDiv() {

  var generator = document.createDocumentFragment();
  var count = Math.floor(Math.random() * 25); 

  for (var i = 1; i < count; i++) {

    let divElement = document.createElement("div");

    let divElementText = document.createTextNode(
      `Div nr: ${i}`
    );

    divElement.appendChild(divElementText);
    document.body.appendChild(divElement);
  }
}

createRandomDiv();
