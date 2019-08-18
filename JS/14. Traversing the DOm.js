console.log('TRAVERSING THE DOM');

// let cont = document.querySelector('.no');
// cont = document.querySelector('.container');
// console.log(cont);
// accessing childNodes : here .childnodes  counts all the elements,texts,comments etc
// console.log(cont.childElementCount,cont.childNodes)
// .children will only return the elements
// console.log(cont.children)

// playing with nodeNames and nodeType
// let nodeName = cont.childNodes[1].nodeName;
// let nodeType = cont.childNodes[1].nodeType;
// console.log(nodeName)
// console.log(nodeType)
// Node types
// 1. Element
// 2. Attribute
// 3. Text Node
// 8. Comment
// 9. document
// 10. docType

// console.log(cont.childNodes);
// console.log(cont.children);


let container = document.querySelector('div.container')
console.log(container)
// console.log(container.children[1].children[0].children)

console.log(container.firstChild)
console.log(container.firstElementChild)
console.log(container.lastElementChild)


console.log(container.firstElementChild.nextElementSibling)