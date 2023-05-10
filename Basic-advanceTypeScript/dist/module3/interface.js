"use strict";
const user = {
    name: 'Omanush',
    age: 2000,
    role: 'Unknown'
};
const userWithTypeAlias = {
    name: "Type Alias",
    age: 100,
};
const userWithInteface = {
    name: "Interface",
    age: 200,
};
// const rollNumbers : IRollNumbers = ["1","3","5"]  // [index]
const addNumbers = (num1, num2) => num1 + num2;
// const addNumbers = (num1 : number, num2 : number): number => num1 + num2;
