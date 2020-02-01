import React, { useState } from 'react';
import styled from 'styled-components';

import { LanguageValue } from 'utils/types';
import { Servers } from 'utils/enums';
import { Stretcher } from '.';

const Wrapper = styled.div`
	width: 100%;
	height: 100%;
	position: relative;
	overflow: hidden;
`;

const Img = styled.img<{ isLoaded: boolean }>`
	position: absolute;
	top: 0px;
	left: 0px;
	width: 100%;
	height: 100%;
	object-fit: cover;
	object-position: center center;
	opacity: ${({ isLoaded }) => (isLoaded ? 1 : 0)};
	transition: var(--transition-default);
`;

type Props = {
	badge: string
	brand: {
		badge: string
		name: LanguageValue
	}
	height?: number
	name: LanguageValue
	shortId: string
	type: 'cover' | 'container'
	width?: number
}

const CoverImage: React.FC<Props> = ({
	badge,
	brand,
	height,
	name,
	shortId,
	type,
	width,
}) => {
	const [loaded, setLoaded] = useState(false);

	const onPictureLoad = () => {
		setLoaded(true);
	}

	const getPath = (format: 'webp' | 'jpg', size: 1 | 2) => {
		const basicPath = `${Servers.images}/${brand.badge}/${badge}/${shortId}`;

		return type === 'cover'
			? `${basicPath}/${type}/${format}/${size}x.${format}`
			: `${basicPath}/${type}/${format}/${size}x/01.${format}`;
	}


	return (
		<Wrapper>
			<Stretcher height={height} width={width} />
			<img
				src="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='400'%20height='810'%3e%3cpath%20d='M172%2030c-4%200-8%202-9%204l-3%204-1%203%201-1h2c2%203%202%202%204-1l1-2%201%202%202%203c2%201-2%206-4%206l-1%201-1%204-3%2012c-2%2010-1%2013%203%2013l1%201-1%2021c0%2026-2%2043-8%2069l-24%2088c-8%2030-22%2082-24%2094a243%20243%200%20000%2064c15%206%20185%207%20188%202l1-34c0-21-3-40-9-61a3042%203042%200%2001-43-161%20284%20284%200%2001-5-84c2-3%202-5-2-20l-2-8c0-2-1-2-4-2s-5%200-6-2h-2c0%203-18%202-19%200-1-1-1-1-3%201l-4%201h-4l-2-1h-3l-3%201c-2%200-2-1-2-5v-4l-1%203-1%205-4%201c-5%201-6%200-5-6%202-7%204-8%2020-8h22c11%200%2014%201%2017%206l1%204v-3c0-3%200-3%201-2%201%202%201%202%202%200h2c1%202%202%202%202%201v-3l-2-3c0-3-5-3-34-4l-32%201m6%2053c-1%201%200%201%201%201%202%200%202%200%200%201-1%200-2%201-2%204s1%203%204%203c3%201%204%202%203%204l1%203%201%2010c1%209%202%2011%204%2011l2-9c0-6%201-9%202-9l1-6c0-5-1-7-2-5-1%201-1%200-1-1l-1-2%201-2c1-3%201-3-2-3h-12m36%202c-1%202%200%203%201%203l-4%202-5%202v4a349%20349%200%20012%2051l1%202c-1%201%201%202%206%202%207%200%209-2%207-11-2-8-3-35-2-41%201-5%201-6-1-8l-2-5c0-2-3-3-3-1m6%20113a429%20429%200%20000%2063%20203%20203%200%2001-2%2039l1%204%201%204%201%204%201%204-1%204-1-4-1-4v45c1%202%202%201%203-2l2-3v3c0%204%203%2012%206%2014l2%203c0%202%209%201%2011-1l2-3%201-3%202-3%201-2c1%200%202-3%202-15%201-15%201-16-1-20l-2-7-1-5-1-5-1-4c-1%200-3-14-2-20%200-3-1-4-2-4v-5c0-4%200-6-2-8l-3-11-1-8-2-12-3-14-4-14c0-7-2-12-4-12l-2%202m29%2094c-2%202-1%205%201%204l-1%206%201%202%201%203%202%204%201%207c-1%206%200%209%202%207l1%202v3l1%202%201%201%201-2-2-7-1-4v-2l-1-5-2-6-2-3-1-2c0-1%200-2%201-1v-8c-1-2-2-3-3-1m-51%20191c2%200%202%201%201%201l-1%202v1h-1c0%202%201%202%206%202l14%201c2%201%202%201%201-3%200-4-2-6-3-4%200%202-2%203-4%203l-2-1c1-1%200-2-1-2v-1l-6-1c-5%200-5%200-4%202m3%2021l1%203%201%203%202%202c2%201%203%206%201%207-2%200-2%201-1%202l1%206%201%204%201%201-1%201c-3%200-2%202%200%202%202%201%202%201%201%202v4l1%201c6-2%206-2%206%203%201%207%201%207-2%207-3%201-3%201-2%202v1l4%201h6c1-2%202-1%202%202l1%204v-4l-1-5h-2l-3%201c-1%200-2%200-1-1l1-5%201-4%201-5-3-9-1-1c0-1%201-2%202-1h3l-3-1c-1-2-2-3-2-7l-1-4-2-2%201-2v-2a5088%205088%200%2000-2-4l-4-2c-3-3-8-3-7%200m-6%201v2c-1%201-2%200-1-2l-1-1c-2%200-2%201-2%202%201%203%200%205-1%203s-3%201-3%205v1c-1-3-1-2-1%202v7c0%202-6%206-8%206s-4%203-3%203l1%202-2-1-2-1v2l-2%201c-3%200-6%204-6%208l-1%203-2-1-1-3h1l1-10c0-10%200-12%202-17l2-6c-1%200-4%204-4%207-1%201-1%200-1-2l1-3%204-7-2%202-2%201-1-1-1%202v1c-1-1-1%200-1%203v2l-1-3-1%205a60%2060%200%20003%2043h1c1%200%202%200%201%202%200%202%202%205%203%203%200-2%202-1%202%201h1c0-3%204-3%204%200l-1%202v1l2%201c0%202-2%201-5-1l-3-3%208%2010c4%202%203%202-3%202h-2l2%202%205%204c2%202%205%203%205%201-1-2%203-4%204-2l8%203%203%201c1%201%2024%200%2026-1%201-2%201-10-1-10l-1-2c-1-3-3-3-3%200l-1%202-1-4c0-2%200-2-8-1-16%201-25-5-25-16-1-5%200-6%208-3l6%203%202-3c4-3%204-3%206%201%201%203%203%204%203%203%201%200%201-1-1-6l-3-6-3%202-4%203c-2%202-10-1-10-3l1-2%201-1%202-4c2-2%202-2%204-1%202%202%202%202%205-1l5-4v-11l-2-4c-2-1-2-2-1-4%200-2%200-2-1-1h-2l1-1%201-4c0-4-1-5-3-5s-2%200-1%202m-79%204c-6%205-6%2023-1%2031%206%208%2016-1%2016-14%200-12-10-23-15-17m-1%204c-1%202-3%2011-2%2012s3-3%204-7l1-4c1-1%204%202%204%205l3%207c4%206%205%205%204-3l-1-5-3-4c-4-5-7-5-10-1m2%2032v2h1l-1%202-1%203v2c1-1%202%201%201%202h-2l-2-2v2l-1%201h-1c1%202%203%202%203%200l1%201c1%202%201%202%203%200s3-6%201-5v-4c1-2%201-2%201%200l1%202c1-1%201%201%201%204v5h4l3-1h1c1%201%201%201%201-2s-2-5-2-2v3l-1-3v-4c2-2%202-5%201-5l-1%203v3l-2-3-1-3-1%202-1%202v-2l-2-2h-1l-3-1m-10%2031l-1%2039-1%20129c-2%202%200%2011%202%2013l2%205%203%205%202%203%204%203c28%2010%20168%208%20172-3l2-4c5-7%207-25%206-48a972%20972%200%2001-1-74v-30c0-13%200-14-2-14-3-1-2-5%200-5%202%201%202%200%201-1v-5c-1-8-6-14-6-7l-2%204v9c-2%201-2%201-2-1l-2-2c-4%201-7%200-6-1l-1-1-3-1%201%202v1h-1l-7%201a166%20166%200%2000-21%201l-8%201h11l10%201-4%201c-3%200-3%200-1%201%203%200%203%202%200%202s-4%202-1%205l1%203-1%209v7h-6l3%201c5%201%205%201%206%2011%200%206%201%208%202%208l1%204v4h-5c-5%200-6-1-6-3-1-3-1-3-1%200l-1%204h5c5%200%205%200%202%201l-4%201h5l5-1-3%202-3%201h-1c-1-1-1-1-1%201-1%202-9%203-9%201l-7-1c-9%200-8%200-8-6%200-4-2-5-2-2-1%202-1%202-1%200v-3l-1%203-1%203h-17v-4c0-3%200-4%202-4s2-1%202-6l-1-6c-2%201-3%200-3-4v-3h6c4%200%206%201%206%202l1%201c2%200%201-4-1-4-1-1-1-1%201-1l2%202h1v-1l1-1%201%201h2v-1l-1-4c0-3%200-4%202-4l1-5c0-5-2-7-3-4l-3%201c-2%200-2%200%200-2%202%200%203-2%203-2h-1c-2%202-5%201-2-1%201-1%202-2%203-1l2-1c0-2-5-1-7%201l-3%202-2-2-4-2v-3c0-4-3-4-4%200l-2%203-1-1c1-1-1-1-4-1l-6%201h-1c-1-1-2-3-1-4l-1-1-2%201c1%201%200%202-1%202l-1%202v1l-2%202h-5c0-2-3-3-9-3-4%200-9-3-10-6a789%20789%200%2000-34-5c2-2%201-3-5-3-5%200-5%200-1%201l2%201-1%202-2%201-2-1h-3c-3%201-3%201-3-2l2-2c2%200%202%200%200-1h5l8-1h5l4-1c1-1-1-1-5-1s-6%200-5-1v-1l1-1%202%201h1l4-1c2-1%201-1-3-1l-7-1-2-2v1h-9c-4-1-4-1-5%201m32%2039c0%203%200%204%202%204l1%2012-1%2011c-1%200-2%201-2%203-1%204%200%205%2010%205h5v-3l-1-4c-2%200-2-1-2-4%200-4%200-4%203-4l4%201c1%202%200%207-2%207l-1%204v4h17c2-1%200-7-2-7s-2-1-2-11c0-7%201-11%202-11v4l1%204c1%200%203-15%202-16h-13l-17-2h-4v3m88%2014c0%205%200%205-3%206-4%201-5%203-5%207%200%203%200%203%203%203%202%201%203%200%204-1l1-2%201-1c-1-2%200-2%201-2%202%200%202%200%201-1l-2-2%201-4c0-3%200-3%201-1%201%201%201%201%201-3v-4l-1%202v3l-1-3c-1-3-2-3-2%203m-46-2l-5%204c-1%205-2%208%200%2013%201%206%201%206-1%204l-1-1%201%203v1l1%201%201-1c0-2%203-1%204%200l7%202c6%200%207%200%2011-3l3-4c-1-1-8-2-11-1s-8-1-7-3h9c1%201%201%201%200%200s0-1%204-1%205%200%205-2c1-10-11-17-21-12m-34%2036c-1%201%2031%203%2063%204a2128%202128%200%200140-2c1-1%200-1-4-1l-6-1-9-1a728%20728%200%2001-84%201m16%2016l-1%203h1c0-2%200-2%201%200v3c0%202%203%203%204%202h1l9%201h8l-1-3c0-2%200-2%201-1h1c0-2-3-5-4-3h-8l-2-1c1-1%200-1-3-1l-4-1c0-2-2-1-3%201m26%202l-1%203c0%203%205%205%206%203h1l9%201h10v-3c-1-3-3-7-3-4l-2%201h-13l-2-1h-5'%20fill='%23d3d3d3'%20fill-rule='evenodd'/%3e%3c/svg%3e"
				alt=""
				style={{
					position: "absolute",
					top: 0,
					left: 0,
					width: '100%',
					height: '100%',
					objectFit: 'cover',
					objectPosition: 'center center',
					opacity: 1,
					transition: 'var(--transition-default)'
				}}
			/>
			{typeof window !== `undefined` ? (
				<picture>
					<source
						type="image/webp"
						srcSet={`${getPath('webp', 1)} 1x, ${getPath('webp', 2)} 2x`}
					/>
					<source srcSet={`${getPath('jpg', 1)} 1x, ${getPath('jpg', 2)} 2x`} />
					<Img
						srcSet={`${getPath('jpg', 1)} 1x, ${getPath('jpg', 2)} 2x`}
						src={getPath('jpg', 1)}
						alt={loaded ? `${name.value}, ${brand.name.value}` : ''}
						onLoad={onPictureLoad}
						isLoaded={loaded}
					/>
				</picture>
			) : (
					<noscript
						dangerouslySetInnerHTML={{
							__html: `<picture><img src="${getPath('jpg', 1)}" alt="" style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center;" /></picture>`,
						}}
					/>
				)}
		</Wrapper >
	)
}

export default CoverImage;
