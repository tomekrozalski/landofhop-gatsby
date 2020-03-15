const path = require('path');
const axios = require('axios');
const { paginate } = require('gatsby-awesome-pagination');

require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

exports.sourceNodes = async ({ actions, createContentDigest }) => {
  const results = await axios.get(`${process.env.API_SERVER}/beverage`);

  results.data.forEach(beverage => {
    const node = {
      ...beverage,
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

  const typeDefs = [
    schema.buildObjectType({
      name: 'Beverage',
      fields: {
        shortId: 'String!',
        badge: 'String!',
        name: '[LanguageValue!]!',
        series: 'Series',
        brand: 'Institution!',
        cooperation: 'Cooperation',
        contract: 'Contract',
        place: 'Place',
        tale: 'Tale',
        barcode: 'String',
        fermentation: 'Fermentation',
        extract: 'Extract',
        alcohol: 'Alcohol',
        filtration: 'Filtration',
        pasteurization: 'Pasteurization',
        isAged: 'isAged',
        aged: 'Aged',
        style: 'Style',
        isDryHopped: 'isDryHopped',
        dryHopped: 'DryHopped',
        expirationDate: 'ExpirationDate',
        ingredientsDescription: 'IngredientsDescription',
        ingredientsList: 'IngredientsList',
        smokedMalt: 'SmokedMalt',
        bitterness: 'Bitterness',
        sweetness: 'Sweetness',
        fullness: 'Fullness',
        power: 'Power',
        hoppyness: 'Hoppyness',
        temperature: 'Temperature',
        color: 'Color',
        clarity: 'Clarity',
        container: 'Container',
        price: 'Price',
        photos: 'Photos',
        notes: 'String',
        added: 'Date!',
        updated: 'Date',
      },
      interfaces: ['Node'],
    }),
    `
      enum DataLanguages {
        de
        cs
        da
        en
        es
        fr
        it
        la
        nl
        pl
        pt
        se
        ua
        none
      }
      type LanguageValue {
        language: DataLanguages
        value: String!
      }
      type Series {
        label: [LanguageValue]
        producer: [LanguageValue]
      }
      type Institution {
        badge: String!
        name: [LanguageValue!]!
        shortId: String!
        website: String
        consortium: [LanguageValue]
      }
      type Cooperation {
        label: [Institution]
        producer: [Institution]
        editorial: [Institution]
      }
      type Contract {
        label: Institution
        producer: Institution
        editorial: Institution
      }
      type Place {
        label: PlaceValues
        producer: PlaceValues
        editorial: PlaceValues
      }
      type PlaceValues {
        city: [LanguageValue]
        country: [LanguageValue]
      }
      type Tale {
        label: [LanguageValue]
        producer: [LanguageValue]
      }
      enum FermentationTypes {
        top
        bottom
        spontaneous
      }
      type Fermentation {
        label: [FermentationTypes]
        producer: [FermentationTypes]
        editorial: [FermentationTypes]
      }
      type Extract {
        label: ExtractValues
        producer: ExtractValues
      }
      enum ExtractRelate {
        weight
        blg
        plato
      }
      enum ExtractUnit {
        percent
        degree
      }
      type ExtractValues {
        relate: ExtractRelate!
        unit: ExtractUnit!
        value: Float!
      }
      type Alcohol {
        label: AlcoholValues
        producer: AlcoholValues
        editorial: AlcoholScope
      }
      enum AlcoholRelate {
        capacity
        abv
      }
      enum AlcoholUnit {
        percent
        degree
      }
      type AlcoholValues {
        relate: AlcoholRelate!
        unit: AlcoholUnit!
        value: Float!
        scope: String
      }
      type AlcoholScope {
        scope: String
      }
      type Filtration {
        label: Boolean
        producer: Boolean
        editorial: Boolean
      }
      type Pasteurization {
        label: Boolean
        producer: Boolean
        editorial: Boolean
      }
      type isAged {
        label: Boolean
		    producer: Boolean
		    editorial: Boolean
      }
      type Aged {
        label: [AgedValues]
        producer: [AgedValues]
        editorial: [AgedValues]
      }
      enum AgedType {
        barrel
        wood
      }
      enum AgedWood {
        beech
        oak
      }
      enum AgedPreviousContent {
        bourbon
        cognac
        porto
        redWine
        rum
        whisky
      }
      type AgedValues {
        type: AgedType
        wood: AgedWood
        time: AgedTime
        previousContent: [AgedPreviousContent!]
      }
      enum AgedTimeUnit {
        day
        month
        year
      } 
      type AgedTime {
        value: Int!
        unit: AgedTimeUnit!
      }
      type Style {
        label: [LanguageValue]
        producer: [LanguageValue]
        editorial: [LanguageValue]
      }
      type isDryHopped {
        label: Boolean
		    producer: Boolean
		    editorial: Boolean
      }
      type DryHopped {
        label: [[LanguageValue!]]
        producer: [[LanguageValue!]]
        editorial: [[LanguageValue!]]
      }
      type ExpirationDate {
        label: ExpirationDateValues
        producer: ExpirationDateValues
      }
      enum ExpirationDateUnit {
        day
        month
        year
      }
      type ExpirationDateValues {
        value: Int!
			  unit: ExpirationDateUnit!
      }
      type IngredientsDescription {
        label: [IngredientsDescriptionValues]
        producer: [IngredientsDescriptionValues]
      }
      type IngredientsDescriptionValues {
        complete: Boolean!
        language: DataLanguages!
        value: String!
      }
      type IngredientsList {
        label: [IngredientsListValues]
        producer: [IngredientsListValues]
      }
      enum IngredientType {
        malt
        hop
        yeast
        appendix
      }
      type IngredientsListValues {
        name: [LanguageValue!]!
        type: IngredientType!
      }
      type SmokedMalt {
        label: Boolean
		    producer: Boolean
      }
      type Bitterness {
        label: Int
		    producer: Int
      }
      type Sweetness {
        label: Int
		    producer: Int
      }
      type Fullness {
        label: Int
		    producer: Int
      }
      type Power {
        label: Int
		    producer: Int
      }
      type Hoppyness {
        label: Int
		    producer: Int
      }
      type Temperature {
        label: TemperatureValues
        producer: TemperatureValues
      }
      enum TemperatureUnit {
        celcius
      }
      type TemperatureValues {
        from: Int!
        to: Int!
        unit: TemperatureUnit!
      }
      type Color {
        editorial: String
      }
      enum ClarityTypes {
        crystalline 
        clear
        opalescent
        misty
        hazy
        muddy
      }
      type Clarity {
        editorial: ClarityTypes
      }
      enum ContainerColor {
        brown
        green
        black
        silver
        transparent
      }
      enum ContainerMaterial {
        glass
        aluminum
      }
      enum ContainerType {
        bottle
        can
      }
      enum ContainerUnit {
        ml
      }
      type Container {
        color: ContainerColor!
        material: ContainerMaterial!
        unit: ContainerUnit!
        type: ContainerType!
        value: Int!
        hasCapWireFlip: Boolean
      }
      enum Currency {
        PLN
        EUR
      }
      type BeveragePrice {
        date: Date!
        value: Float!
        currency: Currency!
      }
      type Price {
        label: [BeveragePrice]
        producer: [BeveragePrice]
        editorial: [BeveragePrice]
      }
      type Cover {
        height: Int
		  	width: Int
      }
      type Outlines {
        cover: String
        gallery: String
      }
      type Photos {
        cap: Boolean
        cover: Cover
        gallery: Int
        outlines: Outlines
      }
    `,
  ];

  createTypes(typeDefs);
};

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const Tiles = path.resolve(`src/components/Tiles/Tiles.tsx`);
  const BeverageDetails = path.resolve(
    `src/components/BeverageDetails/BeverageDetails.tsx`
  );
  const UpdateBeverageImages = path.resolve(
    `src/components/Dashboard/UpdateBeverageImages/UpdateBeverageImages.tsx`
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
  const itemsPerPage = 60;

  paginate({
    createPage,
    items,
    itemsPerPage,
    pathPrefix: ({ pageNumber }) => (pageNumber === 0 ? '/' : '/list'),
    component: Tiles,
  });

  items.forEach(({ next, node, previous }, index) => {
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
        page: Math.floor(index / itemsPerPage) + 1, // @ToDo: I don't use it right now
        previous,
        shortId,
      },
    });

    createPage({
      path: `/update-beverage-images/${shortId}/${brandBadge}/${badge}`,
      component: UpdateBeverageImages,
      context: {
        shortId,
        badge,
        brandBadge,
        next,
        previous,
      },
    });
  });
};
