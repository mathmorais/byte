import React, { useEffect } from 'react'
import Image from 'next/image'
import theme from 'src/constants/theme'
import Head from 'next/head'
import axios from 'axios'
import SignUpComponent from '@components/Pages/SignUp'
import PopupComponent from '@components/Popup'
import Cookies from 'js-cookie'
import { ContainerWrapper, Container } from '@styles/Container'
import { Content } from '@styles/Content'
import { LogoBackground, LogoBackgroundContent } from '@styles/LogoBackground'
import { GetServerSideProps } from 'next'
import { checkCurrentEnviroment } from 'src/utils/checkEnviroment'

const Register: React.FC = () => {
  useEffect(() => {
    Cookies.remove('auth_token')
  }, [])

  return (
    <ContainerWrapper background={theme.colors.primary.light}>
      <Container fillScreen>
        <Head>
          <title>Techblog - Register</title>
        </Head>
        <LogoBackground>
          <LogoBackgroundContent>
            <Image
              objectFit='contain'
              priority
              layout='fill'
              src='/logo_transparent.svg'
              alt='Logo'
            />
          </LogoBackgroundContent>
        </LogoBackground>
        <Content>
          <PopupComponent />
          <SignUpComponent />
        </Content>
      </Container>
    </ContainerWrapper>
  )
}

export default Register

export const getServerSideProps: GetServerSideProps = async ctx => {
  const currentApiUrl = checkCurrentEnviroment()
  const url = `${currentApiUrl}/token/verify`
  const auth_token = ctx.req.cookies.auth_token ?? ''

  try {
    await axios.get(url, {
      headers: {
        Authorization: `Bearer ${auth_token}`,
      },
    })

    return {
      redirect: {
        destination: '/blog/home/1',
        statusCode: 301,
      },
    }
  } catch (err) {
    return {
      props: {},
    }
  }
}
