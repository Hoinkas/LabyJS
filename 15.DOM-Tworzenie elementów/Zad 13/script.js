tab = ["aaa1", "bbb", "ccc2", "ddd", "eee3"];

chars = [];

for (i = 0; i <= tab.length - 1; i++) {
  let num = 0;
  let text = tab[i];
  let len = text.length;

  for (let j = 0; j <= len; j++) {
    if (isCharString(text.charAt(j))) {
      num++;
    }
  }
  chars.push(num);
}

function isCharString(char) {
    return /[a-zA-Z]/.test(char);
}

let words = [];
let numbers = [];

function checkIfString() {
  tab.forEach(str => {
    let words = str.split(" ");

    words.forEach((e) => {

    let i = parseInt(e, 10);

    if (!isNaN(i)) {
      numbers.push(i);
      }
    })
  })
}
  
let sum = 0;
chars.forEach(char => {
  sum += char;
});

let sr = sum/chars.length;

console.log("Ilość liter = " + chars);
console.log("Suma liczb = " + sum);
console.log("Średnia liczb = " + sr);
