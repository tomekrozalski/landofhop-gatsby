import React, { useContext } from 'react';
import { FormattedMessage } from 'gatsby-plugin-intl';
import { BeverageContext } from 'components/BeverageDetails';

import {
	Editorial,
	Label,
	Producer,
	SourceGroup,
	SourceItem,
} from 'components/BeverageDetails/elements';

const Alcohol: React.FC = () => {
	const { alcohol } = useContext(BeverageContext);

	return alcohol ? (
		<>
			<dt><FormattedMessage id="beverage.details.alcohol" /></dt>
			<dd>
				<SourceGroup>
					{alcohol.label && (
						<Label>
							<SourceItem>
								<FormattedMessage id="beverage.details.alcoholValue" values={alcohol.label} />
								{alcohol.label.scope}
							</SourceItem>
						</Label>
					)}
					{alcohol.producer && (
						<Producer>
							<SourceItem>
								<FormattedMessage id="beverage.details.alcoholValue" values={alcohol.producer} />
								{alcohol.producer.scope}
							</SourceItem>
						</Producer>
					)}
					{alcohol.editorial && (
						<Editorial noSeparator>
							<SourceItem>
								{alcohol.editorial.scope}
							</SourceItem>
						</Editorial>
					)}
				</SourceGroup>
			</dd>
		</>
	) : null;
}

export default Alcohol;
