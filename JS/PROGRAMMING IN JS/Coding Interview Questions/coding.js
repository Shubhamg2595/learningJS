// 1. Check prime number
// A prime number is only divisible by itself and 1.

// School Method
{/*
    function isPrime(num)
{
    let i = 0;

    for(i=2;i<num;i++)
     {
         if(num%i===0)
         {
             return false
         }
        
     }

     
    if(num != 0 && num!== 1)
    {
        return true;
    }

}
*/}

// ************ way2 *************
// We can decrease complexity of the function if you run the loop until square root of number:
// Instead of checking till n,
//  we can check till √n because a larger factor of n must be a multiple of smaller factor that has been already checked.

// function isPrime(num) {
//     let squareRoot = Math.floor(Math.sqrt(37))
//     for (let i = 2; i <= squareRoot; i++) {
//         if (num % i === 0) return false;
//     }
//     return num !== 1 && num !== 0;
// }

// ************ way3 *************
// We can decrease complexity of the function if you run the loop until square root of number:
// Instead of checking till n, we can check till √n because a larger factor of n must be a multiple of smaller factor that has been already checked.


// function isPrime(n) : 
//     # Corner cases 
//     if (n <= 1) : 
//         return False
//     if (n <= 3) : 
//         return True

//     # This is checked so that we can skip  
//     # middle five numbers in below loop 
//     if (n % 2 == 0 or n % 3 == 0) : 
//         return False

//     i = 5
//     while(i * i <= n) : 
//         if (n % i == 0 or n % (i + 2) == 0) : 
//             return False
//         i = i + 6

//     return True

// console.log('isPrime', isPrime(2));
// console.log('isPrime', isPrime(7));
// console.log('isPrime', isPrime(21));
// console.log('isPrime', isPrime(23));
// console.log('isPrime', isPrime(203));
// console.log('isPrime', isPrime(72));

/*----------------------------------------------------------*/

// 2. Find all the prime factors of the given number

/********* way 1 ******************/
// 1. While n is divisible by 2, print 2 and divide n by 2.
// 2. After step 1, n must be odd. Now start a loop from i = 3 to square root of n. While i divides n, print i and divide n by i, increment i by 2 and continue.
// 3. If n is a prime number and is greater than 2, then n will not become 1 by above two steps. So print n  if it is greater than 2.


{/*function primeFactors(num)
{
    let primeFactors = []; 
    while(num%2 === 0)
    {
        primeFactors.push(2);
        num = num/2;
    }

    for(let i=3; i<= Math.sqrt(num);i+=2)
    {
        while(num%i== 0)
        {
            primeFactors.push(i); 
            num = num/i;
        }

    }

    if(num>2) {
        primeFactors.push(num)
    }

    return primeFactors;


}
*/}
// console.log(primeFactors(27))
// console.log(primeFactors(24))
// console.log(primeFactors(625))
// console.log(primeFactors(37))


/*----------------------------------------------------------*/

// 3. Find the nth Fibonacci number


/***************way 1***************/
// function fibonacci(n)
// {
//     let n1  = 1, n2 = 1, i=2, sum = 0;

//     while(i<n)
//     {
//         sum = n1 + n2;
//         n1 = n2;
//         n2 = sum;
//         i++;
//     }
//     return sum
// }

/***************way 2***************/
// using recursion
{/*
function fibonacci(n){
    if(n<=1)
      return n;
    else
    {
        return fibonacci(n-1) + fibonacci (n-2); 
    }
   
  }
  */}
// console.log(fibonacci(4));
// console.log(fibonacci(12));


/*----------------------------------------------------*/

// Find nth index value of fibonacci
// Given a number N return the index value of the Fibonacci sequence, where the sequence is:

// 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, ...

// function fib(n) {
//     let n1 = 1, n2 = 1, i = 2, sum = 0;

//     while (i <= n) {
//         sum = n1 + n2;
//         n1 = n2;
//         n2 = sum;
//         i++;
//     }
//     return sum

// }

// console.log(fib(4));

