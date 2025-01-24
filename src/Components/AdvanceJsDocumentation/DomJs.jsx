import React from "react";
import clsx from "clsx";
import { baseParagraphClasses } from "../utils/ClassNames";
import CodeHighlighter from "../documentation/CodeHighlighter";
import AdvanceJsCoding from "./AdvanceJsCoding";

function Paragraph({ children, type = "question", additionalClasses = "" }) {
  const paragraphClass = clsx(baseParagraphClasses[type], additionalClasses);
  return <p className={paragraphClass}>{children}</p>;
}

function DomJs () {
  const {AccessElements, ModifyContent, ChangeStyles, AddorRemoveElements, HandleEvents, getElementById, querySelector, querySelectorAll, HTMLCode, JavaScriptCode, addEventListenerCode, ExampleClickEvent, MultipleListeners, SupportsEventOptions, EventDelegation, JavaScriptDelegation, ExampleDynamicAddition, innerHTM, textContent, innerTexts, UsingstyleProperty, UsingclassList, CSSExample, UsingsetAttribute, parentNode, firstChild, lastChild, nextSibling, previousSibling, children, firstElementChild, nextElementSibling, ExampleSibling, JavaScriptSibling, preventDefault, stopPropagation, PreventsSubmission, JavaScriptSubmission } = AdvanceJsCoding();
  return (
    <div className="bg-[#101C28] p-2">

        <Paragraph type="heading">Step 2: DOM</Paragraph> <br />

        {/* {/* Question 11*/}

        <Paragraph>11. What is the DOM, and how does JavaScript interact with it?  </Paragraph>
        <Paragraph type="answer">
                <Paragraph type="para">DOM:</Paragraph>
                The DOM (Document Object Model) is a programming interface that represents the structure of an HTML or XML document as a tree of objects. It allows JavaScript to interact with and manipulate the elements, styles, and content of a web page dynamically.
                <Paragraph type="para">How JavaScript Interacts with the DOM:</Paragraph>
                <ol className="px-4 list-decimal list-inside">
                  <li>Access Elements: JavaScript can select elements using methods like</li>
                    <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                        <CodeHighlighter code={AccessElements} language="javascript" />
                    </div>
                    <li>Modify Content: Change or update text, HTML, or attributes</li>
                    <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                        <CodeHighlighter code={ModifyContent} language="javascript" />
                    </div>
                    <li>Change Styles: Modify CSS properties dynamically</li>
                    <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                        <CodeHighlighter code={ChangeStyles} language="javascript" />
                    </div>
                    <li>Add or Remove Elements: Dynamically add or remove elements from the DOM</li>
                    <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                        <CodeHighlighter code={AddorRemoveElements} language="javascript" />
                    </div>
                    <li>Handle Events: Add interactivity by listening to user actions</li>
                    <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                        <CodeHighlighter code={HandleEvents} language="javascript" />
                    </div>
                </ol>
                <Paragraph type="para"> Summary:</Paragraph>
                The DOM is the bridge between JavaScript and the HTML content of a webpage. JavaScript interacts with the DOM to:
                    <ul className="px-4 list-disc list-inside">
                      <li>Access and manipulate elements.</li>
                      <li>Change content and styles.</li>
                      <li>Respond to user events for dynamic and interactive web pages.</li>
                    </ul>
        </Paragraph> <br />

         {/* {/* Question 12*/}

         <Paragraph>12. Explain how to select elements in the DOM using methods like getElementById, querySelector, and querySelectorAll.  
                    <ul className="px-4 list-disc list-inside">
                      <li>Project: Create a webpage with a button that changes the color of a div when clicked.</li>
                    </ul>
         </Paragraph>
        <Paragraph type="answer">
                <Paragraph type="para">How to Select Elements in the DOM:</Paragraph>
                <ol className="px-4 list-decimal list-inside">
                  <li>getElementById: Selects a single element by its id.</li>
                    <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                        <CodeHighlighter code={getElementById} language="javascript" />
                    </div>
                    <li>MquerySelector: Selects the first element that matches a CSS selector.</li>
                    <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                        <CodeHighlighter code={querySelector} language="javascript" />
                    </div>
                    <li>querySelectorAll: Selects all elements that match a CSS selector and returns a NodeList (an array-like object).</li>
                    <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                        <CodeHighlighter code={querySelectorAll} language="javascript" />
                    </div>
                </ol>
                <Paragraph type="para">Project: Webpage with Button to Change Div Color</Paragraph>
                HTML:
                    <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                        <CodeHighlighter code={HTMLCode} language="html" />
                    </div>
                JavaScript (script.js):
                    <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                        <CodeHighlighter code={JavaScriptCode} language="javascript" />
                    </div>
                    <Paragraph type="para"> How It Works:</Paragraph>
                    <ul className="px-4 list-disc list-inside">
                      <li>The getElementById method selects the &lt;div&gt; and the &lt;button&gt; by their IDs.</li>
                      <li>The addEventListener method listens for a click event on the button.</li>
                      <li>On button click, the background color of the &lt;div&gt; is changed to a randomly generated color using JavaScript.</li> 
                    </ul>
                    <Paragraph type="para"> Key Takeaway:</Paragraph>
                    DOM selection methods like getElementById, querySelector, and querySelectorAll allow precise access to elements for manipulation. These methods are essential for dynamic and interactive web pages.
        </Paragraph> <br />

        {/* {/* Question 13*/}

        <Paragraph>13. How do event listeners work in JavaScript? Explain addEventListener.  </Paragraph>
        <Paragraph type="answer">
                  <Paragraph type="para"> How Do Event Listeners Work in JavaScript?</Paragraph>
                  Event listeners in JavaScript detect and respond to user actions (like clicks, keypresses, or mouse movements) or other events on elements in the DOM. When the specified event occurs, the attached listener executes a callback function.
                  <Paragraph type="para"> What is addEventListener??</Paragraph>
                  The addEventListener method is used to attach an event listener to a DOM element. It enables a specified function (callback) to be executed when an event occurs.
                  <Paragraph type="para"> Syntax:</Paragraph>
                    <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                        <CodeHighlighter code={addEventListenerCode} language="javascript" />
                    </div>
                    <ol className="px-4 list-decimal list-inside">
                      <li>event: The name of the event to listen for (e.g., "click", "keydown").</li>
                      <li>callback: The function to execute when the event occurs.</li>
                      <li>options (optional): Additional settings, such as:</li>
                      <ul className="px-4 list-disc list-inside">
                        <li>capture: If true, listens during the capturing phase.</li>
                        <li>once: If true, the listener runs only once.</li>
                        <li>passive: If true, indicates the listener will not prevent default actions.</li> 
                      </ul> 
                    </ol>
                    <Paragraph type="para">Example: Click Event:</Paragraph>
                    <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                        <CodeHighlighter code={ExampleClickEvent} language="javascript" />
                    </div>
                    <Paragraph type="para">Key Features of addEventListener:</Paragraph>
                    <ol className="px-4 list-decimal list-inside">
                      <li>Multiple Listeners: Allows multiple listeners for the same event on the same element.</li>
                      <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                        <CodeHighlighter code={MultipleListeners} language="javascript" />
                      </div>
                      <li>Supports Event Options:</li>
                      <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                        <CodeHighlighter code={SupportsEventOptions} language="javascript" />
                      </div>
                      <li>Capturing and Bubbling: Listens during different phases of event propagation.</li>
                </ol>
                <Paragraph type="para">Why Use addEventListener?</Paragraph>
                      <ul className="px-4 list-disc list-inside">
                        <li>More flexible than inline onclick or event properties.</li>
                        <li>Supports advanced configurations (like once or passive).</li>
                        <li>Can attach multiple listeners to the same event without overwriting others.</li> 
                      </ul>
        </Paragraph> <br />

         {/* {/* Question 14*/}

         <Paragraph>14. What is event delegation, and why is it useful? 
                    <ul className="px-4 list-disc list-inside">
                      <li>Project: Create a list where clicking on each list item logs its content. Use event delegation.</li>
                    </ul>
         </Paragraph>
        <Paragraph type="answer">
                <Paragraph type="para">Event Delegation:</Paragraph>
                Event delegation is a technique in JavaScript where a single event listener is attached to a parent element to handle events for its child elements. Instead of adding individual event listeners to each child, the parent listens for events bubbling up from the child elements.
                <Paragraph type="para">Why is Event Delegation Useful?</Paragraph>
                      <ul className="px-4 list-disc list-inside">
                        <li>Performance: Reduces the number of event listeners, especially when handling many child elements.</li>
                        <li>Dynamic Elements: Works for elements added to the DOM dynamically after the event listener is attached.</li>
                        <li>Cleaner Code: Simplifies code by consolidating event handling in one place.</li> 
                      </ul>
                      <Paragraph type="para">Example: Project with Event Delegation</Paragraph>
                      HTML:
                      <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                        <CodeHighlighter code={EventDelegation} language="html" />
                      </div>
                      JavaScript (script.js):
                      <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                        <CodeHighlighter code={JavaScriptDelegation} language="javascript" />
                      </div>
                      <Paragraph type="para">How It Works:</Paragraph>
                      <ul className="px-4 list-disc list-inside">
                        <li>The click event listener is attached to the parent &lt;ul&gt; element (itemList).</li>
                        <li>When a child &lt;li&gt; is clicked, the event bubbles up to the parent.</li>
                        <li>Inside the event listener, event.target identifies the clicked child (&lt;li&gt;), and its content is logged.</li> 
                      </ul>
                      <Paragraph type="para">Benefits in This Example:</Paragraph>
                      <ul className="px-4 list-disc list-inside">
                        <li>No need to attach listeners to each &lt;li&gt; individually.</li>
                        <li>Works dynamically: If you later add &lt;li&gt; elements, the same event listener will handle clicks for them.</li> 
                      </ul>
                      Example of Dynamic Addition:
                      <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                        <CodeHighlighter code={ExampleDynamicAddition} language="javascript" />
                      </div>
        </Paragraph> <br />

        {/* {/* Question 15*/}

        <Paragraph>15. What is the difference between innerHTML, textContent, and innerText?  </Paragraph>
        <Paragraph type="answer">
                  <Paragraph type="para">Difference Between innerHTML, textContent, and innerText:</Paragraph>
                      <ol className="px-4 list-decimal list-inside">
                        <li>innerHTML:</li>
                          <ul className="px-4 list-disc list-inside">
                            <li>Gets or sets the HTML content inside an element, including tags.</li>
                            <li>Parses HTML when setting, making it suitable for dynamic HTML generation.</li> 
                          </ul>
                          <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                            <CodeHighlighter code={innerHTM} language="javascript" />
                          </div>
                          <li>textContent:</li>
                          <ul className="px-4 list-disc list-inside">
                            <li>Gets or sets the text content of an element, excluding any HTML tags.</li>
                            <li>Provides a faster and safer way to work with plain text.</li> 
                          </ul>
                          <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                            <CodeHighlighter code={textContent} language="javascript" />
                          </div>
                          <li>innerText:</li>
                          <ul className="px-4 list-disc list-inside">
                            <li>Gets or sets the visible text of an element, respecting CSS styles like display: none or visibility: hidden.</li>
                            <li>Reads text as it appears to the user.</li> 
                          </ul>
                          <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                            <CodeHighlighter code={innerTexts} language="javascript" />
                          </div> 
                      </ol>
                      <Paragraph type="para">When to Use:</Paragraph>
                      <ul className="px-4 list-disc list-inside">
                        <li>Use innerHTML when working with HTML content.</li>
                        <li>Use textContent for plain text manipulation or when security is important (avoids script injection).</li>
                        <li>Use innerText when you need to retrieve or set visible text as it appears to the user.</li> 
                      </ul>
        </Paragraph> <br />

        {/* {/* Question 16*/}

        <Paragraph>16. Explain how you can manipulate CSS styles of an element using JavaScript.  </Paragraph>
        <Paragraph type="answer">
                <Paragraph type="para">Manipulating CSS Styles Using JavaScript:</Paragraph>
                JavaScript allows you to dynamically manipulate the CSS styles of elements in the DOM. You can do this using the style property or by adding/removing class names.
                <Paragraph type="para">1. Using the style Property:</Paragraph>
                The style property allows you to set or modify individual CSS properties directly on an element. Example:
                          <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                            <CodeHighlighter code={UsingstyleProperty} language="javascript" />
                          </div>
                          <ul className="px-4 list-disc list-inside">
                            <li>Property names are written in camelCase (e.g., backgroundColor instead of background-color).</li>
                            <li>Changes apply only to the inline styles of the element.</li> 
                          </ul>
                          <Paragraph type="para">2. Using classList to Add/Remove Classes:</Paragraph>
                          This method is preferred for applying predefined styles from CSS classes. Example:
                          <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                            <CodeHighlighter code={UsingclassList} language="javascript" />
                          </div>
                          CSS Example:
                          <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                            <CodeHighlighter code={CSSExample} language="css" />
                          </div>
                          <Paragraph type="para">Using setAttribute for the style Attribute</Paragraph>
                          ou can modify the style attribute directly. Example:
                          <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                            <CodeHighlighter code={UsingsetAttribute} language="javascript" />
                          </div>
                          <Paragraph type="para">When to Use Each Method:</Paragraph>
                      <ul className="px-4 list-disc list-inside">
                        <li>Use style for dynamic or one-off changes to specific styles.</li>
                        <li>Use classList for applying reusable CSS classes for better maintainability.</li>
                        <li>Avoid setAttribute unless manipulating multiple styles as a single string is required.</li> 
                      </ul>
        </Paragraph> <br />

        {/* {/* Question 17*/}

        <Paragraph>17. How do you traverse the DOM? Explain parentNode, firstChild, lastChild, etc.  </Paragraph>
        <Paragraph type="answer">
                <Paragraph type="para">How to Traverse the DOM:</Paragraph>
                DOM traversal allows you to navigate and manipulate elements within the DOM tree. You can move between parent, child, and sibling nodes using specific properties.
                <Paragraph type="para">Key DOM Traversal Properties:</Paragraph>
                      <ol className="px-4 list-decimal list-inside">
                        <li>parentNode:</li>
                          <ul className="px-4 list-disc list-inside">
                            <li>Accesses the parent node of the current element. Example</li>
                          </ul>
                          <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                            <CodeHighlighter code={parentNode} language="javascript" />
                          </div>
                          <li>firstChild:</li>
                          <ul className="px-4 list-disc list-inside">
                            <li>Retrieves the first child node (including text or comment nodes). Example</li>
                          </ul>
                          <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                            <CodeHighlighter code={firstChild} language="javascript" />
                          </div>
                          <li>lastChild:</li>
                          <ul className="px-4 list-disc list-inside">
                            <li>Retrieves the last child node (including text or comment nodes). Example</li>
                          </ul>
                          <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                            <CodeHighlighter code={lastChild} language="javascript" />
                          </div>
                          <li>nextSibling:</li>
                          <ul className="px-4 list-disc list-inside">
                            <li>Accesses the next sibling node (including text or comment nodes). Example</li>
                          </ul>
                          <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                            <CodeHighlighter code={nextSibling} language="javascript" />
                          </div>
                          <li>previousSibling:</li>
                          <ul className="px-4 list-disc list-inside">
                            <li>Accesses the previous sibling node (including text or comment nodes). Example</li>
                          </ul>
                          <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                            <CodeHighlighter code={previousSibling} language="javascript" />
                          </div>
                          <li>children:</li>
                          <ul className="px-4 list-disc list-inside">
                            <li>Returns all child elements (excluding text or comment nodes) as an HTMLCollection.   Example</li>
                          </ul>
                          <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                            <CodeHighlighter code={children} language="javascript" />
                          </div>
                          <li>firstElementChild and lastElementChild:</li>
                          <ul className="px-4 list-disc list-inside">
                            <li>Retrieve the first/last child element (ignores text or comment nodes). Example</li>
                          </ul>
                          <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                            <CodeHighlighter code={firstElementChild} language="javascript" />
                          </div>
                          <li>nextElementSibling and previousElementSibling:</li>
                          <ul className="px-4 list-disc list-inside">
                            <li>Access the next/previous sibling element (ignores text or comment nodes). Example</li>
                          </ul>
                          <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                            <CodeHighlighter code={nextElementSibling} language="javascript" />
                          </div>
                      </ol>
                      <Paragraph type="para">Example:</Paragraph>
                          <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                            <CodeHighlighter code={ExampleSibling} language="html" />
                          </div>
                          JavaScript:
                          <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                            <CodeHighlighter code={JavaScriptSibling} language="javascript" />
                          </div>

        </Paragraph> <br />

        {/* {/* Question 18*/}

        <Paragraph>18. What is the purpose of preventDefault() and stopPropagation() in event handling? 
                    <ul className="px-4 list-disc list-inside">
                      <li>Project: Create a form that prevents submission and logs a message instead.</li>
                    </ul>
         </Paragraph>
        <Paragraph type="answer">
                <Paragraph type="para">Purpose of preventDefault() and stopPropagation() in Event Handling:</Paragraph>
                          <ol className="px-4 list-decimal list-inside">
                            <li>preventDefault():</li>
                              <ul className="px-4 list-disc list-inside">
                                <li>Prevents the default action associated with an event from occurring.</li>
                                <li>Commonly used for events like form submission, link clicks, etc.</li>
                                <li>Example: Preventing a form from submitting.</li>
                              </ul>
                              <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                                <CodeHighlighter code={preventDefault} language="javascript" />
                              </div>
                              <li>stopPropagation():</li>
                              <ul className="px-4 list-disc list-inside">
                                <li>Stops the event from propagating (bubbling) to parent elements.</li>
                                <li>Useful when you want to handle the event only on the target element.</li>
                                <li>Example: Preventing a click event from reaching a parent element.</li>
                              </ul>
                              <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                                <CodeHighlighter code={stopPropagation} language="javascript" />
                              </div>
                          </ol>
                          <Paragraph type="para">Project: Form That Prevents Submission:</Paragraph>
                          HTML:
                              <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                                <CodeHighlighter code={PreventsSubmission} language="html" />
                              </div>
                          JavaScript:
                              <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                                <CodeHighlighter code={JavaScriptSubmission} language="javascript" />
                              </div>
                              <Paragraph type="para">How It Works:</Paragraph>
                              <ul className="px-4 list-disc list-inside">
                                <li>The preventDefault() stops the form from actually submitting when the "Submit" button is clicked.</li>
                                <li>A message is logged instead of reloading the page or sending the form data.</li>
                              </ul>
                              Result: The form does not reload the page or submit data, but you can still interact with it.

        </Paragraph>
        



    </div>
  );
}

export default DomJs ;


