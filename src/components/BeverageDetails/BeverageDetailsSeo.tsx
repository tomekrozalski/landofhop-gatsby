import React, { useContext } from 'react';
import { useIntl } from 'gatsby-plugin-intl';

import { getValueByLanguage } from 'utils/helpers';
import SEO from 'components/Seo';
import { BeverageContext } from 'components/BeverageDetails';

const BeverageDetailsSeo: React.FC = () => {
	const { locale } = useIntl();
	const { brand, name } = useContext(BeverageContext);

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
