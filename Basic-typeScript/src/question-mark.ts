// ternary operator

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

const isAuthenticatedUser = null 
const userName = isAuthenticatedUser ?? "Guset"
const userName2 = isAuthenticatedUser ? isAuthenticatedUser : "Guest"
console.log({userName}, {userName2});


type Manush = {
    name : string,
    age : number,
    address : {
        city : 'No City',
        road : 'No road',
        home?: ""
    }
}
const manush1 : Manush={
    name : "Human",
    age : 200,
    address : {
        city : "No City",
        road : "No road",
        
    }
}

const home = manush1?.address?.home?? 'No home' // default "no home"
console.log({home});