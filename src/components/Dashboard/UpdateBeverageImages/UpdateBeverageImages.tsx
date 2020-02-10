import React from 'react';
import { graphql } from 'gatsby';

import { Layout, SEO } from 'components';
import {
	BeverageBase as BeverageBaseTypes,
	BeverageBasics as BeverageBasicsTypes,
} from 'utils/types';
import { translateBeverageBasics } from 'utils/helpers';
import { UpdateContent } from '.';

type Props = {
	data: {
		beverage: BeverageBasicsTypes
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
			{...translateBeverageBasics(data.beverage)}
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
			}
			container {
				type
			}
    }
  }
`;

export default UpdateBeverageImages;
