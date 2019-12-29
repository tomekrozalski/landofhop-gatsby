import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';

import {
	BeverageBase as BeverageBaseType,
	BeverageDetails as BeverageDetailsType
} from 'utils/types';
import { SiteLanguage } from 'utils/enums';
import Layout from '../Layout';
import { Header } from './Content';
import { Aside, BeverageDetailsSeo, Gallery } from '.';

const GridWrapper = styled.article`
  display: grid;
  grid-template-columns: 22rem 1fr 18rem;
  grid-gap: 4rem;
  max-width: var(--size-container-max-width);
  padding: 2rem 1rem;
  margin: 0 auto 6rem auto;
`;

type Props = {
	data: {
		beverage: BeverageDetailsType
	}
	pageContext: {
		intl: {
			language: SiteLanguage
		}
		next: BeverageBaseType
		previous: BeverageBaseType
	}
}

const BeverageDetails: React.FC<Props> = ({
	data: {
		beverage: details
	},
	pageContext: {
		next,
		previous,
	}
}) => (
		<Layout>
			<GridWrapper>
				<Gallery galleryPhoto={details.galleryPhoto} />
				<div>
					{/* <Header details={details} /> */}
				</div>
				<Aside next={next} previous={previous} />
			</GridWrapper>
			{/* <BeverageDetailsSeo details={details} /> */}
		</Layout>
	);

export const query = graphql`
	query BeverageDetails($badge: String!, $brandBadge: String!, $shortId: String!) {
		beverage(
			badge: { eq: $badge },
			brand: {
				badge: {
					eq: $brandBadge
				}
			},
			shortId: { eq: $shortId }
		) {
			badge
			added
			galleryPhoto {
				childImageSharp {
					fixed(width: 220) {
						...GatsbyImageSharpFixed_withWebp_tracedSVG
					}
				}
				publicURL
			}
		}
	}
`;

export default BeverageDetails;
