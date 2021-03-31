import React from 'react'
import ArticleComments from '../ArticleComment'
import { MDXProvider } from '@mdx-js/react'
import { ArticleContent } from './styles'
import { markdownComponents } from '@components/Markdown'
import { TitleTypography } from '@components/Markdown/Typography'
import { IArticleProps } from '@components/ArticlePreview'

interface IProps {
  id: string
  content: React.ReactNode
  title: string
  comments: IArticleProps['comments']
}

const ArticleContentComponent: React.FC<IProps> = ({
  id,
  comments,
  content,
  title,
}) => {
  return (
    <MDXProvider components={markdownComponents}>
      <ArticleContent>
        <TitleTypography>{title}</TitleTypography>
        {content}
      </ArticleContent>
      <ArticleComments postId={id} comments={comments} />
    </MDXProvider>
  )
}

export default ArticleContentComponent
