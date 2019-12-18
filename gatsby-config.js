const path = require('path');
const AWS = require('aws-sdk');

require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

AWS.config.update({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
});

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
    {
      resolve: `gatsby-source-mongodb`,
      options: {
        connectionString: `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@landofhop-ku9ye.mongodb.net/landofhop?retryWrites=true`,
        dbName: `landofhop`,
        collection: [`beverages`, `institutions`],
        preserveObjectIds: true,
        clientOptions: {
          useUnifiedTopology: true,
        },
      },
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    // {
    //   resolve: 'gatsby-source-s3-image',
    //   options: {
    //     bucketName: 'land-of-hop-images',
    //   },
    // },
    {
      resolve: 'gatsby-source-s3',
      options: {
        aws: {
          accessKeyId: process.env.AWS_ACCESS_KEY_ID,
          secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
        },
        buckets: ['land-of-hop-images'],
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
