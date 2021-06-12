"use strict";
// console.log('hello world! I am from Bangladesh')
//declare a variable using typescript
var userName = 'Rakib';
var roll = 34;
//if we try add a string in the second variable, then it will throw an error.
// const roll:number = '34'; throw an error before compiling
//declare a function with typescript
var add = function (num1, num2) {
    return num1 + num2;
};
console.log(add(10, 20));
//if we try to pass a a string when we can call the function, then it will
//throw an error. Because we explicitly set the parameters will only take number
// console.log(add('10', 20)); //throw an error before compiling
//array
var fruits = ['apple, mango'];
fruits.push('banana'); //it will added in our array.
//but if we try to add a number inside this array. Then it will throw an error before compiling
// fruits.push(10); //throw an error because here typescript thinks that this is ana array of string
//But if we make an empty array, then we can push anythings inside the array
var newArray = [];
newArray.push(10);
newArray.push('rakib');
// object
var userInfo = {
    name: 'Rakib',
    roll: 457100,
    age: 20
};
//here userInfo.name=string. But if we try to add any other type here then it will throw an error.
// userInfo.name = 20; //throw an error because userInfo.name is explicitly set as a string.
