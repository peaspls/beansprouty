import React, { Component } from 'react'
import get from 'lodash/get'
import BlogPostCard from '../components/BlogPostCard'
import CardSeparatorLine from '../components/CardSeparatorLine'
import styled from 'styled-components'

const Image = styled.img`
  width: 48px;
  display: block;
  margin: 0 auto;
`

const icons = [
  'bee',
  'bird',
  'chicken',
  'cow',
  'fish',
  'hen',
  'pig',
  'sheep',
  'turtle',
]

class BlogPostCards extends Component {
  render() {
    const { posts } = this.props

    return (
      <div>
        {posts.map(({ node }) => {
          const iconIndex = parseInt(Math.random() * icons.length)
          const icon = `icons/freepik/${icons[iconIndex]}.svg`
          const title = get(node, 'frontmatter.title') || node.fields.slug

          return (
            <div key={node.fields.slug}>
              <CardSeparatorLine height="70px" />
              <BlogPostCard
                slug={node.fields.slug}
                title={title}
                date={node.frontmatter.date}
                featuredImage={node.frontmatter.featuredImage}
                excerpt={node.excerpt}
                author={node.frontmatter.author}
                duration={node.frontmatter.duration}
              />
              <CardSeparatorLine height="30px" />
              <Image src={icon} />
            </div>
          )
        })}
      </div>
    )
  }
}

export default BlogPostCards
