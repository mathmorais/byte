import styled from 'styled-components'

export const ArticleContent = styled.section`
  width: 100%;
  max-width: 900px;
  margin: auto;
  margin-bottom: 30px;
`

export const ArticleCommentsContainer = styled.section`
  width: 100%;
  max-width: 900px;
  margin: auto;

  h2 {
    margin-bottom: 32px;
  }
`

export const ArticleCommentsContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column-reverse;
`

export const ArticleCommentsCreatorContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`

export const ArticleCommentsCreator = styled.textarea`
  width: 100%;
  height: 125px;
  padding: 10px 0;
  background: none;
  border: none;
  border-bottom: 1px solid ${props => props.theme.colors.neutral.dark};
  margin-bottom: 36px;
  outline: none;
  resize: none;
  font-family: 'Roboto', sans-serif;
  font-weight: 500;
`

export const ArticleCommentsItem = styled.div`
  margin-bottom: 25px;
  border-bottom: 1px solid ${props => props.theme.colors.tertiary.dark};
  padding: 5px 0;

  p {
    font-weight: 500;
  }
`

export const ArticleCommentsItemUsername = styled.div`
  margin-bottom: 10px;

  span {
    font-weight: 700;
  }
`
