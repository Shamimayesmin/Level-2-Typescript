// interface 
// interface IVehicle{
//     name : string;
//     model:string
// }

// const vehicle : IVehicle= {
//     name: 'Car',
//     model : '2000'
// }


interface Vehicle{
    startEngine() : void;
    stopEngine(): void;
    move?() : void;

}

class Bus implements Vehicle{
    constructor(
        public name : string,
        public brand: string,
        public model: number
    ){}
    startEngine(): void {
        console.log("I'm starting engine");

    }
    stopEngine(): void {
        console.log('I am stopping engine');
    }
    move(): void {
        console.log('I am moving engine');
    }

    test(){
        console.log("I am testing engine");
    }
}


const car =new Bus('Car', 'Toyota', 2000);


// abstract class

abstract class Vehicle1{
    constructor(
        public name : string,
        public brand: string,
        public model: number
    ){}
  abstract startEngine(): void 
 abstract stopEngine(): void 
    move(): void {
        console.log('I am moving engine');
    }

   
}

class Car extends Vehicle1{
    startEngine(): void {
        console.log("I am starting engine..");
    }
    stopEngine(): void {
        console.log("I am stopping engine..");
    }
}

const car1 = new Car('car', 'honda', 2023)
console.log(car1);