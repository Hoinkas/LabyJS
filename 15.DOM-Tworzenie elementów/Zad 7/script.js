//Zad 7
let buttonOne = document.querySelector("#buttonOne");
let buttonTwo = document.querySelector("#buttonTwo");

let listOne = document.querySelector("#listOne");
let listTwo = document.querySelector("#listTwo");

let chLiOne = listOne.children;
let chLiTwo = listTwo.children;

let switchObject

let lenghtLiOne = chLiOne.length;
let lenghtLiTwo = chLiTwo.length;

function moveToFirstList() {
  if (lenghtLiOne > 0) {
    switchObject = listOne.lastElementChild;
    listTwo.appendChild(switchObject);
    listOne.lastElementChild.removeChild;
  }
  else if (lenghtLiOne == 0){
    buttonOne.disabled = true;
  }
  else buttonOne.disabled = false;
}

function moveToSecondList() {
  if (lenghtLiTwo > 0) {
    switchObject = listTwo.lastElementChild;
    listOne.appendChild(switchObject);
    listTwo.lastElementChild.removeChild;
  }
  else if (lenghtLiTwo == 0){
    buttonTwo.disabled = true;
  }
  else buttonTwo.disabled = false;
}