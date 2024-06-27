//#region 1) var, let, const

// var
// re-initialization (y)
// re-declaration (y)
// block scope (y)
// hoisting (y)

// let
// re-initialization (y)
// re-declaration (n)
// block scope (y)
// hoisting (n)

// const
// re-initialization (n)
// re-declaration (n)
// block scope (n)
// hoisting (y)


// if (true) {
//     // This variable is hosited
//     var a = 10;
// }
// console.log(a)


// The function foo() is hoisted
function foo() {
    // This variable is not hoisted
    var a = 10;
}
// foo()
// console.log(a)

// Example1
// x = 5; // Assign 5 to x
// elem = document.getElementById("demo"); // Find an element
// elem.innerHTML = x;                     // Display x in the element
// var x; // Declare x

// Example2
// carName = "Volvo";  // Reference Error
// let carName;

// Example3
// car = "Volvo";   // Syntax Error
// const car;

// >>> JavaScript Initializations are Not Hoisted <<<
// >>> JavaScript only hoists declarations, not initializations <<<
// Example A does not give the same result as Example B:
// -> Example A
// var x = 5; // Initialize x
// var y = 7; // Initialize y

// elem = document.getElementById("demo"); // Find an element
// elem.innerHTML = x + " " + y;           // Display x and y

// -> Example B
// var x = 5; // Initialize x

// elem = document.getElementById("demo"); // Find an element
// elem.innerHTML = x + " " + y;           // Display x and y

// var y = 7; // Initialize y

//#endregion

//#region 2) Template literals

let name = "Mohammmad Abbas"
let str = "my name is " + name
// console.log(str)

let num = 2;
let ans = `The square root of ${num} is ${num * num}`
// console.log(ans)

//#endregion

//#region 3) Ternary Operator

// if (false) {
//     console.log("True condition worked")
// } else {
//     console.log("False condition worked")
// }

// ? = IF & : = ELSE
// Simple if else
// let condition = false
// condition 
//     ? console.log("True condition worked") 
//     : console.log("False condition worked")


// Else if
let age = 12;
let studentCard = true

// age > 17 
//     ? console.log("Allow") 
//     : studentCard 
//     ? console.log("Allow on Student card") 
//     : console.log("Not Allow")

// age > 17 || studentCard
//     ? console.log("Allow")
//     : console.log("Not Allow")

//#endregion

//#region 4) Circuits

let myCondition = false
let check = myCondition && "ABC"
// console.log(check)

//#endregion

//#region 5) Pass by Value && Pass by Reference

let obj = {
    id: 1,
    name: "Abbas"
}
let b = obj
b.inst = "SMIT"
// console.log(obj)

let arr = [1, 2, 3]
let bArr = arr
bArr.push("Anything")
// console.log(arr)

//#endregion

//#region 6) Spread Operator

let x = [1,2,3]
let y = ["A", "B", "C"]
let z = [...x,...y]
z.push("AdvanceJS")
// z.pop()
// console.log(...z)


let e = {
    id: 1,
    name: "Abc"
}
let f = {
    inst: "SMIT"
}
let g = {...e,...f}
g.check = true
// console.log(g)

//#endregion

//#region 7) Rest Operator  
function foo(a,b,c,...x){
    console.log(a,b,c,x);
}
// foo(1,2,3,4,5,6,7,8,9)

//#endregion

//#region 8) Destructuring Array & Object  
let array = [1, 2, 3, 4]
// let [firstIndex, secondIndex, thirdIndex] = array
// console.log(firstIndex, secondIndex, thirdIndex);

let [firstIndex, secondIndex, , fourthIndex] = array
// console.log(firstIndex, secondIndex, fourthIndex);

let object = {
    id: 1,
    _name: "ABC",
    age: 19,
    course: "Software Dev",
    courseInstructor: "Sir Basit"
}
let {id, _name, courseInstructor: instructor} = object
// console.log(id, _name, instructor);

//#endregion

//#region 9) Objects 

const mySym = Symbol("Key_1")
let JsUser = {
    name: "Abbas",
    "full Name": "Mohammad Abbas",
    [mySym]: "myKey1",
    age: 20,
    location: "Karachi",
    email: "abbas@google.com",
    isLoggedIn: false
}
// console.log(JsUser.isLoggedIn)
// console.log(JsUser["location"])
// console.log(JsUser["full Name"])
// console.log(JsUser[mySym])

// Object.freeze(JsUser)
// JsUser.name = "Don" // No change

JsUser.greeting = function(){
    console.log("Hello JsUser")
}
// console.log(JsUser.greeting);
// console.log(JsUser.greeting());


JsUser.greetingUser = function(){
    console.log(`Hello JsUser, ${this["full Name"]}`)
}
// console.log(JsUser.greetingUser());

// Singleton Object
const user = new Object()
user.id = 'WMA-195974'
user.name = 'Aftab'
user.isLoggedIn = true
// console.log(user)

let keys = Object.keys(user)
// console.log(keys);

let values = Object.values(user)
// console.log(values);

let entries = Object.entries(user)
// console.log(entries);

//#endregion

//#region 10) Functions 
// a) Call back & Higher Order

// jo function apne param me koi dosra function call kr rha ho wh higherOrder function hota hai.
// jo function ksi k param me call ho rha ho wh callBack Function hota hai.

function abc(a){
    return a;
}
function foo(b){
    console.log(b)
}
foo(abc("Hello ;)"))


function abc(){
    console.log("ABC");
    return function(){
        console.log("Return hone wala function");
    }
}
let ret = abc()
console.log(ret());
// abc()()   // short method


// b) Arrow function  
// Light weigth function. Created on the spot, execute and destroy. Highly recommended.  
let arrowFun = () => {
    console.log("This is arrow function")
}
arrowFun()

let arrFun = (a,b) => "return wala string"
let checkFun = arrFun()
console.log(checkFun)

let v = _ => _
console.log(v("Sir Basit Zindabad"))

// c) Closures

// d) lexical scoping

let val = "xyz"
function Foo(){
    let val = "Foo"
    console.log(val);
}
// Foo()

// e) default parameter
function defParam(b = 1){
    let a = 121
    console.log(b * a);
}
// defParam()

//#endregion

//#region 11) Array Functions
// All array functions provides Loop/Iteration. CallBack function on their parameter. Callback function iterates on every index. In Every callBack fun(), we get value in 1st param, index in 2nd & complete array in 3rd param. 

// a) === Map
// It always returns an Array
let s = [1, 2, 3, 4, 5];
s.map((item, index, arr) => {
    console.log(item, index, arr)
})

let n = ['A', 'B', 'B', 'A', 'S']
const resOfN = n.map((v,i)=>{
    console.log(i+1,v)
})


let arrayOfObj = [
    {
        id: 1,
        name: "Abbas"
    },
    {
        id: 2,
        name: "Saif"
    },
    {
        id: 3,
        name: "Abdullah"
    },
    {
        id: 4,
        name: "Hammad"
    },
    {
        id: 5,
        name: "Hussain"
    },
]

let resOfObj = arrayOfObj.map((x, i, z) => {
    return x.name;
})
console.log(resOfObj)
// b) === Filter
// Specific data filtered

// c) === ForEach
// To do any work for each element

// d) === Reduce
// calculation. back n forth record. 

// e) === Some
// checks the specific value present or not(zaroori nh k sab).

// f) === Every
// same as Some func() but on all every value

// g) === Find
// Checks the value and return it on first occurance

// i) === FindIndex
// finds the index of any array element

// j) === Flat

//#endregion