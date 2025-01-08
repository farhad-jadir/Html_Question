import React from "react";
import clsx from "clsx";
import { baseParagraphClasses } from "../utils/ClassNames";

function Paragraph({ children, type = "question", additionalClasses = "" }) {
  const paragraphClass = clsx(baseParagraphClasses[type], additionalClasses);
  return <p className={paragraphClass}>{children}</p>;
}

function AdvanceHtlm() {
  return (
    <div className="bg-[#101C28] p-6">
       <Paragraph type="heading">Step 4: Advanced HTML Concepts</Paragraph>
    </div>
  );
}

export default AdvanceHtlm;
