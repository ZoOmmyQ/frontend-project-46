import yaml from 'js-yaml';

const parsers = {
  json: JSON.parse,
  yml: yaml.safeLoad,
};

const getParsedContent = (fileData, extension) => parsers[extension](fileData);

export default getParsedContent;
