import React, { memo, useEffect, useRef } from 'react'
import {
  MarkdownOutputCodeContainer,
  MarkdownOutputCodeTopbar,
  MarkdownOutputCodeTopbarAction,
  MarkdownOutputCode,
} from './styles'
import { MdContentCopy } from 'react-icons/md'
import hljs from 'highlight.js'

const CodeComponent = ({ children }) => {
  const codeDiv = useRef<HTMLDivElement>(null)

  useEffect(() => {
    hljs.highlightAll()
  }, [children])

  const handleCopyClipboard = () => {
    const divContent = codeDiv.current.textContent
    navigator.clipboard.writeText(divContent)
  }

  if (children) {
    return (
      <pre>
        <MarkdownOutputCodeContainer>
          <MarkdownOutputCodeTopbar>
            <MarkdownOutputCodeTopbarAction
              title='Copy the code'
              aria-label='Copy the code'
              onClick={handleCopyClipboard}
            >
              <MdContentCopy />
            </MarkdownOutputCodeTopbarAction>
          </MarkdownOutputCodeTopbar>
          <MarkdownOutputCode ref={codeDiv}>{children}</MarkdownOutputCode>
        </MarkdownOutputCodeContainer>
      </pre>
    )
  }

  return null
}

export default memo(CodeComponent)