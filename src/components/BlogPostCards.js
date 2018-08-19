import React, { Component } from 'react'
import get from 'lodash/get'
import BlogPostCard from '../components/BlogPostCard'
import CardSeparatorLine from '../components/CardSeparatorLine'

class BlogPostCards extends Component {
  render() {
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
    const { posts } = this.props

    const style = {
      icon: {
        width: 48,
        display: 'block',
        margin: '0 auto',
      },
    }

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
              />
              <CardSeparatorLine height="30px" />
              <img src={icon} style={style.icon} />
            </div>
          )
        })}
      </div>
    )
  }
}

export default BlogPostCards
