import React, { useContext } from 'react';
import { FormattedList, FormattedMessage } from 'gatsby-plugin-intl';
import { BeverageContext } from 'components/BeverageDetails';
import { getLangAttr } from 'utils/helpers';

import {
	Label,
	Producer,
	SourceGroup,
	SourceItem,
} from 'components/BeverageDetails/elements';

const Series: React.FC = () => {
	const { series } = useContext(BeverageContext);

	return series ? (
		<FormattedMessage
			id="beverage.details.series"
			values={{
				series: <SourceGroup>
					{series.label && (
						<Label>
							<FormattedList type="conjunction" value={
								series.label.map(({ language, value }) => (
									<SourceItem lang={getLangAttr(language)} key={value}>
										{value}
									</SourceItem>
								))
							} />
						</Label>
					)}
					{series.producer && (
						<Producer>
							<FormattedList type="conjunction" value={
								series.producer.map(({ language, value }) => (
									<SourceItem lang={getLangAttr(language)} key={value}>
										{value}
									</SourceItem>
								))
							} />
						</Producer>
					)}
				</SourceGroup>
			}}
		/>
	) : null;
}

export default Series;
