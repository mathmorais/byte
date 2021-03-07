import React from 'react'
import { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import theme from '../constants/theme'
import Global from '../styles/Global'
import Head from 'next/head'
import { useRouter } from 'next/dist/client/router'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  const { pathname } = useRouter()

  const getCurrentPath = () => {
    const splitedPath = pathname.split('/')
    const splitedSize = splitedPath.length
    const currentPath = splitedPath[splitedSize - 1]

    return currentPath
  }

  const capitalizePath = (path: string) => {
    const FIRST_INDEX = 0
    const firstChar = path.charAt(FIRST_INDEX)
    return path.replace(firstChar, firstChar.toUpperCase())
  }

  const currentPath = getCurrentPath()

  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>TechBlog - {capitalizePath(currentPath)}</title>
      </Head>
      <Global />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
