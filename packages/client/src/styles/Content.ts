import styled from 'styled-components'

const Content = styled.main`
  position: relative;
  width: 100%;
  min-height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 2vh clamp(2.6rem, 5vw, 8rem);
  max-width: 50%;
  overflow-x: hidden;
  @media only screen and (max-width: 1024px) {
    max-width: initial;
  }
`

export { Content }
