// Generators in javascript

function* generateNumbers() {

    let i = 0;
    while(true)
    {
        yield i++;
    }

}

let genNumbers = generateNumbers();

console.log(genNumbers.next());
console.log(genNumbers.next());
console.log(genNumbers.next());
console.log(genNumbers.next());
console.log(genNumbers.next());
console.log(genNumbers.next());
console.log(genNumbers.next());
console.log(genNumbers.next());
console.log(genNumbers.next());
console.log(genNumbers.next());


// Generators
// Generators are functions that can be paused and resumed (think cooperative multitasking or coroutines), which enables a variety of applications.

// A simple generator
// The function* declaration (function keyword followed by an asterisk) defines a generator function, which returns a Generator object.

// function* idMaker() {
//     var index = 0;
//     while(true)
//         yield index++;
// }

// var gen = idMaker(); // "Generator { }"

// console.log(gen.next().value); // 0
// console.log(gen.next().value); // 1
// console.log(gen.next().value); // 2
// ...
// The objects returned by generators are iterable; each yield contributes to the sequence of iterated values. Therefore, you can use generators to implement iterables, which can be consumed by various ES6 language mechanisms: for-of loop, spread operator (...), etc.

// Kinds of Generators
// There are four kinds of generators:

// Generator function declarations:
// function* genFunc() { ··· }
// const genObj = genFunc();
// Generator function expressions:
// const genFunc = function* () { ··· };
// const genObj = genFunc();
// Generator method definitions in object literals:
// const obj = {
//      * generatorMethod() {
//          ···
//      }
//  };
// Generator method definitions in class definitions (class declarations or class expressions):
// class MyClass {
//      * generatorMethod() {
//          ···
//      }
//  }
// Terminate a Generator
// return() performs a return at the location of the yield that led to the last suspension of the generator.

// function* genFunc1() {
//     try {
//         console.log('Started');
//         yield; // (A)
//     } finally {
//         console.log('Exiting');
//     }
// }
// In the following interaction, we first use next() to start the generator and to proceed until the yield in line A. Then we return from that location via return().

// const genObj1 = genFunc1();

// genObj1.next()
// Started
// { value: undefined, done: false }

// genObj1.return('Result')
// Exiting
// { value: 'Result', done: true }