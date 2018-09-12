import React, { Component } from 'react'
import { injectGlobal } from 'styled-components'
import 'typeface-roboto'

injectGlobal`
  body {
    font-family: Roboto;
    margin: 0;
    line-height: 1.5;
  }
  figcaption {
    text-align: center;
    margin: 5px 0 30px;
  }
  blockquote {
    display: flex;
    margin-left: 0;
    padding-left: 1em;
  }
  blockquote::before {
    display: flex;
    content: "❞";
    width: 30px;
    height: 30px;
    font-size: 1.4em;
    background-color: orange;
    color: white;
    border-radius: 50%;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    padding: 0 8px;
    margin-right: 10px;
  }
  blockquote p {
    margin: 0;
  }
`

class Template extends Component {
  render() {
    const { children } = this.props

    return (
      <div>
        {children()}
      </div>
    )
  }
}

export default Template
