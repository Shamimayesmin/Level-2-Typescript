"use strict";
class Person {
    takeNap() {
        console.log(`I'm sleeping 5 hours per day`);
    }
}
class newStudent extends Person {
    takeNap() {
        console.log(` I am sleepng 10 hours`);
    }
}
class Developer extends Person {
    takeNap() {
        console.log(` I am sleepng 10 hours`);
    }
}
function getNap(param) {
    param.takeNap();
}
const person1 = new Person();
const person2 = new newStudent();
const person3 = new Developer();
getNap(person1);
getNap(person2);
class Shape {
    getArea() {
        return 0;
    }
}
// area = pi *r*r
class Circle extends Shape {
    constructor(radius) {
        super();
        this.radius = radius;
    }
    getArea() {
        return Math.PI * this.radius * this.radius;
    }
}
class Rectangle extends Shape {
    constructor(height, width) {
        super();
        this.height = height;
        this.width = width;
    }
    getArea() {
        return this.width * this.height;
    }
}
function getAreaOfShape(param) {
    console.log(param.getArea());
}
getAreaOfShape(new Circle(10));
getAreaOfShape(new Rectangle(10, 22));