/* ------------------------------- */
// Find Greatest Common Divisor
// Using Euclidean algorithm:
// function gcd(a, b){
//     if (a == 0) 
//         return b  

//     return gcd(b%a, a)
// }

// gcd(36,60) => 
// > gcd(24,36)
// > gcd(12,24)
// > gcd(0,12)

/* --------------------------------------------- */

// Remove duplicate element from an array


let arrayWithDups = [1, 2, 3, 3, 2, 1];

// ***** way 1 *************/ 
// using Sets
// let arrayWithoutDups = new Set(arrayWithDups);
// console.log(Array.from(arrayWithoutDups))

//  ******* way2 ******* /
// using array.filter

// let arrayWithoutDups = arrayWithDups.filter((item,index,arr) =>  console.log(arr.indexOf(item),index,item) );
// 0 0 1
// 1 1 2
// 2 2 3
// 2 3 3
// 1 4 2
// 0 5 1

// let arrayWithoutDups = arrayWithDups.filter((item,index,arr) =>  arr.indexOf(item) === index );
// console.log(arrayWithoutDups);



//  ******* way3 ******* /
// using array.Reduce
/*
let arrayWithoutDups = arrayWithDups.reduce( (uniqueAcc,value) => {
    return uniqueAcc.includes(value) ? uniqueAcc : [...uniqueAcc,value];

},[]);
console.log(arrayWithoutDups)

*/


/** ---------------------------------------------------------------------------------------------------------------------- */


// function swapWithoutTemp(a,b)
// {
//     let a1,a2;
//     if(a<b)
//     {
//         a1=a;
//         a2=b;
//     }
//     else{

//         a1 = b;
//         a2= a;
//     }
//     // a1 = 9, a2 = 12;
//     a2 = a2 - a1; //a2 = 3
//     a1 = a1 + a2;   // a1 = 9 + 3 = 12 
//     a2 = a1-a2; // a2 = a1 - a2

//     return {a: a1, b: a2};

// }


// Using ES6:

// function swapWithoutTemp(a, b) {
//   console.log('before swap: ' + a + ' ' + b);
//   [a, b] = [b, a];
//   console.log('after swap: ' + a + ' ' + b);
// }

// console.log(swapWithoutTemp(9,12));





/** --------------------------------------------------------------------------------------------------------------- */

// String reverse
// Given a string, print the reverse of the string (ex: javascript becomes tpircsavaj).

// 1. naive method : using for loop

// function revStr(str)
// {

//     let newStr = '';
//     for(let i = str.length-1;i>=0;i--)
//     {
//         newStr = newStr + str[i];
//     }
//     return newStr;


// }
// console.log(revStr('Shubham Gupta'));

// 2. using reverse method after converting the string to array
// 'shubham Gupta'.split('').reverse().join('')
// "atpuG mahbuhs"

/-------------------------------------------------------------------------------------------/

// Reverse in Place
// Given a string, reverse the letters of word but preserve the word order (ex: "I am the good boy" becomes "I ma eht doog yob")


// let str = 'I am the good boy';

// str = str.split(' ');
// let newstr = [];
// for(let word of str)
// {
//     newstr.push(word.split('').reverse().join(''));

// }
// newstr = newstr.join(' ')
// console.log(newstr);


// function reverseInPlace(str){
//     return str.split(' ').reverse().join(' ').split('').reverse().join('');
//   }


// /**--------------------------------------------------------------------------------------------------------------------*/

// Print the first non repeating character in a string
// Given a string, print the first non-repeating letter in the string.


// let str = 'abcdbcda';

// function firstNonRepeatedCharacter(str) {
//     let mapStr = {};

//     str = str.split('');

//     for (let i = 0; i < str.length; i++) {
//         mapStr[str[i]] = mapStr[str[i]] ? mapStr[str[i]] + 1 : 1;
//         if (mapStr[str[i]] > 1) {
//             return str[i]
//         }
//     }
//     // console.log(mapStr)
// }

// console.log('firstNonRepeatedCharacter(str)', firstNonRepeatedCharacter('abcdbcda'));
// console.log('firstNonRepeatedCharacter(str)', firstNonRepeatedCharacter('abacdbcda'));


