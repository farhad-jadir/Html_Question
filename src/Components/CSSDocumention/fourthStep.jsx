import React from "react";
import clsx from "clsx";
import { baseParagraphClasses } from "../utils/ClassNames";
import CodeHighlighter from "../documentation/CodeHighlighter";
import Coding from "./Coding";

function Paragraph({ children, type = "question", additionalClasses = "" }) {
  const paragraphClass = clsx(baseParagraphClasses[type], additionalClasses);
  return <p className={paragraphClass}>{children}</p>;
}

function fourthStep() {
  const { displayvalue, positionproperty, Paddingcode, Margincode, Bordercode, flexgrowcode, flexshrinkcode,flexbasiscode, ExampleShorthand, widthcode, minwidthcode,maxwidthcode,ExampleCombined, zindexcode, opacitycode, visibilitycode, opacityvisibility   } = Coding();
  return (
    <div className="bg-[#101C28] p-6">

        <Paragraph type="heading">Step 2: Mostly Used CSS Properties </Paragraph> <br />

       
      
      



    </div>
  );
}

export default fourthStep;


