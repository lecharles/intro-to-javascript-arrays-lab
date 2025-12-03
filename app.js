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

/*
Exercise 4: Access an array element
1) Retrieve the 'pizza' string from the array based on its position (index) in
   the array.  
2) Assign it to a variable called `favFood`.
Complete Exercise 4 in the space below:
*/

console.log(foods); // To see the current state of the foods array

// findout index of 'pizza' in the foods array
const pizzaIndex = foods.indexOf('pizza');

const favFood = foods[1]; // 'pizza' is at index 1 after adding 'taco' at the beginning
const favFoodUsingIndexOf = foods[pizzaIndex]; // Alternative way using indexOf

console.log('favFood using indexOf:', favFoodUsingIndexOf);
console.log('Exercise 4 result:', favFood);

/*
Exercise 5: Insert an element between two others
1) Insert the string 'tofu' between 'pizza' and 'cheeseburger' in the array.
Complete Exercise 5 in the space below:
*/

// Using splice here because it is a method on the Array object that 
// changes the contents of an array by removing or replacing existing elements 
// and/or adding new elements in place.
foods.splice(2, 0, 'tofu'); // At index 2, remove 0 elements, add 'tofu'

console.log('Exercise 5 result:', foods);

/*
Exercise 6: Replace elements
1) Replace 'pizza' in the `foods` array with 'sushi' and 'cupcake'.
Complete Exercise 6 in the space below:
*/

// Using splice here again because it allows us to replace elements in the array.
const pizzaElementPosition = foods.indexOf('pizza');
foods.splice(pizzaElementPosition, 1, 'sushi', 'cupcake'); // At pizzaElementPosition, remove 1 element, add 'sushi' and then 'cupcake'

console.log('Exercise 6 result:', foods);

/*
Exercise 7: Using the `slice()` method
1) Use the `slice()` method to create a new array that contains 'sushi' and 'cupcake'.
2) Assign it to a variable named `yummy`.
Complete Exercise 7 in the space below:
*/
console.log(foods); // To see the current state of the foods array

const sushiIndex = foods.indexOf('sushi');
const cupcakeIndex = foods.indexOf('cupcake');

// Using slice here because it is a method on the Array object that 
// returns a copy of a portion of an array into a new array object 
// selected from start to end (end not included).
const yummy = foods.slice(sushiIndex, cupcakeIndex + 1); // +1 to include 'cupcake'

console.log('Exercise 7 result:', yummy);

/*
Exercise 8: Finding an index
1) Using the `indexOf()` method, find the index of the string 'tofu' in the `foods` array. 
2) Assign it to a variable named `soyIdx`.
Complete Exercise 8 in the space below:
*/


const soyIdx = foods.indexOf('tofu');
console.log(`The index of 'tofu' in the foods array is: ${soyIdx}`); // For verification
console.log('Exercise 8 result:', soyIdx);

/*
Exercise 9: Joining elements
1) Use the `join()` method to concatenate the strings in the `foods` array, separated by ' -> '. 
2) Assign the result to a variable called `allFoods`. 
Note: The final result should log as: 'taco -> sushi -> cupcake -> tofu -> cheeseburger'
Complete Exercise 9 in the space below:
*/

console.log(foods); // To see the current state of the foods array

const allFoods = foods.join(' -> ');

console.log('Exercise 9 result:', allFoods); // there's a space after result: because the joined string includes spaces

/*
Exercise 10: Check for an element
1) Using the .includes() method, check if the `foods` array contains the string 'soup'.
2) Assign the result to a variable called `hasSoup`.
Complete Exercise 10 in the space below:
*/
const hasSoup = foods.includes('soup');

console.log(`The answer to the question does the foods array contain 'soup'? is ${hasSoup}`); // For verification
console.log('Exercise 10 result:', hasSoup);









