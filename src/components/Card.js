import React, { Component } from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  overflow: hidden;
  box-shadow: 0px 6px 7px -4px rgba(0, 0, 0, 0.2),
    0px 11px 15px 1px rgba(0, 0, 0, 0.14), 0px 4px 20px 3px rgba(0, 0, 0, 0.12);
  border-radius: 4;
  background-color: #fff;
  padding: 0;
  max-width: 400px;
  margin: auto;
  position: relative;
`

class Card extends Component {
  render() {
    const { children } = this.props

    return <Wrapper>{children}</Wrapper>
  }
}

export default Card
