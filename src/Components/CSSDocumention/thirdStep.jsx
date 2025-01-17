import React from "react";
import clsx from "clsx";
import { baseParagraphClasses } from "../utils/ClassNames";
import { tableClasses } from "../utils/TableStyles";  // Importing the reusable table classes
import CodeHighlighter from "../documentation/CodeHighlighter";
import Coding from "./Coding";

function Paragraph({ children, type = "question", additionalClasses = "" }) {
  const paragraphClass = clsx(baseParagraphClasses[type], additionalClasses);
  return <p className={paragraphClass}>{children}</p>;
}

function thirdStep() {
    const { UseFlexbox, flexBoxcode, UseCSSGrid, CSSgridcode, responsivelayout, textalign, marginauto, flexboxc, Usinggrid, Usingposition, CSSGridWorks, flexdirection, columnm, rowreverse, roww, differentstyles, metaTag, HTMLStructure, CssStructure, forMobile, LargerScreens  } = Coding();
  return (
    <div className="bg-[#101C28] p-2 md:p-6 ">
      <Paragraph type="heading">Step 3: CSS Layouts & Responsiveness </Paragraph> <br />

      {/* Question - 16 */}
      <Paragraph>16. What is the difference between flexbox and CSS Grid, and when should you use each? </Paragraph> <br />
      <Paragraph type="answer">
        <Paragraph type="para">Difference Between Flexbox and CSS Grid:</Paragraph>
        <div className="p-4">
          <div className="overflow-x-auto">
            <table className={tableClasses.table}>
              <thead>
                <tr className={tableClasses.headingRow}>
                  <th className={tableClasses.header}>Feature</th>
                  <th className={tableClasses.header}>Flexbox</th>
                  <th className={tableClasses.header}>CSS Grid</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className={tableClasses.cell}>Layout Direction</td>
                  <td className={tableClasses.cell}>
                    One-dimensional (handles rows or columns).
                  </td>
                  <td className={tableClasses.cell}>
                    Two-dimensional (handles rows and columns).
                  </td>
                </tr>
                <tr className={tableClasses.row}>
                  <td className={tableClasses.cell}>Alignment</td>
                  <td className={tableClasses.cell}>
                    Best for aligning items along a single axis.
                  </td>
                  <td className={tableClasses.cell}>
                    Best for creating complex grid-based layouts.
                  </td>
                </tr>
                <tr>
                  <td className={tableClasses.cell}>Content-Based</td>
                  <td className={tableClasses.cell}>
                    Adapts well to the content size.
                  </td>
                  <td className={tableClasses.cell}>
                    Provides precise control over the layout.
                  </td>
                </tr>
                <tr className={tableClasses.row}>
                  <td className={tableClasses.cell}>Browser Support</td>
                  <td className={tableClasses.cell}>
                    Widely supported.
                  </td>
                  <td className={tableClasses.cell}>
                    Also widely supported, but slightly newer.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <Paragraph type="para">When to Use Each:</Paragraph>
        1. Use Flexbox: *When aligning items in a single row or column (e.g., navigation bars, buttons). *For simple layouts where content adjusts dynamically. Example:
                <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                  <CodeHighlighter code={UseFlexbox} language="css" />
                </div>
                2. Use CSS Grid: *When designing complex, two-dimensional layouts (e.g., dashboards, web page templates). *When you need precise placement of elements in rows and columns. Example:
                <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                  <CodeHighlighter code={UseCSSGrid} language="css" />
                </div>
                <Paragraph type="para">Example:</Paragraph>
                1. Flexbox:
                <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                  <CodeHighlighter code={flexBoxcode} language="css" />
                </div>
                2. CSS grid:
                <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                  <CodeHighlighter code={CSSgridcode} language="css" />
                </div>
      </Paragraph> <br />

       {/* Question - 17 */}
       <Paragraph>17. Explain how to create a responsive layout using media queries. Answer with short explanation </Paragraph>
      <Paragraph type="answer">
              To create a responsive layout using media queries: <br />
              1. Set the Base Styles: Start with default styles for smaller devices (mobile-first approach). <br />
              2. Add Media Queries: Use the @media rule to define styles for specific screen sizes. <br />
              3. Define Breakpoints: Choose breakpoints based on screen widths (e.g., 768px for tablets, 1024px for desktops). <br />
              4. Write Conditional CSS: Inside each @media block, add styles for elements that should change for the specified screen size.
              <Paragraph type="para">Example:</Paragraph>
                <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                  <CodeHighlighter code={responsivelayout} language="css" />
                </div>
                This ensures your layout adapts to different screen sizes.


      </Paragraph>

       {/* Question - 18 */}
       <Paragraph>18. How do you create a centered element in CSS? Provide multiple ways. </Paragraph>
      <Paragraph type="answer">
                Here are multiple ways to center an element in CSS:
                <Paragraph type="para">1. Using text-align (For Inline or Text Elements):</Paragraph>
                <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                  <CodeHighlighter code={textalign} language="css" />
                </div>
                *Works for inline or text elements inside the parent container.
                <Paragraph type="para">2. Using margin: auto (For Block Elements):</Paragraph>
                <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                  <CodeHighlighter code={marginauto} language="css" />
                </div>
                *Centers a block element horizontally when it has a defined width.
                <Paragraph type="para">3. Using flexbox:</Paragraph>
                <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                  <CodeHighlighter code={flexboxc} language="css" />
                </div>
                *Centers a child element both horizontally and vertically.
                <Paragraph type="para">4. Using grid:</Paragraph>
                <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                  <CodeHighlighter code={Usinggrid} language="css" />
                </div>
                *Simplest method for centering with CSS Grid.
                <Paragraph type="para">5. Using position and transform:</Paragraph>
                <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                  <CodeHighlighter code={Usingposition} language="css" />
                </div>
                *Centers an absolutely positioned element both horizontally and vertically.
      </Paragraph> <br />

      {/* Question - 19 */}
      <Paragraph>19.How does CSS Grid work, and what are grid-template-rows and grid-template-columns? </Paragraph> <br />
      <Paragraph type="answer">
                  <Paragraph type="para">How CSS Grid Works:</Paragraph>
                  CSS Grid is a layout system that allows you to create complex, responsive designs by defining rows and columns on a grid container. You place child elements (grid items) within this grid structure.
                  <Paragraph type="para">grid-template-rows and grid-template-columns:</Paragraph>
                  *grid-template-rows: Defines the height of each row in the grid. <br />
                  *grid-template-columns: Defines the width of each column in the grid. <br />
                  Example:
                <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                  <CodeHighlighter code={CSSGridWorks} language="css" />
                </div>
                In this example: <br />
                *The grid has 2 rows (100px and 200px) and 2 columns (proportional widths: 1fr and 2fr). * You can adjust row and column sizes using values like px, fr, %, or auto.


      </Paragraph> <br />

      {/* Question - 20 */}
      <Paragraph>20. How does the flex-direction property work in Flexbox, and what are its values? </Paragraph> <br />
      <Paragraph type="answer">
        <Paragraph type="para">flex-direction in Flexbox:</Paragraph>
                The flex-direction property in Flexbox defines the direction in which the flex items are laid out within the flex container.
                <Paragraph type="para">Values of flex-direction:</Paragraph>
                1. row (default): *Items are laid out horizontally (left to right). *Main axis: Horizontal (row). *Cross axis: Vertical.
                <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                  <CodeHighlighter code={roww} language="css" />
                </div>
                2. row-reverse: *Items are laid out horizontally, but in reverse order (right to left). *Main axis: Horizontal (row). *Cross axis: Vertical.
                <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                  <CodeHighlighter code={rowreverse} language="css" />
                </div>
                3. column: *Items are laid out vertically (top to bottom). *Main axis: Vertical (column). *Cross axis: Horizontal.
                <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                  <CodeHighlighter code={columnm} language="css" />
                </div>
                4. column-reverse: *Items are laid out vertically, but in reverse order (bottom to top). *Main axis: Vertical (column). *Cross axis: Horizontal.
                <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                  <CodeHighlighter code={flexdirection} language="css" />
                </div>
                This property helps control the main axis of the layout, allowing you to stack items horizontally or vertically.
                

      </Paragraph> <br />

      
      {/* Question - 21 */}
      <Paragraph>21. What is a viewport, and how do you make elements responsive to viewport changes? </Paragraph> <br />
      <Paragraph type="answer">
        <Paragraph type="para">What is a Viewport?</Paragraph>
                The viewport is the visible area of a web page on a device screen. It determines how much of the content is displayed at a time, and its size varies based on the device's screen size and resolution.
                <Paragraph type="para">Making Elements Responsive to Viewport Changes:</Paragraph>
                To make elements responsive to viewport changes, use the following techniques: <br />
                1. Viewport Width (vw) and Viewport Height (vh): <br />
                *Use vw (viewport width) and vh (viewport height) units to make elements size relative to the viewport. <br />
                *Example: width: 50vw; will make the element 50% of the viewport width. <br />
                2. CSS Media Queries: <br />
                * Use @media rules to apply different styles based on the viewport's width, height, or device characteristics. Example:
                <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                  <CodeHighlighter code={differentstyles} language="css" />
                </div>
                3. meta Tag for Viewport Scaling: <br />
                * Include a meta tag in the HTML &lt;head&gt; to control the viewport's scaling on mobile devices. Example:
                <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                  <CodeHighlighter code={metaTag} language="css" />
                </div>
                These techniques ensure that elements adjust their size, layout, and behavior based on the viewport's size, making the design responsive across different devices.

      </Paragraph> <br />
      {/* Question - 22 */}
      <Paragraph>22. How can you create a sticky footer that stays at the bottom of the page? </Paragraph> <br />
      <Paragraph type="answer">
                To create a sticky footer that stays at the bottom of the page, even if the content is shorter than the viewport height, follow these steps:
                <Paragraph type="para">Using Flexbox:</Paragraph>
                1. HTML Structure:
                <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                  <CodeHighlighter code={HTMLStructure} language="html" />
                </div> 
                2. CSS Structure:
                <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                  <CodeHighlighter code={CssStructure} language="css" />
                </div> 

      </Paragraph> <br />

      {/* Question - 23 */}
      <Paragraph>23. Explain how you would approach creating a mobile-first design. </Paragraph> <br />
      <Paragraph type="answer">
                <Paragraph type="para">Creating a Mobile-First Design:</Paragraph>
                1. Default Styles for Mobile: <br />
                *Start by writing base CSS styles optimized for small screens (e.g., smartphones). <br />
                *Use flexible layouts (e.g., percentages, flexbox, or grid) and avoid fixed widths.
                <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                  <CodeHighlighter code={forMobile} language="css" />
                </div>
                2. Use Media Queries for Larger Screens: <br />
                *Gradually enhance the design for larger screens using @media queries with min-width.
                <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                  <CodeHighlighter code={LargerScreens} language="css" />
                </div>
                3. Focus on Performance: <br />
                *Optimize images and assets for mobile devices to ensure faster loading. <br />
                *Minimize unnecessary styles and scripts.
                4. Test Responsiveness: <br />
                *Continuously test designs on multiple devices and screen sizes to ensure usability.
                <Paragraph type="para">Why Mobile-First?</Paragraph>
                Mobile-first ensures a solid foundation for smaller screens, progressively adding features for larger devices, resulting in a clean, responsive, and user-friendly design.

      </Paragraph>

    </div>
  );
}

export default thirdStep;
