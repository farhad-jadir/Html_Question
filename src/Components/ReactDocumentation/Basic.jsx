import React from "react";
import clsx from "clsx";
import { baseParagraphClasses } from "../utils/ClassNames";
import { tableClasses } from "../utils/TableStyles";  // Importing the reusable table classes
import CodeHighlighter from "../documentation/CodeHighlighter";
import ReactCoding from "./ReactCoding";

function Paragraph({ children, type = "question", additionalClasses = "" }) {
  const paragraphClass = clsx(baseParagraphClasses[type], additionalClasses);
  return <p className={paragraphClass}>{children}</p>;
}

function Basic () {
  const {FunctionalComponents, ClassComponents, ModernApproach, OldApproach, StateManagement, PropsinFunctional, PropsinClass, PropsvsState, ParenttoChild, ChildtoParent, SiblingCommunication, ContextAPI, simplelist, withFunComponents, Componentstow, additionalparameters, DefaultBehavior, ControlledComponents, UncontrolledComponents, ReactFragment, shorthandsyntax, KeyPoints, ifelseStatements, TernaryOperators, LogicalOperator, SwitchStatements, UsingIIFE, Managesstate, Handlesside, Accessescontext, referencetoDOM, Managescomplex, useMemo, useCallback } = ReactCoding();
  return (
    <div className="bg-[#101C28] p-2">

        <Paragraph type="heading">Step 1: Basic Interview Questions Of React</Paragraph> <br />

        {/* {/* Question 01 */}

        <Paragraph>01. What is React, and why is it used? </Paragraph>
        <Paragraph type="answer">
                  <Paragraph type="para">React:</Paragraph>
                  React is an open-source JavaScript library used for building user interfaces (UIs), particularly for single-page applications (SPAs). It was developed by Facebook and is maintained by Facebook and a community of developers. React allows developers to create reusable UI components, making it easier to build and maintain complex web applications.
                  <Paragraph type="para">Usage of React:</Paragraph>
                  <ul className="px-4 list-disc list-inside">
                    <li>Component-Based Architecture: React uses a component-based approach, where the UI is divided into small, reusable pieces. This promotes better organization, reusability, and easier debugging.</li>
                    <li>Virtual DOM: React uses a virtual DOM to efficiently update and render only the components that change, rather than reloading the entire DOM. This improves the performance of applications.</li>
                    <li>Declarative UI: With React, developers can describe how the UI should look for a given state, and React automatically updates the UI when the state changes. This simplifies the development process.</li>
                    <li>Reusable Components: React components can be reused across different parts of an application or even across multiple projects, saving time and effort.</li>
                    <li>React Ecosystem: React has a rich ecosystem of libraries and tools, such as React Router for navigation and Redux for state management, making it suitable for building complex applications.</li>
                    <li>Cross-Platform Development: With tools like React Native, developers can use React to build mobile applications for iOS and Android, sharing much of the same codebase.</li>
                    <li>Strong Community Support: React has a large and active community, providing a wealth of resources, tutorials, and third-party tools, making it beginner-friendly and widely adopted.</li>
                    <li>Seamless Integration: React can be integrated into existing projects without requiring a complete rewrite, making it a good choice for modernizing legacy applications.</li>
                  </ul>
                  <Paragraph type="para">Example Use Case:</Paragraph>
                  React is ideal for applications like:
                  <ul className="px-4 list-disc list-inside">
                    <li>E-commerce platforms</li>
                    <li>Social media dashboards</li>
                    <li>Real-time chat applications</li>
                    <li>Interactive web forms</li>
                  </ul>
                  By leveraging React's powerful features, developers can create dynamic, fast, and scalable applications.
        </Paragraph> <br />

        {/* {/* Question 02 */}

        <Paragraph>02. What is JSX, and why is it preferred in React? </Paragraph>
        <Paragraph type="answer">
                  <Paragraph type="para">JSX:</Paragraph>
                  JSX (JavaScript XML) is a syntax extension for JavaScript that allows developers to write HTML-like code within JavaScript. It is used in React to define the structure of the user interface (UI).
                  <Paragraph type="para">JSX Preferred in React:</Paragraph>
                  <ul className="px-4 list-disc list-inside">
                    <li>Readability: Combines HTML-like syntax with JavaScript, making code easier to read and understand.</li>
                    <li>Declarative UI: Clearly describes how the UI should look for given states.</li>
                    <li>Integration: Embeds JavaScript expressions directly using {}.</li>
                    <li>Component-Friendly: Simplifies defining reusable React components</li>
                    <li>Tooling: Supported by modern IDEs for better error checking and debugging.</li>
                  </ul>
                  JSX simplifies development and improves productivity by blending HTML and JavaScript seamlessly.
        </Paragraph> <br />

        {/* {/* Question 03 */}

        <Paragraph>03. How does JSX differ from HTML?</Paragraph>
        <Paragraph type="answer">
                  <Paragraph type="para">Differences Between JSX and HTML:</Paragraph>
                  <ol className="px-4 list-decimal list-inside">
                    <li>Syntax:</li>
                    <ul className="px-4 list-disc list-inside">
                      <li>JSX allows embedding JavaScript expressions using {}.</li>
                      <li>HTML does not support JavaScript directly in its syntax.</li>
                    </ul>
                    <li>Attributes:</li>
                    <ul className="px-4 list-disc list-inside">
                      <li>JSX uses camelCase for attributes (e.g., className, onClick).</li>
                      <li>HTML uses lowercase (e.g., class, onclick).</li>
                    </ul>
                    <li>Self-Closing Tags:</li>
                    <ul className="px-4 list-disc list-inside">
                      <li>JJSX requires self-closing tags for void elements (e.g., &lt;img/&gt;).</li>
                      <li>HTML allows both &lt;img&gt; and &lt;img/&gt;.</li>
                    </ul>
                    <li>JavaScript Integration:</li>
                    <ul className="px-4 list-disc list-inside">
                      <li>JSX allows dynamic values and expressions inside tags using {}.</li>
                      <li>HTML does not support this feature directly.</li>
                    </ul>
                    <li>DOM Rendering:</li>
                    <ul className="px-4 list-disc list-inside">
                      <li>JSX is converted into JavaScript and rendered by React's virtual DOM.</li>
                      <li>HTML is parsed and rendered directly by the browser.</li>
                    </ul>
                  </ol>
                  JSX combines HTML-like syntax with JavaScript, making it more dynamic and powerful for React development.
        </Paragraph> <br />

        {/* {/* Question 04 */}

        <Paragraph>04. What are components in React?</Paragraph>
        <Paragraph type="answer">
                  In React, components are the building blocks of a user interface. They are reusable, self-contained pieces of code that define how a part of the UI should look and behave.
                  <Paragraph type="para">Types of Components:</Paragraph>
                  1. Functional Components – Written as JavaScript functions and primarily use hooks for state and side effects.
                  <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                      <CodeHighlighter code={FunctionalComponents} language="javascript" />
                  </div>
                  2. Class Components – Written as ES6 classes, using this.state and lifecycle methods (now mostly replaced by hooks).
                  <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                      <CodeHighlighter code={ClassComponents} language="javascript" />
                  </div>
                  <Paragraph type="para">Key Features:</Paragraph>
                  <ul className="px-4 list-disc list-inside">
                      <li>Reusability</li>
                      <li>Accept props (inputs)</li>
                      <li> Maintain state (for dynamic behavior)</li>
                      They make UI development modular, maintainable, and scalable in React! 🚀
                  </ul>
        </Paragraph> <br />

         {/* {/* Question 05 */}

         <Paragraph>05. What is the difference between functional and class components?</Paragraph>
        <Paragraph type="answer">
                  <Paragraph type="para">Difference Between Functional and Class Components in React:</Paragraph>
                  <div className="p-4">
                            <div className="overflow-x-auto">
                              <table className={tableClasses.table}>
                                <thead>
                                  <tr className={tableClasses.headingRow}>
                                    <th className={tableClasses.header}>Feature</th>
                                    <th className={tableClasses.header}>Functional Components 🏆</th>
                                    <th className={tableClasses.header}>Class Components 🏛️</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr>
                                    <td className={tableClasses.cell}>Definition</td>
                                    <td className={tableClasses.cell}>
                                    JavaScript functions that return JSX
                                    </td>
                                    <td className={tableClasses.cell}>
                                    ES6 classes extending React.Component
                                    </td>
                                  </tr>
                                  <tr className={tableClasses.row}>
                                    <td className={tableClasses.cell}>State Handling</td>
                                    <td className={tableClasses.cell}>
                                    Uses useState hook ✅
                                    </td>
                                    <td className={tableClasses.cell}>
                                    Uses this.state ❌
                                    </td>
                                  </tr>
                                  <tr>
                                    <td className={tableClasses.cell}>Lifecycle Methods</td>
                                    <td className={tableClasses.cell}>
                                    Uses hooks like useEffect ✅
                                    </td>
                                    <td className={tableClasses.cell}>
                                    Uses methods like componentDidMount ❌
                                    </td>
                                  </tr>
                                  <tr className={tableClasses.row}>
                                    <td className={tableClasses.cell}>Performance</td>
                                    <td className={tableClasses.cell}>
                                    Faster due to less overhead ⚡
                                    </td>
                                    <td className={tableClasses.cell}>
                                    Slightly slower due to class instantiation 🐢
                                    </td>
                                  </tr>
                                  <tr className={tableClasses.cell}>
                                    <td className={tableClasses.cell}>Code Simplicity</td>
                                    <td className={tableClasses.cell}>
                                    Concise and easier to read ✨
                                    </td>
                                    <td className={tableClasses.cell}>
                                    More verbose with this keyword
                                    </td>
                                  </tr>
                                  <tr className={tableClasses.row}>
                                    <td className={tableClasses.cell}>Hooks Support</td>
                                    <td className={tableClasses.cell}>
                                    Fully supports hooks 🎣
                                    </td>
                                    <td className={tableClasses.cell}>
                                    Doesn't support hooks
                                    </td>
                                  </tr>
                                  <tr className={tableClasses.cell}>
                                    <td className={tableClasses.cell}>Usage</td>
                                    <td className={tableClasses.cell}>
                                    Preferred for modern React development
                                    </td>
                                    <td className={tableClasses.cell}>
                                    Considered outdated (mostly for legacy code)
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                  <Paragraph type="para">Example of Functional Component (Modern Approach):</Paragraph>
                  <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                      <CodeHighlighter code={ModernApproach} language="javascript" />
                  </div>
                  <Paragraph type="para">Example of Class Component (Old Approach):</Paragraph>
                  <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                      <CodeHighlighter code={OldApproach} language="javascript" />
                  </div>
        </Paragraph> <br />

        {/* {/* Question 06 */}

        <Paragraph>06. What is a single-page application (SPA), and how does React enable it?</Paragraph>
        <Paragraph type="answer">
                  <Paragraph type="para">Single-Page Application (SPA) & React’s Role:</Paragraph>
                  What is a Single-Page Application (SPA)? <br />
                  A Single-Page Application (SPA) is a web application that loads a single HTML page and dynamically updates content without refreshing the page. Instead of requesting a new page from the server for every interaction, SPAs use JavaScript to update the UI efficiently. <br />
                  How Does React Enable SPAs? <br />
                  ✅ Client-Side Routing: React uses React Router to update the URL and render components without a full-page reload. <br />
                  ✅ Virtual DOM: React efficiently updates only the changed parts of the UI, improving performance. <br />
                  ✅ Component-Based Architecture: UI is broken down into reusable, independent components. <br />
                  ✅ State Management: React’s state and hooks allow dynamic content updates without reloading the page. <br />
                  Example of React SPA with React Router:
                  <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                      <CodeHighlighter code={StateManagement} language="javascript" />
                  </div>
                  👉 In this example, clicking links updates the URL and content without a page reload, making it an SPA! 🚀


        </Paragraph> <br />

        {/* {/* Question 07 */}

        <Paragraph>07. What are props in React?</Paragraph>
        <Paragraph type="answer">
                  <Paragraph type="para">Props in React:</Paragraph>
                  Props (short for "properties") are read-only inputs passed from a parent component to a child component in React. They allow components to be dynamic and reusable by passing data and functions as arguments.
                  <Paragraph type="para">Key Features of Props:</Paragraph>
                  ✅ Immutable – Cannot be changed by the child component. <br />
                  ✅ Passed from Parent to Child – Enables component communication. <br />
                  ✅ Reusable – Makes components flexible and dynamic. <br />
                  ✅ Can Pass Any Data Type – Strings, numbers, arrays, objects, and functions.
                  <Paragraph type="para">Example of Props in a Functional Component:</Paragraph>
                  <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                      <CodeHighlighter code={ PropsinFunctional} language="javascript" />
                  </div>
                  Output: ➡️ Hello, Farhad!
                  <Paragraph type="para">Example of Props in a Class Component:</Paragraph>
                  <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                      <CodeHighlighter code={PropsinClass} language="javascript" />
                  </div>
                  👉 Props help in building dynamic, reusable, and modular React applications! 🚀

        </Paragraph> <br />

        {/* {/* Question 08 */}

        <Paragraph>08. How is state different from props?</Paragraph>
        <Paragraph type="answer">
                  <Paragraph type="para">Difference Between State and Props in React:</Paragraph>
                  <div className="p-4">
                            <div className="overflow-x-auto">
                              <table className={tableClasses.table}>
                                <thead>
                                  <tr className={tableClasses.headingRow}>
                                    <th className={tableClasses.header}>Feature</th>
                                    <th className={tableClasses.header}>State 🏛️</th>
                                    <th className={tableClasses.header}>Props 🎁</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr>
                                    <td className={tableClasses.cell}>Definition</td>
                                    <td className={tableClasses.cell}>
                                    Internal data storage of a component
                                    </td>
                                    <td className={tableClasses.cell}>
                                    External data passed from a parent component
                                    </td>
                                  </tr>
                                  <tr className={tableClasses.row}>
                                    <td className={tableClasses.cell}>Mutability</td>
                                    <td className={tableClasses.cell}>
                                    Mutable (can be changed using useState or this.setState)
                                    </td>
                                    <td className={tableClasses.cell}>
                                    Immutable (cannot be modified by the receiving component)
                                    </td>
                                  </tr>
                                  <tr>
                                    <td className={tableClasses.cell}>Who Controls It?</td>
                                    <td className={tableClasses.cell}>
                                    Controlled by the component itself
                                    </td>
                                    <td className={tableClasses.cell}>
                                    Controlled by the parent component
                                    </td>
                                  </tr>
                                  <tr className={tableClasses.row}>
                                    <td className={tableClasses.cell}>Usage</td>
                                    <td className={tableClasses.cell}>
                                    Used for managing dynamic data that changes over time
                                    </td>
                                    <td className={tableClasses.cell}>
                                    Used to pass data and functions to child components
                                    </td>
                                  </tr>
                                  <tr className={tableClasses.cell}>
                                    <td className={tableClasses.cell}>Scope</td>
                                    <td className={tableClasses.cell}>
                                    Local to the component
                                    </td>
                                    <td className={tableClasses.cell}>
                                    Passed between components
                                    </td>
                                  </tr>
                                  <tr className={tableClasses.row}>
                                    <td className={tableClasses.cell}>Example Use Case</td>
                                    <td className={tableClasses.cell}>
                                    Managing form inputs, toggling UI elements
                                    </td>
                                    <td className={tableClasses.cell}>
                                    Passing user details, button labels, event handlers
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                  </div>
                  <Paragraph type="para">Example of Props vs. State in Functional Components</Paragraph>
                  <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                      <CodeHighlighter code={PropsvsState} language="javascript" />
                  </div>
                  <Paragraph type="para">Key Takeaways:</Paragraph>
                  🔹 Props are passed from parent to child and cannot be changed by the child. <br />
                  🔹 State is managed within a component and can be updated with useState or setState. <br />
                  🔹 State changes cause re-rendering, while props help make components reusable. <br />
                  🚀 Both state and props work together to build dynamic and interactive React applications!
        </Paragraph> <br />

        
        {/* {/* Question 09 */}

        <Paragraph>09. How can you pass data from one component to another in React?</Paragraph>
        <Paragraph type="answer">
                  <Paragraph type="para">Passing Data Between Components in React: React provides several ways to pass data between components, depending on their relationship.</Paragraph>
                  <Paragraph type="para">1️⃣ Passing Data from Parent to Child (via Props)</Paragraph>
                  ✅ The most common method is using props to pass data downward from a parent component to a child.
                  <Paragraph type="para">Example: Parent to Child via Props:</Paragraph>
                  <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                      <CodeHighlighter code={ParenttoChild} language="javascript" />
                  </div>
                  🔹 message prop is passed from Parent to Child.
                  <Paragraph type="para">2️⃣ Passing Data from Child to Parent (via Callback Function)</Paragraph>
                  ✅ Since props are read-only, to send data upward, the parent can pass a callback function to the child.
                  <Paragraph type="para">Example: Child to Parent via Callback</Paragraph>
                  <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                      <CodeHighlighter code={ChildtoParent} language="javascript" />
                  </div>
                  🔹 Child calls the function with data, and Parent receives it.
                  <Paragraph type="para">3️⃣ Passing Data Between Siblings (via Lifting State Up)</Paragraph>
                  ✅ Data is passed via the parent, which acts as a bridge.
                  <Paragraph type="para">Example: Sibling Communication via Parent</Paragraph>
                  <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                      <CodeHighlighter code={SiblingCommunication} language="javascript" />
                  </div>
                  🔹 SiblingOne updates state in Parent, which is then passed to SiblingTwo.
                  <Paragraph type="para">4️⃣ Using Context API (For Global State Management)</Paragraph>
                  ✅ Best for passing data deeply nested in the component tree without prop drilling.
                  <Paragraph type="para">Example: Context API</Paragraph>
                  <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                      <CodeHighlighter code={ContextAPI} language="javascript" />
                  </div>
                  🔹 Data is globally accessible without passing props manually.
                  <Paragraph type="para">5️⃣ Using Redux / Zustand (For Large Applications)</Paragraph>
                  ✅ When multiple components need access to the same data, Redux or Zustand provides centralized state management.
        </Paragraph> <br />

         {/* {/* Question 10 */}

         <Paragraph>10. What is the significance of the key prop in lists?</Paragraph>
        <Paragraph type="answer">
                  The key prop is a crucial aspect when working with lists in React, a popular JavaScript library for building user interfaces. Here's why the key prop is significant:
                  <ul className="px-4 list-disc list-inside">
                      <li>Identifying Elements Uniquely: Each element in an array rendered by React needs to have a unique key. This helps React identify which items have changed, been added, or removed. It ensures that the DOM is updated efficiently.</li>
                      <li>Performance Optimization: By providing a unique key for each list item, React can quickly determine which items need to be re-rendered. This optimizes performance by minimizing unnecessary updates and rendering only the elements that have actually changed.</li>
                      <li>Maintaining Element State: Keys help maintain the state of list items. For example, if you have input fields in a list, using unique keys ensures that React can preserve the input values correctly when the list is updated.</li>
                      <li>Avoiding Errors: Without unique keys, React would generate warnings and potentially cause issues in your application. Providing unique keys ensures your application runs smoothly and avoids such problems.</li>
                  </ul>
                  Here's an example of using the key prop in a simple list of items:
                  <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                      <CodeHighlighter code={simplelist} language="javascript" />
                  </div>
                  In this example, the item.id is used as the key, ensuring each list item has a unique identifier. This helps React manage the list efficiently. <br />
                  If you're diving into React development, understanding and using the key prop correctly is a fundamental step towards building performant and maintainable applications. 🚀
        </Paragraph> <br />

        {/* {/* Question 11 */}

        <Paragraph>11. How do you handle events in React?</Paragraph>
        <Paragraph type="answer">
                  Handling events in React is quite similar to how you handle events in plain JavaScript, but with some key differences that make it more efficient within the React framework. Here's a quick guide:
                  <Paragraph type="para">Basic Event Handling:</Paragraph>
                  <ul className="px-4 list-disc list-inside">
                      <li>Define Event Handlers: You define event handlers as methods in your component class or as functions in functional components.</li>
                      <li>Attach Event Handlers: You attach these handlers to DOM elements using JSX syntax.</li>
                      <li>Event Parameter: React passes a synthetic event object, which is a cross-browser wrapper around the native event object, ensuring consistent behavior across different browsers.</li>
                  </ul>
                  <Paragraph type="para">Example with Functional Components:</Paragraph>
                  Here's how you can handle a simple click event in a functional component:
                  <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                      <CodeHighlighter code={ withFunComponents} language="javascript" />
                  </div>
                  In this example, the handleClick function is called when the button is clicked.
                  <Paragraph type="para">Example with Class Components:</Paragraph>
                  If you're using class components, here's how it looks:
                  <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                      <CodeHighlighter code={Componentstow} language="javascript" />
                  </div>
                  <Paragraph type="para">Passing Parameters to Event Handlers:</Paragraph>
                  Sometimes you need to pass additional parameters to the event handler. This can be done using arrow functions or the bind method.
                  <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                      <CodeHighlighter code={additionalparameters} language="javascript" />
                  </div>
                  <Paragraph type="para">Synthetic Events:</Paragraph>
                  React uses a synthetic event system to wrap native events, providing cross-browser compatibility. Synthetic events are fully compatible with the W3C spec, and you can use event.nativeEvent if you need access to the underlying browser event.
                  <Paragraph type="para">Preventing Default Behavior:</Paragraph>
                  To prevent the default behavior of an event, you can use the preventDefault method:
                  <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                      <CodeHighlighter code={DefaultBehavior} language="javascript" />
                  </div>
                  <Paragraph type="para">Event Pooling:</Paragraph>
                  React pools events to improve performance. This means that the event object will be reused and all properties will be nullified after the event callback has been invoked. If you need to access the event properties asynchronously, you should call event.persist() to remove the event from the pool.
                  <Paragraph type="para">Conclusion:</Paragraph>
                  Handling events in React is straightforward and allows for clean, maintainable code. Whether you're using functional or class components, React provides a consistent and efficient way to manage user interactions.

        </Paragraph> <br />

        {/* {/* Question 12 */}

        <Paragraph>12. What are controlled and uncontrolled components in React?</Paragraph>
        <Paragraph type="answer">
                  In React, controlled and uncontrolled components refer to how form elements like input, textarea, and select elements are managed:
                  <Paragraph type="para">Controlled Components:</Paragraph>
                  In controlled components, form data is handled by the React component. The React component that renders the form elements also controls their current values via the component's state. This gives you control over the data and allows you to handle validation, formatting, and input updates easily. Example:
                  <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                      <CodeHighlighter code={ControlledComponents} language="javascript" />
                  </div>
                  In this example, the value of the input is controlled by the state of the ControlledInput component. The input value is updated by the handleChange event handler.
                  <Paragraph type="para">Uncontrolled Components:</Paragraph>
                  In uncontrolled components, form data is handled by the DOM itself. Instead of relying on the component's state, you use a ref to access the form values from the DOM directly. This approach can be simpler to use in some cases, but it provides less control over the form data. Example:
                  <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                      <CodeHighlighter code={UncontrolledComponents} language="javascript" />
                  </div>
                  In this example, the value of the input is accessed using inputRef.current.value, and the form submission is handled by the handleSubmit function.
                  <Paragraph type="para">Key Differences:</Paragraph>
                  <ul className="px-4 list-disc list-inside">
                      <li>Controlled Components: The value of the input is always driven by the React state. This allows for easier validation, formatting, and handling of form data.</li>
                      <li>Uncontrolled Components: The value of the input is handled by the DOM. This approach can be simpler and faster to set up but offers less control over the form data.</li>
                  </ul>
                  <Paragraph type="para">When to Use:</Paragraph>
                  <ul className="px-4 list-disc list-inside">
                      <li>Use Controlled Components: When you need to perform instant validation or manipulation of the form data (e.g., formatting phone numbers, preventing invalid input).</li>
                      <li>Use Uncontrolled Components: When you need quick and simple form handling without complex validation or state management (e.g., a simple contact form).</li>
                  </ul>
                  

        </Paragraph> <br />

        {/* {/* Question 13 */}

        <Paragraph>13. What is a React fragment, and why would you use it?</Paragraph>
        <Paragraph type="answer">
                  In React, a fragment allows you to group a list of children elements without adding extra nodes to the DOM. This can be especially useful when you're returning multiple elements from a component and don't want to wrap them in an unnecessary parent element, like a &lt;div&gt;.
                  <Paragraph type="para">How to Use React Fragments:</Paragraph>
                  There are two ways to create fragments in React: <br />
                  🔹Using &lt;React.Fragment&gt;:
                  <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                      <CodeHighlighter code={ReactFragment} language="javascript" />
                  </div>
                  🔹Using shorthand syntax (empty tags &lt;&gt; and &lt;/&gt;) (supported in JSX):
                  <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                      <CodeHighlighter code={shorthandsyntax} language="javascript" />
                  </div>
                  <Paragraph type="para">Why Use React Fragments:</Paragraph>
                  🔹Avoid Unnecessary Markup: By not adding extra nodes to the DOM, you can keep your markup clean and avoid potential styling issues caused by additional wrappers. <br />
                  🔹Improved Performance: Less markup means fewer elements for the browser to render, which can lead to performance improvements, especially in large applications. <br />
                  🔹Logical Grouping: Fragments allow you to logically group child elements without affecting the DOM structure, which can make your components easier to understand and maintain.
                  <Paragraph type="para">Key Points:</Paragraph>
                  🔹Fragments can also accept key props if you're mapping over an array and need each child to have a unique key:
                  <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                      <CodeHighlighter code={KeyPoints} language="javascript" />
                  </div>
                  🔹Limitation: You cannot use attributes like className or style on fragments, as they don't produce actual DOM nodes.
        </Paragraph> <br />

        {/* {/* Question 14 */}

        <Paragraph>14. How do you conditionally render elements in React?</Paragraph>
        <Paragraph type="answer">
                  In React, conditionally rendering elements means you can choose what to display based on certain conditions. Here are several ways to achieve this:
                  <Paragraph type="para">1. Using if-else Statements:</Paragraph>
                  You can use standard JavaScript if-else statements inside your render method to conditionally render components.
                  <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                      <CodeHighlighter code={ifelseStatements} language="javascript" />
                  </div>
                  <Paragraph type="para">2. Using Ternary Operators:</Paragraph>
                  Ternary operators provide a more concise way to conditionally render elements.
                  <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                      <CodeHighlighter code={TernaryOperators} language="javascript" />
                  </div>
                  <Paragraph type="para">3. Using Logical && Operator:</Paragraph>
                  You can use the logical && operator to render an element based on a condition. If the condition is true, the element after && will be rendered; otherwise, it will not.
                  <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                      <CodeHighlighter code={LogicalOperator} language="javascript" />
                  </div>
                  <Paragraph type="para">4. Using Switch Statements:</Paragraph>
                  For multiple conditions, you can use switch statements inside a function to determine what to render.
                  <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                      <CodeHighlighter code={SwitchStatements} language="javascript" />
                  </div>
                  <Paragraph type="para">5. Using IIFE (Immediately Invoked Function Expression):</Paragraph>
                  For complex conditions, you can use an IIFE to return a component based on the evaluation.
                  <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                      <CodeHighlighter code={UsingIIFE} language="javascript" />
                  </div>
                  <Paragraph type="para">4. Conclusion:</Paragraph>
                  React provides several ways to conditionally render elements, offering flexibility to manage different scenarios in your components. By choosing the right method for your use case, you can make your code more readable and maintainable.
        </Paragraph> <br />

        {/* {/* Question 15 */}

        <Paragraph>15. What are React Hooks? Name a few commonly used hooks.</Paragraph>
        <Paragraph type="answer">
                  <Paragraph type="para">React Hooks:</Paragraph>
                  React Hooks are functions that allow functional components to use state and lifecycle features without needing a class component. They were introduced in React 16.8 to simplify component logic.
                  <Paragraph type="para">Commonly Used Hooks in React:</Paragraph>
                  🔹useState() – Manages state in functional components.
                  <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                      <CodeHighlighter code={Managesstate} language="javascript" />
                  </div>
                  🔹useEffect() – Handles side effects (e.g., API calls, subscriptions).
                  <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                      <CodeHighlighter code={Handlesside} language="javascript" />
                  </div>
                  🔹useContext() – Accesses context API values without prop drilling.
                  <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                      <CodeHighlighter code={Accessescontext} language="javascript" />
                  </div>
                  🔹useRef() – Creates a reference to DOM elements or persists values.
                  <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                      <CodeHighlighter code={referencetoDOM} language="javascript" />
                  </div>
                  🔹useReducer() – Manages complex state logic, similar to Redux.
                  <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                      <CodeHighlighter code={Managescomplex} language="javascript" />
                  </div>
                  🔹useMemo() – Optimizes performance by memoizing values.
                  <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                      <CodeHighlighter code={useMemo} language="javascript" />
                  </div>
                  🔹useCallback() – Memoizes functions to prevent unnecessary re-renders.
                  <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                      <CodeHighlighter code={useCallback} language="javascript" />
                  </div>
                  🔹useLayoutEffect() – Similar to useEffect but runs before browser painting. <br />
                  🔹useImperativeHandle() – Customizes ref behavior when using forwardRef(). <br />
                  🔹useDebugValue() – Custom debugging hook for developer tools. <br />
                  <Paragraph type="para">🚀 Summary:</Paragraph>
                  React Hooks simplify state management and lifecycle logic in functional components, making them powerful and easy to use. 🎯
                  
        </Paragraph>
                  
        
        
        
      



    </div>
  );
}

export default Basic ;


