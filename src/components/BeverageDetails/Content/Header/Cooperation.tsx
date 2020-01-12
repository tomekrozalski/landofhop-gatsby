import React, { useContext } from 'react';
import { FormattedList, FormattedMessage } from 'gatsby-plugin-intl';
import { BeverageContext } from 'components/BeverageDetails';
import { getLangAttr } from 'utils/helpers';

import {
	Editorial,
	Label,
	Producer,
	SourceGroup,
	SourceItem,
} from 'components/BeverageDetails/elements';

const Cooperation: React.FC = () => {
	const { contract, cooperation } = useContext(BeverageContext);

	return cooperation ? (
		<FormattedMessage
			id="beverage.details.cooperation"
			values={{
				contract: contract ? 'contract' : null,
				cooperation: <SourceGroup>
					{cooperation.label && (
						<Label>
							<FormattedList type="conjunction" value={
								cooperation.label.map(({ name }) => (
									<SourceItem lang={getLangAttr(name.language)} key={name.value}>
										{name.value}
									</SourceItem>
								))
							} />
						</Label>
					)}
					{cooperation.producer && (
						<Producer>
							<FormattedList type="conjunction" value={
								cooperation.producer.map(({ name }) => (
									<SourceItem lang={getLangAttr(name.language)} key={name.value}>
										{name.value}
									</SourceItem>
								))
							} />
						</Producer>
					)}
					{cooperation.editorial && (
						<Editorial>
							<FormattedList type="conjunction" value={
								cooperation.editorial.map(({ name }) => (
									<SourceItem lang={getLangAttr(name.language)} key={name.value}>
										{name.value}
									</SourceItem>
								))
							} />
						</Editorial>
					)}
				</SourceGroup>
			}}
		/>
	) : null;
}

export default Cooperation;
