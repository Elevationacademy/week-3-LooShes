// basic examples and syntax
//sc3
class Animal {
    children = [] 

    constructor(name, numLegs) {
        this.name = name
        this.numLegs = numLegs
    }

    giveBirth(name){
        (this).children[(this).children.length] = name
    }
}

const cat = new Animal("Puss", 4)
cat.giveBirth("Dolly")
console.log(cat.children)
console.log(cat)

//sc1
const dog = new Animal("Barnie", 4)
console.log(dog.name)

//sc2
class Human {
    constructor(name, age, isFriendly) {
        this.name = name
        this.age = age
        this.isFriendly = isFriendly
    }
}

const person = new Human("Luss", 34, false)
console.log(person.name)
console.log(person.age)
console.log(person.isFriendly)

//sc4
class Vehicle {
    constructor(x,y,speed) {
        this.x = x
        this.y = y
        this.speed = speed
    }

    getInfo(){
        console.log("Cars are great")
    }
}

const fiat = new Vehicle(5,4,80)
console.log(fiat)
console.log(fiat.getInfo())

//sc5