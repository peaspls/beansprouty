import React, { Component } from 'react'

class CardSeparatorLine extends Component {
  render() {
    const { height } = this.props

    const style = {
      root: {
        display: 'block',
        margin: '0 auto',
        width: 1,
        height: height,
      },
    }

    return <img src="svg/line.svg" style={style.root} />
  }
}

export default CardSeparatorLine
