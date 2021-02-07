//Zad 5

createRandomDiv = () => {

  let generator = document.createDocumentFragment();
  let count = Math.random() * 25; 

  for (let i = 1; i < count; i++) {

    let divElement = document.createElement("div");

    let divElementText = document.createTextNode(
      `Div nr: ${i}`
    );

    divElement.appendChild(divElementText);
    document.body.appendChild(divElement);
  }
}

createRandomDiv();
