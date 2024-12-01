import React from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { materialDark } from 'react-syntax-highlighter/dist/esm/styles/prism'

interface CodeViewerProps {
  code: string
  language?: string
}

const CodeViewer: React.FC<CodeViewerProps> = ({
  code,
  language = 'javascript',
}) => {
  return (
    <div
      style={{
        margin: '1rem',
        border: '1px solid #ddd',
        borderRadius: '8px',
        overflow: 'hidden',
      }}
    >
      <SyntaxHighlighter
        language={language}
        style={materialDark}
        showLineNumbers
      >
        {code}
      </SyntaxHighlighter>
    </div>
  )
}

export default CodeViewer
