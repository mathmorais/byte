import styled from 'styled-components'

const Hello = styled.h1`
  width: fit-content;
  background: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.primary};
  font-size: ${({ theme }) => theme.sizes.header};
  padding: 35px;
`

export default Hello
