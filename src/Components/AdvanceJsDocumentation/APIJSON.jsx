import React from "react";
import clsx from "clsx";
import { baseParagraphClasses } from "../utils/ClassNames";
import { tableClasses } from "../utils/TableStyles";  // Importing the reusable table classes
import CodeHighlighter from "../documentation/CodeHighlighter";
import AdvanceJsCoding from "./AdvanceJsCoding";

function Paragraph({ children, type = "question", additionalClasses = "" }) {
  const paragraphClass = clsx(baseParagraphClasses[type], additionalClasses);
  return <p className={paragraphClass}>{children}</p>;
}

function APIJSON () {
  const {fetcheddata, automaticallyhandles, Fetchautomatically, StringifyJSON, ParseStringify, AccessControl, FormDataObject, SinglePageNavigationt, catchwithasync, catchwithPromises, WebSockets, communication, BackgroundSync } = AdvanceJsCoding();
  return (
    <div className="bg-[#101C28] p-2">

        <Paragraph type="heading">Step 4: Web API & JSON</Paragraph> <br />

        {/* {/* Question 27*/}

        <Paragraph>27. What is the Fetch API, and how does it work with Promises?
                    <ul className="px-4 list-disc list-inside">
                      <li>Project: Fetch data from a public API (e.g., JSONPlaceholder) and display it on the page.</li>
                    </ul>
         </Paragraph>
        <Paragraph type="answer">
                The Fetch API is a modern JavaScript interface used to make HTTP requests to servers. It provides a simple way to fetch resources (e.g., APIs) and works with Promises, enabling asynchronous operations. When you use fetch(), it returns a Promise that resolves with a Response object. You can then process the data using .json() or other methods.
                <Paragraph type="para">Steps for the Project:</Paragraph>
                                <ul className="px-4 list-disc list-inside">
                                  <li>Use fetch() to get data from a public API (e.g., JSONPlaceholder).</li>
                                  <li>Convert the response to JSON using .json().</li>
                                  <li>Display the fetched data on the webpage.</li>
                                </ul>
                                <Paragraph type="para">Example Code:</Paragraph>
                                <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                                  <CodeHighlighter code={fetcheddata} language="javascript" />
                                </div>
                                In this example, the Promise chain handles the fetch process, error handling, and DOM manipulation to display the data.
        </Paragraph> <br />

        {/* {/* Question 28*/}

        <Paragraph>28. How does XMLHttpRequest differ from the Fetch API?  </Paragraph>
        <Paragraph type="answer">
                XMLHttpRequest (XHR) and the Fetch API are both used to make HTTP requests, but they differ in functionality and usage:
                                <Paragraph type="para">1. Syntax:</Paragraph>
                                <ul className="px-4 list-disc list-inside">
                                  <li>XHR has a more complex, callback-based syntax.</li>
                                  <li>Fetch uses Promises, offering cleaner and more readable code.</li>
                                </ul>
                                <Paragraph type="para">2. Response Handling:</Paragraph>
                                <ul className="px-4 list-disc list-inside">
                                  <li>XHR requires manual handling of events like onreadystatechange to track request status.</li>
                                  <li>Fetch automatically resolves/rejects the Promise and provides methods like .json() for parsing.</li>
                                </ul>
                                <Paragraph type="para">3. Features:</Paragraph>
                                <ul className="px-4 list-disc list-inside">
                                  <li>Fetch supports advanced features like streaming responses and better request customization.</li>
                                  <li>XHR does not support streaming and is more limited in modern capabilities.  </li>
                                </ul>
                                <Paragraph type="para">4. Error Handling:</Paragraph>
                                <ul className="px-4 list-disc list-inside">
                                  <li>XHR requires additional checks for HTTP status codes.</li>
                                  <li>Fetch automatically handles network errors but treats non-200 HTTP statuses as successful unless manually checked.</li>
                                </ul>
                                <Paragraph type="para">Example:</Paragraph>
                                XHR:
                                <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                                  <CodeHighlighter code={automaticallyhandles} language="javascript" />
                                </div>
                                Fetch:
                                <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                                  <CodeHighlighter code={Fetchautomatically} language="javascript" />
                                </div>
        </Paragraph> <br />

        {/* {/* Question 29*/}

        <Paragraph>29. Explain what JSON is and how it’s used in JavaScript.  </Paragraph>
        <Paragraph type="answer">
                JSON (JavaScript Object Notation) is a lightweight data format used to store and exchange data. It is text-based, easy to read, and structured as key-value pairs, similar to JavaScript objects.
                                <Paragraph type="para">Key Features:</Paragraph>
                                <ul className="px-4 list-disc list-inside">
                                  <li>Structure: JSON uses {} for objects and [] for arrays.</li>
                                  <li>Types Supported: Strings, numbers, booleans, arrays, objects, and null.</li>
                                </ul>
                                <Paragraph type="para">How JSON is Used in JavaScript:</Paragraph>
                                <ul className="px-4 list-disc list-inside">
                                  <li>Parse JSON: Convert JSON strings into JavaScript objects using JSON.parse().</li>
                                  <li>Stringify JSON: Convert JavaScript objects into JSON strings using JSON.stringify().</li>
                                </ul>
                                <Paragraph type="para">Example:</Paragraph>
                                <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                                  <CodeHighlighter code={StringifyJSON} language="javascript" />
                                </div>
                                JSON is widely used for APIs and data transfer between servers and web applications.
        </Paragraph> <br />

        {/* {/* Question 30*/}

        <Paragraph>30.How do you parse JSON data in JavaScript, and how do you stringify JavaScript objects?
                    <ul className="px-4 list-disc list-inside">
                      <li>Project: Create a function that converts an object to JSON and back to an object.</li>
                    </ul>
         </Paragraph>
        <Paragraph type="answer">
                To parse JSON data in JavaScript, use JSON.parse() to convert a JSON string into a JavaScript object. To stringify JavaScript objects, use JSON.stringify() to convert an object into a JSON string.
                <Paragraph type="para">Example:</Paragraph>
                    <ul className="px-4 list-disc list-inside">
                      <li>Parse: JSON.parse(jsonString)</li>
                      <li>Stringify: JSON.stringify(object)</li>
                    </ul>
                    <Paragraph type="para">Project: Function to Convert Object to JSON and Back</Paragraph>
                    <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                      <CodeHighlighter code={ParseStringify} language="javascript" />
                    </div>
                    This function demonstrates both stringifying and parsing, showing how objects and JSON interact in JavaScript.
        </Paragraph> <br />

        {/* {/* Question 31*/}

        <Paragraph>31. What is CORS, and why do we need it when making API requests?  </Paragraph>
        <Paragraph type="answer">
                  CORS (Cross-Origin Resource Sharing) is a security feature implemented by web browsers that restricts how resources are shared between different origins (domains). It prevents unauthorized access to a website’s data by another domain.
                  <Paragraph type="para">Why We Need CORS:</Paragraph>
                  When making API requests from a frontend app hosted on one origin (e.g., http://example.com) to a server on another origin (e.g., http://api.example.com), the browser blocks the request unless the server explicitly allows it via CORS headers.
                  <Paragraph type="para">How It Works:</Paragraph>
                  The server must include the Access-Control-Allow-Origin header in its response, specifying which origins are allowed to access the resource. For example:
                  <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                      <CodeHighlighter code={AccessControl} language="makefile" />
                  </div>
                  <Paragraph type="para">Example:</Paragraph>
                  If you try to fetch data from an API without proper CORS setup, the browser will block the request and show a CORS error. CORS is essential for enabling secure cross-origin communication.
        </Paragraph> <br />

         {/* {/* Question 32*/}

         <Paragraph>32. Explain how the FormData API works and when you’d use it.  </Paragraph>
        <Paragraph type="answer">
                  The FormData API is used in JavaScript to build and manage key-value pairs representing form fields and their values. It is typically used to send form data, including files, via HTTP requests (e.g., POST) to a server.
                  <Paragraph type="para">Key Features:</Paragraph>
                  <ul className="px-4 list-disc list-inside">
                      <li>Easily Handle Form Data: Automatically gathers data from form fields.</li>
                      <li>Supports Files: Handles file uploads using &lt;input type="file"&gt;.</li>
                      <li>Encodes for Submission: Automatically encodes data in a format suitable for multipart/form-data.</li>
                  </ul>
                  <Paragraph type="para">Usage:</Paragraph>
                  <ul className="px-4 list-disc list-inside">
                      <li>Create a FormData Object: Use new FormData(formElement) or new FormData().</li>
                      <li>Append Data: Use .append(key, value) to add custom fields.</li>
                  </ul>
                  <Paragraph type="para">Example:</Paragraph>
                  <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                      <CodeHighlighter code={FormDataObject} language="javascript" />
                  </div>
                  <Paragraph type="para">When to Use:</Paragraph>
                  Use the FormData API when:
                  <ul className="px-4 list-disc list-inside">
                      <li>Submitting form data, especially with file uploads.</li>
                      <li>Making multipart/form-data requests without manually encoding the data.</li>
                  </ul>

        </Paragraph> <br />

        {/* {/* Question 33*/}

        <Paragraph>33. What is the purpose of the History API, and how do pushState and replaceState work?
                    <ul className="px-4 list-disc list-inside">
                      <li>Project: Create a simple single-page navigation system with pushState.</li>
                    </ul>
         </Paragraph>
        <Paragraph type="answer">
                  The History API allows developers to manipulate the browser's session history, enabling dynamic navigation without reloading the page. It is commonly used in Single Page Applications (SPAs) for smooth transitions between views.
                  <Paragraph type="para">Key Functions:</Paragraph>
                  <ul className="px-4 list-disc list-inside">
                      <li>pushState(): Adds a new entry to the browser's history stack without reloading the page. Syntax: history.pushState(state, title, url)</li>
                      <li>replaceState(): Replaces the current history entry without adding a new one.
                      Syntax: history.replaceState(state, title, url)</li>
                  </ul>
                  <Paragraph type="para">Purpose:</Paragraph>
                  <ul className="px-4 list-disc list-inside">
                      <li>Control the browser's URL dynamically.</li>
                      <li>Enable back/forward navigation in SPAs.</li>
                      <li>Store custom state data in state.</li>
                  </ul>
                  <Paragraph type="para">Project: Single-Page Navigation with pushState</Paragraph>
                  <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                      <CodeHighlighter code={SinglePageNavigationt} language="html" />
                  </div>
                  <Paragraph type="para">How It Works:</Paragraph>
                  <ul className="px-4 list-disc list-inside">
                      <li>pushState() updates the URL when a navigation link is clicked.</li>
                      <li>The content updates dynamically without reloading the page.</li>
                      <li>The browser's back/forward buttons trigger the popstate event, ensuring proper navigation.</li>
                  </ul>
                  
        </Paragraph> <br />

        {/* {/* Question 34*/}

        <Paragraph>34. How can you handle errors in API requests with try/catch blocks and the .catch() method?  </Paragraph>
        <Paragraph type="answer">
                  You can handle errors in API requests using two approaches: try/catch blocks for async/await syntax and the .catch() method for Promise-based syntax. Both methods capture errors like network issues or invalid responses.
                  <Paragraph type="para">1. Using try/catch with async/await:</Paragraph>
                  <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                      <CodeHighlighter code={catchwithasync} language="javascript" />
                  </div>
                  <ul className="px-4 list-disc list-inside">
                      <li>try: Executes the API request.</li>
                      <li>catch: Captures and handles errors (e.g., network issues, non-200 status).</li>
                  </ul>
                  <Paragraph type="para">2. Using .catch() with Promises:</Paragraph>
                  <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                      <CodeHighlighter code={catchwithPromises} language="javascript" />
                  </div>
                  
                  <ul className="px-4 list-disc list-inside">
                      <li>.catch(): Handles errors in the Promise chain.</li>
                  </ul>
                  <Paragraph type="para">Key Differences:</Paragraph>
                  <ul className="px-4 list-disc list-inside">
                      <li>try/catch: Cleaner and easier to read with async/await.</li>
                      <li>.catch(): More suited for direct Promises or when chaining multiple .then() calls.</li>
                  </ul>
                  Both approaches ensure robust error handling for API requests.
        </Paragraph> <br />

        {/* {/* Question 35*/}

        <Paragraph>35. What are WebSockets, and how do they differ from HTTP requests?   </Paragraph>
        <Paragraph type="answer">
                  WebSockets are a communication protocol that provides full-duplex (two-way) communication between a client and a server over a single, long-lived connection. They are ideal for real-time applications, like chat apps or live data feeds.
                  <Paragraph type="para">Key Differences from HTTP Requests:</Paragraph>
                  <div className="p-4">
                            <div className="overflow-x-auto">
                              <table className={tableClasses.table}>
                                <thead>
                                  <tr className={tableClasses.headingRow}>
                                    <th className={tableClasses.header}>Feature</th>
                                    <th className={tableClasses.header}>WebSockets</th>
                                    <th className={tableClasses.header}>HTTP Requests</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr>
                                    <td className={tableClasses.cell}>Connection</td>
                                    <td className={tableClasses.cell}>
                                    Persistent, bi-directional connection
                                    </td>
                                    <td className={tableClasses.cell}>
                                    One-time request-response cycle
                                    </td>
                                  </tr>
                                  <tr className={tableClasses.row}>
                                    <td className={tableClasses.cell}>Real-time Data</td>
                                    <td className={tableClasses.cell}>
                                    Supports real-time data transfer
                                    </td>
                                    <td className={tableClasses.cell}>
                                    Not real-time (needs polling or long-polling for updates)
                                    </td>
                                  </tr>
                                  <tr>
                                    <td className={tableClasses.cell}>Overhead</td>
                                    <td className={tableClasses.cell}>
                                    Minimal after the connection is established
                                    </td>
                                    <td className={tableClasses.cell}>
                                    Higher overhead due to repeated requests
                                    </td>
                                  </tr>
                                  <tr className={tableClasses.row}>
                                    <td className={tableClasses.cell}>Use Case</td>
                                    <td className={tableClasses.cell}>
                                    Real-time apps (e.g., chats, games)
                                    </td>
                                    <td className={tableClasses.cell}>
                                    Standard request-response scenarios
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                  <Paragraph type="para">Example:</Paragraph>
                  1. WebSocket:
                  <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                      <CodeHighlighter code={WebSockets} language="javascript" />
                  </div>
                  2. HTTP Request:
                  <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                      <CodeHighlighter code={communication} language="javascript" />
                  </div>
                  <Paragraph type="para">When to Use:</Paragraph>
                  <ul className="px-4 list-disc list-inside">
                      <li>Use WebSockets for real-time communication.</li>
                      <li>Use HTTP for standard, less frequent data exchange.</li>
                  </ul>
        </Paragraph> <br />

         {/* {/* Question 36*/}

         <Paragraph>36. Explain the basics of the Service Worker API and its use in creating progressive web apps (PWAs). </Paragraph>
        <Paragraph type="answer">
                  The Service Worker API is a browser feature that allows developers to run a background script for handling network requests, caching assets, and enabling offline functionality. It is a key component of Progressive Web Apps (PWAs) to provide a fast, reliable, and offline-capable user experience.
                  <Paragraph type="para">Basics of Service Workers:</Paragraph>
                  <ol className="px-4 list-decimal list-inside">
                      <li>Lifecycle:</li>
                      <ul className="px-4 list-disc list-inside">
                        <li>Install: Cache assets for offline use.</li>
                        <li>Activate: Clean up old caches and get ready to handle fetch events.</li>
                        <li>Fetch: Intercept network requests and serve cached or live content.</li>
                      </ul>
                      <li>Runs Independently:</li>
                      <ul className="px-4 list-disc list-inside">
                        <li>Runs in the background, separate from the web page.</li>
                        <li>Does not have direct DOM access.</li>
                      </ul>
                      <li>HTTPS Only: Service workers require a secure context (HTTPS).</li>
                  </ol>
                  <Paragraph type="para">Use in PWAs:</Paragraph>
                      <ul className="px-4 list-disc list-inside">
                        <li>Offline Capability: Cache static assets to serve content without an internet connection.</li>
                        <li>Performance: Serve cached assets for faster load times.</li>
                        <li>Push Notifications: Handle notifications even when the app is closed.</li>
                        <li>Background Sync: Sync data in the background when the network becomes available.</li>
                      </ul>
                      <Paragraph type="para">Example: Basic Service Worker</Paragraph>
                                <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                                  <CodeHighlighter code={BackgroundSync} language="javascript" />
                                </div>
                                <Paragraph type="para">Use in PWAs:</Paragraph>
                      <ul className="px-4 list-disc list-inside">
                        <li>Makes the app reliable (offline-first behavior).</li>
                        <li>Improves performance by reducing network latency.</li>
                        <li>Enables modern PWA features like push notifications and background sync.</li>
                      </ul>
        </Paragraph>
        



    </div>
  );
}

export default APIJSON ;