// /-------------------------------------------------------------------------------------------------------


// Check if a given string is palindrom
// A string is palindrom if the reverse order is same as original.

// function checkPalindrome(str)
// {
//     return str === str.split('').reverse().join('');
// }

// console.log(checkPalindrome('abba'))
// console.log(checkPalindrome('madam'))
// console.log(checkPalindrome('dasldsl'));

//-----------------------------------------------------------------------------------------
// function generateRandom(start, end) {
//     return Math.floor(Math.random() * end) + start;  
// }

// console.log(generateRandom(2,10))


// Find the missing number
// Given a unsorted array of numbers 1 to 100 excluding one number, find the missing number.

// The sum of a linear series of n numbers is equal to n*(n+1)/2.


// let numArray = [7,1,4,2,9,6,3,5];

// const linearSum = function(n) {
//     return n*(n+1)/2;
// }

// console.log('linear SUm',linearSum(numArray.length+1) - linearSum(numArray.length))

// function missingNumber(arr){
//     var n = arr.length+1, 
//     sum = 0,
//     expectedSum = n* (n+1)/2;

//     sum = arr.reduce((total, num) => total + num);
//     return expectedSum - sum;
//   }

//   missingNumber([5, 2, 6, 1, 3]);
//   // 4

//-------------------------------------------------------------------------------------------------------

// Find the largest and smallest number in an array
// Given an unsorted array, find the largest and smallest number.



// let numArray = [7,1,4,2,9,6,3,5];

// function findLargestAndSmallestNumberFromArray(array) {
//     let newArr = [];
//     newArr = array.sort((a,b) => a-b);
//     return [newArr[0],newArr[array.length-1]]

// }

// console.log(findLargestAndSmallestNumberFromArray(numArray))

//----------------------------------------------------------------------------------------------------------------



// Permutations of a string
// Get all permutations of a string
// function permut(string) {
//     if (string.length < 2) return string; // This is our break condition

//     var permutations = []; // This array will hold our permutations

//     for (var i=0; i<string.length; i++) {
//         var char = string[i];

//         // Cause we don't want any duplicates:
//         if (string.indexOf(char) != i) // if char was used already
//             continue;           // skip it this time

//         var remainingString = string.slice(0,i) + string.slice(i+1,string.length);

//         console.log('char:',char,' index:: ',i,' remainingString ', remainingString);

//         for (var subPermutation of permut(remainingString))
//         {
//             console.log('subPermutation',subPermutation)
//             permutations.push(char + subPermutation)

//         }

//     }
//     return permutations;
// }

// let permutations = permut('xyz');
// console.log(permutations)


// /----------------------------------------------

// Implement currying
// Curring is partial invocation of a function. Currying means first few arguments of a function is pre-processed and a function is returned. The returning function can add more arguments to the curried function. It's like if you have given one or two spice to the curry and cooked little bit, still you can add further spice to it. A simple example will look like
{/*
function addBase(base){
  return function(num){
    return base + num;
  }
}
*/}

// var addTen = addBase(10);
// addTen(5); //15
// addTen(80); //90
// addTen(-5); //5




//--------------------------------------------------------

// Check sum of two
// From a unsorted array, check whether there are any two numbers that will sum up to a given number.


// function sumFinder(arr,sum)
// {
//     let arr1= arr.sort((a,b) => a-b);
//     console.log(arr1);
//     for(let i=0;i<arr1.length;i++)
//     {
//         for(let j= i+1;j<arr1.length;j++)
//         {
//             if(arr[i]+arr[j] === sum)
//             return true   
//         }
//     }
//     return false
// }

// console.log(sumFinder([6,4,3,2,1,7], 9));
// // true
// console.log(sumFinder([6,4,3,2,1,7], 2));
// false



// ------------------------------------------------

// var a = Person('a');
// var b = new Person('b');
// var c = Person;
// function Person(name) {
//      this.first_name = name;
// }

// console.log(a.first_name);
// console.log(b.first_name);
// console.log(c.first_name);

