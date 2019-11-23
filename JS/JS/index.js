// below is a regex. literal in js.
// let reg = /shubham/gi;

// console.log(reg); //  /shubham/

// console.log(reg.source)


// functions to match expressions
// ! 1. exec() - this function will return an array for match or null for no match. 
// Above method only returns startIndex for first occurence of the string
// /g : checks for entire string


// let str = "this is my name ShuBham gupta, shuBhaM Gupta is my name"

//  let result = reg.exec(str);
//  console.log(result)


//  ! 2. test(string) method returns boolean value

// console.log(reg.test(str))

// !.  3. match() : this returns an array of result or null


// let result = str.match(reg);
// console.log('match()',result)

// ! 4. search() : returns index of first match or -1

// let result = str.search(reg);
// console.log('search',result)


// 5. replace() : returns a new string with all the replacements

// let result = str.replace(reg,'SHUBHAM');
// console.log(result)

// ? ----------- METACHARACTERS IN JS -----------------------

let reg = /shubham/gi;

let str = "shubham this is my name ShuBham gupta, shuBhaM Gupta is my name"


// ! 1. ^ : similar to startsWith() in JS , checks if our given string starts with mentioned regex
// reg = /^shub/gi
// console.log(reg.exec(str)); 

// ! 2. $ : similar to endsWith() in JS , checks if our given string ends with mentioned regex
// reg = /me$/gi
// console.log(reg.exec(str)); 


 // ! 3. . : matches any one character

// reg = /shu.ham/gi;
// console.log(reg.exec(str));
// ! 4. * : matches 'n' number of characters character
// * must be applied after the first character to find rest of the characters
// let str1 = 'shsdajdahubham is name of'
// reg = /s*hubham/;
// console.log('*',reg.exec(str1));
// ! 5. ? : matches any 0 or more number of characters 
// ! after characters means that character is optional

// let str1 = 'shzubhamg'
// let str1 = 'shubhamg'
// reg = /shz?ubham?g/;
// console.log('*',reg.exec(str1));

// ! 6. how to handle special character search using regex

// let str1 = 'sh*bham';
// reg = /sh\*bham/gi;
// console.log(reg.exec(str1))

// ? handling character sets

// ? alphabetic character sets
// str = 'sHUbhAm'

// reg = /s[a-z]ubham/gi; // can be any character from a to z ,
// // reg = /s[abc]ubham/gi; //can be any char. from a,b,c
// console.log(reg.exec(str));

// ! using '^' operator with character sets, it acts as not operator

// reg = /s[^a-z]ubham/gi;
// str='s8ubham';

// reg = /s[^aeiou]ubham/gi;
// str='shubham';
// console.log(reg.exec(str));


reg = /s[a-zA-Z]hubha[0-9]/;
str='shubha0';
console.log(reg.exec(str));


// Quantifiers - We use {}
regex = /har{2}y/; // r can occur exactly 2 times
regex = /har{0,2}y/; // r can occur exactly 0 to 2 (0 or 1 or 2) times

// Groupings  - We use paranthesis for groupings ()
regex = /(har){2}([0-9]r){3}/

// const str = "hirry9 bhai";
str = "harrry bhai"
str = "harhar1r4r5r bhai";


let result = regex.exec(str);
console.log("The result from exec is ", result);


if(regex.test(str)){
    console.log(`The string ${str} matches the expression ${regex.source}`);
}
else{
    console.log(`The string ${str} does not match the expression ${regex.source}`);
}