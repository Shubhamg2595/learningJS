//  maps in jS

// The Map object holds key-value pairs and remembers the original insertion order of the keys. Any value (both objects and primitive values) may be used as either a key or a value.


const myMap = new Map();

console.log(myMap);

const key1 = 'myStr', key2 = {}, key3 = function () { };

// setting map-values

myMap.set(key1, "This is a string");
myMap.set(key2, {name:'shubham',age:24});
myMap.set(key3, 'empty function');
 
console.log(myMap);

// getting values from the map

let v1 = myMap.get(key3);

console.log('value for key3',v1)

// getting the size of the map

console.log('size of map',myMap.size)

// using has property

console.log('map has',myMap.has(key1))

// using for...of loop with map

for (let [key,value] of myMap)
{
    console.log('using for...Of', key,value)
}

// get only keys from map

for(let key of myMap.keys())
{
    console.log('fetching all the keys',key)
}

// get only values from map

for(let value of myMap.values())
{
    console.log('fetching all the values',value)
}
// converting myMap to an array

let myArrayFromMap = Array.from(myMap);
console.log('entire map to myArrayFromMap',myArrayFromMap);
let myArrayFromMapOnlyKeys = Array.from(myMap.keys());
console.log('entire map to myArrayFromMapOnlyKeys',myArrayFromMapOnlyKeys);
let myArrayFromMapOnlyValues = Array.from(myMap.values());
console.log('entire map to myArrayFromMapOnlyValues',myArrayFromMapOnlyValues);


// Objects and Maps are similar in many ways. However, there are important differences that make using a Map preferable in certain cases:

// The keys of an Object are Strings and Symbols, whereas they can be any value for a Map, including functions, objects, and any primitive.
// The keys in Map are ordered while keys added to object are not.
// You can get the size of a Map easily with the size property, while the number of properties in an Object must be determined manually.
// An Object has a prototype, so there are default keys in the map that could collide with your keys if you're not careful