import React, { Component } from 'react';

class cardHeader extends Component {
    render() {
        const { title, subheader } = this.props

        return (
            <div style={{
                flex: '1 1 auto',
                padding: 16
            }}>
                <span style={{
                    minWidth: 120,
                    color: 'rgba(0, 0, 0, 0.87)',
                    fontSize: '1.5rem',
                    fontWeight: 400,
                    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
                    lineHeight: '1.35417em',
                    margin: 0,
                    display: 'block'
                }}>{title}</span>
                <span style={{
                    color: 'rgba(0, 0, 0, 0.54)',
                    fontSize: '0.875rem',
                    fontWeight: 400,
                    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
                    lineHeight: '1.46429em',
                    margin: 0,
                    display: 'block'
                }}>{subheader}</span>
            </div>
        );
    }
}

export default cardHeader;