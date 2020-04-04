import { FormName } from 'utils/enums';

type Props = {
  formName: FormName;
  name: string;
};

const getAnchor = ({ formName, name }: Props) =>
  `${formName}-${name}`.toLowerCase().replace('.', '-');

export default getAnchor;
