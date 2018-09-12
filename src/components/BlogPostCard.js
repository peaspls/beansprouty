import React, { Component } from 'react'
import Card from './Card'
import CardHeader from './CardHeader'
import CardContent from './CardContent'
import CardDate from './CardDate'
import Link from 'gatsby-link'
import Img from 'gatsby-image'
import styled from 'styled-components'

const Wrapper = styled.div`
  margin: 0 10px;
`

class BlogPostCard extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const {
      slug,
      title,
      date,
      excerpt,
      featuredImage,
      author,
      duration,
    } = this.props

    return (
      <Wrapper>
        <Card>
          <CardDate date={date} />
          <Link to={slug}>
            <Img sizes={featuredImage.childImageSharp.sizes} />
          </Link>
          <CardContent>
            <CardHeader
              title={title}
              subheader={`By ${author}`}
              duration={duration}
            />
            {excerpt}
          </CardContent>
        </Card>
      </Wrapper>
    )
  }
}

export default BlogPostCard
