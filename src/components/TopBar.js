import React, { Component } from 'react'
import IconButton from '@material-ui/core/IconButton'
import ArrowBack from '@material-ui/icons/ArrowBack'
import Link from 'gatsby-link'
import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 3px solid beige;
`
const Title = styled.div`
  font-size: 1.4rem;
  color: #000;
`

const IconButton = styled.IconButton`
  margin: 5px 20px 5px 5px;
  color: #000;
`

class TopBar extends Component {
  render() {
    const { title } = this.props

    return (
      <Wrapper>
        <div>
          <Link to="/" rel="home">
            <IconButton color="inherit" aria-label="Menu">
              <ArrowBack />
            </IconButton>
          </Link>
        </div>
        <Title>{title}</Title>
      </Wrapper>
    )
  }
}

export default TopBar
