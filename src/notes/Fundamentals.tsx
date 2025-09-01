// Manipulating Arrays with TypeScript: Filtering, Spreading, Destructuring
// Filtering:
const numbers = [1, 2, 3, 4, 5];
const evenNumbers = numbers.filter(number => number % 2 ===  0);
// Result: evenNumbers is now [2, 4]

// Spreading:
const obj1 = { name: 'John', age: 25 };
const obj2 = { city: 'New York', country: 'USA' };
const mergedObject = { ...obj1, ...obj2 };
console.log(mergedObject); 
// Result: { name: 'John', age: 25, city: 'New York', country: 'USA' }

// Destructuring:
const array = [1, 2, 3];
const [a, b, c] = array;
// a is now 1, b is now 2, c is now 3