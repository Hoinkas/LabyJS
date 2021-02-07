//Zadanie 1
let numOne = 4;
let numTwo = 5;

if(numOne > numTwo) {
    console.log(numOne + " jest większe od " +numTwo);
}
else {
    console.log(numTwo + " jest większe od " + numOne);
}

//Zadanie 2
let nrOne = 15;
let nrTwo = 20;
let nrThree = 25;

if(nrOne > nrTwo && nrOne > nrThree) {
    console.log(nrOne + " jest największą cyfrą.");
}
else if(nrTwo > nrOne) {
    console.log(nrTwo + " jest największą cyfrą.");
}
else {
    console.log(nrThree + " jest największą cyfrą.");
}

//Zadanie 3
for (let i=0; i<10; i++) {
    console.log("Lubię JavaScript");
}

//Zadanie 4
let result = 0;

for (let i=0; i<=10; i++) {
    result += i;
}

console.log(result);

//Zadanie 5
var n = 5;

for (let i=0; i<n + 1; i++) {
    console.log(`${i} - ${i%2 == 0 ? "parzysta" : "nieparzysta"}`);
}

//Zadanie 6
for(let i = 0; i < 5; i++) {
    for(let j = 0; j < 6; j++) {
        console.log("i= " + i + ", j= " + j);
    }
}

//Zadanie 7
for(i = 1; i <= 100; i++) {
    if(i % 3 == 0 && i % 5 == 0 && i != 0) {
        console.log("FizzBuzz ");
    }
    else if(i % 3 == 0) {
        console.log("Fizz ");
    }
    else if(i % 5 == 0) {
        console.log("Buzz ");
    }
    else {
        console.log(i);
    }
}

// Zadanie 8a
let sign = "*"
let output = "";

for(let i = 0; i <5; i++) {
  console.log(output += sign);
}

//Zadanie 8b
let wide =5 

for (i = wide; i >= 0 ; i--){
    console.log(" ".repeat(i) + "* ".repeat(wide-i))
}

//Zadanie 8c

let wide = 5;
let lengh = (wide * 2)-1;

let space = row - 1;
let signs = 1;
for(let i = 0; i < row; i++) {
    let line = '';
    for(let j = 0; j < sings; j++) {
        line += " ";
    }
    for(let k = 0; k< sings; k++) {
        line += "*";
    }
    console.log(line);

    space -= 1;
    signs += 2;
}

// Zadanie 8d

let wide = 5;

for(i = 1; i <= wide ; i++) {
    let line = " ";
    for(let j = 1; j <= i; j++) line +="*";
    for (k= i; k<=wide-1; k++) line += k;
    console.log(line);
}
console.log(" -----")
for(i = 1; i <= wide ; i++) {
    let line = " ";
    let j = 0;
    for(j = wide; j >= i; j--) line +="*";
    for (let j = wide - i + 1;  j <= wide -1; j++) line += j;
    console.log(line);
}

// Zadanie 8e

let wide = 5;

for (i = wide; i >= 0 ; i--) {
    console.log(" ".repeat(i) + "* ".repeat(wide-i))
}
for (i = 1; i <=3; i++) {
    console.log(" ".repeat(Math.floor (wide/2)+2)+"*")
}