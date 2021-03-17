import React, { useEffect } from 'react'
import LoginComponent from '@components/Pages/Login'
import theme from 'src/constants/theme'
import { ContainerWrapper, Container } from '@styles/Container'
import { Content } from '@styles/Content'
import { LogoBackground, LogoBackgroundContent } from '@styles/LogoBackground'
import Image from 'next/image'
import PopupComponent from '@components/Popup'
import axios from 'axios'
import { GetServerSideProps } from 'next'
import Cookies from 'js-cookie'
import { checkCurrentEnviroment } from 'src/utils/checkEnviroment'

const Login: React.FC = () => {
  useEffect(() => {
    Cookies.remove('auth_token')
  }, [])

  return (
    <ContainerWrapper background={theme.colors.primary.light}>
      <Container fillScreen>
        <LogoBackground>
          <LogoBackgroundContent>
            <Image
              objectFit='contain'
              priority
              layout='fill'
              src='/logo.png'
              alt='Logo'
            />
          </LogoBackgroundContent>
        </LogoBackground>
        <Content>
          <PopupComponent />
          <LoginComponent />
        </Content>
      </Container>
    </ContainerWrapper>
  )
}

export const getServerSideProps: GetServerSideProps = async ctx => {
  const currentApiUrl = checkCurrentEnviroment()

  const url = `${currentApiUrl}/token/verify` ?? ''
  const auth_token = ctx.req.cookies.auth_token

  try {
    await axios.get(url, {
      headers: {
        Authorization: `Bearer ${auth_token}`,
      },
    })

    return {
      redirect: {
        destination: '/blog/home',
        statusCode: 301,
      },
    }
  } catch (err) {
    return {
      props: {},
    }
  }
}

export default Login
