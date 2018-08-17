import React from 'react'

import 'typeface-roboto';
import './styles.css';

class Template extends React.Component {
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
