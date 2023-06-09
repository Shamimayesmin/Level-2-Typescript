"use strict";
// normal function 
// default parameter
function addOf(num1, num2 = 10) {
    return num1 + num2;
}
// new comment
addOf(2, 3);
// arrow function
const addNumber = (num1, num2) => num1 + num2;
const arr = [1, 2, 5, 8];
const newArray = arr.map((ele) => ele * ele);
const person = {
    name: "Alina",
    balance: 3,
    addBalance(money) {
        return `My new balance is ${this.balance + money}`;
    }
};
// spread oparetor
const myFriends = ["shipu", "sara", "joli"];
const newFriends = ["aysha", "richal", "rosse"];
myFriends.push(...newFriends);
// console.log(myFriends);
// rest perameter
const greetFriends = (...myFriends) => myFriends.forEach((friend) => console.log(`Hi ${friend}`));
greetFriends("mina", 'bina', 'tina', 'lina', 'pina', 'cina', 'nina');
// array and object destructuring
const myBestFriend = {
    fullName: "Wajiha Rahman",
    age: 4,
};
const [onlyFriend] = myFriends;
const { fullName: myFullName } = myBestFriend;
console.log(myFullName);
