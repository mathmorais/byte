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
import BlockquoteComponent from './Blockquote'
import ListComponent from './List'

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
  blockquote: BlockquoteComponent,
  ul: ListComponent,
}

export { markdownComponents }
