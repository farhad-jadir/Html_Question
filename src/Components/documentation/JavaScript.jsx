import React from "react";
import clsx from "clsx";
import JavaScriptFundamentals from "../JavascriptDocumentation/JavaScriptFundamentals";
import Functions from "../JavascriptDocumentation/Functions";
import ArraysandStrings from "../JavascriptDocumentation/ArraysandStrings";
import Control from "../JavascriptDocumentation/Control";
import Miscellaneous from "../JavascriptDocumentation/Miscellaneous";

function Paragraph({ children, type = "question", additionalClasses = "" }) {
  const paragraphClass = clsx(baseParagraphClasses[type], additionalClasses);
  return <p className={paragraphClass}>{children}</p>;
}

function JavaScript() {
      
  return (
    <div className="space-y-4">

      <JavaScriptFundamentals/>
      <Functions/>
      <ArraysandStrings/>
      <Control/>
      <Miscellaneous/>
      
     
      
    </div>

    // Step 2

      

  );
}

export default JavaScript;
