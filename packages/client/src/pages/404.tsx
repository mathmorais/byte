import React from 'react'
import Link from 'next/link'
import SectionPage from '@components/SectionPage'
import { Large, ExtraMedium } from '@styles/Typography'

const NotFoundPage = () => {
  return (
    <SectionPage title='404'>
      <Large>I think you are lost</Large>
      <Link href='/blog/home'>
        <ExtraMedium fontWeight='200'>
          Go back to <strong>Home</strong>
        </ExtraMedium>
      </Link>
    </SectionPage>
  )
}

export default NotFoundPage
