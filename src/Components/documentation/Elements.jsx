import React from "react";
import clsx from "clsx";
import { baseParagraphClasses } from "../utils/ClassNames";
import CodeHighlighter from "./CodeHighlighter";
import CodeExamples from "./CodeExamples";
import FirstStep from "../CSSDocumention/firstStep";

function Paragraph({ children, type = "question", additionalClasses = "" }) {
  const paragraphClass = clsx(baseParagraphClasses[type], additionalClasses);
  return <p className={paragraphClass}>{children}</p>;
}

function Elements() {
  const { basicCode,   } = CodeExamples();
    
    
  return (
    <div className="bg-[#101C28] p-6 space-y-4">

      <FirstStep/>
      
     
      
    </div>

    // Step 2

      

  );
}

export default Elements;
