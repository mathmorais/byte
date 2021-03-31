import React, { ChangeEvent, useRef, useState, memo } from 'react'
import {
  ArticleCommentsContainer,
  ArticleCommentsContent,
  ArticleCommentsItem,
  ArticleCommentsItemUsername,
  ArticleCommentsCreator,
  ArticleCommentsCreatorContainer,
} from './styles'
import axios from 'axios'
import Cookies from 'js-cookie'
import { Large, ExtraMedium, ExtraSmall, Medium } from '@styles/Typography'
import { useRouter } from 'next/router'
import { Button } from '@components/Button/styles'

interface IArticleComment {
  _id: string
  username: string
  content: string
}

const ArticleCommentComponent: React.FC<{
  postId: string
  comments: IArticleComment[]
}> = ({ comments, postId }) => {
  const router = useRouter()
  const [isSubmit, setIsSubmit] = useState(false)
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
      return spaces.length > 1 ? (commentHeight += 20) : null
    })

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

  const handleCommentCreate = async () => {
    setIsSubmit(true)

    const credentials = handleCommentCredentials()
    const url = `http://localhost:5050/api/posts/update/comments/${postId}`
    const config = {
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
    }

    if (!isSubmit) {
      try {
        await axios.post(url, credentials, config)
        return router.reload()
      } catch (err) {
        return err
      }
    }
  }

  return (
    <ArticleCommentsContainer>
      <Large>Comments</Large>
      {authToken && typeof authToken !== undefined ? (
        <ArticleCommentsCreatorContainer>
          <ArticleCommentsCreator
            style={{
              height: `${commentFieldHeight}px`,
            }}
            onChange={handleCommentLineBreak}
            placeholder='Type to create a comment'
            ref={commentField}
          />
          <Button onClick={handleCommentCreate}>Send</Button>
        </ArticleCommentsCreatorContainer>
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
  )
}

export default memo(ArticleCommentComponent)
