import React from 'react'
import Helmet from 'react-helmet'
import get from 'lodash/get'
import Footer from '../components/Footer'
import BlogPost from '../components/BlogPost'

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const siteMetadata = this.props.data.site.siteMetadata
    const title = post.frontmatter.title || siteMetadata.title
    const date = post.frontmatter.date
    const duration = post.frontmatter.duration
    const author = post.frontmatter.author
    const featureImage = siteMetadata.siteUrl + post.frontmatter.featuredImage.childImageSharp.sizes.src
    const url = siteMetadata.siteUrl + this.props.location.pathname

    return (
      <div>
        <Helmet>
          <title>{title}</title>
          <meta name="description" content={date} />
          <meta name="image" content={featureImage} />
          <meta property="og:url" content={url} />
          <meta property="og:type" content="article" />
          <meta property="og:title" content={title} />
          <meta property="og:description" content={date} />
          <meta property="og:image" content={featureImage} />
        </Helmet>
        <BlogPost
          post={post}
          title={title}
          date={date}
          author={author}
          duration={duration}
        />
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
        siteUrl
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        duration
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
