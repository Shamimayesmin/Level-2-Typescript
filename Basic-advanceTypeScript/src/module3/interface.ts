type User = {
    name : string,
    age : number
};

type extendUser = User & {
    role : string,
}

interface IUser {
    name : string,
    age : number
}

interface IExtendUser extends IUser{
    role : string
}

const user : extendUser = {
    name : 'Omanush',
    age : 2000,
    role : 'Unknown'
}
const userWithTypeAlias : User = {
    name : "Type Alias",
    age : 100,
}



const userWithInteface : IUser = {
    name : "Interface",
    age : 200,
}

type rollNumber = number;
type addNumbersType = (num1 : number, num2 : number) => number;

interface IAddNumbers {
    (num1 : number, num2 : number): number;
}

type rollNumberType = number[];

interface IRollNumbers {
    [index : number] : string;

}

// const rollNumbers : IRollNumbers = ["1","3","5"]  // [index]


const addNumbers : addNumbersType= (num1, num2): number => num1 + num2;


// const addNumbers = (num1 : number, num2 : number): number => num1 + num2;
