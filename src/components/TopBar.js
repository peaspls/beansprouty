import React, { Component } from 'react'
import IconButton from '@material-ui/core/IconButton'
import ArrowBack from '@material-ui/icons/ArrowBack'
import Link from 'gatsby-link'

class TopBar extends Component {
  render() {
    const { title } = this.props

    const style = {
      root: {
        display: 'flex',
        alignItems: 'center',
        borderBottom: '3px solid beige',
      },
      iconButton: {
        margin: '5px 20px 5px 5px',
        color: '#000',
      },
      title: {
        fontSize: '1.4rem',
        color: '#000',
      },
    }

    return (
      <div style={style.root}>
        <div>
          <Link to="/" rel="home">
            <IconButton
              color="inherit"
              aria-label="Menu"
              style={style.iconButton}
            >
              <ArrowBack />
            </IconButton>
          </Link>
        </div>
        <div style={style.title}>{title}</div>
      </div>
    )
  }
}

export default TopBar
