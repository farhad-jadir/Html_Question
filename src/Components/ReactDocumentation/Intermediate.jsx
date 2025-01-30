import React from "react";
import clsx from "clsx";
import { baseParagraphClasses } from "../utils/ClassNames";
import CodeHighlighter from "../documentation/CodeHighlighter";
import ReactCoding from "./ReactCoding";

function Paragraph({ children, type = "question", additionalClasses = "" }) {
  const paragraphClass = clsx(baseParagraphClasses[type], additionalClasses);
  return <p className={paragraphClass}>{children}</p>;
}

function Intermediate () {
  const { } = ReactCoding();
  return (
    <div className="bg-[#101C28] p-2">

        <Paragraph type="heading">Step 2: Intermediate Interview Questions Of React: </Paragraph> <br />

        {/* {/* Question 01 */}

        <Paragraph>01   . How do window.open and window.close methods work in JavaScript?  </Paragraph>
        <Paragraph type="answer"></Paragraph>
        
        
        
      



    </div>
  );
}

export default Intermediate ;


