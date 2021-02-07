function Person(name, lastname, age, country, city) {
    this.name = name;
    this.lastname = lastname;
    this.age = age;
    this.country = country;
    this.city = city;

    this.showDetails = function () {
        console.log(`Name: ${this.name}
        Surname: ${this.lastname}
        Age: ${this.age},
        Country: ${this.country},
        City: ${this.city}`);
    }

    this.addOneYear = function () {
        ++this.age;
    }
}