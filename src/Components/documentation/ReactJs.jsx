import React from "react";
import clsx from "clsx";
import { baseParagraphClasses } from "../utils/ClassNames";
import CodeHighlighter from "./CodeHighlighter";
import CodeExamples from "./CodeExamples";
import Basic from "../ReactDocumentation/Basic";
import Intermediate from "../ReactDocumentation/Intermediate";
import ReactRouter from "../ReactDocumentation/ReactRouter";
import AdvancedInterview from "../ReactDocumentation/AdvancedInterview";
import RealLife from "../ReactDocumentation/RealLife";

function Paragraph({ children, type = "question", additionalClasses = "" }) {
  const paragraphClass = clsx(baseParagraphClasses[type], additionalClasses);
  return <p className={paragraphClass}>{children}</p>;
}

function ReactJs() {
  const { basicCode,   } = CodeExamples();
    
    
  return (
    <div className="space-y-4">

      <Basic/>
      <Intermediate/>
      <ReactRouter/>
      <AdvancedInterview/>
      <RealLife/>
      
     
      
    </div>

    // Step 2

      

  );
}

export default ReactJs;
