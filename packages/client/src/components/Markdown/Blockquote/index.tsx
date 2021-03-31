import React from 'react'
import { BlockquoteContainer } from './styles'

const BlockquoteComponent: React.FC = ({ children }) => {
  return <BlockquoteContainer>{children}</BlockquoteContainer>
}

export default BlockquoteComponent
