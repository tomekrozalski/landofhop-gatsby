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

const Aged: React.FC = () => {
	const { aged } = useContext(BeverageContext);

	return aged ? (
		<>
			<dt><FormattedMessage id="beverage.details.aged.name" /></dt>
			<dd>
				<SourceGroup>
					{aged.label && (
						<Label>
							<FormattedList type="conjunction" value={
								aged.label.map(({ previousContent, type, time, wood }) => (
									<SourceItem>
										{time && <FormattedMessage id={`beverage.details.aged.time.${time.unit}`} values={{ value: time.value }} />}
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
															values={{ content }}
														/>)
												} />
											</>
										)}
									</SourceItem>
								))}
							/>
						</Label>
					)}
				</SourceGroup>
			</dd>
		</>
	) : null;
}

export default Aged;
