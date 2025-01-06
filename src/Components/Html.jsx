import React from "react";
import clsx from "clsx";
import { baseParagraphClasses } from "./utils/ClassNames";

function Paragraph({ children, type = "question", additionalClasses = "" }) {
  const paragraphClass = clsx(baseParagraphClasses[type], additionalClasses);
  return <p className={paragraphClass}>{children}</p>;
}

function HtmlInterview() {
    
    
  return (
    <div className="bg-[#101C28] p-6 space-y-4">
      {/* Heading paragraph */}
      <Paragraph type="heading">Step 1: Basic HTML Questions</Paragraph>
      {/* Question - 1 */}
      <Paragraph>1. What is HTML? Explain its purpose & Basic Syntax Of HTML ? </Paragraph>
      <Paragraph type="answer">
        HTML (Hypertext Markup Language) is the standard language used to create and design webpages. It forms the basic building block for structuring content on the web. HTML is not a programming language; it is a markup language that uses tags to define elements on a webpage, such as text, images, links, forms, and more.

        HTML allows browsers to understand how to display the structure of a webpage. It organizes content in a hierarchical structure, defining headings, paragraphs, lists, links, and other elements. <br />
        <Paragraph type="para">Purpose of HTML:</Paragraph>
         The primary purpose of HTML is to define the structure and layout of a web page. It uses a series of elements and tags to organize content, such as headings, paragraphs, links, images, and more. HTML elements tell the browser how to display the content, making it possible to create visually appealing and functional web pages. <br />
        <Paragraph type="para">Basic Syntax of HTML:</Paragraph>
        The basic structure of an HTML document includes: <br />

        !DOCTYPE html: Declares the document type and version of HTML. This is placed at the top of the HTML document. <br />
        &lt;/html&gt;: The root element that wraps all the content of the page. <br />
        &lt;/head&gt;: Contains meta-information about the HTML document like title, character encoding, linked stylesheets, and scripts. <br />
        &lt;/body&gt;: Contains the actual content of the webpage such as text, images, links, etc. <br />
        &lt;/title&gt;: Sets the title of the webpage that appears in the browser tab. <br />
        <Paragraph type="para">Basic Example: <img src="htt.png" alt="" /></Paragraph>






      </Paragraph>

      {/* Question - 2 */}

      <Paragraph>2. What are HTML tags? How are they structured? Give Us 5 Tags As A Example.</Paragraph>
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
      &lt;<span className="text-red-400">img</span> <span className="text-orange-500">src</span>=" <span className="text-green-500">image.jpg</span> " <span className="text-orange-500">alt</span>="<span className="text-green-500">Description of image</span>"Visit Example" &lt;/<span className="text-red-400">a</span>&gt; <br />
      5. Unordered List Tag:
      <img src="rtt.png" alt="" />




      </Paragraph>
                    {/* Question - 3 */}
        
                    <Paragraph>

              3. What is the difference between &lt;head&gt;, &lt;body&gt;, and &lt;html&gt; tags? & the role of the &lt;!DOCTYPE html&gt; declaration? 
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

        <Paragraph>4. Describe the function of the &lt;title&gt; tag. Where does it appear With Example</Paragraph>
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
        
        <Paragraph>6. How do you add comments in HTML, and why are they useful?</Paragraph>

        <Paragraph type="answer">
          <Paragraph type="para">Adding Comments in HTML:</Paragraph>
          &lt;!-- This is a comment --&gt;
          <Paragraph type="para"> Useful of Comments:</Paragraph>
          1. Readability: Explain code for better understanding. <br />
          2. Documentation: Provide context or instructions. <br />
          3. Debugging: Temporarily disable code without deleting it. <br />
          4. Collaboration: Help team members understand the code. <br />
          5. Organization: Structure and organize code sections. <br />

        </Paragraph>





     
      
    </div>
  );
}

export default HtmlInterview;
