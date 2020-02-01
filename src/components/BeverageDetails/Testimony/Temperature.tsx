import React, { useContext } from 'react';
import { FormattedMessage } from 'gatsby-plugin-intl';
import { BeverageContext } from 'components/BeverageDetails';

import {
	Label,
	Producer,
	SourceGroup,
	SourceItem,
} from 'components/BeverageDetails/elements';

const Temperature: React.FC = () => {
	const { temperature } = useContext(BeverageContext);

	return temperature ? (
		<>
			<dt><FormattedMessage id="beverage.details.temperature" /></dt>
			<dd>
				<SourceGroup>
					{temperature.label && (
						<Label>
							<SourceItem>
								{temperature.label.from === temperature.label.to
									? temperature.label.from
									: `${temperature.label.from}-${temperature.label.to}`
								}
								<FormattedMessage
									id="beverage.details.temperatureUnit"
									values={{ unit: temperature.label.unit }}
								/>
							</SourceItem>
						</Label>
					)}
					{temperature.producer && (
						<Producer>
							<SourceItem>
								{temperature.producer.from === temperature.producer.to
									? temperature.producer.from
									: `${temperature.producer.from}-${temperature.producer.to}`
								}
								<FormattedMessage
									id="beverage.details.temperatureUnit"
									values={{ unit: temperature.producer.unit }}
								/>
							</SourceItem>
						</Producer>
					)}
				</SourceGroup>
			</dd>
		</>
	) : null;
}

export default Temperature;
