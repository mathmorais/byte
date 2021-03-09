import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ExtraSmall, Small } from '@styles/Typography'
import { PopupContainer, PopupMessage, PopupLoading } from './styles'
import { clearPopupAction } from '@store/actions/popup.action'

const PopupComponent = () => {
  const dipatch = useDispatch()
  const { message, state } = (useSelector(
    states => states.throwPopup
  ) as unknown) as { message: string; state: 'warning' | 'success' }

  if (message && state) {
    const SHOW_TIME = 5500

    setTimeout(() => {
      dipatch(clearPopupAction)
    }, SHOW_TIME)
  }

  return (
    <PopupContainer
      style={(message && { transform: 'translate(0)' }) || {}}
      state={state}
    >
      <PopupMessage>
        <ExtraSmall as='h3'>{message}</ExtraSmall>
      </PopupMessage>
      {message && <PopupLoading />}
    </PopupContainer>
  )
}

export default PopupComponent
