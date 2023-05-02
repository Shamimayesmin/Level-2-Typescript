// ternary operator

const age : number = 23;

// if(age >= 18){
//     console.log('Yes');
// }else{
//     console.log('No');
// }


const isAdult = age >= 18 ? "Yes" : "No"
console.log(isAdult);

// nullish coalesnace operator
// null and undefined

const isAuthenticatedUser = null 
const userName = isAuthenticatedUser ?? "Guset"