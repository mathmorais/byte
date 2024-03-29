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

      @media only screen and (max-width: 768px) {
        font-size: 60.5%;
      }
    }


    body {
      font-family: 'Roboto', sans-serif;
    }

    ${props => {
      return (
        props.includesNextGrid &&
        `
      #__next {
        min-height: 100vh;
        display: grid;
        grid-template: minmax(100vh, 100%) / 90px 1fr;
      }`
      )
    }}
`

export default Global
