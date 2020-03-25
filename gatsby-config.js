/* eslint-disable @typescript-eslint/camelcase */
const path = require('path');

module.exports = {
  siteMetadata: {
    title: 'Land of Hop',
    description: 'Application with beer catalogue',
    author: 'Tomek Różalski',
  },
  plugins: [
    `gatsby-plugin-typescript`,
    {
      resolve: `gatsby-plugin-global-styles`,
      options: {
        pathToConfigModule: `src/utils/theme/GlobalStyleComponent`,
        props: {},
      },
    },
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        typekit: { id: 'hlt6lgk' },
      },
    },
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        displayName: false,
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Land of Hop`,
        short_name: `Land`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#222222`,
        display: `minimal-ui`,
        icon: `src/images/land-of-hop-icon.png`,
      },
    },
    {
      resolve: 'gatsby-plugin-root-import',
      options: {
        components: path.join(__dirname, 'src/components'),
        elements: path.join(__dirname, 'src/elements'),
        images: path.join(__dirname, 'src/images'),
        utils: path.join(__dirname, 'src/utils'),
      },
    },
    {
      resolve: `gatsby-plugin-intl`,
      options: {
        path: `${__dirname}/src/utils/dictionary`,
        languages: ['en', 'pl'],
        defaultLanguage: 'pl',
        redirect: true,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
