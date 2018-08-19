import React from 'react'
import GithubIcon from './GithubIcon'

class Footer extends React.Component {
  render() {
    const style = {
      root: {
        marginTop: -24,
        padding: '80px 40px',
        background: 'beige',
        display: 'flex',
        justifyContent: 'space-evenly',
        color: 'rgb(128, 122, 132)',
      },
      block: {
        margin: 0,
      },
      heading: {
        marginTop: 0,
      },
      iconLink: {
        textDecoration: 'none',
        color: 'rgb(128, 122, 132)',
        width: 60,
        display: 'inline-block',
        textAlign: 'center',
      },
      iconLinkText: {
        display: 'block',
      },
    }

    return (
      <footer style={style.root}>
        <div style={style.block}>
          <h3 style={style.heading}>Words from the creator</h3>
          Hi!<br />
          I'm Christoffer N. Aa. Thondrup<br />
          Thanks for visiting
        </div>
        <div style={style.block}>
          <a
            href="https://github.com/therealice/beansprouty"
            alt="Github"
            style={style.iconLink}
          >
            <GithubIcon />
            <span style={style.iconLinkText}>Code on Github</span>
          </a>
        </div>
      </footer>
    )
  }
}

export default Footer
