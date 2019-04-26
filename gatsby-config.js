module.exports = {
  siteMetadata: {
    title: "Malik Ammar Faisal",
    description: "Ammar's website",
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-sass',
      options: {
        includePaths: ['src/components/all.sass'],
      },
    },
    // {
      // keep as first gatsby-source-filesystem plugin for gatsby image support
    //   resolve: 'gatsby-source-filesystem',
    //   options: {
    //     path: `${__dirname}/static/img`,
    //     name: 'uploads',
    //   },
    // },
    // {
    //   resolve: 'gatsby-source-filesystem',
    //   options: {
    //     path: `${__dirname}/src/pages`,
    //     name: 'pages',
    //   },
    // },
    // {
    //   resolve: 'gatsby-source-filesystem',
    //   options: {
    //     path: `${__dirname}/src/img`,
    //     name: 'images',
    //   },
    // },
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
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-relative-images',
            options: {
              name: 'uploads',
            },
          },
          {
            resolve: 'gatsby-remark-images',
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 2048,
            },
          },
          {
            resolve: 'gatsby-remark-copy-linked-files',
            options: {
              destinationDir: 'static',
            },
          },
        ],
      },
    },
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
