import styled from 'styled-components'

export const ListContainer = styled.ul`
  margin: 16px 0;
  margin-left: 50px;

  li {
    font-size: ${props => props.theme.sizes.Medium.fontSize};
    line-height: ${props => props.theme.sizes.Medium.lineHeight};
    color: ${props => props.theme.colors.neutral.dark};
    margin-bottom: 5px;
  }
`
