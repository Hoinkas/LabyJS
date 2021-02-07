buttonOne = document.querySelector("#buttonOne");
buttonTwo = document.querySelector("#buttonTwo");

var listOne = document.querySelector("#listOne");
var listTwo = document.querySelector("#listTwo");

var childOne = listOne.children;
var childTwo = listTwo.children;

var lenOne = childOne.length;
var lenTwo = childTwo.length;

var swith;

function moveToSecondList() {

  console.log(lenOne)

  if (lenOne > 0) {

        swith = listOne.lastElementChild;

        listTwo.appendChild(swith);
        swith.removeChild;

        buttonTwo.disabled = false;
        buttonOne.disabled = false;

        if (lenOne == 1) {
          buttonOne.disabled = true;
        }

        lenOne--
        lenTwo++
  }
}

function moveToFirstList() {

  if (lenTwo == 1) {
    buttonTwo.disabled = true;
  }

  if (lenTwo > 0) {
        swith = listTwo.lastElementChild;

        listOne.appendChild(swith);
        swith.removeChild;

        buttonTwo.disabled = false;
        buttonOne.disabled = false

        if (lenTwo == 1) {
          buttonTwo.disabled = true;
        }

        lenTwo--
        lenOne++
    }
  }