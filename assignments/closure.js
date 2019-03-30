// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!
const moduloNum = function(divisor) {
  return function (dividend){
    return dividend % divisor;
  }
}

const moduloSix = moduloNum(6);// closure with value of 6
const moduloNine = moduloNum(9) //closure with value of 9

console.log("Challenge 1 Test 1: 7 mod 6",moduloSix(7));
console.log("Challenge 1 Test 2: 31 mod 9",moduloNine(31));

/* STRETCH PROBLEMS, Do not attempt until you have completed all previous tasks for today's project files */

// ==== Challenge 2: Create a counter function ====
const counter = () => {
  // Return a function that when invoked increments and returns a counter variable.
  let num = 0;
  function innerCounter(){
    console.log(num);
    num++;
  }
  return innerCounter;
};

const newCounter = counter();
newCounter();
newCounter();
newCounter();
// Example usage: const newCounter = counter();
// newCounter(); // 1
// newCounter(); // 2

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
  let num = 0; // initial value is zero
  return {
   increment: function(){
      num++
      //console.log(num);
      return num;

    },
    decrement: function(){
      num--
      //console.log(num);
      return num;
    }
    };
};

console.log("Challenge 3 Alternate: Create Counter Function with an Object that can increment and decrement")
const myCounter = counterFactory();
console.log("Decrement:",myCounter.decrement());
console.log("Increment:",myCounter.increment());
console.log("Increment:",myCounter.increment());
console.log("Decrement:",myCounter.decrement());
console.log("Increment:",myCounter.increment());

// ==== Challenge 3 Alternate: Counter function with an object that increment and decrement an initial value ====


const counterFactory2 = (number) => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
  return {
   increment: function(){
      number++
      //console.log(num);
      return number;

    },
    decrement: function(){
      number--;
      //console.log(num);
      return number;
    }
    };
};

console.log("Challenge 3 Alternate Solution: Create Counter Function with an Object that can increment and decrement")
const myCounter2 = counterFactory2(2);
console.log("Decrement:",myCounter2.decrement());
console.log("Increment:",myCounter2.increment());
console.log("Increment:",myCounter2.increment());
console.log("Decrement:",myCounter2.decrement());
console.log("Increment:",myCounter2.increment());
