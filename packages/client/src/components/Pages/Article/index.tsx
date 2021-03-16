import React, { useEffect, useState } from 'react'
import SectionPage from '@components/SectionPage'
import Head from 'next/head'
import Image from 'next/image'
import ArticleContent from './ArticleContent'
import { ArticleContainer, ArticleThumbnail } from './styles'
import { IArticleProps } from '../Home/ArticleCard'
import { unsplashLoader } from 'src/utils/Image/loader'
import Cookies from 'js-cookie'

const ArticleComponent: React.FC<{
  post: IArticleProps
  content: React.ReactNode
}> = ({ post, content }) => {
  useEffect(() => {
    Cookies.set('reading_article', post._id)
  }, [])

  return (
    <>
      <Head>
        <title>{post.infos.title} | TechBlog</title>
      </Head>
      <ArticleContainer>
        <ArticleThumbnail>
          <Image
            priority
            loader={unsplashLoader}
            layout='fill'
            objectFit='cover'
            alt='Thumbnail'
            quality='5'
            src={post.infos.thumbnail}
          />
        </ArticleThumbnail>
        <SectionPage>
          <ArticleContent content={content} />
        </SectionPage>
      </ArticleContainer>
    </>
  )
}

export default ArticleComponent
