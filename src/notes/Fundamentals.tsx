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



// Defining Functions: Parameters, Return Types, Overloading
// Parameters:
function addNumbers(a: number, b: number): number {
  return a + b;
}
console.log(addNumbers(3, 3))
//Result: 6

// Return Types:
function calculateArea(radius: number): number {
  return Math.PI * radius * radius;
}

// Overloading:
function greet(name: string): void;
function greet(firstName: string, lastName: string): void;

function greet(arg1: string, arg2?: string): void {
  if (arg2) {
    console.log(`Hello, ${arg1} ${arg2}!`);
  } else {
    console.log(`Hello, ${arg1}!`);
  }
}