// First of all, the function will be hoisted to top. The variable a will be undefiend and will throw error if we attempt to read a.first_name. Because executing the function Person without new returns undefined.

// b is the right way to do this. It has the instantiated object and prints b.

// c just has the reference to the function and returns undefined because the function has no first_name property attached to it.


// ------------------------------------------------------



// Most common word in a string
// Given a string of words, return the most common used word in it.

/*
function mostCommonWord(str){

    let wordMap = {};
    let mostCommonWord = '';
    let mostCommonWordLength= 0;

    for(let word of str)
    {
        wordMap[word] = wordMap[word] ? wordMap[word] + 1 : 1;
    }
    
    Object.keys(wordMap).forEach(key => {
        if(wordMap[key] > mostCommonWordLength)
        {
            mostCommonWord = key;
            mostCommonWordLength = wordMap[key];
        }
    })
    return mostCommonWord

}


console.log(mostCommonWord('ddaaaaaaaddbbbdd'));
console.log(mostCommonWord('xxxxxxxxxxxxxyyyyy'));
console.log(mostCommonWord('xxxxxxxxxxxxxyyyyuuuuuuuuuuuuuuuuuuuy'));



*/

// ---------------------------------------------------------------------------


/** 
 * 
 * SORTING ALGOS
 * 
*/

// bubble_sort

// How it works:

// you compare the first item with the second. If the first item is bigger than the second item. you swap them so that the bigger one stays in the second position.

// And then compare second with third item. if second item is bigger than the third, we swap them. otherwise, they stayed in their position. Hence, the biggest among first three is in the third position.

// We keep doing it. until we hit the last element of the array. In that way we bubble up the biggest item of the array to the right most position of the array.

// Look at the inner loop in the code below.

// We repeat this process, starting from the last item of the array. look at the outer loop in the code below. We do this way, so that after finishing the first inner loop, the biggest one will be in the last item of the array.

// And then we move backward inside the outer loop.


// Worst and Average Case Time Complexity: O(n*n). Worst case occurs when array is reverse sorted.

// Best Case Time Complexity: O(n). Best case occurs when array is already sorted.

// Auxiliary Space: O(1)

// Boundary Cases: Bubble sort takes minimum time (Order of n) when elements are already sorted.

// Sorting In Place: Yes

// Stable: Yes


/*
function bubbleSort(list_of_elems)
{
    let max_temp = 0;
    let len = list_of_elems.length;

    for(let i=0;i<len;i++)
    {
        for(let j=0;j<len;j++)
        {
            if(list_of_elems[j]>list_of_elems[j+1])
            {
                max_temp = list_of_elems[j];
                list_of_elems[j] = list_of_elems[j+1];
                list_of_elems[j+1] = max_temp;
            }
        }
    }
    return list_of_elems;
}
*/


//************************************************************ */

/*
Selection Sort
This is very simple. Go through the array, find the index of the lowest element swap the lowest element with the first element. Hence first element is the lowest element in the array.

Now go through the rest of the array (excluding the first element) and find the index of the lowest and swap it with the second element.

thats how it continues to select (find out) the lowest element of the array and putting it on the left until it hits the last element.
*/

/*
function selectionSort(list_of_elems)
{
    let minElemIndex = 0;
    let len = list_of_elems.length;
    let maxTemp = 0;

    for(let i=0;i<len;i++)
    {
        minElemIndex = i;
        for(let j=i+1;j<len;j++)
        {
            if(list_of_elems[minElemIndex]>list_of_elems[j])
            {
                minElemIndex = j;
            }
        }
        maxTemp = list_of_elems[i];
        list_of_elems[i] = list_of_elems[minElemIndex];
        list_of_elems[minElemIndex] = maxTemp;

    }
    return list_of_elems;

}

*/



