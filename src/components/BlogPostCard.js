import React, { Component } from 'react'
import Card from './Card'
import CardHeader from './CardHeader'
import CardContent from './CardContent'
import Link from 'gatsby-link'
import Img from 'gatsby-image'

class BlogPostCard extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { slug, title, date, excerpt, featuredImage } = this.props

    const style = {
      root: {
        margin: '0 10px',
      },
    }

    return (
      <div style={style.root}>
        <Card>
          <Link to={slug}>
            <Img style={style.img} sizes={featuredImage.childImageSharp.sizes} />
          </Link>
          <CardContent>
            <CardHeader title={title} subheader={date} />
            {excerpt}
          </CardContent>
        </Card>
      </div>
    )
  }
}

export default BlogPostCard
