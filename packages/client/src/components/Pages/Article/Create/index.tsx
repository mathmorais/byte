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
  MarkdownInputTopBarButtonSubmit,
} from './styles'
import MardownOutput from './MarkdownOutput/'
import { MdMenu } from 'react-icons/md'
import { Medium, Small } from '@styles/Typography'
import ModalComponent from '../../../Modal'
import { useDispatch } from 'react-redux'
import { throwModalAction } from '@store/actions/modal.action'
import { IInputProps } from '@components/Input'
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
        'Put your image-id from unsplash url. e.g: https://images.unsplash.com/"IMAGE-ID".',
      ref: thumbnailInput,
      options: {
        placeholder: 'Photo id',
      },
      clickAction: handleActionMenuClick,
    },
  ]

  const handleWindowScroll = (chars: number) => {
    window.scrollTo({
      top: window.screen.height * chars,
    })
  }

  const handleDebounceInput = () => {
    let timeout: null | NodeJS.Timeout

    return function (value: string, delay: number = 1000) {
      const currentChars = value.length

      clearTimeout(timeout)

      timeout = setTimeout(() => {
        handleWindowScroll(currentChars)
        return setMarkdownContent(value)
      }, delay)
    }
  }

  const handleInputValue = handleDebounceInput()

  const handleMarkdownInput = (event: ChangeEvent<HTMLTextAreaElement>) =>
    handleInputValue(event.target.value, 500)

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
    const URL = `http://localhost:5050/api/posts/create`
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
      const { data, status } = await axios.post(URL, BODY, HEADERS)

      if (status !== 201) throw new Error(data.message)

      router.push('/blog/home/1')
    } catch (err) {
      const statusCode = err.response.status
      const UNATHORIZED = 401

      if (statusCode === UNATHORIZED) {
        router.push('/blog/home/1')
      }
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
                <Small>Create</Small>
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
