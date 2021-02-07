//Zad 1

function Person(name, lastname, age, country, city) {
    this.name = name;
    this.lastname = lastname;
    this.age = age;
    this.country = country;
    this.city = city;

    this.showInfo = function () {
        console.log(`Name: ${this.name}
        Surname: ${this.lastname}
        Age: ${this.age},
        Country: ${this.country},
        City: ${this.city}`);

        this.addYear();
    }

    this.addYear = function () {
        ++this.age;
    }
}

let personOne = new Person('Maria', 'Anna', 41, 'Polska', 'Kraków');
let personTwo = new Person('Maja', 'Malczuk', 23, 'Polska', 'Kraków');

personOne.showInfo();
personOne.showInfo();
personOne.showInfo();
personOne.showInfo();

personTwo.showInfo();
personTwo.showInfo();
personTwo.showInfo();
personTwo.showInfo();

//Zad 2

function Person(name, lastname, age, country, city, food) {
    this.name = name;
    this.lastname = lastname;
    this.age = age;
    this.country = country;
    this.city = city;
    this.food = food;

    showInfo = () => {
        console.log(`Name: ${this.name}
        Surname: ${this.lastname}
        Age: ${this.age},
        Country: ${this.country},
        City: ${this.city},
        Favourite Food: ${this.food}`);

        this.addYear();
    }

    addYear = () => {
        ++this.age;
    }
}

showFood = (person) => {
    person.food.forEach(el => {
        console.log(el);
    });
}

addFood = (person, food) => {
    person.food.push(food);
}

let personOne = new Person('Maria', 'Anna', 41, 'Polska', 'Kraków', ['Spaghetti', 'Margarita', 'Nuggets']);
let personTwo = new Person('Maja', 'Malczuk', 23, 'Polska', 'Kraków', ['Placki ziemniaczane', 'Tort bezowy']);

showFood(personOne);
addFood(personOne, 'Kluski na parze');
showFood(personOne);

showFood(personTwo);
addFood(personTwo, 'Grzybowa');
showFood(personTwo);

//Zad 3

function Calculator(){

    let a
    let b

   this.getValues = (firstValue, secondValue) => {

       // firstValue = readline()
       // secondValue = readline()

       this.a = firstValue
       this.b = secondValue
   }

   this.addValues = () => {
       console.log(this.a + this.b)
   }

   this.substractValues = () => {
       console.log(this.a - this.b)
   }

   this.multiplyValues = () => {
       console.log(this.a * this.b)
   }

   this.divideValues = () => {
       
       let divide = parseInt(this.a / this.b)
       console.log(`${this.b == 0 ? "Błąd. B nie może być 0." : divide}`);
   }
}

let calculatorOne = new Calculator();
calculatorOne.getValues(12, 3);
calculatorOne.addValues();
calculatorOne.substractValues();
calculatorOne.multiplyValues();
calculatorOne.divideValues();

let calculatorTwo = new Calculator();
calculatorTwo.getValues(12, 0);
calculatorTwo.addValues();
calculatorTwo.substractValues();
calculatorTwo.multiplyValues();
calculatorTwo.divideValues();

//Zad 4

function Leader() {
    this.level = 0;

    this.goUp = function() {
        this.level ++
    }

    this.goDown = function() {

        if(this.level > 0) this.level--;

        else console.log("That's the ground!");
    }

    this.showLevel = () => {
        console.log(this.level);
    }
}

let leader = new Leader();

leader.showLevel();
leader.up();
leader.up();
leader.showLevel();
leader.down();
leader.showLevel();