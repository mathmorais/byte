import React from 'react'
import Create from '@components/Pages/Article/Create'
import Head from 'next/head'

const ArticleCreate = () => {
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
      <Create />
    </>
  )
}

export default ArticleCreate
