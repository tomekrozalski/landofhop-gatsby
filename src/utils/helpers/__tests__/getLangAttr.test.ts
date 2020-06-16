import getLangAttr from '../getLangAttr';

jest.mock('gatsby-plugin-intl', () => ({
  useIntl: jest.fn(() => ({
    locale: 'en',
  })),
}));

test('aaa', () => {
  expect(getLangAttr('en')).toBe(null);
  expect(getLangAttr('pl')).toBe('pl');
});
