import React from "react";
import clsx from "clsx";
import { baseParagraphClasses } from "../utils/ClassNames";
import CodeHighlighter from "../documentation/CodeHighlighter";
import BootCoding from "./BootCoding";

function Paragraph({ children, type = "question", additionalClasses = "" }) {
  const paragraphClass = clsx(baseParagraphClasses[type], additionalClasses);
  return <p className={paragraphClass}>{children}</p>;
}

function AdvancedBootstrap() {
  const {BootstrapSource, SourceFiles, CompileSASS, ModifyVariables, CompileLESS, Triggers, carouselitem, textlight, dynamicallytoggle, togglethemes, Overriding, Specificity, Useimportant, importingBootstrap, Examplec  } = BootCoding();
  return (
    <div className="bg-[#101C28] p-2">

        <Paragraph type="heading">Step 4: Advanced Bootstrap Questions  </Paragraph> <br />

        {/* {/* Question 24 */}

        <Paragraph>24. How do you customize Bootstrap using SASS or LESS? </Paragraph>
        <Paragraph type="answer">
          <Paragraph type="para">Customizing Bootstrap with SASS or LESS:</Paragraph>
          Bootstrap can be customized by modifying its SASS (or LESS) variables, maps, and mixins to create a unique design system.
          <Paragraph type="para">Steps for Customizing with SASS:</Paragraph>
                1. Install Bootstrap Source Files: Download or install Bootstrap via npm:
                <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                  <CodeHighlighter code={BootstrapSource} language="html" />
                </div>
                2. Import Bootstrap SASS Files: Create a custom .scss file and import Bootstrap:
                <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                  <CodeHighlighter code={SourceFiles} language="css" />
                </div>
                3. Modify Variables:
            <ul className="px-4 list-disc list-inside">
                <li>Override default variables before importing the main bootstrap file.</li>
                <li>Example: Change colors, spacing, breakpoints, etc.</li>
            </ul>
            4.Compile SASS: Use a SASS compiler (e.g., Dart Sass) to compile the .scss file into CSS:
                <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                  <CodeHighlighter code={CompileSASS} language="html" />
                </div>
                <Paragraph type="para">Steps for Customizing with LESS:</Paragraph>
                i. Download LESS Files: Use the Bootstrap LESS source files. <br />
                ii. Modify Variables: Edit the variables.less file or override variables in your custom file:
                <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                  <CodeHighlighter code={ModifyVariables} language="html" />
                </div>
                iii. Compile LESS: Use a LESS compiler to compile your custom file into CSS:
                <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                  <CodeHighlighter code={CompileLESS} language="css" />
                </div>
                <Paragraph type="para">Benefits:</Paragraph>
                <ul className="px-4 list-disc list-inside">
                <li>Easily change Bootstrap’s theme (colors, typography, spacing, etc.).</li>
                <li>Create a lightweight, customized version by importing only necessary components.</li>
            </ul>
        </Paragraph> <br />

        {/* {/* Question 25 */}

        <Paragraph>25. Explain Bootstrap’s JavaScript components and how they add interactivity. </Paragraph>
        <Paragraph type="answer">
                Bootstrap’s JavaScript components add interactivity to your website by providing dynamic behavior, such as modals, carousels, tooltips, and more. These components rely on JavaScript (or jQuery) for functionality.
                <Paragraph type="para">Key JavaScript Components:</Paragraph>
                <ul className="px-4 list-disc list-inside">
                <li>Modals: Pop-up dialogs for user interaction (e.g., login forms).</li>
                <li>Tooltips: Small info boxes that appear when hovering over elements.</li>
                <li>Dropdowns: Interactive menus that show options on click or hover.</li>
                <li>Carousels: Image sliders with navigation controls.</li>
                <li>Collapse: Show/hide content like accordion or collapsible panels.</li>
                <li>Alerts: Dismissible messages or notifications.</li>
                <li>Popovers: Similar to tooltips but with more content.</li>
            </ul>
            <Paragraph type="para">How They Add Interactivity:</Paragraph>
                <ul className="px-4 list-disc list-inside">
                <li>JavaScript functions: Components use JS to control behavior (e.g., showing or hiding elements, changing styles, managing events).</li>
                <li>Triggers: Components often respond to user actions like clicks, hover, or keyboard inputs</li>
                <li>Customizable: You can configure options (like animation speed) via JavaScript.</li>
            </ul>
            Example:
            <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                  <CodeHighlighter code={Triggers} language="html" />
                </div>
        </Paragraph> <br />

        {/* {/* Question 26 */}

        <Paragraph>26. What is the carousel component in Bootstrap, and how do you create one? </Paragraph>
        <Paragraph type="answer">
                <Paragraph type="para">Bootstrap Carousel Component</Paragraph>
                The Carousel in Bootstrap is an interactive component that allows you to create a slideshow of images or other content. It can automatically cycle through slides or be manually controlled with navigation controls.
                <Paragraph type="para">How to Create a Carousel:</Paragraph>
                1. Basic Structure: Use the .carousel class along with .carousel-item for each slide and .carousel-control-prev/.carousel-control-next for navigation.
                <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                  <CodeHighlighter code={carouselitem} language="html" />
                </div>
                2. Features:
                <ul className="px-4 list-disc list-inside">
                <li>Auto cycling: Use data-bs-ride="carousel" for automatic sliding.</li>
                <li>Indicators: Add .carousel-indicators for navigation dots.</li>
                <li>Manual controls: Next and Previous buttons to move between slides.</li>
            </ul>
            <Paragraph type="para">Explanation:</Paragraph>
            <ul className="px-4 list-disc list-inside">
                <li>.carousel-inner holds the slides.</li>
                <li>.carousel-item defines each slide.</li>
                <li>.carousel-control-prev and .carousel-control-next enable manual navigation between slides.</li>
            </ul>
            This creates a simple, responsive image slider with Bootstrap’s carousel component.
        </Paragraph> <br />

        {/* {/* Question 27 */}

        <Paragraph>27. How can you make a website theme dark or light using Bootstrap? </Paragraph>
        <Paragraph type="answer">
                <Paragraph type="para">Making a Website Dark or Light Using Bootstrap:</Paragraph>
                Bootstrap provides built-in theme switching options using dark and light utility classes. You can easily toggle between dark and light themes by applying appropriate classes to the &lt;body&gt; or other wrapper elements.
                <Paragraph type="para">Steps to Switch Theme:</Paragraph>
                1. Light Theme (default):
                <ul className="px-4 list-disc list-inside">
                <li>No special classes needed, as the default theme is light.</li>
            </ul>
            2. Dark Theme:
                <ul className="px-4 list-disc list-inside">
                <li>Apply the .bg-dark and .text-light classes to the body or a specific element to switch to the dark theme.</li>
            </ul>
            <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                  <CodeHighlighter code={textlight} language="html" />
                </div>
                3. Toggle Between Themes:
                <ul className="px-4 list-disc list-inside">
                <li>You can dynamically toggle themes using JavaScript. For example, with a button click, toggle between light and dark themes.</li>
            </ul>
            <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                  <CodeHighlighter code={dynamicallytoggle} language="html" />
                </div>
                <Paragraph type="para">Example:</Paragraph>
                <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                  <CodeHighlighter code={togglethemes} language="html" />
                </div>

        </Paragraph> <br />

         {/* {/* Question 28 */}

         <Paragraph>28. What are the pros and cons of using Bootstrap in a project? </Paragraph>
        <Paragraph type="answer">
        <Paragraph type="para">Pros of Using Bootstrap:</Paragraph>
            <ul className="px-4 list-disc list-inside">
                <li>Responsive Design: Bootstrap provides a grid system and responsive utilities, making it easy to create mobile-friendly websites.</li>
                <li>Predefined Components: It includes a wide range of ready-to-use components like modals, carousels, buttons, and forms, saving development time.</li>
                <li>Customizable: Bootstrap can be customized with SASS or LESS to match the design requirements.</li>
                <li>Cross-browser Compatibility: Ensures consistent appearance across different browsers.</li>
                <li>Community Support: Large community and extensive documentation make it easy to find solutions and resources.</li>
            </ul>
            <Paragraph type="para">Cons of Using Bootstrap:</Paragraph>
            <ul className="px-4 list-disc list-inside">
                <li>Heavy File Size: The full Bootstrap package can be large, impacting page load times, especially if only a few components are needed.</li>
                <li>Generic Look: Websites using default Bootstrap may look similar, unless heavily customized.</li>
                <li>Learning Curve: Understanding the grid system and customization options can take time for beginners.</li>
                <li>Dependency: Projects may become dependent on Bootstrap, making it harder to transition to other frameworks or custom solutions.</li>
            </ul>
            In summary, Bootstrap is excellent for fast, responsive design but may require customization to avoid a generic look and reduce file size.
        </Paragraph> <br />

        {/* {/* Question 29 */}

        <Paragraph>29. How do you override default Bootstrap styling with custom CSS? </Paragraph>
        <Paragraph type="answer">
                <Paragraph type="para">Overriding Default Bootstrap Styling with Custom CSS</Paragraph>
                To override Bootstrap’s default styles with your own custom CSS, you need to follow these steps: <br />
                1. Load Your Custom CSS After Bootstrap: Ensure your custom CSS file is linked after the Bootstrap CSS file in the &lt;head&gt; section. This way, your styles will take precedence.
                <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                  <CodeHighlighter code={Overriding} language="html" />
                </div>
                2. Specificity: Use more specific selectors in your custom CSS to override Bootstrap styles. For example:
                <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                  <CodeHighlighter code={Specificity} language="css" />
                </div>
                3. Use !important (if needed): If specificity is not enough, you can use !important to ensure your styles take precedence, but use it sparingly:
                <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                  <CodeHighlighter code={Useimportant} language="css" />
                </div>
                4. Customizing via Variables (SASS): If you're using Bootstrap's source SASS files, you can customize variables before importing the Bootstrap files:
                <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                  <CodeHighlighter code={importingBootstrap} language="css" />
                </div>
                <Paragraph type="para">Example:</Paragraph>
                <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                  <CodeHighlighter code={Examplec} language="html" />
                </div>
                By following these steps, you can effectively override Bootstrap's default styles with your custom CSS.
                
                
        </Paragraph> <br />

        {/* {/* Question 30 */}

        <Paragraph>30. What’s new in the latest version of Bootstrap? Name some features. </Paragraph>
        <Paragraph type="answer">
        Bootstrap 5 introduces several new features and improvements over its predecessors:
            <ul className="px-4 list-disc list-inside">
                <li>Smaller Bundle Size: The framework has been optimized to reduce its size by approximately 30%, leading to faster load times and improved performance.</li>
                <li>New SVG Icons Library: Bootstrap 5 replaces the previous Glyphicons library with a new SVG-based icons library, offering over 1,500 scalable icons that can be easily customized using CSS.</li>
                <li>RTL Support: The framework now includes built-in support for right-to-left (RTL) languages like Arabic and Hebrew, allowing for seamless development of multilingual websites.</li>
                <li>New Placeholder Component: A new Placeholder Component has been introduced to create image placeholders with specified aspect ratios, enhancing the development of responsive websites. </li>
                <li>New Offcanvas Component: Bootstrap 5 introduces the Offcanvas Component, enabling the creation of sliding sidebars and menus that are responsive and customizable.                 </li>
                <li>Improved Grid System: The grid system has been enhanced to be more flexible, supporting vertical alignment and allowing for more complex layouts. </li>
                <li>New Utility Classes: A range of new utility classes has been added, allowing for quick customization of elements without writing custom CSS.</li>
                <li>Updated Forms: Forms have been updated with modern styles, improved validation, and custom checkboxes and radio buttons, enhancing the user experience.</li>
                <li>Enhanced Accessibility: Bootstrap 5 places a strong emphasis on accessibility, with improved keyboard navigation, ARIA labels, and updated color contrast to meet accessibility standards.</li>
                <li>New Icons: The new set of vector-based icons replaces the previous Glyphicons library, offering more flexibility and customization options. </li>
            </ul>
            These enhancements make Bootstrap 5 a more powerful and flexible framework for modern web development.
        </Paragraph>
        
      



    </div>
  );
}

export default AdvancedBootstrap;


