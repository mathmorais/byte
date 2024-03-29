import React, { memo } from 'react'
import { MarkdownOutputLink } from './styles'

const LinkComponent: React.FC<{ href: string }> = ({ href, children }) => {
  return (
    <MarkdownOutputLink
      rel='noopener'
      title={`Go to external page ${children}`}
      target='_blank'
      href={href}
    >
      {children}
    </MarkdownOutputLink>
  )
}

export default memo(LinkComponent)
