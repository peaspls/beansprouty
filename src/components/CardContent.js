import React, { Component } from 'react'

class CardContent extends Component {
  render() {
    const { children } = this.props

    const style = {
      root: {
        padding: 16,
      },
    }
    return (
      <div style={style.root}>
        <p>{children}</p>
      </div>
    )
  }
}

export default CardContent
