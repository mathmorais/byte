import styled from 'styled-components'

export const MarkdownInputWrapper = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  width: 100%;
  bottom: 0;
  left: 0;
  height: 30%;
  padding: 35px 0;
  max-height: 300px;
  &:hover div {
    pointer-events: all;
    opacity: 1;
    transform: translateY(0);
  }
`

export const MarkdownInputContent = styled.div`
  display: flex;
  width: 40%;
  height: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  left: 0;
  overflow: hidden;
  border-radius: 6px;
  background: ${props => props.theme.colors.primary.light};
  box-shadow: ${props => props.theme.others.defaultBoxShadow};
  transition: transform 0.35s ease, opacity 0.35s ease;
  pointer-events: none;

  transform: translateY(100%);
  opacity: 0;
`

export const MarkdownInput = styled.textarea`
  width: 100%;
  height: 100%;
  background: inherit;

  color: ${props => props.theme.colors.neutral.light};
  border: none;
  padding: 25px;
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
  flex-direction: row;
  width: 100%;
  border: none;
  background: ${props => props.theme.colors.primary.darkest};
  padding: 15px;
`

export const MarkdownInputTopBarAction = styled.div`
  display: flex;
  padding: 6px 8px;
  border: 2px solid ${props => props.theme.colors.tertiary.light};
  color: ${props => props.theme.colors.tertiary.light};
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.25s ease;

  &:hover {
    color: ${props => props.theme.colors.neutral.dark};

    background: ${props => props.theme.colors.tertiary.light};
  }

  svg {
    width: 15px;
    height: 15px;
  }
`
