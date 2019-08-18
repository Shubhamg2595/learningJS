/**
 * variables in JS
 */

var name = "shubham";
var channel;
channel="learn js"
var marks = 34;
console.log(name,channel,marks);

// var is global scoped

// RULES FOR CREATING JS VARIABLES

/**
 * cannot start with numbers
 * can start with letters or $ or _
 * case sensitive
 */

// USING CONST
// const is function-scoped
 const ownerName = "jasdjs"
 console.log(ownerName);
//  ownerName="asdj"
//  Uncaught TypeError: Assignment to constant variable.

// const fruit;
// Uncaught SyntaxError: Missing initializer in const declaration

// USING LET
// let is block level scoped

{
  let name="shubham gupta"
  console.log('name',name);
}
console.log('name',name);

// name shubham gupta
// name shubham


const ar1 = [1,2,3,4,5]
ar1.push(12);
// this will work

// however,reinitialization wont work
ar1=[1,2]
// wont work


/**
 * 
 * different case types
 * 1. camelCase
 * 2. kebab-case
 * 3. snake_case
 * 4. PascalCase
 */