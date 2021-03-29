import React from 'react'
import axios from 'axios'
import HomeComponent from '@components/Pages/Home'
import { GetServerSideProps } from 'next'
import { IArticleProps } from '@components/ArticlePreview'
import { checkCurrentEnviroment } from 'src/utils/checkEnviroment'

interface IHomeProps {
  posts: IArticleProps[]
  postQuantity: number
  currentPage: number
}

const Home: React.FC<IHomeProps> = props => {
  return (
    <HomeComponent
      currentPage={props.currentPage}
      postQuantity={props.postQuantity}
      posts={props.posts}
    />
  )
}

export default Home

export const getServerSideProps: GetServerSideProps = async ctx => {
  const currentApiUrl = checkCurrentEnviroment()
  const pageParams = Number(ctx.params.page)
  const currentPage = pageParams <= 0 ? 1 : pageParams

  const URL_POST = `${currentApiUrl}/posts/search?page=${currentPage}`
  const URL_POST_QUANTITY = `${currentApiUrl}/posts/search/count`

  const posts = await axios.get(URL_POST)
  const postQuantity = await axios.get(URL_POST_QUANTITY)

  return {
    props: {
      posts: posts.data.message,
      postQuantity: postQuantity.data.message,
      currentPage,
    },
  }
}
