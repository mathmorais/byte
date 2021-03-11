import styled from 'styled-components'

export const SideBar = styled.div`
  width: 100%;
  max-height: 100vh;
  background: ${props => props.theme.colors.neutral.light};
  box-shadow: ${props => props.theme.others.defaultBoxShadow};
  padding: 45px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
`

export const Logo = styled.div`
  width: 50%;
`

export const Menu = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
`

export const Item = styled.div<{ name: string }>`
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
    transform: translateX(70px) translateY(-50%);
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
    /* background: ${props => props.theme.colors.primary.light}; */
  }

  &::after {
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
    width: 45%;
    height: 45%;
  }
`

export const Logout = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  background: ${props => props.theme.colors.primary.light};
  border-radius: 100%;

  svg {
    width: 3rem;
    height: 3rem;
    color: ${props => props.theme.colors.neutral.light};
  }

  cursor: pointer;
`
