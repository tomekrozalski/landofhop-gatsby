import React from 'react';
import { graphql } from 'gatsby';

import { Layout, SEO } from 'components';
import { BeverageBase as BeverageBaseTypes } from 'utils/types';
import { Beverage as BeverageTypes } from './utils/types';
import { translateBeverage } from './utils/helpers';
import { UpdateContent } from '.';

type Props = {
	data: {
		beverage: BeverageTypes
	}
	pageContext: {
		badge: string
		brandBadge: string
		next: BeverageBaseTypes
		previous: BeverageBaseTypes
		shortId: string
	}
}

const UpdateBeverageImages: React.FC<Props> = ({ data, pageContext }) => (
	<Layout>
		<SEO title="updateBeverageImages" />
		<UpdateContent
			{...translateBeverage(data.beverage)}
			next={pageContext.next}
			previous={pageContext.previous}
		/>
	</Layout>
);

export const query = graphql`
	query UpdateBeverageImages($badge: String!, $brandBadge: String!, $shortId: String!) {
		beverage(
			badge: { eq: $badge },
			brand: {
				badge: {
					eq: $brandBadge
				}
			},
			shortId: { eq: $shortId }
		) {
			id
			shortId
			badge
			brand {
				badge
				name {
					value
					language
				}
			}
			name {
				value
				language
			}
			photos {
				cover {
					height
					width
				}
				gallery
				outlines {
					cover
					gallery
				}
			}
			container {
				type
			}
    }
  }
`;

export default UpdateBeverageImages;
