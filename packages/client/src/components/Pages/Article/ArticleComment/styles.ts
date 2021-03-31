import styled from 'styled-components'

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
  margin-bottom: 36px;

  button {
    background: ${props => props.theme.colors.tertiary.dark};
    color: ${props => props.theme.colors.neutral.light};
    font-size: ${props => props.theme.sizes.ExtraSmall.fontSize};
    width: 10%;
    align-self: flex-end;
    border-radius: 5px;
  }
`

export const ArticleCommentsCreator = styled.textarea`
  width: 100%;
  background: none;
  border: none;
  font-size: ${props => props.theme.sizes.ExtraSmall.fontSize};
  line-height: ${props => props.theme.sizes.ExtraSmall.lineHeight};
  border-bottom: 1px solid ${props => props.theme.colors.neutral.dark};
  margin-bottom: 12px;
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
