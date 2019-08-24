import { polyfillSvg } from './blocks/icon'

window.onload = () => {
  // IE 10-11 svg sprites fallback
  polyfillSvg()
}
