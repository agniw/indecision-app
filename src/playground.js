class Person {
    constructor(name = 'Anonymous', age = 0) {
        this.name = name;
        this.age = age;
    }
    getGreetings() {
        return `Hi I am ${this.name}`
    }
    getDescription() {
        return `${this.name} is ${this.age} year(s) old.`
    }
}

class Traveller extends Person {
    constructor(name, age, homeLocation){
        super(name, age);
        this.homeLocation = homeLocation;
    }
    getGreetings(){
        let text = super.getGreetings();
        if (this.homeLocation()) {
            text+= `i am visiting from ${this.homeLocation}`;
        }

        return text;
    }
}