import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import { Stub } from '../components'
import '../less/main.less'

export default class Template extends React.Component {
  static propTypes = {
    children: PropTypes.func
  }

  render() {
    const { location } = this.props
    const isRoot = location.pathname === '/'

    return (
      <React.Fragment>
        <Helmet
          title="Konstantin Epishev"
          meta={[
            { name: 'description', content: "lamartire's presonal site." },
            {
              name: 'keywords',
              content:
                'portfolio, lamartire, epishev, konstantin epishev, developer, javascript, frontend'
            }
          ]}
        />
        <Stub />
      </React.Fragment>
    )
  }
}
