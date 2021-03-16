import styled from 'styled-components'

export const ArticleCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 310px;
  border-radius: 26px;
  background: ${props => props.theme.colors.neutral.light};
  cursor: pointer;
  box-shadow: ${props => props.theme.others.defaultBoxShadow};
  transition: transform 0.15s ease, box-shadow 0.15s ease;

  &:hover {
    transform: translate3d(0, -5px, 0) scale(1.05);
    box-shadow: 0 0 25px 10px rgba(0, 0, 0, 0.15);
  }
`

export const ArticleCardThumbnail = styled.div`
  background: ${props => props.theme.colors.neutral.light};
  position: relative;
  border-radius: 26px;
  height: 100%;

  img {
    border-radius: 26px 26px 0 0;
  }
`

export const ArticleCardInfo = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-self: flex-end;
  justify-content: space-between;
  flex-direction: column;
  padding: 14px 12px;
`

export const ArticleCardInfoDetails = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`

export const ArticleCardInfoDetailsItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${props => props.theme.colors.tertiary.dark};
  margin-bottom: 10px;

  svg {
    width: 14px;
    height: 14px;
    margin-right: 5px;
  }

  p {
    font-weight: bold;
  }
`

export const ArticleCardInfoDetailsRight = styled.div`
  display: flex;

  div:last-of-type {
    margin-left: 10px;
  }
`

export const ArticleCardInfoTitle = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 15px;

  h5 {
    font-weight: 400;
  }
`

export const ArticleCardInfoTags = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
`

export const ArticleCardInfoTagItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 4px 20px;
  margin-right: 10px;
  background: ${props => props.theme.colors.secondary.light};
  border-radius: 100px;

  p {
    font-weight: 500;
  }
`
