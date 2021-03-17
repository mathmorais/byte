import React, { useState, ChangeEvent, useEffect, useRef } from 'react'
import SectionPage from '@components/SectionPage'
import {
  MarkdownInput,
  MarkdownInputTopBar,
  MarkdownInputContent,
  MarkdownInputWrapper,
  MarkdownInputTopBarAction,
  MarkdownInputTopBarDropdown,
  MarkdownInputTopBarDropdownAction,
} from './styles'
import MardownOutput from './MarkdownOutput/'
import { MdMenu } from 'react-icons/md'
import { Medium } from '@styles/Typography'
import ModalComponent from './Modal'

const CreateComponent = () => {
  const [markdownContent, setMarkdownContent] = useState('')
  const [dropdownShown, setDropdownShown] = useState(false)
  const textArea = useRef<HTMLTextAreaElement>(null)
  const actions: { name: string; actionCall(): void }[] = [
    {
      name: 'Change title',
      actionCall: () => {
        console.log('Click')
      },
    },
    {
      name: 'Select thumbnail',
      actionCall: () => {
        console.log('Click')
      },
    },
  ]

  const handleMarkdownInput = (ev: ChangeEvent<HTMLTextAreaElement>) => {
    const textAreaValue = ev.target.value

    console.log(textArea.current.selectionStart)

    return setMarkdownContent(textAreaValue)
  }

  const handleShowDropdown = () => {
    setDropdownShown(!dropdownShown)
  }

  const handleHideDropdown = () => {
    setDropdownShown(false)
  }

  const handleDropdownActionsRender = () => {
    return actions.map((item, index) => {
      return (
        <MarkdownInputTopBarDropdownAction
          key={index}
          onClick={item.actionCall}
        >
          <Medium>{item.name}</Medium>
        </MarkdownInputTopBarDropdownAction>
      )
    })
  }

  const handleMarkdownShowAnimation = () => {
    const apperStyle = {
      opacity: 1,
      pointerEvents: 'all',
      transform: 'translateY(-125%)',
    } as React.CSSProperties

    return dropdownShown ? apperStyle : {}
  }

  return (
    <SectionPage title='Preview'>
      {/* <ModalComponent title='Change title' /> */}
      <MardownOutput markdown={markdownContent} />
      <MarkdownInputWrapper>
        <MarkdownInputContent>
          <MarkdownInputTopBar>
            <MarkdownInputTopBarAction onClick={handleShowDropdown}>
              <MdMenu />
            </MarkdownInputTopBarAction>
            <MarkdownInputTopBarDropdown
              onMouseLeave={handleHideDropdown}
              style={handleMarkdownShowAnimation()}
            >
              {handleDropdownActionsRender()}
            </MarkdownInputTopBarDropdown>
          </MarkdownInputTopBar>
          <MarkdownInput ref={textArea} onChange={handleMarkdownInput} />
        </MarkdownInputContent>
      </MarkdownInputWrapper>
    </SectionPage>
  )
}

export default CreateComponent
