/*
You have to create a div and inject it into the page which contains a heading.
whenever someone clicks on the div, it should be converted into an editable item. whenever user clicks away (blur). save the note into the local storage.

*/



// // creating an editable div

// MY SOLUTION

let text = "this is an existing text";

localStorage.setItem('text',text);
console.log('localStorage::: ',text);

let elem = document.getElementById('heading');
console.log('element:::',elem);
elem.innerHTML = localStorage.getItem('text');

let inputElem = document.createElement('textarea');
inputElem.value = localStorage.getItem('text');

elem.addEventListener('click',replaceElem);



function replaceElem()
{
    elem.replaceWith(inputElem);

    console.log('newelement',elem)
}

console.log('newelement',elem)


let container = document.querySelector('.container');
console.log('container:::',container);
container.addEventListener('dblclick',refreshView);

function refreshView(){
    localStorage.setItem('text',inputElem.value)
    elem.innerHTML = localStorage.getItem('text');
    inputElem.replaceWith(elem);
}

/*
You have to create a div and inject it into the page which contains a heading.
whenever someone clicks on the div, it should be converted into an editable item. whenever user clicks away (blur). save the note into the local storage.

*/


// HARRY SOLUTION
// Create a new element
// let divElem = document.createElement('div');

// // Add text to that created element
// let val = localStorage.getItem('text');
// let text;
// if (val==null){
//  text = document.createTextNode('This is my element. click to edit it');
// }
// else{
//     text = document.createTextNode(val);
// }
// divElem.appendChild(text);

// // Give element id, style and class
// divElem.setAttribute('id', 'elem');
// divElem.setAttribute('class', 'elem');
// divElem.setAttribute('style', 'border:2px solid black; width: 154px; margin: 34px; padding:23px;');

// // Grab the main container
// let container = document.querySelector('.container');
// let first = document.getElementById('myfirst');


// // Insert the element before element with id first
// container.insertBefore(divElem, first);

// console.log(divElem, container, first)

// // add event listener to the divElem
// divElem.addEventListener('click', function () {
//     let noTextAreas = document.getElementsByClassName('textarea').length;
//     if(noTextAreas ==0){
//     let html = elem.innerHTML;
//     divElem.innerHTML = ` <textarea class="textarea form-control" id="textarea" rows="3"> ${html}</textarea>`;
//     }
//     //listen for the blur event on textarea
//     let textarea = document.getElementById('textarea');
//     textarea.addEventListener('blur', function() {
//         elem.innerHTML = textarea.value;
//         localStorage.setItem('text', textarea.value);
//     })
// });

 