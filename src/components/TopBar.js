import React, { Component } from 'react';
import IconButton from '@material-ui/core/IconButton';
import ArrowBack from '@material-ui/icons/ArrowBack';
import Link from 'gatsby-link';

class TopBar extends Component {
    render() {
        const { title } = this.props;
        
        return (
            <div style={{
                display: 'flex',
                alignItems: 'center',
                borderBottom: '3px solid beige'
            }}>
                <div>
                    <Link to='/' rel="home">
                        <IconButton color="inherit" aria-label="Menu" style={{
                            margin: '5px 20px 5px 5px',
                            color: '#000',
                        }}>
                            <ArrowBack />
                        </IconButton>
                    </Link>
                </div>
                <div style={{
                    fontSize: '1.4rem',
                    color: '#000',
                }}>
                    {title}
                </div>
            </div> 
        );
    }
}

export default TopBar;