// CREATING ELEMENTS IN DOM

// let newHeadingElem = document.createElement('h1')
// newHeadingElem.className="head";
// newHeadingElem.id="heading2";
// newHeadingElem.innerHTML="this is a newly created HTml element"
// console.log('newHeadingElement',newHeadingElem);

// let getUl = document.querySelector('ul.this')
// getUl.appendChild(newHeadingElem)
// console.log('ffetching Ul',getUl)


// example2

const newLiElem = document.createElement('li')
let newtextNode = document.createTextNode('will append this list with this text in UL')
newLiElem.appendChild(newtextNode)

let getUl = document.querySelector('ul.this')
getUl.appendChild(newLiElem)
console.log('ffetching Ul',getUl)

// replacing existing element

let elementToBeAdded = document.createElement('h3')
let newtNode = document.createTextNode('this h3 will replace previously created li')
elementToBeAdded.appendChild(newtNode)
newLiElem.replaceWith(elementToBeAdded);

// replacing firstChildelement

let myUl = document.getElementById('myul')
myUl.replaceChild(newLiElem,document.getElementById('fui'))

// removeChild
myUl.removeChild(document.getElementById('lui'))

// playing with attributes
let fui = document.getElementById('myul')
let getfuiclass = fui.getAttribute('class');
let getfuiid = fui.getAttribute('id');
let getfuiany = fui.getAttribute('any');
fui.removeAttribute('id')
console.log(fui,getfuiclass,getfuiid,getfuiany)
