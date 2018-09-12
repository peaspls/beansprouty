import React, { Component } from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  padding: 0 30px 30px;
  font-weight: 300;
`
class CardContent extends Component {
  render() {
    const { children } = this.props

    return <Wrapper>{children}</Wrapper>
  }
}

export default CardContent
