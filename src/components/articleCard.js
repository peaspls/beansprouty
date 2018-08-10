import React, { Component } from 'react';
import Card from './card';
import CardHeader from './cardHeader';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Link from 'gatsby-link'
import Img from 'gatsby-image'

class ArticleCard extends Component {
  render() {
    const { slug, title, date, excerpt, featuredImage } = this.props;

    return (
      <div style={{ margin: '0 10px'}}>
        <Card>
          <CardHeader title={title} subheader={date} />
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

export default ArticleCard;