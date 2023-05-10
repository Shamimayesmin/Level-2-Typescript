// import *as Methods from "./module"

import methods from './utils/index'

const add = (param1 : number, param2: number, param3 : number): number =>{
    return param1+ param2 + param3
}

const res1 = methods.addTwo(3,5)
const res2 = methods.multify(3,5)
const res3 = methods.subtract(3,5)
const res4 = methods.average(3,5)