import React from "react";
import clsx from "clsx";
import { baseParagraphClasses } from "../utils/ClassNames";
import CodeHighlighter from "../documentation/CodeHighlighter";
import TailCoding from "./TailCoding";

function Paragraph({ children, type = "question", additionalClasses = "" }) {
  const paragraphClass = clsx(baseParagraphClasses[type], additionalClasses);
  return <p className={paragraphClass}>{children}</p>;
}

function BasicTailwind() {
  const { InstallTailwind, UsingCDN, Tailwindinstall, Linkit, utilityclasses, benefitsTailwind, WithJIT, Themes, PurgeContent, Extendingcolor, Withoutapply, Withapply, Witthapply, Breakpoints, ExtendPalette, OverrideColors, UsageColors } = TailCoding();
  return (
    <div className="bg-[#101C28] p-2">

        <Paragraph type="heading">Step 1: Basic Tailwind CSS Questions  </Paragraph> <br />

        {/* Question 1 */}

        <Paragraph>01. What is Tailwind CSS, and how does it differ from traditional CSS frameworks like Bootstrap?</Paragraph>
        <Paragraph type="answer">
                Tailwind CSS is a utility-first CSS framework that provides low-level utility classes (e.g., text-center, bg-blue-500, p-4) to style elements directly in the HTML. It emphasizes flexibility, allowing developers to build custom designs without writing CSS from scratch.
                <Paragraph type="para">Key Differences from Bootstrap:</Paragraph>
                1. Utility-First vs. Pre-Styled Components: <br />
                *Tailwind CSS: Offers utility classes for granular styling. Developers compose custom designs by combining these classes. <br />
                *Bootstrap: Provides pre-styled components (e.g., buttons, navbars) with a consistent design system, reducing the need for custom styling. <br />
                2. Design Flexibility: <br />
                *Tailwind CSS: Highly customizable with no predefined themes, making it ideal for unique, bespoke designs. <br />
                *Bootstrap: Opinionated with a default theme and pre-built styles, better for quick, standardized layouts. <br />
                3. CSS Management: <br />
                *Tailwind CSS: Avoids writing traditional CSS files by applying styles inline with utility classes. <br />
                *Bootstrap: Relies on CSS or overriding existing component styles. <br />
                4. Learning Curve: <br />
                *Tailwind CSS: Requires understanding its utility classes and their combinations. <br />
                *Bootstrap: Easier for beginners with ready-to-use components. <br />
                In short, Tailwind focuses on custom designs with utility classes, while Bootstrap emphasizes simplicity and quick implementation with pre-styled components.
        </Paragraph> <br />

        {/* Question 2 */}

        <Paragraph>02. How do you set up Tailwind CSS in a project? Describe the different installation methods.</Paragraph>
        <Paragraph type="answer">
                To set up Tailwind CSS, you can use the following methods:
                <Paragraph type="para">1. Via npm (Recommended):</Paragraph>
                Ideal for modern projects with build tools like Webpack or Vite. <br />
                Steps: <br />
                i. Install Tailwind CSS: 
                <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                  <CodeHighlighter code={InstallTailwind} language="bash" />
                </div>
                ii. Configure tailwind.config.js and include Tailwind directives (@tailwind base;, @tailwind components;, @tailwind utilities;) in a CSS file. <br />
                iii. Build Tailwind CSS using npm scripts.
                <Paragraph type="para">2. Using CDN:</Paragraph>
                i. Quick and easy for small projects or prototyping. <br />
                ii. Add this script to your HTML:
                <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                  <CodeHighlighter code={UsingCDN} language="html" />
                </div>
                iii. Optional: Configure styles inline using tailwind.config in a &lt;script&gt; tag.
                <Paragraph type="para">3. With Frameworks (e.g., Next.js, Vite, Laravel):</Paragraph>
                i. Framework-specific plugins simplify installation. <br />
                ii. Example for Next.js: <br />
                *Install Tailwind CSS:
                <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                  <CodeHighlighter code={Tailwindinstall} language="html" />
                </div>
                *Follow the framework's setup guide to configure files.
                <Paragraph type="para">4. Follow the framework's setup guide to configure files:</Paragraph>
                i. Download the Tailwind CSS file from tailwindcss.com. <br />
                ii. Link it in your HTML:
                <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                  <CodeHighlighter code={Linkit} language="html" />
                </div>
                <Paragraph type="para">Choosing a Method:</Paragraph>
                i. npm: Best for large projects needing customization. <br />
                ii. CDN: Great for quick setups. <br />
                iii. Frameworks: Simplifies integration. <br />
                iv. Manual: For offline or simple use cases.

        </Paragraph> <br />

        {/* Question 3 */}

        <Paragraph>03. What are utility classes in Tailwind CSS? How do they help in building UI components?</Paragraph>
        <Paragraph type="answer">
        Utility classes in Tailwind CSS are single-purpose CSS classes (e.g., text-center, p-4, bg-blue-500) that apply specific styles directly to elements. Instead of writing custom CSS, you compose these classes in your HTML to style components.
        <Paragraph type="para">How They Help:</Paragraph>
        1. Faster Development: Quickly style elements without writing new CSS. <br />
        2. Consistent Design: Enforces uniform spacing, colors, and typography across the project. <br />
        3. Customization: Easily combine multiple classes for unique designs. <br />
        4. No CSS Overrides: Avoid conflicts by styling directly in HTML. <br />
        Example:
                <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                  <CodeHighlighter code={utilityclasses} language="html" />
                </div>
                This creates a styled button without writing custom CSS.
        </Paragraph> <br />

        {/* Question 4 */}

        <Paragraph>04. Explain the benefits of using Tailwind’s JIT (Just-in-Time) mode.</Paragraph>
        <Paragraph type="answer">
                Tailwind’s JIT (Just-in-Time) mode compiles styles as you write them, offering these benefits: <br />

                1. Faster Builds: Compiles only used classes, reducing build times. <br />
                2. Smaller CSS Files: Generates minimal CSS by excluding unused styles. <br />
                3. Real-Time Feedback: Instantly updates styles during development. <br />
                4. Dynamic Utilities: Supports arbitrary values and advanced features (e.g., bg-blue-500/50). <br />
                5. Improved Flexibility: Allows adding unique styles without preconfiguring them. <br />
                Eample: <br />
                Without JIT (predefined classes only):
                <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                  <CodeHighlighter code={benefitsTailwind} language="html" />
                </div>
                With JIT (arbitrary values allowed):
                <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                  <CodeHighlighter code={WithJIT} language="html" />
                </div>
                JIT enhances productivity by making Tailwind more efficient and flexible for developers.
                
        </Paragraph> <br />

        {/* Question 5 */}

        <Paragraph>05. What are configuration files in Tailwind, and how do they customize the framework?</Paragraph>
        <Paragraph type="answer">
                Configuration files in Tailwind CSS (e.g., tailwind.config.js) allow you to customize the framework to suit your project's needs. These files are used to extend or override the default styles and settings provided by Tailwind.
                <Paragraph type="para">Customization Options:</Paragraph>
                1. Themes: Add or modify colors, spacing, fonts, etc.
                <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                  <CodeHighlighter code={Themes} language="javascript" />
                </div>
                2. Variants: Enable additional state-based styles (e.g., hover, focus). <br />
                3. Purge Content: Specify files to scan for class usage to optimize CSS output.
                <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                  <CodeHighlighter code={PurgeContent} language="javascript" />
                </div>
                4. Plugins: Add custom utilities or components using Tailwind plugins
                <Paragraph type="para">Example:</Paragraph>
                Extending the color palette:
                <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                  <CodeHighlighter code={Extendingcolor} language="javascript" />
                </div>
                Configuration files make Tailwind highly flexible and adaptable to any design system.
        </Paragraph> <br />

         {/* Question 6 */}

         <Paragraph>06. How does the @apply directive work, and what is its purpose in Tailwind?</Paragraph>
        <Paragraph type="answer">
                The @apply directive in Tailwind CSS allows you to reuse utility classes directly in your custom CSS, simplifying styles for complex components. It combines multiple utility classes into a single custom class, making your code more maintainable and organized.
                <Paragraph type="para">Purpose:</Paragraph>
                1. Reusable Styles: Create reusable, consistent styles across components. <br />
                2. Simplified HTML: Reduce the number of utility classes in your HTML.
                <Paragraph type="para">Example:</Paragraph>
                Without @apply:
                <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                  <CodeHighlighter code={Withoutapply} language="html" />
                </div>
                With @apply:
                <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                  <CodeHighlighter code={Withapply} language="css" />
                </div>
                <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                  <CodeHighlighter code={Witthapply} language="html" />
                </div>
                The @apply directive helps combine Tailwind's utility-first approach with traditional CSS organization.


        </Paragraph> <br />

        {/* Question 7 */}

        <Paragraph>07. What are responsive design utilities in Tailwind, and how do breakpoints work?</Paragraph>
        <Paragraph type="answer">
                Responsive design utilities in Tailwind CSS allow you to create layouts that adjust based on screen sizes (breakpoints). Tailwind provides predefined classes for different screen widths, enabling you to apply styles conditionally based on the viewport size.
                <Paragraph type="para">Breakpoints:</Paragraph>
                Tailwind uses a mobile-first approach, meaning styles are applied to small screens by default and can be overridden for larger screens using breakpoints.
                <Paragraph type="para">Common Breakpoints:</Paragraph>
                *sm: - Small screens (min-width: 640px) <br />
                *md: - Medium screens (min-width: 768px) <br />
                *lg: - Large screens (min-width: 1024px) <br />
                *xl: - Extra-large screens (min-width: 1280px) <br />
                *2xl: - 2x Extra-large screens (min-width: 1536px)
                <Paragraph type="para">Example:</Paragraph>
                <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                  <CodeHighlighter code={Breakpoints} language="html" />
                </div>


        </Paragraph> <br />

        
        {/* Question 8 */}

        <Paragraph>08. How does Tailwind handle theming and custom colors?</Paragraph>
        <Paragraph type="answer">
                Tailwind handles theming and custom colors through its configuration file (tailwind.config.js), where you can extend or override the default color palette.
                <Paragraph type="para">Custom Colors:</Paragraph>
                1. Extend the Default Palette: You can add custom colors while keeping the default ones.
                <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                  <CodeHighlighter code={ExtendPalette} language="javascript" />
                </div>
                2. Override Default Colors: You can replace the default color palette entirely by modifying the colors property.
                <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                  <CodeHighlighter code={OverrideColors} language="javascript" />
                </div>
                <Paragraph type="para">Usage:</Paragraph>
                Once custom colors are defined, you can use them as utility classes:
                <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                  <CodeHighlighter code={UsageColors} language="html" />
                </div>
        </Paragraph>

       
      
      



    </div>
  );
}

export default BasicTailwind;


