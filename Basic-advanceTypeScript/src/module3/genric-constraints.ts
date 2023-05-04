
type mandatoryType = {name : string, age : number, salary : number}
type mandatoryInterface = {name : string, age : number, salary : number}

const addMeInMyCrushMind =<T extends mandatoryInterface>(myInfo:T)=> {
    const crush = "Alian";
    const newData = {...myInfo, crush};
    return newData;
}


type MyInfoType = {
    name : string,
    age : number,
    salary : number,
    other1 : boolean,
    other2 : null
}

const myInfo : MyInfoType = {
    name : 'alina',
    age : 200,
    salary : 100000000,
    other1 : true,
    other2 : null

}

const result6 = addMeInMyCrushMind(myInfo);
