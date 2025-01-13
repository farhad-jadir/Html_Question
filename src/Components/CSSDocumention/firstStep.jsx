import React from "react";
import clsx from "clsx";
import { baseParagraphClasses } from "../utils/ClassNames";
import CodeHighlighter from "../documentation/CodeHighlighter";
import Coding from "./Coding";

function Paragraph({ children, type = "question", additionalClasses = "" }) {
  const paragraphClass = clsx(baseParagraphClasses[type], additionalClasses);
  return <p className={paragraphClass}>{children}</p>;
}

function firstStep() {
  const { basicCode, inlineCode, InternalCode, InlineCSSCode, InternalCSSCode, InlineOne, Inlinetwo, Inlinethree, Content, Padding, Border, Margin, Inlinestyles, CSSSelectors, Declaration, ElementSelector, ClassSelector, IDSelector, GroupSelector, DescendantSelector, Targetsdirect, AdjacentSiblin, GeneralSibling, CombiningSelectors, Pseudoclasses, Pseudoelements,  hoverCode, nthchild, focusCode, beforeCode, firstline, afterCode, Inheritable, Force, importantRule   } = Coding();
  return (
    <div className="bg-[#101C28] p-6">
       {/* Heading paragraph */}
      <Paragraph type="heading">Step 1: Basic CSS Questions</Paragraph> <br />
      {/* Question - 1 */}
      <Paragraph>01. What is CSS, and how does it work with HTML? </Paragraph>
      <Paragraph type="answer">
          CSS (Cascading Style Sheets) is a language used to describe the presentation of a document written in HTML or XML. It defines how HTML elements should be displayed on screen, on paper, or in other media. CSS enables developers to separate content (HTML) from design (CSS), making websites easier to maintain and modify.
          <Paragraph type="para">How CSS Works with HTML:</Paragraph>
          1. Structure vs. Style: <br />
          *HTML provides the structure and content of the webpage (e.g., text, images, links). <br />
          *CSS controls the visual and layout aspects, such as colors, fonts, spacing, and positioning. <br />
          2. CSS Syntax: CSS rules are made up of selectors and declarations:
                      <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                         <CodeHighlighter code={basicCode} language="html" />
                      </div>
          *Selector: Targets the HTML elements (e.g., p for paragraphs, #id for specific IDs). <br />
          *Property: The design aspect being styled (e.g., color, font-size). <br />
          *Value: The setting for the property (e.g., blue, 16px). <br />
          3. Ways to Use CSS with HTML: <br />
          *Inline CSS: Applied directly to an HTML element using the style attribute.
                      <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                         <CodeHighlighter code={inlineCode} language="html" />
                      </div>
          *Internal CSS: Defined within a &lt;stylel&gt; tag inside the &lt;head&gt; of the HTML document:
                      <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                         <CodeHighlighter code={InternalCode} language="html" />
                      </div>
          3. Ways to Use CSS with HTML: <br />
          *Inline CSS: Applied directly to an HTML element using the style attribute. 
                      <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                         <CodeHighlighter code={InlineCSSCode} language="html" />
                      </div>
          *Internal CSS: Defined within a &lt;/stylel&gt; tag inside the &lt;head&gt; of the HTML document
                      <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                         <CodeHighlighter code={InternalCSSCode} language="html" />
                      </div>
          *External CSS: A separate .css file linked to the HTML document using a &lt;link&gt; tag in the &lt;head&gt;. <br />
          4. Cascading and Inheritance: <br />
          *CSS follows the cascade principle, where multiple styles can apply to the same element, and the most specific rule takes precedence. <br />
          *It also supports inheritance, where some properties (e.g., font-family) are inherited from parent elements. <br />
          5. Advantages of CSS: <br />
          *Separation of concerns: Keeps HTML clean and focused on content. <br />
          * Reusability: Allows consistent styling across multiple pages. <br />
          * Flexibility: Provides powerful tools for layout, animations, and responsive design.
           <br /> CSS is essential for creating visually appealing, user-friendly, and maintainable websites. 



      </Paragraph> <br />

      {/* Question - 2 */}
      <Paragraph>02. What is the difference between inline, internal, and external CSS? </Paragraph>
      <Paragraph type="answer">
      The main difference between inline, internal, and external CSS lies in how and where the CSS rules are applied to an HTML document. Here's a detailed comparison:
      <Paragraph type="para">1. Inline CSS</Paragraph>
      Definition: CSS styles are applied directly within an HTML element using the style attribute. Example:
                      <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                         <CodeHighlighter code={InlineOne} language="html" />
                      </div>
      Features: <br />
      *Scope: Affects only the specific element where it's applied. <br />
      *Usage: Best for quick or temporary changes. <br />
      *Advantages: Easy to apply for small, specific customizations. No need for external files. <br />
      *Disadvantages: Not reusable (styles must be repeated for each element). Makes HTML cluttered and harder to maintain. Overrides internal and external CSS for the specific element.
      <Paragraph type="para">2. Internal CSS</Paragraph>
      Definition: CSS rules are defined in a &lt;style&gt; tag within the &lt;head&gt; section of the HTML document. Example:
                      <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                         <CodeHighlighter code={Inlinetwo} language="html" />
                      </div>
      Features: <br />
      *Scope: Affects the entire HTML document but is restricted to that specific file. <br />
      *Usage: Ideal for styling a single document or webpage. <br />
      *Advantages: Keeps CSS separate from the content, making the code cleaner. Centralized control of styles for the page. <br />
      *Disadvantages: Styles are not reusable across multiple files. May increase the size of the HTML file. <br />
      3. External CSS: Definition: CSS rules are written in a separate .css file and linked to the HTML document using a &lt;link&gt; tag. Example:
                      <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                         <CodeHighlighter code={Inlinethree} language="html" />
                      </div>
      Features: <br />
      *Scope: Can affect multiple HTML files linked to the same CSS file. Usage: Preferred for larger projects with multiple pages. <br />
      *Advantages: Promotes reusability by applying the same styles across multiple files. Keeps HTML clean and focused on content.Easier to maintain and update styles globally. <br />
      *Disadvantages: Requires an additional HTTP request to load the CSS file.Styles will not apply if the CSS file is missing or not linked correctly.


      </Paragraph> <br />

      {/* Question - 03 */}
      <Paragraph>03. Explain the CSS box model. What properties does it consist of? </Paragraph>
      <Paragraph type="answer">
      The CSS box model is a fundamental concept in web design and layout, describing how every HTML element is treated as a rectangular box. It defines the space an element occupies on a webpage, consisting of content, padding, border, and margin.
      <Paragraph type="para">Components of the CSS Box Model:</Paragraph>
      Each box in the model has the following layers (from innermost to outermost): <br />
      1. Content: The actual content of the box (e.g., text, images, or other elements).Properties affecting content: width, height, text-align, line-height, etc. Example:
                      <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                         <CodeHighlighter code={Content} language="html" />
                      </div>
      2. Padding: The space between the content and the border. It creates an inner cushion around the content. Padding is transparent and can be controlled individually using: *padding-top *padding-right *padding-bottom *padding-left  *Or shorthand padding. Example:
                      <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                         <CodeHighlighter code={Padding} language="html" />
                      </div>
      3. Border: A boundary that wraps around the padding (or content if padding is not set). Borders can have various styles (solid, dashed, none, etc.), widths, and colors. Border properties: *border-width, border-style, border-color *Shorthand: border. Example:

                      <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                         <CodeHighlighter code={Border} language="html" />
                      </div>
      4. Margin : The space between the element’s border and the surrounding elements. Margins are transparent and create separation between elements. Individual margin control: *margin-top *margin-right *margin-bottom *margin-left *Or shorthand margin. Example:
                      <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                         <CodeHighlighter code={Margin} language="html" />
                      </div>

      </Paragraph> <br />

      {/* Question - 04 */}
      <Paragraph>04. What is specificity in CSS, and how does it affect styling?</Paragraph>
      <Paragraph type="answer">
        <Paragraph type="para">Specificity in CSS:</Paragraph>
        Specificity in CSS determines which rule is applied when multiple rules target the same element. It is calculated based on the weight of selectors: <br />
        1. Inline styles (e.g., style="color: red;") have the highest specificity. <br />
        2. IDs (e.g., #id) are more specific than classes. <br />
        3. Classes, attributes, and pseudo-classes (e.g., .class, [attr=value], :hover) are less specific than IDs. <br />
        4. Elements and pseudo-elements (e.g., div, ::before) have the lowest specificity. 
        <Paragraph type="para">Specificity weight:</Paragraph>
        *Inline styles: 1,0,0,0 *IDs: 0,1,0,0 *Classes/attributes/pseudo-classes: 0,0,1,0 *Elements/pseudo-elements: 0,0,0,1 <br />
        Higher specificity overrides lower specificity. When two rules have the same specificity, the later rule in the CSS file wins. Example:
                      <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                         <CodeHighlighter code={Inlinestyles} language="html" />
                      </div>
                      The element with id="id" will be blue because ID has the highest specificity. <br />
                      
        
      </Paragraph> <br />

      {/* Question - 5 */}
      <Paragraph>05. How do CSS selectors work, and what are some common types of selectors? </Paragraph>
      <Paragraph type="answer">
         CSS selectors are patterns used to select and style specific elements in HTML. They enable you to target elements in the DOM (Document Object Model) and apply styles to them. Here’s how they work:
         <Paragraph type="para">How CSS Selectors Work:</Paragraph>
         1. Selector: The pattern or rule used to target specific HTML elements. <br />
         2. Declaration Block: The styles applied to the selected elements, enclosed in { }. Example:
                     <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                         <CodeHighlighter code={Declaration} language="html" />
                      </div>
                      <Paragraph type="para">Common Types of CSS Selectors:</Paragraph>
                      1. Universal Selector (*): <br />
                      *Selects all elements in the document. *Example:
                      <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                         <CodeHighlighter code={CSSSelectors} language="html" />
                      </div>
                      2. Type Selector (Element Selector): <br />
                      *Targets all instances of a specific HTML element. *Example:
                      <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                         <CodeHighlighter code={ElementSelector} language="html" />
                      </div>
                      3.Class Selector (.classname): <br />
                      *Targets elements with a specific class attribute. *Example:
                      <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                         <CodeHighlighter code={ClassSelector} language="html" />
                      </div>
                      4. ID Selector (#id): <br />
                      *Targets an element with a specific ID attribute. *Example:
                      <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                         <CodeHighlighter code={IDSelector} language="html" />
                      </div>
                      5.  Group Selector (,): <br />
                      *Applies the same styles to multiple selectors. *Example:
                      <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                         <CodeHighlighter code={GroupSelector} language="html" />
                      </div>
                      6.  Descendant Selector (ancestor descendant): <br />
                      *Targets elements nested within a specified ancestor.. *Example:
                      <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                         <CodeHighlighter code={DescendantSelector} language="html" />
                      </div>
                      7.  Child Selector (parent &gt; child): <br />
                      *Targets direct child elements. *Example:
                      <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                         <CodeHighlighter code={Targetsdirect} language="html" />
                      </div>
                      8.  Adjacent Sibling Selector (element1 + element2): <br />
                      *Targets an element immediately following a specified element. *Example:
                      <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                         <CodeHighlighter code={AdjacentSiblin} language="html" />
                      </div>
                      9.  General Sibling Selector (element1 ~ element2): <br />
                      *Targets all siblings of a specified element. *Example:
                      <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                         <CodeHighlighter code={GeneralSibling} language="html" />
                      </div>
                      10.  Attribute Selector: <br />
                      *Targets elements based on their attributes. *Example: <br />
                      i. Exact match: [type="text"] ii. Starts with: [href^="https"] iii. Ends with: [src$=".jpg"] iv. Contains: [title*="key"]
                  
                      11.  Pseudo-classes:
                      *Target elements in specific states. *Example:
                      <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                         <CodeHighlighter code={Pseudoclasses} language="html" />
                      </div>
                      12.  Pseudo-elements:
                      *Target specific parts of an elemen. *Example:
                      <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                         <CodeHighlighter code={Pseudoelements} language="html" />
                      </div>
                      Combining Selectors: <br />
                      <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                         <CodeHighlighter code={CombiningSelectors} language="html" />
                      </div>



      </Paragraph> <br />

      {/* Question - 6 */}
      <Paragraph>06. What are pseudo-classes and pseudo-elements? Give examples of each. </Paragraph>
      <Paragraph type="answer">
         <Paragraph type="para">Pseudo-classes:</Paragraph>
         *Define the state or condition of an element (e.g., interaction, position, or form validation). *Syntax: Single colon : <br />
         Example: <br />
         1. :hover: Styles when an element is hovered.
                     <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                         <CodeHighlighter code={hoverCode} language="html" />
                      </div>
                      2. :nth-child(2): Targets the second child of its parent.
                     <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                         <CodeHighlighter code={nthchild} language="html" />
                      </div>
                      3. :focus: Styles when an element gains focus.
                     <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                         <CodeHighlighter code={focusCode} language="html" />
                      </div>
                      <Paragraph type="para">Pseudo-elements:</Paragraph>
                        *Target specific parts of an element or add generated content. *Syntax: Double colon :: <br />
                         Example: <br />
                     1. ::before: Adds content before an element.
                     <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                         <CodeHighlighter code={beforeCode} language="html" />
                      </div>
                      2. ::first-line: Styles the first line of text in a block.
                     <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                         <CodeHighlighter code={firstline} language="html" />
                      </div>
                      3. ::after: Adds content after an element.
                     <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                         <CodeHighlighter code={afterCode} language="html" />
                      </div>
                      Key Difference: *Pseudo-classes deal with element states (e.g., :hover, :focus). *Pseudo-elements target specific parts of elements (e.g., ::before, ::first-line).


      </Paragraph> <br />

      {/* Question - 7 */}
      <Paragraph>07. Explain the concept of inheritance in CSS. Answer with short explanation. </Paragraph>
      <Paragraph type="answer">
         <Paragraph type="para">Inheritance in CSS</Paragraph>
         Inheritance in CSS refers to the ability of certain properties to be passed down from a parent element to its child elements. This behavior reduces the need for repetitive styles.
         <Paragraph type="para">Key Points</Paragraph>
         1. Inheritable Properties: *Text-related properties like color, font-family, visibility, line-height, etc. *Example:
                     <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                         <CodeHighlighter code={Inheritable} language="html" />
                      </div>
                      2. Non-inheritable Properties: *Box model and layout properties like margin, padding, border, width, etc. *These must be explicitly defined. <br />
                      3. Force Inheritance: * Use inherit to apply inheritance explicitly, even for non-inheritable properties.
                      <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                         <CodeHighlighter code={Force} language="html" />
                      </div>
                      4. Override Inheritance:  *Child elements can override inherited styles by defining their own styles. <br />
                      Inheritance simplifies styling but requires understanding of which properties inherit by default.

      </Paragraph> <br />

      {/* Question - 8 */}
      <Paragraph>08. What is the !important rule in CSS, and when should you use it? </Paragraph>
      <Paragraph type="answer">
         <Paragraph type="para">The !important Rule in CSS:</Paragraph>
         The !important rule overrides all other style declarations, including inline styles and those with higher specificity. It ensures that a particular style is always applied.
         <Paragraph type="para">Syntax:</Paragraph>
                     <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                         <CodeHighlighter code={importantRule} language="html" />
                      </div>
                      <Paragraph type="para">When to Use It:</Paragraph>
                      1. To quickly override existing styles that are difficult to change due to specificity or external stylesheets. <br />
                      2. For debugging or temporary fixes.
                      <Paragraph type="para">Caution:</Paragraph>
                      *Overusing !important can make your CSS hard to maintain and debug. *Use it sparingly and only when necessary.

      </Paragraph>

      



    </div>
  );
}

export default firstStep;
