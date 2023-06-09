// generic array

type GenericArray<T> = Array<T>


const rollNumbers : GenericArray<number> = [333, 55, 60] ;
const rollNumbers2 : GenericArray<string> = ["333", '55', '60']
const rollNumbers3 : GenericArray<boolean> = [true, false];


type NameRollType = {name: string, roll: number}
const userNameAndRollNumbers : GenericArray<NameRollType> = [{
    name : 'Mr X',
    roll : 10
},
{
    name : "Mr Y",
    roll : 22
}
]

type GenericTuple<X,Y> = [X,Y];

const relation : GenericTuple<string,string>=['Persian', 'alan'];

// type alias
// type realtionWithSalaryType = {name: string; salary : number}

// type interface
interface realtionWithSalaryInterface  {name: string; salary : number}

const relationWithSalary : GenericTuple<realtionWithSalaryInterface, string> = [
    {
        name : 'Persian',
        salary : 100000000,
    },
    "alan"
];



const relationWithSalary2 : GenericTuple<realtionWithSalaryInterface, string> = [
    {
        name : 'Persian',
        salary : 100000000,
    },
    "alan"
];