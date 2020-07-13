var a = {a: 1, b: 2}
var b = {a: 1, b: 2}

b = a

console.log(a == b)

a.a = 3

console.log( b)

console.log('Prototipi')

function Person (name, surname, age, eyes) {
  this.name = name
  this.surname = surname
  this.age = age
  this.eyes = eyes
}

class Car {
  constructor(brand, model, year, color){
    this.brand = brand
    this.model = model
    this.year = year
    this.color = color
    this.showModel = function() {
      console.log(`${this.brand} ${this.model}`)
    }
  }
}

var peter = new Person('Peter', 'Grinsburgh', 23, 'brown')
var anna = new Person('Anna', 'Walker', 22, 'grey')

var car1 = new Car('Volvo', 'V70', 2010, 'white')
var car2 = new Car('VW', 'Passat', 2014, 'green')

Car.prototype.makeSound = function(){
  console.log(`${this.brand} sounds`)
  return 0
}

Person.prototype.sayName = function(){
  console.log(`${this.name} ${this.surname}`)
  return 0
}