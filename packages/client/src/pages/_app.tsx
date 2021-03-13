import React from 'react'
import theme from '../constants/theme'
import Global from '../styles/Global'
import Head from 'next/head'
import { Provider } from 'react-redux'
import { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import { useRouter } from 'next/dist/client/router'
import { store } from '@store/index'
import SideBar from '@components/SideBar'

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

  const isOnAuthPages = () => {
    const isIndexPage = currentPath === ''
    const isLoginPage = currentPath === 'login'

    return isIndexPage || isLoginPage
  }

  const CURRENT_PATH = capitalizePath(currentPath)
  const ON_AUTH_PAGES = isOnAuthPages() === false

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Head>
          <title>TechBlog - {CURRENT_PATH}</title>
        </Head>
        <Global includesNextGrid={ON_AUTH_PAGES ? true : false} />
        {ON_AUTH_PAGES ? <SideBar /> : null}
        <Component {...pageProps} />
      </ThemeProvider>
    </Provider>
  )
}

export default App

/*

email_verified= boolean

uid=string

reading=string

*/
