import React, { MutableRefObject } from 'react'
import Form from '@components/Form'
import Button from '@components/Button'
import Link from 'next/link'
import { ExtraLarge, ExtraSmall, Medium } from '@styles/Typography'
import { SignUpWrapper, SignUpTop, SignUpForm, SignUpBelow } from './styles'
import { createRef } from 'src/utils/createRef'
import { MdMailOutline, MdLockOutline } from 'react-icons/md'
import {
  handleFieldsFilled,
  handlePasswordLenght,
} from 'src/utils/Form/valitations'
import { throwPopupMessage } from 'src/utils/throwPopup'
import { useDispatch } from 'react-redux'
import { getFieldsData } from 'src/utils/Form/getFieldsData'
import { useRouter } from 'next/dist/client/router'
import axios from 'axios'

interface ILoginRefs {
  email: MutableRefObject<HTMLInputElement>
  password: MutableRefObject<HTMLInputElement>
}

const LoginComponent: React.FC = () => {
  const dispatch = useDispatch()
  const refs = {} as ILoginRefs
  const router = useRouter()

  const inputs = [
    {
      ref: createRef(refs, 'email'),
      options: {
        Icon: MdMailOutline,
        placeholder: 'Email',
        type: 'email',
        required: true,
        autoComplete: 'email',
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
  ]

  const handleAuthorization = async () => {
    const URL = 'http://localhost:5050/api/users/auth'
    const FIELDS = getFieldsData(refs)

    try {
      axios.defaults.withCredentials = true
      await axios.post(URL, FIELDS)

      handleRedirect()
    } catch (err) {
      const errorData = err.response?.data.message || err.message
      throwPopupMessage(errorData, 'warning', dispatch)
    }
  }

  const handleRedirect = () => {
    router.push('/blog/home')
  }

  const handleSubmit = () => {
    try {
      handleFieldsFilled(refs)
      handlePasswordLenght(refs.password)
      handleAuthorization()
    } catch (err) {
      throwPopupMessage(err.message, 'warning', dispatch)
    }
  }

  return (
    <SignUpWrapper>
      <SignUpTop>
        <ExtraLarge fontWeight='bold'>Login</ExtraLarge>
        <Medium as='p'>
          Already a user?, fill the fields below to make login.
        </Medium>
      </SignUpTop>
      <SignUpForm>
        <Form inputs={inputs}>
          <Button
            props={{
              onClick: handleSubmit,
            }}
          >
            Login
          </Button>
        </Form>
      </SignUpForm>
      <SignUpBelow>
        <ExtraSmall as='p'>Don't have an account?</ExtraSmall>
        <Link href='/'>
          <ExtraSmall as='p'>Register</ExtraSmall>
        </Link>
      </SignUpBelow>
    </SignUpWrapper>
  )
}

export default LoginComponent
