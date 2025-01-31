import React from "react";
import clsx from "clsx";
import { baseParagraphClasses } from "../utils/ClassNames";
import CodeHighlighter from "../documentation/CodeHighlighter";
import ReactRouterCoding from "./ReactRouterCoding";

function Paragraph({ children, type = "question", additionalClasses = "" }) {
  const paragraphClass = clsx(baseParagraphClasses[type], additionalClasses);
  return <p className={paragraphClass}>{children}</p>;
}

function ReactRouter () {
  const {InstallationReact, DefineRoutes, BrowserRouter,HashRouter, MemoryRouter, InstallReactRouter, SetUpRoutes, NavigationwithLink, ProgrammaticNavigation, NestedRoutes, SwitchandRoute, SwitchCode, theRoutes, CreateComponent, theRoutesode, DynamicComponentCode, UsinguseHistory } = ReactRouterCoding();
  return (
    <div className="bg-[#101C28] p-2">

        <Paragraph type="heading">Step 3: React Router Questions:</Paragraph> <br />

        {/* {/* Question 30 */}

        <Paragraph>30. What is React Router, and why is it used? </Paragraph>
        <Paragraph type="answer">
                What is React Router, and why is it used?
                React Router is a standard library for routing in React. It enables you to handle navigation and routing within your React applications by providing a way to create and manage routes, which are essentially mappings between URLs and the components that should be displayed.
                <Paragraph type="para">Key Features and Benefits:</Paragraph>
                🔹Declarative Routing: React Router allows you to define routes in a declarative manner using components. This makes it easy to understand and manage your application's navigation. <br />
                🔹Dynamic Routing: It supports dynamic routing, meaning routes can be defined and updated based on the current application state, which is more flexible than static routing. <br />
                🔹Nested Routes: You can create nested routes, allowing you to structure your application with a hierarchy of views and subviews, making your application's architecture more organized. <br />
                🔹URL Parameters: React Router allows you to define routes with parameters, making it easy to handle dynamic content based on the URL. <br />
                🔹History Management: It provides history management, enabling you to navigate through different views programmatically, go back and forward, and manipulate the browser history.
                <Paragraph type="para">Basic Example:</Paragraph>
                Here's a simple example of how to use React Router in a React application:
                🔹Installation: First, you need to install the react-router-dom package:
                <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                    <CodeHighlighter code={InstallationReact} language="javascript" />
                </div>
                🔹Define Routes: Define routes using the BrowserRouter, Route, and Switch components:
                <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                    <CodeHighlighter code={DefineRoutes} language="javascript" />
                </div>
                <Paragraph type="para">Explanation:</Paragraph>
                🔹BrowserRouter: Wraps the entire application and enables routing functionality. <br />
                🔹Route: Defines a route with a specific path and the component to render when the path matches.<br />
                🔹Switch: Renders the first Route that matches the current URL, ensuring only one route is rendered at a time.<br />
                🔹Link: Provides navigation links to different routes in the application.
                <Paragraph type="para">Use Cases:</Paragraph>
                🔹Single Page Applications (SPAs): React Router is essential for SPAs, where you want to handle multiple views within a single HTML page. <br />
                🔹Dynamic Content: Ideal for applications that need to display different content based on the URL, such as blogs, e-commerce sites, and dashboards.<br />
                🔹Nested Views: Useful for applications with complex nested views and layouts, such as admin panels and multi-step forms.
                React Router enhances the user experience by providing seamless navigation and a structured approach to handling different views within a React application. It makes building and managing routes intuitive and efficient.
        </Paragraph> <br />

        {/* {/* Question 31 */}

        <Paragraph>31. Explain the difference between BrowserRouter, HashRouter, and MemoryRouter. </Paragraph>
        <Paragraph type="answer">
                Certainly! React Router provides different types of routers to handle various routing needs in your application. Here are the key differences between BrowserRouter, HashRouter, and MemoryRouter:
                <Paragraph type="para">BrowserRouter:</Paragraph>
                🔹Path Management: Uses the HTML5 history API to keep your UI in sync with the URL. It relies on clean URLs without a hash (#) character. <br />
                🔹Use Case: Ideal for web applications where you want a clean, SEO-friendly URL structure. <br />
                🔹Example:
                <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                    <CodeHighlighter code={BrowserRouter} language="javascript" />
                </div>
                🔹Pros:
                <ul className="px-4 list-disc list-inside">
                    <li>Clean URLs.</li>
                    <li>Supports push state, replace state, and pop state.</li>
                </ul>
                🔹Cons:
                <ul className="px-4 list-disc list-inside">
                    <li>Requires server configuration to handle client-side routing (e.g., redirecting all requests to index.html).</li>
                </ul>
                <Paragraph type="para">HashRouter:</Paragraph>
                🔹Path Management: Uses the hash portion of the URL (#) to keep your UI in sync with the URL. The hash is never sent to the server, so no server configuration is needed. <br />
                🔹Use Case: Suitable for static sites and web applications where you don't have control over the server configuration or can't use the HTML5 history API. <br />
                🔹Example:
                <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                    <CodeHighlighter code={HashRouter} language="javascript" />
                </div>
                🔹Pros:
                <ul className="px-4 list-disc list-inside">
                    <li>No server configuration needed.</li>
                    <li>Works out of the box with static file servers.</li>
                </ul>
                🔹Cons:
                <ul className="px-4 list-disc list-inside">
                    <li>URLs with # are less clean.</li>
                    <li>Not suitable for SEO since search engines may ignore hash fragments.</li>
                </ul>
                <Paragraph type="para">MemoryRouter:</Paragraph>
                🔹Path Management: Keeps the history of your "URL" in memory (does not read or write to the address bar). It's not synced with the browser's address bar. <br />
                🔹Use Case: Useful for non-browser environments like React Native or for testing purposes. <br />
                🔹Example:
                <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                    <CodeHighlighter code={MemoryRouter} language="javascript" />
                </div>
                🔹Pros:
                <ul className="px-4 list-disc list-inside">
                    <li>No dependency on the browser environment.</li>
                    <li>Ideal for tests and non-browser platforms.</li>
                </ul>
                🔹Cons:
                <ul className="px-4 list-disc list-inside">
                    <li>Not suitable for web applications that need to synchronize the URL with the browser's address bar.</li>
                </ul>
                <Paragraph type="para">Summary:</Paragraph>
                🔹BrowserRouter: Uses HTML5 history API, clean URLs, requires server configuration. <br />
                🔹HashRouter: Uses hash fragments, no server configuration, less clean URLs.<br />
                🔹MemoryRouter: Keeps history in memory, suitable for non-browser environments and tests.
        </Paragraph> <br />

        {/* {/* Question 32 */}

        <Paragraph>32. How do you handle navigation in React?</Paragraph>
        <Paragraph type="answer">
                Handling navigation in React is typically done using the React Router library. React Router enables you to create dynamic routing and manage navigation within your React applications. Here are the key steps to handle navigation in React using React Router:
                <Paragraph type="para">1. Install React Router:</Paragraph>
                First, you need to install the react-router-dom package:
                <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                    <CodeHighlighter code={InstallReactRouter} language="javascript" />
                </div>
                <Paragraph type="para">2. Set Up Routes:</Paragraph>
                Set up your routes using the BrowserRouter, Route, and Switch components. You can define the paths and the corresponding componen
                <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                    <CodeHighlighter code={SetUpRoutes} language="javascript" />
                </div>
                <Paragraph type="para">3. Navigation with Link:</Paragraph>
                Use the Link component from React Router to navigate between different routes. The Link component prevents the default browser behavior of full-page reloads and allows for client-side navigation.
                <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                    <CodeHighlighter code={NavigationwithLink} language="javascript" />
                </div>
                <Paragraph type="para">4. Programmatic Navigation:</Paragraph>
                Sometimes, you need to navigate programmatically (e.g., after a form submission or a specific user action). You can use the useHistory hook to access the history object and perform navigation.
                <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                    <CodeHighlighter code={ProgrammaticNavigation} language="javascript" />
                </div>
                <Paragraph type="para">5. Nested Routes:</Paragraph>
                React Router allows you to create nested routes for more complex navigation structures.
                <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                    <CodeHighlighter code={NestedRoutes} language="javascript" />
                </div>
                <Paragraph type="para">Summary:</Paragraph>
                React Router provides a robust way to manage navigation and routing in your React applications. By using components like BrowserRouter, Route, Link, and hooks like useHistory, you can create dynamic and nested navigation structures that enhance user experience.
        </Paragraph> <br />

        {/* {/* Question 33 */}

        <Paragraph>33. What is the use of Switch and Route in React Router?</Paragraph>
        <Paragraph type="answer">
                Switch and Route are essential components of React Router that help manage the navigation and rendering of components based on the current URL. Here’s a breakdown of their purposes and how they are used:
                <Paragraph type="para">Route:</Paragraph>
                🔹Purpose: The Route component is used to define the mapping between a URL path and the component that should be rendered when the URL matches. <br />
                🔹How It Works: When the path in the URL matches the path specified in the Route component, React Router renders the corresponding component. <br />
                🔹Props:
                <ul className="px-4 list-disc list-inside">
                    <li>path: The URL path that the route should match.</li>
                    <li>component: The component to render when the path matches.</li>
                    <li>exact: When set to true, the route will only match if the path matches exactly.</li>
                </ul>
                🔹Example:
                <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                    <CodeHighlighter code={SwitchandRoute} language="javascript" />
                </div>
                In this example: <br />
                🔹The Home component is rendered when the URL path is exactly /. <br />
                🔹The About component is rendered when the URL path starts with /about. <br />
                🔹The Contact component is rendered when the URL path starts with /contact
                <Paragraph type="para">Switch:</Paragraph>
                🔹Purpose: The Switch component is used to group Route components and ensures that only one route is rendered at a time. It renders the first child &lt;Route&gt; that matches the URL.<br />
                🔹How It Works: When a URL matches multiple Route components, Switch ensures that only the first matching route is rendered. This helps avoid rendering multiple components for the same URL. <br />
                🔹Example:
                <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                    <CodeHighlighter code={SwitchCode} language="javascript" />
                </div>
                In this example: <br />
                🔹The Switch component ensures that only the first matching Route is rendered. <br />
                🔹The Route with path="*" acts as a catch-all route, rendering a "404 Not Found" message for any unmatched URLs.
                <Paragraph type="para">SKey Points:</Paragraph>
                🔹Route: Defines which component should be rendered for specific URL paths. <br />
                🔹Switch: Ensures that only the first matching Route is rendered, preventing multiple routes from being rendered simultaneously. <br />
                By using Route and Switch together, you can create a clear and efficient routing structure in your React application, ensuring that navigation is smooth and intuitive for users.

        </Paragraph> <br />

        {/* {/* Question 34 */}

        <Paragraph>34. How can you use dynamic routes in React Router?</Paragraph>
        <Paragraph type="answer">
                Dynamic routes in React Router are routes that can handle parameters in the URL, allowing you to create more flexible and dynamic applications. These parameters can be used to fetch data, render different components, or perform other actions based on the URL.
                <Paragraph type="para">Setting Up Dynamic Routes:</Paragraph>
                🔹Define Dynamic Routes: Use the :param syntax in the path to define a dynamic segment in the route. For example, :id can be used to capture an ID from the URL. <br />
                🔹Access Dynamic Parameters: You can access the dynamic parameters in your component using the useParams hook or the match object.
                <Paragraph type="para">Example Using Functional Components:</Paragraph>
                Here’s a step-by-step example of how to set up and use dynamic routes: <br />
                🔹Install React Router: If you haven’t already, install React Router:
                <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                    <CodeHighlighter code={InstallReactRouter} language="javascript" />
                </div>
                🔹Define the Routes: Define your routes using the Route component and specify the dynamic parameter in the path.
                <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                    <CodeHighlighter code={theRoutes} language="javascript" />
                </div>
                🔹Create the Dynamic Component: Create a component that will use the dynamic parameter. Use the useParams hook to access the parameter.
                <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                    <CodeHighlighter code={CreateComponent} language="javascript" />
                </div>
                <Paragraph type="para">Example Using Class Components:</Paragraph>
                If you’re using class components, you can access the dynamic parameters through the match object.
                🔹Define the Routes:
                <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                    <CodeHighlighter code={theRoutesode} language="javascript" />
                </div>
                🔹Create the Dynamic Component:
                <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                    <CodeHighlighter code={DynamicComponentCode} language="javascript" />
                </div>
                <Paragraph type="para">Dynamic Navigation:</Paragraph>
                You can also navigate to dynamic routes programmatically using the useHistory hook or the history object in class components. <br />
                🔹Example Using useHistory:
                <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                    <CodeHighlighter code={ UsinguseHistory} language="javascript" />
                </div>
                <Paragraph type="para">Summary:</Paragraph>
                Dynamic routes in React Router allow you to capture URL parameters and create more flexible and interactive applications. By defining dynamic segments in your routes and accessing the parameters using useParams or match, you can render different components or fetch data based on the URL.
        </Paragraph> <br />

        {/* {/* Question 35 */}

        <Paragraph>35. What is the purpose of useParams Hook?</Paragraph>
        <Paragraph type="answer">
                The useParams hook in React Router is used to access URL parameters from a dynamic route. It provides an easy way to retrieve the parameters specified in the route path, allowing you to dynamically render components or fetch data based on the URL.
                <Paragraph type="para">Purpose:</Paragraph>
                🔹Access URL Parameters: Retrieve dynamic values from the URL, such as IDs, slugs, or any other parameters defined in the route. <br />
                🔹Dynamic Rendering: Use the parameters to render different content or fetch data specific to the parameter.
                <Paragraph type="para">How It Works:</Paragraph>
                When you define a route with dynamic segments (e.g., /:id), the useParams hook extracts the values of those segments as key-value pairs.
                <Paragraph type="para">Example:</Paragraph>
                Consider a simple example where you have a dynamic route that captures a user ID: <br />
                🔹Define the Route:
                <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                    <CodeHighlighter code={theRoutes} language="javascript" />
                </div>
                🔹Create the Component: Use the useParams hook to access the dynamic parameter (id in this case).
                <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                    <CodeHighlighter code={CreateComponent} language="javascript" />
                </div>
                In this example: <br />
                🔹The route /user/:id captures the id parameter from the URL.<br />
                🔹The useParams hook extracts the id value from the URL and makes it available within the User component.
                <Paragraph type="para">Key Points:</Paragraph>
                🔹Simplifies Access to URL Parameters: useParams makes it easy to access dynamic segments in the URL without additional parsing. <br />
                🔹Declarative and Readable: Using useParams keeps your code clean and readable by directly accessing the parameters within the component. <br />
                🔹Flexible and Dynamic: Allows you to create flexible routes and dynamically render content based on URL parameters.
                <Paragraph type="para">Use Cases:</Paragraph>
                🔹Fetching Data: Use the parameters to fetch data specific to the ID or slug in the URL. <br />
                🔹Rendering Conditional Content: Render different components or content based on the parameter values. <br />
                🔹Nested Routes: Work seamlessly with nested routes to create complex, dynamic routing structures. <br />
                The useParams hook is a powerful tool in React Router that simplifies handling dynamic routes and enhances the flexibility of your application.
        </Paragraph>
        
        
        
      



    </div>
  );
}

export default ReactRouter ;


