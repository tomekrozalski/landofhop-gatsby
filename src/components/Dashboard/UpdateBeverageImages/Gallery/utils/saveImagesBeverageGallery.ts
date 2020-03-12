import { serverCall } from 'utils/helpers';

type Props = {
	badge: string
	brand: string
	files: File[]
	id: string
	shortId: string
	token: string
}

const saveImagesBeverageGallery = ({
	badge,
	brand,
	files,
	id,
	shortId,
	token,
}: Props) => {
	const formData = new FormData();
	formData.append('badge', badge);
	formData.append('brand', brand);
	formData.append('id', id);
	files.forEach((image) => {
		formData.append('image', image);
	});
	formData.append('shortId', shortId);

	return serverCall({
		body: formData,
		formData: true,
		method: 'POST',
		path: 'beverage/gallery',
		token,
	});
}

export default saveImagesBeverageGallery