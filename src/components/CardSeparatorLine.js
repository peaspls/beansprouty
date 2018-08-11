import React, { Component } from 'react';

class CardSeparatorLine extends Component {
    render() {
        return (
            <img src="svg/line.svg" 
                style={{
                    display: 'block',
                    margin: '0 auto',
                    height: 40
                }}
            /> 
        );
    }
}

export default CardSeparatorLine;