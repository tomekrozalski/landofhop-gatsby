const path = require('path');
const axios = require('axios');
const { paginate } = require('gatsby-awesome-pagination');

require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

exports.sourceNodes = async ({
  actions,
  createNodeId,
  createContentDigest,
}) => {
  const results = await axios.get(`${process.env.API_SERVER}/beverage`);

  results.data.forEach(beverage => {
    const node = {
      ...beverage,
      id: createNodeId(`beverage-${beverage.id}`),
      internal: {
        type: 'Beverage',
        contentDigest: createContentDigest(beverage),
      },
    };

    actions.createNode(node);
  });
};

exports.createSchemaCustomization = ({ actions, schema }) => {
  const { createTypes } = actions;

  const getPhoto = ({ context, source, type }) => {
    const files = context.nodeModel.getAllNodes({ type: 'File' });

    const photo = files.find(
      ({ relativePath }) =>
        relativePath ===
        `beverages/${source.brand.badge}/${source.badge}/${source.shortId}/${type}.jpg`
    );

    if (photo) {
      return photo;
    }

    return files.find(
      ({ relativePath }) =>
        relativePath === `beverages/broken-${source.container.type}.svg`
    );
  };

  const typeDefs = [
    schema.buildObjectType({
      name: 'LanguageValue',
      fields: {
        language: 'String', // @ToDo: DataLanguage
        value: 'String!',
      },
    }),
    schema.buildObjectType({
      name: 'Beverage',
      fields: {
        shortId: 'String!',
        badge: 'String!',
        name: '[LanguageValue]!',
        coverPhoto: {
          type: 'File',
          resolve: (source, args, context) =>
            getPhoto({ context, source, type: 'cover' }),
        },
        galleryPhoto: {
          type: 'File',
          resolve: (source, args, context) =>
            getPhoto({ context, source, type: 'gallery' }),
        },
      },
      interfaces: ['Node'],
    }),
  ];

  createTypes(typeDefs);
};

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const Tiles = path.resolve(`src/components/Tiles/Tiles.tsx`);
  const BeverageDetails = path.resolve(
    `src/components/BeverageDetails/BeverageDetails.tsx`
  );

  const allbeverages = await graphql(`
    query AllBeverages {
      allBeverage(sort: { fields: added, order: DESC }) {
        edges {
          next {
            badge
            brand {
              badge
            }
            shortId
          }
          node {
            badge
            brand {
              badge
            }
            shortId
          }
          previous {
            badge
            brand {
              badge
            }
            shortId
          }
        }
      }
    }
  `);

  const items = allbeverages.data.allBeverage.edges;

  paginate({
    createPage,
    items,
    itemsPerPage: 50,
    pathPrefix: ({ pageNumber }) => (pageNumber === 0 ? '/' : '/list'),
    component: Tiles,
  });

  items.forEach(({ next, node, previous }) => {
    const {
      badge,
      brand: { badge: brandBadge },
      shortId,
    } = node;

    createPage({
      path: `/details/${shortId}/${brandBadge}/${badge}`,
      component: BeverageDetails,
      context: {
        badge,
        brandBadge,
        next,
        previous,
        shortId,
      },
    });
  });
};
