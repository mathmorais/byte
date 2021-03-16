import React from 'react'
import Link from 'next/link'
import SectionPage from '@components/SectionPage'
import { Large, ExtraMedium } from '@styles/Typography'

const NotFoundPage = () => {
  return (
    <SectionPage title='404' fillScreen>
      <Large>I think you are lost</Large>
      <Link href='/blog/home'>
        <ExtraMedium fontWeight='400'>
          Go back t o <strong>Home</strong>
        </ExtraMedium>
      </Link>
    </SectionPage>
  )
}

export default NotFoundPage
