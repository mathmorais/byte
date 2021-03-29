import styled from 'styled-components'

export const ArticleGrid = styled.section`
  display: grid;
  grid-auto-flow: row;
  grid-auto-rows: auto;
  grid-template-columns: repeat(auto-fit, minmax(200px, 340px));
  gap: 50px;
  justify-content: center;
  padding: 25px 0;
`
