import styled from 'styled-components'

export const InputContainer = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  margin-bottom: clamp(20px, 3.5vh, 40px);
  background: ${props => props.theme.colors.primary.darkest};
  box-shadow: ${props => props.theme.others.defaultBoxShadow};
  border-radius: 150px;
  padding: 17px 15px;

  svg {
    position: absolute;
    width: 30px;
    height: 30px;
    padding: 5px;
    background: ${props => props.theme.colors.primary.light};
    border-radius: 100%;
    margin-right: 50px;
    transition: all 0.15s ease-in;
  }
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

  &:focus + svg {
    background: ${props => props.theme.colors.primary.dark};
    color: ${props => props.theme.colors.neutral.light};
  }

  &:valid + svg {
    background: ${props => props.theme.colors.secondary.light};
    color: ${props => props.theme.colors.neutral.dark};
  }
`
