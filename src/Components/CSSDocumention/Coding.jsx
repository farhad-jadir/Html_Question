import React, { useState } from "react";

function CodeExamples() {
  const [basicCode] = useState(`selector {
    property: value;
}
`);

const [inlineCode] = useState(`<p style="color: blue;">This is a paragraph.</p>
`);

const [InternalCode] = useState(`<style>
    p {
        color: blue;
    }
</style>
`);

const [InlineCSSCode] = useState(`<p style="color: blue;">This is a paragraph.</p>
`);
const [InternalCSSCode] = useState(`<style>
    p {
        color: blue;
    }
</style>
`);
const [InlineOne] = useState(`<p style="color: blue; font-size: 16px;">This is an inline-styled paragraph.</p>
`);

const [Inlinetwo] = useState(`<!DOCTYPE html>
<html>
<head>
    <style>
        p {
            color: red;
            font-size: 18px;
        }
    </style>
</head>
<body>
    <p>This is a paragraph styled with internal CSS.</p>
</body>
</html>
`);
const [Inlinethree] = useState(`<!-- HTML File -->
<!DOCTYPE html>
<html>
<head>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <p>This is a paragraph styled with external CSS.</p>
</body>
</html>

<!-- CSS File -->
/* styles.css */
p {
    color: green;
    font-size: 20px;
}


`);
const [Content] = useState(`div {
    width: 200px;
    height: 100px;
}
`);
const [Padding] = useState(`div {
    padding: 10px; /* Adds 10px padding on all sides */
}
`);
const [Border] = useState(`div {
    border: 2px solid black; /* Black solid border, 2px wide */
}
`);
const [Margin] = useState(`div {
    margin: 15px; /* Adds 15px margin on all sides */
}
`);
const [Inlinestyles] = useState(`#id { color: blue; }       /* Specificity: 0,1,0,0 */
    .class { color: red; }     /* Specificity: 0,0,1,0 */
    div { color: green; }      /* Specificity: 0,0,0,1 */
    `);
    const [ Declaration] = useState(`p {
  color: blue;
  font-size: 16px;
}
`);
const [ CSSSelectors] = useState(`* {
  margin: 0;
  padding: 0;
}
`);
const [ElementSelector] = useState(`h1 {
  font-weight: bold;
}
`);
const [ClassSelector] = useState(`.highlight {
  background-color: yellow;
}
`);
const [GroupSelector] = useState(`h1, h2, h3 {
  color: darkblue;
}
`);
const [DescendantSelector] = useState(`div p {
  margin-bottom: 10px;
}
`);
  const [Targetsdirect] = useState(`ul > li {
  list-style-type: none;
}
`);
  const [AdjacentSiblin] = useState(`h1 + p {
  font-size: 14px;
}
`);
  const [GeneralSibling] = useState(`h1 ~ p {
  color: gray;
}
`);
  const [Pseudoclasses] = useState(`a:hover {
  color: red;
}
input:focus {
  border: 2px solid blue;
}
`);
  const [Pseudoelements] = useState(`p::first-line {
  font-weight: bold;
}
p::before {
  content: "Note: ";
}
`);
  const [IDSelector] = useState(`#main {
    width: 100%;
  }
  `);
  const [CombiningSelectors] = useState(`div.article > p.highlight {
  background-color: lightblue;
}
`);
const [hoverCode] = useState(`a:hover {
  color: red;
}
`);
  const [nthchild] = useState(`li:nth-child(2) {
  font-weight: bold;
}
`);
  const [focusCode] = useState(`input:focus {
  border-color: blue;
}
`);
const [beforeCode] = useState(`h1::before {
  content: "Note: ";
  color: gray;
}
`);
    const [firstline] = useState(`p::first-line {
  font-weight: bold;
}
`);
    const [afterCode] = useState(`h1::after {
  content: " (Read more)";
  color: gray;
}
`);
const [Inheritable] = useState(`body {
  color: blue; /* All text within body inherits this color */
}
`);
const [Force] = useState(`div {
  border: inherit;
}
`);
const [importantRule] = useState(`p {
  color: red !important; /* This will take precedence */
}
`);

const [displayvalue] = useState(`div {
  display: flex; /* Makes the div a flex container */
}
`);
const [positionproperty] = useState(`div {
  position: relative;
  top: 10px; /* Moves 10px downward from its normal position */
}
`);
const [Paddingcode] = useState(`div {
  padding: 10px; /* Adds 10px space inside the element */
}
`);
const [Margincode] = useState(`div {
  margin: 15px; /* Adds 15px space outside the element */
}
`);
const [Bordercode] = useState(`div {
  border: 2px solid black; /* Adds a 2px black solid border */
}
`);
const [flexgrowcode] = useState(`flex-grow: 1; /* The item will take up extra space equally with others that also grow */
`);
const [flexshrinkcode] = useState(`flex-shrink: 0; /* The item will not shrink even if there’s not enough space */
`);
const [flexbasiscode] = useState(`flex-basis: 50%; /* The item will initially take 50% of the container's width */
`);
const [ExampleShorthand] = useState(`.item {
  flex: 1 0 50%; /* flex-grow: 1, flex-shrink: 0, flex-basis: 50% */
}
`);
const [widthcode] = useState(`width: 200px; /* Element's width is fixed at 200px */
  `);
  const [minwidthcode] = useState(`min-width: 150px; /* The element's width cannot shrink below 150px */
`);
  const [maxwidthcode] = useState(`max-width: 300px; /* The element's width cannot exceed 300px */
`);
  const [ExampleCombined] = useState(`div {
  width: 50%;
  min-width: 200px;
  max-width: 600px;
}
/* The element's width is flexible, but it won't shrink below 200px or grow beyond 600px. */
`);
const [zindexcode] = useState(`/* Box 1 will appear below Box 2 */
.box1 {
  position: relative;
  z-index: 1;
  background: red;
}

.box2 {
  position: relative;
  z-index: 2;
  background: blue;
}
`);
const [opacitycode] = useState(`opacity: 0.5; /* The element is semi-transparent */
`);
  const [visibilitycode] = useState(`visibility: hidden; /* The element is hidden but still occupies space */
`);
  const [opacityvisibility] = useState(`/* Example for clarity */
.box1 {
  opacity: 0; /* Invisible but interactive */
}

.box2 {
  visibility: hidden; /* Hidden and non-interactive */
}
`);
const [UseFlexbox] = useState(`display: flex;
 `);
 const [UseCSSGrid] = useState(`display: grid;
`);
  const [flexBoxcode] = useState(`.container {
  display: flex;
  justify-content: center;
  align-items: center;
}
`);
    const [CSSgridcode] = useState(`.container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: auto;
}
`);
  


    
  return { basicCode, inlineCode, InternalCode, InlineCSSCode, InternalCSSCode, InlineOne, Inlinetwo, Inlinethree, Content, Padding, Border,Margin, Inlinestyles, Declaration,
    CSSSelectors, ElementSelector, ClassSelector, IDSelector, GroupSelector, DescendantSelector, Targetsdirect, AdjacentSiblin, GeneralSibling, Pseudoclasses, Pseudoelements,
    CombiningSelectors, hoverCode, nthchild, focusCode, beforeCode, firstline, afterCode, Inheritable, Force, importantRule, displayvalue, positionproperty, Paddingcode, Margincode,
    Bordercode, flexgrowcode, flexshrinkcode,flexbasiscode, ExampleShorthand, widthcode, minwidthcode,maxwidthcode,ExampleCombined, zindexcode, opacitycode, visibilitycode, opacityvisibility,
    UseFlexbox, flexBoxcode, UseCSSGrid, CSSgridcode
    

  };


}

export default CodeExamples;
