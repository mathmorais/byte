import React from 'react'
import ArticlePreview, { IArticleProps } from '../../ArticleCard'
import SectionPage from '@components/SectionPage'
import { ArticleGrid } from '@styles/ArticleGrid'
import Head from 'next/head'
import Pagination from '@components/Pagination'

interface IHomeProps {
  posts: IArticleProps[]
  postQuantity: number
  currentPage: number
}

const HomeComponent: React.FC<IHomeProps> = props => {
  const RenderPosts = () => {
    if (props.posts) {
      return (
        <>
          {props.posts.map((post, index) => (
            <ArticlePreview key={index} {...post} />
          ))}
        </>
      )
    }
    return null
  }

  if (props.posts)
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

  return <SectionPage title='None posts found' />
}

export default HomeComponent
