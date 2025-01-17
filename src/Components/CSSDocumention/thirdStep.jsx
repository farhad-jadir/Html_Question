import React from "react";
import clsx from "clsx";
import { baseParagraphClasses } from "../utils/ClassNames";
import { tableClasses } from "../utils/TableStyles";  // Importing the reusable table classes
import CodeHighlighter from "../documentation/CodeHighlighter";
import Coding from "./Coding";

function Paragraph({ children, type = "question", additionalClasses = "" }) {
  const paragraphClass = clsx(baseParagraphClasses[type], additionalClasses);
  return <p className={paragraphClass}>{children}</p>;
}

function thirdStep() {
    const { UseFlexbox, flexBoxcode, UseCSSGrid, CSSgridcode } = Coding();
  return (
    <div className="bg-[#101C28] p-2 md:p-6 ">
      <Paragraph type="heading">Step 3: CSS Layouts & Responsiveness </Paragraph> <br />

      {/* Question - 16 */}
      <Paragraph>16. What is the difference between flexbox and CSS Grid, and when should you use each? </Paragraph> <br />
      <Paragraph type="answer">
        <Paragraph type="para">Difference Between Flexbox and CSS Grid:</Paragraph>
        <div className="p-4">
          <div className="overflow-x-auto">
            <table className={tableClasses.table}>
              <thead>
                <tr className={tableClasses.headingRow}>
                  <th className={tableClasses.header}>Feature</th>
                  <th className={tableClasses.header}>Flexbox</th>
                  <th className={tableClasses.header}>CSS Grid</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className={tableClasses.cell}>Layout Direction</td>
                  <td className={tableClasses.cell}>
                    One-dimensional (handles rows or columns).
                  </td>
                  <td className={tableClasses.cell}>
                    Two-dimensional (handles rows and columns).
                  </td>
                </tr>
                <tr className={tableClasses.row}>
                  <td className={tableClasses.cell}>Alignment</td>
                  <td className={tableClasses.cell}>
                    Best for aligning items along a single axis.
                  </td>
                  <td className={tableClasses.cell}>
                    Best for creating complex grid-based layouts.
                  </td>
                </tr>
                <tr>
                  <td className={tableClasses.cell}>Content-Based</td>
                  <td className={tableClasses.cell}>
                    Adapts well to the content size.
                  </td>
                  <td className={tableClasses.cell}>
                    Provides precise control over the layout.
                  </td>
                </tr>
                <tr className={tableClasses.row}>
                  <td className={tableClasses.cell}>Browser Support</td>
                  <td className={tableClasses.cell}>
                    Widely supported.
                  </td>
                  <td className={tableClasses.cell}>
                    Also widely supported, but slightly newer.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <Paragraph type="para">When to Use Each:</Paragraph>
        1. Use Flexbox: *When aligning items in a single row or column (e.g., navigation bars, buttons). *For simple layouts where content adjusts dynamically. Example:
                <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                  <CodeHighlighter code={UseFlexbox} language="css" />
                </div>
                2. Use CSS Grid: *When designing complex, two-dimensional layouts (e.g., dashboards, web page templates). *When you need precise placement of elements in rows and columns. Example:
                <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                  <CodeHighlighter code={UseCSSGrid} language="css" />
                </div>
                <Paragraph type="para">Example:</Paragraph>
                1. Flexbox:
                <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                  <CodeHighlighter code={flexBoxcode} language="css" />
                </div>
                2. CSS grid:
                <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                  <CodeHighlighter code={CSSgridcode} language="css" />
                </div>
      </Paragraph>
    </div>
  );
}

export default thirdStep;
