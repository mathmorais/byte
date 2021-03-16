import styled from 'styled-components'

export const MarkdownTitle = styled.input`
  width: 100%;
  font-size: ${props => props.theme.sizes.Large.fontSize};
  font-weight: bold;
  border: none;
  background: none;
  margin-bottom: 25px;
  padding: 5px 0;
  outline: none;
`

export const MarkdownOutput = styled.div`
  width: 100%;
  max-width: 700px;
  overflow: hidden;
  word-wrap: break-word;
  margin: auto;
`
