import React, { memo } from 'react'
import unified from 'unified'
import remarkParse from 'remark-parse'
import remarkReactParse from 'remark-react'
import { MarkdownOutput, MarkdownOutputTitle } from './styles'
import {
  ExtraLarge,
  ExtraMedium,
  ExtraSmall,
  Large,
  Medium,
} from '@styles/Typography'
import Image from 'next/image'
import { unsplashLoader } from 'src/utils/Image/loader'

interface IMarkdownOutput {
  title: string
  markdown: string
  thumbnail: string
}

const MardownOutputComponent: React.FC<IMarkdownOutput> = ({
  markdown,
  title,
  thumbnail,
}) => {
  const MarkdownContent = (): React.ReactElement => {
    const components = {
      h1: ExtraLarge,
      h2: Large,
      h3: ExtraMedium,
      h4: Medium,
      p: ExtraSmall,
    }

    const unifiedProcessor = unified()
    const { result } = unifiedProcessor
      .use(remarkParse)
      .use(remarkReactParse, { ...components })
      .processSync(markdown)

    return result as React.ReactElement
  }

  return (
    <MarkdownOutput>
      <MarkdownOutputTitle>
        <Large>{title}</Large>
      </MarkdownOutputTitle>
      {thumbnail ? (
        <Image layout='fill' loader={unsplashLoader} src={thumbnail} />
      ) : null}
      <MarkdownContent />
    </MarkdownOutput>
  )
}

export default memo(MardownOutputComponent)
