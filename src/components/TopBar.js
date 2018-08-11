import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Close from '@material-ui/icons/Close';
import ArrowForward from '@material-ui/icons/ArrowForward';
import ArrowBack from '@material-ui/icons/ArrowBack';
import Link from 'gatsby-link';

const styles = {
    root: {
      flexGrow: 1,
    },
    flex: {
      flexGrow: 1,
    },
    menuButton: {
      marginLeft: -12,
      marginRight: 20,
    },
};

class TopBar extends Component {
    render() {
        const { classes, title } = this.props;
        const { previous, next } = this.props.pathContext;
        
        return (
            <div className={classes.root}>
                <AppBar position="static" color="default">
                    <Toolbar>
                        <Link to='/' rel="home">
                            <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
                                <Close />
                            </IconButton>
                        </Link>
                        <Typography variant="title" color="inherit" className={classes.flex}>
                            {title}
                        </Typography>
                        { previous && (
                            <Link to={previous.fields.slug} rel="prev">
                                <IconButton color="inherit" aria-label="Menu">
                                    <ArrowBack />
                                </IconButton>
                            </Link>
                        )}
                        { next && (
                            <Link to={next.fields.slug} rel="prev">
                                <IconButton color="inherit" aria-label="Menu">
                                    <ArrowForward />
                                </IconButton>
                            </Link>
                        )}
                    </Toolbar>
                </AppBar>
            </div> 
        );
    }
}

TopBar.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TopBar);