import React, { FormEvent, ReactChildren } from 'react'
import { Form } from './styles'
import Input, { IInputProps } from '../Input/index'

interface IInput {
  ref: React.MutableRefObject<HTMLInputElement>
  options: IInputProps
}

interface IFormProps {
  inputs: IInput[]
  children: React.ReactNode
}

const FormComponent = ({ inputs, children }: IFormProps) => {
  const preventDefaultSubmit = (event: FormEvent) => {
    return event.preventDefault()
  }

  const renderInputs = () => {
    return inputs.map((input, index) => (
      <Input {...input.options} ref={input.ref} key={index} />
    ))
  }

  return (
    <Form onSubmit={preventDefaultSubmit}>
      {renderInputs()}
      {children}
    </Form>
  )
}

export default FormComponent
