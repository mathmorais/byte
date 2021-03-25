import React, { MouseEvent, useEffect, useRef, useState } from 'react'
import {
  MarkdownOutputCodeContainer,
  MarkdownOutputCodeTopbar,
  MarkdownOutputCodeTopbarAction,
  MarkdownOutputCode,
} from './styles'
import { MdCheck, MdContentCopy } from 'react-icons/md'
import hljs from 'highlight.js'

const CodeComponent = ({ children }) => {
  const codeDiv = useRef<HTMLDivElement>(null)
  const [clipboardClicked, setClipboardClicked] = useState(false)

  useEffect(() => {
    hljs.highlightAll()
  }, [])

  const handleCopyClipboard = () => {
    const divContent = codeDiv.current.textContent
    navigator.clipboard.writeText(divContent)
  }

  const handleClipboardClick = () => {
    handleCopyClipboard()

    setClipboardClicked(true)
    setTimeout(() => {
      setClipboardClicked(false)
    }, 1000)
  }

  if (children) {
    return (
      <MarkdownOutputCodeContainer>
        <MarkdownOutputCodeTopbar>
          <MarkdownOutputCodeTopbarAction
            title='Copy to clipboard'
            aria-label='Copy to clipboard'
            onClick={handleClipboardClick}
          >
            {clipboardClicked ? <MdCheck /> : <MdContentCopy />}
          </MarkdownOutputCodeTopbarAction>
        </MarkdownOutputCodeTopbar>
        <MarkdownOutputCode ref={codeDiv}>{children}</MarkdownOutputCode>
      </MarkdownOutputCodeContainer>
    )
  }

  return null
}

export default CodeComponent
