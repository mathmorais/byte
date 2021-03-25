import React from 'react'
import ArticlePreview, { IArticleProps } from '../../ArticleCard'
import SectionPage from '@components/SectionPage'
import { ArticleGrid } from '@styles/ArticleGrid'
import { PaginationContainer, PaginationPage } from './styles'
import Link from 'next/link'
import { ExtraSmall } from '@styles/Typography'
import Head from 'next/head'
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md'

interface IHomeProps {
  posts: IArticleProps[]
  postQuantity: number
  currentPage: number
}

let initialPage = 1

const HomeComponent: React.FC<IHomeProps> = props => {
  const quantityPerPage = 15
  const pagesQuantity = Math.ceil(props.postQuantity / quantityPerPage)

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

  const renderPaginationPages = () => {
    const pages = []
    let maxVisiblePages = 9

    for (let index = initialPage; index <= pagesQuantity; index++) {
      if (index === maxVisiblePages) {
        return pages
      }

      pages.push(
        <Link key={index} href={`/blog/home/${index}`}>
          <PaginationPage marked={index === Number(props.currentPage)}>
            <ExtraSmall as='span'>{index}</ExtraSmall>
          </PaginationPage>
        </Link>
      )
    }

    return pages
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
        <PaginationContainer>
          <Link href='/blog/home/1'>
            <PaginationPage>
              <MdKeyboardArrowLeft />
            </PaginationPage>
          </Link>

          {renderPaginationPages()}

          <Link href={`/blog/home/${pagesQuantity}`}>
            <PaginationPage>
              <MdKeyboardArrowRight />
            </PaginationPage>
          </Link>
        </PaginationContainer>
      </SectionPage>
    )

  return <SectionPage title='None posts found' />
}

export default HomeComponent
