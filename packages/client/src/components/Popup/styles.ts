import styled, { keyframes } from 'styled-components'

const loadingAnimation = keyframes`
  0% { width: 100% }
  100% { width: 0% }
`

interface IPopupContainerProps {
  state: 'warning' | 'success'
}
interface IPopupLoadingProps {
  loadingTime: string
}

export const PopupContainer = styled.div<IPopupContainerProps>`
  display: flex;
  justify-content: center;
  width: 200px;
  height: 80px;
  position: absolute;
  padding: 5px;
  right: 15px;
  top: 15px;
  border-radius: 4px;
  background: ${props => {
    if (props.state === 'success') return props.theme.colors.primary.darkest
    if (props.state === 'warning') return props.theme.colors.secondary.light
  }};
  box-shadow: ${props => props.theme.others.defaultBoxShadow};
  transform: translateX(150%);
  transition: all 0.35s ease;

  h3 {
    font-weight: 500;
  }
`

export const PopupMessage = styled.div`
  width: 100%;
  margin-bottom: 15px;
`

export const PopupLoading = styled.div<IPopupLoadingProps>`
  width: 10%;
  height: 6px;
  position: absolute;
  background: ${props => props.theme.colors.secondary.dark};
  bottom: 0;
  left: 0;
  border-radius: 0 0 4px 4px;
  animation-name: ${loadingAnimation};
  animation-duration: ${props => props.loadingTime || 'initial'};
  animation-delay: 250ms;
  animation-fill-mode: both;
  animation-timing-function: linear;
`
