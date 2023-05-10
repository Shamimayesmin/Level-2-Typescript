"use strict";
class Parent {
    constructor(name, age, address) {
        this.name = name;
        this.age = age;
        this.address = address;
    }
    makeSleep(hours) {
        return `this ${this.name} will sleep for ${hours}`;
    }
}
class Student extends Parent {
    constructor(name, age, address) {
        super(name, age, address);
    }
}
const student1 = new Student('Mr.X', 15, 'Uganda');
class Teacher extends Parent {
    constructor(name, age, address, designation) {
        super(name, age, address);
        this.designation = designation;
    }
    makeSleep(hours) {
        return `this ${this.name} will sleep for ${hours}`;
    }
    takeClasses(numOfClass) {
        return `This ${this.name} will take {numOfClass} class`;
    }
}
;
const teacher1 = new Teacher('Abul', 33, 'Malta', 'Professor');
teacher1.address;
