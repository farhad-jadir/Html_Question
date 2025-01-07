import React from "react";
import clsx from "clsx";
import { baseParagraphClasses } from "./utils/ClassNames";

function Paragraph({ children, type = "question", additionalClasses = "" }) {
  const paragraphClass = clsx(baseParagraphClasses[type], additionalClasses);
  return <p className={paragraphClass}>{children}</p>;
}

function CommonHtlm() {
  return (
    <div className="bg-[#101C28] p-6">
      <Paragraph type="heading"> Step 3: Common HTML Tags</Paragraph> <br />
      {/* Question - 11 */}

            <Paragraph>11. How to add favicon in HTML & Why ?</Paragraph> <br />
            <Paragraph type="answer">
                <Paragraph type="para">Steps to add a favicon:</Paragraph>
                1. Prepare your Favicon Image: The image should be a square (typically 16x16, 32x32, or 48x48 pixels), and usually in .ico, .png, or .jpg format. <br />

                2. Place the Favicon Image: Upload the favicon image to your website's root directory or any folder in your project. <br />

                3. Link the Favicon in HTML: Add this &lt;link&gt; tag inside the &lt;/head&gt; section of your HTML document. <br />
                <img src="j6.png" alt="" /> 
                Replace "path/to/your/favicon.ico" with the actual path to your favicon file. <br />
                <Paragraph type="para">Why Add a Favicon?</Paragraph>
                1. Brand Identity: A favicon reinforces your website's brand and provides a visual representation of your website, making it easily identifiable in browser tabs. <br />

                2. Usability: It helps users quickly locate your website when they have multiple tabs open. <br />
                3. Professional Appearance: favicon adds a polished and professional touch to your website, enhancing its credibility. <br />

                4SEO: While favicons themselves don’t directly affect SEO, they contribute to user experience, which can indirectly affect site performance. <br /> <br />
                
            </Paragraph>

            {/* Question -12 */}

            <Paragraph>12. What is formatting in HTML?</Paragraph> <br />
            <Paragraph type="answer">
                Formatting in HTML refers to the process of using HTML tags to style and structure text for better readability and presentation on a web page. It includes making text bold, italic, underlined, or adding headings and paragraphs.
                <Paragraph type="para">Common Formatting Tags in HTML:</Paragraph>
                1. Bold: &lt;b&gt; or &lt;strong&gt; Example: &lt;b&gt;Bold text&lt;/b&gt; <br />
                2. Italic: &lt;i&gt; or &lt;em&gt; Example: &lt;i&gt;Italic text&lt;/i&gt;
            </Paragraph> <br />
            {/* Question -13 */}

            <Paragraph>13. What Is Inline and block elements in html5 Give Us The Proper Explain With Example?</Paragraph> <br />
            <Paragraph type="answer">
                In HTML5, elements are classified as inline or block based on their default behavior in the document flow. <br />
                <Paragraph type="para">Inline Elements:</Paragraph>
                1. Definition: Inline elements do not start on a new line and only take up as much width as necessary. They are typically used to format small pieces of content within a block element. <br />
                2. Characteristics: <br />
                *Do not force a line break. *Can contain text or other inline elements. *Width and height cannot be set (default behavior). <br />
                3. Examples: <br />
                <img src="j7.png" alt="" />
                *These elements appear on the same line unless styled otherwise. <br />
                <Paragraph type="para">Block Elements: </Paragraph>
                1. Definition: Block elements always start on a new line and take up the full width available by default. <br />
                2. Characteristics: *Begin on a new line. *Can contain other block elements, inline elements, or text. *Width, height, margin, and padding can be customized. <br />
                3. Examples: <br />
                <img src="j9.png" alt="" />
                *These elements stack vertically by default.
                <Paragraph type="para">Example in Context:</Paragraph>
                <img src="jj3.png" alt="" />
            </Paragraph>

            {/* Question -14 */}

            <Paragraph>14. What is a marquee?</Paragraph> <br />
            <Paragraph type="answer">
                 A marquee in HTML is an element that creates a scrolling or moving effect for text or images across the web page. It was introduced in older versions of HTML but is now considered obsolete and is not recommended for modern web design. Instead, CSS and JavaScript are used to achieve similar effects.
                <Paragraph type="para">Syntax of Marquee:</Paragraph>
                The &lt;marquee&gt; tag is used to create the effect. <br />
                &lt; <span className="text-red-400">marquee</span> &gt;Scrolling text goes here&lt;/<span className="text-red-400">marquee</span>&gt; <br />
                <Paragraph type="para">Attributes of the &lt;marquee&gt; Tag:</Paragraph>
                1. direction: Specifies the direction of the scroll. <br />
                *Values: left (default), right, up, down. <br />
                *Example: &lt; <span className="text-red-400">marquee</span> <span className="text-yellow-400">direction</span> = <span className="text-green-500">"right"</span> &gt;This text moves to the right.&lt;/<span className="text-red-400">marquee</span>&gt; <br />
                2. behavior: Specifies how the content scrolls. <br />
                *Values: scroll (default), slide, alternate. <br />
                *Example: &lt; <span className="text-red-400">marquee</span> <span className="text-yellow-400">behavior</span> = <span className="text-green-500">"alternate"</span> &gt;This text bounces.&lt;/<span className="text-red-400">marquee</span>&gt; <br />
                3. scrollamount: Sets the speed of the scrolling (in pixels). <br />
                *Example: &lt; <span className="text-red-400">marquee</span> <span className="text-yellow-400">scrollamount</span> = <span className="text-green-500">"10"</span> &gt;Faster scrolling text.&lt;/<span className="text-red-400">marquee</span>&gt; <br />
                4. scrolldelay: Sets the delay between movements (in milliseconds). <br />
                *Example: &lt; <span className="text-red-400">marquee</span> <span className="text-yellow-400">scrolldelay</span> = <span className="text-green-500">"100"</span> &gt;Slower scrolling text.&lt;/<span className="text-red-400">marquee</span>&gt; <br />
                5. loop: Specifies how many times the marquee will run. <br />
                *Example: &lt; <span className="text-red-400">marquee</span> <span className="text-yellow-400">loop</span> = <span className="text-green-500">"3"</span> &gt;This text scrolls 3 times.&lt;/<span className="text-red-400">marquee</span>&gt; <br />
                6. width and height: Specifies the size of the marquee. <br />
                *Example: &lt; <span className="text-red-400">marquee</span> <span className="text-yellow-400">width</span> = <span className="text-green-500">"300"</span> <span className="text-yellow-400">height</span> = <span className="text-green-500">"50"</span> &gt;Scrolling within a box.&lt;/<span className="text-red-400">marquee</span>&gt; <br />
                <Paragraph type="para">Example:</Paragraph>
                <img src="jj2.png" alt="" />
                <Paragraph type="para">Why Avoid &lt;marquee&gt;?</Paragraph>
                1. Deprecated: &lt;marquee&gt; is not supported in HTML5 and modern browsers. <br />
                2. Accessibility Issues: It can be distracting or hard to read for users with disabilities. <br />
                3. Better Alternatives: CSS animations and JavaScript provide more control and are widely supported. <br />

            </Paragraph> <br />

            {/* Question - 15 */}

            <Paragraph>15. Explain the difference between &lt;p&gt;, &lt;span&gt;, and &lt;div&gt; tags. When would you use each?</Paragraph> <br />
            <Paragraph type="answer">
                <Paragraph type="para">Difference between &lt;p&gt;, &lt;span&gt;, and &lt;div&gt; tags:</Paragraph>
                1. &lt;p&gt; (Paragraph): <br />
                *Purpose: Represents a block of text as a paragraph. <br />
                *Behavior: Block-level element, adds space above and below by default. <br />
                *Usage: For standalone text blocks. <br />
                *Example: &lt;<span className="text-red-400">p</span>&gt;This is a paragraph.&lt;/<span className="text-red-400">p</span>&gt; <br />
                2. &lt;span&gt;: <br />
                *Purpose: Inline container for text or other inline elements. *Behavior: Inline element, does not break to a new line. *Usage: For styling or grouping parts of text. <br />
                *Example: &lt;<span className="text-red-400">p</span>&gt;This is &lt;<span className="text-red-400">span</span> <span className="text-yellow-300">style</span>=<span className="text-green-400">"color: red;"</span>&gt;highlighted&lt;/span&gt; text.&lt;/<span className="text-red-400">p</span>&gt; <br />
                3. &lt;div&gt; (Division): <br />
                *Purpose: Block-level container for grouping elements. <br />
                *Behavior: Block-level element, used for layout and structuring. <br />
                *Usage: For larger sections or wrapping multiple elements. <br />
                *Example: 
                <img src="jj5.png" alt="" />
                <Paragraph type="para">When to Use:</Paragraph>
                * &lt;p&gt;: For paragraphs or text content. <br />
                * &lt;span&gt;: For small, inline styling or text grouping. <br />
                * &lt;div&gt;: For grouping or layout purposes. <br />

            </Paragraph> <br />

            {/* Question -16 */}
            <Paragraph>16. Describe the &lt;ul&gt;, &lt;ol&gt;, and &lt;li&gt; tags for creating lists.</Paragraph> <br />
            <Paragraph type="answer">
                <Paragraph type="para">HTML Tags for Lists:</Paragraph>
                1. &lt;ul&gt; (Unordered List): <br />
                * Purpose: Creates a list with bullet points. <br />
                * Usage: For non-sequential items. <br />
                * Example:
                <img src="jj6.png" alt="" />
                2. &lt;ol&gt; (Ordered List): <br />
                * Purpose: Creates a numbered list. <br />
                * Usage: For sequential or ranked items. <br />
                * Example: 
                <img src="jj7.png" alt="" />
                3. &lt;li&gt; (List Item): <br />
                * Purpose: Defines an item in a list (used inside &lt;ul&gt; or &lt;ol&gt;). <br />
                * Example: 
                <img src="jj8.png" alt="" />
                <Paragraph type="para">Key Points:</Paragraph>
                * Use &lt;ul&gt; for unordered lists.
                * Use &lt;ol&gt; for ordered lists.
                * Use &lt;li&gt; for each list item.

            </Paragraph> <br />

            {/* Question -17 */}

            <Paragraph>17. Describe how &lt;input&gt; works and some of its types, such as text, radio, and checkbox.</Paragraph> <br />
            <Paragraph type="answer">
                <Paragraph type="para">HTML &lt;input&gt; Tag:</Paragraph>
                * Purpose: Collects user input in forms. <br />
                * Behavior: Creates various input fields depending on the type attribute.
                <Paragraph type="para">Common Types of &lt;input&gt; Tag:</Paragraph>
                1. Text (type="text"): <br />
                * Purpose: For single-line text input. <br />
                * Example: 
                <img src="r1.png" alt="" />
                2. Radio (type="radio"): <br />
                * Purpose: For selecting one option from a group. <br />
                * Example: <br />
                <img src="r2.png" alt="" />
                3. Checkbox (type="checkbox"): <br />
                * Purpose: For selecting multiple options. <br />
                * Example: <br />
                <img src="r3.png" alt="" />
                <Paragraph type="para">Key Points:</Paragraph>
                * &lt;input&gt; is versatile and adapts to the type value.
                * Use text for single-line input, radio for single-choice, and checkbox for multiple-choice.
            </Paragraph> <br />

            {/* Question- 18 */}

            <Paragraph>18. What are &lt;button&gt;, &lt;textarea&gt;, and &lt;select&gt; tags, and how do they function?</Paragraph> <br />
            <Paragraph type="answer">
                <Paragraph type="para">HTML Tags Overview:</Paragraph>
                1. &lt;button&gt;: <br />
                * Purpose: Creates a clickable button. <br />
                * Function: Used for form submission or custom actions with scripts. <br />
                * Example: 
                <img src="k1.png" alt="" />
                2. &lt;textarea&gt;: <br />
                * Purpose: Creates a multi-line text input field. <br />
                * Function: Used for long user inputs like comments or messages. <br />
                * Example:
                <img src="k2.png" alt="" />
                3. &lt;select&gt;: <br />
                * Purpose: Creates a dropdown menu. <br />
                * Function: Allows users to select one or multiple options. <br />
                * Example:
                <img src="k3.png" alt="" />
                <Paragraph type="para">Key Points:</Paragraph>
                * &lt;button&gt;: For actions like submitting forms. * &lt;textarea&gt;: For multi-line text input. * &lt;select&gt;: For dropdown options.
            </Paragraph> <br />
            
            {/* Question- 19 */}

            <Paragraph>19. How to link CSS to HTML?</Paragraph> <br />
            <Paragraph type="answer">
            To link a CSS file to an HTML document, use the &lt;link&gt; tag in the &lt;head&gt; section of your HTML file.
            <Paragraph type="para">Syntax:</Paragraph>
            <img src="k5.png" alt="" />
            <Paragraph type="para">Steps:</Paragraph>
            1. Create a CSS File: Save your CSS code in a .css file (e.g., styles.css). <br />
            2. Add the &lt;link&gt; Tag: Place the &lt;link&gt; tag in the &lt;head&gt; section of your HTML file. <br />
            3. Specify the Path: Use the href attribute to provide the file path to your CSS. <br />
            <Paragraph type="para">Example:</Paragraph>
            <img src="k6.png" alt="" />
            <Paragraph type="para">Key Points:</Paragraph>
            * Use &lt;link&gt; for external stylesheets.
            * Ensure the href path to the CSS file is correct.
            * Always include the rel="stylesheet" attribute.

            </Paragraph>

            {/* Question - 20*/}

            <Paragraph>20. What is the &lt;label&gt; tag, and how is it associated with form inputs?</Paragraph> <br />
            <Paragraph type="answer">
                <Paragraph type="para">HTML &lt;label&gt; Tag:</Paragraph>
                The &lt;label&gt; tag in HTML is used to define a label for a form input element. It improves accessibility by associating descriptive text with form controls.
                <Paragraph type="para">Key Features:</Paragraph>
                1. Association: Links a label to a specific input using the for attribute or by nesting. <br />
                2. Purpose: Enhances user experience and accessibility (e.g., for screen readers).
                <Paragraph type="para">Ways to Use &lt;label&gt;:</Paragraph>
                1. Using the for Attribute:
                    * The for attribute links the label to an input by matching the input's id.
                    <img src="k8.png" alt="" />
                    2. Nesting the Input Inside &lt;label&gt;: * The label automatically associates with the input when the input is inside the &lt;label&gt;.
                    <img src="k9.png" alt="" />
                    <Paragraph type="para">Benefits:</Paragraph>
                    * Accessibility: Improves usability for assistive technologies. <br />
                    * Click Target: Clicking the label focuses the associated input. <br />
                    <Paragraph type="para">Key Points:</Paragraph>
                    * Use for to link a label to an input. * Nesting works without for. * Boosts accessibility and usability. 


            </Paragraph>
            
    </div>
  );
}

export default CommonHtlm;
