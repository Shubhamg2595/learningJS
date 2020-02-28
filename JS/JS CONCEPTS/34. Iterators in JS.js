// Iterators in Javascript

function Iterator(values) {
    let nextIndex = 0;
       // we will return an object
       return {
           next: function () {
               if (nextIndex < values.length) {
                   // We will return below object
                   return {
                       value: values[nextIndex++],
                       done: false
                   }
               }
               else {
                   // We will return below object with only done
                   return {
                       done: true
                   }
               }
           }
       }
   }
   
   const numberArray = [2, 3, 4, 5, 6, 7];
   const numberIter = Iterator(numberArray);
   console.log('2595', numberArray,numberIter);
   console.log('2595', numberIter.next());
   console.log('2595', numberIter.next());
   console.log('2595', numberIter.next());
   console.log('2595', numberIter.next());


//    Iterables and iterators
// ES6 introduces a new mechanism for traversing data: iteration. Two concepts are central to iteration:

// An iterable is a data structure that wants to make its elements accessible to the public. It does so by implementing a method whose key is Symbol.iterator. That method is a factory for iterators.
// An iterator is a pointer for traversing the elements of a data structure (think cursors in databases).
// String, Array, TypedArray, Map and Set are all built-in iterables, because each of their prototype objects implements an @@iterator method.