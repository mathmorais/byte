import React, { ReactNode, ButtonHTMLAttributes } from 'react'
import { Button, IButtonProps } from './styles'

interface IButton {
  props?: IButtonProps
  children?: ReactNode
}

const ButtonComponent = ({ props, children }: IButton) => {
  return <Button {...props}>{children}</Button>
}

export default ButtonComponent
