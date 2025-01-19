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



    
  return { basicCode, InstallTailwind, UsingCDN, Tailwindinstall, Linkit, utilityclasses, benefitsTailwind, WithJIT, Themes, PurgeContent, Extendingcolor,Withoutapply, Withapply, Witthapply, Breakpoints,
    ExtendPalette, OverrideColors, UsageColors 
    

  };


}

export default CodeExamples;
