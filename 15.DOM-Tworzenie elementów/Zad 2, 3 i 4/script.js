//Zad 2
//In HTML

//Zad 3
function deleteFruits() {

  let listOfFruits = document.getElementById("listOfFruits");
  let del = [];
  let childAmount = listOfFruits.childElementCount;

  for (i = 0; i < childAmount; i++) {
    if (i % 2 != 0) del.push(listOfFruits.children[i]);
  }

  del.forEach((el) => el.remove());
}

//Zad 4
function deleteButton() {

  document.getElementById("buttonToRemove").remove();
}