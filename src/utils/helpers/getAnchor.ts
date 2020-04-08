import { FormName } from 'utils/enums';

type Props = {
  form: FormName;
  name: string;
};

const getAnchor = ({ form, name }: Props) =>
  `${form}-${name}`.toLowerCase().replace('.', '-');

export default getAnchor;
