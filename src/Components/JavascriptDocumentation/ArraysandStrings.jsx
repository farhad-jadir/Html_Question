import React from "react";
import clsx from "clsx";
import { baseParagraphClasses } from "../utils/ClassNames";
import CodeHighlighter from "../documentation/CodeHighlighter";
import JsCoding from "./JsCoding";

function Paragraph({ children, type = "question", additionalClasses = "" }) {
  const paragraphClass = clsx(baseParagraphClasses[type], additionalClasses);
  return <p className={paragraphClass}>{children}</p>;
}

function ArraysandStrings() {
  const {Commonarray, ForEachArrays, originalArrays, filterMethod, Accumulator,InitialValue, ValueCallback, Findlength, Reversestring, StringInterpolationn, MultilineStrings, ExpressionEvaluation, UsingSet, Usingfilter   } = JsCoding();
  return (
    <div className="bg-[#101C28] p-2">

        <Paragraph type="heading">Step 4: Arrays and Strings  </Paragraph> <br />

        {/* {/* Question 18 */}

        <Paragraph>18. What are some common array methods in JavaScript? </Paragraph>
                <Paragraph type="answer">
                Here are some common array methods in JavaScript, grouped by their functionality:
                <Paragraph type="para">1. Adding/Removing Elements:</Paragraph>
                <ul className="px-4 list-disc list-inside">
                    <li>push(): Adds one or more elements to the end of an array.
                    Example: arr.push(10);</li>
                    <li>pop(): Removes the last element from an array.
                    Example: arr.pop();</li>
                    <li>shift(): Removes the first element from an array.
                    Example: arr.shift();</li>
                    <li>unshift(): Adds one or more elements to the beginning of an array.
                    Example: arr.unshift(0);</li>
                    <li>splice(): Adds or removes elements at a specific index.
                    Example: arr.splice(2, 1, "newItem");</li>
                </ul>
                <Paragraph type="para">2. Accessing/Subsetting:</Paragraph>
                <ul className="px-4 list-disc list-inside">
                    <li>slice(): Returns a shallow copy of a portion of an array.
                    Example: arr.slice(1, 3);</li>
                    <li>concat(): Combines two or more arrays.
                    Example: arr.concat([4, 5]);</li>
                </ul>
                <Paragraph type="para">3. Searching</Paragraph>
                <ul className="px-4 list-disc list-inside">
                    <li>includes(): Checks if an array contains a specific value.
                    Example: arr.includes(5);</li>
                    <li>indexOf(): Returns the first index of a specified element.
                    Example: arr.indexOf(3);</li>
                    <li>find(): Returns the first element that satisfies a condition.
                    Example: arr.find(x =&gt; x &gt; 5);</li>
                    <li>findIndex(): Returns the index of the first element that satisfies a condition.
                    Example: arr.findIndex(x =&gt; x &gt; 5);</li>
                </ul>
                <Paragraph type="para">4. Iterating:</Paragraph>
                <ul className="px-4 list-disc list-inside">
                    <li>forEach(): Executes a function for each element in the array.
                    Example: arr.forEach(x =&gt; console.log(x));</li>
                    <li>map(): Creates a new array by applying a function to each element.
                    Example: arr.map(x =&gt; x * 2);</li>
                    <li>filter(): Creates a new array with elements that pass a test.
                    Example: arr.filter(x =&gt; x &gt; 5);</li>
                </ul>
                <Paragraph type="para">5. Transforming:</Paragraph>
                <ul className="px-4 list-disc list-inside">
                    <li>reduce(): Reduces the array to a single value.
                    Example: arr.reduce((sum, x) =&gt; sum + x, 0);</li>
                    <li>join(): Joins array elements into a string.
                    Example: arr.join(", ");</li>
                    <li>reverse(): Reverses the order of elements in the array.
                    Example: arr.reverse();</li>
                    <li>sort(): Sorts the elements of an array.
                    Example: arr.sort((a, b) =&gt; a - b);</li>
                </ul>
                <Paragraph type="para">6. Checking Conditions:</Paragraph>
                <ul className="px-4 list-disc list-inside">
                    <li>every(): Checks if all elements pass a test.
                    Example: arr.every(x =&gt; x &gt; 0);</li>
                    <li>some(): Checks if at least one element passes a test.
                    Example: arr.some(x =&gt; x &gt; 10);</li>
                </ul>
                <Paragraph type="para">Example:</Paragraph>
                <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                  <CodeHighlighter code={Commonarray} language="javascript" />
                </div>
                  
                </Paragraph> <br />

                {/* {/* Question 19 */}

        <Paragraph>19. How does map() differ from forEach() in arrays? </Paragraph>
          <Paragraph type="answer">
                <Paragraph type="para">Difference between map() and forEach():</Paragraph>
            <ol className="px-4 list-decimal list-inside">
              <li>Purpose:</li>
              <ul className="px-4 list-disc list-inside">
                <li>map(): Creates and returns a new array with the results of applying a callback function to each element in the original array.</li>
                <li>forEach(): Executes a callback function for each element in the array but does not return a new array.</li>
              </ul>
              <li>Return Value:</li>
              <ul className="px-4 list-disc list-inside">
                <li>map(): Returns a new array.</li>
                <li>forEach(): Returns undefined.</li>
              </ul>
              <li>Chaining:</li>
              <ul className="px-4 list-disc list-inside">
                <li>map(): Can be chained with other array methods (like .filter(), .reduce()).</li>
                <li>forEach(): Cannot be chained directly since it does not return an array.</li>
              </ul>
              <li>Use Case:</li>
              <ul className="px-4 list-disc list-inside">
                <li>map(): Use when you need to transform or create a new array.</li>
                <li>forEach(): Use when performing side effects (e.g., logging, updating variables).</li>
              </ul>
            </ol>
            <Paragraph type="para">Example:</Paragraph>
                <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                  <CodeHighlighter code={ForEachArrays} language="javascript" />
                </div>
                  
          </Paragraph> <br />

          {/* {/* Question 20 */}

        <Paragraph>20. Explain the filter() method. How does it work? </Paragraph>
        <Paragraph type="answer">
                <Paragraph type="para">filter() Method in JavaScript:</Paragraph>
                The filter() method is used to create a new array that includes only the elements of the original array that satisfy a specified condition (provided as a callback function).
                <Paragraph type="para">How It Works</Paragraph>
                <ol className="px-4 list-decimal list-inside">
                  <li>The filter() method iterates through each element of the array.</li>
                  <li>For each element, it executes the callback function, which returns either:</li>
                    <ul className="px-4 list-disc list-inside">
                      <li>true: The element is included in the new array.</li>
                      <li>false: The element is excluded from the new array.</li>
                    </ul>
                  <li>The original array remains unchanged.</li>
                </ol>
                <Paragraph type="para">Syntax:</Paragraph>
                <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                  <CodeHighlighter code={originalArrays} language="javascript" />
                </div>
                <ol className="px-4 list-decimal list-inside">
                  <li>callback: A function that tests each element.</li>
                    <ul className="px-4 list-disc list-inside">
                      <li>element: Current element being processed.</li>
                      <li>index (optional): Index of the current element.</li>
                      <li>array (optional): The array being processed.</li>
                    </ul>
                </ol>
                <Paragraph type="para">Example:</Paragraph>
                <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                  <CodeHighlighter code={filterMethod} language="javascript" />
                </div>
                <Paragraph type="para">Key Points:</Paragraph>
                    <ul className="px-4 list-disc list-inside">
                      <li>Returns a new array with elements that satisfy the condition.</li>
                      <li>Does not modify the original array.</li>
                      <li>Works well for filtering based on conditions (e.g., even numbers, specific properties in objects).</li>
                    </ul>
        </Paragraph> <br />

        {/* {/* Question 21 */}

        <Paragraph>21. What does the reduce() method do, and how is it used? </Paragraph>
        <Paragraph type="answer">
                <Paragraph type="para">reduce() Method in JavaScript:</Paragraph>
                The reduce() method is used to iterate through an array and reduce it to a single value (e.g., sum, product, or object). It executes a callback function on each element of the array, passing the result of the previous computation as an accumulator.
                <Paragraph type="para">How It Works:</Paragraph>
                <ol className="px-4 list-decimal list-inside">
                  <li>The reduce() method processes each array element in order.</li>
                  <li>The callback function receives:</li>
                    <ul className="px-4 list-disc list-inside">
                      <li>accumulator: Stores the accumulated result from previous iterations.</li>
                      <li>currentValue: The current array element being processed.</li>
                      <li>currentIndex (optional): The index of the current element.</li>
                      <li>array (optional): The array being processed.</li>
                    </ul>
                  <li>An optional initial value can be provided for the accumulator.</li>
                </ol>
                <Paragraph type="para">Syntax:</Paragraph>
                <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                  <CodeHighlighter code={ Accumulator} language="javascript" />
                </div>
                    <ul className="px-4 list-disc list-inside">
                      <li>callback: A function applied to each element.</li>
                      <li>initialValue (optional): Initial value for the accumulator.</li>
                    </ul>
                    <Paragraph type="para">Example 1: Sum of Numbers:</Paragraph>
                <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                  <CodeHighlighter code={InitialValue } language="javascript" />
                </div>
                <ol className="px-4 list-disc list-inside">
                  <li>Explanation</li>
                    <ul className="px-4 list-disc list-inside">
                      <li>Start with accumulator = 0 (initial value).</li>
                      <li>Add each currentValue to the accumulator.</li>
                    </ul>
                  <li>thisArg (optional): Value to use as this in the callback.</li>
                </ol>
                <Paragraph type="para">Example 2:</Paragraph>
                <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                  <CodeHighlighter code={ValueCallback} language="javascript" />
                </div>
                <Paragraph type="para">Key Points:</Paragraph>
                    <ul className="px-4 list-disc list-inside">
                      <li>Reduces array to a single value (e.g., sum, product, max, etc.).</li>
                      <li>Does not modify the original array.</li>
                      <li>Great for complex operations like creating objects or aggregating data.</li>
                    </ul>
                    
        </Paragraph> <br />

         {/* {/* Question 22 */}

         <Paragraph>22. How do you find the length of a string and reverse it? </Paragraph>
        <Paragraph type="answer">
                To find the length of a string and reverse it:
                <Paragraph type="para">1. Find the length: Use the len() function.</Paragraph>
                <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                  <CodeHighlighter code={Findlength} language="javascript" />
                </div>
                <Paragraph type="para">2. Reverse the string: Use slicing with [::-1].</Paragraph>
                <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                  <CodeHighlighter code={Reversestring} language="javascript" />
                </div>
                Both operations are simple and efficient in Python!

        </Paragraph> <br />

        {/* {/* Question 23 */}

        <Paragraph>23. What are template literals, and how can they be used for string manipulation?</Paragraph>
        <Paragraph type="answer">
                Template literals are a feature in JavaScript, enclosed by backticks (`), that allow for easier string manipulation. They enable:
                <Paragraph type="para">1. String Interpolation: Embed variables or expressions directly using ${}.</Paragraph>
                <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                  <CodeHighlighter code={StringInterpolationn} language="javascript" />
                </div>
                <Paragraph type="para">2. Multiline Strings: Create strings spanning multiple lines without special characters.</Paragraph>
                <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                  <CodeHighlighter code={MultilineStrings} language="javascript" />
                </div>
                <Paragraph type="para">3. Expression Evaluation: Include expressions directly.</Paragraph>
                <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                  <CodeHighlighter code={ExpressionEvaluation} language="javascript" />
                </div>
                Template literals make string manipulation more readable and powerful.
          
        </Paragraph> <br />

        {/* {/* Question 24 */}

        <Paragraph>24. How do you remove duplicates from an array?</Paragraph>
        <Paragraph type="answer">
                o remove duplicates from an array in JavaScript:
                <Paragraph type="para">1. Using Set: Convert the array to a Set (which stores only unique values) and back to an array.</Paragraph>
                <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                  <CodeHighlighter code={UsingSet} language="javascript" />
                </div>
                <Paragraph type="para">2. Using filter: Check if the current index matches the first index of the element.</Paragraph>
                <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                  <CodeHighlighter code={Usingfilter} language="javascript" />
                </div>
                Both methods are efficient, with Set being simpler and more concise!
        </Paragraph>
      



    </div>
  );
}

export default ArraysandStrings;


