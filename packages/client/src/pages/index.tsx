import React, { useState, ChangeEvent } from 'react'
import Hello from '../styles/components/Hello'
import Container from '../styles/shared/Container'

const Home: React.FC = () => {
  return (
    <Container>
      <Hello>Client / Server | Boilerplate</Hello>
    </Container>
  )
}

export default Home
