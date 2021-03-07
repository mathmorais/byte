import styled from 'styled-components'

interface ITypographyOptions {
  fontWeight?: string
}

const TypographyBase = styled.h1<ITypographyOptions>`
  font-weight: ${props => props.fontWeight || 'revert'};
`

export const ExtraLarge = styled(TypographyBase)`
  font-size: ${props => props.theme.sizes.ExtraLarge.fontSize};
  line-height: ${props => props.theme.sizes.ExtraLarge.lineHeight};
`
export const Large = styled(TypographyBase)`
  font-size: ${props => props.theme.sizes.Large.fontSize};
  line-height: ${props => props.theme.sizes.Large.lineHeight};
`
export const ExtraMedium = styled(TypographyBase)`
  font-size: ${props => props.theme.sizes.ExtraMedium.fontSize};
  line-height: ${props => props.theme.sizes.ExtraMedium.lineHeight};
`
export const Medium = styled(TypographyBase)`
  font-size: ${props => props.theme.sizes.Medium.fontSize};
  line-height: ${props => props.theme.sizes.Medium.lineHeight};
`
export const ExtraSmall = styled(TypographyBase)`
  font-size: ${props => props.theme.sizes.ExtraSmall.fontSize};
  line-height: ${props => props.theme.sizes.ExtraSmall.lineHeight};
`
export const Small = styled(TypographyBase)`
  font-size: ${props => props.theme.sizes.Small.fontSize};
  line-height: ${props => props.theme.sizes.Small.lineHeight};
`
