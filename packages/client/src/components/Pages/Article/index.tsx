import React from 'react'
import SectionPage from '@components/SectionPage'
import Head from 'next/head'
import Image from 'next/image'
import ArticleContent from './ArticleContent'
import { ArticleContainer, ArticleThumbnail } from './styles'
import { IArticleProps } from '../../ArticleCard'
import { unsplashLoader } from 'src/utils/Image/loader'

const ArticleComponent: React.FC<{
  post: IArticleProps
  content: React.ReactNode
}> = ({ post, content }) => {
  return (
    <>
      <Head>
        <title>{post.infos.title} - Byte</title>
      </Head>
      <ArticleContainer>
        <ArticleThumbnail>
          {post.infos.thumbnail ? (
            <Image
              priority
              loader={unsplashLoader}
              layout='fill'
              objectFit='cover'
              alt='Thumbnail'
              quality='5'
              src={post.infos.thumbnail}
            />
          ) : null}
        </ArticleThumbnail>
        <SectionPage>
          <ArticleContent title={post.infos.title} content={content} />
        </SectionPage>
      </ArticleContainer>
    </>
  )
}

export default ArticleComponent
