import React from "react";
import clsx from "clsx";
import { baseParagraphClasses } from "../utils/ClassNames";
import CodeHighlighter from "../documentation/CodeHighlighter";
import BootCoding from "./BootCoding";

function Paragraph({ children, type = "question", additionalClasses = "" }) {
  const paragraphClass = clsx(baseParagraphClasses[type], additionalClasses);
  return <p className={paragraphClass}>{children}</p>;
}

function BasicBootstrap() {
  const {IncludeBootstrap, DownloadingFiles, PackageManager, Importit, UsingBootstrap, Gridsystem, containerfluid, Customwritten, CustomCSS, Bootstrapensures, BreakpointsBootstrap, NavbarLink, ButtonsLink, CardsLink, AlertsLink, ModalsLink, FormsLink   } = BootCoding();
  return (
    <div className="bg-[#101C28] p-2">

        <Paragraph type="heading">Step 1: Basic Bootstrap Questions  </Paragraph> <br />

        {/* {/* Question 1 */}

        <Paragraph>01. What is Bootstrap, and why is it used in web development? </Paragraph>
        <Paragraph type="answer">
            Bootstrap is an open-source front-end framework for designing websites and web applications. It includes pre-built CSS and JavaScript components, such as grids, buttons, forms, and navigation bars, to simplify the development process.
            <Paragraph type="para">Why It Is Used in Web Development:</Paragraph>
            <ul className="px-4 list-disc list-inside">
                <li>Responsive Design: Ensures websites work seamlessly on all screen sizes.</li>
                <li>Faster Development: Offers reusable components and templates, reducing coding time.</li>
                <li>Consistency: Provides uniform styles across different browsers and devices.</li>
                <li>Customizability: Allows developers to modify or extend components as needed.</li>
                <li>Community Support: Widely used with extensive documentation and community resources.</li>
            </ul>
        </Paragraph> <br />

        {/* {/* Question 2 */}

        <Paragraph>02. How do you include Bootstrap in a project? Describe the different methods. </Paragraph>
        <Paragraph type="answer">
                including Bootstrap in a project through the following methods:
                <Paragraph type="para">1. Using a CDN:</Paragraph>
                Include Bootstrap's CSS and JavaScript files from a Content Delivery Network (CDN) like BootstrapCDN. Example:
                <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                  <CodeHighlighter code={IncludeBootstrap} language="html" />
                </div>
                <ul className="px-4 list-disc list-inside">
                <li>Advantages: No installation needed, faster loading via CDN caching.</li>
                <li>Use Case: Quick setup for small projects.</li>
              </ul>
              <Paragraph type="para">2. Downloading Files:</Paragraph>
              Download Bootstrap from the official website and include the CSS and JS files in your project directory. Example:
                <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                  <CodeHighlighter code={DownloadingFiles} language="html" />
                </div>
                <ul className="px-4 list-disc list-inside">
                <li>Advantages: Works offline, full control over files.</li>
                <li>Use Case: When hosting everything locally is necessary.</li>
              </ul>
              <Paragraph type="para">3.  Using a Package Manager:</Paragraph>
              Install Bootstrap via package managers like npm, Yarn, or Composer. Example with npm:
                <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                  <CodeHighlighter code={PackageManager} language="html" />
                </div>
                Then, import it in your project:
                <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                  <CodeHighlighter code={Importit} language="css" />
                </div>
                <ul className="px-4 list-disc list-inside">
                <li>Advantages: Ideal for modern development workflows with build tools.</li>
                <li>Use Case: Used in projects involving frameworks or module bundlers.</li>
              </ul>
              <Paragraph type="para">4. Using Bootstrap with Sass:</Paragraph>
              Download Bootstrap from the official website and include the CSS and JS files in your project directory. Example:
                <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                  <CodeHighlighter code={UsingBootstrap} language="css" />
                </div>
                <ul className="px-4 list-disc list-inside">
                <li>Advantages: Customize Bootstrap by importing only necessary components.</li>
                <li>Use Case: When you want a lightweight or tailored Bootstrap build.</li>
              </ul>
              
        </Paragraph> <br />

        {/* {/* Question 3 */}

        <Paragraph>03. Explain the grid system in Bootstrap. How many columns does it have, and how does it work? </Paragraph>
        <Paragraph type="answer">
                The Bootstrap grid system is a flexible layout system based on a 12-column structure. It allows you to create responsive layouts by dividing the page into rows and columns.
                <Paragraph type="para">Key Features:</Paragraph>
                <ul className="px-4 list-disc list-inside">
                <li>12 Columns: The grid is divided into 12 equal columns, and you can span any number of columns (e.g., col-6 spans 6 out of 12 columns).</li>
                <li>Responsive Classes: Breakpoints (xs, sm, md, lg, xl, xxl) enable layouts to adapt to different screen sizes.</li>
                <li>Nested Grids: Columns can contain rows and columns for more complex layouts.</li>
                <li>Auto Layout: Columns adjust size automatically if no width is specified.</li>
                <li>Gutters: Space between columns can be adjusted or removed using utility classes like .g-0.</li>
            </ul>
            Example:
            <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                  <CodeHighlighter code={Gridsystem} language="css" />
                  This divides the row into three equal columns.
                </div>

        </Paragraph> <br />

        {/* {/* Question 4 */}

        <Paragraph>04. What are Bootstrap containers, and what’s the difference between .container and .container-fluid? </Paragraph>
        <Paragraph type="answer">
                In Bootstrap, containers are layout wrappers used to center and align content.
                <Paragraph type="para">Types of Containers:</Paragraph>
                1. .container:
                <ul className="px-4 list-disc list-inside">
                <li>Provides a fixed-width layout based on responsive breakpoints (e.g., sm, md, lg).</li>
                <li>Content width adjusts at each breakpoint (e.g., 540px for sm, 720px for md).</li>
                <li>Use Case: Centered, fixed-width layouts.</li>
            </ul>
            2. .container-fluid:
                <ul className="px-4 list-disc list-inside">
                <li>Provides a full-width layout that spans the entire viewport width, regardless of screen size.</li>
                <li>Use Case: Full-width layouts or when working with content that needs to stretch across the page.</li>
            </ul>
            <Paragraph type="para">Example:</Paragraph>
            <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                  <CodeHighlighter code={containerfluid} language="html" />
                  This divides the row into three equal columns.
                </div>

        </Paragraph> <br />

         {/* {/* Question 5 */}

         <Paragraph>05. What are Bootstrap classes, and how do they differ from CSS classes? </Paragraph>
        <Paragraph type="answer">
                Bootstrap classes are pre-defined, reusable CSS classes provided by the Bootstrap framework to simplify styling and layout creation. They are specific to Bootstrap and designed to work seamlessly within its system. <br />
                Difference from CSS classes:
                <Paragraph type="para">Bootstrap Classes:</Paragraph>
                <ul className="px-4 list-disc list-inside">
                <li>Pre-built and ready to use.</li>
                <li>Follow a consistent naming convention (e.g., btn-primary, text-center).</li>
                <li>Require including Bootstrap CSS/JS files.</li>
                <li>Provide functionality for layouts, components, and utilities.</li>
            </ul>
            <Paragraph type="para">CSS Classes:</Paragraph>
                <ul className="px-4 list-disc list-inside">
                <li>Custom-written by developers for specific styles or behavior.</li>
                <li>Offer full control over design.</li>
                <li>Require manual creation and definition in a CSS file.</li>
            </ul>
            <Paragraph type="para">Example:</Paragraph>
            <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                  <CodeHighlighter code={Customwritten} language="html" />
                  This divides the row into three equal columns.
                </div>
                Custom CSS Class:
                <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                  <CodeHighlighter code={CustomCSS} language="html" />
                  This divides the row into three equal columns.
                </div>


        </Paragraph> <br />

         {/* {/* Question 6 */}

         <Paragraph>06. Explain the concept of responsive design in Bootstrap. </Paragraph>
        <Paragraph type="answer">
                Responsive design in Bootstrap ensures that web pages adapt seamlessly to different screen sizes and devices. It uses a mobile-first approach, meaning styles are applied to smaller screens by default and adjusted for larger screens using breakpoints.
                <Paragraph type="para">Key Features:</Paragraph>
                <ul className="px-4 list-disc list-inside">
                <li>Grid System: A 12-column grid with responsive classes (e.g., col-sm-6) adjusts layouts for various screen sizes.</li>
                <li>Breakpoints: Predefined screen size categories (xs, sm, md, lg, xl, xxl) for applying styles conditionally.</li>
                <li>Utility Classes: Responsive utilities (e.g., d-none, text-center) show, hide, or style elements based on screen size.</li>
                <li>Components: Many Bootstrap components, like navigation bars, are built to respond dynamically to different devices.</li>
            </ul>
            <Paragraph type="para">Example:</Paragraph>
            <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                  <CodeHighlighter code={Bootstrapensures} language="html" />
                  This divides the content into two columns on medium+ screens but stacks them on smaller screens.
                </div>
        </Paragraph> <br />

        {/* {/* Question 7 */}

        <Paragraph>07. How do breakpoints work in Bootstrap? List some commonly used breakpoints. </Paragraph>
        <Paragraph type="answer">
                Breakpoints in Bootstrap are predefined screen width thresholds that allow developers to create responsive designs by applying different styles or layouts for specific device sizes. They work by using media queries to target these widths.
                <Paragraph type="para">Commonly Used Breakpoints:</Paragraph>
                <ul className="px-4 list-disc list-inside">
                <li>xs (Extra small): &lt;576px (Default for smaller screens, no explicit class needed).</li>
                <li>sm (Small): ≥576px (e.g., col-sm-6).</li>
                <li>md (Medium): ≥768px (e.g., col-md-4).</li>
                <li>lg (Large): ≥992px (e.g., col-lg-3).</li>
                <li>xl (Extra large): ≥1200px (e.g., col-xl-2).</li>
                <li>xxl (Extra extra large): ≥1400px (e.g., col-xxl-1).</li>
            </ul>
            <Paragraph type="para">How They Work:</Paragraph>
            <ul className="px-4 list-disc list-inside">
                <li>Responsive classes (e.g., col-sm-6, d-lg-none) apply styles starting from the specified breakpoint and up.</li>
                <li>Breakpoints allow layouts to adapt dynamically to various screen sizes.</li>
            </ul>
            <Paragraph type="para">Example:</Paragraph>
            <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                  <CodeHighlighter code={BreakpointsBootstrap} language="html" />
                  This column takes full width on small screens, half width on medium screens, and one-third width on large screens.
                </div>
        </Paragraph> <br />

        {/* {/* Question 8 */}

        <Paragraph>08. What is a Bootstrap component? Give examples of some commonly used components. </Paragraph>
        <Paragraph type="answer">
                A Bootstrap component is a pre-designed, reusable UI element provided by the Bootstrap framework to speed up web development. These components are built with HTML, CSS, and JavaScript, ensuring consistent design and functionality.
                <Paragraph type="para">Examples of Commonly Used Components:</Paragraph>
                1. Navbar: Responsive navigation bar for menus and links.
                <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                  <CodeHighlighter code={NavbarLink} language="html" />
                </div>
                2. Buttons: Styled buttons with various states.
                <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                  <CodeHighlighter code={ButtonsLink} language="html" />
                </div>
                3. Cards: Flexible containers for content like text, images, and links.
                <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                  <CodeHighlighter code={CardsLink} language="html" />
                </div>
                4. Alerts: Styled messages for notifications.
                <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                  <CodeHighlighter code={AlertsLink} language="html" />
                </div>
                5. Modals: Pop-up dialogs for additional content.
                <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                  <CodeHighlighter code={ModalsLink} language="html" />
                </div>
                6. Forms: Pre-styled form elements like inputs and checkboxes.
                <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                  <CodeHighlighter code={FormsLink} language="html" />
                  These components help developers build consistent, responsive interfaces quickly and efficiently.
                </div>
        </Paragraph>
        
      



    </div>
  );
}

export default BasicBootstrap;


