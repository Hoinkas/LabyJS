//Zadanie 1
let i = 0;

var n = setInterval(() => {
    console.log("Cześć po raz "+ i++);

    if (i >= 15) {
        clearInterval(n);
    }
}, 3000 );

//Zadanie 2
var tab = [11, 22, 33, 44, 55]
let i = 0;

setTimeout(() => {
    console.log(tab)
    }, 2000
);

var count = setInterval(() => {
    i++;
    console.log(tab[i-1]);

    if (i >= tab.length) {
        clearInterval(time);
        }
    }, 3000
);