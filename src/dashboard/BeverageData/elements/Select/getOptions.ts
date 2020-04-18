import { SelectType } from 'dashboard/utils/enums';
import { DataLanguage } from 'utils/enums';

type Props = {
  formatMessage: ({ id }: { id: string }) => void;
  type: SelectType;
};

const getOptions = ({ formatMessage, type }: Props) => {
  if (type === SelectType.language) {
    return [
      {
        label: formatMessage({ id: 'language.group.defaults' }),
        options: [
          {
            label: formatMessage({ id: 'language.pl' }),
            value: DataLanguage.pl,
          },
          {
            label: formatMessage({ id: 'language.en' }),
            value: DataLanguage.en,
          },
        ],
      },
      {
        label: formatMessage({ id: 'language.group.others' }),
        options: Object.keys(DataLanguage)
          .filter(
            value => value !== DataLanguage.pl && value !== DataLanguage.en,
          )
          .map(value => ({
            label: formatMessage({ id: `language.${value}` }),
            value,
          })),
      },
    ];
  }

  if (type === SelectType.institution) {
    return [{ label: 'Bum', value: 'bum' }];
  }

  return [];
};

export default getOptions;
