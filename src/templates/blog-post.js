import React from 'react'
import Helmet from 'react-helmet'

import Link from '../components/Link'
import Tags from '../components/Tags'

export default function Template({ data, pathContext }) {
  const { markdownRemark: post } = data
  const { next, prev } = pathContext
  return (
    <div className="blog-post-container">
      <Helmet title={`Gatsby Blog - ${post.frontmatter.title}`} />
      <div className="blog-post">
        <Tags list={post.frontmatter.tags || []} />
        <h1 className="title">{post.frontmatter.title}</h1>
        <h2 className="date">{post.frontmatter.date}</h2>
        <div
          className="blog-post-content"
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
        <div className="navigation">
          {prev && (
            <Link className="link prev" to={prev.frontmatter.path}>
              {prev.frontmatter.title}
            </Link>
          )}
          {next && (
            <Link className="link next" to={next.frontmatter.path}>
              {next.frontmatter.title}
            </Link>
          )}
        </div>
      </div>
    </div>
  )
}

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        tags
        title
      }
    }
  }
`
