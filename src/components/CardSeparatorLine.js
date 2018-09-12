import React, { Component } from 'react'
import styled from 'styled-components'

const Image = styled.img`
  display: block;
  margin: 0 auto;
  width: 1px;
  height: ${props => props.height};
`;

class CardSeparatorLine extends Component {
  render() {
    const { height } = this.props
    return <Image src="svg/line.svg" height={height} />
  }
}

export default CardSeparatorLine
