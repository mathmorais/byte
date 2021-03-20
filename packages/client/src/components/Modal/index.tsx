import React, { memo } from 'react'
import FormComponent from '@components/Form'
import { ExtraMedium, Large, Medium } from '@styles/Typography'
import { useDispatch, useSelector } from 'react-redux'
import {
  ModalCloseButton,
  ModalContainer,
  ModalContent,
  ModalContentTop,
  ModalContentMain,
} from './styles'
import { MdClose } from 'react-icons/md'
import { clearModalAction } from '@store/actions/modal.action'
import Button from '@components/Button'

interface IModalProps {
  setIsSubmit: React.Dispatch<React.SetStateAction<boolean>>
  isSubmit: boolean
}

const ModalComponent: React.FC<IModalProps> = ({ isSubmit, setIsSubmit }) => {
  const modalInfos = useSelector(state => {
    return state.throwModal
  })

  const dispatch = useDispatch()

  const isShownStyle: React.CSSProperties = {
    opacity: 1,
    pointerEvents: 'all',
  }

  const modalInfoIsValid = () => {
    let isValid: boolean = true

    Object.keys(modalInfos).forEach(item => {
      if (!modalInfos[item]) {
        return (isValid = false)
      }
    })

    return isValid
  }

  const handleCloseModal = () => {
    dispatch(clearModalAction)
  }

  const handleModalSubmit = () => {
    setIsSubmit(!isSubmit)

    setTimeout(() => {
      handleCloseModal()
    }, 5)
  }

  return (
    <ModalContainer style={modalInfoIsValid() ? isShownStyle : {}}>
      <ModalContent>
        <ModalContentTop>
          <Large>{modalInfos.title}</Large>
          <ModalCloseButton onClick={handleCloseModal}>
            <MdClose />
          </ModalCloseButton>
        </ModalContentTop>
        <ModalContentMain>
          <Medium as='p'>{modalInfos.description}</Medium>
          <FormComponent
            inputs={modalInfoIsValid ? modalInfos.form.inputs : null}
          />
          <Button
            props={{
              onClick: handleModalSubmit,
            }}
          >
            Submit
          </Button>
        </ModalContentMain>
      </ModalContent>
    </ModalContainer>
  )
}

export default memo(ModalComponent)
