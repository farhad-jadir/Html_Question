import React from "react";
import clsx from "clsx";
import { baseParagraphClasses } from "../utils/ClassNames";
import CodeHighlighter from "./CodeHighlighter";
import CodeExamples from "./CodeExamples";
import BasicTailwind from "../TailwindDocumentation/BasicTailwind";
import CommonlyUsed from "../TailwindDocumentation/CommonlyUsed";
import TailwindLayout from "../TailwindDocumentation/TailwindLayout";
import AdvancedTailwind from "../TailwindDocumentation/AdvancedTailwind";

function Paragraph({ children, type = "question", additionalClasses = "" }) {
  const paragraphClass = clsx(baseParagraphClasses[type], additionalClasses);
  return <p className={paragraphClass}>{children}</p>;
}

function TailwindCSS() {
  const { basicCode,   } = CodeExamples();
    
    
  return (
    <div className="space-y-4">

      <BasicTailwind/>
      <CommonlyUsed/>
      <TailwindLayout/>
      <AdvancedTailwind/>
      
     
      
    </div>

    // Step 2

      

  );
}

export default TailwindCSS;
