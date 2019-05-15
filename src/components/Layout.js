import React from 'react'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import ReactGA from 'react-ga'

import "./all.sass"

class TemplateWrapper extends React.PureComponent {
  componentDidMount() {
    ReactGA.initialize('UA-134084954-1')
    if (typeof window !== 'undefined')
      ReactGA.pageview(window.location.pathname + window.location.search)
  }
  render() {
    // eslint-disable-next-line
    const { children, id, className, props } = this.props;
    return (
      <StaticQuery
        query={graphql`
      query HeadingQuery {
        site {
          siteMetadata {
            title
            description
          }
        }
      }
    `}
        render={data => (
          <div>
            <Helmet>
              <html lang="en" />
              <title>{data.site.siteMetadata.title}</title>
              <meta
                name="description"
                content={data.site.siteMetadata.description}
              />

              <link
                rel="apple-touch-icon"
                sizes="180x180"
                href="/img/apple-touch-icon.png"
              />
              <link
                rel="icon"
                type="image/png"
                href="/img/favicon32.png"
                sizes="32x32"
              />
              <link
                rel="icon"
                type="image/png"
                href="/img/favicon16.png"
                sizes="16x16"
              />

              <link
                rel="mask-icon"
                href="/img/safari-pinned-tab.svg"
                color="#100e17"
              />
              <meta name="theme-color" content="#100e17" />
              <meta property="og:type" content="blog.blog" />
              <meta property="og:title" content={data.site.siteMetadata.title} />
              <meta property="og:url" content="/" />
              <meta property="og:image" content="/img/og-image.png" />
              <meta
                name="google-site-verification"
                content="3PgQy65GcHwMk_lG9WKryxZqRGZnguIfhAApLk8u7XE"
              />
              <link rel="preconnect" href="https://fonts.gstatic.com" />
              <link rel="preconnect" href="https://use.fontawesome.com" />
              <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.0/css/all.css" integrity="sha384-mzrmE5qonljUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7fWAU"
                crossorigin="anonymous" />
              <meta name="google-site-verification" content="g4-OB7RMEZVWLAdcYQXD5RnTH6U77E7tvwtwxFyI3tI" />
              <meta name="description" content="Malik Ammar Faisal" />
              <meta name="author" content="Malik Ammar Faisal" />
            </Helmet>
            <div id={id} className={className}>{children}</div>
          </div>
        )}
      />
    )
  }
}

export default TemplateWrapper
