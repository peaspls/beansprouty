import React, { Component } from 'react';

class CardContent extends Component {
    render() {
        const { children } = this.props;
        
        return (
            <div style= {{
                padding: 16
            }}>
                <p>
                    {children}
                </p>
            </div>
        );
    }
}

export default CardContent;