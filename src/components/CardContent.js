import React, { Component } from 'react'

class CardContent extends Component {
  render() {
    const { children } = this.props

    const style = {
      root: {
        padding: '0 30px 30px'
      },
    }
    return (
      <div style={style.root}>
        {children}
      </div>
    )
  }
}

export default CardContent
