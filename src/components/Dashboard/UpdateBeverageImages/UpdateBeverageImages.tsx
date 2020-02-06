import React from 'react';
import { graphql } from 'gatsby';
import { FormattedMessage } from 'gatsby-plugin-intl';
import styled from 'styled-components';

import { translateBeverageBasics } from 'utils/helpers';
import { Layout, SEO } from 'components';
import { Image } from 'components/Tiles';
import { BeverageBasics as BeverageBasicsTypes } from 'utils/types';

const Wrapper = styled.div`
  max-width: 70rem;
  margin: 0 auto;
  padding: 4rem 0;
  font: var(--font-weight-light) 1.5rem / 2.5rem var(--font-primary);

  a {
    color: var(--color-success-strong);
    border-bottom: 1px solid var(--color-white);
    transition: border-color var(--transition-default);
  }

  a:hover {
    border-color: var(--color-black);
  }
`;

const Header = styled.h1`
  margin: 1rem 0;
  text-align: center;
`;

type Props = {
	data: {
		beverage: BeverageBasicsTypes
	}
	pageContext: {
		badge: string
		brandBadge: string
		shortId: string
	}
}

const UpdateBeverageImages: React.FC<Props> = ({ data }) => {
	console.log('data', data);

	return (
		<Layout>
			<SEO title="about" />
			<Wrapper>
				<Header>
					<FormattedMessage id="dashboard.updateBeverageImages.title" />
				</Header>
				<p style={{ height: '500px', width: '220px' }}>
					<Image {...translateBeverageBasics(data.beverage)} />
				</p>
			</Wrapper>
		</Layout>
	);
}

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
