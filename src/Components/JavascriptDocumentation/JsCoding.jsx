import React, { useState } from "react";

function CodeExamples() {
  const [Comparesvalues] = useState(`5 == '5'; // true (string '5' is coerced to number 5)
`);
const [Comparesboth] = useState(`5 === '5'; // false (different types: number vs string)
`);
const [TypeCoercion] = useState(`console.log('5' - 2); // 3 ('5' is converted to a number)
console.log('5' + 2); // '52' (2 is converted to a string)
`);
const [Scopedetermines] = useState(`var x = 10; // Global scope
`);
const [Variablesdeclared] = useState(`function test() {
  let y = 20; // Function scope
}
`);
const [insideblock] = useState(`{
  let z = 30; // Block scope
}
`);
const [compilationphase] = useState(`console.log(x); // undefined (var is hoisted, but not its value)
var x = 5;

greet(); // "Hello" (function declarations are fully hoisted)
function greet() {
  console.log("Hello");
}
`);
const [StringInterpolation] = useState(`const name = "John";
console.log('Hello, ${name}!'); // "Hello, John!"
`);
  const [Multiline] = useState(`console.log('This is
a multi-line string.');
`);
  const [Expressions] = useState(`console.log('2 + 3 = ${2 + 3}'); // "2 + 3 = 5"
`);
const [Passingfunction] = useState(`console.log('function greet(name) {
  return 'Hello, ${name}!';
}
function displayMessage(callback, name) {
  console.log(callback(name));
}
displayMessage(greet, "John"); // "Hello, John!"
`);
const [Returningfunction] = useState(`function multiplyBy(factor) {
  return function (num) {
    return num * factor;
  };
}
const double = multiplyBy(2);
console.log(double(5)); // 10
`);
const [ImmediatelyInvoked] = useState(`(function () {
  console.log("IIFE executed!");
})();
`);
const [Avoidspolluting] = useState(`(function (name) {
  console.log('Hello, ${name}!');
})("John");
// Output: Hello, John!
`);
const [ClosuresJavaScrip] = useState(`function outerFunction(x) {
  return function innerFunction(y) {
    return x + y; // Inner function remembers 'x' from outer function
  };
}
const add5 = outerFunction(5);
console.log(add5(3)); // 8
`);
const [GlobalContext] = useState(`console.log(this); // 'window' or 'undefined' in strict mode
`);
  const [ObjectMethod] = useState(`const obj = { name: "John", greet() { console.log(this.name); } };
obj.greet(); // "John"
`);
  const [ArrowFunctions] = useState(`const obj = { name: "John", greet: () => console.log(this.name) };
obj.greet(); // 'undefined' (inherits global 'this')
`);
  const [EventHandlers] = useState(`button.addEventListener("click", function () { console.log(this); });
`);
  const [ExplicitBinding] = useState(`const obj = { name: "John" };
function greet() { console.log(this.name); }
greet.call(obj); // "John"
`);
const [ObjectLiteral] = useState(`const obj = { name: "John", age: 30 };
`);
    const [Simplestmethod] = useState(`const obj = new Object();
obj.name = "John";
obj.age = 30;
`);
        const [ConstructorFunction] = useState(`function Person(name, age) {
  this.name = name;
  this.age = age;
}
const obj = new Person("John", 30);
`);
const [Inheritfrom] = useState(`const proto = { greet: function () { return "Hello"; } };
const obj = Object.create(proto);
obj.name = "John";
`);
const [ClassSyntax] = useState(`class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}
const obj = new Person("John", 30);
`);
const [nullcode] = useState(`let a = null; // Explicitly set to null
`);
  const [definedCode] = useState(`let b;
console.log(b); // undefined (declared but not assigned)
`);
const [Objectassign] = useState(`const obj1 = { a: 1, b: { c: 2 } };
const obj2 = Object.assign({}, obj1);
`);
const [SpreadOperator] = useState(`const obj2 = { ...obj1 };
`);
const [JSONparse] = useState(`const obj2 = JSON.parse(JSON.stringify(obj1));
`);
const [CustomDeep] = useState(`function deepCopy(obj) {
  return JSON.parse(JSON.stringify(obj));
}
`);

const [apCode] = useState(`greet.apply(obj, ["Alice"]); // "Hello, Alice! I'm John"
`);


  const [bCode] = useState(`const greetJohn = greet.bind(obj, "Alice");
greetJohn(); // "Hello, Alice! I'm John"
`);
const [InheritanceWorks] = useState(`function Person(name) {
  this.name = name;
}

Person.prototype.greet = function() {
  return \`Hello, \${this.name}\`;
};

const johny = new Person('Johny');
console.log(johny.greet()); // "Hello, Johny"
// 'johny' inherits 'greet' from 'Person.prototype'
`);
const [Commonarray] = useState(`const numbers = [1, 3, 5, 7, 9, 2, 4, 6, 8, 10];

// Step 1: Filter out numbers less than 5
const filteredNumbers = numbers.filter(num => num >= 5); // [5, 7, 9, 6, 8, 10]

// Step 2: Double the remaining numbers
const doubledNumbers = filteredNumbers.map(num => num * 2); // [10, 14, 18, 12, 16, 20]

// Step 3: Check if all doubled numbers are greater than 10
const allGreaterThan10 = doubledNumbers.every(num => num > 10); // false

// Step 4: Sort the doubled numbers in descending order
const sortedNumbers = doubledNumbers.sort((a, b) => b - a); // [20, 18, 16, 14, 12, 10]

// Step 5: Convert the sorted numbers into a comma-separated string
const resultString = sortedNumbers.join(", "); // "20, 18, 16, 14, 12, 10"

console.log("Filtered numbers:", filteredNumbers);
console.log("Doubled numbers:", doubledNumbers);
console.log("Are all numbers > 10?", allGreaterThan10);
console.log("Sorted numbers:", sortedNumbers);
console.log("Result as string:", resultString);
`);
const [ForEachArrays] = useState(`const numbers = [1, 2, 3, 4, 5];

// Using map()
const doubled = numbers.map(num => num * 2); 
console.log(doubled); // [2, 4, 6, 8, 10]

// Using forEach()
numbers.forEach(num => console.log(num * 2)); 
// Logs: 2, 4, 6, 8, 10
`);
const [originalArrays] = useState(`array.filter(callback(element, index, array), thisArg);
`);
  const [filterMethod] = useState(`const numbers = [1, 3, 5, 7, 9];

// Use filter to keep numbers >= 5
const filteredNumbers = numbers.filter(num => num >= 5);

console.log(filteredNumbers); // Output: [5, 7, 9]
`);
const [Accumulator] = useState(`aarray.reduce(callback(accumulator, currentValue, currentIndex, array), initialValue);
`);
const [InitialValue] = useState(`const numbers = [1, 2, 3, 4, 5];

// Reduce to find the sum
const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

console.log(sum); // Output: 15
`);
const [ValueCallback] = useState(`const numbers = [3, 5, 7, 2, 8];

// Reduce to find the maximum value
const max = numbers.reduce((accumulator, currentValue) => Math.max(accumulator, currentValue));

console.log(max); // Output: 8
`);
const [Findlength] = useState(`string = "example"
length = len(string)  # Output: 7
`);
  const [Reversestring] = useState(`reversed_string = string[::-1]  # Output: "elpmaxe"
`);
const [StringInterpolationn] = useState(`const name = "Johny";
const message = \`Hello, \${name}!\`; // Output: "Hello, Johny!"
`);
  const [MultilineStrings] = useState(`const multiline = 'This is
a multiline
string.';
`);
    const [ExpressionEvaluation] = useState(`const sum = '5 + 3 = \${5 + 3}'; // Output: "5 + 3 = 8"
`);
const [UsingSet] = useState(`const array = [1, 2, 2, 3, 4, 4];
const uniqueArray = [...new Set(array)]; // Output: [1, 2, 3, 4]
`);
  const [Usingfilter] = useState(`const uniqueArray = array.filter((item, index) => array.indexOf(item) === index);
`);
const [StringConversion] = useState(`"Hello" + 5; // Output: "Hello5"
`);
const [NumberConversion] = useState(`"5" * 2; // Output: 10
true + 1; // Output: 2
`);
const [BooleanConversion] = useState(`if ("") console.log("Empty"); // Not executed, "" is falsy
if ("text") console.log("Non-empty"); // Executed, "text" is truthy
`);
const [NaNvalue] = useState(`const result = "hello" / 2; // Output: NaN
`);
const [UsingisNaN] = useState(`isNaN("hello"); // Output: true
`);
const [UsingNumber] = useState(`Number.isNaN("hello"); // Output: false
Number.isNaN(NaN);     // Output: true
`);
const [ToString] = useState(`"Hello" + 5; // Output: "Hello5"
`);
const [ToNumber] = useState(`"5" * 2; // Output: 10
true + 1; // Output: 2
`);
const [ToBoolean] = useState(`if ("") console.log("Empty"); // Not executed
if ("text") console.log("Non-empty"); // Executed
`);
const [NumberCode] = useState(`typeof 42; // "number"
typeof NaN; // "number"
`);
const [StringCode] = useState(`typeof "hello"; // "string"
`);
const [BooleanCode] = useState(`typeof true; // "boolean"
`);
const [ondefinedCode] = useState(`typeof undefined; // "undefined"
`);
const [BigIntCode] = useState(`typeof BigInt(10); // "bigint"
`);
const [SymbolCode] = useState(`typeof Symbol("id"); // "symbol"
`);
const [NullCode] = useState(`typeof null; // "object" (a known bug in JavaScript)
`);
const [ObjectCode] = useState(`typeof {}; // "object"
typeof []; // "object" (arrays are objects)
`);
const [FunctionCode] = useState(`typeof function() {}; // "function"
`);
const [unrepresentablenumber] = useState(`const result = "text" / 2; // Output: NaN
`);
const [Checksstrictly] = useState(`Number.isNaN(NaN);     // true
Number.isNaN("text");  // false
`);
const [Convertsvalue] = useState(`isNaN("text"); // true (because "text" is not a valid number)
isNaN(NaN);    // true
`);
const [Attachevent] = useState(`document.getElementById("parent").addEventListener("click", function(event) {
  if (event.target.tagName === "BUTTON") {
    console.log("Button clicked:", event.target.textContent);
  }
});
`);
const [Functionparameter] = useState(`function functionName(parameter = defaultValue) {
  // function body
}
`);
const [Exampleparameter] = useState(`function greet(name = "Guest") {
  return \`Hello, \${name}!\`;
}

console.log(greet("Johny")); // Output: Hello, Johny!
console.log(greet());        // Output: Hello, Guest!
`);
const [Parameterundefined] = useState(`function example(a = 10) {
  console.log(a);
}

example();            // Output: 10 (default is used)
example(undefined);   // Output: 10 (default is used)
example(null);        // Output: null (default is NOT used, as null is a valid argument)
`);
const [Expressionsvalues] = useState(`function calculatePrice(price, tax = price * 0.1) {
  return price + tax;
}

console.log(calculatePrice(100)); // Output: 110 (tax is 10% of 100)
console.log(calculatePrice(100, 20)); // Output: 120 (explicit tax is provided)
`);
const [Orderparametes] = useState(`function sayMessage(message, name = "friend") {
  return \`\${message}, \${name}\`;
}

console.log(sayMessage("Hi"));          // Output: Hi, friend
console.log(sayMessage("Hi", "Johny")); // Output: Hi, Johny
`);
const [BlockingExample] = useState(`console.log("Start");

function fetchData() {
  for (let i = 0; i < 1e9; i++) {} // Simulate a time-consuming task
  return "Data fetched";
}

const data = fetchData();
console.log(data);

console.log("End");
`);
const [OutputExample] = useState(`Start
Data fetched
End
`);
const [TypicallyExample] = useState(`console.log("Start");

function fetchDataAsync() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Data fetched");
    }, 2000); // Simulates a 2-second delay
  });
}

fetchDataAsync().then((data) => console.log(data));

console.log("End");
`);
const [IdealOutputExample] = useState(`Start
End
Data fetched
`);
const [setTimeoutfunction] = useState(`setTimeout(callback, delay, ...args);
`);
  const [pauseexeXAMPLE] = useState(`console.log("Start");

setTimeout(() => {
  console.log("Hello, Johny!");
}, 2000); // Executes after 2 seconds

console.log("End");
`);
    const [delayeXAMPLE] = useState(`Start
End
Hello, Johny!
`);
const [PurposofJSON] = useState(`const obj = { name: "Johny", age: 25 };
const jsonString = JSON.stringify(obj);
console.log(jsonString); // Output: '{"name":"Johny","age":25}'
`);
const [JSONparsee] = useState(`const jsonString = '{"name":"Johny","age":25}';
const obj = JSON.parse(jsonString);
console.log(obj.name); // Output: Johny
`);
const [PassaFunction] = useState(`setTimeout(() => {
  console.log("Task completed!");
}, 1000); // Callback runs after 1 second
`);
  const [PromiseRepresents] = useState(`fetch("https://api.example.com")
  .then((response) => response.json()) // Handle success
  .then((data) => console.log(data))
  .catch((error) => console.error(error)); // Handle errors
`);
    const [AsyncFunction] = useState(`async function fetchData() {
  try {
    const response = await fetch("https://api.example.com");
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

fetchData();
`);
const [Synchronouscode] = useState(`console.log("Start");

setTimeout(() => console.log("Timeout"), 0);

Promise.resolve().then(() => console.log("Promise"));

console.log("End");
`);

const [SynchronousOutcode] = useState(`Start
End
Promise
Timeout
`);



     
  return { Comparesvalues, Comparesboth, TypeCoercion, Scopedetermines, Variablesdeclared, insideblock, compilationphase, StringInterpolation, Multiline, Expressions, Passingfunction, Returningfunction, ImmediatelyInvoked, Avoidspolluting, ClosuresJavaScrip, GlobalContext, ObjectMethod, ArrowFunctions, EventHandlers, ExplicitBinding, ObjectLiteral, Simplestmethod, ConstructorFunction, Inheritfrom, ClassSyntax, nullcode, definedCode, Objectassign, SpreadOperator, JSONparse, CustomDeep,  apCode, bCode, InheritanceWorks, Commonarray, ForEachArrays, originalArrays, filterMethod, Accumulator,InitialValue, ValueCallback, Findlength, Reversestring, StringInterpolationn, MultilineStrings, ExpressionEvaluation, UsingSet, Usingfilter, StringConversion, NumberConversion, BooleanConversion, UsingisNaN, UsingNumber, NaNvalue, ToString, ToNumber, ToBoolean, NumberCode, StringCode, BooleanCode, ondefinedCode, BigIntCode, SymbolCode, NullCode, ObjectCode, FunctionCode, Checksstrictly, Convertsvalue, unrepresentablenumber, Attachevent, Functionparameter, Exampleparameter, Parameterundefined, Expressionsvalues, Orderparametes, BlockingExample, OutputExample, TypicallyExample, IdealOutputExample, setTimeoutfunction, pauseexeXAMPLE, delayeXAMPLE, PurposofJSON, JSONparsee, PassaFunction, PromiseRepresents, AsyncFunction, Synchronouscode, SynchronousOutcode
    

  };


}

export default CodeExamples;
