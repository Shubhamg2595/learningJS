// UNDERSTANDING DOM

// DOM : document object model

console.log('learning about dom');

// Note about class and id in CSS

// single class can be used for multiple html elements
// however, id's are unique for each and every element

// DOM simply refers to structural representation of our dom

let a = document;
// console.log(a);

// document is simply a Object
// console.log(typeof a); //object

// it is a refernce data type;
// this object has many inbuilt methods and properties


// .all
// let a = document.all;

// console.log(a);

// .body
// console.log(a.body);
// returns body element of our html doc


// .form

// console.log(a.forms);
// console.log(a.forms[0]);
// returns all forms present in our html doc


//  how to iterate an document

console.log(a.all)

// however we cannot iterate this HTMLCollection using forEach directly

// solution.................
// Array,from(html_collection) : returns an array for HTMLCollection
// Array.from(a.all).forEach(function(ele){
//     console.log(ele)
// })



// HOW TO FETCH OUT ALL THE LINKS FROM THE htmL dOC

// console.log(a.links[0])
// console.log(a.links[0].href)


// fetching all scripts on an html page

// console.log(a.scripts)
// console.log(a.scripts[o])
// console.log(a.scripts[1])