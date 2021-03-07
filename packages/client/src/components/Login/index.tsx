import React from 'react'
import { ExtraLarge, ExtraSmall, Medium } from '@styles/Typography'
import { SignUpWrapper, SignUpTop, SignUpForm, SignUpBelow } from './styles'
import { createRef } from 'src/utils/createRef'
import { MdMailOutline, MdLockOutline } from 'react-icons/md'
import Form from '@components/Form'
import Button from '@components/Button'
import Link from 'next/link'

const LoginComponent: React.FC = () => {
  const refs = {}

  const inputs = [
    {
      ref: createRef(refs, 'email'),
      options: {
        Icon: MdMailOutline,
        placeholder: 'Email',
        type: 'email',
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
  ]

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
          <Button>Login</Button>
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
