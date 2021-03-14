import React from 'react'
import SectionPage from '@components/SectionPage'
import Head from 'next/head'
import Image from 'next/image'
import ArticleContent from './ArticleContent'
import { ArticleContainer, ArticleThumbnail } from './styles'
import { IArticleProps } from '../Home/Article'
import { unsplashLoader } from 'src/utils/Image/loader'

const ArticleComponent: React.FC<{
  post: IArticleProps
  content: React.ReactNode
}> = ({ post, content }) => {
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
