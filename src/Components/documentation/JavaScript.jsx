import React from "react";
import clsx from "clsx";
import { baseParagraphClasses } from "../utils/ClassNames";
import CodeHighlighter from "./CodeHighlighter";
import CodeExamples from "./CodeExamples";
import FirstStep from "../CSSDocumention/firstStep";
import SecondStep from "../CSSDocumention/secondStep";
import ThirdStep from "../CSSDocumention/thirdStep";
import FourthStep from "../CSSDocumention/fourthStep";

function Paragraph({ children, type = "question", additionalClasses = "" }) {
  const paragraphClass = clsx(baseParagraphClasses[type], additionalClasses);
  return <p className={paragraphClass}>{children}</p>;
}

function JavaScript() {
  const { basicCode,   } = CodeExamples();
    
    
  return (
    <div className="space-y-4">

      <FirstStep/>
      <SecondStep/>
      <ThirdStep/>
      <FourthStep/>
      
     
      
    </div>

    // Step 2

      

  );
}

export default JavaScript;
