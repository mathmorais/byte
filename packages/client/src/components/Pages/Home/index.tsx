import React from 'react'
import { HomeContainer } from './styles'
import Post, { IPostProps } from './Post'
import { Large } from '@styles/Typography'

interface IHomeProps {
  posts: IPostProps[]
}

const HomeComponent: React.FC<IHomeProps> = props => {
  const RenderPosts = () => {
    if (props.posts) {
      return (
        <>
          {props.posts.map((post, index) => (
            <Post key={index} {...post} />
          ))}
        </>
      )
    }

    return <Large>No posts found</Large>
  }

  return (
    <HomeContainer>
      <RenderPosts />
    </HomeContainer>
  )
}

export default HomeComponent
