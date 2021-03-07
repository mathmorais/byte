import React from 'react'
import { ExtraLarge, ExtraSmall, Medium } from '@styles/Typography'
import { SignUpWrapper, SignUpTop, SignUpForm, SignUpBelow } from './styles'
import { createRef } from 'src/utils/createRef'
import { MdPersonOutline, MdMailOutline, MdLockOutline } from 'react-icons/md'
import Form from '@components/Form'
import Button from '@components/Button'
import Link from 'next/link'

const SignUpComponent: React.FC = () => {
  const refs = {}

  const inputs = [
    {
      ref: createRef(refs, 'name'),
      options: {
        Icon: MdPersonOutline,
        placeholder: 'Name',
        minLength: 3,
        required: true,
      },
    },
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

  return (
    <SignUpWrapper>
      <SignUpTop>
        <ExtraLarge fontWeight='bold'>Sign up</ExtraLarge>
        <Medium as='p'>
          A blog for peoples who like technology and programming like me :).
        </Medium>
      </SignUpTop>
      <SignUpForm>
        <Form inputs={inputs}>
          <Button>Sign up</Button>
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
