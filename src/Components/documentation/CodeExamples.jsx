import React, { useState } from "react";

function CodeExamples() {
  const [basicCode] = useState(`<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="./output.css" rel="stylesheet">
  </head>
  <body>
    <h1 class="text-3xl font-bold underline">Hello world!</h1>
  </body>
</html>`);

  const [videoCode] = useState(`<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Responsive YouTube Video</title>
    <style>
      .video-container {
        position: relative;
        padding-bottom: 56.25%; /* Aspect ratio: 16:9 */
        height: 0;
        overflow: hidden;
      }
      .video-container iframe {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border: 0;
      }
    </style>
  </head>
  <body>
    <div class="video-container">
      <iframe 
        src="https://www.youtube.com/embed/dQw4w9WgXcQ" 
        title="YouTube video player" 
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowfullscreen>
      </iframe>
    </div>
  </body>
</html>`);

const [ds] = useState(`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Collapsible Section</title>
  <style>
    details {
      font-family: Arial, sans-serif;
      margin: 1rem 0;
      cursor: pointer;
    }
    summary {
      font-weight: bold;
      font-size: 1.1rem;
    }
    details[open] summary::after {
      content: " ▲"; /* Icon for expanded */
    }
    summary::after {
      content: " ▼"; /* Icon for collapsed */
      margin-left: 5px;
    }
    p {
      margin-left: 1rem;
      color: #333;
    }
  </style>
</head>
<body>
  <h1>Collapsible Section Example</h1>
  
  <details>
    <summary>Click to expand/collapse</summary>
    <p>This is the content inside the collapsible section. You can add any HTML content here, such as text, images, or videos.</p>
  </details>

</body>
</html>
`);
const [NUL] = useState(`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Simple Navigation Bar</title>
  <style>
    body {
      margin: 0;
      font-family: Arial, sans-serif;
    }
    nav {
      background-color: #333;
      padding: 10px 20px;
    }
    nav ul {
      list-style: none;
      margin: 0;
      padding: 0;
      display: flex;
    }
    nav ul li {
      margin-right: 20px;
    }
    nav ul li a {
      text-decoration: none;
      color: white;
      font-size: 1rem;
      transition: color 0.3s;
    }
    nav ul li a:hover {
      color: #00bcd4;
    }
  </style>
</head>
<body>
  <nav>
    <ul>
      <li><a href="#home">Home</a></li>
      <li><a href="#about">About</a></li>
      <li><a href="#contact">Contact</a></li>
    </ul>
  </nav>
</body>
</html>
`);
const [complexTable] = useState(`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Complex Table Example</title>
  <style>
    table {
      width: 100%;
      border-collapse: collapse;
      margin: 20px 0;
      font-family: Arial, sans-serif;
      text-align: left;
    }
    caption {
      font-size: 1.5rem;
      font-weight: bold;
      margin-bottom: 10px;
    }
    th, td {
      border: 1px solid #ccc;
      padding: 8px;
    }
    th {
      background-color: #f4f4f4;
    }
    tfoot td {
      font-weight: bold;
      background-color: #f9f9f9;
    }
  </style>
</head>
<body>
  <table>
    <caption>Quarterly Sales Report</caption>
    <thead>
      <tr>
        <th rowspan="2">Region</th>
        <th colspan="3">Quarter</th>
        <th rowspan="2">Total</th>
      </tr>
      <tr>
        <th>Q1</th>
        <th>Q2</th>
        <th>Q3</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th>North</th>
        <td>$10,000</td>
        <td>$12,000</td>
        <td>$11,000</td>
        <td>$33,000</td>
      </tr>
      <tr>
        <th>South</th>
        <td>$8,000</td>
        <td>$9,000</td>
        <td>$10,000</td>
        <td>$27,000</td>
      </tr>
      <tr>
        <th rowspan="2">West</th>
        <td>$7,000</td>
        <td>$8,000</td>
        <td>$9,000</td>
        <td>$24,000</td>
      </tr>
      <tr>
        <td colspan="3" style="text-align: center;">Data Not Available</td>
        <td>N/A</td>
      </tr>
    </tbody>
    <tfoot>
      <tr>
        <td colspan="4">Grand Total</td>
        <td>$84,000</td>
      </tr>
    </tfoot>
  </table>
</body>
</html>
`);
const [webpageLayout] = useState(`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Simple Webpage Layout</title>
  <style>
    body {
      margin: 0;
      font-family: Arial, sans-serif;
      line-height: 1.6;
    }
    header {
      background-color: #333;
      color: white;
      padding: 1rem;
      text-align: center;
    }
    main {
      padding: 1.5rem;
    }
    footer {
      background-color: #333;
      color: white;
      text-align: center;
      padding: 1rem;
      position: fixed;
      bottom: 0;
      width: 100%;
    }
  </style>
</head>
<body>
  <header>
    <h1>Welcome to My Webpage</h1>
    <p>Your one-stop site for great content</p>
  </header>

  <main>
    <section>
      <h2>About Us</h2>
      <p>We provide amazing content to keep you informed and entertained. Explore our articles, tips, and resources to learn more.</p>
    </section>

    <section>
      <h2>Our Services</h2>
      <p>From blogs to tutorials, we offer a wide variety of resources for all interests. Stay tuned for updates and new features!</p>
    </section>
  </main>

  <footer>
    <p>&copy; 2025 My Webpage. All rights reserved.</p>
  </footer>
</body>
</html>
`);

const [tenHtmlTag] = useState(`<div class="container">Content here</div>
`);

const [SectionTag] = useState(`<section>
  <h2>Our Services</h2>
  <p>Details about services...</p>
</section>
`);

const [articleTag] = useState(`<article>
  <h2>Breaking News</h2>
  <p>Details about the news...</p>
</article>
  `);
  const [headerTag] = useState(`<header>
  <h1>Welcome to My Website</h1>
</header>
`);

const [navTag] = useState(`<nav>
  <ul>
    <li><a href="#home">Home</a></li>
    <li><a href="#about">About</a></li>
  </ul>
</nav>
`);

const [figureTag] = useState(`<figure>
  <img src="image.jpg" alt="Beautiful scenery">
  <figcaption>A stunning view of nature.</figcaption>
</figure>
`);

const [formTag] = useState(`<form action="/submit" method="POST">
  <label for="name">Name:</label>
  <input type="text" id="name" name="name">
  <button type="submit">Submit</button>
</form>
`);

const [detailsTag] = useState(`<details>
  <summary>More Info</summary>
  <p>This is additional content.</p>
</details>
`);

const [tableTag] = useState(`<table>
  <thead>
    <tr><th>Name</th><th>Age</th></tr>
  </thead>
  <tbody>
    <tr><td>John</td><td>30</td></tr>
  </tbody>
</table>
`);

  const [aTag] = useState(`<a href="https://example.com">Visit Example</a>
`);

const [radioSubmit] = useState(`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Basic Form</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      margin: 20px;
    }
    form {
      max-width: 400px;
    }
    .form-group {
      margin-bottom: 15px;
    }
    label {
      display: block;
      margin-bottom: 5px;
    }
  </style>
</head>
<body>
  <h1>Basic Form</h1>
  <form action="/submit" method="post">
    <!-- Text Input -->
    <div class="form-group">
      <label for="name">Name:</label>
      <input type="text" id="name" name="name" required>
    </div>

    <!-- Radio Buttons -->
    <div class="form-group">
      <label>Gender:</label>
      <input type="radio" id="male" name="gender" value="male">
      <label for="male">Male</label>
      <input type="radio" id="female" name="gender" value="female">
      <label for="female">Female</label>
    </div>

    <!-- Checkbox -->
    <div class="form-group">
      <input type="checkbox" id="subscribe" name="subscribe">
      <label for="subscribe">Subscribe to the newsletter</label>
    </div>

    <!-- Submit Button -->
    <div class="form-group">
      <button type="submit">Submit</button>
    </div>
  </form>
</body>
</html>
`);

const [pictureTag] = useState(`<picture>
  <source srcset="image-large.jpg" media="(min-width: 1024px)">
  <source srcset="image-medium.jpg" media="(min-width: 768px)">
  <source srcset="image-small.jpg">
  <img src="image-default.jpg" alt="Description of the image">
</picture>
`);

const [postar] = useState(`<video poster="thumbnail.jpg" controls>
    <source src="videofile.mp4" type="video/mp4">
</video>
`);

const [preload] = useState(`<audio preload="none">
    <source src="audiofile.mp3" type="audio/mpeg">
</audio>
`);

const [muted] = useState(`<video autoplay muted>
    <source src="videofile.mp4" type="video/mp4">
</video>
`);

const [loop] = useState(`<audio loop>
    <source src="audiofile.mp3" type="audio/mpeg">
</audio>
`);

const [autoplay] = useState(`<video autoplay>
    <source src="videofile.mp4" type="video/mp4">
</video>
`);

const [controls] = useState(`<audio controls>
    <source src="audiofile.mp3" type="audio/mpeg">
</audio>
`);

const [audioTag] = useState(`<audio controls>
  <source src="audiofile.mp3" type="audio/mpeg">
</audio>
`);

const [videoTag] = useState(`<audio controls>
  <source src="audiofile.mp3" type="audio/mpeg">
</audio>
`);

const [allowfullscreen] = useState(`<audio controls>
  <source src="audiofile.mp3" type="audio/mpeg">
</audio>
`);

const [loading] = useState(`<iframe src="https://example.com" loading="lazy"></iframe>
`);

const [sandbox] = useState(`<iframe src="https://example.com" sandbox="allow-scripts allow-same-origin"></iframe>
`);

const [allow] = useState(`<audio controls>
  <source src="audiofile.mp3" type="audio/mpeg">
</audio>
`);

const [Name] = useState(`<iframe src="https://example.com" name="exampleFrame"></iframe>
`);

const [Title] = useState(`<iframe src="https://example.com" title="Example Website"></iframe>
`);

const [Height] = useState(`<iframe src="https://example.com" height="600"></iframe>
`);

const [Width] = useState(`<iframe src="https://example.com" width="800"></iframe>
`);

const [srcCode] = useState(`<audio controls>
  <source src="audiofile.mp3" type="audio/mpeg">
</audio>
`);

const [labelTag] = useState(`<label for="email">Email Address:</label>
<input type="email" id="email" name="email">
`);

const [labelNestedTag] = useState(`<form>
    <div>
        <label for="email">Email:</label>
        <input type="email" id="email" name="email">
    </div>
    <div>
        <label>
            Password:
            <input type="password" name="password">
        </label>
    </div>
    <button type="submit">Submit</button>
</form>
`);

const [linkjon] = useState(`<link rel="stylesheet" href="styles.css">
`);

  const [linkRon] = useState(`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Linked CSS Example</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <h1>Welcome to My Website</h1>
    <p>This is a sample paragraph styled using CSS.</p>
</body>
</html>
`);

const [buttonTag] = useState(`<button type="submit">Submit</button>
<button type="reset">Reset</button>
<button type="button" onclick="alert('Hello!')">Alert</button>
 `);

  const [textareaCode] = useState(`<textarea placeholder="Write your comments here..."></textarea>
`);

    const [selectCode] = useState(`<<select size="3">
    <option value="option1">Option 1</option>
    <option value="option2">Option 2</option>
    <option value="option3">Option 3</option>
</select>
`);



const [textCode] = useState(`<label for="username">Username:</label>
<input type="text" id="username" name="username" placeholder="Enter your username" required>
`);

  const [RadioCode] = useState(`<p>Choose your gender:</p>
    <input type="radio" id="male" name="gender" value="male">
    <label for="male">Male</label>
    <input type="radio" id="female" name="gender" value="female">
    <label for="female">Female</label>
    `);

    const [Checkbox] = useState(`<p>Select your hobbies:</p>
<input type="checkbox" id="reading" name="hobbies" value="reading">
<label for="reading">Reading</label>
<input type="checkbox" id="traveling" name="hobbies" value="traveling">
<label for="traveling">Traveling</label>
`);

const [ulCode] = useState(`<ul type="circle">
    <li>Circle Bullet</li>
    <li>Another Item</li>
</ul>
`);

  const [olCode] = useState(`<ol>
    <li>First Item</li>
    <li>Second Item</li>
    <li>Third Item</li>
</ol>
`);

    const [liCode] = useState(`<ul>
    <li>Item 1</li>
    <li>Item 2</li>
</ul>
`);


const [divCode] = useState(`<div class="container">
    <h1>Welcome!</h1>
    <p>This is the main content.</p>
</div>
`);

const [marqueeCode] = useState(`<marquee direction="right">Scrolling Right</marquee>
`);

const [ InlineCode] = useState(`<p>This is a <a href="#">link</a> inside a paragraph. The <strong>bold text</strong> and <em>italic text</em> are also inline elements.</p>
`);

  const [BlockCode] = useState(`<<div>
    <h1>This is a heading</h1>
    <p>This is a paragraph inside a block element. It starts on a new line.</p>
</div>
`);

    const [mixeccode] = useState(`<div>
    <h1>Block and Inline Elements</h1>
    <p>This is a paragraph (<strong>block element</strong>) containing <span style="color: red;">inline</span> elements like <a href="#">links</a> and <em>formatted text</em>.</p>
</div>
`);

const [Faviconcode] = useState(`<head>
    <!-- Default Favicon -->
    <link rel="icon" type="image/png" sizes="16x16" href="favicon-16x16.png">
    <link rel="icon" type="image/png" sizes="32x32" href="favicon-32x32.png">
    
    <!-- Apple Touch Icon -->
    <link rel="apple-touch-icon" sizes="180x180" href="apple-touch-icon.png">
    
    <!-- Android/Manifest Icon -->
    <link rel="manifest" href="manifest.json">
</head>
`);

const [globalcode] = useState(`<!DOCTYPE html>
<html lang="en">
<head>
    <style>
        .highlight {
            color: blue;
            font-weight: bold;
        }

        #special-paragraph {
            font-size: 20px;
            background-color: yellow;
        }
    </style>
</head>
<body>
    <h1 id="main-header" title="This is the main header">Welcome to My Website</h1>
    
    <p class="highlight" style="font-size: 18px;" title="This is an important paragraph.">
        This paragraph has a blue color, bold text, and an inline style for font size.
    </p>
    
    <p id="special-paragraph" class="highlight" title="This paragraph has a special background color.">
        This paragraph has a yellow background, increased font size, and is bold and blue.
    </p>

    <a href="https://www.example.com" class="highlight" title="Click here to visit our website.">
        Visit our website
    </a>
</body>
</html>
`);


const [basicexamplecode] = useState(`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">      <!-- Specifies the character encoding -->
    <meta name="viewport" content="width=device-width, initial-scale=1.0"> <!-- Responsive design -->
    <title>My First Webpage</title> <!-- Title of the webpage -->
</head>
<body>
    <h1>Welcome to My Website</h1> <!-- Main heading -->
    <p>This is my first webpage using HTML. HTML is easy to learn!</p> <!-- Paragraph -->
    <a href="https://www.example.com">Visit Example</a> <!-- Hyperlink -->
</body>
</html>
`);







  

  return { basicCode, ds, videoCode, NUL, complexTable, webpageLayout, tenHtmlTag, SectionTag, articleTag, headerTag, navTag, figureTag, formTag, detailsTag,
    tableTag, aTag, radioSubmit, pictureTag, postar, preload, muted, loop, autoplay, controls, audioTag,videoTag, allowfullscreen, loading, sandbox, allow, Name,
    Title, Height, Width, srcCode, labelTag, labelNestedTag, linkjon, linkRon, buttonTag, textareaCode, selectCode, Checkbox, textCode, RadioCode, ulCode,
    olCode, liCode, divCode, marqueeCode, InlineCode, BlockCode, mixeccode, Faviconcode, globalcode, basicexamplecode 
    

  };


}

export default CodeExamples;
