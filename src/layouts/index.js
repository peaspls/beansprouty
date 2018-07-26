import React from 'react'
import Link from 'gatsby-link'
import Footer from '../components/footer'

import './styles.css';

class Template extends React.Component {
  render() {
    const { location, children } = this.props

    let rootPath = `/`
    if (typeof __PREFIX_PATHS__ !== `undefined` && __PREFIX_PATHS__) {
      rootPath = __PATH_PREFIX__ + `/`
    }

    const frontHeader = (
        <div>
          <h1
            style={{
              marginBottom: 0,
              marginTop: 0,
              display: 'flex',
              flexDirection: 'column',
              height: '95vh',
              justifyContent: 'center',
              alignItems: 'center',
              position: 'relative'
            }}
          >
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                width: '100%',
                padding: 25,
              }}>
                <span style={{
                  color: '#B8D078'
                }}>Beansprouty</span>
              <div style={{
                fontSize: '1.2rem',
                color: '#807a84',
                paddingTop: 15
              }}>Listen to your heart</div>
            </div>
            <img src="/icons/freepik/sprout.svg" 
                style={{
                  width: 48,
                  margin: 0,
                  position: 'absolute',
                  bottom: 0
                }}
              />
          </h1>
        </div>
      )

    const header = location.pathname === rootPath ? frontHeader : '';

    return (
      <div>
        {header}
        {children()}
        <Footer />
      </div>
    )
  }
}

export default Template
