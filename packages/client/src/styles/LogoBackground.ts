import styled from 'styled-components'

export const LogoBackground = styled.div`
  display: none;
  min-width: 50%;
  min-height: 100%;
  justify-content: center;
  align-items: center;

  @media only screen and (min-width: 1024px) {
    display: flex;
  }
`

export const LogoBackgroundContent = styled.div`
  position: relative;
  opacity: 0.1;
  width: 90%;
  height: 80%;
`
