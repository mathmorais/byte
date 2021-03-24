import styled from 'styled-components'

export const InputContainer = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  margin-bottom: clamp(20px, 3.5vh, 40px);
  background: ${props => props.theme.colors.primary.darkest};
  box-shadow: ${props => props.theme.others.defaultBoxShadow};
  border-radius: 150px;
  padding: 9px 15px;
`

export const Input = styled.input`
  width: 100%;
  background: none;
  border: none;
  color: ${props => props.theme.colors.neutral.light};
  font-size: ${props => props.theme.sizes.ExtraSmall.fontSize};
  font-weight: 500;
  font-family: 'Roboto', sans-serif;
  outline: none;

  &::placeholder {
    color: inherit;
    opacity: 0.3;
  }
`

export const IconContainer = styled.div`
  svg {
    width: 30px;
    height: 30px;
    padding: 7px;
    color: ${props => props.theme.colors.neutral.light};
    background: ${props => props.theme.colors.primary.light};
    border-radius: 100%;
    margin-right: 15px;
    transition: all 0.15s ease-in;
  }
`
