/**
 * ELEMENT SELECTOR
 * 
 * 1. single element selector
 * 2. multiple element selector
 */


let element = document.getElementById('myfirst');
//  console.log('single element',element)
// we can fetch all the classes related to a particular element based on its ID.
//  console.log('single element',element.className)


// FETCHING CHILDNODES
// console.log('childnodes',element.childNodes);


// get parentNode
// console.log(element.parentNode)


// changing style of elxement

// element.style.color = "red";
// element.innerText = "changing the innerText";
// element.innerHTML = "<b><i>changing the innerText again</i></b>"

// console.log(element.innerHTML)

/**
 * using query selector
 */

 // can provide #id or .className
// let sel = document.querySelector('#myfirst');
// // console.log(sel);

// // sel = document.querySelector('.child')
// // console.log(sel);
// // sel = document.querySelector('li')
// sel = document.querySelector('ul')
// console.log(sel);

/** mulitple element selectors */

// let elems = document.getElementsByClassName('child');
// console.log(elems)
// console.log(elems[0])



// let elems = document.getElementsByClassName('container');
// console.log(elems[0].getElementsByClassName('child'))

// FETCHING ELEMENTS BASED ON TAGS

// let elems = document.getElementsByTagName('h1')
// console.log(elems);

elems = document.getElementsByTagName('div');
console.log(elems) 

// iterating elements

// Array.from(elems).forEach(element => {
//     console.log(element);
//     element.style.color = 'blue'
// })
// way2

// for(let i=0;i<elems.length;i++){
//     const elements = elems[i];
//     elements.style.color='blue';
// }



// DIRECTLY FROM CONSOLE
Array.from(document.getElementsByTagName('div')).forEach(ele => ele.style.color='red')


Array.from(document.getElementsByTagName('a')).forEach(ele => ele.style.color='red')