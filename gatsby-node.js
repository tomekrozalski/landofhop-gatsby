const path = require('path');
const { paginate } = require('gatsby-awesome-pagination');

exports.createSchemaCustomization = ({ actions, schema }) => {
  console.log('!!!!');

  const { createTypes } = actions;
  const typeDefs = [
    'type mongodbLandofhopBeverages implements Node { badge: String! label: Label! }',
    'type Label implements Node { general: General! }',
    `type General implements Node {brand: mongodbLandofhopInstitutions! @link(by: "mongodb_id") aaa: Cccc }`,
    schema.buildObjectType({
      name: 'Cccc',
      fields: {
        bbbbb: {
          type: 'File',
          resolve: (source, args, context) =>
            context.nodeModel.runQuery({
              query: {
                filter: {
                  name: { eq: 'cover' },
                },
              },
              type: 'File',
              firstOnly: true,
            }),
        },
      },
    }),
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
