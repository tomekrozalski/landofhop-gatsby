import React from 'react';
import { FormattedList, FormattedMessage } from 'gatsby-plugin-intl';

import { Aged as AgedTypes } from 'utils/types';
import { SourceItem } from 'components/BeverageDetails/elements';

const AgedItem: React.FC<AgedTypes> = ({ previousContent, type, time, wood }) => (
	<SourceItem>
		{time && <FormattedMessage id={`beverage.details.time.${time.unit}`} values={{ value: time.value }} />}
		{(wood || previousContent) && ' '}
		{wood && <FormattedMessage id={`beverage.details.aged.${type}.${wood}`} />}
		{previousContent && ' '}
		{previousContent && (
			<>
				<FormattedMessage id="beverage.details.aged.previousContent.name" />
				{' '}
				<FormattedList type="conjunction" value={
					previousContent.map(content =>
						<FormattedMessage
							id="beverage.details.aged.previousContent.content"
							key={content}
							values={{ content }}
						/>)
				} />
			</>
		)}
	</SourceItem>
);

export default AgedItem;
