import HomeComponent from '@components/Pages/Home'
import axios from 'axios'
import { GetStaticPaths, GetStaticProps } from 'next'
import { IArticleProps } from '@components/ArticleCard'
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

export const getStaticPaths: GetStaticPaths = async ctx => {
  const currentApiUrl = checkCurrentEnviroment()
  const URL = `${currentApiUrl}/posts/search/count`
  const { data } = await axios.get(URL)
  const postPerPage = 15
  const postCount = Math.ceil(data.message / postPerPage)

  const paths = []

  for (let index = 1; index <= postCount; index++) {
    paths.push({ params: { page: index.toString() } })
  }

  return {
    paths: paths,
    fallback: true,
  }
}
export const getStaticProps: GetStaticProps = async ctx => {
  const currentApiUrl = checkCurrentEnviroment()
  const currentPage = ctx.params.page

  if (Number(currentPage) > 0) {
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
      revalidate: 60,
    }
  }

  return {
    props: {},
  }
}
