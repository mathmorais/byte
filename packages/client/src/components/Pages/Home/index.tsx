import React from 'react'
import Post, { IArticleProps } from './ArticleCard'
import { HomeContainer } from './styles'
import SectionPage from '@components/SectionPage'

interface IHomeProps {
  posts: IArticleProps[]
}

const HomeComponent: React.FC<IHomeProps> = props => {
  const RenderPosts = () => {
    return (
      <>
        {props.posts.map((post, index) => (
          <Post key={index} {...post} />
        ))}
      </>
    )
  }

  if (props.posts)
    return (
      <SectionPage title='Home'>
        <HomeContainer>
          <RenderPosts />
        </HomeContainer>
      </SectionPage>
    )

  return <SectionPage title='None posts found' />
}

export default HomeComponent
