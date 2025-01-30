import React from "react";
import clsx from "clsx";
import { baseParagraphClasses } from "../utils/ClassNames";
import CodeHighlighter from "../documentation/CodeHighlighter";
import ReactCoding from "./ReactCoding";

function Paragraph({ children, type = "question", additionalClasses = "" }) {
  const paragraphClass = clsx(baseParagraphClasses[type], additionalClasses);
  return <p className={paragraphClass}>{children}</p>;
}

function Intermediate () {
  const {ImportuseState, DeclareState, UpdateState, simplecounter, multipleState, StateUpdates, BasicUsage, FetchingData, SubscribingEvents, HandleResponse, anHOC, CreateContext, ProvideContext, ConsumeContext, ExampleScenario, PropsDrilling, ContextAPIi, CreatingRefs, UsingcreateRef, useRefHook, createRefMethod, useReactmemo, CustomComparison, Constructor, getDerived, renderCode, componentDidMount, shouldComponentUpdate, getSnapshotBeforeUpdate, componentDidUpdate, componentWillUnmount, DidMountCode, WillUnmount, Dependencies, WithoutuseCallback, WithuseCallback, useMemoHook, Consideranexample, controlledInput, withValidation } = ReactCoding();
  return (
    <div className="bg-[#101C28] p-2">

        <Paragraph type="heading">Step 2: Intermediate Interview Questions Of React: </Paragraph> <br />

        {/* {/* Question 16 */}

        <Paragraph>16. Explain the useState Hook.  </Paragraph>
        <Paragraph type="answer">
                  The useState hook is a fundamental React hook that allows you to add state to your functional components. It lets you declare a state variable and a function to update that state. This is particularly useful for managing dynamic data that changes over time, such as user input, toggle states, counters, and more. <br />
                  Here's a detailed breakdown of how to use the useState hook:
                  <Paragraph type="para">Basic Usage:</Paragraph>
                  🔹Import useState: First, import the useState hook from React.
                  <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                      <CodeHighlighter code={ImportuseState} language="javascript" />
                  </div>
                  🔹Declare State Variable: Inside your functional component, call useState to declare a state variable. The useState hook takes an initial state value as an argument and returns an array containing the current state and a function to update it.
                  <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                      <CodeHighlighter code={DeclareState} language="javascript" />
                  </div>
                  In this example, count is the state variable, and setCount is the function that updates the count value. The initial state is set to 0.
                  🔹Update State: You can update the state by calling the setter function (in this case, setCount) and passing the new state value.
                  <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                      <CodeHighlighter code={UpdateState} language="javascript" />
                  </div>
                  <Paragraph type="para">Example:</Paragraph>
                  Here's a complete example of a simple counter component using the useState hook:
                  <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                      <CodeHighlighter code={simplecounter} language="javascript" />
                  </div>
                  <Paragraph type="para">Key Points:</Paragraph>
                  🔹Initial State: The argument passed to useState (0 in the example) is the initial state value. <br />
                  🔹State Variable: The first element of the array returned by useState is the current state value (count). <br />
                  🔹Setter Function: The second element is the function that updates the state (setCount). <br />
                  🔹Re-renders: Calling the setter function causes the component to re-render with the new state value.
                  <Paragraph type="para">Handling Multiple State Variables:</Paragraph>
                  You can use useState multiple times in the same component to handle different state variables:
                  <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                      <CodeHighlighter code={multipleState} language="javascript" />
                  </div>
                  <Paragraph type="para">State Updates and Functional Updates:</Paragraph>
                  When updating state based on the previous state, it's recommended to use the functional form of the setter function:
                  <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                      <CodeHighlighter code={StateUpdates} language="javascript" />
                  </div>
                  This ensures that the state updates correctly even when multiple updates are queued.
                  <Paragraph type="para">Conclusion:</Paragraph>
                  The useState hook is a powerful tool for managing state in functional components, making your React code more concise and readable. By understanding how to use this hook effectively, you can create dynamic, responsive components that enhance user interactions.
        </Paragraph> <br />

        {/* {/* Question 17 */}

        <Paragraph>17. How does the useEffect Hook work?  </Paragraph>
        <Paragraph type="answer">
                  The useEffect hook is used to perform side effects in functional components, such as fetching data, directly manipulating the DOM, and subscribing to events. It runs after the component renders, and can be set to run on specific conditions.
                  <Paragraph type="para">Basic Usage:</Paragraph>
                  <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                      <CodeHighlighter code={BasicUsage} language="javascript" />
                  </div>
                  <Paragraph type="para">Key Points:</Paragraph>
                  🔹Effect Function: The function passed to useEffect runs after the component renders. <br />
                  🔹Dependency Array: The second argument is an array of dependencies. The effect runs only when these dependencies change. If omitted, the effect runs after every render. <br />
                  🔹Cleanup Function: Optionally, you can return a function from the effect function to clean up resources (e.g., removing event listeners) before the component unmounts or the effect runs again.
                  <Paragraph type="para">Example Scenarios:</Paragraph>
                  📌Fetching Data:
                  <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                      <CodeHighlighter code={FetchingData} language="javascript" />
                  </div>
                  📌Subscribing to Events:
                  <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                      <CodeHighlighter code={SubscribingEvents} language="javascript" />
                  </div>
                  The useEffect hook is a versatile and essential tool for managing side effects in functional components, enabling you to handle various scenarios effectively.
        </Paragraph> <br />

        {/* {/* Question 18 */}

        <Paragraph>18. How can you make an API call in React?  </Paragraph>
        <Paragraph type="answer">
                  Making API calls in React is straightforward and can be done using various methods, such as the fetch API, axios, or other libraries. Here's a basic example using the fetch API with the useEffect and useState hooks.
                  <Paragraph type="para">Step-by-Step Guide:</Paragraph>
                  🔹 Setup State and Effect: You'll need to use the useState hook to store the data fetched from the API and the useEffect hook to make the API call. <br />
                  🔹Make the API Call: Use the fetch API inside the useEffect hook to make the request. <br />
                  🔹Handle Response: Process the response, update the state, and handle any errors.
                  <Paragraph type="para">📌Example:</Paragraph>
                  <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                      <CodeHighlighter code={HandleResponse} language="javascript" />
                  </div>
                  <Paragraph type="para">Key Points:</Paragraph>
                  🔹State Management: The data state stores the fetched data, loading state indicates whether the data is being fetched, and error state handles any errors during the API call. <br />
                  🔹Effect Hook: The useEffect hook runs the fetch operation after the initial render. <br />
                  🔹Async/Await: The fetchData function is defined as an asynchronous function using async/await to handle the asynchronous fetch call. <br />
                  🔹Error Handling: Errors are caught in the catch block and stored in the error state. <br />
                  🔹Conditional Rendering: Based on the loading and error states, the component renders different content (loading message, error message, or the fetched data). <br />
                  Using this pattern, you can make API calls and handle the fetched data effectively in your React components.
        </Paragraph> <br />

        {/* {/* Question 19 */}

        <Paragraph>19. What are Higher-Order Components (HOCs)? Give an example.  </Paragraph>
        <Paragraph type="answer">
                    What are Higher-Order Components (HOCs)? Give an example.
                    Higher-Order Components (HOCs) are advanced techniques in React for reusing component logic. An HOC is a function that takes a component and returns a new component, enhancing it with additional functionality. They are used to abstract common logic and promote code reuse.
                    <Paragraph type="para">Concept:</Paragraph>
                    An HOC is essentially a pattern that enables you to share behavior across multiple components without repeating code. It's not a part of the React API, but a pattern that emerges from the compositional nature of React.
                    <Paragraph type="para">📌Example:</Paragraph>
                    Let's create an HOC that provides a simple logging functionality to a component:
                    <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                      <CodeHighlighter code={anHOC} language="javascript" />
                  </div>
                  <Paragraph type="para">Explanation:</Paragraph>
                  🔹withLogger HOC: This is the HOC that takes WrappedComponent (a component to be enhanced) as an argument and returns a new component class that logs a message when it mounts. <br />
                  🔹HelloWorld Component: This is a simple component that displays a "Hello, World!" message. <br />
                  🔹HelloWorldWithLogger: This is the enhanced component created by passing HelloWorld to the withLogger HOC. It now includes the logging functionality.
                  <Paragraph type="para">Key Points:</Paragraph>
                  🔹Code Reusability: HOCs promote code reuse by encapsulating common logic and sharing it across multiple components.<br />
                  🔹Props Handling: HOCs pass props down to the wrapped component to ensure it works seamlessly with any props it receives. <br />
                  🔹Composition: HOCs can be composed, meaning you can apply multiple HOCs to a single component to enhance it with various behaviors.<br />
        </Paragraph> <br />

         {/* {/* Question 20 */}

         <Paragraph>20. Explain the use of React Context API.  </Paragraph>
        <Paragraph type="answer">
                  The React Context API provides a way to share values between components without having to explicitly pass props through every level of the component tree. This is particularly useful for global data that needs to be accessed by many components, such as user authentication, theme, or language settings.
                  <Paragraph type="para">How It Works:</Paragraph>
                  🔹Create a Context: Use the React.createContext method to create a context object. This object comes with a Provider and a Consumer component. 
                  <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                      <CodeHighlighter code={CreateContext} language="javascript" />
                  </div>
                  🔹Provide the Context: Wrap your component tree with the Provider component and pass the value you want to share as a prop.
                  <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                      <CodeHighlighter code={ProvideContext} language="javascript" />
                  </div>
                  🔹Consume the Context: Use the Consumer component or the useContext hook to access the shared value in your components.
                  <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                      <CodeHighlighter code={ConsumeContext} language="javascript" />
                  </div>
                  <Paragraph type="para">Key Points:</Paragraph>
                  🔹Provider: The Provider component supplies the context value to its child components. It accepts a value prop, which will be made available to all Consumer components. <br />
                  🔹Consumer: The Consumer component consumes the context value. It uses the render prop pattern to provide the context value to its children.<br />
                  🔹useContext: The useContext hook is a more modern and concise way to consume context values in functional components.
                  <Paragraph type="para">📌Example Scenario:</Paragraph>
                  Imagine you have a theme that needs to be accessed by multiple components in your application. Instead of passing the theme through every component as a prop, you can use the Context API to share it globally.
                  <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                      <CodeHighlighter code={ExampleScenario} language="javascript" />
                  </div>
        </Paragraph> <br />

        {/* {/* Question 21 */}

        <Paragraph>21. How does the Context API differ from props drilling?  </Paragraph>
        <Paragraph type="answer">
                    The React Context API and props drilling are two approaches to sharing data between components, but they work differently and are suitable for different scenarios.
                    <Paragraph type="para">Props Drilling:</Paragraph>
                    🔹Definition: Props drilling refers to the process of passing data
                    from a parent component to deeply nested child components through multiple levels of intermediate components. <br />
                    🔹Usage: It’s useful when you have a simple component tree with few levels of nesting and limited shared state. <br />
                    🔹Example:
                    <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                      <CodeHighlighter code={PropsDrilling} language="javascript" />
                    </div>
                    🔹Pros:
                    <ul className="px-4 list-disc list-inside">
                        <li>Simple and straightforward for small component trees.</li>
                        <li>Explicit data flow makes it easy to track where data is coming from.</li>
                    </ul>
                    🔹Cons:
                    <ul className="px-4 list-disc list-inside">
                        <li>Becomes cumbersome and hard to maintain with deeply nested components.</li>
                        <li>Intermediate components need to pass props, even if they don't use them.</li>
                    </ul>
                    <Paragraph type="para">React Context API:</Paragraph>
                    🔹Definition: The Context API provides a way to share data across the entire component tree without passing props down manually at every level.
                    🔹Usage: It’s ideal for global or shared state like themes, user authentication, and settings.
                    🔹Example:
                    <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                      <CodeHighlighter code={ContextAPIi} language="javascript" />
                    </div>
        </Paragraph> <br />

        {/* {/* Question 22 */}

        <Paragraph>22. What are refs, and when should you use them in React?  </Paragraph>
        <Paragraph type="answer">
                    In React, refs (short for references) provide a way to access and interact with DOM elements directly. They allow you to get a reference to a DOM node or a React element created in the render method, enabling you to perform imperative actions.
                    <Paragraph type="para">Creating Refs:</Paragraph>
                    You can create a ref using the useRef hook for functional components or React.createRef for class components.
                    🔹Using useRef in Functional Components:
                    <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                      <CodeHighlighter code={CreatingRefs} language="javascript" />
                    </div>
                    🔹Using createRef in Class Components::
                    <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                      <CodeHighlighter code={UsingcreateRef} language="javascript" />
                    </div>
                    <Paragraph type="para">When to Use Refs:</Paragraph>
                    🔹Managing Focus: You can use refs to manually focus on an input element when an event occurs, such as a button click. <br />
                    🔹Triggering Animations: Refs are helpful for triggering animations on specific DOM nodes. <br />
                    🔹Accessing DOM Elements: When you need to read values or dimensions of DOM elements directly, refs can be used. <br />
                    🔹Third-Party DOM Libraries: If you're integrating with a third-party DOM library that requires direct DOM manipulation, refs can be handy.
                    <Paragraph type="para">Avoiding Overuse:</Paragraph>
                    While refs are powerful, it's generally best to avoid using them unless absolutely necessary. React's declarative approach is typically more effective for managing state and behavior. Overusing refs can lead to code that's harder to understand and maintain.

        </Paragraph> <br />

         {/* {/* Question 23 */}

         <Paragraph>23. What is the useRef Hook, and how is it different from createRef?  </Paragraph>
        <Paragraph type="answer">
                    The useRef hook and createRef method in React are both used to create references to DOM elements or React elements, but they serve different purposes and are used in different contexts.
                    <Paragraph type="para">useRef Hook:</Paragraph>
                    The useRef hook is used in functional components to create a mutable reference that persists across re-renders. It returns an object with a current property that can be assigned and read.
                    🔹Usage in Functional Components:
                    <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                      <CodeHighlighter code={useRefHook} language="javascript" />
                    </div>
                    <Paragraph type="para">createRef Method:</Paragraph>
                    The createRef method is used in class components to create a reference. Similar to useRef, it returns an object with a current property. It is typically used in the constructor of a class component.
                    🔹Usage in Class Components:
                    <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                      <CodeHighlighter code={createRefMethod} language="javascript" />
                    </div>
                    <Paragraph type="para">Key Differences:</Paragraph>
                    🔹Component Type: useRef is used in functional components, while createRef is used in class components.<br />
                    🔹Triggering Animations: Refs are helpful for triggering animations on specific DOM nodes. <br />
                    🔹Persistence: useRef creates a mutable reference that persists across re-renders of the functional component. This makes it useful for keeping any mutable value, like the previous state, throughout the component lifecycle. <br />
                    🔹Usage: createRef is typically used to reference a single element and is recreated each time the component re-renders, while useRef maintains the same reference across renders.
                    <Paragraph type="para">When to Use:</Paragraph>
                    🔹useRef: When you need a persistent reference in a functional component. It's also useful for storing any mutable value that shouldn't trigger a re-render when updated. <br />
                    🔹createRef: When working with class components and you need to reference a DOM element or a child component. <br />
                    Understanding the differences and appropriate use cases for useRef and createRef helps you manage refs efficiently in both functional and class-based components.

        </Paragraph> <br />

         {/* {/* Question 24 */}

         <Paragraph>24. What is the purpose of React.memo?  </Paragraph>
        <Paragraph type="answer">
                    React.memo is a higher-order component used to optimize the performance of functional components by preventing unnecessary re-renders. It works by memoizing the component, meaning it will only re-render if the props passed to it have changed.
                    <Paragraph type="para">Purpose:</Paragraph>
                    The primary purpose of React.memo is to enhance performance by reducing the number of renders. This can be particularly useful in components that render large lists, complex UIs, or expensive computations.
                    <Paragraph type="para">How It Works:</Paragraph>
                    🔹Memoization: When a component is wrapped with React.memo, React memoizes the result. If the props of the component do not change between renders, React skips rendering and reuses the last rendered result. <br />
                    🔹Shallow Comparison: By default, React.memo performs a shallow comparison of the props. If any prop changes, the component re-renders.
                    <Paragraph type="para">Example:</Paragraph>
                    Here's an example of how to use React.memo:
                    <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                      <CodeHighlighter code={useReactmemo} language="javascript" />
                    </div>
                    In this example, ExpensiveComponent will only re-render if the data prop changes.
                    <Paragraph type="para">Custom Comparison Function:</Paragraph>
                    You can provide a custom comparison function to React.memo for more control over the re-rendering behavior:
                    <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                      <CodeHighlighter code={CustomComparison} language="javascript" />
                    </div>
                    In this example, areEqual is a custom comparison function that determines whether the props have changed.
                    <Paragraph type="para">When to Use React.memo:</Paragraph>
                    🔹Performance Optimization: Use React.memo when you have functional components that re-render frequently with the same props, causing unnecessary performance overhead. <br />
                    🔹Pure Components: It's beneficial for components that rely on props and do not have side effects or internal state changes affecting the rendering. <br />
                    React.memo is a powerful tool for optimizing React applications by reducing unnecessary re-renders. By understanding and leveraging memoization, you can improve the performance and efficiency of your components.
        </Paragraph> <br />

        {/* {/* Question 25 */}

        <Paragraph>25. Explain React lifecycle methods.  </Paragraph>
        <Paragraph type="answer">
                    React lifecycle methods are special methods in class components that allow you to run code at specific stages of a component's lifecycle. They can be divided into three main phases: Mounting, Updating, and Unmounting.
                    <Paragraph type="para">1. Mounting:</Paragraph>
                    These methods are called when an instance of a component is being created and inserted into the DOM.
                    🔹constructor(): This is the first method called in the lifecycle of a component. It is used to initialize state and bind event handlers.
                    <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                      <CodeHighlighter code={Constructor} language="javascript" />
                    </div>
                    🔹static getDerivedStateFromProps(): This method is called right before rendering and is used to update the state based on props. It is rarely used.
                    <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                      <CodeHighlighter code={getDerived} language="javascript" />
                    </div>
                    🔹render(): This is the only required method in a class component. It returns the JSX that makes up the component.
                    <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                      <CodeHighlighter code={renderCode} language="javascript" />
                    </div>
                    🔹componentDidMount(): This method is called immediately after the component is inserted into the DOM. It's a good place to initiate network requests or set up any subscriptions.
                    <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                      <CodeHighlighter code={componentDidMount} language="javascript" />
                    </div>
                    <Paragraph type="para">2. Updating: </Paragraph>
                    These methods are called when a component is being re-rendered as a result of changes to either props or state.
                    🔹static getDerivedStateFromProps(): This method is called during both mounting and updating. See the mounting phase for details. <br />
                    🔹shouldComponentUpdate(): This method is called before rendering when new props or state are being received. It allows you to control whether the component should update. By default, it returns true.
                    <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                      <CodeHighlighter code={shouldComponentUpdate} language="javascript" />
                    </div>
                    🔹render(): This method is called during mounting and updating. See the mounting phase for details. <br />
                    🔹getSnapshotBeforeUpdate(): This method is called right before the most recently rendered output is committed to the DOM. It can be used to capture information from the DOM (e.g., scroll position) before it is potentially changed.
                    <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                      <CodeHighlighter code={getSnapshotBeforeUpdate} language="javascript" />
                    </div>
                    🔹componentDidUpdate(): This method is called immediately after updating occurs. It is useful for performing DOM operations or network requests that depend on the component's updated state or props.
                    <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                      <CodeHighlighter code={componentDidUpdate} language="javascript" />
                    </div>
                    <Paragraph type="para">3. Unmounting:</Paragraph>
                    These methods are called when a component is being removed from the DOM.
                    🔹componentWillUnmount(): This method is called immediately before a component is destroyed. It's a good place to clean up any resources, such as invalidating timers, canceling network requests, or removing event listeners.
                    <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                      <CodeHighlighter code={componentWillUnmount} language="javascript" />
                    </div>
                    <Paragraph type="para">Summary:</Paragraph>
                    Lifecycle methods provide fine-grained control over how and when your component interacts with the DOM and other parts of your application. By understanding and using these methods appropriately, you can manage side effects and optimize the performance of your React components.

        </Paragraph> <br />

        {/* {/* Question 26 */}

        <Paragraph>26. What are componentDidMount and componentWillUnmount, and when are they used?  </Paragraph>
        <Paragraph type="answer">
                    componentDidMount and componentWillUnmount are lifecycle methods used in React class components to perform side effects and clean up resources.
                    <Paragraph type="para">componentDidMount:</Paragraph>
                    🔹When It's Called: This method is called immediately after a component is inserted into the DOM. <br />
                    🔹Purpose: It's typically used for tasks such as fetching data, setting up subscriptions, or initializing timers. <br />
                    🔹Example:
                    <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                      <CodeHighlighter code={DidMountCode} language="javascript" />
                    </div>
                    <Paragraph type="para">ccomponentWillUnmount:</Paragraph>
                    🔹When It's Called: This method is called immediately before a component is removed from the DOM.<br />
                    🔹Purpose: It's used to clean up any resources such as invalidating timers, canceling network requests, or removing event listeners to avoid memory leaks.<br />
                    🔹Example:
                    <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                      <CodeHighlighter code={WillUnmount} language="javascript" />
                    </div>
                    <Paragraph type="para">Key Points:</Paragraph>
                    🔹componentDidMount: Use it to perform initializations, fetch data, or set up any long-lasting side effects after the component is rendered to the DOM.<br />
                    🔹componentWillUnmount: Use it to clean up resources and side effects to prevent memory leaks and other potential issues when the component is about to be removed from the DOM.<br />
                    By using these lifecycle methods, you can manage side effects and resource cleanup effectively in your class components, ensuring better performance and maintainability.
        </Paragraph> <br />

        {/* {/* Question 27 */}

        <Paragraph>27. Explain the useCallback Hook and why it is useful.  </Paragraph>
        <Paragraph type="answer">
                    The useCallback hook is a React hook used to memoize functions. It returns a memoized version of the callback function that only changes if one of the dependencies has changed. This can help optimize performance by preventing unnecessary re-creations of functions on every render.
                    <Paragraph type="para">Purpose:</Paragraph>
                    The primary purpose of useCallback is to ensure that a function is not re-created on every render, thus avoiding potential performance issues, especially when passing callbacks to optimized child components that rely on reference equality to prevent unnecessary renders.
                    <Paragraph type="para">How It Works:</Paragraph>
                    🔹Function Memoization: useCallback memoizes the function you pass to it.<br />
                    🔹Dependencies: It takes a dependency array. The function is only re-created if the values in the dependency array change.
                    <Paragraph type="para">Syntax:</Paragraph>
                    <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                      <CodeHighlighter code={Dependencies} language="javascript" />
                    </div>
                    <Paragraph type="para">Example:</Paragraph>
                    Imagine you have a component that renders a list of items, and each item has a button that increments a counter. You want to pass a callback to each button to handle the increment. <br />
                    Without useCallback:
                    <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                      <CodeHighlighter code={WithoutuseCallback} language="javascript" />
                    </div>
                    With useCallback:
                    <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                      <CodeHighlighter code={WithuseCallback} language="javascript" />
                    </div>
                    <Paragraph type="para">Key Points:</Paragraph>
                    🔹Performance Optimization: useCallback helps to optimize performance by memoizing the function and preventing unnecessary re-creations. This is particularly useful when passing callbacks to child components or useEffect dependencies.<br />
                    🔹Reference Equality: It ensures that the same function instance is used across renders unless the dependencies change, which helps in preventing re-renders of memoized child components.<br />
                    🔹Dependency Array: The function will only be re-created if one of the values in the dependency array changes.
                    <Paragraph type="para">Conclusion:</Paragraph>
                    useCallback is a valuable tool for optimizing React applications by memoizing functions and avoiding unnecessary re-renders. It is especially useful in scenarios where callbacks are passed down to child components or used in effects.
        </Paragraph> <br />

        {/* {/* Question 28 */}

        <Paragraph>28. How is the useMemo Hook used in React?  </Paragraph>
        <Paragraph type="answer">
                    The useMemo hook in React is used to memoize the result of a function. It optimizes performance by preventing expensive calculations from being re-executed on every render unless the dependencies have changed.
                    <Paragraph type="para">Purpose:</Paragraph>
                    useMemo helps improve the performance of your application by memoizing the result of a computation, ensuring that the calculation is only done when necessary.
                    <Paragraph type="para">How It Works:</Paragraph>
                    🔹Memoization: useMemo memoizes the result of a function.<br />
                    🔹Dependencies: It takes a dependency array. The function is only re-executed if one of the dependencies changes.
                    <Paragraph type="para">Syntax:</Paragraph>
                    <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                      <CodeHighlighter code={useMemoHook} language="javascript" />
                    </div>
                    <Paragraph type="para">Example:</Paragraph>
                    Consider an example where we have a component that calculates a sum, and the calculation is expensive:
                    <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                      <CodeHighlighter code={Consideranexample} language="javascript" />
                    </div>
                    <Paragraph type="para">Key Points:</Paragraph>
                    🔹Memoized Value: The memoizedValue is only recalculated when a or b change.<br />
                    🔹Performance Optimization: useMemo avoids re-calculating the expensive function on every render unless necessary.<br />
                    🔹Dependencies: The dependency array ensures that the function only runs when the specified dependencies change.
                    <Paragraph type="para">When to Use useMemo:</Paragraph>
                    🔹Expensive Calculations: Use useMemo to memoize results of computationally expensive functions. <br />
                    🔹Pure Components: It's useful for optimizing functional components that depend on expensive calculations. <br />
                    🔹Dependency Management: Ensure that the dependency array includes all variables that the memoized function depends on.
                    <Paragraph type="para">Conclusion:</Paragraph>
                    The useMemo hook is a valuable tool for optimizing performance in React applications by memoizing expensive calculations and avoiding unnecessary re-executions. It helps ensure that your components remain efficient and responsive.
        </Paragraph> <br />

        {/* {/* Question 29 */}

        <Paragraph>29. What are controlled components in forms?  </Paragraph>
        <Paragraph type="answer">
                    Controlled components in React are form elements (like &lt;input&gt;, &lt;textarea&gt;, and &lt;select&gt;) whose values are controlled by the state of the component. This means that the state of the component serves as the "single source of truth" for the form element's value. The form element's value is updated by a state change, and any changes to the form element's value are handled through event handlers that update the state.
                    <Paragraph type="para">How They Work:</Paragraph>
                    🔹Initial State: Set the initial state for the form element.<br />
                    🔹Value Prop: Bind the form element's value prop to the state. <br />
                    🔹Event Handling: The onChange event handler updates the state with the new input value.
                    <Paragraph type="para">Example:</Paragraph>
                    Here's an example of a controlled input component in React:
                    <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                      <CodeHighlighter code={controlledInput} language="javascript" />
                    </div>
                    In this example:
                    🔹State Management: The value state holds the current value of the input.<br />
                    🔹Value Binding: The input's value prop is set to the state variable value. <br />
                    🔹Event Handling: The onChange event handler updates the state with the new input value.
                    <Paragraph type="para">Advantages of Controlled Components:</Paragraph>
                    🔹Single Source of Truth: The component's state serves as the single source of truth for the form element's value, making it easy to understand and manage.<br />
                    🔹Validation and Formatting: Since the value is controlled by the state, you can easily perform validation and formatting on the input value before updating the state.<br />
                    🔹Integration with State: Controlled components integrate seamlessly with other state-driven logic in your application.
                    <Paragraph type="para">Example with Validation:</Paragraph>
                    Here's an example of a controlled input component with validation:
                    <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                      <CodeHighlighter code={withValidation} language="javascript" />
                    </div>
                    In this example, the input value is validated to ensure it does not exceed 10 characters, and an error message is displayed if the validation fails. <br />
                    Controlled components provide a powerful and flexible way to manage form inputs in React, ensuring that your forms are easy to understand, maintain, and integrate with your application's state logic.
        </Paragraph>
        
        
        
      



    </div>
  );
}

export default Intermediate ;


