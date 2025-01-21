import React from "react";
import clsx from "clsx";
import { baseParagraphClasses } from "../utils/ClassNames";
import { tableClasses } from "../utils/TableStyles";  // Importing the reusable table classes
import CodeHighlighter from "../documentation/CodeHighlighter";
import BootCoding from "./BootCoding";

function Paragraph({ children, type = "question", additionalClasses = "" }) {
  const paragraphClass = clsx(baseParagraphClasses[type], additionalClasses);
  return <p className={paragraphClass}>{children}</p>;
}

function BootstrapLayout() {
  const {FlexboxGrid, CSSGrid, FlexboxUtilities, GridSystem, TextAlignment, MarginAuto, quickstyling, ClassStructure, justifycontent  } = BootCoding();
  return (
    <div className="bg-[#101C28] p-2">

        <Paragraph type="heading">Step 3: Bootstrap Layout & Utilities  </Paragraph> <br />

        {/* {/* Question 16 */}

        <Paragraph>16. How does the grid system in Bootstrap differ when using Flexbox or Grid layout utilities? </Paragraph>
        <Paragraph type="answer">
          The grid system in Bootstrap provides a responsive layout system, and it can use either Flexbox or CSS Grid utilities, each offering unique features and use cases.
          <div className="p-4">
                    <div className="overflow-x-auto">
                      <table className={tableClasses.table}>
                        <thead>
                          <tr className={tableClasses.headingRow}>
                            <th className={tableClasses.header}>Feature</th>
                            <th className={tableClasses.header}>Flexbox Grid (Default)</th>
                            <th className={tableClasses.header}>CSS Grid Utilities</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className={tableClasses.cell}>Layout System</td>
                            <td className={tableClasses.cell}>
                            Row and column system based on .row and .col-* classes..
                            </td>
                            <td className={tableClasses.cell}>
                            Direct use of CSS Grid properties with .d-grid and .grid-*.
                            </td>
                          </tr>
                          <tr className={tableClasses.row}>
                            <td className={tableClasses.cell}>Responsiveness</td>
                            <td className={tableClasses.cell}>
                            Achieved with predefined breakpoints (col-sm, col-md, etc.).
                            </td>
                            <td className={tableClasses.cell}>
                            Fully flexible with CSS Grid utilities for complex designs.
                            </td>
                          </tr>
                          <tr>
                            <td className={tableClasses.cell}>Alignment</td>
                            <td className={tableClasses.cell}>
                            Align items using .justify-content-* and .align-items-*.
                            </td>
                            <td className={tableClasses.cell}>
                            Provides fine-grained control with grid alignment properties.
                            </td>
                          </tr>
                          <tr className={tableClasses.row}>
                            <td className={tableClasses.cell}>Customization</td>
                            <td className={tableClasses.cell}>
                            Best for simpler, predictable layouts.
                            </td>
                            <td className={tableClasses.cell}>
                            Better for complex, overlapping, or non-linear layouts.
                            </td>
                          </tr>
                          <tr>
                            <td className={tableClasses.cell}>Ease of Use</td>
                            <td className={tableClasses.cell}>
                            Easier for beginners; uses a predefined 12-column layout.
                            </td>
                            <td className={tableClasses.cell}>
                            Requires knowledge of CSS Grid for advanced configurations.
                            </td>
                          </tr>
                          <tr className={tableClasses.row}>
                            <td className={tableClasses.cell}>Complex Layouts</td>
                            <td className={tableClasses.cell}>
                            Limited in managing overlapping or grid-gap styles.
                            </td>
                            <td className={tableClasses.cell}>
                            Supports intricate, overlapping, and nested layouts seamlessly.
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <Paragraph type="para">Example: Flexbox Grid (Default):</Paragraph>
                  <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                  <CodeHighlighter code={FlexboxGrid} language="html" />
                </div>
                <ul className="px-4 list-disc list-inside">
                <li>Uses .row for the grid container and .col-* for columns.</li>
                <li>Automatically adapts based on breakpoints.</li>
            </ul>
            <Paragraph type="para">Example: CSS Grid Utilities:</Paragraph>
                  <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                  <CodeHighlighter code={CSSGrid} language="html" />
                </div>
                <ul className="px-4 list-disc list-inside">
                <li>Utilizes .d-grid for enabling CSS Grid.</li>
                <li>gap-* controls spacing between grid items.</li>
            </ul>

        </Paragraph> <br />

        {/* {/* Question 17 */}

        <Paragraph>17. What is the difference between .col, .col-sm, .col-md, etc., in Bootstrap's grid system?  </Paragraph>
        <Paragraph type="answer">
        In Bootstrap's grid system, the differences between .col, .col-sm, .col-md, .col-lg, etc., lie in their responsive behavior based on screen sizes:
        <ul className="px-4 list-disc list-inside">
                <li>.col: Applies to all screen sizes (extra small and up). It creates equally divided columns without targeting specific breakpoints.</li>
                <li>.col-sm: Applies to small screens (≥576px) and larger. Below 576px, the columns stack vertically.</li>
                <li>.col-md: Applies to medium screens (≥768px) and larger. Below 768px, the columns stack vertically or follow a smaller breakpoint's rules.</li>
                <li>.col-lg: Applies to large screens (≥992px) and larger. Below 992px, the columns follow smaller breakpoints.</li>
                <li>.col-xl: Applies to extra-large screens (≥1200px) and larger.</li>
                <li>.col-xxl: Applies to extra-extra-large screens (≥1400px) and larger.</li>
            </ul>
            Each class targets a specific screen width and larger, enabling precise control over layout behavior at different viewport sizes.
        </Paragraph> <br />

         {/* {/* Question 18 */}

         <Paragraph>18. How do you center elements in Bootstrap? Provide multiple methods.   </Paragraph>
        <Paragraph type="answer">
        Here are multiple ways to center elements in Bootstrap: <br />
        <Paragraph type="para">1. Flexbox Utilities:</Paragraph>
                Use d-flex, justify-content-center (horizontal), and align-items-center (vertical) for centering.
                <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                  <CodeHighlighter code={FlexboxUtilities} language="html" />
                </div>
                <Paragraph type="para">2.Grid System:</Paragraph>
                Use row with justify-content-center (horizontal) and align-items-center (vertical).
                <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                  <CodeHighlighter code={GridSystem} language="html" />
                </div>
                <Paragraph type="para">3. Text Alignment Classes:</Paragraph>
                Use text-center for centering inline or block-level content horizontally.
                <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                  <CodeHighlighter code={TextAlignment} language="html" />
                </div>
                <Paragraph type="para">4. Margin Auto:</Paragraph>
                Use mx-auto (horizontal) or m-auto (both) for centering in flex or grid containers.
                <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                  <CodeHighlighter code={MarginAuto} language="html" />
                </div>
                <Paragraph type="para">5. Manual Adjustment:</Paragraph>
                Use custom CSS or utilities like margin or padding if needed.

        </Paragraph> <br />

        {/* {/* Question 19 */}

        <Paragraph>19. What are utility classes in Bootstrap, and how do they help in quick styling?   </Paragraph>
        <Paragraph type="answer">
                Utility classes in Bootstrap are predefined, reusable CSS classes that apply specific styles (e.g., margins, padding, colors, alignment) directly to elements without writing custom CSS.
                <Paragraph type="para">Benefits for Quick Styling:</Paragraph>
                <ul className="px-4 list-disc list-inside">
                <li>Speeds up development: No need to write custom CSS for common styles.</li>
                <li>Consistency: Ensures uniform design across the project.</li>
                <li>Responsive control: Many utilities have responsive variants (e.g., mt-3, mt-md-5).</li>
                <li>Ease of maintenance: Changes can be made by simply modifying class names.</li>
            </ul>
            Example:
            <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                  <CodeHighlighter code={quickstyling} language="html" />
                </div>

        </Paragraph> <br />

        {/* {/* Question 20 */}

        <Paragraph>20. Explain how the m- and p- classes work for margin and padding in Bootstrap. </Paragraph>
        <Paragraph type="answer">
                In Bootstrap, the m- and p- classes are shorthand utilities for applying margin and padding, respectively.
                <Paragraph type="para">Structure:</Paragraph>
                1. Prefix:
                <ul className="px-4 list-disc list-inside">
                <li>m- for margin</li>
                <li>p- for padding</li>
            </ul>
            <Paragraph type="para">Structure:</Paragraph>
                2. Breakpoints (optional):
                <ul className="px-4 list-disc list-inside">
                <li>m-sm-, m-md-, m-lg-, m-xl-, m-xxl- apply styles at specific screen sizes.</li>
            </ul>
            <Paragraph type="para">Structure:</Paragraph>
                3. Sides:
                <ul className="px-4 list-disc list-inside">
                <li>t (top), b (bottom), s (start/left), e (end/right), x (horizontal), y (vertical), or no side for all.</li>
            </ul>
            <Paragraph type="para">Structure:</Paragraph>
                4. Values:
                <ul className="px-4 list-disc list-inside">
                <li>Numbers: 0 (0), 1 (0.25rem), 2 (0.5rem), 3 (1rem), 4 (1.5rem), 5 (3rem).</li>
                <li>auto for automatic margin.</li>
            </ul>
            <Paragraph type="para">Examples:</Paragraph>
            <ul className="px-4 list-disc list-inside">
                <li>m-3: Margin of 1rem on all sides.</li>
                <li>mt-2: Margin of 0.5rem on top.</li>
                <li>px-4: Padding of 1.5rem on left and right.</li>
                <li>mb-md-5: Bottom margin of 3rem for medium screens and up.</li>
            </ul>

        </Paragraph> <br />

        {/* {/* Question 21 */}

        <Paragraph>21. How does the Bootstrap spacing system work? </Paragraph>
        <Paragraph type="answer">
                The Bootstrap spacing system provides utility classes to manage margin (m-) and padding (p-) with predefined values for consistent spacing.
                <Paragraph type="para">Class Structure:</Paragraph>
                <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                  <CodeHighlighter code={ClassStructure} language="html" />
                </div>
                <ul className="px-4 list-disc list-inside">
                <li>Property: m (margin) or p (padding).</li>
                <li>Side: t (top), b (bottom), s (start), e (end), x (horizontal), y (vertical), or omit for all sides.</li>
                <li>Size: 0 (0rem), 1 (0.25rem), 2 (0.5rem), 3 (1rem), 4 (1.5rem), 5 (3rem), or auto.</li>
            </ul>
            <Paragraph type="para">Responsive Design:</Paragraph>
                Add breakpoints (sm, md, lg, xl, xxl) for different screen sizes, e.g., mt-md-3.
            <Paragraph type="para">Examples:</Paragraph>
            <ul className="px-4 list-disc list-inside">
                <li>m-3: Margin of 1rem on all sides.</li>
                <li>pt-2: Padding of 0.5rem on top.</li>
                <li>mx-auto: Horizontally centers an element.</li>
            </ul>
            This system simplifies layout spacing and ensures consistency across devices.
        </Paragraph> <br />

        {/* {/* Question 22 */}

        <Paragraph>22. What are responsive utilities in Bootstrap, and how can you hide/show elements on specific screen sizes? </Paragraph>
        <Paragraph type="answer">
        <Paragraph type="para">Responsive Utilities in Bootstrap:</Paragraph>
        Responsive utilities in Bootstrap are classes that control the visibility of elements based on screen sizes. They use predefined breakpoints (sm, md, lg, xl, xxl) for responsiveness.
        <Paragraph type="para">Hiding/Showing Elements:</Paragraph>
        1. Hide Elements:
            <ul className="px-4 list-disc list-inside">
                <li>Use .d-none to hide an element across all screen sizes.</li>
                <li>Use .d-none.d-&#123;breakpoint&#125;-block to hide on smaller screens and show on larger ones.</li>
                <li>Example: .d-none.d-md-block hides on &lt;768px, shows on ≥768px.</li>
            </ul>
            <Paragraph type="para">Hiding/Showing Elements:</Paragraph>
        2. Show Elements:
            <ul className="px-4 list-disc list-inside">
                <li>Use .d-&#123;breakpoint&#125;-none to hide an element starting at a specific screen size.</li>
                <li>Example: .d-block.d-md-none shows on &lt;768px, hides on ≥768px.</li>
            </ul>
            <Paragraph type="para">Display Options:</Paragraph>
            <ul className="px-4 list-disc list-inside">
                <li>.d-none: Hides the element (display: none).</li>
                <li>.d-block, .d-inline, .d-inline-block: Control how the element is displayed.</li>
            </ul>
            These utilities simplify responsive design without custom CSS.

        </Paragraph> <br />

        {/* {/* Question 23 */}

        <Paragraph>23. How do you use the .d-flex and .justify-content-* classes to align items? </Paragraph>
        <Paragraph type="answer">
        <Paragraph type="para">Using .d-flex and .justify-content-* for Alignment in Bootstrap:</Paragraph>
        1. .d-flex:
            <ul className="px-4 list-disc list-inside">
                <li>Applies display: flex to an element, enabling the use of Flexbox properties for alignment.</li>
            </ul>
            2. .justify-content-*:
            <ul className="px-4 list-disc list-inside">
                <li>Aligns items horizontally along the main axis.</li>
                <li>Options:</li>
                <ul className="px-4 list-disc list-inside">
                <li>.justify-content-start: Align items to the start (default).</li>
                <li>.justify-content-end: Align items to the end.</li>
                <li>.justify-content-center: Center items.</li>
                <li>.justify-content-between: Distribute items with space between them.</li>
                <li>.justify-content-around: Distribute items with space around them.</li>
                <li>.justify-content-evenly: Distribute items with equal space around them.</li>
            </ul>
            </ul>
            <Paragraph type="para">Example:</Paragraph>
            <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                  <CodeHighlighter code={justifycontent} language="html" />
                </div>
                <ul className="px-4 list-disc list-inside">
                <li>Result: The items (Item 1 and Item 2) are horizontally centered.</li>
            </ul>
            These classes make horizontal alignment easy and flexible without custom CSS.
        </Paragraph>
        
      



    </div>
  );
}

export default BootstrapLayout;


