import React from "react";
import clsx from "clsx";
import { baseParagraphClasses } from "../utils/ClassNames";
import CodeHighlighter from "../documentation/CodeHighlighter";
import JsCoding from "./JsCoding";

function Paragraph({ children, type = "question", additionalClasses = "" }) {
  const paragraphClass = clsx(baseParagraphClasses[type], additionalClasses);
  return <p className={paragraphClass}>{children}</p>;
}

function Miscellaneous() {
  const {Attachevent, Functionparameter, Exampleparameter, Parameterundefined, Expressionsvalues, Orderparametes, BlockingExample, OutputExample, TypicallyExample, IdealOutputExample, setTimeoutfunction, pauseexeXAMPLE, delayeXAMPLE, PurposofJSON, JSONparsee, PassaFunction, PromiseRepresents, AsyncFunction, Synchronouscode, SynchronousOutcode } = JsCoding();
  return (
    <div className="bg-[#101C28] p-2">

        <Paragraph type="heading">Step 6: Miscellaneous  </Paragraph> <br />

        {/* {/* Question 31. */}

        <Paragraph>31. What is event delegation, and how does it work? </Paragraph>
        <Paragraph type="answer">
                Event delegation is a technique in JavaScript where a single event listener is attached to a parent element to handle events for its child elements. It works by taking advantage of event bubbling, where an event on a child element propagates up to its ancestors.
                <Paragraph type="para">How it works:</Paragraph>
                <ul className="px-4 list-disc list-inside">
                  <li>Attach an event listener to a parent element.</li>
                  <li>Use the event.target property to determine which child triggered the event.</li>
                  <li>Execute the desired logic based on the child element.</li>
                </ul>
                Example:
                <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                  <CodeHighlighter code={Attachevent} language="javascript" />
                </div>
                <Paragraph type="para">Benefits:</Paragraph>
                <ul className="px-4 list-disc list-inside">
                  <li>Reduces the number of event listeners.</li>
                  <li>Dynamically handles child elements added later.</li>
                </ul>
                Event delegation is efficient for managing many child elements!
        </Paragraph> <br />

        {/* {/* Question 32. */}

        <Paragraph>32. What are default parameters in JavaScript? </Paragraph>
        <Paragraph type="answer">
                In JavaScript, default parameters allow you to set a default value for a function parameter if no argument or undefined is passed for that parameter when the function is called. This helps avoid errors and makes the function more flexible.
                <Paragraph type="para">Syntax:</Paragraph>
                <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                  <CodeHighlighter code={Functionparameter} language="javascript" />
                </div>
                <Paragraph type="para">Example:</Paragraph>
                <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                  <CodeHighlighter code={Exampleparameter} language="javascript" />
                </div>
                <Paragraph type="para">Key Points:</Paragraph>
                <ol className="px-4 list-decimal list-inside">
                  <li>Default value is used only if the parameter is undefined:</li>
                  <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                    <CodeHighlighter code={Parameterundefined} language="javascript" />
                  </div>
                  <li>Expressions as default values: Default values can be based on expressions, including other parameters or functions.</li>
                  <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                    <CodeHighlighter code={Expressionsvalues} language="javascript" />
                  </div>
                  <li>Order of parametes: If a parameter with a default value comes after a parameter without a default value, the function will work as expected.</li>
                  <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                    <CodeHighlighter code={Orderparametes} language="javascript" />
                  </div>
                </ol>
                Using default parameters improves code readability and reduces the need for manual checks for undefined values.
        </Paragraph> <br />

         {/* {/* Question 33. */}

         <Paragraph>33. What is the difference between synchronous and asynchronous programming?</Paragraph>
        <Paragraph type="answer">
                The difference between synchronous and asynchronous programming lies in how tasks are executed and handled, especially when dealing with multiple operations, such as I/O, file handling, or network requests.
                <Paragraph type="para">Synchronous Programming:</Paragraph>
                In synchronous programming, tasks are executed one at a time, sequentially. A task must complete before the next one starts. This blocking behavior can make the application less efficient when dealing with long-running tasks.
                <Paragraph type="para">Key Characteristics:</Paragraph>
                <ul className="px-4 list-disc list-inside">
                  <li>Tasks are executed in order.</li>
                  <li>Blocking: If a task takes time (e.g., reading a file or making a network request), the program stops and waits for it to finish.</li>
                  <li>Easier to understand and debug because of its linear flow.</li>
                </ul>
                <Paragraph type="para">Example:</Paragraph>
                  <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                    <CodeHighlighter code={BlockingExample} language="javascript" />
                  </div>
                <Paragraph type="para">Output:</Paragraph>
                  <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                    <CodeHighlighter code={OutputExample} language="sql" />
                  </div>
                  In this example, the program waits for the fetchData function to complete before moving to the next line.
                  <Paragraph type="para">Asynchronous Programming:</Paragraph>
                  In asynchronous programming, tasks can be initiated and processed in parallel without waiting for others to complete. Instead of blocking, the program can continue executing other code while waiting for the results of the asynchronous tasks.
                  <Paragraph type="para">Key Characteristics:</Paragraph>
                  <ul className="px-4 list-disc list-inside">
                    <li>Tasks don't block the main thread.</li>
                    <li>Typically uses callbacks, promises, or async/await to handle results.</li>
                    <li>Ideal for I/O operations, database queries, or network requests.</li>
                  </ul>
                <Paragraph type="para">Example:</Paragraph>
                  <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                    <CodeHighlighter code={TypicallyExample} language="javascript" />
                  </div>
                <Paragraph type="para">Output:</Paragraph>
                  <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                    <CodeHighlighter code={IdealOutputExample} language="javascript" />
                  </div>
                  Here, the program doesn't wait for fetchDataAsync to complete. It moves on to the next task (console.log("End")) while waiting for the promise to resolve asynchronously.
        </Paragraph> <br />

        {/* {/* Question 34. */}

        <Paragraph>34. How does the setTimeout function work, and what is its use?</Paragraph>
        <Paragraph type="answer">
                The setTimeout function in JavaScript schedules a task (callback function) to run after a specified delay (in milliseconds) without blocking the main thread.
                <Paragraph type="para">Example:</Paragraph>
                  <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                    <CodeHighlighter code={setTimeoutfunction} language="javascript" />
                  </div>
                  <ul className="px-4 list-disc list-inside">
                    <li>callback: The function to execute after the delay.</li>
                    <li>delay: Time in milliseconds (1 second = 1000 milliseconds).</li>
                    <li>...args: Optional arguments to pass to the callback.</li>
                  </ul>
                  <Paragraph type="para">How It Works:</Paragraph>
                  <ul className="px-4 list-disc list-inside">
                    <li>The setTimeout function adds the callback to a queue after the specified delay.</li>
                    <li>It does not pause execution; the rest of the code continues to run.</li>
                    <li>After the delay, the callback is executed asynchronously via the event loop.</li>
                  </ul>
                  <Paragraph type="para">Example:</Paragraph>
                  <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                    <CodeHighlighter code={pauseexeXAMPLE} language="javascript" />
                  </div>
                  <Paragraph type="para">Output:</Paragraph>
                  <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                    <CodeHighlighter code={delayeXAMPLE} language="javascript" />
                  </div>
                  <Paragraph type="para">Use Cases:</Paragraph>
                  <ul className="px-4 list-disc list-inside">
                    <li>Delaying code execution (e.g., animations, notifications).</li>
                    <li>Simulating time-consuming tasks in testing.</li>
                    <li>Creating timed intervals or scheduling tasks.</li>
                  </ul>
        </Paragraph> <br />

        {/* {/* Question 35. */}

        <Paragraph>35. What is the purpose of JSON.stringify() and JSON.parse()?</Paragraph>
        <Paragraph type="answer">
                  <Paragraph type="para">Purpose of JSON.stringify():</Paragraph>
                  JSON.stringify() converts a JavaScript object or value into a JSON string. It's commonly used to send data to a server or save it in a text-based format like local storage. Example:
                  <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                    <CodeHighlighter code={PurposofJSON} language="javascript" />
                  </div>
                  <Paragraph type="para">Purpose of JSON.parse():</Paragraph>
                  JSON.parse() converts a JSON string back into a JavaScript object. It's used to retrieve and work with data received from servers or stored as JSON. Example:
                  <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                    <CodeHighlighter code={JSONparsee} language="javascript" />
                  </div>
                  <Paragraph type="para">Use Cases:</Paragraph>
                  <ul className="px-4 list-disc list-inside">
                    <li>JSON.stringify(): For preparing data to send via HTTP requests or storing in files/databases.</li>
                    <li>JSON.parse(): For reading and processing JSON data received from servers or files.</li>
                  </ul>
        </Paragraph> <br />

        {/* {/* Question 36. */}

        <Paragraph>36. How can you handle asynchronous code in JavaScript?</Paragraph>
        <Paragraph type="answer">
                In JavaScript, asynchronous code can be handled using the following methods:
                <Paragraph type="para">1. Callbacks:</Paragraph>
                Pass a function (callback) to be executed once the asynchronous task completes.
                  <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                    <CodeHighlighter code={PassaFunction} language="javascript" />
                  </div>
                <Paragraph type="para">2. Promises:</Paragraph>
                A Promise represents a value that will be available in the future. Use .then() and .catch() for handling success and errors.
                  <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                    <CodeHighlighter code={PromiseRepresents} language="javascript" />
                  </div>
                <Paragraph type="para">3. Async/Await:</Paragraph>
                Simplifies promise handling by allowing asynchronous code to look like synchronous code. Use await to pause execution until a promise resolves.
                  <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                    <CodeHighlighter code={AsyncFunction} language="javascript" />
                  </div>
                  <Paragraph type="para">Summary:</Paragraph>
                  <ul className="px-4 list-disc list-inside">
                    <li>Use callbacks for simple tasks but avoid "callback hell."</li>
                    <li>Use promises for better readability and chaining.</li>
                    <li>Use async/await for cleaner and more synchronous-like code handling.</li>
                  </ul>
                  
        </Paragraph> <br />

         {/* {/* Question 37. */}

         <Paragraph>37. Explain the concept of the Event Loop in JavaScript.</Paragraph>
        <Paragraph type="answer">
                The Event Loop in JavaScript is a mechanism that allows asynchronous operations to be executed without blocking the main thread, enabling non-blocking behavior in a single-threaded environment.
                <Paragraph type="para">How It Works:</Paragraph>
                  <ul className="px-4 list-disc list-inside">
                    <li>Call Stack: Executes synchronous code, line by line.</li>
                    <li>Web APIs/Task Queue: Asynchronous tasks (e.g., setTimeout, HTTP requests) are delegated to Web APIs and sent to the Task Queue after completion.</li>
                    <li>Event Loop: Continuously checks the Call Stack for available space and pushes tasks from the Task Queue (or Microtask Queue, e.g., Promises) into the Call Stack for execution.</li>
                  </ul>
                  <Paragraph type="para">Order of Execution:</Paragraph>
                  <ul className="px-4 list-disc list-inside">
                    <li>Synchronous code is executed first.</li>
                    <li>Microtasks (e.g., Promise.then()) are prioritized over macrotasks (e.g., setTimeout).</li>
                  </ul>
                  <Paragraph type="para">Example:</Paragraph>
                  <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                    <CodeHighlighter code={Synchronouscode} language="javascript" />
                  </div>
                  <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                    <CodeHighlighter code={SynchronousOutcode} language="javascript" />
                  </div>
                  Here, the Event Loop ensures synchronous code runs first, followed by the microtask (Promise), then the macrotask (setTimeout).
        </Paragraph>
        
      



    </div>
  );
}

export default Miscellaneous;


