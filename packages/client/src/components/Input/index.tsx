import React, {
  ForwardRefRenderFunction,
  forwardRef,
  InputHTMLAttributes,
} from 'react'

import { IconType } from 'react-icons'
import { InputContainer, Input } from './styles'

export interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  Icon: IconType
}

const InputComponent: ForwardRefRenderFunction<
  HTMLInputElement,
  IInputProps
> = ({ Icon, ...rest }, ref) => {
  const handleFocusInput = () => {
    const { current } = ref as React.MutableRefObject<HTMLInputElement>

    return current.focus()
  }

  return (
    <InputContainer onClick={handleFocusInput}>
      <Input {...rest} ref={ref} />
      <Icon />
    </InputContainer>
  )
}

export default forwardRef(InputComponent)
