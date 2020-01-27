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
    // {
    //   resolve: `gatsby-plugin-manifest`,
    //   options: {
    //     name: `Malik Ammar Faisal`,
    //     short_name: `Ammar`,
    //     start_url: `/`,
    //     background_color: `#1e1e1e`,
    //     theme_color: `#1e1e1e`,
    //     display: `standalone`,
    //     icon: `src/img/icon512.png`,
    //   },
    // },
    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        color: `#f1e1e0`,
        showSpinner: true,
      },
    },
    {
      resolve: 'gatsby-plugin-purgecss',
      options: {
        develop: true,
        purgeOnly: ['src/components/*/*.sass'],
      },
    },
    'gatsby-plugin-offline',
    'gatsby-plugin-sitemap',
  ],
}
