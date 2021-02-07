let string ="Lorem Ipsum Ala";
let search;

let object = {
  tekst: string,
  get aleksandra() {
    let words = string.split(" ");
    search = words.includes('Ala');
    console.log(found)

    for (let i = 0; i < words.length; i++) {
        words[i] = words[i].replace("Ala","Ola")
    }
    info = words.join(" ");

    if(search == false){
        info = "Słowo Ala nie występuje w tekście."
    }

    return info;
  },
};

function addObject() {
  printTekst = object.aleksandra;

  var gen = document.createDocumentFragment();
  let divElement = document.createElement("div");
  let divElementText = document.createTextNode(printTekst);

  divElement.appendChild(divElementText);
  document.body.appendChild(divElement);
}

