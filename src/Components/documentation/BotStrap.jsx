import React from "react";
import clsx from "clsx";
import { baseParagraphClasses } from "../utils/ClassNames";
import CodeHighlighter from "./CodeHighlighter";
import CodeExamples from "./CodeExamples";
import BasicBootstrap from "../BootstrapDocumentation/BasicBootstrap";
import CommonlyUsedBootstrap from "../BootstrapDocumentation/CommonlyUsedBootstrap";
import BootstrapLayout from "../BootstrapDocumentation/BootstrapLayout";
import AdvancedBootstrap from "../BootstrapDocumentation/AdvancedBootstrap";

function Paragraph({ children, type = "question", additionalClasses = "" }) {
  const paragraphClass = clsx(baseParagraphClasses[type], additionalClasses);
  return <p className={paragraphClass}>{children}</p>;
}

function BotStrap() {
  const { basicCode,   } = CodeExamples();
    
    
  return (
    <div className="space-y-4">

      <BasicBootstrap/>
      <CommonlyUsedBootstrap/>
      <BootstrapLayout/>
      <AdvancedBootstrap/>
      
     
      
    </div>

    // Step 2

      

  );
}

export default BotStrap;
