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

  const handleNonSidebarPages = (): boolean => {
    const nonSideBarPages = {
      '/': true,
      '/login': true,
      '/_error': true,
    }

    return nonSideBarPages[pathname]
  }

  const CURRENT_PATH = capitalizePath(currentPath)
  const nonSideBarPages = handleNonSidebarPages()

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Head>
          <title>Byte - {CURRENT_PATH}</title>
        </Head>
        <Global includesNextGrid={nonSideBarPages ? false : true} />
        {nonSideBarPages ? null : <SideBar />}
        <Component {...pageProps} />
      </ThemeProvider>
    </Provider>
  )
}

export default App

/*

email_verified= boolean

uid=string


*/
