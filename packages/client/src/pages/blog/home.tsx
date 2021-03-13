import SectionPage from '@components/SectionPage/index'
import HomeComponent from '@components/Pages/Home'
import { GetStaticProps } from 'next'

const Home: React.FC = props => {
  return (
    <SectionPage title='Home'>
      <HomeComponent />
    </SectionPage>
  )
}

export default Home

export const getStaticProps: GetStaticProps = async ctx => {
  return {
    props: {},
    revalidate: 60,
  }
}
