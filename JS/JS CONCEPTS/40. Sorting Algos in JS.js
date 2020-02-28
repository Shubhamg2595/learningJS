// Sorting Algorithms
// Sorting is considered to be an important concept in many programming languages as it helps us locate elements in a faster and easier manner.

// Bubble Sort
// How it works:

// you compare the first item with the second. If the first item is bigger than the second item. you swap them so that the bigger one stays in the second position.

// And then compare second with third item. if second item is bigger than the third, we swap them. otherwise, they stayed in their position. Hence, the biggest among first three is in the third position.

// We keep doing it. until we hit the last element of the array. In that way we bubble up the biggest item of the array to the right most position of the array.

// Look at the inner loop in the code below.

// We repeat this process, starting from the last item of the array. look at the outer loop in the code below. We do this way, so that after finishing the first inner loop, the biggest one will be in the last item of the array.

// And then we move backward inside the outer loop.

function bubbleSort(arr){
   var len = arr.length;
   for (var i = len-1; i >= 0; i--){
     for(var j = 1; j<=i; j++){
       if(arr[j-1] > arr[j]){
           var temp = arr[j-1];
           arr[j-1] = arr[j];
           arr[j] = temp;
        }
     }
   }
   return arr;
}
bubbleSort([7,5,2,4,3,9]); //[2, 3, 4, 5, 7, 9]
bubbleSort([9,7,5,4,3,1]); //[1, 3, 4, 5, 7, 9]
bubbleSort([1,2,3,4,5,6]); //[1, 2, 3, 4, 5, 6]
// Selection Sort
// This is very simple. Go through the array, find the index of the lowest element swap the lowest element with the first element. Hence first element is the lowest element in the array.

// Now go through the rest of the array (excluding the first element) and find the index of the lowest and swap it with the second element.

// thats how it continues to select (find out) the lowest element of the array and putting it on the left until it hits the last element.

function selectionSort(arr){
  var minIdx, temp, 
      len = arr.length;
  for(var i = 0; i < len; i++){
    minIdx = i;
    for(var  j = i+1; j < len; j++){
       if(arr[j] < arr[minIdx]){
          minIdx = j;
       }
    }
    temp = arr[i];
    arr[i] = arr[minIdx];
    arr[minIdx] = temp;
  }
  return arr;
}
selectionSort([7,5,2,4,3,9]); //[2, 3, 4, 5, 7, 9]
// Insertion sort
// It starts with the second element. Pick the second element to be inserted and then compare to the previous element. If the first one is bigger, move the first one to second position and second one at first.

// Now first and second item is sorted.

// Then, pick the third element and check whether the second element is bigger than the third. keep going similar way until you hit the first element or a element smaller than the element you are comparing with. When you get an item smaller than the picked item, you insert it.

function insertionSort(arr) {
  var i, len = arr.length, el, j;

  for(i = 1; i < len; i++){
    el = arr[i];
    j = i;

    while(j > 0 && arr[j-1] > toInsert){
      arr[j] = arr[j-1];
      j--;
   }
   arr[j] = el;
  }
  return arr;
}    
// Merge Sort
// Merge sort has two parts. Main part does divide or breaks down and second part is merging/combining parts. At the time of combining, parts are combined together.

// Divide: the first function named as mergeSort is actually a divide function. where an array is divided into two.

// merge: this is just merging two sorted array. Just be careful this two array could be in different size

function mergeSort(arr){
   var len = arr.length;
   if(len <2)
      return arr;
   var mid = Math.floor(len/2),
       left = arr.slice(0,mid),
       right =arr.slice(mid);
   //send left and right to the mergeSort to broke it down into pieces
   //then merge those
   return merge(mergeSort(left),mergeSort(right));
}

function merge(left, right){
  var result = [],
      lLen = left.length,
      rLen = right.length,
      l = 0,
      r = 0;
  while(l < lLen && r < rLen){
     if(left[l] < right[r]){
       result.push(left[l++]);
     }
     else{
       result.push(right[r++]);
    }
  }  
  //remaining part needs to be addred to the result
  return result.concat(left.slice(l)).concat(right.slice(r));
}
// Quick sort
// Quicksort is a divide and conquer algorithm. Quicksort first divides a large array into two smaller sub-arrays: the low elements and the high elements. Quicksort can then recursively sort the sub-arrays

// The steps are:

// Pick an element, called a pivot, from the array.
// Partitioning: reorder the array so that all elements with values less than the pivot come before the pivot, while all elements with values greater than the pivot come after it (equal values can go either way). After this partitioning, the pivot is in its final position. This is called the partition operation.
// Recursively apply the above steps to the sub-array of elements with smaller values and separately to the sub-array of elements with greater values.
function quickSort(arr, left, right){
   var len = arr.length, 
   pivot,
   partitionIndex;


  if(left < right){
    pivot = right;
    partitionIndex = partition(arr, pivot, left, right);
    
   //sort left and right
   quickSort(arr, left, partitionIndex - 1);
   quickSort(arr, partitionIndex + 1, right);
  }
  return arr;
}

function partition(arr, pivot, left, right){
   var pivotValue = arr[pivot],
       partitionIndex = left;

   for(var i = left; i < right; i++){
    if(arr[i] < pivotValue){
      swap(arr, i, partitionIndex);
      partitionIndex++;
    }
  }
  swap(arr, right, partitionIndex);
  return partitionIndex;
}

function swap(arr, i, j){
   var temp = arr[i];
   arr[i] = arr[j];
   arr[j] = temp;
}
// Heap sort
// Heapsort is a comparison-based sorting algorithm. Heapsort can be thought of as an improved selection sort: like that algorithm, it divides its input into a sorted and an unsorted region, and it iteratively shrinks the unsorted region by extracting the largest element and moving that to the sorted region. The improvement consists of the use of a heap data structure rather than a linear-time search to find the maximum.

function heapSort(arr){
  var len = arr.length,
      end = len-1;

  heapify(arr, len);
  
  while(end > 0){
   swap(arr, end--, 0);
   siftDown(arr, 0, end);
  }
  return arr;
}

function heapify(arr, len){
   // break the array into root + two sides, to create tree (heap)
   var mid = Math.floor((len-2)/2);
   while(mid >= 0){
    siftDown(arr, mid--, len-1);    
  }
}
function siftDown(arr, start, end){
   var root = start,
       child = root*2 + 1,
       toSwap = root;
   while(child <= end){
      if(arr[toSwap] < arr[child]){
        swap(arr, toSwap, child);
      }
      if(child+1 <= end && arr[toSwap] < arr[child+1]){
        swap(arr, toSwap, child+1)
      }
      if(toSwap != root){
         swap(arr, root, toSwap);
         root = toSwap;
      }
      else{
         return; 
      }
      toSwap = root;
      child = root*2+1
  }
}
function swap(arr, i, j){
  var temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}