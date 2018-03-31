import { injectGlobal } from 'styled-components'
import { IosevkaRegular, IosevkaLight, IosevkaBold } from './fonts'

injectGlobal`
  @font-face {
    font-family: "Iosevka";
    src: url(${IosevkaRegular}) format("woff");

    font-style: normal;
    font-weight: 400;
  }

  @font-face {
    font-family: "Iosevka";
    src: url(${IosevkaBold}) format("woff");

    font-style: normal;
    font-weight: 600;
  }

  @font-face {
    font-family: "Iosevka";
    src: local(${IosevkaLight}) format("woff");

    font-style: normal;
    font-weight: 300;
  }

  body {
    padding: 0;
    margin: 0;
    font-family: 'Iosevka';
    color: #fff;
    background-color: #000;
  }

  a {
    color: #fff;
  }

  *,
  *:after,
  *:before {
    box-sizing: border-box;
  }
`

const theme = {
  palette: {},

  fonts: {
    primary: 'Iosevka, Liberation Mono, Menlo, Courier, monospace'
  },

  sizes: {}
}

export default theme
