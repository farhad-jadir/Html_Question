import React from "react";
import clsx from "clsx";
import { baseParagraphClasses } from "../utils/ClassNames";
import CodeHighlighter from "../documentation/CodeHighlighter";
import AdvanceJsCoding from "./AdvanceJsCoding";

function Paragraph({ children, type = "question", additionalClasses = "" }) {
  const paragraphClass = clsx(baseParagraphClasses[type], additionalClasses);
  return <p className={paragraphClass}>{children}</p>;
}

function BomJs () {
  const { StoreandRetrieve, windowopen, newwindow, windowinnerWidth, OutputtExample, setTimeoutCode, setIntervalCode, setIntervaltCode, setIntervalttCode, singsetInterval, navigatoronLine, OnlineandOfflineEvent, OnlineOfflineStatus} = AdvanceJsCoding();
  return (
    <div className="bg-[#101C28] p-2">

        <Paragraph type="heading">Step 1: ES6</Paragraph> <br />

        {/* {/* Question 19*/}

        <Paragraph>19. What is the Browser Object Model (BOM) in JavaScript?  </Paragraph>
        <Paragraph type="answer">
                The Browser Object Model (BOM) in JavaScript refers to a set of objects provided by the browser to interact with and manipulate the browser environment outside of the webpage content. It primarily revolves around the window object, which serves as the global object for JavaScript in the browser.
                <Paragraph type="para">Key BOM Components:</Paragraph>
                    <ol className="px-4 list-decimal list-inside">
                      <li>window: The main object representing the browser window. Other BOM components are properties of window.</li>
                      <ul className="px-4 list-disc list-inside">
                        <li>Example: window.alert("Hello!")</li>
                      </ul>
                      <li>navigator: Provides information about the browser and user’s device (e.g., user agent, platform).</li>
                      <ul className="px-4 list-disc list-inside">
                        <li>Example: navigator.userAgent</li>
                      </ul>
                      <li>location: Represents the URL of the current page and allows URL manipulation.</li>
                      <ul className="px-4 list-disc list-inside">
                        <li>Example: location.href = "https://example.com"</li>
                      </ul>
                      <li>history: Allows navigation through the browser's history (e.g., back, forward).</li>
                      <ul className="px-4 list-disc list-inside">
                        <li>Example: history.back()</li>
                      </ul>
                      <li>screen: Contains information about the user's screen (e.g., resolution, color depth).</li>
                      <ul className="px-4 list-disc list-inside">
                        <li>Example: screen.width</li>
                      </ul>
                    </ol>
                    <Paragraph type="para">Purpose of BOM:</Paragraph>
                    The BOM enables JavaScript to interact with the browser environment, manage the webpage's display, and control navigation-related tasks. It complements the Document Object Model (DOM), which handles the webpage's content structure.
        </Paragraph> <br />

        {/* {/* Question 20*/}

        <Paragraph>20. How does window differ from document? </Paragraph>
        <Paragraph type="answer">
                The window and document objects in JavaScript both play crucial roles in web development but serve different purposes:
                <Paragraph type="para">1. window Object:</Paragraph>
                      <ul className="px-4 list-disc list-inside">
                        <li>Represents the browser window or global context.</li>
                        <li>It is the top-level object that contains everything in the browser, including the document.</li>
                        <li>Provides methods and properties to interact with the browser (e.g., alerts, browser history, URL, and screen size). Examples:</li>
                        <ul className="px-4 list-disc list-inside">
                          <li>window.alert("Hello!"); – Displays an alert.</li>
                          <li>window.location.href – Gets or sets the current URL.</li>
                          <li>window.history.back(); – Navigates to the previous page.</li>
                        </ul>
                      </ul>
                      <Paragraph type="para">2. document Object:</Paragraph>
                      <ul className="px-4 list-disc list-inside">
                        <li>Represents the HTML document loaded in the browser window.</li>
                        <li>It is a child of the window object (i.e., window.document).</li>
                        <li>Allows access to and manipulation of the HTML structure and content (the DOM). Examples:</li>
                        <ul className="px-4 list-disc list-inside">
                          <li>document.getElementById("myDiv"); – Selects an element by ID.</li>
                          <li>document.title – Gets or sets the title of the web page.</li>
                          <li>document.body – Refers to the &lt;body&gt; element of the page.</li>
                        </ul>
                      </ul>
                      In short, the window is the container for everything, and the document is specifically about the webpage's content. 
        </Paragraph> <br />

        {/* {/* Question 21*/}

        <Paragraph>21. Explain how localStorage, sessionStorage, and cookies work and their differences. 
                    <ul className="px-4 list-disc list-inside">
                      <li>Project: Store and retrieve user preferences (like theme) using localStorage</li>
                    </ul>
         </Paragraph>
        <Paragraph type="answer">
                      <Paragraph type="para">localStorage, sessionStorage, and cookies – Overview and Differences:</Paragraph>
                        <ol className="px-4 list-decimal list-inside">
                          <li>localStorage:</li>
                          <ul className="px-4 list-disc list-inside">
                            <li>Stores data with no expiration. Data persists even after the browser is closed.</li>
                            <li>Stored per origin (domain + protocol).</li>
                            <li>Size limit: ~5-10MB.</li>
                            <li>Accessed via localStorage API.</li>
                          </ul>
                          <li>sessionStorage:</li>
                          <ul className="px-4 list-disc list-inside">
                            <li>Stores data for the duration of the session. Data is cleared when the browser tab is closed.</li>
                            <li>Stored per tab and origin.</li>
                            <li>Size limit: ~5-10MB.</li>
                            <li>Accessed via sessionStorage API.</li>
                          </ul>
                          <li>Cookies:</li>
                          <ul className="px-4 list-disc list-inside">
                            <li>Stores small pieces of data (4KB limit) with an expiration date. Can persist based on configuration.</li>
                            <li>Automatically sent with every HTTP request to the server.</li>
                            <li>Used for server-client communication (e.g., authentication).</li>
                            <li>Accessed via document.cookie.
                            </li>
                          </ul>
                        </ol>
                        <Paragraph type="para">Project: Store and Retrieve Theme Preference Using localStorage</Paragraph>
                        Storing and Retrieving the Theme:
                        <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                          <CodeHighlighter code={StoreandRetrieve} language="javascript" />
                        </div>
                        <Paragraph type="para">How it works:</Paragraph>
                          <ul className="px-4 list-disc list-inside">
                            <li>The saveThemePreference function stores the selected theme in localStorage.</li>
                            <li>The applyThemePreference function retrieves the saved theme and applies it on page load. Since localStorage data is persistent, the theme preference remains even after the browser is closed.</li>
                          </ul>

        </Paragraph> <br />

        {/* {/* Question 22*/}

        <Paragraph>22. What is the purpose of the navigator object, and what properties does it have?  </Paragraph>
        <Paragraph type="answer">
                The navigator object in JavaScript provides information about the browser and the user's environment. It is part of the Browser Object Model (BOM) and is commonly used to gather details about the browser type, version, operating system, and device capabilities.
                <Paragraph type="para">Purpose of navigator:</Paragraph>
                          <ul className="px-4 list-disc list-inside">
                            <li>Detecting the user's browser and platform.</li>
                            <li>Accessing information like geolocation and online status.</li>
                            <li>Interacting with APIs like the Clipboard, WebRTC, or Push Notifications.</li>
                          </ul>
                          <Paragraph type="para">Key Properties of navigator:</Paragraph>
                          <ol className="px-4 list-decimal list-inside">
                            <li>navigator.userAgent:</li>
                            <ul className="px-4 list-disc list-inside">
                              <li>Contains the user agent string with details about the browser and operating system.</li>
                              <li>Example: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/110"</li>
                            </ul>
                            <li>navigator.language:</li>
                            <ul className="px-4 list-disc list-inside">
                              <li>Returns the user's preferred language.</li>
                              <li>Example: "en-US"</li>
                            </ul>
                            <li>navigator.platform:</li>
                            <ul className="px-4 list-disc list-inside">
                              <li>Provides information about the operating system or platform.</li>
                              <li>Example: "Win32" or "Linux x86_64"</li>
                            </ul>
                            <li>navigator.geolocation:</li>
                            <ul className="px-4 list-disc list-inside">
                              <li>Allows access to the Geolocation API to get the user's location (with permission).</li>
                              <li>Example: navigator.geolocation.getCurrentPosition()</li>
                            </ul>
                            <li>navigator.onLine:</li>
                            <ul className="px-4 list-disc list-inside">
                              <li>Indicates whether the browser is online.</li>
                              <li>Example: true or false</li>
                            </ul>
                            <li>navigator.permissions:</li>
                            <ul className="px-4 list-disc list-inside">
                              <li>Manages permissions for features like camera, microphone, and location.</li>
                              <li>Example: navigator.permissions.query(&#123; name: 'geolocation' &#125;)</li>
                            </ul>
                            <li>navigator.cookieEnabled:</li>
                            <ul className="px-4 list-disc list-inside">
                              <li>Checks if cookies are enabled in the browser.</li>
                              <li>Example: true or false</li>
                            </ul>
                            <li>navigator.hardwareConcurrency:</li>
                            <ul className="px-4 list-disc list-inside">
                              <li>Returns the number of logical processor cores on the user's device.</li>
                              <li>Example: 8</li>
                            </ul>
                          </ol>
                          <Paragraph type="para">Summary:</Paragraph>
                          The navigator object is useful for gathering browser and system information, enabling developers to adapt applications based on the user's environment. For example, it can be used to detect language preferences or provide geolocation-based services.
        </Paragraph> <br />

        {/* {/* Question 23*/}

        <Paragraph>23. How do window.open and window.close methods work in JavaScript?  </Paragraph>
        <Paragraph type="answer">
                <Paragraph type="para">window.open and window.close Methods in JavaScript</Paragraph>
                            <ol className="px-4 list-decimal list-inside">
                              <li>window.open():</li>
                              <ul className="px-4 list-disc list-inside">
                                <li>Opens a new browser window or tab with a specified URL.</li>
                                <li>Can also be used to create an empty window</li>
                                <li>Syntax:</li>
                                <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                                  <CodeHighlighter code={windowopen} language="javascript" />
                                </div>
                                <li>Parameters:</li>
                                <ul className="px-4 list-disc list-inside">
                                  <li>URL: The URL to load in the new window (optional).</li>
                                  <li>name: The name of the new window (e.g., _blank, _self).</li>
                                  <li>specs: A comma-separated string defining the size, position, and features of the new window (e.g., width=500,height=500).</li>
                                </ul>
                              </ul>
                              Example:
                                <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                                  <CodeHighlighter code={newwindow} language="javascript" />
                                </div>
                            </ol>
                            <Paragraph type="para">Behavior:</Paragraph>
                                <ul className="px-4 list-disc list-inside">
                                  <li>Opens a new tab by default, or a popup window if features (specs) are specified.</li>
                                  <li>Popups may be blocked by modern browsers unless triggered by user interaction (e.g., a button click).</li>
                                </ul>
        </Paragraph> <br />

        {/* {/* Question 24*/}

        <Paragraph>24. Explain how to get the viewport width and height of a browser window using JavaScript.
                    <ul className="px-4 list-disc list-inside">
                      <li>Project: Create a function that logs the window’s size whenever it’s resized.</li>
                    </ul>
         </Paragraph>
        <Paragraph type="answer">
                <Paragraph type="para">Getting the Viewport Width and Height in JavaScript:</Paragraph>
                o get the viewport dimensions (the visible area of the browser window), you can use the following properties of the window object:
                                <ul className="px-4 list-disc list-inside">
                                  <li>window.innerWidth: Returns the width of the viewport in pixels, excluding scrollbars.</li>
                                  <li>window.innerHeight: Returns the height of the viewport in pixels, excluding scrollbars.</li>
                                </ul>
                                <Paragraph type="para">Project: Log the Window's Size on Resize:</Paragraph>
                                Here’s how you can create a function to log the window's dimensions whenever it’s resized:
                                <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                                  <CodeHighlighter code={windowinnerWidth} language="javascript" />
                                </div>
                                <Paragraph type="para">BehaviorHow It Works:</Paragraph>
                                <ul className="px-4 list-disc list-inside">
                                  <li>window.innerWidth and window.innerHeight retrieve the current viewport size.</li>
                                  <li>window.addEventListener("resize", logWindowSize) ensures that the logWindowSize function is called every time the browser window is resized.</li>
                                  <li>The function logs the current dimensions in the format: Viewport size: [width]px x [height]px.
                                  </li>
                                </ul>
                                <Paragraph type="para">Output Example:</Paragraph>
                                On resizing the browser, the console logs messages like:
                                <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                                  <CodeHighlighter code={OutputtExample} language="javascript" />
                                </div>
        </Paragraph> <br />

        {/* {/* Question 25*/}

        <Paragraph>25. What is the purpose of the setTimeout and setInterval functions?
                    <ul className="px-4 list-disc list-inside">
                      <li>Project: Create a clock that updates every second using setInterval.</li>
                    </ul>
         </Paragraph>
        <Paragraph type="answer">
                  <Paragraph type="para">Purpose of setTimeout and setInterval:</Paragraph>
                                <ol className="px-4 list-decimal list-inside">
                                  <li>setTimeout:</li>
                                  <ul className="px-4 list-disc list-inside">
                                    <li>Executes a function once after a specified delay (in milliseconds).</li>
                                    <li>Syntax:</li>
                                    <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                                      <CodeHighlighter code={setTimeoutCode} language="javascript" />
                                    </div>
                                    <li>Example:</li>
                                    <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                                      <CodeHighlighter code={setIntervalCode} language="javascript" />
                                    </div>
                                  </ul>
                                  <li>setInterval:</li>
                                  <ul className="px-4 list-disc list-inside">
                                    <li>setInterval:</li>
                                    <li>Syntax:</li>
                                    <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                                      <CodeHighlighter code={setIntervaltCode} language="javascript" />
                                    </div>
                                    <li>Example:</li>
                                    <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                                      <CodeHighlighter code={setIntervalttCode} language="javascript" />
                                    </div>
                                  </ul>
                                </ol>
                                <Paragraph type="para">Project: Create a Clock Using setInterval</Paragraph>
                                    <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                                      <CodeHighlighter code={singsetInterval} language="javascript" />
                                    </div>
                                    <Paragraph type="para">How It Works:</Paragraph>
                                <ul className="px-4 list-disc list-inside">
                                  <li>Clock Initialization: The startClock function sets up a recurring task using setInterval to update the time every second.</li>
                                  <li>updateClock Function: Gets the current time with new Date() and formats it using toLocaleTimeString. Updates the &lt;div&gt; with the latest time.</li>
                                  <li>HTML Setup: Creates a &lt;div&gt; element to display the clock.</li>
                                </ul>
                                <Paragraph type="para">Result:</Paragraph>
                                The browser displays a clock that updates every second, showing the current time in the format HH:MM:SS.
        </Paragraph> <br />

        {/* {/* Question 26*/}

        <Paragraph>26. How can you detect if a user is online or offline using the BOM?  </Paragraph>
        <Paragraph type="answer">
                <Paragraph type="para">Detecting Online or Offline Status Using the BOM:</Paragraph>
                You can use the navigator.onLine property and related events to check if the user is online or offline:
                                <ol className="px-4 list-decimal list-inside">
                                  <li>navigator.onLine:</li>
                                  <ul className="px-4 list-disc list-inside">
                                    <li>Returns true if the browser is online and false if offline.</li>
                                    <li>Example:</li>
                                    <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                                      <CodeHighlighter code={navigatoronLine} language="javascript" />
                                    </div>
                                  </ul>
                                  <li>Online and Offline Events:</li>
                                  <ul className="px-4 list-disc list-inside">
                                    <li>The online and offline events allow you to detect when the user's connection status changes.</li>
                                    <li>Example:</li>
                                    <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                                      <CodeHighlighter code={OnlineandOfflineEvent} language="javascript" />
                                    </div>
                                  </ul>
                                </ol>
                                <Paragraph type="para">Example: Detect Online/Offline Status:</Paragraph>
                                    <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                                      <CodeHighlighter code={OnlineOfflineStatus} language="javascript" />
                                    </div>
                                    <Paragraph type="para">How It Works:</Paragraph>
                                <ul className="px-4 list-disc list-inside">
                                  <li>navigator.onLine checks the current status when the script runs.</li>
                                  <li>online and offline events trigger whenever the connection status changes, allowing real-time updates.</li>
                                </ul>
                                <Paragraph type="para">Output:</Paragraph>
                                <ul className="px-4 list-disc list-inside">
                                  <li>Logs "User is currently: Online" or "User is currently: Offline" in the console.</li>
                                  <li>Real-time updates when the user connects or disconnects from the network.</li>
                                </ul>
        </Paragraph>
        



    </div>
  );
}

export default BomJs ;


