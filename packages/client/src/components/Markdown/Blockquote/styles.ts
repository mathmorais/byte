import styled from 'styled-components'

export const BlockquoteContainer = styled.blockquote`
  margin: 16px -30px;
  border-radius: 4px;
  padding: 5px 17px;
  border-left: 8px solid ${props => props.theme.colors.primary.dark};
  background: ${props => `${props.theme.colors.primary.dark}30`};
  p {
    margin: initial;
  }
`
