import React, { Component } from 'react'

class CardHeader extends Component {
  render() {
    const { title, subheader } = this.props

    const style = {
      root: {
        flex: '1 1 auto',
        padding: 16,
      },
      title: {
        minWidth: 120,
        color: 'rgba(0, 0, 0, 0.87)',
        fontSize: '1.5rem',
        fontWeight: 400,
        fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
        lineHeight: '1.35417em',
        margin: 0,
        display: 'block',
      },
      subheader: {
        color: 'rgba(0, 0, 0, 0.54)',
        fontSize: '0.875rem',
        fontWeight: 400,
        fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
        lineHeight: '1.46429em',
        margin: 0,
        display: 'block',
      },
    }

    return (
      <div style={style.root}>
        <span style={style.title}>{title}</span>
        <span style={style.subheader}>{subheader}</span>
      </div>
    )
  }
}

export default CardHeader
