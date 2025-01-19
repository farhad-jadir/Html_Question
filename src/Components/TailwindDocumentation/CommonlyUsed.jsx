import React from "react";
import clsx from "clsx";
import { baseParagraphClasses } from "../utils/ClassNames";
import CodeHighlighter from "../documentation/CodeHighlighter";
import TailCoding from "./TailCoding";

function Paragraph({ children, type = "question", additionalClasses = "" }) {
  const paragraphClass = clsx(baseParagraphClasses[type], additionalClasses);
  return <p className={paragraphClass}>{children}</p>;
}

function CommonlyUsed() {
  const { Allsides, Specificsides, flexCod, flexRow, justifyCod, itemsCod, gapCod, ExamCod, FontSize, FontWeigh, TextColor, TextAlignment, LineHeight, TextTransform,
    LetterSpacing, ExampleCodetow, bgCode, bgOpacityCode, bgcoverCode, bgcenterCode, texttCode, ringCode, borderCode, Examplethre, hoverCode, focusCode, activeCode, focusWithin, disabledCode, Examplefour, AddCustom, FontFamily, controllingfont, fontutilities, Examplefive, Examplesix, gridCde, gridcolsCde, gridrowsCde, Cdegap, colspanCde, TailwindgridCde, CSSgridCde, Cdegridcols } = TailCoding();
  return (
    <div className="bg-[#101C28] p-2">

        <Paragraph type="heading">Step 2: Commonly Used Tailwind Utilities  </Paragraph> <br />

        {/* Question 8 */}

        <Paragraph>09. Explain how spacing utilities (like m-, p-) work in Tailwind.</Paragraph>
        <Paragraph type="answer">
            In Tailwind CSS, spacing utilities (like m-, p-) control the margin and padding of elements. These utilities use a scale of predefined values to apply consistent spacing across your design.
            <Paragraph type="para">Key Spacing Utilities:</Paragraph>
            *m-: Sets margin on all sides of an element. <br />
            *p-: Sets padding on all sides of an element. <br />
            *mt-, mb-, ml-, mr-: Set margin for specific sides (top, bottom, left, right). <br />
            *pt-, pb-, pl-, pr-: Set padding for specific sides.
            <Paragraph type="para">Scale:</Paragraph>
            Tailwind uses a default spacing scale, where numbers represent rem values (e.g., m-4 is 1rem of margin).
            <Paragraph type="para">Examples:</Paragraph>
            1. All sides:
                <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                  <CodeHighlighter code={Allsides} language="html" />
                </div>
                *m-4: Adds 1rem margin on all sides. <br />
                *p-6: Adds 1.5rem padding on all sides.
                2. Specific sides:
                <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                  <CodeHighlighter code={Specificsides} language="html" />
                </div>
                *mt-4: Adds 1rem margin to the top. <br />
                *mb-2: Adds 0.5rem margin to the bottom. <br />
                *ml-8: Adds 2rem margin to the left. <br />
                Spacing utilities allow for easy and consistent layout adjustments without custom CSS.

                
        </Paragraph> <br />

        {/* Question 10 */}

        <Paragraph>10. How do you use Flexbox utilities in Tailwind to create layouts?</Paragraph>
        <Paragraph type="answer">
                Tailwind CSS provides a set of Flexbox utilities that make it easy to create flexible and responsive layouts. These utilities allow you to control the alignment, direction, and spacing of elements using simple class names.
                <Paragraph type="para">Key Flexbox Utilities:</Paragraph>
                1. flex: Enables flexbox on a container.
                <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                  <CodeHighlighter code={flexCod} language="html" />
                </div>
                2. flex-row / flex-col: Sets the direction of flex items (default is row).
                <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                  <CodeHighlighter code={flexRow} language="html" />
                </div>
                3. justify-*: Controls horizontal alignment of items (e.g., justify-center, justify-between).
                <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                  <CodeHighlighter code={justifyCod} language="html" />
                </div>
                4. items-*: Controls vertical alignment of items (e.g., items-center, items-start).
                <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                  <CodeHighlighter code={itemsCod} language="html" />
                </div>
                5. gap-*: Adds space between flex items.
                <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                  <CodeHighlighter code={gapCod} language="html" />
                </div>
                <Paragraph type="para">Example:</Paragraph>
                <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                  <CodeHighlighter code={ExamCod} language="html" />
                </div>

        </Paragraph> <br />

        {/* Question 11 */}

        <Paragraph>11. What are typography utilities in Tailwind, and how can you style text?</Paragraph>
        <Paragraph type="answer">
                Typography utilities in Tailwind CSS provide classes to style text quickly, controlling properties like font size, weight, color, line height, and text alignment.
                <Paragraph type="para">Key Typography Utilities:</Paragraph>
                1. Font Size (text-*): Controls the size of the text.
                <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                  <CodeHighlighter code={FontSize} language="html" />
                </div>
                2. Font Weight (font-*): Controls the thickness of the font (e.g., font-bold, font-light).
                <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                  <CodeHighlighter code={FontWeigh} language="html" />
                </div>
                3. Text Color (text-*): Sets the color of the text using predefined color classes.
                <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                  <CodeHighlighter code={TextColor} language="html" />
                </div>
                4. Text Alignment (text-left, text-center, text-right): Aligns text within its container.
                <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                  <CodeHighlighter code={TextAlignment} language="html" />
                </div>
                5. Line Height (leading-*): Controls the size of the text.
                <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                  <CodeHighlighter code={LineHeight} language="html" />
                </div>
                6. Text Transform (uppercase, lowercase, capitalize): Changes the case of the text.
                <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                  <CodeHighlighter code={TextTransform} language="html" />
                </div>
                7. Letter Spacing (tracking-*): Controls the size of the text.
                <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                  <CodeHighlighter code={LetterSpacing} language="html" />
                </div>
                <Paragraph type="para">Example:</Paragraph>
                <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                  <CodeHighlighter code={ExampleCodetow} language="html" />
                </div>
                This combines different typography utilities to style the text, making it large, bold, blue, centered, and with tight line spacing.

                Tailwind's typography utilities allow for fast, consistent text styling across your project.
                

        </Paragraph> <br />

        {/* Question 12 */}

        <Paragraph>12. Describe how background and color utilities work in Tailwind.</Paragraph>
        <Paragraph type="answer">
                In Tailwind CSS, background and color utilities allow you to quickly style elements with predefined colors and backgrounds.
                <Paragraph type="para">Background Utilities:</Paragraph>
                1. bg-*: Sets the background color of an element.
                <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                  <CodeHighlighter code={bgCode} language="html" />
                </div>
                2. bg-opacity-*: Controls the opacity of the background color.
                <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                  <CodeHighlighter code={bgOpacityCode} language="html" />
                </div>
                3. bg-cover, bg-contain: Defines how background images are scaled.
                <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                  <CodeHighlighter code={bgcoverCode} language="html" />
                </div>
                4. bg-center, bg-top, bg-bottom: Controls the position of the background image.
                <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                  <CodeHighlighter code={bgcenterCode} language="html" />
                </div>
                <Paragraph type="para">Color Utilities:</Paragraph>
                1. text-*: Sets the text color of an element.
                <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                  <CodeHighlighter code={texttCode} language="html" />
                </div>
                2. border-*: Sets the border color.
                <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                  <CodeHighlighter code={borderCode} language="html" />
                </div>
                3. ring-*: Adds a ring (outline) with a specified color.
                <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                  <CodeHighlighter code={ringCode} language="html" />
                </div>
                <Paragraph type="para">Example:</Paragraph>
                <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                  <CodeHighlighter code={Examplethre} language="html" />
                </div>

        </Paragraph> <br />

        {/* Question 13 */}

        <Paragraph>13. What are state variants in Tailwind, and how do they apply to hover, focus, etc.?</Paragraph>
        <Paragraph type="answer">
                State variants in Tailwind CSS allow you to apply styles based on user interaction or element state, such as hovering or focusing. These variants make it easy to define different styles for different states without writing custom CSS.
                <Paragraph type="para">Common State Variants:</Paragraph>
                1. hover: : Applies styles when the element is hovered over.
                <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                  <CodeHighlighter code={hoverCode} language="html" />
                </div>
                2. focus:: Applies styles when the element is focused (e.g., a form input).
                <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                  <CodeHighlighter code={focusCode} language="html" />
                </div>
                3. active:: Applies styles when the element is actively being clicked.
                <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                  <CodeHighlighter code={activeCode} language="html" />
                </div>
                4. focus-within:: Applies styles when an element or its descendants are focused.
                <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                  <CodeHighlighter code={focusWithin} language="html" />
                </div>
                5. disabled:: Applies styles when an element is disabled.
                <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                  <CodeHighlighter code={disabledCode} language="html" />
                </div>
                <Paragraph type="para">Example:</Paragraph>
                <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                  <CodeHighlighter code={Examplefour} language="html" />
                </div>
                In this example: *hover:bg-gray-700: Changes the background color on hover. *State variants provide a simple, utility-first way to handle dynamic styles in Tailwind.
        </Paragraph> <br />

        {/* Question 14 */}

        <Paragraph>14. How do you handle font customization in Tailwind? </Paragraph>
        <Paragraph type="answer">
                In Tailwind CSS, font customization is handled through the tailwind.config.js file, where you can extend or override the default font settings.
                <Paragraph type="para">Steps for Custom Font Customization:</Paragraph>
                1. Add Custom Fonts: You can add custom fonts to the font family section in the configuration file:
                <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                  <CodeHighlighter code={AddCustom} language="javascript" />
                </div>
                2. Use Tailwind's Built-in Font Utilities: #Font Family: Apply custom or default fonts using the font-* utilities
                <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                  <CodeHighlighter code={FontFamily} language="html" />
                </div>
                3. Font Weight: Tailwind includes utility classes for controlling font weight (e.g., font-bold, font-light).
                <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                  <CodeHighlighter code={controllingfont} language="html" />
                </div>
                4. Font Size: Tailwind’s built-in font size utilities (e.g., text-xs, text-lg) are customizable in the config file.
                <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                  <CodeHighlighter code={fontutilities} language="html" />
                </div>
                <Paragraph type="para">Example:</Paragraph>
                <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                  <CodeHighlighter code={Examplefive} language="javascript" />
                </div>
                <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                  <CodeHighlighter code={Examplesix} language="html" />
                </div>
        </Paragraph> <br />

        {/* Question 15 */}

        <Paragraph>15. Explain how Tailwind’s grid utilities work and compare them to CSS Grid. </Paragraph>
        <Paragraph type="answer">
                Tailwind's grid utilities allow you to quickly create grid layouts using predefined classes. These utilities work similarly to CSS Grid but are more abstracted and easier to use.
                <Paragraph type="para">Tailwind Grid Utilities:</Paragraph>
                1. grid: Enables grid layout on a container.
                <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                  <CodeHighlighter code={gridCde} language="html" />
                </div>
                2. grid-cols-*: Defines the number of columns.
                <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                  <CodeHighlighter code={gridcolsCde} language="html" />
                </div>
                3. grid-rows-*: Defines the number of rows.
                <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                  <CodeHighlighter code={gridrowsCde} language="html" />
                </div>
                4. gap-*: Sets the gap between grid items.
                <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                  <CodeHighlighter code={Cdegap} language="html" />
                </div>
                5. col-span-* and row-span-*: Control how many columns or rows an item spans.
                <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                  <CodeHighlighter code={colspanCde} language="html" />
                </div>
                <Paragraph type="para">Comparison to CSS Grid:</Paragraph>
                1. Tailwind: Provides shorthand utility classes for common grid layouts and simplifies the setup. Example: grid grid-cols-3 gap-4 <br />
                2. CSS Grid: Offers full control over grid properties and is more flexible for complex layouts.
                <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                  <CodeHighlighter code={TailwindgridCde} language="css" />
                </div>
                <Paragraph type="para">Tailwind Grid Example:</Paragraph>
                <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                  <CodeHighlighter code={CSSgridCde} language="html" />
                </div>
                *grid-cols-3: Creates a 3-column grid. *gap-4: Adds space between grid items. *col-span-2: Makes "Item 4" span across two columns.
                <Paragraph type="para">CSS Grid Equivalent:</Paragraph>
                <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                  <CodeHighlighter code={Cdegridcols} language="html" />
                </div>
                *grid-template-columns: repeat(3, 1fr): Creates 3 equal columns. *grid-column: span 2: Makes "Item 4" span 2 columns.
        </Paragraph>

       
      
      



    </div>
  );
}

export default CommonlyUsed;


