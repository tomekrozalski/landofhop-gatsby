import { useIntl } from 'gatsby-plugin-intl';
import {
	BeverageBasics as BeverageBasicsTypes,
	BeverageBasicsTranslated as BeverageBasicsTranslatedTypes
} from 'utils/types';
import { getValueByLanguage } from '.';

const translateBeverageBasics = ({ name, brand, ...rest }: BeverageBasicsTypes): BeverageBasicsTranslatedTypes => {
	const { locale } = useIntl();

	return {
		name: getValueByLanguage(name, locale),
		brand: {
			badge: brand.badge,
			name: getValueByLanguage(brand.name, locale),
			shortId: brand.shortId,
			website: brand.website,
			consortium: brand.consortium ? getValueByLanguage(brand.consortium, locale) : null,
		},
		...rest,
	}
};

export default translateBeverageBasics;
