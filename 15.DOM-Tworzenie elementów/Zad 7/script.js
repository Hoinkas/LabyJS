buttonOne = document.querySelector("#buttonOne");
buttonTwo = document.querySelector("#buttonTwo");

var listOne = document.querySelector("#listOne");
var listTwo = document.querySelector("#listTwo");

var childOne = listOne.children;
var childTwo = listOne.children;

console.log(childOne);
console.log(childTwo);

var lenOne = childOne.length;
var lenTwo = childOne.length;

var swith;

function moveToSecondList() {
    if (lenOne > 0) {
        swith = listOne.lastElementChild;
        listTwo.appendChild(swith);
        listOne.lastElementChild.removeChild;

        buttonTwo.disabled = false;
    }

    else if (lenOne == null) {
      buttonTwo.disabled = true;
    }
}

function moveToFirstList() {
    if (lenTwo > 0) {
        swith = listTwo.lastElementChild;
        listOne.appendChild(swith);
        listTwo.lastElementChild.removeChild;

        buttonOne.disabled = false;
    }

    else if (lenTwo == null) {
      buttonOne.disabled = true;
    }
  }