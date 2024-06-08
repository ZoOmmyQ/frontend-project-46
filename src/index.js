import { readFileSync } from 'fs';
import { resolve, extname } from 'path';

const getPath = (pathToFile) => resolve(process.cwd(), pathToFile);
const getExtension = (fileName) => extname(fileName).slice(1);
const getData = (file) => parse(readFileSync(file), getExtension(file));

const gendiff = (filepath1, filepath2) => {
  const contentFile1 = getPath(filepath1);
  const contentFile2 = getPath(filepath2);
  const data1 = getData(contentFile1);
  const data2 = getData(contentFile2);
  const tree = createTree(data1, data2);
  return tree;  
};
export default gendiff;