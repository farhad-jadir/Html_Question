import React from "react";
import clsx from "clsx";
import { baseParagraphClasses } from "../utils/ClassNames";
import CodeHighlighter from "../documentation/CodeHighlighter";
import JsCoding from "./JsCoding";

function Paragraph({ children, type = "question", additionalClasses = "" }) {
  const paragraphClass = clsx(baseParagraphClasses[type], additionalClasses);
  return <p className={paragraphClass}>{children}</p>;
}

function JavaScriptFundamentals() {
  const {Comparesvalues, Comparesboth, TypeCoercion, Scopedetermines, Variablesdeclared, insideblock, compilationphase, StringInterpolation, Multiline, Expressions, Passingfunction, Returningfunction, ImmediatelyInvoked, Avoidspolluting  } = JsCoding();
  return (
    <div className="bg-[#101C28] p-2">

        <Paragraph type="heading">Step 1: JavaScript Fundamentals  </Paragraph> <br />

        {/* {/* Question 01 */}

        <Paragraph>01. What are the different data types in JavaScript?</Paragraph>
        <Paragraph type="answer">
                <Paragraph type="para">JavaScript has 7 basic data types:</Paragraph>
            <ol className="px-4 list-decimal list-inside">
                 <li>String: Represents text. It can be enclosed in single, double, or backtick (template literals) quotes.</li>
                <ul className="px-4 list-disc list-inside">
                    <li>Example: 'Hello', "World", `Hi!`</li>
                </ul>
                <li>Number: Represents both integer and floating-point numbers.</li>
                <ul className="px-4 list-disc list-inside">
                    <li>Example: 42, 3.14, -7</li>
                </ul>
                <li>BigInt: Represents integers larger than the Number type can handle (i.e., larger than 2^53 - 1).</li>
                <ul className="px-4 list-disc list-inside">
                    <li>Example: 9007199254740991n</li>
                </ul>
                <li>Boolean: Represents true or false.</li>
                <ul className="px-4 list-disc list-inside">
                    <li>Example: true, false</li>
                </ul>
                <li>Object: Represents a collection of properties (key-value pairs), including arrays and functions.</li>
                <ul className="px-4 list-disc list-inside">
                    <li>Example: &#123;name: 'John', age: 30&#125;, [1, 2, 3]</li>
                </ul>
                <li>Undefined: Represents a variable that has been declared but not assigned a value.</li>
                <ul className="px-4 list-disc list-inside">
                    <li>Example: let x; // x is undefined</li>
                </ul>
                <li>Null: Represents the intentional absence of any object value.</li>
                <ul className="px-4 list-disc list-inside">
                    <li>Example: let y = null;
                    </li>
                </ul>
            </ol>
            These data types cover a range of primitive values, as well as objects, which are non-primitive and can store collections of data.
        
         </Paragraph> <br />

         {/* {/* Question 02 */}

        <Paragraph>02. What is the difference between var, let, and const?</Paragraph>
        <Paragraph type="answer">
                <Paragraph type="para">Difference Between var, let, and const:</Paragraph>
            <ol className="px-4 list-decimal list-inside">
                 <li>var:</li>
                <ul className="px-4 list-disc list-inside">
                    <li>Scope: Function-scoped.</li>
                    <li>Hoisting: Declared variables are hoisted, but not initialized.</li>
                    <li>Re-declaration: Can be re-declared within the same scope.</li>
                </ul>
                <li>let:</li>
                <ul className="px-4 list-disc list-inside">
                    <li>Scope: Block-scoped.</li>
                    <li>Hoisting: Variables are hoisted but cannot be accessed before declaration.</li>
                    <li>Re-declaration: Cannot be re-declared in the same scope.</li>
                </ul>
                <li>const:</li>
                <ul className="px-4 list-disc list-inside">
                    <li>Scope: Block-scoped, like let.</li>
                    <li>Hoisting: Similar to let, but cannot be accessed before declaration.</li>
                    <li>Immutability: Cannot be reassigned, but objects/arrays can still be modified.</li>
                </ul>
            </ol>
            <Paragraph type="para">Usage:</Paragraph>
                <ul className="px-4 list-disc list-inside">
                    <li>Use let for variables that change.</li>
                    <li>Use const for constants.</li>
                    <li>Avoid var in modern JavaScript.</li>
                </ul>
        
         </Paragraph> <br />

          {/* {/* Question 03 */}

        <Paragraph>03. Explain JavaScript's == vs. === operators.</Paragraph>
        <Paragraph type="answer">
                        <Paragraph type="para">== vs. === in JavaScript:</Paragraph>
            <ol className="px-4 list-decimal list-inside">
                 <li>== (Equality Operator):</li>
                <ul className="px-4 list-disc list-inside">
                    <li>Compares values after type coercion (i.e., it converts values to the same type before comparing).</li>
                    <li>Example:</li>
                </ul>
                <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                  <CodeHighlighter code={Comparesvalues} language="javascript" />
                </div>
                <li>=== (Strict Equality Operator):</li>
                <ul className="px-4 list-disc list-inside">
                    <li>Compares both value and type without type coercion.</li>
                    <li>Example:</li>
                </ul>
                <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                  <CodeHighlighter code={Comparesboth} language="javascript" />
                </div>
            </ol>
            <Paragraph type="para">Key Difference:</Paragraph>
            == performs type conversion before comparison, while === checks both value and type strictly. Use === to avoid unexpected results due to type coercion.
        </Paragraph> <br />

        {/* {/* Question 04 */}

        <Paragraph>04. What is type coercion in JavaScript? Give an example.</Paragraph>
        <Paragraph type="answer">
                <Paragraph type="para">Type Coercion in JavaScript:</Paragraph>
                Type coercion is the process where JavaScript automatically converts data from one type to another (e.g., string to number) during operations.
                <Paragraph type="para">Example:</Paragraph>
                <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                  <CodeHighlighter code={TypeCoercion} language="javascript" />
                </div>
                <Paragraph type="para">Explanation:</Paragraph>
                <ul className="px-4 list-disc list-inside">
                    <li>In the first example, the string '5' is coerced to a number because the - operator expects numbers.</li>
                    <li>In the second example, the + operator concatenates because one operand is a string.</li>
                </ul>
                Type coercion can lead to unexpected results; use strict equality (===) to avoid it.
        </Paragraph> <br />

        {/* {/* Question 05 */}

        <Paragraph>05. Explain the concept of scope in JavaScript.</Paragraph>
        <Paragraph type="answer">
                <Paragraph type="para">Scope in JavaScript:</Paragraph>
                Scope determines the accessibility of variables, functions, and objects in different parts of the code.
                <Paragraph type="para">Types of Scope:</Paragraph>
                <ol className="px-4 list-decimal list-inside">
                 <li>Global Scope:</li>
                <ul className="px-4 list-disc list-inside">
                    <li>Variables declared outside any function or block are globally accessible.</li>
                    <li>Example:</li>
                </ul>
                <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                  <CodeHighlighter code={Scopedetermines} language="javascript" />
                </div>
                <li>Function Scope:</li>
                <ul className="px-4 list-disc list-inside">
                    <li>Variables declared inside a function are accessible only within that function.</li>
                    <li>Example:</li>
                </ul>
                <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                  <CodeHighlighter code={Variablesdeclared} language="javascript" />
                </div>
                <li>Block Scope:</li>
                <ul className="px-4 list-disc list-inside">
                    <li>Variables declared with let or const inside a block {} are accessible only within that block.</li>
                    <li>Example:</li>
                </ul>
                <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                  <CodeHighlighter code={insideblock} language="javascript" />
                </div>
            </ol>
            <Paragraph type="para">Key Point:</Paragraph>
            Global variables are accessible everywhere, but overusing them can lead to bugs. Use function and block scopes for better control and cleaner code.
        </Paragraph> <br />

        {/* {/* Question 06 */}

        <Paragraph>06. What is hoisting in JavaScript?</Paragraph>
        <Paragraph type="answer">
                <Paragraph type="para">Hoisting in JavaScript</Paragraph>
                Hoisting is JavaScript's default behavior of moving declarations to the top of their scope during the compilation phase. This allows you to use variables and functions before declaring them.
                <Paragraph type="para">Example:</Paragraph>
                <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                  <CodeHighlighter code={compilationphase} language="javascript" />
                </div>
                <Paragraph type="para">Key Points:</Paragraph>
                <ul className="px-4 list-disc list-inside">
                    <li>var declarations are hoisted but initialized as undefined.</li>
                    <li>let and const declarations are hoisted but cannot be accessed before declaration (Temporal Dead Zone).</li>
                    <li>Function declarations are fully hoisted, while function expressions are not.</li>
                </ul>
        </Paragraph> <br />

        {/* {/* Question 07 */}

        <Paragraph>07. What are template literals, and how are they used?</Paragraph>
        <Paragraph type="answer">
                <Paragraph type="para">Template Literals in JavaScript:</Paragraph>
                Template literals are a feature in JavaScript that allows you to create multi-line strings and embed expressions using backticks (`) instead of quotes.
                <Paragraph type="para">Usage:</Paragraph>
                <ol className="px-4 list-decimal list-inside">
                 <li>String Interpolation:</li>
                <ul className="px-4 list-disc list-inside">
                    <li>Use the ${} syntax to embed expressions directly into strings.</li>
                    <li>Example:</li>
                </ul>
                <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                  <CodeHighlighter code={StringInterpolation} language="javascript" />
                </div>
                <li>Multi-line Strings:</li>
                <ul className="px-4 list-disc list-inside">
                    <li>No need for escape characters to create multi-line strings.</li>
                    <li>Example:</li>
                </ul>
                <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                  <CodeHighlighter code={Multiline} language="javascript" />
                </div>
                <li>Expressions:</li>
                <ul className="px-4 list-disc list-inside">
                    <li>Any valid JavaScript expression can be embedded.</li>
                    <li>Example:</li>
                </ul>
                <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                  <CodeHighlighter code={Expressions} language="javascript" />
                </div>
            </ol>
            <Paragraph type="para">Key Benefit:</Paragraph>
            Template literals make strings more readable and dynamic by simplifying concatenation and multi-line formatting.
        </Paragraph> <br />

        {/* {/* Question 08 */}

        <Paragraph>08. Explain what a higher-order function is in JavaScript.</Paragraph>
        <Paragraph type="answer">
                <Paragraph type="para">Higher-Order Function in JavaScript:</Paragraph>
                A higher-order function is a function that either:
                <ul className="px-4 list-disc list-inside">
                    <li>Takes another function as an argument, or</li>
                    <li>Returns a function as its result.</li>
                </ul>
                <Paragraph type="para">Example:</Paragraph>
                <ol className="px-4 list-decimal list-inside">
                 <li>Passing a function as an argument:</li>
                <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                  <CodeHighlighter code={Passingfunction} language="javascript" />
                </div>
                <li>Returning a function:</li>
                <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                  <CodeHighlighter code={Returningfunction} language="javascript" />
                </div>
            </ol>
            <Paragraph type="para">Key Point:</Paragraph>
            Higher-order functions are widely used in JavaScript, especially for callbacks, array methods (e.g., .map(), .filter()), and functional programming patterns.
        </Paragraph> <br />

        {/* {/* Question 09 */}

        <Paragraph>09. What are arrow functions, and how are they different from regular functions?</Paragraph>
        <Paragraph type="answer">
                <Paragraph type="para">Higher-Order Function in JavaScript</Paragraph>
                A higher-order function is a function that either:
                <ul className="px-4 list-disc list-inside">
                    <li>Takes another function as an argument, or</li>
                    <li>Returns a function.</li>
                </ul>
                <Paragraph type="para">Key Point:</Paragraph>
                Higher-order functions are used in callbacks, array methods, and functional programming.
        </Paragraph> <br />

        {/* {/* Question 10 */}

        <Paragraph>10. What is an Immediately Invoked Function Expression (IIFE)?</Paragraph>
        <Paragraph type="answer">
                <Paragraph type="para">Immediately Invoked Function Expression (IIFE):</Paragraph>
                An IIFE is a JavaScript function that is executed immediately after being defined. It is wrapped in parentheses to make it an expression and immediately invoked with ().
                <Paragraph type="para">Syntax:</Paragraph>
                <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                  <CodeHighlighter code={ImmediatelyInvoked} language="javascript" />
                </div>
                <Paragraph type="para">Key Points:</Paragraph>
                <ul className="px-4 list-disc list-inside">
                    <li>Purpose: Avoids polluting the global scope by creating a separate execution context.</li>
                    <li>Example:</li>
                    <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                  <CodeHighlighter code={Avoidspolluting} language="javascript" />
                </div>
                </ul>

        </Paragraph>
        
        
        
      



    </div>
  );
}

export default JavaScriptFundamentals;


