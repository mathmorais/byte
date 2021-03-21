import styled from 'styled-components'

interface ITypographyOptions {
  fontWeight?: string
  asLink?: boolean
}

export const ExtraLarge = styled.h1<ITypographyOptions>`
  font-size: ${props => props.theme.sizes.ExtraLarge.fontSize};
  line-height: ${props => props.theme.sizes.ExtraLarge.lineHeight};
  font-weight: ${props => props.fontWeight || 'revert'};
  color: ${props => props.theme.colors.neutral.dark};
`
export const Large = styled.h2<ITypographyOptions>`
  font-size: ${props => props.theme.sizes.Large.fontSize};
  line-height: ${props => props.theme.sizes.Large.lineHeight};
  font-weight: ${props => props.fontWeight || 'revert'};
  color: ${props => props.theme.colors.neutral.dark};
`
export const ExtraMedium = styled.h3<ITypographyOptions>`
  font-size: ${props => props.theme.sizes.ExtraMedium.fontSize};
  line-height: ${props => props.theme.sizes.ExtraMedium.lineHeight};
  font-weight: ${props => props.fontWeight || 'revert'};
  color: ${props => props.theme.colors.neutral.dark};
`
export const Medium = styled.p<ITypographyOptions>`
  font-size: ${props => props.theme.sizes.Medium.fontSize};
  line-height: ${props => props.theme.sizes.Medium.lineHeight};
  font-weight: ${props => props.fontWeight || 'revert'};
  color: ${props => props.theme.colors.neutral.dark};
`
export const ExtraSmall = styled.p<ITypographyOptions>`
  font-size: ${props => props.theme.sizes.ExtraSmall.fontSize};
  line-height: ${props => props.theme.sizes.ExtraSmall.lineHeight};
  font-weight: ${props => props.fontWeight || 'revert'};
  color: ${props => props.theme.colors.neutral.dark};
`
export const Small = styled.p<ITypographyOptions>`
  font-size: ${props => props.theme.sizes.Small.fontSize};
  line-height: ${props => props.theme.sizes.Small.lineHeight};
  font-weight: ${props => props.fontWeight || 'revert'};
  color: ${props => props.theme.colors.neutral.dark};
`
