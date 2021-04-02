import React, { memo } from 'react'
import unified from 'unified'
import remarkParse from 'remark-parse'
import remarkReactParse from 'remark-react'
import Image from 'next/image'
import { MarkdownOutput, MarkdownOutputThubmnail } from './styles'
import { unsplashLoader } from 'src/utils/Image/loader'
import { markdownComponents } from '@components/Markdown'
import { TitleTypography } from '@components/Markdown/Typography'

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
    const unifiedProcessor = unified()

    const { result } = unifiedProcessor
      .use(remarkParse)
      .use(remarkReactParse, {
        remarkReactComponents: markdownComponents,
      })
      .processSync(markdown)

    return result as React.ReactElement
  }

  const checkThumbnailExist = () => {
    return thumbnail !== null && thumbnail?.length > 5
  }

  const checkTitleExist = () => {
    return title !== null && title?.length >= 1
  }

  return (
    <MarkdownOutput>
      {checkThumbnailExist() ? (
        <MarkdownOutputThubmnail>
          <Image
            priority
            quality='10'
            objectFit='cover'
            layout='fill'
            loader={unsplashLoader}
            src={thumbnail}
          />
        </MarkdownOutputThubmnail>
      ) : null}
      {checkTitleExist() ? <TitleTypography>{title}</TitleTypography> : null}
      <MarkdownContent />
    </MarkdownOutput>
  )
}

export default memo(MardownOutputComponent)
