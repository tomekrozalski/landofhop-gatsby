import { DataLanguage } from 'utils/enums';
import getLangAttr from '../getLangAttr';

jest.mock('gatsby-plugin-intl', () => ({
  useIntl: jest.fn(() => ({
    locale: DataLanguage.en,
  })),
}));

test('aaa', () => {
  expect(getLangAttr(DataLanguage.en)).toBe(null);
  expect(getLangAttr(DataLanguage.pl)).toBe(DataLanguage.pl);
});
