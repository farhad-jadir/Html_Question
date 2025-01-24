import React, { useState } from "react";

function CodeExamples() {
  const [ArrowFunctions] = useState(`const arrowFunction = (param1, param2) => {
  // Function body
  return param1 + param2;
};
`);
const [Regularfunctions] = useState(`const obj = {
  value: 42,
  regularFunc: function() {
    return this.value; // 'this' refers to 'obj'
  },
  arrowFunc: () => {
    return this.value; // 'this' refers to the outer scope (not 'obj')
  }
};

console.log(obj.regularFunc()); // Output: 42
console.log(obj.arrowFunc());   // Output: undefined
`);
const [SyntaxSimplicity] = useState(`const add = (a, b) => a + b;
console.log(add(2, 3)); // Output: 5
`);
const [NoargumentsObject] = useState(`const regular = function() {
  console.log(arguments); // Outputs arguments
};

const arrow = (...args) => {
  console.log(args); // Outputs arguments as an array
};
`);
const [ArraysCode] = useState(`const [a, b] = [1, 2];
console.log(a); // 1
console.log(b); // 2
`);
const [ObjectsCode] = useState(`const { name, age } = { name: 'Johny', age: 25 };
console.log(name); // 'Johny'
console.log(age);  // 25
`);
const [PropertiesIndividually] = useState(`function logObjectProperties(obj) {
  const { name, age, country } = obj; // Destructure object properties
  console.log(\`Name: \${name}\`);
  console.log(\`Age: \${age}\`);
  console.log(\`Country: \${country}\`);
}

// Example usage
const person = { name: 'Johny', age: 22, country: 'Bangladesh' };
logObjectProperties(person);
`);
const [varCode] = useState(`if (true) {
  var x = 10;
}
console.log(x); // 10 (accessible outside block)
`);
  const [letCode] = useState(`if (true) {
  let x = 10;
}
console.log(x); // ReferenceError (not accessible outside block)
`);
    const [constCode] = useState(`const x = 10;
x = 20; // TypeError (reassignment not allowed)

const arr = [1, 2, 3];
arr.push(4); // Allowed
console.log(arr); // [1, 2, 3, 4]
`);
const [CopyinganArray] = useState(`const arr1 = [1, 2, 3];
const copy = [...arr1];
console.log(copy); // [1, 2, 3]
`);
const [MergingArrays] = useState(`const arr1 = [1, 2];
const arr2 = [3, 4];
const merged = [...arr1, ...arr2];
console.log(merged); // [1, 2, 3, 4]
`);
const [CopyinganObject] = useState(`const obj = { a: 1, b: 2 };
const copy = { ...obj };
console.log(copy); // { a: 1, b: 2 }
`);
const [MergingObjects] = useState(`const obj1 = { a: 1 };
const obj2 = { b: 2 };
const merged = { ...obj1, ...obj2 };
console.log(merged); // { a: 1, b: 2 }
`);
const [MergeTwoArrays] = useState(`function mergeArrays(array1, array2) {
  return [...array1, ...array2];
}

// Example usage
const arr1 = [1, 2];
const arr2 = [3, 4];
const mergedArray = mergeArrays(arr1, arr2);
console.log(mergedArray); // Output: [1, 2, 3, 4]
`);
const [StringInterpolation] = useState(`const name = "Johny";
const age = 22;
const greeting = \`Hello, my name is \${name} and I am \${age} years old.\`;
console.log(greeting);
// Output: Hello, my name is Johny and I am 22 years old.
`);
  const [MultiLineStrings] = useState(`const multiline = \`This is a 
multi-line string in ES6.\`;
console.log(multiline);
// Output:
// This is a 
// multi-line string in ES6.
`);
    const [BeforeES6] = useState(`const name = "Johny";
const age = 22;
const greeting = "Hello, my name is " + name + " and I am " + age + " years old.";
console.log(greeting);
// Output: Hello, my name is Johny and I am 22 years old.
`);
const [HandleMissingArguments] = useState(`function greet(name = "Guest") {
  return \`Hello, \${name}!\`;
}
console.log(greet()); // Output: Hello, Guest!
console.log(greet("Johny")); // Output: Hello, Johny!
`);
  const [ReduceBoilerplateCode] = useState(`// Before ES6
function greet(name) {
  name = name || "Guest";
  return \`Hello, \${name}!\`;
}

// ES6 with Default Parameters
function greet(name = "Guest") {
  return \`Hello, \${name}!\`;
}
`);
    const [SimplifyOptionalParameters] = useState(`function calculateArea(length, width = length) {
  return length * width; // Defaults to square if width is not provided
}
console.log(calculateArea(5)); // Output: 25
console.log(calculateArea(5, 10)); // Output: 50
`);
const [DictionarywithMap] = useState(`// Create a dictionary using Map
const dictionary = new Map();

// Add key-value pairs
dictionary.set("hello", "A greeting or expression of goodwill");
dictionary.set("world", "The earth, together with all its inhabitants");
dictionary.set("code", "A system of rules to convert information");

// Access values using keys
console.log(dictionary.get("hello")); // Output: A greeting or expression of goodwill
console.log(dictionary.get("code")); // Output: A system of rules to convert information

// Check if a key exists
console.log(dictionary.has("world")); // Output: true

// Iterate through the Map
dictionary.forEach((value, key) => {
  console.log(\`\${key}: \${value}\`);
});

// Delete a key-value pair
dictionary.delete("hello");
console.log(dictionary.has("hello")); // Output: false
`);
const [forofExample] = useState(`const array = [10, 20, 30];
for (const value of array) {
  console.log(value); // Output: 10, 20, 30
}
`);
const [forinExample] = useState(`const obj = { a: 1, b: 2, c: 3 };
for (const key in obj) {
  console.log(key); // Output: a, b, c
}
`);
const [UsingforofwithString] = useState(`const str = "Hello";
for (const char of str) {
  console.log(char); // Output: H, e, l, l, o
}
`);
const [KeyDifference] = useState(`const array = [10, 20, 30];

for (const index in array) {
  console.log(index); // Output: 0, 1, 2 (keys)
}

for (const value of array) {
  console.log(value); // Output: 10, 20, 30 (values)
}
`);
const [ExampleUsagePromises] = useState(`const fetchData = new Promise((resolve, reject) => {
  const success = true; // Simulate success or failure
  if (success) {
    resolve("Data fetched successfully!");
  } else {
    reject("Failed to fetch data.");
  }
});

fetchData
  .then((message) => {
    console.log(message); // Output: Data fetched successfully!
  })
  .catch((error) => {
    console.error(error); // Output: Failed to fetch data.
  });
`);
  const [ ProjectPromises] = useState(`function delayedMessage() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("This message is shown after 2 seconds!");
    }, 2000);
  });
}

// Using the promise
delayedMessage()
  .then((message) => {
    console.log(message); // Output: This message is shown after 2 seconds!
  })
  .catch((error) => {
    console.error(error); // Handles any error, though none occurs here
  });
`);
const [ExampleUsage] = useState(`// Simulate a promise
function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Data fetched successfully!");
    }, 2000);
  });
}

// Using async/await
async function fetchAsyncData() {
  try {
    const result = await fetchData(); // Waits for the Promise to resolve
    console.log(result); // Output: Data fetched successfully!
  } catch (error) {
    console.error(error); // Handles any error
  }
}

fetchAsyncData();
`);
  const [Withoutasync] = useState(`fetchData()
  .then((result) => console.log(result))
  .catch((error) => console.error(error));
`);
    const [Withasync] = useState(`async function getData() {
  try {
    const result = await fetchData();
    console.log(result);
  } catch (error) {
    console.error(error);
  }
}
`);





     
  return { ArrowFunctions, Regularfunctions, SyntaxSimplicity, NoargumentsObject, ArraysCode, ObjectsCode, PropertiesIndividually, varCode, letCode, constCode, CopyinganArray, MergingArrays, CopyinganObject, MergingObjects, MergeTwoArrays, StringInterpolation, MultiLineStrings, BeforeES6, HandleMissingArguments, ReduceBoilerplateCode, SimplifyOptionalParameters, DictionarywithMap, forofExample, forinExample, UsingforofwithString, KeyDifference, ExampleUsagePromises,  ProjectPromises, ExampleUsage, Withoutasync, Withasync
    

  };


}

export default CodeExamples;
