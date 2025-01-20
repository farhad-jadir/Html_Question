import React from "react";
import clsx from "clsx";
import { baseParagraphClasses } from "../utils/ClassNames";
import CodeHighlighter from "../documentation/CodeHighlighter";
import BootCoding from "./BootCoding";

function Paragraph({ children, type = "question", additionalClasses = "" }) {
  const paragraphClass = clsx(baseParagraphClasses[type], additionalClasses);
  return <p className={paragraphClass}>{children}</p>;
}

function CommonlyUsedBootstrap() {
  const {NavigationBar, BasicStructure, Modalcomponent, buttonsdifferently, Largebutton,ButtonSizes   } = BootCoding();
  return (
    <div className="bg-[#101C28] p-2">

        <Paragraph type="heading">Step 2: Commonly Used Bootstrap Components  </Paragraph> <br />

        {/* {/* Question 9 */}

        <Paragraph>09. How do you create a navigation bar using Bootstrap? Explain any commonly used classes. </Paragraph>
        <Paragraph type="answer">
            To create a navigation bar in Bootstrap, you use the .navbar class along with other helper classes to style and organize the content. A navigation bar is commonly used to provide links to different sections of a website.
            <Paragraph type="para">Basic Structure:</Paragraph>
            <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                  <CodeHighlighter code={NavigationBar} language="html" />
                </div>
                <Paragraph type="para">Commonly Used Classes:</Paragraph>
                <ul className="px-4 list-disc list-inside">
                <li>.navbar: The base class for a navigation bar.</li>
                <li>.navbar-expand-lg: Makes the navbar expand (horizontal) on large screens and collapse on smaller ones.</li>
                <li>.navbar-light / .navbar-dark: Sets the text and background color for the navbar.</li>
                <li>.bg-light / .bg-dark: Controls the background color of the navbar.</li>
                <li>.navbar-toggler: The button that triggers the collapsing of the navbar on smaller screens.</li>
                <li>.nav-item: Defines a list item in the navbar.</li>
                <li>.nav-link: Used to style the links within the navbar.</li>
                <li>.active: Highlights the active link (e.g., the current page).</li>
            </ul>
            Example: The navigation bar above will collapse on smaller screens, showing a hamburger icon to toggle the menu, and will display the links horizontally on larger screens.

        </Paragraph> <br />

        {/* {/* Question 10 */}

        <Paragraph>10. What is a card in Bootstrap, and how do you create one? </Paragraph>
        <Paragraph type="answer">
        A card in Bootstrap is a flexible and extensible content container used to display various types of content, such as text, images, links, and actions. Cards can have headers, footers, and body sections for organizing the content.
            <Paragraph type="para">Basic Structure of a Card:</Paragraph>
            <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                  <CodeHighlighter code={BasicStructure} language="html" />
                </div>
                <Paragraph type="para">Key Classes:</Paragraph>
                <ul className="px-4 list-disc list-inside">
                <li>.card: The base class for creating a card.</li>
                <li>.card-img-top: Adds an image at the top of the card.</li>
                <li>.card-body: Contains the main content (text, buttons) of the card.</li>
                <li>.card-title: Defines the title inside the card.</li>
                <li>.card-text: Defines the paragraph text inside the card.</li>
                <li>.btn / .btn-primary: Adds a button inside the card.</li>
            </ul>
            Example: The card above includes an image, a title, text, and a button. You can adjust the width, background, and add more sections like .card-header and .card-footer as needed.

        </Paragraph> <br />

        {/* {/* Question 11 */}

        <Paragraph>11. Explain how the modal component works in Bootstrap. How do you trigger a modal? </Paragraph>
        <Paragraph type="answer">
        A modal in Bootstrap is a pop-up dialog that displays content on top of the page, often used for alerts, forms, or additional information. Modals are hidden by default and can be triggered to appear when an event (like a button click) occurs.
            <Paragraph type="para">Basic Structure:</Paragraph>
            <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                  <CodeHighlighter code={Modalcomponent} language="html" />
                </div>
                <Paragraph type="para">How It Works:</Paragraph>
                <ul className="px-4 list-disc list-inside">
                <li>Triggering a Modal: You use the data-bs-toggle="modal" and data-bs-target="#myModal" attributes on a button or link to trigger the modal. The #myModal ID refers to the modal's id attribute.</li>
                <li>Displaying the Modal: When triggered, the modal appears, with a fade-in effect (.fade class).</li>
                <li>Closing the Modal: You can close the modal by clicking the close button (data-bs-dismiss="modal") or the background area outside the modal.</li>
            </ul>
            Example: When the "Launch Modal" button is clicked, the modal with content will appear. You can close it by clicking the "Close" button or anywhere outside the modal.
        </Paragraph>
        {/* {/* Question 12 */}

        <Paragraph>12. What is the purpose of the btn class in Bootstrap, and how do you style buttons differently using Bootstrap? </Paragraph>
        <Paragraph type="answer">
            The btn class in Bootstrap is used to style buttons with a consistent look and feel across your website. It provides default button styles such as padding, font size, border radius, and colors.
            <Paragraph type="para">Purpose of the btn class:</Paragraph>
                <ul className="px-4 list-disc list-inside">
                <li>Base Styling: The btn class adds default button styling (background, padding, borders) to elements.</li>
                </ul>
                <Paragraph type="para">How to Style Buttons Differently:</Paragraph>
                You can use additional classes with btn to modify the button's appearance: <br />
                1. Button Types:
                <ul className="px-4 list-disc list-inside">
                <li>.btn-primary: Blue button (default for primary actions).</li>
                <li>.btn-secondary: Gray button (for secondary actions).</li>
                <li>.btn-success: Green button (for success actions).</li>
                <li>.btn-danger: Red button (for delete or error actions).</li>
                <li>.btn-warning: Yellow button (for warning actions).</li>
                <li>.btn-info: Light blue button (for informational actions).</li>
                <li>.btn-light / .btn-dark: Light or dark themed buttons.</li>
            </ul>
            Example:
            <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                  <CodeHighlighter code={buttonsdifferently} language="html" />
                </div>
                2. Button Sizes:
                <ul className="px-4 list-disc list-inside">
                <li>.btn-lg: Large button.</li>
                <li>.btn-sm: Small button.</li>
            </ul>
            Example:
            <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                  <CodeHighlighter code={Largebutton} language="html" />
                </div>
                3. Button Sizes:
                <ul className="px-4 list-disc list-inside">
                <li>.btn-outline-*: Creates a button with a transparent background and colored borders (e.g., .btn-outline-primary).</li>
                <li>.btn-block: Makes the button full-width.</li>
            </ul>
            Example:
            <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                  <CodeHighlighter code={ButtonSizes} language="html" />
                </div>
                These classes allow you to easily customize the button’s color, size, and style to fit your design needs.
        </Paragraph>
        
      



    </div>
  );
}

export default CommonlyUsedBootstrap;


