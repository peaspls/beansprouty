import React from 'react'
import Helmet from 'react-helmet'
import get from 'lodash/get'
import Img from 'gatsby-image'
import Navigator from '../components/navigator'
import Footer from '../components/footer'

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const siteTitle = get(this.props, 'data.site.siteMetadata.title')

    return (
      <div style={{
        maxWidth: 800,
        marginLeft: 'auto',
        marginRight: 'auto'
      }} >
        <Helmet title={`${post.frontmatter.title} | ${siteTitle}`} />
        <Navigator pathContext={this.props.pathContext} />
        <h1 style={{
          marginLeft: 30,
          marginRight: 30,
          marginBottom: 0
        }}>{post.frontmatter.title}</h1>
        <p
          style={{
            display: 'block',
            marginTop: 0,
            marginLeft: 30,
            marginRight: 30
          }}
        >
          By {post.frontmatter.author}, {post.frontmatter.date}
        </p>
        <Img sizes={post.frontmatter.featuredImage.childImageSharp.sizes} />
        <div dangerouslySetInnerHTML={{ __html: post.html }} style={{
          margin: 30,
          overflow: 'hidden'
        }}/>
        <Footer />
      </div>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
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
`
