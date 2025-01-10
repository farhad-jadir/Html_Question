import React, { useEffect } from "react";
import Prism from "prismjs";
import "prismjs/components/prism-markup"; // HTML/Markup এর জন্য
import "prismjs/components/prism-css"; // CSS এর জন্য
import "prismjs/components/prism-javascript"; // JavaScript এর জন্য

// ডিফল্ট থিম লোড করা
import "prismjs/themes/prism.css"; // ডিফল্ট থিম



const CodeHighlighter = ({ code, language }) => {
  useEffect(() => {
    Prism.highlightAll();
  }, [code]);

  return (
    <pre className="rounded-lg bg-gray-800 p-4 text-sm overflow-x-auto">
      <code className={`language-${language}`}>{code}</code>
    </pre>
  );
};

export default CodeHighlighter;
