import React, { useState } from "react";

function CodeExamples() {
  const [basicCode] = useState(`selector {
    property: value;
}
`);

const [InstallTailwind] = useState(`npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init
`);

const [UsingCDN] = useState(`<script src="https://cdn.tailwindcss.com"></script>
`);
const [Tailwindinstall] = useState(`npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init
`);
const [Linkit] = useState(`<link href="tailwind.css" rel="stylesheet">
`);
const [utilityclasses] = useState(`<div class="p-4 bg-blue-500 text-white rounded-lg">
  Button
</div>
`);
const [benefitsTailwind] = useState(`<div class="bg-blue-500">Blue Box</div>
`);
  const [WithJIT] = useState(`<div class="bg-[#1a202c] text-[18px]">Custom Box</div>
`);
const [Themes] = useState(`module.exports = {
  theme: {
    extend: {
      colors: {
        customBlue: "#1a202c",
      },
    },
  },
};
`);
    const [PurgeContent] = useState(`content: ["./src/**/*.{html,js}"],
`);
        const [Extendingcolor] = useState(`module.exports = {
  theme: {
    extend: {
      colors: {
        customGreen: "#10B981",
      },
    },
  },
};
`);
const [Withoutapply] = useState(`<div class="bg-blue-500 text-white p-4 rounded-lg">Button</div>
`);
    const [Withapply] = useState(`/* styles.css */
.btn {
  @apply bg-blue-500 text-white p-4 rounded-lg;
}
`);
        const [Witthapply] = useState(`<div class="btn">Button</div>
`);
const [Breakpoints] = useState(`<div class="text-center sm:text-left md:text-right">
  Responsive Text Alignment
</div>
`);
const [ExtendPalette] = useState(`module.exports = {
  theme: {
    extend: {
      colors: {
        customBlue: "#1a202c",
        customGreen: "#10B981",
      },
    },
  },
};
`);
    const [OverrideColors] = useState(`module.exports = {
  theme: {
    colors: {
      primary: "#FF5733",
      secondary: "#33FF57",
    },
  },
};
`);
const [UsageColors] = useState(`<div class="bg-customBlue text-primary">Custom Themed Box</div>
`);
const [Allsides] = useState(`<div class="m-4 p-6">Box with margin and padding</div>
`);
const [Specificsides] = useState(`<div class="mt-4 mb-2 ml-8">Box with specific margins</div>
`);

const [flexCod] = useState(`<div class="flex">...</div>
`);
const [flexRow] = useState(`<div class="flex flex-row">...</div> <!-- Horizontal layout -->
<div class="flex flex-col">...</div> <!-- Vertical layout -->
`);
const [justifyCod] = useState(`<div class="flex justify-center">...</div> <!-- Center items horizontally -->
<div class="flex justify-between">...</div> <!-- Space items evenly -->
`);
const [itemsCod] = useState(`<div class="flex items-center">...</div> <!-- Center items vertically -->
`);
const [gapCod] = useState(`<div class="flex gap-4">...</div> <!-- Adds gap between items -->
`);
const [ExamCod] = useState(`<div class="flex flex-row justify-between items-center gap-4">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</div>
`);
const [FontSize] = useState(`<p class="text-lg">Large text</p>
`);
  const [FontWeigh] = useState(`<p class="font-bold">Bold text</p>
`);
const [TextColor] = useState(`<p class="text-red-500">Red text</p>
`);
const [TextAlignment] = useState(`<p class="text-center">Centered text</p>
`);
const [LineHeight] = useState(`<p class="leading-loose">Loose line height</p>
`);
const [TextTransform] = useState(`<p class="uppercase">Uppercase text</p>
`);
const [LetterSpacing] = useState(`<p class="tracking-wide">Wide letter spacing</p>
`);
const [ExampleCodetow] = useState(`<p class="text-2xl font-semibold text-blue-600 text-center leading-tight">
  Styled text with Tailwind
</p>
`);
const [bgCode] = useState(`<div class="bg-blue-500">Blue background</div>
`);
const [bgOpacityCode] = useState(`<div class="bg-blue-500 bg-opacity-50">Semi-transparent background</div>
`);
const [bgcoverCode] = useState(`<div class="bg-cover" style="background-image: url('image.jpg');">Background cover</div>
`);
const [bgcenterCode] = useState(`<div class="bg-center" style="background-image: url('image.jpg');">Center image</div>
`);
const [texttCode] = useState(`<p class="text-red-500">Red text</p>
`);
const [ringCode] = useState(`<div class="ring-2 ring-green-500">Green ring</div>
`);
const [borderCode] = useState(`<div class="border-2 border-blue-500">Blue border</div>
`);
const [Examplethre] = useState(`<div class="bg-blue-500 text-white p-4 border-2 border-black">
  Blue background with white text and a black border
</div>
`);
const [hoverCode] = useState(`<div class=<button class="hover:bg-blue-500">Hover me</button>
`);
  const [focusCode] = useState(`<input class="focus:ring-2 focus:ring-blue-500" />
`);
  const [activeCode] = useState(`<button class="active:bg-red-500">Active button</button>
`);
  const [focusWithin] = useState(`<div class="focus-within:border-blue-500">
  <input />
</div>
`);
  const [disabledCode] = useState(`<button class="disabled:bg-gray-400" disabled>Disabled button</button>
`);
  const [Examplefour] = useState(`<div class="bg-blue-500 text-white p-4 border-2 border-black">
    Blue background with white text and a black border
  </div>
  `);
  const [AddCustom] = useState(`module.exports = {
  theme: {
    extend: {
      fontFamily: {
        custom: ['"Custom Font"', 'sans-serif'],
      },
    },
  },
};
`);
const [FontFamily] = useState(`<p class="font-custom">Text with custom font</p>
`);
 const [controllingfont] = useState(`<p class="font-bold">Bold text</p>
`);
const [fontutilities] = useState(`<p class="text-lg">Large text</p>
`);
const [Examplefive] = useState(`module.exports = {
  theme: {
    extend: {
      fontFamily: {
        custom: ['"Open Sans"', 'sans-serif'],
      },
    },
  },
};
`);
const [Examplesix] = useState(`<p class="font-custom text-xl">Custom font with large text size</p>
`);
const [gridCde] = useState(`<div class="grid">...</div>
`);
const [gridcolsCde] = useState(`<div class="grid grid-cols-3">...</div>
`);
const [gridrowsCde] = useState(`<div class="grid grid-rows-2">...</div>
`);
const [Cdegap] = useState(`<div class="grid gap-4">...</div>
`);
const [colspanCde] = useState(`<div class="col-span-2">Item spanning 2 columns</div>
`);
const [TailwindgridCde] = useState(`.container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
}
`);
const [CSSgridCde] = useState(`<div class="grid grid-cols-3 gap-4">
  <div class="bg-blue-500">Item 1</div>
  <div class="bg-green-500">Item 2</div>
  <div class="bg-red-500">Item 3</div>
  <div class="bg-yellow-500 col-span-2">Item 4 (spans 2 columns)</div>
</div>
`);
const [Cdegridcols] = useState(`<div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 1rem;">
  <div style="background-color: blue;">Item 1</div>
  <div style="background-color: green;">Item 2</div>
  <div style="background-color: red;">Item 3</div>
  <div style="background-color: yellow; grid-column: span 2;">Item 4 (spans 2 columns)</div>
</div>
`);
const [ResponsiveGrid] = useState(`<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
  <div class="bg-blue-500 p-4">Item 1</div>
  <div class="bg-blue-500 p-4">Item 2</div>
  <div class="bg-blue-500 p-4">Item 3</div>
  <div class="bg-blue-500 p-4">Item 4</div>
</div>
`);
const [ResponsiveFlexbox] = useState(`<div class="flex flex-col md:flex-row gap-4">
  <div class="bg-green-500 p-4">Item 1</div>
  <div class="bg-green-500 p-4">Item 2</div>
  <div class="bg-green-500 p-4">Item 3</div>
</div>
`);
const [ResponsiveText] = useState(`<p class="text-sm md:text-lg lg:text-xl">
  Responsive text adjusts size based on screen width.
</p>
`);
const [ResponsiveVisibility] = useState(`<div class="hidden md:block">Visible on medium and larger screens</div>
<div class="block md:hidden">Visible on small screens only</div>
`);
const [textcenter] = useState(`<div class="text-center">Centered Text</div>
`);
  const [CenterHorizontally] = useState(`<div class="w-1/2 mx-auto bg-gray-300">Centered Block</div>
`);
    const [Flexboxcenter] = useState(`<div class="flex justify-center items-center h-screen bg-gray-200">
  <div class="bg-blue-500 p-4">Centered Box</div>
</div>
`);
      const [FlexboxAxis] = useState(`<div class="flex items-center h-64 bg-gray-200">
  <div class="bg-green-500 p-4">Vertically Centered</div>
</div>
`);
        const [AbsolutePosition] = useState(`<div class="relative h-screen">
  <div class="absolute inset-0 m-auto w-32 h-32 bg-red-500">Centered</div>
</div>
`);
          const [absolutetranslate] = useState(`<div class="relative h-screen">
  <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-yellow-500 p-4">Centered</div>
</div>
`);
            const [bothhorizontally] = useState(`<div class="grid place-items-center h-screen bg-gray-200">
  <div class="bg-purple-500 p-4">Centered</div>
</div>
`);
const [CustomizablePadding] = useState(`<div class="container mx-auto px-4">
  <h1 class="text-2xl">This is a responsive container</h1>
</div>
`);
const [breakpointt] = useState(`<div class="text-sm sm:text-base md:text-lg lg:text-xl">
  Responsive Text
</div>
`);
const [ positioning] = useState(`<div class="fixed top-0 left-0 w-full bg-gray-800 text-white p-4">
  Fixed Header
</div>
`);
const [usesticky] = useState(`<div class="sticky top-0 bg-gray-800 text-white p-4">
  Sticky Header
</div>
`);
const [SmallScreens] = useState(`<div class="block md:hidden">
  Visible on screens < 768px
</div>
`);
const [mobilescreens] = useState(`<div class="text-sm md:text-lg lg:text-xl">
  Responsive Text
</div>
`);
const [AddingCustom] = useState(`module.exports = {
  theme: {
    extend: {
      colors: {
        brand: {
          light: '#3AB0FF',
          DEFAULT: '#007BFF',
          dark: '#0056b3',
        },
      },
      spacing: {
        '72': '18rem',
        '84': '21rem',
        '96': '24rem',
      },
    },
  },
};
`);
const [CustomUtilities] = useState(`module.exports = {
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.text-shadow': {
          textShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)',
        },
      });
    },
  ],
};
`);
const [reusableclasses] = useState(`module.exports = {
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.text-shadow': {
          textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
        },
      });
    },
  ],
};
`);
const [InstallationExample] = useState(`npm install @tailwindcss/typography
`);
const [InstallationExampleto] = useState(`module.exports = {
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
`);
const [InstallSASS] = useState(`npm install sass
  `);
  const [ImportTailwind] = useState(`@tailwind base;
@tailwind components;
@tailwind utilities;

// Example SASS styles
.custom-class {
  @apply bg-blue-500 text-white;
  padding: 1rem;

  &:hover {
    @apply bg-blue-700;
  }
}
`);
    const [InstallSASSs] = useState(`npm install postcss postcss-cli autoprefixer tailwindcss
`);
      const [Createpostcss] = useState(`module.exports = {
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
  ],
};
`);
        const [Addstyles] = useState(`@tailwind base;
@tailwind components;
@tailwind utilities;

.custom-class {
  @apply bg-green-500 text-white p-4;
}
`);
const [ConfigureDark] = useState(`module.exports = {
  darkMode: 'class', // Use 'media' for system preference-based dark mode
  theme: {
    extend: {},
  },
  plugins: [],
};
`);
const [Adddark] = useState(`<div class="bg-white text-black dark:bg-black dark:text-white">
  Dark Mode Example
</div>
  `);
  const [classmode] = useState(`document.documentElement.classList.add('dark');
`);
    const [thedark] = useState(`<html class="dark">
  <body class="bg-white dark:bg-gray-900">
    <p class="text-black dark:text-white">This text changes color in dark mode.</p>
  </body>
</html>
`);
const [BuildPostCSS] = useState(`npx postcss input.css -o output.css
        `);
        const [contentOption] = useState(`module.exports = {
  content: ['./src/**/*.{html,js,jsx,ts,tsx}'], // Path to your files
  theme: {
    extend: {},
  },
  plugins: [],
};
`);
const [BuildProduction] = useState(`npm run build
`);
const [Tailwindremove] = useState(`module.exports = {
  content: ['./src/**/*.{html,js}'], // Scan all HTML and JS files
  theme: {
    extend: {},
  },
  plugins: [],
};
`);
        

    
  return { basicCode, InstallTailwind, UsingCDN, Tailwindinstall, Linkit, utilityclasses, benefitsTailwind, WithJIT, Themes, PurgeContent, Extendingcolor,Withoutapply, Withapply, Witthapply, Breakpoints,
    ExtendPalette, OverrideColors, UsageColors, Allsides, Specificsides, flexCod, flexRow, justifyCod, itemsCod, gapCod, ExamCod, FontSize, FontWeigh, TextColor, TextAlignment, LineHeight, TextTransform,
    LetterSpacing, ExampleCodetow, bgCode, bgOpacityCode, bgcoverCode, bgcenterCode, texttCode, ringCode, borderCode, Examplethre, hoverCode, focusCode, activeCode, focusWithin, disabledCode, Examplefour,
    AddCustom, FontFamily, controllingfont, fontutilities, Examplefive, Examplesix, gridCde, gridcolsCde, gridrowsCde, Cdegap, colspanCde, TailwindgridCde, CSSgridCde, Cdegridcols, ResponsiveGrid, ResponsiveFlexbox,
    ResponsiveText, ResponsiveVisibility, textcenter, CenterHorizontally, Flexboxcenter, FlexboxAxis, AbsolutePosition, absolutetranslate, bothhorizontally, CustomizablePadding, breakpointt,  positioning, usesticky,
    SmallScreens, mobilescreens, AddingCustom, CustomUtilities, reusableclasses, InstallationExample, InstallationExampleto, InstallSASS, ImportTailwind, InstallSASSs, Createpostcss, Addstyles, BuildPostCSS,
    ConfigureDark, Adddark, classmode, thedark, contentOption, BuildProduction, Tailwindremove
    

  };


}

export default CodeExamples;
