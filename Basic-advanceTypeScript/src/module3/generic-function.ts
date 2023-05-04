// arrow function

// T means generic type

const createArray = (param : string): string[] =>{
    return [param]
}
const createArray1 = <T>(param : T): [T] =>{
    return [param]
}
const createArray2 = <X,Y>(param1 : X, param2 : Y): [X,Y] =>{
    return [param1, param2]
}

const result1 = createArray1<string>('Bangladesh')
const result2 = createArray1<boolean>(false)

type name = {name : string}
const result3 = createArray1<name>({name : "Bangladesh"})


const result4 = createArray2<string, string>('Bangladesh', 'I love my country')

const result5 = createArray2<boolean, Array<string>>(false, ['USA'])


// spread operator 

// const newData = {...myInfo, crush}

// const addMeInMyCrushMind =<T>(myInfo:T)=> {
//     const crush = "Alian";
//     const newData = {...myInfo, crush};
//     return newData;
// }

// const myInfo = {
//     name : 'alina',
//     age : 200,
//     salary : 100000000
// }

// const result6 = addMeInMyCrushMind(myInfo);
