import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ExtraSmall } from '@styles/Typography'
import { PopupContainer, PopupMessage, PopupLoading } from './styles'
import { clearPopupAction } from '@store/actions/popup.action'

const PopupComponent = () => {
  const dipatch = useDispatch()
  const { message, state } = (useSelector(
    state => state.throwPopup
  ) as unknown) as {
    message: string
    state: 'warning' | 'success'
  }

  if (message && state) {
    const SHOW_TIME = 2500

    setTimeout(() => {
      dipatch(clearPopupAction)
    }, SHOW_TIME)
  }

  const showStyle = { transform: 'translate(0)', opacity: 1 }

  return (
    <PopupContainer style={message ? showStyle : {}} state={state}>
      <PopupMessage>
        <ExtraSmall as='h3'>{message}</ExtraSmall>
      </PopupMessage>
      {message && <PopupLoading loadingTime='2.25s' />}
    </PopupContainer>
  )
}

export default PopupComponent
