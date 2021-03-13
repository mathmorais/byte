import styled from 'styled-components'

export const SectionTitle = styled.div`
  display: flex;
  width: fit-content;
  align-self: center;
  position: relative;
  margin-bottom: 5rem;

  h1 {
    font-weight: light;
  }

  &::after {
    content: '';
    left: 0;
    bottom: -5px;
    position: absolute;
    width: 100%;
    height: 2px;

    transform: scaleX(1.3);
    background: ${props => props.theme.colors.primary.light};
  }
`
