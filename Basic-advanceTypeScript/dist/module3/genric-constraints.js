"use strict";
const addMeInMyCrushMind = (myInfo) => {
    const crush = "Alian";
    const newData = Object.assign(Object.assign({}, myInfo), { crush });
    return newData;
};
const myInfo = {
    name: 'alina',
    age: 200,
    salary: 100000000,
    other1: true,
    other2: null
};
const result6 = addMeInMyCrushMind(myInfo);
