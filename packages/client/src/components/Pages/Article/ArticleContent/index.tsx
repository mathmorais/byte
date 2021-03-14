import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArticleContent } from './styles'
import { MDXProvider } from '@mdx-js/react'
import { ExtraLarge, Large, ExtraSmall } from '@styles/Typography'

interface IArticleProps {
  content: React.ReactNode
}

const ArticleContentComponent: React.FC<IArticleProps> = ({ content }) => {
  const components = {
    img: Image,
    h1: ExtraLarge,
    h2: Large,
    p: ExtraSmall,
    link: Link,
  }

  return (
    <MDXProvider components={components}>
      <ArticleContent>{content}</ArticleContent>
    </MDXProvider>
  )
}

export default ArticleContentComponent
