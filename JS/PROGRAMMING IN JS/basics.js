// 8. Write a JavaScript program where the program takes a random integer between 1 to 10, the user is then prompted to input a guess number. If the user input matches with guess number, the program will display a message "Good Work" otherwise display a message "Not matched".  

// let randomNumber = Math.floor(Math.random()*10);
// let userInput = window.prompt('please enter a integer from 1 to 10 : ');
// console.log('random number generated',randomNumber);
// console.log('user input',userInput);

// if(randomNumber === userInput)
// {
//     console.log('Good work')
// }
// else{
//     console.log('Not matched.')
// }

// -----------------------------------------------

// 13. Write a JavaScript exercise to create a variable using a user-defined name.  

// var var_name = 'abcd';
// var n = 120;
// this[var_name] = n;
// console.log(this[var_name])


// ! ----------------------------------------------------------


// 21. Write a JavaScript program to create a new string adding "Py" in front of a given string. If the given string begins with "Py" then return the original string.  

// let userInput = window.prompt('please enter a string');
// if(userInput.startsWith('Py'))
// {
//     console.log(userInput)
// }
// else{
//     userInput = 'Py' + userInput;
//     console.log('new string',userInput);
// }

// !-----------------------------------------------

// 22. Write a JavaScript program to remove a character at the specified position of a given string and return the new string.  

// let userInput = prompt('please enter a string');


// let removeIndex = prompt('please enter the position of character you want to remove from ' + userInput);

// function remove_character(str, char_pos) 
//  {
//   part1 = str.substring(0, char_pos);
//   part2 = str.substring(char_pos + 1, str.length);
//   return (part1 + part2);
//  }

// console.log(remove_character("Python",0));
// console.log(remove_character("Python",3));
// console.log(remove_character("Python",5));

// !---------------------------------------------------------


// 23. Write a JavaScript program to create a new string from a given string changing the position of first and last characters. The string length must be greater than or equal to 1. 

// let userInput = 'shubham';

// console.log(userInput[userInput.length-1] + userInput.substring(1,userInput.length-1) + userInput[0])

// !------------------------------------------------------



// 48. Write a JavaScript program to reverse a given string.  

// let str = 'shubham'

// console.log(str.split('').reverse().join(''))

// !---------------------------------------

// 50. Write a JavaScript program to capitalize the first letter of each word of a given string.  Go to the editor
// Click me to see the solution

// function capital_letter(str) 
// {
//     str = str.split(" ");

//     for (var i = 0, x = str.length; i < x; i++) {
//         str[i] = str[i][0].toUpperCase() + str[i].substr(1);
//     }

//     return str.join(" ");
// }

// !___________-----------------------------------

// 54. Write a JavaScript program to count the number of vowels in a given string.  Go to the editor
// Click me to see the solution


// function vowel_Count(str)
// { 

//   return str.replace(/[^aeiou]/g, "").length; 
// }


// !________________________________________________________

// ? -------------------------------------------------------
// # The every() method checks if all elements in an array pass a test (provided as a function).

// # The every() method executes the function once for each element present in the array:

// # If it finds an array element where the function returns a false value, every() returns false (and does not check the remaining values)
// # If no false occur, every() returns true



// ? -------------------------------------------------------
// Write a JavaScript program to compare two objects to determine if the first one contains equivalent property values to the second one.

//#Source https://bit.ly/2neWfJ2
// const matches = (obj, source) =>
//   Object.keys(source).every(key => obj.hasOwnProperty(key) && obj[key] === source[key]);
// console.log(matches({ age: 25, hair: 'long', beard: true }, { hair: 'long', beard: true })); // true
// console.log(matches({ hair: 'long', beard: true }, { age: 25, hair: 'long', beard: true })); // false
// console.log(matches({ hair: 'long', beard: true }, { age: 26, hair: 'long', beard: true })); // false


// !___________________________________________________________

// Write a JavaScript program to filter out the specified values from an specified array. Return the original array without the filtered values.

// const origArray = ['a','b','c','c','b','a']
// const filterArrays = (arr, ...args) => {
//     let argState = Array.isArray(args[0]) ? args[0] : args;
//     let pulled = arr.filter((v, i) => !argState.includes(v));
//     arr.length = 0;
//     pulled.forEach(v => arr.push(v));
//     return pulled;
//   };

