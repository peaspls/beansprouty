import React, { Component } from 'react';

class Splash extends Component {
    render() {
        return (
            <h1
            style={{
              marginBottom: 0,
              marginTop: 0,
              display: 'flex',
              flexDirection: 'column',
              height: 'calc(100vh - 40px)',
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
                boxSizing: 'border-box'
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
            <img src="icons/freepik/sprout.svg" 
                style={{
                  width: 48,
                  margin: 0,
                  position: 'absolute',
                  bottom: 0
                }}
              />
          </h1>
        );
    }
}

export default Splash;