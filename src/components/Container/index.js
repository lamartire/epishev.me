import React from 'react'

export default class Container extends React.Component {
  render() {
    return <section className="container">{this.props.children}</section>
  }
}
