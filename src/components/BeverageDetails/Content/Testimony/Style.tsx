import React, { useContext } from 'react';
import { FormattedMessage } from 'gatsby-plugin-intl';
import { BeverageContext } from 'components/BeverageDetails';
import { getLangAttr } from 'utils/helpers';

import { LanguageValue } from 'utils/types';
import {
	Editorial,
	Label,
	Producer,
	SourceGroup,
	SourceItem,
} from 'components/BeverageDetails/elements';

const Style: React.FC = () => {
	const { style } = useContext(BeverageContext);

	const ItemsWithCommas = ({ language, value }: LanguageValue, i: number) => [
		<SourceItem lang={getLangAttr(language)} key={value}>
			{value}
		</SourceItem>, <React.Fragment key={i}>, </React.Fragment>]

	return style ? (
		<>
			<dt><FormattedMessage id="beverage.details.style" /></dt>
			<dd>
				<SourceGroup>
					{style.label && (
						<Label>
							{style.label.flatMap(ItemsWithCommas).slice(0, -1)}
						</Label>
					)}
					{style.producer && (
						<Producer>
							{style.producer.flatMap(ItemsWithCommas).slice(0, -1)}
						</Producer>
					)}
					{style.editorial && (
						<Editorial>
							{style.editorial.flatMap(ItemsWithCommas).slice(0, -1)}
						</Editorial>
					)}
				</SourceGroup>
			</dd>
		</>
	) : null;
}

export default Style;
