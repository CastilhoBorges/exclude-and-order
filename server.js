// Insert The Object
const objeto = {};

const fs = require('fs');
const path = require('path');

function excludeAndOrderJson(objeto) {
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

const resultado = excludeAndOrderJson(objeto);

const jsObjectString =
  'module.exports = {\n' +
  Object.entries(resultado)
    .map(([key, value]) => `  ${key}: '${value}'`)
    .join(',\n') +
  '\n};\n';

const pastaDestino = path.join(__dirname, 'resultado');
const caminhoArquivo = path.join(pastaDestino, 'output.js');

if (!fs.existsSync(pastaDestino)) {
  fs.mkdirSync(pastaDestino);
}

fs.writeFileSync(caminhoArquivo, jsObjectString, 'utf-8');

console.log(`✅ Arquivo JS salvo em: ${caminhoArquivo}`);
