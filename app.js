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








