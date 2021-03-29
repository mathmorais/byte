import styled from 'styled-components'

export const MarkdownOutputLink = styled.a`
  display: inline;

  text-decoration: none;
  font-weight: 600;
  color: ${props => props.theme.colors.primary.light};
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`
