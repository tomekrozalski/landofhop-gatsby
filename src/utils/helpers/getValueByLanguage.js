export default (values, language) =>
  values.find(item => item.language === language) || values[0];
