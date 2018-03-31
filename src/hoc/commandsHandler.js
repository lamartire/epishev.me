import React from 'react'
import { processCommand } from '../lib/commands'

export const commandsHandler = () => Component =>
  class extends React.Component {
    render() {
      return <Component processCommand={processCommand} {...this.props} />
    }
  }
