import { createGlobalStyle } from 'styled-components'

interface IGlobalProps {
  includesNextGrid?: boolean
}

const Global = createGlobalStyle<IGlobalProps>`
    * {
        padding: 0px;
        margin: 0px;
        box-sizing: border-box;
    }

    

    :root {
      font-size: 62.5%;
    }

    body {
      font-family: 'Roboto', sans-serif;
    }

    ${props => {
      return (
        props.includesNextGrid &&
        `
  #__next {
    display: grid;
    grid-template: 100vh / minmax(90px, 5%) 1fr;
  }`
      )
    }}
`

export default Global
