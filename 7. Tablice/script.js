// Zadanie 1
let tab = [1, 22, 33, 44];

for (let i=0; i<tab.length; i++) {
    console.log(tab[i]);
}

//Zadanie 2
let tab = [44, 55, 66, 77, "x", "y", "z"];
let leng = tab.length;

console.log(tab[0]);
console.log(tab[leng-1]);
console.log(tab);

for(let i=0; i < leng; i++){
    if(i%2 == 0) console.log(tab[i])
    if(typeof(tab[i]) == 'string') console.log(tab[i])
    if(typeof(tab[i]) == 'number') console.log(tab[i])
}

// Zadanie 4

let tab= [11, 22, 33, 44, 55];

// Zadanie 4.1
console.log(tab.reduce((a, b) => a + b));

// Zadanie 4.2
console.log(tab.reduce((a, b) => a - b));

// Zadanie 4.3
console.log(tab.reduce((a, b) => a + b / tab.length));

// Zadanie 4.4
tab.filter((a, i) => a % 2 === 0).forEach(a => {
    console.log(a);
});

// Zadanie 4.5
tab.filter((a, i) => a % 2 !== 0).forEach(a => {
    console.log(a);
});

// Zadanie 4.6
let max = 0;
tab.forEach(v => {
    if (i > max) max = i;
});

console.log(max);

// Zadanie 4.7
let min = 0;
tab.forEach(a => {
    if (a < min) min = a;
});

console.log(min);

// Zadanie 4.8
let len = tab.len - 1;

tab.forEach((a, i) => {
    console.log(tab[len - i]);
});

// Zadanie 5

let tab = [1,2,3,4];

function tableSum(tab){

    for(i=0; i<tab.length; i++){
        console.log()
    }
};

tableSum(tab);

// Zadanie 6

tab([1,2,3,4]);

function tableSr(tab){
    let sum =0;
    let length = 0;

    for (i=0; i<tab.length; i++){
        if(tab[i] % 2 == 0){

            sum = sum + tab[i];
            length++;
        }
    }

    let sr = sum / length;
    console.log(sr)
};

tableSr(tab);

// Zadanie 10
let tab = [1,2,3,4,5,6,7];

function reverse(tab) {
    return tab.map(a => {
        return a * (-1);
    })
}
console.log(reverse(tab));