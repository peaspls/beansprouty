import React from 'react'

// Import typefaces
import 'typeface-montserrat'
import 'typeface-merriweather'

import profilePic from './profile-pic.jpg'
import { rhythm } from '../utils/typography'

class Bio extends React.Component {
  render() {
    return (
      <div
        style={{
          display: 'flex',
          marginBottom: rhythm(2.5),
        }}
      >
        <img
          src={profilePic}
          alt={`Christoffer N. Aa. Thondrup`}
          style={{
            marginRight: rhythm(1 / 2),
            marginBottom: 0,
            width: rhythm(2),
            height: rhythm(2),
            borderRadius: 15
          }}
        />
        <p>
          Written by <strong>Christoffer N. Aa. Thondrup</strong>, 
          a guy who enjoys eating good food and seeing new places.
        </p>
      </div>
    )
  }
}

export default Bio
