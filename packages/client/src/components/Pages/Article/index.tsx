import React, { useEffect } from 'react'
import SectionPage from '@components/SectionPage'
import Head from 'next/head'
import Image from 'next/image'
import ArticleContent from './ArticleContent'
import { ArticleContainer, ArticleThumbnail } from './styles'
import { IArticleProps } from '../../ArticleCard'
import { unsplashLoader } from 'src/utils/Image/loader'
import Cookies from 'js-cookie'
import { ExtraLarge } from '@styles/Typography'

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
