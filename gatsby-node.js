const path = require('path');
const { paginate } = require('gatsby-awesome-pagination');

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions;
  const typeDefs = `
		type mongodbLandofhopBeverages implements Node @infer {
			badge: String!
			label: Label!
		}

		type Label @infer {
			general: General!
		}

		type General @infer {
			brand: mongodbLandofhopInstitutions! @link(by: "mongodb_id")
		}
	`;

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
    itemsPerPage: 10,
    pathPrefix,
    component: Tiles,
  });
};