// console.log('filtered array is', filterArrays(origArray,'b','c'));

// !___________________________________________________________

// * ACCUMULATOR

// It is similar to both Javascript map() and Javascript filter() but, it differs in the callback arguments.

// The callback now receives an accumulator (it accumulates all the return values. Its value is the accumulation of a previously returned accumulations), a current value, a current index, and finally, the whole array. 

// function(total, currentValue, index, arr): It is a required parameter and used to run for each element of the array. It contains four-parameters which are listed below:
// total: It is the required parameter and used to specify an initialValue or the previously returned value of a function.
// currentValue: It is the required parameter and used to determine the value of a current element.
// currentIndex: It is the optional parameter and used to specify an array index of the current element.
// arr: It is the optional parameter and used to determine an array object the current element belongs to.
// initialValue: It is the optional parameter and used to specify the value to be passed to the function as an initial value.

//  * array.reduce(function(total, currentValue, currentIndex, arr), initialValue)


// Example 1

// const data = [5, 10, 15, 20, 25];

// const res = data.reduce((total,currentValue) => {
//     console.log(total,currentValue);
//   return total + currentValue;
// });

// 5 10
// 167 15 15
// 167 30 20
// 167 50 25
// 171 75
// console.log(res); // 75

// Example 2
// #Flattening arrays with Javascript reduce method


// const data = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

// const flatValues = data.reduce((total, value) => {
//   return total.concat(value);
// }, []);

// console.log(flatValues);

//  Example 3

// const pounds = [11.21, 19.21, 46.21];

// const sum = pounds.reduce((total, amount) => total + amount); 

// console.log(sum);


// Example 4
// #How to find repeated items in array in Javascript


// const pounds = [11, 21, 16, 19, 46, 29, 46, 19, 21];

// const count = pounds.reduce( (data, pound) => {
//     console.log(data);
//   data[pound] = (data[pound] || 0) + 1 ;
//   return data;
// } , {})

// console.log(count);
// {11: 1, 16: 1, 19: 2, 21: 2, 29: 1, 46: 2}
// !___________________________________________________________

// * Write a JavaScript program to split values of two given arrays into two groups. If an element in filter is truthy, the corresponding element in the collection belongs to the first group; otherwise, it belongs to the second group.

// let a1 = [1,2,3,4]
// let a2 = [true,true,false,true]

// const bifurcate = (arr,filter) => 
//     arr.reduce((acc,initialValue,index) => (acc[filter[index] ? 0: 1].push(initialValue),acc) ,[[],[]])

// console.log(bifurcate(a1,a2))

// [[1,2,4],[3]]
// !___________________________________________________________
// *  Remove specified elements from the left of a given array of elements

// let a1 = [1,2,33,4,5]

// const removeElements = (arr,element) => {
//     return arr.slice(element)
// }

// console.log('removeElems',removeElementsFromLeft(a1,2))


// !___________________________________________________________

// * Get every nth element in an given array

// let a1 = [1,2,3,4,5,6]

// const everyNth = (a1,n) => a1.filter(elem => elem%n === 0);
// console.log('nTh element',everyNth(a1,2))
// console.log('nTh element',everyNth(a1,3))



// !___________________________________________________________

// * Write a JavaScript program to filter out the element(s) of an given array, that have one of the specified values.


// const without = (arr,...args) => arr.filter(elem => console.log(!args.includes(elem)))


// console.log(without([2, 1, 2, 3], 1, 2));
// console.log(without([2, 1, 2, 3], 3));


// !___________________________________________________________

// *Write a JavaScript program to create a function that invokes each provided function with the arguments it receives and returns the results

// const over = (...fns) => (...args) => fns.map(fn => fn.apply(null, args));
// const minMax = over(Math.min, Math.max);
// console.log(minMax(1, 2, 3, 4, 5)); 
// console.log(minMax(1, 2, 5, 4, 3)); 
// console.log(minMax(1, 2, 5, -4, 3));


// !___________________________________________________________

// * Remove the key-value pairs corresponding to the given keys from an object

// const omit = (obj,keys) => {
//     Object.keys(obj).filter(key => !keys.includes(key))
//     .reduce((acc,val) => ((acc[val] = obj[val]),acc), {})
// }

// const omit = (obj, arr) =>
//   Object.keys(obj)
//     .filter(k => !arr.includes(k))
//     .reduce((acc, key) => ((    ), acc), {});


