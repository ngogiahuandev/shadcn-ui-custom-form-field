"use client";

import { Button } from "@/components/ui/button";
import { Check, Copy } from "lucide-react";
import { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

interface CodeBlockProps {
  code: string;
  language?: string;
  showLineNumbers?: boolean;
}

export default function CodeBlock({
  code,
  language = "tsx",
  showLineNumbers = true,
}: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };
  return (
    <div className="relative overflow-x-auto">
      <SyntaxHighlighter
        language={language}
        style={vscDarkPlus}
        showLineNumbers={showLineNumbers}
        wrapLongLines
        customStyle={{
          fontSize: "16px",
          borderRadius: "0px",
          padding: "16px",
          margin: "0px",
          backgroundColor: "#1e1e1e",
        }}
        lineNumberStyle={{
          color: "#27272a",
        }}
      >
        {code}
      </SyntaxHighlighter>
      <Button
        onClick={handleCopy}
        variant="ghost"
        className="absolute top-2 right-2 cursor-pointer"
      >
        {copied ? <Check size={16} /> : <Copy size={16} />}
      </Button>
    </div>
  );
}
