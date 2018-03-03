const fs = require('fs');

const string = fs.readFileSync(process.argv[2]).toString();

console.log((string.match(/\n/g) || []).length);