/*******************************************************************
Insertion sort
It starts with the second element. Pick the second element to be inserted and then compare to the previous element. If the first one is bigger, move the first one to second position and second one at first.

Now first and second item is sorted.

Then, pick the third element and check whether the second element is bigger than the third. keep going similar way until you hit the first element or a element smaller than the element you are comparing with. When you get an item smaller than the picked item, you insert it.



function insertionSort(list_of_elems)
{
    let len = list_of_elems.length;
    for(i=1;i<len;i++)
    {
        let key = list_of_elems[i];  
        let j= i-1; 

        while(j>=0 && key < list_of_elems[j])
        {
            list_of_elems[j+1] = list_of_elems[j]; 
            j-=1;
        }
        list_of_elems[j+1]=key;
        console.log('i::',i);
        console.log('j::',j);
        console.log('loI loi',list_of_elems);


    }
    return list_of_elems;
}

*/
// let a = [2843948,2342,13231,839123,123];
// i=1
// [2843948,2342,13231,839123,123]


// console.log('UNSORTED',a);
// console.log('SORTED',insertionSort(a));


/*******************************************************************

Find Second largest element in an array
Given an array of integers, our task is to write a program that efficiently finds the second largest element present in the array.

Example:

Input : arr[] = {12, 35, 1, 10, 34, 1}
Output : The second largest element is 34.

Input : arr[] = {10, 5, 10}
Output : The second largest element is 5.

Input : arr[] = {10, 10, 10}
Output : The second largest does not exist.

A simple solution will be first sort the array in descending order and then return the second element from the sorted array. The time complexity of this solution is O(nlogn).

A Better Solution is to traverse the array twice. In the first traversal find the maximum element. In the second traversal find the greatest element less than the element obtained in first traversal. The time complexity of this solution is O(n).

A more Efficient Solution can be to find the second largest element in a single traversal.
Below is the complete algorithm for doing this:

1) Initialize two variables first and second to INT_MIN as,
   first = second = INT_MIN
2) Start traversing the array,
   a) If the current element in array say arr[i] is greater
      than first. Then update first and second as,
      second = first
      first = arr[i]
   b) If the current element is in between first and second,
      then update second to store the value of current variable as
      second = arr[i]
3) Return the value stored in second.


*/

/*
function find2ndLargest(a) {
    let len = a.length;
    let first, second = -1;

    for (i = 0; i < len; i++) {
        if (a[i] > first) {
            second = first;
            first = a[i];
        }
        if (a[i] > second && a[i] != first) {
            second = a[i]
        }
    }
    return a;
}

let a = [12, 35, 1, 10, 34, 1];
0, 12
f = 12, s = -1 ||

    1, 35
f = 35, s = 12 ||

    2, 1
f = 35, s = 12 ||

    3, 10
f = 35, s = 12 ||

    4, 34

f = 35, s = 12 || f=12, s = 34



*/

/**************************************************************** */

// Check if a string is a palindrome or not, without libraryFUnc



// function isPalindrome(str)
// {
//     for(let i=0,j=str.length-1;i<=j;i++,j--)
//     {
//         if(str[i]!==str[j])
//         return false
//         // console.log(str[i] , ' ', str[j])
//     }
//     return true
// }


// using library function
// function isPalindrome(str)
// {
//     let revStr = str.split('').reverse().join('');
//     return revStr===str
// }

// console.log(isPalindrome('madam'));
// console.log(isPalindrome('madam isi madam'));
// console.log(isPalindrome('blah halb'));
// console.log(isPalindrome('asdnjasdnjb'));




/* check if given number is a palindrome */

// function reverseNum(number) {
//     let rem, final = 0;

//     while (number > 0) {
//         rem = number % 10;  
//         number = parseInt(number / 10);
//         final =  final*10+rem;
//     }
//     return final;
// }

// function isPalindrome(number) {
//     let revNum = reverseNum(number);
//     return number === revNum;
// }

// console.log(isPalindrome(12321))
// console.log(isPalindrome(123))



/** BINARY SEARCH */


// Binary Search is searching technique which works on Divide and Conquer approach. It used to search any element in a sorted array.

// As compared to linear, binary search is much faster with Time Complexity of O(logN) whereas linear search algorithm works in O(N) time complexity.


// iterative approach

// BASE CONDITION: 
// If starting index is greater than ending index return false.
// Compute the middle index.
// Compare the middle element with number x. If equal return true.



// function binarySearch(arr,x)
// {
//     let start = 0, end = arr.length-1 ;

