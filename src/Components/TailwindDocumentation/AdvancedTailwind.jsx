import React from "react";
import clsx from "clsx";
import { baseParagraphClasses } from "../utils/ClassNames";
import CodeHighlighter from "../documentation/CodeHighlighter";
import TailCoding from "./TailCoding";

function Paragraph({ children, type = "question", additionalClasses = "" }) {
  const paragraphClass = clsx(baseParagraphClasses[type], additionalClasses);
  return <p className={paragraphClass}>{children}</p>;
}

function AdvancedTailwind() {
  const { AddingCustom, CustomUtilities, reusableclasses, InstallationExample, InstallationExampleto, InstallSASS, ImportTailwind, InstallSASSs, Createpostcss, Addstyles, BuildPostCSS, ConfigureDark, Adddark, classmode, thedark, contentOption, BuildProduction, Tailwindremove } = TailCoding();
  return (
    <div className="bg-[#101C28] p-2">

        <Paragraph type="heading">Step 4: Advanced Tailwind CSS Questions  </Paragraph> <br />

        {/* {/* Question 24 */}
        <Paragraph>24. How do you extend Tailwind with custom classes and utilities in the configuration file? </Paragraph>
        <Paragraph type="answer">
              You can extend Tailwind CSS with custom classes and utilities by modifying the tailwind.config.js file. The extend key inside the theme section lets you add or override styles without losing Tailwind's defaults.
        
        <Paragraph type="para">Steps to Extend Tailwind:</Paragraph>  
              <ul className="px-4 list-disc list-inside">
                <li>Open the tailwind.config.js file.</li>
                <li>Use the extend object under the theme key to add custom styles.</li>
              </ul>
              <Paragraph type="para">Example: Adding Custom Colors and Spacing:</Paragraph>
              <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                  <CodeHighlighter code={AddingCustom} language="javascript" />
                </div> 
                <ul className="px-4 list-disc list-inside">
                <li>Custom Colors: Adds a brand color with light, default, and dark variants.</li>
                <li>Custom Spacing: Adds new spacing values like 72, 84, and 96.</li>
              </ul>
              <Paragraph type="para">Adding Custom Utilities:</Paragraph> 
              Use the plugins key to define entirely new utilities. 
              <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                  <CodeHighlighter code={CustomUtilities} language="javascript" />
                </div>
                <ul className="px-4 list-disc list-inside">
                <li>Custom Utility: Adds a .text-shadow class for text shadow effects.</li>
              </ul>
              <Paragraph type="para">Benefits:</Paragraph>
              <ul className="px-4 list-disc list-inside">
                <li>Enables brand-specific design with custom colors, spacing, fonts, etc.</li>
                <li>Allows reusable and maintainable custom utilities.</li>
              </ul> 
        
              </Paragraph> <br />

              {/* {/* Question 25 */}
        <Paragraph>25. What are Tailwind plugins, and how can they add functionality to your project? </Paragraph>
        <Paragraph type="answer">
                Tailwind plugins are extensions that add new utilities, components, or functionality to your project. They allow you to customize Tailwind beyond its default configuration by introducing reusable classes or integrating third-party features.
                <Paragraph type="para">How Plugins Work:</Paragraph>
              <ul className="px-4 list-disc list-inside">
                <li>Add plugins to the plugins array in the tailwind.config.js file.</li>
                <li>Use Tailwind's addUtilities, addComponents, or addVariant functions to define new styles.</li>
              </ul>
              <Paragraph type="para">Example: Adding a Custom Utility</Paragraph>
              <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                  <CodeHighlighter code={reusableclasses} language="javascript" />
                </div>
                <ul className="px-4 list-disc list-inside">
                <li>Adds a .text-shadow class for custom text shadow effects.</li>
              </ul>
              <Paragraph type="para">Using Official or Third-Party Plugins:</Paragraph>
              Tailwind offers official plugins like:
              <ul className="px-4 list-disc list-inside">
                <li>Typography: Adds rich typography styles.</li>
                <li>Forms: Improves default form styling.</li>
                <li>Aspect Ratio: Manages aspect ratios for elements.</li>
              </ul>
              Installation Example:
              <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                  <CodeHighlighter code={InstallationExample} language="javascript" />
                </div>
                <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                  <CodeHighlighter code={InstallationExampleto} language="javascript" />
                </div>
                <Paragraph type="para">Benefits:</Paragraph>
              <ul className="px-4 list-disc list-inside">
                <li>Extends Tailwind's core features (e.g., adding custom utilities or components).</li>
                <li>Simplifies project-specific or repetitive styling.</li>
                <li>Enables integration with third-party libraries.</li>
              </ul>


        </Paragraph> <br />

         {/* {/* Question 26 */}
         <Paragraph>26.Explain how you can use Tailwind with CSS preprocessors like SASS or PostCSS. </Paragraph>
        <Paragraph type="answer">
                You can use Tailwind CSS with CSS preprocessors like SASS or PostCSS to combine the benefits of Tailwind's utility-first approach with the additional features of these preprocessors, such as variables, nesting, and mixins.
                <Paragraph type="para">Using Tailwind with SASS:</Paragraph>
                1. Install SASS:
                <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                  <CodeHighlighter code={InstallSASS} language="bash" />
                </div>
                2. Import Tailwind's utilities in your .scss file:
                <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                  <CodeHighlighter code={ImportTailwind} language="css" />
                </div>
                3. Compile the SASS file into CSS.
                <Paragraph type="para">Using Tailwind with PostCSS:</Paragraph>
                1. Install PostCSS and the required plugins:
                <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                  <CodeHighlighter code={InstallSASSs} language="bash" />
                </div>
                2. Create a postcss.config.js file:
                <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                  <CodeHighlighter code={Createpostcss} language="javascript" />
                </div>
                3. Add your custom styles in a .css file:
                <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                  <CodeHighlighter code={Addstyles} language="css" />
                </div>
                4. Build your CSS with PostCSS:
                <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                  <CodeHighlighter code={BuildPostCSS} language="bash" />
                </div>
                <Paragraph type="para">Benefits:</Paragraph>
              <ul className="px-4 list-disc list-inside">
                <li>SASS: Add advanced styling features (e.g., nesting and variables) alongside Tailwind utilities.</li>
                <li>PostCSS: Use Tailwind as part of a modern, extensible CSS processing pipeline.</li>
              </ul>


        </Paragraph> <br />

        {/* {/* Question 27 */}
        <Paragraph>27. How does Tailwind handle dark mode, and how can you enable it in your project? </Paragraph>
        <Paragraph type="answer">
              Tailwind CSS handles dark mode by using a class-based approach (dark) or a media-query-based approach to apply styles for dark themes. You can enable and configure dark mode in the tailwind.config.js file.
              <Paragraph type="para">Steps to Enable Dark Mode:</Paragraph>
              1. Configure Dark Mode: Add the darkMode property in the Tailwind configuration file:
              <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                  <CodeHighlighter code={ConfigureDark} language="javascript" />
                </div>
                <ul className="px-4 list-disc list-inside">
                <li>'class': Dark mode is toggled using a dark class on the &lt;html&gt; or &lt;body&gt; tag.</li>
                <li>'media': Automatically applies dark mode styles based on the user's system preferences.</li>
              </ul>
              <Paragraph type="para">Using Dark Mode Classes:</Paragraph>
              Add dark: prefix to utilities to define dark mode-specific styles.
              <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                  <CodeHighlighter code={Adddark} language="html" />
                </div>
                <ul className="px-4 list-disc list-inside">
                <li>Default (Light Mode): bg-white text-black.</li>
                <li>Dark Mode: dark:bg-black dark:text-white.</li>
              </ul>
              <Paragraph type="para">Switching Dark Mode  :</Paragraph>
              For class mode: Add or remove the dark class on the &lt;html&gt; or &lt;body&gt; tag dynamically via JavaScript:
              <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                  <CodeHighlighter code={classmode} language="javascript" />
                </div>
                <Paragraph type="para">Example:</Paragraph>
                <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                  <CodeHighlighter code={thedark} language="html" />
                </div>
                <Paragraph type="para">Summary:</Paragraph>
              <ul className="px-4 list-disc list-inside">
                <li>Use darkMode: 'class' for manual toggling.</li>
                <li>Use darkMode: 'media' to follow system preferences.</li>
                <li>Style with dark: utilities for dark mode customization.</li>
              </ul>


        </Paragraph> <br />

        {/* {/* Question 28 */}
        <Paragraph>28. What are the advantages and potential drawbacks of using Tailwind CSS in a project?</Paragraph>
        <Paragraph type="answer">
        <Paragraph type="para">Advantages of Using Tailwind CSS:</Paragraph>
              <ul className="px-4 list-disc list-inside">
                <li>Utility-First Approach: Provides pre-defined utility classes, reducing the need for custom CSS and speeding up development.</li>
                <li>Responsive Design: Built-in breakpoints and responsive utilities make it easy to create responsive layouts.</li>
                <li>Highly Customizable: The tailwind.config.js file allows for extensive customization of colors, spacing, typography, and more.</li>
                <li>Consistency: Enforces consistent design across the project by reusing utility classes.</li>
                <li>Small CSS Output: Unused styles are removed during production builds (via PurgeCSS or content configuration), resulting in optimized CSS files.</li>
                <li>Style with dark: utilities for dark mode customization.</li>
                <li>Fast Prototyping: Quickly build layouts and experiment with design without writing custom CSS.</li>
              </ul>
              <Paragraph type="para">Potential Drawbacks of Using Tailwind CSS:</Paragraph>
              <ul className="px-4 list-disc list-inside">
                <li>Steep Learning Curve: Beginners may find the utility class system overwhelming at first.</li>
                <li>Verbose HTML: Markup can become cluttered with many utility classes, making it harder to read.</li>
                <li>Lack of Semantic Class Names: Using utility classes directly can make it harder to understand the purpose of elements without documentation.</li>
                <li>Customization Time: Extensive customization in tailwind.config.js can be time-consuming for unique designs.</li>
                <li>Dependency: Heavily relying on Tailwind ties your project to its ecosystem, making it harder to switch to another CSS approach later.</li>
              </ul>
              <Paragraph type="para">When to Use Tailwind CSS:</Paragraph>
              <ul className="px-4 list-disc list-inside">
                <li>Best for projects that need speed, responsiveness, and maintainability.</li>
                <li>May not be ideal for small projects or situations where minimal CSS is sufficient.</li>
              </ul>
        </Paragraph> <br />

         {/* {/* Question 29 */}
         <Paragraph>29. How do you optimize and purge unused CSS in a Tailwind project?</Paragraph>
        <Paragraph type="answer">
                To optimize and purge unused CSS in a Tailwind CSS project, you configure the purge (or content) option in the tailwind.config.js file. This ensures that only the utility classes used in your project are included in the final CSS file, significantly reducing its size.
                <Paragraph type="para">Steps to Optimize and Purge CSS:</Paragraph>
                1. Set Up the content Option: Specify the files where Tailwind should look for used classes:
                <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                  <CodeHighlighter code={contentOption} language="javascript" />
                </div>
                <Paragraph type="para">Steps to Optimize and Purge CSS:</Paragraph>
                2. Build for Production: Use a production build tool like PostCSS or Vite to process your CSS:
                <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                  <CodeHighlighter code={BuildProduction} language="bash" />
                  Tailwind will remove unused classes during the build process.
                </div>
                3. Tailwind will remove unused classes during the build process.
                <Paragraph type="para">Example Configuration:</Paragraph>
                <div className="  px-0 sm:px-2 md:px-8 rounded-md">
                  <CodeHighlighter code={Tailwindremove} language="javascript" />
                </div>
                <Paragraph type="para">Benefits:</Paragraph>
                <ul className="px-4 list-disc list-inside">
                <li>Reduces CSS size by removing unused classes.</li>
                <li>Improves website load time and performance.</li>
              </ul>

        </Paragraph> <br />

         {/* {/* Question 30 */}
         <Paragraph>30. Describe some new or recent features in the latest version of Tailwind CSS.</Paragraph>
        <Paragraph type="answer">
                Tailwind CSS has introduced several notable features in its recent versions, enhancing performance and expanding styling capabilities:
                <ol className="px-4 list-decimal list-inside">
                <li>Performance Enhancements: Tailwind CSS v4.0 introduces the Oxide engine, built with Rust, significantly improving build times—up to 5x faster for full builds and over 100x faster for incremental builds. 
                TA</li>
                <li>Unified Toolchain: The latest version simplifies setup by integrating essential tools like autoprefixer and postcss, eliminating the need for separate installations.</li>
                <li>CSS-First Configuration: Tailwind CSS v4.0 adopts a CSS-first configuration approach, allowing developers to define plugins, themes, and other behaviors directly within CSS files, streamlining the configuration process.</li>
                <li>Expanded Color Palette: Version 3.0 includes every color from the extended palette by default, adding colors like cyan, rose, fuchsia, and lime, and all five variations of gray. </li>
                <li>Container Queries: Tailwind CSS v4.0 introduces support for container queries, enabling more responsive and context-aware designs by applying styles based on the size of a container rather than the viewport. </li>
                <li>3D Transforms: The latest version adds utilities for 3D transforms, allowing developers to apply three-dimensional transformations to elements, enhancing the visual dynamics of web pages.</li>
                <li>OKLCH Color Support: Tailwind CSS v4.0 introduces support for OKLCH color functions, providing a more perceptually uniform color space, which helps in achieving consistent and predictable color adjustments.</li>
              </ol>
              These updates collectively make Tailwind CSS more efficient, customizable, and powerful for modern web development.
        </Paragraph>
      



    </div>
  );
}

export default AdvancedTailwind;


