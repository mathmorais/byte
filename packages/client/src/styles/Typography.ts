import styled from 'styled-components'

interface ITypographyOptions {
  fontWeight?: string
  asLink?: boolean
  titleStyle?: boolean
  paragraphStyle?: boolean
}

export const ExtraLarge = styled.h1<ITypographyOptions>`
  font-size: ${props => props.theme.sizes.ExtraLarge.fontSize};
  line-height: ${props => props.theme.sizes.ExtraLarge.lineHeight};
  font-weight: ${props => props.fontWeight || 'revert'};
  color: ${props => props.theme.colors.neutral.dark};
  ${props =>
    props.titleStyle
      ? ` 
    margin: 16px 0;
    padding: 7px 0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.15);
    `
      : null}
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
export const Medium = styled.h4<ITypographyOptions>`
  font-size: ${props => props.theme.sizes.Medium.fontSize};
  line-height: ${props => props.theme.sizes.Medium.lineHeight};
  font-weight: ${props => props.fontWeight || 'revert'};
  color: ${props => props.theme.colors.neutral.dark};
  ${props =>
    props.paragraphStyle
      ? ` 
        margin: 16px 0;
        font-weight: 400;
        `
      : null}
`
export const ExtraSmall = styled.h5<ITypographyOptions>`
  font-size: ${props => props.theme.sizes.ExtraSmall.fontSize};
  line-height: ${props => props.theme.sizes.ExtraSmall.lineHeight};
  font-weight: ${props => props.fontWeight || 'revert'};
  color: ${props => props.theme.colors.neutral.dark};
`
export const Small = styled.h6<ITypographyOptions>`
  font-size: ${props => props.theme.sizes.Small.fontSize};
  line-height: ${props => props.theme.sizes.Small.lineHeight};
  font-weight: ${props => props.fontWeight || 'revert'};
  color: ${props => props.theme.colors.neutral.dark};
`
