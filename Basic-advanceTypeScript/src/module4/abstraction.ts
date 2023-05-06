// interface 
// interface IVehicle{
//     name : string;
//     model:string
// }

// const vehicle : IVehicle= {
//     name: 'Car',
//     model : '2000'
// }


interface IVehicle{
    startEngine() : void;
    stopEngine(): void;
    move() : void;

}

class Vehicle implements IVehicle{
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


const vehicle =new Vehicle('Car', 'Toyota', 2000);


// abstract class

