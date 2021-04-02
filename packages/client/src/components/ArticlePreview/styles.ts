import styled from 'styled-components'

export const ArticleCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 275px;
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
  background: rgba(0, 0, 0, 0.5);
  position: relative;
  border-radius: 26px 26px 0 0;
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
  flex-direction: column;
  padding: 15px;
`

export const ArticleCardInfoDetails = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 25px;
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

  span {
    color: inherit;
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
  justify-self: center;
  width: 100%;
  margin-bottom: 15px;

  h5 {
    font-weight: 400;
  }
`
