import React from "react";
import clsx from "clsx";
import { baseParagraphClasses } from "../utils/ClassNames";
import CodeHighlighter from "../documentation/CodeHighlighter";
import Coding from "./Coding";

function Paragraph({ children, type = "question", additionalClasses = "" }) {
  const paragraphClass = clsx(baseParagraphClasses[type], additionalClasses);
  return <p className={paragraphClass}>{children}</p>;
}

function fourthStep() {
  const { universalselector, Fileextension, fextension, CustomProperties, DefineKeyframes, ApplyAnimation, KeyFeatures, KeyFeaturesss, PathsComplex } = Coding();
  return (
    <div className="bg-[#101C28] p-2">

        <Paragraph type="heading">Step 4: Advanced CSS Questions  </Paragraph> <br />

        {/* Question - 24 */}
      <Paragraph>24. What do you understand by the universal sector? </Paragraph> <br />
      <Paragraph type="answer">
              The universal selector (*) in CSS is a selector that targets all elements on a web page. It applies styles universally to every element in the document unless overridden by more specific selectors.
              <Paragraph type="para">Example:</Paragraph>
              <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                  <CodeHighlighter code={universalselector} language="css" />
                </div>
                <Paragraph type="para">Key Points:</Paragraph>
                *It’s commonly used for resetting default styles (e.g., removing margin and padding). <br />
                *It can affect performance if overused, especially on large, complex web pages. <br />
                *Use with caution and combine with other selectors if needed for specific targeting.
      </Paragraph> <br />

      {/* Question - 25 */}
      <Paragraph>25. What are CSS preprocessors, and how do they work? </Paragraph> <br />
      <Paragraph type="answer">
            <Paragraph type="para">What are CSS Preprocessors?</Paragraph>
            CSS preprocessors are tools that extend the capabilities of regular CSS by introducing features like variables, nesting, mixins, and functions. They allow you to write more maintainable and reusable styles, which are then compiled into standard CSS.
            <Paragraph type="para">How They Work:</Paragraph>
            1. Write styles in the preprocessor syntax (e.g., SCSS for SASS, or LESS). <br />
            2. Use a preprocessor compiler to convert the code into plain CSS that browsers can understand.
            <Paragraph type="para">Examples:</Paragraph>
            SASS (Syntactically Awesome Stylesheets): *File extension: .scss or .sass.
                <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                  <CodeHighlighter code={Fileextension} language="css" />
                </div>
                LESS: *File extension: .less.
                <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                  <CodeHighlighter code={fextension} language="css" />
                </div>
                <Paragraph type="para">Benefits:</Paragraph>
                *Variables for consistent styling. *Nesting for cleaner, hierarchical structure. *Mixins for reusable code snippets. *Functions for calculations and logic.
                <Paragraph type="para">Output:</Paragraph>
                Both SASS and LESS compile the above examples into standard CSS that browsers can render.

      </Paragraph> <br />

      {/* Question - 26 */}
      <Paragraph>26. Explain CSS custom properties (CSS variables) and their benefits. </Paragraph> <br />
      <Paragraph type="answer">
                <Paragraph type="para">What are CSS Custom Properties (CSS Variables)?</Paragraph>
                CSS custom properties are user-defined variables declared using the -- prefix and accessed with the var() function. They allow you to store and reuse values throughout your stylesheets. Example:
                <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                  <CodeHighlighter code={CustomProperties} language="css" />
                </div>
                <Paragraph type="para">What are CSS Custom Properties (CSS Variables)?</Paragraph>
                1. Reusability: Define a value once and reuse it throughout your CSS. <br />
                2. Dynamic Updates: Easily update styles by changing the variable's value in one place. <br />
                3. Theming: Enable easy creation of light/dark themes by redefining variables. <br />
                4. Inheritance: Variables are inherited by child elements, enabling contextual adjustments. <br />
                5. Live Changes: JavaScript can dynamically change variables, making styles responsive to runtime changes. <br />
                CSS custom properties make stylesheets more maintainable, flexible, and scalable.

      </Paragraph> <br />

      {/* Question - 27 */}
      <Paragraph>27. How do CSS animations work, and how can you create a keyframe animation? </Paragraph> <br />
      <Paragraph type="answer">
                CSS animations allow you to animate HTML elements over time using keyframes. Keyframes define the start and end points (and optional intermediate steps) of the animation. CSS properties change values at these keyframes to create smooth transitions.
                <Paragraph type="para">Steps to Create a Keyframe Animation:</Paragraph>
                1. Define Keyframes using @keyframes:
                <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                  <CodeHighlighter code={DefineKeyframes} language="css" />
                </div>
                2. Apply the Animation to an Element:
                <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                  <CodeHighlighter code={ApplyAnimation} language="css" />
                </div>
                <Paragraph type="para">Key Properties:</Paragraph>
                *animation-name: Name of the keyframes. <br />
                *animation-duration: Duration of the animation. <br />
                *animation-timing-function: Easing function (e.g., ease, linear). <br />
                *animation-iteration-count: Number of times the animation repeats (infinite for looping). <br />
                With these, you can create dynamic effects like movement, color changes, and scaling!

      </Paragraph> <br />

       {/* Question - 28 */}
       <Paragraph>28. What are CSS transitions, and how are they different from animations? </Paragraph> <br />
      <Paragraph type="answer">
                CSS transitions allow you to smoothly change CSS property values over a specified duration when triggered by an event (e.g., hover, focus).
                <Paragraph type="para">Key Features of Transitions:</Paragraph>
                *Require a trigger (like a hover or click). *Use transition properties like:
                <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                  <CodeHighlighter code={KeyFeatures} language="css" />
                </div>
                *Example:
                <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                  <CodeHighlighter code={KeyFeaturesss} language="css" />    
                </div>
                <Paragraph type="para">Difference from Animations:</Paragraph>
                  *Transitions need a trigger; animations play automatically. <br />
                  *Transitions have start and end states only, while animations can have multiple keyframes for complex effects. <br />
                  *Animations use @keyframes, while transitions rely on the transition shorthand property. <br />
                  Both are useful for adding interactivity and visual effects to a webpage.

      </Paragraph> <br />

      {/* Question - 29 */}
      <Paragraph>29. What is the difference between rem, em, and px units? </Paragraph> <br />
      <Paragraph type="answer">
                  <Paragraph  type="para">Key Differences Between rem, em, and px:</Paragraph>
                  1. px (Pixels): *An absolute unit. *Fixed size regardless of parent or root element. *Example: font-size: 16px; <br />
                  2. em: *A relative unit based on the font size of the element’s parent. *Scales with the parent's size. *Example: If the parent’s font size is 16px, 1em = 16px. <br />
                  3. rem (Root em): *A relative unit based on the font size of the root element (&lt;html&gt;). *Consistent across the entire document. *Example: If the root’s font size is 16px, 1rem = 16px.
                  <Paragraph type="para">Use Cases:</Paragraph>
                  *Use px for precise, fixed sizing. *Use em for sizes relative to parent elements. *Use rem for consistent scaling across the document while maintaining flexibility.


      </Paragraph> <br />

      {/* Question - 30 */}
      <Paragraph>30. What is SVG and how can it be used to create custom shapes?</Paragraph> <br />
      <Paragraph type="answer">
        <Paragraph type="para">What is SVG?</Paragraph>
                  SVG (Scalable Vector Graphics) is an XML-based format for defining vector graphics. It allows you to create images, shapes, and animations that are scalable without losing quality.
                  <Paragraph type="para">How to Create Custom Shapes in SVG:</Paragraph>
                  SVG uses tags to define shapes directly in HTML or an .svg file. <br />
                  1. Basic Shapes: <br />
                  *Rectangle: &lt;rect x="10" y="10" width="100" height="50" fill="blue" /&gt; <br />
                  *Circle: &lt;circle cx="50" cy="50" r="40" fill="red" /&gt; <br />
                  *Line: &lt;line x1="0" y1="0" x2="100" y2="100" stroke="black" /&gt; <br />
                  2. Paths for Complex Shapes: <br />
                  Use the &lt;path&gt; element with the d attribute for custom shapes:
                  <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                  <CodeHighlighter code={ PathsComplex} language="html" />    
                </div>
                *M (move to), H (horizontal), V (vertical), and Z (close path) are common path commands. <br />
                3. Embedding SVG: <br />
                *Inline in HTML: &lt;svg&gt;...&lt;/svg&gt; <br />
                *External file: &lt;img src="shape.svg" alt="Custom Shape" /&gt; <br />
                SVG is ideal for icons, logos, charts, and responsive graphics due to its scalability and clarity.
      </Paragraph>

       
      
      



    </div>
  );
}

export default fourthStep;


