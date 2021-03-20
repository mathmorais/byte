import React, { useState, ChangeEvent, useEffect, useRef, memo } from 'react'
import SectionPage from '@components/SectionPage'
import {
  MarkdownInput,
  MarkdownInputTopBar,
  MarkdownInputContent,
  MarkdownInputWrapper,
  MarkdownInputTopBarAction,
  MarkdownInputTopBarDropdown,
  MarkdownInputTopBarDropdownAction,
  MarkdownInputTopBarButtonSubmit,
} from './styles'
import MardownOutput from './MarkdownOutput/'
import { MdMenu } from 'react-icons/md'
import { Medium, Small } from '@styles/Typography'
import ModalComponent from '../../../Modal'
import { useDispatch } from 'react-redux'
import { throwModalAction } from '@store/actions/modal.action'
import { IInputProps } from '@components/Input'
import { checkCurrentEnviroment } from 'src/utils/checkEnviroment'
import { throwPopupMessage } from 'src/utils/throwPopup'
import axios from 'axios'
import { useRouter } from 'next/router'
import Cookies from 'js-cookie'

const CreateComponent = () => {
  const router = useRouter()
  const [markdownContent, setMarkdownContent] = useState('')
  const [dropdownShown, setDropdownShown] = useState(false)
  const [articleTitle, setArticleTitle] = useState('')
  const [articleThumbnail, setArticleThumbnail] = useState('')
  const mardownInput = useRef<HTMLTextAreaElement>(null)
  const titleInput = useRef<HTMLInputElement>(null)
  const thumbnailInput = useRef<HTMLInputElement>(null)
  const dispatch = useDispatch()
  const [isSubmit, setIsSubmit] = useState(false)

  useEffect(() => {
    if (titleInput.current) {
      setArticleTitle(titleInput.current?.value)
    } else {
      setArticleThumbnail(thumbnailInput.current?.value)
    }
  }, [isSubmit])

  const handleActionMenuClick = (props: {
    title: string
    description: string
    ref: React.MutableRefObject<HTMLInputElement>
    options: IInputProps
  }) => {
    return dispatch(
      throwModalAction({
        title: props.title,
        description: props.description,
        form: {
          inputs: [
            {
              ref: props.ref,
              options: props.options,
            },
          ],
        },
      })
    )
  }

  const actions = [
    {
      name: 'Title',
      clickAction: handleActionMenuClick,
      title: 'Change title',
      description: 'Give a new title for your article',
      ref: titleInput,
      options: {
        placeholder: 'Title',
      },
    },
    {
      name: 'Thumbnail',
      title: 'Change thumbnail',
      description:
        'Put your image-id from unsplash url. e.g: https://images.unsplash.com/"IMAGE-ID"',
      ref: thumbnailInput,
      options: {
        placeholder: 'Photo id',
      },
      clickAction: handleActionMenuClick,
    },
  ]

  const handleMarkdownInput = (ev: ChangeEvent<HTMLTextAreaElement>) => {
    const textAreaValue = ev.target.value
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
          onClick={() =>
            item.clickAction({
              title: item.title,
              description: item.description,
              ref: item.ref,
              options: item.options,
            })
          }
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

  const calculateReadTime = () => {
    const filteredMarkdown = markdownContent
      .split(' ')
      .filter(char => char !== '#')
    const wordsQuantity = filteredMarkdown.length
    const wordPerMinute = 200
    const oneMinute = 60
    const readTimeInSecodns = Math.trunc(
      (wordsQuantity / wordPerMinute) * oneMinute
    )

    return readTimeInSecodns
  }

  const handleArticleSubmit = async () => {
    const URL = `${checkCurrentEnviroment()}/posts/create`
    const BODY = {
      tags: ['test'],
      content: markdownContent,
      infos: {
        read_time: calculateReadTime(),
        title: articleTitle,
        thumbnail: articleThumbnail,
      },
    }
    const token = Cookies.get('auth_token')
    const HEADERS = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }

    try {
      await axios.post(URL, BODY, HEADERS)
      router.push('/blog/home')
    } catch (err) {
      throwPopupMessage(err.message, 'warning', dispatch)
    }
  }

  return (
    <SectionPage title='Preview'>
      <ModalComponent isSubmit={isSubmit} setIsSubmit={setIsSubmit} />
      <MardownOutput
        title={articleTitle}
        thumbnail={articleThumbnail}
        markdown={markdownContent}
      />
      <MarkdownInputWrapper onMouseLeave={handleHideDropdown}>
        <MarkdownInputContent>
          <MarkdownInputTopBar>
            <MarkdownInputTopBarAction onClick={handleShowDropdown}>
              <MdMenu />
            </MarkdownInputTopBarAction>
            <MarkdownInputTopBarDropdown style={handleMarkdownShowAnimation()}>
              {handleDropdownActionsRender()}
            </MarkdownInputTopBarDropdown>
            <MarkdownInputTopBarAction onClick={handleArticleSubmit}>
              <MarkdownInputTopBarButtonSubmit>
                <Small>Submit</Small>
              </MarkdownInputTopBarButtonSubmit>
            </MarkdownInputTopBarAction>
          </MarkdownInputTopBar>
          <MarkdownInput ref={mardownInput} onChange={handleMarkdownInput} />
        </MarkdownInputContent>
      </MarkdownInputWrapper>
    </SectionPage>
  )
}

export default CreateComponent
