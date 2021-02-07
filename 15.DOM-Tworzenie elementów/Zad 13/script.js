string1 = "Kabanos is the best band ever";
string2 = "Woodstock is life";
string3 = "Folder 14 and 15 supposed to take a night, took 3";
string4 = "This task set blew my mind.";
string5 =
  "Music Legend of Zelda • FULL Relaxing Music, plays in the background. Masterpiece";

arr = [string1, string2, string3, string4, string5];

charsNum = [];

for (i = 0; i <= arr.length - 1; i++) {
  let num = 0;
  let localString = arr[i];
  let len = localString.length;
  for (let j = 0; j <= len; j++) {
    if (isCharacterALetter(localString.charAt(j))) {
      num++;
    }
  }
  charsNum.push(num);
}

function isCharacterALetter(char) {
    return /[a-zA-Z]/.test(char);
}

let sum = 0;
for (let i = 0; i < charsNum.length; i++) {
  sum += charsNum[i];
}

let avg = 0;
for (let i = 0; i < charsNum.length; i++) {
    avg = sum/i;
}


console.log("num of letters in strings = " + charsNum);
console.log("sum of letters in strings = " + sum);
console.log("avg num of letter in strings = " + avg);
