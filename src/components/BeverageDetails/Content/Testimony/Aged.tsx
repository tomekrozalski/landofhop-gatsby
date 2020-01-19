import React, { useContext } from 'react';
import { FormattedList, FormattedMessage } from 'gatsby-plugin-intl';
import { BeverageContext } from 'components/BeverageDetails';

import {
	Editorial,
	Label,
	Producer,
	SourceGroup,
} from 'components/BeverageDetails/elements';
import AgedItem from './AgedItem';

const Aged: React.FC = () => {
	const { aged, isAged } = useContext(BeverageContext);

	return isAged ? (
		<>
			<dt><FormattedMessage id="beverage.details.aged.name" /></dt>
			<dd>
				<SourceGroup>
					{(isAged && isAged.label) && (
						<Label>
							{(aged && aged.label) ? (
								<FormattedList
									type="conjunction"
									value={aged.label.map((props, i) => <AgedItem {...props} key={i} />)}
								/>
							) : <FormattedMessage id="yes" />}
						</Label>
					)}
					{(isAged && isAged.producer) && (
						<Producer>
							{(aged && aged.producer) ? (
								<FormattedList
									type="conjunction"
									value={aged.producer.map((props, i) => <AgedItem {...props} key={i} />)}
								/>
							) : <FormattedMessage id="yes" />}
						</Producer>
					)}
					{(isAged && isAged.editorial) && (
						<Editorial>
							{(aged && aged.editorial) ? (
								<FormattedList
									type="conjunction"
									value={aged.editorial.map((props, i) => <AgedItem {...props} key={i} />)}
								/>
							) : <FormattedMessage id="yes" />}
						</Editorial>
					)}
				</SourceGroup>
			</dd>
		</>
	) : null;
}

export default Aged;
