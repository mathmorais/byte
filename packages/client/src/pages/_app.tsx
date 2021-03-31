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
import axios from 'axios'
import Cookies from 'js-cookie'

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  const { pathname } = useRouter()

  const generateUserCookies = (
    field: string,
    value: string | object | boolean
  ) => {
    return Cookies.set(field, value.toString(), {
      expires: 30,
      sameSite: 'Strict',
      path: '/blog',
    })
  }

  const auth_token = Cookies.get('auth_token')

  if (auth_token) {
    const handleGetTokenContent = async () => {
      const config = {
        headers: {
          Authorization: `Bearer ${auth_token}`,
        },
      }

      const { data } = await axios.get(
        'http://localhost:5050/api/token/verify',
        config
      )

      return data.message
    }

    const handleUserData = async () => {
      const tokenContent = await handleGetTokenContent()

      const { data } = await axios.get(
        `http://localhost:5050/api/users/find/${tokenContent.id}`
      )

      const userData = data.message

      if (userData) {
        generateUserCookies('name', userData.name)
        generateUserCookies('email_verified', userData.email_verified)
        generateUserCookies('admin', userData.admin)
      }
    }

    handleUserData()
  }

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
