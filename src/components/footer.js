import React from 'react'

class Footer extends React.Component {
    render() {
        return (
            <footer
              style={{
                marginTop: '-24px',
                padding: '60px 60px',
                textAlign: 'center',
                background: '#B8D078'
              }}
            >
              <p>
                Icons made by Freepik from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a>
              </p>
              <p>
                Created by Christoffer N. Aa. Thondrup.
                Code available on <a href="https://github.com/therealice/beansprouty">Github</a>
              </p>
            </footer>
        )  
    }
}

export default Footer