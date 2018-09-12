import React, { Component } from 'react'
import moment from 'moment'
import styled from 'styled-components'

const Wrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 55px;
  height: 55px;
  padding: 0;
  z-index: 1;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background: rgb(184, 208, 120, 0.95);
  color: #fff;
  border-top-left-radius: 0;
  border-bottom-right-radius: 20px;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 6px 7px -4px,
    rgba(0, 0, 0, 0.14) 0px 11px 15px 1px, rgba(0, 0, 0, 0.12) 0px 4px 20px 3px;
`

const Day = styled.div`
  font-size: 15;
  font-weight: 400;
`

const Month = styled.div`
  font-size: 12px;
  font-weight: 300;
  text-transform: uppercase;
`

class CardDate extends Component {
  render() {
    const { date } = this.props

    const day = moment(date).format('D')
    const month = moment(date).format('MMM')

    return (
      <Wrapper>
        <Day>{day}</Day>
        <Month>{month}</Month>
      </Wrapper>
    )
  }
}

export default CardDate
