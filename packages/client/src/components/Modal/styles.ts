import styled from 'styled-components'

export const ModalContainer = styled.div`
  width: 100%;
  height: 100%;
  z-index: 5;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.2);
  opacity: 0;
  pointer-events: none;
  transition: all 0.25s ease;
`

export const ModalContent = styled.div`
  width: 100%;
  padding: 20px;
  height: fit-content;
  max-width: 500px;
  display: flex;
  flex-direction: column;
  background: ${props => props.theme.colors.neutral.light};
  box-shadow: ${props => props.theme.others.defaultBoxShadow};
  border-radius: 6px;
`

export const ModalContentTop = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 30px;
`

export const ModalCloseButton = styled.button`
  display: flex;
  height: fit-content;
  justify-content: center;
  align-items: center;
  padding: 10px;
  background: none;
  border: none;
  cursor: pointer;
  border-radius: 100%;
  transition: background 0.25s ease;
  &:hover {
    background: rgba(0, 0, 0, 0.2);
  }

  svg {
    width: 20px;
    height: 20px;
  }
`

export const ModalContentMain = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 100%;

  p {
    width: 100%;
    margin-bottom: 25px;
  }

  input {
    font-size: ${props => props.theme.sizes.ExtraSmall.fontSize};
    color: ${props => props.theme.colors.neutral.dark};
  }

  div {
    border: 2px solid ${props => props.theme.colors.tertiary.dark};
    background: ${props => props.theme.colors.neutral.light};
  }

  button {
    font-size: ${props => props.theme.sizes.ExtraSmall.fontSize};
    align-self: flex-end;
    width: 30%;
  }
`
