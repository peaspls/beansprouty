import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import Helmet from 'react-helmet'

import Img from 'gatsby-image'
import { rhythm } from '../utils/typography'
import { relative } from 'path';

class BlogIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const posts = get(this, 'props.data.allMarkdownRemark.edges')

    return (
      <div>
        <Helmet title={siteTitle} />
        {posts.map(({ node }) => {
          const title = get(node, 'frontmatter.title') || node.fields.slug
          return (         
            <Link key={node.fields.slug} style={{ boxShadow: 'none' }} to={node.fields.slug}
              style={{
                position: 'relative',
                display: 'block'
              }}
            >
              <div className='index-post'
                style={{
                  color: 'white',
                  position: 'absolute',
                  width: '100%',
                  bottom: 0,
                  zIndex: 1,
                  padding: 15,
                  background: 'rgba(0,0,0, 0.6)'
                }}
              >
                <h3
                  style={{
                    marginBottom: rhythm(1 / 4),
                    marginTop: 0
                  }}
                >
                  {title}
                </h3>
                <small
                  style={{
                    display: 'block',
                    marginBottom: rhythm(1),
                  }}
                >
                  {node.frontmatter.date}
                </small>
                <blockquote
                  style={{
                    marginBottom: 0,
                    color: '#ccc',
                    borderLeft: 0
                  }}
                >
                  <p dangerouslySetInnerHTML={{ __html: node.excerpt }} />
                </blockquote>
              </div>
              <Img sizes={node.frontmatter.featuredImage.childImageSharp.sizes} />
            </Link>
          )
        })}
      </div>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "DD MMMM, YYYY")
            title
            author
            featuredImage {
              childImageSharp{
                  sizes(maxWidth: 630) {
                      ...GatsbyImageSharpSizes
                  }
              }
            }
          }
        }
      }
    }
  }
`
