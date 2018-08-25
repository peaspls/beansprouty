import React, { Component } from 'react'
import AnimatedCurve from './AnimatedCurve'

class Splash extends Component {
  render() {
    const style = {
      root: {
        marginBottom: 0,
        marginTop: 0,
        display: 'flex',
        flexDirection: 'column',
        height: 'calc(100vh - 70px)',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
      },
      curve: {
        position: 'absolute',
        height: '95vh',
        top: 0,
        right: 0,
        left: 0,
        zIndex: -1,
      },
      text: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        padding: 25,
        boxSizing: 'border-box',
      },
      title: {
        color: '#B8D078',
        fontWeight: 300,
        fontSize: '3.0rem',
      },
      subtitle: {
        fontSize: '1.2rem',
        color: '#807a84',
        paddingTop: 15,
        fontWeight: 300,
      },
      icon: {
        width: 48,
        margin: 0,
        position: 'absolute',
        bottom: 0,
      },
    }

    return (
      <h1 style={style.root}>
        <div style={style.curve}>
          <AnimatedCurve fill="beige" />
        </div>
        <div style={style.text}>
          <div style={style.title}>Beansprouty</div>
          <div style={style.subtitle}>Vegan Traveling</div>
        </div>
        <img src="icons/freepik/sprout.svg" style={style.icon} />
      </h1>
    )
  }
}

export default Splash
