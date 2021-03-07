import { ButtonHTMLAttributes } from 'react'
import styled from 'styled-components'

export interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  background?: string
  color?: string
}

export const Button = styled.button<IButtonProps>`
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: 200px;
  color: ${props => props.color || props.theme.colors.neutral.dark};
  font-weight: bold;
  font-size: ${props => props.theme.sizes.Medium.fontSize};
  box-shadow: ${props => props.theme.others.defaultBoxShadow};
  cursor: pointer;
  background: ${props =>
    props.background || props.theme.colors.secondary.light};
  transition: opacity 0.25s ease;

  &:hover {
    opacity: 0.55;
  }

  @media only screen and (max-width: 768px) {
    &:hover {
      opacity: initial;
    }
    &:active {
      opacity: 0.6;
    }
  }
`
