import styled from 'styled-components'

export const ModalContainer = styled.div`
  width: 100%;
  height: 100%;
  z-index: 2;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.2);
`

export const ModalContent = styled.div`
  padding: 15px;
  width: 90%;
  height: 40%;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  background: ${props => props.theme.colors.neutral.light};
  box-shadow: ${props => props.theme.others.defaultBoxShadow};
  border-radius: 6px;
`

export const ModalContentTitle = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`
