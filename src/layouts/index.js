import React from 'react'
import PropTypes from 'prop-types'
import { ThemeProvider } from 'styled-components'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

import { Container } from '../components'

import theme from '../theme'

export default class Template extends React.Component {
  static propTypes = {
    children: PropTypes.func
  }

  render() {
    const { location } = this.props
    const isRoot = location.pathname === '/'

    return (
      <ThemeProvider theme={theme}>
        <div>
          <Helmet
            title="Gatsby Default (Blog) Starter"
            meta={[
              { name: 'description', content: 'Sample' },
              { name: 'keywords', content: 'sample, something' }
            ]}
          />
          <Container>{this.props.children()}</Container>
        </div>
      </ThemeProvider>
    )
  }
}
