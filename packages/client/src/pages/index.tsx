import React from 'react'
import Image from 'next/image'
import theme from 'src/constants/theme'
import Head from 'next/head'
import SignUpComponent from '@components/SignUp'
import { Container } from '@styles/Container'
import { Content } from '@styles/Content'
import { LogoBackground, LogoBackgroundContent } from '@styles/LogoBackground'
import PopupComponent from '@components/Popup'

const Register: React.FC = () => {
  return (
    <Container background={theme.colors.primary.light}>
      <Head>
        <title>Techblog - Register</title>
      </Head>
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
        <SignUpComponent />
      </Content>
    </Container>
  )
}

export default Register
