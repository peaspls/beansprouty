import React from 'react'
import Link from 'gatsby-link'

class Navigator extends React.Component {
  render() {
    const { previous, next } = this.props.pathContext

    return (
    <div style={{
        display: 'flex',
        height: 72,
        borderBottom: '1px solid rgb(218, 220, 224)'
    }}>
        <Link to='/' rel="home">
            <img src="/icons/freepik/sprout.svg" 
                style={{
                width: 48,
                margin: 0,
                bottom: 0,
                padding: 10,
                borderRight: '1px solid rgb(218, 220, 224)'
                }}
            />
        </Link>
        <ul
            style={{
                display: 'flex',
                width: '100%',
                justifyContent: 'space-between',
                listStyle: 'none',
                padding: '0 24px',
                margin: 0
            }}
        >
            <li style={{
                display: 'flex',
                alignItems: 'center'
            }}>
                { previous && (<Link to={previous.fields.slug} rel="prev">
                ← Older
                </Link>
                )}
            </li>

            <li style={{
                display: 'flex',
                alignItems: 'center'
            }}>
                {next && (<Link to={next.fields.slug} rel="next">
                Newer →
                </Link>
                )}
            </li>
        </ul>
    </div>
    )
  }
}

export default Navigator
