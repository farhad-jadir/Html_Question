import React from "react";
import clsx from "clsx";
import { baseParagraphClasses } from "../utils/ClassNames";
import CodeHighlighter from "../documentation/CodeHighlighter";
import JsCoding from "./JsCoding";

function Paragraph({ children, type = "question", additionalClasses = "" }) {
  const paragraphClass = clsx(baseParagraphClasses[type], additionalClasses);
  return <p className={paragraphClass}>{children}</p>;
}

function Functions() {
  const { } = JsCoding();
  return (
    <div className="bg-[#101C28] p-2">

        <Paragraph type="heading">Step 4: Advanced Bootstrap Questions  </Paragraph> <br />

        {/* {/* Question 24 */}

        <Paragraph>24. How do you customize Bootstrap using SASS or LESS? </Paragraph>
        
        
      



    </div>
  );
}

export default Functions;


