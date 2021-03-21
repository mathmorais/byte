import React, { memo, useEffect } from 'react'
import unified from 'unified'
import remarkParse from 'remark-parse'
import remarkReactParse from 'remark-react'
import {
  MarkdownOutput,
  MarkdownOutputTitle,
  MarkdownOutputThubmnail,
  MarkdownOutputLink,
  MarkdownOutputImage,
  MarkdownOutputCode,
} from './styles'
import { ExtraMedium, ExtraLarge, Large, Medium } from '@styles/Typography'
import { unsplashLoader } from 'src/utils/Image/loader'
import hljs from 'highlight.js'
import Image from 'next/image'
import Link from 'next/link'

interface IMarkdownOutput {
  title: string
  markdown: string
  thumbnail: string
}

const CodeComponent = ({ children }) => {
  useEffect(() => {
    hljs.highlightAll()
  }, [])

  return (
    <MarkdownOutputCode>
      <code>{children}</code>
    </MarkdownOutputCode>
  )
}

const LinkComponent: React.FC<{ href: string }> = memo(({ href, children }) => {
  return (
    <MarkdownOutputLink>
      <Link href={href}>
        <Medium as='span'>{children}</Medium>
      </Link>
    </MarkdownOutputLink>
  )
})

const ImageComponent: React.FC<{ src: string }> = memo(({ src }) => {
  if (src) {
    return (
      <MarkdownOutputImage>
        <Image
          objectFit='cover'
          quality='25'
          layout='fill'
          loader={unsplashLoader}
          src={src}
        />
      </MarkdownOutputImage>
    )
  } else {
    return null
  }
})

const MardownOutputComponent: React.FC<IMarkdownOutput> = ({
  markdown,
  title,
  thumbnail,
}) => {
  const components = {
    h1: ExtraLarge,
    h2: Large,
    h3: ExtraMedium,
    p: Medium,
    a: LinkComponent,
    img: ImageComponent,
    code: CodeComponent,
  }

  const MarkdownContent = memo(
    (): React.ReactElement => {
      const unifiedProcessor = unified()

      const { result } = unifiedProcessor
        .use(remarkParse)
        .use(remarkReactParse, {
          remarkReactComponents: components,
        })
        .processSync(markdown)

      return result as React.ReactElement
    }
  )

  const loadImage = () => {
    if (thumbnail) {
      return (
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
      )
    }
    return null
  }

  return (
    <MarkdownOutput>
      {loadImage()}
      {title ? (
        <MarkdownOutputTitle>
          <Large>{title}</Large>
        </MarkdownOutputTitle>
      ) : null}

      <MarkdownContent />
    </MarkdownOutput>
  )
}

export default memo(MardownOutputComponent)
