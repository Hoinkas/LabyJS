// Zad 1

let car = {
    name: "BMW",
    age: 12
}

console.log(car.name);
console.log(car.age);

// Zad 2
let car = {
    name: "BMW",
    age: 12,
    changeName: function(newName) {
        this.name = newName;
    }
}

car.changeName("Maluch");
console.log(car.name);
console.log(car.age);

// Zad 3

let newObject = {
    sum: 0,
    sumOfVal: function(array) {
        let sum;
        array.forEach(item => this.sum += item);
    }
}

newObject.sumOfVal([1, 5, 7]);
console.log(newObject.sum);

// Zad 4

let car = {
    name: "BMW",
    age: 12,
};
const carCountryCity = {
    country: 'Poland',
    city: 'Krakow'
};
for(let key in car){
    console.log(key + ":" + car[key]);
}

// Zad 5

let colour = {
    type: "Matowy",
    firstColor: "White",
    secondColor: "Silver"
}

let car = {
    name: "BMW",
    age: 12,
    colour
};

console.log(car.colour.type)
console.log(car.colour.firstColor)
console.log(car.colour.secondColor)

// Zad 6

let car = {
    name: "BMW",
    age: 12,
};

car.writeHello = () => {
    console.log("Hello");
}

car.writeHello();