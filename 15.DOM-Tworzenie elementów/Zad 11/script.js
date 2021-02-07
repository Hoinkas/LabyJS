let string = "aa 1 bb 3";
let words = [];
let numbers = [];

function checkIfString() {
  let words = string.split(" ");

  words.forEach((e) => {

    let i = parseInt(e, 10);

    if (!isNaN(i)) {
      numbers.push(i);
    }
  });

  let sum = 0;
  numbers.forEach(num => {
    sum += num;
  });
  console.log(sum);
  
  let divs = 1;
  
  numbers.forEach(num => {
    divs *= num;
  });

  for (var i = 1; i <= divs; i++) {
  
    let divEl = document.createElement("div");
    let divElText = document.createTextNode(string);
  
    divEl.appendChild(divElText);
    document.body.appendChild(divEl);
  }
}

checkIfString();