// console.log(omit({ a: 1, b: '2', c: 3 }, ['b']));
// console.log(omit({ a: 1, b: 2, c: 3 }, ['c']));


// !___________________________________________________________

// *Write a JavaScript program to get an object containing the parameters of the current URL.



// const get_URL_Parameters = url =>
// (url.match(/([^?=&]+)(=([^&]*))/g) || []).reduce(
//   (a, v) => ((a[v.slice(0, v.indexOf('='))] = v.slice(v.indexOf('=') + 1)), a),
//   {}
// );
// console.log(get_URL_Parameters('http://url.com/page?name=Adam&surname=Smith')); 
// console.log(get_URL_Parameters('google.com'));
// console.log(get_URL_Parameters('https://www.w3resource.com'));

// !___________________________________________________________

// * Write a JavaScript program to Join all given URL segments together, then normalizes the resulting URL.

//#Source https://bit.ly/2neWfJ2 
// const URL_Join = (...args) =>
//   args
//     .join('/')
//     .replace(/[\/]+/g, '/')
//     .replace(/^(.+):\//, '$1://')
//     .replace(/^file:/, 'file:/')
//     .replace(/\/(\?|&|#[^!])/g, '$1')
//     .replace(/\?/g, '&')
//     .replace('&', '?');

// console.log(URL_Join('http://www.google.com', 'a', '/b/cd', '?foo=123', '?bar=foo'));




// !___________________________________________________________

// * Write a JavaScript program to count the occurrences of a value in an array.

// const countOccurrences = (arr,targetElem) => arr.reduce((acc,val) => (val === targetElem ? acc+1 : acc), 0 );

// console.log(countOccurrences([1, 1, 2, 1, 2, 3], 1));
// console.log(countOccurrences([1, 1, 2, 1, 2, 3], 2));
// console.log(countOccurrences([1, 1, 2, 1, 2, 3], 3));



// !___________________________________________________________

// *Write a JavaScript program to take any number of iterable objects or objects with a length property and returns the longest one.


// const longestItem = (...vals) => [...vals].sort((a, b) => b.length - a.length)[0];



// console.log(longestItem('this', 'is', 'a', 'testcase'));
// console.log(longestItem(...['a', 'ab', 'abc']));
// console.log(longestItem(...['a', 'ab', 'abc'], 'abcd'));
// console.log(longestItem([1, 2, 3], [1, 2], [1, 2, 3, 4, 5]));
// console.log(longestItem([1, 2, 3], 'foobar'));

// !___________________________________________________________

// * Write a JavaScript program to create a new string with the results of calling a provided function on every character in the calling string.
//#Source https://bit.ly/2neWfJ2 
// const mapString = (str, fn) =>
//   str
//     .split('')
//     .map((c, i) => fn(c, i, str))
//     .join('');

// console.log(mapString('Javascript exercises', c => c.toUpperCase()));



// !___________________________________________________________

// *Write a JavaScript program to pick  the key-value pairs corresponding to the given keys from an object.

// const pick = (obj,keyArr) => {
//     return keyArr.reduce((acc,key) => 
//         (key in obj && (acc[key] = obj[key]),acc)
//     ,{})
// }

// console.log(pick({ a: 1, b: '2', c: 3 }, ['a', 'c']));




// !___________________________________________________________

// *Write a JavaScript program to reverse the order of the characters in the string.

// const reverseString = str => [...str].reverse().join('');

// console.log(reverseString('php')); 
// console.log(reverseString('foobar'));



// !___________________________________________________________

// * Write a JavaScript program to get the number of times a function executed per second.

// const hz = (fn, iterations = 100) => {
//     const before = performance.now();
//     for (let i = 0; i < iterations; i++) fn();
//     return (1000 * iterations) / (performance.now() - before);
//   };
//   // 10,000 element array
//   const numbers = Array(10000)
//     .fill()
//     .map((_, i) => i);
  
//   // Test functions with the same goal: sum up the elements in the array
//   const sumReduce = () => numbers.reduce((acc, n) => acc + n, 0);
//   const sumForLoop = () => {
//     let sum = 0;
//     for (let i = 0; i < numbers.length; i++) sum += numbers[i];
//     return sum;
//   };
  
//   // sumForLoop` is nearly 10 times faster
//   console.log(Math.round(hz(sumReduce)));
//   console.log(Math.round(hz(sumForLoop)));
  



