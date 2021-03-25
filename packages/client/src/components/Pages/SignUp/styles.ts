import styled from 'styled-components'

export const SignUpWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: inherit;
  width: inherit;
  color: white;
  max-width: 700px;

  h1,
  p {
    color: ${props => props.theme.colors.neutral.light};
  }
`

export const SignUpTop = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 35px;

  h1 {
    margin-bottom: 15px;
  }
`

export const SignUpForm = styled.div`
  margin-bottom: 35px;
`

export const SignUpBelow = styled.div`
  display: flex;
  justify-content: center;

  p:last-of-type {
    margin-left: 10px;
    font-weight: bold;
    cursor: pointer;
    color: ${props => props.theme.colors.secondary.light};
  }
`
