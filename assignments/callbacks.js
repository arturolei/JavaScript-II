// Create a higher order function and invoke the callback function to test your work. You have been provided an example of a problem and a solution to see how this works with our items array.  Study both the problem and the solution to figure out the rest of the problems.

const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];

/* 

  //Given this problem: 
  
  function firstItem(arr, cb) {
    // firstItem passes the first item of the given array to the callback function.
  }

  // Potential Solution:

  // Higher order function using "cb" as the call back
  function firstItem(arr, cb) {
    return cb(arr[0]);
  }

  // Function invocation 
  firstItem(items, function(first) {
    console.log(first)
  });

*/


function getLength(arr, cb) {
  // getLength passes the length of the array into the callback.
  return cb(arr.length);
}

//Test of getLength
getLength(items, function(param){console.log("Test of getLength:",param);});

function last(arr, cb) {
  // last passes the last item of the array into the callback.
  return cb(arr[arr.length-1]);
}
//Test of last
last(items,param => console.log("Test of last:",param));


function sumNums(x, y, cb) {
  // sumNums adds two numbers (x, y) and passes the result to the callback.
  return cb(x+y);
}

//Test of sumNums
sumNums(2,2, function(param){console.log("Test of sumNums:",param)});

function multiplyNums(x, y, cb) {
  // multiplyNums multiplies two numbers and passes the result to the callback.
  return cb(x*y);
}

//Test of multiplyNums
multiplyNums(1,-5, param => console.log("Test of multiplyNums:",param));

function contains(item, list, cb) {
  // contains checks if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false.
  return cb(list.includes(item));
}

//Test of contains when item is not in list
contains(5, [1,2,3,4], param => console.log("Test of contains when item is not in list (this should be false):", param));

//Test of contains when item is in list
contains(2, [1,2,3,4], param => console.log("Test of contains when item is in list (this should be true):", param));


/* STRETCH PROBLEM */

function removeDuplicates(array, cb) {
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.
  return cb(array.filter((item,index) => array.indexOf(item) === index))
}

//NB: This works because Array.indexOf(item) returns the first index value at which the item occurs.
let testArray = [1,1,2,2, "Steve", "Steve"]
removeDuplicates(testArray, param => console.log('Test of removeDuplicates:', param));
console.log("Original Array with Duplicates: ", testArray);
