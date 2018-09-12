import React, { Component } from 'react'
import AnimatedCurve from './AnimatedCurve'
import styled, { css } from 'styled-components'

const Wrapper = styled.h1`
  margin-bottom: 0;
  margin-top: 0;
  display: flex;
  flex-direction: column;
  height: calc(100vh - 70px);
  justify-content: center;
  align-items: center;
  position: relative;
`

const Curve = styled.div`
  position: absolute;
  height: 95vh;
  top: 0;
  right: 0;
  left: 0;
  z-index: -1;
`

const Text = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 25px;
  box-sizing: border-box;
`

const Title = styled.div`
  color: #b8d078;
  font-weight: 300;
  font-size: 3rem;
`

const SubTitle = styled.div`
  font-size: 1.2rem;
  color: #807a84;
  padding-top: 15px;
  font-weight: 300;
`

const Image = styled.img`
  width: 48px;
  margin: 0;
  position: absolute;
  bottom: 0;
`
class Splash extends Component {
  render() {
    return (
      <Wrapper>
        <Curve>
          <AnimatedCurve fill="beige" />
        </Curve>
        <Text>
          <Title>Beansprouty</Title>
          <SubTitle>Vegan Traveling</SubTitle>
        </Text>
        <Image src="icons/freepik/sprout.svg" />
      </Wrapper>
    )
  }
}

export default Splash
