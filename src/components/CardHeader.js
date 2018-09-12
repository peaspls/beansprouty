import React, { Component } from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  flex: 1 1 auto;
  margin: 20px 0;
`

const Title = styled.span`
  min-width: 120px;
  color: rgba(0, 0, 0, 0.87);
  font-size: 1.5rem;
  font-weight: 300;
  line-height: 1.35417em;
  margin: 0;
  display: block;
`

const TextBlock = styled.div`
  color: rgba(0, 0, 0, 0.54);
  font-size: 0.875rem;
  font-weight: 300;
  line-height: 1.46429em;
  margin: 0;
`

const Text = styled.span`
  color: rgba(0, 0, 0, 0.54);
  font-size: 0.875rem;
  font-weight: 300;
  line-height: 1.46429em;
  margin: 0;
`

const Duration = styled.span`
  background: rgb(234, 195, 129);
  color: white;
  font-size: 0.875rem;
  font-weight: 300;
  border-radius: 50%;
  width: 20px;
  line-height: 20px;
  padding: 3px;
  display: inline-block;
  text-align: center;
`

class CardHeader extends Component {
  render() {
    const { title, subheader, duration } = this.props

    return (
      <Wrapper>
        <Title>{title}</Title>
        <TextBlock>{subheader}</TextBlock>
        <Text>Duration: </Text>
        <Duration>{duration}</Duration>
        <Text> days</Text>
      </Wrapper>
    )
  }
}

export default CardHeader
