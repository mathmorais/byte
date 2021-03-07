import styled from 'styled-components'

interface IContainerProps {
  background?: string
}

const Container = styled.div<IContainerProps>`
  display: flex;
  min-height: 100vh;
  max-width: 1440px;
  margin: auto;
`

export { Container }
