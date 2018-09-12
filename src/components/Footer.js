import React from 'react'
import GithubIcon from './GithubIcon'
import styled from 'styled-components'

const Wrapper = styled.footer`
  margin-top: -24px;
  padding: 80px 40px;
  background: beige;
  display: flex;
  justify-content: space-evenly;
  color: rgb(128, 122, 132);
  font-weight: 300;
`

const Block = styled.div`
  margin: 0;
`

const Heading = styled.h3`
  margin-top: 0;
`

const Link = styled.a`
  text-decoration: none;
  color: rgb(128, 122, 132);
  width: 60px;
  display: inline-block;
  textAlign: center;
`

const Span = styled.span`
  display: block;
`

class Footer extends React.Component {
  render() {
    return (
      <Wrapper>
        <Block>
          <Heading>Words from the creator</Heading>
          Hi!<br />
          I'm Christoffer N. Aa. Thondrup<br />
          Thanks for visiting
        </Block>
        <Block>
          <Link href="https://github.com/therealice/beansprouty" alt="Github">
            <GithubIcon />
            <Span>Code on Github</Span>
          </Link>
        </Block>
      </Wrapper>
    )
  }
}

export default Footer
