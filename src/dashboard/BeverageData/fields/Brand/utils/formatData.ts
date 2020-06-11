import {
  InstitutionInput,
  InstitutionOutput,
} from 'dashboard/utils/types/form';

const formatData = ({
  badge,
  name,
  ownedBy,
  website,
}: InstitutionInput): InstitutionOutput => ({
  badge,
  name: name.map(({ lang, value }) => ({ lang: lang.value, value })),
  ...(ownedBy && { ownedBy: ownedBy.value }),
  ...(website && { website: website.replace(/^https?:\/\//, '') }),
});

export default formatData;
