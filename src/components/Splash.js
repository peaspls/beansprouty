import React, { Component } from 'react';
import AnimatedCurve from './AnimatedCurve';

class Splash extends Component {
    render() {
        return (
          <h1 style={{
            marginBottom: 0,
            marginTop: 0,
            display: 'flex',
            flexDirection: 'column',
            height: 'calc(100vh - 40px)',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'relative'
          }}>
            <div style={{
              position: 'absolute',
              height: '95vh',
              top: 0,
              right: 0,
              left: 0,
              zIndex: -1
            }}>
              <AnimatedCurve fill="beige" />
            </div>
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              width: '100%',
              padding: 25,
              boxSizing: 'border-box'
            }}>
              <div style={{ color: '#B8D078' }}>Beansprouty</div>
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