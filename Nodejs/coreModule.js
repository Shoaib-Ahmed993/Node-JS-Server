const path = require('path');

const fileName = path.join(__filename);
const baseName = path.basename(fileName);
const extName = path.extname(baseName)

console.log(fileName);
console.log(baseName);
console.log(extName);