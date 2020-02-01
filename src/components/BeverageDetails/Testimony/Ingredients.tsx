import React, { useContext } from 'react';
import { FormattedMessage } from 'gatsby-plugin-intl';
import { BeverageContext } from 'components/BeverageDetails';
import { getLangAttr } from 'utils/helpers';

import {
	Label,
	Producer,
	SourceGroup,
	SourceItem,
} from 'components/BeverageDetails/elements';

const Ingredients: React.FC = () => {
	const { ingredientsDescription } = useContext(BeverageContext);

	return ingredientsDescription ? (
		ingredientsDescription.label && (
			<>
				<dt>
					<FormattedMessage
						id={`beverage.details.${ingredientsDescription.label.complete
							? 'ingredients'
							: 'contains'}`}
					/>
				</dt>
				<dd>
					<SourceGroup>
						<Label>
							<SourceItem lang={getLangAttr(ingredientsDescription.label.language)}>
								{ingredientsDescription.label.value}
							</SourceItem>
						</Label>
						{
							ingredientsDescription.producer
							&& ingredientsDescription.label.complete === ingredientsDescription.producer.complete
							&& (
								<Producer>
									<SourceItem lang={getLangAttr(ingredientsDescription.producer.language)}>
										{ingredientsDescription.producer.value}
									</SourceItem>
								</Producer>
							)
						}
					</SourceGroup>
				</dd>
				{
					ingredientsDescription.label && ingredientsDescription.producer && ' / '
				}
				{
					ingredientsDescription.producer
					&& ingredientsDescription.label.complete !== ingredientsDescription.producer.complete
					&& (
						<>
							<dt>
								<FormattedMessage
									id={`beverage.details.${ingredientsDescription.producer.complete
										? 'ingredients'
										: 'contains'}`}
								/>
							</dt>
							<dd>
								<SourceGroup>
									<Producer>
										<SourceItem lang={getLangAttr(ingredientsDescription.producer.language)}>
											{ingredientsDescription.producer.value}
										</SourceItem>
									</Producer>
								</SourceGroup>
							</dd>
						</>
					)
				}
			</>
		)) : null;
}

export default Ingredients;
