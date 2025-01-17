import React from "react";
import clsx from "clsx";
import { baseParagraphClasses } from "../utils/ClassNames";
import CodeHighlighter from "../documentation/CodeHighlighter";
import Coding from "./Coding";

function Paragraph({ children, type = "question", additionalClasses = "" }) {
  const paragraphClass = clsx(baseParagraphClasses[type], additionalClasses);
  return <p className={paragraphClass}>{children}</p>;
}

function secondStep() {
  const { displayvalue, positionproperty, Paddingcode, Margincode, Bordercode, flexgrowcode, flexshrinkcode,flexbasiscode, ExampleShorthand, widthcode, minwidthcode,maxwidthcode,ExampleCombined, zindexcode, opacitycode, visibilitycode, opacityvisibility   } = Coding();
  return (
    <div className="bg-[#101C28] p-2 md:p-6">

        <Paragraph type="heading">Step 2: Mostly Used CSS Properties </Paragraph> <br />

        {/* Question - 9 */}
      <Paragraph>09. How does the display property work, and what are the different display values? </Paragraph>
      <Paragraph type="answer">
                The display property in CSS determines how an element is displayed in the document, affecting its layout and behavior. It can control whether an element is a block, inline, or hidden, among other styles.
                <Paragraph type="para">Common Display Values:</Paragraph>
                1. block: The element takes up the full width of its container and starts on a new line. Example: &lt;div&gt; <br />
                2. inline: The element only takes up as much width as needed and does not start on a new line.  Example: &lt;span&gt; <br />
                3. Behaves like inline but allows setting width and height. <br />
                4. none: The element is completely removed from the layout (not visible and takes no space). <br />
                5. flex: Makes the element a flex container, enabling flexible layout for its children. <br />
                6. grid: Turns the element into a grid container, used for grid-based layouts. <br />
                7. inline-flex: Similar to flex but behaves like an inline element. <br />
                8. inline-grid: Similar to grid but behaves like an inline element. <br />
                9. table: Makes the element behave like a table. <br />
                10. table-row / table-cell: Mimics the behavior of table rows and cells. <br />
                11. inherit: Inherits the display value from its parent element.
                <Paragraph type="para">Example:</Paragraph>
                <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                  <CodeHighlighter code={displayvalue} language="css" />
                </div>
      </Paragraph> <br />

      {/* Question - 10 */}
      <Paragraph>10. What is the position property, and how do different position values (static, relative, absolute, fixed, sticky) behave? </Paragraph>
      <Paragraph type="answer">
                The position property in CSS specifies how an element is positioned in the document and determines how it interacts with other elements.
                <Paragraph type="para">Common position Values:</Paragraph>
                1. static (Default): *The element is positioned according to the normal document flow. *Cannot be moved using top, right, bottom, or left. <br />
                2. relative: *Positioned relative to its normal position. *You can use top, right, bottom, or left to "nudge" the element from where it would normally be. <br />
                3. absolute: *Positioned relative to the nearest positioned ancestor (not static). *If no such ancestor exists, it is positioned relative to the document (&lt;html&gt;). <br />
                4. fixed: *Positioned relative to the viewport. *Stays in the same place even when the page is scrolled. <br />
                5. sticky: *Toggles between relative and fixed based on the user's scroll position. *Sticks to a defined position (top, left, etc.) within its scrollable parent when scrolling. <br />
                <Paragraph type="para">Example:</Paragraph>
                <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                  <CodeHighlighter code={positionproperty} language="css" />
                </div>
      </Paragraph>

      {/* Question - 11 */}
      <Paragraph>11. How do the padding, margin, and border properties work in CSS? </Paragraph>
      <Paragraph type="answer">
                The padding, margin, and border properties in CSS are used to control spacing and the appearance of elements.
                <Paragraph type="para">1. Padding:</Paragraph>
                *Defines the space inside an element between its content and its border. *It increases the size of the element. Example:
                <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                  <CodeHighlighter code={Paddingcode} language="css" />
                </div>
                <Paragraph type="para">2. Margin:</Paragraph>
                *Defines the space outside an element, creating distance between the element and its neighbors. *It does not affect the size of the element. Example:
                <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                  <CodeHighlighter code={Margincode} language="css" />
                </div>
                <Paragraph type="para">3. Border:</Paragraph>
                *Defines the line or boundary around an element. *Can be styled with width, color, and type (e.g., solid, dashed). Example:
                <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                  <CodeHighlighter code={Bordercode} language="css" />
                </div>
                <Paragraph type="para">Visual Order (Box Model):</Paragraph>
                Content → Padding → Border → Margin.

      </Paragraph> <br />

      {/* Question - 12 */}
      <Paragraph>12.Explain the flex property. How do flex-grow, flex-shrink, and flex-basis work? </Paragraph>
      <Paragraph type="answer">
            The flex property in CSS is a shorthand for setting how a flex item grows, shrinks, and defines its initial size in a flex container. It combines three properties: flex-grow, flex-shrink, and flex-basis.
            <Paragraph type="para">1. flex-grow:</Paragraph>
            *Controls how much a flex item can grow relative to others. *Value is a proportion (default is 0). Example:
                <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                  <CodeHighlighter code={flexgrowcode} language="css" />
                </div>
                <Paragraph type="para">2. flex-shrink:</Paragraph>
            *Controls how much a flex item can shrink if the container has less space. *Value is a proportion (default is 1). Example:
                <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                  <CodeHighlighter code={flexshrinkcode} language="css" />
                </div>
                <Paragraph type="para">3. flex-basis:</Paragraph>
            *Defines the initial size of a flex item before any growing or shrinking. *Can be a fixed value (e.g., 100px) or auto (default). Example:
                <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                  <CodeHighlighter code={flexbasiscode} language="css" />
                </div>
                <Paragraph type="para">Example (Shorthand):</Paragraph>
                <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                  <CodeHighlighter code={ExampleShorthand} language="css" />
                </div>
      </Paragraph> <br />

      {/* Question - 13 */}
      <Paragraph>13. What is the difference between width, min-width, and max-width? </Paragraph>
      <Paragraph type="answer">
            The width, min-width, and max-width properties in CSS define the size of an element's width but behave differently in terms of restrictions and flexibility:
            <Paragraph type="para">1. width:</Paragraph>
            *Specifies the exact width of an element. *The element will always have this width unless overridden by min-width or max-width. Example:
                <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                  <CodeHighlighter code={widthcode} language="css" />
                </div>
                <Paragraph type="para">2. min-width:</Paragraph>
            *Sets the minimum width an element can shrink to. *Even if the content or container allows it to be smaller, it won't go below this value. Example:
                <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                  <CodeHighlighter code={minwidthcode} language="css" />
                </div>
                <Paragraph type="para">3. max-width:</Paragraph>
            *Sets the maximum width an element can grow to. *Even if there is extra space, the element won't exceed this value. Example:
                <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                  <CodeHighlighter code={maxwidthcode} language="css" />
                </div>
                <Paragraph type="para">Example (Combined Use):</Paragraph>
                <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                  <CodeHighlighter code={ExampleCombined} language="css" />
                </div>
      </Paragraph> <br />

      {/* Question - 14 */}
      <Paragraph>14. How does the z-index property work, and when would you use it? </Paragraph>
      <Paragraph type="answer">
            The z-index property in CSS controls the stacking order of elements along the z-axis (front-to-back layering) in a 2D space.
            <Paragraph type="para">How It Works:</Paragraph>
            1. Higher z-index values appear on top of lower z-index values. <br />
            2. The z-index only works for elements with a position value of relative, absolute, fixed, or sticky (not static). <br />
            3. Default value is auto, which follows the natural stacking order. 
            <Paragraph type=" para">Usage Scenarios:</Paragraph>
            1. To bring elements to the front (e.g., a modal or dropdown menu). <br />
            2. To layer elements in complex layouts (e.g., overlapping images or text). <br />
            3. To hide elements behind others.
            <Paragraph type="para">Exaple:</Paragraph>
                <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                  <CodeHighlighter code={zindexcode} language="css" />
                </div>

      </Paragraph> <br />

      {/* Question - 15 */}
      <Paragraph>15. What is the difference between the opacity and visibility properties? </Paragraph>
      <Paragraph type="answer">
            The opacity and visibility properties in CSS both affect an element's appearance but behave differently:
            <Paragraph type="para">opacity:</Paragraph>
            1. Controls the transparency of an element. <br />
            2. Value ranges from 0 (completely transparent) to 1 (fully visible). <br />
            3. The element remains in the document flow and can still interact with events like clicks. <br />
            Example:
                <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                  <CodeHighlighter code={opacitycode} language="css" />
                </div>
                <Paragraph type="para">visibility:</Paragraph>
            1. Toggles whether an element is visible or hidden. <br />
            2. Possible values: *visible: The element is shown (default). *hidden: The element is hidden but still takes up space in the layout.            <br />
            3. The element remains in the document flow and can still interact with events like clicks. <br />
            Example:
                <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                  <CodeHighlighter code={visibilitycode} language="css" />
                </div>
                <Paragraph type="para">Key Difference:</Paragraph>
                1. opacity: 0: The element is invisible but fully occupies space and can interact with events. <br />
                2. visibility: hidden: The element is hidden, still occupies space, but doesn't interact with events.
                <Paragraph type=" para">Example:</Paragraph>
                <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                  <CodeHighlighter code={opacityvisibility} language="css" />
                </div>

      </Paragraph>
      
      



    </div>
  );
}

export default secondStep;
