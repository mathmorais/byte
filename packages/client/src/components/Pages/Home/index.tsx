import React from 'react'
import ArticlePreview, { IArticleProps } from '../../ArticlePreview'
import SectionPage from '@components/SectionPage'
import { ArticleGrid } from '@styles/ArticleGrid'
import Head from 'next/head'
import Pagination from '@components/Pagination'
import { Large } from '@styles/Typography'

interface IHomeProps {
  posts: IArticleProps[]
  postQuantity: number
  currentPage: number
}

const HomeComponent: React.FC<IHomeProps> = props => {
  const posts = props.posts

  const RenderPosts = () => {
    const orderedPosts = posts.reverse()

    if (orderedPosts?.length > 0) {
      return (
        <>
          {orderedPosts.map((post, index) => (
            <ArticlePreview key={index} {...post} />
          ))}
        </>
      )
    }

    return null
  }

  if (posts?.length > 0)
    return (
      <SectionPage title='Home'>
        <Head>
          <title>Byte - Home</title>
        </Head>
        <ArticleGrid>
          <RenderPosts />
        </ArticleGrid>
        <Pagination
          currentPage={props.currentPage}
          postQuantity={props.postQuantity}
          maxVisiblePages={5}
          postQuantityPerPage={15}
        />
      </SectionPage>
    )

  return (
    <SectionPage title='No posts found'>
      <Head>
        <title>Byte - No posts found</title>
      </Head>
      <ArticleGrid></ArticleGrid>
      <Pagination
        currentPage={props.currentPage}
        postQuantity={props.postQuantity}
        maxVisiblePages={5}
        postQuantityPerPage={15}
      />
    </SectionPage>
  )
}

export default HomeComponent
