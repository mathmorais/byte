import styled from 'styled-components'

export const SearchTopContainer = styled.div`
  display: flex;
  width: 100%;
  margin: auto;
  max-width: 600px;

  & > div {
    width: 100%;
    background: ${props => props.theme.colors.neutral.light};

    input {
      color: ${props => props.theme.colors.neutral.dark};
    }
  }
`

export const SearchLoading = styled.div`
  width: 100%;
  height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const SearchLoadingElement = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 100%;
  background: ${props => props.theme.colors.primary.light};
`

export const SearchNotFound = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;

  h1 {
    color: ${props => props.theme.colors.primary.light};
    font-weight: 500;
  }
`
