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
            const coverPhoto = files.find(
              ({ relativePath }) =>
                relativePath ===
                `beverages/${recentInstitution.badge}/${source.badge}/${source.shortId}/cover.jpg`
            );

            if (coverPhoto) {
              return coverPhoto;
            }

            return files.find(
              ({ relativePath }) =>
                relativePath ===
                `beverages/broken-${source.label.container.type}.svg`
            );
          },
        },
      },
      interfaces: ['Node'],
    }),
    `type Label { general: General! }`,
    `type General { brand: mongodbLandofhopInstitutions! @link(by: "mongodb_id") }`,
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
      allMongodbLandofhopBeverages {
        edges {
          node {
            badge
            label {
              general {
                brand {
                  badge
                }
              }
            }
            shortId
          }
        }
      }
    }
  `);

  const items = allbeverages.data.allMongodbLandofhopBeverages.edges;

  paginate({
    createPage,
    items,
    itemsPerPage: 50,
    pathPrefix: ({ pageNumber }) => (pageNumber === 0 ? '/' : '/list'),
    component: Tiles,
  });

  items.forEach(({ node }) => {
    const {
      badge,
      label: {
        general: {
          brand: { badge: brandBadge },
        },
      },
      shortId,
    } = node;

    createPage({
      path: `/details/${shortId}/${brandBadge}/${badge}`,
      component: BeverageDetails,
      context: {
        badge,
        brandBadge,
        shortId,
      },
    });
  });
};
