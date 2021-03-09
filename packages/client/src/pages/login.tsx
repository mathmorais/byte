import React from 'react'
import LoginComponent from '@components/Login'
import theme from 'src/constants/theme'
import { Container } from '@styles/Container'
import { Content } from '@styles/Content'
import { LogoBackground, LogoBackgroundContent } from '@styles/LogoBackground'
import Image from 'next/image'
import PopupComponent from '@components/Popup'

const Login: React.FC = () => {
  return (
    <Container background={theme.colors.primary.light}>
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
  )
}



export default Login
