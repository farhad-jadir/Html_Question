import React from "react";
import clsx from "clsx";
import CodeHighlighter from "./CodeHighlighter";
import CodeExamples from "./CodeExamples";

const baseParagraphClasses = {
  question: "text-lg font-medium text-gray-800 mb-2",
  answer: "text-sm text-gray-600 mb-4",
  para: "text-base text-gray-700 mb-3",
  heading: "text-2xl font-bold text-gray-900 mb-6",
};

function Paragraph({ children, type = "question", additionalClasses = "" }) {
  const paragraphClass = clsx(baseParagraphClasses[type], additionalClasses);
  return <p className={paragraphClass}>{children}</p>;
}

function Elements() {
  const { basicCode, videoCode } = CodeExamples();

  return (
    <div className="bg-[#101C28] p-6 space-y-6 text-white">
      {/* Heading paragraph */}
      <Paragraph type="heading">Step 2: HTML Elements and Attributes</Paragraph>

      {/* Question - 6 */}
      <Paragraph>6. What is the difference between an HTML element and an HTML attribute? Give an example with proper explanation.</Paragraph>
      <Paragraph type="answer">
        <strong>Difference Between HTML Element and HTML Attribute:</strong>
        <br />
        <strong>Combined Example:</strong>
        <br />
        &lt;a href="https://example.com" target="_blank"&gt;Visit Example&lt;/a&gt;
      </Paragraph>

      {/* Question - 7 */}
      <Paragraph>
        7. Explain the global attributes in HTML, such as class, id, style, and title with examples.
      </Paragraph>
      <Paragraph type="answer">
        <strong>Global Attributes in HTML:</strong>
        <ul className="list-disc pl-6">
          <li>
            <strong>class:</strong> Used to define class names for styling or targeting with JavaScript.
          </li>
          <li>
            <strong>id:</strong> Provides a unique identifier for an element.
          </li>
          <li>
            <strong>style:</strong> Adds inline CSS styles directly to an element.
          </li>
          <li>
            <strong>title:</strong> Displays additional information as a tooltip when hovered.
          </li>
        </ul>
      </Paragraph>

      {/* Basic Code Example */}
      <div className="bg-gray-900 p-4 rounded-md">
        <CodeHighlighter code={basicCode} language="html" />
      </div>

      {/* Question - 8 */}
      <Paragraph>8. How to embed a responsive YouTube video in HTML? Provide a proper explanation and example code.</Paragraph>
      <Paragraph type="answer">
        <strong>Embedding Responsive YouTube Video:</strong>
        Use a container with a fixed aspect ratio to ensure responsiveness. Example:
      </Paragraph>
      <div className="bg-gray-900 p-4 rounded-md">
        <CodeHighlighter code={videoCode} language="html" />
      </div>
    </div>
  );
}

export default Elements;
