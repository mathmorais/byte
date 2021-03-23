import React from 'react'
import { ArticleContent } from './styles'
import { MDXProvider } from '@mdx-js/react'
import { markdownComponents } from '@components/Markdown'
import { TitleTypography } from '@components/Markdown/Typography'

interface IArticleProps {
  content: React.ReactNode
  title: string
}

const ArticleContentComponent: React.FC<IArticleProps> = ({
  content,
  title,
}) => {
  return (
    <MDXProvider components={markdownComponents}>
      <ArticleContent>
        <TitleTypography>{title}</TitleTypography>
        {content}
      </ArticleContent>
    </MDXProvider>
  )
}

export default ArticleContentComponent
