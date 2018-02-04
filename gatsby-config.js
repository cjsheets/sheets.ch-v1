'use strict';

module.exports = {
  siteMetadata: {
    title: 'Chad Sheets Homepage',
    siteUrl: 'https://sheets.ch',
    rssFeedTitle: 'Chad Sheets',
    rssFeedDescription: 'Chad Sheets Homepage',
  },
  mapping: {
    'MarkdownRemark.frontmatter.author': 'AuthorJson',
  },
  
  plugins: [
    // Expose `/data` to graphQL layer
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `${__dirname}/content`
      }
    },

    // Parse all markdown files (each plugin add/parse some data into graphQL layer)
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 690,
              backgroundColor: `#f7f0eb`
            }
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-autolink-headers`
        ]
      }
    },

    // Parse all images files
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,

    // Parse JSON files
    `gatsby-transformer-json`,

    // Add typescript stack into webpack
    `gatsby-plugin-typescript`,

    // Setup SASS for CSS modules
    `gatsby-plugin-typescript-scss-modules`,

    // This plugin takes your configuration and generates a
    // web manifest file so your website can be added to your
    // homescreen on Android.
    /* eslint-disable camelcase */
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Chad Sheets Homepage`,
        short_name: `Chads Home`,
        start_url: `/`,
        background_color: `#f7f7f7`,
        theme_color: `#0e82d0`,
        display: `minimal-ui`
      }
    },
    /* eslint-enable camelcase */

    // ToDo: decide if this is a good idea
    // This plugin generates a service worker and AppShell
    // html file so the site works offline and is otherwise
    // resistant to bad networks. Works with almost any
    // site!
    //`gatsby-plugin-offline`
  ]
};
