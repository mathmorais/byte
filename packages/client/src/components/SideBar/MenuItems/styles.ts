import styled from 'styled-components'

export const Item = styled.div<{ name: string; marked: boolean }>`
  width: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  padding: 20px 0;
  transition: background 0.25s ease;

  &:hover {
    background: ${props => props.theme.colors.tertiary.light};
  }

  &:hover::after {
    transform: translateX(80px) translateY(-50%);
    opacity: 1;
  }

  &::before {
    content: '';
    position: absolute;
    width: 6px;
    height: 100%;
    top: 0;
    left: 0;
    border-radius: 6px;
    opacity: ${props => (props.marked ? '1' : '0')};
    transform: ${props => (props.marked ? 'scaleY(1)' : 'scaleY(0)')};
    transition: all 0.25s ease-in-out;
    background: ${props =>
      props.marked ? props.theme.colors.primary.light : 'initial'};
  }

  &::after {
    width: 50px;
    content: attr(name);
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${props => props.theme.colors.neutral.light};
    font-size: ${props => props.theme.sizes.ExtraSmall.fontSize};
    font-weight: bold;
    padding: 4px 20px;
    top: 50%;
    right: 0;
    opacity: 0;
    border-radius: 4px;
    transform: translateX(30px) translateY(-50%);

    transition: 0.25s all ease;
    background: ${props => props.theme.colors.primary.light};
  }

  svg {
    color: ${props => props.theme.colors.neutral.dark};
    width: clamp(15px, 4vw, 30px);
    height: clamp(15px, 4vh, 30px);
  }
`
