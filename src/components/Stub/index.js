import React from 'react'
import ReactMarkdown from 'react-markdown'

export default class Stub extends React.Component {
  render() {
    return (
      <section className="stub">
        <section className="stub__content">
          <a class="stub__link" href="mailto:lamartire@gmail.com">
            🐈 && (⌨ || 🖌)
          </a>
          Trying to making awesome since 2016. Created with ❤️ by{' '}
          <a href="https://github.com/lamartire" target="_blank">
            lamartire
          </a>
          <ReactMarkdown>_* in current competence_</ReactMarkdown>
        </section>
      </section>
    )
  }
}
