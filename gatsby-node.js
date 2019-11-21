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
        coverPhoto: {
          type: 'File',
          resolve: (source, args, context) => {
            const institutions = context.nodeModel.getAllNodes({
              type: 'mongodbLandofhopInstitutions',
            });
            const recentInstitution = institutions.find(
              institution =>
                institution.mongodb_id === source.label.general.brand
            );

            const files = context.nodeModel.getAllNodes({ type: 'File' });
            return files.find(
              file =>
                file.relativePath ===
                `beverages/${recentInstitution.badge}/${source.badge}/${source.shortId}/cover.jpg`
            );
          },
        },
      },
      interfaces: ['Node'],
    }),
    schema.buildObjectType({
      name: 'Label',
      fields: {
        general: 'General!',
      },
    }),
    `type General implements Node {brand: mongodbLandofhopInstitutions! @link(by: "mongodb_id") }`,
  ];

  createTypes(typeDefs);
};

// return context.nodeModel.runQuery({
//   query: {
//     filter: {
//       relativePath: {
//         eq: `beverages/${source.badge}/${recentInstitution.badge}/${source.shortId}/cover.jpg`,
//       },
//     },
//   },
//   type: 'File',
//   firstOnly: true,
// });

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
