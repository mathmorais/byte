import React, { memo, MouseEvent, useEffect, useState } from 'react'
import unified from 'unified'
import remarkParse from 'remark-parse'
import remarkReactParse from 'remark-react'
import { MarkdownOutput, MarkdownTitle } from './styles'

interface IMarkdownOutput {
  components?: Partial<{
    h1: object
    h2: object
    h3: object
    h4: object
    h5: object
    h6: object
    code: object
    img: object
    link: object
  }>
  cursorPosition?: number
  markdown: string
}

const MardownOutputComponent: React.FC<IMarkdownOutput> = ({
  components,
  markdown,
}) => {
  const MarkdownContent = (): React.ReactElement => {
    const unifiedProcessor = unified()
    const { result } = unifiedProcessor
      .use(remarkParse)
      .use(remarkReactParse, components)
      .processSync(markdown)

    return result as React.ReactElement
  }

  return (
    <MarkdownOutput>
      <MarkdownTitle placeholder='The title of your article' />
      <MarkdownContent />
    </MarkdownOutput>
  )
}

export default memo(MardownOutputComponent)
