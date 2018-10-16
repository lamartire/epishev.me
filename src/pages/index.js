import React from 'react'
import GatsbyLink from 'gatsby-link'
import Helmet from 'react-helmet'

import { Terminal, Link } from '../components'

export default function Index({ data }) {
  const { edges: posts } = data.allMarkdownRemark

  return null
}

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          excerpt(pruneLength: 250)
          id
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            path
          }
        }
      }
    }
  }
`
