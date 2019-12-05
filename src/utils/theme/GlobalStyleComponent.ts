import { createGlobalStyle } from '@nfront/global-styles';

import { globalStyle, normalize } from './css';

const GlobalStyleComponent = createGlobalStyle`
  ${normalize}
  ${globalStyle}
`;

export default GlobalStyleComponent;
