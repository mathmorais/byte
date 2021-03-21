import styled from 'styled-components'

export const MarkdownInputWrapper = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
  bottom: 0;
  left: 0;
  padding: 35px 0;
  max-height: 400px;

  &:hover > div {
    pointer-events: all;
    transform: translateY(0);
  }
`

export const MarkdownInputContent = styled.div`
  display: flex;
  width: clamp(500px, 60%, 800px);

  height: 100%;
  flex-direction: column;
  justify-content: center;
  background: ${props => props.theme.colors.neutral.light};
  align-items: center;
  left: 0;
  border-radius: 6px;
  box-shadow: ${props => props.theme.others.defaultBoxShadow};
  transition: transform 0.35s ease;
  pointer-events: none;

  transform: translateY(85%);
`

export const MarkdownInput = styled.textarea`
  width: 100%;
  height: 100%;
  background: inherit;
  border: none;
  padding: 25px;
  border-radius: inherit;
  color: ${props => props.theme.colors.neutral.dark};
  font-size: ${props => props.theme.sizes.Large.fontSize};
  outline: none;
  transition: all 0.25s ease-in-out;
  resize: none;
  &:disabled {
    cursor: not-allowed;
  }
`

export const MarkdownInputTopBar = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  border-bottom: 2px solid ${props => props.theme.colors.tertiary.light};
  padding: 15px;
`

export const MarkdownInputTopBarAction = styled.div`
  display: flex;
  padding: 8px 10px;
  background: ${props => props.theme.colors.neutral.light};
  color: ${props => props.theme.colors.neutral.dark};
  border: 2px solid rgba(0, 0, 0, 0.25);
  border-radius: 2px;
  cursor: pointer;
  transition: all 0.25s ease;
  margin: 0 5px;

  &:hover {
    background: rgba(0, 0, 0, 0.25);
  }

  svg {
    width: 18px;
    height: 18px;
  }
`

export const MarkdownInputTopBarDropdown = styled.div`
  top: 0;
  left: 0;
  position: absolute;
  width: 25%;
  border-radius: 4px;
  color: ${props => props.theme.colors.neutral.dark};
  background: ${props => props.theme.colors.neutral.light};
  box-shadow: ${props => props.theme.others.defaultBoxShadow};
  overflow: hidden;
  transition: all 0.25s ease;
  pointer-events: none;
  transform: translateY(-75%);
  opacity: 0;
`

export const MarkdownInputTopBarDropdownAction = styled.div`
  height: 100%;
  width: 100%;
  padding: 20px 15px;
  transition: background 0.25s ease;
  cursor: pointer;
  user-select: none;

  &:hover {
    background: rgba(0, 0, 0, 0.1);
  }
`

export const MarkdownInputTopBarButtonSubmit = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 600;
`
