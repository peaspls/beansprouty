import React from 'react'
import Link from 'gatsby-link'

class Navigator extends React.Component {
  render() {
    const { previous, next } = this.props.pathContext

    return (
    <ul
        style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        listStyle: 'none',
        padding: 0,
        margin: '0 30px 20px',
        }}
    >
        {previous && (
        <li>
            <Link to={previous.fields.slug} rel="prev">
            ← {previous.frontmatter.title}
            </Link>
        </li>
        )}

        {next && (
        <li>
            <Link to={next.fields.slug} rel="next">
            {next.frontmatter.title} →
            </Link>
        </li>
        )}
    </ul>
    )
  }
}

export default Navigator
