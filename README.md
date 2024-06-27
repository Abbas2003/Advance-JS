# Advance JavaScript

Hi! this is the comprehensive cheat sheet of **Advance JS **. Lets learn together!!

## Hoisting in JavaScript
Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their containing scope during the compilation phase. This means that variables and functions can be used before they are actually declared in the code.

 ### How Hoisting Works

1.  **Function Declarations**:
    
	   -   Entire function declarations are hoisted, including their body.
    
2.  **Variable Declarations**:
    
	   -   Only the declarations are hoisted, not the initializations. This means the variable is recognized at the top of its scope but remains `undefined` until it is initialized later in the code.

- Example
```javascript
// Function can be called before it is declared
sayHello();

function sayHello() {
  console.log('Hello, World!');
}

Output: Hello, World!
```
```javascript
console.log(myVar); // Output: undefined
var myVar = 10;
console.log(myVar); // Output: 10
```
#### Let and Const

Variables declared with `let` and `const` are also hoisted, but they are not initialized. Accessing them before their declaration results in a `ReferenceError` because they are in a "temporal dead zone" from the start of the block until the declaration is encountered.
```javascript
console.log(myLetVar); // ReferenceError: Cannot access 'myLetVar' before initialization
let myLetVar = 10;
console.log(myLetVar); // Output: 10

console.log(myConstVar); // ReferenceError: Cannot access 'myConstVar' before initialization
const myConstVar = 20;
console.log(myConstVar); // Output: 20
```

## Template Literals in JavaScript

