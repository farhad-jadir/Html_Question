import React from "react";
import clsx from "clsx";
import { baseParagraphClasses } from "../utils/ClassNames";
import CodeHighlighter from "./CodeHighlighter";
import CodeExamples from "./CodeExamples";
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
  const { basicCode,   } = CodeExamples();
    
    
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
