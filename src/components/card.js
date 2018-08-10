import React, { Component } from 'react';

class Card extends Component {
    render() {
        const { children } = this.props

        return (
            <div style={{
                overflow: 'hidden',
                boxShadow: '0px 6px 7px -4px rgba(0, 0, 0, 0.2), 0px 11px 15px 1px rgba(0, 0, 0, 0.14), 0px 4px 20px 3px rgba(0, 0, 0, 0.12)',
                borderRadius: 4,
                backgroundColor: '#fff',
                padding: '16px',
                maxWidth: 500, 
                margin: 'auto'
            }}>
                {children}
            </div>
        );
    }
}


export default Card;