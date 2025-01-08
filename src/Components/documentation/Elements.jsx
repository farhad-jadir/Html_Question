import React from "react";
import clsx from "clsx";
import { baseParagraphClasses } from "../utils/ClassNames";

function Paragraph({ children, type = "question", additionalClasses = "" }) {
  const paragraphClass = clsx(baseParagraphClasses[type], additionalClasses);
  return <p className={paragraphClass}>{children}</p>;
}

function Elements() {
  return (
    <div className="bg-[#101C28] p-6 space-y-4">
      
      {/* Heading paragraph */}
      <Paragraph type="heading">Step 2: HTML Elements and Attributes</Paragraph>

      {/* Question - 6 */}
      <Paragraph>6. What is the difference between an HTML element and an HTML attribute give us example with proper Explanation. </Paragraph>
      <Paragraph type="answer">
      <Paragraph type="para">Difference Between HTML Element and HTML Attribute:</Paragraph>
      <img src="j3.png" alt="" />
      <Paragraph type="para">Combined Example:</Paragraph>
      &lt;<span className="text-red-400">a</span> <span className="text-orange-500">href</span>=" <span className="text-green-500">https://example.com</span> " <span className="text-orange-500">target</span>="<span className="text-green-500">_blank</span>"Visit Example" &lt;/<span className="text-red-400">a</span>&gt; <br />

      </Paragraph>

      {/* Question - 7 */}
      <Paragraph>7.     Explain the global attributes in HTML, such as class, id, style, and title With Example.</Paragraph>
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
        <img src="j5.png" alt="" />
        *class="box" applies shared styles. <br />
        *id="uniqueBox" applies unique styles. <br />
        *style="background-color: lightblue;" adds an inline background color. <br />
        *title="This is a tooltip for the box" displays a tooltip when hovered.



      </Paragraph>

      {/* Question - 8 */}

      <Paragraph>8. What is the purpose of the alt attribute in an &lt;img&gt;tag?</Paragraph>
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
            <Paragraph>9. Describe the href attribute and its role in the &lt;a&gt; tag? </Paragraph>
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


            </Paragraph>

    </div>


  );
}

export default Elements;
