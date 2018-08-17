import React from 'react'
import GithubIcon from './GithubIcon'

class Footer extends React.Component {
    render() {
        return (
            <footer
              style={{
                marginTop: -24,
                padding: '80px 40px',
                background: 'beige',
                display: 'flex',
                justifyContent: 'space-evenly',
                color: 'rgb(128, 122, 132)'
              }}
            >
              <div style={{
                margin: 0
              }}>
                <h3 style={{
                  marginTop: 0
                }}>Words from the creator</h3>
                Hi!<br />
                I'm Christoffer N. Aa. Thondrup<br />
                Thanks for visiting
              </div>
              <div style={{
                margin: 0
              }}>
                <a href="https://github.com/therealice/beansprouty" alt="Github" style={{
                  textDecoration: 'none',
                  color: 'rgb(128, 122, 132)',
                  width: 60,
                  display: 'inline-block',
                  textAlign: 'center'
                }}>
                  <GithubIcon />
                  <span style={{
                    display: 'block'
                  }}>Code on Github</span>
                </a>
              </div>
            </footer>
        )  
    }
}

export default Footer