import React, { Component } from 'react';
import get from 'lodash/get'
import ArticleCard from '../components/articleCard'

class ArticleCards extends Component {
    render() {
        const icons = ['bee', 'bird', 'chicken', 'cow', 'fish', 'hen', 'pig', 'sheep', 'turtle'];
        const { posts } = this.props;
        
        return (
            <div>
                { posts.map(({ node }) => {
                    const iconIndex = parseInt(Math.random() * icons.length);
                    const icon = `/icons/freepik/${icons[iconIndex]}.svg`;
                    const title = get(node, 'frontmatter.title') || node.fields.slug

                    return (
                        <div>
                            <img src="svg/line.svg" 
                                style={{
                                display: 'block',
                                margin: '0 auto'
                                }}
                            />   
                            <ArticleCard key={node.fields.slug}
                                slug={node.fields.slug} 
                                title={title} 
                                date={node.frontmatter.date} 
                                featuredImage={node.frontmatter.featuredImage} 
                                excerpt={node.excerpt} />
                            <img src="svg/line.svg" 
                                style={{
                                display: 'block',
                                margin: '0 auto'
                                }}
                            />
                            <img src={icon}
                                style={{
                                width: 48,
                                display: 'block',
                                margin: '0 auto'
                                }}
                            />
                        </div>
                    )
                }) }
            </div>
        );
    }
}

export default ArticleCards;
