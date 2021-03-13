import styled from 'styled-components'

interface IContainerWrapperProps {
  background?: string
  padding?: string
}
interface IContainerProps {
  fillScreen?: boolean
  flexDirection?: string
}

const ContainerWrapper = styled.div<IContainerWrapperProps>`
  width: 100%;
  height: 100%;
  background: ${props => props.background || '#FFF'};
  padding: ${props => props.padding || 'initial'};
`

const Container = styled.div<IContainerProps>`
  display: flex;
  flex-direction: ${props => props.flexDirection || 'initial'};
  min-height: ${props => (props.fillScreen ? '100vh' : 'initial')};
  max-width: 1440px;
  margin: auto;
  background: inherit;
`

export { ContainerWrapper, Container }
