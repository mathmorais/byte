import React, { ChangeEvent, KeyboardEvent, useRef, useState } from 'react'
import {
  ArticleContent,
  ArticleCommentsContainer,
  ArticleCommentsContent,
  ArticleCommentsItem,
  ArticleCommentsItemUsername,
  ArticleCommentsCreator,
} from './styles'
import { MDXProvider } from '@mdx-js/react'
import { markdownComponents } from '@components/Markdown'
import { TitleTypography } from '@components/Markdown/Typography'
import { Large, ExtraMedium, ExtraSmall, Medium } from '@styles/Typography'
import { IArticleProps } from '@components/ArticlePreview'
import Cookies from 'js-cookie'
import axios from 'axios'
import { useRouter } from 'next/router'

interface IProps {
  id: string
  content: React.ReactNode
  title: string
  comments: IArticleProps['comments']
}

interface IArticleComment {
  username: string
  content: string
}

const ArticleContentComponent: React.FC<IProps> = ({
  id,
  comments,
  content,
  title,
}) => {
  const router = useRouter()
  const [commentFieldHeight, setCommentFieldHeight] = useState(30)
  const commentField = useRef<HTMLTextAreaElement>()
  const authToken = Cookies.get('auth_token')

  const handleLoadComments = () => {
    return comments.map(comment => {
      return (
        <ArticleCommentsItem key={comment._id}>
          <ArticleCommentsItemUsername>
            <Medium as='span'>{comment.username}</Medium>
          </ArticleCommentsItemUsername>
          <ExtraSmall as='p'>{comment.content}</ExtraSmall>
        </ArticleCommentsItem>
      )
    })
  }

  const handleCommentLineBreak = (event: ChangeEvent<HTMLTextAreaElement>) => {
    const commentValue = event.target.value
    const spaces = commentValue.split('\n')
    let commentHeight = 30

    spaces.forEach(() => {
      return spaces.length > 1 ? (commentHeight += 15) : null
    })

    if (commentHeight >= 200) return

    return setCommentFieldHeight(commentHeight)
  }

  const handleCommentCredentials = () => {
    const content = commentField.current.value
    const username = Cookies.get('name')

    return {
      username,
      content,
    }
  }

  const handleKeyboardKeys = (event: KeyboardEvent<HTMLTextAreaElement>) => {
    const currentKey = event.key

    const allowedSendKeys = {
      Enter: handleCommentCreate,
    }

    if (event.shiftKey && allowedSendKeys[currentKey]) return

    return allowedSendKeys[currentKey] ? allowedSendKeys[currentKey]() : null
  }

  const handleCommentCreate = async () => {
    const credentials: IArticleComment = handleCommentCredentials()

    const url = `http://localhost:5050/api/posts/update/comments/${id}`
    const config = {
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
    }

    try {
      await axios.post(url, credentials, config)
      router.reload()
    } catch (err) {
      return err
    }
  }

  return (
    <MDXProvider components={markdownComponents}>
      <ArticleContent>
        <TitleTypography>{title}</TitleTypography>
        {content}
      </ArticleContent>
      <ArticleCommentsContainer>
        <Large>Comments</Large>
        {typeof authToken !== undefined ? (
          <ArticleCommentsCreator
            placeholder='Type to create a comment'
            ref={commentField}
          />
        ) : (
          <ArticleCommentsCreator
            disabled
            placeholder='You need to be logged in to create a comment'
          />
        )}
        <ArticleCommentsContent>
          {comments.length > 0 ? (
            handleLoadComments()
          ) : (
            <ExtraMedium>No comments found</ExtraMedium>
          )}
        </ArticleCommentsContent>
      </ArticleCommentsContainer>
    </MDXProvider>
  )
}

export default ArticleContentComponent
