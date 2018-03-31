import React from 'react'
import ReactMarkdown from 'react-markdown'
import styled from 'styled-components'

import { commandsHandler } from '../../hoc'
import { TerminalInput, TerminalOutput } from '../'

const Terminal = styled.section``
const TerminalForm = styled.form`
  display: flex;
  align-items: center;
`
const TerminalInputLabel = styled.span`
  flex: 0 0 auto;
  margin-right: 10px;
`
const TerminalInputWrapper = styled.div`
  flex: 1 1 auto;
`
const TerminalOutputWrapper = styled.section``

@commandsHandler()
export default class TerminalWrapper extends React.Component {
  constructor(props) {
    super(props)
    this.onBlurInput = this.onBlurInput.bind(this)
    this.onChangeInput = this.onChangeInput.bind(this)
    this.onSubmitTerminalForm = this.onSubmitTerminalForm.bind(this)
  }

  state = {
    command: '',
    history: [
      'Welcome to my personal site! My name is Konstantin, also you can find me by my nickname **lamartire**.',
      'Also, this site **under development**, but you can now check my idea and write me [feedback](mailto:lalamrtire@gmail.com).'
    ]
  }

  componentDidMount() {
    this.focusInput()
  }

  focusInput() {
    this.input.focus()
  }

  renderHistory() {
    const { history } = this.state

    return history.map((item, i) => (
      <ReactMarkdown key={`terminal-history-${i}`} source={item} />
    ))
  }

  onBlurInput() {
    this.focusInput()
  }

  onChangeInput(e) {
    this.setState({
      ...this.state,
      command: e.target.value
    })
  }

  onSubmitTerminalForm(e) {
    e.preventDefault()

    const { history, command } = this.state
    const { processCommand } = this.props
    const commandResult = processCommand(command)

    this.setState({
      ...this.state,
      history: history.concat(commandResult),
      command: ''
    })
  }

  render() {
    const { command } = this.state

    return (
      <Terminal>
        <TerminalOutputWrapper>
          <TerminalOutput>{this.renderHistory()}</TerminalOutput>
        </TerminalOutputWrapper>
        <TerminalForm onSubmit={this.onSubmitTerminalForm}>
          <TerminalInputLabel>~ guest -></TerminalInputLabel>
          <TerminalInputWrapper>
            <TerminalInput
              innerRef={el => (this.input = el)}
              value={command}
              onBlur={this.onBlurInput}
              onChange={this.onChangeInput}
            />
          </TerminalInputWrapper>
        </TerminalForm>
      </Terminal>
    )
  }
}
