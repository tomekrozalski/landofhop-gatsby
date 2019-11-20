const path = require('path');
const { paginate } = require('gatsby-awesome-pagination');

exports.createSchemaCustomization = ({ actions, schema }) => {
  const { createTypes } = actions;
  const typeDefs = [
    schema.buildObjectType({
      name: 'mongodbLandofhopBeverages',
      fields: {
        badge: 'String!',
        label: 'Label!',
      },
      interfaces: ['Node'],
    }),
    schema.buildObjectType({
      name: 'Label',
      fields: {
        general: 'General!',
        bbbbb: {
          type: 'File',
          resolve: (source, args, context) =>
            context.nodeModel.runQuery({
              query: {
                filter: {
                  relativePath: {
                    eq: `beverages/alebrowar/${source.general.barcode}/b16zxw/cover.jpg`,
                  },
                },
              },
              type: 'File',
              firstOnly: true,
            }),
        },
      },
    }),
    `type General implements Node {brand: mongodbLandofhopInstitutions! @link(by: "mongodb_id") }`,
  ];

  createTypes(typeDefs);
};

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const Tiles = path.resolve(`src/components/Tiles/Tiles.jsx`);

  const totalCountResult = await graphql(`
    query AllBeveragesId {
      allMongodbLandofhopBeverages {
        edges {
          node {
            id
          }
        }
      }
    }
  `);

  const pathPrefix = ({ pageNumber }) => (pageNumber === 0 ? '/' : '/list');

  paginate({
    createPage,
    items: totalCountResult.data.allMongodbLandofhopBeverages.edges,
    itemsPerPage: 50,
    pathPrefix,
    component: Tiles,
  });
};
