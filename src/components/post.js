import React from 'react'
import Link from 'gatsby-link'
import Img from 'gatsby-image'

class Post extends React.Component {
    render() {
        const slug = this.props.slug
        const title = this.props.title
        const date = this.props.date
        const excerpt = this.props.excerpt
        const featuredImage = this.props.featuredImage
        const icon = this.props.icon

        return (   
            <div>   
              <img src="svg/line.svg" 
                style={{
                  display: 'block',
                  margin: '0 auto'
                }}
              />   
              <Link to={slug}
                style={{
                  position: 'relative',
                  display: 'block'
                }}
              >
                <Img sizes={featuredImage.childImageSharp.sizes} />
                <div
                  style={{
                    color: 'white',
                    position: 'absolute',
                    width: '100%',
                    bottom: 0,
                    zIndex: 1,
                    padding: 15,
                    background: 'rgba(0,0,0, 0.6)',
                    boxSizing: 'border-box'
                  }}
                >
                  <h3
                    style={{
                      marginTop: 0,
                      marginBottom: 10
                    }}
                  >
                    {title}
                  </h3>
                  <small>
                    {date}
                  </small>
                </div>
              </Link>
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
    }
}

export default Post