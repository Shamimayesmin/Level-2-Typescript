const arrayOfNumbers = [1,2,3,];
const arrayOfString = arrayOfNumbers.map((number) =>number.toString());
console.log(arrayOfString);


type areaNumber = {
    height : number;
    width : number;
}

type areaString = {
    height : string;
    width : number;
}

type areaReadonly = {
    height : string;
    width : number;
}

// dynamic type
type Volume = {
    height : number;
    width : number;
    depth : number
}

type Area <T> = {
    // [key in keyof Volume] : Volume[key]
    readonly[key in keyof T] : T[key]
}

const area1 : Area<{height : number, width : string}>={height : 10,width : "22"}

const rectangularArea : areaNumber = {
    height : 10,
    width : 12,

}


type A = areaNumber['height'] // look up types

type B = keyof areaNumber; // 'width' | 'height'

