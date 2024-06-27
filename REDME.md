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






# Give away

> **ProTip:** You can fork or pull my codebase **Automata-DFA** from the **GitHub**.