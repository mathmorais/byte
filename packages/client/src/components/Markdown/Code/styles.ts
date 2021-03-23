import styled from 'styled-components'

export const MarkdownOutputCodeContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  overflow: hidden scroll;

  &::-webkit-scrollbar {
    width: 15px;
    padding: 5px;
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background: #434953;
    border: 4px solid rgba(0, 0, 0, 0);
    border-radius: 20px;
    background-clip: padding-box;

    &:hover {
      border: 3px solid rgba(0, 0, 0, 0);
    }
  }
`

export const MarkdownOutputCode = styled.code`
  max-height: 600px;
  border-radius: 6px;
  padding: 20px;
  overflow: hidden;
  font-size: ${props => props.theme.sizes.ExtraSmall.fontSize};
  border-radius: 0 0 6px 6px;
`

export const MarkdownOutputCodeTopbar = styled.div`
  display: flex;
  width: 100%;
  padding: 5px;
  background: #282c34;
  border-radius: 6px 6px 0 0;
`

export const MarkdownOutputCodeTopbarAction = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${props => props.theme.colors.neutral.light};
  border: none;
  padding: 12px 15px;
  border-radius: 6px;
  font-size: 20px;
  background: transparent;
  cursor: pointer;
  transition: background 0.25s ease;

  &:hover {
    background: rgba(0, 0, 0, 0.35);
  }
`
