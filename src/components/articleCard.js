import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Link from 'gatsby-link'
import Img from 'gatsby-image'

class ArticleCard extends Component {
  render() {
    const { slug, title, date, excerpt, featuredImage } = this.props;

    return (
      <div style={{ margin: '0 10px'}}>
        <Card style={{maxWidth: 500, margin: 'auto'}}>
          <CardHeader
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

export default ArticleCard;