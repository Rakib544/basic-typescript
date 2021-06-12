// console.log('hello world! I am from Bangladesh')

//declare a variable using typescript

const userName: string = 'Rakib';
const roll: number = 34;
//if we try add a string in the second variable, then it will throw an error.
// const roll:number = '34'; throw an error before compiling



//declare a function with typescript

const add = (num1: number, num2: number) => {
    return num1 + num2;
}

console.log(add(10, 20));
//if we try to pass a a string when we can call the function, then it will
//throw an error. Because we explicitly set the parameters will only take number
// console.log(add('10', 20)); //throw an error before compiling


//array

const fruits = ['apple, mango'];
fruits.push('banana'); //it will added in our array.

//but if we try to add a number inside this array. Then it will throw an error before compiling
// fruits.push(10); //throw an error because here typescript thinks that this is ana array of string

//But if we make an empty array, then we can push anythings inside the array
const newArray = [];
newArray.push(10)
newArray.push('rakib');


// object

const userInfo = {
    name: 'Rakib',
    roll: 457100,
    age: 20
}

//here userInfo.name=string. But if we try to add any other type here then it will throw an error.
// userInfo.name = 20; //throw an error because userInfo.name is explicitly set as a string.

// if we try to set another property in this object then it will throw an error because
// it typescript that this object is a schema of object. And that's why we can't set other property to interface.



//explicit type in typescript

const schoolName: string = 'Barmi Union High School'; // here we explicitly set that this variable can only takes string, but it can't take other values.
const num: number = 4; //It only takes number value. 

let a: string[] = []; // That means it is an array of string. We can't store other value into it. We can only store string.
let b: number[] = []; //That means it is an array of number.

let c: (number | string)[] = []; //That means it is an array of number or string.
let d: string | number; // That means it is an variable of number or string.

let e : {
    name: string,
    age: number,
    isStudent: true
}

e = {
    name: 'Rakib', // Here we can only set string value. 
    age: 20, // Here we can only set number value. 
    isStudent: true // Here we can only set boolean value. 
}; // here I can't set other property in this object. 

let f:any; // That means it will accept any types of value. 


//Function Type

let myFunc: Function; // That means this can only accept functions.

const minus = (num1: number, num2: number, num3?: number): number => {
    return (num1 - num2)
}

minus(10, 20)

//We can explicitly set what should the function return like this.
//const sum = (num1: number, num2: number):number means this will return only number// this number  => {

// }



// Types Aliases

type numberOrString = number | string;
type userType = {
    name: string,
    age: number
}

const userDetails = (id: numberOrString, user: userType) => {
    return user;
}