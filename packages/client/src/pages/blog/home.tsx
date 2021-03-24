import HomeComponent from '@components/Pages/Home'
import axios from 'axios'
import { GetStaticProps } from 'next'
import { IArticleProps } from '@components/ArticleCard'
import { checkCurrentEnviroment } from 'src/utils/checkEnviroment'

interface IHomeProps {
  posts: IArticleProps[]
}

const Home: React.FC<IHomeProps> = props => {
  return <HomeComponent posts={props.posts} />
}

export default Home

export const getStaticProps: GetStaticProps = async ctx => {
  const currentApiUrl = checkCurrentEnviroment()
  const URL = `${currentApiUrl}/posts/search/all`
  const { data } = await axios.get(URL)

  return {
    props: {
      posts: data.message,
    },
    revalidate: 60,
  }
}
