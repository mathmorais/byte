import styled from 'styled-components'

export const MarkdownOutput = styled.div`
  width: 100%;
  max-width: 900px;
  overflow: hidden;
  word-wrap: break-word;
  margin: auto;
  padding-bottom: 350px;

  h1,
  h2 {
    margin: 16px 0;
    padding: 7px 200px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.15);
  }

  p {
    margin: 16px 0;
    font-weight: 400;
  }
`

export const MarkdownOutputTitle = styled.div`
  margin-bottom: 25px;
`

export const MarkdownOutputThubmnail = styled.div`
  position: relative;
  width: 100%;
  height: 300px;
  margin-bottom: 35px;
`

export const MarkdownOutputLink = styled.div`
  display: inline;

  span {
    font-weight: 600;
    color: ${props => props.theme.colors.primary.light};
    cursor: pointer;
  }

  span:hover {
    text-decoration: underline;
  }
`

export const MarkdownOutputImage = styled.div`
  position: relative;
  width: 100%;
  height: 250px;
  max-height: 250px;
`

export const MarkdownOutputCode = styled.div`
  max-height: 500px;
  overflow-y: scroll;
  border-radius: 6px;

  code {
    padding: 5px 10px;
    font-size: ${props => props.theme.sizes.ExtraSmall.fontSize};
  }
`
