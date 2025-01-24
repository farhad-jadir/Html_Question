import React from "react";
import clsx from "clsx";
import { baseParagraphClasses } from "../utils/ClassNames";
import CodeHighlighter from "../documentation/CodeHighlighter";
import JsCoding from "./JsCoding";

function Paragraph({ children, type = "question", additionalClasses = "" }) {
  const paragraphClass = clsx(baseParagraphClasses[type], additionalClasses);
  return <p className={paragraphClass}>{children}</p>;
}

function Functions() {
  const {ClosuresJavaScrip, GlobalContext, ObjectMethod, ArrowFunctions, EventHandlers, ExplicitBinding, ObjectLiteral, Simplestmethod, ConstructorFunction, Inheritfrom, ClassSyntax, nullcode, definedCode, Objectassign, SpreadOperator, JSONparse, CustomDeep,  apCode, bCode, InheritanceWorks  } = JsCoding();
  return (
    <div className="bg-[#101C28] p-2">

        <Paragraph type="heading">Step 4: Advanced Bootstrap Questions  </Paragraph> <br />

        {/* {/* Question 11 */}

        <Paragraph>11. Explain the concept of closures in JavaScript. </Paragraph>
        <Paragraph type="answer">
                <Paragraph type="para">Closures in JavaScript:</Paragraph>
                A closure is a function that remembers and has access to its outer (enclosing) function's scope, even after the outer function has finished executing.
                <Paragraph type="para">Example:</Paragraph>
                <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                  <CodeHighlighter code={ClosuresJavaScrip} language="javascript" />
                </div>
                <Paragraph type="para">Key Points:</Paragraph>
                <ul className="px-4 list-disc list-inside">
                    <li>Closures allow functions to retain access to variables from their outer scope.</li>
                    <li>They are useful for encapsulation, data privacy, and creating function factories.</li>
                </ul>

        </Paragraph> <br />

        {/* {/* Question 12 */}

        <Paragraph>12. What is the this keyword, and how does it behave in different contexts? </Paragraph>
        <Paragraph type="answer">
            <Paragraph type="para">The this Keyword in JavaScript:</Paragraph>
            this refers to the object that is currently executing the function. Its value depends on the context in which the function is called.
            <Paragraph type="para">Behavior in Different Contexts:</Paragraph>
            <ol className="px-4 list-decimal list-inside">
                 <li>Global Context:</li>
                <ul className="px-4 list-disc list-inside">
                    <li>In browsers: this refers to the global window object.</li>
                    <li>In strict mode: this is undefined.</li>
                </ul>
                <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                  <CodeHighlighter code={GlobalContext} language="javascript" />
                </div>
                <li>Object Method:</li>
                <ul className="px-4 list-disc list-inside">
                    <li>Inside a method, this refers to the object that owns the method.</li>
                </ul>
                <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                  <CodeHighlighter code={ObjectMethod} language="javascript" />
                </div>
                <li>Arrow Functions:</li>
                <ul className="px-4 list-disc list-inside">
                    <li>Arrow functions do not have their own this; they inherit this from their enclosing scope.</li>
                </ul>
                <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                  <CodeHighlighter code={ArrowFunctions} language="javascript" />
                </div>
                <li>Event Handlers:</li>
                <ul className="px-4 list-disc list-inside">
                    <li>this refers to the element that triggered the event.</li>
                </ul>
                <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                  <CodeHighlighter code={EventHandlers} language="javascript" />
                </div>
                <li>Explicit Binding:</li>
                <ul className="px-4 list-disc list-inside">
                    <li>Use .call(), .apply(), or .bind() to explicitly set this.</li>
                </ul>
                <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                  <CodeHighlighter code={ExplicitBinding} language="javascript" />
                </div>
            </ol>
            <Paragraph type="para">Key Point:</Paragraph>
            this depends on how a function is invoked, not where it is defined. Use arrow functions or explicit binding for predictable behavior.
        </Paragraph> <br />

        {/* {/* Question 13 */}

        <Paragraph>13. How do you create an object in JavaScript? </Paragraph>
        <Paragraph type="answer">
            <Paragraph type="para">Creating an Object in JavaScript:</Paragraph>
            <ol className="px-4 list-decimal list-inside">
                <li>Object Literal (Simplest method):</li>
                <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                  <CodeHighlighter code={ObjectLiteral} language="javascript" />
                </div>
                <li>Using new Object():</li>
                <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                  <CodeHighlighter code={Simplestmethod} language="javascript" />
                </div>
                <li>Constructor Function:</li>
                <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                  <CodeHighlighter code={ConstructorFunction} language="javascript" />
                </div>
                <li>Object.create() (Inherit from another object):</li>
                <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                  <CodeHighlighter code={Inheritfrom} language="javascript" />
                </div>
                <li>Class Syntax:</li>
                <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                  <CodeHighlighter code={ClassSyntax} language="javascript" />
                </div>
            </ol>

            <Paragraph type="para">Key Point:</Paragraph>
            Objects can be created using various approaches based on the complexity and requirements of your application.

        </Paragraph> <br />

        {/* {/* Question 14 */}

        <Paragraph>14. What is the difference between null and undefined? </Paragraph>
        <Paragraph type="answer">
            <Paragraph type="para">Difference Between null and undefined:</Paragraph>
            <ol className="px-4 list-decimal list-inside">
                 <li>null:</li>
                <ul className="px-4 list-disc list-inside">
                    <li>Represents the intentional absence of any object value.</li>
                    <li>It is a primitive value and must be explicitly assigned.</li>
                </ul>
                <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                  <CodeHighlighter code={nullcode} language="javascript" />
                </div>
                <li>undefined:</li>
                <ul className="px-4 list-disc list-inside">
                    <li>Represents a variable that has been declared but not assigned a value.</li>
                    <li>It is the default value for uninitialized variables.</li>
                </ul>
                <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                  <CodeHighlighter code={definedCode} language="javascript" />
                </div>
            </ol>
            <Paragraph type="para">Key Difference:</Paragraph>
            null is an explicitly assigned absence of value, while undefined indicates uninitialized variables.
        </Paragraph> <br />

        {/* {/* Question 15 */}

        <Paragraph>15. How do you copy an object in JavaScript? Explain shallow vs. deep copy. </Paragraph>
        <Paragraph type="answer">
            <Paragraph type="para">Copying an Object in JavaScript</Paragraph>
            <ol className="px-4 list-decimal list-inside">
              <li>Shallow Copy:</li>
              <ul className="px-4 list-disc list-inside">
                <li>Creates a new object but only copies the top-level properties. If the object has nested objects or arrays, their references are copied, not the actual values.</li>
                Methods for Shallow Copy:
                <li>Object.assign():</li>
                <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                  <CodeHighlighter code={Objectassign} language="javascript" />
                </div>
                <li>Spread Operator:</li>
                <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                  <CodeHighlighter code={SpreadOperator} language="javascript" />
                </div>
              </ul>
              <li>Deep Copy:</li>
              <ul className="px-4 list-disc list-inside">
                <li>Creates a new object and copies all levels of the object, including nested objects/arrays. Changes in the new object will not affect the original object.</li>
                Methods for Deep Copy:
                <li>JSON.parse() and JSON.stringify() (works for simple objects)</li>
                <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                  <CodeHighlighter code={JSONparse} language="javascript" />
                </div>
                <li>Custom Deep Copy Function (for complex objects):</li>
                <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                  <CodeHighlighter code={CustomDeep} language="javascript" />
                </div>
              </ul>
            </ol>
            <Paragraph type="para">Key Difference:</Paragraph>
            <ul className="px-4 list-disc list-inside">
                    <li>Shallow Copy copies references for nested objects, while Deep Copy copies all values, including nested objects.</li>
                </ul>
        </Paragraph> <br />

        {/* {/* Question 16 */}

        <Paragraph>16. Explain how call, apply, and bind work in JavaScript. </Paragraph>
        <Paragraph type="answer">
            <Paragraph type="para">call(), apply(), and bind() in JavaScript</Paragraph>
            <ol className="px-4 list-decimal list-inside">
                 <li>call():</li>
                <ul className="px-4 list-disc list-inside">
                    <li>Invokes a function with a specified this value and arguments provided individually.</li>
                </ul>
                
                <li>apply():</li>
                <ul className="px-4 list-disc list-inside">
                    <li>Similar to call(), but arguments are passed as an array or array-like object.</li>
                </ul>
                <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                  <CodeHighlighter code={apCode} language="javascript" />
                </div>
                <li>bind():</li>
                <ul className="px-4 list-disc list-inside">
                    <li>Creates a new function that, when invoked, has its this value set to a specified object and can optionally accept predefined arguments.</li>
                </ul>
                <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                  <CodeHighlighter code={bCode} language="javascript" />
                </div>
            </ol>
            <Paragraph type="para">Key Difference:</Paragraph>
            call() and apply() immediately invoke the function with a specified this, while bind() returns a new function that can be invoked later.
        </Paragraph> <br />

        {/* {/* Question 17 */}
        <Paragraph>17. What is the prototype chain, and how does inheritance work in JavaScript? </Paragraph>
        <Paragraph type="answer">
            The prototype chain in JavaScript is a mechanism that allows objects to inherit properties and methods from other objects. Every object in JavaScript has an internal link ([[Prototype]]) that points to another object, called its prototype. This chain continues until it reaches null, which is the end of the chain.
            <Paragraph type="para">How Inheritance Works:</Paragraph>
                <ul className="px-4 list-disc list-inside">
                    <li>Prototype Property: When you access a property or method on an object, JavaScript first looks for it on the object itself.</li>
                    <li>Prototype Lookup: If it doesn't find it there, it checks the object's prototype (__proto__) and continues up the chain until it finds the property or reaches null.</li>
                    <li>Shared Behavior: Methods and properties defined on the prototype are shared among all objects that inherit from it.</li>
                </ul>
                <Paragraph type="para">Example:</Paragraph>
                <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                  <CodeHighlighter code={InheritanceWorks} language="javascript" />
                </div>
                
            

        </Paragraph>
          
      



    </div>
  );
}

export default Functions;


