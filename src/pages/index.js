import React from 'react'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import Post from '../components/post'

class BlogIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const posts = get(this, 'props.data.allMarkdownRemark.edges')
    const icons = ['bee', 'bird', 'chicken', 'cow', 'fish', 'hen', 'pig', 'sheep', 'turtle'];

    return (
      <div className='posts' style={{
        maxWidth: 600,
        marginLeft: 'auto',
        marginRight: 'auto'
      }} >
        <Helmet title={siteTitle} />
        {posts.map(({ node }) => {
          const iconIndex = parseInt(Math.random() * icons.length);
          const icon = `/icons/freepik/${icons[iconIndex]}.svg`;
          const title = get(node, 'frontmatter.title') || node.fields.slug

          return (
            <Post icon={icon} 
                  slug={node.fields.slug} 
                  title={title} 
                  date={node.frontmatter.date} 
                  featuredImage={node.frontmatter.featuredImage} 
                  excerpt={node.excerpt} />
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