Template literals, introduced in ECMAScript 2015 (ES6), are a way to work with strings in JavaScript that allows for easier string interpolation, multi-line strings, and embedded expressions. Template literals are enclosed by backticks (`` ` ``) instead of single or double quotes.

- Example
```javascript
const name = 'Alice';
const greeting = `Hello, ${name}!`;
console.log(greeting); // Output: Hello, Alice!
```
```javascript
const a = 5;
const b = 10;
console.log(`The sum of ${a} and ${b} is ${a + b}.`); 
// Output: The sum of 5 and 10 is 15.
```
## Ternary Operator in JavaScript
The ternary operator, also known as the conditional operator, is a shorthand way of performing a conditional check and returning one of two values based on the result of the condition. It is the only operator in JavaScript that takes three operands, hence the name "ternary".

### Syntax
```javascript
condition ? expressionIfTrue : expressionIfFalse;
```
- Example
```javascript
const age = 20;
const isAdult = age >= 18 ? 'Yes' : 'No';
console.log(isAdult); // Output: Yes
```
```javascript
const score = 85;
const grade = score >= 90 ? 'A' :
              score >= 80 ? 'B' :
              score >= 70 ? 'C' :
              score >= 60 ? 'D' : 'F';
console.log(grade); // Output: B
```
```js
const isLoggedIn = true;
const welcomeMessage = isLoggedIn && 'Welcome back!';
console.log(welcomeMessage); // Output: Welcome back!
```

## JS Circuits
In JavaScript, you can build logical circuits using Boolean operators (`&&`, `||`, `!`). These operators allow you to create simple and complex logical expressions, similar to digital logic circuits in hardware design. This can be particularly useful in scenarios like access control, form validation, and other conditional logic implementations in your code.

- Example
```js
function complexCircuit(a, b, c) {
  return (a && b) || c;
}

console.log(complexCircuit(true, true, false)); // Output: true
console.log(complexCircuit(true, false, false)); // Output: false
console.log(complexCircuit(false, false, true)); // Output: true
console.log(complexCircuit(false, false, false)); // Output: false
```
```js
function hasAccess(isLoggedIn, isAdmin, isBanned) {
  return isLoggedIn && (isAdmin || !isBanned);
}

console.log(hasAccess(true, true, false)); // Output: true (logged in and admin)
console.log(hasAccess(true, false, false)); // Output: true (logged in and not banned)
console.log(hasAccess(true, false, true)); // Output: false (logged in but banned)
console.log(hasAccess(false, true, false)); // Output: false (not logged in)
```
## JS Pass by Value

When a variable is passed by value, a copy of the variable's value is made and passed to the function. This means that any changes made to the parameter inside the function do not affect the original variable.

**Primitive data types** in JavaScript (such as numbers, strings, booleans, `null`, `undefined`, and `symbol`) are passed by value.
- Example
```js
function modifyValue(x) {
  x = x + 1;
  console.log('Inside function:', x); // Inside function: 6
}

let a = 5;
modifyValue(a);
console.log('Outside function:', a); // Outside function: 5
```
## Pass by Reference

When a variable is passed by reference, a reference to the actual variable is passed to the function. This means that changes made to the parameter inside the function affect the original variable.

**Objects** (including arrays and functions) in JavaScript are passed by reference.
- Example
```js
function modifyObject(obj) {
  obj.name = 'John';
  console.log('Inside function:', obj); // Inside function: { name: 'John' }
}

let person = { name: 'Alice' };
modifyObject(person);
console.log('Outside function:', person); // Outside function: { name: 'John' }
```

## Spread Operator in JavaScript

The spread operator (`...`) in JavaScript allows an iterable such as an array or a string to be expanded in places where zero or more arguments (for function calls) or elements (for array literals) or key-value pairs (for object literals) are expected. Introduced in ES6 (ECMAScript 2015), it provides a concise way to work with arrays and objects.

### Key Uses of the Spread Operator

1.  **Expanding Arrays**
2.  **Copying Arrays**
3.  **Merging Arrays**
4.  **Converting Iterables to Arrays**
5.  **Spreading in Function Calls**
6.  **Spreading in Object Literals**
- Example
```js
function logValues(a, b, c, ...rest) {
  console.log(a, b, c);
  console.log(rest);
}

const values = [10, 20, 30, 40, 50];
logValues(...values); 
// Output:
// 10 20 30
// [40, 50]
```
```js
const obj1 = { a: 1, b: 2 };
const obj2 = { b: 3, c: 4 }; 
const mergedObj = { ...obj1, ...obj2 };
console.log(mergedObj);
 // Output: { a: 1, b: 3, c: 4 }
```

## Rest Operator in JavaScript

The rest operator (`...`) in JavaScript is a versatile tool for handling function arguments, array elements, and object properties.Introduced in ES6 (ECMAScript 2015), It simplifies working with an indefinite number of arguments and helps write more flexible and concise code. The rest operator is especially useful in function definitions, array destructuring, and object destructuring, providing a powerful way to manage collections of data.d

### Key Uses of the Rest Operator

1.  **Function Parameters**
2.  **Array Destructuring**
3.  **Object Destructuring**
- Example
```js
function sum(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}

console.log(sum(1, 2, 3)); // Output: 6
console.log(sum(1, 2, 3, 4, 5)); // Output: 15
```
```js
const person = { name: 'Alice', age: 25, city: 'New York', country: 'USA' };
const { name, age, ...rest } = person;
console.log(name); // Output: Alice
console.log(age); // Output: 25
console.log(rest); // Output: { city: 'New York', country: 'USA' }
```

## Destructuring Arrays and Objects in JavaScript

Destructuring is a convenient way of extracting multiple values from arrays or objects and assigning them to variables. This syntax, introduced in ES6 (ECMAScript 2015), allows you to unpack values from arrays or properties from objects into distinct variables.

### Array Destructuring

Array destructuring allows you to unpack values from arrays into distinct variables.
- Example
```js
const numbers = [1, 2, 3];
const [first, second, third] = numbers;
console.log(first);  // Output: 1
console.log(second); // Output: 2
console.log(third);  // Output: 3
```
### Object Destructuring

Object destructuring allows you to unpack properties from objects into distinct variables.
- Example
```js
const person = { name: 'Alice', age: 25 };
const { name, age } = person;
console.log(name); // Output: Alice
console.log(age);  // Output: 25
```
## Callback Functions and Higher-Order Functions in JavaScript

In JavaScript, functions are first-class citizens, which means they can be assigned to variables, passed as arguments to other functions, and returned from functions. This feature allows for powerful programming patterns, including callbacks and higher-order functions.

### Callback Functions

A **callback function** is a function passed into another function as an argument, which is then invoked inside the outer function to complete some kind of routine or action.
- Example
```js
function greet(name, callback) {
  console.log(`Hello, ${name}!`);
  callback();
}

function sayGoodbye() {
  console.log('Goodbye!');
}

greet('Abbas', sayGoodbye);

// Output:
// Hello, Abbas!
// Goodbye!
```
 ### Higher-Order Functions

A **higher-order function** is a function that either takes one or more functions as arguments, returns a function, or both. Higher-order functions allow for abstraction over actions, not just values.
- Example
```js
function higherOrderFunction(callback) {
  return function(name) {
    callback(name);
  };
}

function greet(name) {
  console.log(`Hello, ${name}!`);
}

const greetPerson = higherOrderFunction(greet);
greetPerson('Alice'); // Output: Hello, Alice!
```
## Arrow Functions in JavaScript

Arrow functions, introduced in ES6 (ECMAScript 2015), provide a more concise syntax for writing function expressions in JavaScript. They are particularly useful for writing short functions and for maintaining the context of `this` in certain situations.
- Example
```js
const greet = name => `Hello, ${name}!`;
console.log(greet('Alice')); // Output: Hello, Alice!
```
```js
const addAndLog = (a, b) => {
  const result = a + b;
  console.log(result);
  return result;
};
console.log(addAndLog(2, 3)); // Output: 5 (and logs 5 to the console)
```
## Lexical Scoping in JavaScript

Lexical scoping, also known as static scoping, is a fundamental concept in JavaScript and many other programming languages. It refers to the scope of a variable being determined by its position within the source code and the lexical context in which it is defined. In JavaScript, this means that the accessibility of variables is resolved during the lexical (compile-time) phase, based on the physical placement of those variables within the nested function scopes.

### Key Concepts of Lexical Scoping

1.  **Scope**: The region of the code where a variable is defined and accessible.
2.  **Lexical Environment**: The structure that holds variable bindings and references in a nested scope.
3.  **Nested Scopes**: Inner functions have access to variables defined in their outer functions.

### How Lexical Scoping Works

When a function is declared in JavaScript, it forms a closure. This closure captures the lexical environment at the time the function is defined, not when it is executed. This means that the function retains access to the variables and functions that were in scope at the time it was created.
- Example
```js
function outerFunction() {
  const outerVariable = 'I am outside!';
  
  function innerFunction() {
    console.log(outerVariable);
  }
  
  innerFunction();
}

outerFunction(); // Output: I am outside!
```
## `map` Function in JavaScript

The `map` function is a built-in array method in JavaScript that allows you to create a new array by applying a function to each element of an existing array. It is a powerful and commonly used method for transforming arrays in a concise and readable manner.
### Syntax
```js
array.map(callback(currentValue, index, array), thisArg);
```
- Example
```js
const numbers = [1, 2, 3, 4];
const result = numbers.map((number, index, array) => {
  console.log(`Index: ${index}, Number: ${number}, Array: ${array}`);
  return number * 2;
});

console.log(result); // Output: [2, 4, 6, 8]
```




