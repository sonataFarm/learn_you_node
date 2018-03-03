const filterFilesExt = require('./filter_files_ext');

const dir = process.argv[2];
const ext = process.argv[3];
filterFilesExt(dir, ext, (err, files) => {
  if (err) console.log('Yo, an error occurred');
  files.forEach(file => console.log(file));
});
