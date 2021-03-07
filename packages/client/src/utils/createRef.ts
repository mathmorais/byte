import { useRef } from 'react'

const createRef = (refs: object, name: string) => {
  refs[name] = useRef<HTMLInputElement>(null)
  return refs[name]
}

export { createRef }
