// Insert The Object
const translate = {
  label1: 'label1',
  label2: 'label2',
  label3: 'label3',
  label4: 'label4',
  label5: 'label1',
  label6: 'label1',
  label7: 'label1',
};

const fs = require('fs');
const path = require('path');

function excludeAndOrder(objeto) {
  const seenValues = new Set();
  const uniqueEntries = [];

  for (const [key, value] of Object.entries(objeto)) {
    if (typeof value === 'string' && !seenValues.has(value)) {
      seenValues.add(value);
      uniqueEntries.push([key, value]);
    }
  }

  uniqueEntries.sort((a, b) => a[0].localeCompare(b[0]));

  const result = {};
  for (const [key, value] of uniqueEntries) {
    result[key] = value;
  }

  return result;
}

const result = excludeAndOrder(translate);

const jsObjectString =
  'module.exports = {\n' +
  Object.entries(result)
    .map(([key, value]) => `  ${key}: '${value}'`)
    .join(',\n') +
  '\n};\n';

const destinationFolder = path.join(__dirname, 'result');
const filePath = path.join(destinationFolder, 'output.js');

if (!fs.existsSync(destinationFolder)) {
  fs.mkdirSync(destinationFolder);
}

fs.writeFileSync(filePath, jsObjectString, 'utf-8');

console.log(`✅ Arquivo JS salvo em: ${filePath}`);
