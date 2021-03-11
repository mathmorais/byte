import { ContainerWrapper, Container } from '@styles/Container'
import theme from 'src/constants/theme'

const Home: React.FC = () => {
  return (
    <ContainerWrapper
      padding={'45px 55px'}
      background={theme.colors.tertiary.light}
    >
      <Container>
        <h1>Test</h1>
      </Container>
    </ContainerWrapper>
  )
}

export default Home
