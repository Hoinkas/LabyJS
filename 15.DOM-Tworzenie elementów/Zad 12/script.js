let string ="- Ala ma kota. Parafraza: Ala jest posiadaczką kota.- Ala ma kota. Pastisz. Ola ma psa.- Ala ma kota. Parodia: Kot ma Alę.- Ala ma kota. Trawestacja (poważnie): Upiorna z wyglądu i demoniczna z zachowania Alicja była w posiadaniu nie mniej przerażającego i groźnego dla mysz zwierzęcia - kota.- Ala ma kota. Trawestacja (z humorem): Wesoła trzpiotka Ala miała pod swoją opieką nienormalnego, bo zakochanego w psach kota.";
// let string = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";

let found;

let obj = {
  story: string,
  get alaOla() {
    let words = string.split(" ");
    found = words.includes('Ala');
    console.log(found)

    for (let i = 0; i < words.length; i++) {
        words[i] = words[i].replace("Ala","Ola")
    }
    newString = words.join(" ");

    if(found == false){
        newString = "Słowo Ala nie występuje w tekście."
    }

    return newString;
  },
};

function createDiv() {
  prtString = obj.alaOla;

  var gen = document.createDocumentFragment();
  let divElement = document.createElement("div");

  let divElementText = document.createTextNode(prtString);

  divElement.appendChild(divElementText);

  document.body.appendChild(divElement);
}

