import React, {
  ForwardRefRenderFunction,
  forwardRef,
  InputHTMLAttributes,
} from 'react'

import { IconType } from 'react-icons'
import { InputContainer, Input, IconContainer } from './styles'

export interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  containerStyle?: React.CSSProperties
  Icon?: IconType
}

const InputComponent: ForwardRefRenderFunction<
  HTMLInputElement,
  IInputProps
> = ({ Icon, containerStyle, ...rest }, ref) => {
  const handleFocusInput = () => {
    if (ref) {
      const { current } = ref as React.MutableRefObject<HTMLInputElement>

      return current.focus()
    }
  }

  return (
    <InputContainer style={containerStyle} onClick={handleFocusInput}>
      <IconContainer>{Icon ? <Icon /> : null}</IconContainer>
      <Input {...rest} ref={ref ? ref : null} />
    </InputContainer>
  )
}

export default forwardRef(InputComponent)
