import React from 'react'
import Link from 'gatsby-link'
import Img from 'gatsby-image'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classnames from 'classnames';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import red from '@material-ui/core/colors/red';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';

const styles = theme => ({
  card: {
    maxWidth: 400,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  actions: {
    display: 'flex',
  },
  expand: {
    transform: 'rotate(0deg)',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
    marginLeft: 'auto',
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
});

class ArticleCard extends React.Component {
  render() {
    const { classes, slug, title, date, excerpt, featuredImage } = this.props;
    const avatar = title.charAt(0)

    return (
      <div style={{ margin: '0 10px'}}>
        <Card className={classes.card} style={{ margin: 'auto', maxWidth: 500}}>
          <CardHeader
            avatar={
              <Avatar aria-label="Place" className={classes.avatar}>
                {avatar}
              </Avatar>
            }
            title={title}
            subheader={date}
          />
          <Link to={slug}>
            <Img sizes={featuredImage.childImageSharp.sizes} />
          </Link>
          <CardContent>
            <Typography component="p">
              {excerpt}
            </Typography>
          </CardContent>
        </Card>
      </div>
    );
  }
}

ArticleCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ArticleCard);