import React from 'react'
import Link from 'gatsby-link'

import { rhythm, scale } from '../utils/typography'
import './styles.css';

class Template extends React.Component {
  render() {
    const { location, children } = this.props
    let header

    let rootPath = `/`
    if (typeof __PREFIX_PATHS__ !== `undefined` && __PREFIX_PATHS__) {
      rootPath = __PATH_PREFIX__ + `/`
    }

    const subtitle = `Listen to your heart`

    if (location.pathname === rootPath) {
      header = (
        <h1
          style={{
            ...scale(1.1),
            marginBottom: 0,
            marginTop: 0,
            display: 'flex',
            flexDirection: 'column',
            height: '100vh',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'relative',
            color: 'white',
            background: 'linear-gradient(0deg, #ffffff 10%,#49a4ff 90%)'
          }}
        >
          <Link
            style={{
              boxShadow: 'none',
              textDecoration: 'none',
              color: 'inherit',
            }}
            to={'/'}
          >
            Beansprouty
          </Link>
          <blockquote>{subtitle}</blockquote>
          <img src="/icons/sprout.svg" 
              style={{
                width: 48,
                margin: 0,
                position: 'absolute',
                bottom: 0
              }}
            />
        </h1>
      )
    } else {
      header = (
        <h3
          style={{
            fontFamily: 'Montserrat, sans-serif',
            marginTop: 0,
            marginLeft: 'auto',
            marginRight: 'auto',
            maxWidth: rhythm(24),
            padding: `0 ${rhythm(3 / 4)}`,
          }}
        >
          <Link
            style={{
              boxShadow: 'none',
              textDecoration: 'none',
              color: 'inherit',
            }}
            to={'/'}
          >
            <img src="/icons/sprout.svg" 
              style={{
                width: 32,
                margin: 0
              }}
            />
            Beansprouty
          </Link>
          <blockquote>{subtitle}</blockquote>
        </h3>
      )
    }
    return (
      <div
        style={{

        }}
      >
        {header}
        <div
          style={{
            marginLeft: 'auto',
            marginRight: 'auto',
            maxWidth: rhythm(24),
            padding: `0 ${rhythm(3 / 4)}`,
          }}
        >
          {children()}
        </div>
        <footer
          style={{
            marginTop: '-16px',
            padding: '60px 60px',
            textAlign: 'center',
            background: '#B8D078'
          }}
        >
          <p>
            Icons made by <a href="http://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a>
          </p>
          <p>
            Created by Christoffer N. Aa. Thondrup.
            Code available on <a href="https://github.com/therealice/beansprouty">Github</a>
          </p>
        </footer>
      </div>
    )
  }
}

export default Template
