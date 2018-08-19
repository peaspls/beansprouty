import React, { Component } from 'react'
import Img from 'gatsby-image'

class BlogPost extends Component {
  render() {
    const { post } = this.props

    const style = {
      root: {
        maxWidth: 800,
        margin: '0 auto',
      },
      post: {
        margin: 30,
        overflow: 'hidden',
      },
    }

    return (
      <div style={style.root}>
        <Img sizes={post.frontmatter.featuredImage.childImageSharp.sizes} />
        <div
          dangerouslySetInnerHTML={{ __html: post.html }}
          style={style.post}
        />
      </div>
    )
  }
}

export default BlogPost
