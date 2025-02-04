import React from "react";
import clsx from "clsx";
import { baseParagraphClasses } from "../utils/ClassNames";
import CodeHighlighter from "./CodeHighlighter";
import CodeExamples from "./CodeExamples";

function Paragraph({ children, type = "question", additionalClasses = "" }) {
  const paragraphClass = clsx(baseParagraphClasses[type], additionalClasses);
  return <p className={paragraphClass}>{children}</p>;
}

function HtmlInterview() {
  const { basicCode, ds, videoCode, NUL, complexTable, webpageLayout, tenHtmlTag, SectionTag,  articleTag, headerTag, navTag, figureTag, formTag, detailsTag,
    tableTag, aTag, radioSubmit, pictureTag, postar, preload, muted, loop, autoplay, controls, audioTag,videoTag, allowfullscreen, loading, sandbox, allow, Name,
    Title, Height, Width, srcCode, labelTag, labelNestedTag, linkjon, linkRon, buttonTag, textareaCode, selectCode, Checkbox, textCode, RadioCode, ulCode,
    olCode, liCode, divCode, marqueeCode, InlineCode, BlockCode, mixeccode, Faviconcode, globalcode, basicexamplecode  } = CodeExamples();
    
    
  return (
    <div className="bg-[#101C28] p-2 space-y-4">
      {/* Heading paragraph */}
      <Paragraph type="heading">Step 1: Basic HTML Questions</Paragraph>
      {/* Question - 1 */}
      <Paragraph>01. What is HTML? Explain its purpose & Basic Syntax Of HTML ? </Paragraph>
      <Paragraph type="answer">
        HTML (Hypertext Markup Language) is the standard language used to create and design webpages. It forms the basic building block for structuring content on the web. HTML is not a programming language; it is a markup language that uses tags to define elements on a webpage, such as text, images, links, forms, and more.

        HTML allows browsers to understand how to display the structure of a webpage. It organizes content in a hierarchical structure, defining headings, paragraphs, lists, links, and other elements. <br />
        <Paragraph type="para">Purpose of HTML:</Paragraph>
         The primary purpose of HTML is to define the structure and layout of a web page. It uses a series of elements and tags to organize content, such as headings, paragraphs, links, images, and more. HTML elements tell the browser how to display the content, making it possible to create visually appealing and functional web pages. <br />
        <Paragraph type="para">Basic Syntax of HTML:</Paragraph>
        The basic structure of an HTML document includes: <br />

        &lt;!DOCTYPE html&gt;: Declares the document type and version of HTML. This is placed at the top of the HTML document. <br />
        &lt;/html&gt;: The root element that wraps all the content of the page. <br />
        &lt;/head&gt;: Contains meta-information about the HTML document like title, character encoding, linked stylesheets, and scripts. <br />
        &lt;/body&gt;: Contains the actual content of the webpage such as text, images, links, etc. <br />
        &lt;/title&gt;: Sets the title of the webpage that appears in the browser tab. <br />
        <Paragraph type="para">Basic Example: 
                      <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                         <CodeHighlighter code={basicexamplecode} language="html" />
                      </div>
        </Paragraph>






      </Paragraph>

      {/* Question - 2 */}

      <Paragraph>02. What are HTML tags? How are they structured? Give Us 5 Tags As A Example.</Paragraph>
      <Paragraph type="answer">
      HTML tags are the basic building blocks of an HTML document. They define the structure and content of web pages by specifying elements such as headings, paragraphs, links, images, and more. Tags are written using angle brackets (&lt; &gt;) and typically come in pairs: an opening tag (&lt;tag&gt;) and a closing tag (&lt;/tag&gt;). Some tags, however, are self-closing. <br />
      <Paragraph type="para">Structure of an HTML Tag:</Paragraph> 
      •  Opening Tag: &lt;tagname&gt; <br />

      •  Content: The text or elements enclosed within the tags. <br />

      •  Closing Tag: &lt;/tagname&gt; <br />
      <span className="text-indigo-600">Example:</span> <br />
      &lt;<span className="text-red-400">tagname</span> <span className="text-orange-500">attribute</span>=" <span className="text-green-500">value</span> "&gt;Content&lt;/<span className="text-red-400">tagname</span>&gt;

      <Paragraph type="para">5 Examples of HTML Tags:</Paragraph>
      1. Heading Tag: 
      &lt;<span className="text-red-400">h1</span>&gt;Welcome to My Website&lt;/<span className="text-red-400">h1</span>&gt; <br />
      2. Paragraph Tag:
      &lt;<span className="text-red-400">p</span>&gt;Paragraph Tag:&lt;/<span className="text-red-400">p</span>&gt; <br />
      3. Anchor (Link) Tag:
      &lt;<span className="text-red-400">a</span> <span className="text-orange-500">href</span>=" <span className="text-green-500">https://example.com</span> "&gt;Visit Example&lt;/<span className="text-red-400">a</span>&gt; <br />

      4. Image Tag (Self-closing):
      &lt;<span className="text-red-400">img</span> <span className="text-orange-500">src</span>=" <span className="text-green-500">image.jpg</span> " <span className="text-orange-500">alt</span>="<span className="text-green-500">Description of image</span>"Visit Example" &lt;/<span className="text-red-400">img</span>&gt; <br />
      5. Unordered List Tag:
      <img src="rtt.png" alt="" />




      </Paragraph>
                    {/* Question - 3 */}
        
                    <Paragraph>

              03. What is the difference between &lt;head&gt;, &lt;body&gt;, and &lt;html&gt; tags? & the role of the &lt;!DOCTYPE html&gt; declaration? 
              </Paragraph>
               <Paragraph type="answer">
               <Paragraph type="para">Differences Between &lt;head&gt;, &lt;body&gt;, and &lt;html&gt;: <br /></Paragraph>
                1. &lt;head&gt; <br />
                *Contains metadata about the webpage (e.g., title, charset, links, scripts). <br />
                *Does not render visible content. <br />
                2. &lt;body&gt;<br />
                *Contains all visible content (e.g., text, images, buttons) that users see and interact with. <br />
                3. &lt;html&gt; <br />
                *Root element of the HTML document. <br />
                *Contains &lt;head&gt; and &lt;body&gt tags. <br />
                *Defines the structure of the webpage.
                <Paragraph type="para">Role of the &lt;!DOCTYPE html&gt; Declaration:</Paragraph> <br />
                1. Defination of &lt;!DOCTYPE html:&gt; <br />
                *The &lt;!DOCTYPE html&gt; declaration is a preamble that tells the browser what version of HTML to use for rendering the document. <br />
                *It ensures the browser interprets the page in standards-compliant mode, avoiding quirks mode (which can lead to inconsistent behavior). <br />
                2. Importance: <br />
                *Without the &lt;!DOCTYPE html&gt; declaration, older browsers may use quirks mode, resulting in inconsistent rendering of web pages. <br />
                *It enables modern web standards and ensures compatibility with HTML5 features. <br />
                3. Syntax: <br />
                *The declaration is not a tag but a directive, and it must appear at the very top of the HTML document. <br />
                4. HTML5 Version: <br />
                *The &lt;!DOCTYPE html&gt; declaration is simple and straightforward in HTML5, unlike earlier versions of HTML (e.g., XHTML or HTML4), where it was more verbose.


        </Paragraph>

        {/* Question - 4 */}

        <Paragraph>04. Describe the function of the &lt;title&gt; tag. Where does it appear With Example</Paragraph>
        <Paragraph type="answer">
        <Paragraph type="para">Function of the &lt;title&gt; Tag:</Paragraph>
        The &lt;title&gt; tag is used to define the title of an HTML document. It is a metadata element that appears in the browser tab or title bar of the window and helps identify the webpage's content. Additionally, the &lt;title&gt; tag is used by search engines and social media platforms when displaying the webpage in search results or sharing links. <br />
        <Paragraph type="para">It's Appearence:</Paragraph>
        The &lt;title&gt; tag is used to define the title of an HTML document. It is a metadata element that appears in the browser tab or title bar of the window and helps identify the webpage's content. Additionally, the &lt;title&gt; tag is used by search engines and social media platforms when displaying the webpage in search results or sharing links. <br />
        1. Browser Tab: The text inside the &lt;title&gt; tag is displayed on the browser tab. <br />
        2. Search Engine Results: Search engines like Google display the &lt;title&gt; content as the clickable link in search results. <br />
        3. Social Media Sharing: When a link is shared, the &lt;title&gt; tag is often used as the headline for the shared content.

        </Paragraph>

        {/* Question - 5 */}
        
        <Paragraph>05. How do you add comments in HTML, and why are they useful?</Paragraph>

        <Paragraph type="answer">
          <Paragraph type="para">Adding Comments in HTML:</Paragraph>
          &lt;!-- This is a comment --&gt;
          <Paragraph type="para"> Useful of Comments:</Paragraph>
          1. Readability: Explain code for better understanding. <br />
          2. Documentation: Provide context or instructions. <br />
          3. Debugging: Temporarily disable code without deleting it. <br />
          4. Collaboration: Help team members understand the code. <br />
          5. Organization: Structure and organize code sections. <br />

        </Paragraph> <br />


          {/* Step -2 */}


           {/* Heading paragraph */}
      <Paragraph type="heading">Step 2: HTML Elements and Attributes</Paragraph>

{/* Question - 6 */}
<Paragraph>06. What is the difference between an HTML element and an HTML attribute give us example with proper Explanation. </Paragraph>
<Paragraph type="answer">
<Paragraph type="para">Difference Between HTML Element and HTML Attribute:</Paragraph>
<img src="j3.png" alt="" />
<Paragraph type="para">Combined Example:</Paragraph>
&lt;<span className="text-red-400">a</span> <span className="text-orange-500">href</span>=" <span className="text-green-500">https://example.com</span> " <span className="text-orange-500">target</span>="<span className="text-green-500">_blank</span>"Visit Example" &lt;/<span className="text-red-400">a</span>&gt; <br />

</Paragraph>

{/* Question - 7 */}
<Paragraph>07.     Explain the global attributes in HTML, such as class, id, style, and title With Example.</Paragraph>
<Paragraph type="answer">
<Paragraph type="para">Global Attributes in HTML:</Paragraph> <br />
1. class Attribute: <br />
*Used to define one or more class names for an element. <br />
  *Classes can be used for styling elements with CSS or for targeting elements with JavaScript. <br />
  2. id Attribute: <br />
  *Provides a unique identifier for an element. <br />
  *Used for specific targeting in CSS, JavaScript, or navigation (e.g., anchors). <br />
  3. style Attribute: <br />
  *Adds inline CSS styles directly to an HTML element. <br />
  *Should be used sparingly as it mixes content with presentation. <br />
  4. title Attribute: <br />
  *Provides additional information about an element. <br />
  *Displays as a tooltip when the user hovers over the element. <br />
  <Paragraph type="para">Summary Table:</Paragraph> <br />
  <img src="j4.png" alt="" /> <br />
  <Paragraph type="para">Combined Example:</Paragraph>
                      <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                         <CodeHighlighter code={globalcode} language="html" />
                      </div>
  *class="box" applies shared styles. <br />
  *id="uniqueBox" applies unique styles. <br />
  *style="background-color: lightblue;" adds an inline background color. <br />
  *title="This is a tooltip for the box" displays a tooltip when hovered.



</Paragraph>

{/* Question - 8 */}

<Paragraph>08. What is the purpose of the alt attribute in an &lt;img&gt;tag?</Paragraph>
<Paragraph type="answer">
  <Paragraph type="para">Purpose of the alt Attribute in an &lt;img&gt; Tag:</Paragraph> 
  The alt attribute (short for "alternative text") is used in the &lt;img&gt; tag to specify a text description of the image. This description serves multiple important purposes: <br />
  1. Accessibility: <br />
  *The alt text is read aloud by screen readers, enabling visually impaired users to understand the content or purpose of the image. <br />
  *Ensures the website is accessible and complies with accessibility standards (like WCAG). <br />
  <span className="text-blue-700">Example:</span>
  &lt;<span className="text-red-400">img</span> <span className="text-orange-500">src</span>=" <span className="text-green-500">nature.jpg</span> " <span className="text-orange-500">alt</span>="<span className="text-green-500">A beautiful sunset over the mountains</span>&gt; <br />
  *If a visually impaired user navigates the page with a screen reader, they will hear: "A beautiful sunset over the mountains." <br />
  2. Backup Content (When Image Fails to Load): <br />
  *The alt text appears in place of the image if the image fails to load due to a broken link or slow network. <br />
  *This ensures users still get an idea of the content. <br />
  <span className="text-blue-700">Example:</span>
  &lt;<span className="text-red-400">img</span> <span className="text-orange-500">src</span>=" <span className="text-green-500">nonexistent.jpg</span> " <span className="text-orange-500">alt</span>="<span className="text-green-500">Photo of a cute puppy</span>&gt; <br />
  *If the src image cannot load, "Photo of a cute puppy" will be displayed in its place. <br />
  3. SEO (Search Engine Optimization): <br />
  *Search engines use the alt attribute to understand the content of images. <br />
  *Improves search engine rankings, especially in image search results. <br />
  <span className="text-blue-700">Example:</span>
  &lt;<span className="text-red-400">img</span> <span className="text-orange-500">src</span>=" <span className="text-green-500">recipe.jpg</span> " <span className="text-orange-500">alt</span>="<span className="text-green-500">Delicious homemade chocolate cake recipe</span>&gt; <br />
  *Descriptive alt text helps search engines index the image accurately. <br />
  4. Context for Non-Visual Browsing: <br />
  *Provides meaningful context for users browsing with images disabled in their browsers. <br />
  <Paragraph type="para">When to Leave the alt Attribute Empty:</Paragraph>
  *If an image is purely decorative and adds no meaningful content to the page, the alt attribute should be left empty (alt=""). <br />
  *This tells screen readers to skip the image. <br />
  <span className="text-blue-700">Example:</span>
  &lt;<span className="text-red-400">img</span> <span className="text-orange-500">src</span>=" <span className="text-green-500">recipe.jpg</span> " <span className="text-orange-500">alt</span>=""&gt; <br />

</Paragraph>

{/* Question - 9 */}
      <Paragraph>09. Describe the href attribute and its role in the &lt;a&gt; tag? </Paragraph>
      <Paragraph type="answer">
          <Paragraph type="para">href Attribute in &lt;a&gt; Tag:</Paragraph>
          *Purpose: Specifies the URL or link destination for the &lt;a&gt; (anchor) tag.
          Role: Makes the &lt;a&gt; tag a hyperlink, allowing users to navigate to a different page, section, or resource.
          <Paragraph type="para">Usage Examples:</Paragraph>
          1. Link to an External Page: 
          &lt;<span className="text-red-400">a</span> <span className="text-orange-500">href</span>=" <span className="text-green-500">https://www.google.com</span> "&gt;Visit Google&lt;/<span className="text-red-400">a</span>&gt; <br />
          *Takes the user to Google's website. <br />
          2. Link to an Internal Page: 
          &lt;<span className="text-red-400">a</span> <span className="text-orange-500">href</span>=" <span className="text-green-500">about.html</span> "&gt;About Us&lt;/<span className="text-red-400">a</span>&gt; <br />
          *Navigates to a local about.html file. <br />
          3. Link to a Section in the Same Page: 
          &lt;<span className="text-red-400">a</span> <span className="text-orange-500">href</span>=" <span className="text-green-500">#contact</span> "&gt;Go to Contact Section&lt;/<span className="text-red-400">a</span>&gt; <br />
          *Scrolls to the section with id="contact". <br />
          4. Empty href (for Placeholder Links): 
          &lt;<span className="text-red-400">a</span> <span className="text-orange-500">href</span>=" <span className="text-green-500">#</span> "&gt;Placeholder Link&lt;/<span className="text-red-400">a</span>&gt; <br />
          *Does not navigate anywhere; often used for dummy links.
          . <br />
          <Paragraph type="para">Key Notes:</Paragraph>
          *href is mandatory for &lt;a&gt; tags to act as hyperlinks. <br />
          *If omitted or left empty, the &lt;a&gt; tag won't function as a link. <br />
          *Can also link to email (mailto:) or phone (tel:).




      </Paragraph>

      {/* Question - 10 */}

      <Paragraph>10. How does the target attribute work within an &lt;a&gt; tag? What is _blank?</Paragraph>
      <Paragraph type="answer">
           <Paragraph type="para">target Attribute in &lt;a&gt; Tag:</Paragraph>
           1. Purpose: Specifies where to open the linked document when the link is clicked. <br />
           2. Values: <br />
           *_blank: Opens the link in a new tab or window. <br />
           *_self: Opens the link in the same tab (default behavior). <br />
           *_parent: Opens the link in the parent frame (used in framesets). <br />
           *_top: Opens the link in the full body of the window, breaking out of frames. <br />
           <Paragraph type="para">Usage Example:</Paragraph>
           &lt;<span className="text-red-400">a</span> <span className="text-orange-500">href</span>=" <span className="text-green-500">https://example.com</span> "<span className="text-orange-500">target</span>=" <span className="text-green-500">blank</span> "&gt;Placeholder Link&lt;/<span className="text-red-400">a</span>&gt; <br />
           <Paragraph type="para">Key Notes:</Paragraph>
           *Enhances usability: Use _blank for external links or resources to avoid losing the user's current context. <br />
           *For security, consider adding rel="noopener noreferrer" with _blank to prevent malicious access to the referring page. <br />


      </Paragraph> <br />


      {/* Step -3 */}


      <Paragraph type="heading"> Step 3: Common HTML Tags</Paragraph> <br />
      {/* Question - 11 */}

            <Paragraph>11. How to add favicon in HTML & Why ?</Paragraph> 
            <Paragraph type="answer">
                <Paragraph type="para">Steps to add a favicon:</Paragraph>
                1. Prepare your Favicon Image: The image should be a square (typically 16x16, 32x32, or 48x48 pixels), and usually in .ico, .png, or .jpg format. <br />

                2. Place the Favicon Image: Upload the favicon image to your website's root directory or any folder in your project. <br />

                3. Link the Favicon in HTML: Add this &lt;link&gt; tag inside the &lt;/head&gt; section of your HTML document. <br />
                      <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                         <CodeHighlighter code={Faviconcode} language="html" />
                      </div>
                Replace "path/to/your/favicon.ico" with the actual path to your favicon file. <br />
                <Paragraph type="para">Why Add a Favicon?</Paragraph>
                1. Brand Identity: A favicon reinforces your website's brand and provides a visual representation of your website, making it easily identifiable in browser tabs. <br />

                2. Usability: It helps users quickly locate your website when they have multiple tabs open. <br />
                3. Professional Appearance: favicon adds a polished and professional touch to your website, enhancing its credibility. <br />

                4SEO: While favicons themselves don’t directly affect SEO, they contribute to user experience, which can indirectly affect site performance. <br /> <br />
                
            </Paragraph>

            {/* Question -12 */}

            <Paragraph>12. What is formatting in HTML?</Paragraph>
            <Paragraph type="answer">
                Formatting in HTML refers to the process of using HTML tags to style and structure text for better readability and presentation on a web page. It includes making text bold, italic, underlined, or adding headings and paragraphs.
                <Paragraph type="para">Common Formatting Tags in HTML:</Paragraph>
                1. Bold: &lt;b&gt; or &lt;strong&gt; Example: &lt;b&gt;Bold text&lt;/b&gt; <br />
                2. Italic: &lt;i&gt; or &lt;em&gt; Example: &lt;i&gt;Italic text&lt;/i&gt;
            </Paragraph> <br />
            {/* Question -13 */}

            <Paragraph>13. What Is Inline and block elements in html5 Give Us The Proper Explain With Example?</Paragraph>
            <Paragraph type="answer">
                In HTML5, elements are classified as inline or block based on their default behavior in the document flow. <br />
                <Paragraph type="para">Inline Elements:</Paragraph>
                1. Definition: Inline elements do not start on a new line and only take up as much width as necessary. They are typically used to format small pieces of content within a block element. <br />
                2. Characteristics: <br />
                *Do not force a line break. *Can contain text or other inline elements. *Width and height cannot be set (default behavior). <br />
                3. Examples: <br />
                      <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                         <CodeHighlighter code={InlineCode} language="html" />
                      </div>
                *These elements appear on the same line unless styled otherwise. <br />
                <Paragraph type="para">Block Elements: </Paragraph>
                1. Definition: Block elements always start on a new line and take up the full width available by default. <br />
                2. Characteristics: *Begin on a new line. *Can contain other block elements, inline elements, or text. *Width, height, margin, and padding can be customized. <br />
                3. Examples: <br />
                      <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                         <CodeHighlighter code={BlockCode} language="html" />
                      </div>
                *These elements stack vertically by default.
                <Paragraph type="para">Example in Context:</Paragraph>
                      <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                         <CodeHighlighter code={mixeccode} language="html" />
                      </div>
            </Paragraph>

            {/* Question -14 */}

            <Paragraph>14. What is a marquee?</Paragraph> 
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
                      <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                         <CodeHighlighter code={marqueeCode} language="html" />
                      </div>
                <Paragraph type="para">Why Avoid &lt;marquee&gt;?</Paragraph>
                1. Deprecated: &lt;marquee&gt; is not supported in HTML5 and modern browsers. <br />
                2. Accessibility Issues: It can be distracting or hard to read for users with disabilities. <br />
                3. Better Alternatives: CSS animations and JavaScript provide more control and are widely supported. <br />

            </Paragraph> <br />

            {/* Question - 15 */}

            <Paragraph>15. Explain the difference between &lt;p&gt;, &lt;span&gt;, and &lt;div&gt; tags. When would you use each?</Paragraph> 
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
                      <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                         <CodeHighlighter code={divCode} language="html" />
                      </div>
                <Paragraph type="para">When to Use:</Paragraph>
                * &lt;p&gt;: For paragraphs or text content. <br />
                * &lt;span&gt;: For small, inline styling or text grouping. <br />
                * &lt;div&gt;: For grouping or layout purposes. <br />

            </Paragraph> <br />

            {/* Question -16 */}
            <Paragraph>16. Describe the &lt;ul&gt;, &lt;ol&gt;, and &lt;li&gt; tags for creating lists.</Paragraph>
            <Paragraph type="answer">
                <Paragraph type="para">HTML Tags for Lists:</Paragraph>
                1. &lt;ul&gt; (Unordered List): <br />
                * Purpose: Creates a list with bullet points. <br />
                * Usage: For non-sequential items. <br />
                * Example:
                      <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                         <CodeHighlighter code={ulCode} language="html" />
                      </div>
                2. &lt;ol&gt; (Ordered List): <br />
                * Purpose: Creates a numbered list. <br />
                * Usage: For sequential or ranked items. <br />
                * Example: 
                      <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                         <CodeHighlighter code={olCode} language="html" />
                      </div>
                3. &lt;li&gt; (List Item): <br />
                * Purpose: Defines an item in a list (used inside &lt;ul&gt; or &lt;ol&gt;). <br />
                * Example: 
                      <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                         <CodeHighlighter code={liCode} language="html" />
                      </div>
                <Paragraph type="para">Key Points:</Paragraph>
                * Use &lt;ul&gt; for unordered lists.
                * Use &lt;ol&gt; for ordered lists.
                * Use &lt;li&gt; for each list item.

            </Paragraph> <br />

            {/* Question -17 */}

            <Paragraph>17. Describe how &lt;input&gt; works and some of its types, such as text, radio, and checkbox.</Paragraph> 
            <Paragraph type="answer">
                <Paragraph type="para">HTML &lt;input&gt; Tag:</Paragraph>
                * Purpose: Collects user input in forms. <br />
                * Behavior: Creates various input fields depending on the type attribute.
                <Paragraph type="para">Common Types of &lt;input&gt; Tag:</Paragraph>
                1. Text (type="text"): <br />
                * Purpose: For single-line text input. <br />
                * Example: 
                      <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                         <CodeHighlighter code={textCode} language="html" />
                      </div>
                2. Radio (type="radio"): <br />
                * Purpose: For selecting one option from a group. <br />
                * Example: <br />
                      <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                         <CodeHighlighter code={RadioCode} language="html" />
                      </div>
                3. Checkbox (type="checkbox"): <br />
                * Purpose: For selecting multiple options. <br />
                * Example: <br />
                      <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                         <CodeHighlighter code={Checkbox} language="html" />
                      </div>
                <Paragraph type="para">Key Points:</Paragraph>
                * &lt;input&gt; is versatile and adapts to the type value.
                * Use text for single-line input, radio for single-choice, and checkbox for multiple-choice.
            </Paragraph> <br />

            {/* Question- 18 */}

            <Paragraph>18. What are &lt;button&gt;, &lt;textarea&gt;, and &lt;select&gt; tags, and how do they function?</Paragraph>
            <Paragraph type="answer">
                <Paragraph type="para">HTML Tags Overview:</Paragraph>
                1. &lt;button&gt;: <br />
                * Purpose: Creates a clickable button. <br />
                * Function: Used for form submission or custom actions with scripts. <br />
                * Example: 
                      <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                         <CodeHighlighter code={buttonTag} language="html" />
                      </div>
                2. &lt;textarea&gt;: <br />
                * Purpose: Creates a multi-line text input field. <br />
                * Function: Used for long user inputs like comments or messages. <br />
                * Example:
                      <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                         <CodeHighlighter code={textareaCode} language="html" />
                      </div>
                3. &lt;select&gt;: <br />
                * Purpose: Creates a dropdown menu. <br />
                * Function: Allows users to select one or multiple options. <br />
                * Example:
                      <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                         <CodeHighlighter code={selectCode} language="html" />
                      </div>
                <Paragraph type="para">Key Points:</Paragraph>
                * &lt;button&gt;: For actions like submitting forms. * &lt;textarea&gt;: For multi-line text input. * &lt;select&gt;: For dropdown options.
            </Paragraph> <br />
            
            {/* Question- 19 */}

            <Paragraph>19. How to link CSS to HTML?</Paragraph>
            <Paragraph type="answer">
            To link a CSS file to an HTML document, use the &lt;link&gt; tag in the &lt;head&gt; section of your HTML file.
            <Paragraph type="para">Syntax:</Paragraph>
                      <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                         <CodeHighlighter code={linkjon} language="html" />
                      </div>
            <Paragraph type="para">Steps:</Paragraph>
            1. Create a CSS File: Save your CSS code in a .css file (e.g., styles.css). <br />
            2. Add the &lt;link&gt; Tag: Place the &lt;link&gt; tag in the &lt;head&gt; section of your HTML file. <br />
            3. Specify the Path: Use the href attribute to provide the file path to your CSS. <br />
            <Paragraph type="para">Example:</Paragraph>
                      <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                         <CodeHighlighter code={linkRon} language="html" />
                      </div>
            <Paragraph type="para">Key Points:</Paragraph>
            * Use &lt;link&gt; for external stylesheets.
            * Ensure the href path to the CSS file is correct.
            * Always include the rel="stylesheet" attribute.

            </Paragraph> <br />

            {/* Question - 20*/}

            <Paragraph>20. What is the &lt;label&gt; tag, and how is it associated with form inputs?</Paragraph> 
            <Paragraph type="answer">
                <Paragraph type="para">HTML &lt;label&gt; Tag:</Paragraph>
                The &lt;label&gt; tag in HTML is used to define a label for a form input element. It improves accessibility by associating descriptive text with form controls.
                <Paragraph type="para">Key Features:</Paragraph>
                1. Association: Links a label to a specific input using the for attribute or by nesting. <br />
                2. Purpose: Enhances user experience and accessibility (e.g., for screen readers).
                <Paragraph type="para">Ways to Use &lt;label&gt;:</Paragraph>
                1. Using the for Attribute:
                    * The for attribute links the label to an input by matching the input's id.
                      <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                         <CodeHighlighter code={labelTag} language="html" />
                      </div>
                    2. Nesting the Input Inside &lt;label&gt;: * The label automatically associates with the input when the input is inside the &lt;label&gt;.
                      <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                         <CodeHighlighter code={labelNestedTag} language="html" />
                      </div>
                    <Paragraph type="para">Benefits:</Paragraph>
                    * Accessibility: Improves usability for assistive technologies. <br />
                    * Click Target: Clicking the label focuses the associated input. <br />
                    <Paragraph type="para">Key Points:</Paragraph>
                    * Use for to link a label to an input. * Nesting works without for. * Boosts accessibility and usability. 


            </Paragraph> <br />

            {/* Step 4: Advanced HTML Concepts */}

            <Paragraph type="heading">Step 4: Advanced HTML Concepts</Paragraph> <br />

            {/* Question -21 */}

            <Paragraph>21. What is the &lt;iframe&gt; tag, and what are some common attributes used with it?</Paragraph> 
            <Paragraph type="answer">
            The &lt;iframe&gt; tag in HTML is used to embed another HTML document within the current document. It creates an inline frame that can display web pages, videos, maps, or other content from external or internal sources.
            <Paragraph type="para">Common Attributes of the &lt;iframe&gt; Tag</Paragraph>
            1. src: Specifies the URL of the document to be embedded.
                <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                    <CodeHighlighter code={srcCode} language="html" />
                </div>
            2. width: Specifies the width of the &lt;iframe&gt;, either in pixels or as a percentage.
                <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                    <CodeHighlighter code={Width} language="html" />
                </div>
            3. height: Specifies the height of the &lt;iframe&gt;, either in pixels or as a percentage.
                <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                    <CodeHighlighter code={Height} language="html" />
                </div>
            4. title: Provides a description of the iframe content for accessibility purposes.
                <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                    <CodeHighlighter code={Title} language="html" />
                </div>
            
            5. allow: Specifies permissions for the iframe's content, such as using a camera, microphone, or fullscreen mode.
                <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                    <CodeHighlighter code={allow} language="html" />
                </div>
            6. sandbox: *allow-same-origin. * allow-scripts. * allow-popups
                <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                    <CodeHighlighter code={sandbox} language="html" />
                </div>
            7. name: Assigns a name to the &lt;iframe&gt; that can be used as a target for links or forms.
                <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                    <CodeHighlighter code={Name} language="html" />
                </div>
            8. loading: * Controls lazy loading behavior for the &lt;iframe&gt;. ** Values: lazy (load only when in the viewport), eager (load immediately).
                <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                    <CodeHighlighter code={loading} language="html" />
                </div>
            9. allowfullscreen: Allows the &lt;iframe&gt; content to be displayed in fullscreen mode.
                <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                    <CodeHighlighter code={allowfullscreen} language="html" />
                </div>
            <Paragraph type="para">Use Cases:</Paragraph>
            * Embedding videos (e.g., YouTube). * Displaying maps (e.g., Google Maps). * Loading external web pages. * Embedding interactive content like forms or tools.
            <Paragraph type="para">Security Considerations:</Paragraph>
            *Be cautious when embedding external content to prevent cross-site scripting (XSS) or other attacks..*Use the sandbox attribute to limit what the iframe can do.

            {/* Question - 22 */}

        


            </Paragraph>

             {/* Question - 22 */}

             <Paragraph>22. Describe how the &lt;audio&gt; and &lt;video&gt; tags work, including common attributes like controls, autoplay, and loop.</Paragraph> 
             <Paragraph type="answer">
             The &lt;audio&gt; and &lt;video&gt; tags in HTML are used to embed audio and video content into a webpage. They provide built-in playback functionality and eliminate the need for third-party plugins like Flash.
             <Paragraph type="para">&lt;audio&gt; Tag:</Paragraph>
             The &lt;audio&gt; tag is used to embed audio files such as MP3, Ogg, or WAV.
                <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                    <CodeHighlighter code={audioTag} language="html" />
                </div>
             <Paragraph type="para">&lt;video&gt; Tag:</Paragraph>
             The &lt;video&gt; tag is used to embed video files such as MP4, WebM, or Ogg.
                <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                    <CodeHighlighter code={videoTag} language="html" />
                </div>
             <Paragraph type="para">Common Attributes (Shared by Both Tags):</Paragraph>
             1. controls: Adds playback controls such as play, pause, volume, and progress bar.
                <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                    <CodeHighlighter code={controls} language="html" />
                </div>
             2. autoplay: * Starts playing the media as soon as it is loaded.* Important: Include the muted attribute for autoplaying videos to prevent browsers from blocking playback.
                <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                    <CodeHighlighter code={autoplay} language="html" />
                </div>
             
             3. loop: Makes the media start over again when it reaches the end.

                <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                    <CodeHighlighter code={loop} language="html" />
                </div>
             4. muted: Starts the media with the sound muted.
                <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                    <CodeHighlighter code={muted} language="html" />
                </div>
             5. preload:  *auto: Load the whole file.* metadata: Load only metadata (e.g., duration).* none: Don’t preload anything.
                <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                    <CodeHighlighter code={preload} language="html" />
                </div>
             
             6. poster (For &lt;video&gt; only): Specifies an image to display while the video is loading or until the user presses play.
                <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                    <CodeHighlighter code={postar} language="html" />
                </div>
              For better browser compatibility, use the &lt;source&gt; element to specify multiple formats for audio or video files. 
             




             </Paragraph> <br />

             {/* Question -23 */}

             <Paragraph>23. Explain the &lt;picture&gt; tag and its usage in responsive design.</Paragraph>
             <Paragraph type="answer">

                     The &lt;picture&gt; tag in HTML is a container element used to provide multiple image sources for a single image display. It plays a crucial role in responsive web design, allowing developers to deliver optimized images based on the user's device, screen size, or resolution.
                     <Paragraph type=" para">Key Features of the &lt;picture&gt; Tag: </Paragraph>
                     1. Multiple Sources for Images: <br />
                     * The &lt;picture&gt; tag can include one or more &lt;source&gt; elements, each specifying different image files or formats to be used in various scenarios. <br />
                     * The &lt;img&gt; element inside the &lt;picture&gt; tag acts as a fallback for browsers that do not support the &lt;picture&gt; element or do not match any of the specified conditions. <br />
                     2. Responsive Design: <br />
                     * It enables the delivery of images tailored to specific device characteristics, such as viewport width, pixel density, or media queries. <br />
                     * This reduces bandwidth usage and ensures optimal performance and image quality. <br />
                     3. Support for Modern Formats: <br />
                     * You can specify modern image formats like WebP or AVIF for compatible browsers while providing fallback formats like JPEG or PNG for others.
                     <Paragraph type="para">Syntax of the &lt;picture&gt; Tag:</Paragraph>
                     <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                          <CodeHighlighter code={pictureTag} language="html" />
                      </div>
                     <Paragraph type="para">Benefits in Responsive Design:</Paragraph>
                     1. Performance Optimization: Reduces load time by serving appropriately sized images for different devices. <br />
                     2. Flexibility: Provides tailored experiences for various resolutions and conditions. <br />
                     3. Enhanced Compatibility: Ensures backward compatibility with older browsers. <br />
                     Browser Support:Most modern browsers support the &lt;picture&gt; tag, but it is advisable to include a fallback &lt;img&gt; element for comprehensive compatibility.


             </Paragraph> <br />

             {/* Question - 24 */}

             <Paragraph>24. Design a basic form that includes text input, radio buttons, a checkbox, and a submit button.</Paragraph> 
             <Paragraph type="answer">
                      Here is a basic HTML form with text input, radio buttons, a checkbox, and a submit button:
                      <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                          <CodeHighlighter code={radioSubmit} language="html" />
                      </div>
                      This form contains: <br />
                      * A text input for the user's name. <br />
                      * Radio buttons for selecting gender. <br />
                      * A checkbox to subscribe to a newsletter. <br />
                      * A submit button to send the form data. <br />
                      You can replace the action attribute in the &lt;form&gt; tag with the desired URL where the form will be submitted.
             </Paragraph> <br />

             {/* Question -25 */}

             <Paragraph>25. Embed a responsive YouTube video using the &lt;iframe&gt; tag.</Paragraph> 
             <Paragraph type="answer">
                    Here is an example of embedding a responsive YouTube video using the &lt;iframe&gt; tag tag:
                    
             </Paragraph> <br />
             <div className="  px-0 sm:px-20 md:px-64 rounded-md">
                 <CodeHighlighter code={videoCode} language="html" />
             </div> <br />

             {/* Question -26 */}

             <Paragraph>26. Make a collapsible/expandable section using &lt;details&gt; and &lt;summary&gt; tags.</Paragraph> 

             <Paragraph type="answer">
                  Here’s how you can create a collapsible/expandable section using the &lt;details&gt; and &lt;summary&gt; tags:
                  
             </Paragraph> <br />
             <div className="  px-0 sm:px-20 md:px-64 rounded-md">
                 <CodeHighlighter code={ds} language="html" />
             </div> <br />


             {/* Question - 27 */}

             <Paragraph>27. Create a simple navigation bar using &lt;nav&gt;, &lt;ul&gt;, and &lt;li&gt; tags with three links.</Paragraph>

             <Paragraph type="answer">
                Here’s a simple navigation bar using the  &lt;nav&gt;, &lt;ul&gt;, and &lt;li&gt; tags with three links:
               
             </Paragraph>
             <div className="  px-0 sm:px-20 md:px-64 rounded-md">
                 <CodeHighlighter code={NUL} language="html" />
             </div> <br />

             {/* Question - 28 */}

             <Paragraph>28. Create a complex table with merged cells (using colspan and rowspan) and include a &lt;caption&gt;, &lt;thead&gt;, &lt;tfoot&gt;, and &lt;tbody&gt;. Add descriptive &lt;th&gt; elements for accessibility and structure.</Paragraph>
             <Paragraph type="answer">
                 Here's an example of a complex table with merged cells using colspan and rowspan, and including semantic elements such as &lt;caption&gt;, &lt;thead&gt;, &lt;tfoot&gt;, and &lt;tbody&gt:
             </Paragraph>
             <div className="  px-0 sm:px-20 md:px-64 rounded-md">
                 <CodeHighlighter code={complexTable} language="html" />
             </div> <br />

              {/* Question - 29 */}

              <Paragraph>29. Create a simple webpage layout with a header, main section, and footer using only HTML and semantic tags.</Paragraph>
              <Paragraph type="answer">
                  Here’s an example of a simple webpage layout using semantic HTML tags for a header, main section, and footer:
              </Paragraph>

              <div className="  px-0 sm:px-20 md:px-64 rounded-md">
                 <CodeHighlighter code={webpageLayout} language="html" />
             </div> <br />

             {/* Question - 30 */}

             <Paragraph>30. Write Your favourite 10 HTML Tags & Explain Us Why That’s Your favourite tags. </Paragraph>
             <Paragraph type="answer">
                Here are my 10 favorite HTML tags, along with explanations of why they are useful and powerful:
                <Paragraph type="para"> 1. &lt;div&gt; </Paragraph>
                * Why it's a favorite: It's the most versatile tag and serves as a container for grouping and styling elements. Whether you're building layouts, applying styles, or organizing content, &lt;div&gt; is a go-to tag.
                <Paragraph type="para">Example: </Paragraph>
                <div className="  px-0 sm:px-20 md:px-40 rounded-md">
                  <CodeHighlighter code={tenHtmlTag} language="html" />
                </div>

                <Paragraph type="para"> 2. &lt;section&gt; </Paragraph>
                * Why it's a favorite: Semantically defines sections of a document, making the content more accessible and organized. Ideal for dividing pages into logical parts.
                <Paragraph type="para">Example: </Paragraph>
                <div className="  px-0 sm:px-20 md:px-40 rounded-md">
                  <CodeHighlighter code={SectionTag} language="html" />
                </div>

                <Paragraph type="para"> 3. &lt;article&gt; </Paragraph>
                * Why it's a favorite: Perfect for encapsulating independent pieces of content, such as blog posts or news articles. Enhances readability and SEO.
                <Paragraph type="para">Example: </Paragraph>
                <div className="  px-0 sm:px-20 md:px-40 rounded-md">
                  <CodeHighlighter code={articleTag} language="html" />
                </div>

                <Paragraph type="para"> 4. &lt;header&gt; </Paragraph>
                * Why it's a favorite: Makes it easy to define the header area of a webpage or a section. It's semantic, descriptive, and improves structure.
                <Paragraph type="para">Example: </Paragraph>
                <div className="  px-0 sm:px-20 md:px-40 rounded-md">
                  <CodeHighlighter code={headerTag} language="html" />
                </div>

                <Paragraph type="para"> 5. &lt;nav&gt; </Paragraph>
                * Why it's a favorite: Organizes navigation links in a semantic and accessible way. It makes it clear that the contained links are for navigation.
                <Paragraph type="para">Example: </Paragraph>
                <div className="  px-0 sm:px-20 md:px-40 rounded-md">
                  <CodeHighlighter code={navTag} language="html" />
                </div>

                <Paragraph type="para"> 6. &lt;figure&gt; and &lt;figcaption&gt; </Paragraph>
                * Why they're favorites: Together, they offer a semantic way to include images and their captions, improving context and accessibility.
                <Paragraph type="para">Example: </Paragraph>
                <div className="  px-0 sm:px-20 md:px-40 rounded-md">
                  <CodeHighlighter code={figureTag} language="html" />
                </div>

                <Paragraph type="para"> 7. &lt;form&gt; </Paragraph>
                * Why it's a favorite: Enables interaction between the user and the server. Whether for login, registration, or feedback, forms are the backbone of web interactivity.

                <Paragraph type="para">Example: </Paragraph>
                <div className="  px-0 sm:px-20 md:px-40 rounded-md">
                  <CodeHighlighter code={formTag} language="html" />
                </div>

                <Paragraph type="para"> 8. &lt;details&gt; and &lt;summary&gt; </Paragraph>
                * Why they're favorites: They provide an easy way to create collapsible content without needing JavaScript. Great for FAQs or hiding extra information.
                <Paragraph type="para">Example: </Paragraph>
                <div className="  px-0 sm:px-20 md:px-40 rounded-md">
                  <CodeHighlighter code={detailsTag} language="html" />
                </div>

                <Paragraph type="para"> 9. &lt;table&gt; </Paragraph>
                * Why it's a favorite: Organizes complex data into rows and columns, making it easier to display and analyze structured information.
                <Paragraph type="para">Example: </Paragraph>
                <div className="  px-0 sm:px-20 md:px-40 rounded-md">
                  <CodeHighlighter code={tableTag} language="html" />
                </div>

                <Paragraph type="para"> 10. &lt;a&gt; </Paragraph>
                * Why it's a favorite: Hyperlinks are the foundation of the web, and the &lt;a&gt; tag connects pages, resources, and documents seamlessly.
                <Paragraph type="para">Example: </Paragraph>
                <div className="  px-0 sm:px-20 md:px-40 rounded-md">
                  <CodeHighlighter code={aTag} language="html" />
                </div>


                
             </Paragraph>

             






     
      
    </div>

    // Step 2

      

  );
}

export default HtmlInterview;
