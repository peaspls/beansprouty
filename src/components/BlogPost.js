import React, { Component } from 'react'
import Img from 'gatsby-image'
import styled from 'styled-components'
import FacebookShare from './FacebookShare'
import moment from 'moment'

const Wrapper = styled.div`
  max-width: 800px;
  margin: 0 auto;
`

const Post = styled.div`
  margin: 30px;
  overflow: hidden;
  font-weight: 300;
`

const Header = styled.div`
  margin-bottom: 30px;
`

const Title = styled.div`
  font-size: 2rem;
`

const Info = styled.div`
  display: inline-block;
`

const Social = styled.div`
  float: right;
`

const Text = styled.div`
  color: rgba(0, 0, 0, 0.54);
  font-size: 0.875rem;
  font-weight: 400;
`

class BlogPost extends Component {
  render() {
    const { post, title, date, author, duration } = this.props

    const readableDate = moment(date).format('DD MMM YYYY')

    return (
      <Wrapper>
        <Img sizes={post.frontmatter.featuredImage.childImageSharp.sizes} />
        <Post>
          <Header>
            <Info>
              <Title>{title}</Title>
              <Text>By {author}</Text>
              <Text>{readableDate}</Text>
              <Text>Duration: {duration} days</Text>
            </Info>
            <Social>
              <FacebookShare />
            </Social> 
          </Header>
          <div dangerouslySetInnerHTML={{ __html: post.html }} />
        </Post>
      </Wrapper>
    )
  }
}

export default BlogPost
