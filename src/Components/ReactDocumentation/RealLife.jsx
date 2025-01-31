import React from "react";
import clsx from "clsx";
import { baseParagraphClasses } from "../utils/ClassNames";
import CodeHighlighter from "../documentation/CodeHighlighter";
import ReactRouterCoding from "./ReactRouterCoding";

function Paragraph({ children, type = "question", additionalClasses = "" }) {
  const paragraphClass = clsx(baseParagraphClasses[type], additionalClasses);
  return <p className={paragraphClass}>{children}</p>;
}

function RealLife () {
  const { FeaturesandBenefits, FormHandling, PropsCode, StateCode, environmentsetup, NamePhoneNumberEmail, contactsName} = ReactRouterCoding();
  return (
    <div className="bg-[#101C28] p-2">

        <Paragraph type="heading">Step 5: Real Life Project </Paragraph> <br />

        {/* {/* Question 59 */}

        <Paragraph>59. Skills Covered: CRUD operations, form handling, props, state.  </Paragraph>
        <Paragraph type="answer">
                <Paragraph type="para">Key Features and Benefits:</Paragraph>
                Create, Read, Update, Delete (CRUD) are basic operations for managing data.
                🔹Example:
                <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                    <CodeHighlighter code={FeaturesandBenefits} language="javascript" />
                </div>
                <Paragraph type="para">Form Handling:</Paragraph>
                Managing form input and submission.
                🔹Example:
                <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                    <CodeHighlighter code={FormHandling} language="javascript" />
                </div>
                <Paragraph type="para">Props:</Paragraph>
                Passing data from parent to child components.
                🔹Example:
                <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                    <CodeHighlighter code={PropsCode} language="javascript" />
                </div>
                <Paragraph type="para">State:</Paragraph>
                Managing local state within a component.
                🔹Example:
                <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                    <CodeHighlighter code={StateCode} language="javascript" />
                </div>
                These examples should give you a clear overview of each skill. If you need further details or have more questions, feel free to ask! 🚀
        </Paragraph> <br />

                              {/* {/* Question 60 */}

              <Paragraph>60. Requirements:
                <ul className="px-4 list-disc list-inside">
                  <li>Allow users to add, edit, and delete contacts.</li>
                  <li>Display a list of contacts with details like name, phone number, and email.</li>
                  </ul>  
                </Paragraph>
              <Paragraph type="answer">
                <Paragraph type="para">Setup:</Paragraph>
                First, ensure you have a React environment set up. You can use Create React App or any other setup of your choice.
                <Paragraph type="para">Code Example:</Paragraph>
                <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                  <CodeHighlighter code={environmentsetup} language="javascript" />
                </div>
                <Paragraph type="para">Key Points:</Paragraph>
                🔹State Management: Uses useState to manage contacts and form input. <br />
                🔹Add/Edit: Adds a new contact or edits an existing one based on the editingIndex.<br />
                🔹Delete: Removes a contact from the list. <br />

                Here's an example of how you can create a React component to display a list of contacts with details such as name, phone number, and email:
                <Paragraph type="para">Code Example:</Paragraph>
                <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                  <CodeHighlighter code={NamePhoneNumberEmail} language="javascript" />
                </div>
                <Paragraph type="para">Key Points:</Paragraph>
                🔹State Management: Uses useState to manage the list of contacts. <br />
                🔹Display Details: Maps over the contacts array to display each contact's details.
              </Paragraph> <br />

               {/* {/* Question 61 */}

               <Paragraph>61. Stretch Features:
                <ul className="px-4 list-disc list-inside">
                  <li>Include search functionality to filter contacts by name.</li>
                </ul>  
              </Paragraph>
              <Paragraph type="answer">
              To add search functionality to filter contacts by name, you can create a search input field and filter the contact list based on the input value.
              <Paragraph type="para">Code Example:</Paragraph>
                <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                  <CodeHighlighter code={contactsName} language="javascript" />
                </div>
                <Paragraph type="para">Key Points:</Paragraph>
                🔹State Management: Uses useState to manage the list of contacts and the search term. <br />
                🔹Filtering: Filters the contacts based on the search term (case-insensitive). <br />
                🔹Input Handling: Updates the search term as the user types.
              </Paragraph>
                
        
        
        
      



    </div>
  );
}

export default RealLife ;


