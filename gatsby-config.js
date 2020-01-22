const path = require('path');

require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

const beverageQuery = `{
  allBeverage {
    edges {
      node {
        added
        barcode
        brand {
          name {
            value
            language
          }
          badge
        }
        coverPhoto {
          childImageSharp {
            fluid(maxWidth: 220) {
              src
              srcSetWebp
              srcSet
              srcWebp
            }
          }
          publicURL
        }
        objectID: id
        ingredientsDescription {
          label {
            language
            value
          }
          producer {
            language
            value
          }
        }
        name {
          language
          value
        }
        series {
          label {
            language
            value
          }
          producer {
            language
            value
          }
        }
        shortId
        badge
        tale {
          label {
            language
            value
          }
          producer {
            language
            value
          }
        }
      }
    }
  }
}`;

const queries = [
  {
    query: beverageQuery,
    transformer: ({ data }) => data.allBeverage.edges.map(({ node }) => node),
  },
];

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
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-algolia`,
      options: {
        appId: process.env.ALGOLIA_APP_ID,
        apiKey: process.env.ALGOLIA_API_KEY,
        indexName: process.env.ALGOLIA_INDEX_NAME,
        queries,
        chunkSize: 1000,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
