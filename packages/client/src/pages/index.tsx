import React from 'react'
import SignUpComponent from '@components/SignUp'
import { Container } from '@styles/Container'
import theme from 'src/constants/theme'
import { Content } from '@styles/Content'
import { LogoBackground, LogoBackgroundContent } from '@styles/LogoBackground'
import Head from 'next/head'
import Image from 'next/image'

const Register: React.FC = () => {
  return (
    <Container background={theme.colors.primary.light}>
      <Head>
        <link as='image' rel='prefetch' href='/logo.png' />
        <title>Techblog - Register</title>
      </Head>
      <LogoBackground>
        <LogoBackgroundContent>
          <Image
            priority
            objectFit='contain'
            layout='fill'
            src='/logo.png'
            alt='Logo'
          />
        </LogoBackgroundContent>
      </LogoBackground>
      <Content>
        <SignUpComponent />
      </Content>
    </Container>
  )
}

export default Register
