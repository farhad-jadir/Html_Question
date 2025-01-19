import React from "react";
import clsx from "clsx";
import { baseParagraphClasses } from "../utils/ClassNames";
import CodeHighlighter from "../documentation/CodeHighlighter";
import TailCoding from "./TailCoding";

function Paragraph({ children, type = "question", additionalClasses = "" }) {
  const paragraphClass = clsx(baseParagraphClasses[type], additionalClasses);
  return <p className={paragraphClass}>{children}</p>;
}

function TailwindLayout() {
  const {  } = TailCoding();
  return (
    <div className="bg-[#101C28] p-6">

        <Paragraph type="heading">Step 1: Basic Tailwind CSS Questions  </Paragraph> <br />

       
      
      



    </div>
  );
}

export default TailwindLayout;


