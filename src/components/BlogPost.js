import React, { Component } from 'react'
import Img from 'gatsby-image'

class BlogPost extends Component {
  render() {
    const { post, title, date, author, duration } = this.props

    const style = {
      root: {
        maxWidth: 800,
        margin: '0 auto',
      },
      post: {
        margin: 30,
        overflow: 'hidden',
        fontWeight: '300',
      },
      header: {
        marginBottom: '30px',
      },
      title: {
        fontSize: '2rem',
      },
      author: {
        color: 'rgba(0, 0, 0, 0.54)',
        fontSize: '0.875rem',
        fontWeight: 400,
        display: 'inline-block',
      },
      date: {
        color: 'rgba(0, 0, 0, 0.54)',
        fontSize: '0.875rem',
        fontWeight: 400,
        display: 'inline-block',
      },
      duration: {
        color: 'rgba(0, 0, 0, 0.54)',
        fontSize: '0.875rem',
        fontWeight: 400,
      }
    }

    return (
      <div style={style.root}>
        <Img sizes={post.frontmatter.featuredImage.childImageSharp.sizes} />
        <div style={style.post}>
          <div style={style.header}>
            <div style={style.title}>{title}</div>
            <div style={style.author}>By {author}</div>
            <div style={style.date}>, {date}</div>
            <div style={style.duration}>Duration: {duration} days</div>
          </div>
          <div
            dangerouslySetInnerHTML={{ __html: post.html }}
          />
        </div>
      </div>
    )
  }
}

export default BlogPost
