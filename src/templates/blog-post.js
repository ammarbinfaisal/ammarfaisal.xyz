// import React from 'react'
// import PropTypes from 'prop-types'
// import { kebabCase } from 'lodash'
// import Helmet from 'react-helmet'
// import { graphql, Link } from 'gatsby'
// import Layout from '../components/Layout'
// import Content, { HTMLContent } from '../components/Content'
// import Disqus from 'disqus-react'
// import Share from '../components/Share'

// export const BlogPostTemplate = ({
//   content,
//   contentComponent,
//   description,
//   tags,
//   title,
//   helmet,
// }) => {
//   const PostContent = contentComponent || Content
//   const disqusShortname = 'anushkaa-netlify-com'
//   const disqusConfig = {
//     url: 'http://anushkaa.netlify.com/blog/',
//     identifier: title,
//     title: title,
//   }

//   return (
//     <section className="section">
//       {helmet || ''}
//       <div className="container">
//         <div className="columns">
//           <div className="column is-10 is-offset-1 wysiwyg letter-spacing-pt9 crimson-text">
//             <h2 className="title is-size-3-mobile is-size-2-desktop has-text-weight-bold is-bold-light">
//               {title}
//             </h2>
//             <p className="is-size-6">{description}</p>
//             <PostContent className="is-size-6" content={content} />
//             {tags && tags.length ? (
//               <div style={{ marginTop: `4rem` }}>
//                 <h4 className="is-size-4">Tags</h4>
//                 <ul className="taglist is-size-6">
//                   {tags.map(tag => (
//                     <li key={tag + `tag`} className="tag-name">
//                       <Link to={`/tags/${kebabCase(tag)}/`}>{tag}</Link>
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             ) : null}
//             <Share
//               postTitle={title}
//               url={typeof window !== 'undefined' ? window.location.href : ''}
//             />
//           </div>
//         </div>
//         <div className="columns">
//           <div className="column is-10 is-offset-1" id="disqus">
//             <Disqus.DiscussionEmbed
//               shortname={disqusShortname}
//               config={disqusConfig}
//             />
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }

// BlogPostTemplate.propTypes = {
//   content: PropTypes.node.isRequired,
//   contentComponent: PropTypes.func,
//   description: PropTypes.string,
//   title: PropTypes.string,
//   helmet: PropTypes.object,
// }

// const BlogPost = ({ data }) => {
//   const { markdownRemark: post } = data

//   return (
//     <Layout>
//       <BlogPostTemplate
//         content={post.html}
//         contentComponent={HTMLContent}
//         description={post.frontmatter.description}
//         helmet={
//           <Helmet titleTemplate="%s | Blog">
//             <title>{`${post.frontmatter.title}`}</title>
//             <meta
//               name="description"
//               content={`${post.frontmatter.description}`}
//             />
//           </Helmet>
//         }
//         tags={post.frontmatter.tags}
//         title={post.frontmatter.title}
//       />
//     </Layout>
//   )
// }

// BlogPost.propTypes = {
//   data: PropTypes.shape({
//     markdownRemark: PropTypes.object,
//   }),
// }

// export default BlogPost

// export const pageQuery = graphql`
//   query BlogPostByID($id: String!) {
//     allMarkdownRemark(id: { eq: $id }) {
//       id
//       html
//       frontmatter {
//         date(formatString: "MMMM DD, YYYY")
//         title
//         description
//         tags
//       }
//     }
//   }
// `
