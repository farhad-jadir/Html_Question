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





    
  return { Comparesvalues, Comparesboth, TypeCoercion, Scopedetermines, Variablesdeclared, insideblock, compilationphase, StringInterpolation, Multiline, Expressions, Passingfunction, Returningfunction, ImmediatelyInvoked, Avoidspolluting
    

  };


}

export default CodeExamples;
