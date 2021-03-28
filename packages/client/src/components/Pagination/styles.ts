import styled from 'styled-components'

export const PaginationContainer = styled.div`
  width: 100%;
  padding: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 25px;
`

export const PaginationPage = styled.div<{ marked?: boolean }>`
  display: flex;
  height: 35px;
  width: 35px;
  justify-content: center;
  align-items: center;
  border-radius: 6px;
  background: ${props =>
    props.marked
      ? props.theme.colors.secondary.light
      : props.theme.colors.primary.light};
  margin: 0 5px;
  cursor: pointer;
  transition: opacity 0.25s ease;
  color: ${props =>
    props.marked
      ? props.theme.colors.neutral.dark
      : props.theme.colors.neutral.light};
  svg {
    width: 20px;
    height: 20px;
  }

  span {
    font-weight: 600;
    color: inherit;
  }

  &:hover {
    opacity: 0.8;
  }
`
