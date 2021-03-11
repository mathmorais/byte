import React from 'react'
import theme from '../constants/theme'
import Global from '../styles/Global'
import Head from 'next/head'
import { Provider } from 'react-redux'
import { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import { useRouter } from 'next/dist/client/router'
import { store } from '@store/index'
import { GetStaticProps } from 'next'
import SideBarComponent from '@components/SideBar'

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
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

  const inOnAuthPages = () => {
    const isIndexPage = currentPath === ''
    const isLoginPage = currentPath === 'login'

    return isIndexPage || isLoginPage
  }

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Head>
          <title>TechBlog - {capitalizePath(currentPath)}</title>
        </Head>
        {inOnAuthPages() === false ? <SideBarComponent /> : null}
        <Global includesNextGrid={inOnAuthPages() === false ? true : false} />
        <Component {...pageProps} />
      </ThemeProvider>
    </Provider>
  )
}

export default App
