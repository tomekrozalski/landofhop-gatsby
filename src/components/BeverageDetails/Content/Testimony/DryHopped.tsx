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

const DryHopped: React.FC = () => {
	const { dryHopped, isDryHopped } = useContext(BeverageContext);

	return isDryHopped ? (
		<>
			<dt><FormattedMessage id="beverage.details.dryHopped" /></dt>
			<dd>
				<SourceGroup>
					{(isDryHopped && isDryHopped.label) && (
						<Label>
							{(dryHopped && dryHopped.label) ? (
								<FormattedList
									type="conjunction"
									value={dryHopped.label.map(({ language, value }) => (
										<SourceItem lang={getLangAttr(language)} key={value}>
											{value}
										</SourceItem>
									))}
								/>
							) : <FormattedMessage id="yes" />}
						</Label>
					)}
					{(isDryHopped && isDryHopped.producer) && (
						<Producer>
							{(dryHopped && dryHopped.producer) ? (
								<FormattedList
									type="conjunction"
									value={dryHopped.producer.map(({ language, value }) => (
										<SourceItem lang={getLangAttr(language)} key={value}>
											{value}
										</SourceItem>
									))}
								/>
							) : <FormattedMessage id="yes" />}
						</Producer>
					)}
					{(isDryHopped && isDryHopped.editorial) && (
						<Editorial>
							{(dryHopped && dryHopped.editorial) ? (
								<FormattedList
									type="conjunction"
									value={dryHopped.editorial.map(({ language, value }) => (
										<SourceItem lang={getLangAttr(language)} key={value}>
											{value}
										</SourceItem>
									))}
								/>
							) : <FormattedMessage id="yes" />}
						</Editorial>
					)}
				</SourceGroup>
			</dd>
		</>
	) : null;
}

export default DryHopped;
