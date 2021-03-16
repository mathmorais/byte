import React from 'react'
import axios from 'axios'
import renderToString from 'next-mdx-remote/render-to-string'
import hydrate from 'next-mdx-remote/hydrate'
import ArticleComponent from '@components/Pages/Article'
import { GetStaticPaths, GetStaticProps } from 'next'
import { IArticleProps } from '@components/Pages/Home/ArticleCard'
import { MdxRemote } from 'next-mdx-remote/types'

const Article: React.FC<{ post: IArticleProps; content: MdxRemote.Source }> = ({
  post,
  content,
}) => {
  const hydratedContent = hydrate(content)

  return <ArticleComponent post={post} content={hydratedContent} />
}

export default Article

export const getStaticPaths: GetStaticPaths = async () => {
  const URL = 'http://localhost:5050/api/posts/search/all'
  const { data } = await axios.get(URL)
  const posts: IArticleProps[] = data.message

  const paths = posts.map(post => {
    return { params: { id: post._id } }
  })

  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async ctx => {
  const { id } = ctx.params
  const URL = `http://localhost:5050/api/posts/search/${id}`

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
    revalidate: 60,
  }
}