// !___________________________________________________________

// * Write a JavaScript function that checks whether a passed string is palindrome or not? 


// function check_Palindrome(str_entry){
//     // Change the string into lower case and remove  all non-alphanumeric characters
//        var cstr = str_entry.toLowerCase().replace(/[^a-zA-Z0-9]+/g,'');
//         var ccount = 0;
//     // Check whether the string is empty or not
//         if(cstr==="") {
//             console.log("Nothing found!");
//             return false;
//         }
//     // Check if the length of the string is even or odd 
//         if ((cstr.length) % 2 === 0) {
//             ccount = (cstr.length) / 2;
//         } else {
//     // If the length of the string is 1 then it becomes a palindrome
//             if (cstr.length === 1) {
//                 console.log("Entry is a palindrome.");
//                 return true;
//             } else {
//     // If the length of the string is odd ignore middle character
//                 ccount = (cstr.length - 1) / 2;
//             }
//         }
//     // Loop through to check the first character to the last character and then move next
//         for (var x = 0; x < ccount; x++) {
//             console.log(cstr[x],cstr.slice(-1-x)[0])
//     // Compare characters and drop them if they do not match 
//             if (cstr[x] != cstr.slice(-1-x)[0]) {
//                 console.log("Entry is not a palindrome.");
//                 return false;
//             }
//         }
//         console.log("The entry is a palindrome.");
//         return true;
//     }

// // check_Palindrome('madam');
// check_Palindrome('NurSes Run');
// check_Palindrome('fox');
// !___________________________________________________________

// * Write a JavaScript function that returns a passed string with letters in alphabetical order. 

// Example string : 'webmaster'
// Expected Output : 'abeemrstw'

// const alphabet_order = (str) => {
//     return [...str].sort().join('');
// }

// console.log(alphabet_order("webmaster"));

// !___________________________________________________________

// *Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string in upper case.

// Example string: 'the quick brown fox'
// Expected Output: 'The Quick Brown Fox '

// function uppercase(str)
// {
//     return str.split(' ').map(letter => letter.charAt(0).toUpperCase()+letter.slice(1)).join(' ')
// }


// console.log(uppercase("the quick brown fox"));

// !___________________________________________________________

// * Write a JavaScript function that accepts a string as a parameter and counts the number of vowels within the string. Go to the editor
// Example string : 'The quick brown fox'
// Expected Output : 5

// function vowel_count(str1)
// {
//   var vowel_list = 'aeiouAEIOU';
//   var vcount = 0;
  
//   for(var x = 0; x < str1.length ; x++)
//   {
//     if (vowel_list.indexOf(str1[x]) !== -1)
//     {
//       vcount += 1;
//     }
  
//   }
//   return vcount;
// }
// console.log(vowel_count("The quick brown fox"));

// !___________________________________________________________

// *
// function test_prime(n)
// {

//   if (n===1)
//   {
//     return false;
//   }
//   else if(n === 2)
//   {
//     return true;
//   }else
//   {
//     for(var x = 2; x < n; x++)
//     {
//       if(n % x === 0)
//       {
//         return false;
//       }
//     }
//     return true;  
//   }
// }

// console.log(test_prime(37));



// !___________________________________________________________

// *Write a JavaScript function to convert an amount to coins. Go to the editor

// Sample function : amountTocoins(46, [25, 10, 5, 2, 1])
// Here 46 is the amount. and 25, 10, 5, 2, 1 are coins.
// Output : 25, 10, 10, 1

// function amountTocoins(total,coins)
// {
//     let coinsUsed = [];
//     while(total !== 0)
//     {
//         if(coins[0]<=total)
//         {
//             coinsUsed.push(coins[0]);
//             total-=coins[0];
//         }
//         else
//         {
//             coins = coins.slice(1);
//         }
//     }
//     console.log(coinsUsed)
// }


// console.log(amountTocoins(117, [25, 10, 5, 2,1]));

// !___________________________________________________________

// *Write a JavaScript function to get the number of occurrences of each letter in specified string.

// function Char_Counts(str)
// {
//     const strArray = str.split('');
//     const characterCounts = strArray.reduce( (acc,word) => { 
//         if(word!== ' ')
//         {
//         acc[word] = (acc[word] || 0 ) + 1; 

