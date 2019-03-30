// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!
const moduloNum = function(divisor) {
  return function (dividend){
    return dividend % divisor;
  }
}

const moduloSix = moduloNum(6);
const moduloNine = moduloNum(9)

console.log("Challenge 1 Test 1:",moduloSix(7));
console.log("Challenge 1 Test 2:",moduloNine(31));

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


const myCounter = counterFactory();
console.log(myCounter.decrement());
console.log(myCounter.increment());
console.log(myCounter.increment());
console.log(myCounter.decrement());
console.log(myCounter.decrement());


