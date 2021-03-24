import React from 'react'
import ArticlePreview, { IArticleProps } from '../../ArticleCard'
import SectionPage from '@components/SectionPage'
import { ArticleGrid } from '@styles/ArticleGrid'

interface IHomeProps {
  posts: IArticleProps[]
}

const HomeComponent: React.FC<IHomeProps> = props => {
  const RenderPosts = () => {
    return (
      <>
        {props.posts.map((post, index) => (
          <ArticlePreview key={index} {...post} />
        ))}
      </>
    )
  }

  if (props.posts)
    return (
      <SectionPage title='Home'>
        <ArticleGrid>
          <RenderPosts />
        </ArticleGrid>
      </SectionPage>
    )

  return <SectionPage title='None posts found' />
}

export default HomeComponent
