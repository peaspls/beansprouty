import React, { Component } from 'react';
import Img from 'gatsby-image'

class BlogPost extends Component {
    render() {
        const { post } = this.props;

        return (
            <div className='blog-post-featured-image'>
                <Img sizes={post.frontmatter.featuredImage.childImageSharp.sizes} />
                <div dangerouslySetInnerHTML={{ __html: post.html }} style={{
                    margin: 30,
                    overflow: 'hidden'
                }}/>
            </div>
        );
    }
}

export default BlogPost;