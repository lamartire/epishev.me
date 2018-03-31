import styled from 'styled-components'
import { font } from 'styled-theme'

const TerminalInput = styled.input`
  outline: none;
  border: none;
  width: 100%;
  font-family: ${font('primary')};
  font-size: 16px;
  color: #fff;
  background-color: transparent;
`

export default TerminalInput
