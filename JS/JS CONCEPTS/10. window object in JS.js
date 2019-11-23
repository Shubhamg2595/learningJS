// DOM
// document object model


// window object : global object at client side.
// since window is a global object, all of its props can be used directly without using 'dot' notation
let a = window;
// a=prompt('are you getting a message?')
// a=confirm('are you getting a message?')
// console.log(a);


// DOCUMENT IS A PART OF WINDOW
// console.log(window.document);

// playing with window object

// console.log(a.innerHeight); 
// console.log(a.innerWidth);

// very useful to perform some actions on scroll
// console.log(a.scrollX)
// console.log(a.scrollY)

// location
// console.log('location',a.location);

// how to change location using console
// location.href = "https://google.com"

// to reload
// location.reload();

// console.log(location.toString())

// history method
console.log(a.history);

// try/
// history.go(-1);