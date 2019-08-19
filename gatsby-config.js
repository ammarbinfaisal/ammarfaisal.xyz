module.exports = {
  siteMetadata: {
    title: "Malik Ammar Faisal",
    description: "Ammar's website",
    siteUrl: "https://ammarfaisal.xyz"
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-sass',
      options: {
        includePaths: ['src/components/all.sass'],
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/projects`,
        name: 'projects',
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Malik Ammar Faisal`,
        short_name: `Ammar`,
        start_url: `/`,
        background_color: `#1e1e1e`,
        theme_color: `#1e1e1e`,
        // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
        // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
        display: `standalone`,
        icon: `src/img/icon512.png`, // This path is relative to the root of the site.
      },
    },
    "gatsby-transformer-remark",
    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        color: `#f1e1e0`,
        showSpinner: true,
      },
    },
    {
      resolve: 'gatsby-plugin-netlify-cms',
      options: {
        modulePath: `${__dirname}/src/cms/cms.js`,
      },
    },
    {
      resolve: 'gatsby-plugin-purgecss', // purges all unused/unreferenced css rules
      options: {
        develop: true, // Activates purging in npm run develop
        purgeOnly: ['src/components/*/*.sass'],
      },
    },
    'gatsby-plugin-offline',
    'gatsby-plugin-sitemap',
    'gatsby-plugin-netlify', // make sure to keep it last in the array
  ],
}
