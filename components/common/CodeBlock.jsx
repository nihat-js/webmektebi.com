"use client"
import React, { useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { docco, tomorrowNightBright } from 'react-syntax-highlighter/dist/esm/styles/hljs';

// Optional: Import PrismJS themes
import 'prismjs/themes/prism.css'; 

const CodeBlock = ({ language, code, fileName }) => {
  const [output, setOutput] = useState('');

  const handleRunCode = () => {
    if (language === 'javascript') {
      try {
        // Execute JavaScript code and capture the output
        setOutput(eval(code));  // Eval is dangerous, use in safe environments only
      } catch (error) {
        setOutput('Error in code execution: ' + error.message);
      }
    } else {
      setOutput('Run functionality is not implemented for this language.');
    }
  };

  return (
    <div className="bg-gray-800 text-white p-4 rounded-lg shadow-lg">
      <div className="flex justify-between items-center mb-4">
        {/* File Name and Language */}
        <div>
          <span className="font-bold text-lg">{fileName}</span>
          <span className="text-sm text-gray-400 ml-2">({language.toUpperCase()})</span>
        </div>
        {/* Run Button */}
        <button
          onClick={handleRunCode}
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md"
        >
          Run
        </button>
      </div>

      {/* Code Block with Syntax Highlighting */}
      <SyntaxHighlighter language={language} style={tomorrowNightBright}>
        {code}
      </SyntaxHighlighter>

      {/* Output Area */}
      <div className="mt-4 p-2 bg-gray-700 text-sm rounded-md">
        <strong>Output:</strong>
        <pre>{output}</pre>
      </div>
    </div>
  );
};

export default CodeBlock;
