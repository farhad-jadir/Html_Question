import React from "react";
import clsx from "clsx";
import { baseParagraphClasses } from "../utils/ClassNames";
import CodeHighlighter from "./CodeHighlighter";
import CodeExamples from "./CodeExamples";
import ES6Js from "../AdvanceJsDocumentation/ES6Js";
import DomJs from "../AdvanceJsDocumentation/DomJs";
import BomJs from "../AdvanceJsDocumentation/BomJs";
import APIJSON from "../AdvanceJsDocumentation/APIJSON";

function Paragraph({ children, type = "question", additionalClasses = "" }) {
  const paragraphClass = clsx(baseParagraphClasses[type], additionalClasses);
  return <p className={paragraphClass}>{children}</p>;
}

function AdvanceJavaScript() {    
  
  return (
    <div className="space-y-4">

      <ES6Js/>
      <DomJs/>
      <BomJs/>
      <APIJSON/>
      
     
      
    </div>

    // Step 2

      

  );
}

export default AdvanceJavaScript;
