import React from 'react'
import Helmet from 'react-helmet'
import get from 'lodash/get'
import Footer from '../components/Footer'
import BlogPost from '../components/BlogPost'

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const siteTitle = get(this.props, 'data.site.siteMetadata.title')
    const title = post.frontmatter.title || siteTitle
    const date = post.frontmatter.date

    return (
      <div>
        <Helmet title={title} />
        <BlogPost post={post} title={title} date={date} />
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
          childImageSharp {
            sizes(maxWidth: 630) {
              ...GatsbyImageSharpSizes
            }
          }
        }
      }
    }
  }
`
