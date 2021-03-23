import { ExtraLarge, Medium } from '@styles/Typography'

const TitleTypography: React.FC = ({ children }) => {
  return <ExtraLarge titleStyle>{children}</ExtraLarge>
}

const ParagraphTypography: React.FC = ({ children }) => {
  return (
    <Medium as='p' paragraphStyle>
      {children}
    </Medium>
  )
}

export { TitleTypography, ParagraphTypography }
