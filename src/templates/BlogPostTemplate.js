import React from 'react'
import Helmet from 'react-helmet'
import get from 'lodash/get'
import Footer from '../components/Footer'
import TopBar from '../components/TopBar'
import BlogPost from '../components/BlogPost'

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const siteTitle = get(this.props, 'data.site.siteMetadata.title')
    const title = post.frontmatter.title || siteTitle

    return (
      <div>
        <Helmet title={title} />
        <TopBar title={title} />
        <BlogPost post={post} />
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