//         }
//         return acc;

//     },{})
//     return characterCounts;
// }


// console.log(Char_Counts("The quick brown fox jumps over the lazy dog"));


// !___________________________________________________________

// *
// function array_binarySearch(narray, delement) {
//    var mposition = Math.floor(narray.length / 2);

//    if (narray[mposition] === delement){
//       return mposition;
//    }
//    else if (narray.length === 1) 
//    {
//       return null;
//    }
//    else if (narray[mposition] < delement) {
//       var arr = narray.slice(mposition + 1);
//       var res = array_binarySearch(arr, delement);
//       if (res === null)
//       {
//          return null;
//       }
//       else {
//          return mposition + 1 + res;
//       }
//    }
//    else {
//       var arr1 = narray.slice(0, mposition);
//       return array_binarySearch(arr1, delement);
//    }
// }

//  var myArray = [1, 2, 3, 5, 6, 7, 10, 11, 14, 15, 17, 19, 20, 22, 23];
//  console.log(array_binarySearch(myArray, 6));
 



// !___________________________________________________________

// *    Write a JavaScript function to find longest substring in a given a string without repeating characters.

// function is_Palindrome(str1) {
//     var rev = str1.split("").reverse().join("");
//     return str1 == rev;
//     }
    
//     function longest_palindrome(str1){
    
//     var max_length = 0,
//     maxp = '';
    
//     for(var i=0; i < str1.length; i++) 
//     {
//     var subs = str1.substr(i, str1.length);
    
//     for(var j=subs.length; j>=0; j--) 
//     {
//     var sub_subs_str = subs.substr(0, j);
//     if (sub_subs_str.length <= 1)
//     continue;
    
//     if (is_Palindrome(sub_subs_str))
//     {
//     if (sub_subs_str.length > max_length) 
//     {
//     max_length = sub_subs_str.length;
//     maxp = sub_subs_str;
//     }
//     }
//     }
//     }
    
//     return maxp;
//     }
//     console.log(longest_palindrome("abracadabra"));
    
//     console.log(longest_palindrome("HYTBCABADEFGHABCDEDCBAGHTFYW12345678987654321ZWETYGDE")); 
    
// !___________________________________________________________

// * Write a JavaScript program to calculate the factorial of a number.

// function factorial(num)
// {
//     if(num === 0)
//     {
//         return 1;
//     }
//     else{
//         return num * factorial(num-1)
//     }
// }

// console.log(factorial(5))

// !___________________________________________________________

// *

// var gcd = function(a, b) {
//     if ( ! b) {
//         return a;
//     }
//     console.log(a,b, a % b)

//     return gcd(b, a % b);
// };
// // console.log(gcd(2154, 458));
// console.log(gcd(336, 360));

// var a = 2154; //First number
// var b = 458;  //Second number 
// var gcd;
// while (a!=b)
// {
// 	if (a>b)
// 	{
// 		a = a -b;
// 	}
// 	else
// 	{
// 		b = b - a;
// 	}
// }
// gcd = a;
// console.log(gcd);

// !___________________________________________________________

// *



// !___________________________________________________________

// *



// !___________________________________________________________

// *



// !___________________________________________________________

// *



// !___________________________________________________________

// *



// !___________________________________________________________

// *



// !___________________________________________________________

// *



// !___________________________________________________________

// *



// !___________________________________________________________

// *



// !___________________________________________________________

// *



// !___________________________________________________________

// *



// !___________________________________________________________

// *



// !___________________________________________________________

// *



// !___________________________________________________________

// *



// !___________________________________________________________

// *



// !___________________________________________________________

// *



// !___________________________________________________________

// *



// !___________________________________________________________

// *



// !___________________________________________________________

// *



// !___________________________________________________________

// *



// !___________________________________________________________

// *



// !___________________________________________________________

// *



// !___________________________________________________________

// *



// !___________________________________________________________

// *



// !___________________________________________________________

// *



// !___________________________________________________________

// *



// !___________________________________________________________

// *



// !___________________________________________________________

// *



// !___________________________________________________________

// *



// !___________________________________________________________

// *



// !___________________________________________________________

// *



// !___________________________________________________________

// *



// !___________________________________________________________

// *



// !___________________________________________________________

// *



// !___________________________________________________________

// *



// !___________________________________________________________

// *



// !___________________________________________________________

// *



