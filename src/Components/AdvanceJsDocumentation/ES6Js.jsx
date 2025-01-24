import React from "react";
import clsx from "clsx";
import { baseParagraphClasses } from "../utils/ClassNames";
import { tableClasses } from "../utils/TableStyles";  // Importing the reusable table classes
import CodeHighlighter from "../documentation/CodeHighlighter";
import AdvanceJsCoding from "./AdvanceJsCoding";

function Paragraph({ children, type = "question", additionalClasses = "" }) {
  const paragraphClass = clsx(baseParagraphClasses[type], additionalClasses);
  return <p className={paragraphClass}>{children}</p>;
}

function ES6Js () {
  const {ArrowFunctions, Regularfunctions, SyntaxSimplicity, NoargumentsObject, ArraysCode, ObjectsCode, PropertiesIndividually, varCode, letCode, constCode, CopyinganArray, MergingArrays, CopyinganObject, MergingObjects, MergeTwoArrays, StringInterpolation, MultiLineStrings, BeforeES6, HandleMissingArguments, ReduceBoilerplateCode, SimplifyOptionalParameters, DictionarywithMap, forofExample, forinExample, UsingforofwithString, KeyDifference, ExampleUsagePromises,  ProjectPromises, ExampleUsage, Withoutasync, Withasync } = AdvanceJsCoding();
  return (
    <div className="bg-[#101C28] p-2">

        <Paragraph type="heading">Step 1: ES6</Paragraph> <br />

        {/* {/* Question 1*/}

        <Paragraph>01. What are arrow functions in ES6, and how are they different from regular functions? </Paragraph>
        <Paragraph type="answer">
            <Paragraph type="para">Arrow Functions in ES6: </Paragraph>
            Arrow functions are a shorthand syntax for writing functions in JavaScript. They are more concise and have different behavior for this.
            <Paragraph type="para">Syntax:</Paragraph>
                <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                  <CodeHighlighter code={ArrowFunctions} language="javascript" />
                </div>
                <Paragraph type="para">Key Differences from Regular Functions:</Paragraph>
                <ol className="px-4 list-decimal list-inside">
                  <li>this Context:</li>
                  <ul className="px-4 list-disc list-inside">
                    <li>Arrow functions do not bind their own this; they inherit this from the enclosing scope (lexical this).</li>
                    <li>Regular functions bind this to the caller (dynamic this).</li>
                    <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                        <CodeHighlighter code={Regularfunctions} language="javascript" />
                    </div>
                  </ul>
                  <li>Syntax Simplicity:</li>
                  <ul className="px-4 list-disc list-inside">
                    <li>Arrow functions are more concise and can omit {} and return for single-expression functions.</li>
                    <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                        <CodeHighlighter code={SyntaxSimplicity} language="javascript" />
                    </div>
                  </ul>
                  <li>No arguments Object:</li>
                  <ul className="px-4 list-disc list-inside">
                    <li>Arrow functions do not have their own arguments object. Use rest parameters instead.</li>
                    <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                        <CodeHighlighter code={NoargumentsObject} language="javascript" />
                    </div>
                  </ul>
                  <li>Cannot Be Used as Constructors:</li>
                  <ul className="px-4 list-disc list-inside">
                    <li>Arrow functions cannot be used with the new keyword because they don't have a prototype.</li>
                  </ul>
                </ol>
                <Paragraph type="para">When to Use:</Paragraph>
                <ul className="px-4 list-disc list-inside">
                    <li>Use arrow functions for shorter syntax and when this context is inherited.</li>
                    <li>Use regular functions when this binding or arguments is required.</li>
                  </ul>
        </Paragraph> <br />

        {/* {/* Question 2*/}

        <Paragraph>02. What are arrow functions in ES6, and how are they different from regular functions? 
                    <ul className="px-4 list-disc list-inside">
                      <li>Project: Write a function that takes an object with properties and logs each property individually.</li>
                    </ul>
        </Paragraph>
        <Paragraph type="answer">
                <Paragraph type="para"> Destructuring Assignment in ES6:</Paragraph>
                Destructuring assignment is a syntax in ES6 that allows you to unpack values from arrays or properties from objects into distinct variables in a concise manner.
                <Paragraph type="para"> How it Works with Arrays and Objects:</Paragraph>
                <ol className="px-4 list-decimal list-inside">
                  <li>Arrays: Destructure based on the position of elements.</li>
                    <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                        <CodeHighlighter code={ArraysCode} language="javascript" />
                    </div>
                    <li>Objects: Destructure based on property names.</li>
                    <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                        <CodeHighlighter code={ObjectsCode} language="javascript" />
                    </div>
                </ol>
                <Paragraph type="para"> Project: Function to Log Object Properties Individually:</Paragraph>
                Here’s a function using destructuring:
                    <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                        <CodeHighlighter code={PropertiesIndividually} language="javascript" />
                    </div>
                    <Paragraph type="para"> Explanation:</Paragraph>
                    <ul className="px-4 list-disc list-inside">
                      <li>Destructuring: Extracts name, age, and country properties from the obj parameter.</li>
                      <li>Logging: Each property is logged individually.</li>
                    </ul>
                    This function can be extended to handle more properties dynamically.
        </Paragraph> <br />

        {/* {/* Question 3*/}

        <Paragraph>03. Explain let, const, and var keywords. When should you use each? </Paragraph>
        <Paragraph type="answer">
                <Paragraph type="para"> var:</Paragraph>
                <ul className="px-4 list-disc list-inside">
                  <li>Scope: Function-scoped.</li>
                  <li>Hoisting: Variables declared with var are hoisted to the top of their scope but initialized as undefined.</li>
                  <li>Usage: Avoid using var due to its scope and hoisting behavior which can lead to bugs.</li>
                </ul>
                    <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                        <CodeHighlighter code={varCode} language="javascript" />
                    </div>
                <Paragraph type="para"> let:</Paragraph>
                <ul className="px-4 list-disc list-inside">
                  <li>Scope: Block-scoped (only accessible within the block it's defined in).</li>
                  <li>Hoisting: Variables declared with let are hoisted but remain in a "temporal dead zone" until initialization.</li>
                  <li>Usage: Use for variables that may need to be reassigned.</li>
                </ul>
                    <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                        <CodeHighlighter code={letCode} language="javascript" />
                    </div>
                <Paragraph type="para"> const:</Paragraph>
                <ul className="px-4 list-disc list-inside">
                  <li>Scope: Block-scoped (same as let).</li>
                  <li>Hoisting: Same as let.</li>
                  <li>Reassignment: Cannot be reassigned; the value must be initialized when declared. However, objects or arrays declared with const can have their properties or contents modified.</li>
                  <li>Usage: Use for variables that should not be reassigned (e.g., constants or fixed references).</li>
                </ul>
                    <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                        <CodeHighlighter code={constCode} language="javascript" />
                    </div>
                <Paragraph type="para"> When to Use Each:</Paragraph>
                <ul className="px-4 list-disc list-inside">
                  <li>var: Rarely (use let or const instead).</li>
                  <li>let: For variables that will change or be reassigned.</li>
                  <li>const: For variables that won't change or for references to fixed objects/arrays. Preferred by default.</li>
                </ul>
        </Paragraph> <br />

        {/* {/* Question 4*/}

        <Paragraph>04. What is the spread operator, and how can it be used with arrays and objects?
                    <ul className="px-4 list-disc list-inside">
                      <li>Project: Merge two arrays using the spread operator.</li>
                    </ul>
        </Paragraph>
        <Paragraph type="answer">
                <Paragraph type="para"> Spread Operator:</Paragraph>
                The spread operator (...) in JavaScript is used to spread or expand elements of an array or object into individual elements. It allows for concise operations like copying, merging, or spreading data.
                <Paragraph type="para"> Usage with Arrays:</Paragraph>
                <ol className="px-4 list-decimal list-inside">
                  <li>Copying an Array:</li>
                    <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                        <CodeHighlighter code={CopyinganArray} language="javascript" />
                    </div>
                    <li>Merging Arrays:</li>
                    <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                        <CodeHighlighter code={MergingArrays} language="javascript" />
                    </div>
                </ol>
                <Paragraph type="para"> Usage with Objects:</Paragraph>
                <ol className="px-4 list-decimal list-inside">
                  <li>Copying an Object:</li>
                    <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                        <CodeHighlighter code={CopyinganObject} language="javascript" />
                    </div>
                    <li>Merging Arrays:</li>
                    <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                        <CodeHighlighter code={MergingObjects} language="javascript" />
                    </div>
                </ol>
                <Paragraph type="para"> Project: Merge Two Arrays</Paragraph>
                Here’s a function to merge two arrays using the spread operator:
                    <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                        <CodeHighlighter code={MergeTwoArrays} language="javascript" />
                    </div>
                <Paragraph type="para"> Explanation:</Paragraph>
                <ul className="px-4 list-disc list-inside">
                  <li>[...array1, ...array2]: Expands the elements of array1 and array2 into a new array.</li>
                  <li>This approach avoids modifying the original arrays and ensures a clean, merged result.</li>
                </ul>
        </Paragraph> <br />

        {/* {/* Question 5*/}

        <Paragraph>05. How does template literals work in ES6, and how does it make string interpolation easier?</Paragraph>
        <Paragraph type="answer">
                <Paragraph type="para"> Template Literals:</Paragraph>
                Template literals are a feature in ES6 that allow you to create strings with embedded expressions using backticks (`) instead of quotes (' or "). They simplify string interpolation and support multi-line strings.
                <Paragraph type="para"> How It Works:</Paragraph>
                <ol className="px-4 list-decimal list-inside">
                  <li>String Interpolation: Embed expressions using $&#123;expression&#125; directly in the string.</li>
                    <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                        <CodeHighlighter code={StringInterpolation} language="javascript" />
                    </div>
                    <li>Multi-Line Strings: Write strings across multiple lines without needing concatenation or escape characters.</li>
                    <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                        <CodeHighlighter code={MultiLineStrings} language="javascript" />
                    </div>
                </ol>
                <Paragraph type="para"> Why It Makes String Interpolation Easier:</Paragraph>
                <ol className="px-4 list-decimal list-inside">
                  <li>Before ES6: String concatenation required manual handling with + and escaping for new lines.</li>
                    <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                        <CodeHighlighter code={BeforeES6} language="javascript" />
                    </div>
                    <li>With ES6: Template literals eliminate the need for manual concatenation, making the code cleaner and more readable.</li>
                </ol>
                <Paragraph type="para"> Key Benefits:</Paragraph>
                <ul className="px-4 list-disc list-inside">
                  <li>Clean syntax for dynamic strings.</li>
                  <li>Easier to include variables and expressions.</li>
                  <li>Native support for multi-line strings.</li>
                </ul>
                
        </Paragraph> <br />

        {/* {/* Question 6*/}

        <Paragraph>06. What are default parameters in ES6, and how do they improve function flexibility?</Paragraph>
        <Paragraph type="answer">
                <Paragraph type="para"> Default Parameters in ES6:</Paragraph>
                Default parameters in ES6 allow you to set default values for function parameters. If no value is passed for a parameter, the default value is used.
                <Paragraph type="para"> How Default Parameters Improve Flexibility:</Paragraph>
                <ol className="px-4 list-decimal list-inside">
                  <li>Handle Missing Arguments: Functions can handle missing arguments gracefully without requiring additional checks.</li>
                    <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                        <CodeHighlighter code={HandleMissingArguments} language="javascript" />
                    </div>
                    <li>Reduce Boilerplate Code: You don't need extra logic to assign default values manually.</li>
                    <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                        <CodeHighlighter code={ReduceBoilerplateCode} language="javascript" />
                    </div>
                    <li>Simplify Optional Parameters: Functions can have optional parameters without requiring explicit checks or overloading.</li>
                    <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                        <CodeHighlighter code={SimplifyOptionalParameters} language="javascript" />
                    </div>
                </ol>
                <Paragraph type="para"> Benefits:</Paragraph>
                <ul className="px-4 list-disc list-inside">
                  <li>Improves code readability.</li>
                  <li>Eliminates the need for manual default value assignment.</li>
                  <li>Makes functions more flexible and less error-prone.</li>
                </ul>
        </Paragraph> <br />

        {/* {/* Question 7*/}

        <Paragraph>07. Explain what Map and Set are in ES6 and how they differ from objects and arrays.
                    <ul className="px-4 list-disc list-inside">
                      <li>Project: Create a simple dictionary with Map to store key-value pairs.</li>
                    </ul>
        </Paragraph>
        <Paragraph type="answer">
                <Paragraph type="para"> Map and Set in ES6:</Paragraph>
                    <ul className="px-4 list-disc list-inside">
                      <li>Map: A Map is a collection of key-value pairs where keys can be of any type (e.g., objects, functions, or primitives). It maintains the order of insertion.</li>
                      <li>Set: A Set is a collection of unique values, where duplicates are automatically removed. It also maintains the order of insertion.</li>
                    </ul>
                    <Paragraph type="para"> Differences from Objects and Arrays:</Paragraph>
                    <div className="p-4">
                              <div className="overflow-x-auto">
                                <table className={tableClasses.table}>
                                  <thead>
                                    <tr className={tableClasses.headingRow}>
                                      <th className={tableClasses.header}>Feature</th>
                                      <th className={tableClasses.header}>Map</th>
                                      <th className={tableClasses.header}>Object</th>
                                      <th className={tableClasses.header}>Set</th>
                                      <th className={tableClasses.header}>Array</th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    <tr>
                                      <td className={tableClasses.cell}>Key types</td>
                                      <td className={tableClasses.cell}>
                                      Any type (objects, primitives).
                                      </td>
                                      <td className={tableClasses.cell}>
                                      Strings or Symbols only.
                                      </td>
                                      <td className={tableClasses.cell}>
                                      Not applicable  
                                      </td>
                                      <td className={tableClasses.cell}>
                                      Not applicable
                                      </td>
                                    </tr>
                                    <tr className={tableClasses.row}>
                                      <td className={tableClasses.cell}>Value uniqueness</td>
                                      <td className={tableClasses.cell}>
                                      Keys are unique
                                      </td>
                                      <td className={tableClasses.cell}>
                                      Keys are unique
                                      </td>
                                      <td className={tableClasses.cell}>
                                      Values are unique
                                      </td>
                                      <td className={tableClasses.cell}>
                                      Values can be duplicate
                                      </td>
                                    </tr>
                                    <tr>
                                      <td className={tableClasses.cell}>Iteration order</td>
                                      <td className={tableClasses.cell}>
                                      Preserves insertion order
                                      </td>
                                      <td className={tableClasses.cell}>
                                      Does not guarantee insertion order
                                      </td>
                                      <td className={tableClasses.cell}>
                                      Preserves insertion order
                                      </td>
                                      <td className={tableClasses.cell}>
                                      Preserves insertion order
                                      </td>
                                    </tr>
                                    <tr className={tableClasses.row}>
                                      <td className={tableClasses.cell}>Use case</td>
                                      <td className={tableClasses.cell}>
                                      Efficient key-value storage
                                      </td>
                                      <td className={tableClasses.cell}>
                                      General object representation
                                      </td>
                                      <td className={tableClasses.cell}>
                                      Unique value collection
                                      </td>
                                      <td className={tableClasses.cell}>
                                      Ordered list of items
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </div>
                    </div>
                    <Paragraph type="para"> Project: Create a Dictionary with Map:</Paragraph>
                    Below is an example of using Map to create a simple dictionary for storing key-value pairs:
                    <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                        <CodeHighlighter code={DictionarywithMap} language="javascript" />
                    </div>
                    <Paragraph type="para"> Why Use Map and Set?:</Paragraph>
                    <ul className="px-4 list-disc list-inside">
                      <li>Map: Use it for better performance and when you need flexible key types.</li>
                      <li>Set: Use it to store unique values and prevent duplicates in collections.</li>
                    </ul>
        </Paragraph> <br />

         {/* {/* Question 8*/}

         <Paragraph>08. What is the purpose of the for...of loop, and how is it different from for...in?</Paragraph>
        <Paragraph type="answer">
                <Paragraph type="para"> Purpose of the for...of Loop:</Paragraph>
                The for...of loop is used to iterate over iterable objects like arrays, strings, maps, sets, and more. It gives direct access to the values of the iterable.
                <Paragraph type="para"> How for...of Differs from for...in:</Paragraph>
                <div className="p-4">
                          <div className="overflow-x-auto">
                            <table className={tableClasses.table}>
                              <thead>
                                <tr className={tableClasses.headingRow}>
                                  <th className={tableClasses.header}>Feature</th>
                                  <th className={tableClasses.header}>for...of</th>
                                  <th className={tableClasses.header}>for...in</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td className={tableClasses.cell}>Iterates over</td>
                                  <td className={tableClasses.cell}>
                                  Values of iterable objects
                                  </td>
                                  <td className={tableClasses.cell}>
                                  Keys (or properties) of an object
                                  </td>
                                </tr>
                                <tr className={tableClasses.row}>
                                  <td className={tableClasses.cell}>Use case</td>
                                  <td className={tableClasses.cell}>
                                  Arrays, strings, maps, sets, etc.
                                  </td>
                                  <td className={tableClasses.cell}>
                                  Objects or enumerable properties
                                  </td>
                                </tr>
                                <tr>
                                  <td className={tableClasses.cell}>Output</td>
                                  <td className={tableClasses.cell}>
                                  Directly provides the value
                                  </td>
                                  <td className={tableClasses.cell}>
                                  Provides the key (or property name)
                                  </td>
                                </tr>
                                <tr className={tableClasses.row}>
                                  <td className={tableClasses.cell}>Example Usage</td>
                                  <td className={tableClasses.cell}>
                                  Iterating through array values
                                  </td>
                                  <td className={tableClasses.cell}>
                                  Iterating through object properties
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                </div>
                <Paragraph type="para"> Examples:</Paragraph>
                <ol className="px-4 list-decimal list-inside">
                  <li>for...of Example (for array values):</li>
                    <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                        <CodeHighlighter code={forofExample} language="javascript" />
                    </div>
                    <li>for...in Example (for object properties):</li>
                    <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                        <CodeHighlighter code={forinExample} language="javascript" />
                    </div>
                    <li>Using for...of with a String:</li>
                    <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                        <CodeHighlighter code={UsingforofwithString} language="javascript" />
                    </div>
                    <li>Key Difference in Arrays:</li>
                    <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                        <CodeHighlighter code={KeyDifference} language="javascript" />
                    </div>
                </ol>
                <Paragraph type="para"> When to Use:</Paragraph>
                    <ul className="px-4 list-disc list-inside">
                      <li>Use for...of for iterating values of iterable objects (e.g., arrays, strings, sets).</li>
                      <li>Use for...in for iterating keys (properties) of objects.</li>
                    </ul>
        </Paragraph> <br />

        {/* {/* Question 9*/}

        <Paragraph>09. Explain the concept of Promise in JavaScript. How do you use .then() and .catch()?
                    <ul className="px-4 list-disc list-inside">
                      <li>Project: Create a promise that resolves after 2 seconds and logs a message.</li>
                    </ul>
        </Paragraph>
        <Paragraph type="answer">
                  <Paragraph type="para">  Promise in JavaScript:</Paragraph>
                  A Promise is an object in JavaScript that represents the eventual completion (or failure) of an asynchronous operation and its resulting value. Promises make handling asynchronous code easier and cleaner than using callbacks.
                    <ol className="px-4 list-decimal list-inside">
                      <li>.then():</li>
                      <ul className="px-4 list-disc list-inside">
                        <li>Used to handle the resolved value of a promise.</li>
                        <li>You can chain multiple .then() calls to process the data further.</li>
                      </ul>
                      <li>.catch():</li>
                      <ul className="px-4 list-disc list-inside">
                        <li>Used to handle errors or rejections in a promise.</li>
                        <li>Catches any error that occurs during the promise execution or in the .then() chain.</li>
                      </ul>
                    </ol>
                    <Paragraph type="para"> Example Usage of Promises:</Paragraph>
                    <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                        <CodeHighlighter code={ExampleUsagePromises} language="javascript" />
                    </div>
                    <Paragraph type="para"> Project: Create a Promise That Resolves After 2 Seconds:</Paragraph>
                    <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                        <CodeHighlighter code={ ProjectPromises} language="javascript" />
                    </div>
                    <Paragraph type="para"> Key Benefits of Promises:</Paragraph>
                      <ul className="px-4 list-disc list-inside">
                        <li>Avoids "callback hell."</li>
                        <li>Makes asynchronous code more readable and maintainable.</li>
                        <li>Enables better error handling with .catch().</li>
                      </ul>
        </Paragraph> <br />

         {/* {/* Question 10*/}

         <Paragraph>10. What is async/await, and how does it work with Promises?</Paragraph>
        <Paragraph type="answer">
                <Paragraph type="para"> async/await in JavaScript:</Paragraph>
                      <ul className="px-4 list-disc list-inside">
                        <li>async/await is a modern syntax in JavaScript introduced in ES8 (ES2017) that simplifies working with Promises.</li>
                        <li>It allows you to write asynchronous code in a synchronous, more readable manner.</li>
                      </ul>
                <Paragraph type="para"> How async/await Works:</Paragraph>
                    <ol className="px-4 list-decimal list-inside">
                      <li>async Function:</li>
                      <ul className="px-4 list-disc list-inside">
                        <li>Declares a function as asynchronous.</li>
                        <li>It always returns a Promise, even if the return value is not explicitly a Promise.</li>
                      </ul>
                      <li>await Keyword:</li>
                      <ul className="px-4 list-disc list-inside">
                        <li>Pauses the execution of an async function until the Promise is resolved or rejected.</li>
                        <li>Can only be used inside async functions.</li>
                      </ul>
                    </ol>
                  <Paragraph type="para"> Example Usage:</Paragraph>
                    <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                        <CodeHighlighter code={ExampleUsage} language="javascript" />
                    </div>
                    <Paragraph type="para"> How It Works with Promises:</Paragraph>
                    <ol className="px-4 list-decimal list-inside">
                      <li>Without async/await (using .then()):</li>
                      <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                        <CodeHighlighter code={Withoutasync} language="javascript" />
                      </div>
                      <li>With async/await:</li>
                      <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                        <CodeHighlighter code={Withasync} language="javascript" />
                      </div>
                    </ol>
                    <Paragraph type="para"> Advantages of async/await:</Paragraph>
                      <ul className="px-4 list-disc list-inside">
                        <li>Makes asynchronous code look synchronous and easier to read.</li>
                        <li>Simplifies error handling with try...catch.</li>
                        <li>Works seamlessly with Promises for cleaner code.</li>
                      </ul>
                      
        </Paragraph>
        



    </div>
  );
}

export default ES6Js ;


