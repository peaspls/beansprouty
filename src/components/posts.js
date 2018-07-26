import React, { Component } from 'react';
import get from 'lodash/get'
import Post from '../components/post'

class Posts extends Component {
    render() {
        const icons = ['bee', 'bird', 'chicken', 'cow', 'fish', 'hen', 'pig', 'sheep', 'turtle'];
        const posts = this.props.posts;
        
        return (
            <div>
                { posts.map(({ node }) => {
                    const iconIndex = parseInt(Math.random() * icons.length);
                    const icon = `/icons/freepik/${icons[iconIndex]}.svg`;
                    const title = get(node, 'frontmatter.title') || node.fields.slug

                    return (
                    <Post key={node.fields.slug}
                        icon={icon} 
                        slug={node.fields.slug} 
                        title={title} 
                        date={node.frontmatter.date} 
                        featuredImage={node.frontmatter.featuredImage} 
                        excerpt={node.excerpt} />
                    )
                }) }
            </div>
        );
    }
}

export default Posts;
