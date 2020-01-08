import {
	ContainerColor,
	ContainerMaterial,
	ContainerUnit,
	ContainerType,
} from 'utils/enums/beverage';

const initialBeverageData = {
	id: 'test-id',
	shortId: 'test-shortId',
	badge: 'test-badge',
	name: {
		language: null,
		value: 'test-name',
	},
	series: null,
	brand: {
		badge: 'test-brand-badge',
		name: {
			language: null,
			value: 'test-brand-name',
		},
		shortId: 'test-brand-shortId',
		website: null,
		consortium: null,
	},
	cooperation: null,
	contract: null,
	place: null,
	tale: null,
	barcode: null,
	fermentation: null,
	extract: null,
	alcohol: null,
	filtration: null,
	pasteurization: null,
	isAged: null,
	aged: null,
	style: null,
	isDryHopped: null,
	dryHopped: null,
	expirationDate: null,
	ingredientsDescription: null,
	ingredientsList: null,
	smokedMalt: null,
	bitterness: null,
	sweetness: null,
	fullness: null,
	power: null,
	hoppyness: null,
	temperature: null,
	color: null,
	clarity: null,
	container: {
		color: ContainerColor.black,
		material: ContainerMaterial.aluminum,
		unit: ContainerUnit.ml,
		type: ContainerType.bottle,
		value: 10,
		hasCapWireFlip: null,
	},
	price: null,
	photos: null,
	notes: null,
	added: new Date(),
	updated: null,
	coverPhoto: {
		childImageSharp: null,
		publicURL: 'test-coverPhoto-publicURL',
	},
	galleryPhoto: {
		childImageSharp: null,
		publicURL: 'test-galleryPhoto-publicURL'
	}
};

export default initialBeverageData;
