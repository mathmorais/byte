import React, { MutableRefObject } from 'react'
import Button from '@components/Button'
import Link from 'next/link'
import Form from '@components/Form'
import axios from 'axios'
import { ExtraLarge, ExtraSmall, Medium } from '@styles/Typography'
import { SignUpWrapper, SignUpTop, SignUpForm, SignUpBelow } from './styles'
import { createRef } from 'src/utils/createRef'
import { MdPersonOutline, MdMailOutline, MdLockOutline } from 'react-icons/md'
import { useDispatch } from 'react-redux'
import { useRouter } from 'next/dist/client/router'
import { throwPopupMessage } from 'src/utils/throwPopup'
import * as validations from 'src/utils/Form/valitations'
import { getFieldsData } from 'src/utils/Form/getFieldsData'
import { checkCurrentEnviroment } from 'src/utils/checkEnviroment'

interface ISignUpRefs {
  name: MutableRefObject<HTMLInputElement>
  email: MutableRefObject<HTMLInputElement>
  password: MutableRefObject<HTMLInputElement>
  confirmPassword: MutableRefObject<HTMLInputElement>
}

const SignUpComponent: React.FC = () => {
  const refs = {} as ISignUpRefs
  const router = useRouter()
  const dispatch = useDispatch()

  const inputs = [
    {
      ref: createRef(refs, 'name'),
      options: {
        Icon: MdPersonOutline,
        placeholder: 'Name',
        required: true,
      },
    },
    {
      ref: createRef(refs, 'email'),
      options: {
        Icon: MdMailOutline,
        placeholder: 'Email',
        autoComplete: 'email',
        required: true,
      },
    },
    {
      ref: createRef(refs, 'password'),
      options: {
        Icon: MdLockOutline,
        placeholder: 'Password',
        type: 'password',
        required: true,
        minLength: 8,
      },
    },
    {
      ref: createRef(refs, 'confirmPassword'),
      options: {
        Icon: MdLockOutline,
        placeholder: 'Confirm password',
        type: 'password',
        required: true,
        minLength: 8,
      },
    },
  ]

  const handleRegister = async () => {
    const URL = `http://localhost:5050/api/users/create`
    const FIELDS = getFieldsData(refs)

    try {
      await axios.post(URL, FIELDS)
      throwPopupMessage('Account Created', 'warning', dispatch)
      handleRedirect()
    } catch (err) {
      const errorData = err.response.data
      throwPopupMessage(errorData.message, 'warning', dispatch)
    }
  }

  const handleRedirect = () => {
    router.push('/login')
  }

  const handleSubmit = () => {
    try {
      validations.handleFieldsFilled(refs)
      validations.handlePasswordLenght(refs.password)
      validations.handlePasswordsMatch(refs.password, refs.confirmPassword)
      handleRegister()
    } catch (err) {
      throwPopupMessage(err.message, 'warning', dispatch)
    }
  }

  return (
    <SignUpWrapper>
      <SignUpTop>
        <ExtraLarge fontWeight='bold'>Sign up</ExtraLarge>
        <Medium as='p'>
          A blog for people who like technology and programming like me :).
        </Medium>
      </SignUpTop>
      <SignUpForm>
        <Form inputs={inputs}>
          <Button
            props={{
              onClick: handleSubmit,
            }}
          >
            Sign up
          </Button>
        </Form>
      </SignUpForm>
      <SignUpBelow>
        <ExtraSmall as='p'>Already have an account?</ExtraSmall>
        <Link href='/login'>
          <ExtraSmall as='p'>Login</ExtraSmall>
        </Link>
      </SignUpBelow>
    </SignUpWrapper>
  )
}

export default SignUpComponent
