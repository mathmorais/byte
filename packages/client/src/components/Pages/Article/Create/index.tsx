import React, { useState, ChangeEvent, useEffect, useRef } from 'react'
import SectionPage from '@components/SectionPage'
import {
  MarkdownInput,
  MarkdownInputTopBar,
  MarkdownInputContent,
  MarkdownInputWrapper,
  MarkdownInputTopBarAction,
} from './styles'
import MardownOutput from './MarkdownOutput/'
import { MdCreate } from 'react-icons/md'
// import { MDXProvider } from '@mdx-js/react'

const CreateComponent = () => {
  const [markdownContent, setMarkdownContent] = useState('')
  const [currentCursorPosition, setCurrentPosition] = useState(0)
  const textArea = useRef<HTMLTextAreaElement>(null)

  useEffect(() => console.log(currentCursorPosition), [currentCursorPosition])

  const handleMarkdownInput = (ev: ChangeEvent<HTMLTextAreaElement>) => {
    const textAreaValue = ev.target.value

    console.log(textArea.current.selectionStart)

    return setMarkdownContent(textAreaValue)
  }

  return (
    <SectionPage title='Create'>
      <MardownOutput
        markdown={markdownContent}
        cursorPosition={textArea.current?.selectionStart || 0}
      />
      <MarkdownInputWrapper>
        <MarkdownInputContent>
          <MarkdownInputTopBar>
            <MarkdownInputTopBarAction>
              <MdCreate />
            </MarkdownInputTopBarAction>
          </MarkdownInputTopBar>
          <MarkdownInput ref={textArea} onChange={handleMarkdownInput} />
        </MarkdownInputContent>
      </MarkdownInputWrapper>
    </SectionPage>
  )
}

export default CreateComponent
