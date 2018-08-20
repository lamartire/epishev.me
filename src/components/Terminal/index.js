import React from 'react'
import ReactMarkdown from 'react-markdown'

import Contacts from '../Contacts'

export default class TerminalWrapper extends React.Component {
  render() {
    return (
      <section className="terminal">
        <ReactMarkdown className="terminal__text">
          Hello, I'm Konstantin Epishev, also you can know me as lamartire. I
          trying to make things.
        </ReactMarkdown>
        <ReactMarkdown className="terminal__text">
          In the near future I will publish here my CV and more info about me,
          but now you can find me in social networks and contact me with
          favorite way!
        </ReactMarkdown>
        <section className="terminal__contacts">
          <Contacts />
        </section>
      </section>
    )
  }
}
