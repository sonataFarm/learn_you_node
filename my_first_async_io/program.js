const fs = require('fs');
const path = process.argv[2];
fs.readFile(path, 'utf8', (err, str) => (
  err || console.log((str.match(/\n/g) || []).length)
));
