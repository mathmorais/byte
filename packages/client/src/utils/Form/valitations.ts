import { MutableRefObject } from 'react'

const handleFieldsFilled = (refs: object) => {
  const keys = Object.keys(refs)
  let isValid = null

  keys.forEach(key => {
    if (refs[key].current.value === '') {
      return (isValid = false)
    } else {
      isValid = true
    }
  })

  if (!isValid) throw new Error('All fields need to be filled')
  else return
}

const handlePasswordsMatch = (
  password: MutableRefObject<HTMLInputElement>,
  confirmPassword: MutableRefObject<HTMLInputElement>
) => {
  const passwordInput = password.current
  const confirmPasswordInput = confirmPassword.current

  if (passwordInput.value !== confirmPasswordInput.value) {
    passwordInput.focus()
    throw new Error('Passwords do not match')
  }
}

const handlePasswordLenght = (password: MutableRefObject<HTMLInputElement>) => {
  const passwordInput = password.current
  const passwordLenght = passwordInput.value.length

  if (passwordLenght < 8) {
    passwordInput.focus()
    throw new Error("Password can't be lower than 8 characters")
  }
}

export { handleFieldsFilled, handlePasswordLenght, handlePasswordsMatch }
