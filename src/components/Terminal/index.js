import React from 'react'
import ReactMarkdown from 'react-markdown'

import { commandsHandler } from '../../hoc'

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
      <li className="terminal__line">
        <ReactMarkdown key={`terminal-history-${i}`} source={item} />
      </li>
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

    if (command === 'clear') {
      this.setState({
        ...this.state,
        history: [],
        command: ''
      })
    } else {
      const { processCommand } = this.props
      const commandResult = processCommand(command)

      this.setState({
        ...this.state,
        history: history.concat(commandResult),
        command: ''
      })
    }
  }

  render() {
    const { command } = this.state

    return (
      <section className="terminal">
        <ul className="terminal__output">{this.renderHistory()}</ul>
        <form className="terminal__form" onSubmit={this.onSubmitTerminalForm}>
          <span className="terminal__label">~ guest -></span>
          <input
            className="terminal__input"
            type="text"
            ref={el => (this.input = el)}
            value={command}
            onBlur={this.onBlurInput}
            onChange={this.onChangeInput}
          />
        </form>
      </section>
    )
  }
}
