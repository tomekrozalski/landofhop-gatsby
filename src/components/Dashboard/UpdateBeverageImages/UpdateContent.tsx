import React from 'react';
import { FormattedMessage } from 'gatsby-plugin-intl';
import styled from 'styled-components';

import { BeverageBasicsTranslated as BeverageBasicsTranslatedTypes } from 'utils/types';
import { Image } from 'components/Tiles';
import { withAdmin } from '../utils'

const Wrapper = styled.div`
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

const UpdateContent: React.FC<BeverageBasicsTranslatedTypes> = (props) => {
	console.log('props', props);

	return (
		<Wrapper>
			<Header>
				<FormattedMessage id="dashboard.updateBeverageImages.title" />
			</Header>
			<div style={{ height: '500px', width: '220px' }}>
				<Image {...props} />
			</div>
		</Wrapper>
	);
}

export default withAdmin(UpdateContent);
