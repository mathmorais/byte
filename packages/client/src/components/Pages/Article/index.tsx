import React, { memo, useEffect } from 'react'
import SectionPage from '@components/SectionPage'
import Head from 'next/head'
import Image from 'next/image'
import ArticleContent from './ArticleContent'
import { ArticleContainer, ArticleThumbnail } from './styles'
import { unsplashLoader } from 'src/utils/Image/loader'
import axios from 'axios'
import { IArticleProps } from '@components/ArticlePreview'

const ArticleComponent: React.FC<{
  post: {
    id: string
    title: string
    thumbnail: string
    comments: IArticleProps['comments']
  }
  content: React.ReactNode
}> = ({ post, content }) => {
  useEffect(() => {
    const updatePostViews = async () => {
      await axios.post(
        `http://localhost:5050/api/posts/update/views/${post.id}`
      )
    }

    updatePostViews()
  }, [])

  return (
    <ArticleContainer>
      <Head>
        <title>{post.title} - Byte</title>
      </Head>
      <ArticleThumbnail>
        {post.thumbnail ? (
          <Image
            priority
            loader={unsplashLoader}
            layout='fill'
            objectFit='cover'
            alt='Thumbnail'
            quality='5'
            src={post.thumbnail}
          />
        ) : null}
      </ArticleThumbnail>
      <SectionPage>
        <ArticleContent
          id={post.id}
          comments={post.comments}
          title={post.title}
          content={content}
        />
      </SectionPage>
    </ArticleContainer>
  )
}

export default memo(ArticleComponent)
