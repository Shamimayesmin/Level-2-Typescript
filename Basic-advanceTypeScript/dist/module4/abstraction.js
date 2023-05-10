"use strict";
// interface 
// interface IVehicle{
//     name : string;
//     model:string
// }
class Bus {
    constructor(name, brand, model) {
        this.name = name;
        this.brand = brand;
        this.model = model;
    }
    startEngine() {
        console.log("I'm starting engine");
    }
    stopEngine() {
        console.log('I am stopping engine');
    }
    move() {
        console.log('I am moving engine');
    }
    test() {
        console.log("I am testing engine");
    }
}
const car = new Bus('Car', 'Toyota', 2000);
// abstract class
class Vehicle1 {
    constructor(name, brand, model) {
        this.name = name;
        this.brand = brand;
        this.model = model;
    }
    move() {
        console.log('I am moving engine');
    }
}
class Car extends Vehicle1 {
    startEngine() {
        console.log("I am starting engine..");
    }
    stopEngine() {
        console.log("I am stopping engine..");
    }
}
const car1 = new Car('car', 'honda', 2023);
console.log(car1);
