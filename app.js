console.log("Testing that everything is working!");
console.log("And it's also working on port 5500!");

/*
Exercise 1: Define an empty array
1) Create an empty array and assign it to a variable called `foods`.
Exercise 1 has been completed for you:
Thanks for this!
*/

const foods = [];
console.log('Exercise 1 result:', foods);

/*
Exercise 2: Add strings to the array
1) Add 'pizza' and 'cheeseburger' to the `foods` array. 
Note: 'pizza' should be the first item in the array, followed by 'cheeseburger'.
Complete Exercise 2 in the space below:
*/

foods.push('pizza');
foods.push('cheeseburger');
console.log('Exercise 2 result:', foods);

/*
Exercise 3: Insert at the beginning
1) Insert the string 'taco' at the beginning of the `foods` array.
Complete Exercise 3 in the space below:
*/

// Using unshift here because it is a method on the Array object that 
// adds this element to the beginning of an array and returns the new length of the array.
foods.unshift('taco');
console.log('Exercise 3 result:', foods);





