import {
  ExtraMedium,
  ExtraSmall,
  Large,
  Medium,
  Small,
} from '@styles/Typography'
import { ParagraphTypography, TitleTypography } from './Typography'
import LinkComponent from './Link'
import ImageComponent from './Image'
import CodeComponent from './Code'

const markdownComponents = {
  h1: TitleTypography,
  h2: Large,
  h3: ExtraMedium,
  h4: Medium,
  h5: ExtraSmall,
  h6: Small,
  p: ParagraphTypography,
  a: LinkComponent,
  img: ImageComponent,
  code: CodeComponent,
}

export { markdownComponents }
