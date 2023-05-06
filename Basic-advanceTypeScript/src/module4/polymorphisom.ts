class Person{
    takeNap(): void{
        console.log(`I'm sleeping 5 hours per day`);
    }
}


class newStudent extends Person{
    takeNap(): void {
        console.log(` I am sleepng 10 hours`);
    }
}
class Developer extends Person{
    takeNap(): void {
        console.log(` I am sleepng 10 hours`);
    }
}


function getNap(param : Person){
    param.takeNap()
}
const person1 = new Person()
const person2 = new newStudent()
const person3 = new Developer()

getNap(person1)
getNap(person2)


class Shape {
    getArea():number{
        return 0;
    }
}

// area = pi *r*r
class Circle extends Shape {
    radius : number;
    constructor(radius : number){
        super()
        this.radius = radius;
    }

    getArea(): number {
        return Math.PI*this.radius* this.radius;
        
    }
}


class Rectangle extends Shape{
    height : number;
    width: number;
    constructor(height: number, width: number){
        super();
        this.height = height;
        this.width = width;
    }
    getArea(): number {
        return this.width * this.height;
    }
}

function getAreaOfShape(param : Shape){
    console.log(param.getArea());
}

getAreaOfShape(new Circle(10))
getAreaOfShape(new Rectangle(10, 22))