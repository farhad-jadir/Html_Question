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
const [AccessElements] = useState(`document.getElementById("id");
document.querySelector(".class");
document.querySelectorAll("tag");
`);
const [ModifyContent] = useState(`const element = document.getElementById("myElement");
element.textContent = "New Text"; // Change text
element.setAttribute("class", "new-class"); // Set attributes
`);
const [ChangeStyles] = useState(`element.style.color = "red";
element.style.backgroundColor = "blue";
`);
const [AddorRemoveElements] = useState(`const newElement = document.createElement("div");
newElement.textContent = "Hello!";
document.body.appendChild(newElement); // Add to DOM

newElement.remove(); // Remove from DOM
`);
const [HandleEvents] = useState(`const button = document.getElementById("myButton");
button.addEventListener("click", () => {
  alert("Button clicked!");
});
`);
const [getElementById] = useState(`const element = document.getElementById("myDiv");
`);
const [querySelector] = useState(`const element = document.querySelector(".myClass"); // Selects the first element with class "myClass"
`);
const [querySelectorAll] = useState(`const elements = document.querySelectorAll("div"); // Selects all <div> elements
elements.forEach((el) => console.log(el)); // Iterate through NodeList
`);
const [HTMLCode] = useState(`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Change Div Color</title>
  <style>
    #colorDiv {
      width: 200px;
      height: 200px;
      background-color: lightblue;
      margin: 20px auto;
    }
    button {
      display: block;
      margin: 10px auto;
    }
  </style>
</head>
<body>
  <div id="colorDiv"></div>
  <button id="changeColorButton">Change Color</button>
  <script src="script.js"></script>
</body>
</html>
`);
const [JavaScriptCode] = useState(`// Select elements
const colorDiv = document.getElementById("colorDiv");
const button = document.querySelector("#changeColorButton");

// Add event listener to button
button.addEventListener("click", () => {
  // Change div color randomly
  const randomColor = \`#\${Math.floor(Math.random() * 16777215).toString(16)}\`;
  colorDiv.style.backgroundColor = randomColor;
});
`);
const [addEventListenerCode] = useState(`element.addEventListener(event, callback, options);
`);
const [ExampleClickEvent] = useState(`// Select a button element
const button = document.querySelector("#myButton");

// Add a click event listener
button.addEventListener("click", () => {
  console.log("Button clicked!");
});
`);
const [MultipleListeners] = useState(`button.addEventListener("click", () => console.log("First listener"));
button.addEventListener("click", () => console.log("Second listener"));
`);
const [SupportsEventOptions] = useState(`button.addEventListener("click", () => console.log("Clicked!"), { once: true });
`);
const [EventDelegation] = useState(`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Event Delegation</title>
</head>
<body>
  <ul id="itemList">
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
  </ul>

  <script src="script.js"></script>
</body>
</html>
`);
const [JavaScriptDelegation] = useState(`// Select the parent element
const list = document.getElementById("itemList");

// Use event delegation
list.addEventListener("click", (event) => {
  if (event.target.tagName === "LI") { // Check if the clicked element is a list item
    console.log(\`You clicked: \${event.target.textContent}\`);
  }
});
`);
const [ExampleDynamicAddition] = useState(`const newItem = document.createElement("li");
newItem.textContent = "Item 4";
list.appendChild(newItem); // No extra event listener needed!
`);
const [innerHTM] = useState(`const div = document.getElementById("myDiv");
div.innerHTML = "<strong>Hello</strong>";
console.log(div.innerHTML); // "<strong>Hello</strong>"
`);
const [textContent] = useState(`const div = document.getElementById("myDiv");
div.textContent = "<strong>Hello</strong>";
console.log(div.textContent); // "<strong>Hello</strong>"
`);
const [innerTexts] = useState(`const div = document.getElementById("myDiv");
div.innerText = "<strong>Hello</strong>";
console.log(div.innerText); // "<strong>Hello</strong>"
`);
const [UsingstyleProperty] = useState(`const element = document.getElementById("myDiv");
element.style.color = "red"; // Sets the text color to red
element.style.backgroundColor = "yellow"; // Sets the background color to yellow
`);
const [UsingclassList] = useState(`const element = document.getElementById("myDiv");
element.classList.add("highlight"); // Adds the 'highlight' class
element.classList.remove("highlight"); // Removes the 'highlight' class
element.classList.toggle("highlight"); // Toggles the 'highlight' class
`);
const [CSSExample] = useState(`.highlight {
  color: blue;
  background-color: lightgray;
}
`);
const [UsingsetAttribute] = useState(`const element = document.getElementById("myDiv");
element.setAttribute("style", "color: green; font-size: 20px;");
`);
const [parentNode] = useState(`const child = document.getElementById("child");
console.log(child.parentNode); // Logs the parent element
`);
const [firstChild] = useState(`const parent = document.getElementById("parent");
console.log(parent.firstChild); // Logs the first child node
`);
const [lastChild] = useState(`const parent = document.getElementById("parent");
console.log(parent.lastChild); // Logs the last child node
`);
const [nextSibling] = useState(`const current = document.getElementById("current");
console.log(current.nextSibling); // Logs the next sibling node
`);
const [previousSibling] = useState(`const current = document.getElementById("current");
console.log(current.previousSibling); // Logs the previous sibling node
`);
const [children] = useState(`const parent = document.getElementById("parent");
console.log(parent.children); // Logs all child elements
`);
const [firstElementChild] = useState(`const parent = document.getElementById("parent");
console.log(parent.firstElementChild); // Logs the first child element
console.log(parent.lastElementChild);  // Logs the last child element
`);
const [nextElementSibling] = useState(`const current = document.getElementById("current");
console.log(current.nextElementSibling); // Logs the next sibling element
console.log(current.previousElementSibling); // Logs the previous sibling element
`);
const [ExampleSibling] = useState(`<div id="parent">
  <p id="child1">First child</p>
  <p id="child2">Second child</p>
</div>
`);
const [JavaScriptSibling] = useState(`const parent = document.getElementById("parent");
console.log(parent.firstElementChild); // Logs <p id="child1">First child</p>
console.log(parent.lastElementChild);  // Logs <p id="child2">Second child</p>
`);
const [preventDefault] = useState(`const form = document.querySelector("form");
form.addEventListener("submit", (event) => {
  event.preventDefault(); // Prevents form submission
  console.log("Form submission prevented!");
});
`);
const [stopPropagation] = useState(`const child = document.getElementById("child");
child.addEventListener("click", (event) => {
  event.stopPropagation(); // Stops the event from bubbling
  console.log("Child clicked!");
});
`);
const [PreventsSubmission] = useState(`<form id="myForm">
  <label for="name">Name:</label>
  <input type="text" id="name" name="name">
  <button type="submit">Submit</button>
</form>
`);
const [JavaScriptSubmission] = useState(`const form = document.getElementById("myForm");

form.addEventListener("submit", (event) => {
  event.preventDefault(); // Prevent form submission
  console.log("Form submission prevented!");
});
`);
const [StoreandRetrieve] = useState(`// Save user's theme preference in localStorage
function saveThemePreference(theme) {
    localStorage.setItem("theme", theme);
}

// Retrieve and apply user's theme preference
function applyThemePreference() {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
        document.body.className = savedTheme; // Assuming themes are set as class names (e.g., 'dark', 'light')
    }
}

// Example usage
saveThemePreference("dark"); // Saves 'dark' theme
applyThemePreference(); // Applies the saved theme when the page loads
`);
const [windowopen] = useState(`window.open(URL, name, specs);
`);
const [newwindow] = useState(`window.open("https://example.com", "_blank", "width=800,height=600");
`);
const [windowinnerWidth] = useState(`// Function to log the viewport width and height
function logWindowSize() {
    const width = window.innerWidth;
    const height = window.innerHeight;
    console.log(\`Viewport size: \${width}px x \${height}px\`);
}

// Add an event listener to the 'resize' event
window.addEventListener("resize", logWindowSize);

// Initial log of the window size when the script runs
logWindowSize();
`);
const [OutputtExample] = useState(`Viewport size: 1024px x 768px
Viewport size: 800px x 600px
`);
const [setTimeoutCode] = useState(`setTimeout(function, delay);
`);
  const [setIntervalCode] = useState(`setTimeout(() => console.log("This runs after 2 seconds"), 2000);
`);
    const [setIntervaltCode] = useState(`setInterval(function, interval);
`);
      const [setIntervalttCode] = useState(`setInterval(() => console.log("This runs every 1 second"), 1000);
`);
        const [singsetInterval] = useState(`function startClock() {
    const clockElement = document.getElementById("clock");

    function updateClock() {
        const now = new Date();
        const timeString = now.toLocaleTimeString(); // Formats time as HH:MM:SS
        clockElement.textContent = timeString;
    }

    setInterval(updateClock, 1000); // Update clock every second
}

// HTML element for the clock
document.body.innerHTML = '<div id="clock" style="font-size: 2rem; font-family: Arial;"></div>';
startClock();
`);
const [navigatoronLine] = useState(`console.log(navigator.onLine ? "User is online" : "User is offline");
`);
const [OnlineandOfflineEvent] = useState(`window.addEventListener("online", () => console.log("User is back online"));
window.addEventListener("offline", () => console.log("User went offline"));
`);
const [OnlineOfflineStatus] = useState(`function updateConnectionStatus() {
    const status = navigator.onLine ? "Online" : "Offline";
    console.log(\`User is currently: \${status}\`);
}

// Check initial status
updateConnectionStatus();

// Listen for connection changes
window.addEventListener("online", updateConnectionStatus);
window.addEventListener("offline", updateConnectionStatus);
`);
const [fetcheddata] = useState(`// Fetch data from JSONPlaceholder and display on page
fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => response.json()) // Convert response to JSON
  .then(data => {
    const container = document.getElementById('data-container');
    data.forEach(post => {
      const postElement = document.createElement('div');
      postElement.innerHTML = \`<h3>\${post.title}</h3><p>\${post.body}</p>\`;
      container.appendChild(postElement);
    });
  })
  .catch(error => console.error('Error fetching data:', error));
`);
const [automaticallyhandles] = useState(`const xhr = new XMLHttpRequest();
xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts');
xhr.onload = () => console.log(xhr.responseText);
xhr.send();
`);
const [Fetchautomatically] = useState(`fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => response.json())
  .then(data => console.log(data));
`);
const [StringifyJSON] = useState(`// JSON string
const jsonString = '{"name": "Johny", "age": 25}';

// Parse JSON into JavaScript object
const user = JSON.parse(jsonString);
console.log(user.name); // Output: Johny

// Stringify JavaScript object into JSON
const jsonData = JSON.stringify({ city: "Dhaka", country: "Bangladesh" });
console.log(jsonData); // Output: {"city":"Dhaka","country":"Bangladesh"}
`);
const [ParseStringify] = useState(`function convertObject(obj) {
  // Convert object to JSON string
  const jsonString = JSON.stringify(obj);
  console.log("JSON String:", jsonString);

  // Convert JSON string back to object
  const parsedObject = JSON.parse(jsonString);
  console.log("Parsed Object:", parsedObject);

  return parsedObject;
}

// Test the function
const myObject = { name: "Johny", age: 25, country: "Bangladesh" };
convertObject(myObject);
`);
const [AccessControl] = useState(`Access-Control-Allow-Origin: *
`);
const [FormDataObject] = useState(`// Get form data
const form = document.querySelector('form');
const formData = new FormData(form);

// Add custom data
formData.append('customField', 'customValue');

// Send via Fetch API
fetch('https://example.com/api', {
  method: 'POST',
  body: formData,
})
  .then(response => response.json())
  .then(data => console.log('Success:', data))
  .catch(error => console.error('Error:', error));
`);
const [SinglePageNavigationt] = useState(`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>SPA Navigation</title>
</head>
<body>
  <nav>
    <a href="/home" data-link>Home</a>
    <a href="/about" data-link>About</a>
    <a href="/contact" data-link>Contact</a>
  </nav>
  <div id="content"></div>

  <script>
    const routes = {
      '/home': '<h1>Welcome to Home</h1>',
      '/about': '<h1>About Us</h1>',
      '/contact': '<h1>Contact Us</h1>',
    };

    function navigateTo(url) {
      history.pushState(null, null, url);
      renderContent(url);
    }

    function renderContent(url) {
      const content = document.getElementById('content');
      content.innerHTML = routes[url] || '<h1>404 - Page Not Found</h1>';
    }

    document.addEventListener('click', (e) => {
      if (e.target.matches('[data-link]')) {
        e.preventDefault();
        navigateTo(e.target.href);
      }
    });

    // Handle browser back/forward
    window.addEventListener('popstate', () => {
      renderContent(location.pathname);
    });

    // Initial render
    renderContent(location.pathname);
  </script>
</body>
</html>
`);
const [catchwithasync] = useState(`async function fetchData() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    if (!response.ok) throw new Error(\`HTTP error! Status: \${response.status}\`);
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error('Error:', error.message);
  }
}
fetchData();
`);
  const [catchwithPromises] = useState(`fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => {
    if (!response.ok) throw new Error(\`HTTP error! Status: \${response.status}\`);
    return response.json();
  })
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error.message));
`);
const [WebSockets] = useState(`fetch('const socket = new WebSocket('wss://example.com/socket');

// Listen for messages
socket.onmessage = (event) => {
  console.log('Message from server:', event.data);
};

// Send a message
socket.send('Hello, Server!');
`);
const [communication] = useState(`fetch('https://example.com/api')
  .then(response => response.json())
  .then(data => console.log(data));
`);
const [BackgroundSync] = useState(`// Register the service worker
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/service-worker.js')
    .then(() => console.log('Service Worker Registered'))
    .catch(error => console.error('Registration failed:', error));
}

// service-worker.js
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open('v1').then((cache) => {
      return cache.addAll([
        '/',
        '/index.html',
        '/styles.css',
        '/script.js',
        '/offline.html',
      ]);
    })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request).catch(() => caches.match('/offline.html'));
    })
  );
});
`);
                              





     
  return { ArrowFunctions, Regularfunctions, SyntaxSimplicity, NoargumentsObject, ArraysCode, ObjectsCode, PropertiesIndividually, varCode, letCode, constCode, CopyinganArray, MergingArrays, CopyinganObject, MergingObjects, MergeTwoArrays, StringInterpolation, MultiLineStrings, BeforeES6, HandleMissingArguments, ReduceBoilerplateCode, SimplifyOptionalParameters, DictionarywithMap, forofExample, forinExample, UsingforofwithString, KeyDifference, ExampleUsagePromises,  ProjectPromises, ExampleUsage, Withoutasync, Withasync, AccessElements, ModifyContent, ChangeStyles, AddorRemoveElements, HandleEvents, getElementById, querySelector, querySelectorAll, HTMLCode, JavaScriptCode, addEventListenerCode, ExampleClickEvent, MultipleListeners, SupportsEventOptions, EventDelegation, JavaScriptDelegation, ExampleDynamicAddition, innerHTM, textContent, innerTexts, UsingstyleProperty, UsingclassList, CSSExample, UsingsetAttribute, parentNode, firstChild, lastChild, nextSibling, previousSibling, children, firstElementChild, nextElementSibling, ExampleSibling, JavaScriptSibling, preventDefault, stopPropagation, PreventsSubmission, JavaScriptSubmission, StoreandRetrieve, windowopen, newwindow, windowinnerWidth, OutputtExample, setTimeoutCode, setIntervalCode, setIntervaltCode, setIntervalttCode, singsetInterval, navigatoronLine, OnlineandOfflineEvent, OnlineOfflineStatus, fetcheddata, automaticallyhandles, Fetchautomatically, StringifyJSON, ParseStringify, AccessControl, FormDataObject, SinglePageNavigationt, catchwithasync, catchwithPromises, WebSockets, communication, BackgroundSync
    

  };


}

export default CodeExamples;
