import styled from 'styled-components'

export const MarkdownOutputLink = styled.div`
  display: inline;

  a {
    text-decoration: none;
    font-weight: 600;
    color: ${props => props.theme.colors.primary.light};
    cursor: pointer;
  }

  a:hover {
    text-decoration: underline;
  }
`
