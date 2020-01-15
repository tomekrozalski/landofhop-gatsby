import React, { useContext } from 'react';
import { FormattedList, FormattedMessage } from 'gatsby-plugin-intl';
import { BeverageContext } from 'components/BeverageDetails';

import {
	Editorial,
	Label,
	Producer,
	SourceGroup,
	SourceItem,
} from 'components/BeverageDetails/elements';

const Fermentation: React.FC = () => {
	const { fermentation } = useContext(BeverageContext);

	return fermentation ? (
		<>
			<dt><FormattedMessage id="beverage.details.fermentation" /></dt>
			<dd>
				<SourceGroup>
					{fermentation.label && (
						<Label>
							<FormattedList type="conjunction" value={
								fermentation.label.map(type => (
									<SourceItem key={type}>
										<FormattedMessage id={`beverage.fermentationType.${type}`} />
									</SourceItem>
								))
							} />
						</Label>
					)}
					{fermentation.producer && (
						<Producer>
							<FormattedList type="conjunction" value={
								fermentation.producer.map(type => (
									<SourceItem key={type}>
										<FormattedMessage id={`beverage.fermentationType.${type}`} />
									</SourceItem>
								))
							} />
						</Producer>
					)}
					{fermentation.editorial && (
						<Editorial>
							<FormattedList type="conjunction" value={
								fermentation.editorial.map(type => (
									<SourceItem key={type}>
										<FormattedMessage id={`beverage.fermentationType.${type}`} />
									</SourceItem>
								))
							} />
						</Editorial>
					)}
				</SourceGroup>
			</dd>
		</>
	) : null;
}

export default Fermentation;
