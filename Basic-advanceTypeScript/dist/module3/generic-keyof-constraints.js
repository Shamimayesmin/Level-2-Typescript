"use strict";
// const a : newType = 'age';
// const b : newTypeUsingKeyOf = 'address'
function getProperty(obj, key) {
    obj[key];
}
const property = getProperty({ name: 'Mr. X', age: 120 }, 'age');
