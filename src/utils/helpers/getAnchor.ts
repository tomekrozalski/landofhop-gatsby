import { FieldName, FormName } from 'utils/enums';

type Props = {
  form: FormName;
  name: FieldName;
};

const getAnchor = ({ form, name }: Props) =>
  `${form}-${name}`.toLowerCase().replace('.', '-');

export default getAnchor;
