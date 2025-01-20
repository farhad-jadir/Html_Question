import React from "react";
import clsx from "clsx";
import { baseParagraphClasses } from "../utils/ClassNames";
import CodeHighlighter from "../documentation/CodeHighlighter";
import BootCoding from "./BootCoding";

function Paragraph({ children, type = "question", additionalClasses = "" }) {
  const paragraphClass = clsx(baseParagraphClasses[type], additionalClasses);
  return <p className={paragraphClass}>{children}</p>;
}

function BootstrapLayout() {
  const {  } = BootCoding();
  return (
    <div className="bg-[#101C28] p-2">

        <Paragraph type="heading">Step 3: Bootstrap Layout & Utilities  </Paragraph> <br />

        {/* {/* Question 24 */}
        
      



    </div>
  );
}

export default BootstrapLayout;


