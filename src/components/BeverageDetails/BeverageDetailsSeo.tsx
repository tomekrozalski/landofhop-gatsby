import React from 'react';
import { useIntl } from 'gatsby-plugin-intl';

import { BeverageDetails as BeverageDetailsType } from 'utils/types';
import { getValueByLanguage } from 'utils/helpers';
import SEO from 'components/Seo';

type Props = {
	details: BeverageDetailsType
}

const BeverageDetailsSeo: React.FC<Props> = ({ details }) => {
	const { locale } = useIntl();

	const { brand, name } = details.label.general;
	const formattedBrand = getValueByLanguage(brand.name, locale);
	const formattedName = getValueByLanguage(name, locale);

	return (
		<SEO
			title="beverageDetails"
			values={{
				brand: formattedBrand.value,
				name: formattedName.value
			}}
		/>
	);
}

export default BeverageDetailsSeo;
