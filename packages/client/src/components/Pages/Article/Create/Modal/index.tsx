import FormComponent, { IInput } from '@components/Form'
import { Large } from '@styles/Typography'
import React from 'react'
import { ModalContainer, ModalContent, ModalContentTitle } from './styles'

interface IModalComponent {
  title: string
  inputs: IInput[]
}

const ModalComponent: React.FC<IModalComponent> = ({ title, inputs }) => {
  return (
    <ModalContainer>
      <ModalContent>
        <ModalContentTitle>
          <Large>{title}</Large>
        </ModalContentTitle>
        <FormComponent inputs={inputs} />
      </ModalContent>
    </ModalContainer>
  )
}

export default ModalComponent
