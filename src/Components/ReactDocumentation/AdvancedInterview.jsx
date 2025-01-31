import React from "react";
import clsx from "clsx";
import { baseParagraphClasses } from "../utils/ClassNames";
import CodeHighlighter from "../documentation/CodeHighlighter";
import ReactRouterCoding from "./ReactRouterCoding";

function Paragraph({ children, type = "question", additionalClasses = "" }) {
  const paragraphClass = clsx(baseParagraphClasses[type], additionalClasses);
  return <p className={paragraphClass}>{children}</p>;
}

function AdvancedInterview () {
  const {ReactPortals, UseReactPortals, InstallationReact, SetupCodeSplitting, SetupLazyLoading, ConcurrentMode, SimplerCode, WrapComponents, ClientSide, ServerSide, InstallNextjs, CreateaPage, improveSSR, severalbenefits, SuspensecODE, SuspenseinReact, CodeReusability, FolderStructure, DeprecationWarnings, ReactmemoCode,useCallbackCode, useMemoCode, PureComponentCode, DebouncingCode, ThrottlingCode, PropTypesCode, KeyApproaches, ReducerFunction, UseBuiltinHooks } = ReactRouterCoding();
  return (
    <div className="bg-[#101C28] p-2">

        <Paragraph type="heading">Step 4: Advanced Interview Questions Of React</Paragraph> <br />

        {/* {/* Question 36 */}

        <Paragraph>36. What are React portals, and when should you use them?  </Paragraph>
        <Paragraph type="answer">
                React portals provide a way to render children into a DOM node that exists outside the hierarchy of the parent component. This can be especially useful for certain scenarios where you need to break out of the typical parent-child hierarchy for rendering.
                <Paragraph type="para">How React Portals Work:</Paragraph>
                🔹Creating a Portal: You use the ReactDOM.createPortal method to create a portal. This method takes two arguments: the JSX you want to render and the DOM node you want to render it into.
                <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                    <CodeHighlighter code={ReactPortals} language="javascript" />
                </div>
                In this example, the content of PortalComponent will be rendered inside the DOM element with the ID portal-root, which is outside the usual React component hierarchy.
                <Paragraph type="para">When to Use React Portals:</Paragraph>
                🔹Modals and Dialogs: Portals are commonly used to render modals, dialogs, or popups. These elements need to appear above the main application content and often need to escape the parent component's CSS styling and layout.
                <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                    <CodeHighlighter code={UseReactPortals} language="javascript" />
                </div>
                🔹Tooltips and Popovers: Similar to modals, tooltips and popovers often need to be rendered outside the normal parent component hierarchy to avoid clipping and positioning issues. <br />
                🔹Fixed Position Elements: Elements that need to be fixed in place, regardless of scroll or layout changes, can benefit from being rendered in a portal. <br />
                🔹Avoiding Overflow and Z-Index Issues: Rendering elements outside their parent components can help avoid issues related to CSS overflow and z-index stacking contexts.
                <Paragraph type="para">Key Points:</Paragraph>
                🔹Isolation: Portals allow you to render elements in a different part of the DOM while keeping them logically associated with their parent component. <br />
                🔹Event Bubbling: Even though the portal content is rendered outside the parent hierarchy, events within the portal still bubble up through the React component tree as if they were in the original hierarchy. <br />
                🔹Flexibility: Portals provide a flexible way to manage complex UI structures, especially for elements that need to overlay other content. <br />
                React portals are a powerful tool for creating complex and interactive UI elements that need to escape the constraints of the parent component hierarchy, making them ideal for modals, tooltips, and other overlay elements.
        </Paragraph> <br />

        {/* {/* Question 37 */}

        <Paragraph>37. What is code-splitting, and how do you implement it in React?  </Paragraph>
        <Paragraph type="answer">
                Code-splitting is a technique used to break down your code into smaller chunks, which can be loaded on demand. This improves the performance of your React application by reducing the initial load time.
                <Paragraph type="para">Implementation Example:</Paragraph>
                You can implement code-splitting in React using dynamic import() and React's React.lazy along with Suspense.
                🔹Install React Router (if needed):
                <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                    <CodeHighlighter code={InstallationReact} language="javascript" />
                </div>
                🔹Setup Code-Splitting:
                <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                    <CodeHighlighter code={SetupCodeSplitting} language="javascript" />
                </div>
                <Paragraph type="para">Key Points:</Paragraph>
                🔹React.lazy: Used to dynamically import components. <br />
                🔹Suspense: Displays a fallback (e.g., loading spinner) while the component is being loaded.
        </Paragraph> <br />
        {/* {/* Question 38 */}

        <Paragraph>38. What is code-splitting, and how do you implement it in React?  </Paragraph>
        <Paragraph type="answer">
                What is code-splitting, and how do you implement it in React? Answer will be short with an example
                Code-splitting is a technique used to split your code into smaller chunks, which can be loaded on demand. This helps improve the performance of your React application by reducing the initial load time.
                <Paragraph type="para">Implementation Example:</Paragraph>
                🔹Setup Code-Splitting:
                <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                    <CodeHighlighter code={SetupCodeSplitting} language="javascript" />
                </div>
                <Paragraph type="para">Key Points:</Paragraph>
                🔹React.lazy: Used for dynamic imports of components. <br />
                🔹Suspense: Displays a fallback (like a loading spinner) while the component is being loaded.
        </Paragraph> <br />

        {/* {/* Question 39 */}

        <Paragraph>39. Explain lazy loading and how you can implement it in React.  </Paragraph>
        <Paragraph type="answer">
                Lazy loading is a technique that delays the loading of non-essential resources until they are needed. This helps improve the performance of your application by reducing the initial load time.
                <Paragraph type="para">Implementation Example:</Paragraph>
                In React, you can implement lazy loading using React.lazy and Suspense.
                🔹Setup Lazy Loading:
                <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                    <CodeHighlighter code={SetupLazyLoading} language="javascript" />
                </div>
                <Paragraph type="para">Key Points:</Paragraph>
                🔹React.lazy: Used to dynamically import components. <br />
                🔹Suspense: Displays a fallback (e.g., loading spinner) while the component is being loaded.
        </Paragraph> <br />

        {/* {/* Question 40 */}

        <Paragraph>40. What is Concurrent Mode in React, and what are its benefits?  </Paragraph>
        <Paragraph type="answer">
                Concurrent Mode in React is a set of new features that help React apps stay responsive and gracefully adjust to the user's device capabilities and network speed. It allows React to work on multiple tasks at the same time, pausing and resuming them as needed.
                <Paragraph type="para">Benefits:</Paragraph>
                🔹Improved User Experience: Keeps the app responsive even during heavy computations.<br />
                🔹Better Load Management: Prioritizes urgent tasks (like user input) over less urgent tasks. <br />
                🔹Simpler Code Splitting: Integrates seamlessly with features like lazy loading.
                <Paragraph type="para">Example:</Paragraph>
                <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                    <CodeHighlighter code={ConcurrentMode} language="javascript" />
                </div>
                Concurrent Mode allows React to break rendering work into chunks and spread it out over multiple frames, ensuring a smooth user experience.
        </Paragraph> <br />

        {/* {/* Question 41 */}

        <Paragraph>41. How do you implement Error Boundaries in React?  </Paragraph>
        <Paragraph type="answer">
                Error Boundaries are React components that catch JavaScript errors anywhere in their child component tree, log those errors, and display a fallback UI instead of the component tree that crashed. They help prevent the entire application from crashing due to errors in a single component.
                <Paragraph type="para">Implementation Example:</Paragraph>
                🔹Simpler Code Splitting: Integrates seamlessly with features like lazy loading.
                <Paragraph type="para">Example:</Paragraph>
                <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                    <CodeHighlighter code={SimplerCode} language="javascript" />
                </div>
                🔹Wrap Components with the Error Boundary:
                <Paragraph type="para">Example:</Paragraph>
                <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                    <CodeHighlighter code={WrapComponents} language="javascript" />
                </div>
                <Paragraph type="para">Key Points:</Paragraph>
                🔹getDerivedStateFromError: Updates state so the next render shows the fallback UI. <br />
                🔹componentDidCatch: Logs the error information. <br />
                This setup ensures that any errors in MyComponent will be caught by ErrorBoundary, preventing the entire application from crashing.
        </Paragraph> <br />

        {/* {/* Question 42 */}

        <Paragraph>42. What are the differences between Client-Side Rendering (CSR) and Server-Side Rendering (SSR)? </Paragraph>
        <Paragraph type="answer">
                Client-Side Rendering (CSR) and Server-Side Rendering (SSR) are two different approaches to rendering web pages.
                <Paragraph type="para">Client-Side Rendering (CSR):</Paragraph>
                🔹How It Works: The browser downloads a minimal HTML file, JavaScript, and CSS. The JavaScript then executes in the browser to generate and manipulate the DOM.<br />
                🔹Example: A React app where all content is rendered using JavaScript on the client-side.
                <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                    <CodeHighlighter code={ClientSide} language="javascript" />
                </div>
                <Paragraph type="para">Server-Side Rendering (SSR):</Paragraph>
                🔹How It Works: The server generates the full HTML for the page, which is then sent to the client. The browser displays the fully rendered HTML, and JavaScript takes over for any further interactions.<br />
                🔹Example: Using Next.js(a React framework) for SSR.
                <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                    <CodeHighlighter code={ServerSide} language="javascript" />
                </div>
                <Paragraph type="para">Key Differences:</Paragraph>
                🔹CSR: Faster initial load for subsequent navigation, but slower initial load.<br />
                🔹SSR: Faster initial load, better for SEO, but can be slower for subsequent interactions.
                
        </Paragraph>  <br />

        {/* {/* Question 43 */}

        <Paragraph>43. What is Server-Side Rendering (SSR) in React, and how does it work? </Paragraph>
        <Paragraph type="answer">
                Server-Side Rendering (SSR) in React is a technique where the server renders the initial HTML of a React component and sends it to the client. This allows for faster initial page loads and better SEO.
                <Paragraph type="para">How It Works:</Paragraph>
                🔹The server receives a request and renders the React components into an HTML string.<br />
                🔹The server sends the fully rendered HTML to the client. <br />
                🔹The client receives the HTML and displays it. React then takes over and makes the page interactive (hydration).
                <Paragraph type="para">Example with Next.js:</Paragraph>
                🔹Install Next.js:
                <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                    <CodeHighlighter code={InstallNextjs} language="javascript" />
                </div>
                🔹Create a Page:
                <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                    <CodeHighlighter code={CreateaPage} language="javascript" />
                </div>
                <Paragraph type="para">Key Points:</Paragraph>
                🔹Faster Initial Load: HTML is pre-rendered on the server.  <br />
                🔹Better SEO: Search engines can index the content easily.
        </Paragraph> <br />

        {/* {/* Question 44 */}

        <Paragraph>44. How does Next.js improve SSR and static generation in React applications? </Paragraph>
        <Paragraph type="answer"> 
                Next.js improves Server-Side Rendering (SSR) and static generation in React applications by offering: <br />
                🔹Automatic Static Optimization: Combines SSR and static generation, creating static pages where possible for better performance.<br />
                🔹Hybrid Rendering: Allows you to mix SSR and static generation within the same application. <br />
                🔹Easy Data Fetching: Built-in methods like getServerSideProps for SSR and getStaticProps for static generation simplify data fetching.<br />
                🔹Fast Refresh: Provides an improved development experience with instant feedback. <br />
                🔹Built-in Routing: Simplifies navigation with file-based routing.
                <Paragraph type="para">Example:</Paragraph>
                <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                    <CodeHighlighter code={improveSSR} language="javascript" />
                </div>
                Next.jsenhances performance and developer experience by automating and optimizing rendering processes.
        </Paragraph> <br />

         {/* {/* Question 45 */}

         <Paragraph>45. What are the benefits of using Next.js over a standard React app? </Paragraph>
        <Paragraph type="answer">
                Next.js offers several benefits over a standard React app: <br />
                🔹Server-Side Rendering (SSR): Enhances performance and SEO by pre-rendering pages on the server.<br />
                🔹Static Site Generation (SSG): Creates optimized static pages at build time for faster load times. <br />
                🔹Built-in Routing: Simplifies navigation with file-based routing, no need for additional libraries.<br />
                🔹API Routes: Enables the creation of serverless functions as API endpoints directly within the app. <br />
                🔹Automatic Code Splitting: Optimizes performance by splitting code automatically, loading only what's needed. <br />
                🔹CSS and Image Optimization: Provides built-in support for CSS and automatic image optimization.
                <Paragraph type="para">Example:</Paragraph>
                <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                    <CodeHighlighter code={severalbenefits} language="javascript" />
                </div>
                Next.jsenhances performance, SEO, and developer experience, making it a powerful choice for modern web applications.
        </Paragraph> <br />

        {/* {/* Question 46 */}

        <Paragraph>46. What are Suspense and Concurrent Mode in React? </Paragraph>
        <Paragraph type="answer">
                Suspense and Concurrent Mode are advanced features in React that enhance performance and user experience.
                <Paragraph type="para">Suspense:</Paragraph>
                🔹Purpose: Allows you to handle loading states declaratively. It lets you wait for some code to load (like components or data) and specify a fallback to show during the wait.<br />
                🔹Example:
                <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                    <CodeHighlighter code={SuspensecODE} language="javascript" />
                </div>
                <Paragraph type="para">Concurrent Mode:</Paragraph>
                🔹Purpose: Enables React to work on multiple tasks simultaneously, improving responsiveness. It allows React to interrupt and pause rendering to prioritize urgent updates.<br />
                🔹Benefits: Keeps the app responsive during heavy computations, handles large trees efficiently, and improves the user experience.
        </Paragraph> <br />

        {/* {/* Question 47 */}

        <Paragraph>47. How do you handle asynchronous data with Suspense in React? </Paragraph>
        <Paragraph type="answer">
                Handling Asynchronous Data with Suspense in React involves using Suspense in combination with a data-fetching library that supports Suspense, like react-fetch.
                <Paragraph type="para">How It Works:</Paragraph>
                🔹Wrap Components with Suspense: Use the Suspense component to wrap parts of your UI that will rely on asynchronous data.<br />
                🔹Use Data-Fetching Library: Use a library that integrates with Suspense, like react-fetch, to manage asynchronous data fetching. <br />
                🔹Example:
                <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                    <CodeHighlighter code={SuspenseinReact} language="javascript" />
                </div>
                <Paragraph type="para">Key Points:</Paragraph>
                🔹PSuspense: Provides a fallback UI while loading.<br />
                🔹Data Fetching: Uses a library compatible with Suspense. <br />
                This approach allows you to handle asynchronous data gracefully and improve the user experience.
        </Paragraph> <br />

         {/* {/* Question 48 */}

         <Paragraph>48. What are custom hooks in React, and why would you use them? </Paragraph>
        <Paragraph type="answer">
                Custom hooks in React are JavaScript functions that start with use and allow you to reuse stateful logic across multiple components.
                <Paragraph type="para">Why Use Them:</Paragraph>
                🔹Code Reusability: Share logic between components without duplicating code.<br />
                🔹Separation of Concerns: Encapsulate related logic in a single hook for better readability and maintainability.<br />
                🔹Simplify Components: Keep component code clean and focused by moving complex logic to custom hooks. <br />
                🔹Example:
                <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                    <CodeHighlighter code={CodeReusability} language="javascript" />
                </div>
                This custom hook, useFetchData, encapsulates the data fetching logic and can be reused in any component.
        </Paragraph> <br />

        {/* {/* Question 49 */}

        <Paragraph>49. What are the best practices for structuring a large React project?</Paragraph>
        <Paragraph type="answer">
                Best Practices for Structuring a Large React Project:
                🔹Feature-Based Folder Structure: Group files by feature/module rather than type.<br />
                <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                    <CodeHighlighter code={FolderStructure} language="javascript" />
                </div>
                🔹Component Organization: Divide components into presentational (UI) and container (logic) components.<br />
                🔹Reusable Components: Create a components directory for shared, reusable components. <br />
                🔹Hooks: Store custom hooks in a hooks directory.<br />
                🔹Services: Manage API calls and business logic in a services directory. <br />
                🔹Consistent Naming: Use consistent and descriptive naming conventions for files and folders. <br />
                🔹State Management: Use a state management library like Redux or Context API for global state. <br />
                🔹Testing: Write unit tests for components and integration tests for features.<br />
                🔹Documentation: Document your code and maintain a README for project setup and guidelines. <br />
                These practices ensure maintainability, scalability, and a clean codebase.
        </Paragraph> <br />

        {/* {/* Question 50 */}

        <Paragraph>50. How does the Virtual DOM work in React?</Paragraph>
        <Paragraph type="answer">
                
                Virtual DOM in React is a lightweight representation of the actual DOM. React uses it to efficiently update and render components.
                <Paragraph type="para">How It Works:</Paragraph>
                🔹Virtual Representation: React creates a virtual copy of the DOM.<br />
                🔹Diffing Algorithm: When a component's state or props change, React updates the Virtual DOM first.<br />
                🔹Reconciliation: React compares (diffs) the new Virtual DOM with the previous one to identify changes. <br />
                🔹Minimal Updates: Only the changed parts are updated in the actual DOM, minimizing reflows and repaints.
                <Paragraph type="para">Benefits:</Paragraph>
                🔹Performance: Reduces the number of direct DOM manipulations, improving performance.<br />
                🔹Efficiency: Ensures that updates are minimal and optimized.
        </Paragraph> <br />

        {/* {/* Question 51 */}

        <Paragraph>51. How does React’s reconciliation algorithm work?</Paragraph>
        <Paragraph type="answer">
                React’s Reconciliation Algorithm is a process that determines how the Virtual DOM updates the actual DOM to ensure optimal performance and minimal updates.
                <Paragraph type="para">How It Works:</Paragraph>
                🔹Diffing: React compares the new Virtual DOM tree with the previous one to identify changes.<br />
                🔹Element Types: If elements are of different types (e.g., &LT;div&GT; vs &LT;span&GT;), React re-renders the entire subtree.<br />
                🔹Keys: For lists, React uses keys to track items and efficiently update them, minimizing reordering.<br />
                🔹Minimal Updates: Only the nodes that have changed are updated in the actual DOM.
                <Paragraph type="para">Benefits:</Paragraph>
                🔹Efficiency: Minimizes the number of DOM operations.<br />
                🔹Performance: Reduces reflows and repaints, enhancing performance.
        </Paragraph> <br />

        {/* {/* Question 52 */}

        <Paragraph>52. Explain how React.StrictMode works and its purpose.</Paragraph>
        <Paragraph type="answer">
                React.StrictMode is a development tool that helps identify potential issues in your application. It doesn't affect the production build but provides additional checks and warnings during development.
                <Paragraph type="para">Purpose:</Paragraph>
                🔹Identify Side Effects: Detects unexpected side effects in your components.<br />
                🔹Deprecation Warnings: Highlights deprecated lifecycle methods and APIs.<br />
                🔹Strict Lifecycle Checks: Ensures that components adhere to recommended practices <br />
                🔹Example:
                <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                    <CodeHighlighter code={DeprecationWarnings} language="javascript" />
                </div>
                By wrapping your application in &LT;React.StrictMode&GT;, you can catch potential issues early and improve the overall quality of your code.
        </Paragraph> <br />

        {/* {/* Question 53 */}

        <Paragraph>53. How do you prevent unnecessary re-renders in React?</Paragraph>
        <Paragraph type="answer">
                Preventing unnecessary re-renders in React can be achieved through several techniques:
                🔹React.memo: Wrap functional components to prevent re-renders when props haven't changed.
                <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                    <CodeHighlighter code={ReactmemoCode} language="javascript" />
                </div>
                🔹useCallback: Memoize callback functions to avoid creating new instances on every render.
                <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                    <CodeHighlighter code={useCallbackCode} language="javascript" />
                </div>
                🔹useMemo: Memoize expensive calculations to prevent re-computing on every render.
                <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                    <CodeHighlighter code={useMemoCode} language="javascript" />
                </div>
                🔹PureComponent: Use React.PureComponent for class components to perform a shallow comparison of props and state.
                <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                    <CodeHighlighter code={PureComponentCode} language="javascript" />
                </div>
                <Paragraph type="para">Key Points:</Paragraph>
                🔹Memoization: Prevents unnecessary re-renders by caching results.<br />
                🔹Shallow Comparison: Ensures components re-render only when necessary.
        </Paragraph> <br />

        {/* {/* Question 54 */}

        <Paragraph>54. Explain how to debounce or throttle a function in React.</Paragraph>
        <Paragraph type="answer">
                Debouncing and throttling are techniques to control the execution of a function to improve performance, especially for events like resizing, scrolling, or typing.
                <Paragraph type="para">Debouncing:</Paragraph>
                🔹Purpose: Delays the execution of a function until a specified time has passed since the last time it was invoked.<br />
                🔹Example:
                <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                    <CodeHighlighter code={DebouncingCode} language="javascript" />
                </div>
                <Paragraph type="para">Throttling:</Paragraph>
                🔹Purpose: Ensures a function is only called once per specified time interval.<br />
                🔹Example:
                <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                    <CodeHighlighter code={ThrottlingCode} language="javascript" />
                </div>
                <Paragraph type="para">Key Points:</Paragraph>
                🔹Debouncing: Delays function execution to reduce excessive calls.<br />
                🔹Throttling: Limits function calls to once per interval to control execution frequency.
        </Paragraph> <br />

        {/* {/* Question 55 */}

        <Paragraph>55. What are prop types, and why are they used in React?</Paragraph>
        <Paragraph type="answer">
                Prop types in React are a way to specify the expected type and shape of props a component should receive. They help catch bugs and ensure that components are used correctly by validating the props passed to them.
                <Paragraph type="para">Why Use Prop Types:</Paragraph>
                🔹Type Checking: Ensures the props are of the correct type, preventing runtime errors.<br />
                🔹Documentation: Provides a clear understanding of what props a component expects.<br />
                🔹Debugging: Helps catch and debug issues early during development. <br />
                🔹Example:
                <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                    <CodeHighlighter code={ PropTypesCode} language="javascript" />
                </div>
                In this example, PropTypes ensures that name is a string and age is a number, both required for MyComponent.
        </Paragraph> <br />

        {/* {/* Question 56 */}

        <Paragraph>56. How do you manage side effects in a React app?</Paragraph>
        <Paragraph type="answer">
                Managing Side Effects in a React App involves using hooks to handle operations that interact with the outside world or   require delayed execution.
                <Paragraph type="para">Key Approaches:</Paragraph>
                useEffect Hook:
                🔹Executes side effects such as fetching data, updating the DOM, or subscribing to events.<br />
                🔹Runs after the component renders.<br />
                🔹Debugging: Helps catch and debug issues early during development. <br />
                🔹Example:
                <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                    <CodeHighlighter code={KeyApproaches} language="javascript" />
                </div>
                <Paragraph type="para">Summary:</Paragraph>
                🔹useEffect: Primary tool for managing side effects in functional components.<br />
                🔹Cleanup: Use the return function within useEffect for cleanup tasks. <br />
                Using hooks ensures that side effects are handled efficiently and cleanly within React components.
        </Paragraph> <br />

        {/* {/* Question 57 */}

        <Paragraph>57. How does the useReducer Hook work, and when would you use it?</Paragraph>
        <Paragraph type="answer">
                useReducer is a React hook used for managing complex state logic in components, similar to how Redux manages state. It’s particularly useful when the state depends on previous states or when the logic is too complex for useState.
                <Paragraph type="para">How It Works:</Paragraph>
                🔹Reducer Function: Defines how state transitions occur based on actions.<br />
                🔹useReducer Hook: Accepts the reducer function and an initial state, returning the current state and a dispatch function to trigger state changes. <br />
                🔹Example:
                <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                    <CodeHighlighter code={ReducerFunction} language="javascript" />
                </div>
                <Paragraph type="para">Key Points:</Paragraph>
                🔹useReducer: Handles complex state logic.<br />
                🔹Reducer Function: Manages state transitions based on action types. <br />
                Use useReducer when state logic involves multiple sub-values or is complex enough to warrant a more structured approach.
        </Paragraph> <br />

        {/* {/* Question 58 */}

        <Paragraph>58. Explain how to create and use custom hooks.</Paragraph>
        <Paragraph type="answer">
                Custom Hooks in React are reusable functions that encapsulate logic and state management. They allow you to share logic across components without duplicating code.
                <Paragraph type="para">Creating a Custom Hook:</Paragraph>
                🔹Define the Hook: Create a JavaScript function that starts with use.<br />
                🔹Use Built-in Hooks: Utilize React's built-in hooks (like useState, useEffect) inside your custom hook. <br />
                🔹Example:
                <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                    <CodeHighlighter code={UseBuiltinHooks} language="javascript" />
                </div>
                <Paragraph type="para">Key Points:</Paragraph>
                🔹Custom Hooks: Encapsulate reusable logic.<br />
                🔹Reuse Logic: Share stateful logic across multiple components. <br />
                Custom hooks make your code more modular and maintainable.
        </Paragraph>
        
        
        
      



    </div>
  );
}

export default AdvancedInterview ;


