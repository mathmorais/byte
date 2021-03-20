import React, {
  ForwardRefRenderFunction,
  forwardRef,
  InputHTMLAttributes,
} from 'react'

import { IconType } from 'react-icons'
import { InputContainer, Input } from './styles'

export interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  containerStyle?: React.CSSProperties
  Icon?: IconType
}

const InputComponent: ForwardRefRenderFunction<
  HTMLInputElement,
  IInputProps
> = ({ Icon, containerStyle, ...rest }, ref) => {
  const handleFocusInput = () => {
    const { current } = ref as React.MutableRefObject<HTMLInputElement>

    return current.focus()
  }

  return (
    <InputContainer style={containerStyle} onClick={handleFocusInput}>
      <Input {...rest} ref={ref} />
      {Icon ? <Icon /> : null}
    </InputContainer>
  )
}

export default forwardRef(InputComponent)
