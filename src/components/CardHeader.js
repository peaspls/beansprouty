import React, { Component } from 'react'

class CardHeader extends Component {
  render() {
    const { title, subheader, duration } = this.props

    const style = {
      root: {
        flex: '1 1 auto',
        margin: '20px 0'
      },
      title: {
        minWidth: 120,
        color: 'rgba(0, 0, 0, 0.87)',
        fontSize: '1.5rem',
        fontWeight: 300,
        fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
        lineHeight: '1.35417em',
        margin: 0,
        display: 'block',
      },
      subheader: {
        color: 'rgba(0, 0, 0, 0.54)',
        fontSize: '0.875rem',
        fontWeight: 300,
        fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
        lineHeight: '1.46429em',
        margin: 0,
        display: 'block',
      },
      durationText: {
        color: 'rgba(0, 0, 0, 0.54)',
        fontSize: '0.875rem',
        fontWeight: 300,
        fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
        lineHeight: '1.46429em',
        margin: 0,
      },
      duration: {
        background: 'rgb(234, 195, 129)',
        color: 'white',
        fontSize: '0.875rem',
        fontWeight: 300,
        fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
        borderRadius: '50%',
        width: 20,
        lineHeight: '20px',
        padding: 3,
        display: 'inline-block',
        textAlign: 'center',
      },
    }

    return (
      <div style={style.root}>
        <span style={style.title}>{title}</span>
        <span style={style.subheader}>{subheader}</span>
        <span style={style.durationText}>Duration: </span>
        <span style={style.duration}>{duration}</span>
        <span style={style.durationText}> days</span>
      </div>
    )
  }
}

export default CardHeader
