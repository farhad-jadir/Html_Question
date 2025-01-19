import React from "react";
import clsx from "clsx";
import { baseParagraphClasses } from "../utils/ClassNames";
import CodeHighlighter from "../documentation/CodeHighlighter";
import TailCoding from "./TailCoding";

function Paragraph({ children, type = "question", additionalClasses = "" }) {
  const paragraphClass = clsx(baseParagraphClasses[type], additionalClasses);
  return <p className={paragraphClass}>{children}</p>;
}

function TailwindLayout() {
  const { ResponsiveGrid, ResponsiveFlexbox, ResponsiveText, ResponsiveVisibility, textcenter, CenterHorizontally, Flexboxcenter, FlexboxAxis, AbsolutePosition, absolutetranslate, bothhorizontally, CustomizablePadding, breakpointt, positioning, usesticky,prefixes, SmallScreens, mobilescreens } = TailCoding();
  return (
    <div className="bg-[#101C28] p-2">

        <Paragraph type="heading">Step 3: Tailwind Layout & Responsiveness   </Paragraph> <br />

        {/* Question 16 */}

        <Paragraph>16. What is the difference between Flexbox and Grid utilities in Tailwind, and when would you use each? </Paragraph>
        <Paragraph type="answer">
            Flexbox and Grid utilities in Tailwind are both powerful tools for layout, but they are suited for different use cases:
            <Paragraph type="para">Flexbox Utilities:</Paragraph>
            1. Purpose: Flexbox is a one-dimensional layout system that works on either a row (horizontal) or a column (vertical) axis. <br />
            2. Use Cases: Ideal for aligning and distributing items along a single axis, such as:
            
              <ul className="px-4 list-disc list-inside">
                <li>Navigation bars</li>
                <li>Centering content</li>
                <li>Button groups</li>
                <li>Simple row/column layouts</li>
              </ul>
            3. Key Features:
            <ul className="px-4 list-disc list-inside">
                <li>Align and justify items (justify-center, items-center)</li>
                <li>Control wrapping (flex-wrap)</li>
                <li>Order elements (order)</li>
              </ul>
              <Paragraph type="para">Grid Utilities:</Paragraph>
              1. Purpose: Grid is a two-dimensional layout system that allows control over both rows and columns. <br />
              2. Use Cases: Best for more complex layouts requiring precise placement of items, such as:
              <ul className="px-4 list-disc list-inside">
                <li>Dashboards</li>
                <li>Photo galleries</li>
                <li>Multi-column content layouts</li>
              </ul>
              3. Key Features:
              <ul className="px-4 list-disc list-inside">
                <li>Define rows and columns (grid-cols-3, grid-rows-2)</li>
                <li>Set gaps between items (gap-4)</li>
                <li>Span items across multiple rows/columns (col-span-2, row-span-3)</li>
              </ul>
              <Paragraph type="para">When to Use Each:</Paragraph>
              1. Use Flexbox when working with simpler, single-axis layouts (e.g., aligning items in a row or column). <br />
              2. Use Grid for complex, two-axis layouts that require precise placement of items in rows and columns. <br />
              By understanding their strengths, you can choose the right tool to build efficient and flexible layouts.
            

        </Paragraph> <br />
        
        {/* {/* Question 17 */}
        <Paragraph>17. How do you create responsive layouts in Tailwind? Provide examples. </Paragraph>
        <Paragraph type="answer">
        To create responsive layouts in Tailwind CSS, use its breakpoint prefixes (sm, md, lg, xl, 2xl) to apply utilities based on screen sizes. The syntax is &lt;breakpoint&gt;:&lt;utility&gt;. Tailwind follows a mobile-first approach, so styles apply to smaller screens by default and get overridden for larger breakpoints. Examples:
        <Paragraph type="para">1. Responsive Grid Layout:</Paragraph>       
                <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                  <CodeHighlighter code={ResponsiveGrid} language="html" />
                </div>
                Explanation:
                <ul className="px-4 list-disc list-inside">
                <li>grid-cols-1: Single column for small screens.</li>
                <li>sm:grid-cols-2: Two columns for screens ≥ 640px.</li>
                <li>lg:grid-cols-4: Four columns for screens ≥ 1024px.</li>
              </ul>
              <Paragraph type="para">2. Responsive Flexbox Layout:</Paragraph>       
                <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                  <CodeHighlighter code={ResponsiveFlexbox} language="html" />
                </div>
                Explanation:
                <ul className="px-4 list-disc list-inside">
                <li>flex-col: Items stack vertically by default.</li>
                <li>md:flex-row: Items align horizontally for screens ≥ 768px.</li>
              </ul>
              <Paragraph type="para">3. Responsive Text Sizes:</Paragraph>       
                <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                  <CodeHighlighter code={ResponsiveText} language="html" />
                </div>
                Explanation:
                <ul className="px-4 list-disc list-inside">
                <li>text-sm: Small text on smaller screens.</li>
                <li>md:text-lg, lg:text-xl: Larger text for medium and large screens </li>
              </ul>
              <Paragraph type="para">4. Responsive Visibility:</Paragraph>       
                <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                  <CodeHighlighter code={ResponsiveVisibility} language="html" />
                </div>
                Explanation:
                <ul className="px-4 list-disc list-inside">
                <li>hidden: Hides an element by default.</li>
                <li>md:block: Shows the element on screens ≥ 768px.          </li>
              </ul>
              <Paragraph type="para">Summary</Paragraph>       
                Explanation:
                <ul className="px-4 list-disc list-inside">
                <li>Use breakpoints to control layouts and styling for different screen sizes.</li>
                <li>Start with a mobile-first design and layer larger screen styles using breakpoints.         </li>
              </ul>



        </Paragraph> <br />

        {/* {/* Question 18 */}
        <Paragraph>18. How can you center elements using Tailwind utilities? List different ways. </Paragraph>
        <Paragraph type="answer">
              In Tailwind CSS, you can center elements using different utilities depending on the context. Below are the common methods:    
              <Paragraph type="para">1. Center Horizontally (Inline Elements):</Paragraph>
              Use text-center to center inline elements like text or inline-block items.
                <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                  <CodeHighlighter code={textcenter} language="html" />
                </div>
                <Paragraph type="para">2. Center Horizontally (Block Elements):</Paragraph>
                Use mx-auto to center block-level elements like &lt;div&gt; with a fixed width.
                <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                  <CodeHighlighter code={CenterHorizontally} language="html" />
                </div>
                <Paragraph type="para">3. Center Horizontally and Vertically (Flexbox):</Paragraph>
                Use flex, justify-center, and items-center to center items within a container.
                <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                  <CodeHighlighter code={Flexboxcenter} language="html" />
                </div>
                <Paragraph type="para">4.  Center Vertically (Flexbox on One Axis):</Paragraph>
                Use flex with items-center for vertical centering inside a container.
                <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                  <CodeHighlighter code={FlexboxAxis} language="html" />
                </div>
                <Paragraph type="para">5. Absolute Centering (Absolute Position + Transform):</Paragraph>
              Use text-center to center inline elements like text or inline-block items.
                <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                  <CodeHighlighter code={AbsolutePosition} language="html" />
                </div>
                Alternatively, use absolute with translate-x-1/2 and translate-y-1/2:
                <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                  <CodeHighlighter code={absolutetranslate} language="html" />
                </div>
                <Paragraph type="para">6. Grid Layout Centering:</Paragraph>
                Use grid with place-items-center to center both horizontally and vertically.
                <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                  <CodeHighlighter code={bothhorizontally} language="html" />
                </div>
                <Paragraph type="para">Summary</Paragraph>       
                Explanation:
                <ul className="px-4 list-disc list-inside">
                <li>Inline Elements: Use text-center.</li>
                <li>Flexbox: Use flex, justify-center, and items-center.</li>
                <li>Absolute Positioning: Use absolute with inset-0 or translate.</li>
                <li>Grid: Use grid and place-items-center.</li>
              </ul>


        </Paragraph> <br />

        {/* {/* Question 19 */}
        <Paragraph>19. What is the container class in Tailwind, and how does it help with layout? </Paragraph>
        <Paragraph type="answer">
                The container class in Tailwind CSS is a utility for creating a responsive, fixed-width container that adjusts its width based on the screen size. It is commonly used as a wrapper to center and constrain the layout content.
                <Paragraph type="para">Key Features:</Paragraph>
                <ul className="px-4 list-disc list-inside">
                <li>Responsive Widths: The container class adapts to different breakpoints (sm, md, lg, xl, 2xl) with pre-defined maximum widths.</li>
                <li>Centered by Default: The container is horizontally centered using margin: auto.</li>
                <li>Customizable Padding: Add padding with utilities like px-4 or py-6 for consistent spacing.</li>
              </ul>
              Example:
              <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                  <CodeHighlighter code={CustomizablePadding} language="html" />
                </div>
                <ul className="px-4 list-disc list-inside">
                <li>container: Creates a responsive container with max-width based on breakpoints.</li>
                <li>mx-auto: Centers the container horizontally.</li>
                <li>px-4: Adds horizontal padding.
                </li>
              </ul>
              <Paragraph type="para">Use Case:</Paragraph>
              The container class helps structure layouts like:
              <ul className="px-4 list-disc list-inside">
                <li>Wrapping website content (e.g., headers, footers, main sections) to ensure it stays centered and does not stretch too wide on large screens.</li>
              </ul>

        </Paragraph> <br />

        {/* {/* Question 20 */}
        <Paragraph>20. Explain how Tailwind’s screen size modifiers work and list some common breakpoints. </Paragraph>
        <Paragraph type="answer">
                Tailwind's screen size modifiers are breakpoint prefixes that allow you to apply styles conditionally based on the screen size. They enable responsive design by targeting specific screen widths using a mobile-first approach (styles apply to smaller screens by default, then modify for larger ones).
                <Paragraph type="para">How It Works:</Paragraph>
                The syntax is: <br />
                &lt;breakpoint&gt;:&lt;utility&gt;&lt;/utility&gt; <br />
                For example, md:text-lg applies the text-lg utility only on screens ≥ 768px.
                <Paragraph type="para">Common Breakpoints:</Paragraph>
                <ul className="px-4 list-disc list-inside">
                <li>container: sm: Small screens (≥ 640px)</li>
                <li>md: Medium screens (≥ 768px)</li>
                <li>lg: Large screens (≥ 1024px)</li>
                <li>xl: Extra-large screens (≥ 1280px)</li>
                <li>2xl: Extra-extra-large screens (≥ 1536px)</li>
              </ul>
              Example:
              <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                  <CodeHighlighter code={breakpointt} language="html" />
                </div>
                <ul className="px-4 list-disc list-inside">
                <li>text-sm: Default text size for smaller screens.</li>
                <li>sm:text-base: Text size increases on screens ≥ 640px.</li>
                <li>md:text-lg: Larger text on screens ≥ 768px.</li>
                <li>lg:text-xl: Even larger text on screens ≥ 1024px.</li>
              </ul>
              <Paragraph type="para">Use Case:</Paragraph>
              Use screen size modifiers to create layouts that adapt to different devices, such as changing grid columns, font sizes, or visibility based on screen size.

        </Paragraph> <br />

         {/* {/* Question 21 */}
         <Paragraph>21. How do you create fixed and sticky elements using Tailwind? </Paragraph>
        <Paragraph type="answer">
                In Tailwind CSS, you can create fixed and sticky elements using the positioning utilities.
                <Paragraph type="para">1. Fixed Positioning:</Paragraph>
                To create a fixed element, use fixed along with positioning utilities like top, right, bottom, or left to define its position on the screen.
                <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                  <CodeHighlighter code={ positioning} language="html" />
                </div>
                Explanation:
                <ul className="px-4 list-disc list-inside">
                <li>fixed: Makes the element fixed relative to the viewport.</li>
                <li>top-0: Positions the element at the top of the screen.</li>
                <li>w-full: Makes it span the full width of the screen.</li>
              </ul>
              <Paragraph type="para">2. Sticky Positioning:</Paragraph>
              To create a sticky element, use sticky along with top (or bottom, left, right) to specify when the element should become "stuck" as the page scrolls.
                <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                  <CodeHighlighter code={ usesticky} language="html" />
                </div>
                Explanation:
                <ul className="px-4 list-disc list-inside">
                <li>sticky: Makes the element sticky, so it scrolls with the page until it reaches the specified position.</li>
                <li>top-0: The element becomes sticky when it reaches the top of the screen.</li>
              </ul>
              <Paragraph type="para">Use Case:</Paragraph>
              <ul className="px-4 list-disc list-inside">
                <li>Fixed: Use for navigation bars, toolbars, or headers that should remain visible at all times.</li>
                <li>Sticky: Use for elements (like a table of contents or sidebar) that should scroll with the page but stay within a certain position as the user scrolls.</li>
              </ul>

        </Paragraph> <br />

        {/* {/* Question 22 */}
        <Paragraph>22. What are responsive hiding/showing utilities in Tailwind, and how do they work? </Paragraph>
        <Paragraph type="answer">
                Responsive hiding/showing utilities in Tailwind CSS allow you to control the visibility of elements based on screen size using classes like hidden, block, inline, etc., combined with breakpoint prefixes.
                <Paragraph type="para">How They Work:</Paragraph>
                <ul className="px-4 list-disc list-inside">
                <li>Use hidden to hide an element.</li>
                <li>Use block, inline, or flex to show the element.</li>
                <li>Add breakpoint prefixes (sm:, md:, lg:, etc.) to apply these utilities at specific screen sizes.</li>
              </ul>
              Examples:
              <Paragraph type="para">1. Hide on Small Screens, Show on Larger Screens:</Paragraph>
              <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                  <CodeHighlighter code={ prefixes} language="html" />
                </div>
                <ul className="px-4 list-disc list-inside">
                <li>hidden: Hides the element by default.</li>
                <li>Sticky:md:block: Makes it visible as a block element on screens ≥ 768px.</li>
              </ul>
              <Paragraph type="para">2. Show on Small Screens, Hide on Larger Screens:</Paragraph>
              <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                  <CodeHighlighter code={SmallScreens} language="html" />
                </div>
                <ul className="px-4 list-disc list-inside">
                <li>block: Makes the element visible by default.</li>
                <li>md:hidden: Hides it on screens ≥ 768px.</li>
              </ul>
              <Paragraph type="para">Use Case:</Paragraph>
              <ul className="px-4 list-disc list-inside">
                <li>Create responsive navigation menus, footers, or conditional content visibility for mobile and desktop views.</li>
              </ul>

        </Paragraph>

        {/* {/* Question 23 */}

        <Paragraph>23. Describe how Tailwind enables mobile-first design. </Paragraph>
        <Paragraph type="answer">
                Tailwind CSS enables mobile-first design by applying styles to small screens by default and overriding them for larger screens using breakpoint prefixes. This approach ensures designs are optimized for smaller devices first, with additional styling progressively added for larger screens.
                <Paragraph type="para">How They Work:</Paragraph>
                <ul className="px-4 list-disc list-inside">
                <li>Write base utilities (e.g., text-sm, bg-gray-100) for mobile screens by default.</li>
                <li>Use breakpoint prefixes (sm:, md:, lg:, etc.) to apply styles for larger screen sizes.</li>
              </ul>
              Example:
              <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                  <CodeHighlighter code={mobilescreens} language="html" />
                </div>
                <ul className="px-4 list-disc list-inside">
                <li>Default (Mobile): text-sm applies to all screens.</li>
                <li>Medium Screens (≥ 768px): md:text-lg overrides text size.</li>
                <li>Large Screens (≥ 1024px): lg:text-xl further adjusts the size.</li>
              </ul>
              <Paragraph type="para">Benefits:</Paragraph>
              <ul className="px-4 list-disc list-inside">
                <li>Ensures better performance and usability on mobile devices.</li>
                <li>Allows seamless scaling and customization for larger screens.</li>
              </ul>


        </Paragraph>

       
      
      



    </div>
  );
}

export default TailwindLayout;


