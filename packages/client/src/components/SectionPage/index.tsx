import React, { memo } from 'react'
import theme from 'src/constants/theme'
import { ContainerWrapper, Container } from '@styles/Container'
import { Large } from '@styles/Typography'
import { SectionTitle } from './styles'

interface ISectionPageProps {
  title?: string
  fillScreen?: boolean
}

const SectionPageComponent: React.FC<ISectionPageProps> = ({
  children,
  title,
  ...rest
}) => {
  return (
    <ContainerWrapper
      padding={'45px 55px'}
      background={theme.colors.tertiary.light}
    >
      <Container flexDirection='column' {...rest}>
        {title ? (
          <SectionTitle>
            <Large fontWeight='400' as='h1'>
              {title}
            </Large>
          </SectionTitle>
        ) : null}
        {children}
      </Container>
    </ContainerWrapper>
  )
}

export default SectionPageComponent
