import HomeComponent from '@components/Pages/Home'
import { GetStaticProps } from 'next'
import axios from 'axios'
import { IArticleProps } from '@components/Pages/Home/ArticleCard'

interface IHomeProps {
  posts: IArticleProps[]
}

const Home: React.FC<IHomeProps> = props => {
  return <HomeComponent posts={props.posts} />
}

export default Home

export const getStaticProps: GetStaticProps = async ctx => {
  const URL = 'http://localhost:5050/api/posts/search/all'
  const { data } = await axios.get(URL)

  return {
    props: {
      posts: data.message,
    },
    revalidate: 60,
  }
}
