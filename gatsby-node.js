// const _ = require("lodash");
// const path = require("path");

// exports.createPages = ({ actions, graphql }) => {
//   const { createPage } = actions;

//   return graphql(`
//     {
//       allMarkdownRemark(limit: 1000) {
//         edges {
//           node {
//             id
//             frontmatter {
//               title
//               link
//               description
//               techUsed
//               source
//             }
//           }
//         }
//       }
//     }
//   `).then(result => {
//     if (result.errors) {
//       result.errors.forEach(e => console.error(e.toString()));
//       return Promise.reject(result.errors);
//     }

//     const projects = result.data.allMarkdownRemark.edges;
//     const projectsData = [];

//     projects.forEach(edge => {
//       const {
//         id,
//         frontmatter: { title, link, source, description, techUsed }
//       } = edge.node;
//       projectsData.push({ id, title, description, techUsed, link, source });
//     });

//     createPage({
//       path: "/projects",
//       component: path.resolve(`src/templates/projects.js`),
//       context: { projectsData }
//     });
//   });
// };
