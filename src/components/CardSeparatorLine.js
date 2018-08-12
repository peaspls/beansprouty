import React, { Component } from 'react';

class CardSeparatorLine extends Component {
    render() {
        const { height } = this.props;

        const style = {
            display: 'block',
            margin: '0 auto',
            height: height
        };

        return (
            <img src="svg/line.svg" 
                style={style}
            /> 
        );
    }
}

export default CardSeparatorLine;