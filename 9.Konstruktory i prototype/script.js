//Zadanie 1

function Person(firstname, lastname, age, country, city, language) {
    this.firstname = firstname,
    this.lastname = lastname,
    this.age = age,
    this.country = country,
    this.city = city,
    this.language = language;
}
let person1 = new Person('Jan', 'Malczyk', 20, 'Polska', 'Krakow', 'Polski');
let person2 = new Person('Adam', 'Wędzisławski', 22, 'Polska', 'Gliwice', 'Śląski');
let person3 = new Person('Edyta', 'Górzecka', '42', 'Polska', 'Wieliczka', 'Polski');
let person4 = new Person('Anna', 'Maria', '34', 'Polska', 'Warszawa', 'Polski');
let person5 = new Person('Wojsław', 'Miłowszewski', 28, 'Anglia', 'New York', 'Angielski')

console.log(person1)
console.log(person2)
console.log(person3)
console.log(person4)
console.log(person5)

person1.age = 98
person1.city = 'Racibórz';

console.log(person1)

//Zadanie 2

function Calculator(){

    //Memory
    this.memory = [],

    this.clearMemory = function() {
        this.memory = [];
    },

    this.showMemory = function() {
        console.log(this.memory);
    }

    //Operations
    this.sum = function(a, b) {
        this.memory.push('Dodawanie');
        console.log(a + b);
    },

    this.sub = function(a, b) {
        this.memory.push('Odejmowanie');
        console.log(a - b);
    };

    this.multiply = function(a, b) {
        this.memory.push('Mnożenie');
        console.log(a * b);
    };

    this.diverse = function(a, b) {
        this.memory.push('Dzielenie');
        console.log(a / b);
    };

}

const calculatorOne = new Calculator();
calculatorOne.sum(3,4)
calculatorOne.sub(8,2)
calculatorOne.muliply(3,5)
calculatorOne.diverse(12,3)
calculatorOne.showMemory()

const calculatorTwo = new Calculator();
calculatorTwo.sum(5,15)
calculatorTwo.sub(9,3)
calculatorTwo.muliply(12,2)
calculatorTwo.diverse(50,10)
calculatorTwo.showMemory()

// Zadanie 3

function Game(){
    
    this.prototype = [0,0],

    this.generator = new Generator(),
    this.check = new CheckIfWin(),

    this.startGame = function () {
        this.timer = setInterval(() => {
            this.prototype = this.generator.startGenerator(prototype);
            this.check.checkIfWin(prototype);
        }, 1000)
    }
};

Generator = () => {
    startGenerator = (prototype) => {
        prototype[1] = prototype[0];
        
        prototype[0] = Math.floor((Math.random() * 10) + 1);

        console.log(prototype[0]);
        checkIfWin(prototype);

        return prototype;
    }
};

CheckIfWin = () => {
        checkIfWin = (prototype) => {
        if(prototype[1] + 5 == prototype[0]){
            clearInterval(generator);
        }
    }
}

let game = new Game();
game.startGame();