//     while(start<=end)
//     {
//         let mid = Math.floor((start+end)/2);
//         if(arr[mid] === x)
//         {
//             return true
//         }
//         else if(arr[mid]>x)
//         {
//             end = mid-1
//         }
//         else {
//             start = mid+1
//         }
//     }
//     return false;
// }

// let arr = [1, 3, 5, 7, 8, 9]; 

// console.log(binarySearch(arr,5));
// console.log(binarySearch(arr,53));

/*************************************************************** *
// Find the maximum element in an array which is first increasing and then decreasing

We can modify the standard Binary Search algorithm for the given type of arrays.
i) If the mid element is greater than both of its adjacent elements, then mid is the maximum.
ii) If mid element is greater than its next element and smaller than the previous element then maximum lies on left side of mid. Example array: {3, 50, 10, 9, 7, 6}
iii) If mid element is smaller than its next element and greater than the previous element then maximum lies on right side of mid. Example array: {2, 4, 6, 8, 10, 3, 1}
*/


// function findMaximum(arr)
// {
//     let start = 0, end = arr.length-1 ;
//     let maxElem = 0;
//     while(start<=end)
//     {
//         let mid = Math.floor((start+end)/2);
//         maxElem = arr[mid];
//         if(maxElem>arr[mid-1] && maxElem>arr[mid+1])
//         {
//             return maxElem
//         }
//         else if(maxElem<arr[mid-1])
//         {
//             end = mid-1
//         }
//         else {
//             start = mid+1
//         }
//     }
//     return false;
// }


// let arr = [8, 10, 20, 80, 100, 200, 400, 500, 3, 2, 1]; 
// let arr1 = [8, 10, 20, 80, 100, 200, 3, 2, 1]; 

// console.log(findMaximum(arr));
// console.log(findMaximum(arr1));






// function revNum(arr)
// {
//     let len = Math.floor(arr.length/2);
//     let temp = 0;
//     for(let i=0,j=arr.length-1;i<len;i++,j--)
//     {
//         let temp = arr[i];
//         arr[i] = arr[j];
//         arr[j] = temp;
//     }
//     return arr;
// }


// let a = [5,4,3,2,1]

// console.log('reversing number without using 2nd Arr',revNum(a));

/*
Program for Armstrong Numbers
Given a number x, determine whether the given number is Armstrong number or not. A positive integer of n digits is called an Armstrong number of order n (order is number of digits) if.

abcd... = pow(a,n) + pow(b,n) + pow(c,n) + pow(d,n) + .... 
Example:

Input : 153
Output : Yes
153 is an Armstrong number.
1*1*1 + 5*5*5 + 3*3*3 = 153

Input : 120
Output : No
120 is not a Armstrong number.
1*1*1 + 2*2*2 + 0*0*0 = 9
*/

// function power(num,power)
// {
//     let result = 1;
//     for(let i=0;i<power;i++)
//     {
//         result*=num;
//     }
//     return result
// }

// function isArmstrong(num)
// {
//     let rem = 0 , sum = 0 , temp = num , numberOfDigits =String(num).length ;
//     while(temp>0)
//     {
//         rem = temp%10;
//         sum+=power(rem,numberOfDigits);
//         temp = Math.floor(temp/10);
//     }
//     return num === sum;
// }

// console.log('isArmstrong',isArmstrong(153))
// console.log('isArmstrong',isArmstrong(120))
// console.log('isArmstrong',isArmstrong(1634))


/** 
 * 
 * second max number from araay 
 */

// function secondMax(arr) {

//     let first = arr[0], second = arr[1];

//     for (let i = 2; i < arr.length; i++) {
//         if (first < second) {
//             first, second = second, first
//         }

//         if (first < arr[i])
//         {
//             second = first;
//             first = arr[i];
//         }
//         if(first> arr[i] && arr[i]>second)
//         {
//             second = arr[i]
//         }

       

//     }

//     console.log('first',first,'second',second);

// }


// // let a = [20, 2, 23, 52121, 32];
// let a = [1,2,3,4,5];

// secondMax(a)


