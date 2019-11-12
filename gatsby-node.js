const path = require('path');

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
    query SingleBeverage {
      allMongodbLandofhopBeverages {
        totalCount
      }
    }
  `);

  const limit = 10;
  const { totalCount } = totalCountResult.data.allMongodbLandofhopBeverages;
  const listPagesCount = Math.ceil(totalCount / limit);
  const arrayOfListPages = new Array(listPagesCount).fill('');

  createPage({
    path: `/`,
    component: Tiles,
    context: {
      limit,
      skip: 0,
    },
  });

  arrayOfListPages.forEach((item, i) => {
    if (i === 0) {
      return null;
    }

    return createPage({
      path: `/list/${i + 1}`,
      component: Tiles,
      context: {
        limit,
        skip: i * limit,
      },
    });
  });
};
