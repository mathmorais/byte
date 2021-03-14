import styled from 'styled-components'

export const SideBar = styled.div`
  position: relative;
  z-index: 3;
`
export const SideBarContent = styled.div`
  display: flex;

  left: 0;
  top: 0;
  width: clamp(80px, 4%, 120px);
  position: fixed;
  height: 100%;
  background: ${props => props.theme.colors.neutral.light};
  box-shadow: ${props => props.theme.others.defaultBoxShadow};
  padding: 45px 0;
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

export const Logout = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  background: ${props => props.theme.colors.primary.light};
  border-radius: 100%;
  transition: opacity 0.25s ease;

  &:active,
  &:hover {
    opacity: 0.8;
  }

  svg {
    width: 3rem;
    height: 3rem;
    color: ${props => props.theme.colors.neutral.light};
  }

  cursor: pointer;
`
