import React from 'react'
import axios from 'axios'
import renderToString from 'next-mdx-remote/render-to-string'
import hydrate from 'next-mdx-remote/hydrate'
import Head from 'next/head'
import ArticleComponent from '@components/Pages/Article'
import { GetStaticPaths, GetStaticProps } from 'next'
import { IArticleProps } from '@components/ArticlePreview'
import { MdxRemote } from 'next-mdx-remote/types'
import { checkCurrentEnviroment } from 'src/utils/checkEnviroment'
import { useRouter } from 'next/router'

const Article: React.FC<{ post: IArticleProps; content: MdxRemote.Source }> = ({
  post,
  content,
}) => {
  const { isFallback } = useRouter()

  if (isFallback) {
    return (
      <ArticleComponent
        post={{
          title: 'Loading...',
          thumbnail: '',
          id: '',
          comments: [],
        }}
        content={''}
      />
    )
  }

  const hydratedContent = hydrate(content)

  return (
    <>
      <Head>
        <link
          as='stylesheet'
          rel='prefetch'
          href='https://cdnjs.cloudflare.com/ajax/libs/highlight.js/10.7.1/styles/atom-one-dark.min.css'
        />
        <link
          as='script'
          rel='prefetch'
          href='https://cdnjs.cloudflare.com/ajax/libs/highlight.js/10.7.1/highlight.min.js'
        />
        <link
          rel='stylesheet'
          href='https://cdnjs.cloudflare.com/ajax/libs/highlight.js/10.7.1/styles/atom-one-dark.min.css'
        />
        <script src='https://cdnjs.cloudflare.com/ajax/libs/highlight.js/10.7.1/highlight.min.js' />
      </Head>
      <ArticleComponent
        post={{
          thumbnail: post.infos.thumbnail,
          title: post.infos.title,
          id: post._id,
          comments: post.comments,
        }}
        content={hydratedContent}
      />
    </>
  )
}

export default Article

export const getStaticPaths: GetStaticPaths = async () => {
  const currentApiUrl = checkCurrentEnviroment()
  const URL = `${currentApiUrl}/posts/search`
  const { data } = await axios.get(URL)

  const posts: IArticleProps[] = data.message

  const paths = posts.map(post => {
    return { params: { id: post._id } }
  })

  return {
    paths,
    fallback: true,
  }
}

export const getStaticProps: GetStaticProps = async ctx => {
  const { id } = ctx.params
  const currentApiUrl = checkCurrentEnviroment()
  const URL = `${currentApiUrl}/posts/search/one?id=${id}`

  const { data } = await axios.get(URL)

  const post = data.message
  const content = post.content
  const mdxSource = await renderToString(content)

  return {
    props: {
      post,
      content: mdxSource,
      nonParsedContent: content,
    },
  }
}
