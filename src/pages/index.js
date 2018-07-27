import React, { Component } from 'react';
import get from 'lodash/get'
import Helmet from 'react-helmet'
import Splash from '../components/splash'
import ArticleCards from '../components/articleCards'
import Footer from '../components/footer'

class BlogIndex extends Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const posts = get(this, 'props.data.allMarkdownRemark.edges')

    return (
      <div>
        <Splash />
        <Helmet title={siteTitle} />
        <ArticleCards posts={posts} />
        <Footer />
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