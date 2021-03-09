import { createGlobalStyle } from 'styled-components'

const Global = createGlobalStyle`
    * {
        padding: 0px;
        margin: 0px;
        box-sizing: border-box;
    }

    :root {
      font-size: 62.5%;
    }

    body {
      background: ${props => props.theme.colors.primary.light};
      font-family: 'Roboto', sans-serif;
    }
`

export default Global
