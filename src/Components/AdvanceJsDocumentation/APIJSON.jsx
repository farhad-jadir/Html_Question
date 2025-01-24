import React from "react";
import clsx from "clsx";
import { baseParagraphClasses } from "../utils/ClassNames";
import CodeHighlighter from "../documentation/CodeHighlighter";
import AdvanceJsCoding from "./AdvanceJsCoding";

function Paragraph({ children, type = "question", additionalClasses = "" }) {
  const paragraphClass = clsx(baseParagraphClasses[type], additionalClasses);
  return <p className={paragraphClass}>{children}</p>;
}

function APIJSON () {
  const { } = AdvanceJsCoding();
  return (
    <div className="bg-[#101C28] p-2">

        <Paragraph type="heading">Step 1: ES6</Paragraph> <br />

        {/* {/* Question 1*/}

        <Paragraph>01. How does JavaScript handle implicit type conversion? </Paragraph>
        



    </div>
  );
}

export default APIJSON ;


