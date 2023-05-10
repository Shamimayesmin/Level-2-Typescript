"use strict";
// ternary operator
var _a, _b;
// const age : number = 23;
// if(age >= 18){
//     console.log('Yes');
// }else{
//     console.log('No');
// }
// const isAdult = age >= 18 ? "Yes" : "No"
// console.log(isAdult);
// nullish coalesnace operator
// null and undefined
const isAuthenticatedUser = null;
const userName = isAuthenticatedUser !== null && isAuthenticatedUser !== void 0 ? isAuthenticatedUser : "Guset";
const userName2 = isAuthenticatedUser ? isAuthenticatedUser : "Guest";
const manush1 = {
    name: "Human",
    age: 200,
    address: {
        city: "No City",
        road: "No road",
    }
};
const home = (_b = (_a = manush1 === null || manush1 === void 0 ? void 0 : manush1.address) === null || _a === void 0 ? void 0 : _a.home) !== null && _b !== void 0 ? _b : 'No home'; // default "no home"
console.log({ home });
