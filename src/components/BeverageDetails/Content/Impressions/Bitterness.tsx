import React, { useContext } from 'react';
import { FormattedMessage } from 'gatsby-plugin-intl';

import { BeverageContext } from 'components/BeverageDetails';
import {
	Label,
	Producer,
	SourceGroup,
	SourceItem,
} from 'components/BeverageDetails/elements';

const Bitterness: React.FC = () => {
	const { bitterness } = useContext(BeverageContext);

	return bitterness ? (
		<>
			<dt><FormattedMessage id="beverage.details.bitterness" /></dt>
			<dd>
				<SourceGroup>
					{bitterness.label && (
						<Label>
							<SourceItem>
								{bitterness.label}
							</SourceItem>
						</Label>
					)}
					{bitterness.producer && (
						<Producer>
							<SourceItem>
								{bitterness.producer}
							</SourceItem>
						</Producer>
					)}
				</SourceGroup>
			</dd>
		</>
	) : null;
}

export default Bitterness;
