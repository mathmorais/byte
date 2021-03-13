import styled from 'styled-components'

export const InfoItem = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 25px;
`

export const InfoItemLabel = styled.div`
  margin-bottom: 10px;

  h4 {
    color: ${props => props.theme.colors.tertiary.dark};
    font-weight: 500;
  }
`
export const InfoItemText = styled.div`
  display: flex;
  width: 100%;
  padding: 15px;
  background: ${props => props.theme.colors.tertiary.light};
  border-radius: 6px;

  span {
    font-weight: medium;
  }
`
