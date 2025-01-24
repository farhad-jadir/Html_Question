import React from "react";
import clsx from "clsx";
import { baseParagraphClasses } from "../utils/ClassNames";
import CodeHighlighter from "../documentation/CodeHighlighter";
import JsCoding from "./JsCoding";

function Paragraph({ children, type = "question", additionalClasses = "" }) {
  const paragraphClass = clsx(baseParagraphClasses[type], additionalClasses);
  return <p className={paragraphClass}>{children}</p>;
}

function Control () {
  const {StringConversion, NumberConversion, BooleanConversion, NaNvalue, UsingisNaN, UsingNumber, ToString, ToNumber, ToBoolean, NumberCode, StringCode, BooleanCode, ondefinedCode, BigIntCode, SymbolCode, NullCode, ObjectCode, FunctionCode,unrepresentablenumber, Checksstrictly, Convertsvalue } = JsCoding();
  return (
    <div className="bg-[#101C28] p-2">

        <Paragraph type="heading">Step 4: Control Structures and Error Handling</Paragraph> <br />

        {/* {/* Question 25 */}

        <Paragraph>25. How does JavaScript handle implicit type conversion? </Paragraph>
        <Paragraph type="answer">
                JavaScript handles implicit type conversion (type coercion) by automatically converting one data type to another when needed. It happens in operations involving different types:
                <Paragraph type="para">1. String Conversion: Converts non-strings to strings when using the + operator with a string.</Paragraph>
                <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                  <CodeHighlighter code={StringConversion} language="javascript" />
                </div>
                <Paragraph type="para">2. Number Conversion: Converts strings or booleans to numbers in arithmetic operations (except + with strings).</Paragraph>
                <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                  <CodeHighlighter code={NumberConversion} language="javascript" />
                </div>
                <Paragraph type="para">3. Boolean Conversion: Converts values to true or false in logical contexts.</Paragraph>
                <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                  <CodeHighlighter code={BooleanConversion} language="javascript" />
                </div>
                While helpful, it can sometimes lead to unexpected results, so it's important to handle types explicitly when precision matters!
        </Paragraph> <br />

        {/* {/* Question 26 */}

        <Paragraph>26. What does typeof return for different data types? </Paragraph>
        <Paragraph type="answer">
                The typeof operator in JavaScript returns a string indicating the type of a given value. Here are the common data types and their typeof results:
                <Paragraph type="para">1. Primitive types:</Paragraph>
                <ul className="px-4 list-disc list-inside">
                  <li>typeof 42; → "number"</li>
                  <li>typeof "hello"; → "string"</li>
                  <li>typeof true; → "boolean"</li>
                  <li>typeof undefined; → "undefined"</li>
                  <li>typeof Symbol("id"); → "symbol"</li>
                  <li>typeof BigInt(10); → "bigint"</li>
                </ul>
                <Paragraph type="para">2. Special cases:</Paragraph>
                <ul className="px-4 list-disc list-inside">
                  <li>typeof null; → "object" (legacy bug in JavaScript)</li>
                  <li>typeof NaN; → "number" (NaN is a special number)</li>
                </ul>
                <Paragraph type="para">3. Objects and functions:</Paragraph>
                <ul className="px-4 list-disc list-inside">
                  <li>typeof &#123;&#125; → "object"</li>
                  <li>typeof [] → "object" (arrays are objects)</li>
                  <li>typeof (() =&gt; {}) → "function"</li>
                </ul>
        </Paragraph> <br />

        {/* {/* Question 27 */}

        <Paragraph>27. What is NaN, and how can you check if a value is NaN? </Paragraph>
        <Paragraph type="answer">
                NaN (Not-a-Number) is a special value in JavaScript that represents an invalid number resulting from undefined or erroneous mathematical operations, such as:
                <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                  <CodeHighlighter code={NaNvalue} language="javascript" />
                </div>
                <Paragraph type="para">Checking for NaN:</Paragraph>
                <ol className="px-4 list-decimal list-inside">
                  <li>Using isNaN(): Checks if a value is NaN or becomes NaN when converted to a number.</li>
                    <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                      <CodeHighlighter code={UsingisNaN} language="javascript" />
                    </div>
                  <li>Using Number.isNaN(): More accurate, checks strictly for NaN without coercion.</li>
                    <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                      <CodeHighlighter code={UsingNumber} language="javascript" />
                    </div>
                </ol>  
                Number.isNaN() is the preferred method for precision!
        </Paragraph> <br />

        <Paragraph type="heading">Step 5: Type Conversion and Comparison</Paragraph> <br />

        {/* {/* Question 28 */}

        <Paragraph>28. How does JavaScript handle implicit type conversion? </Paragraph>
        <Paragraph type="answer">
                JavaScript handles implicit type conversion (also called type coercion) by automatically converting values to the required type during operations. This can involve converting between strings, numbers, or booleans. Here's how it works:
                <Paragraph type="para">Checking for NaN:</Paragraph>
                <ol className="px-4 list-decimal list-inside">
                  <li>To String: When using the + operator with a string, other types are converted to strings.</li>
                    <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                      <CodeHighlighter code={ToString} language="javascript" />
                    </div>
                  <li>To Number: In arithmetic operations (except + with strings), strings and booleans are converted to numbers.</li>
                    <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                      <CodeHighlighter code={ToNumber} language="javascript" />
                    </div>
                  <li>To Boolean: In logical contexts, values are converted to booleans. For example:</li>
                    <ul className="px-4 list-disc list-inside">
                      <li>Falsy values: 0, "", null, undefined, NaN, false</li>
                      <li>Truthy values: Everything else</li>
                    </ul>
                    <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                      <CodeHighlighter code={ToBoolean} language="javascript" />
                    </div>
                </ol>  
                While convenient, implicit type conversion can sometimes lead to unexpected results. Use explicit conversions for clarity!
        </Paragraph> <br />

        
        {/* {/* Question 29 */}

        <Paragraph>29. What does typeof return for different data types? </Paragraph>
        <Paragraph type="answer">
                The typeof operator in JavaScript returns a string representing the type of a value. Here's what it returns for different data types:
                <Paragraph type="para">Primitive types:</Paragraph>
                <ol className="px-4 list-decimal list-inside">
                  <li>Number:</li>
                  <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                      <CodeHighlighter code={NumberCode} language="javascript" />
                  </div>
                  <li>String:</li>
                  <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                      <CodeHighlighter code={StringCode} language="javascript" />
                  </div>
                  <li>Boolean:</li>
                  <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                      <CodeHighlighter code={BooleanCode} language="javascript" />
                  </div>
                  <li>Undefined:</li>
                  <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                      <CodeHighlighter code={ondefinedCode} language="javascript" />
                  </div>
                  <li>BigInt:</li>
                  <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                      <CodeHighlighter code={BigIntCode} language="javascript" />
                  </div>
                  <li>Symbol:</li>
                  <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                      <CodeHighlighter code={SymbolCode} language="javascript" />
                  </div>
                </ol>
                <Paragraph type="para">Special case:</Paragraph>
                <ul className="px-4 list-disc list-inside">
                  <li>Null:</li>
                  <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                      <CodeHighlighter code={NullCode} language="javascript" />
                  </div>
                </ul>
                <Paragraph type="para">Objects and Functions:</Paragraph>
                <ol className="px-4 list-decimal list-inside">
                  <li>Object:</li>
                  <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                      <CodeHighlighter code={ObjectCode} language="javascript" />
                  </div>
                  <li>Function:</li>
                  <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                      <CodeHighlighter code={FunctionCode} language="javascript" />
                  </div>
                </ol>
                The typeof operator is useful for runtime type checking!
        </Paragraph> <br />

        {/* {/* Question 30 */}

        <Paragraph>30. What is NaN, and how can you check if a value is NaN? </Paragraph>
        <Paragraph type="answer">
                NaN (Not-a-Number) is a special value in JavaScript that represents an invalid or unrepresentable number, often resulting from incorrect mathematical operations:
                  <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                      <CodeHighlighter code={unrepresentablenumber} language="javascript" />
                  </div>
                  <Paragraph type="para">Checking if a value is NaN:</Paragraph>
                  <ol className="px-4 list-decimal list-inside">
                    <li>Using Number.isNaN(): Checks strictly if a value is exactly NaN (does not coerce types).</li>
                    <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                      <CodeHighlighter code={Checksstrictly} language="javascript" />
                    </div>
                    <li>Using isNaN(): Converts the value to a number first, then checks for NaN (less precise).</li>
                    <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                      <CodeHighlighter code={Convertsvalue} language="javascript" />
                    </div>
                  </ol>
                  <Paragraph type="para">Key Point:</Paragraph>
                  Use Number.isNaN() for accurate checks without type coercion.
        </Paragraph>
        
        
      



    </div>
  );
}

export default Control ;


