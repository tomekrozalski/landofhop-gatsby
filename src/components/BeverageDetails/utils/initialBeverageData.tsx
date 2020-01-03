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
	name: [{ value: 'test-name' }],
	brand: {
		badge: 'test-brand-badge',
		name: [{ value: 'test-brand-name' }],
		shortId: 'test-brand-shortId'
	},
	container: {
		color: ContainerColor.black,
		material: ContainerMaterial.aluminum,
		unit: ContainerUnit.ml,
		type: ContainerType.bottle,
		value: 10
	},
	added: new Date(),
	coverPhoto: {
		publicURL: 'test-coverPhoto-publicURL'
	},
	galleryPhoto: {
		publicURL: 'test-galleryPhoto-publicURL'
	}
};

export default initialBeverageData;
